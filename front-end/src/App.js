import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import 'fontsource-roboto';

import materialBaseline from "./MaterialBaseline";
import Header from "./components/Header";


const useStyles = makeStyles((theme) => ({
    grow: {
        display: 'flex',
    },
}));


function App() {
    const classes = useStyles();

    return (
        <div className={classes.grow}>
            <Header/>
        </div>
    );
}

export default materialBaseline(App);
