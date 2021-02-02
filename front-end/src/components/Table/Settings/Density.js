import React from 'react';

import {makeStyles, useTheme} from '@material-ui/core/styles';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    ButtonGroup,
    Grow,
    useMediaQuery
} from '@material-ui/core';

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

const Density = ({open, setOpen, dense, setDense}) => {
    const classes = useStyles()
    const [imgSrc, setImgSrc] = React.useState(dense ? compact : comfortable);
    const [value, setValue] = React.useState(dense);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));


    const handleClose = () => {
        setOpen(false);
        setDense(value);
        localStorage.setItem('tableDensity', JSON.stringify(value))
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
            fullScreen={fullScreen}
            className={classes.root}
            TransitionComponent={Grow}
        >
            <DialogTitle>{'Display density'}</DialogTitle>

            <DialogContent className={classes.content}>
                <div className={classes.imgContainer}>
                    <img src={imgSrc} alt={`Density ${value}`} className={classes.media}/>
                </div>
                <ButtonGroup className={classes.buttonGroup} disableElevation disableRipple size='small'>
                    <Button
                        className={classes.button}
                        variant={`${value === 0 ? 'contained' : ''}`}
                        onClick={() => handleChange(0)}>
                        Comfortable
                    </Button>
                    <Button
                        className={classes.button}
                        variant={`${value === 1 ? 'contained' : ''}`}
                        onClick={() => handleChange(1)}>
                        Compact
                    </Button>
                </ButtonGroup>
            </DialogContent>

            <DialogActions>
                <Button onClick={handleClose} color='default' autoFocus>Done</Button>
            </DialogActions>
        </Dialog>
    );
}

export default React.memo(Density);
