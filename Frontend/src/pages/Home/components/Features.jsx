import styled, { keyframes } from 'styled-components';
import HeroBgAnimation from '../components/HeroBgAnimation'
import Groups3Icon from '@mui/icons-material/Groups3';
import TimelineIcon from '@mui/icons-material/Timeline';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import PublicIcon from '@mui/icons-material/Public';

const hoverLift = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-8px); }
`

const FeaturesWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  padding-bottom: 200px;
  margin-top: -80px;
  z-index: 5;
  @media (max-width: 768px) {
    padding-bottom: 100px;
    margin-top: -40px;
  }
`;

// we will make the number gold
const Number = styled.div`
  width: 70px;
  height: 70px;
  font-size: 36px;
  font-weight: 800;
  color: #F5D06F;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 4px solid rgba(245, 208, 111, 0.3);
  background: rgba(245, 208, 111, 0.05);
  margin-bottom: 20px;
  box-shadow: 0 0 20px rgba(245, 208, 111, 0.1);
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 32px;
  }
`;

const FeaturesTitle = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 800;
  margin-top: 20px;
  background: linear-gradient(90deg, #F5D06F, #C9972B);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 36px;
  }
`;

const FeatureDescription = styled.p`
  font-size: 20px;
  line-height: 1.5;
  font-weight: 400;
  width: 100%;
  max-width: 700px;
  text-align: center;
  color: ${({ theme }) => theme.soft2 || 'hsl(246, 6%, 65%)'};
  margin-bottom: 80px;
  @media (max-width: 768px) {
    width: 100%;
    font-size: 16px;
    margin-bottom: 60px;
  }
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  max-width: 1320px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FeaturesContainer = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 60px;
  @media (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 30px;
  }
`;

const FeatureCard = styled.div`
  width: 350px;
  height: 200px;
  position: relative;
  background: rgba(22, 20, 28, 0.4);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 24px;
  padding: 32px 42px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  display: flex;
  overflow: hidden;
  &:hover {
    transform: translateY(-8px);
    border-color: rgba(245, 208, 111, 0.3);
    box-shadow: 0 20px 48px rgba(245, 208, 111, 0.1);
  }
  @media (max-width: 925px) {
    width: 300px;
  }
  @media (max-width: 728px) {
    padding: 24px 20px;
  }
`;

const FeatureIcon = styled.div`
  width: 100px;
  height: 100px;
  color: #F5D06F;
  position: absolute;
  bottom: -10px;
  right: -10px;
  flex-shrink: 0;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(245, 208, 111, 0.1) 0%, transparent 70%);
  display: flex;
  justify-content: center;
  align-items: center;
  & > svg {
    font-size: 50px;
    opacity: 0.8;
  }
`;

const FeatureTitle = styled.div`
  font-size: 22px;
  color: #F5D06F;
  margin-bottom: 12px;
  font-weight: 700;
  transition: all 0.3s ease;
`;

const FeatureCardDescription = styled.div`
  font-size: 15px;
  line-height: 1.6;
  color: #A0A0A0;
`;

const BgImage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
  opacity: 0.4;
  @media (max-width: 768px) {
    display: none;
  }
`;

/* Dashboard Preview Component Styles */

const DashboardPreview = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-top: 120px;
  padding: 40px;
  border-radius: 32px;
  background: rgba(18, 16, 22, 0.5);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 32px 80px rgba(0, 0, 0, 0.5), inset 0 2px 0 rgba(255, 255, 255, 0.05);
  display: flex;
  flex-direction: column;
  gap: 32px;
  @media (max-width: 768px) {
    padding: 24px;
    margin-top: 80px;
  }
`

const DashHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(255,255,255,0.05);
`
const DashTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #E2E2E2;
`
const DashGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 32px;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

const KanbanBoard = styled.div`
  display: flex;
  gap: 16px;
`

const KanbanColumn = styled.div`
  flex: 1;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 16px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`
const KanbanColTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #A0A0A0;
  text-transform: uppercase;
  letter-spacing: 1px;
`

