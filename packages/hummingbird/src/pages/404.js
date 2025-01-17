import React from 'react';
import Link from 'gatsby-link';
import Layout from '../components/LayoutDefault';
import Navigation from '../components/Navigation';

export default () => (
  <div>
    <Layout>
      <Navigation />
      <div style={{ textAlign: 'center' }}>
        {"Uh oh. We couldn't find what you were looking for."}
      </div>
      <div style={{ textAlign: 'center' }}>
        <Link to="/">Home</Link>
      </div>
    </Layout>
  </div>
);
