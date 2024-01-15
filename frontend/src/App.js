import { startTransition, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';

const UNPLEASH_KEY = process.env.REACT_APP_UNPLEASH_KEY;
//const UNPLEASH_KEY ='xQNZHWbeza-B0eHAQFuDaNE_39LoRIRu-_4heDzVjoY'
const App = () => {
  const [word, setword] = useState('');
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word);
    //console.log(UNPLEASH_KEY);
    fetch(
      `https://api.unsplash.com/photos/random?query=${word}&client_id=${UNPLEASH_KEY}`,
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
    setword('');
  };

  //console.log(UNPLEASH_KEY);
  return (
    <div className="App">
      <Header title="Images Gallery" />
      <Search word={word} setword={setword} handleSubmit={handleSearchSubmit} />
    </div>
  );
};

export default App;
