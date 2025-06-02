// src\components\BemVindo\index.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import logo from '../../assets/images/logo-psg.png';
import fundo from '../../assets/images/bola.webp';

function PaginaInicial() {
  const navigate = useNavigate();

  const handleCadastroClick = () => {
    navigate('/cadastro');
  };

  return (
    <div>
      <img src={fundo} alt="Fundo da pagina" className="fundo" />
      <div className="container">
        <img src={logo} alt="Logo" />
        <h1>Seja Bem-Vindo(a) ao PSG!</h1>
        <button type="button" onClick={handleCadastroClick} className='btn-cadastro'>
          Página de Cadastro
        </button>
      </div>
    </div>
  );
}

export default PaginaInicial;