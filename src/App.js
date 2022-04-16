
import './App.css';

import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home';
import FoodMenu from './Pages/FoodMenu';
import Register from './Pages/Register';
import Login from './Pages/Login';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import Cart from './Pages/Cart';
import AboutUs from './Pages/AboutUs';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/foodmenu" element={<FoodMenu />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/cart"
          element={
            <RequireAuth>
              <Cart />
            </RequireAuth>
          }
        ></Route>
        <Route path="/aboutus" element={<AboutUs/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
