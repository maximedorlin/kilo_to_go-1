import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Row, 
  Col, 
  Form, 
  Button, 
  Spinner, 
  Alert,
  Dropdown,
  ButtonGroup,
  Badge
} from 'react-bootstrap';
import { 
  FaFilter, 
  FaLocationArrow, 
  FaCalendarAlt,
  FaPlane,
  FaCar,
  FaTrain,
  FaShip,
  FaHeart,
  FaRegHeart,
  FaStar,
  FaRegStar,
  FaComments,
  FaSortUp,
  FaSortDown,
  FaExternalLinkAlt
} from 'react-icons/fa';
import CardAnnonce from '../composants/CardAnnonce';
import '../styles/Global.css';

// Mock data avec plus de détails
const annoncesMock = [
  {
    id: 1,
    titre: "10 kg disponibles - Douala vers Paris",
    description: "Vol direct Air France le 25 juillet. Je peux transporter des objets jusqu'à 5kg par colis. Emballage sécurisé recommandé.",
    poidsDisponible: 10,
    villeDepart: "Douala",
    villeArrivee: "Paris",
    dateDepart: "2025-07-25",
    dateArrivee: "2025-07-26",
    prixKilo: 8,
    typeTransport: "avion",
    note: 4.5,
    avis: 12,
    likes: 4,
    isLiked: false,
    isFavorite: false,
    photos: ["bagage1.jpg", "bagage2.jpg"]
  },
  {
    id: 2,
    titre: "8 kg disponibles - Yaoundé vers Bruxelles",
    description: "Transport sécurisé, possibilité de prendre des documents importants. Je voyage avec Brussels Airlines.",
    poidsDisponible: 8,
    villeDepart: "Yaoundé",
    villeArrivee: "Bruxelles",
    dateDepart: "2025-08-10",
    dateArrivee: "2025-08-11",
    prixKilo: 7.5,
    typeTransport: "avion",
    note: 4.2,
    avis: 8,
    likes: 2,
    isLiked: false,
    isFavorite: false,
    photos: ["bagage3.jpg"]
  },
  {
    id: 3,
    titre: "15 kg en voiture - Libreville à Dakar",
    description: "Trajet en voiture via plusieurs pays. Je pars le 15 août avec possibilité de transport sécurisé pour vos colis.",
    poidsDisponible: 15,
    villeDepart: "Libreville",
    villeArrivee: "Dakar",
    dateDepart: "2025-08-15",
    dateArrivee: "2025-08-20",
    prixKilo: 5,
    typeTransport: "voiture",
    note: 4.7,
    avis: 15,
    likes: 7,
    isLiked: false,
    isFavorite: false,
    photos: ["voiture1.jpg", "voiture2.jpg"]
  }
];

