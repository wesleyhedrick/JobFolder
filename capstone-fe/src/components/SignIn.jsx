import './styles/Signin.css'
import {
    Link
} from 'react-router-dom';
import axios from 'axios'

function SignIn({setWhichCredPage}) {
   function goToSignUpPage(){
    setWhichCredPage('sign-up')
   }

   async function sendSignInCreds (e) {
        const { email, password } = e.target
        const signInCreds = {email: email.value, password:password.value}
        try {
            await axios.post('/',signInCreds)
        } catch(e) {
            console.log(e)
        }
   }

    return (
    <>
        <div className="main-container">
            <form class="signin-container" onSubmit={sendSignInCreds}>
                <div className="title"><h1>.jobfolder</h1></div> 
                    <div className="paper-one">
                        <div className="signin">
                            <label htmlFor="email">Email</label>
                            <input 
                            type="text" 
                            name="email" 
                            id="email"/>
                            <label htmlFor="password">Password</label>
                            <input 
                            type="text" 
                            name="password" 
                            id="password"/>
                            <Link to='forgot-password'className="forgot-link">Forgot Password?</Link>
                            <input className="signin-btn"type="submit" value="Sign In"/>
                    </div>    
                </div>
            </form>
        
            <p>First time here?</p>
            <button className="signup-btn"onClick={goToSignUpPage}>Create New Account</button>
        </div>

    </>
    )
}

export default SignIn