import React from 'react'
import Logo from '../../../images/logo.png';
import './Navbar.css';

const Navbar = () => {
  return (
  <nav className="navbar navbar-expand-lg customize-navbar">
  <div className="container">
    <a className="navbar-brand" href="/">
      <img src={Logo} alt="Logo" width={50}/> Mern E-commerce
  </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" 
    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse text-center" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="/">Home</a>
        <a className="nav-link" href="/products">Products</a>
        <a className="nav-link" href="cart">Cart</a> 
        <a className="nav-link" href="/login">Login</a>
        <a className="nav-link" href="/profile">Profile</a>
        <a className="nav-link" href="/dashboard">Dashboard</a> 
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar
