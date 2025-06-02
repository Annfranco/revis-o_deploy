import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaginaCadastro from './pages/Cadastro';
import PaginaListaUsuarios from './pages/Lista';
import Inicial from './pages/Inicial';
import './App.css'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicial />} />
        <Route path="/usuarios" element={<PaginaListaUsuarios />} />
        <Route path="/cadastro" element={<PaginaCadastro />}/>
      </Routes>
    </Router>
  );
}

export default App;