import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import Navbar from './Navbar';

const Container = styled.div`
    display: flex;
`
const MatchTeam = styled.h3`
    text-align: center;
`

const MatchCard = ({ teamName, match }) => {
    if (!match) return null;
    const opposingTeam = match.team1 === teamName ? match.team2 : match.team1
    const opposingTeamUrl = `/teams/${opposingTeam}`

    return (
        <Container>
            <Navbar />
            <MatchTeam>
                vs <Link to={opposingTeamUrl}>{opposingTeam}</Link>
                <h2>{match.date}</h2>
                <h3>at {match.venue}</h3>
                <h3>{match.matchWinner} by {match.resultMargin} {match.result}</h3>
            </MatchTeam>
        </Container>
    );
}

export default MatchCard
