import logo from './logo.svg';
import './App.css';
import AllDogBreeds from './components/AllDogBreeds';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h2>ALL DOG BREEDS!</h2>
        <p>And maybe some more stuff</p>
        <AllDogBreeds />
      </header>
    </div>
  );
}

export default App;
