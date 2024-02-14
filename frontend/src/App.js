//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Appointment from './components/Appointment';
import Home from './components/Home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Visitor from './components/Visitor';
import Councillor from './components/Councillor';
//import Hello from './components/Hello';
import Box from '@mui/material/Box';
import Contact from './components/Contact';
import StickyFooter from './components/StickyFooter';
import FetchRegistration from './components/FetchRegistration';
function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Box
          sx={{
            border: '2px solid #000', // Border color and thickness
            padding: '20px', // Padding inside the box
            margin: '20px', // Margin outside the box
            borderRadius: '10px', // Rounded corners
          }}
        >
          <Routes>
            <Route path='/' element={<Home />} exact />
            <Route path='/SignUp' element={<SignUp />} exact />
            <Route path='/SignIn' element={<SignIn />} exact />
            <Route path='/Councillor' element={<Councillor />} exact />
            <Route path='/FetchRegistration' element={<FetchRegistration />} exact />
            <Route path='/Visitor' element={<Visitor />} exact />
            <Route path='/Appointment' element={<Appointment />} exact />
            <Route path='/Contact' element={<Contact />} exact />
          </Routes>
        </Box>
      </main>

      <footer style={{ textAlign: 'center', padding: '10px', backgroundColor: '#00000' }}>
        <p>&copy;KLEF</p>
        <StickyFooter/>
      </footer>
    </React.Fragment>
  );
}

export default App;