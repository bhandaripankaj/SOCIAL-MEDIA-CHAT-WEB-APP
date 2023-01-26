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
const Login = () => {
    const history = useNavigate();
    const classes = useStyles();
    const [formValues, setFormValues] = useState({
        email:{
          value:"",
          error:false,
          errorMessage:'You must enter an email'
        },
        password:{
          value:'',
          error:false,
          errorMessage:'You must enter your password'
        },
      })
    const handleChange = (e) => {
        const {name, value} = e.target;
    setFormValues({
      ...formValues,
      [name]:{
        ...formValues[name],
        value
      }
    })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let newFormValues = {...formValues}
        if(!newFormValues.email.value){
          newFormValues.email.error = true
        } else {
          newFormValues.email.error = false
        }
        if(!newFormValues.password.value){
          newFormValues.password.error = true
        } else {
          newFormValues.password.error = false
        }
        setFormValues(newFormValues)
       if(!newFormValues.email.error && !newFormValues.password.error) {
        history('/home')
       }
      }
    return <div>
        <form onSubmit={handleSubmit}>
            <Box display='flex' flexDirection={"column"}
                width={450}
                height={450}
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
                <Typography variant="h2" padding={3} textAlign="center">Login</Typography>
                <TextField className={classes.root} name="email"
                    onChange={handleChange}
                    error={ formValues.email.error}
                    helperText={ formValues.email.error && formValues.email.errorMessage}
                    value={formValues.email.value}                   
                     margin="normal" type={'email'}
                    variant='outlined' placeholder="Email" />

                <TextField name="password"
                    className={classes.root}
                    onChange={handleChange}
                    // onChange={handleInput}
                    error={formValues.password.error}
                    helperText={formValues.password.error && formValues.password.errorMessage}
                    value={formValues.password.value}
                    margin="normal"
                    type={'password'} variant='outlined' placeholder="Password" />


                <Button
                    onClick={() => { history('/forgot-password') }}
                    sx={{ marginLeft: 10 }}
                > Forgot Password</Button>

                <Button className={classes.button} 
                   endIcon={<LoginOutlinedIcon />}
                   type="submit" name="submit" sx={{ marginTop: 3, borderRadius: 3 }}
                    variant="contained" style={{ backgroundColor: "#009688" }}>Login</Button>
                <Button
                    endIcon={<HowToRegOutlinedIcon />}
                    onClick={() => { history('/signup') }}
                    sx={{ marginTop: 3, borderRadius: 3 }}
                >  <span style={{ color: "black" }}>Don't have an account? </span> Sign up</Button>
            </Box>
        </form>
    </div>
}

export default Login