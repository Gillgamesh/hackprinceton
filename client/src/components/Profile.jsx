import React, {useState} from 'react';

import {useBlockstack} from 'react-blockstack';
import {getFile, putFile, getFileUrl} from 'blockstack';
import {makeStyles} from '@material-ui/core/styles';
import {Button, Link} from '@material-ui/core';

import {Formik, Field, Form} from 'formik';
import {TextField, SimpleFileUpload} from 'formik-material-ui';
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
    email: Yup.string().email().required("Required"),
})

export default function Profile () {
    const [state, setState] = useState({firstName:"", lastName:"", email:"", resume:null, userLoaded:false, resumeLoaded:false});
    if (!state.userLoaded) {
        getFile("user.json")
            .then((file) => {
                if (!file) return;
                let obj = JSON.parse(file);
                setState({firstName:obj.firstName, lastName:obj.lastName, email:obj.email, resumeURL:state.resumeURL, userLoaded:true, resumeLoaded:state.resumeLoaded});
            });
    }
    if (!state.resumeLoaded) {
        getFileUrl("resume.pdf")
            .then((URL) => {
                setState({firstName:state.firstName, lastName:state.lastName, email:state.email, resumeURL:URL, userLoaded:state.userLoaded, resumeLoaded:true});
            });
    }

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
                    email: state.email,
                    address: state.address,
                    skills: state.skills,
                    github: state.github,
                    linkedin: state.linkedin,
                    site: state.site,
                    }}
                    onSubmit = {
                    (values, {setSubmitting}) => {
                    if (values.resume) {
                      let blob = new Blob([values.resume]);
                      blob.arrayBuffer()
                      .then(blobBuffer => putFile("resume.pdf", blobBuffer, {encrypt:false}));
                    }
                    values.resume = null;
                    console.log(values);
                    putFile("user.json", JSON.stringify(values));
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
                        <Field
                            className={classes.field}
                            name="email"
                            label="Email"
                            component={TextField} />
                        <Field
                            className={classes.field}
                            name="address"
                            label="Full Address"
                            component={TextField} />
                        <Field
                            className={classes.field}
                            name="skills"
                            label="Skills"
                            component={TextField} />
                        <Field
                            className={classes.field}
                            name="github"
                            label="GitHub"
                            component={TextField} />
                        <Field
                            className={classes.field}
                            name="linkedin"
                            label="LinkedIn"
                            component={TextField} />
                        <Field
                            className={classes.field}
                            name="site"
                            label="Personal Site"
                            component={TextField} />
                        <Field
                            className={classes.field}
                            name="resume"
                            label="Resume"
                            component={SimpleFileUpload} />
                        <Button
                            color="secondary"
                            className={classes.submit}
                            disabled={isSubmitting}
                            onClick={submitForm}>
                            Submit
                        </Button>
                    </Form>
                    )
                    }
                />
                { state.resumeURL ? 
                <Button onClick={() => window.open(state.resumeURL)}>Download Resume</Button> :
                null
                }
        </div>
    );
}
