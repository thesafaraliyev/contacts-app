import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import {
    Toolbar,
    List,
    Divider,
    ListItem,
    ListItemIcon,
    ListItemText,
    Collapse,
    Typography,
    ListItemSecondaryAction,
    IconButton
} from '@material-ui/core';

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
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';

import LabelCreateForm from './Label/CreateForm';
import DeleteDialog from './Label/DeleteDialog';


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
    toolbar: {
        paddingLeft: theme.spacing(3)
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
            minWidth: theme.spacing(4.5),
        }
    },
    itemText: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    secondaryAction: {
        paddingRight: theme.spacing(10),
    },
    deleteBtn: {
        marginLeft: theme.spacing(0.5),
    },
}));

const labelInitial = {id: 0, name: ''};
const labelsInitial = [{id: 1, slug: 'friends', name: 'Friends', contactsCount: 0}]


export default function SideNavigation() {
    const classes = useStyles();

    const [labelsOpen, setLabelsOpen] = React.useState(true);
    const [selected, setSelected] = React.useState(null);

    const [labels, setLabels] = React.useState(labelsInitial);
    const [formTitle, setFormTitle] = React.useState('Create label');
    const [editObj, setEditObj] = React.useState(labelInitial);
    const [formOpen, setFormOpen] = React.useState(false);

    const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false);


    const handleAddEditSubmit = newLabel => {
        if (editObj.id) {
            setLabels(labels.map(label => newLabel.id === label.id ? newLabel : label))
        } else {
            setLabels([...labels, newLabel])
        }
    }


    const handleDeleteSubmit = ({id, type}) => {
        setLabels(labels.filter(label => label.id !== id));
        console.log(`api request, delete label. id: ${id}, type: ${type}`)
    }


    const handleCreateLabelClick = () => {
        setSelected('create');
        setEditObj(labelInitial)
        setFormTitle('Create label');
        setFormOpen(true);
    }


    const handleRenameLabelClick = (id, name) => {
        setEditObj({id, name})
        setFormTitle('Rename label');
        setFormOpen(true);
    }


    const handleDeleteClick = id => {
        const label = labels.find(label => id === label.id);

        if (label.contactsCount) {
            setEditObj(label);
            setDeleteDialogOpen(true);
            return false;
        }

        handleDeleteSubmit({id, type: 1});
    }


    return (
        <React.Fragment>

            <LabelCreateForm
                open={formOpen}
                setOpen={setFormOpen}
                onSubmit={handleAddEditSubmit}
                title={formTitle}
                editObj={editObj}
            />

            <DeleteDialog
                label={editObj}
                open={deleteDialogOpen}
                setOpen={setDeleteDialogOpen}
                onSubmit={handleDeleteSubmit}
            />

            <Toolbar variant='dense' className={classes.toolbar}>
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
                            {labels.map(({id, slug, name}) => (
                                <ListItem
                                    button
                                    key={slug}
                                    className={classes.item}
                                    classes={{secondaryAction: classes.secondaryAction}}
                                    selected={selected === slug}
                                    onClick={() => setSelected(slug)}
                                >
                                    <ListItemIcon><LabelOutlinedIcon fontSize='small'/></ListItemIcon>
                                    <ListItemText className={classes.itemText} primary={name}/>

                                    {slug !== 'friends' && <ListItemSecondaryAction>
                                        <IconButton
                                            edge='start'
                                            size='small'
                                            onClick={() => handleRenameLabelClick(id, name)}
                                        >
                                            <EditOutlinedIcon fontSize='small'/>
                                        </IconButton>
                                        <IconButton
                                            edge='end'
                                            size='small'
                                            className={classes.deleteBtn}
                                            onClick={() => handleDeleteClick(id)}
                                        >
                                            <ClearRoundedIcon fontSize='small'/>
                                        </IconButton>
                                    </ListItemSecondaryAction>}

                                </ListItem>
                            ))}

                            <ListItem
                                button
                                className={classes.item}
                                selected={selected === 'create'}
                                onClick={handleCreateLabelClick}
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