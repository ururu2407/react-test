import React from 'react';
import { Box, Typography, List, ListItemText } from '@mui/material';
import { useTheme } from '@emotion/react';
export const Third = () => {
    const theme = useTheme();
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
                        01</Typography>
                    <Typography variant='headline' color='primary.light'>Description</Typography>
                </Box>
                <Typography 
                variant='body1' 
                color="primary.light" 
                fontWeight='Light'
                >During our project practice at KROK, we worked on a number of exciting projects that spanned web and mobile platforms. Our team focused on developing applications using Java.<br /><br />Our work included creating a variety of programs, from games to practical utilities, that expanded the capabilities of JavaScript programming.
                </Typography>
                <Box>
                    <List sx={{display: 'grid', gap: '20px',
                    [theme.breakpoints.up('sm')]: {
                        display: 'flex',
                        gap: '48px',
                    }
                    }}>
                        <ListItemText sx={{flex: 'none'}}
                            primary={
                                <Typography fontWeight='Light' 
                                color='primary.contrastText' 
                                variant='body'>Platforms</Typography>
                            }
                            secondary={
                                <Typography fontWeight='Medium' 
                                color='primary.light' 
                                variant='body1'>Web & Mobile</Typography>
                            }>
                        </ListItemText>
                        <ListItemText sx={{flex: 'none'}}
                            primary={
                                <Typography fontWeight='Light' 
                                color='primary.contrastText' 
                                variant='body'>Timeframe</Typography>
                            }
                            secondary={
                                <Typography fontWeight='Medium' 
                                color='primary.light' 
                                variant='body1'>09/01/2024 - 25/03/2024</Typography>
                            }>

                        </ListItemText>
                        <ListItemText sx={{flex: 'none'}}
                            primary={
                                <Typography fontWeight='Light' 
                                color='primary.contrastText' 
                                variant='body'>Team members</Typography>
                            }
                            secondary={
                                <Typography fontWeight='Medium' 
                                color='primary.light' 
                                variant='body1'>Yaroslav M., Oleksii K.</Typography>
                            }>
                        </ListItemText>
                    </List>
                </Box>
            </Box>
        </>
    )
}