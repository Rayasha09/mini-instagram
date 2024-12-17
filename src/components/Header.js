import React from 'react';
import './Header.css'; // Стили для Header (опционально)

const Header = () => {
  return (
    <header className="header">
      <h1>VibePics</h1>
      <nav>
        <ul>
          <li><a href="#home">Главная</a></li>
          <li><a href="#profile">Профиль</a></li>
          <li><a href="#posts">Посты</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
