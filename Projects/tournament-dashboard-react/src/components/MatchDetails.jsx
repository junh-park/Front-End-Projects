import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
`
const MatchTeam = styled.div`
`
const MatchInfo = styled.h3`
    text-decoration: none;
`
const MatchDetails = ({ teamName, match }) => {
    if (!match) return null;
    const opposingTeam = match.team1 === teamName ? match.team2 : match.team1
    const opposingTeamLink = `/teams/${opposingTeam}`
    return (
        <Container>
            <MatchTeam>
                <MatchInfo>
                    vs <Link to={opposingTeamLink} style={{ color: 'black', textDecoration: 'none' }}>{opposingTeam}</Link>
                </MatchInfo>
                {match.matchWinner} by {match.resultMargin} {match.result}
            </MatchTeam>
        </Container>
    );
}

export default MatchDetails
