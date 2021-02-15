import { Link } from 'react-router-dom'
import './styles/Dashboard.css'
import './styles/DisplayPanel.css'
import Sidebar from './Sidebar';
import DisplayPanel from './DisplayPanel';
import Settings from './Settings';
import HeadsUpDisplay from './HeadsUpDisplay';
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';

function Dashboard({id, setId,name, countOfJobs, appRatio, 
            inspiration,appReality,displayOutPut,
            changeDisplayOutput, populateDashboard}){
    
    const [displayCategory, setDisplayCategory] = useState('job-tracker')
    const history = useHistory();

    async function getSummaryData(e){
        const category = e.currentTarget.className
        console.log(category)
        const {data} = await axios.get(`/dashboard/${category}/${id}`)
        setDisplayCategory(category)
        changeDisplayOutput(data)
    }

    const checkSession = async () => {
        const response = await axios.get('/sign-in/check-session')
        console.log('line 19', response)
        if(response.data === 'null'){
            return
        } else {
            populateDashboard(response.data)
            setId(response.data)
            console.log('popDash ran')
            history.push('/dashboard')
        }
    }
    useEffect(()=> {
        checkSession()
    }, [])


    return (
        <div className="grid-container">
            <Sidebar id={id} getSummaryData={getSummaryData}/>
            <HeadsUpDisplay 
                    countOfJobs={countOfJobs}
                    appRatio={appRatio}
                    inspiration={inspiration}
                    appReality={appReality} />
            <Settings name={name}/>
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