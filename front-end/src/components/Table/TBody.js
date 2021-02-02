import React from 'react';
import PropTypes from 'prop-types';

import {makeStyles, withStyles} from '@material-ui/core/styles';
import {TableBody, TableRow, TableCell, Checkbox, Avatar, IconButton} from '@material-ui/core';

import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

import SectionHeader from './SectionHeader';
import DetailsDialog from '../Contact/DetailsDialog';


const useStyles = makeStyles((theme) => ({
    row: {
        '&$rowSelected, &$rowSelected:hover': {
            backgroundColor: theme.palette.action.hover,
        },
        '&:hover $hidden': {
            display: 'inline-flex',
        },
        '&:hover $avatar': {
            display: 'none',
        },
    },
    rowSelected: {
        backgroundColor: theme.palette.action.hover,
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
    nameCell: {
        maxWidth: theme.spacing(22)
    },
    emailCell: {
        maxWidth: theme.spacing(22)
    },
    phoneNumberCell: {
        maxWidth: theme.spacing(18)
    },
    addressCell: {
        maxWidth: theme.spacing(22)
    },
    birthdayCell: {
        maxWidth: theme.spacing(18)
    },
    actionsCell: {
        minWidth: theme.spacing(18)
    },
}));


const Cell = withStyles((theme) => ({
    body: {
        cursor: 'pointer',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
}))(TableCell);


export default function TBody({rows, selected, selectRow, dense, styles}) {
    const classes = useStyles();
    const [selectedId, setSelectedId] = React.useState(null);
    const [detailsOpen, setDetailsOpen] = React.useState(false);

    const isSelected = name => selected.indexOf(name) !== -1;


    const handleCheckboxCheck = event => {
        event.stopPropagation();
        selectRow(event.target.value);
    }


    const handleRowClick = id => {
        setSelectedId(id);
        setDetailsOpen(true);
    }

    return (
        <TableBody>
            <SectionHeader header={'Contacts'} rowCount={rows.length}/>

            {rows.map(row => {
                const isItemSelected = isSelected(row.name);

                return (
                    <TableRow
                        onClick={() => handleRowClick(row.id)}
                        hover
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.name}
                        selected={isItemSelected}
                        classes={{root: classes.row, selected: classes.rowSelected}}
                    >
                        <TableCell padding='checkbox'>
                            <Checkbox
                                value={row.name}
                                onClick={handleCheckboxCheck}
                                checked={isItemSelected}
                                classes={{checked: classes.visible}}
                                className={`${dense ? '' : classes.hidden}`}
                            />
                            {!dense && <Avatar
                                variant='rounded'
                                className={`${classes.avatar} ${isItemSelected ? classes.hidden : classes.visible}`}
                                alt="Remy Sharp"
                                src="/static/images/avatar/1.jpg"/>}
                        </TableCell>
                        <Cell className={classes.nameCell}>{row.name}</Cell>
                        <Cell className={`${classes.emailCell} ${styles.xsShow}`}>{row.email}</Cell>
                        <Cell className={`${classes.phoneNumberCell} ${styles.mdShow}`}>{row.phoneNumber}</Cell>
                        <Cell className={`${classes.addressCell} ${styles.mdShow}`}>{row.address}</Cell>
                        <Cell className={`${classes.birthdayCell} ${styles.lgShow}`}>{row.birthday}</Cell>

                        <TableCell className={classes.actionsCell} align='right' padding='checkbox'>
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

            <DetailsDialog id={selectedId} open={detailsOpen} setOpen={setDetailsOpen}/>
        </TableBody>
    );
}


TBody.propTypes = {
    rows: PropTypes.array.isRequired,
    dense: PropTypes.number.isRequired,
    styles: PropTypes.object.isRequired,
    selected: PropTypes.array.isRequired,
    selectRow: PropTypes.func.isRequired,
};