import React from 'react';
import { Container, Row, Col, Button, Card, Badge } from 'react-bootstrap';
import { 
  FaPlane, 
  FaSuitcase, 
  FaHandshake, 
  FaShieldAlt,
  FaGlobeAmericas,
  FaChartLine,
  FaUsers,
  FaStar,
  FaLeaf,
  FaRocket
} from 'react-icons/fa';
import teamImg from '../assets/team.jpg';
import missionImg from '../assets/mission.jpg';
import valuesImg from '../assets/values.jpg';
import '../styles/Global.css';

function Apropos() {
  const stats = [
    { value: 2500, label: 'Utilisateurs actifs', icon: <FaUsers className="text-primary" size={32} /> },
    { value: 8500, label: 'Kilos transportés', icon: <FaSuitcase className="text-primary" size={32} /> },
    { value: 98, label: 'Taux de satisfaction', icon: <FaStar className="text-primary" size={32} /> },
    { value: 50, label: 'Pays desservis', icon: <FaGlobeAmericas className="text-primary" size={32} /> }
  ];

  const values = [
    {
      icon: <FaHandshake className="text-primary" size={40} />,
      title: "Confiance",
      description: "Notre système de notation et vérification garantit des échanges sécurisés."
    },
    {
      icon: <FaLeaf className="text-primary" size={40} />,
      title: "Écologie",
      description: "Optimiser les voyages existants pour réduire l'empreinte carbone."
    },
    {
      icon: <FaChartLine className="text-primary" size={40} />,
      title: "Économie",
      description: "Jusqu'à 60% moins cher que les transporteurs traditionnels."
    },
    {
      icon: <FaGlobeAmericas className="text-primary" size={40} />,
      title: "Ouverture",
      description: "Relier les communautés vers des destinations moins desservies."
    }
  ];

  const howItWorks = [
    {
      step: 1,
      icon: <FaSuitcase className="text-primary" size={28} />,
      title: "Créez ou trouvez une annonce",
      description: "Publiez votre besoin ou parcourez les voyages programmés."
    },
    {
      step: 2,
      icon: <FaHandshake className="text-primary" size={28} />,
      title: "Contactez le voyageur",
      description: "Échangez directement pour les détails du transport."
    },
    {
      step: 3,
      icon: <FaShieldAlt className="text-primary" size={28} />,
      title: "Paiement sécurisé",
      description: "Montant bloqué jusqu'à confirmation de livraison."
    },
    {
      step: 4,
      icon: <FaPlane className="text-primary" size={28} />,
      title: "Suivi en temps réel",
      description: "Suivez votre colis jusqu'à destination."
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section 
        className="about-hero text-white text-center d-flex align-items-center"
        style={{ 
          background: `linear-gradient(135deg, rgba(46, 134, 222, 0.9) 0%, #fb8c00)`,
          minHeight: '80vh'
        }}
      >
        <Container>
          <Row className="justify-content-center">
            <Col md={10} lg={8}>
              <Badge bg="orange" className="mb-3 px-3 py-2 fs-6 fw-normal">Notre histoire</Badge>
              <h1 className="display-5 fw-bold mb-4">Plus qu'un service, une communauté</h1>
              <p className="lead mb-5 fs-5">
                KiloToGo révolutionne le transport de colis en connectant voyageurs et expéditeurs pour des envois économiques, écologiques et sécurisés.
              </p>
              <div className="d-flex justify-content-center gap-3">
                <Button variant="light" size="lg" className="px-4" gg>
                  Rejoindre la communauté
                </Button>
                <Button variant="outline-light" size="lg" className="px-4">
                  Voir les témoignages
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Notre Mission */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <img 
                src={missionImg} 
                alt="Notre mission" 
                className="img-fluid rounded-3 shadow"
                style={{ maxHeight: '500px', width: '100%', objectFit: 'cover' }}
              />
            </Col>
            <Col lg={6}>
              <Badge bg="primary" className="mb-3 px-3 py-2 fs-6 fw-normal">Notre raison d'être</Badge>
              <h2 className="mb-4 fw-bold">Révolutionner le transport de colis entre particuliers</h2>
              <p className="lead text-muted mb-4">
                Chez KiloToGo, nous transformons les voyages en opportunités de transport mutuellement bénéfiques.
              </p>
              <ul className="list-unstyled mb-4">
                <li className="mb-3 d-flex align-items-start">
                  <FaPlane className="text-primary mt-1 me-3 flex-shrink-0" />
                  <div>
                    <strong>Pour les voyageurs</strong> - Rentabilisez l'espace disponible dans vos bagages
                  </div>
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <FaSuitcase className="text-primary mt-1 me-3 flex-shrink-0" />
                  <div>
                    <strong>Pour les expéditeurs</strong> - Envoyez vos colis à moindre coût en toute sécurité
                  </div>
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <FaUsers className="text-primary mt-1 me-3 flex-shrink-0" />
                  <div>
                    <strong>Pour les communautés</strong> - Maintenez des liens forts malgré la distance
                  </div>
                </li>
              </ul>
              <Button variant="primary" className="px-4">
                <FaRocket className="me-2" />
                Découvrir notre vision
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Chiffres clés */}
      <section className="py-5 bg-white">
        <Container>
          <div className="text-center mb-5">
            <Badge bg="orange" className="mb-3 px-3 py-2 fs-6 fw-normal">En un clin d'œil</Badge>
            <h2 className="fw-bold">KiloToGo en chiffres</h2>
            <p className="lead text-muted">Notre impact depuis le lancement</p>
          </div>
          <Row className="g-4">
            {stats.map((stat, index) => (
              <Col md={6} lg={3} key={index}>
                <Card className="border-0 shadow-sm h-100 text-center p-4">
                  <Card.Body>
                    <div className="mb-3">{stat.icon}</div>
                    <h3 className="text-primary fw-bold">{stat.value}+</h3>
                    <p className="mb-0 text-dark">{stat.label}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Nos valeurs */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6} className="order-lg-2">
              <img 
                src={valuesImg} 
                alt="Nos valeurs" 
                className="img-fluid rounded-3 shadow"
                style={{ maxHeight: '500px', width: '100%', objectFit: 'cover' }}
              />
            </Col>
            <Col lg={6} className="order-lg-1">
              <Badge bg="primary" className="mb-3 px-3 py-2 fs-6 fw-normal">Notre ADN</Badge>
              <h2 className="mb-4 fw-bold">Les valeurs qui nous animent</h2>
              <Row className="g-4">
                {values.map((value, index) => (
                  <Col md={6} key={index}>
                    <Card className="border-0 bg-white h-100 shadow-sm">
                      <Card.Body className="text-center p-4">
                        <div className="mb-3">{value.icon}</div>
                        <h5 className="fw-bold">{value.title}</h5>
                        <p className="text-muted mb-0">{value.description}</p>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Fonctionnement */}
      <section className="py-5 bg-white">
        <Container>
          <div className="text-center mb-5">
            <Badge bg="orange" className="mb-3 px-3 py-2 fs-6 fw-normal">Simplicité</Badge>
            <h2 className="fw-bold">Comment ça marche ?</h2>
            <p className="lead text-muted">En 4 étapes seulement</p>
          </div>
          <Row className="g-4">
            {howItWorks.map((item, index) => (
              <Col lg={3} md={6} key={index}>
                <Card className="border-0 shadow-sm h-100">
                  <Card.Body className="text-center p-4">
                    <Badge bg="primary" className="mb-3 px-3 py-2 fs-6 fw-normal">Étape {item.step}</Badge>
                    <div className="mb-3">{item.icon}</div>
                    <h5 className="fw-bold mb-3">{item.title}</h5>
                    <p className="text-muted mb-0">{item.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* L'équipe */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <img 
                src={teamImg} 
                alt="Notre équipe" 
                className="img-fluid rounded-3 shadow"
                style={{ maxHeight: '500px', width: '100%', objectFit: 'cover' }}
              />
            </Col>
            <Col lg={6}>
              <Badge bg="primary" className="mb-3 px-3 py-2 fs-6 fw-normal">Humain avant tout</Badge>
              <h2 className="mb-4 fw-bold">Une équipe passionnée</h2>
              <p className="lead text-muted mb-4">
                KiloToGo a été fondé par trois amis d'enfance originaires de Dakar, Paris et Montréal, 
                unis par une vision commune.
              </p>
              <ul className="mb-4">
                <li className="mb-2">Amélioration continue de l'expérience utilisateur</li>
                <li className="mb-2">Extension de notre réseau de destinations</li>
                <li className="mb-2">Garantie de sécurité pour toutes vos transactions</li>
                <li className="mb-2">Construction d'une communauté de membres fiables</li>
              </ul>
              <Button variant="primary" className="px-4">
                Rencontrer l'équipe
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Final */}
      <section 
        className="py-5 text-white text-center"
        style={{ background: `linear-gradient(135deg, #2E86DE 0%, #1a5fb4 100%)` }}
      >
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <h2 className="mb-4 fw-bold">Prêt à nous rejoindre ?</h2>
              <p className="lead mb-5 fs-5">
                Que vous soyez voyageur occasionnel, expatrié ou simplement curieux, KiloToGo a une solution adaptée pour vous.
              </p>
              <div className="d-flex justify-content-center gap-3">
                <Button variant="light" size="lg" className="px-4 fw-bold">
                  Commencer maintenant
                </Button>
                <Button variant="outline-light" size="lg" className="px-4">
                  Contactez-nous
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Apropos;