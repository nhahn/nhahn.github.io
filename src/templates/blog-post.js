import React from 'react';
import Helmet from 'react-helmet';
import BackIcon from 'react-icons/lib/fa/chevron-left';
import ForwardIcon from 'react-icons/lib/fa/chevron-right';
import rehypeReact from "rehype-react"
import Img from "gatsby-image";
import styled from 'styled-components'

import Link from '../components/Link';
import Tags from '../components/Tags';

import '../css/blog-post.css';

const Citation = styled.pre`
  tab-size: 4;
  background-color: white;
  border: 1px dashed #a7a7a7;
  padding: 10px;
  word-wrap: break-word;
  white-space: pre-wrap;
  line-height: 1rem;
`

const renderAst = new rehypeReact({
  createElement: React.createElement,
  //components: { "my-component": MyComponent }
}).Compiler

export default function Template({ data, pathContext }) {
  const { markdownRemark: post } = data;
  const { next, prev, bibtex, citation } = pathContext;
  
  //TODO for unpublished: <meta name="robots" content="noindex,nofollow>
  
  return (
    <div className="blog-post-container">
      <Helmet title={`${post.frontmatter.title} | Nathan Hahn`}/>
      <div className="blog-post">
        {post.fields.imgPath && <Img sizes={post.fields.imgPath.childImageSharp.sizes} />}
        <h1 className="title">
          {post.frontmatter.title}
        </h1>
        <h2 className="date">
          {post.frontmatter.date}
        </h2>
        <div className="blog-post-content">
          {renderAst(post.htmlAst)}
        </div>
        {bibtex && 
          <div>
            <h4>Citation</h4>
            <Citation>{citation}</Citation>
            <h4>Bibtex</h4>
            <Citation>{bibtex}</Citation>
          </div>
        }
        <Tags list={post.frontmatter.tags || []} />
        <div className="navigation">
          {prev &&
            <Link className="link prev" to={prev.fields.slug}>
              <BackIcon /> {prev.frontmatter.title}
            </Link>}
          {next &&
            <Link className="link next" to={next.fields.slug}>
              {next.frontmatter.title} <ForwardIcon />
            </Link>}
        </div>
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        tags
        title
      }
      fields {
        slug
        imgPath {
          childImageSharp {
            sizes(maxWidth: 800) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`;
