import { Box } from '@mui/material';
import React from 'react';
import { useAuth } from '../context/AuthContext';
import Header from './Header';
import { Navigation } from './Navigation';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const [open, setOpen] = React.useState(false);
  const drawerWidth: number = 240;

  const currentUser = useAuth();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Header
        open={open}
        toggleDrawer={toggleDrawer}
        drawerWidth={drawerWidth}
      />
      {currentUser && <Navigation open={open} toggleDrawer={toggleDrawer} />}
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
          marginTop: 8,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
