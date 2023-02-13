
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import BookingDetails from './views/Bookings/BookingDetails';
import Bookings from './views/Bookings/Bookings';
import EditBooking from './views/Bookings/EditBooking';
import NewBooking from './views/Bookings/NewBooking';
import DashBoard from './views/DashBoard/DashBoard';
import Login from './views/Login/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<DashBoard />} />
          <Route path='/bookings' element={<Bookings />} />
          <Route path='/bookings/newbooking' element={<NewBooking />} />
          <Route path='/booking/:bookingId' element={<BookingDetails />} />
          <Route path='/booking/edit/:bookingId' element={<EditBooking />} />



        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
