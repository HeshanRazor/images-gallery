import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const Welcome = () => (
  <Container className="bg-light p-5 rounded-lg m-3">
    <h2 className="display-4" style={{ fontSize: '2em' }}>
      Images Gallery
    </h2>

    <p className="lead">
      This is simple application which can retrive images from unpleash API. In
      Order to Start Enter Search Team in the Search text.
      <br />
    </p>

    <Button variant="primary" href="http://unsplash.com" target="_blank">
      Learn more
    </Button>
  </Container>
);

export default Welcome;
