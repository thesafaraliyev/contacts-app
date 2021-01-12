import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import {Toolbar, List, Divider, ListItem, ListItemIcon, ListItemText, Collapse, Typography} from '@material-ui/core';

import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import CloudDownloadOutlinedIcon from '@material-ui/icons/CloudDownloadOutlined';
import CloudUploadOutlinedIcon from '@material-ui/icons/CloudUploadOutlined';
import PrintOutlinedIcon from '@material-ui/icons/PrintOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import RestoreOutlinedIcon from '@material-ui/icons/RestoreOutlined';
import AssistantOutlinedIcon from '@material-ui/icons/AssistantOutlined';


const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(0, 1),
        [theme.breakpoints.up('md')]: {
            '&:hover': {
                overflow: 'auto',
            },
            overflow: 'hidden',
            '&::-webkit-scrollbar': {
                width: 3,
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
    logo: {
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
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


export default function SideNavigation({open, setOpen}) {
    const classes = useStyles();
    const [labelsOpen, setLabelsOpen] = React.useState(true);
    const [selectedIndex, setSelectedIndex] = React.useState(null);

    const handleListItemClick = (event, index) => {
        // setOpen(!open)
        setSelectedIndex(index);
    };

    const handleLabelsClick = () => {
        setLabelsOpen(!labelsOpen);
        setSelectedIndex('labels');
    };


    return (
        <React.Fragment>
            <Toolbar variant='dense'>
                <Typography variant="h6" noWrap className={classes.logo}>
                    Contacts App
                </Typography>
            </Toolbar>
            <Divider className={classes.logo}/>

            <div className={classes.root}>
                <List dense={true}>
                    <ListItem
                        button
                        className={classes.listItem}
                        selected={selectedIndex === 'Contacts'}
                        onClick={(event) => handleListItemClick(event, 'Contacts')}
                    >
                        <ListItemIcon className={classes.listItemIcon}>
                            <PersonOutlineOutlinedIcon fontSize='small'/>
                        </ListItemIcon>
                        <ListItemText primary='Contacts'/>
                    </ListItem>

                    <ListItem
                        button
                        className={classes.listItem}
                        selected={selectedIndex === 'frequent'}
                        onClick={(event) => handleListItemClick(event, 'frequent')}
                    >
                        <ListItemIcon className={classes.listItemIcon}>
                            <RestoreOutlinedIcon fontSize='small'/>
                        </ListItemIcon>
                        <ListItemText primary='Frequently created'/>
                    </ListItem>

                    <ListItem
                        button
                        className={classes.listItem}
                        selected={selectedIndex === 'suggestions'}
                        onClick={(event) => handleListItemClick(event, 'suggestions')}
                    >
                        <ListItemIcon className={classes.listItemIcon}>
                            <AssistantOutlinedIcon fontSize='small'/>
                        </ListItemIcon>
                        <ListItemText primary='Merge & Fix'/>
                    </ListItem>

                </List>
                <Divider/>

                {/* Labels */}
                <List dense={true}>
                    <ListItem
                        button
                        className={classes.listItem}
                        onClick={handleLabelsClick}
                        selected={selectedIndex === 'labels'}>
                        <ListItemIcon className={classes.listItemIcon}>
                            {labelsOpen ? <ExpandLess fontSize='small'/> : <ExpandMore fontSize='small'/>}
                        </ListItemIcon>
                        <ListItemText primary='Labels'/>
                    </ListItem>

                    <Collapse in={labelsOpen} timeout='auto' unmountOnExit>
                        <List dense={true} component='div' disablePadding>
                            <ListItem
                                button
                                className={classes.listItem}
                                selected={selectedIndex === 'awesome label'}
                                onClick={(event) => handleListItemClick(event, 'awesome label')}
                            >
                                <ListItemIcon className={classes.listItemIcon}>
                                    <LabelOutlinedIcon fontSize='small'/>
                                </ListItemIcon>
                                <ListItemText primary='Awesome label'/>
                            </ListItem>

                            <ListItem
                                button
                                className={classes.listItem}
                                selected={selectedIndex === 'create'}
                                onClick={(event) => handleListItemClick(event, 'create')}
                            >
                                <ListItemIcon className={classes.listItemIcon}>
                                    <AddOutlinedIcon fontSize='small'/>
                                </ListItemIcon>
                                <ListItemText primary='Create label'/>
                            </ListItem>
                        </List>
                    </Collapse>
                </List>

                <Divider/>

                {/* Import & export */}
                <List dense={true}>
                    <ListItem
                        button
                        className={classes.listItem}
                        selected={selectedIndex === 'import'}
                        onClick={(event) => handleListItemClick(event, 'import')}
                    >
                        <ListItemIcon className={classes.listItemIcon}>
                            <CloudUploadOutlinedIcon fontSize='small'/>
                        </ListItemIcon>
                        <ListItemText primary='Import'/>
                    </ListItem>

                    <ListItem
                        button
                        className={classes.listItem}
                        selected={selectedIndex === 'export'}
                        onClick={(event) => handleListItemClick(event, 'export')}
                    >
                        <ListItemIcon className={classes.listItemIcon}>
                            <CloudDownloadOutlinedIcon fontSize='small'/>
                        </ListItemIcon>
                        <ListItemText primary='Export'/>
                    </ListItem>

                    <ListItem
                        button
                        className={classes.listItem}
                        selected={selectedIndex === 'print'}
                        onClick={(event) => handleListItemClick(event, 'print')}
                    >
                        <ListItemIcon className={classes.listItemIcon}>
                            <PrintOutlinedIcon fontSize='small'/>
                        </ListItemIcon>
                        <ListItemText primary='Print'/>
                    </ListItem>
                </List>

                <Divider/>

                {/* Archive and deleted contacts */}
                <List dense={true}>
                    <ListItem
                        button
                        className={classes.listItem}
                        selected={selectedIndex === 'other'}
                        onClick={(event) => handleListItemClick(event, 'other')}
                    >
                        <ListItemIcon className={classes.listItemIcon}>
                            <ArchiveOutlinedIcon fontSize='small'/>
                        </ListItemIcon>
                        <ListItemText primary='Other'/>
                    </ListItem>

                    <ListItem
                        button
                        className={classes.listItem}
                        selected={selectedIndex === 'trash'}
                        onClick={(event) => handleListItemClick(event, 'trash')}
                    >
                        <ListItemIcon className={classes.listItemIcon}>
                            <DeleteOutlineOutlinedIcon fontSize='small'/>
                        </ListItemIcon>
                        <ListItemText primary='Trash'/>
                    </ListItem>
                </List>

            </div>
        </React.Fragment>
    );
}
