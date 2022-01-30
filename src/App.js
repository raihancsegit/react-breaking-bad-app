import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Box } from '@material-ui/core';
import { fetchData } from './service/api';
import Header from './components/Header';
import Characters from './components/Characters';
const App = () => {
  const [text, setText] = useState("")
  const [data, setData] = useState([])
  
  useEffect(() => {
    const getData = async () => {
      const result = await fetchData(text)
      setData(result.data)
      console.log(result);
    }
    getData();
  }, [text]);

  const getText = (text) => {
    setText(text);
    console.log(text);
  }

  return (
    <div className="App">
      <Header getText={getText}/>
      <Characters data={data} />
    </div>
  );
}

export default App;
