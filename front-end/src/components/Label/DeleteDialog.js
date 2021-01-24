import React from 'react';
import PropTypes from 'prop-types';

import {
    Button,
    DialogTitle,
    Dialog,
    DialogContent,
    DialogActions,
    Radio,
    RadioGroup,
    FormControl,
    FormControlLabel,
    Typography,
    Grow,
    useMediaQuery
} from '@material-ui/core';
import {makeStyles, useTheme} from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    label: {
        fontSize: theme.typography.body2.fontSize,
    },
}));

export default function DeleteDialog({label, open, setOpen, onSubmit}) {
    const classes = useStyles();
    const [type, setType] = React.useState('1');
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));


    const handleChange = event => setType(event.target.value);
    const handleClose = () => setOpen(false);


    const handleSubmit = () => {
        onSubmit({id: label.id, type});
        handleClose();
    }


    return (
        <Dialog
            fullWidth
            open={open}
            keepMounted
            maxWidth='xs'
            onClose={handleClose}
            fullScreen={fullScreen}
            TransitionComponent={Grow}
        >
            <DialogTitle>{'Delete this label'}</DialogTitle>
            <DialogContent>

                <Typography paragraph variant='body2'>
                    This label has {label.contactsCount} contacts. Choose what to do with them.
                </Typography>

                <FormControl component="fieldset">
                    <RadioGroup value={type} onChange={handleChange}>
                        <FormControlLabel
                            classes={{label: classes.label}}
                            value='1'
                            control={<Radio size='small'/>}
                            label="Keep all contacts and delete this label"/>
                        <FormControlLabel
                            classes={{label: classes.label}}
                            value='2'
                            control={<Radio size='small'/>}
                            label="Delete all contacts and delete this label"/>
                    </RadioGroup>
                </FormControl>

            </DialogContent>

            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSubmit} autoFocus>Delete</Button>
            </DialogActions>
        </Dialog>
    );
}


DeleteDialog.propTypes = {
    label: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
};
