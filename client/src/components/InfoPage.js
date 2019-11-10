import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';

import companies from '../companies.js';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    width: 800,
    backgroundColor: "#edf3f3",
  },
  cover: {
    height: 150,
    width: 150,
  },
  buttonBase:{
    margin: 10,
  },

}));

export default function InfoPage({match}) {
  const classes = useStyles();
  const theme = useTheme();
  let data = companies[match.params.companyId];
  
  const handleClick = () =>{
    console.log("click");
  };
  return (
    <center>
      <Card className={classes.card} style={{padding:'10px', marginTop:'90px'}}>
        <div style={{backgroundColor:'white', display:'flex', flexDirection:'column',alignItems:'center',borderRadius:'2px'}}>
          <CardMedia
            className={classes.cover}
            image= {data.image}
            title="Live from space album cover"
          />
  <Typography component="h5" variant="h5" >
    {data.company}
    </Typography>
  <Typography component="h6" variant="h6" >
    {data.role}
    </Typography>
  <Typography component="h6" variant="h6" >
    {data.location}
    </Typography>
      <Button 
        variant="contained"
        color="secondary"
        onClick={handleClick}
        className={classes.buttonBase}>
    Apply!
    </Button>
      </div>
        <div style={{height:'10px'}}> </div>
          <div style={{backgroundColor:'white', display:'flex', flexDirection:'column',alignItems:'center', padding:'10px', borderRadius:'2px'}}>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
              </Card>
  </center>
  );
}
