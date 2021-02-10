import React from 'react';

import {Grid, TextField} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

import LinkOutlinedIcon from '@material-ui/icons/LinkOutlined';

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
                    label='Website'
                    value={data.name}
                    onChange={event => setValue(index, 'name', event.target.value)}/>
            </Grid>
            <Grid item sm={3} xs={12}>
                <Autocomplete
                    freeSolo
                    fullWidth
                    autoHighlight
                    autoComplete
                    clearOnEscape
                    size='small'
                    options={['Profile', 'Homepage', 'Blog', 'Work']}
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


const WebsiteRows = ({values, setValues}) => {
    const handleChange = (index, key, value) => {
        const temp = values['websites'];
        temp[index][key] = value
        setValues({...values, websites: temp})
    }

    const addRow = () => {
        setValues({...values, websites: [...values['websites'], {name: '', label: ''}]})
    };

    const removeRow = index => {
        setValues({...values, websites: values['websites'].filter((_, idx) => idx !== index)})
    }

    const addDisabled = values.websites.length === 3;

    return (
        <React.Fragment>
            {values.websites.map((row, idx) => (
                <Container key={idx}>

                    <Header index={idx} title='Websites & labels' Icon={<LinkOutlinedIcon fontSize='small'/>}/>

                    <Fields data={row} index={idx} setValue={handleChange}/>

                    <Actions index={idx} addFn={addRow} removeFn={() => removeRow(idx)} addDisabled={addDisabled}/>

                </Container>
            ))}
        </React.Fragment>
    );
}

export default WebsiteRows;