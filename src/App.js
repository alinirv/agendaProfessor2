import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div id='principal'>
      <Header />
      <main>
        <p>Gerencie seus contatos</p>
        {ListaDeContatos()}
      </main>
      <Footer />
    </div>
  );
}

function ListaDeContatos() {
  
  //lista de contatos 
  const [lista, setLista] = useState([
    { nome: 'João Silva', email: 'joao@gmail.com', telefone: '123-456-7890' },
    { nome: 'Maria Souza', email: 'maria@gmail.com', telefone: '098-765-4321' },
    { nome: 'Carlos Pereira', email: 'carlos@gmail.com', telefone: '555-555-5555' }
  ]);

  const [novoContato, setNovoContato] = useState({ nome: '', email: '', telefone: '' });
  
  /// Função para lidar com a mudança de valor dos inputs
  const handleChange = (event) => {
    const { name, value } = event.target;
    setNovoContato({ ...novoContato, [name]: value });
  };

  // Função para adicionar um novo contato à lista
  const adicionarContato = () => {
    if (novoContato.nome.trim() !== '' && novoContato.email.trim() !== '' && novoContato.telefone.trim() !== '') {
      setLista([...lista, novoContato]);
      setNovoContato({ nome: '', email: '', telefone: '' });
    }
  };

  // Função para capturar a tecla Enter e adicionar o contato à lista
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      adicionarContato();  // Chama a função de adicionar contato ao pressionar Enter
    }
  };

  return (
    <div>
      <h1>Lista de contatos</h1>
      <input
        type="text"
        name="nome"
        value={novoContato.nome}
        onChange={handleChange}
        onKeyPress={handleKeyPress}  // Adiciona a função de capturar Enter
        placeholder="Nome"
      /><br/>
      <input
        type="email"
        name="email"
        value={novoContato.email}
        onChange={handleChange}
        onKeyPress={handleKeyPress}  
        placeholder="Email"
      /><br/>
      <input
        type="tel"
        name="telefone"
        value={novoContato.telefone}
        onChange={handleChange}
        onKeyPress={handleKeyPress} 
        placeholder="Telefone"
      /><br/>
      <button onClick={adicionarContato}>Adicionar</button>
      <ul>
        {lista.map((contato, index) => (
          <li key={index}>
           Nome:  {contato.nome} - Email:  {contato.email} - Tel: {contato.telefone}
          </li>  // Renderiza cada contato como um item de lista
        ))}
      </ul>     
    </div>
  );
}

export default App;
