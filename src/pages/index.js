import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import styled from 'styled-components'
import {Row, Col, Tag} from 'antd'
import {find} from 'lodash'
import Img from "gatsby-image";
//import { Card, Icon, Avatar } from 'antd';
//const { Meta } = Card;
import { rhythm, options } from "../utils/typography" 
import TagColors from '../components/Tag_Colors'

import 'antd/lib/grid/style/index.css';
import 'antd/lib/tag/style/index.css';

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
  const { edges: posts } = data.markdown;
  const events = find(data.yaml.edges, (edge) => !!edge.node.events).node.events
  const news = find(data.yaml.edges, (edge) => !!edge.node.news).node.news

  return (
    <div>
      <Row gutter={32}>
        <Col xl={18}>
          <h2>Bio</h2>
          <div>
            <p>
              I'm a current PhD student in the Carnegie Mellon <a href="https://hcii.cmu.edu" target="_blank">Human Computer Interaction Institute (HCII)</a> working under <a href="http://kittur.org" target="_blank">Niki Kittur</a>. My current research focuses on the topic of Sensemaking &mdash; or how individuals come to an understanding of a difficult subject from a large set of information. This is normally in the context of online search or information seeking &mdash; such as planning a large vacation, learning about a medical disease, or investigating a new hobby. In our lab, we've build a number of interventions to assist users while they're sensemaking, using techniques such as crowdsourcing, visualization, and natural language processing. 
            </p>
          </div>
          <h2>Selected Work</h2>
          <div>
            {posts
              .filter(post => post.node.frontmatter.title.length > 0)
              .map(({ node: post }) => {
                return (
                  <div key={post.id}>
                    <Row gutter={32}>
                      <Col md={{span: 16, offset: 8}} sm={{span: 24}}>
                        <h3 style={{margin: 0}}>
                          <Link to={post.fields.slug}>
                            {post.frontmatter.title}
                          </Link>
                        </h3>
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
                          <Tag color={TagColors[post.frontmatter.conference.split(' ')[0].toUpperCase()] || "cyan"}>{post.frontmatter.conference}</Tag>
                          {post.frontmatter.award && 
                            <Tag color="gold">{post.frontmatter.award}</Tag>}
                          {post.fields.docPath && 
                           <a href={post.fields.docPath} target="_blank">PDF</a>}
                        </div>
                      </Col>
                    </Row>              
                  </div>
                );
              })}
          </div>
        </Col>
        <Col xl={6}>
          <Row>
            <Col sm={24} md={12} lg={12} xl={24}>
              <h4>Recent Activities</h4>
              {events.map((event, idx) => {
                return (<div key={idx}>
                  <b>{event.name}</b>
                </div>)
              })}
            </Col>
            <Col sm={24} md={12} lg={12} xl={24}>
              <h4>Recent Press</h4>
              {news.map((article, idx) => {
                return (<div key={idx}>
                  <b>{article.title}</b>
                </div>)
              })}
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    markdown: allMarkdownRemark(
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
    yaml: allDataYaml {
      edges {
        node {
          events {
            name
            date_start
            date_end
          }
          news {
            title
            date
            venue
            url
          }
        }
      }
    }
  }
`;
