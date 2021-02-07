import { Link } from 'react-router-dom'
import Sidebar from './Sidebar';
import DisplayPanel from './DisplayPanel';
import Settings from './Settings';
import HeadsUpDisplay from './HeadsUpDisplay';
import { useState } from 'react'

function Dashboard(){
    const [displayOutPut, changeDisplayOutput] = useState('');
    
    return (
        <div>
            <Sidebar changeDisplayOutput={changeDisplayOutput}/>
            <HeadsUpDisplay />
            <Settings />
            <DisplayPanel changeDisplayOutput={changeDisplayOutput} displayOutPut={displayOutPut} />
        </div>

    )
}

export default Dashboard