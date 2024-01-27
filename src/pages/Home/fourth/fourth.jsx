import React from 'react';
import { Typography, Box } from '@mui/material';


export const Fourth = () => {
    return (
        <>
            <Box display={'grid'} gap='20px'>
                <Box display={'grid'} gap='8px'>
                    <Typography
                        sx={{ border: 1, borderRadius: '8px', width: '29px', height: '20px' }}
                        display={'flex'} justifyContent={'center'} alignItems={'center'}
                        fontWeight='Light'
                        variant='body4'
                        color="primary.contrastText">
                        02</Typography>
                    <Typography variant='headline' color='primary.light'>Backstory</Typography>
                </Box>
                <Typography 
                variant='body1' 
                color="primary.light" 
                fontWeight='Light'
                >Project practice at KROK is an important component of our curriculum. It provides students with the opportunity to apply their knowledge and work in a team to develop and improve their skills in computer science.</Typography>
            </Box>
        </>
    )
}