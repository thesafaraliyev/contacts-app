import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import {TableBody, TableRow, TableCell, Checkbox, Avatar, IconButton} from '@material-ui/core';

import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import SectionHeader from "./SectionHeader";


const useStyles = makeStyles((theme) => ({
    row: {
        '&$rowSelected, &$rowSelected:hover': {
            backgroundColor: theme.palette.action.selected,
        },
        '&:hover $hidden': {
            display: 'inline-flex',
        },
        '&:hover $avatar': {
            display: 'none',
        },
    },
    rowSelected: {
        backgroundColor: theme.palette.action.selected,
    },
    cell: {
        cursor: 'pointer',
    },
    actionTd: {
        minWidth: theme.spacing(18)
    },
    hidden: {
        display: 'none',
    },
    visible: {
        display: 'inline-flex'
    },
    marginLeft: {
        marginLeft: theme.spacing(2),
    },
    avatar: {
        width: theme.spacing(4),
        height: theme.spacing(4),
        marginLeft: theme.spacing(0.5),
    },
}));

export default function Body({rows, selected, handleRowClick, dense}) {
    const classes = useStyles();
    const isSelected = (name) => selected.indexOf(name) !== -1;

    return (
        <TableBody>

            <SectionHeader header={'Contacts'} rowCount={rows.length}/>

            {rows.map((row, index) => {
                const isItemSelected = isSelected(row.name);

                return (
                    <TableRow
                        hover
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.name}
                        selected={isItemSelected}
                        classes={{root: classes.row, selected: classes.rowSelected}}
                    >
                        <TableCell padding='checkbox'>
                            <Checkbox
                                onClick={(event) => handleRowClick(event, row.name)}
                                checked={isItemSelected}
                                color='default'
                                classes={{checked: classes.visible}}
                                className={`${dense ? '' : classes.hidden}`}
                            />
                            {!dense && <Avatar
                                variant='rounded'
                                className={`${classes.avatar} ${isItemSelected ? classes.hidden : classes.visible}`}
                                alt="Remy Sharp"
                                src="/static/images/avatar/1.jpg"/>}
                        </TableCell>
                        <TableCell className={classes.cell} style={{width: 230}}>{row.name}</TableCell>
                        <TableCell className={classes.cell} style={{width: 210}}>{row.email}</TableCell>
                        <TableCell className={classes.cell} style={{width: 210}}>{row.phoneNumber}</TableCell>
                        <TableCell className={classes.cell} style={{width: 210}}>{row.carbs}</TableCell>

                        <TableCell className={classes.actionTd} align='right' padding='checkbox'>
                            <IconButton className={`${classes.hidden} ${dense ? classes.marginLeft : ''}`}>
                                <StarBorderOutlinedIcon fontSize='small'/>
                            </IconButton>
                            <IconButton className={`${classes.hidden} ${dense ? classes.marginLeft : ''}`}>
                                <EditOutlinedIcon fontSize='small'/>
                            </IconButton>
                            <IconButton className={`${classes.hidden} ${dense ? classes.marginLeft : ''}`}>
                                <MoreVertOutlinedIcon fontSize='small'/>
                            </IconButton>
                        </TableCell>
                    </TableRow>
                );
            })}
        </TableBody>
    );
}
