import React, { useEffect, useState } from 'react';
import { Box, Button, TextField } from "@mui/material";
import { ILink } from '../store/slices/links-slice';

interface IProps {
    onCreate?: (linkPath: string) => void
    onUpdate?: (link: ILink) => void
    onClose?: () => void
    buttonTitle: string
    linkPath?: string
    id?: number
}

const Form = ({ onCreate, onUpdate, onClose, buttonTitle, linkPath, id }: IProps) => {
  const [text, setText] = useState('');

  useEffect(() => {
    if (linkPath) setText(linkPath);
  }, [linkPath]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text === '') return;
    if (linkPath && id && onUpdate) onUpdate({ linkPath: text, id });
    else if (onCreate) onCreate(text);
    if (onClose) onClose();
    setText('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex" alignItems="center" justifyContent="center">
        <TextField
          sx={{ width: '300px', marginRight: '20px' }}
          name="linkPath"
          label="link path"
          variant="outlined"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          {buttonTitle}
        </Button>
      </Box>
    </form>
  );
};

export default Form;