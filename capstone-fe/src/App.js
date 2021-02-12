import {
    BrowserRouter as Router,
    Switch, 
    Route, 
    useHistory
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
    const [name, setName] = useState('')
    const [countOfJobs, setCountOfJobs] = useState(0)
    const [appRatio, setAppRatio] = useState(0)
    const [appReality, setAppReality] = useState(0)
    const [inspiration, setInspiration] = useState({})
    const [displayOutPut, changeDisplayOutput] = useState([]);
    const history = useHistory()
    
    async function populateDashboard(uid){
        console.log('populate dashboard is running')
        const {data} = await axios.get(`/dashboard/dashboard-data/${uid}`)
        console.log(data)
        const { author, quote } = data.inspiration[0]
        console.log('author', author)
        setName(data.first)
        changeDisplayOutput(data.jobsAppliedTo)
        setCountOfJobs(data.jobCount)
        setAppRatio(data.dailyAppGoal)
        setAppReality(data.dailyAppReality)
        setInspiration({author, quote})

        
    }
    
    return (
    <Router>
            <Route exact path='/'>
                <Hero />    
            </Route>        
            <Route exact path='/credentials'>
                <Credentials setName={setName} id={id} populateDashboard={populateDashboard}setId={setId}/>
            </Route>    
            <Route exact path='/dashboard'>
                <Dashboard 
                    id={id}
                    name={name}
                    countOfJobs={countOfJobs}
                    appRatio={appRatio}
                    inspiration={inspiration}
                    displayOutPut={displayOutPut}
                    changeDisplayOutput={changeDisplayOutput}
                    countOfJobs={countOfJobs}
                    appRatio={appRatio}
                    inspiration={inspiration}
                    appReality={appReality}

                />
            </Route>    
    </Router>

  );
}

export default App;
