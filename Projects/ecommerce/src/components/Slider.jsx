import React, { useState }  from 'react'
import styled from 'styled-components'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import { items } from "../data"
import {mobile} from '../responsive'
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: #c0ebff;
    overflow: hidden;
    ${mobile({display: "none"})}
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`
const Wrapper = styled.div`
    display: flex;
    height: 100%;
    transition: all 1.5s;
    transform: translateX(${props=>props.slideIndex * -100}vw);
`
const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.bg} ;
`
const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`
const Image = styled.img`
    height: 100%;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`
const Title = styled.h1`
    font-size: 70px;
`
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`
const Slider = () => {
    const [slideIndex, setSlideIndex ] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 1);
        } else {
            setSlideIndex(slideIndex < 1 ? slideIndex + 1 : 0);
        }
    }
    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {items.map(item => (
                    <Slide key={item.id} bg={item.bg}>
                        <ImgContainer>
                            <Image src={item.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>Take me</Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}

export default Slider
