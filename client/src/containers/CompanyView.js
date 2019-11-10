import CompanyCard from '../components/CompanyCard';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(13),

  },
  paper: {
    height: 140,
    width: 100,
  },
  '@global': {
        body: {
            backgroundColor: "#edf3f3",
        },
    },
   

}));

export default function CompanyView() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          {[0, 1, 2,4].map(value => (
            <Grid key={value} item>
             <CompanyCard/>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
