import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import 'fontsource-roboto';

import materialBaseline from "./MaterialBaseline";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Body from "./components/Body";


const useStyles = makeStyles((theme) => ({
    grow: {
        display: 'flex',
    },
}));


function App() {
    const classes = useStyles();
    const [sidebarOpen, setSidebarOpen] = React.useState(false);

    return (
        <div className={classes.grow}>
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
            <Sidebar open={sidebarOpen} setOpen={setSidebarOpen}/>
            <Body sidebarOpen={sidebarOpen}/>
        </div>
    );
}

export default materialBaseline(App);
