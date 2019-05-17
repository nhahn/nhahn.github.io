import React from 'react';
import Helmet from 'react-helmet';
import Header from '../components/header';
import Footer from '../components/footer';
import { rhythm } from "../utils/typography"
import styled from 'styled-components'

const Body = styled.div`
  max-width: 1300px;
  margin: ${rhythm(1/2)} auto;
  padding: 0px ${rhythm(1)};
`

export default function Layout({location, children}) {
  return (
    <div style={{backgroundColor: '#f3f3f3'}}>
      <Helmet
        title="Nathan Hahn"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <Header location={location}/>
      <Body>
        {children}
      </Body>
      <Footer />
    </div>
  );
}
