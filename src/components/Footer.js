import React from 'react'
import {rhythm} from "../utils/typography"
import styled from 'styled-components'
import {Row, Col, Icon} from 'antd'

import 'antd/lib/grid/style/index.css';

const Container = styled.div`
  background-color: #14545d;
  color: white;
  padding: ${rhythm(3/4)} ${rhythm(1.75)} ;
  a {
    color: #84aff0;
  }
`

const Text = styled.h6`
  color: white;
  margin: 0;
`

const Header = styled.h3`
  margin-top: 0.8em;
  margin-bottom: 0px;
  color: white;
`

const Footer = () => {
  return (
    <Container>
      <Row type="flex" justify="space-between" style={{alignItems: 'center'}}>
        <Col style={{marginRight: 10, marginBottom: 10}}>
          <Header>Contact Information</Header>
          <Text><a href="mailto:nhahn@cs.cmu.edu">nhahn@cs.cmu.edu</a></Text>
          <Header>Find Me On</Header>
          <span style={{fontSize: '1.5em'}}>
            <a href="https://scholar.google.com/citations?user=DRg2HbgAAAAJ&hl=en&oi=sra" target="_blank" rel="noopener noreferrer" style={{paddingRight: 15, color:'white'}}><Icon type="google"/></a>
            <a href="https://github.com/nhahn" target="_blank" rel="noopener noreferrer" style={{paddingRight: 15, color:'white'}}><Icon type="github"/></a>
            <a href="https://www.linkedin.com/in/nphahn/" target="_blank" rel="noopener noreferrer" style={{paddingRight: 15, color:'white'}}><Icon type="linkedin"/></a>
            <a href="https://instagram.com/dabbledork" target="_blank" rel="noopener noreferrer" style={{paddingRight: 15, color:'white'}}><Icon type="instagram"/></a>
          </span>
        </Col>
        <Col>
          <Text><a href="http://nhahn.org">Nathan Hahn</a> -- Copyright &copy; 2018</Text><br/>
          <Text>Built with <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">React</a> and <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">Gatsby</a></Text>
          <Text>Header animation from Chris Johnson <a href="https://codepen.io/jhnsnc/pen/Mprdaa" target="_blank" rel="noopener noreferrer">on Codepen</a></Text>
        </Col>
      </Row>

    </Container>

    )
}

export default Footer;
