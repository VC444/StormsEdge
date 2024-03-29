import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


// import all components that we need to link
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import RoomList from './components/RoomList';
import Payments from './components/Payments';
import OrderConfirmation from './components/OrderConfirmation';
import UserProfile from './components/UserProfile';

// Entry point of the app. This will now act as the router component. 
// Home.js is the homepage component.
function App() {
  return (
    <Router>
      <div>
        <Switch>

          {/* ...other routes 
          
              Homepage route should come last
          */}

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/signup">
            <SignUp />
          </Route>

          <Route path="/roomlist">
            <RoomList />
          </Route>

          <Route path="/payments">
            <Payments />
          </Route>

          <Route path="/orderconfirmation">
            <OrderConfirmation />
          </Route>

          <Route path="/userprofile">
            <UserProfile />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  )
}

export default App;