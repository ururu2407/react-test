import React from 'react';
import { Typography, Box } from '@mui/material';
import styles from './fifth.scss';


export const Fifth = () => {
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
                        03</Typography>
                    <Typography variant='headline' color='primary.light'>How we managed it</Typography>
                </Box>
                <Typography
                    variant='body1'
                    color="primary.light"
                    fontWeight='Light'
                >Our timeframe was divided into several stages that reflected our work and project development.</Typography>
                <Box>
                    <Box display={'flex'}
                        sx={{ borderBottom: '1px solid', borderColor: 'divider' }}>
                        <Box minWidth={'103px'} maxWidth={'103px'}
                            paddingRight={'20px'}
                            sx={{ borderRight: '1px solid', borderColor: 'divider' }}>
                            <Typography
                                variant='body'
                                fontWeight='Light'
                                color='primary.contrastText'>Preparatory stage</Typography>
                        </Box>
                        <Box paddingLeft={'20px'}
                            paddingBottom='20px'
                            display='grid'
                            gap='16px'>
                            <Typography className='dash green'
                                sx={{ padding: '12px 15px' }}
                                variant='body2'
                                fontWeight='Light'
                                color='primary.light'>Teambuilding</Typography>
                            <Typography className='dash green'
                                sx={{ padding: '12px 15px' }}
                                variant='body2'
                                fontWeight='Light'
                                color='primary.light'>Project theme selection</Typography>
                            <Typography className='dash green'
                                sx={{ padding: '12px 15px' }}
                                variant='body2'
                                fontWeight='Light'
                                color='primary.light'>Develop project plan</Typography>
                        </Box>
                    </Box>
                    <Box display={'flex'}
                        sx={{ borderBottom: '1px solid', borderColor: 'divider' }}>
                        <Box minWidth={'103px'}
                            paddingRight={'20px'}
                            paddingTop='20px'
                            sx={{ borderRight: '1px solid', borderColor: 'divider' }}>
                            <Typography
                                variant='body'
                                fontWeight='Light'
                                color='primary.contrastText'>Main stage</Typography>
                        </Box>
                        <Box paddingLeft={'20px'}
                            paddingBottom='20px'
                            paddingTop='20px'
                            display='grid'
                            gap='16px'>
                            <Typography className='dash blue'
                                sx={{ padding: '12px 15px' }}
                                variant='body2'
                                fontWeight='Light'
                                color='primary.light'>Execution of work</Typography>
                            <Typography className='dash blue'
                                sx={{ padding: '12px 15px' }}
                                variant='body2'
                                fontWeight='Light'
                                color='primary.light'>Progress reporting</Typography>
                        </Box>
                    </Box>
                    <Box display={'flex'}>
                        <Box minWidth={'103px'}
                            paddingRight={'20px'}
                            paddingTop='20px'
                            sx={{ borderRight: '1px solid', borderColor: 'divider' }}>
                            <Typography
                                variant='body'
                                fontWeight='Light'
                                color='primary.contrastText'>Final stage</Typography>
                        </Box>
                        <Box paddingLeft={'20px'}
                            paddingTop='20px'
                            display='grid'
                            gap='16px'>
                            <Typography className='dash purple'
                                sx={{ padding: '12px 15px' }}
                                variant='body2'
                                fontWeight='Light'
                                color='primary.light'>Project defence</Typography>
                            <Typography className='dash purple'
                                sx={{ padding: '12px 15px' }}
                                variant='body2'
                                fontWeight='Light'
                                color='primary.light'>Submitting a project report</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}