import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card, Carousel } from 'react-bootstrap';
import { 
  FaPlane, FaGlobe, FaSuitcaseRolling, FaShieldAlt, 
  FaHandshake, FaRocket, FaSearch, FaUsers,
  FaStar, FaCheckCircle, FaRegClock, FaShippingFast
} from 'react-icons/fa';
import { GiWeight, GiEarthAmerica } from 'react-icons/gi';
import { MdPayment, MdLocalShipping, MdReviews } from 'react-icons/md';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import '../styles/Global.css';

const Accueil = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [currentSlide, setCurrentSlide] = useState(0);

  // Données pour le carousel
  const carouselItems = [
    {
      image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Envois sécurisés",
      text: "Vos colis entre de bonnes mains"
    },
    {
      image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Voyagez utile",
      text: "Rentabilisez vos trajets"
    },
    {
      image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Économisez",
      text: "Jusqu'à 60% moins cher que les transporteurs classiques"
    },
    {
      image: "https://images.unsplash.com/photo-1476900543704-4312b9c4a2a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Confiance mutuelle",
      text: "Système de notation et avis vérifiés"
    },
    {
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Suivi en temps réel",
      text: "Localisation de votre colis à chaque étape"
    }
  ];

  const steps = [
    {
      icon: <FaHandshake className="text-primary" />,
      title: "Rencontrez",
      description: "Créez ou trouvez une annonce. Entrez en contact avec une personne de confiance."
    },
    {
      icon: <MdPayment className="text-primary" />,
      title: "Paiement sécurisé",
      description: "Payez via notre système intelligent de confirmation à deux étapes."
    },
    {
      icon: <FaShippingFast className="text-primary" />,
      title: "Envoi réussi",
      description: "Votre colis est envoyé avec soin et votre vendeur est rémunéré."
    }
  ];

  const stats = [
    { value: 2500, suffix: "+", label: "Utilisateurs", icon: <FaUsers /> },
    { value: 8500, suffix: "+", label: "Kilos échangés", icon: <GiWeight /> },
    { value: 98, suffix: "%", label: "Satisfaction", icon: <FaStar /> }
  ];

  const features = [
    {
      icon: <FaShieldAlt />,
      title: "Sécurité",
      description: "Paiement bloqué jusqu'à réception du colis"
    },
    {
      icon: <GiEarthAmerica />,
      title: "International",
      description: "Plus de 50 pays desservis"
    },
    {
      icon: <FaRegClock />,
      title: "Rapidité",
      description: "Livraison en 2-5 jours selon destination"
    },
    {
      icon: <MdReviews />,
      title: "Avis vérifiés",
      description: "Système de notation transparent"
    }
  ];

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);

    const carouselInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 5000);

    return () => {
      clearInterval(stepInterval);
      clearInterval(carouselInterval);
    };
  }, [steps.length, carouselItems.length]);

  return (
    <div className="home-page">
      {/* HERO SECTION AVEC CAROUSEL */}
      <section className="hero-section">
        <Carousel activeIndex={currentSlide} onSelect={setCurrentSlide} controls={false} indicators={false}>
          {carouselItems.map((item, index) => (
            <Carousel.Item key={index}>
              <div 
                className="hero-slide"
                style={{ backgroundImage: `linear-gradient(rgba(42, 92, 154, 0.7), rgba(58, 124, 186, 0.7)), url(${item.image})` }}
              >
                <Container>
                  <Row className="align-items-center min-vh-80">
                    <Col md={8} className="mx-auto text-center text-white">
                      <h1 className="hero-title mb-4">{item.title}</h1>
                      <p className="hero-subtext lead mb-5">{item.text}</p>
                      <div className="hero-buttons justify-content-center">
                        <Button 
                          variant="warning" 
                          size="lg" 
                          href="creerannonce" 
                          className="me-3 cta-button"
                        >
                          <FaSuitcaseRolling className="me-2" /> Vendre mes kilos
                        </Button>
                        <Button variant="outline-light" size="lg" className="cta-button">
                          <FaSearch className="me-2" /> Trouver un transporteur
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>

      {/* SECTION VALEURS */}
      <section className="values-section py-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            {features.map((feature, index) => (
              <Col lg={3} md={6} key={index} className="mb-4">
                <Card className="h-100 border-0 shadow-sm feature-card">
                  <Card.Body className="text-center p-4">
                    <div className="feature-icon mb-3">
                      {feature.icon}
                    </div>
                    <h3 className="h5">{feature.title}</h3>
                    <p className="text-muted mb-0">{feature.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* HOW IT WORKS */}
      <section className="steps-section py-5" ref={ref1}>
        <Container>
          <h2 className="section-title text-center mb-5">
            <span className="section-title-main d-block">Comment ça marche ?</span>
            <span className="section-title-sub d-block">Simple, rapide et sécurisé</span>
          </h2>
          <Row className="justify-content-center">
            {steps.map((step, index) => (
              <Col lg={4} md={6} key={index} className="mb-4">
                <Card className={`step-card ${activeStep === index ? 'active' : ''}`}>
                  <Card.Body className="text-center p-4">
                    <div className="step-icon-container mb-3">
                      {step.icon}
                    </div>
                    <Card.Title className="h4">{step.title}</Card.Title>
                    <Card.Text className="text-muted">{step.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* STATISTICS */}
      <section className="stats-section py-5 bg-white" ref={ref2}>
        <Container>
          <Row className="justify-content-center">
            {stats.map((stat, index) => (
              <Col lg={4} md={6} key={index} className="mb-4">
                <div className="stat-item text-center p-4">
                  <div className="stat-icon mb-3">
                    {stat.icon}
                  </div>
                  <h3 className="stat-value mb-2">
                    {inView2 ? (
                      <CountUp 
                        end={stat.value} 
                        duration={2} 
                        suffix={stat.suffix} 
                      />
                    ) : `0${stat.suffix}`}
                  </h3>
                  <p className="stat-label text-muted mb-0">{stat.label}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* TÉMOIGNAGES */}
      <section className="testimonials-section py-5 bg-light">
        <Container>
          <h2 className="section-title text-center mb-5">
            <span className="section-title-main d-block">Ils nous font confiance</span>
            <span className="section-title-sub d-block">Ce que nos utilisateurs disent</span>
          </h2>
          <Row className="justify-content-center">
            <Col lg={8}>
              <Card className="border-0 shadow-sm">
                <Card.Body className="p-5">
                  <blockquote className="blockquote mb-0 text-center">
                    <p className="mb-4 font-italic">"Grâce à KiloToGo, j'ai pu envoyer des médicaments à ma mère en Côte d'Ivoire pour moitié prix. Le système de suivi est génial !"</p>
                    <footer className="blockquote-footer">
                      <FaStar className="text-warning" />
                      <FaStar className="text-warning" />
                      <FaStar className="text-warning" />
                      <FaStar className="text-warning" />
                      <FaStar className="text-warning" />{' '}
                      <strong>Fatou K.</strong>, utilisatrice depuis 2022
                    </footer>
                  </blockquote>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA FINAL */}
      <section className="cta-section py-5 text-white">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <h2 className="mb-4">Prêt à révolutionner vos envois ?</h2>
              <p className="lead mb-5">Rejoignez notre communauté de plus de 2500 utilisateurs satisfaits</p>
              <Button variant="light" size="lg" className="cta-button me-3">
                Commencer maintenant
              </Button>
              <Button variant="outline-light" size="lg" className="cta-button">
                Voir les tarifs
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Accueil;