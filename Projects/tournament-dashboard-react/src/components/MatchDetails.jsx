import React from 'react'

const MatchDetails = ({match}) => {
    if (!match) return null;
    return (
        <div className="MatchDetail">
            <h3>Latest Matches</h3>
            <h5>{match.team1} vs {match.team2}</h5>
        </div>
    )
}

export default MatchDetails
