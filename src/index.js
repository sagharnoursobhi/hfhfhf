import React from 'react'
import ReactDom from 'react-dom'
import First from './components/First';
import FuncCompo from './components/FuncCompo';
import Props from './components/PropsLearn'
import CarName from './components/Car'
import ChangeValue from './components/ChangeValue';


ReactDom.render(<>
  
  <First/>
  <FuncCompo/>
  <Props color="red" property="property"/>
  <CarName carName="Pride"/>
  <ChangeValue/>
  </> , document.getElementById('root'));
