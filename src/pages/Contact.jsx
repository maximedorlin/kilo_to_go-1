import React, { useState, useRef } from 'react';
import { Container, Row, Col, Form, Button, FloatingLabel, Alert } from 'react-bootstrap';
import { 
  FaPaperPlane, 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope,
  FaRobot,
  FaCalendarAlt,
  FaVideo
} from 'react-icons/fa';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { IoMdSend } from 'react-icons/io';
import { TbMessageChatbot } from 'react-icons/tb';
import contactIllustration from '../assets/mission.jpg';
import '../styles/Contact.css';

function Contact() {
  const [contactForm, setContactForm] = useState({
    fullName: '',
    emailAddress: '',
    subject: '',
    messageContent: ''
  });
  const [formStatus, setFormStatus] = useState('');
  const formRef = useRef(null);
  const [activeView, setActiveView] = useState('contactForm');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Simulation d'envoi
    setTimeout(() => {
      setFormStatus('success');
      formRef.current.reset();
      setContactForm({ 
        fullName: '', 
        emailAddress: '', 
        subject: '', 
        messageContent: '' 
      });
    }, 1500);
  };

  const contactOptions = [
    {
      icon: <FaMapMarkerAlt size={28} />,
      title: "Notre siège social",
      info: "12 Rue du Transport, 75015 Paris",
      actionText: "Voir sur la carte",
      accentColor: "#FFA726"
    },
    {
      icon: <FaPhoneAlt size={28} />,
      title: "Service client",
      info: "+33 1 23 45 67 89",
      actionText: "Appeler maintenant",
      accentColor: "#2E86DE"
    },
    {
      icon: <FaEnvelope size={28} />,
      title: "Email professionnel",
      info: "contact@kilotogo.com",
      actionText: "Nous écrire",
      accentColor: "#66BB6A"
    }
  ];

  const supportServices = [
    {
      icon: <TbMessageChatbot size={32} />,
      title: "Assistant virtuel",
      description: "Obtenez des réponses immédiates à vos questions",
      actionText: "Démarrer le chat",
      isInteractive: true
    },
    {
      icon: <RiCustomerService2Fill size={32} />,
      title: "Support téléphonique",
      description: "Échangez directement avec un conseiller",
      actionText: "Appeler le support",
      isInteractive: true
    },
    {
      icon: <FaCalendarAlt size={32} />,
      title: "Visio-conférence",
      description: "Planifiez un rendez-vous avec notre équipe",
      actionText: "Choisir un horaire",
      isInteractive: true
    }
  ];

  return (
    <div className="contact-container">
      {/* Section principale */}
      <section className="contact-hero-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="hero-text-content">
              <h1 className="hero-main-title">
                <span className="accent-text">Échangez</span> avec notre équipe
              </h1>
              <p className="hero-subtitle-text">
                Chez KiloToGo, nous privilégions des solutions de contact modernes et accessibles
              </p>
              
              <div className="view-toggle-buttons">
                <button 
                  className={`view-toggle-btn ${activeView === 'contactForm' ? 'active-view' : ''}`}
                  onClick={() => setActiveView('contactForm')}
                >
                  <FaPaperPlane className="btn-icon" />
                  Formulaire de contact
                </button>
                <button 
                  className={`view-toggle-btn ${activeView === 'liveSupport' ? 'active-view' : ''}`}
                  onClick={() => setActiveView('liveSupport')}
                >
                  <FaRobot className="btn-icon" />
                  Options en direct
                </button>
              </div>
            </Col>
            <Col lg={6} className="hero-visual-content">
              <img 
                src={contactIllustration} 
                alt="Illustration contact" 
                className="hero-illustration floating-effect" 
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contenu dynamique */}
      {activeView === 'contactForm' ? (
        <section className="contact-form-container">
          <Container>
            <Row className="justify-content-center">
              <Col lg={8}>
                <div className="form-wrapper-card">
                  <h2 className="form-main-title">
                    <FaPaperPlane className="title-icon" />
                    Votre message nous intéresse
                  </h2>
                  
                  {formStatus === 'success' && (
                    <Alert variant="success" className="success-alert">
                      Merci ! Nous traitons votre demande et reviendrons vers vous rapidement.
                    </Alert>
                  )}
                  
                  <Form ref={formRef} onSubmit={handleFormSubmit}>
                    <Row className="form-inputs-row">
                      <Col md={6}>
                        <FloatingLabel controlId="fullName" label="Nom complet">
                          <Form.Control
                            type="text"
                            name="fullName"
                            value={contactForm.fullName}
                            onChange={handleInputChange}
                            required
                            className="custom-form-input"
                          />
                        </FloatingLabel>
                      </Col>
                      <Col md={6}>
                        <FloatingLabel controlId="emailAddress" label="Adresse email">
                          <Form.Control
                            type="email"
                            name="emailAddress"
                            value={contactForm.emailAddress}
                            onChange={handleInputChange}
                            required
                            className="custom-form-input"
                          />
                        </FloatingLabel>
                      </Col>
                      <Col md={12}>
                        <FloatingLabel controlId="subject" label="Objet de votre message">
                          <Form.Control
                            type="text"
                            name="subject"
                            value={contactForm.subject}
                            onChange={handleInputChange}
                            required
                            className="custom-form-input"
                          />
                        </FloatingLabel>
                      </Col>
                      <Col md={12}>
                        <FloatingLabel controlId="messageContent" label="Votre message">
                          <Form.Control
                            as="textarea"
                            name="messageContent"
                            value={contactForm.messageContent}
                            onChange={handleInputChange}
                            required
                            style={{ height: '150px' }}
                            className="custom-form-input"
                          />
                        </FloatingLabel>
                      </Col>
                      <Col md={12} className="form-submit-col">
                        <Button 
                          type="submit" 
                          variant="primary" 
                          className="submit-form-btn"
                          disabled={formStatus === 'sending'}
                        >
                          {formStatus === 'sending' ? (
                            'Envoi en cours...'
                          ) : (
                            <>
                              <IoMdSend className="submit-icon" />
                              Envoyer mon message
                            </>
                          )}
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      ) : (
        <section className="live-support-options">
          <Container>
            <h2 className="support-section-title">
              <RiCustomerService2Fill className="section-title-icon" />
              Nos solutions d'assistance
            </h2>
            
            <Row className="support-options-grid">
              {supportServices.map((service, index) => (
                <Col md={4} key={`support-${index}`}>
                  <div className={`support-option-card ${service.isInteractive ? 'interactive-card' : ''}`}>
                    <div className="option-icon-container" style={{ color: service.accentColor }}>
                      {service.icon}
                    </div>
                    <h3 className="option-title">{service.title}</h3>
                    <p className="option-description">{service.description}</p>
                    <button className="option-action-btn">
                      {service.actionText}
                    </button>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      )}

      {/* Méthodes de contact */}
      <section className="contact-methods-section">
        <Container>
          <Row className="contact-methods-row">
            {contactOptions.map((option, index) => (
              <Col md={4} key={`contact-${index}`}>
                <div 
                  className="contact-method-card" 
                  style={{ borderTopColor: option.accentColor }}
                >
                  <div className="method-icon-wrapper" style={{ color: option.accentColor }}>
                    {option.icon}
                  </div>
                  <h3 className="method-title">{option.title}</h3>
                  <p className="method-info">{option.info}</p>
                  <button 
                    className="method-action-button" 
                    style={{ backgroundColor: option.accentColor }}
                  >
                    {option.actionText}
                  </button>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Section visio */}
      <section className="video-conference-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="video-content-col">
              <h2 className="video-section-title">Échange en visioconférence</h2>
              <p className="video-section-text">
                Programmez une consultation vidéo pour discuter de vos besoins spécifiques.
                Idéal pour les demandes complexes ou les partenariats.
              </p>
              <Button variant="warning" className="video-cta-btn">
                <FaVideo className="cta-btn-icon" />
                Planifier une session
              </Button>
            </Col>
            <Col lg={6} className="video-placeholder-col">
              <div className="video-demo-container">
                <div className="video-play-button">
                  <FaVideo />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Contact;