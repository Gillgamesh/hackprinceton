import React from 'react';

import { useBlockstack } from 'react-blockstack';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(12),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
}));

export default function Profile () {
    let classes = useStyles();
    return (
        <div className={classes.paper}>
            <h1>Profile</h1>
        </div>
    );
}
