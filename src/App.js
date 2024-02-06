import './App.css';
import { Home } from './pages/Home/home';
import { Routes, Route } from "react-router-dom";
import { RolePlayingGame } from './pages/Projects/Role Playing Game/Role Playing Game';
import { Header } from './components/Header/Header'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/react-test' element={<Home />} />
        <Route path='/react-test/rpg' element={<RolePlayingGame />} />
      </Routes>
      <footer />
    </>
  );
}

export default App;
