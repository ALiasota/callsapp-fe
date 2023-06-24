import { Box, Button, Container, Typography } from '@mui/material';
import React, { useState } from 'react';
import { ILink } from '../store/slices/links-slice';
import ModalWindow from './ModalWindow';
interface IProps {
    id: number
    linkPath: string
    onClickDel: (id: number) => void
    onClickUpdate: (link: ILink) => void
}

function Link({linkPath, id, onClickDel, onClickUpdate}: IProps) {
    const [open, setOpen] = useState(false);
  return (
    <Container
      sx={{
        mt: '1rem',
        display: 'flex',
        border: '1px solid black',
        borderRadius: '5px',
        height: '50px',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Typography
        component="a"
        href={linkPath}
        target="_blank"
        rel="noopener noreferrer"
      >
        {linkPath}
      </Typography>
      <Box display="flex" justifyContent="center">
        <Button
          onClick={() => setOpen(true)}
          variant="contained"
          color="primary"
          style={{ marginRight: '5px' }}
        >
          Update
        </Button>
        <Button
          onClick={() => onClickDel(id)}
          variant="contained"
          color="error"
        >
          Delete
        </Button>
      </Box>
      <ModalWindow
        open={open}
        onClose={() => setOpen(false)}
        onClickUpdate={onClickUpdate}
        id={id}
        linkPath={linkPath}
      />
    </Container>
  );
}

export default Link;
