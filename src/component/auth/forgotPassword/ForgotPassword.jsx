import React, { useState } from "react";
import { Box, Typography, Button, TextField } from '@mui/material'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import CloudDoneOutlinedIcon from '@mui/icons-material/CloudDoneOutlined';
import { makeStyles } from '@mui/styles'
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#009688"
        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#009688"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#009688"
        },
        "&:hover": {
            boxShadow: '10px 10px 20px #ccc',
        },
    },
    hover: {
        backgroundColor: "#fff",
        "&:hover": {
            boxShadow: '10px 10px 30px #ccc'
        },
    },
    button: {
        color: "#009688"
    }

});
const ForgotPassword = () => {
    const history = useNavigate();
    const classes = useStyles();

    const [isSignup, setIsSigup] = useState(false)

    const [inputs, setInputs] = useState({
        confirmPassword: "",
        email: "",
        password: ""
    })
    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        history('/profile')

    }
    const resetState = () => {
        setIsSigup(!isSignup)
        setInputs({ confirmPassword: "", email: "", password: "" })
    }
    console.log("isSignup", isSignup)
    return <div>
        <form onSubmit={handleSubmit}>
            <Box display='flex'
                flexDirection={"column"}
                width={450}
                height={400}
                alignItems='center'
                justifyContent={'center'}
                margin={'auto'}
                marginRight={"300px"}
                marginTop={20}
                padding={3}
                sx={{ borderTopRightRadius: 20, borderBottomRightRadius: 20 }}
                color='#009688'
                className={classes.hover}

            >
                <Typography variant="h4" padding={3} textAlign="center">{!isSignup ? "Forgot Password" : "Set Password"}</Typography>

                {!isSignup && (
                    <TextField className={classes.root} name="email"
                        onChange={handleChange}

                        value={inputs.email}
                        margin="normal" type={'email'}
                        variant='outlined' placeholder="Email" />
                )}

                {isSignup && (<TextField name="password"
                    className={classes.root}
                    onChange={handleChange}
                    value={inputs.password}
                    margin="normal"
                    type={'password'} variant='outlined' placeholder="Password" />)}

                {isSignup && (<TextField name="confirmPassword"
                    className={classes.root}
                    onChange={handleChange}
                    value={inputs.password}
                    margin="normal"
                    type={'password'} variant='outlined' placeholder="Confirm Password" />)}

                {!isSignup && (
                    <Button className={classes.button}
                        onClick={resetState}
                        endIcon={<ArrowRightOutlinedIcon />}
                        sx={{ marginTop: 3, borderRadius: 3 }}
                        variant="contained" style={{ backgroundColor: "#009688" }}>continue</Button>

                )}
                {isSignup && (<Button className={classes.button}
                onClick={() => { history('/home') }}
                    endIcon={<CloudDoneOutlinedIcon />}
                    type="submit" sx={{ marginTop: 3, borderRadius: 3 }}
                    variant="contained" style={{ backgroundColor: "#009688" }}>Set Password</Button>
                )}
                {!isSignup && (
                    <Button
                        onClick={() => { history('/login') }}
                        startIcon={<ArrowBackOutlinedIcon />}
                        sx={{ marginTop: 3, borderRadius: 3 }}
                    > Back to Login</Button>
                )}
                {isSignup && (
                    <Button
                        onClick={resetState}
                        startIcon={<ArrowBackOutlinedIcon />}
                        sx={{ marginTop: 3, borderRadius: 3 }}
                    > Back to Forgot</Button>
                )}
            </Box>
        </form>
    </div>
}

export default ForgotPassword