import {
    Link
} from 'react-router-dom';

import axios from 'axios'

function SignUp({setWhichCredPage}) {
    
    async function sendSignUpData(e){
        e.preventDefault();
        const { first, last, username, password, email,
        address_line1, address_line2, zip, state, daily_app_goal} = e.target
        
        const formData = { first: first.value, last:last.value, username:username.value, 
            password:password.value, email:email.value, address_line1:address_line1.value, 
            address_line2:address_line2.value,
            zip:zip.value, state:state.value, daily_app_goal:daily_app_goal.value}

        console.log(formData)
        
        try {
            await axios.post('/', formData)
        } catch(e) {
            console.log(e)
        }
        setWhichCredPage('sign-in')
    }

    return (
        <> 
            <form onSubmit={sendSignUpData} method="POST">
                <label htmlFor="first">First Name</label>
                <input type="text" name="first" id="first"/>

                <label htmlFor="last">Last Name</label>
                <input type="text" name="last" id="last"/>

                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username"/>

                <label htmlFor="password">Password</label>
                <input type="text" name="password" id="password"/>

                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email"/>

                <label htmlFor="address_line1">Address Line 1</label>
                <input type="text" name="address_line1" id="address_line1"/>

                <label htmlFor="address_line2">Address Line 2</label>
                <input type="text" name="address_line2" id="address_line2"/>

                <label htmlFor="zip">Zipcode</label>
                <input type="text" name="zip" id="zip"/>

                <label htmlFor="state">State</label>
                <input type="text" name="state" id="state"/>

                <label htmlFor="daily_app_goal">Daily Application Quota</label>
                <input type="text" name="daily_app_goal" id="daily_app_goal"/>
                <input type="submit" value="Sign Up"/>

            </form>

        </>
    )
}

export default SignUp