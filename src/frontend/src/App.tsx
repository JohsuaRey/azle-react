// import { useState } from 'react';
// import Homepage from './section/Homepage';
// import Volunteerpage from './section/Volunteerpage';
// import Eventreports from './section/Eventreports';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Homepage from './section/Homepage';
import Volunteerpage from '../src/section/Volunteerpage';
import EventLandingPage from './section/Eventreports';

function App() {

  return (
    <main className='w-auto h-auto'>
        {/* <Homepage/> 
        <Volunteerpage/> */}
        {/* <Eventreports/> */}
        <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/volunteer' element={<Volunteerpage />} />
          <Route path='/eventreport' element={<EventLandingPagelce />} />
        </Routes>
      </Router>
    </main >
  );
}

export default App;
