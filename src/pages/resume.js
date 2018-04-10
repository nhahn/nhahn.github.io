import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import styled from 'styled-components'
import {Row, Col} from 'antd'
import {find} from 'lodash'
import Img from "gatsby-image";
//import { Card, Icon, Avatar } from 'antd';
//const { Meta } = Card;
import { rhythm, options } from "../utils/typography" 

import 'antd/lib/grid/style/index.css';

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

export default function Resume({ data }) {

  return (
    <div>
      <Helmet title={`Resume | Nathan Hahn`}/>
      <Row gutter={32}>
        <Col xl={24} style={{display: 'flex', justifyContent: 'center'}}>
          <div style={{maxWidth: 900, width: '100%'}}>
            <a href="/CV.pdf" download>Download CV</a>
            <iframe src="/CV.pdf" dataautoheight="true" dataaspectratio="0.772727272727273" scrolling="no" frameBorder="0" style={{height: 800, width: '100%'}}/>
          </div>
        </Col>
      </Row>
    </div>
  );
}