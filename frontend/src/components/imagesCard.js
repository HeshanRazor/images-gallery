import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ImageCard = ({ image }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img
        variant="top"
        src={image.urls.small}
        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
      />
      <Card.Body>
        <Card.Title>{image.title.toUpperCase()}</Card.Title>
        <Card.Text style={{ height: '75px', overflow: 'hidden' }}>
          {image.description || image.alt_description}
        </Card.Text>
        <Button variant="primary">Delete</Button>
      </Card.Body>
    </Card>
  );
};

export default ImageCard;
