import React from 'react';

import {makeStyles, fade} from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import {List, ListItem, ListItemText, ListItemAvatar, InputBase, Avatar, Paper, Grow} from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles((theme) => ({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(grey[500], 0.2),
        // '&:hover': {
        //     backgroundColor: fade(grey[500], 0.35),
        // },
        width: '50%',
        [theme.breakpoints.down('xs')]: {
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        width: '100%',
        color: 'inherit',
    },
    inputInput: {
        '&:focus': {
            backgroundColor: fade(grey[500], 0.1),
        },
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: theme.spacing(7.5),
        // paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
    },

    searchResultsContainer: {
        marginTop: theme.spacing(0.5),
        position: 'absolute',
        width: '100%',
        overflow: 'auto',
        maxHeight: 330,
    },
    searchResultItem: {
        '&:hover': {
            backgroundColor: fade(grey[500], 0.2),
        }
    },
    searchResultItemAvatar: {
        width: theme.spacing(3.5),
        height: theme.spacing(3.5),
    }
}));


function ResultItem() {
    const classes = useStyles();

    return (
        <ListItem dense={true} button className={classes.searchResultItem}>
            <ListItemAvatar style={{minWidth: 44}}>
                <Avatar variant='rounded' className={classes.searchResultItemAvatar}>A</Avatar>
            </ListItemAvatar>
            <ListItemText primary="Brunch this weekend?"/>
        </ListItem>
    );
}


export default function Search() {
    const classes = useStyles();

    const [query, setQuery] = React.useState('');
    const [searchBarFocused, setSearchBarFocused] = React.useState(false);
    const [searchResults, setSearchResults] = React.useState([]);

    const onInputChange = () => {
        setQuery(event.target.value)
        setSearchResults(event.target.value ? [1] : [])
        // console.log(event.target.value)
    }


    return (
        <div className={classes.search}>

            <div className={classes.searchIcon}>
                <SearchIcon/>
            </div>

            <InputBase
                type='search'
                placeholder="Search…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{'aria-label': 'search'}}
                value={query}
                onChange={onInputChange}
                onFocus={() => setSearchBarFocused(true)}
                onBlur={() => setSearchBarFocused(false)}
            />

            <Grow in={!!(searchBarFocused && searchResults.length)}>
                <Paper className={classes.searchResultsContainer} elevation={2}>
                    <List>
                        <ResultItem/>
                        <ResultItem/>
                        <ResultItem/>
                    </List>
                </Paper>
            </Grow>

        </div>
    );
}
