import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Navbar from "./component/layout/Navbar.js"
import HomeFile from "./component/Home/HomeFile.js"
import BuyPage from "./component/Buy/BuyFile.js"
import LabPage from './component/Lab/LabPage.js'
import DonorPage from "./component/Donor/DonorPage.js"
import CartPage from "./component/Cart/CartPage.js"
import ProfilePage from "./component/Profile/ProfilePage.js"
import LoginPage from "./component/Login/login"
import RegisterPage from "./component/register/register"
import PlaceOrder from "./component/Cart/placeorder.js"

function App() {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path = "/" component={HomeFile}/>
        <Route path = "/buy" component={BuyPage}/>
        <Route path = "/test" component={LabPage}/>
        <Route path = "/donor" component={DonorPage}/>
        <Route path = "/cart" component={CartPage}/>
        <Route path = "/profile" component={ProfilePage}/>
        <Route path = "/login" component={LoginPage}/>
        <Route path = "/register" component={RegisterPage}/>
        <Route path = "/placeorder" component={PlaceOrder}/>

      </Switch> 
    </>
  );
}
export default App;