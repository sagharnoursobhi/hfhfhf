import React from 'react'
import ReactDom from 'react-dom'
import {Route ,BrowserRouter , Switch} from 'react-router-dom'
import Cars from './components/pages/Cars';

import Landing from './components/pages/Landing';


ReactDom.render(
  <BrowserRouter>
  <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/cars" component={Cars} />
  </Switch>
</BrowserRouter>
  ,document.getElementById('root'))