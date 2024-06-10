import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from './Componets/Navbar';
import Footer from './Componets/Footer';
import Signup from './Componets/Signup';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/signup' element={<Signup/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
