import React from "react";
import { Box, Typography, Button } from '@mui/material'
import { useNavigate } from "react-router-dom";
import { makeStyles } from '@mui/styles'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

const useStyles = makeStyles({
    hover: {
        backgroundColor: "#fff",
        "&:hover": {
            boxShadow: '10px 10px 30px #ccc'
        },
    },
    button: {
        color: "#009688"
    },
    image: {
        width: 150,
        borderRadius: 100,
        marginTop: -50,
        marginLeft: 20,
        position: "absolute"
    }

});

const Landing = () => {
    const history = useNavigate();
    const classes = useStyles();
    return (<Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        margin={'auto'}
        marginRight={"180px"}
        width={450}
        height={400}
        flexDirection={"row"}
        marginTop={20}
        padding={3}
        sx={{ borderTopRightRadius: 20, borderBottomRightRadius: 20 }}
        color='#009688'
        className={classes.hover}
    >
        <Typography variant="h3" padding={3}
            sx={{ position: "absolute", marginTop: -45, marginLeft: 10, fontWeight: "bold", fontFamily: "inherit" }}
            textAlign="center">Two~Way</Typography>

        <img src="assets/my-photo.jpg" alt="logo" className={classes.image}></img>
        <Button className={classes.button}
            onClick={() => { history('/home') }}
            endIcon={<ArrowForwardOutlinedIcon />}
            sx={{ marginTop: 15, marginLeft: 10, borderRadius: 2 }}
            variant="contained" style={{ backgroundColor: "#009688" }}>continue as Pankaj Bhandari</Button>

        <Button
            onClick={() => { history('/login') }}
            sx={{ marginTop: 40, marginLeft: -40 }}
        > <span style={{ color: "black" }}>Not Pankaj Bhandari? </span>Switch Account</Button>

    </Box>)


}

export default Landing