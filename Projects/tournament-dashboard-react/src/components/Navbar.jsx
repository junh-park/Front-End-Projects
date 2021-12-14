import React from 'react'
import styled from 'styled-components'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import { Button, Drawer } from '@mui/material'



const StyledDrawer = styled(props => (<Drawer componentsProps={{}} {...props} />
    ))`
    variant: ${props => props.variant};
    anchor: ${props => props.anchor};
`
const StyledButton = styled(Button)`
    color: palevioletred;
    font-weight: 500;
`

const StyledTypography = styled(Typography)`
    color: palevioletred;
    font-weight: 500;
    text-decoration: none;
`
const Navbar = () => {
    return (
        <StyledDrawer>
            <StyledTypography variant='h5' component={Link} to="/teams">Home</StyledTypography>
        </StyledDrawer>
        );
}

export default Navbar
