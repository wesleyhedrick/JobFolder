import './styles/Dashboard.css'

import {
    Link
} from 'react-router-dom';

const navBarItems = [
    {value: 'job-tracker', content: 'Job Tracker'},
    {value: 'resume', content: 'Resumes'},
    {value: 'thank-you', content: 'Thank You Letters'},
    {value: 'cover', content: 'Cover Letters'},
    // {value: 'templates', content: 'Templates'},
    // {value: 'calendar', content: 'Calendar'}
    {value: 'interview-questions', content: 'Interview Questions'},
]    

function Sidebar({getSummaryData}) {
    return (
        <>
            <div className="sidebar">
                <h1>.jobfolder</h1>
                {navBarItems.map(item => 
                    <div onClick={(e)=>getSummaryData(e)} className={item.value}>{item.content}</div>)
                }
            </div>
        </>
    )
}

export default Sidebar
export {navBarItems}