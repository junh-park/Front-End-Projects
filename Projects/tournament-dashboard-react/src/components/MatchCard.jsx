import React from 'react'
import { Link } from 'react-router-dom';

const MatchCard = ({teamName, match}) => {
    if (!match) return null;
    const opposingTeam = match.team1 === teamName ? match.team2 : match.team1
    const opposingTeamUrl = `/teams/${opposingTeam}`

    return (
        <div className="MatchDetail">
            <h1>vs <Link to={opposingTeamUrl}>{opposingTeam}</Link></h1>
            <h2>{match.date}</h2>
            <h3>at {match.venue}</h3>
            <h3>{match.matchWinner} by {match.resultMargin} {match.result}</h3>
        </div>
    );
}

export default MatchCard
