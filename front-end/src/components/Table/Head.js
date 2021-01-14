import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import {TableHead, TableRow, TableCell, Checkbox, IconButton} from '@material-ui/core';

import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import LabelOutlinedIcon from "@material-ui/icons/LabelOutlined";
import MergeTypeOutlinedIcon from '@material-ui/icons/MergeTypeOutlined';


const headCells = [
    {id: 'name', isShown: true, label: 'Name'},
    {id: 'email', isShown: true, label: 'Email'},
    {id: 'phoneNumber', isShown: true, label: 'Phone number'},
    {id: 'jobTitleAndCompany', isShown: true, label: 'Job title & company'},
    {id: 'labels', isShown: false, label: 'Labels'},
    {id: 'address', isShown: false, label: 'Address'},
    {id: 'birthday', isShown: false, label: 'Birthday'},
];

const useStyles = makeStyles((theme) => ({
    cell: {
        top: theme.spacing(6),
    },
    actions: {
        paddingTop: theme.spacing(0.75),
        paddingBottom: theme.spacing(0.75),
    }
}));


export default function Head(props) {
    const classes = useStyles();
    const {onSelectAllClick, numSelected, rowCount} = props;

    return (
        <TableHead>
            <TableRow>

                <TableCell className={classes.cell} padding='checkbox'>
                    <Checkbox
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        color='default'
                        inputProps={{'aria-label': 'select all rows'}}
                    />
                </TableCell>

                {/* actions for selected contacts */}
                {numSelected > 0 ? (
                    <React.Fragment>
                        <TableCell
                            size='medium'
                            colSpan={4}
                            padding='checkbox'
                            className={`${classes.actions} ${classes.cell}`}
                        >

                            <IconButton>
                                <LabelOutlinedIcon fontSize='small'/>
                            </IconButton>

                            {numSelected < 51 && <IconButton>
                                <MergeTypeOutlinedIcon fontSize='small'/>
                            </IconButton>}

                            <IconButton>
                                <MoreVertOutlinedIcon fontSize='small'/>
                            </IconButton>

                        </TableCell>

                        <TableCell className={classes.cell} align='right'>
                            {numSelected} selected
                        </TableCell>

                    </React.Fragment>
                ) : (
                    // actions for table
                    <React.Fragment>

                        {headCells.map(({id, label, isShown}) => (
                            isShown ?
                                <TableCell size='medium' className={classes.cell} key={id}>{label}</TableCell> : null
                        ))}

                        <TableCell size='medium' className={classes.cell} align='right' padding='checkbox'>
                            <IconButton size='medium'>
                                <MoreVertOutlinedIcon fontSize='small'/>
                            </IconButton>
                        </TableCell>

                    </React.Fragment>
                )}

            </TableRow>
        </TableHead>
    );
}
