import React, { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LoginIcon from '@mui/icons-material/Login';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Alert from '@mui/material/Alert';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { signinSchema } from '../../schemas/singinSchema';

interface IFormInput {
  email: string;
  password: string;
}

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>({ resolver: yupResolver(signinSchema) });

  const onSubmit: SubmitHandler<IFormInput> = ({ email, password }) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        location?.state?.from ? navigate(location.state.from) : navigate('/');
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <Container component='main' maxWidth='xs'>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LoginIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <Box
          component='form'
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ mt: 1 }}
        >
          <Controller
            control={control}
            defaultValue=''
            name='email'
            rules={{ required: true, minLength: 6 }}
            render={({ field }) => (
              <TextField
                {...field}
                required
                margin='normal'
                fullWidth
                id='email'
                label='Email Address'
                autoComplete='email'
                type='email'
                error={errors.email ? true : false}
              />
            )}
          />
          <Controller
            control={control}
            defaultValue=''
            name='password'
            rules={{ required: true, minLength: 5 }}
            render={({ field }) => (
              <TextField
                {...field}
                required
                fullWidth
                label='Password'
                type='password'
                id='password'
                error={errors.password ? true : false}
              />
            )}
          />

          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container marginY={2}>
            <Grid item>
              <Link to='/register'>Don't have an account? Sign Up</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {errors.email?.message && (
        <Alert severity='error'>{errors.email.message}</Alert>
      )}
      {errors.password?.message && (
        <Alert severity='error'>{errors.password.message}</Alert>
      )}
      {error && <Alert severity='error'>{'Invalid login credentials'}</Alert>}
    </Container>
  );
};

export default Login;
