import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
const Container = styled.div``
const SidebarItem = styled.li`
    padding: 16px 24px;
    background: ${props => props.active ? "rgb(94,121,182)" : ""};
    border-radius: 10px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    animation: .3s ${fadeIn} ease-in-out;

    &:hover {
        cursor:pointer;
        background: ${props => props.active ? "" : "rgb(57,74,111)"};
    }    
`
const StyledLink = styled(Link)`
    text-decoration: none;
`
const Item = styled.p`
    color: white;
    font-weight: bold;
    text-decoration: none;
`
const Image = styled.img`
    height: 1.7rem;
`
const SideItem = ({ item, activeIndex, setActiveIndex }) => {
    const { name, icon, path, links, open } = item
    const [isOpen, setOpen] = useState(open)

    const openSideNav = () => {
        setOpen(!isOpen);
    };
    return (
        <Container>
            <StyledLink key={name} to={path ? path : ""}>
                <SidebarItem onClick={() => openSideNav()}>
                    <Image src={icon} />
                    <Item>{name}</Item>
                </SidebarItem>
            </StyledLink>
            {
                links && isOpen && links.map((link, index) => {
                    const { title, to } = link;
                    return (
                        <StyledLink key={title} to={to}>
                            <SidebarItem
                                active={index === activeIndex}
                                onClick={() => setActiveIndex(index)}
                            >
                                <Item>{title}</Item>
                            </SidebarItem>
                        </StyledLink>
                    );
                })
            }
        </Container>
    );
}

export default SideItem
