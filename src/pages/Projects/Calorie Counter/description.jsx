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
                    Our first project is a Role Playing Game created with JavaScript. This project allows users to enjoy a simple interface and no-frills features.
                    <br/><br/>
                    The game offers short adventures where the player makes decisions that will affect the course of the game.
                    <br/><br/>
                    This project is not about impressive graphical effects or complex code, but about the simple joy of playing.
                </Typography>
            </Box>
        </>
    )
}