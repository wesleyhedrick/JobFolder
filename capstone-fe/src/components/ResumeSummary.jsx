function ResumeSummary(){
    return(
        <div>
            {Array.from({length: 13}, (_,i)=> <div>Resume {i+1}</div>)}
        </div>
    )
}

export default ResumeSummary