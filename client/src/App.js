import React from 'react'
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Learn from './components/Learn';
import Explore from './components/Explore';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup'; 
// import Error from './components/Error';

const App = () => {
  return (
    <>
       <Navbar></Navbar>
       
    
       
       <Route exact path='/' >
        <Home></Home>
       </Route>

       <Route path='/Learn'>
        <Learn></Learn>
       </Route>

       <Route path='/Explore'>
        <Explore></Explore>
       </Route>

       <Route path='/About'>
        <About></About>
       </Route>

       <Route path='/Contact'>
        <Contact></Contact>
       </Route>

       <Route path='/Login'>
        <Login></Login>
       </Route>

       <Route path='/Signup'>
        <Signup></Signup>
       </Route>

       {/* <Route>
        <Error></Error>
       </Route> */}
       



      

    
      
       
       
      
    </>
  )
}

export default App