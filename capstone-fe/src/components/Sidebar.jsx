import './styles/Sidebar.css'
import {useHistory} from 'react-router-dom';
import {useState} from 'react'
import { IoIosPaper } from "react-icons/io";
import { IoNewspaper } from "react-icons/io5";
import { IoBriefcase } from "react-icons/io5";
import { RiFilePaper2Fill } from "react-icons/ri";
import { BsFillQuestionSquareFill } from "react-icons/bs";
// import { RiContactsBookFill } from "react-icons/ri";
// import { GoSignOut } from "react-icons/go";





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

    const[showLinks, setShowLinks] = useState(true);

    return (
    <>
        <div className="sidebar-container">
        <button className="toggle">toggle-btn</button>
        <h1 className="sidebar-title">.jobfolder</h1>
            <div className="sidebar">
            
                {navBarItems.map(item => 
                <div onClick={(e)=>getSummaryData(e)} className={item.value}> 
                <div className="icons-container"> <p className="sidebar-icons" id="hidden-icons">{item.icon}</p></div> 
                <div className="links-container"> <p className="sidebar-links" id={showLinks ? 
                "hidden" : ''}>{item.content}</p></div>
            </div>)
                    }
                <div className='contacts'onClick={(e)=>getSummaryData(e)}>Contacts</div>

                <div onClick={(e)=>logOut(e)}>Log out</div>
                
                </div>
        </div>
    </>
    )
}

export default Sidebar

