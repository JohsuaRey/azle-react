import {Route, Routes} from 'react-router-dom';
import Homepage from './section/Homepage';
import Volunteerpage from './section/Volunteerpage';



const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/volunteer" element={<Volunteerpage/>} />
      {/* <Route path="*" element={<ErrorPage/>}/> */}
    </Routes>
  );
};

export default AppRoutes;