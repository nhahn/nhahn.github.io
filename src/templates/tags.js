import React from 'react';
import GatsbyLink from 'gatsby-link';
import {FaHome, FaTags} from 'react-icons/fa';

import Link from '../components/Link';
import 'antd/lib/style/core/motion.less'
import 'antd/lib/style/core/iconfont.less'
import 'antd/lib/style/themes/default.less'

export default function Tags({ pageContext }) {
  const { posts, post, tag } = pageContext;
  if (tag) {
    return (
      <div>
        <h1>
          {post.length} post{post.length === 1 ? '' : 's'} tagged with {tag}
        </h1>
        <ul>
          {post.map(({ id, frontmatter, fields, excerpt }) => {
            return (
              <li key={id}>
                <h1>
                  <GatsbyLink to={fields.slug}>
                    {frontmatter.title}
                  </GatsbyLink>
                </h1>
                <p>
                  {excerpt}
                </p>
              </li>
            );
          })}
        </ul>
        <Link to="/tags">
          <FaTags /> All tags
        </Link>
      </div>
    );
  }
  return (
    <div>
      <h1>Tags</h1>
      <ul className="tags">
        {Object.keys(posts).map(tagName => {
          //const tags = posts[tagName];
          return (
            <li key={tagName}>
              <GatsbyLink to={`/tags/${tagName}`}>
                {tagName}
              </GatsbyLink>
            </li>
          );
        })}
      </ul>
      <Link to="/">
        <FaHome /> All posts
      </Link>
    </div>
  );
}
