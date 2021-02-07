function JobsAppliedTo({changeDisplayOutput}){
    return(
        <div>
            <div>
                {Array.from({length: 13}, (_,i)=> <div>Job {i+1}</div>)}
            </div>
            <div className='job-tracker' onClick={(e)=> changeDisplayOutput(e.target.className)}>Back</div>
        </div>
    )
}

export default JobsAppliedTo