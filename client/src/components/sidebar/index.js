import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon onClick={toggle} />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/generate" onClick={toggle}>Let's Go</SidebarLink>
                    <SidebarLink to="/saved" onClick={toggle}>Saved Workouts</SidebarLink>
                    <SidebarLink to="/manage" onClick={toggle}>Manage Exercises</SidebarLink>
                    <SidebarLink to="/admin" onClick={toggle}>Admin section</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
