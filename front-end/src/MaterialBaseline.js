import React from 'react';

import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CssBaseline from '@material-ui/core/CssBaseline';


export default function materialBaseline(Component) {
    function MaterialBaseline(props) {
        const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
        const theme = React.useMemo(
            () =>
                createMuiTheme({
                    palette: {
                        // type: 'dark'
                        type: prefersDarkMode ? 'dark' : 'light',
                    },
                }),
            [prefersDarkMode],
        );

        return (
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Component {...props} />
            </ThemeProvider>
        );
    }

    return MaterialBaseline;
}