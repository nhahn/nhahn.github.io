import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Header from '../components/header';
import Footer from '../components/footer';
import { rhythm, options } from "../utils/typography" 
import styled from 'styled-components'

import 'antd/lib/style/core/motion.less'
import 'antd/lib/style/core/iconfont.less'
import 'antd/lib/style/themes/default.less'

const Body = styled.div`
  max-width: 1300px;
  margin: ${rhythm(1/2)} auto;
  padding: 0px ${rhythm(1)};
`

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  };

  render() {
    const { location } = this.props;

    return (
      <div style={{backgroundColor: '#f3f3f3'}}>
        <Helmet
          title="Nathan's Site"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Header location={location}/>
        <Body>
          {this.props.children()}
        </Body>
        <Footer />
      </div>
    );
  }
}
