import './styles/Hero.css'

import {
    Link
} from 'react-router-dom';

function Hero() {
    return (
        <>
        <div className="hero-container">
            <div className="title">
                <h1>.jobfolder</h1>
            </div>
            <div className="paper-one">
                <div className="folder">
                <Link to='/credentials'className="signup-btn">Sign up!</Link>
                </div>
            </div>
        </div>
       </> 
    )
}

export default Hero