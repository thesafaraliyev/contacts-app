import React from 'react';

import {makeStyles, withStyles} from '@material-ui/core/styles';
import {TableHead, TableRow, TableCell, Checkbox, IconButton, Menu, MenuItem,} from '@material-ui/core';

import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import LabelOutlinedIcon from "@material-ui/icons/LabelOutlined";
import MergeTypeOutlinedIcon from '@material-ui/icons/MergeTypeOutlined';

import DensitySetting from './Settings/Density';

const useStyles = makeStyles((theme) => ({
    actionsCell: {
        padding: theme.spacing(0.75, 0.25),
    },
    actions: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
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
    const {onSelectAllClick, numSelected, rowCount, setDense, dense, styles} = props;

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [densityDialogOpen, setDensityDialogOpen] = React.useState(false);

    const openTableSettingsMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const openDensityDialog = () => {
        setDensityDialogOpen(true);
        setAnchorEl(null);
    };


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
                        <Cell colSpan={6} size='medium' padding='checkbox' className={classes.actionsCell}>
                            <div className={classes.actions}>
                                <span>
                                    <IconButton>
                                        <LabelOutlinedIcon fontSize='small'/>
                                    </IconButton>

                                    {numSelected < 51 && <IconButton>
                                        <MergeTypeOutlinedIcon fontSize='small'/>
                                    </IconButton>}

                                    <IconButton>
                                        <MoreVertOutlinedIcon fontSize='small'/>
                                    </IconButton>
                                </span>
                                <span>{numSelected} selected</span>
                            </div>

                        </Cell>

                    </React.Fragment>
                ) : (
                    // Table settings
                    <React.Fragment>

                        <Cell size='medium'>Name</Cell>
                        <Cell size='medium' className={styles.xsShow}>Email</Cell>
                        <Cell size='medium' className={styles.mdShow}>Phone number</Cell>
                        <Cell size='medium' className={styles.mdShow}>Address</Cell>
                        <Cell size='medium' className={styles.lgShow}>Birthday</Cell>

                        {/* Table settings */}
                        <Cell size='medium' align='right' padding='checkbox'>
                            <IconButton size='medium' onClick={openTableSettingsMenu}>
                                <MoreVertOutlinedIcon fontSize='small'/>
                            </IconButton>

                            <Menu
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={() => setAnchorEl(null)}
                            >
                                <MenuItem onClick={openDensityDialog}>Table density</MenuItem>

                                <DensitySetting
                                    open={densityDialogOpen}
                                    setOpen={setDensityDialogOpen}
                                    dense={dense}
                                    setDense={setDense}
                                />
                            </Menu>
                        </Cell>

                    </React.Fragment>
                )}

            </TableRow>
        </TableHead>
    );
}
