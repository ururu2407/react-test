import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export const PalindromeCheckerDescription = () => {
    return (
        <>
            <Box display='grid' gap='20px'>
                <Typography
                    variant='headline'
                    color='primary.light'
                >Description</Typography>
                <Typography variant='body1' color='primary.light' fontWeight='Light'>
                    Palindrome checker is a simple and concise program that allows you to determine whether the entered text is a palindrome.
                </Typography>
            </Box>
        </>
    )
}