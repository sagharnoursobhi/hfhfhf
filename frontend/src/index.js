import React from 'react'
import ReactDom from 'react-dom'
import { Route ,BrowserRouter , Switch } from 'react-router-dom'
import ContactPage from './pages/Contact';
import Landing from './pages/Landing';
import CarsInformation from './pages/CarsInformation'
import CarsInformationDetail from '../src/components/CarsInformationDetail';


ReactDom.render(
  <BrowserRouter>
    <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/cars-information" component={CarsInformation}/>
        <Route path="/car-details/:id" component={CarsInformationDetail}/>
        <Route path="/contact" component={ContactPage}/>
    </Switch>
  </BrowserRouter>
  ,document.getElementById('root'))