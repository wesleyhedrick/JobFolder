import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import SignIn from './SignIn';
import SignUp from './SignUp';

function Credentials({consoleLogFormData}){
    const [whichCredPage, setWhichCredPage] = useState('sign-in')

    return(
        <div>
            { whichCredPage === 'sign-in' ? <SignIn setWhichCredPage={setWhichCredPage}/> 
            : 
            <SignUp consoleLogFormData={consoleLogFormData} setWhichCredPage={setWhichCredPage}/>}
        </div>
    )
}
export default Credentials