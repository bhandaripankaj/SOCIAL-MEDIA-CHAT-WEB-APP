import React, { useState } from "react";
import { Box, Typography, Button, Stack } from '@mui/material'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { makeStyles } from '@mui/styles'
import { useNavigate } from "react-router-dom";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import SettingsBackupRestoreRoundedIcon from '@mui/icons-material/SettingsBackupRestoreRounded';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

const useStyles = makeStyles({
    Box: {
        boxShadow: '5px 5px 10px #ccc',
        backgroundColor: "#009688",
        "&:hover": {
            boxShadow: '10px 10px 30px #ccc'
        },
    },
    Box2: {
        position: "absolute",
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: "#ffff",
        boxShadow: "10px 5px 5px -4px #ccc, -10px 2px 8px -4px #ccc",
        "&:hover": {
            boxShadow: '10px 10px 30px #ccc'
        },
    },
    button: {
        color: "#ffff",
        boxShadow: '1px 1px 2px 0px',
        padding: 10,
    },
    image: {
        width: 100,
        borderRadius: 150,
        marginTop: -75,
        marginLeft: "28%",
        position: "absolute"
    },
    profile: {
        textAlign: "center",
        padding: 3,
        color: "#fff"
    },
    userName: {
        textAlign: "center",
        fontWeight: "bold",
    },
    value: {
        textAlign: "center",
        padding: 10,
        backgroundColor: "#ffff",
    },
    icons: {
        // marginRight: 20,
        color: "#009688",
        backgroundColor: "#e0f7fa",
        marginTop: 10,
        padding: 10,
    },
    div: {
        marginTop: 30
    },
});

const profileArray = [
    { icon: SettingsOutlinedIcon, value: "Setting" },
    { icon: ShieldOutlinedIcon, value: "Privacy" },
    { icon: SettingsBackupRestoreRoundedIcon, value: "Archive" },
    { icon: SupervisorAccountOutlinedIcon, value: "Account & Details" },
    { icon: BookmarkBorderOutlinedIcon, value: "Saved" },
]

const Profile = () => {
    const history = useNavigate();
    const classes = useStyles();

    return (<Box display='flex'
        alignItems='center'
        justifyContent={'center'}
        flexDirection={"column"}
    >
        <Box
            width={300}
            height={300}
            margin={'auto'}
            marginTop={5}
            padding={3}
            borderRadius={5}
            className={classes.Box}
        >
            <Stack direction="row" gap={4}>
                <Button startIcon={<ArrowBackIosNewOutlinedIcon sx={{ borderRadius: 3 }} className={classes.button} />} />

                <Typography variant="h4" f className={classes.profile}>Profile</Typography>
            </Stack>

        </Box>

        <Box
            width={300}
            height={405}
            marginTop={55}
            padding={3}
            className={classes.Box2}
        >
            <img src="assets/img_avatar.png" alt="my-profile" className={classes.image}></img>

            <Typography variant="h6" marginTop={4} className={classes.userName}>Pankaj Bhandari</Typography>

            <div className={classes.div}>
                {profileArray.map((el) => (
                    <Stack direction="row" textAlign={"center"} gap={1}>
                        < el.icon className={classes.icons} />
                        <Typography variant="h6" className={classes.value}>{el.value}</Typography>
                    </Stack>
                ))}
            </div>
            <Button
            onClick={() => { history('/login') }}
                sx={{ marginTop: 3, marginLeft: 12, borderRadius: 3 }}
                variant="contained" style={{ backgroundColor: "#009688" }}>Logout</Button>

        </Box>

    </Box>)

}

export default Profile