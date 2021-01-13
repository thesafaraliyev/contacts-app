import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import {Table} from '@material-ui/core';

import Head from './Head'
import Body from './Body'


function createData(name, email, phoneNumber, carbs, protein) {
    return {name, email, phoneNumber, carbs, protein};
}

const rows = [
    createData('Elshan Safaraliyev', 'elshansafaraliyev@gmail.com', '+994705326840', 'Turizm.az', []),
    createData('Shahin Safaraliyev', 'sahinsafaraliyev@gmail.com', '+994705326841', 'Turizm.az', []),
    createData('Donut', 452, 25.0, 51, 4.9),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Honeycomb', 408, 3.2, 87, 6.5),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Jelly Bean', 375, 0.0, 94, 0.0),
    createData('KitKat', 518, 26.0, 65, 7.0),
    createData('Lollipop', 392, 0.2, 98, 0.0),
    createData('Marshmallow', 318, 0, 81, 2.0),
    createData('Nougat', 360, 19.0, 9, 37.0),
];


const useStyles = makeStyles((theme) => ({
}));

export default function ContactsTable() {
    // const classes = useStyles();
    const [selected, setSelected] = React.useState([]);
    const [dense, setDense] = React.useState(false);


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
            />
            <Body
                rows={rows}
                handleRowClick={handleRowClick}
                selected={selected}
            />
        </Table>
    );
}
