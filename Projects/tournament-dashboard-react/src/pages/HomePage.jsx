import {React, useState, useEffect } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    margin-top: 40px;
`
const HomePage = () => {
    const [teams, setTeams] = useState([]);

    useEffect(
        () => {
            const fetchTeams = async () => {
                const res = await fetch(`http://localhost:8080/teams`)
                const data  = await res.json()
                console.log(data)
                setTeams(data)
            }
            fetchTeams();
        }, []
    );

    return (
        <Container>
            {teams.map(team => <p>{team.teamName}</p>)}
        </Container>
    )
}

export default HomePage
