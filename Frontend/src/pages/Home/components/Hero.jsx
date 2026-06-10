import React from 'react'
import styled from 'styled-components'
import HeaderIllustration from '../../../Images/Header.svg'

const Container = styled.div`
  height: 80vh;
  margin: 6px 14px;
  max-width: 1320px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 80px;
  padding: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
    padding: 20px 12px 30px 12px!important;
    height: auto;
    margin-top: 60px;
  }
`
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const TitleTag = styled.h1`
  font-size: 64px;
  line-height: 1.1;
  @media (max-width: 768px) {
    font-size: 40px;
  }
  font-weight: 800;
  color: ${({ theme }) => theme.text};
  margin: 0;
`
const Highlight = styled.span`
  background: linear-gradient(90deg, #F5D06F, #C9972B);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const DescriptiveTag = styled.p`
  font-size: 18px;
  @media (max-width: 768px) {
    font-size: 15px;
  }
  font-weight: 400;
  margin-bottom: 32px;
  line-height: 1.6;
  color: ${({ theme }) => theme.soft2};
  max-width: 600px;
`
const Button = styled.button`
  width: max-content;
  padding: 16px 32px;
  font-size: 18px;
  font-weight: 600;
  background: linear-gradient(90deg, #F5D06F, #C9972B);
  color: #111;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 24px rgba(245, 208, 111, 0.2);
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 32px rgba(245, 208, 111, 0.4);
  }
  @media (max-width: 600px) {
    width: 100%;
    font-size: 16px;
  }
`

const MockContainer = styled.div`
  flex: 1;
  position: relative;
  height: 500px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1000px) {
    display: none;
  }
`

const Hero = ({ setSignInOpen }) => {
  return (
    <Container id="home">
      <Left>
        <TitleTag>Power Your Projects with <Highlight>NEXORA</Highlight></TitleTag>
        <DescriptiveTag>Stay organized, track progress, and reach your goals effortlessly. No more confusion, just clear, simple project management that helps you get things done faster and smarter. Give it a try and see the change yourself.</DescriptiveTag>
        <Button onClick={() => setSignInOpen(true)}>Manage a New Project</Button>
      </Left>
      <MockContainer>
        <img src={HeaderIllustration} alt="NEXORA Platform" style={{ width: '115%', height: 'auto', marginLeft: '5%', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))' }} />
      </MockContainer>
    </Container>
  )
}

export default Hero