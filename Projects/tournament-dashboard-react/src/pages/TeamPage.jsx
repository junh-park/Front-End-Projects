import {React, useEffect} from 'react'
import MatchCard from '../components/MatchCard'
import MatchDetails from '../components/MatchDetails'

const TeamPage = () => {
    useEffect(
        () => {
            const fetchMatches = async () => {
                const res = fetch('http://localhost:8080/teams/Melbourne%20Stars')
                const data  = await res.json()
                console.log(data)
            }
            fetchMatches();
        }
    );

    return (
        <div>
           <h1>Team Name</h1>
           <h3>Latest Match</h3>
           <MatchCard />
           <MatchDetails />
           <MatchDetails />
           <MatchDetails />
        </div>
    );
}

export default TeamPage
