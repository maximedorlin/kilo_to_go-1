
import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { FaMapMarkerAlt, FaSuitcaseRolling, FaThumbsUp, FaComments } from 'react-icons/fa';
import '../styles/Composants.css';

const CardAnnonce = ({ annonce, onLike, onMessage }) => {
  const {
    id,
    titre,
    description,
    poidsDisponible,
    villeDepart,
    villeArrivee,
    dateVoyage,
    likes,
  } = annonce;

  return (
    <Card className="annonce-card shadow-sm mb-4">
      <Card.Body>
        <Card.Title className="annonce-title">{titre}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          <FaMapMarkerAlt /> {villeDepart} &rarr; {villeArrivee} &nbsp;|&nbsp; <FaSuitcaseRolling /> {poidsDisponible} kg
        </Card.Subtitle>
        <Card.Text className="annonce-description">{description}</Card.Text>

        <div className="d-flex justify-content-between align-items-center mt-3">
          <div>
            <Badge bg="info" className="me-2">{new Date(dateVoyage).toLocaleDateString()}</Badge>
            <Badge bg="secondary">{likes} <FaThumbsUp /></Badge>
          </div>
          <div>
            <Button variant="outline-primary" size="sm" onClick={() => onLike(id)} className="me-2">
              <FaThumbsUp /> Like
            </Button>
            <Button variant="primary" size="sm" onClick={() => onMessage(id)}>
              <FaComments /> Discuter
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardAnnonce;
