import {React, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import MatchCard from '../components/MatchCard'

const MatchPage = () => {
    const [matches, setMatches] = useState([]);
    const { teamName, year } = useParams();

    useEffect(
        () => {
            const fetchMatches = async () => {
                const res = await fetch(`http://localhost:8080/teams/${teamName}/matches?year=${year}`)
                const data  = await res.json()
                console.log(data)
                setMatches(data)
            }
            fetchMatches();
        }, []
    );

    return (
        <div>
           <h3>Match Page</h3>
           {matches.map(match => <MatchCard key={match.id} teamName={match.teamName} match={match} />)}
        </div>
    );
}

export default MatchPage
