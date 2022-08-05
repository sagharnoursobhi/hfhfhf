import React from 'react'
import ReactDom from 'react-dom'
import { Route ,BrowserRouter , Switch } from 'react-router-dom'
import Cars from './pages/Cars';
import ContactPage from './pages/Contact';
import Landing from './pages/Landing';
import CarsInformation from './pages/CarsInformation'
import CarsInformationDetail from './pages/CarsInformationDetail';


ReactDom.render(
  <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/cars" component={Cars} />
        <Route path="/car-details" component={CarsInformation} />
        <Route path="/car-details/:id" component={CarsInformationDetail}/>
        <Route path="/contact" component={ContactPage}/>
    </Switch>
  </BrowserRouter>
  ,document.getElementById('root'))