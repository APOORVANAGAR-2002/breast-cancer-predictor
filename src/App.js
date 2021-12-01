import { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import InputFields from './components/InputFields';
import { Landing } from './components/Landing';
import { Result } from './components/Result';

function App() {
  // let [data, setData] = useState();
  // useEffect(() => {
  //   fetch("/submit").then(response => console.log(response.data.result))
    
  // }, [])
      return (
      <div style={{
        background: '#6471b5',
        height: '100vh'
      }}>
        <Landing />
        <Header />
        <InputFields />
        <Result />
        {/* <p>My Token = {window.token}</p>
      <p>Result = {window.data}</p> */}
      </div>
    );
  }

export default App;
