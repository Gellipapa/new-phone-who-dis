import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Fab } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    bottom: '15px',
    right: '15px',
  },
  button: {
    background: '#00acee',
  },
}));

export function ProfileUpdateButton({ handleClick }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab className={classes.button} color="primary" onClick={handleClick}>
        <SearchIcon />
      </Fab>
    </div>
  );
}

export default ProfileUpdateButton;
