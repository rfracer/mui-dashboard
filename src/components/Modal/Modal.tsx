import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import MaterialModal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

interface ModalProps {
  title: string;
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  children: React.ReactNode;
}

const Modal = ({
  open,
  handleOpen,
  handleClose,
  title,
  children,
}: ModalProps) => {
  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <MaterialModal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Box display={'flex'} justifyContent={'space-between'}>
              <Typography
                id='transition-modal-title'
                variant='h5'
                component='h2'
                color='primary'
              >
                {title}
              </Typography>
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </Box>
            <Typography id='transition-modal-description' sx={{ mt: 2 }}>
              {children}
            </Typography>
          </Box>
        </Fade>
      </MaterialModal>
    </div>
  );
};

export default Modal;
