import './App.css';
import { Home } from './pages/Home/home';
import { Routes, Route } from "react-router-dom";
import { RolePlayingGame } from './pages/Projects/Role Playing Game/Role Playing Game';

function App() {
  return (
    <Routes>
      <Route path='/react-test' element={<Home/>}/>
      <Route path='/react-test/rpg' element={<RolePlayingGame />}/>
    </Routes>
  );
}

export default App;
