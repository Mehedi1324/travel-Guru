import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About Us/About';
import Footer from './HeaderFooter/Footer.jsx';
import Contact from './Components/Contact Us/Contact';
import Subscribe from './Components/About Us/Subscribe';
import Flight from './Components/Flight/Flight';
import Header from './HeaderFooter/Header.jsx';
import Error from './Components/Home/Error';
import RegisterPage from './SIgn In/RegisterPage';
import LoginPage from './SIgn In/LoginPage';
import PrivateRoute from './Hooks/PrivateRoute';
import Booking from './Components/Booking/Booking';
import Success from './Components/Success/Success';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/flight"
          element={
            // <PrivateRoute>
            <Flight />
            // </PrivateRoute>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/booking" element={<Booking />} />

        <Route path="/register" element={<RegisterPage />} />
        <Route path="/success" element={<Success />} />

        <Route path="*" element={<Error />} />
      </Routes>
      <Subscribe />
      <Footer />
    </Router>
  );
}

export default App;
