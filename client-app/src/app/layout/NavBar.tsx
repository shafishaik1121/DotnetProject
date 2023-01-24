import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";
import { useStore } from "../stores/stores";

export default function NavBar() {

   const {activityStore} = useStore();

    return (
        <Menu inverted fixed="top">
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo3.jpg" alt="logo" style={{marginRight:'13px'}}/>
                    DOTPROJECT
                </Menu.Item>
                <Menu.Item name='Activities'/>
                <Menu.Item>
                    <Button onClick={() =>activityStore.openForm()} positive content='Create Activity'/>
                </Menu.Item>
            </Container>
        </Menu>
    )
}