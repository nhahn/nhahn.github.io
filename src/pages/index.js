import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components'
import {Row, Col, Tag} from 'antd'
import {find} from 'lodash'
import Img from "gatsby-image";
import moment from 'moment';
//import { Card, Icon, Avatar } from 'antd';
//const { Meta } = Card;
import { rhythm } from "../utils/typography"
import TagColors from '../components/Tag_Colors'
import { graphql } from "gatsby"

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

import 'antd/lib/grid/style/index.css';
import 'antd/lib/tag/style/index.css';

const Time = styled.time`
  font-size: 0.5em; /* change icon size */
  display: inline-block;
  position: relative;
  width: 7em;
  height: 7em;
  background-color: #fff;
  border-radius: 0.6em;
  box-shadow: 0 1px 0 #bdbdbd, 0 2px 0 #fff, 0 3px 0 #bdbdbd, 0 4px 0 #fff, 0 5px 0 #bdbdbd, 0 0 0 1px #bdbdbd;
  margin-right: 10px;
  overflow: hidden;

  * {
    display: block;
    width: 100%;
    font-size: 1em;
    font-weight: bold;
    font-style: normal;
    text-align: center;
  }

  strong {
    position: absolute;
    top: 0;
    padding: 0.4em 0;
    color: #fff;
    background-color: #fd9f1b;
    border-bottom: 1px dashed #f37302;
    box-shadow: 0 2px 0 #fd9f1b;
  }

  em {
    position: absolute;
    bottom: 0.3em;
    color: #fd9f1b;
  }

  span {
    font-size: 2.8em;
    letter-spacing: -0.05em;
    padding-top: 0.8em;
    color: #2f2f2f;
  }
`;

const StyledImg = styled(Img)`
  @media only screen and (min-width: 769px) {
    margin-top: -50px;
  }
`

export default function Index({ data }) {
  const { edges: posts } = data.markdown;
  const events = find(data.yaml.edges, (edge) => !!edge.node.events).node.events
  const news = find(data.yaml.edges, (edge) => !!edge.node.news).node.news

  return (
    <div>
      <Row gutter={32}>
        <Col xl={18}>
          <h2>Bio</h2>
          <Row gutter={32}>
            <Col md={8}>
              <Img fluid={data.headshot.childImageSharp.fluid} alt="Nathan's headshot"/>
            </Col>
            <Col md={16}>
              <p>
                I am currently a PhD student in the Carnegie Mellon <a href="https://hcii.cmu.edu" target="_blank" rel="noopener noreferrer">Human Computer Interaction Institute (HCII)</a> working under <a href="http://kittur.org" target="_blank" rel="noopener noreferrer">Niki Kittur</a>. My current research focuses on the topic of Sensemaking &mdash; or how individuals come to an understanding of a difficult subject from a large set of information. This is normally in the context of online search or information seeking &mdash; such as planning a large vacation, learning about a medical disease, or investigating a new hobby. In our lab, we've built systems to help users while they're sensemaking, using techniques such as crowdsourcing, visualization, and natural language processing.
              </p>
            </Col>
          </Row>
          <h2>Selected Work</h2>
          <div>
            {posts
              .filter(post => post.node.frontmatter.title.length > 0)
              .map(({ node: post }) => {
                return (
                  <div key={post.id} style={{marginBottom: rhythm(3/2)}}>
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
                        <StyledImg sizes={post.fields.imgPath.childImageSharp.sizes} />
                      </Col>
                      <Col md={16}>
                        <p style={{margin: 0}}>
                          {post.frontmatter.summary}
                        </p>
                        <div>
                          <Tag color={TagColors[post.frontmatter.conference.split(' ')[0].toUpperCase()] || "cyan"}>{post.frontmatter.conference}</Tag>
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
        </Col>
        <Col xl={6}>
          <Row>
            <Col sm={24} md={12} lg={12} xl={24}>
              <h3>Recent Activities</h3>
              {events.slice(0,4).map((event, idx) => {
                let date = moment(event.date_start);

                return (<div key={idx} style={{display: 'flex', marginBottom: 10, alignItems: 'center'}}>
                  <Time datetime={event.date_start} className="icon">
                    <em>{date.format('YYYY')}</em>
                    <strong>{date.format('MMMM')}</strong>
                    <span>{date.format('D')}</span>
                  </Time>
                  <h4 style={{margin: 0}}>{event.name}</h4>
                </div>)
              })}
            </Col>
            <Col sm={24} md={12} lg={12} xl={24}>
              <h3>Recent Press</h3>
              {news.map((article, idx) => {
                return (<div key={idx}>
                  <h4 style={{marginBottom: 0}}><a target="_blank" href={article.url} rel="noopener noreferrer">{article.title}</a></h4>
                  <em>{article.venue} &mdash; {moment(article.date).format('MMM YY\'')}</em>
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
    headshot: file(
      relativePath: { regex: "/headshot.jpeg/" }
    ) {
      childImageSharp {
        fluid(toFormat: PNG) {
          ...GatsbyImageSharpFluid
        }
      }
    }
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
