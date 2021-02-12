import './styles/Dashboard.css'
import { RiSettings4Fill } from "react-icons/ri";



function Settings({name}){
    return(
        <div className="settings-container">
            <div>
                <h4 className="settings">Hi, {name}!</h4>
            </div>
            <div className="gear-settings">
                <RiSettings4Fill />
            </div>
             <div>
                <h4 className="gear-text">Settings</h4>
            </div>
        </div>
    )
}
export default Settings