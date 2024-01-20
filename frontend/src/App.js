import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';
import ImageCard from './components/imagesCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const UNPLEASH_KEY = process.env.REACT_APP_UNPLEASH_KEY;
//const UNPLEASH_KEY ='xQNZHWbeza-B0eHAQFuDaNE_39LoRIRu-_4heDzVjoY'
const App = () => {
  const [word, setword] = useState('');
  const [images, setImages] = useState([]);

  //console.log(images);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word);
    //console.log(UNPLEASH_KEY);
    fetch(
      `https://api.unsplash.com/photos/random?query=${word}&client_id=${UNPLEASH_KEY}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setImages([{ ...data, title: word }, ...images]);
      })
      .catch((err) => {
        console.log(err);
      });
    setword('');
  };

  //console.log(UNPLEASH_KEY); {!!images.length && <ImageCard image={images[0]} />}
  return (
    <div className="App">
      <Header title="Images Gallery" />
      <Search word={word} setword={setword} handleSubmit={handleSearchSubmit} />
      <Container className="mt-4">
        <Row xs={1} md={2} lg={4}>
          {images.map((image, i) => (
            <Col key={i} className="pb-3">
              <ImageCard image={image} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default App;
