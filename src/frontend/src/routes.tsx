import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Homepage from './section/Homepage';
import Volunteerpage from '../src/section/Volunteerpage';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Router>
                <Routes>
                    <Route path="/" index element={<Volunteerpage/>} />
                    <Route path="/volunteer" element={<Volunteerpage />} />
                </Routes>
            </Router>
        </BrowserRouter>
    );
};

export default AppRoutes;