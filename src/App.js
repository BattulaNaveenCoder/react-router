import React from 'react';
import { Fragment } from 'react';
import { Route,Routes } from 'react-router-dom';
import './App.css';

// import About from './components/About';
import Admin from './components/Admin';
import { AuthProvider } from './components/Auth';
import FeatureProduct from './components/FeatureProduct';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import NewProduct from './components/NewProduct';
import NoMatch from './components/NoMatch';
import OrderSummery from './components/OrderSummery';
import Products from './components/Products';
import Profile from './components/Profile';
import RequiredAuth from './components/RequiredAuth';
import UserDetails from './components/UserDetails';
import Users from './components/Users';
const Lazyabout =React.lazy(()=>import('./components/About'))

function App() {
  return (
    <Fragment>
      <AuthProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<React.Suspense><Lazyabout/></React.Suspense> }></Route>
        <Route path='/order-summery' element={<OrderSummery/>}></Route>
        <Route path='/products' element={<Products/>}>
          <Route path='features' element={<FeatureProduct/>}></Route>
          <Route path='new' element={<NewProduct/>}></Route>
        </Route>
        <Route path='users' element={<Users/>}></Route>
        <Route path='users/:userId' element={<UserDetails/>}></Route>
        <Route path='users/admin' element={<Admin/>}></Route>
        <Route path='profile' element={<RequiredAuth><Profile/></RequiredAuth>}></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='*' element={<NoMatch/>}></Route>
      </Routes>
      </AuthProvider>
    </Fragment>
  );
}

export default App;
