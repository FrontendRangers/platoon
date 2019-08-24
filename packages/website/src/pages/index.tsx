import React from 'react';
import {
    Button,
    theme,
    PlatoonThemeProvider,
} from '@frontendrangers/platoon-react';

const Page = () => (
    <PlatoonThemeProvider theme={theme}>
        <div>
            <p>Platoon website</p>
            <Button>Hello</Button>
        </div>
    </PlatoonThemeProvider>
);

export default Page;
