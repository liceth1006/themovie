
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Categories from './components/Categories/Categories';
import Home from './components/Home';
function App() {
  return (
    <Router>
    <div className="App bg-dark  text-white bg-color">
     <Navbar></Navbar>
     <Routes>
     <Route path="/Categorias" element={<Categories />} />
     </Routes>
     <Home></Home>
    </div>
   </Router>
  );
}

export default App;
