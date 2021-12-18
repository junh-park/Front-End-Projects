import React, { useState } from 'react'
import styled from 'styled-components'
import { NavItems } from '../static/PathsData'
import SideItem from './SideItem'

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

const Sidebar = ({ defaultActive }) => {
    const [activeIndex, setActiveIndex] = useState(defaultActive || 0)

    return (
        <SidebarParent>
            <h1>sidebar</h1>
            {
                NavItems.map((item, index) => 
                    <SideItem 
                        key={item.name} 
                        item={item} 
                        index={index} 
                        activeIndex={activeIndex} 
                        setActiveIndex={setActiveIndex} 
                    />
                )
            }
        </SidebarParent>
    );
}

export default Sidebar
