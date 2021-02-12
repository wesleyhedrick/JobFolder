import './styles/Signin.css'
import {
    Link,
    Redirect,
    useHistory
} from 'react-router-dom';
import axios from 'axios'
import {useState} from 'react'

function SignIn({setName, credStatus, setCredStatus, setWhichCredPage, setId, populateDashboard}) {
    const [emailError, showEmailError] = useState(false)
    const [passwordError,showPasswordError] = useState(false)
    const [jobCount, setJobCount] = useState(0)

    const history = useHistory()

   async function sendSignInCreds (e) {
        e.preventDefault()
        console.log('signin function is working')    
        const { email, password } = e.target.elements
        console.log('Email', email.value, 'Password', password.value)
        const signInCreds = {email: email.value, password:password.value}
        let creds;
        
        try {
            creds = await axios.post('/sign-in', signInCreds)
        } catch(e) {
            console.log(e)
        }
        console.log(creds.data.status)

        switch(creds.data.status){
            case 'success':
                console.log(creds.data);
                console.log(creds.data.id)
                setName(creds.data.first)
                populateDashboard(creds.data.id);
                history.push('/dashboard');
                break;
            case 'no username':
                showEmailError(true)
                let emailCredential = document.querySelector('.email-credential')
                emailCredential.classList.replace('success', 'error')
                break;
            case 'no password':
                showPasswordError(true)
                let passwordCredential = document.querySelector('.password-credential')
                passwordCredential.classList.replace('success', 'error')
            break;
        }
   }

    return (
    <>
        
        <form className="signin-container" onSubmit={sendSignInCreds}>
            <div><h1 className="signin-title">.jobfolder</h1></div>         
                <div className="signin">
                    <label htmlFor="email">Email</label>
                    <input 
                    className='email-credential-success' 
                    type="text" 
                    name="email" 
                    id="email"/>
                    {emailError ? <p className='email-credential-emessage'>This email doesn't match our records.</p> : null}
                    <label htmlFor="password">Password</label>
                    <input 
                    className='password-credential success' 
                    type="text" 
                    name="password" 
                    id="password"/>
                    {passwordError ? 
                    <p className='password-credential-emessage'>This password doesn't match anything we have.</p>: null}
                    <Link to='forgot-password' className="forgot-link">Forgot Password?</Link>
                    <input className="signin-btn" type="submit" value="Sign In"/>
                    <div>
                    <p className="first-time">First time here?</p>
                    <button className="signup-page-btn" onClick={()=>setWhichCredPage('sign-up')}>Sign Up</button>
                </div>
            </div>  
        </form>
        
         


    </>
    )
}

export default SignIn