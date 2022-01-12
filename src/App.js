import logo from './logo.svg';
import './App.css';
import AllDogBreeds from './components/AllDogBreeds';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <nav className='App-nav'>
          <div>ALL DOG BREEDS!</div>
          <div>And maybe some more stuff</div>
        </nav>
      </header>
      <main>
        <AllDogBreeds />
      </main>
    </div>
  );
}

export default App;
