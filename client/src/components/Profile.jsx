import React, {useState} from 'react';

import {useBlockstack, useFile} from 'react-blockstack';
import {getFile, putFile} from 'blockstack';
import {makeStyles} from '@material-ui/core/styles';
import {Button} from '@material-ui/core';

import {Formik, Field, Form} from 'formik';
import {TextField} from 'formik-material-ui';
import * as Yup from 'yup';

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
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    submit: {
        marginBottom: theme.spacing(1)
    },
    field: {
        width: '50%',
        margin: theme.spacing(1),
    },
}));

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
})

export default function Profile () {
    getFile("user.json")
        .then((file) => {
            let obj = JSON.parse(file);
            if (!file) return;
            setState({firstName: obj.firstName, lastName: obj.lastName});
        });
    const [state, setState] = useState({firstName:"", lastName:""});
    const classes = useStyles();
    return (
        <div className={classes.paper}>
            <h1>Profile</h1>
                <Formik
                    enableReinitialize={true}
                    validationSchema={validationSchema}
                    initialValues={{
                    firstName: state.firstName,
                    lastName: state.lastName,
                    }}
                    onSubmit = {
                    (values, {setSubmitting}) => {
                    putFile("user.json", JSON.stringify(values))
                    }
                    }
                    render = {
                    ({submitForm, isSubmitting, values, setFieldValue}) => (
                    <Form className={classes.form}>
                        <Field
                            className={classes.field}
                            name="firstName"
                            label="First Name"
                            component={TextField} />
                        <Field
                            className={classes.field}
                            name="lastName"
                            label="Last Name"
                            component={TextField} />
                        <Button
                            className={classes.submit}
                            disabled={isSubmitting}
                            onClick={submitForm}>
                            Submit
                        </Button>
                    </Form>
                    )
                    }
                />

        </div>
    );
}
