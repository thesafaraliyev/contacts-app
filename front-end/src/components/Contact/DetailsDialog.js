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
    Hidden,
    DialogTitle
} from '@material-ui/core';
import {useTheme, makeStyles} from '@material-ui/core/styles';

import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';

import DetailsList from './DetailsList';
import Api from '../../utils/api';


const useStyles = makeStyles((theme) => ({
    title: {
        paddingBottom: theme.spacing(1),
    },
    header: {
        paddingBottom: theme.spacing(2),
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
    actions: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingBottom: theme.spacing(2),
    },
}));


const api = new Api();


const DetailsDialog = ({open, setOpen, id, setEditOpen}) => {
    if (null === id) {
        return null;
    }

    const classes = useStyles();
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));
    const contact = api.fetchContact(id);


    const handleClose = () => {
        setOpen(false);
    };


    const handleEdit = () => {
        setOpen(false);
        setEditOpen(true);
    }

    const settingButtons = (
        <React.Fragment>
            <IconButton>
                <StarBorderOutlinedIcon fontSize='small'/>
            </IconButton>
            <IconButton onClick={handleEdit}>
                <EditOutlinedIcon fontSize='small'/>
            </IconButton>
            <IconButton>
                <MoreVertOutlinedIcon fontSize='small'/>
            </IconButton>
        </React.Fragment>
    );


    return (
        <Dialog open={open} onClose={handleClose} TransitionComponent={Grow} fullScreen={fullScreen} fullWidth>

            <DialogTitle className={classes.title}>
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
                            {contact.name} {contact.surname}
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

            </DialogTitle>

            <DialogContent>
                <Typography>Contact details</Typography>
                <DetailsList contact={contact}/>
            </DialogContent>
        </Dialog>
    );
}


export default React.memo(DetailsDialog);