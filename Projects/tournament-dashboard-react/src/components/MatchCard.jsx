import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
`
const MatchTeam = styled.h3`
    justify-content: center;
    text-align: center;
`

const OpposingTeam = styled.h3`
    justify-content: center;
    text-decoration: none;
`

const MatchInfo = styled.h4`
`

const MatchCard = ({ teamName, match }) => {
    if (!match) return null;
    const opposingTeam = match.team1 === teamName ? match.team2 : match.team1
    const opposingTeamUrl = `/teams/${opposingTeam}`

    return (
        <Container>
            <MatchTeam>
                <OpposingTeam>
                    vs <Link to={opposingTeamUrl} style={{ color: 'black', textDecoration: 'none' }}>{opposingTeam}</Link>
                </OpposingTeam>
                <MatchInfo>
                    {match.date}
                    at {match.venue}
                    {match.matchWinner} by {match.resultMargin} {match.result}
                </MatchInfo>
            </MatchTeam>
        </Container>
    );
}

export default MatchCard
