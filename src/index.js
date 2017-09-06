import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.css';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';


import App from './components/App';
import BaseLayout from './components/BaseLayout';
import About from './components/About';
import Contact from './components/Contact';
import Designs from './components/Designs';
import Drawings from './components/Drawings';
import Paintings from './components/Paintings';
import Blog from './components/Blog';

ReactDOM.render(
  <BrowserRouter>
   <BaseLayout>
     <Switch>
        <Route path="/Blog" component={Blog} />
        <Route path="/Contact" component={Contact} />
        <Route path="/About" component={About} />
        <Route path="/Paintings" component={Paintings} />
        <Route path="/Drawings" component={Drawings} />
        <Route path="/Designs" component={Designs} />
        <Route exact path="/" component={App} />
     </Switch>
    </BaseLayout>
 </BrowserRouter>

 ,document.getElementById('root')
);
registerServiceWorker();
