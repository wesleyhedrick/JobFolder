
import { IoIosPaper } from "react-icons/io";
import { IoNewspaper } from "react-icons/io5";
import { IoBriefcase } from "react-icons/io5";
import { RiFilePaper2Fill } from "react-icons/ri";
import { BsFillQuestionSquareFill } from "react-icons/bs";
// import { RiContactsBookFill } from "react-icons/ri";





import './styles/Sidebar.css'
import {
    useHistory
} from 'react-router-dom';

import axios from 'axios'   
const navBarItems = [
    {icon:<IoBriefcase  />, value: 'job-tracker', content: 'Job Tracker'},
    {icon:<IoIosPaper />, value: 'resume', content: 'Resumes'},
    {icon:<IoNewspaper />,value: 'thank-you', content: 'Thank You Letters'},
    {icon:<RiFilePaper2Fill />, value: 'cover', content: 'Cover Letters'},
    // {value: 'templates', content: 'Templates'},
    // {value: 'calendar', content: 'Calendar'}
    {icon:<BsFillQuestionSquareFill  />, value: 'interview-questions', content: 'Interview Questions'},
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
       
        <h1 className="sidebar-title">.jobfolder</h1>
    
                <div className="sidebar">

                {navBarItems.map(item => 
                    <div onClick={(e)=>getSummaryData(e)} className={item.value}> <p className="icons">{item.icon}</p><p className="link-items">{item.content}</p></div>)
                }
                
                <div className='contacts'onClick={(e)=>getSummaryData(e)}>Contacts</div>
                <div onClick={(e)=>logOut(e)}>Log out</div>
                </div>
        </div>
    </>
    )
}

export default Sidebar

