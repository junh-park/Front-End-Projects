import styled from 'styled-components'
import { Send } from '@material-ui/icons'
import React from 'react'
import {mobile} from '../responsive'

const Container = styled.div`
    height: 60vh;
    background-color: #f5ddf4 ;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 70px;
    font-weight: 600;
    margin: 20px;
    ${mobile({fontSize: "50px", textAlign: "center"})}
`
const Desc = styled.div`
    font-size: 25px;
    font-weight: 400;
    margin: 20px;
    ${mobile({fontSize: "20px", textAlign: "center"})}
`
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    ${mobile({width: "80%"})}
`
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: #2c9e1d;
    color: white;
    cursor: pointer;
`

const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Desc>Discounts up to 70% OFF + Free Australia Shipping (orders over $50)</Desc>
            <InputContainer>
                <Input placeholder="Your email"></Input>
                <Button>
                    <Send />
                </Button>   
            </InputContainer>
        </Container>
    )
}

export default Newsletter
