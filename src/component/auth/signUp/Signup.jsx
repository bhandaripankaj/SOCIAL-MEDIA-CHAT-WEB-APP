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
    const [formValues, setFormValues] = useState({
        name:{
          value:'',
          error:false,
          errorMessage:'You must enter a name'
        },
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
        if(!newFormValues.name.value){
          newFormValues.name.error = true
        } else {
          newFormValues.name.error = false
        }
        setFormValues(newFormValues)
       if(!newFormValues.email.error && !newFormValues.password.error && !newFormValues.name.error) {
        history('/home')
       }
      }

    return <div>
        <form onSubmit={handleSubmit}>
            <Box display='flex' 
            flexDirection={"column"}
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
                <Typography variant="h2" textAlign="center">Signup</Typography>

                <TextField name="name"
                    className={classes.root}
                    onChange={handleChange}
                    error={formValues.name.error}
                    helperText={formValues.name.error && formValues.name.errorMessage}
                    value={formValues.name.value}
                    margin="normal" type={'text'}
                    variant='outlined' placeholder="Name" />

                <TextField className={classes.root} name="email"
                    onChange={handleChange}
                    error={formValues.email.error}
                    helperText={formValues.email.error && formValues.email.errorMessage}
                    value={formValues.email.value}
                    margin="normal" type={'email'}
                    variant='outlined' placeholder="Email" />

                <TextField name="password"
                    className={classes.root}
                    onChange={handleChange}
                    error={formValues.password.error}
                    helperText={formValues.password.error && formValues.password.errorMessage}
                    value={formValues.password.value}
                    margin="normal"
                    type={'password'} variant='outlined' placeholder="Password" />
                <Button className={classes.button} 
                    endIcon={<HowToRegOutlinedIcon />}
                    type="submit" name="submit" sx={{ marginTop: 3, borderRadius: 3 }}
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