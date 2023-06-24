import React from 'react';
import { Box, Modal } from "@mui/material";
import Form from './Form';
import { ILink } from '../store/slices/links-slice';

interface IProps {
    id: number
    linkPath: string
    open: boolean
    onClose: () => void
    onClickUpdate: (link: ILink) => void
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 100,
  display: 'flex',
  alignItems: 'center',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ModalWindow = ({ id, linkPath, open, onClose, onClickUpdate }: IProps) => {

    return (
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Form
            onUpdate={onClickUpdate}
            buttonTitle="Update"
            id={id}
            linkPath={linkPath}
            onClose={onClose}
          />
        </Box>
      </Modal>
    );
};

export default ModalWindow;