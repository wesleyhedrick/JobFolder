
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
    id,
    displayOutPut, 
    displayCategory,
    jobAppliedTo,
    countOfJobs,
    appRatio,
    inspiration}){
    
    
        const [jobAppFormModalIsOpen, setJobAppFormModalIsOpen] = useState(false)
        const [jobFormFeedbackModalIsOpen, setJobFormFeedbackModalIsOpen] = useState(false)
        const [IQFormModalIsOpen, setIQFormModalIsOpen] = useState(false)
        const [IQFeedbackModalIsOpen, setIQFeedbackModal] = useState(false)
        const [resumeModalIsOpen, setResumeModalIsOpen] = useState(false)
        const [tyLetterModalIsOpen, setTyLetterModalIsOpen] = useState(false)
        const [clModalIsOpen, setClModelIsOpen] = useState(false)
        const [resumeFeedbackModalIsOpen, setResumeFeedbackModalIsOpen] = useState(false)
        const [tyLetterFeedBackIsOpen, settyLetterFeedBackIsOpen] = useState(false)
        const [clFeedbackModalIsOpen, setClFeedbackModalIsOpen] = useState(false)
        const [contactsModalIsOpen, setContactsModalIsOpen] = useState(false)
        const [contactsFeedbackModalIsOpen, setContactsFeedbackModalIsOpen] = useState(false)
        const [docUploadModalIsOpen, setDocUploadModalIsOpen] = useState(false)
        const [docUploadFeedbackModalIsOpen, setDocUploadFeedbackModalIsOpen] = useState(false)
        
        async function createNewAppRecord(e){
            e.preventDefault()
            const {company_name, role, phone, website, contact_name, contact_phone,
                contact_email, date_applied} = e.target
                
                const newAppData = {user_id:id, company_name:company_name.value, role:role.value, phone:phone.value,
                    website:website.value, contact_name:contact_name.value, contact_phone:contact_phone.value,
                    contact_email:contact_email.value, date_applied:new Date(date_applied.value)}
                    console.log(newAppData)
                    
                    const response = await axios.post('/dashboard/new-job-application', newAppData)
                    setJobAppFormModalIsOpen(false)
                    setJobFormFeedbackModalIsOpen(true)
                }
                async function createNewContact(e){
                    e.preventDefault()
                    const {name, phone, email, date_contacted} = e.target.elements
                    const contactObj = {
                        name:name.value, phone:phone.value,
                        email:email.value, 
                        date_contacted:date_contacted.value
                    }
                    const response = await axios.post(`/dashboard/new-contact/${id}`, contactObj)
                    setContactsModalIsOpen(false)
                    setContactsFeedbackModalIsOpen(true)
                }

        async function uploadDocument(e){
            e.preventDefault()
            console.log(e.target.file.files)
            let file = e.target.file.files[0]
            let formdata = new FormData();
            formdata.append('file', file)
            formdata.append('id',id)
            await axios.post(`/dashboard/upload/${id}`, formdata)
            setDocUploadModalIsOpen(false)
            setDocUploadFeedbackModalIsOpen(true)
        }
  
        async function createNewIQ(e){
                    e.preventDefault()
                    const{question, answer} = e.target
                    console.log(question)
                    const IQObject = {question:question.value, answer:answer.value}
                    const response = await axios.post('/dashboard/new-IQ', IQObject)
                    console.log(response)
                    setIQFormModalIsOpen(false)
                    setIQFeedbackModal(true)
                }
                
                switch(displayCategory){
                    case 'contacts':
                        return(
                            <div className="display-panel">
                    <Modal closeTimeoutMS={200} isOpen={contactsFeedbackModalIsOpen} onRequestClose={()=>setContactsFeedbackModalIsOpen(false)}>
                        <div className="data-confirm">
                            <h2>We added your new contact!</h2>
                            <button className="new-app-btn" onClick={()=> setContactsFeedbackModalIsOpen(false)}>Close</button>
                        </div>
                    </Modal>

                    
                    <Modal closeTimeoutMS={200} isOpen={contactsModalIsOpen} onRequestClose={()=>setContactsModalIsOpen(false)}>
                        <form className="modal-form" onSubmit={createNewContact}>
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name"/>
                            <label htmlFor="phone">Phone</label>
                            <input type="text" name="phone" id="phone"/>
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" id="email"/>
                            <label htmlFor="date_contacted">Date</label>
                            <input type="date" name="date_contacted" id="date_contacted"/>
                            <input className="modal-btn" type="submit" value="Submit"/>
                        </form>
                    </Modal>


                    <button className="new-app-btn" onClick={()=>setContactsModalIsOpen(true)}>Add Contact</button>
                    {displayOutPut.map(item => <div className='contacts'>{item.name}{item.phone}{item.email}{item.date_contacted}</div>)}
                </div>
            )
                case 'job-tracker':
                    return(
                        <div className="display-panel">
                        <Modal closeTimeoutMS={200} isOpen={jobFormFeedbackModalIsOpen} onRequestClose={()=>setJobFormFeedbackModalIsOpen(false)}>
                            <div className="data-confirm">
                                <h2>Data Submitted!</h2>
                                <p>.jobfolder will be checking in on your progress</p>
                                <button className="new-app-btn" onClick={()=> setJobFormFeedbackModalIsOpen(false)}>Close</button>
                            </div>
                        </Modal>
                        <Modal closeTimeoutMS={200} isOpen={jobAppFormModalIsOpen} onRequestClose={()=> setJobAppFormModalIsOpen(false)}>

                            {/* **added class** */}
                            <form className="modal-form" onSubmit={(e)=>createNewAppRecord(e)} action="">
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
                                <input className="new-app-btn" type="submit" value="Submit"/>
                            </form>
                        </Modal>
                        





                        {displayOutPut.map(item => <div>{item.company_name} {item.role} {item.date_applied}</div>)}
                        <button className="new-app-btn" onClick={()=> setJobAppFormModalIsOpen(true)}>New Job</button>
                    </div>
                    
                )
                case 'interview-questions':
                    return(
                        <div className="display-panel">
                        <Modal closeTimeoutMS={200} isOpen={IQFeedbackModalIsOpen} onRequestClose={()=>setIQFeedbackModal(false)}>
                            <h1 className="data-confirm">Interview Question Submitted</h1>
                        </Modal>

                        <Modal closeTimeoutMS={200} isOpen={IQFormModalIsOpen} onRequestClose={()=> setIQFormModalIsOpen(false)}>
                            <form className="modal-form" onSubmit={createNewIQ}action="">
                                <label htmlFor="interview-question">Question</label>
                                <input name="question" id="interview-question" type="text"/>
                                <label htmlFor="interview-answer">Answer (If its summarizable)</label>
                                <input name="answer" id="interview-answer" type="text"/>
                                <input className="modal-btn" type="submit" value="Submit"/>
                            </form>
                        </Modal>
                        
                        <button className="new-app-btn" onClick={()=> setIQFormModalIsOpen(true)}>New Interview Question</button>

                        {displayOutPut.map(item => 
                        <div>
                            <div>{item.question}</div>
                            <div>{item.answer}</div>
                        </div>
                    )}
                </div>
            )

                default:
                    return(
                        <div className="display-panel">
                                <Modal closeTimeoutMS={200} isOpen={docUploadModalIsOpen} onRequestClose={()=>setDocUploadModalIsOpen(false)}>

                                    <form className="modal-form" onSubmit={uploadDocument} method="POST" encType="multipart/form-data">
                                        <label htmlFor="file">Select a File</label>
                                        <input type="file" name="file" id="file"/>
                                        {/* add-class */}
                                        <input className="modal-btn" type="submit" value="Upload"/>
                                    </form>
                                </Modal>

                                
                                <Modal closeTimeoutMS={200} isOpen={docUploadFeedbackModalIsOpen} onRequestClose={()=>setDocUploadFeedbackModalIsOpen(false)}>
                                    <div className="modal-form">
                                        <h2 className="data-confirm">Document Uploaded</h2>
                                        <button onClick={()=>setDocUploadFeedbackModalIsOpen(false)}>Close</button>
                                    </div>
                                </Modal>
                                {/* add-class */}
                            <button className="new-app-btn" onClick={()=> {setDocUploadModalIsOpen(true)}}>Upload</button>    

                            <div className="testing">
                            {displayOutPut.map(item => <div>{item.title} {item.doc_type}</div>)}
                          

                            
                        </div>
                        </div>
                    )
    }
}
export default DisplayPanel