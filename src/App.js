import React, { useState } from 'react';
import './App.css'; // Importa tu archivo de estilos CSS si aún no lo has hecho
//import backgroundImage from './ruta-a-tu-imagen.jpg'; // Reemplaza 'ruta-a-tu-imagen.jpg' con la ruta real de tu imagen

function App() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  //const headerStyle = {
    //backgroundImage: `url(${backgroundImage})`, // Establece la imagen de fondo
  //};

  return (
    <div>
      <header className={`app-header ${menuVisible ? 'menu-open' : ''}`}>
        <div className="border-top"></div>
        <div className="center-rectangle">
          <button className="menu-button" onClick={toggleMenu}>☰</button>
        </div>
        {menuVisible && (
          <nav className="dropdown-menu">
            <ul>
              <li><a href="/">Inicio</a></li>
              <li><a href="/acerca-de">Acerca de</a></li>
              <li><a href="/contacto">Contacto</a></li>
            </ul>
          </nav>
        )}
      </header>
      <main>
        {/* Resto de tu contenido */}
      </main>
    </div>
  );
}

export default App;