
import { Route, Routes } from 'react-router';
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
import ProtectedRoute from './components/ProtectedRoute';
import Profile from './views/Profile/Profile';
import RoomsList from './views/Rooms/RoomsList';



function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/' element={<DashBoard />} >
            <Route path='bookings' element={<Bookings />}>
              <Route path='newbooking' element={<NewBooking />} />
              <Route path=':bookingId' element={<BookingDetails />} />
              <Route path='edit/:bookingId' element={<EditBooking />} />
            </Route>
            <Route path='rooms' element={<Rooms />}>
              <Route path='list' element={<RoomsList />} />
              <Route path='newroom' element={<NewRoom />} />
              <Route path=':roomId' element={<RoomDetails />} />
              <Route path='edit/:roomId' element={<EditRoom />} />
            </Route>
            <Route path='users' element={<Users />}>
              <Route path='newUser' element={<NewUser />} />
              <Route path=':userId' element={<UserDetails />} />
              <Route path='edit/:userId' element={<EditUser />} />
            </Route>
            <Route path='contacts' element={<Contacts />}>
              <Route path=':contactId' element={<ContactDetails />} />
            </Route>
            <Route path='profile' element={<Profile />} />
          </Route>
        </Route>

      </Routes>
    </>
  );
}

export default App;
