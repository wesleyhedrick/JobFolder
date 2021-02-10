import './styles/Hero.css'
import hero from './images/hero-image.jpg'

import {
    Link
} from 'react-router-dom';

function Hero() {
    return (
        <>
            <div className="hero-container">
            <div className="title">
            
                <h1>.jobfolder</h1>
                <h4>Let us help you make your job search, less stressful!</h4>
                
                <Link to='/credentials'className="hero-signup-btn">Get started</Link>
                </div>
            <div className="hero-image">
                <img src={hero} alt={hero}/>
            </div>
            
        </div>
       </> 
    )
}

export default Hero