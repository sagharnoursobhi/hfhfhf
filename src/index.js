import React from 'react'
import ReactDom from 'react-dom'
import { Route ,BrowserRouter , Switch } from 'react-router-dom'
import Cars from './pages/Cars';
import ContactPage from './pages/Contact';
import Landing from './pages/Landing';
import SecondCar from './pages/SecCarpage'


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