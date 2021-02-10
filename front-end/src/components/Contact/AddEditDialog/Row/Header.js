import React from 'react';

import {Grid, Hidden} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';


const useGridStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'flex-start',
        },
    },
}));


const Container = ({children}) => {
    const classes = useGridStyles();

    return (
        <Grid item sm={1} xs={12} className={classes.root}>{children}</Grid>
    )
}


const useIconHeaderStyles = makeStyles((theme) => ({
    title: {
        marginLeft: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    }
}));


export const IconHeader = ({title, Icon}) => {
    const classes = useIconHeaderStyles();

    return (
        <Container>
            <div>{Icon}</div>
            <div className={classes.title}>{title}</div>
        </Container>
    )
}


const Header = ({index, title, Icon}) => {
    return (
        <React.Fragment>
            {index === 0
                ? <IconHeader title={title} Icon={Icon}/>
                : <Container>
                    <Hidden smUp>
                        <div>{title} #{index + 1}</div>
                    </Hidden>
                </Container>}
        </React.Fragment>
    )
}


export default Header;