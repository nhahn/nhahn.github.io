const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem')
const fsExtra = require('fs-extra');
const fs = require('fs')
const request = require('request-promise-native')

const createTagPages = (createPage, edges) => {
  const tagTemplate = path.resolve(`src/templates/tags.js`);
  const posts = {};

  edges
    .forEach(({ node }) => {
      if (node.frontmatter.tags) {
        node.frontmatter.tags
          .forEach(tag => {
            if (!posts[tag]) {
              posts[tag] = [];
            }
            posts[tag].push(node);
          });
      }
    });

  createPage({
    path: '/tags',
    component: tagTemplate,
    context: {
      posts
    }
  });

  Object.keys(posts)
    .forEach(tagName => {
      const post = posts[tagName];
      createPage({
        path: `/tags/${tagName}`,
        component: tagTemplate,
        context: {
          posts,
          post,
          tag: tagName
        }
      })
    });
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);
  return graphql(`{
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          html
          id
          timeToRead
          frontmatter {
            date
            tags
            title
            doi
          }
          fields {
            slug
          }
        }
      }
    }
  }`)
  .then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges;

    createTagPages(createPage, posts);

    const createPostPage = (node, index, context = {}) => {
      const prev = index === 0 ? false : posts[index - 1].node;
      const next = index === posts.length - 1 ? false : posts[index + 1].node;
      createPage({
        path: node.fields.slug,
        component: blogPostTemplate,
        context: {
          slug: node.fields.slug,
          prev,
          next,
          ...context
        }
      });
    }
    // Create pages for each markdown file.
    let postPromises = posts.map(({ node }, index) => {

      if (node.frontmatter.doi) {
        let bibtexOptions = {
            url: `http://doi.org/${node.frontmatter.doi}`,
            headers: {
              'Accept': 'application/x-bibtex'
            }
        }

        let citationOptions = {
            url: `http://doi.org/${node.frontmatter.doi}`,
            headers: {
              'Accept': 'text/x-bibliography'
            }
        }
        return Promise.all([
          request(bibtexOptions),
          request(citationOptions)
        ]).then(([bibtex, citation]) => {
          createPostPage(node, index, {bibtex, citation});
          return node;
        }).catch(err => {
          console.error(`Error fetching DOI: ${err.message}`);
          createPostPage(node, index);
          return node;
        })
      } else {
        createPostPage(node, index);
        return node;
      }
    });

    return Promise.all(postPromises);
  })
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
    createNodeField({
      name: `category`,
      node,
      value: value.split('/')[1],
    })

    //Find the image or document
    let dir = path.join(process.cwd(), 'src/pages', value),
        files=fs.readdirSync(dir), doc, img;

    files.forEach(file => {
      let fullPath = path.join(value, file),
          extension = path.extname(file);
      if (extension == '.pdf')
        doc = fullPath;
      if (extension == '.png' || extension == '.jpg' || extension == '.jpeg')
        img = file;
    })

    if (doc) {
      createNodeField({
        name: `docPath`,
        node,
        value: doc,
      })
    }
    if (img) {
      createNodeField({
        name: `imgPath`,
        node,
        value: img,
      })
    }
  } else if (node.internal.type === 'File' && node.internal.mediaType === `application/pdf`) {
    let source = `${__dirname}/src/pages`;
    let destination = ''
    if (node.dir.includes(source)) {
      const relativeToDest = node.dir.replace(source, '');
      const newPath = path.join(
          process.cwd(),
          'public',
          destination,
          relativeToDest,
          node.base
      );

      fsExtra.copy(node.absolutePath, newPath, err => {
        if (err) {
          console.error('Error copying file', err);
        }
      });
    }
  }
}
