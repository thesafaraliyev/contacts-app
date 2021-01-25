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
    useMediaQuery,
    Hidden
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
    titleContainer: {
        marginLeft: theme.spacing(3),
        flexGrow: 2,
    },
    chip: {
        margin: theme.spacing(1, 1, 0, 0),
    },
    contactDetails: {
        paddingTop: theme.spacing(2.5),
    },
    actions: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingBottom: theme.spacing(2),
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
    ],
    websites: [
        {
            value: 'trevorphilips.com',
            label: 'Blog',
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

    const settingButtons = (
        <React.Fragment>
            <IconButton>
                <StarBorderOutlinedIcon fontSize='small'/>
            </IconButton>
            <IconButton>
                <EditOutlinedIcon fontSize='small'/>
            </IconButton>
            <IconButton>
                <MoreVertOutlinedIcon fontSize='small'/>
            </IconButton>
        </React.Fragment>
    );


    return (
        <Dialog open={open} onClose={handleClose} TransitionComponent={Grow} fullScreen={fullScreen} fullWidth>
            <DialogContent className={classes.content}>

                <Hidden smUp>
                    <div className={classes.actions}>
                        <div>
                            <IconButton onClick={() => setOpen(false)}>
                                <ClearRoundedIcon fontSize='small'/>
                            </IconButton>
                        </div>

                        <div>{settingButtons}</div>
                    </div>
                </Hidden>

                <div className={classes.header}>
                    <Avatar
                        variant='rounded'
                        alt='Trevor Philips'
                        src="/static/images/avatar/1.jpg"
                        className={classes.avatar}/>

                    <div className={classes.titleContainer}>
                        <Typography variant='h5'>
                            {contact.firstname} {contact.surname}
                        </Typography>

                        <div>
                            {contact.labels.map(({slug, name}) => (
                                <Chip clickable variant='outlined' className={classes.chip} key={slug} label={name}/>
                            ))}
                        </div>
                    </div>

                    <Hidden xsDown>
                        {settingButtons}
                        <IconButton onClick={() => setOpen(false)}>
                            <ClearRoundedIcon fontSize='small'/>
                        </IconButton>
                    </Hidden>
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