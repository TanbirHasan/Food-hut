
import './App.css';

import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home';
import FoodMenu from './Pages/FoodMenu';
import Register from './Pages/Register';
import Login from './Pages/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/foodmenu" element={<FoodMenu />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
