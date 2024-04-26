
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Categories from './components/Categories/Categories';
function App() {
  return (
    <Router>
    <div className="App bg-dark  text-white bg-color">
     <Navbar></Navbar>
     <Routes>
     <Route path="/Categorias" element={<Categories />} />
     <Route path="/Home" element={<Categories />} />
     </Routes>
    </div>
   </Router>
  );
}

export default App;
