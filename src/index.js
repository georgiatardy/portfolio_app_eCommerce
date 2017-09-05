import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.css';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';


import About from './components/About';
import App from './components/App';
import BaseLayout from './components/BaseLayout';
import Contact from './components/Contact';
import Home from './components/Home';
import Products from './components/Products';
import Blog from './components/Blog';

ReactDOM.render(
  <BrowserRouter>
   <BaseLayout>
     <Switch>
        <Route path="/Blog" component={Blog} />
        <Route path="/Contact" component={Contact} />
        <Route path="/About" component={About} />
        <Route path="/Products" component={Products} />
        <Route path="/Home" component={Home} />
        <Route exact path="/" component={App} />
     </Switch>
    </BaseLayout>
 </BrowserRouter>

 ,document.getElementById('root')
);
registerServiceWorker();
