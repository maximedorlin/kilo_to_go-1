import React from 'react';
import { Container, Row, Col, Card, Accordion, Badge } from 'react-bootstrap';
import { FaBalanceScale, FaUserCheck, FaHandshake, FaExclamationTriangle } from 'react-icons/fa';
import '../styles/Global.css';

function Conformite() {
  return (
    <div className="conformite-page">
      {/* Hero Section */}
      <section className="conformite-hero">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10} className="text-center">
              <h1 className="hero-title">
                <FaBalanceScale className="me-3" />
                Engagement de Conformité
              </h1>
              <p className="hero-subtitle">
                Les règles essentielles pour des transactions sécurisées et transparentes sur KiloToGo
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Main Content */}
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col lg={10}>
            <Card className="conformite-card">
              <Card.Body className="p-4 p-md-5">
                <div className="conformite-intro mb-5">
                  <p className="lead">
                    En utilisant la plateforme <strong>KiloToGo</strong>, chaque utilisateur s'engage à respecter les règles
                    suivantes afin d'assurer un échange fiable, sécurisé et responsable entre toutes les parties.
                  </p>
                  <Badge bg="warning" className="d-inline-flex align-items-center mt-3">
                    <FaExclamationTriangle className="me-2" /> Important
                  </Badge>
                </div>

                <Accordion defaultActiveKey="0" flush>
                  {/* Responsabilité du Voyageur */}
                  <Accordion.Item eventKey="0" className="mb-3">
                    <Accordion.Header>
                      <FaUserCheck className="me-3 text-primary" />
                      <span className="fw-bold">Responsabilité du Voyageur (vendeur de kilos)</span>
                    </Accordion.Header>
                    <Accordion.Body>
                      <ul className="conformite-list">
                        <li>Déclarer honnêtement le poids, la disponibilité et l'itinéraire du voyage.</li>
                        <li>Ne jamais transporter de colis contenant des produits illicites, dangereux ou interdits.</li>
                        <li>Respecter les délais d'envoi et maintenir un contact constant avec l'expéditeur.</li>
                        <li>Ne débloquer les fonds qu'après confirmation réelle de l'envoi.</li>
                        <li>Fournir une preuve d'expédition claire et vérifiable pour chaque transaction.</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>

                  {/* Responsabilité de l'Expéditeur */}
                  <Accordion.Item eventKey="1" className="mb-3">
                    <Accordion.Header>
                      <FaUserCheck className="me-3 text-primary" />
                      <span className="fw-bold">Responsabilité de l'Expéditeur (acheteur de kilo)</span>
                    </Accordion.Header>
                    <Accordion.Body>
                      <ul className="conformite-list">
                        <li>Déclarer en toute transparence la nature du colis à expédier.</li>
                        <li>Ne pas envoyer de marchandises illégales, périssables ou non conformes à la réglementation du pays de destination.</li>
                        <li>Envoyer le code de validation uniquement après réception de la preuve d'expédition.</li>
                        <li>Fournir des informations exactes sur le contenu et la valeur des colis.</li>
                        <li>Respecter les conditions d'emballage et de préparation des colis.</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>

                  {/* Engagement commun */}
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      <FaHandshake className="me-3 text-primary" />
                      <span className="fw-bold">Engagement commun</span>
                    </Accordion.Header>
                    <Accordion.Body>
                      <ul className="conformite-list">
                        <li>Respect mutuel entre utilisateurs dans la messagerie et dans les transactions.</li>
                        <li>Signalement immédiat de toute tentative de fraude ou de comportement suspect.</li>
                        <li>Acceptation de la retenue de 5% sur chaque transaction comme commission pour la plateforme.</li>
                        <li>Utilisation d'un système de paiement sécurisé via la plateforme.</li>
                        <li>Respect des lois locales et internationales concernant le transport de marchandises.</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>

                <div className="conformite-warning mt-5 p-4">
                  <h5 className="d-flex align-items-center">
                    <FaExclamationTriangle className="me-3 text-danger" />
                    Conséquences du non-respect
                  </h5>
                  <p className="mb-0">
                    Tout manquement à ces engagements peut entraîner la suspension du compte, la perte d'accès à la plateforme 
                    ou des poursuites légales conformément aux lois locales et internationales en vigueur.
                  </p>
                </div>

                <div className="conformite-acceptance text-center mt-5 p-3">
                  <p className="fw-bold mb-0">
                    En continuant à utiliser KiloToGo, vous acceptez ces conditions de manière libre, éclairée et volontaire.
                  </p>
                  <small className="text-muted">
                    Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
                  </small>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Conformite;