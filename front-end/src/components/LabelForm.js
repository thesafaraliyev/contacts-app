import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    textField: {
    },
    actions: {
    },
}));


export default function LabelForm({open, setOpen}) {
    const classes = useStyles();

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog open={open} onClose={handleClose} classes={{paper: classes.root}}>
            <DialogTitle>Create label</DialogTitle>
            <DialogContent className={classes.content}>
                <TextField
                    className={classes.textField}
                    autoFocus
                    margin='none'
                    id='label'
                    label='Label name'
                    type='text'
                    fullWidth
                    size='small'
                    color='secondary'
                    // error
                    // helperText='Label name already exists.'
                />
            </DialogContent>
            <DialogActions className={classes.actions}>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose}>Save</Button>
            </DialogActions>
        </Dialog>
    );
}
