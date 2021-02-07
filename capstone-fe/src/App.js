import './App.css';
import {
    BrowserRouter as Router,
    Switch, 
    Route, 
} from 'react-router-dom';
import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar';
import Credentials from './components/Credentials';
import Dashboard from './components/Dashboard';
import Hero from './components/Hero';

function App() {
    

    return (
    <Router>
            <Route exact path='/'>
                <Hero />    
            </Route>
            <Route path='/credentials'>
                <Credentials />
            </Route>    
            <Route path='/dashboard'>
                <Dashboard />
            </Route>    
    </Router>

  );
}

export default App;
