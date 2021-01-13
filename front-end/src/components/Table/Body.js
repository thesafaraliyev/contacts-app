import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import {TableBody, TableRow, TableCell} from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';



const useStyles = makeStyles((theme) => ({
    rowRoot: {
        '& $rowSelected, &$rowSelected:hover': {
            backgroundColor: theme.palette.action.selected,
        },
    },
    rowSelected: {
        backgroundColor: theme.palette.action.selected,
    },
    cell: {

    }
}));

export default function Body({rows, selected, handleRowClick}) {
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
                        classes={{root: classes.rowRoot, selected: classes.rowSelected}}
                    >
                        <TableCell padding="checkbox" >
                            <Checkbox
                                onClick={(event) => handleRowClick(event, row.name)}
                                checked={isItemSelected}
                                color='default'
                                inputProps={{'aria-labelledby': `contacts-table-checkbox-${index}`}}
                            />
                        </TableCell>
                        <TableCell className={classes.cell} style={{width: 230}}>{row.name}</TableCell>
                        <TableCell className={classes.cell} style={{width: 210}}>{row.email}</TableCell>
                        <TableCell className={classes.cell} style={{width: 210}}>{row.phoneNumber}</TableCell>
                        <TableCell className={classes.cell} style={{width: 210}}>{row.carbs}</TableCell>
                        <TableCell className={classes.cell} style={{width: 210}}>{row.protein}</TableCell>
                    </TableRow>
                );
            })}
        </TableBody>
    );
}
