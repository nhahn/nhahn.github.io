import React from 'react';
import GatsbyLink from 'gatsby-link';
import Helmet from 'react-helmet';

import Link from '../components/Link';

import '../css/index.css';

export default function Research({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div className="blog-posts">
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          return (
            <div className="blog-post-preview" key={post.id}>
              <h1 className="title">
                <GatsbyLink to={post.fields.slug}>
                  {post.frontmatter.title}
                </GatsbyLink>
              </h1>
              <h2 className="date">
                {post.frontmatter.date}
              </h2>
              <p>
                {post.excerpt}
              </p>
              <Link to={post.fields.slug}>Read more</Link>
            </div>
          );
        })}
    </div>
  );
}

export const pageQuery = graphql`
  query ResearchQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date]}
      filter: {
        fields: {
          category: {
            eq: "research"
          }
        }
      }
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          fields {
            slug
          }
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
