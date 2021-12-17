import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { paths } from '../static/PathsData'

const SidebarParent = styled.nav`
    background: #232f46;
    min-width: 240px;
    height: 100vh;
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
    border-right: 2px solid black;
`
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
const Sidebar = ({ defaultActive }) => {
    const [activeIndex, setActiveIndex] = useState(defaultActive || 0)

    return (
        <SidebarParent>
            {
                paths.map((item, index) => {
                    return (
                        <StyledLink key={item.name} to={item.path}>
                            <SidebarItem
                                key={item.name}
                                active={index === activeIndex}
                                onClick={() => setActiveIndex(index)}
                            >
                                <Image src={item.icon} />
                                <Item>{item.name}</Item>
                            </SidebarItem>
                        </StyledLink>
                    );
                })
            }
        </SidebarParent>
    );
}

export default Sidebar
