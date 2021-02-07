import {
    Link
} from 'react-router-dom';

const navBarItems = [
    {value: 'job-tracker', content: 'Job Tracker'},
    {value: 'resumes', content: 'Resumes'},
    {value: 'letters', content: 'Letters'},
    {value: 'interview-questions', content: 'Interview Questions'},
    {value: 'templates', content: 'Templates'},
    {value: 'calendar', content: 'Calendar'}
]    


function Sidebar({changeDisplayOutput}) {
    function changeDisplayPanelOutput(e){
        changeDisplayOutput(e.target.className)
    }
    return (
        <nav>
            <h1>.jobfolder</h1>
            {navBarItems.map(item => <div onClick={changeDisplayPanelOutput} className={item.value}>{item.content}</div>)}
        </nav>
    )
}

export default Sidebar
export {navBarItems}