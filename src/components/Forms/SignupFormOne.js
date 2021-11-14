import React, { useContext, useRef } from "react";
import { Marginer } from "./marginer";
import { AccountContext } from "./AccountContext ";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import Select from 'react-select';
import { toast } from "react-toastify";
import DatePicker from 'react-datepicker';
import Recaptcha from 'react-recaptcha';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
const city = require('./city1.json').city
const state = require('./state.json').states

export default function SignupFormOne(props) {

    const { switchToSignin } = useContext(AccountContext);
    const cities = city.map((c) => ({ value: c, label: c }))
    const states = state.map((c) => ({ value: c, label: c }))
    const genders = [
        { value: 'M', label: 'Male' },
        { value: 'F', label: 'Female' },
        { value: 'O', label: 'Other' }
    ]
    const yops = []
    for (var i = 2022; i <= 2030; i++) yops.push({ value: i, label: String(i) })
    const formRef = useRef()  // For using form variables in a non-formik element
    const initialValues = {
        name: '',
        email: '',
        pass: '',
        repass: '',
        phone: '',
        college: '',
        city: '',
        state: '',
        dob: '',
        gender: '',
        yop: '',
        verify: false,
        captcha: ''
    }
    const onSubmitValues = (values, { resetForm }) => {
        if (values.verify) {
            for (var i = 0; i < 12; i++) {
                if (values.city === cities[i].value)
                    values.state = states[i].value;
            }
            const req = {
                name: values.name,
                email: values.email,
                password: values.pass,
                mobile: values.phone,
                college: values.college,
                city: values.city,
                state: values.state,
                dob: String(values.dob.getDate()) + "/" + String(values.dob.getMonth() + 1) + "/" + String(values.dob.getFullYear()),
                gender: values.gender,
                yop: String(values.yop),
                captcha: values.captcha
            }
            // console.log(req)
            axios.post('https://mainapi.springfest.in/api/user/register_user', req).then((resp) => {
                const data = resp.data
                if (data.code === 0) {
                    toast.success('Successfully registered. Now go to login page.', { position: toast.POSITION.TOP_CENTER });
                    props.setModal(false);
                    props.setLogged(true);
                    resetForm({ values: " " });
                    axios.post('https://mainapi.springfest.in/api/user/login/password', {
                        email: req.email,
                        password: req.password
                    }).then(
                        (resp) => {
                            const data = resp.data;
                            localStorage.setItem('data', JSON.stringify(data.message));
                            const regevs = {};
                            localStorage.setItem('reg_evs', JSON.stringify(regevs));
                        }
                    )
                }
                else {
                    var e = " ";
                    const keys = Object.keys(data.message)
                    for (var k = 0; k < keys.length; k++)
                        e = e.concat(data.message[keys[k]] + "\n");
                    toast.error(e, { position: toast.POSITION.TOP_CENTER });
                }
                console.log(data.message)
            }).catch((err) => {
                console.log(err)
            })
        }
        else toast.warning('Please verify the CAPTCHA first.', { position: toast.POSITION.TOP_CENTER });
    }
    const validationSchema = values => {
        let errors = {}
        const req = "*Required"

        if (!values.name) errors.name = req
        else if (!/^[a-zA-Z0-9 ]*$/.test(values.name))
            errors.name = "Invalid name"

        if (!values.email) errors.email = req
        else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(values.email))
            errors.email = "Invalid email address"

        if (!values.pass) errors.pass = req
        else if (values.pass.length < 8 || values.pass.length > 15)
            errors.pass = "Password length must be between 8 and 15"

        if (!values.repass) errors.repass = req
        else if (values.repass !== values.pass) errors.repass = "Password doesn't match"

        if (!values.phone) errors.phone = req
        if (!values.city) errors.city = req
        if (!values.dob) errors.dob = req
        if (!values.gender) errors.gender = req

        if (!values.yop) errors.yop = req
        else if (Number(values.yop) < 2021) errors.yop = "Year of passing must be greater than 2020"

        if (!values.college) errors.college = req

        return errors
    }
    const styleSelect = {

        control: (already, state) => ({
            ...already,
            cursor: 'text',
            width: '215px',
            transform: 'scaleY(0.80)', /* Equal to scaleX(0.7) scaleY(0.7) */
            border: state.isTouched ? "1px solid #ffffff " : "1px solid #ffffff",
            border: state.isFocused ? "1px solid #ffffff " : "1px solid #ffffff",
            backgroundColor: "#080e1c",
            "&:hover": {
                border: state.isFocused ? "1px solid #ffffff " : "1px solid #ffffff ",
                backgroundColor: state.isFocused ? "#080e1c" : "#080e1c"
            }
        }),
        placeholder: (already) => ({
            ...already,
            fontFamily: 'Poppins',
            color: "#fff",
            fontWeight: 'normal',
            opacity: '75%',
            fontSize: '15px',
            transform: 'scaleY(1.25)',
            justifyContent: 'center'
        }),
        singleValue: (already) => ({
            ...already,
            fontFamily: 'Poppins',
            color: "#ffffff",
            fontSize: '18px'
        }),
        menuList: (already, state) => ({
            ...already,
            fontFamily: 'Poppins',
            color: "#fff",
            fontSize: '15px',
            border: "1px solid #ffffff ",
            backgroundColor: state.isFocused ? "#080e1c" : "#080e1c"
        }),
        option: (already, state) => ({
            ...already,
            fontFamily: 'Poppins',
            color: "#fff",
            backgroundColor: state.isSelected ? "#080e1c" : "#080e1c",
            "&:hover": {
                backgroundColor: state.isFocused ? "#cd7070" : "#080e1c"
            }
        }),
        dropdownIndicator: (already, state) => ({
            ...already,
            cursor: 'pointer',
            transform: 'scaleY(1.25)',
            color: "white",
            "svg": {
                fill: "#ffffff"
            },
            "svg:hover": {
                fill: "#ffffff"
            },
            "&:hover": {
                color: state.isFocused ? "#fff" : "#fff"
            }
        })
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmitValues}
            validate={validationSchema}
            innerRef={formRef}
            enableReinitialize={true}
        >
            <Form >
                <div className="RegistrationAll">
                    <Field type="text" name="name" id="name" className="form-control Input" placeholder="Full Name" />
                    <div className='RegistrationError'><ErrorMessage name='name' /></div>
                </div>
                <div className='RegistrationAll'>
                    <Field type='email' id='email' name='email' className="form-control Input" placeholder='Email' />
                    <div className='RegistrationError'><ErrorMessage name='email' /></div>
                </div>
                <div className='RegistrationAll'>
                    <Field type='password' id='pass' name='pass' className="form-control Input" placeholder='Password' />
                    <div className='RegistrationError'><ErrorMessage name='pass' /></div>
                </div>
                <div className='RegistrationAll'>
                    <Field name='repass'>
                        {
                            (props) => {
                                const { field, form } = props
                                let border
                                ///console.log(props)
                                if (!form.values.repass || !form.values.pass) border = {}
                                else if (form.values.pass === form.values.repass) border = { borderBottom: '1px solid green' }
                                else border = { borderBottom: '1px solid red' }
                                return (
                                    <div>
                                        <Field
                                            type='password'
                                            id='repass'
                                            name="repass"
                                            className="form-control Input"
                                            style={border}
                                            placeholder='Confirm Password' />
                                        {(form.values.pass === form.values.repass) && (form.values.repass || form.values.pass) &&
                                            <i className="fa fa-check-circle" style={{ color: 'green', fontSize: '120%' }}></i>
                                        }
                                    </div>
                                )
                            }
                        }
                    </Field>
                    <div className='RegistrationError'><ErrorMessage name='repass' /></div>
                </div>
                <div className='RegistrationAll'>
                    <Field type='tel' id='phone' name='phone' className="form-control Input" placeholder='Mobile Number' />
                    <div className='RegistrationError'><ErrorMessage name='phone' /></div>
                </div>
                <div className='RegistrationAll'>
                    <Field name='dob'>
                        {
                            ({ field, form }) => {
                                //console.log(form)
                                return (
                                    <DatePicker
                                        dateFormat='dd/MM/yyyy'
                                        selected={field.value}
                                        onChange={val => form.setFieldValue(field.name, val)}
                                        onBlur={field.onBlur(field.name)}
                                        className="form-control Input"
                                        showYearDropdown
                                        fixedHeight
                                        id='dob'
                                        placeholderText='Date of Birth'
                                    />
                                )
                            }
                        }
                    </Field>
                    <div className='RegistrationError'><ErrorMessage name='dob' /></div>
                </div>
                <div className='RegistrationAll'
                    style={{
                        fontSize: '16px',
                        marginTop: '-3px'
                    }}>
                    <Field name='gender' >
                        {
                            (props) => {
                                const { field, form } = props
                                return (
                                    <Select
                                        value={genders ? genders.find(option => option.value === field.value) : ''}
                                        options={genders}
                                        styles={styleSelect}
                                        isSearchable
                                        id='gender'
                                        onChange={(option) => {
                                            option ? form.setFieldValue(field.name, option.value) :
                                                form.setFieldValue(field.name, "")
                                        }}
                                        onBlur={field.onBlur(field.name)}
                                        placeholder='Gender'
                                    />
                                )
                            }
                        }
                    </Field>
                    <div className='RegistrationError'><ErrorMessage name='gender' /></div>
                </div>
                <div className='RegistrationAll'
                    style={{
                        fontSize: '16px',
                        marginTop: '-9px'
                    }}>
                    <Field name='city' >
                        {
                            (props) => {
                                const { field, form } = props
                                // console.log(form)
                                return (
                                    <Select
                                        value={cities ? cities.find(option => option.value === field.value) : ''}
                                        options={cities}
                                        styles={styleSelect}
                                        isSearchable
                                        id='city'
                                        onChange={(option) => {
                                            option ? form.setFieldValue(field.name, option.value) :
                                                form.setFieldValue(field.name, "")
                                        }}
                                        onBlur={field.onBlur(field.name)}
                                        placeholder='City'
                                    />
                                )
                            }
                        }
                    </Field>
                    <div className='RegistrationError'><ErrorMessage name='city' /></div>
                </div>
                <div className='RegistrationAll' style={{ marginTop: '-4px' }}>
                    <Field type='text' id='college' name='college' className="form-control Input" placeholder='College' />
                    <div className='RegistrationError'><ErrorMessage name='college' /></div>
                </div>
                <div className='RegistrationAll'
                    style={{
                        fontSize: '16px',
                        marginTop: '-4px'
                    }}>
                    <Field name='yop'>
                        {
                            (props) => {
                                const { field, form } = props
                                return (
                                    <Select
                                        value={yops ? yops.find(option => option.value === field.value) : ''}
                                        options={yops}
                                        styles={styleSelect}
                                        isSearchable
                                        id='yop'
                                        onChange={(option) => {
                                            option ? form.setFieldValue(field.name, option.value) :
                                                form.setFieldValue(field.name, "")
                                        }}
                                        onBlur={field.onBlur(field.name)}
                                        placeholder='Year of Passing'
                                    />
                                )
                            }
                        }
                    </Field>
                    <div className='RegistrationError'><ErrorMessage name='yop' /></div>
                </div>
                <div className='RegistrationAll'
                    style={{
                        transform: "scaleX(0.75) scaleY(0.75)",
                        position: "relative",
                        left: "-2rem"
                    }}
                >
                    <Field name='verify' className="Input captchae">
                        {(props) => {
                            const { field, form } = props
                            return (
                                <Recaptcha
                                    sitekey='6Ldpbz0UAAAAAHWONmYJCv8nbMwG4w-htCr8iC1p'//'6LdaqAUaAAAAADDxBzlEOWodcZDpymVMc_C-oW4f'
                                    theme="dark"
                                    render='explicit'
                                    verifyCallback={(resp) => {

                                        // console.log("verifyCallback" + resp)
                                        form.setFieldValue("captcha", resp)
                                        form.setFieldValue('verify', true)
                                    }}
                                    onloadCallback={() => {
                                        console.log('Captcha loaded')
                                    }}
                                />
                            )
                        }}
                    </Field>
                </div>
                <Marginer direction="vertical" margin={40} />
                <input type="submit" className="SubmitButton" value="Signup" />
                <Marginer direction="vertical" margin="1em" />
                <div className="BoldLink" href="#" onClick={switchToSignin}>
                    Already have an account? Click here to SignIn.
                </div>
                <Marginer direction="vertical" margin="60px" />
            </Form>
        </Formik>
    );
}