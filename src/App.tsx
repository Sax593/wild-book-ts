import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Wilder, { WilderProps } from './components/Wilder';

function App() {
  const [wilder, setWilder] = useState<WilderProps[]>([]);
  useEffect(() => {
    axios.get("http://localhost:5000/api/wilder").then((data: any) => {
      setWilder(data.data);
    })
  }, [])
  console.log(wilder);

  return (
    <div className="App">
      <header>
        <div className="container">
          <h1>Wilder Book</h1>
        </div>
      </header>
      <main className="container">
        <h2>Wilders</h2>
        <section className="card-row">
          {wilder.map((element) => {
            return (
              <Wilder name={element.name} />
            )
          })}
        </section>
      </main>
      <footer>
        <div>
          <p>&copy; 2022 Wild code school</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
