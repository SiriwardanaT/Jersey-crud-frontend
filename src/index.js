import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import AddCar from './component/addCar'
import ShowCars from './component/showCars'
import Update from './component/updateform'
import  {Switch,Route,BrowserRouter} from 'react-router-dom'
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
          <Route exact path="/" component={AddCar}></Route>
          <Route exact path="/show" component={ShowCars}></Route>
          <Route exact path="/update/:id" component={Update}></Route>
         
      </Switch>
    </BrowserRouter>
  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
