import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';
import { BrowserRouter, Route } from 'react-router-dom';
import Character from './components/Character/Character';
import Gun_select from './components/Character/Gun/Gun_select';
import Suit_select from './components/Character/Suit/Suit_select';
import Artefacts_select from './components/Character/Artefacts/Artefacts_select';
import No404 from './components/No404';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Route exact path="/" component={Menu} />
     <Route exact path="/character" component={Character} />
     <Route path="/character/gun_select" component={Gun_select} />
     <Route path="/character/suit_select" component={Suit_select} />
     <Route path='/character/artefacts_select'
        render = { props =>
        (window.location + '').slice(-2) == '/1' ? <Artefacts_select slot = '1' /> :
        (window.location + '').slice(-2) == '/2' ? <Artefacts_select slot = '2' /> :
        (window.location + '').slice(-2) == '/3' ? <Artefacts_select slot = '3' /> :
        (window.location + '').slice(-2) == '/4' ? <Artefacts_select slot = '4' /> :
        (window.location + '').slice(-2) == '/5' ? <Artefacts_select slot = '5' /> :
        <No404 />} />
    </div>
    </BrowserRouter>
  );
}

export default App;
