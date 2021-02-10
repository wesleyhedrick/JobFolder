import './styles/Dashboard.css'

function HeadsUpDisplay({countOfJobs,appReality,appRatio,inspiration}) {
    return(
        <>  
            <div className="head1">
            <h6># of Jobs Applied</h6><br/>
              <p>{countOfJobs}</p>
            </div>
            <div className="head2">
            <h6>Daily Job Goal</h6><br/>
              <p>{appRatio}/1</p>
              <h6>Your Ratio</h6>
              <p>{appReality}/1</p>
            </div>
            <div className="head3">{inspiration}</div>
        </>
    )
}
export default HeadsUpDisplay