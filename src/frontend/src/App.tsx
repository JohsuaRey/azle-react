
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Homepage from './section/Homepage';
import Volunteerpage from '../src/section/Volunteerpage';
import EventLandingPage from './section/Eventreports';
import animation from './section/animation.css';
function App() {

  return (
    <main className='w-auto h-auto'>
        <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/volunteer' element={<Volunteerpage />} />
          <Route path='/eventreport' element={<EventLandingPage />} />
        </Routes>
      </Router>
    </main >
  );
}

export default App;
