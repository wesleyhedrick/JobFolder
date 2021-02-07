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
            return <JobsAppliedTo />
        case 'resumes':
            return <ResumeSummary />
        case 'letters':
            return <LetterOptions changeDisplayOutput={changeDisplayOutput}/>
        case 'interview-questions':
            return <InterviewQuestions />
        case 'ty-letters':
            return <TYLettersSummary />
        case 'cover-letters':
            return <CLSummary />
        case '':
            return <ResumeSummary />

    }

}
export default DisplayPanel