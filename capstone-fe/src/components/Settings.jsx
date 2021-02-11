import './styles/Dashboard.css'
// import { FaUserCircle } from 'react-icons/fa';

function Settings({name}){
    return(
        <div className="settings-container">
            <div className="settings">
                <h4>Hi, {name}!</h4>
            </div>
        </div>
    )
}
export default Settings