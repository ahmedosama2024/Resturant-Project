import Home from "./Components/home/Home";
import Menu from "./Components/menu/Menu";
import NavBar from "./Components/navbar/Navbar";
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Register from "./Components/Resigster/Register";
import Book from "./Components/Book/Book";
import Login from "./Components/Login/login";
import Footer from "./Components/Footer/Footer";
import Offer from "./Components/offer/Offer";




const App = function () {
  document.title="myResturant"
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/menu" element={<Menu/>} />
     {!localStorage.getItem('name')&&<Route path="/register" element={<Register/>} />} 
    <Route path="/book" element={<Book/>} />
    <Route path="/login" element={<Login/>} />
    </Routes>
    <Offer/>
    <Footer/>
    </BrowserRouter>
    </>
  );
}
export default App;