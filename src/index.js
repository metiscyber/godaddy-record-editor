import React from 'react';
import ReactDOM from 'react-dom';
import Root from "@containers/Root";

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {theme} from "@styles/theme";

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <CssBaseline />
    <Root />
    </ThemeProvider>,
    document.getElementById('app-root')
);
