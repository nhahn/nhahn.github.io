import React from 'react'
import PropTypes from 'prop-types';
import {Menu} from 'antd'
import Link from "gatsby-link"

export default class Header extends React.Component {
  
  state = {
    current: 'home',
  }

  componentWillReceiveProps(nextProps) {
    const isRoot = location.pathname === '/';
    this.setState({current: location.pathname});
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  
  render() {

    return (        
      <div
        style={{
          background: `rebeccapurple`,
          marginBottom: `1.45rem`,
        }}
      >
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1rem 0.75rem`,
          }}
        >
          <h1 style={{ margin: 0, fontSize: `2rem` }}>
            <Link
              to="/"
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              Gatsby Blog
            </Link>
          </h1>
          <Menu onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal">
            <Menu.Item key="home">
              Home
            </Menu.Item>
            <Menu.Item key="bento">
              Bento
            </Menu.Item>
          </Menu>
        </div>
      </div>
    )
    
  }

}
