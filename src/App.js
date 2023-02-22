import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const data = [
    {
      name: "Search engines",
      url: ["https://www.google.com", "https://www.bing.com"]
    }
  ]

  const [list, setList] = useState(data)

  const openUrl = (url) => {
    url.map((link) => {
      window.open(link, "_blank")
    })
  }

  return (
    <div className="App">
      <h3>Choisissez votre Application</h3>
      <div className='list'>
        {list && list.map((item) => {
          return (<button onClick={() => { openUrl(item.url) }} className='button'>{item.name}</button>)
        })}

      </div>
    </div>
  );
}

export default App;
