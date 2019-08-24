import React from 'react';
import {
    Button,
    theme,
    PlatoonThemeProvider,
    GlobalStyles,
    Box,
    Heading,
} from '@frontendrangers/platoon-react';

const Page = () => (
    <PlatoonThemeProvider theme={theme}>
        <GlobalStyles></GlobalStyles>
        <Box>
            <Heading>Platoon website</Heading>
            <Button variant="primary">Hello</Button>
        </Box>
    </PlatoonThemeProvider>
);

export default Page;
