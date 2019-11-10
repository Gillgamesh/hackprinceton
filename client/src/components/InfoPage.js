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

            The English Wikipedia is the English-language edition of the free online encyclopedia Wikipedia. Founded on 15 January 2001, it is the first edition of Wikipedia and, as of April 2019, has the most articles of any of the editions.[2] As of November 2019, 12% of articles in all Wikipedias belong to the English-language edition. This share has gradually declined from more than 50 percent in 2003, due to the growth of Wikipedias in other languages.[3] As of 10 November 2019, there are 5,967,751 articles on the site,[4] having surpassed the 5 million mark on 1 November 2015.[5] In October 2015, the combined text of the English Wikipedia's articles totalled 11.5 gigabytes when compressed.[6]

            The Simple English Wikipedia is a variation in which most of the articles use only basic English vocabulary. There is also the Old English (Ænglisc/Anglo-Saxon) Wikipedia (angwiki). Community-produced news publications include The Signpost.[7]
            </div>
              </Card>
  </center>
  );
}
