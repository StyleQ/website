import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../templates/Layout';

const Booking = () => (
  <Layout title="Page 2">
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Booking;