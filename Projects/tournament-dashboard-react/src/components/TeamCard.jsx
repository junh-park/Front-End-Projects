import React from 'react'
import styled from 'styled-components'
import { teamData } from '../static/PathsData'

const Container = styled.div`
    width: 6.5em;
    padding: 1rem 4rem;
    margin: 2rem;
    border-radius: 5px;
    border: 0.2rem solid black;
    flex: 1 1 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: white;
`
const TeamIcon = styled.img`
    width: 70px;
    height: 70px;
    border: 1px solid black;
    border-radius: 30%;
`
const TeamInfo = styled.p`
    font-size: 1.4rem;
    font-weight: bold;
    text-align: center;
`
const TeamCard = ({ teamName }) => {
    return (
        <Container>
            <TeamIcon src={teamData.find(tData => tData.name === teamName).teamIcon} />
            <TeamInfo>{teamName}</TeamInfo>
        </Container>
    )
}

export default TeamCard
