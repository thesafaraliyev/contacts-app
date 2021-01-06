import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, IconButton, Avatar} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
// import AccountCircle from '@material-ui/icons/AccountCircle';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';

import Search from "./Search";


const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    root: {
        zIndex: theme.zIndex.drawer + 1,
    },
    logo: {
        width: 234,
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    },
    avatar: {
        width: theme.spacing(4),
        height: theme.spacing(4),
    },
}));


export default function Header() {
    const classes = useStyles();

    return (
        <AppBar position="fixed" className={classes.root} color='default' elevation={0}>
            <Toolbar variant='dense'>

                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                >
                    <MenuIcon/>
                </IconButton>

                <Typography variant="h6" noWrap className={classes.logo}>
                    Contacts App
                </Typography>

                <Search/>
                <div className={classes.grow}/>

                <IconButton color="inherit">
                    <SettingsOutlinedIcon fontSize='small'/>
                </IconButton>
                <IconButton size='small'>
                    <Avatar variant='rounded' className={classes.avatar} alt="Remy Sharp"
                            src="/static/images/avatar/1.jpg"/>
                </IconButton>

            </Toolbar>
        </AppBar>
    );
}
