import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { StudentsTable } from '../../components/StudentsTable';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';
import { Student } from '../../types/Student.types';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
import { StudentsAddForm } from '../../components/StudentsAddForm';

const Students = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = (status: boolean) => {
    setIsDrawerOpen(status);
  };

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, 'students'),
      (snapShot) => {
        let list: Student[] = [];
        snapShot.docs.forEach((doc) => {
          // @ts-ignore
          list.push({ id: doc.id, ...doc.data() });
        });
        setStudents(list);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);

  console.log(students);

  return (
    <Box sx={{ marginTop: 5 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography
          color='secondary'
          variant='h3'
          component='h1'
          marginBottom={4}
        >
          Students List
        </Typography>
        <Box onClick={() => handleDrawerOpen(true)}>
          <Tooltip title='ADD'>
            <Fab color='primary' aria-label='add'>
              <AddIcon />
            </Fab>
          </Tooltip>
        </Box>

        <StudentsAddForm isOpen={isDrawerOpen} handleOpen={handleDrawerOpen} />
      </Box>
      <StudentsTable data={students} />
    </Box>
  );
};

export default Students;
