import React from 'react';
import { Paper, Rating, Typography } from '@mui/material';
import { useStyles } from './styles';

const Marker = ({ name, photo, rating }) => {
  const classes = useStyles();
  const DEFAULT_IMAGE =
    'https://img.freepik.com/free-vector/no-data-concept-illustration_114360-2506.jpg?w=1380&t=st=1673979253~exp=1673979853~hmac=4bfdf5ad84eaca6e5d81cd46498cf5710552a3d5e4a7ea23a0f2ee849787e1b3';

  return (
    <Paper elevation={3} className={classes.paper}>
      <Typography className={classes.typography}>{name}</Typography>

      <img
        className={classes.pointer}
        src={photo ? photo.images.large.url : DEFAULT_IMAGE}
        alt={name}
      />
      <Rating size="small" value={Number(rating)} readOnly />
    </Paper>
  );
};

export default Marker;
