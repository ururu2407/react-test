import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export const CalorieCounterDescription = () => {
    return (
        <>
            <Box display='grid' gap='20px'>
                <Typography
                    variant='headline'
                    color='primary.light'
                >Description</Typography>
                <Typography variant='body1' color='primary.light' fontWeight='Light'>
                    Calorie counter is a JavaScript application that helps users keep track of the calories in their diet.
                    <br /><br />
                    The simple interface makes it easy to enter and track calories consumed, which helps you maintain a healthy lifestyle.
                </Typography>
            </Box>
        </>
    )
}