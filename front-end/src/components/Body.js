import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import {Toolbar, Fab, Hidden} from '@material-ui/core';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';

import ContactsTable from "./Table";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(0, 3, 9, 3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(0, 2, 9, 2),
        },
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
    fab: {
        textTransform: 'none',
        position: 'fixed',
        bottom: theme.spacing(3),
        right: theme.spacing(3),
        '&>span>svg': {
            marginRight: theme.spacing(1),
        },
    },
    xsFab: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    }
}));


const createContact = (name, email, phoneNumber, address, birthday)  => {
    return {name, email, phoneNumber, address, birthday};
}

const contacts = [
];


export default function Body({sidebarOpen}) {
    const classes = useStyles();

    return (
        <main className={`${classes.root} ${sidebarOpen ? classes.contentShift : ''}`}>
            <Toolbar variant={'dense'}/>

            <ContactsTable contacts={contacts}/>

            <Hidden smUp>
                <Fab size='medium' className={classes.xsFab}>
                    <PersonAddOutlinedIcon fontSize='small'/>
                </Fab>
            </Hidden>
            <Hidden xsDown>
                <Fab size='medium' variant='extended' className={classes.fab}>
                    <PersonAddOutlinedIcon fontSize='small'/> Create contact
                </Fab>
            </Hidden>
        </main>
    );
}
