import React from 'react';
import Helmet from 'react-helmet';
import {Row, Col} from 'antd'
//import { Card, Icon, Avatar } from 'antd';
//const { Meta } = Card;

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

export default function Resume({ data }) {

  return (
    <div>
      <Helmet title={`Resume | Nathan Hahn`}/>
      <Row gutter={32}>
        <Col xl={24} style={{display: 'flex', justifyContent: 'center'}}>
          <div style={{maxWidth: 900, width: '100%'}}>
            <a href="/CV.pdf" download>Download CV</a>
            <iframe src="/CV.pdf" dataautoheight="true" title="Resume" dataaspectratio="0.772727272727273" scrolling="no" frameBorder="0" style={{height: 800, width: '100%'}}/>
          </div>
        </Col>
      </Row>
    </div>
  );
}
