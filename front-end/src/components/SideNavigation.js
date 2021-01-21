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
    item: {
        borderRadius: theme.shape.borderRadius,
        '&:hover': {
            backgroundColor: theme.palette.action.hover,
        },
        '&>div:first-child': {
            minWidth: 36,
        }
    },
}));

const labels = [{id: 1, slug: 'friends', name: 'Friends'}, {id: 2, slug: 'family', name: 'Family'}];


export default function SideNavigation({open, setOpen}) {
    const classes = useStyles();
    const [labelsOpen, setLabelsOpen] = React.useState(true);
    const [selected, setSelected] = React.useState(null);


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
                        className={classes.item}
                        selected={selected === 'Contacts'}
                        onClick={() => setSelected('Contacts')}
                    >
                        <ListItemIcon><PersonOutlineOutlinedIcon fontSize='small'/></ListItemIcon>
                        <ListItemText primary='Contacts'/>
                    </ListItem>

                    <ListItem
                        button
                        className={classes.item}
                        selected={selected === 'frequent'}
                        onClick={() => setSelected('frequent')}
                    >
                        <ListItemIcon><RestoreOutlinedIcon fontSize='small'/></ListItemIcon>
                        <ListItemText primary='Frequently created'/>
                    </ListItem>

                    <ListItem
                        button
                        className={classes.item}
                        selected={selected === 'suggestions'}
                        onClick={() => setSelected('suggestions')}
                    >
                        <ListItemIcon><AssistantOutlinedIcon fontSize='small'/></ListItemIcon>
                        <ListItemText primary='Merge & Fix'/>
                    </ListItem>

                </List>
                <Divider/>

                {/* Labels */}
                <List dense={true}>
                    <ListItem
                        button
                        className={classes.item}
                        onClick={() => {
                            setLabelsOpen(!labelsOpen);
                            setSelected('labels');
                        }}
                        selected={selected === 'labels'}>
                        <ListItemIcon>
                            {labelsOpen ? <ExpandLess fontSize='small'/> : <ExpandMore fontSize='small'/>}
                        </ListItemIcon>
                        <ListItemText primary='Labels'/>
                    </ListItem>

                    <Collapse in={labelsOpen} timeout='auto' unmountOnExit>
                        <List dense={true} component='div' disablePadding>
                            {labels.map(({id, name, slug}) => (
                                <ListItem
                                    button
                                    key={id}
                                    className={classes.item}
                                    selected={selected === slug}
                                    onClick={() => setSelected(slug)}
                                >
                                    <ListItemIcon><LabelOutlinedIcon fontSize='small'/></ListItemIcon>
                                    <ListItemText primary={name}/>
                                </ListItem>
                            ))}

                            <ListItem
                                button
                                className={classes.item}
                                selected={selected === 'create'}
                                onClick={() => setSelected('create')}
                            >
                                <ListItemIcon><AddOutlinedIcon fontSize='small'/></ListItemIcon>
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
                        className={classes.item}
                        selected={selected === 'import'}
                        onClick={() => setSelected('import')}
                    >
                        <ListItemIcon><CloudUploadOutlinedIcon fontSize='small'/></ListItemIcon>
                        <ListItemText primary='Import'/>
                    </ListItem>

                    <ListItem
                        button
                        className={classes.item}
                        selected={selected === 'export'}
                        onClick={() => setSelected('export')}
                    >
                        <ListItemIcon><CloudDownloadOutlinedIcon fontSize='small'/></ListItemIcon>
                        <ListItemText primary='Export'/>
                    </ListItem>

                    <ListItem
                        button
                        className={classes.item}
                        selected={selected === 'print'}
                        onClick={() => setSelected('print')}
                    >
                        <ListItemIcon><PrintOutlinedIcon fontSize='small'/></ListItemIcon>
                        <ListItemText primary='Print'/>
                    </ListItem>
                </List>

                <Divider/>

                {/* Archived and deleted contacts */}
                <List dense={true}>
                    <ListItem
                        button
                        className={classes.item}
                        selected={selected === 'other'}
                        onClick={() => setSelected('other')}
                    >
                        <ListItemIcon><ArchiveOutlinedIcon fontSize='small'/></ListItemIcon>
                        <ListItemText primary='Other'/>
                    </ListItem>

                    <ListItem
                        button
                        className={classes.item}
                        selected={selected === 'trash'}
                        onClick={() => setSelected('trash')}
                    >
                        <ListItemIcon><DeleteOutlineOutlinedIcon fontSize='small'/></ListItemIcon>
                        <ListItemText primary='Trash'/>
                    </ListItem>

                </List>

            </div>
        </React.Fragment>
    );
}