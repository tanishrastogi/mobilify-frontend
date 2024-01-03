import logo from './logo.svg';
import Navbar from './components/navbar/navbar';
import './App.css';
import { Route , Routes } from 'react-router-dom';
import Login from './components/entrance/login';
import SignUp from './components/entrance/signup';
import Home from './components/about_and_contact/aboutContent';
import Footer from './components/homepage/footer';
import MailBox from './components/homepage/mailBox';
import User from './components/users/user';
import AboutContent from './components/about_and_contact/aboutContent';
import SearchBar from './components/homepage/searchbar';
import Homepage from './components/homepage/homepage';
import Slide from './components/homepage/slide';
// import { Slide } from '@mui/material';

function App() {
  return (
    <Routes>
      <Route path="/" element={<div className="home-page"><Navbar /><SearchBar /><Homepage /><Footer /></div>}/>
      <Route path='/login' element={<div><Login /></div>} />
      <Route path='/signup' element={<div><SignUp /></div>} />
      <Route path='/contact' element={<div ><MailBox /></div>}/>
      <Route path='/:username' element={<div><User /></div>} />
      <Route path='/about' element={<div><Navbar /><AboutContent /><Slide /><Footer /></div>}/>
    </Routes>
  );
}

export default App;
