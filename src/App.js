
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
import Users from './views/Users/Users';
import NewUser from './views/Users/NewUser';
import UserDetails from './views/Users/UserDetails';
import EditUser from './views/Users/EditUser';
import Contacts from './views/Contacts/Contacts';
import ContactDetails from './views/Contacts/ContactDetails';


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
          <Route path='/users' element={<Users />} />
          <Route path='/users/newUser' element={<NewUser />} />
          <Route path='/user/:userId' element={<UserDetails />} />
          <Route path='/user/edit/:userId' element={<EditUser />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/contact/:contactId' element={<ContactDetails />} />



        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
