import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import {Table} from '@material-ui/core';

import Head from './Head'
import Body from './Body'


function createData(name, email, phoneNumber, address, birthday) {
    return {name, email, phoneNumber, address, birthday};
}

const rows = [
];


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

export default function ContactsTable() {
    const classes = useStyles();
    const [selected, setSelected] = React.useState([]);
    const [dense, setDense] = React.useState(Boolean(parseInt(localStorage.getItem('densitySetting'), 10)));


    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = rows.map((n) => n.name);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleRowClick = (event, name) => {
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
            <Head
                numSelected={selected.length}
                onSelectAllClick={handleSelectAllClick}
                rowCount={rows.length}
                dense={dense}
                setDense={setDense}
                styles={classes}
            />
            <Body
                rows={rows}
                handleRowClick={handleRowClick}
                selected={selected}
                dense={dense}
                styles={classes}
            />
        </Table>
    );
}
