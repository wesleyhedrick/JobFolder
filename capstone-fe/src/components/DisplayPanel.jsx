import './styles/Dashboard.css'
import Modal from 'react-modal'
import {useState} from 'react'
import axios from 'axios';


function DisplayPanel({
    id,
    displayOutPut, 
    changeDisplayOutput,
    displayCategory,
}){
        const [jobAppFormModalIsOpen, setJobAppFormModalIsOpen] = useState(false)
        const [jobFormFeedbackModalIsOpen, setJobFormFeedbackModalIsOpen] = useState(false)
        const [IQFormModalIsOpen, setIQFormModalIsOpen] = useState(false)
        const [IQFeedbackModalIsOpen, setIQFeedbackModal] = useState(false)
        const [contactsModalIsOpen, setContactsModalIsOpen] = useState(false)
        const [contactsFeedbackModalIsOpen, setContactsFeedbackModalIsOpen] = useState(false)
        const [docUploadModalIsOpen, setDocUploadModalIsOpen] = useState(false)
        const [docUploadFeedbackModalIsOpen, setDocUploadFeedbackModalIsOpen] = useState(false)
        const [interviewModalIsOpen, setInterviewModalIsOpen] = useState(false)
        const [interviewFeedBackIsOpen, setInterviewFeedBackIsOpen] = useState(false)
        const [companyName, setCompanyName] = useState('')
        const [companyId, setCompanyId] = useState(0)
        
        async function updateInterview(e){
            e.preventDefault();
            const {date_interviewed} = e.target
            console.log(date_interviewed.value)
            const {data} = await axios.post('/dashboard/update-interview', {date_interviewed:date_interviewed.value, id:companyId})
            changeDisplayOutput(data)
            setInterviewModalIsOpen(false)
            setInterviewFeedBackIsOpen(true)

        }
        async function deleteDoc(e){
            console.log(e.target.dataset)
            const {doc_id} = e.target.dataset
            const response = await axios.post('/dashboard/delete-doc/', {doc_id});
            const el = e.target.closest('ul')
            console.log(el)
            el.remove()
        }
        
        async function deleteIQ(e){
            const {iq_id} = e.target.dataset
            const {data} = await axios.post('/dashboard/delete-iq', {iq_id})
            console.log(data)
            changeDisplayOutput(data)
        }
        async function createNewAppRecord(e){
            e.preventDefault()
            const {company_name, role, phone, website, contact_name, contact_phone,
                contact_email, date_applied} = e.target
                
                const newAppData = {user_id:id, company_name:company_name.value, role:role.value, phone:phone.value,
                    website:website.value, contact_name:contact_name.value, contact_phone:contact_phone.value,
                    contact_email:contact_email.value, date_applied:new Date(date_applied.value)}
                    console.log(newAppData)
                    const {data} = await axios.post('/dashboard/new-job-application', newAppData)
                    console.log(data)
                    changeDisplayOutput(data)
                    setJobAppFormModalIsOpen(false)
                    setJobFormFeedbackModalIsOpen(true)
                }
                async function createNewContact(e){
                    e.preventDefault()
                    const {name, phone, email, date_contacted} = e.target.elements
                    const contactObj = {
                        name:name.value, phone:phone.value,
                        email:email.value, 
                        date_contacted:date_contacted.value,
                        user_id:id
                    }

                    const {data} = await axios.post(`/dashboard/new-contact/${id}`, contactObj)
                    console.log(data)
                    changeDisplayOutput(data)
                    setContactsModalIsOpen(false)
                    setContactsFeedbackModalIsOpen(true)
                }

        async function uploadDocument(e){
            e.preventDefault()
            console.log('display category', displayCategory)
            console.log(e.target.file.files)
            let file = e.target.file.files[0]
            let formdata = new FormData();
            let token = (new Date()).getTime()
            formdata.append('file', file)
            formdata.append('id',id)
            formdata.append('doc_type', displayCategory)
            formdata.append('token',token)
            const {data} = await axios.post(`/dashboard/upload/${id}`, formdata)
            console.log(data)
            changeDisplayOutput(data)
            setDocUploadModalIsOpen(false)
            setDocUploadFeedbackModalIsOpen(true)

        }
  
        async function createNewIQ(e){
                    e.preventDefault()
                    const{question, answer} = e.target
                    console.log(question)
                    const IQObject = {question:question.value, answer:answer.value, user_id:id}
                    const {data} = await axios.post('/dashboard/new-IQ', IQObject)
                    console.log(data)
                    changeDisplayOutput(data)
                    setIQFormModalIsOpen(false)
                    setIQFeedbackModal(true)
                }
                
                switch(displayCategory){
                    case 'contacts':
                        return(
                            <div className="display-panel">
                                <Modal closeTimeoutMS={100} isOpen={contactsFeedbackModalIsOpen} onRequestClose={()=>setContactsFeedbackModalIsOpen(false)}>
                                    <div className="data-confirm">
                                        <h2>We added your new contact!</h2>
                                        <button className="new-app-btn" onClick={()=> setContactsFeedbackModalIsOpen(false)}>Close</button>
                                    </div>
                                </Modal>
                                <Modal style={{content: {position:'static'}}}closeTimeoutMS={100} isOpen={contactsModalIsOpen} onRequestClose={()=>setContactsModalIsOpen(false)}>
                                    <form className="modal-form" onSubmit={createNewContact}>
                                        <label htmlFor="name">Name</label>
                                        <input className="signup-input" type="text" name="name" id="name"/>
                                        <label htmlFor="phone">Phone</label>
                                        <input className="signup-input" type="text" name="phone" id="phone"/>
                                        <label htmlFor="email">Email</label>
                                        <input type="text" name="email" id="email"/>
                                        <label htmlFor="date_contacted">Date</label>
                                        <input className="signup-input" type="date" name="date_contacted" id="date_contacted"/>
                                        <input className="modal-btn" type="submit" value="Submit"/>
                                    </form>
                                </Modal>
                                <h3 className="page-title">Contacts</h3>
                                <button className="new-app-btn" onClick={()=>setContactsModalIsOpen(true)}>Add New Contact</button>
                                {/* OUTPUT CLASS */}
                                <div className="job-output">
                                    <ul className="contacts-ul">
                                        <li>Name</li>
                                        <li>Phone</li>
                                        <li>Email</li>
                                        <li>Date Contacted</li>
                                    </ul>
                                    {displayOutPut.map(item => 
                                    <ul className="contacts-ul">
                                        <li>{item.name}</li>
                                        <li>{item.phone}</li>
                                        <li>{item.email}</li>
                                        <li>{new Date(item.date_contacted).toLocaleDateString()}</li>
                                    </ul>)}
                                </div>
                            </div>
            )
                case 'job-tracker':
                    return(
                        <div className="display-panel">
                            <Modal closeTimeoutMS={100} isOpen={jobFormFeedbackModalIsOpen} onRequestClose={()=>setJobFormFeedbackModalIsOpen(false)}>
                                <div className="data-confirm">
                                    <h2>Data Submitted!</h2>
                                    <p>.jobfolder will be checking in on your progress</p>
                                    <button className="new-app-btn" onClick={()=> setJobFormFeedbackModalIsOpen(false)}>Close</button>
                                </div>
                            </Modal>
                            <Modal style={{content: {position:'static'}}}closeTimeoutMS={100} isOpen={jobAppFormModalIsOpen} onRequestClose={()=> setJobAppFormModalIsOpen(false)}>

                                {/* **added class** */}
                                <form className="modal-form" onSubmit={(e)=>createNewAppRecord(e)} action="">
                                    <label htmlFor="company_name">Company Name</label>
                                    <input className="signup-input" name="company_name" id="company_name"type="text"/>
                                    
                                    <label htmlFor="role">Role</label>
                                    <input className="signup-input" name="role" id="role"type="text"/>
                                    
                                    <label htmlFor="phone">Phone</label>
                                    <input className="signup-input" name="phone" id="phone"type="text"/>
                                    
                                    <label htmlFor="website">Website</label>
                                    <input className="signup-input" name="website" id="website"type="text"/>
                                    
                                    <label htmlFor="contact_name">Contact Name</label>
                                    <input className="signup-input" name="contact_name" id="contact_name"type="text"/>
                                    
                                    <label htmlFor="contact_phone">Contact Phone</label>
                                    <input className="signup-input" name="contact_phone" id="contact_phone"type="text"/>
                                    
                                    <label htmlFor="contact_email">Contact Email</label>
                                    <input className="signup-input" name="contact_email" id="contact_email"type="text"/>
                                    
                                    <label htmlFor="date_applied">Date Applied</label>
                                    <input className="signup-input" type="date" name="date_applied" id="date_applied"/>
                                    <input className="modal-btn" type="submit" value="Submit"/>
                                </form>
                            </Modal>
                        

                        <h3 className="page-title">Job Tracker</h3>
                        <button className="new-app-btn" onClick={()=> setJobAppFormModalIsOpen(true)}>Add New Job</button>


                    {/* JOB-OUTPUT */}
                        <div className="job-output">
                            <Modal isOpen={interviewModalIsOpen} onRequestClose={()=>setInterviewModalIsOpen(false)}>
                                <div>When did you interview with {companyName}</div>
                                <form onSubmit={updateInterview} action="">
                                    <label htmlFor="interview-date"></label>
                                    <input type="date" name="date_interviewed" id="interview-date"/>
                                    <input type="submit" value="Submit"/>
                                </form>
                            </Modal>
                            <Modal isOpen={interviewFeedBackIsOpen} onRequestClose={()=>setInterviewFeedBackIsOpen(false)}>
                                <h2>Congratulations!!</h2>
                                <p>We updated your records</p>
                                <p>Don't forget to write a thank you note for the interview. We'll be reminding you.</p>
                                <button onClick={(e)=>setInterviewFeedBackIsOpen(false)}>Close</button>
                            </Modal>
                            <ul className="jobs-ul">
                                <li>Company</li>
                                <li>Role</li>
                                <li>Date Applied</li>
                                <li>Interviewed</li>
                            </ul>
                            {displayOutPut.map((item, idx) => 
                                    <ul className="jobs-ul">
                                        <li data-companyid={item.id} className={`company-name-${idx}`}>{item.company_name}</li>
                                        <li className={`role-${idx}`}>{item.role}</li>
                                        <li>{new Date(item.date_applied).toLocaleDateString()}</li>
                                        <li>{item.interviewed ? 'Yes':<button onClick={(e)=>{
                                                const companyEl = document.querySelector(`.company-name-${idx}`)
                                                const companyName = companyEl.innerText
                                                const roleEl = document.querySelector(`.company-name-${idx}`)
                                                const roleName = roleEl.innerText
                                                setInterviewModalIsOpen(true)
                                                setCompanyName(companyName)
                                                setCompanyId(companyEl.dataset.companyid)
                                            }} >Update</button>
                                            
                                                }</li>
                                    </ul>)}
                        </div>
                    </div>
                )
                case 'interview-questions':
                    return(
                        <div className="display-panel">
                        <Modal closeTimeoutMS={100} isOpen={IQFeedbackModalIsOpen} onRequestClose={()=>setIQFeedbackModal(false)}>
                            <h1 className="data-confirm">Interview Question Submitted</h1>
                            <button onClick={()=>setIQFeedbackModal(false)}>Close</button>
                        </Modal>

                        <Modal style={{content: {position:'static'}}} closeTimeoutMS={100} isOpen={IQFormModalIsOpen} onRequestClose={()=> setIQFormModalIsOpen(false)}>
                            <form className="modal-form" onSubmit={createNewIQ}action="">
                                <label htmlFor="interview-question">Question</label>
                                <input className="signup-input" name="question" id="interview-question" type="text"/>
                                <label htmlFor="interview-answer">Answer (If its summarizable)</label>
                                <input  className="signup-input" name="answer" id="interview-answer" type="text"/>
                                <input className="modal-btn" type="submit" value="Submit"/>
                            </form>
                        </Modal>
                        
                        <h3 className="page-title">Interview</h3>
                        <button className="new-app-btn" onClick={()=> setIQFormModalIsOpen(true)}> Add New Interview Question</button>

                        <div className="job-output">
                        {displayOutPut.map((item, idx) => 
                            <div>
                                <ul className="IQ-ul">
                                    <li className="IQ-li">{idx+1}. {item.question}</li>
                                    <li className="IQ-li">{item.answer}</li>
                                </ul>
                                <button data-iq_id={item.id} onClick={(e)=> deleteIQ(e)}className="download-btn">Delete Question</button>
                            </div>
                    )}
                </div>
                </div>
            )

                default:
                    return(
                        <div className="display-panel">
                                <Modal style={{content: {position:'static'}}} closeTimeoutMS={100} isOpen={docUploadModalIsOpen} onRequestClose={()=>setDocUploadModalIsOpen(false)}>

                                    <form className="modal-form" onSubmit={uploadDocument} method="POST" encType="multipart/form-data">
                                        <label htmlFor="file">Select a File</label>
                                        <input type="file" name="file" id="file"/>

                                        <input className="modal-btn" type="submit" value="Upload"/>
                                    </form>
                                </Modal>

                                
                                <Modal closeTimeoutMS={100} isOpen={docUploadFeedbackModalIsOpen} onRequestClose={()=>setDocUploadFeedbackModalIsOpen(false)}>
                                    <div className="modal-form">
                                        <h2 className="data-confirm">Document Uploaded</h2>
                                        <button onClick={()=>setDocUploadFeedbackModalIsOpen(false)}>Close</button>
                                    </div>
                                </Modal>

                            <button className="new-app-btn" onClick={()=> {setDocUploadModalIsOpen(true)}}>Upload</button>    

                            <div className="job-output">
                                {displayOutPut.map((item, idx) =>
                                    
                                    <ul className="doc-ul">
                                        {<li className={`document-${idx}`} data-token={item.token}>{item.title}</li>}
                                        <li>
                                            <a href={`/dashboard/download/${id}/${item.token}/${item.title}`}>
                                                <button className="download-btn">Download</button>
                                            </a>
                                        </li>
                                        <li>
                                            <button onClick={(e)=>deleteDoc(e)} data-doc_id={item.id} className="download-btn">Delete</button>
                                        </li>
                                    </ul>
                                    )
                                }
                            </div>                          

                            
                        </div>

                    )
    }
}
export default DisplayPanel