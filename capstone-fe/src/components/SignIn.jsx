import './styles/Signin.css'
import {
    Link,
    Redirect,
    useHistory
} from 'react-router-dom';
import axios from 'axios'
import {useState} from 'react'

function SignIn({credStatus, setCredStatus, setWhichCredPage}) {
    const [emailError, showEmailError] = useState(false)
    const [passwordError,showPasswordError] = useState(false)
    const history = useHistory()

   async function sendSignInCreds (e) {
        e.preventDefault()
        console.log('signin function is working')    
        const { email, password } = e.target
        console.log('Email', email.value, 'Password', password.value)
        const signInCreds = {email: email.value, password:password.value}
        let creds;
        
        try {
            creds = await axios.post('/sign-in', signInCreds)
        } catch(e) {
            console.log(e)
        }
        
        console.log('Here are your creds', creds.data)
        switch(creds.data){
            case 'success':
                console.log(creds.data);
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
            <form onSubmit={sendSignInCreds}>
                <label htmlFor="email">Email</label>
                <input className='email-credential success' type="text" name="email" id="email"/>
                {emailError ? <p className='email-credential-emessage'>This email doesn't match our records.</p> : null}

                <label htmlFor="password">Password</label>
                <input className='password-credential success' type="text" name="password" id="password"/>
                {passwordError ? <p className='password-credential-emessage'>This password doesn't match anything we have.</p>: null}
                <Link to='forgot-password'>Forgot Password?</Link>
                <input type="submit" value="Sign In"/>
            </form>
        
            <p>First time here?</p>
            <button onClick={()=>setWhichCredPage('sign-up')}>Create New Account</button>


    </>
    )
}

export default SignIn