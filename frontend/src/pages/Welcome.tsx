import React from 'react';
import { Typography, Container, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../layouts/common/form/Button';
import CustomCard from '../layouts/common/UI/Card';
import Navbar from '../layouts/common/navigation/Navbar';
import Rocket from '../svg/illustrations/Rocket';
import MyLogo from '../svg/logos/MyLogo';

const WelcomePage: React.FC = () => {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate('/login');
  };

  const navigateToSignup = () => {
    navigate('/signup');
  };

  return (
    <>
      <Navbar />
      <Container>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to My App
        </Typography>
        <div>
          <h2>Rocket Illustration</h2>
          <Rocket width={100} height={100} />
        </div>
        <div>
          <h2>My Logo</h2>
          <MyLogo width={100} height={100} />
        </div>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <CustomCard title="Feature 1">
              <Typography variant="h5">Feature 1</Typography>
              <Typography>Description of Feature 1</Typography>
              <CustomButton
                onClick={() => console.log('Feature 1 clicked')}
                variant="outlined"
                color="primary"
              >
                Learn more
              </CustomButton>
            </CustomCard>
          </Grid>
          {/* Add more CustomCard components for other features */}
        </Grid>
        <CustomButton variant="outlined" color="primary" onClick={navigateToLogin} style={{ marginRight: 16 }}>
          Login
        </CustomButton>
        <CustomButton variant="outlined" color="secondary" onClick={navigateToSignup}>
          Signup
        </CustomButton>
      </Container>
    </>
  );
};

export default WelcomePage;
