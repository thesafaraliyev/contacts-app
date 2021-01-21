import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import {TableRow, TableCell, Typography} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(0.25, 1),
    },
    text: {
        fontSize: 11,
        fontWeight: 'bold',
    }
}));


export default function SectionHeader({header, rowCount}) {
    const classes = useStyles();

    return (
        <TableRow>
            <TableCell colSpan={7} size='small' padding='default' classes={{sizeSmall: classes.root}}>
                <Typography variant="overline" display='block' color='textSecondary' className={classes.text}>
                    {header} ({rowCount})
                </Typography>
            </TableCell>
        </TableRow>
    );
}
