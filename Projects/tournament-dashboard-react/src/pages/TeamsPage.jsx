import { React, useState, useEffect } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import styled from 'styled-components'
import TeamCard from '../components/TeamCard'

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 5px;
    margin: 3rem;
    padding: 2rem;
    justify-content: center;
    align-items: center;
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
`
const TeamsPage = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        const fetchTeams = async () => {
            const res = await fetch(`/teams`)
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
                    <StyledLink key={team.teamName} to={`${team.teamName}`}>
                        <TeamCard teamName={team.teamName} />
                    </StyledLink>
                );
            })}
            <Outlet />
        </Container >
    )
}

export default TeamsPage