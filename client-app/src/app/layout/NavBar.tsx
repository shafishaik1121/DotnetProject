import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Container, Menu } from "semantic-ui-react";

export default function NavBar() {
    return (
        <Menu inverted fixed="top">
            <Container>
                <Menu.Item as={NavLink} to='/' header>
                    <img src="/assets/logo3.jpg" alt="logo" style={{marginRight:'13px'}}/>
                    DOTPROJECT
                </Menu.Item>
                <Menu.Item as={NavLink} to='/activities' name='Activities'/>
                <Menu.Item>
                    <Button as={NavLink} to='/createActivity' positive content='Create Activity'/>
                </Menu.Item>
            </Container>
        </Menu>
    )
}