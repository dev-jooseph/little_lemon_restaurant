import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import BookingForm from './components/BookingForm';
import Main from './components/Main';
import Menu from './components/Menu';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <Nav/>
      <Main/>
      <Menu/>
      <Footer/>
      </>
  );
}

export default App;
