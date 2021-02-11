import './styles/Dashboard.css'
import { RiSettings4Fill } from "react-icons/ri";



function Settings(){
    return(
        <div className="settings-container">
            <div className="settings">
                <h4>Hello John!</h4>
            </div>
            <div className="gear-settings">
            < RiSettings4Fill />
            </div>

        </div>
    )
}
export default Settings