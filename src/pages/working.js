import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import {Row, Col, Tag} from 'antd'
import Img from "gatsby-image";
//import { Card, Icon, Avatar } from 'antd';
//const { Meta } = Card;
import { rhythm } from "../utils/typography"
import TagColors from '../components/Tag_Colors'
import { graphql } from "gatsby"

import 'antd/lib/grid/style/index.css';
import 'antd/lib/tag/style/index.css';

export default function Working({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div>
      <Helmet title={`In Progress | Nathan Hahn`}/>
      <div>
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <div key={post.id}>
                <Row gutter={32}>
                  <Col md={{span: 16, offset: 8}} sm={{span: 24}}>
                    <h2 style={{margin: 0}}>
                      <Link to={post.fields.slug}>
                        {post.frontmatter.title}
                      </Link>
                    </h2>
                    <h6 style={{margin: '0px 0px 10px 0px'}}>{post.frontmatter.authors.join(', ')}</h6>
                  </Col>
                </Row>
                <Row gutter={32}>
                  <Col md={8}>
                    <Img sizes={post.fields.imgPath.childImageSharp.sizes} />
                  </Col>
                  <Col md={16}>
                    <p style={{margin: 0}}>
                      {post.frontmatter.summary}
                    </p>
                    <div style={{marginBottom: rhythm(1)}}>
                      {post.frontmatter.conference &&
                        <Tag color={TagColors[post.frontmatter.conference.split(' ')[0].toUpperCase()] || "cyan"}>{post.frontmatter.conference}</Tag>
                      }
                      {post.frontmatter.award &&
                        <Tag color="gold">{post.frontmatter.award}</Tag>}
                      {post.fields.docPath &&
                        <a href={post.fields.docPath} target="_blank" rel="noopener noreferrer">PDF</a>}
                    </div>
                  </Col>
                </Row>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query WorkingQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date]}
      filter: {
        frontmatter: {
          working: {
            eq: true
          }
        }
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
            imgPath {
              childImageSharp {
                sizes(maxWidth: 300) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
            docPath
          }
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            summary
            tags
            authors
            conference
            award
          }
        }
      }
    }
  }
`;
