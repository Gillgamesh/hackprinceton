import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import InfoPage from './InfoPage';
import Redirect from 'react-router-dom';


const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    height: 300,
    width: 290,
  },

  cover: {
    height: 150,
    width: 150,
  },
  buttonBase:{
    borderWidth: 1,
    borderColor: 'yellow',
  },

}));

export default function CompanyCard(data) {
  console.log('data',data);
  const classes = useStyles();
  const theme = useTheme();

  const handleClick = () =>{
    return <InfoPage data={data}/>;
  };
  return (
    <ButtonBase
      style={{display:'flex', flexDirection:'column'}}
      onClick={handleClick}
    >
      <Card className={classes.card} style={{padding:'10px'}}>
        <div className={"top-card"}>
        <div className={'centerMedia'} style={{display:'flex',justifyContent:'center'}}>
        <CardMedia
          //style={{border:'1px solid red'}}
          className={classes.cover}
          image={data.data.image}
          title="Live from space album cover"
        />
        </div>

      <Typography component="h5" variant="h5" >
        {data.data.company}
      </Typography>
      <Typography component="h6" variant="h6" >
        {data.data.role}
      </Typography>
          <Typography component="p" variant="p" style={{ width:'270'}}>
            {data.data.location}
          </Typography>
          <hr/>
        </div>
        <Button
            variant="contained"
            color="secondary"
            className={classes.paper}
        >
           Learn More
    </Button>
      </Card>


    </ButtonBase>
  );
}
