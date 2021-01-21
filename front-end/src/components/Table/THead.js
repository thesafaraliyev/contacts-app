import React from 'react';
import PropTypes from 'prop-types';

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


export default function THead({selectAllRows, selectedCount, rowCount, setDense, dense, styles}) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [densityDialogOpen, setDensityDialogOpen] = React.useState(false);


    return (
        <TableHead>
            <TableRow>

                <Cell padding='checkbox'>
                    <Checkbox
                        indeterminate={selectedCount > 0 && selectedCount < rowCount}
                        checked={rowCount > 0 && selectedCount === rowCount}
                        onChange={selectAllRows}
                        color='default'
                        inputProps={{'aria-label': 'select all rows'}}
                    />
                </Cell>

                {/* actions for selected contacts */}
                {selectedCount > 0 ? (
                    <React.Fragment>
                        <Cell colSpan={6} size='medium' padding='checkbox' className={classes.actionsCell}>
                            <div className={classes.actions}>
                                <span>
                                    <IconButton>
                                        <LabelOutlinedIcon fontSize='small'/>
                                    </IconButton>

                                    {selectedCount > 1 && selectedCount < 51 && <IconButton>
                                        <MergeTypeOutlinedIcon fontSize='small'/>
                                    </IconButton>}

                                    <IconButton>
                                        <MoreVertOutlinedIcon fontSize='small'/>
                                    </IconButton>
                                </span>
                                <span>{selectedCount} selected</span>
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
                            <IconButton size='medium' onClick={event => setAnchorEl(event.currentTarget)}>
                                <MoreVertOutlinedIcon fontSize='small'/>
                            </IconButton>

                            <Menu
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={() => setAnchorEl(null)}
                            >
                                <MenuItem onClick={() => {
                                    setDensityDialogOpen(true);
                                    setAnchorEl(null);
                                }}>
                                    Table density
                                </MenuItem>

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


THead.propTypes = {
    dense: PropTypes.number.isRequired,
    setDense: PropTypes.func.isRequired,
    selectAllRows: PropTypes.func.isRequired,
    rowCount: PropTypes.number.isRequired,
    selectedCount: PropTypes.number.isRequired,
    styles: PropTypes.object.isRequired,
};
