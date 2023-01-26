import React, { useState } from "react";
import { Box, Typography, Button, TextField, Alert } from '@mui/material'
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
    const [tost,setTost] = useState(false)

const [type,setType]=useState("")
    const resetState = () => {
        setIsSigup(!isSignup)
    }
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
        confirmPassword:{
            value:'',
            error:false,
            errorMessage:'You must enter your confirmPassword'
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
        if(!newFormValues.email.value && type === "forgot"){
          newFormValues.email.error = true
        } else {
          newFormValues.email.error = false
        }
        if(!newFormValues.password.value && type === "setPassword"){
          newFormValues.password.error = true
        } else {
          newFormValues.password.error = false
        }
        if(!newFormValues.confirmPassword.value && type === "setPassword"){
            newFormValues.confirmPassword.error = true
          } else if(newFormValues.confirmPassword.value && newFormValues.password.value && newFormValues.confirmPassword.value !== newFormValues.password.value){
            newFormValues.confirmPassword.error = true
            newFormValues.confirmPassword.errorMessage = "Passwords does not match"
          } else {
            newFormValues.confirmPassword.error = false
          }
        setFormValues(newFormValues)
       if(!newFormValues.password.error && !newFormValues.confirmPassword.error && type === "setPassword") {
        setTost(true)
        setTimeout(() => {history('/login')}, 1000);
        
       } else if (!newFormValues.email.error && type === "forgot"){
        resetState()
       }
      }
    console.log("typ",type)
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
                <Typography variant="h4" padding={3} textAlign="center">{!isSignup ? "Forgot Password" : "Set Password"}</Typography>
             <Box display='flex' flexDirection={"column"} margin={"0px 0px 0px 0px"}>

             {!isSignup && (
                    <TextField className={classes.root} name="email"
                        onChange={handleChange}
                       fullWidth
                        error={ formValues.email.error}
                    helperText={ formValues.email.error && formValues.email.errorMessage}
                    value={formValues.email.value}                   
                        margin="normal" type={'email'}
                        variant='outlined' placeholder="Email" />
                )}

                {isSignup && (<TextField name="password"
                    className={classes.root}
                    onChange={handleChange}
                    error={ formValues.password.error}
                    helperText={ formValues.password.error && formValues.password.errorMessage}
                    value={formValues.password.value}                   
                    margin="normal"
                    type={'password'} variant='outlined' placeholder="Password" />)}

                {isSignup && (<TextField name="confirmPassword"
                    className={classes.root}
                    onChange={handleChange}
                    error={ formValues.confirmPassword.error}
                    helperText={ formValues.confirmPassword.error && formValues.confirmPassword.errorMessage}
                    value={formValues.confirmPassword.value}                   
                    margin="normal"
                    type={'password'} variant='outlined' placeholder="Confirm Password" />)}

                {!isSignup && (
                    <Button className={classes.button}
                        // onClick={resetState}
                        onClick={event =>   (setType("forgot"))}
                        endIcon={<ArrowRightOutlinedIcon />}
                        sx={{ marginTop: 3, borderRadius: 3 }}
                        type="submit" name="submit"
                        variant="contained" style={{ backgroundColor: "#009688" }}>continue</Button>
                )}
                {isSignup && (<Button className={classes.button}
                // onClick={() => { history('/home') }}
                onClick={event =>   (setType("setPassword"))}
                    endIcon={<CloudDoneOutlinedIcon />}
                    type="submit" name="submit" sx={{ marginTop: 3, borderRadius: 3 }}
                    variant="contained" style={{ backgroundColor: "#009688" }}>Set Password</Button>
                )}
                   {type === "setPassword" && tost && (<Alert onClose={() => {}} sx={{position:"absolute"  ,margin:"-300px 0px 0px 320px"}}>Password update successfully!</Alert>)
                   } 
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

            </Box>
        </form>
    </div>
}

export default ForgotPassword