const Annonces = () => {
  const [annonces, setAnnonces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    villeDepart: '',
    villeArrivee: '',
    dateDepart: '',
    poidsMin: '',
    poidsMax: '',
    typeTransport: '',
    prixMax: ''
  });
  const [sortOption, setSortOption] = useState('date-asc');
  const [showFilters, setShowFilters] = useState(false);
  const [error, setError] = useState('');

  // Simuler un chargement asynchrone
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnnonces(annoncesMock);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleResetFilters = () => {
    setFilters({
      PaysDepart:'',
      PaysArrivee: '',
      villeDepart: '',
      villeArrivee: '',
      dateDepart: '',
      poidsMin: '',
      poidsMax: '',
      typeTransport: '',
      prixMax: ''
    });
  };

  const handleLike = (id) => {
    setAnnonces(annonces.map(annonce => 
      annonce.id === id ? { 
        ...annonce, 
        likes: annonce.isLiked ? annonce.likes - 1 : annonce.likes + 1,
        isLiked: !annonce.isLiked
      } : annonce
    ));
  };

  const handleFavorite = (id) => {
    setAnnonces(annonces.map(annonce => 
      annonce.id === id ? { 
        ...annonce, 
        isFavorite: !annonce.isFavorite 
      } : annonce
    ));
  };

  const handleMessage = (id) => {
    alert(`Ouverture messagerie pour l'annonce ${id}`);
  };

  const filteredAnnonces = annonces.filter(annonce => {
    return (
      (filters.villeDepart === '' || annonce.villeDepart.toLowerCase().includes(filters.villeDepart.toLowerCase())) &&
      (filters.villeArrivee === '' || annonce.villeArrivee.toLowerCase().includes(filters.villeArrivee.toLowerCase())) &&
      (filters.dateDepart === '' || annonce.dateDepart >= filters.dateDepart) &&
      (filters.poidsMin === '' || annonce.poidsDisponible >= Number(filters.poidsMin)) &&
      (filters.poidsMax === '' || annonce.poidsDisponible <= Number(filters.poidsMax)) &&
      (filters.typeTransport === '' || annonce.typeTransport === filters.typeTransport) &&
      (filters.prixMax === '' || annonce.prixKilo <= Number(filters.prixMax))
    );
  });

  const sortedAnnonces = [...filteredAnnonces].sort((a, b) => {
    switch(sortOption) {
      case 'date-asc':
        return new Date(a.dateDepart) - new Date(b.dateDepart);
      case 'date-desc':
        return new Date(b.dateDepart) - new Date(a.dateDepart);
      case 'prix-asc':
        return a.prixKilo - b.prixKilo;
      case 'prix-desc':
        return b.prixKilo - a.prixKilo;
      case 'poids-asc':
        return a.poidsDisponible - b.poidsDisponible;
      case 'poids-desc':
        return b.poidsDisponible - a.poidsDisponible;
      case 'note-desc':
        return b.note - a.note;
      default:
        return 0;
    }
  });

  const getTransportIcon = (type) => {
    switch(type) {
      case 'avion': return <FaPlane className="me-1" />;
      case 'voiture': return <FaCar className="me-1" />;
      case 'train': return <FaTrain className="me-1" />;
      case 'bateau': return <FaShip className="me-1" />;
      default: return <FaPlane className="me-1" />;
    }
  };

  return (
    <div className="annonces-page">
      <Container className="py-4">
        {/* Header avec titre et actions */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="page-title">
            <FaExternalLinkAlt className="me-2" />
            Annonces de transport disponibles
          </h1>
          <Button 
            variant="orange" 
            href="/creerannonce"
            className="d-flex align-items-center"
          >
            <span>+ Créer une annonce</span>
          </Button>
        </div>

        {/* Filtres et tri */}
        <div className="filters-section mb-4 p-3 rounded bg-light">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h3 className="section-title">
              <FaFilter className="me-2" />
              Filtres et tri
            </h3>
            <Button 
              variant="link" 
              onClick={() => setShowFilters(!showFilters)}
              className="text-decoration-none"
            >
              {showFilters ? 'Masquer les filtres' : 'Afficher les filtres'}
            </Button>
          </div>

          {showFilters && (
            <Row className="g-3 mb-3">
              <Col md={6} lg={3}>
                <Form.Group>
                  <Form.Label>
                    <FaLocationArrow className="me-2" />
                    Pays de départ
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="PaysDepart"
                    placeholder="Ex: Cameroun"
                    value={filters.PaysDepart}
                    onChange={handleFilterChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6} lg={3}>
                <Form.Group>
                  <Form.Label>
                    <FaLocationArrow className="me-2" />
                    Pays D'Arrivé
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="PaysArrivee"
                    placeholder="Ex: Canana"
                    value={filters.PaysArrivee}
                    onChange={handleFilterChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6} lg={3}>
                <Form.Group>
                  <Form.Label>
                    <FaLocationArrow className="me-2" />
                    Ville de départ
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="villeDepart"
                    placeholder="Ex: Yaoundé"
                    value={filters.villeDepart}
                    onChange={handleFilterChange}
                  />
                </Form.Group>
              </Col>
              
              <Col md={6} lg={3}>
                <Form.Group>
                  <Form.Label>
                    <FaLocationArrow className="me-2" />
                    Ville d'arrivée
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="villeArrivee"
                    placeholder="Ex: MontReal"
                    value={filters.villeArrivee}
                    onChange={handleFilterChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6} lg={3}>
                <Form.Group>
                  <Form.Label>
                    <FaCalendarAlt className="me-2" />
                    Date de départ
                  </Form.Label>
                  <Form.Control
                    type="date"
                    name="dateDepart"
                    min={new Date().toISOString().split('T')[0]}
                    value={filters.dateDepart}
                    onChange={handleFilterChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6} lg={3}>
                <Form.Group>
                  <Form.Label>
                    <FaFilter className="me-2" />
                    Type de transport
                  </Form.Label>
                  <Form.Select
                    name="typeTransport"
                    value={filters.typeTransport}
                    onChange={handleFilterChange}
                  >
                    <option value="">Tous</option>
                    <option value="avion">Avion</option>
                    <option value="voiture">Voiture</option>
                    <option value="train">Train</option>
                    <option value="bateau">Bateau</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6} lg={3}>
                <Form.Group>
                  <Form.Label>Poids min (kg)</Form.Label>
                  <Form.Control
                    type="number"
                    name="poidsMin"
                    min="0"
                    placeholder="Min"
                    value={filters.poidsMin}
                    onChange={handleFilterChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6} lg={3}>
                <Form.Group>
                  <Form.Label>Poids max (kg)</Form.Label>
                  <Form.Control
                    type="number"
                    name="poidsMax"
                    min="0"
                    placeholder="Max"
                    value={filters.poidsMax}
                    onChange={handleFilterChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6} lg={3}>
                <Form.Group>
                  <Form.Label>Prix max/kg (Fcfa)</Form.Label>
                  <Form.Control
                    type="number"
                    name="prixMax"
                    min="0"
                    step="0.5"
                    placeholder="Prix maximum"
                    value={filters.prixMax}
                    onChange={handleFilterChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6} lg={3} className="d-flex align-items-end">
                <Button 
                  variant="outline-secondary" 
                  onClick={handleResetFilters}
                  className="w-100"
                >
                  Réinitialiser
                </Button>
              </Col>
            </Row>
          )}

          <div className="d-flex justify-content-between align-items-center">
            <div className="results-count">
              {filteredAnnonces.length} {filteredAnnonces.length > 1 ? 'annonces trouvées' : 'annonce trouvée'}
            </div>
            <Dropdown as={ButtonGroup}>
              <Dropdown.Toggle variant="outline-primary">
                <FaFilter className="me-2" />
                Trier par: {{
                  'date-asc': 'Date (plus ancien)',
                  'date-desc': 'Date (plus récent)',
                  'prix-asc': 'Prix (croissant)',
                  'prix-desc': 'Prix (décroissant)',
                  'poids-asc': 'Poids (croissant)',
                  'poids-desc': 'Poids (décroissant)',
                  'note-desc': 'Meilleures notes'
                }[sortOption]}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setSortOption('date-asc')}>
                  <FaSortUp className="me-2" /> Date (plus ancien)
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSortOption('date-desc')}>
                  <FaSortDown className="me-2" /> Date (plus récent)
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={() => setSortOption('prix-asc')}>
                  <FaSortUp className="me-2" /> Prix (croissant)
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSortOption('prix-desc')}>
                  <FaSortDown className="me-2" /> Prix (décroissant)
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={() => setSortOption('poids-asc')}>
                  <FaSortUp className="me-2" /> Poids (croissant)
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSortOption('poids-desc')}>
                  <FaSortDown className="me-2" /> Poids (décroissant)
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={() => setSortOption('note-desc')}>
                  <FaStar className="me-2" /> Meilleures notes
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>

        {/* Résultats */}
        {loading ? (
          <div className="text-center py-5">
            <Spinner animation="border" variant="primary" />
            <p className="mt-3">Chargement des annonces...</p>
          </div>
        ) : error ? (
          <Alert variant="danger">{error}</Alert>
        ) : sortedAnnonces.length > 0 ? (
          <Row className="g-4">
            {sortedAnnonces.map(annonce => (
              <Col key={annonce.id} md={6} lg={4} xl={3}>
                <CardAnnonce
                  annonce={annonce}
                  onLike={handleLike}
                  onFavorite={handleFavorite}
                  onMessage={handleMessage}
                  transportIcon={getTransportIcon(annonce.typeTransport)}
                />
              </Col>
            ))}
          </Row>
        ) : (
          <div className="text-center py-5">
            <img 
              src="/empty-state.svg" 
              alt="Aucune annonce trouvée" 
              className="empty-state-img mb-4"
              style={{ maxWidth: '300px', opacity: 0.7 }}
            />
            <h4 className="text-muted">Aucune annonce ne correspond à vos critères</h4>
            <Button 
              variant="outline-primary" 
              onClick={handleResetFilters}
              className="mt-3"
            >
              Réinitialiser les filtres
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Annonces;