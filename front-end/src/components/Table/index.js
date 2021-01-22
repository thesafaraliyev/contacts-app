import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import {Table} from '@material-ui/core';

import THead from './THead'
import TBody from './TBody'


const useStyles = makeStyles((theme) => ({
    lgShow: {
        [theme.breakpoints.down('lg')]: {
            display: 'none',
        },
    },
    mdShow: {
        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
    },
    xsShow: {
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    },
}));


export default function ContactsTable({contacts}) {
    const classes = useStyles();
    const [selected, setSelected] = React.useState([]);
    const [dense, setDense] = React.useState(parseInt(localStorage.getItem('tableDensity') || 0, 10));


    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = contacts.map((n) => n.name);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleRowClick = name => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };


    return (
        <Table stickyHeader size={dense ? 'small' : 'medium'}>
            <THead
                styles={classes}
                dense={dense}
                setDense={setDense}
                rowCount={contacts.length}
                selectedCount={selected.length}
                selectAllRows={handleSelectAllClick}
            />
            <TBody
                rows={contacts}
                dense={dense}
                styles={classes}
                selected={selected}
                selectRow={handleRowClick}
            />
        </Table>
    );
}
