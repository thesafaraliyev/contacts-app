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
    Grid,
    Avatar,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {makeStyles, useTheme} from '@material-ui/core/styles';

import CakeOutlinedIcon from '@material-ui/icons/CakeOutlined';
import BusinessOutlinedIcon from '@material-ui/icons/BusinessOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

import PhoneRows from './PhoneRows';
import EmailRows from './EmailRows';
import WebsiteRows from './WebsiteRows';
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


    const handleChange = (key, event) => {
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
                        <Input
                            label='Name'
                            defaultValue={values.name}
                            onChange={event => handleChange('name', event)}/>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <Input
                            label='Surname'
                            defaultValue={values.surname}
                            onChange={event => handleChange('surname', event)}/>
                    </Grid>
                </Grid>


                {/* Phone numbers */}
                <PhoneRows values={values} setValues={setValues}/>

                {/* Emails */}
                <EmailRows values={values} setValues={setValues}/>


                {showAdditionalFields && <React.Fragment>
                    {/* Company & Job title */}
                    <Container>
                        <IconHeader Icon={<BusinessOutlinedIcon fontSize='small'/>} title='Company & Job title'/>

                        <Grid item sm={4} xs={12}>
                            <Input
                                label='Company'
                                defaultValue={values.company}
                                onChange={event => handleChange('company', event)}/>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <Input
                                label='Job title'
                                defaultValue={values.jobTitle}
                                onChange={event => handleChange('jobTitle', event)}/>
                        </Grid>
                    </Container>


                    {/* Location information */}
                    <Container>
                        <IconHeader Icon={<LocationOnOutlinedIcon fontSize='small'/>} title='Location'/>
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
                                    <TextField color='secondary' variant='outlined' {...params} label='Location'/>
                                )}
                            />
                        </Grid>
                        <Grid item sm={3} xs={12}>
                            <Input label='Street address'/>
                        </Grid>
                        <Grid item sm={3} xs={12}>
                            <Input label='Postal code'/>
                        </Grid>
                    </Container>


                    {/* Websites */}
                    <WebsiteRows values={values} setValues={setValues}/>


                    {/* Birthday */}
                    <Container>
                        <IconHeader Icon={<CakeOutlinedIcon fontSize='small'/>} title='Birthday'/>
                        <Grid item sm={10} xs={12}>
                            <Input
                                label='Birthday'
                                placeholder='mm/dd/yyyy'
                                defaultValue={values.birthday}
                                onChange={event => handleChange('birthday', event)}/>
                        </Grid>
                    </Container>

                </React.Fragment>}
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
