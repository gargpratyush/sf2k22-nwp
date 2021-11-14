import React, { useContext, useRef } from "react";
import { Marginer } from "./marginer";
import styled from 'styled-components';
import { AccountContext } from "./AccountContext ";
import "./FormsOne.css";
import { Formik, Form, Field, ErrorMessage } from 'formik'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import axios from 'axios';
import { toast } from "react-toastify";

export default function LoginFormOne(props) {

    const { switchToSignup } = useContext(AccountContext);
    const formRef = useRef()
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));
    const initialValues = {
        email: '',
        pass: ''
    }
    const onSubmitValues = values => {
        console.log(values);
        axios.post('https://mainapi.springfest.in/api/user/login/password', {
            email: values.email,
            password: values.pass
        }).then(
            (resp) => {
                const data = resp.data
                console.log(data)
                if (data.code !== 0) toast.error(data.message, { position: toast.POSITION.TOP_CENTER })
                else {
                    props.setModal(false);
                    toast.success("Successfully logged in", { position: toast.POSITION.TOP_CENTER })

                    localStorage.setItem('data', JSON.stringify(data.message));

                    axios.post("https://mainapi.springfest.in/api/user/get_registered_events", {
                        token: data.message.token
                    }).then((resp) => {
                        const msg = resp.data.message;
                        const keys = Object.keys(msg);
                        console.log(msg)
                        var regevs = {}
                        for (var i = 0; i < keys.length; i++) {
                            var evs = msg[keys[i]]
                            for (var j = 0; j < evs.length; j++) {
                                if (i === 1)
                                    regevs[evs[j].event_id] = {
                                        reg_id: evs[j].reg_id,
                                        type: keys[i],
                                        name: evs[j].event_name,
                                        iscert: evs[j].is_cert
                                    }
                                else if (i === 0)
                                    regevs[evs[j].event_id] = {
                                        group_id: evs[j].group_id,
                                        type: keys[i],
                                        name: evs[j].event_name,
                                        members: evs[j].members,
                                        iscert: evs[j].is_cert.is_cert,
                                        leadersfid: evs[j].leader_id.leader_id
                                    }
                            }
                        }
                        localStorage.setItem('reg_events', JSON.stringify(regevs));
                        props.setLogged(true);
                    }).catch((err) => {
                        console.log(err)
                    })
                }
            }).catch((err) => {
                console.log(err)
            })

    }
    const validationSchema = values => {
        let errors = {}
        const req = "*Required"
        if (!values.email) errors.email = req
        else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(values.email))
            errors.email = "Invalid email address"
        if (!values.pass) errors.pass = req
        return errors
    }
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmitValues}
            validate={validationSchema}
            innerRef={formRef}
            enableReinitialize={true}
        >
            {
                <Form >
                    <div className='RegistrationAll'>
                        <Field type="text" name="email" id="email" className="form-control Input" placeholder="Email" />
                        <div className='RegistrationError'> <ErrorMessage name='email' /></div>
                    </div>
                    <div className='RegistrationAll'>
                        <Field type="password" name="pass" id="pass" className="form-control Input" placeholder="Password " />
                        <div className='RegistrationError'><ErrorMessage name='pass' /></div>
                    </div>
                    <Marginer direction="vertical" margin={40} />
                    <input type="submit" className="SubmitButton" value="Login" />
                    <Marginer direction="vertical" margin="1em" />
                    <div div className="BoldLink" href="#" onClick={switchToSignup}>
                        Don't have an account? Click here to SignUp.
                    </div>
                    <Marginer direction="vertical" margin="60px" />
                </Form>
            }
        </Formik>
    );
}