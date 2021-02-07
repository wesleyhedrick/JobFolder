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
            <form onSubmit={sendSignInCreds}>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email"/>
                <label htmlFor="password">Password</label>
                <input type="text" name="password" id="password"/>
                <Link to='forgot-password'>Forgot Password?</Link>
                <input type="submit" value="Sign In"/>
            </form>

            <p>First time here?</p>
            <button onClick={goToSignUpPage}>Create New Account</button>


        </>
    )
}

export default SignIn