import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { teamData } from '../static/PathsData'
const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    align-content: space-around;
    margin: 4rem;
    padding: 5rem;
    gap: 5px;
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
`
const TeamCard = styled.div`
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
const HomePage = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        const fetchTeams = async () => {
            const res = await fetch(`http://localhost:8080/teams`)
            const data = await res.json()
            console.log(data)
            setTeams(data)
        }
        fetchTeams();
        }, []
    );

    return (
        <Container>
            {teams.map(team => {
                return (
                    <StyledLink key={team.teamName} to={`/teams/${team.teamName}`}>
                        <TeamCard>
                            <TeamIcon src={teamData.find(tData => tData.name === team.teamName).teamIcon} />
                            <TeamInfo>{team.teamName}</TeamInfo>
                        </TeamCard>
                    </StyledLink>
                );
            })}
        </Container>
    )
}

export default HomePage