import styled from 'styled-components'
import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import RoomIcon from '@material-ui/icons/Room';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
const Container = styled.div`
    display: flex;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
`
const Right = styled.div`
    flex: 1;
`
const Logo = styled.h1`
    flex: 1;
`
const Desc = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-right: 20px;
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap:wrap;
`
const ListItem = styled.li`
    width: 50%;
`
const ContactItem = styled.p`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>JUNP.</Logo>
                <Desc></Desc>
                <SocialContainer>
                    <SocialIcon color="E4405F">
                        <InstagramIcon />
                    </SocialIcon>
                    <SocialIcon color="3B5999">
                        <LinkedInIcon />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Userful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wish List</ListItem>
                    <ListItem>Terms & Conditions</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                    <ContactItem><RoomIcon style={{marginRight:"10px"}}/> Melbourne, VIC, Australia</ContactItem>
                    <ContactItem><SmartphoneIcon style={{marginRight:"10px"}}/> 0414 191 580</ContactItem>
                    <ContactItem><EmailOutlinedIcon style={{marginRight:"10px"}}/> junpark0118@hotmail.com</ContactItem>
            </Right>
        </Container>
    )
}

export default Footer

