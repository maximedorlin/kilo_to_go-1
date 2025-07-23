import React, { useState, useEffect, useRef } from 'react';
import { Container, Card, Form, Button, Badge, Spinner, Alert } from 'react-bootstrap';
import { useParams } from 'react-router-dom'; // Importez useParams
import { io } from 'socket.io-client';
import PaymentModal from '../composants/PaymentModal';
import '../styles/Messagerie.css';

const MessagePage = () => {
  const { conversationId } = useParams(); // Utilisez useParams pour obtenir les paramètres
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showPayment, setShowPayment] = useState(false);
  const [onlineStatus, setOnlineStatus] = useState(false);
  const messagesEndRef = useRef(null);
  const socketRef = useRef(null);

  useEffect(() => {
    if (!conversationId) {
      setError("ID de conversation manquant");
      setLoading(false);
      return;
    }

    try {
      socketRef.current = io(process.env.REACT_APP_WS_URL || 'http://localhost:3001');

      const socket = socketRef.current;

      const handleConnect = () => {
        console.log('Connected to WebSocket');
        loadMessages();
      };

      const handleConnectError = (err) => {
        console.error('Connection error:', err);
        setError('Erreur de connexion au serveur de messagerie');
        setLoading(false);
      };

      socket.on('connect', handleConnect);
      socket.on('connect_error', handleConnectError);
      socket.on('newMessage', handleNewMessage);
      socket.on('userStatus', setOnlineStatus);

      return () => {
        socket.off('connect', handleConnect);
        socket.off('connect_error', handleConnectError);
        socket.off('newMessage', handleNewMessage);
        socket.off('userStatus', setOnlineStatus);
        socket.disconnect();
      };
    } catch (err) {
      setError('Erreur lors de la configuration de la messagerie');
      setLoading(false);
    }
  }, [conversationId]); // Utilisez conversationId comme dépendance

  // ... (le reste de votre code reste inchangé)
  
  const handleSend = () => {
    try {
      if (!newMessage.trim()) return;

      const message = {
        id: Date.now(),
        from: 'user',
        text: newMessage,
        timestamp: new Date().toISOString()
      };

      if (socketRef.current?.connected) {
        socketRef.current.emit('sendMessage', {
          conversationId, // Utilisez directement conversationId
          message
        });
      } else {
        setMessages(prev => [...prev, message]);
      }

      setNewMessage('');
      scrollToBottom();
    } catch (err) {
      console.error('Error sending message:', err);
      setError("Erreur lors de l'envoi du message");
    }
  };

  // ... (le reste de votre composant)
};

export default MessagePage;