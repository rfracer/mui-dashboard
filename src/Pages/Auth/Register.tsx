import React, { useState } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { auth } from '../../firebase';
import { signupSchema } from '../../schemas/signupSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import Alert from '@mui/material/Alert';

interface IFormInput {
  email: string;
  password: string;
}

export default function SignUp() {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>({ resolver: yupResolver(signupSchema) });

  const onSubmit: SubmitHandler<IFormInput> = ({ email, password }) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate('/login');
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
          <HowToRegIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign up
        </Typography>
        <Box
          component='form'
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Controller
                control={control}
                defaultValue=''
                name='email'
                rules={{ required: true, minLength: 6 }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    required
                    fullWidth
                    id='email'
                    label='Email Address'
                    autoComplete='email'
                    type='email'
                    error={errors.email ? true : false}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
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
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent='flex-end' marginY={2}>
            <Grid item>
              <Link to='/login'>Already have an account? Sign in</Link>
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
      {error && (
        <Alert severity='error'>
          {'Register problem - user already exist'}
        </Alert>
      )}
    </Container>
  );
}
