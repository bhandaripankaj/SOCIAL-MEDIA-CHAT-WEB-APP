import React, { useState } from "react";
import { Box, Typography, Button, TextField } from '@mui/material'
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
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
    hover:{
        backgroundColor:"#fff",
        "&:hover": {
            boxShadow: '10px 10px 30px #ccc'
        },
    },
    button:{
        color:"#009688"
    }

});
const Signup = () => {
    const history = useNavigate();

    const classes = useStyles();


    const [isSignup, setIsSigup] = useState(false)

    const [inputs, setInputs] = useState({
        name: "",
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
        setInputs({ name: "", email: "", password: "" })
    }

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
                <Typography variant="h2" textAlign="center">Signup</Typography>

                <TextField name="name"
                    className={classes.root}
                    onChange={handleChange}
                    value={inputs.name}
                    margin="normal" type={'text'}
                    variant='outlined' placeholder="Name" />

                <TextField className={classes.root} name="email"
                    onChange={handleChange}

                    value={inputs.email}
                    margin="normal" type={'email'}
                    variant='outlined' placeholder="Email" />

                <TextField name="password"
                    className={classes.root}
                    onChange={handleChange}
                    value={inputs.password}
                    margin="normal"
                    type={'password'} variant='outlined' placeholder="Password" />
                <Button className={classes.button} 
                    onClick={() => { history('/home') }}
                    endIcon={<HowToRegOutlinedIcon />}
                    type="submit" sx={{ marginTop: 3, borderRadius: 3 }}
                    variant="contained"  style={{backgroundColor:"#009688"}}>Signup</Button>
                <Button
                    endIcon={<LoginOutlinedIcon />}
                    onClick={() => { history('/login') }}
                    sx={{ marginTop: 3, borderRadius: 3 }}
                > <span style={{ color: "black" }}>Have an account?</span>Login</Button>
            </Box>
        </form>
    </div>
}

export default Signup