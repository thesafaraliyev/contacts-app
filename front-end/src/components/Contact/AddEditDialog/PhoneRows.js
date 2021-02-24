import React from 'react';

import {Grid, TextField} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';

import {COUNTRIES} from '../../../utils/dummyData';
import Header from './Row/Header';
import Actions from './Row/Actions';
import Container from './Row/';


const selectedCountry = number => {
    const code = number.code.length > 0 ? number.code : '994';
    return COUNTRIES.find(({phone}) => phone === code)
}


const Fields = ({data, index, setValue}) => {
    return (
        <React.Fragment>
            <Grid item sm={4} xs={12}>
                <Autocomplete
                    fullWidth
                    clearOnEscape
                    autoComplete
                    size='small'
                    onChange={(_, country) => setValue(index, 'code', country ? country.phone : '994')}
                    value={selectedCountry(data)}
                    options={COUNTRIES}
                    getOptionSelected={(option, value) => (option.phone === value.phone)}
                    getOptionLabel={(option) => `${option.label} +${option.phone}`}
                    renderOption={(option) => `${option.label} +${option.phone}`}
                    renderInput={(params) => (
                        <TextField color='secondary' variant='outlined' {...params} label='Country code'/>
                    )}
                />
            </Grid>

            <Grid item sm={3} xs={12}>
                <TextField
                    fullWidth
                    color='secondary'
                    size='small'
                    variant='outlined'
                    label='Phone'
                    value={data.number}
                    onChange={event => setValue(index, 'number', event.target.value)}/>
            </Grid>

            <Grid item sm={3} xs={12}>
                <Autocomplete
                    freeSolo
                    fullWidth
                    autoHighlight
                    autoComplete
                    clearOnEscape
                    size='small'
                    options={['Work', 'Home', 'Mobile', 'Main', 'Other']}
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


const PhoneRows = ({values, setValues}) => {
    const handleChange = (index, key, value) => {
        const temp = values['numbers'];
        temp[index][key] = value
        setValues({...values, numbers: temp})
    }

    const addRow = () => {
        setValues({...values, numbers: [...values['numbers'], {code: '994', number: '', label: ''}]})
    };

    const removeRow = index => {
        setValues({...values, numbers: values['numbers'].filter((_, idx) => idx !== index)})
    }

    const addDisabled = values.numbers.length === 3;

    return (
        <React.Fragment>
            {values.numbers.map((row, idx) => (
                <Container key={idx}>

                    <Header index={idx} title='Phone numbers and labels' Icon={<PhoneOutlinedIcon fontSize='small'/>}/>

                    <Fields data={row} index={idx} setValue={handleChange}/>

                    <Actions index={idx} addFn={addRow} removeFn={() => removeRow(idx)} addDisabled={addDisabled}/>

                </Container>
            ))}
        </React.Fragment>
    );
}

export default PhoneRows;