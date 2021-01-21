import React from 'react';

import {
    Dialog,
    DialogActions,
    DialogContent,
    Typography,
    DialogTitle,
    List,
    ListItem,
    ListItemText,
    MenuItem,
    // Menu,
    Select,
    FormControl,
    // IconButton,
    Button
} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    listNo: {
        marginRight: theme.spacing(2),
    },
    formControl: {
        width: 230,
        // margin: theme.spacing(1),
    },
    listItem: {
        // minHeight: 40,
    },
    select: {
        margin: 0
    },
    menu: {
        top: 250,
        left: 510,
        // paddingTop: 100
    },
}));


const reducer = (state, action) => {
    console.clear()
    // console.log(state)
    // console.log(action.changed)
    // console.log(action.selected)

    if ('change' === action.type) {
        const columns = state.columns.map(column => (
            (column === action.changed || column === action.selected) ? {
                ...column,
                shown: !column.shown,
                position: column === action.changed ? action.selected.position : action.changed.position,
            } : column
        ));

        columns.sort((a, b) => a.position - b.position);
        return {columns};
    }
};


/**
 * @deprecated
 *
 * @param open
 * @param setOpen
 * @param columnsDefault
 * @param setColumns
 * @returns {JSX.Element}
 * @constructor
 */
export default function ColumnOrder({open, setOpen, columnsDefault, setColumns}) {
    const classes = useStyles();
    const [{columns}, dispatch] = React.useReducer(reducer, {columns: columnsDefault});


    const handleClose = () => {
        setColumns(columns)
        setOpen(false)
    };


    const handleSelectChange = (selected, changed) => {
        dispatch({type: 'change', selected, changed});
    };


    return (
        <div>
            <Dialog
                maxWidth={'xs'}
                open={open}
            >
                <DialogTitle>{'Change column order'}</DialogTitle>

                <DialogContent>
                    <Typography variant='body2'>
                        Choose columns to show and drag to change order. Small screens may not display all columns.
                    </Typography>


                    <List component="nav" dense>
                        <ListItem disableGutters className={classes.listItem}>
                            <div className={classes.listNo}>1.</div>
                            <ListItemText primary={'Name'}/>
                        </ListItem>

                        {columns.map((column) => {

                            return column.shown && (
                                <ListItem
                                    key={column.key}
                                    disableGutters
                                    classes={{secondaryAction: classes.secondaryAction}}
                                    className={classes.listItem}
                                >
                                    <div className={classes.listNo}>{column.position}.</div>
                                    <FormControl className={classes.formControl}>
                                        <Select
                                            MenuProps={{
                                                anchorOrigin: {
                                                    vertical: "bottom",
                                                    horizontal: "left"
                                                },
                                                transformOrigin: {
                                                    vertical: "top",
                                                    horizontal: "left"
                                                },
                                                getContentAnchorEl: null
                                            }}
                                            value={column.key}
                                            onChange={event => handleSelectChange(event.target.value, column)}>

                                            <MenuItem value={column.key}>{column.name}</MenuItem>

                                            {columns.map((column) => (!column.shown &&
                                                <MenuItem key={column.key} value={column}>{column.name}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </ListItem>
                            )
                        })}
                    </List>

                </DialogContent>

                <DialogActions>
                    <Button onClick={() => {
                        setOpen(false)
                    }}>
                        Cancel
                    </Button>
                    <Button onClick={() => {
                        setColumns(columns)
                        setOpen(false)
                    }} autoFocus>Done</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
