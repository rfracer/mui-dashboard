import React, { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { addStudentSchema } from '../../schemas/addStudentSchema';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

interface IFormInput {
  name: string;
  surname: string;
  className: string;
  age: string;
}

const AddStudent = () => {
  const [error, setError] = useState('');

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>({ resolver: yupResolver(addStudentSchema) });

  const onSubmit: SubmitHandler<IFormInput> = async ({
    name,
    surname,
    className,
    age,
  }) => {
    try {
      const docRef = await addDoc(collection(db, 'users'), {
        name,
        surname,
        className,
        age,
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  const age = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

  return (
    <Container component='main' maxWidth='sm'>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <PersonAddIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Add Student
        </Typography>
        <Box
          component='form'
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ mt: 1, width: '100%' }}
        >
          <Controller
            control={control}
            defaultValue=''
            name='name'
            render={({ field }) => (
              <TextField
                {...field}
                required
                margin='normal'
                fullWidth
                id='name'
                label='Name'
                type='text'
                error={errors.name ? true : false}
              />
            )}
          />
          <Controller
            control={control}
            defaultValue=''
            name='surname'
            render={({ field }) => (
              <TextField
                {...field}
                required
                margin='normal'
                fullWidth
                id='name'
                label='Surname'
                type='text'
                error={errors.surname ? true : false}
              />
            )}
          />

          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel id='className'>Select Class</InputLabel>
            <Controller
              control={control}
              defaultValue=''
              name='className'
              render={({ field }) => (
                <Select {...field} id='className' labelId='className'>
                  <MenuItem value={10}>4A</MenuItem>
                  <MenuItem value={20}>4B</MenuItem>
                  <MenuItem value={30}>8A</MenuItem>
                </Select>
              )}
            />
          </FormControl>

          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel id='age'>Age</InputLabel>
            <Controller
              control={control}
              defaultValue=''
              name='age'
              render={({ field }) => (
                <Select {...field} id='age' labelId='age'>
                  {age.map((age) => (
                    <MenuItem value={age}>{age}</MenuItem>
                  ))}
                </Select>
              )}
            />
          </FormControl>

          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
          >
            Add student
          </Button>
        </Box>
      </Box>
      {errors.name?.message && (
        <Alert severity='error'>{errors.name.message}</Alert>
      )}
      {errors.surname?.message && (
        <Alert severity='error'>{errors.surname.message}</Alert>
      )}
      {error && <Alert severity='error'>{'Invalid login credentials'}</Alert>}
    </Container>
  );
};

export default AddStudent;
