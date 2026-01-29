import './App.css';
import {Routes, Route} from 'react-router-dom';
import HomePage from './home/HomePage';
import Jobs from './Pages/Jobs';
import Login from './pages/Login';
import Register from './pages/Register';
import NavBar from './navBar/NavBar';
import Footer from './Footer/Footer';

function App() {

  return (
    <>
        <NavBar/>

        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/jobs' element ={<Jobs/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/Register' element={<Register/>} />
        </Routes>
        
        <Footer/>
    </>
  )
}

export default App
