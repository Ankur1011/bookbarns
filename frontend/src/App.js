import React from 'react';
import { BrowserRouter,Route, Link } from 'react-router-dom';

import './App.css';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProdcutScreen';
import CartScreen from './Screens/CartScreen';
import SigninScreen from './Screens/SigninScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './Screens/RegisterScreen';
import ProductsScreen from './Screens/ProductsScreen';
import ShippingScreen from './Screens/ShippingScreen';
import PaymentScreen from './Screens/PaymentScreen';
import PlaceOrderScreen from './Screens/PlaceOrderScreen';
import OrderScreen from './Screens/OrderScreen';
import ProfileScreen from './Screens/ProfileScreen';
import OrdersScreen from './Screens/OrdersScreen';
import AboutScreen from './Screens/AboutScreen';
import ContactUsScreen from './Screens/ContactUsScreen';

function App() {
  const userSignin = useSelector(state=>state.userSignin);
  const {userInfo} = userSignin;

  const openMenu = () =>{
    document.querySelector(".sidebar").classList.add("open");
  }

  const closeMenu = () =>{
    document.querySelector(".sidebar").classList.remove("open");
  }

  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="header">
      <div className="brand">
        <button onClick={openMenu}>
          &#9776;
        </button>
        <Link to="/">Book Barns</Link>
      </div>
      <div className="header-links">
      <a href="/cart">Cart</a>
            {userInfo ? (
              <Link to="/profile">{userInfo.name}</Link>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
            {userInfo && userInfo.isAdmin && (
              
              <div className="dropdown">
                <a href="#">Admin</a>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/orders">Orders</Link>
                    <Link to="/products">Products</Link>
                  </li>
                </ul>
              </div>
            )}
        
      </div>
    </header>
    <aside className="sidebar">
      <h3>Book Barns</h3>
      <button className="sidebar-close-button" onClick={closeMenu}>x</button>
      <ul>
        <li>
          <a href="/about">About Us</a>
        </li>

        <li>
          <a href="/contactus">Contact Us</a>
        </li>

      </ul>
    </aside>
    <main className="main">
      <div className="content">
        <Route path="/signin" component={SigninScreen} /> 
        <Route path="/orders" component={OrdersScreen} /> 
        <Route path="/products" component={ProductsScreen} /> 
        <Route path="/register" component={RegisterScreen} /> 
        <Route path="/order/:id" component={OrderScreen} /> 
        <Route path="/profile" component={ProfileScreen} />
        <Route path="/about" component={AboutScreen}/> 
        <Route path="/contactus" component={ContactUsScreen}/> 
        <Route path="/product/:id" component={ProductScreen} />
        <Route path="/shipping" component={ShippingScreen} />
        <Route path="/payment" component={PaymentScreen} />
        <Route path="/placeorder" component={PlaceOrderScreen} />
        <Route path="/cart/:id?" component={CartScreen} />
        <Route path="/" exact={true} component={HomeScreen} />
    </div>

    </main>
    <footer className="footer">
      All right reserved.
    </footer>
  </div>
  </BrowserRouter>
  );
}

export default App;
