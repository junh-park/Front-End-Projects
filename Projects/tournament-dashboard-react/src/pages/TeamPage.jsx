import React from 'react'
import MatchCard from '../components/MatchCard'
import MatchDetailsBox from '../components/MatchDetailsBox'

const TeamPage = () => {
    return (
        <div>
           <h1>Team Name</h1>
           <h3>Latest Match</h3>
           <MatchDetailsBox />
           <MatchCard />
           <MatchCard />
           <MatchCard />
        </div>
    )
}

export default TeamPage
