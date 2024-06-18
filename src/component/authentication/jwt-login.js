import { Box, Button, Divider, TextField, Typography, Link } from '@mui/material';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import { useFormik } from 'formik';


export const JWTLogin = (props) => {
    //()=>{} Arrow function
    //function (){} anyonnumus function
    //function myFunction(){}
    //const myFunction = ()=>{};
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();

    const handleLogin = () => {
        //     console.log("username :", username)
        //     if (username === "MM") {
        //         if (password === "555") {
        //             console.log("login succes")
        //         }
        //         else (
        //             console.log("รหัสผิดจ้า")
        //         )
        //     }
        //     else (
        //         console.log("ผิดจ้า")
        //     )
        // }


        const axios = require('axios');
        let data = JSON.stringify({
            query: `mutation {loginUser
                (username:"${username}", password:"${password}") 
                { user {
              id
              username
              email
            }
            token
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
                // 'Cookie': 'csrftoken=0BYVwu0aQGKKijm1lQRYxsDY9BSC5R6m'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(response.data);
                console.log(response);

                if (response.data.data.loginUser) {
                    localStorage.setItem("accessToken", response.data.data.loginUser.token)
                    // localStorage.setItem("id", response.data.data.loginUser.user.id)
                    const token = localStorage.getItem("accessToken")
                    // axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
                    console.log("Login success")
                   navigate("/Product")
                }
            })
            .catch((error) => {
                console.log(error);
            });

    }

    const handleLogin1 = () => {

        const axios = require('axios');
        let data = JSON.stringify({
            query: `query{
                me{
                    username
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
                // 'Cookie': 'csrftoken=0BYVwu0aQGKKijm1lQRYxsDY9BSC5R6m'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(response.data);

                // console.log(response);

                if (response.data.data.loginUser) {
                    console.log("Login success")
                    navigate("/Product")
                }
            })
            .catch((error) => {
                console.log(error);
            });

    }

    return (
        <>


            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 5
                }}
            >
                <Box
                    sx={{
                        width: 170,
                        height: 140,
                        backgroundColor: "#fff",
                        borderRadius: 5,
                        overflow: 'hidden', // ทำให้รูปภาพที่ใช้เต็มพื้นที่ของ Box
                        marginBottom: 5,
                    }}
                >
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                        alt="Logo"
                        style={{
                            width: '100%',
                            height: '100%'
                        }}
                    />
                </Box>
                <Typography
                    variant="body2"
                    sx={{ marginBottom: 2 }}
                >
                    Welcome to Image Store
                </Typography>

                <TextField
                    id="Username"
                    label="Username"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={username}
                    sx={{ marginBottom: 2 }}
                    onChange={(event) => {
                        setUsername(event.target.value)
                        console.log(username)
                    }}
                />
                <TextField
                    id="Password"
                    label="Password"
                    variant="outlined"
                    fullWidth
                    sx={{ marginBottom: 2 }}
                    onChange={function (event) {
                        { setPassword(event.target.value) }
                        console.log(password)
                    }}
                />

                <Button style={{ marginTop: 5 }}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    sx={{ marginBottom: 5 }}
                    onClick={handleLogin}
                >
                    <Typography
                        variant="body1"
                        sx={{ color: "white"}}
                    >
                        เข้าสู่ระบบ
                    </Typography>
                </Button>

                <Box sx={{ width: "100%", height: "100%", marginBottom: 2 }}>
                    <Divider />
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        width: "100%",
                        height: "100%"
                    }}>
                    <Link href="./Register">
                        <Typography
                            variant="body1"
                            sx={{ color: "blue", textDecoration: "underline" }}
                        >
                            Create account ?
                        </Typography>
                    </Link>
                </Box>
            </Box>
        </>
    );
};
