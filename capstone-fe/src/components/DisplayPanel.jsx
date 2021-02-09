
import './styles/Dashboard.css'
import {
    BrowserRouter as Router,
    Switch, 
    Route, 
} from 'react-router-dom';

import JobsAppliedTo from './JobsAppliedTo';
import ResumeSummary from './ResumeSummary';
import InterviewQuestions from './InterviewQuestions';
import TYLettersSummary from './TYLettersSummary';
import CLSummary from './CLSummary';
import LetterOptions from './LetterOptions'
import Modal from 'react-modal'
import {useState} from 'react'
import axios from 'axios';

function DisplayPanel({
    displayOutPut, 
    displayCategory,
    jobAppliedTo,
    countOfJobs,
    appRatio,
    inspiration}){
    const [formModalIsOpen, setFormModalIsOpen] = useState(false)
    const [feedbackModalIsOpen, setFeedbackModalIsOpen] = useState(false)
    const [interviewFormModalIsOpen, setInterviewFormModalIsOpen] = useState(false)
    const [IQFeedbackModal, setIQFeedbackModal] = useState(false)
    async function createNewAppRecord(e){
        e.preventDefault()
        const {company_name, role, phone, website, contact_name, contact_phone,
        contact_email, date_applied} = e.target

        const newAppData = {company_name:company_name.value, role:role.value, phone:phone.value,
        website:website.value, contact_name:contact_name.value, contact_phone:contact_phone.value,
        contact_email:contact_email.value, date_applied:new Date(date_applied.value)}
        
        const response = await axios.post('/dashboard/new-job-application', newAppData)
        setFormModalIsOpen(false)
        setFeedbackModalIsOpen(true)
    }

    async function createNewIQ(e){
        e.preventDefault()
        const{question, answer} = e.target
        console.log(question)
        const IQObject = {question:question.value, answer:answer.value}
        const response = await axios.post('/dashboard/new-IQ', IQObject)
        console.log(response)
        setInterviewFormModalIsOpen(false)
        setIQFeedbackModal(true)
    }

    switch(displayCategory){
        case 'job-tracker':
            return(
                <div>
                    <Modal isOpen={feedbackModalIsOpen} onRequestClose={()=>setFeedbackModalIsOpen(false)}>
                        <div>
                            <h2>Data Submitted!</h2>
                            <p>.jobfolder will be checking in on your progress</p>
                            <button className="new-app-btn" onClick={()=> setFeedbackModalIsOpen(false)}>Close</button>
                        </div>
                    </Modal>
                    <Modal isOpen={formModalIsOpen} onRequestClose={()=> setFormModalIsOpen(false)}>
                        <form onSubmit={(e)=>createNewAppRecord(e)} action="">
                            <label htmlFor="company_name">Company Name</label>
                            <input name="company_name" id="company_name"type="text"/>
                            
                            <label htmlFor="role">Role</label>
                            <input name="role" id="role"type="text"/>
                            
                            <label htmlFor="phone">Phone</label>
                            <input name="phone" id="phone"type="text"/>
                            
                            <label htmlFor="website">Website</label>
                            <input name="website" id="website"type="text"/>
                            
                            <label htmlFor="contact_name">Contact Name</label>
                            <input name="contact_name" id="contact_name"type="text"/>
                            
                            <label htmlFor="contact_phone">Contact Phone</label>
                            <input name="contact_phone" id="contact_phone"type="text"/>
                            
                            <label htmlFor="contact_email">Contact Email</label>
                            <input name="contact_email" id="contact_email"type="text"/>
                            
                            <label htmlFor="date_applied">Date Applied</label>
                            <input type="date" name="date_applied" id="date_applied"/>
                            <input type="submit" value="Submit"/>
                        </form>
                    </Modal>

                    {displayOutPut.map(item => <div>{item.company_name} {item.role} {item.date_applied}</div>)}
                    <button className="new-app-btn" onClick={()=> setFormModalIsOpen(true)}>New Form</button>
                </div>
            )
            case 'interview-questions':
                return(
                    <div>
                        <Modal isOpen={IQFeedbackModal} onRequestClose={()=>setIQFeedbackModal(false)}>
                            <h1>Interview Question Submitted</h1>
                        </Modal>
                        <Modal isOpen={interviewFormModalIsOpen} onRequestClose={()=> setInterviewFormModalIsOpen(false)}>
                            <form onSubmit={createNewIQ}action="">
                                <label htmlFor="interview-question">Question</label>
                                <input name="question" id="interview-question" type="text"/>

                                <label htmlFor="interview-answer">Answer (If its summarizable)</label>
                                <input name="answer" id="interview-answer" type="text"/>

                                <input type="submit" value="Submit"/>
                            </form>
                        </Modal>
                        <button className="new-app-btn" onClick={()=> setInterviewFormModalIsOpen(true)}>New Interview Question</button>
                        
                        {displayOutPut.map(item => 
                            <div>
                            <div>{item.question}</div><div>{item.answer}</div>
                        </div>
                    )}
                </div>
            )
            //
            default:
                return(
                    <div className="display-panel">
                    {
                        displayOutPut.map(item => <div>{item.title} {item.doc_type}</div>)
                    }
                <button className="new-app-btn" onClick={()=> setFormModalIsOpen(true)}>New Application Record</button>
                    
                </div>
            )
        }
    }
    export default DisplayPanel