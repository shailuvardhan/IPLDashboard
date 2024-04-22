// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetailsList} = props

  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatchDetailsList

  return (
    <div className="latest-match-container">
      <div className="left-container">
        <h1 className="h1-text">{competingTeam}</h1>
        <p className="p-text">{date}</p>
        <p className="p-text">{venue}</p>
        <p className="p-text">{result}</p>
      </div>
      <div className="img-container-1">
        <img
          src={competingTeamLogo}
          alt={competingTeam}
          className="latest-match-img"
        />
      </div>
      <div className="right-container">
        <p className="p-text">First Innings</p>
        <p className="p-text">{firstInnings}</p>
        <p className="p-text">Second Innings</p>
        <p className="p-text">{secondInnings}</p>
        <p className="p-text">Man Of The Match</p>
        <p className="p-text">{manOfTheMatch}</p>
        <p className="p-text">Umpires</p>
        <p className="p-text">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
