import React from 'react'
import styled from 'styled-components'
import image from '../statics/ecommerce_login_page.jpg'
import {mobile} from '../responsive'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.5),
        rgba(255,255,255,0.5)
        ), url(${image}) center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
    ${mobile({width: "75%"})}
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    font-family: 'Shippori Antique B1', sans-serif;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`
const Input = styled.input`
    flex: 1;
    min-width:50%;
    margin: 10px 0;
    padding: 10px;
    font-size: 18px;
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
const Link = styled.a`
    margin: 5px 0px;
    font-size: 18px;
    text-decoration: underline;
    cursor: pointer;
`
const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Sign In</Title>
                <Form>
                    <Input placeholder="Username" />
                    <Input placeholder="Password" />
                    <Button>Login</Button>
                    <Link>If you forgot your username or password</Link>
                    <Link>Create an account</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
