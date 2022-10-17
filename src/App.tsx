import { Routes, Route } from 'react-router-dom';
import Header from './Layouts/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import './App.css';

function App() {
  return (
    <div className='App'>
      <CssBaseline />

      <Header />
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
