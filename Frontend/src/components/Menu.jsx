import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Add,
  Dashboard,
  CloseRounded,
  Groups2Rounded,
  HubRounded,
  Logout,
  StreamRounded,
  WorkspacesRounded,
  Public,
  AccountTreeRounded,
  DashboardRounded,
  AddTaskRounded,
} from "@mui/icons-material";
import { tagColors } from "../data/data";
import LogoIcon from "../Images/Logo.svg";
import { useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";
import { openSnackbar } from "../redux/snackbarSlice";
import axios from "axios";
import { useSelector } from "react-redux";
import { getUsers, notifications } from "../api/index";
import { Avatar, CircularProgress } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";

const Container = styled.div`
  flex: 1.3;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 100vh;
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  position: sticky;
  top: 0;
  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.04);
  transition: 0.3s ease-in-out;
  @media (max-width: 1100px) {
    position: fixed;
    z-index: 100;
    width: 100%;
    max-width: 250px;
    left: ${({ setMenuOpen }) => (setMenuOpen ? "0" : "-100%")};
    transition: 0.3s ease-in-out;
  }
`;
const ContainerWrapper = styled.div`
  height: 90%;
  overflow-y: scroll !important;
  margin-top: 0px;
`;
const Space = styled.div`
  height: 50px;
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 24px;
`;

const Logo = styled.div`
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  gap: 16px;
  font-weight: bold;
  font-size: 26px;
`;

const Close = styled.div`
  display: none;
  @media (max-width: 1100px) {
    display: block;
  }
`;

const Image = styled.img`
  height: 32px;
`;

const Item = styled.div`
  display: flex;
  color: ${({ theme, active }) => active ? theme.primary : theme.itemText};
  background-color: ${({ theme, active }) => active ? theme.primary + '15' : 'transparent'};
  border-left: ${({ theme, active }) => active ? `3px solid ${theme.primary}` : '3px solid transparent'};
  align-items: center;
  gap: 16px;
  cursor: pointer;
  padding: 10px 16px;
  margin: 4px 12px;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: ${({ theme }) => theme.itemHover};
    color: ${({ theme }) => theme.primary};
  }
`;

const Hr = styled.hr`
  margin: 16px 24px;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
`;

const Title = styled.h2`
  font-size: 13px;
  font-weight: 700;
  color: ${({ theme }) => theme.textSoft};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 8px;
  padding: 0px 28px;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const TeamIcon = styled(WorkspacesRounded)`
  color: ${({ tagColor }) => tagColor};
  font-size: 18px;
  margin-left: 2px;
`;

const Menu = ({ darkMode, setDarkMode, setMenuOpen, setNewTeam }) => {
  const [teamsLoading, setTeamsLoading] = useState(true);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const logoutUser = () => {
    dispatch(logout());
    navigate(`/`);
  };

  const [team, setTeams] = useState([]);
  const { currentUser } = useSelector(state => state.user);

  const getteams = async () => {
    setTeamsLoading(true);
   await getUsers(token)
      .then((res) => {
        setTeams(res.data.teams);
        setTeamsLoading(false);
      })
      .catch((err) => {
        dispatch(openSnackbar({ message: err.message, type: "error" }));
        if (err.response.status === 401 || err.response.status === 402) logoutUser();
      });
  };


  useEffect(() => {
    getteams();
  }, [currentUser]);

  return (
    <Container setMenuOpen={setMenuOpen}>
      <Flex>
        <Link to="/" style={{ textDecoration: "none", color: "inherit", alignItems: 'center',display: 'flex' }}>
          <Logo>
            <Image src={LogoIcon} />
            NEXORA
          </Logo>
        </Link>
        <Close>
          <CloseRounded onClick={() => setMenuOpen(false)} />
        </Close>
      </Flex>
      <ContainerWrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Item active={location.pathname === '/'}>
            <DashboardRounded sx={{ fontSize: "20px" }} />
            Dashboard
          </Item>
        </Link>
        <Link
          to="projects"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Item active={location.pathname === '/projects'}>
            <AccountTreeRounded sx={{ fontSize: "20px" }} />
            Projects
          </Item>
        </Link>
        <Link
          to="works"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Item active={location.pathname === '/works'}>
            <AddTaskRounded sx={{ fontSize: "20px" }} />
            Your Works
          </Item>
        </Link>
        <Link
          to="community"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Item active={location.pathname === '/community'}>
            <Public sx={{ fontSize: "20px" }} />
            Community
          </Item>
        </Link>
        <Hr />
        <Title>
          <Groups2Rounded /> Teams
        </Title>
        {teamsLoading ? (
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '12px 0px'}}>
            <CircularProgress size='24px' />
          </div>
        ) : (<>
          {team.map((team, i) => (
            <Link
              to={`/teams/${team._id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Item>
                {team.img !== "" ?
                  <Avatar sx={{ width: "28px", height: "28px" }} src={team.img}>{team.name[0]}</Avatar> :
                  <TeamIcon sx={{ fontSize: "18px" }} tagColor={tagColors[i]} />}
                {team.name}
              </Item>
            </Link>
          ))}
        </>
        )}
        <Item onClick={() => setNewTeam(true)}>
          <Add sx={{ fontSize: "20px" }} />
          New Team
        </Item>
        <Hr />
        <Item onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessOutlinedIcon sx={{ fontSize: "20px" }} />
          {darkMode ? "Light" : "Dark"} Mode
        </Item>
        <Item onClick={() => logoutUser()}>
          <Logout sx={{ fontSize: "20px" }} />
          Logout
        </Item>
        <Space />
      </ContainerWrapper>
    </Container >
  );
};

export default Menu;
