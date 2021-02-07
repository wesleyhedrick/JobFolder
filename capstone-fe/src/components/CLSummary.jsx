function CLSummary(){
    return(
        <div>
            {Array.from({length: 13}, (_,i)=> <div>Cover Letter {i+1}</div>)}
        </div>
    )
}

export default CLSummary