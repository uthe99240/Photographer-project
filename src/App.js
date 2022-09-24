import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';

import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Hiring from './components/Hiring/Hiring';
import AboutMe from './components/AboutMe/AboutMe';
import Blog from './components/Blog/Blog';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/hiring" element={
          <RequireAuth>
            <Hiring></Hiring>
          </RequireAuth>
        }></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
