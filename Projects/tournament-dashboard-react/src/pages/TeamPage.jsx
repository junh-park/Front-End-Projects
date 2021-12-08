import {React, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import MatchCard from '../components/MatchCard'
import MatchDetails from '../components/MatchDetails'

const TeamPage = () => {
    const [team, setTeam] = useState({matches: []});
    const { teamName } = useParams();

    useEffect(
        () => {
            const fetchMatches = async () => {
                const res = await fetch(`http://localhost:8080/teams/${teamName}`)
                const data  = await res.json()
                console.log(data)
                setTeam(data)
            }
            fetchMatches();
        }, []
    );

    return (
        <div>
           <h1>{team.teamName}</h1>
           <h3>Latest Match</h3>
           <MatchCard match={team.matches[0]}/>
           {team.matches.slice(1).map(match => <MatchDetails key={match.id} match={match} />)}
        </div>
    );
}

export default TeamPage
