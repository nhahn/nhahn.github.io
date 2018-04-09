import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import styled from 'styled-components'
import {Row, Col} from 'antd'
//import { Card, Icon, Avatar } from 'antd';
//const { Meta } = Card;

import 'antd/lib/grid/style/index.css';

const Home = styled.div`
  max-width: 1300px;
`

//Things to put on here:
//Bio (Research, Personal)
//Contact Info
//Schedule a Meeting
//Office Location
//Calendar / Recent Activities
//Github / LinkdIn Links / Google Scholar Link
//Popular collaborators
//News

//Resume Link?

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <Home>
      <Row gutter={32}>
        <Col lg={6}>

        </Col>
        <Col lg={12}>
          <h2>Selected Work</h2>
          <div>
            {posts
              .filter(post => post.node.frontmatter.title.length > 0)
              .map(({ node: post }) => {
                return (
                  <div key={post.id}>
                    <h1>
                      <Link to={post.fields.slug}>
                        {post.frontmatter.title}
                      </Link>
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
        </Col>
        <Col lg={6}>
          Event info?
        </Col>
      </Row>
    </Home>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: {
          selected: {eq: true}
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
            summary
            tags
          }
        }
      }
    }
  }
`;
