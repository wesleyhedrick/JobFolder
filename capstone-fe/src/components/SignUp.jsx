
import States from '../States.json'
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
                <select id="state" name="state">
                <option value="--"></option>

                {
                    Object.entries(States).map(([abbr, name] ) => (
                    <option value={name}>{abbr}</option>
                    ))
                }

               </select>
                <label htmlFor="daily_app_goal">Daily Application Quota</label>
                <select id="number" name="quota">
                <option value="--"></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                </select>

                <input type="submit" value="Sign Up"/>

            </form>

        </>
    )
}

export default SignUp