import React from 'react'
import styled from 'styled-components'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Team from './components/Team'
import Benefits from './components/Benifits'
import About from './components/About'
import SignUp from '../../components/SignUp'
import SignIn from '../../components/SignIn'
import Faq from './components/Faq'

const Body = styled.div`
    background-color: #0c0b10;
    display: flex;
    justify-content: center;
    overflow-x: hidden;
    position: relative;
    &::before {
        content: "";
        position: fixed;
        top: 0; left: 0; width: 100vw; height: 100vh;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        opacity: 0.025;
        z-index: 100;
        pointer-events: none;
    }
`

const Container = styled.div`
    width: 100%;
    background: radial-gradient(circle at 10% 20%, rgba(201, 151, 43, 0.05) 0%, transparent 40%),
                radial-gradient(circle at 90% 80%, rgba(201, 151, 43, 0.04) 0%, transparent 40%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Top = styled.div`
    width: 100%;
    display: flex;
    padding-bottom: 100px;
    flex-direction: column;
    align-items: center;
    background: radial-gradient(ellipse at 50% -10%, rgba(245, 208, 111, 0.1) 0%, rgba(201, 151, 43, 0.02) 40%, transparent 70%);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 96%, 0 100%);
    @media (max-width: 768px) {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 98%, 0 100%);
        padding-bottom: 40px;
    }
`;
const Content = styled.div`
    width: 100%;
    height: 100%;
    background: transparent;
    display: flex;
    flex-direction: column;
`

const Home = () => {
    const [SignInOpen, setSignInOpen] = React.useState(false);
    const [SignUpOpen, setSignUpOpen] = React.useState(false);

    return (
        <Body>
            <Container>
                <Navbar setSignInOpen={setSignInOpen} />
                <Top>
                    <Hero setSignInOpen={setSignInOpen} />
                </Top>
                <Content>
                    <Features />
                    {/* <Testimonials/> */}
                    <Benefits />
                    {/* <Faq/> */}
                    <Team />
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Footer />
                    </div>
                </Content>
                {SignUpOpen && (
                    <SignUp setSignUpOpen={setSignUpOpen} setSignInOpen={setSignInOpen} />
                )}
                {SignInOpen && (
                    <SignIn setSignInOpen={setSignInOpen} setSignUpOpen={setSignUpOpen} />
                )}
            </Container>
        </Body>
    )
}

export default Home