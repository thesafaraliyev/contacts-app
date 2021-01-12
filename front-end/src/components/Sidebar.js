import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import {Hidden, Drawer} from '@material-ui/core';

import SideNavigation from "./SideNavigation";


const drawerWidth = 270;
const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: theme.palette.background.default,
    },
}));


export default function Sidebar({open, setOpen}) {
    const classes = useStyles();

    const handleDrawerToggle = () => {
        setOpen(!open);
    };


    return (
        <nav className={classes.root}>
            <Hidden smUp>
                <Drawer
                    variant="temporary"
                    open={open}
                    onClose={handleDrawerToggle}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                >
                    <SideNavigation open={open} setOpen={setOpen}/>
                </Drawer>
            </Hidden>
            <Hidden xsDown>
                <Drawer
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    variant="persistent"
                    open={!open}
                >
                   <SideNavigation/>
                </Drawer>
            </Hidden>
        </nav>
    );
}
