import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import {Toolbar} from '@material-ui/core';

import ContactsTable from "./Table";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(0, 3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        [theme.breakpoints.up('sm')]: {
            marginLeft: -270,
        },
    },
}));


export default function Body({sidebarOpen}) {
    const classes = useStyles();

    return (
        <main className={`${classes.root} ${sidebarOpen ? classes.contentShift : ''}`}>
            <Toolbar variant={'dense'}/>

            <ContactsTable/>
        </main>
    );
}
