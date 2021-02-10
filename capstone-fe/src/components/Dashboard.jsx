import { Link } from 'react-router-dom'
import './styles/Dashboard.css'
import Sidebar from './Sidebar';
import DisplayPanel from './DisplayPanel';
import Settings from './Settings';
import HeadsUpDisplay from './HeadsUpDisplay';
import { useState } from 'react'
import axios from 'axios'

function Dashboard({id, countOfJobs, appRatio, inspiration,appReality,displayOutPut,changeDisplayOutput}){
    
    const [displayCategory, setDisplayCategory] = useState('job-tracker')
    async function getSummaryData(e){
        const {data} = await axios.get(`/dashboard/${e.target.className}/${id}`)
        //Change state to data
        console.log(data)
        // changeDisplayOutput(data)
        setDisplayCategory(e.target.className)
        changeDisplayOutput(data)
    }

    return (
        <div className="grid-container">
            <Sidebar id={id} getSummaryData={getSummaryData}/>
            <HeadsUpDisplay 
                    countOfJobs={countOfJobs}
                    appRatio={appRatio}
                    inspiration={inspiration} />
            <Settings />
            <DisplayPanel   
                id={id}
                displayCategory={displayCategory} 
                setDisplayCategory={setDisplayCategory}
                changeDisplayOutput={changeDisplayOutput} 
                displayOutPut={displayOutPut}
                countOfJobs={countOfJobs}
                appRatio={appRatio}
                inspiration={inspiration}
                appReality={appReality}
                />
        </div>

    )
}

export default Dashboard