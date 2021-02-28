import React from 'react';

import {MenuItem, Menu} from '@material-ui/core';


export default function Options({anchorEl, setAnchorEl}) {
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            getContentAnchorEl={null}
            anchorOrigin={{vertical: 'center', horizontal: 'center'}}
            transformOrigin={{vertical: "top", horizontal: "right"}}
        >
            <MenuItem onClick={handleClose}>Print</MenuItem>
            <MenuItem onClick={handleClose}>Export</MenuItem>
            <MenuItem onClick={handleClose}>Hide from contacts</MenuItem>
            <MenuItem onClick={handleClose}>Delete</MenuItem>
        </Menu>
    );
}