const ActivityFeed = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const FeedItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: linear-gradient(135deg, #F5D06F, #C9972B);
`

const ActivityText = styled.div`
  font-size: 14px;
  color: #E2E2E2;
  span { color: #A0A0A0; }
`

const featuresData = [
  { icon: <ElectricBoltIcon />, title: 'Project Management', description: 'Effortlessly manage your personal projects and assign tasks while keeping track of progress.' },
  { icon: <Groups3Icon />, title: 'Team Collaboration', description: 'Collaborate with your team in real-time, assign tasks, and keep track of team progress.' },
  { icon: <PublicIcon />, title: 'Community Building', description: 'Connect with members of similar interests, build communities, and grow your network.' },
  { icon: <TimelineIcon />, title: 'Time Tracking', description: 'Track your time and improve your productivity by setting goals and keeping track of your progress.' }
];

const Features = () => {
  return (
    <FeaturesWrapper id="features">
      <Number>1</Number>
      <FeaturesTitle>Key Features</FeaturesTitle>
      <FeatureDescription>Discover how our premium platform simplifies project management and makes collaboration effortless.</FeatureDescription>
      <Content>
        <FeaturesContainer>
          {featuresData.map((feature, index) => (
            <FeatureCard key={index} >
              <div style={{ zIndex: 2, position: 'relative' }}>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureCardDescription>{feature.description}</FeatureCardDescription>
              </div>
              <FeatureIcon>
                {feature.icon}
              </FeatureIcon>
            </FeatureCard>
          ))}
        </FeaturesContainer>
        <BgImage>
          <HeroBgAnimation />
        </BgImage>
        
        <DashboardPreview>
          <DashHeader>
            <DashTitle>Workspace Overview</DashTitle>
            <div style={{ display: 'flex', gap: '8px' }}>
              <div style={{ width: 12, height: 12, borderRadius: 6, background: '#FF5F56' }}></div>
              <div style={{ width: 12, height: 12, borderRadius: 6, background: '#FFBD2E' }}></div>
              <div style={{ width: 12, height: 12, borderRadius: 6, background: '#27C93F' }}></div>
            </div>
          </DashHeader>
          <DashGrid>
            <KanbanBoard>
              <KanbanColumn>
                <KanbanColTitle>To Do</KanbanColTitle>
                <div style={{ height: 60, background: 'rgba(255,255,255,0.05)', borderRadius: 8 }}></div>
                <div style={{ height: 80, background: 'rgba(255,255,255,0.05)', borderRadius: 8 }}></div>
              </KanbanColumn>
              <KanbanColumn>
                <KanbanColTitle>In Progress</KanbanColTitle>
                <div style={{ height: 100, background: 'rgba(245, 208, 111, 0.1)', border: '1px solid rgba(245, 208, 111, 0.3)', borderRadius: 8 }}></div>
              </KanbanColumn>
              <KanbanColumn>
                <KanbanColTitle>Done</KanbanColTitle>
                <div style={{ height: 60, background: 'rgba(255,255,255,0.05)', borderRadius: 8 }}></div>
                <div style={{ height: 60, background: 'rgba(255,255,255,0.05)', borderRadius: 8 }}></div>
              </KanbanColumn>
            </KanbanBoard>
            <ActivityFeed>
              <KanbanColTitle>Recent Activity</KanbanColTitle>
              <FeedItem>
                <Avatar />
                <ActivityText>Sarah <span>completed a task</span></ActivityText>
              </FeedItem>
              <FeedItem>
                <Avatar style={{ background: 'rgba(255,255,255,0.1)' }}/>
                <ActivityText>Mark <span>left a comment</span></ActivityText>
              </FeedItem>
              <FeedItem>
                <Avatar style={{ background: 'rgba(255,255,255,0.1)' }}/>
                <ActivityText>Anna <span>uploaded a file</span></ActivityText>
              </FeedItem>
            </ActivityFeed>
          </DashGrid>
        </DashboardPreview>

      </Content>
    </FeaturesWrapper>
  );
};

export default Features;