import React from 'react'
import styled, { keyframes } from 'styled-components'

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
`;

const floatAlt = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

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

const MockDash = styled.div`
  position: absolute;
  width: 480px;
  height: 340px;
  background: rgba(22, 20, 28, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.4);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  animation: ${float} 6s ease-in-out infinite;
`

const MockHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const SkeletonLine = styled.div`
  height: 12px;
  border-radius: 6px;
  background: ${({ width }) => `linear-gradient(90deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02))`};
  width: ${({ width }) => width};
`

const MockColumns = styled.div`
  display: flex;
  gap: 16px;
  flex: 1;
`

const MockColumn = styled.div`
  flex: 1;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const MockCard = styled.div`
  height: 48px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
`

const FloatingWidget1 = styled.div`
  position: absolute;
  bottom: 20px;
  left: -40px;
  width: 200px;
  height: 100px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(245, 208, 111, 0.15);
  border-radius: 16px;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: 0 16px 32px rgba(0,0,0,0.3);
  animation: ${floatAlt} 5s ease-in-out infinite reverse;
  z-index: 2;
`

const FloatingWidget2 = styled.div`
  position: absolute;
  top: 40px;
  right: -30px;
  width: 160px;
  height: 140px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  padding: 16px;
  display: flex;
  align-items: flex-end;
  gap: 8px;
  box-shadow: 0 16px 32px rgba(0,0,0,0.3);
  animation: ${floatAlt} 7s ease-in-out infinite 1s;
  z-index: 2;
`

const ChartBar = styled.div`
  flex: 1;
  background: ${({ highlight }) => highlight ? 'linear-gradient(180deg, #F5D06F, #C9972B)' : 'rgba(255,255,255,0.1)'};
  height: ${({ h }) => h};
  border-radius: 4px;
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
        <MockDash>
          <MockHeader>
            <SkeletonLine width="120px" />
            <SkeletonLine width="40px" />
          </MockHeader>
          <MockColumns>
            <MockColumn>
              <MockCard />
              <MockCard />
            </MockColumn>
            <MockColumn>
              <MockCard />
            </MockColumn>
            <MockColumn>
              <MockCard />
              <MockCard />
              <MockCard />
            </MockColumn>
          </MockColumns>
        </MockDash>
        <FloatingWidget1>
          <SkeletonLine width="80px" />
          <SkeletonLine width="140px" />
          <SkeletonLine width="100px" />
        </FloatingWidget1>
        <FloatingWidget2>
          <ChartBar h="40%" />
          <ChartBar h="70%" />
          <ChartBar h="100%" highlight />
          <ChartBar h="60%" />
        </FloatingWidget2>
      </MockContainer>
    </Container>
  )
}

export default Hero