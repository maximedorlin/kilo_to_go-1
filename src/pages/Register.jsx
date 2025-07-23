import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert, Card, Spinner } from 'react-bootstrap';
import { FaUser, FaEnvelope, FaLock, FaUserPlus, FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/Global.css';
import { registerUser } from '../services/authService';
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'password') {
      // Calcul de la force du mot de passe
      let strength = 0;
      if (value.length > 0) strength += 1;
      if (value.length >= 8) strength += 1;
      if (/[A-Z]/.test(value)) strength += 1;
      if (/[0-9]/.test(value)) strength += 1;
      if (/[^A-Za-z0-9]/.test(value)) strength += 1;
      setPasswordStrength(strength);
    }
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError('');
  setSuccess(false);

  try {
    if (formData.password !== formData.confirmPassword) {
      throw new Error('Les mots de passe ne correspondent pas');
    }

    if (passwordStrength < 3) {
      throw new Error('Le mot de passe est trop faible');
    }

    await registerUser(formData.email, formData.password);
    setSuccess(true);
    setTimeout(() => navigate('/login'), 2500); // Redirection après 2.5s
  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="auth-page">
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={8} lg={6} xl={5}>
            <Card className="auth-card shadow">
              <Card.Body className="p-4 p-md-5">
                <div className="text-center mb-4">
                  <h2 className="auth-title">
                    <FaUserPlus className="me-2" />
                    Créer un compte
                  </h2>
                  <p className="auth-subtitle">
                    Rejoignez la communauté KiloToGo
                  </p>
                </div>

                {error && <Alert variant="danger" className="text-center">{error}</Alert>}
                {success && (
                  <Alert variant="success" className="text-center">
                    <FaCheck className="me-2" />
                    Inscription réussie ! Vous pouvez maintenant vous connecter.
                  </Alert>
                )}

                {!success && (
                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Prénom</Form.Label>
                          <div className="input-group">
                            <span className="input-group-text">
                              <FaUser />
                            </span>
                            <Form.Control
                              type="text"
                              name="firstName"
                              placeholder="Votre prénom"
                              value={formData.firstName}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Nom</Form.Label>
                          <div className="input-group">
                            <span className="input-group-text">
                              <FaUser />
                            </span>
                            <Form.Control
                              type="text"
                              name="lastName"
                              placeholder="Votre nom"
                              value={formData.lastName}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <FaEnvelope />
                        </span>
                        <Form.Control
                          type="email"
                          name="email"
                          placeholder="votre@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Mot de passe</Form.Label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <FaLock />
                        </span>
                        <Form.Control
                          type="password"
                          name="password"
                          placeholder="Créez un mot de passe"
                          value={formData.password}
                          onChange={handleChange}
                          required
                          minLength={8}
                        />
                      </div>
                      <div className="password-strength mt-2">
                        <div className={`strength-bar ${passwordStrength > 0 ? 'active' : ''}`}></div>
                        <div className={`strength-bar ${passwordStrength > 1 ? 'active' : ''}`}></div>
                        <div className={`strength-bar ${passwordStrength > 2 ? 'active' : ''}`}></div>
                        <div className={`strength-bar ${passwordStrength > 3 ? 'active' : ''}`}></div>
                        <span className="strength-text ms-2">
                          {passwordStrength === 0 && 'Très faible'}
                          {passwordStrength === 1 && 'Faible'}
                          {passwordStrength === 2 && 'Moyen'}
                          {passwordStrength === 3 && 'Fort'}
                          {passwordStrength === 4 && 'Très fort'}
                        </span>
                      </div>
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label>Confirmer le mot de passe</Form.Label>
                      <div className="input-group">
                        <span className="input-group-text">
                          <FaLock />
                        </span>
                        <Form.Control
                          type="password"
                          name="confirmPassword"
                          placeholder="Confirmez le mot de passe"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          required
                          minLength={8}
                        />
                      </div>
                    </Form.Group>

                    <Form.Check
                      type="checkbox"
                      label="J'accepte les conditions d'utilisation"
                      id="terms"
                      className="mb-4"
                      required
                    />

                    <Button 
                      variant="primary" 
                      type="submit" 
                      className="w-100 auth-btn"
                      disabled={loading}
                    >
                      {loading ? (
                        <Spinner as="span" animation="border" size="sm" />
                      ) : (
                        "S'inscrire"
                      )}
                    </Button>

                    <div className="text-center mt-4">
                      <span>Vous avez déjà un compte ? </span>
                      <Link to="/login" className="fw-bold text-primary">
                        Connectez-vous
                      </Link>
                    </div>
                  </Form>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;