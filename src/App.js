import logo from './logo.svg';
import './App.css';
import nuevaimagen from './images/siuu.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={nuevaimagen} className="App-logo" alt="logo" />
        <p>
          Hola Mundo!
        </p>
        <strong> Siuuuuu </strong>
      </header>
    </div>
  );
}

export default App;
