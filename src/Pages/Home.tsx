import { Alert, Box, Grid, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import React from 'react';
import HomeCard from '../components/HomeCard';
import EnhancedTable from '../components/Table';

const Home = () => {
  return (
    <Box sx={{ marginTop: 5 }}>
      <Typography color='secondary' variant='h3' component='h1'>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <HomeCard />
        </Grid>
        <Grid item xs={12} md={6}>
          <HomeCard />
        </Grid>
        <Grid item xs={12} md={6}>
          <HomeCard />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
