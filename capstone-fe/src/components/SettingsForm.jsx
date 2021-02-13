import './styles/Dashboard.css'

function SettingsForm(){
    return(
        
            <form className="modal-from "action=""> 
                <label htmlFor="ty-notes">Thank You Notes</label>
                <input type="checkbox" name="ty-notes" id="ty-notes"/>
                <label htmlFor="fu-notes">Thank You Notes</label>
                <input type="checkbox" name="fu-notes" id="fu-notes"/>
                <label htmlFor="">Interview Questions</label>
                
                <label htmlFor="mon">Monday</label>
                <input type="checkbox" id="mon" name="mon" value="mon"/>
                <label htmlFor="mon">Tuesday</label>
                <input type="checkbox" name="tue" value="tue"/>
                <label htmlFor="mon">Wednesday</label>
                <input type="checkbox" name="wed" value="wed"/>
                <label htmlFor="mon">Thursday</label>
                <input type="checkbox" name="thu" value="thu"/>
                <label htmlFor="mon">Friday</label>
                <input type="checkbox" name="fri" value="fri"/>
                <label htmlFor="mon">Saturday</label>
                <input type="checkbox" name="sat" value="sat"/>
                <label htmlFor="mon">Sunday</label>
                <input type="checkbox" name="sun" value="sun"/>  
            </form>
        
    )
}

export default SettingsForm