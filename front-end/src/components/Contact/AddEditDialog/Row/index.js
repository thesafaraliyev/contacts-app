import React from 'react';

import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        paddingBottom: theme.spacing(1),
        [theme.breakpoints.down('xs')]: {
            paddingBottom: theme.spacing(4),
        },
    },
}));


const Container = ({children}) => {
    const classes = useStyles();

    return (
        <Grid container spacing={2} alignItems='center' className={classes.root}>{children}</Grid>
    )
}


export default Container;