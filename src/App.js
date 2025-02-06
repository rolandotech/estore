import React from 'react';
import './App.scss';
import {Container} from './Style.js';
import {Search as SearchIcon, ShoppingCart} from '@mui/icons-material/';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Home, Login, SignUp, Cart, ProductDetails } from './Pages';
import { useSelector } from 'react-redux';
import {SearchIconWrapper, Search, StyledInputBase } from './Style';


function App() {
  const isLogin = useSelector((state) => state.eStoreData.isLogin)

  return (
    <Router>
      <Container>
        <nav className="headerNav">
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signUp">SignUp</Link>
            </li>
          </ul>
        </nav>
      </Container>
      <div className='headerHolder'>
        <Container className="header">
          <div className='logo'>
            <Link to='/home' className='logoLink'><img src='https://img.freepik.com/free-vector/abstract-logo-flame-shape_1043-44.jpg?w=740&t=st=1675525515~exp=1675526115~hmac=6ab6081f881cb116bf241bea391adc23271426b02cea34b6d2326835db4b350d' height="50" width="50"/></Link>
          </div>
          <div className='search'>
            <Search className='searchField'>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                className="inputSearch"
              />
            </Search>
          </div>
          <div className='cart'>
            <Link to='/cart'><ShoppingCart /></Link>
          </div>
        </Container>
      </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
    </Router>
  )
  
  
}

export default App;
