import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavigationBar from './composants/NavigationBar';
import Footer from './composants/Footer';

import Accueil from './pages/Accueil.jsx';
import Conformite from './pages/Conformite.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Annonces from './pages/Annonces.jsx';
import CreerAnnonce from './pages/CreerAnnonce.jsx';
import MessagePage from './pages/MessagePage';
import Apropos from './pages/Apropos';
import MesMessages from './pages/MesMessages';
import Contact from './pages/Contact';
import MonProfil from './pages/MonProfil';

// // ✅ Pages fictives à protéger
// import MesAnnonces from './pages/MesAnnonces';     // à créer si pas encore fait
// import Parametres from './pages/Parametres';       // à créer aussi

// ✅ Route protégée
import RouteProtegee from './Routes/RouteProtegee';

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/conformite" element={<Conformite />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/annonces" element={<Annonces />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/contact" element={<Contact />} />

        {/* ✅ ROUTES PROTÉGÉES */}
        <Route
          path="/creerannonce"
          element={
            <RouteProtegee>
              <CreerAnnonce />
            </RouteProtegee>
          }
        />
        <Route
          path="/messages/:annonceId"
          element={
            <RouteProtegee>
              <MessagePage />
            </RouteProtegee>
          }
        />
        <Route
          path="/mes-messages"
          element={
            <RouteProtegee>
              <MesMessages />
            </RouteProtegee>
          }
        />
            <Route 
              path="/mon-profil" 
              element={
                <RouteProtegee>
                  <MonProfil />
                </RouteProtegee>
              } 
            />
            <Route path="/messages/:conversationId" element={<MessagePage />} />

        {/* <Route
          path="/mes-annonces"
          element={
            <RouteProtegee>
              <MesAnnonces />
            </RouteProtegee>
          }
        />
        <Route
          path="/parametres"
          element={
            <RouteProtegee>
              <Parametres />
            </RouteProtegee>
          }
        /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
