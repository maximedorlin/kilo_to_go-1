import React, { useState, useEffect, useRef } from 'react';
import { Container, ListGroup, Badge, Spinner, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Messagerie.css';

// Mock data en attendant la connexion Socket.io
const useConversations = () => {
  const [conversations, setConversations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchConversations = async () => {
      try {
        // Simuler un appel API
        setTimeout(() => {
          const mockData = [
            {
              id: 'conv-1',
              annonceId: 101,
              titreAnnonce: "10 kg dispo - Douala → Paris",
              dernierMessage: {
                text: "Merci, j'envoie le code ce soir.",
                timestamp: new Date(Date.now() - 3600000).toISOString(),
                read: false
              },
              interlocuteur: {
                id: 'user-2',
                name: "Jean",
                online: true
              },
              unread: 2
            },
            {
              id: 'conv-2',
              annonceId: 102,
              titreAnnonce: "8 kg - Yaoundé → Bruxelles",
              dernierMessage: {
                text: "Est-ce que je peux envoyer un petit colis ?",
                timestamp: new Date(Date.now() - 86400000).toISOString(),
                read: true
              },
              interlocuteur: {
                id: 'user-3',
                name: "Clara",
                online: false
              },
              unread: 0
            }
          ];
          setConversations(mockData);
          setLoading(false);
        }, 800);
      } catch (err) {
        setError("Erreur de chargement des conversations");
        setLoading(false);
      }
    };

    fetchConversations();

    // Dans une vraie implémentation, vous initialiseriez Socket.io ici
    /*
    const socket = io(process.env.REACT_APP_WS_URL);
    socket.on('newMessageNotification', handleNewMessage);
    return () => socket.disconnect();
    */
  }, []);

  return { conversations, loading, error };
};

const MesMessages = () => {
  const { conversations, loading, error } = useConversations();
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    setUnreadCount(conversations.reduce((acc, conv) => acc + conv.unread, 0));
  }, [conversations]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    
    if (date.toDateString() === now.toDateString()) {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
    return date.toLocaleDateString([], { day: 'numeric', month: 'short' });
  };

  return (
    <div className="conversations-container">
      <Container className="py-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="conversations-title">
            <i className="bi bi-chat-left-text"></i> Mes conversations
          </h3>
          {unreadCount > 0 && (
            <Badge bg="danger" pill className="unread-badge">
              {unreadCount} non lus
            </Badge>
          )}
        </div>

        {error && <Alert variant="danger">{error}</Alert>}

        {loading ? (
          <div className="text-center p-5">
            <Spinner animation="border" variant="primary" />
          </div>
        ) : (
          <ListGroup variant="flush" className="conversation-list">
            {conversations.map((conv) => (
              <ListGroup.Item 
                key={conv.id}
                as={Link}
                to={`/messages/${conv.annonceId}`}
                className={`conversation-item ${conv.unread > 0 ? 'unread' : ''}`}
              >
                <div className="d-flex align-items-center">
                  <div className={`status-indicator ${conv.interlocuteur.online ? 'online' : 'offline'}`}></div>
                  <div className="conversation-content">
                    <div className="d-flex justify-content-between">
                      <h5 className="conversation-title">{conv.titreAnnonce}</h5>
                      <small className="message-time">
                        {formatDate(conv.dernierMessage.timestamp)}
                      </small>
                    </div>
                    <div className="d-flex justify-content-between align-items-end">
                      <div>
                        <span className="interlocutor-name">{conv.interlocuteur.name}</span>
                        <p className={`message-preview ${!conv.dernierMessage.read ? 'unread' : ''}`}>
                          {conv.dernierMessage.text}
                        </p>
                      </div>
                      {conv.unread > 0 && (
                        <Badge bg="primary" pill>
                          {conv.unread}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Container>
    </div>
  );
};

export default MesMessages;