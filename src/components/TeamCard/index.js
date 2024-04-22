import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails

  return (
    <li className="list-item">
      <Link to={`/team-matches/${id}`} className="link">
        <img src={teamImageUrl} alt={id} className="card-img" />
        <h1 className="card-name">{name}</h1>
      </Link>
    </li>
  )
}
export default TeamCard
