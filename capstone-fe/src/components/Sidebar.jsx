import { HiMenu, HiLogout } from "react-icons/hi";
import { HiX } from "react-icons/hi";
import './styles/Sidebar.css'
import {
    useHistory
} from 'react-router-dom';

import axios from 'axios'   
const navBarItems = [
    {value: 'job-tracker', content: 'Job Tracker'},
    {value: 'resume', content: 'Resumes'},
    {value: 'thank-you', content: 'Thank You Letters'},
    {value: 'cover', content: 'Cover Letters'},
    // {value: 'templates', content: 'Templates'},
    // {value: 'calendar', content: 'Calendar'}
    {value: 'interview-questions', content: 'Interview Questions'},
]    

function Sidebar({id, getSummaryData}) {
    const history = useHistory();
    
    async function logOut(){
        await axios.get('/sign-in/sign-out')
        history.push('/')
    }

    return (
    <>
        <div className="sidebar-container">
                <div className="sidebar">
                <h1 className="sidebar-title">.jobfolder</h1>
                    {navBarItems.map(item => 
                        <div onClick={(e)=>getSummaryData(e)} className={item.value}>{item.content}</div>)
                    }
                <div className='contacts' onClick={(e)=>getSummaryData(e)}>Contacts</div>
                <div onClick={(e)=>logOut(e)}>Log out</div>
                </div>
        </div>
    </>
    )
}

export default Sidebar

