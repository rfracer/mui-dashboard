import { Routes, Route } from 'react-router-dom';
import { Login, Register } from './pages/Auth';
import { AuthProvider } from './context/AuthContext';
import Header from './layouts/Header';
import Home from './pages/Home';
import About from './pages/About/About';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import PrivateRoute from './context/PrivateRoute';

import './App.css';

function App() {
  return (
    <div className='App'>
      <CssBaseline />
      <Header />
      <Container>
        <Routes>
          <Route
            path='/'
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path='/about'
            element={
              <PrivateRoute>
                <About />
              </PrivateRoute>
            }
          />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
