import React from 'react'
import ReactDom from 'react-dom'
import { Route ,BrowserRouter , Switch } from 'react-router-dom'
import ContactPage from './pages/Contact';
import Landing from './pages/Landing';
import CarsInformation from './pages/CarsInformation'
import CarsInformationMoreDetail from '../src/components/CarsInfoMoreDetail';


ReactDom.render(
  <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Landing} />
        {/*<Route path="/cars" component={Cars} />*/}
        <Route path="/car-details" component={CarsInformation}/>
        <Route path="/car-details/:id" component={CarsInformationMoreDetail}/>
        <Route path="/contact" component={ContactPage}/>
    </Switch>
  </BrowserRouter>
  ,document.getElementById('root'))