import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../navbar/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../navbar/images/NettStudios.svg';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('/');
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            to="/"
            onClick={() => setActiveLink('/')}
          >
            <img src={Logo} alt="Logo" className="logo-image" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded={isMenuOpen ? 'true' : 'false'}
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/"
                  className={`nav-link ${activeLink === '/' ? 'active' : ''}`}
                  onClick={() => {
                    setActiveLink('/');
                    closeMenu();
                  }}
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/videos"
                  className={`nav-link ${
                    activeLink === '/videos' ? 'active' : ''
                  }`}
                  onClick={() => {
                    setActiveLink('/videos');
                    closeMenu();
                  }}
                >
                  Videos
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/playlists"
                  className={`nav-link ${
                    activeLink === '/playlists' ? 'active' : ''
                  }`}
                  onClick={() => {
                    setActiveLink('/playlists');
                    closeMenu();
                  }}
                >
                  Playlists
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/lives"
                  className={`nav-link ${
                    activeLink === '/lives' ? 'active' : ''
                  }`}
                  onClick={() => {
                    setActiveLink('/lives');
                    closeMenu();
                  }}
                >
                  Lives
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/news"
                  className={`nav-link ${
                    activeLink === '/news' ? 'active' : ''
                  }`}
                  onClick={() => {
                    setActiveLink('/news');
                    closeMenu();
                  }}
                >
                  News
                </Link>
              </li>

              {/* TODO: <li className="nav-item">
                <Link
                  to="/reviews"
                  className={`nav-link ${
                    activeLink === '/reviews' ? 'active' : ''
                  }`}
                  onClick={() => {
                    setActiveLink('/reviews');
                    closeMenu();
                  }}
                >
                  Reviews
                </Link>
              </li> */}

              {/* TODO:  <li className="nav-item">
                <Link
                  to="/story"
                  className={`nav-link ${
                    activeLink === '/story' ? 'active' : ''
                  }`}
                  onClick={() => {
                    setActiveLink('/story');
                    closeMenu();
                  }}
                >
                  Menbros
                </Link>
              </li> */}

              <li className="nav-item">
                <Link
                  to="/comunidade"
                  className={`nav-link ${
                    activeLink === '/comunidade' ? 'active' : ''
                  }`}
                  onClick={() => {
                    setActiveLink('/comunidade');
                    closeMenu();
                  }}
                >
                  Comunidade
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/updates"
                  className={`nav-link ${
                    activeLink === '/updates' ? 'active' : ''
                  }`}
                  onClick={() => {
                    setActiveLink('/updates');
                    closeMenu();
                  }}
                >
                  Updates
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/about"
                  className={`nav-link ${
                    activeLink === '/about' ? 'active' : ''
                  }`}
                  onClick={() => {
                    setActiveLink('/about');
                    closeMenu();
                  }}
                >
                  Sobre Nós
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/login"
                  className={`nav-link ${
                    activeLink === '/login' ? 'active' : ''
                  }`}
                  onClick={() => {
                    setActiveLink('/login');
                    closeMenu();
                  }}
                >
                  Entrar/Cadastrar
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
