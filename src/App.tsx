import { Routes, Route } from 'react-router-dom';
import { Login, Register } from './pages/Auth';
import { AddStudent } from './pages/AddStudent';
import PrivateRoute from './context/PrivateRoute';
import Header from './layouts/Header';
import Home from './pages/Home';
import About from './pages/About/About';
import { Students } from './pages/Students';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import './App.css';
import Layout from './layouts/Layout';

function App() {
  return (
    <div className='App'>
      <CssBaseline />
      <Layout>
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
            <Route path='/students'>
              {/* <Route path='edit/:id' element={<EditStudent />} /> */}
              <Route
                path='add'
                element={
                  <PrivateRoute>
                    <AddStudent />
                  </PrivateRoute>
                }
              />
              <Route
                index
                element={
                  <PrivateRoute>
                    <Students />
                  </PrivateRoute>
                }
              />
            </Route>
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </Container>
      </Layout>
    </div>
  );
}

export default App;
