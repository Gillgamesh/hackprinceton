import React from 'react';

import { useBlockstack } from 'react-blockstack';
import {makeStyles} from '@material-ui/core/styles';
import {Button} from '@material-ui/core';
import CompanyView from '../containers/CompanyView';

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: "#edf3f3",
        },
    },
    paper: {
        marginTop: theme.spacing(12),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
}));

export default function LoginButton () {
    const { signIn, signOut } = useBlockstack();
    const classes = useStyles();
  return (
    <div>
        <Button
            variant="contained"
            color="primary"
            className={classes.paper}
            onClick={ signIn || signOut }>
            { signIn ? "Sign In" : signOut ? "Sign Out" : "Pending" }
        </Button>
      <CompanyView/>
    </div>
    );
}
