import './styles/Dashboard.css'
import { RiSettings4Fill } from "react-icons/ri";



function Settings({name}){
    return(
        <div className="settings-container">
            <div className="settings">
                <h4>Hi, {name}!</h4>
            </div>
            <div className="gear-settings">
            < RiSettings4Fill />
            </div>

        </div>
    )
}
export default Settings