import React from 'react';

import {
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grow,
    useMediaQuery,
    IconButton,
    Grid,
    Avatar, Hidden,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {makeStyles, useTheme} from '@material-ui/core/styles';

import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import CakeOutlinedIcon from '@material-ui/icons/CakeOutlined';
import LinkOutlinedIcon from '@material-ui/icons/LinkOutlined';
import BusinessOutlinedIcon from '@material-ui/icons/BusinessOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';


const useStyles = makeStyles((theme) => ({
    avatar: {
        width: theme.spacing(7.5),
        height: theme.spacing(7.5),
    },
    row: {
        paddingBottom: theme.spacing(1),
        [theme.breakpoints.down('xs')]: {
            paddingBottom: theme.spacing(4),
        },
    },
    avatarRow:{
        [theme.breakpoints.down('xs')]: {
            paddingBottom: theme.spacing(4),
        },
    },
    rowHeader: {
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'flex-start',
        },
    },
    rowTitle: {
        marginLeft: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    rowActions: {
        display: 'flex',
        justifyContent: 'center',
    },
}));

function Input(props) {
    return <TextField fullWidth color='secondary' size='small' variant='outlined' {...props}/>
}


const Create = ({open, setOpen}) => {
    const classes = useStyles();

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog
            fullWidth
            open={open}
            onClose={handleClose}
            TransitionComponent={Grow}
            fullScreen={fullScreen}
            maxWidth='md'
        >
            <DialogTitle>Create new contact</DialogTitle>

            <DialogContent>

                <Grid container spacing={2} alignItems='center' className={classes.avatarRow}>
                    <Grid item sm={1} xs={3}>
                        <Avatar variant='rounded' className={classes.avatar}>E</Avatar>
                    </Grid>
                    <Grid item sm={5} xs={9}>
                        <Input fullWidth label='Name'/>
                    </Grid>
                    <Grid item sm={5} xs={12}>
                        <Input label='Surname'/>
                    </Grid>
                </Grid>


                <Grid container spacing={2} alignItems='center' className={classes.row}>
                    <Grid item sm={1} xs={12} className={classes.rowHeader}>
                        <div><BusinessOutlinedIcon fontSize='small'/></div>
                        <div className={classes.rowTitle}><span>Company & Job title</span></div>
                    </Grid>
                    <Grid item sm={5} xs={12}>
                        <Input label='Company'/>
                    </Grid>
                    <Grid item sm={5} xs={12}>
                        <Input label='Job title'/>
                    </Grid>
                </Grid>


                <Grid container spacing={2} alignItems='center' className={classes.row}>
                    <Grid item sm={1} xs={12} className={classes.rowHeader}>
                        <div><MailOutlinedIcon fontSize='small'/></div>
                        <div className={classes.rowTitle}><span>Emails & labels</span></div>
                    </Grid>

                    <Grid item sm={6} xs={12}>
                        <Input label='Email'/>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <Autocomplete
                            freeSolo
                            fullWidth
                            autoHighlight
                            autoComplete
                            clearOnEscape
                            size='small'
                            options={['Home', 'Work', 'Other']}
                            renderInput={(params) => (
                                <TextField color='secondary' variant='outlined' {...params} label='Label'/>
                            )}
                        />
                    </Grid>
                    <Grid item sm={1} xs={12} className={classes.rowActions}>
                        <Hidden smUp>
                            <Button
                                fullWidth
                                variant='outlined'
                                color='secondary'
                                startIcon={<AddOutlinedIcon fontSize='small'/>}
                            >
                                Add new email
                            </Button>
                        </Hidden>
                        <Hidden xsDown>
                            <IconButton>
                                <AddOutlinedIcon fontSize='small'/>
                            </IconButton>
                        </Hidden>
                    </Grid>
                </Grid>


                <Grid container spacing={2} alignItems='center' className={classes.row}>
                    <Grid item sm={1} xs={12} className={classes.rowHeader}>
                        <div><LocationOnOutlinedIcon fontSize='small'/></div>
                        <div className={classes.rowTitle}><span>Location information</span></div>
                    </Grid>

                    <Grid item sm={3} xs={12}>
                        <Autocomplete
                            freeSolo
                            fullWidth
                            autoHighlight
                            autoComplete
                            clearOnEscape
                            size='small'
                            options={['Home', 'Work', 'Other']}
                            renderInput={(params) => (
                                <TextField color='secondary' variant='outlined' {...params} label='Location'/>
                            )}
                        />
                    </Grid>
                    <Grid item sm={3} xs={12}>
                        <Input label='Street address'/>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <Input label='Postal code'/>
                    </Grid>
                </Grid>


                <Grid container spacing={2} alignItems='center' className={classes.row}>
                    <Grid item sm={1} xs={12} className={classes.rowHeader}>
                        <div><LinkOutlinedIcon fontSize='small'/></div>
                        <div className={classes.rowTitle}><span>Websites</span></div>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <Input label='Website'/>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <Autocomplete
                            freeSolo
                            fullWidth
                            autoHighlight
                            autoComplete
                            clearOnEscape
                            size='small'
                            options={['Profile', 'Blog', 'Work']}
                            renderInput={(params) => (
                                <TextField color='secondary' variant='outlined' {...params} label='Label'/>
                            )}
                        />
                    </Grid>
                    <Grid item sm={1} xs={12} className={classes.rowActions}>
                        <Hidden smUp>
                            <Button
                                fullWidth
                                variant='outlined'
                                color='secondary'
                                startIcon={<AddOutlinedIcon fontSize='small'/>}
                            >
                                Add new website
                            </Button>
                        </Hidden>
                        <Hidden xsDown>
                            <IconButton>
                                <AddOutlinedIcon fontSize='small'/>
                            </IconButton>
                        </Hidden>
                    </Grid>
                </Grid>


                <Grid container spacing={2} alignItems='center' className={classes.row}>
                    <Grid item sm={1} xs={12} className={classes.rowHeader}>
                        <div><CakeOutlinedIcon fontSize='small'/></div>
                        <div className={classes.rowTitle}><span>Birthday information</span></div>
                    </Grid>
                    <Grid item sm={10} xs={12}>
                        <Input label='Birthday' helperText='mm/dd/yyyy'/>
                    </Grid>
                </Grid>

            </DialogContent>


            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose}>Save</Button>
            </DialogActions>
        </Dialog>
    );
}

export default Create;
