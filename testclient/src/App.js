import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [test, setTest] = useState('')

  const testRequest = async () => {
    const tmp = await axios.get('http://unplanned-plan.shop:8000/api/testapp/test')
    setTest(tmp.data.test)
  }

  useEffect(() => {
    testRequest()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {test}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
