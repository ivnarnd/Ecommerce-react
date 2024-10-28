import { NavLink } from 'react-router-dom';
import './HamburgerMenu.css'; 
import { useState } from 'react';
const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header>
      
      {/* Botón de hamburguesa */}
      <button className="hamburger" onClick={toggleMenu}>
        <div className={`bar1 ${isOpen ? 'change' : ''}`}></div>
        <div className={`bar2 ${isOpen ? 'change' : ''}`}></div>
        <div className={`bar3 ${isOpen ? 'change' : ''}`}></div>
      </button>

      {/* Menú de navegación */}
      <nav className={`menu ${isOpen ? 'menu-open' : ''}`}>
        <NavLink to="/category/Repostería" onClick={toggleMenu}>Budines</NavLink>
        <NavLink to="/category/Merienda" onClick={toggleMenu}>Panes</NavLink>
        <NavLink to="/category/Postre" onClick={toggleMenu}>Cookies</NavLink>
        <NavLink to="/category/Desayuno" onClick={toggleMenu}>Tortas</NavLink>
      </nav>
    </header>
  );
};

export default HamburgerMenu;
