/* Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Aluno: Elias Everson da Silva Soares– 211983
DATA: 29/03/2023 */

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';
import Formulario from './Componentes/Formulario';
import Home from './Componentes/Home';
import Imagens from './Componentes/Imagens';
import Menu from './Componentes/Menu';
import Tabelas from './Componentes/Tabelas';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/formulario" element={<Formulario/>}/>
        <Route path="/tabelas" element={<Tabelas/>}/>
        <Route path="/imagens" element={<Imagens/>}/>
        <Route path="/menu" element={<Menu/>}/>
      </Routes>
    </Router>
  );
}

export default App;
