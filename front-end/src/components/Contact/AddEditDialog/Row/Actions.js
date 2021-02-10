import React from 'react';

import {Grid, IconButton, Hidden, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

import ClearRoundedIcon from '@material-ui/icons/ClearRounded';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
    },
}));


const Actions = ({index, addFn, removeFn, addDisabled}) => {
    const classes = useStyles();

    return (
        <Grid item sm={1} xs={12} className={classes.root}>

            <Hidden smUp>
                {index === 0 ? <Button fullWidth color='secondary' onClick={addFn} disabled={addDisabled}>
                    Add new row
                </Button> : <Button fullWidth color='secondary' onClick={removeFn}>
                    Delete this row #{index + 1}
                </Button>}
            </Hidden>

            <Hidden xsDown>
                {index === 0
                    ? <IconButton color='secondary' onClick={addFn} disabled={addDisabled}>
                        <AddOutlinedIcon fontSize='small'/>
                    </IconButton>
                    : <IconButton color='secondary' onClick={removeFn}>
                        <ClearRoundedIcon fontSize='small'/>
                    </IconButton>}
            </Hidden>

        </Grid>
    )
}


export default Actions;