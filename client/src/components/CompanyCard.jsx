import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    height: 200,
    width: 500,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width : 200
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
          onClick={handleClick}
      >
    <Card className={classes.card}>

      <CardMedia
        className={classes.cover}
        image="https://cdn.shopify.com/s/files/1/2396/7733/products/Logo_300x300.png?v=1560555268"
        title="Live from space album cover"
      />
      <div className={classes.details}>

        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Mac Miller
          </Typography>
        </CardContent>
      </div>

    </Card>
    </ButtonBase>
  );
}
