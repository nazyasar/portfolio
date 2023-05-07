import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

const Container = styled.div`
    height: 100px;
    scroll-snap-align: center;
    width: 1400px;
    display: flex;
    justify-content: space-between;
`;

const Left = styled.div`
    flex:2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
`;

const Title = styled.h1`
    font-size: 74px;
`;

const WhatWeDo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const Line = styled.img`
    height: 40px;
`;

const Subtitle = styled.h2`
    color: pink;
`;

const Desc = styled.p`
    font-size: 24px;
    color: lightgray;
`;

const Button = styled.button`
    background-color: pink;
    /* color: white; */
    font-weight: 500;
    width: 100px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

const Right = styled.div`
    flex:3;
    position: relative;
    background-color: yellow;
`;

const Img = styled.img`
    width: 350px;
    height: 400px;
    object-fit: contain;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    animation: animate 2s infinite ease alternate;

    // asagidaki code fotografin oynamasini sagliyor

    @keyframes animate {
        to{
            transform: translateY(20px)
        }
    }
`;


const Hero = () => {
    return (
        <Section>
            <Navbar/>
            <Container>
                <Left>
                    <Title>Naz Yasar - Full Stack Software Developer</Title>
                    <WhatWeDo>
                        <Line src="./img/code.png"/>
                            <Subtitle>I'm a software developer </Subtitle>
                            </WhatWeDo>
                        <Desc>lorem ipsum</Desc>
                        <Button> Learn more</Button>
                </Left>
                <Right>
                    {/* 3d model */}
                    <Img src="./img/main.jpg"/>
                </Right>
            </Container>
        </Section>
    )
}

export default Hero
