import React from 'react'
import styled from 'styled-components'
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const NavWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(12, 11, 16, 0.5);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
`

const Container = styled.div`
  width: 90%;
  max-width: 1320px;
  height: 60px;
  margin: 12px 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    padding: 0px 20px !important;
  }
`;
const Logo = styled.h1`
  font-weight: 700;
  font-size: 24px;
  background: linear-gradient(90deg, #F5D06F, #C9972B);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 1px;
`;

const Menu = styled.ul`
  display: flex;
  align-items: center;
  gap: 32px;
  list-style: none;
  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuItem = styled.a`
  font-size: 15px;
  text-decoration: none;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  &:hover {
    color: #F5D06F;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 0%;
    height: 2px;
    background: linear-gradient(90deg, #F5D06F, #C9972B);
    transition: width 0.3s ease;
    border-radius: 2px;
  }
  &:hover::after {
    width: 100%;
  }
`;

const Button = styled.button`
  padding: 8px 22px;
  background-color: transparent;
  border: 1px solid rgba(245, 208, 111, 0.4);
  color: #F5D06F;
  border-radius: 100px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  transition: all 0.3s ease;
  box-shadow: 0 0 0px transparent;
  &:hover {
    background: linear-gradient(90deg, rgba(245, 208, 111, 0.1), rgba(201, 151, 43, 0.1));
    border: 1px solid #F5D06F;
    box-shadow: 0 0 20px rgba(245, 208, 111, 0.2);
    color: #F5D06F;
    transform: translateY(-2px);
  }
`;

const Navbar = ({ setSignInOpen }) => {

  return (
    <NavWrapper>
      <Container>
        <Logo>NEXORA</Logo>
        <Menu>
          <MenuItem href="#home">Home</MenuItem>
          <MenuItem href="#features">Features</MenuItem>
          <MenuItem href="#benefits">Benefits</MenuItem>
          <MenuItem href="#team">Team</MenuItem>
        </Menu>
        <Button onClick={() => setSignInOpen(true)}>
          <AccountCircleOutlinedIcon /> Sign In
        </Button>
      </Container>
    </NavWrapper>
  )
}

export default Navbar