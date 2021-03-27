import React, { Component } from 'react';
import './App.css';
import {
    PlatoonThemeProvider,
    GlobalStyles,
    Button,
    platoon,
} from '@platoon/react';

class App extends Component {
    render() {
        return (
            <PlatoonThemeProvider theme={{}}>
                <GlobalStyles />
                <platoon.div>
                    <platoon.h1>Test app for Platoon</platoon.h1>
                    <Button css>Button</Button>
                </platoon.div>
            </PlatoonThemeProvider>
        );
    }
}

export default App;
