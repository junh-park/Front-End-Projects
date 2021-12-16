import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MatchCard from '../components/MatchCard'
import styled from 'styled-components'

const Container = styled.div`

`
const MatchInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 40px;
    padding: 40px;
`
const MatchPage = () => {
    const [matches, setMatches] = useState([]);
    const [team, setTeam] = useState("");
    const { teamName, year } = useParams();

    useEffect(
        () => {
            const getMatches = async () => {
                const res = await fetch(`http://localhost:8080/teams/${teamName}/matches?year=${year}`)
                const data = await res.json()
                setTeam(teamName)
                setMatches(data)
            }
            getMatches();
        }, [teamName, year]
    );

    return (
        <Container>
            <h3>Match Page {teamName}</h3>
            <MatchInfo>
                {matches.map(match => <MatchCard key={match.id} teamName={team} match={match} />)}
            </MatchInfo>
        </Container>
    );
}

export default MatchPage
