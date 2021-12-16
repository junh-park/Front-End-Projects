import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { teamData } from '../static/PathsData';

const Container = styled.div`
    margin: 1rem;
    padding: 1rem;
`
const MatchTeam = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    align-content: space-around;
    height: 20vh;
    width: 50vw;
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
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    color: #595959;
`
const MatchInfo = styled.h4`
`
const Result = styled.h4`
    color: ${props => props.resultText ? "#1a78ae" : "#c6443e"};
`
const MatchCard = ({ teamName, match }) => {
    if (!match) return null;
    const opposingTeam = match.team1 === teamName ? match.team2 : match.team1
    const opposingTeamUrl = `/teams/${opposingTeam}`
    const win = match.matchWinner === teamName;

    return (
        <Container>
            <MatchTeam winBanner={win}>
                <OpposingTeam>
                    <b>vs</b>
                    <StyledLink to={opposingTeamUrl}>
                        <Image src={teamData.find(team => team.name === opposingTeam).teamIcon} />
                        <TeamDesc>{opposingTeam}</TeamDesc>
                    </StyledLink>
                </OpposingTeam>
                <Result resultText={win}>{win ? "Win" : "Loss"}</Result>
                <MatchInfo>
                    <p>{match.date}</p>
                    <p>at {match.venue}</p>
                    <p>{match.matchWinner} won by {match.resultMargin} {match.result}</p>
                    <p>{match.playerOfMatch}</p>
                </MatchInfo>
            </MatchTeam>
        </Container>
    );
}

export default MatchCard
