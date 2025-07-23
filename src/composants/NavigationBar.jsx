import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button, Dropdown, Badge } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { 
  FaUser, 
  FaEnvelope, 
  FaGlobe,
  FaSignInAlt,
  FaUserPlus,
  FaBell
} from 'react-icons/fa';
import '../styles/Composants.css';
import { useAuth } from '../services/AuthContext'; // ✅
import { useNavigate } from 'react-router-dom';

function NavigationBar() {
  const { user, logout } = useAuth(); // ✅
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [unreadMessages, setUnreadMessages] = useState(3); // ❗ À relier à Firestore + notifications plus tard

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navigate = useNavigate(); // dans le composant NavigationBar

const handleLogout = async () => {
  try {
    await logout(); // logout vient de useAuth()
    navigate('/');  // ou '/login' si tu préfères
  } catch (error) {
    console.error("Erreur lors de la déconnexion :", error);
  }
};

  const closeNavbar = () => setExpanded(false);

  return (
    <header className={`navbar-master ${scrolled ? 'navbar-scrolled' : ''}`}>
      {/* Première ligne - Utilitaires */}
      <div className="navbar-top">
        <Container className="d-flex justify-content-end align-items-center py-2">
          <div className="d-flex align-items-center gap-3">
            {/* Langue */}
            <Dropdown className="language-selector">
              <Dropdown.Toggle variant="link" id="dropdown-language">
                <FaGlobe className="me-1" />
                FR
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Français (FR)</Dropdown.Item>
                <Dropdown.Item>English (EN)</Dropdown.Item>
                <Dropdown.Item>Español (ES)</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/* ✅ Condition : Si non connecté */}
            {!user && (
  <>
    <Button 
      as={Link} 
      to="/login" 
      variant="outline-primary" 
      size="sm"
      className="d-flex align-items-center"
    >
      <FaSignInAlt className="me-1" />
      Connexion
    </Button>
    <Button 
      as={Link} 
      to="/register" 
      variant="orange" 
      size="sm"
      className="d-flex align-items-center"
    >
      <FaUserPlus className="me-1" />
      Inscription
    </Button>
  </>
)}


            {/* ✅ Condition : Si connecté */}
            {user && (
  <Dropdown className="user-dropdown">
    <Dropdown.Toggle variant="link" id="dropdown-user">
      <div className="user-avatar">
        <FaUser />
      </div>
      <span>Bienvenue, {user.email}</span>
    </Dropdown.Toggle>
    <Dropdown.Menu align="end">
      <Dropdown.Item as={Link} to="/mon-profil">Mon profil</Dropdown.Item>
      <Dropdown.Item as={Link} to="/mes-annonces">Mes annonces</Dropdown.Item>
      <Dropdown.Item as={Link} to="/parametres">Paramètres</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item onClick={handleLogout}>Déconnexion</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
)}

          </div>
        </Container>
      </div>

      {/* Deuxième ligne - Navigation */}
      <Navbar expand="lg" className="navbar-main">
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <div className="logo-container">
              <span className="logo-text">KiloToGo</span>
              <span className="logo-slogan">Transportez plus, dépensez moins</span>
            </div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="main-navbar" />

          <Navbar.Collapse id="main-navbar" className="justify-content-between">
            <Nav className="mx-auto">
              <Nav.Link 
                as={Link} 
                to="/" 
                active={location.pathname === '/'}
                onClick={closeNavbar}
              >
                Accueil
              </Nav.Link>
              
              <Nav.Link 
                as={Link} 
                to="/annonces" 
                active={location.pathname.startsWith('/annonces')}
                onClick={closeNavbar}
                className="nav-link-multiline"
              >
                <span>Kilos</span>
                <span>en Vente</span>
              </Nav.Link>
              
              <Nav.Link 
                as={Link} 
                to="/creerannonce" 
                active={location.pathname === '/creerannonce'}
                onClick={closeNavbar}
                className="nav-link-multiline"
              >
                <span>Vendre</span>
                <span>mes Kilos</span>
              </Nav.Link>
              
              <Nav.Link 
                as={Link} 
                to="/conformite" 
                active={location.pathname === '/conformite'}
                onClick={closeNavbar}
              >
                Conformité
              </Nav.Link>

              <Nav.Link 
                as={Link} 
                to="/apropos" 
                active={location.pathname === '/apropos'}
                onClick={closeNavbar}
              >
                À propos
              </Nav.Link>

              <Nav.Link 
                as={Link} 
                to="/contact" 
                active={location.pathname === '/contacts'}
                onClick={closeNavbar}
              >
                Contacts
              </Nav.Link>
            </Nav>

            {/* Icône messages */}
            <div className="messages-icon-container">
              <Link to="/mes-messages" className="messages-icon">
                <FaEnvelope />
                {unreadMessages > 0 && (
                  <Badge pill bg="danger" className="notification-badge">
                    {unreadMessages}
                  </Badge>
                )}
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default NavigationBar;
