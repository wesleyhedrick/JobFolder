import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import SignIn from './SignIn';
import SignUp from './SignUp';

function Credentials({consoleLogFormData, setId, populateDashboard}){
    const [whichCredPage, setWhichCredPage] = useState('sign-in')
    const [credStatus, setCredStatus] = useState('success')
    return(
        <div>
            { whichCredPage === 'sign-in' ? <SignIn populateDashboard={populateDashboard} setId={setId}credStatus={credStatus} setCredStatus={setCredStatus}setWhichCredPage={setWhichCredPage}/> 
            : 
            <SignUp consoleLogFormData={consoleLogFormData} setWhichCredPage={setWhichCredPage}/>}
        </div>
    )
}
export default Credentials