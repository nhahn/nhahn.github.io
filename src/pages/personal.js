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

export default function Personal({ data }) {

  return (
    <div>
      <Helmet title={`Side Projects | Nathan Hahn`}/>
      <h1>Coming Soon!</h1>
    </div>
  );
}