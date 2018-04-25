import React from 'react';
import Link from 'gatsby-link';
import {Tag} from 'antd'

import 'antd/lib/tag/style/index.css';

export default function Tags({ list = [] }) {
  return (
    <div>
      Tags:&nbsp;
      {list.map(tag =>
        <Tag key={tag} color="cyan">
          <Link to={`/tags/${tag}`}>
            {tag}
          </Link>
        </Tag>
      )}
    </div>
  );
}
