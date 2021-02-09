import { Link } from 'react-router-dom'
import './styles/Dashboard.css'
import Sidebar from './Sidebar';
import DisplayPanel from './DisplayPanel';
import Settings from './Settings';
import HeadsUpDisplay from './HeadsUpDisplay';
import { useState } from 'react'
import axios from 'axios'

function Dashboard({countOfJobs, appRatio, inspiration,displayOutPut,changeDisplayOutput}){
    
    const [displayCategory, setDisplayCategory] = useState('job-tracker')
    
    async function getSummaryData(e){
        const {data} = await axios.get(`/dashboard/${e.target.className}`)
        //Change state to data
        console.log(data)
        // changeDisplayOutput(data)
        setDisplayCategory(e.target.className)
        changeDisplayOutput(data)
    }

    return (
        <div className="grid-container">
            <Sidebar getSummaryData={getSummaryData}/>
            <HeadsUpDisplay />
            <Settings />
            <DisplayPanel   
                displayCategory={displayCategory} 
                setDisplayCategory={setDisplayCategory}
                changeDisplayOutput={changeDisplayOutput} 
                displayOutPut={displayOutPut}
                countOfJobs={countOfJobs}
                appRatio={appRatio}
                inspiration={inspiration} />
        </div>

    )
}

export default Dashboard