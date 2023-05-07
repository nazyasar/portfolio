import React from "react";
import styled from "styled-components";

const Section = styled.div`
    display: flex;
    justify-content: center;
`;

const Container = styled.div`
    width: 1400px;
    background-color: rebeccapurple;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
`;

const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
    `;

const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;`;

const Logo = styled.img`
    height: 50px;
    `;

const List = styled.ul`
    display: flex;
    gap: 50px;
    list-style: none;
`;


const ListItem = styled.li`
    cursor: pointer;
`;

const Icon = styled.img`
    width: 20px;
    cursor: pointer;
`;

const Button = styled.button`
    width: 100px;
    padding: 10px;
    background-color: pink;
    color: white;
`;

const Navbar = () => {
    return (
        <Section>
            <Container>
                <Links>
                    <Logo src="/"/>
                    <List>
                        <ListItem>Home</ListItem>
                        <ListItem>About</ListItem>
                        <ListItem>Projects</ListItem>
                        <ListItem>Contact</ListItem>
                    </List>
                </Links>
                <Icons>
                        <Icon src="./img/search-icon.png"></Icon>
                        <Button>button</Button>
                    </Icons>
            </Container>
        </Section>
    )
}

export default Navbar
