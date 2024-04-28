
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Categories from './components/Categories/Categories';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Description from './components/Description';
function App() {
  return (
    <Router>
    <div className="App text-white">
   <Header></Header>
   <div className='mt-pt'>
     <Routes>
     <Route path="/Categorias" element={<Categories />} />
     <Route path="/" element={<Home />} />
     { <Route path="/description/:id" element={<Description />} /> }
     </Routes>
     
     </div>
    </div>
    <Footer></Footer>
   </Router>
  );
}

export default App;
