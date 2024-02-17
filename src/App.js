import './App.css';
import { Home } from './pages/Home/home';
import { Routes, Route } from "react-router-dom";
import { Header } from './components/Header/Header'
import { RolePlayingGame } from './pages/Projects/Role Playing Game/Role Playing Game';
import { CalorieCounter } from './pages/Projects/Calorie Counter/Calorie Counter';
import { MusicPlayer } from './pages/Projects/Music Player/Music Player';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/react-test' element={<Home />} />
        <Route path='/react-test/rpg' element={<RolePlayingGame />} />
        <Route path='/react-test/calorie-counter' element={<CalorieCounter />} />
        <Route path='/react-test/music-player' element={<MusicPlayer />} />
      </Routes>
      <footer />
    </>
  );
}

export default App;
