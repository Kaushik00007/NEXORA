
import React from "react";
import { useState, useEffect } from "react";
import ProjectCard from "../components/Card";
import Styled, { useTheme } from "styled-components";
import ProjectStatCard from "../components/ProjectStatCard";
import { Add } from "@mui/icons-material";
import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress';
import { useSelector } from "react-redux";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { LinearProgress } from "@mui/material";
import { statuses, data, tagColors } from "../data/data";
import { useDispatch } from "react-redux";
import { openSnackbar } from "../redux/snackbarSlice";
import { getProjects, userTasks } from "../api";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

const Container = Styled.div`
@media screen and (max-width: 480px) {
  padding: 10px 10px;
}
`;

const Section = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
`;

const Left = Styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 20px;
  flex: 1.4;
`;

const Right = Styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 20px;
`;

const TopBar = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  gap: 16px;
  margin: 20px 0px;
`;

const CreateButton = Styled.div`
  padding: 10px 20px;
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.bgDark};
  border-radius: 8px;
  background: linear-gradient(135deg, ${({ theme }) => theme.primary} 0%, ${({ theme }) => theme.primary}DD 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px ${({ theme }) => theme.primary}33;
  &:hover {
    box-shadow: 0 6px 16px ${({ theme }) => theme.primary}4D;
    transform: translateY(-2px);
    filter: brightness(1.1);
  }
  gap: 8px;

  ${({ btn, theme }) =>
    btn === "team" &&
    `
    color: ${theme.primary};
    background: transparent;
    border: 1px solid ${theme.primary}50;
    box-shadow: none;
    &:hover {
      background: ${theme.primary}1A;
      box-shadow: 0 4px 12px ${theme.primary}20;
    }
  `}
`;

const Icon = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  color: inherit;
  border-radius: 50%;
  padding: 0px;
`;

const StatsWrapper = Styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(250px, 1fr));
  grid-gap: 24px;
  margin: 20px 0px;
`;

const StatCard = Styled.div`
  width: 100%;
  height: 100%;
  padding: 16px;
  text-align: left;
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  border-radius: 12px;
  background: linear-gradient(145deg, ${({ theme }) => theme.card}, ${({ theme }) => theme.bgLighter});
  border: 1px solid ${({ theme }) => theme.soft};
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  &:hover {
    border-color: ${({ theme }) => theme.primary}50;
    box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.3);
    transform: translateY(-4px);
  }
  &::before {
    content: "";
    position: absolute;
    top: 0; left: 0; right: 0; height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
  }
`;

const RecentProjects = Styled.div`
  width: 100%;
  height: 100%;
  text-align: left;
  margin: 2px;
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  border-radius: 12px;
`;

const SectionTitle = Styled.div` 
  width: 100%;
  padding: 0px 12px;
  font-size: 22px;
  font-weight: 600;
  margin: 10px 0px 16px 0px;
  color: ${({ theme }) => theme.text};
`;

const RecentProjectsWrapper = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 20px;
`;


const Teams = Styled.div`
  width: 100%;
`;

const TotalProjects = Styled.div` 
  width: 100%;
  padding: 8px 12px;
`;

const TaskCompleted = Styled.div` 
  width: 100%;
  padding: 8px 12px;
`;

const Progress = Styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  padding: 10px 0px 0 0;
`;

const ProgressText = Styled.div`
  font-size: 32px;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  margin-left: 12px;
`;

const Desc = Styled.div`
  font-size: 12px;
  font-weight: 500;
  padding: 0px 4px;
  line-spacing: 1.5;
  font-size: 13px;
  color: ${({ theme }) => theme.soft2};
`;

const TotalWorks = Styled.div`
  width: 100%;
  padding: 8px 12px;
`;

const Title = Styled.div`
  width: 100%;
  height: 100%;
  text-align: left;
  margin: 2px;
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  letter-spacing: -0.5px;
`;

const Span = Styled.span`
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.primary};
`;

const CardWrapper = Styled.div`
padding: 12px 0px;
display: grid;
grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
grid-gap: 8px;
`;

const Tasks = Styled.div`
  width: 100%;
  padding: 4px;
  text-align: left;
  margin: 2px;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  border-radius: 12px;
  background-color: ${({ theme }) => theme.card};
`;

const TaskCardWrapper = Styled.div`
  padding: 12px 0px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 8px;
`;

function CircularProgressWithLabel(props
) {
  const theme = useTheme();
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} thickness={6} size="60px" style={{ color: theme.primary }} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="inherit"
        >{`${Math.round(props.value)}`}</Typography>
      </Box>
    </Box>
  );
}

// backgroundColor: 'lightyellow',
// '& .MuiLinearProgress-bar': {
//   backgroundColor: 'orange'
// }

