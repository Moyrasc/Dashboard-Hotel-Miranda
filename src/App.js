
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import DashBoard from './views/DashBoard/DashBoard';
import Login from './views/Login/Login';
import BookingDetails from './views/Bookings/BookingDetails';
import Bookings from './views/Bookings/Bookings';
import EditBooking from './views/Bookings/EditBooking';
import NewBooking from './views/Bookings/NewBooking';
import Rooms from './views/Rooms/Rooms';
import NewRoom from './views/Rooms/NewRoom';
import RoomDetails from './views/Rooms/RoomDetails';
import EditRoom from './views/Rooms/EditRoom';


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
          <Route path='/rooms' element={<Rooms />} />
          <Route path='rooms/newroom' element={<NewRoom />} />
          <Route path='/room/:roomId' element={<RoomDetails />} />
          <Route path='/room/edit/:roomId' element={<EditRoom />} />



        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
