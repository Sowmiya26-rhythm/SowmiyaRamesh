import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Popular from './miniproduct/Popular';
import Cart from './pages/Cart';
import Shop from './miniproduct/Shop';
import Gift from './miniproduct/Gift';
import Contact from './miniproduct/Contact';
import Shoppu from './miniproduct/Shoppu';
import Upload from './pages/Upload';
import Update from './pages/Update';
import Edit from './pages/Edit';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      
      <Route path='/'element={<Home/>}/>
      <Route path='/popular' element={<Popular/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/gift' element={<Gift/>}/>
      <Route  path='/contact' element={<Contact/>}/>
      <Route path='/shoppu'element={<Shoppu/>}/>
      <Route path='/upload' element={<Upload/>}/>
      <Route path='/update' element={<Update/>}/>
      <Route path='/edit' element={<Edit/>}/>

      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
