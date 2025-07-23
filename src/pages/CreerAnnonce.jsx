import React, { useState } from 'react';
import {
  Container, Form, Button, Row, Col, Alert, Card, FloatingLabel, Spinner
} from 'react-bootstrap';
import {
  FaPlane, FaBoxOpen, FaInfoCircle, FaCalendarAlt, FaWeightHanging
} from 'react-icons/fa';
import { MdDescription, MdLocalShipping } from 'react-icons/md';
import '../styles/Global.css';

import { db, storage } from '../services/firebaseConfig';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useAuth } from '../services/AuthContext';

const CreerAnnonce = () => {
  const [formData, setFormData] = useState({
    titre: '',
    PaysDepart: '',
    PaysArrivee: '',
    villeDepart: '',
    villeArrivee: '',
    dateDepart: '',
    dateArrivee: '',
    poidsDisponible: '',
    prixParKilo: '',
    typeTransport: 'avion',
    description: '',
    restrictions: '',
    emballageFourni: false,
    assuranceIncluse: false,
    photoBillet: null,
    photoColis: null
  });

  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', variant: '' });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleBilletChange = (e) => {
    setFormData({ ...formData, photoBillet: e.target.files[0] });
  };

  const handleColisChange = (e) => {
    setFormData({ ...formData, photoColis: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const requiredFields = ['titre', 'villeDepart', 'villeArrivee', 'dateDepart', 'poidsDisponible', 'prixParKilo'];
    const missingFields = requiredFields.filter(field => !formData[field]);

    if (missingFields.length > 0) {
      setMessage({
        text: `Veuillez remplir les champs obligatoires: ${missingFields.join(', ')}`,
        variant: 'danger'
      });
      setIsLoading(false);
      return;
    }

    if (!user) {
      setMessage({ text: "Vous devez être connecté pour publier une annonce.", variant: 'warning' });
      setIsLoading(false);
      return;
    }

    try {
      // Upload photoBillet
      let photoBilletURL = null;
      if (formData.photoBillet) {
        const refBillet = ref(storage, `annonces/${Date.now()}-billet-${formData.photoBillet.name}`);
        await uploadBytes(refBillet, formData.photoBillet);
        photoBilletURL = await getDownloadURL(refBillet);
      }

      // Upload photoColis
      let photoColisURL = null;
      if (formData.photoColis) {
        const refColis = ref(storage, `annonces/${Date.now()}-colis-${formData.photoColis.name}`);
        await uploadBytes(refColis, formData.photoColis);
        photoColisURL = await getDownloadURL(refColis);
      }

      // Enregistrer dans Firestore
      const annonceRef = await addDoc(collection(db, 'annonces'), {
        titre: formData.titre,
        PaysDepart: formData.PaysDepart,
        PaysArrivee: formData.PaysArrivee,
        villeDepart: formData.villeDepart,
        villeArrivee: formData.villeArrivee,
        dateDepart: formData.dateDepart,
        dateArrivee: formData.dateArrivee || '',
        poidsDisponible: formData.poidsDisponible,
        prixParKilo: formData.prixParKilo,
        typeTransport: formData.typeTransport,
        description: formData.description,
        restrictions: formData.restrictions,
        emballageFourni: formData.emballageFourni,
        assuranceIncluse: formData.assuranceIncluse,
        photoBilletURL,
        photoColisURL,
        utilisateurId: user.uid,
        emailUtilisateur: user.email,
        dateCreation: Timestamp.now()
      });

      console.log("Annonce créée avec ID :", annonceRef.id);
      setMessage({ text: "Annonce créée avec succès !", variant: 'success' });

      // Reset du formulaire
      setFormData({
        titre: '',
        PaysDepart: '',
        PaysArrivee: '',
        villeDepart: '',
        villeArrivee: '',
        dateDepart: '',
        dateArrivee: '',
        poidsDisponible: '',
        prixParKilo: '',
        typeTransport: 'avion',
        description: '',
        restrictions: '',
        emballageFourni: false,
        assuranceIncluse: false,
        photoBillet: null,
        photoColis: null
      });

    } catch (error) {
      console.error("Erreur lors de la création :", error);
      setMessage({ text: "Erreur lors de la création de l'annonce", variant: 'danger' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="creer-annonce-page">
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col lg={10} xl={8}>
            <Card className="border-0 shadow-sm">
              <Card.Header className="bg-primary text-white py-3">
                <h2 className="mb-0 d-flex align-items-center">
                  <MdLocalShipping className="me-2" />
                  Créer une nouvelle annonce de transport
                </h2>
              </Card.Header>
              <Card.Body className="p-4 p-md-5">
                {message.text && (
                  <Alert variant={message.variant} className="text-center">
                    {message.text}
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  {/* SECTION 1 : Infos de base */}
                  <section className="mb-5">
                    <h5 className="d-flex align-items-center mb-4 text-primary">
                      <FaInfoCircle className="me-2" /> Informations de base
                    </h5>

                    <FloatingLabel controlId="titre" label="Titre de l'annonce*" className="mb-3">
                      <Form.Control
                        type="text"
                        name="titre"
                        value={formData.titre}
                        onChange={handleChange}
                        placeholder="Ex: 10kg disponibles Paris → Douala"
                        required
                      />
                    </FloatingLabel>

                    <Row className="g-3 mb-3">
                      <Col md={6}>
                        <FloatingLabel controlId="PaysDepart" label="Pays de départ*">
                          <Form.Control
                            type="text"
                            name="PaysDepart"
                            value={formData.PaysDepart}
                            onChange={handleChange}
                            required
                          />
                        </FloatingLabel>
                      </Col>
                      <Col md={6}>
                        <FloatingLabel controlId="PaysArrivee" label="Pays d'arrivée*">
                          <Form.Control
                            type="text"
                            name="PaysArrivee"
                            value={formData.PaysArrivee}
                            onChange={handleChange}
                            required
                          />
                        </FloatingLabel>
                      </Col>
                      <Col md={6}>
                        <FloatingLabel controlId="villeDepart" label="Ville de départ*">
                          <Form.Control
                            type="text"
                            name="villeDepart"
                            value={formData.villeDepart}
                            onChange={handleChange}
                            required
                          />
                        </FloatingLabel>
                      </Col>
                      <Col md={6}>
                        <FloatingLabel controlId="villeArrivee" label="Ville d'arrivée*">
                          <Form.Control
                            type="text"
                            name="villeArrivee"
                            value={formData.villeArrivee}
                            onChange={handleChange}
                            required
                          />
                        </FloatingLabel>
                      </Col>
                    </Row>
                  </section>

                  {/* SECTION 2 : Dates */}
                  <section className="mb-5">
                    <h5 className="d-flex align-items-center mb-4 text-primary">
                      <FaCalendarAlt className="me-2" /> Dates de voyage
                    </h5>

                    <Row className="g-3">
                      <Col md={6}>
                        <FloatingLabel controlId="dateDepart" label="Date de départ*">
                          <Form.Control
                            type="date"
                            name="dateDepart"
                            value={formData.dateDepart}
                            onChange={handleChange}
                            min={new Date().toISOString().split('T')[0]}
                            required
                          />
                        </FloatingLabel>
                      </Col>
                      <Col md={6}>
                        <FloatingLabel controlId="dateArrivee" label="Date d'arrivée (optionnel)">
                          <Form.Control
                            type="date"
                            name="dateArrivee"
                            value={formData.dateArrivee}
                            onChange={handleChange}
                            min={formData.dateDepart || new Date().toISOString().split('T')[0]}
                          />
                        </FloatingLabel>
                      </Col>
                    </Row>
                  </section>

                  {/* SECTION 3 : Détails */}
                  <section className="mb-5">
                    <h5 className="d-flex align-items-center mb-4 text-primary">
                      <FaWeightHanging className="me-2" /> Détails du transport
                    </h5>

                    <Row className="g-3 mb-3">
                      <Col md={6}>
                        <FloatingLabel controlId="poidsDisponible" label="Poids disponible (kg)*">
                          <Form.Control
                            type="number"
                            name="poidsDisponible"
                            value={formData.poidsDisponible}
                            onChange={handleChange}
                            min="0.1"
                            step="0.1"
                            required
                          />
                        </FloatingLabel>
                      </Col>
                      <Col md={6}>
                        <FloatingLabel controlId="prixParKilo" label="Prix par kilo (€)*">
                          <Form.Control
                            type="number"
                            name="prixParKilo"
                            value={formData.prixParKilo}
                            onChange={handleChange}
                            min="0.1"
                            step="0.1"
                            required
                          />
                        </FloatingLabel>
                      </Col>
                    </Row>

                    <FloatingLabel controlId="typeTransport" label="Mode de transport">
                      <Form.Select
                        name="typeTransport"
                        value={formData.typeTransport}
                        onChange={handleChange}
                      >
                        <option value="avion">Avion</option>
                        <option value="voiture">Voiture</option>
                        <option value="train">Train</option>
                        <option value="bateau">Bateau</option>
                      </Form.Select>
                    </FloatingLabel>
                  </section>

                  {/* SECTION 4 : Description */}
                  <section className="mb-5">
                    <h5 className="d-flex align-items-center mb-4 text-primary">
                      <MdDescription className="me-2" /> Description et restrictions
                    </h5>

                    <FloatingLabel controlId="description" label="Description*" className="mb-3">
                      <Form.Control
                        as="textarea"
                        rows={4}
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                      />
                    </FloatingLabel>

                    <FloatingLabel controlId="restrictions" label="Restrictions">
                      <Form.Control
                        as="textarea"
                        rows={2}
                        name="restrictions"
                        value={formData.restrictions}
                        onChange={handleChange}
                      />
                    </FloatingLabel>
                  </section>

                  {/* SECTION 5 : Photos */}
                  <section className="mb-4">
                    <h5 className="d-flex align-items-center mb-4 text-primary">
                      <FaBoxOpen className="me-2" /> Photos
                    </h5>

                    <Form.Group controlId="photoBillet" className="mb-3">
                      <Form.Label>Photo du billet d’avion (optionnel)</Form.Label>
                      <Form.Control type="file" accept="image/*" onChange={handleBilletChange} />
                    </Form.Group>

                    <Form.Group controlId="photoColis" className="mb-3">
                      <Form.Label>Photo du colis ou de vous (optionnel)</Form.Label>
                      <Form.Control type="file" accept="image/*" onChange={handleColisChange} />
                    </Form.Group>
                  </section>

                  {/* BOUTON */}
                  <div className="d-grid mt-5">
                    <Button variant="primary" size="lg" type="submit" disabled={isLoading}>
                      {isLoading ? (
                        <>
                          <Spinner animation="border" size="sm" className="me-2" /> Publication en cours...
                        </>
                      ) : (
                        <>
                          <FaPlane className="me-2" /> Publier mon annonce
                        </>
                      )}
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CreerAnnonce;
