import './App.css';
import Characters from './pages/CharactersPages';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import EpisodesPages from './pages/EpisodesPages';

function App() {

  return (
    <div className="App-header">

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/characters' element={<Characters />} />
        <Route path='/episodes' element={<EpisodesPages />} />
      </Routes>

    </div>
  );
}

export default App;
