import React from 'react';
import './App.css';
import NavBar from "./NavBar"
//import AddressForm from "./Registration"
//import SignIn from "./SignIn"
//import LandingPage from "./LandingPage"
import SelectPage from "./SelectPage"


function App() {
  return (
    <div className="App">
      <h1>POC MNU GAP</h1>
    <NavBar/>
    {/* <AddressForm/> */}
    {/* <SignIn/> */}
    {/* <LandingPage/> */}
    <SelectPage/>
    </div>
  );
}

export default App;
