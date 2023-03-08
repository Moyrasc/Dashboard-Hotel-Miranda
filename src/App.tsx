
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
// import { useUser } from './Context/userContext';
// import { User } from './Interfaces/UserAuth';


function App() {
// const user = useUser()
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route element={<ProtectedRoute logged={undefined} email={''} username={''}/>}>
          <Route path='/*' element={<DashBoard />} />
          <Route path='/Bookings' element={<Bookings />} />
          <Route path='/bookings/newbooking' element={<NewBooking />} />
          <Route path='/bookings/:bookingId' element={<BookingDetails />} />
          <Route path='/bookings/edit/:bookingId' element={<EditBooking />} />

          <Route path='/Rooms' element={<Rooms />} />
          <Route path='/rooms/newroom' element={<NewRoom />} />
          <Route path='/rooms/:roomId' element={<RoomDetails />} />
          <Route path='/rooms/edit/:roomId' element={<EditRoom />} />

          <Route path='/Users' element={<Users />} />
          <Route path='/users/newUser' element={<NewUser />} />
          <Route path='/users/:userId' element={<UserDetails />} />
          <Route path='/users/edit/:userId' element={<EditUser />} />

          <Route path='/Contacts' element={<Contacts />} />
          <Route path='/contacts/:contactId' element={<ContactDetails />} />

          <Route path='Profile' element={<Profile />} />

        </Route>
      </Routes>

    </>
  );
}

export default App;
