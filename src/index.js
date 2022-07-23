import React from 'react'
import ReactDom from 'react-dom'
import { Route ,BrowserRouter , Switch } from 'react-router-dom'
import Cars from './components/pages/Cars';
import ContactPage from './components/pages/Contact';
import Landing from './components/pages/Landing';
import SecondCar from './components/pages/SecCarpage'


ReactDom.render(
  <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/cars" component={Cars} />
        <Route path="/car-details" component={SecondCar} />
        <Route path="/contact" component={ContactPage}/>
    </Switch>
  </BrowserRouter>
  ,document.getElementById('root'))