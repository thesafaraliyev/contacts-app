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
    Avatar,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {makeStyles, useTheme} from '@material-ui/core/styles';

import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import CakeOutlinedIcon from '@material-ui/icons/CakeOutlined';
import LinkOutlinedIcon from '@material-ui/icons/LinkOutlined';
import BusinessOutlinedIcon from '@material-ui/icons/BusinessOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

import PhoneRows from './PhoneRows';
import {IconHeader} from './Row/Header';
import Container from './Row/';


const useStyles = makeStyles((theme) => ({
    avatar: {
        width: theme.spacing(7.5),
        height: theme.spacing(7.5),
    },
    avatarRow: {
        [theme.breakpoints.down('xs')]: {
            paddingBottom: theme.spacing(4),
        },
    },
    actions: {
        display: 'flex',
        justifyContent: 'space-between',
    },
}));

function Input(props) {
    return <TextField fullWidth color='secondary' size='small' variant='outlined' {...props}/>
}

const AddEditDialog = ({open, setOpen, data, id = null}) => {
    const classes = useStyles();
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));

    const [showAdditionalFields, setShowAdditionalFields] = React.useState(false);
    const [values, setValues] = React.useState(data);


    const handleClose = () => {
        console.log(values)
        setValues(data)
        setOpen(false);
    };


    const handleChange = (key, event, arrKey = null, indexInArr = null) => {
        setValues({...values, [key]: event.target.value})
    }


    const handleShowMode = () => setShowAdditionalFields(!showAdditionalFields);


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

                {/* avatar, name, surname */}
                <Grid container spacing={2} alignItems='center' className={classes.avatarRow}>
                    <Grid item sm={1} xs={3}>
                        <Avatar variant='rounded' className={classes.avatar}/>
                    </Grid>
                    <Grid item sm={4} xs={9}>
                        <Input label='Name' defaultValue={values.name} onChange={event => handleChange('name', event)}/>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <Input label='Surname' defaultValue={values.surname} onChange={event => handleChange('surname', event)}/>
                    </Grid>
                </Grid>


                {/* Phone numbers */}
                <PhoneRows values={values} setValues={setValues}/>

            </DialogContent>


            <DialogActions className={classes.actions}>
                <Button onClick={handleShowMode}>Show {showAdditionalFields ? 'less' : 'more'}</Button>
                <div>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose} disabled={false}>Save</Button>
                </div>
            </DialogActions>
        </Dialog>
    );
}

export default React.memo(AddEditDialog);
