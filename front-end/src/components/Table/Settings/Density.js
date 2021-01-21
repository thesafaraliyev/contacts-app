import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, ButtonGroup} from '@material-ui/core';

import comfortable from '../../../../public/assets/images/comfortable.png'
import compact from '../../../../public/assets/images/compact.png'


const useStyles = makeStyles((theme) => ({
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 0,
    },
    buttonGroup: {
        paddingTop: theme.spacing(2),
    },
    media: {
        border: `1px solid ${theme.palette.divider}`,
        borderTopLeftRadius: theme.spacing(0.5),
        borderTopRightRadius: theme.spacing(0.5),
        height: '100%',
        maxWidth: '100%',
        width: '100%',
        verticalAlign: 'bottom',
    },
    imgContainer: {
        padding: '7% 7% 0 7%',
        backgroundColor: theme.palette.background.default,
    },
    button: {
        textTransform: 'none',
    },
}));

export default function Density({open, setOpen, dense, setDense}) {
    const classes = useStyles()
    const [imgSrc, setImgSrc] = React.useState(dense ? compact : comfortable);
    const [value, setValue] = React.useState(dense ? 1 : 0);


    const handleClose = () => {
        setOpen(false);
        setDense(value);
        localStorage.setItem('densitySetting', JSON.stringify(value))
    };

    const handleChange = type => {
        setValue(type);
        setImgSrc(type ? compact : comfortable);
    };

    return (
        <Dialog
            open={open}
            fullWidth
            onClose={handleClose}
            className={classes.root}
        >
            <DialogTitle>{'Display density'}</DialogTitle>

            <DialogContent className={classes.content}>
                <div className={classes.imgContainer}>
                    <img src={imgSrc} alt={`Density ${value}`} className={classes.media}/>
                </div>
                <ButtonGroup color='default' className={classes.buttonGroup} disableRipple>
                    <Button
                        className={classes.button}
                        variant={`${value === 0 ? 'contained' : 'outlined'}`}
                        onClick={() => handleChange(0)}>
                        Comfortable
                    </Button>
                    <Button
                        className={classes.button}
                        variant={`${value === 1 ? 'contained' : 'outlined'}`}
                        onClick={() => handleChange(1)}>
                        Compact
                    </Button>
                </ButtonGroup>
            </DialogContent>

            <DialogActions>
                <Button onClick={handleClose} color='default' autoFocus >Done</Button>
            </DialogActions>
        </Dialog>
    );
}
