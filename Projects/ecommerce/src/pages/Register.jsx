import React from 'react'
import styled from 'styled-components'
import image from '../statics/ecommerce_register_page.jpg'
import {mobile} from '../responsive'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.5),
        rgba(255,255,255,0.5)
        ), url(${image}) center;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
    font-family: 'Shippori Antique B1', sans-serif;
    ${mobile({width: "75%"})}
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 600;
    text-align: center;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`
const Input = styled.input`
    flex: 1;
    min-width:40%;
    margin: 20px 10px 0px 10px;
    padding: 10px;
    font-size: 18px;
`
const Agreement = styled.span`
    font-size: 18px;
    margin: 20px 0px;
    text-align: center;
`
const Button = styled.button`
    width: 100%;
    border: none;
    font-size: 20px;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`
const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Create an Account</Title>
                <Form>
                    <Input placeholder="First name" />
                    <Input placeholder="Last name" />
                    <Input placeholder="Email" />
                    <Input placeholder="Username" />
                    <Input placeholder="Password" />
                    <Input placeholder="Confirm password" />
                    <Agreement>
                        By agreeing to this terms, I consent to the processing and storing my personal details in accordance with the <strong>PRIVACY POLICY</strong>
                    </Agreement>
                    <Button>Create</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
