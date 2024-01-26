import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

const Search = ({ word, setword, handleSubmit }) => (
  <Container className="mt-4">
    <Row className="justify-content-center">
      <Col xs={12} md={6}>
        <form onSubmit={handleSubmit}>
          <Stack direction="horizontal" gap={3}>
            <Form.Control
              className="me-auto"
              type="text"
              value={word}
              onChange={(e) => setword(e.target.value)}
              placeholder={
                word.trim() ? 'Search images here...' : 'Search images here...'
              }
            />
            <Button variant="primary" type="submit" disabled={!word.trim()}>
              Search
            </Button>
          </Stack>
        </form>
      </Col>
    </Row>
  </Container>
);

export default Search;
