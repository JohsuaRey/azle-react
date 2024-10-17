import { useState } from 'react';
import Homepage from './section/Homepage';
import Volunteerpage from './section/Volunteerpage';
import Eventreports from './section/Eventreports';

function App() {

  return (
    <main className='w-auto h-auto'>
        {/* <Homepage/> 
        <Volunteerpage/> */}
        <Eventreports/>
    </main >
  );
}

export default App;
