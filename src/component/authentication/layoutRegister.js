import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField } from '@mui/material';

const LayoutRegister = () => {

    const navigate = useNavigate();
    
    const creactUser = () => {
        const axios = require('axios');
        let data = JSON.stringify({
            query: `mutation {
          createUser(username: 
            "${formik.values.firstname} ${formik.values.lastname}", password:"${formik.values.password}",email: "${formik.values.email}") {
            user {
              id
              username
              email
            }
          }
        }`,
            variables: {}
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://192.168.1.141:8000/graphql',
            headers: {
                'Content-Type': 'application/json',
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(response);
                if (response.data.data.createUser) {
                    console.log("true")
                    navigate("/Login")
                }
            })
            .catch((error) => {
                console.log(error);
            });

    }

    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            phone_number: '',
            email: '',
            username: '',
            password: '',
            confirm_password: '',
            submit: null
        },

        validationSchema: Yup.object({
            firstname: Yup
                .string()
                .max(255)
                .matches(/^[A-Za-z กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึเแโใไๅๆ็่้]*$/, 'Please enter the letter')
                .required('Firstname is required'),

            lastname: Yup
                .string()
                .max(255)
                .matches(/^[A-Za-z กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึเแโใไๅๆ็่้]*$/, 'Please enter the letter')
                .required('Lastname is required'),

            phone_number: Yup
                .string()
                .max(255)
                .required('Phone Number is required')
                .matches(/^[+]?[(]?[0-9]{3}[)]?[0-9]{3}?[0-9]{4}$/im, 'Phone Number is not valid'),

            email: Yup
                .string()
                .email('Must be a valid email')
                .max(255)
                .required('Email is required'),

            username: Yup
                .string()
                .max(255)
                .required('Username is required')
                .matches(/^[a-zA-Z0-9]+$/, "This field cannot contain white space and special character"),

            password: Yup
                .string()
                .max(255)
                .required('Password is required'),

            confirm_password: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Password is required'),
        }),
    });

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 5,
                    backgroundColor: '#fff',
                    borderRadius: 5,
                }}
            >
                <TextField
                    id="firstname"
                    label="Firstname"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={formik.values.firstname}
                    sx={{ marginBottom: 1 }}
                    onChange={formik.handleChange}
                    helperText={
                        formik.touched.firstname && formik.errors.firstname}
                />
                <TextField
                    id="lastname"
                    label="Lastname"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={formik.values.lastname}
                    sx={{ marginBottom: 1 }}
                    onChange={formik.handleChange}
                    helperText={
                        formik.touched.lastname && formik.errors.lastname}
                />
                <TextField
                    id="phone_number"
                    label="Phone_Number"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={formik.values.phone_number}
                    sx={{ marginBottom: 1 }}
                    onChange={formik.handleChange}
                    helperText={formik.touched.phone_number && formik.errors.phone_number}
                />
                <TextField
                    id="email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={formik.values.email}
                    sx={{ marginBottom: 1 }}
                    onChange={formik.handleChange}
                    helperText={
                        formik.touched.email && formik.errors.email}
                />
                <TextField
                    id="username"
                    label="Username"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={formik.values.username}
                    sx={{ marginBottom: 1 }}
                    onChange={formik.handleChange}
                    helperText={
                        formik.touched.username && formik.errors.username}

                />
                <TextField
                    id="password"
                    label="Password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={formik.values.password}
                    sx={{ marginBottom: 1 }}
                    onChange={formik.handleChange}
                    helperText={
                        formik.touched.password && formik.errors.password}
                />
                <TextField
                    id="confirm_password"
                    label="Confirm Password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={formik.values.confirm_password}
                    sx={{ marginBottom: 1 }}
                    onChange={formik.handleChange}
                    helperText={
                        formik.touched.confirm_password && formik.errors.confirm_password}
                />
                <Button
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    sx={{ marginBottom: 2 }}
                    
                    onClick={() => { creactUser() }}>Register</Button>
            </Box>
        </>
    )
}

export default LayoutRegister