import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import {Toolbar, Fab, Hidden} from '@material-ui/core';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';

import ContactsTable from './Table';
import AddEditDialog from './Contact/AddEditDialog/';
import Api from '../utils/api';
// import Toast from "./Shared/Toast";


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

const api = new Api();


export default function Body({sidebarOpen}) {
    const classes = useStyles();
    const [createContactOpen, setCreateContactOpen] = React.useState(false);
    const [contacts, setContacts] = React.useState(api.getContacts());


    const handleOpen = () => setCreateContactOpen(true)

    return (
        <main className={`${classes.root} ${sidebarOpen ? classes.contentShift : ''}`}>
            <Toolbar variant={'dense'}/>

            <ContactsTable contacts={contacts} setContacts={setContacts}/>

            <Hidden smUp>
                <Fab color='secondary' size='medium' className={classes.xsFab} onClick={handleOpen}>
                    <PersonAddOutlinedIcon fontSize='small'/>
                </Fab>
            </Hidden>
            <Hidden xsDown>
                <Fab color='secondary' size='medium' variant='extended' className={classes.fab} onClick={handleOpen}>
                    <PersonAddOutlinedIcon fontSize='small'/> Create contact
                </Fab>
            </Hidden>

            <AddEditDialog
                open={createContactOpen}
                setOpen={setCreateContactOpen}
                contacts={contacts}
                setContacts={setContacts}/>

            {/*<Toast/>*/}
        </main>
    );
}
