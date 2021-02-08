function InterviewQuestions({changeDisplayOutput}){
    return (
        <div>
            {Array.from({length: 13}, (_,i)=> <div>Interview Question {i+1}</div>)}
            <div className='job-tracker' onClick={(e)=> changeDisplayOutput(e.target.className)}>Back</div>
        </div>
    )
}

export default InterviewQuestions