const Dashboard = ({ setNewProject, setNewTeam, newProject }) => {

  const dispatch = useDispatch();
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [totalProjectsDone, setTotalProjectsDone] = useState(0);
  const [totalProjects, setTotalProjects] = useState(0);
  const [totalTasks, setTotalTasks] = useState(0);
  const [totalTasksDone, setTotalTasksDone] = useState(0);
  const [loading, setLoading] = useState(true);
  const { currentUser } = useSelector((state) => state.user);


  const token = localStorage.getItem("token");
  const getprojects = async () => {
    setLoading(true);
    await getProjects(token)
      .then((res) => {
        setProjects(res.data);
        getTotalProjectsDone();
      })
      .catch((err) => {
        setLoading(false);
        dispatch(
          openSnackbar({
            message: err.response?.data?.message || err.message,
            severity: "error",
          })
        );
      });
  };

  const getTotalProjectsDone = () => {
    setTotalProjectsDone(projects.filter((project) => project && project.status && project.status.toString().toLowerCase() === "completed").length);
    setTotalProjects(projects.length);
  };

  const getTasks = async () => {
    setLoading(true);
    await userTasks(token)
      .then((res) => {
        setTasks(res.data);
        getTotalTasks();
        setLoading(false);
      })
      .catch((err) => {
        dispatch(
          openSnackbar({
            message: err.response.data.message,
            severity: "error",
          })
        );
        setLoading(false);
      });
  };

  const getTotalTasks = async () => {
    setTotalTasks(tasks.length);
    setTotalTasksDone(tasks.filter((task) => task && task.status && task.status.toString().toLowerCase() === "completed").length);
  }

  useEffect(() => {
    getprojects();
    getTasks();
    window.scrollTo(0, 0);
  }, [newProject]);


  return (
    <Container>
      {loading ? (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '12px 0px', height: '300px' }}>
          <CircularProgress />
        </div>
      ) : (
        <Section>
          <Left>
            <StatsWrapper>
              <StatCard>
                <TotalProjects>
                  <Title>Projects</Title>
                  <Progress>
                    <LinearProgress
                      sx={{
                        borderRadius: "10px", height: 7, width: "80%"
                      }}
                      variant="determinate"
                      value={
                        totalProjectsDone === 0
                          ? 0
                          : (totalProjectsDone / totalProjects) * 100
                      }
                    />
                    <ProgressText>{totalProjectsDone.toString()}</ProgressText>
                  </Progress>
                  <Desc>Working on&nbsp;
                    <Span> {(totalProjects - totalProjectsDone).toString()} </Span>
                    &nbsp;projects</Desc>
                </TotalProjects>
              </StatCard>

              <StatCard>
                <TaskCompleted>
                  <Title>Tasks</Title>
                  <Progress>
                    <LinearProgress
                      sx={{ borderRadius: "10px", height: 7, width: "80%" }}
                      variant="determinate"
                      value={
                        totalTasksDone === 0
                          ? 0
                          : (totalTasksDone / totalTasks) * 100
                      }
                      color={"success"}
                    />
                    <ProgressText>{totalTasksDone}</ProgressText>
                  </Progress>
                  <Desc><Span>{totalTasks - totalTasksDone}</Span> &nbsp;Tasks are left</Desc>
                </TaskCompleted>
              </StatCard>

              {/* <StatCard>
    <TotalWorks>
      <Title>Total Works Done</Title>
    </TotalWorks>
  </StatCard> */}
            </StatsWrapper>

            <RecentProjects>
              <SectionTitle>Recent Projects</SectionTitle>
              {projects.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '60px 20px', color: '#94A3B8', border: '1px dashed rgba(255,255,255,0.1)', borderRadius: '12px', background: 'rgba(255,255,255,0.02)' }}>
                  <Typography variant="h6" style={{ fontWeight: 600, color: '#F8FAFC' }}>No Recent Projects</Typography>
                  <Typography variant="body2" style={{ marginTop: '8px', marginBottom: '24px' }}>Create a new project to get started.</Typography>
                  <CreateButton style={{ display: 'inline-flex' }} onClick={() => setNewProject(true)}>
                    <Icon><Add style={{ color: 'inherit' }} /></Icon>
                    Create Project
                  </CreateButton>
                </div>
              ) : (
                <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2 }}>
                  <Masonry gutter="0px 16px">
                    {
                      projects
                        .filter(p => p && p.updatedAt)
                        .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))
                        .filter((item, index) => index < 6)
                        .map((project, id) => (
                          <ProjectCard
                            key={project._id}
                            item={project}
                            index={id}
                            status={project.status}
                            tagColor={tagColors[3]}
                          />
                        ))
                    }
                  </Masonry>
                </ResponsiveMasonry>
              )}
            </RecentProjects>

          </Left>
          <Right>

            <TopBar>
              <CreateButton onClick={() => setNewProject(true)}>
                <Icon>
                  <Add style={{ color: 'inherit' }} />
                </Icon>
                Create New Project
              </CreateButton>
              <CreateButton btn="team" onClick={() => setNewTeam(true)}>
                <Icon>
                  <Add style={{ color: 'inherit' }} />
                </Icon>
                Create New Team
              </CreateButton>
            </TopBar>
          </Right>
        </Section>
      )}
    </Container >
  );
};

export default Dashboard;
