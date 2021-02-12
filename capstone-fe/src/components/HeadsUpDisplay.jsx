import './styles/HeadsUpDisplay.css'

function HeadsUpDisplay({countOfJobs,appReality,appRatio,inspiration}) {
    return(
        <>  
            <div className="head1">
            <span># of Jobs Applied</span>
              <p className="count-in-head">{countOfJobs}</p>
            </div>

            <div className="head2">
            <span>Daily Job Goal</span>
              <p className="count-in-head">{appRatio} per day</p>
              <span>Your Ratio</span>
              <p className="count-in-head">{appReality} per day</p>
            </div>
            <div className="head3">
                <p>{inspiration.quote}</p>
                <p>{inspiration.author}</p>
            </div>
        </>
    )
}
export default HeadsUpDisplay