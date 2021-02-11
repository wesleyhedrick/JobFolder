function ResumeSummary({changeDisplayOutput}){
    return(
        <div className="resume-summary">
            {Array.from({length: 13}, (_,i)=> <div>Resume {i+1}</div>)}
            <div className='job-tracker' onClick={(e)=> changeDisplayOutput(e.target.className)}>Back</div>    
        </div>
    )
}

export default ResumeSummary