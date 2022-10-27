import { Alert, Box, Grid, Typography } from '@mui/material';
import { HomeCard } from '../components/HomeCard';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import { Chart } from '../components/Chart';

const Home = () => {
  return (
    <>
      <Box sx={{ marginTop: 5 }}>
        <Typography color='secondary' variant='h3' component='h1'>
          Dashboard
        </Typography>
        <Grid container spacing={3} sx={{ marginTop: 2 }}>
          <Grid item xs={12} md={4}>
            <HomeCard
              icon={
                <RequestQuoteIcon
                  color='success'
                  sx={{ height: 40, width: 40 }}
                />
              }
              value={'14.3'}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <HomeCard
              icon={
                <RequestQuoteIcon
                  color='success'
                  sx={{ height: 40, width: 40 }}
                />
              }
              value={'14.3'}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <HomeCard
              icon={
                <RequestQuoteIcon
                  color='success'
                  sx={{ height: 40, width: 40 }}
                />
              }
              value={'14.3'}
            />
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid container spacing={3} sx={{ marginTop: 2 }}>
          <Grid item xs={12} md={8}>
            <Chart title='Students frequency' />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
