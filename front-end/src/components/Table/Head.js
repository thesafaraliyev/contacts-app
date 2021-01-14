import React from 'react';

import {makeStyles, withStyles} from '@material-ui/core/styles';
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
    actions: {
        padding: theme.spacing(0.75, 0.25),
    }
}));

const Cell = withStyles((theme) => ({
    head: {
        top: theme.spacing(6),
        color: theme.palette.text.secondary,
    },
}))(TableCell);


export default function Head(props) {
    const classes = useStyles();
    const {onSelectAllClick, numSelected, rowCount} = props;

    return (
        <TableHead>
            <TableRow>

                <Cell padding='checkbox'>
                    <Checkbox
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        color='default'
                        inputProps={{'aria-label': 'select all rows'}}
                    />
                </Cell>

                {/* actions for selected contacts */}
                {numSelected > 0 ? (
                    <React.Fragment>
                        <Cell colSpan={4} size='medium' padding='checkbox' className={classes.actions}>

                            <IconButton>
                                <LabelOutlinedIcon fontSize='small'/>
                            </IconButton>

                            {numSelected < 51 && <IconButton>
                                <MergeTypeOutlinedIcon fontSize='small'/>
                            </IconButton>}

                            <IconButton>
                                <MoreVertOutlinedIcon fontSize='small'/>
                            </IconButton>

                        </Cell>

                        <Cell align='right'>{numSelected} selected</Cell>

                    </React.Fragment>
                ) : (
                    // actions for table
                    <React.Fragment>

                        {headCells.map(({id, label, isShown}) => (
                            isShown ? <Cell size='medium' key={id}>{label}</Cell> : null
                        ))}

                        <Cell size='medium' align='right' padding='checkbox'>
                            <IconButton size='medium'>
                                <MoreVertOutlinedIcon fontSize='small'/>
                            </IconButton>
                        </Cell>

                    </React.Fragment>
                )}

            </TableRow>
        </TableHead>
    );
}
