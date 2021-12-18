import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div``

const SidebarItem = styled.li`
    padding: 16px 24px;
    background: ${props => props.active ? "rgb(94,121,182)" : ""};
    margin: 4px 12px;
    border-radius: 4px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    &:hover {
        cursor:pointer;
        background: ${props => props.active ? "" : "rgb(57,74,111)"};
    }    
`
const Item = styled.p`
    color: white;
    font-weight: bold;
    text-decoration: none;
`
const Image = styled.img`
    height: 1.7rem;
`
const StyledLink = styled(Link)`
    text-decoration: none;
`
const SideItem = ({ item, index, activeIndex, setActiveIndex }) => {
    const { name, icon, path, links, open } = item
    const [isOpen, setOpen] = useState(open)
    
    const openSideNav = () => {
        setOpen(!isOpen);
    };
    return (
        <Container>
            <p onClick={openSideNav}>{name}</p>
            {
                isOpen && links.map((link, index) => {
                    const {title, to} = link;
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
