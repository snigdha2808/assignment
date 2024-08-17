
import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import Close from '@mui/icons-material/Close';
import {  removeWidget } from '../../../actions/action';
import { useDispatch } from 'react-redux'; 
const GridChildComponent = (props) => {
  const { name,categoryName } = props;
  console.log(props);
  const dispatch = useDispatch();
  const handleClose =()=>{
    const obj = {
      "categoryName": categoryName,
      "widgets": [
        {
          "widgetName": name,
          // "widgetText": 'dadadada'
        }
      ]
    };
    console.log(obj);
    dispatch(removeWidget(obj));
  }
  return (
    <Grid item xs={12} sm={6} md={4}>
    <Box 
      className='whiteBg' 
      sx={{ p: 2, height: 200 }}
    >
      <Grid container justifyContent="space-between" alignItems="center">
        <Typography>{name}</Typography>
        <Close 
          onClick={handleClose} 
          sx={{ 
            cursor: 'pointer', 
            color: 'red' 
          }} 
        />
      </Grid>
    </Box>  
  </Grid>
  
  );
};

export default GridChildComponent;
