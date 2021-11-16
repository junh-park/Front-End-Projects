import React from 'react'
import styled from 'styled-components'
import Search from '@material-ui/icons/Search';
import { Badge } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {mobile} from '../responsive'

const Container = styled.div`
    height: 100px;
    background-color: rgb(227, 246, 240);
    ${mobile({display: "none"})}
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({padding: "10px"})}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const Language = styled.span`
    font-size: 18px;
    cursor: pointer;
    ${mobile({display:"none"})}

`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
`
const Input = styled.input`
    border: none;
`
const Logo = styled.h1`
    font-family: 'Pacifico', cursive;
    font-weight: bold;
`
const MenuItem = styled.div`
    font-size: 24px;
    cursor: pointer;
    margin: 25px;
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search" />
                        <Search style={{color:"gray", fontSize:16}}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>JUNIFAV</Logo>
                </Center>
                <Right>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Sign In</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={2} color="primary">
                            <ShoppingCartIcon />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
