
import React from "react";
import './../styles/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./UserList";
import UserDetails from "./UserDetails";


const App = () => {
  return (
    <Router>
      <div>
        <h1>User List</h1>
        <Routes>
          <Route path="/" element={<UserList/>}/>
          <Route path="/user/:userId" element={<UserDetails/>}/>
        </Routes>
      </div>


    </Router>
  )
}

export default App
