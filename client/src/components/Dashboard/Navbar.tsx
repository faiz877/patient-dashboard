import { type FC } from 'react';
import './Navbar.css';

const Navbar: FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/" className="brand">Acme Health</a>
      </div>
      
      <div className="navbar-menu">
        <a href="/dashboard" className="nav-item active">
          <i className="icon-overview"></i>
          Overview
        </a>
        <a href="/weight-progress" className="nav-item">
          <i className="icon-weight"></i>
          Weight Progress
        </a>
        <a href="/shipments" className="nav-item">
          <i className="icon-shipment"></i>
          Shipments
        </a>
      </div>

      <div className="navbar-end">
        <a href="/profile" className="nav-item">
          <i className="icon-profile"></i>
          Profile
        </a>
        <a href="/logout" className="nav-item">
          <i className="icon-logout"></i>
          Logout
        </a>
      </div>
    </nav>
  );
};

export default Navbar; 