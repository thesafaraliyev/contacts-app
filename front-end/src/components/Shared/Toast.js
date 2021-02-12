import React from 'react';

import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import { makeStyles } from '@material-ui/core/styles';
import Grow from '@material-ui/core/Grow';


const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.down('xs')]: {
            bottom: theme.spacing(10),
        },
    },
}));


export default function Toast() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <Snackbar
            className={classes.root}
            // anchorOrigin={{
            //     vertical: 'bottom',
            //     horizontal: 'center',
            // }}
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message="Note archived"
            TransitionComponent={Grow}
            action={
                <Button size='small' color='secondary' onClick={handleClose}>
                    UNDO
                </Button>
            }
        />
    );
}
