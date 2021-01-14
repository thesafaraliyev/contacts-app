import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import {TableBody, TableRow, TableCell, Checkbox, IconButton} from '@material-ui/core';

import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';


const useStyles = makeStyles((theme) => ({
    row: {
        '&$rowSelected, &$rowSelected:hover': {
            backgroundColor: theme.palette.action.selected,
        },
        '&:hover $hidden': {
            visibility: 'visible'
        },
    },
    rowSelected: {
        backgroundColor: theme.palette.action.selected,
    },
    cell: {},
    actionTd: {
        minWidth: theme.spacing(18)
    },
    hidden: {
        visibility: 'hidden'
    },
    visible: {
        visibility: 'visible'
    },
    marginLeft: {
        marginLeft: theme.spacing(2),
    }
}));

export default function Body({rows, selected, handleRowClick, dense}) {
    const classes = useStyles();
    const isSelected = (name) => selected.indexOf(name) !== -1;

    return (
        <TableBody>
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
                                className={`${classes.checkbox} ${dense ? '' : classes.hidden}`}
                                onClick={(event) => handleRowClick(event, row.name)}
                                checked={isItemSelected}
                                color='default'
                                classes={{checked: classes.visible}}
                                inputProps={{'aria-labelledby': `contacts-table-checkbox-${index}`}}
                            />
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
