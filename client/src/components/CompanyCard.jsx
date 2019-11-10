import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    height: 340,
    width: 290,
  },

  cover: {
    height: 100,
    width: 100,
  },
  buttonBase:{
    borderWidth: 1,
    borderColor: 'yellow',
  },

}));

export default function CompanyCard() {
  const classes = useStyles();
  const theme = useTheme();

  const handleClick = () =>{
    console.log("click");
  };
  return (
    <ButtonBase
      //style={{border:'1px solid red'}}
      onClick={handleClick}
    >
      <Card className={classes.card} style={{padding:'10px'}}>
        <CardMedia
          //style={{border:'1px solid red'}}
          className={classes.cover}
          image="https://cdn.shopify.com/s/files/1/2396/7733/products/Logo_300x300.png?v=1560555268"
          title="Live from space album cover"
        />
        <Typography component="h5" variant="h5" style={{textAlign:'left'}}>
          Company Name
        </Typography>
        <Typography component="h6" variant="h6" style={{textAlign:'left'}}>
          Software Engineering Intern
        </Typography>
        <Typography component="p" variant="p" style={{textAlign:'left'}}>
          San Francisco, San Jose
        </Typography>

      </Card>
    </ButtonBase>
  );
}
