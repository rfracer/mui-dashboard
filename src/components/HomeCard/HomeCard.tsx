import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { ReactNode } from 'react';

interface HomeCardProps {
  value: string;
  icon: ReactNode;
}

const HomeCard = ({ value, icon }: HomeCardProps) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 12 }} color='text.secondary' gutterBottom>
          Numer of items
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {icon}
          {/* <RequestQuoteIcon color='success' sx={{ height: 40, width: 40 }} /> */}
          <Typography
            fontWeight='500'
            color='primary'
            variant='h3'
            component='div'
          >
            {value}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default HomeCard;
