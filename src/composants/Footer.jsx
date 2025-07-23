import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { MdOutlinePrivacyTip } from 'react-icons/md';
import { BsShieldCheck } from 'react-icons/bs';
import '../styles/Composants.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer-section">
      <Container>
        <Row className="g-4">
          <Col lg={3} md={6}>
            <div className="footer-brand-container">
              <h5 className="footer-brand">KiloToGo</h5>
              <p className="footer-slogan">La marketplace des kilos entre particuliers</p>
            </div>
            <div className="footer-contact mt-3">
              <p><FaMapMarkerAlt className="me-2" /> Paris, France</p>
              <p><FaEnvelope className="me-2" /> contact@kilotogo.com</p>
              <p><FaPhone className="me-2" /> +33 1 23 45 67 89</p>
            </div>
          </Col>
          
          <Col lg={3} md={6}>
            <h6 className="footer-title">Navigation</h6>
            <ListGroup variant="flush" className="footer-links">
              <ListGroup.Item action as="a" href="/">Accueil</ListGroup.Item>
              <ListGroup.Item action as="a" href="/annonces">Kilos en Vente</ListGroup.Item>
              <ListGroup.Item action as="a" href="/creerannonce">Vendre des Kilos</ListGroup.Item>
              <ListGroup.Item action as="a" href="/conformite">Conformité</ListGroup.Item>
            </ListGroup>
          </Col>
          
          <Col lg={3} md={6}>
            <h6 className="footer-title">Légal</h6>
            <ListGroup variant="flush" className="footer-links">
              <ListGroup.Item action as="a" href="/mentions-legales">
                <MdOutlinePrivacyTip className="me-2" /> Mentions légales
              </ListGroup.Item>
              <ListGroup.Item action as="a" href="/confidentialite">
                <BsShieldCheck className="me-2" /> Politique de confidentialité
              </ListGroup.Item>
              <ListGroup.Item action as="a" href="/cgv">CGV</ListGroup.Item>
              <ListGroup.Item action as="a" href="/cgu">CGU</ListGroup.Item>
            </ListGroup>
          </Col>
          
          <Col lg={3} md={6}>
            <h6 className="footer-title">Nous suivre</h6>
            <div className="social-icons mb-3">
              <a href="#" aria-label="Facebook"><FaFacebook /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="LinkedIn"><FaEnvelope /></a>
            </div>
            
            <div className="newsletter">
              <p className="small">Abonnez-vous à notre newsletter</p>
              <div className="input-group mb-3">
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="Votre email" 
                  aria-label="Votre email"
                />
                <button className="btn btn-primary" type="button">
                  OK
                </button>
              </div>
            </div>
          </Col>
        </Row>
        
        <Row className="mt-4">
          <Col className="text-center">
            <p className="footer-copyright">
              © {currentYear} KiloToGo - Tous droits réservés. 
              <span className="d-block d-md-inline"> Plateforme de mise en relation entre particuliers.</span>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;