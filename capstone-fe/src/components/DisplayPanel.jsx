import {
    BrowserRouter as Router,
    Switch, 
    Route, 
} from 'react-router-dom';

import JobsAppliedTo from './JobsAppliedTo';
import ResumeSummary from './ResumeSummary';
import InterviewQuestions from './InterviewQuestions';
import TYLettersSummary from './TYLettersSummary';
import CLSummary from './CLSummary';
import LetterOptions from './LetterOptions'



function DisplayPanel({displayOutPut, changeDisplayOutput}){

    return(
        <div>
            {displayOutPut.map(item => <div>{item.title}</div>)}
        </div>
    )

}
export default DisplayPanel