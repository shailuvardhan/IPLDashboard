// Write your code here
import {Component} from 'react'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {TeamBannerUrl: '', latestMatchDetails: {}, recentMatches: []}

  componentDidMount() {
    this.getTeamMatchesList()
  }

  getTeamMatchesList = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    // latest_match_details,recent_matches,team_banner_url

    const TeamBannerUrl = data.team_banner_url
    const recentMatches = data.recent_matches.map(eachItem => ({
      competingTeam: eachItem.competing_team,
      competingTeamLogo: eachItem.competing_team_logo,
      date: eachItem.date,
      firstInnings: eachItem.first_innings,
      id: eachItem.id,
      manOfTheMatch: eachItem.man_of_the_match,
      matchStatus: eachItem.match_status,
      result: eachItem.result,
      secondInnings: eachItem.second_innings,
      umpires: eachItem.umpires,
      venue: eachItem.venue,
    }))

    const latestMatchDetails = {
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      date: data.latest_match_details.date,
      firstInnings: data.latest_match_details.first_innings,
      id: data.latest_match_details.id,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      matchStatus: data.latest_match_details.match_status,
      result: data.latest_match_details.result,
      secondInnings: data.latest_match_details.second_innings,
      umpires: data.latest_match_details.umpires,
      venue: data.latest_match_details.venue,
    }
    console.log(latestMatchDetails)

    this.setState({TeamBannerUrl, latestMatchDetails, recentMatches})
  }

  render() {
    const {TeamBannerUrl, latestMatchDetails, recentMatches} = this.state
    return (
      <div className="team-matches-container">
        <div className="team-banner-url-container">
          <img
            src={TeamBannerUrl}
            alt="team banner"
            className="team-banner-url-img"
          />
        </div>
        <LatestMatch
          latestMatchDetailsList={latestMatchDetails}
          key={latestMatchDetails.id}
        />
        <ul className="cards-list-container">
          {recentMatches.map(eachItem => (
            <MatchCard cardsList={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default TeamMatches
