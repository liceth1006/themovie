
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Categories from './components/Categories/Categories';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Tendencia from './components/Tendencia'; 
function App() {
  return (
    <Router>
    <div className="App text-white">
   <Header></Header>
   <div className='mt-pt'>
     <Routes>
     <Route path="/Categorias" element={<Categories />} />
     <Route path='/Tendencia' element={<Tendencia />} />
     <Route path="/" element={<Home />} />
     </Routes>
     
     </div>
    </div>
    <Footer></Footer>
   </Router>
  );
}

export default App;
