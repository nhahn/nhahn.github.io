import React from 'react'
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import {rhythm, options} from "../utils/typography" 
import styled from 'styled-components'
import {Row, Col, Icon} from 'antd'

import 'antd/lib/grid/style/index.css';
import 'antd/lib/style/core/iconfont.less'
import 'antd/lib/style/themes/default.less'

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
            <a href="https://github.com/nhahn" target="_blank" style={{paddingRight: 15, color:'white'}}><Icon type="github"/></a>
            <a href="https://www.linkedin.com/in/nphahn/" target="_blank" style={{color:'white'}}><Icon type="linkedin"/></a>
          </span>
        </Col>
        <Col>
          <Text><a href="http://nhahn.org">Nathan Hahn</a> -- Copyright &copy; 2018</Text><br/>
          <Text>Built with <a href="https://reactjs.org" target="_blank">React</a> and <a href="https://www.gatsbyjs.org/" target="_blank">Gatsby</a></Text>
          <Text>Header animation from Chris Johnson <a href="https://codepen.io/jhnsnc/pen/Mprdaa" target="_blank">on Codepen</a></Text>
        </Col>
      </Row>

    </Container>
         
    )
}

export default Footer;