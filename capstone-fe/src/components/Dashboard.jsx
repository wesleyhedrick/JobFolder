import { Link } from 'react-router-dom'
import Sidebar from './Sidebar';
import DisplayPanel from './DisplayPanel';
import Settings from './Settings';
import HeadsUpDisplay from './HeadsUpDisplay';
import { useState } from 'react'
import axios from 'axios'

function Dashboard(){
    const [displayOutPut, changeDisplayOutput] = useState([]);
    const [jobSummary, setJobSummary] = useState({});

    async function getJobSummary(){
        const jobSummaryResponse = await axios.get('/job-summary')
        setJobSummary(jobSummaryResponse)
    }
    async function getSummaryData(e){
        const data = await axios.get(`/dashboard/${e.target.className}`)
        //Change state to data
        console.log(data.data)
        // changeDisplayOutput(data)
        changeDisplayOutput(data.data)
    }

    return (
        <div>
            <Sidebar getSummaryData={getSummaryData}/>
            <HeadsUpDisplay />
            <Settings />
            <DisplayPanel changeDisplayOutput={changeDisplayOutput} displayOutPut={displayOutPut} />
        </div>

    )
}

export default Dashboard