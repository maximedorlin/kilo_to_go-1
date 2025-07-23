import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert, Card, Spinner } from 'react-bootstrap';
import { FaLock, FaEnvelope, FaSignInAlt, FaGoogle, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/Global.css';
import { loginUser } from '../services/authService';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError('');

  try {
    await loginUser(formData.email, formData.password);
    setError('');
    navigate('/'); // Redirection vers la page d'accueil
  } catch (err) {
    setError('Email ou mot de passe incorrect');
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
                    <FaSignInAlt className="me-2" />
                    Connexion à KiloToGo
                  </h2>
                  <p className="auth-subtitle">
                    Accédez à votre espace personnel
                  </p>
                </div>

                {error && <Alert variant="danger" className="text-center">{error}</Alert>}

                <Form onSubmit={handleSubmit}>
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
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Votre mot de passe"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        minLength={6}
                      />
                      <Button 
                        variant="outline-secondary" 
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? 'Masquer' : 'Afficher'}
                      </Button>
                    </div>
                  </Form.Group>

                  <div className="d-flex justify-content-between mb-4">
                    <Form.Check
                      type="checkbox"
                      label="Se souvenir de moi"
                      id="rememberMe"
                    />
                    <Link to="/forgot-password" className="text-primary">
                      Mot de passe oublié ?
                    </Link>
                  </div>

                  <Button 
                    variant="primary" 
                    type="submit" 
                    className="w-100 auth-btn"
                    disabled={loading}
                  >
                    {loading ? (
                      <Spinner as="span" animation="border" size="sm" />
                    ) : (
                      'Se connecter'
                    )}
                  </Button>

                  <div className="text-center my-4 auth-divider">
                    <span>Ou connectez-vous avec</span>
                  </div>

                  <div className="d-flex gap-3 mb-4">
                    <Button variant="outline-danger" className="flex-grow-1">
                      <FaGoogle className="me-2" />
                      Google
                    </Button>
                    <Button variant="outline-primary" className="flex-grow-1">
                      <FaFacebook className="me-2" />
                      Facebook
                    </Button>
                  </div>

                  <div className="text-center mt-4">
                    <span>Vous n'avez pas de compte ? </span>
                    <Link to="/register" className="fw-bold text-primary">
                      Créez-en un
                    </Link>
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

export default Login;