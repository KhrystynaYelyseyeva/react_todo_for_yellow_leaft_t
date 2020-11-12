import React from 'react';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import './App.css';
import './styles/general.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
