import React from 'react'
import { Link } from 'react-router-dom'

const MatchDetails = ({teamName, match}) => {
    if (!match) return null;
    const opposingTeam = match.team1 === teamName ? match.team2 : match.team1
    const opposingTeamLink = `/teams/${opposingTeam}`
    return (
        <div className="MatchDetail">
            <h3>vs <Link to={opposingTeamLink}>{opposingTeam}</Link></h3>
            <p>{match.matchWinner} by {match.resultMargin} {match.result}</p>
        </div>
    );
}

export default MatchDetails
