import React from 'react'
import { Link } from 'react-router-dom';

const MatchCard = ({teamName, match}) => {
    if (!match) return null;
    const otherTeam = match.team1 === teamName ? match.team2 : match.team1
    const otherTeamLink = `/teams/${otherTeam}`

    return (
        <div className="MatchDetail">
            <h1>vs <Link to={otherTeamLink}>{otherTeam}</Link></h1>
            <h2>{match.date}</h2>
            <h3>at {match.venue}</h3>
            <h3>{match.matchWinner} by {match.resultMargin} {match.result}</h3>
        </div>
    );
}

export default MatchCard
