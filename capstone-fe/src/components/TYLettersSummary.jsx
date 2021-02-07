function TYLettersSummary(){
    return (
        <div>
            {Array.from({length: 13}, (_,i)=> <div>Thank You Letter {i+1}</div>)}
        </div>
    )
}

export default TYLettersSummary