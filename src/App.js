import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/dashboard'
import Login from './components/login'
import Release from './components/release'
import Defects from './components/defects'
import DefectView from './components/defectView'
import Discussion from './components/discussion'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function App() {
  return (
    <Router>
      <Switch>
      <Route path='/login' exact component={Login}/>
      <Route path='/' exact component={Login}/>
      <Route path='/dashboard' exact component={Dashboard}/>
      <Route path='/release' exact component={Release}/>
      <Route path='/defects' exact component={Defects}/>
      <Route path='/view' component={DefectView}/>
      </Switch>
    </Router>
    
  );
}

export default App;