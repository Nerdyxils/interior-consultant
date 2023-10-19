import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ContainerLayout } from './components/Layout';
import { Home } from './Home'
import { About } from './About'
import { Contact } from './Contact'
import { Blog } from './Blog'
import { Careers } from './Careers'



function App() {
  return (
    <React.Fragment>
    {/* <NavigationBar />
    <Jumbotron /> */}
    <ContainerLayout>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/about" element={<About/>}></Route>
          <Route exact path="/contact" element={<Contact/>}></Route>
          <Route exact path="/blog" element={<Blog/>}></Route>
          <Route exact path="/careers" element={<Careers/>}></Route>
          {/* <Route element={NoMatch}></Route> */}
        </Routes>
      </Router>
    </ContainerLayout>
  </React.Fragment>
  );
}

export default App;
