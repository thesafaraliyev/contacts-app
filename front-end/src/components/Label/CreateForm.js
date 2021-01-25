import React from 'react';
import PropTypes from 'prop-types';

import {
    Button,
    DialogTitle,
    TextField,
    Dialog,
    DialogContent,
    DialogActions,
    Grow,
    useMediaQuery
} from '@material-ui/core';
import {useTheme} from "@material-ui/core/styles";


const CreateForm = ({open, setOpen, onSubmit, title, editObj}) => {
    const [error, setError] = React.useState('');
    const textInput = React.useRef(null);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));


    const handleClose = () => setOpen(false);


    const handleSubmit = () => {
        const value = textInput.current.value.trim();

        if (!value) {
            setError('No name specified.');
            return false;
        }

        // setError('Label name already exists');
        setError('');

        if (editObj.id) {
            console.log(`api request, edit label. id: ${editObj.id}, name: ${value}`)
        } else {
            console.log(`api request, create label. name: ${value}`)
        }

        onSubmit({id: 2, slug: value, name: value, contactsCount: 0});
        handleClose();
    }


    return (
        <Dialog
            fullWidth
            open={open}
            maxWidth='xs'
            onClose={handleClose}
            fullScreen={fullScreen}
            TransitionComponent={Grow}
        >
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin='none'
                    label='Label name'
                    type='text'
                    fullWidth
                    size='small'
                    color='secondary'
                    inputRef={textInput}
                    defaultValue={editObj.name}
                    error={Boolean(error)}
                    helperText={error}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSubmit}>Save</Button>
            </DialogActions>
        </Dialog>
    );
}

export default CreateForm;


CreateForm.propTypes = {
    editObj: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
};
