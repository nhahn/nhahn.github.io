import React from 'react';
import Helmet from 'react-helmet';

//import { Card, Icon, Avatar } from 'antd';
//const { Meta } = Card;
import DefaultLayout from '../layouts/default'

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
    <DefaultLayout>
      <Helmet title={`Side Projects | Nathan Hahn`}/>
      <h1>Coming Soon!</h1>
    </DefaultLayout>
  );
}
