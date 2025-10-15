import React, { useState } from 'react';
import './App.css';
import Header from "./Components/Layout/Header";
import Sidebar from "./Components/Layout/Sidebar";
import Footer from "./Components/Layout/Footer"
import DashboardHome from './Components/Dashboard/DashboardHome';
import UserList from './Components/Users/UserList';

function App() {
  const [openPopup, setOpenPopup] = useState(false);
  return (
    <div className="App">
      <Header onUserIconClick={() => setOpenPopup(true)}/>
      <UserList open={openPopup} onClose={() => setOpenPopup(false)}/>
      <DashboardHome/>
      <Sidebar/>
      
      <Footer/>
    </div>
  );
}

export default App;
