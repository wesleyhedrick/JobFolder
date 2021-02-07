function TYLettersSummary({changeDisplayOutput}){
    return (
        <div>
            {Array.from({length: 13}, (_,i)=> <div>Thank You Letter {i+1}</div>)}
            <div className='letters' onClick={(e)=> changeDisplayOutput(e.target.className)}>Back</div>
            <div className='cover-letters' onClick={(e)=> changeDisplayOutput(e.target.className)}>Cover Letters</div>
        </div>
    )
}

export default TYLettersSummary