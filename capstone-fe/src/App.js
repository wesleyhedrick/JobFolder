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
import axios from 'axios';

function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [id, setId] = useState(0)
    // const [jobsAppliedTo, setJobsAppliedTo] = useState([])
    const [countOfJobs, setCountOfJobs] = useState(0)
    const [appRatio, setAppRatio] = useState(0)
    const [inspiration, setInspiration] = useState('')
    const [displayOutPut, changeDisplayOutput] = useState([]);

    async function populateDashboard(){
        const dashboardData = await axios.get(`/dashboard-data/${id}`)
        changeDisplayOutput(dashboardData.jobsAppliedTo)
        setCountOfJobs(dashboardData.jobCount)
        setAppRatio(dashboardData.dailyAppReality)
        setInspiration(dashboardData.inspiration)

    }
    return (
    <Router>
            <Route exact path='/'>
                <Hero />    
            </Route>        
            <Route exact path='/credentials'>
                <Credentials populateDashboard={populateDashboard}setId={setId}/>
            </Route>    
            <Route exact path='/dashboard'>
                <Dashboard 

                    countOfJobs={countOfJobs}
                    appRatio={appRatio}
                    inspiration={inspiration}
                    displayOutPut={displayOutPut}
                    changeDisplayOutput={changeDisplayOutput}
                />
            </Route>    
    </Router>

  );
}

export default App;
