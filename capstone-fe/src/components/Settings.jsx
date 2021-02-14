import './styles/Dashboard.css'
import { RiSettings4Fill } from "react-icons/ri";
import Modal from 'react-modal'
import {useState} from 'react'
import TimeSelect from './TimeSelect';
import axios from 'axios'

function Settings({name}){
    const [stgsModalOpen, setStgsModalOpen] = useState(false)
    const [stgsFdbackModalOpen, setStgsFdbackModalOpen] = useState(false)
    async function updateSettings(e){
        e.preventDefault()

        const { tenDayFollowUp, tyFollowUp, sun_iq_time, iq_sun, mon_iq_time, iq_mon, tue_iq_time, iq_tue, wed_iq_time, iq_wed,
        thu_iq_time, iq_thu, fri_iq_time, iq_fri, sat_iq_time, iq_sat } = e.target.elements
        
        let body = {
            // tenDayFollowUp:tenDayFollowUp.checked, tyFollowUp:tyFollowUp.checked,
            sun_iq_time:parseInt(sun_iq_time.value), 
            mon_iq_time:parseInt(mon_iq_time.value), 
            tue_iq_time:parseInt(tue_iq_time.value), 
            wed_iq_time:parseInt(wed_iq_time.value), 
            thu_iq_time:parseInt(thu_iq_time.value), 
            fri_iq_time:parseInt(fri_iq_time.value), 
            sat_iq_time:parseInt(sat_iq_time.value), 
            iq_sun:iq_sun.checked, 
            iq_mon:iq_mon.checked, 
            iq_tue:iq_tue.checked, 
            iq_wed:iq_wed.checked,
            iq_thu:iq_thu.checked, 
            iq_fri:iq_fri.checked, 
            iq_sat:iq_sat.checked}

        await axios.post('/update-settings',  body)
        setStgsModalOpen(false)
        console.log('closed settings modal')
        setStgsFdbackModalOpen(true)
        console.log('closed settings feedback modal')
    }

    return(
        <div className="settings-container">
            <Modal closeTimeoutMS={100} isOpen={stgsFdbackModalOpen} onRequestClose={()=>setStgsFdbackModalOpen(false)}>
                <h2>Settings Updated</h2>
                <button onClick={()=>setStgsFdbackModalOpen(false)}>Close</button>
            </Modal>
            <Modal style={{content: {position:'static'}}} closeTimeoutMS={100} isOpen={stgsModalOpen} onRequestClose={()=>setStgsModalOpen(false)}>

                <form onSubmit={(e)=> updateSettings(e)} className="settings-modal">
                    <div className="follow-up-modal">
                    <label htmlFor="follow-up">Follow-up Reminders</label>
                    <input type="checkbox" id="follow-up" name="tenDayFollowUp"/>
                    </div>

                    <div className="ty-modal">
                    <label htmlFor="ty-letter">Thank You Reminders</label>
                    <input type="checkbox" id="ty-letter" name="tyFollowUp"/>
                    </div>
                    <div className="iq-day">
                    <h2>IQ Emails</h2>
                    <h2>Day of the week</h2>
                    </div>
                
                    <div className="week-modal">
                    <label htmlFor="sun">Sunday</label>
                    <input type="checkbox" name="iq_sun" id="sun"/>
                    <TimeSelect dayOfWeek={"sun_iq_time"}/>
                    </div>

                    <div className="week-modal">
                    <label htmlFor="mon">Monday</label>
                    <input type="checkbox" name="iq_mon" id="mon"/>
                    <TimeSelect dayOfWeek={"mon_iq_time"}/>
                    </div>
                    
                    <div className="week-modal">
                    <label htmlFor="tue">Tuesday</label>
                    <input type="checkbox" name="iq_tue" id="tue"/>
                    <TimeSelect dayOfWeek={"tue_iq_time"}/>
                    </div>

                     <div className="week-modal">  
                    <label htmlFor="wed">Wednesday</label>
                    <input type="checkbox" name="iq_wed" id="wed"/>
                    <TimeSelect dayOfWeek={"wed_iq_time"}/>
                    </div>

                    <div className="week-modal">
                    <label htmlFor="thu">Thursday</label>
                    <input type="checkbox" name="iq_thu" id="thu"/>
                    <TimeSelect dayOfWeek={"thu_iq_time"}/>
                    </div>

                    <div className="week-modal">
                    <label htmlFor="fri">Friday</label>
                    <input type="checkbox" name="iq_fri" id="fri"/>
                    <TimeSelect dayOfWeek={"fri_iq_time"}/>
                    </div>

                    <div className="week-modal">
                    <label htmlFor="sat">Saturday</label>
                    <input type="checkbox" name="iq_sat" id="sat"/>
                    <TimeSelect dayOfWeek={"sat_iq_time"}/>
                    </div>

                    <input className="modal-btn"type="submit" value="Submit"/>
                </form>
                
            </Modal>
            <div className="settings-bar">
                <h4 className="settings">Hi, {name}!</h4>
            </div>
            <div className="gear-settings">
                <RiSettings4Fill onClick={()=> setStgsModalOpen(true)}/>
            </div>
             <div>
                <h4 className="gear-text">Settings</h4>
            </div>
        </div>
    )
}
export default Settings