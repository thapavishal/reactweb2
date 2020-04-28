import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Home from './Modules/Components/Home/Home';
import About from './Modules/Components/About';
import Allnews from './Modules/Containers/Allnews';
import Contact from './Modules/Components/Contact';


function App() {
  return (
    <BrowserRouter>
    <div>
      <Route exact path ="/" component = { Home }/>
      <Route  path = "/About" component = { About } />
      <Route path = "/Allnews" component = { Allnews } />
      <Route path = "/Contact" component = { Contact } />
    </div>
    </BrowserRouter>
  );
}

export default App;