import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import BathBody from './pages/BathBody/BathBody'
import Haircare from './pages/HairCare/Haircare';
import Skincare from './pages/Skincare/Skincare';
import Gifts from './pages/Gifts/Gifts';
import About from './pages/About/About';
import ProductDetails from './pages/ProductDetails/ProductDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        
        <Routes>
        <Route path='/home' exact element={<Home/>}/>
        <Route path='/bathbody' exact element={<BathBody/>}/>
        <Route path='/haircare' exact element={<Haircare/>}/>
        <Route path='/skincare' exact element={<Skincare/>}/>
        <Route path='/gifts' exact element={<Gifts/>}/>
        <Route path='/about' exact element={<About/>}/>
        <Route path='/productdetails' exact element={<ProductDetails/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
