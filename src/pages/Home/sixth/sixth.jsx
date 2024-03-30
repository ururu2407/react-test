import React from 'react';
import {
    Typography,
    Box,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    useTheme
} from '@mui/material';
import { BehanceIconLight, GithubIconLight } from '../../../utils/icons';
export const Sixth = () => {
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
                        06</Typography>
                    <Typography variant='headline' color='primary.light'>Results</Typography>
                </Box>
                <Typography
                    variant='title'
                    color='primary.light'
                >Reflections and definitions</Typography>
                <Box display={'flex'}>
                    <Box width={'103px'}
                        paddingRight={'20px'}
                        sx={{ borderRight: '1px solid', borderColor: 'divider' }}>
                        <Typography
                            variant='body'
                            fontWeight='Light'
                            color='primary.contrastText'>Preparatory stage</Typography>
                    </Box>
                    <Box paddingLeft={'20px'}
                        display='grid'
                        gap='16px'>
                        <Typography className='dash green'
                            sx={{ padding: '12px 15px' }}
                            variant='body2'
                            fontWeight='Light'
                            color='primary.light'>Teambuilding</Typography>
                        <Typography className='dash green'
                            sx={{
                                padding: '12px 15px',
                                marginLeft: { sm: '60px', md: '67px' }
                            }}
                            variant='body2'
                            fontWeight='Light'
                            color='primary.light'>Project theme selection</Typography>
                        <Typography className='dash green'
                            sx={{
                                padding: '12px 15px',
                                marginLeft: { sm: '120px', md: '180.5px' }
                            }}
                            variant='body2'
                            fontWeight='Light'
                            color='primary.light'>Develop project plan</Typography>
                    </Box>
                </Box>
                <Typography
                    variant='body1'
                    fontWeight='Light'
                    color='primary.light'
                >At the beginning of our journey through project practice, my classmate and I teamed up. The first thing we did was to divide our roles.</Typography>
                <List sx={{ padding: 0 }}>
                    <ListItem sx={{ padding: '12px 0 12px 0', height: '48px' }}>
                        <ListItemIcon sx={{ minWidth: '40px' }}>
                            <BehanceIconLight />
                        </ListItemIcon>
                        <ListItemText primary={
                            <Typography
                                variant='body1'
                                color='primary.light'
                                fontWeight='Light'
                            >Designer - Yaroslav M.</Typography>
                        } />
                    </ListItem>
                    <ListItem sx={{ padding: '12px 0 12px 0', height: '48px' }}>
                        <ListItemIcon sx={{ minWidth: '40px' }}>
                            <GithubIconLight />
                        </ListItemIcon>
                        <ListItemText primary={
                            <Typography
                                variant='body1'
                                color='primary.light'
                                fontWeight='Light'
                            >Developer - Oleksii K.</Typography>
                        } />
                    </ListItem>
                </List>
                <Typography
                    variant='body1'
                    fontWeight='Light'
                    color='primary.light'
                >After that, we started discussing potential topics for our projects. Oleksii mentioned that he intended to create a bunch of JavaScript projects, there was an idea to develop their design.</Typography>
                <Box display={'grid'} gap={'20px'}>
                    <Box display={'flex'} gap={'20px'}>
                        <Box justifyContent={'center'} alignItems={'center'}
                            padding={'8px'} border={1} borderRadius={'16px'}
                            borderColor={'divider'} objectFit={'cover'} overflow={'hidden'}
                            height={'157px'} width={'100%'}
                            sx={{
                                [theme.breakpoints.up('sm')]: {
                                    width: '50%',
                                    height: '296px',
                                }
                            }}>
                            <img src="https://i.imgur.com/KmadZcJ.png"
                                style={{ objectFit: 'cover', borderRadius: '16px' }}
                                alt=""
                                width={'100%'}
                                height={'100%'}
                            />
                        </Box>
                        <Box sx={{
                            [theme.breakpoints.down('sm')]: {
                                display: 'none',
                            }
                        }} width={'50%'} display={'grid'} justifyContent={'center'} alignItems={'center'}
                            padding={'8px'} border={1} borderRadius={'16px'}
                            borderColor={'divider'} objectFit={'cover'} overflow={'hidden'}
                            height={'296px'}>
                            <img src="https://i.imgur.com/sFJGEzh.png"
                                style={{ objectFit: 'cover', borderRadius: '16px' }}
                                alt=""
                                width={'100%'}
                                height={'100%'}
                            />
                        </Box>
                    </Box>
                    <Box display={'flex'} gap={'20px'}>
                        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}
                            padding={'8px'} border={1} borderRadius={'16px'}
                            borderColor={'divider'} height={'121px'}
                            objectFit={'cover'} overflow={'hidden'} width={'50%'}
                            sx={{
                                [theme.breakpoints.up('sm')]: {
                                    height: '296px',
                                }
                            }}>
                            <img src="https://i.imgur.com/Ue6rCxI.png"
                                style={{ objectFit: 'cover', borderRadius: '16px' }}
                                alt=""
                                width={'100%'}
                                height={'100%'}
                            />
                        </Box>
                        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}
                            padding={'8px'} border={1} borderRadius={'16px'}
                            borderColor={'divider'} height={'121px'}
                            objectFit={'cover'} overflow={'hidden'}
                            width={'50%'}
                            sx={{
                                [theme.breakpoints.up('sm')]: {
                                    height: '296px',
                                }
                            }}>
                            <img src="https://i.imgur.com/xrpaKGl.png"
                                style={{ objectFit: 'cover', borderRadius: '16px' }}
                                alt=""
                                width={'100%'}
                                height={'100%'}
                            />

                        </Box>
                    </Box>
                    <Box sx={{
                        [theme.breakpoints.up('sm')]: {
                            display: 'none',
                        }
                    }} justifyContent={'center'} alignItems={'center'}
                        padding={'8px'} border={1} borderRadius={'16px'}
                        borderColor={'divider'} objectFit={'cover'} overflow={'hidden'}
                        minHeight={'91px'}>
                        <img src="https://i.imgur.com/sFJGEzh.png"
                            style={{ objectFit: 'cover', borderRadius: '16px' }}
                            alt=""
                            width={'100%'}
                            height={'100%'}
                        />
                    </Box>
                </Box>
                <Typography
                    variant='body1'
                    color="primary.light"
                    fontWeight='Light'
                    marginBottom={'44px'}
                >However, on closer examination, we were struck by the idea that we could go further than simple design for these projects. Instead, we considered the concept of creating a website portfolio that would be a hallmark of our skills and achievements.
                    <br /><br />This project allowed us to combine our talents in various fields and create something that reflects not only our achievements, but also our creative vision and ambitions in the field of programming.
                </Typography>
                <Typography
                    variant='title'
                    color='primary.light'
                >Execution of work</Typography>
                <Box display={'flex'}>
                    <Box width={'103px'}
                        paddingRight={'20px'}
                        sx={{ borderRight: '1px solid', borderColor: 'divider' }}>
                        <Typography
                            variant='body'
                            fontWeight='Light'
                            color='primary.contrastText'>Main stage</Typography>
                    </Box>
                    <Box paddingLeft={'20px'}
                        display='grid'
                        gap='16px'>
                        <Typography className='dash blue'
                            sx={{ padding: '12px 15px' }}
                            variant='body2'
                            fontWeight='Light'
                            color='primary.light'>Execution of work</Typography>
                        <Typography className='dash blue'
                            sx={{
                                padding: '12px 15px',
                                marginLeft: { sm: '60px', md: '67px' }
                            }}
                            variant='body2'
                            fontWeight='Light'
                            color='primary.light'>Progress reporting</Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}