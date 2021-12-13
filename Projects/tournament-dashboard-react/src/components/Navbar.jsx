import React from 'react'
import styled from 'styled-components'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

const Container = styled.div`
    height: 100px;
    background-color: black;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Navbar = () => {

    return (
            <AppBar position="fixed" color="primary">
                <Toolbar>
                    <Button component={Link} to={'/teams/Brisbane Heat/matches/2020'}>Home</Button>
                </Toolbar>
            </AppBar>
        );
}

export default Navbar
