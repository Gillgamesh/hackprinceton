import CompanyCard from '../components/CompanyCard';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';

import companies from '../companies.js';

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
  let companyCards = [0,1,2,3,4,5,6,7].map(key => (
            <Grid key={key} item>
            <CompanyCard num={key} data={companies[key]}/>
            </Grid>
          ));
  console.log(companyCards);
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          {companyCards}
        </Grid>
      </Grid>
    </Grid>
  );
}
