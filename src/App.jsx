import styled from "styled-components"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Who from "./components/Who"
import Works from "./components/Works"

const Container = styled.div`
    height: 100vh;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    overflow-y: auto;
    //this is only working on the firefox browser - hiding scrollbar
    scrollbar-width: none;
    color: white;
    //below code will make it run in every browser
    &::-webkit-scrollbar{
        display: none;
    }
`


function App() {

    return (
        <Container>
            <Hero/>
            <Who/>
            <Works/>
            <Contact/>
        </Container>
    )
}

export default App