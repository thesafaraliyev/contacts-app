import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import {Toolbar, Fab, Hidden} from '@material-ui/core';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';

import ContactsTable from "./Table";
import AddEditDialog from "./Contact/AddEditDialog/";
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


const createContact = (id, name, email, phoneNumber, address, birthday) => {
    return {id, name, email, phoneNumber, address, birthday};
}

const contacts = [
    createContact(1, 'Trevor Philips', 'trevorphilips@mail.com', '+2024561111', 'Los Santos, San Andreas', '11 Nov 1996'),
    createContact(2, 'Tommy Vercetti', 'tommyvercetti@mail.com', '+442078391377', 'Miami, Florida', '29 Jun 1995'),
];


export default function Body({sidebarOpen}) {
    const classes = useStyles();
    const [contactCreateOpen, setContactCreateOpen] = React.useState(false);


    const handleOpen = () => {
        setContactCreateOpen(true)
    }

    return (
        <main className={`${classes.root} ${sidebarOpen ? classes.contentShift : ''}`}>
            <Toolbar variant={'dense'}/>

            <ContactsTable contacts={contacts}/>

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

            <AddEditDialog open={contactCreateOpen} setOpen={setContactCreateOpen} data={{
                emails: [{email: '', label: ''}],
                numbers: [{code: '994', number: '', label: ''}],
                websites: [{name: '', label: ''}],
            }}/>
            {/*<Toast/>*/}
        </main>
    );
}
