// Write your code here
import './index.css'

const MatchCard = props => {
  const {cardsList} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = cardsList
  const colorStatus = matchStatus === 'Won' ? 'green' : 'red'
  return (
    <li className="list">
      <div className="img-container">
        <img src={competingTeamLogo} alt={competingTeam} className="img" />
      </div>
      <h1 className="h1-card-text">{competingTeam}</h1>
      <p className="p-card-text">{result}</p>
      <p className={`p-card-text ${colorStatus}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
