import {BrowserRouter as BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import './App.css';
import Hero from './components/Hero';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <NavBar/>
      <Hero />
    </BrowserRouter>
  );
}

export default App;
