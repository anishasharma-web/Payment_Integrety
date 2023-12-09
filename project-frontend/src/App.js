// App.js
import React from 'react';
import { Route, BrowserRouter, Routes} from 'react-router-dom';

import NavBar from './components/Shared/NavBar';
import Dashboard from './components/Shared/Dashboard';
import UserProfile from './components/Shared/UserProfile';
import Login from './components/appuser/Login';
import BillList from './components/Bill/BillList';
import BillDetails from './components/Bill/BillDetails';
import BillForm from './components/Bill/BillForm';
import Payment from './components/Payment/Payment';
import RegistrationForm from './components/Authentication/RegistrationForm';  // Check the correct path


function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Dashboard/>} />
          {/* <Route path="/register" element={<RegistrationForm />} /> */}
          <Route path="/login" element={<Login />} />
          {/* <PrivateRoute path="/profile" component={UserProfile} />
          <PrivateRoute path="/bills" exact component={BillList} />
          <PrivateRoute path="/bills/:billId" component={BillDetails} />
          <PrivateRoute path="/add-bill" component={BillForm} />
          <PrivateRoute path="/make-payment" component={Payment} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
