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



function DisplayPanel({displayOutPut, displayCategory}){
    switch(displayCategory){
        case 'job-tracker':
            return(
                <div>{displayOutPut.map(item => <div>{item.company_name} {item.role} {item.date_applied}</div>)}</div>
            )
        case 'interview-questions':
            return(
                <div>{
                    displayOutPut.map(item => 
                        <div>
                            <div>{item.question}</div><div>{item.answer}</div>
                        </div>
                    )}
                </div>
            )
        default:
            return(
                <div>
                    {
                        displayOutPut.map(item => <div>{item.title} {item.doc_type}</div>)
                    }
                </div>
            )
    }
}
export default DisplayPanel