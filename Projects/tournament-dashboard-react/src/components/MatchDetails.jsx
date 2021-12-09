import React from 'react'
import { Link } from 'react-router-dom'

const MatchDetails = ({teamName, match}) => {
    if (!match) return null;
    const otherTeam = match.team1 === teamName ? match.team2 : match.team1
    const otherTeamLink = `/teams/${otherTeam}`
    return (
        <div className="MatchDetail">
            <h3>vs <Link to={otherTeamLink}>{otherTeam}</Link></h3>
            <p>{match.matchWinner} by {match.resultMargin} {match.result}</p>
        </div>
    );
}

export default MatchDetails
