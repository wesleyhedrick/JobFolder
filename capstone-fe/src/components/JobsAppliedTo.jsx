function JobsAppliedTo(){
    return (
        <div>
            <div>
                {Array.from({length: 13}, (_,i)=> <div>Job {i+1}</div>)}
            </div>
        </div>
    )
}

export default JobsAppliedTo