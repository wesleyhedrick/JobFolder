function InterviewQuestions(){
    return (
        <div>
            {Array.from({length: 13}, (_,i)=> <div>Interview Question {i+1}</div>)}
        </div>
    )
}

export default InterviewQuestions