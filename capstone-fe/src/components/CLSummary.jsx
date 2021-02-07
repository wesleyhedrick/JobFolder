function CLSummary({changeDisplayOutput}){
   
    return(
        <div>
            {Array.from({length: 13}, (_,i)=> <div>Cover Letter {i+1}</div>)}
            <div className='letters' 
                onClick={(e)=>{changeDisplayOutput(e.target.className)}}>Back
            </div>
            <div className='ty-letters' 
                onClick={(e)=>changeDisplayOutput(e.target.className)}>Thank You Letters
            </div>
        </div>
    )
}

export default CLSummary