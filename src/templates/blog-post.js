import React from 'react';
import Helmet from 'react-helmet';
import BackIcon from 'react-icons/lib/fa/chevron-left';
import ForwardIcon from 'react-icons/lib/fa/chevron-right';
import rehypeReact from "rehype-react"
import Img from "gatsby-image";
import styled from 'styled-components'
import {Row, Col, Button, Tag} from 'antd'
import TagColors from '../components/Tag_Colors'

import Link from '../components/Link';
import Tags from '../components/Tags';

import '../css/blog-post.css';

import 'antd/lib/grid/style/index.css';
import 'antd/lib/tag/style/index.css';
import 'antd/lib/button/style/index.css';

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
        <Row gutter={16}>
          <Col sm={24} md={12}>
            <h1>
              {post.frontmatter.full_title || post.frontmatter.title}
            </h1>
            <h3>
              {post.frontmatter.authors && post.frontmatter.authors.join(', ')}
            </h3>
            <div style={{paddingBottom: 10}}>
              {post.frontmatter.conference && <Tag color={TagColors[post.frontmatter.conference.split(' ')[0].toUpperCase()] || "cyan"}>  {post.frontmatter.conference}
              </Tag>}
              {post.frontmatter.award && 
                <Tag color="gold">{post.frontmatter.award}</Tag>}
              {post.fields.docPath && 
               <a href={post.fields.docPath} target="_blank">PDF</a>}
            </div>
          </Col>
          <Col sm={24} md={12}>
            {post.fields.imgPath && <Img sizes={post.fields.imgPath.childImageSharp.sizes} />}
          </Col>
        </Row>
        <div className="blog-post-content">
          {renderAst(post.htmlAst)}
        </div>
        {bibtex && 
          <div >
            <h4>Citation</h4>
            <Citation>{citation}</Citation>
            <h4>Bibtex</h4>
            <Citation>{bibtex}</Citation>
          </div>
        }
        <Tags list={post.frontmatter.tags || []} />
      </div>
    </div>
  );
}

/** Navigation links between pages

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

**/

export const pageQuery = graphql`
  query BlogPostByPath($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        tags
        title
        full_title
        authors
        video
        award
        conference
      }
      fields {
        slug
        docPath
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
