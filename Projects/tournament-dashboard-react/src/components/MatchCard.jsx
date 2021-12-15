import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { teamPaths } from '../static/PathsData';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    align-content: space-around;
    margin: 1rem;
    padding: 1rem;
`
const MatchTeam = styled.div`
    border: 1px solid black;
    border-radius: 5px;
    padding: 20px;
    background: ${props => props.winBanner ? "#a3cfec" : "#e2b6b3"};
`
const OpposingTeam = styled.h3`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`
const Image = styled.img`
    width: 2rem;
    height: 2rem;
    border: 1px solid black;
    border-radius: 50%;
`
const TeamDesc = styled.p`
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: palevioletred;
`
const MatchInfo = styled.h4`
`
const MatchCard = ({ teamName, match }) => {
    if (!match) return null;
    const opposingTeam = match.team1 === teamName ? match.team2 : match.team1
    const opposingTeamUrl = `/teams/${opposingTeam}`
    const win = match.matchWinner === teamName

    console.log(match)
    return (
        <Container>

            <MatchTeam winBanner={win}>
                <OpposingTeam>
                    vs <StyledLink to={opposingTeamUrl}>
                        <Image src={teamPaths.filter(team => team.name === opposingTeam).pop().teamIcon} />
                        <TeamDesc>{opposingTeam}</TeamDesc>
                    </StyledLink>
                </OpposingTeam>
                {win ? "Win" : "Loss"}
                <MatchInfo>
                    <p>{match.date}</p>
                    <p>at {match.venue}</p>
                    <p>{match.matchWinner} won by {match.resultMargin} {match.result}</p>
                </MatchInfo>
            </MatchTeam>
        </Container>
    );
}

export default MatchCard
