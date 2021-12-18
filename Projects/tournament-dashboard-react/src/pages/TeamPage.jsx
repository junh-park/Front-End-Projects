import { React, useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import MatchCard from '../components/MatchCard'
import MatchDetails from '../components/MatchDetails'
import styled from 'styled-components'

const TeamPage = () => {
    const [team, setTeam] = useState({ matches: [] });
    const { teamName } = useParams();

    useEffect(
        () => {
            const getTeam = async () => {
                const res = await fetch(`/teams/${teamName}`)
                const data = await res.json()
                console.log(data)
                setTeam(data)
            }
            getTeam();
        }, [teamName]
    );

    if (!team || !team.teamName) return <h1>Team not found</h1>

    return (
        <div>
            <h1>{team.teamName}</h1>
            <h3>Latest Match</h3>
            <MatchCard teamName={team.teamName} match={team.matches[0]} />
            {team.matches.slice(1).map(match => <MatchDetails key={match.id} teamName={team.teamName} match={match} />)}
            <Outlet />
        </div>
    );
}

export default TeamPage
