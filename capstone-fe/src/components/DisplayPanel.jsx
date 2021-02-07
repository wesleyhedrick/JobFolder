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
   
    switch(displayOutPut){
        case 'job-tracker':
            return <JobsAppliedTo changeDisplayOutput={changeDisplayOutput}/>
        case 'resumes':
            return <ResumeSummary changeDisplayOutput={changeDisplayOutput}/>
        case 'letters':
            return <LetterOptions changeDisplayOutput={changeDisplayOutput}/>
        case 'interview-questions':
            return <InterviewQuestions changeDisplayOutput={changeDisplayOutput}/>
        case 'ty-letters':
            return <TYLettersSummary changeDisplayOutput={changeDisplayOutput}/>
        case 'cover-letters':
            return <CLSummary changeDisplayOutput={changeDisplayOutput}/>
        case '':
            return <JobsAppliedTo changeDisplayOutput={changeDisplayOutput}/>

    }

}
export default DisplayPanel