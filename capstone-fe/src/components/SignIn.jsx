import './styles/Signin.css'
import {
    Link,
    Redirect,
    useHistory
} from 'react-router-dom';
import axios from 'axios'
import {useState} from 'react'

function SignIn({credStatus, setCredStatus, setWhichCredPage, setId}) {
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
                setId(creds.id)
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
            <div className="title"><h1>.Jobfolder</h1></div>
                <div className="paper-one">
                    <div className="folder">
                        <div className="signin">
                            <label htmlFor="email">Email</label>
                            <input 
                            className='email-credential success' 
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
                            <p>First time here?</p>
                            <button className="signup-btn" onClick={()=>setWhichCredPage('sign-up')}>Create New Account</button>
                    </div>
                </div>   
            </div>
        </form>
        
         


    </>
    )
}

export default SignIn