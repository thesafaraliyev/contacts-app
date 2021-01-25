import React from 'react';

import {
    Avatar,
    Divider,
    Chip,
    Typography,
    IconButton,
    Dialog,
    DialogContent,
    Grow,
    useMediaQuery
} from '@material-ui/core';
import {useTheme, makeStyles} from '@material-ui/core/styles';

import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';

import DetailsList from './DetailsList';


const useStyles = makeStyles((theme) => ({
    content: {
        paddingBottom: theme.spacing(2.5),
    },
    header: {
        paddingBottom: theme.spacing(2.5),
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    avatar: {
        width: theme.spacing(7.5),
        height: theme.spacing(7.5),
    },
    contactName: {
        marginLeft: theme.spacing(3),
        flexGrow: 2,
    },
    actions: {
        display: 'flex',
    },
    chipContainer: {
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },
    contactDetails: {
        paddingTop: theme.spacing(2.5),
    },
}));

const contact = {
    id: 1,
    firstname: 'Trevor',
    surname: 'Philips',
    birthday: '11 November 1996',
    company: 'Trevor Philips Enterprises',
    jobTitle: 'Founder & CEO',
    address: 'Los Santos, San Andreas',
    numbers: [
        {
            value: '+2024561111',
            label: 'Home',
        },
        {
            value: '+2024564444',
            label: 'Mobile',
        },
        {
            value: '+2024567777',
            label: '',
        },
    ],
    mails: [
        {
            value: 'trevorphilips@mail.com',
            label: 'Home',
        },
        {
            value: 'trevorswork@mail.com',
            label: '',
        },
        {
            value: 'trevorsother@mail.com',
            label: 'Other',
        },
    ],
    websites: [
        {
            value: 'website.com',
            label: '',
        },
        {
            value: 'second-website.com',
            label: 'Profile',
        },
    ],
    labels: [
        {
            slug: 'friends',
            name: 'Friends',
        },
        {
            slug: 'other',
            name: 'Other',
        },
    ],
};


const DetailsDialog = ({id, open, setOpen}) => {
    const classes = useStyles();
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));


    const handleClose = () => {
        setOpen(false);
    };


    return (
        <Dialog open={open} onClose={handleClose} TransitionComponent={Grow} fullScreen={fullScreen} fullWidth>
            <DialogContent className={classes.content}>

                <div className={classes.header}>
                    <Avatar
                        variant='rounded'
                        alt='Trevor Philips'
                        src="/static/images/avatar/1.jpg"
                        className={classes.avatar}/>

                    <div className={classes.contactName}>
                        <Typography variant='h5'>{contact.firstname} {contact.surname}</Typography>

                        <div className={classes.chipContainer}>
                            {contact.labels.map(label => (
                                <Chip clickable variant='outlined' key={label.slug} label={label.name}/>
                            ))}
                        </div>
                    </div>

                    <div className={classes.actions}>
                        <IconButton>
                            <StarBorderOutlinedIcon fontSize='small'/>
                        </IconButton>
                        <IconButton>
                            <EditOutlinedIcon fontSize='small'/>
                        </IconButton>
                        <IconButton>
                            <MoreVertOutlinedIcon fontSize='small'/>
                        </IconButton>
                        <IconButton onClick={() => setOpen(false)}>
                            <ClearRoundedIcon fontSize='small'/>
                        </IconButton>
                    </div>
                </div>

                <Divider/>

                <div className={classes.contactDetails}>
                    <Typography>Contact details</Typography>

                    <DetailsList contact={contact}/>
                </div>

            </DialogContent>
        </Dialog>
    );
}


export default React.memo(DetailsDialog);