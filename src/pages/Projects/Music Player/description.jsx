import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export const MusicPlayerDescription = () => {
    return (
        <>
            <Box display='grid' gap='20px'>
                <Typography
                    variant='headline'
                    color='primary.light'
                >Description</Typography>
                <Typography variant='body1' color='primary.light' fontWeight='Light'>
                    This JavaScript project is a simple music player that allows users to enjoy music right in the browser.
                    <br /><br />
                    The user-friendly interface is created in an interesting retro style reminiscent of the old days.
                </Typography>
            </Box>
        </>
    )
}