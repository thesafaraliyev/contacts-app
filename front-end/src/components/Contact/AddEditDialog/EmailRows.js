import React from 'react';

import {Grid, TextField} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

import MailOutlinedIcon from '@material-ui/icons/MailOutlined';

import Header from './Row/Header';
import Actions from './Row/Actions';
import Container from './Row/';


const Fields = ({data, index, setValue}) => {
    return (
        <React.Fragment>
            <Grid item sm={7} xs={12}>
                <TextField
                    fullWidth
                    color='secondary'
                    size='small'
                    variant='outlined'
                    label='Email'
                    value={data.email}
                    onChange={event => setValue(index, 'email', event.target.value)}/>
            </Grid>
            <Grid item sm={3} xs={12}>
                <Autocomplete
                    freeSolo
                    fullWidth
                    autoHighlight
                    autoComplete
                    clearOnEscape
                    size='small'
                    options={['Work', 'Home', 'School', 'Other']}
                    renderInput={(params) => (
                        <TextField color='secondary' variant='outlined' {...params} label='Label'/>
                    )}
                    value={data.label}
                    onInputChange={(event, value) => setValue(index, 'label', value)}
                />
            </Grid>
        </React.Fragment>
    )
}


const EmailRows = ({values, setValues}) => {
    const handleChange = (index, key, value) => {
        const temp = values['emails'];
        temp[index][key] = value
        setValues({...values, emails: temp})
    }

    const addRow = () => {
        setValues({...values, emails: [...values['emails'], {email: '', label: ''}]})
    };

    const removeRow = index => {
        setValues({...values, emails: values['emails'].filter((_, idx) => idx !== index)})
    }

    const addDisabled = values.emails.length === 3;

    return (
        <React.Fragment>
            {values.emails.map((row, idx) => (
                <Container key={idx}>

                    <Header index={idx} title='Emails & labels' Icon={<MailOutlinedIcon fontSize='small'/>}/>

                    <Fields data={row} index={idx} setValue={handleChange}/>

                    <Actions index={idx} addFn={addRow} removeFn={() => removeRow(idx)} addDisabled={addDisabled}/>

                </Container>
            ))}
        </React.Fragment>
    );
}

export default EmailRows;