import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import {Toolbar, List, Divider, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';


const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('md')]: {
            '&:hover': {
                overflow: 'auto',
            },
            overflow: 'hidden',
            '&::-webkit-scrollbar': {
                width: 7,
            },
            '&::-webkit-scrollbar-track': {
                // background: theme.palette.action.hover,
            },
            '&::-webkit-scrollbar-thumb': {
                background: theme.palette.action.disabled,
            },
            '&::-webkit-scrollbar-thumb:hover': {
                background: theme.palette.action.active,
            }
        },
        [theme.breakpoints.down('md')]: {
            overflow: 'auto',
        }
    },
    listItem: {
        borderRadius: theme.shape.borderRadius,
        '&:hover': {
            backgroundColor: theme.palette.action.hover,
        },
    },
    listItemIcon: {
        minWidth: 36,
    },
}));


export default function SideNavigation() {
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = React.useState(null);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };


    return (
        <React.Fragment>
            <Toolbar variant='dense'/>
            <div className={classes.root}>
                <List dense={true}>
                    {['Contacts', 'Frequently contacted', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem
                            button
                            key={text}
                            className={classes.listItem}
                            selected={selectedIndex === index}
                            onClick={(event) => handleListItemClick(event, index)}
                        >
                            <ListItemIcon className={classes.listItemIcon}>{index % 2 === 0 ?
                                <PersonOutlineOutlinedIcon fontSize='small'/> :
                                <MailIcon fontSize='small'/>}</ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItem>
                    ))}
                </List>
                <Divider/>
            </div>
        </React.Fragment>
    );
}
