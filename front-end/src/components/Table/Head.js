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
    selectedCount: {
        textAlign: 'right',
    },
    cell: {
        top: theme.spacing(6),
    },
}));


export default function Head(props) {
    const classes = useStyles();
    const {onSelectAllClick, numSelected, rowCount} = props;

    return (
        <TableHead>
            <TableRow>
                <TableCell className={classes.cell} padding="checkbox" >
                    <Checkbox
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        color='default'
                        inputProps={{'aria-label': 'select all rows'}}
                    />
                </TableCell>

                {numSelected > 0 ? (
                    <React.Fragment>
                        <TableCell className={classes.cell} colSpan={4} padding="checkbox" size='medium'>

                            <IconButton >
                                <LabelOutlinedIcon />
                            </IconButton>

                            {numSelected < 51 && <IconButton >
                                <MergeTypeOutlinedIcon/>
                            </IconButton>}

                            <IconButton>
                                <MoreVertOutlinedIcon/>
                            </IconButton>

                        </TableCell>

                        <TableCell className={`${classes.selectedCount} ${classes.cell}`}  size='medium'>
                            {numSelected} selected
                        </TableCell>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        {headCells.map(({id, label, isShown}) => (
                            isShown ? <TableCell className={classes.cell} key={id} size='medium'>{label}</TableCell> : null
                        ))}
                        <TableCell className={classes.cell} padding='none' align='right' size='medium'>
                            <IconButton  >
                                <MoreVertOutlinedIcon/>
                            </IconButton>
                        </TableCell>
                    </React.Fragment>
                )}


            </TableRow>
        </TableHead>
    );
}
