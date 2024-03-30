import React from 'react';
import {
    List,
    Box,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    Divider,
    useTheme
} from '@mui/material';
import {
    SwordsIcon,
    FlameIcon,
    MusicIcon,
    TextAaIcon,
    ArrowRight,
    CakeIcon,
    TodoListIcon
} from '../../../utils/icons';
import { CustomListStyles } from '../../../components/customs';

import { Link as RouterLink } from "react-router-dom";

export const Second = () => {
    const theme = useTheme();
    return (
        <>
            <Box display={'grid'} gap={'20px'}>
                <Box
                    display={'flex'}
                    justifyContent={'space-between'}
                    color="primary.light">
                    <Typography variant='headline' >
                        Projects
                    </Typography>
                    <Typography variant='headline'>
                        6
                    </Typography>
                </Box>
                <List sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    color: "primary.light",
                    padding: 0,
                    [theme.breakpoints.up('sm')]: {
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                    }
                }}
                    padding={0} >
                    <ListItemButton sx={CustomListStyles.listItem}
                        to='/react-test/rpg' component={RouterLink}>
                        <Box sx={{
                            [theme.breakpoints.up('sm')]: {
                                width: '216px',
                            },
                            [theme.breakpoints.up('md')]: {
                                width: '296px',
                            },
                            [theme.breakpoints.up('lg')]: {
                                width: '416px',
                            },
                            [theme.breakpoints.up('xl')]: {
                                width: '448px',
                            }
                        }}>
                            <Box height={'240px'} alignContent={'center'}
                                sx={{
                                    [theme.breakpoints.up('sm')]: {
                                        height: '312px',
                                    }
                                }}
                                borderRadius={'24px'} boxShadow={'0px 0px 4px 0px #000000;'}
                                border={'1px solid #171717'} objectFit={'cover'}>
                                <img width={'100%'} objectFit={'cover'}
                                    src="https://i.imgur.com/ko3q3KK.png" alt="" />
                            </Box>
                            <Box display={'flex'} className='list-item' alignItems={'center'}
                                padding={'16px 0'}>
                                <ListItemIcon sx={CustomListStyles.listItemIcon}>
                                    <SwordsIcon />
                                </ListItemIcon>
                                <ListItemText primary={
                                    <Typography variant='body'>Role Playing Game</Typography>
                                } />
                                <ArrowRight className='arrow' sx={{ height: '9.5px', width: '6px', }} />
                            </Box>
                        </Box>
                    </ListItemButton>
                    <ListItemButton sx={CustomListStyles.listItem}
                        to='/react-test/calorie-calculator' component={RouterLink}>
                        <Box sx={{
                            [theme.breakpoints.up('sm')]: {
                                width: '216px',
                            },
                            [theme.breakpoints.up('md')]: {
                                width: '296px',
                            },
                            [theme.breakpoints.up('lg')]: {
                                width: '416px',
                            },
                            [theme.breakpoints.up('xl')]: {
                                width: '448px',
                            }
                        }}>
                            <Box height={'240px'} alignContent={'center'}
                                sx={{
                                    [theme.breakpoints.up('sm')]: {
                                        height: '312px',
                                    }
                                }}
                                borderRadius={'24px'} boxShadow={'0px 0px 4px 0px #000000;'}
                                border={'1px solid #171717'}>
                                <img width={'100%'}
                                    src="https://i.imgur.com/A3pGSN7.png" alt="" />
                            </Box>
                            <Box display={'flex'} className='list-item' alignItems={'center'}
                                padding={'16px 0'}>
                                <ListItemIcon sx={CustomListStyles.listItemIcon}>
                                    <FlameIcon />
                                </ListItemIcon>
                                <ListItemText primary={
                                    <Typography variant='body'>Calorie calculator</Typography>
                                } />
                                <ArrowRight className='arrow' sx={{ height: '9.5px', width: '6px', }} />
                            </Box>
                        </Box>
                    </ListItemButton>
                    <ListItemButton sx={CustomListStyles.listItem}
                        to='/react-test/music-player' component={RouterLink}>
                        <Box width={'100%'} sx={{
                            [theme.breakpoints.up('sm')]: {
                                width: '216px',
                            },
                            [theme.breakpoints.up('md')]: {
                                width: '296px',
                            },
                            [theme.breakpoints.up('lg')]: {
                                width: '416px',
                            },
                            [theme.breakpoints.up('xl')]: {
                                width: '448px',
                            }
                        }}>
                            <Box height={'240px'} alignContent={'center'} textAlign={'center'}
                                sx={{
                                    [theme.breakpoints.up('sm')]: {
                                        height: '312px',
                                    }
                                }}
                                borderRadius={'24px'} boxShadow={'0px 0px 4px 0px #000000;'}
                                border={'1px solid #171717'}>
                                <img height={'100%'}
                                    src="https://i.imgur.com/65NIZGX.png" alt="" />
                            </Box>
                            <Box display={'flex'} className='list-item' alignItems={'center'}
                                padding={'16px 0'}>
                                <ListItemIcon sx={CustomListStyles.listItemIcon}>
                                    <MusicIcon />
                                </ListItemIcon>
                                <ListItemText primary={
                                    <Typography variant='body'>Music player</Typography>
                                } />
                                <ArrowRight className='arrow' sx={{ height: '9.5px', width: '6px', }} />
                            </Box>
                        </Box>
                    </ListItemButton>
                    <ListItemButton sx={CustomListStyles.listItem}
                        to='/react-test/palindrome-checker' component={RouterLink}>
                        <Box sx={{
                            [theme.breakpoints.up('sm')]: {
                                width: '216px',
                            },
                            [theme.breakpoints.up('md')]: {
                                width: '296px',
                            },
                            [theme.breakpoints.up('lg')]: {
                                width: '416px',
                            },
                            [theme.breakpoints.up('xl')]: {
                                width: '448px',
                            }
                        }}>
                            <Box height={'240px'} alignContent={'center'}
                                sx={{
                                    [theme.breakpoints.up('sm')]: {
                                        height: '312px',
                                    }
                                }}
                                borderRadius={'24px'} boxShadow={'0px 0px 4px 0px #000000;'}
                                border={'1px solid #171717'}>
                                <img width={'100%'}
                                    src="https://i.imgur.com/cyj2q2T.png" alt="" />
                            </Box>
                            <Box display={'flex'} className='list-item' alignItems={'center'}
                                padding={'16px 0'}>
                                <ListItemIcon sx={CustomListStyles.listItemIcon}>
                                    <TextAaIcon />
                                </ListItemIcon>
                                <ListItemText primary={
                                    <Typography variant='body'>Palindrome checker</Typography>
                                } />
                                <ArrowRight className='arrow' sx={{ height: '9.5px', width: '6px', }} />
                            </Box>
                        </Box>
                    </ListItemButton>
                    <ListItemButton sx={CustomListStyles.listItem}
                        to='/react-test/dessert-shop' component={RouterLink}>
                        <Box width={'100%'} sx={{
                            [theme.breakpoints.up('sm')]: {
                                width: '216px',
                            },
                            [theme.breakpoints.up('md')]: {
                                width: '296px',
                            },
                            [theme.breakpoints.up('lg')]: {
                                width: '416px',
                            },
                            [theme.breakpoints.up('xl')]: {
                                width: '448px',
                            }
                        }}>
                            <Box height={'240px'} alignContent={'center'} textAlign={'center'}
                                sx={{
                                    [theme.breakpoints.up('sm')]: {
                                        display: 'none',
                                    },
                                    [theme.breakpoints.up('lg')]: {
                                        display: 'block',
                                        height: '312px',
                                    }
                                }}
                                borderRadius={'24px'} boxShadow={'0px 0px 4px 0px #000000;'}
                                border={'1px solid #171717'} >
                                <img height={'100%'}
                                    src="https://i.imgur.com/CriHAK3.png" alt="" />
                            </Box>
                            <Box height={'312px'} alignContent={'center'} textAlign={'center'}
                                sx={{
                                    [theme.breakpoints.down('sm')]: {
                                        display: 'none',
                                    },
                                    [theme.breakpoints.up('lg')]: {
                                        display: 'none',
                                    }
                                }}
                                borderRadius={'24px'} boxShadow={'0px 0px 4px 0px #000000;'}
                                border={'1px solid #171717'} >
                                <img width={'100%'}
                                    src="https://i.imgur.com/CriHAK3.png" alt="" />
                            </Box>
                            <Box display={'flex'} className='list-item' alignItems={'center'}
                                padding={'16px 0'}>
                                <ListItemIcon sx={CustomListStyles.listItemIcon}>
                                    <CakeIcon sx={{ fill: '#F2F2F2' }} />
                                </ListItemIcon>
                                <ListItemText primary={
                                    <Typography variant='body'>Dessert shop</Typography>
                                } />
                                <ArrowRight className='arrow' sx={{ height: '9.5px', width: '6px', }} />
                            </Box>
                        </Box>
                    </ListItemButton>
                    <ListItemButton sx={CustomListStyles.listItem}
                        to='/react-test/todo-app' component={RouterLink}>
                        <Box sx={{
                            [theme.breakpoints.up('sm')]: {
                                width: '216px',
                            },
                            [theme.breakpoints.up('md')]: {
                                width: '296px',
                            },
                            [theme.breakpoints.up('lg')]: {
                                width: '416px',
                            },
                            [theme.breakpoints.up('xl')]: {
                                width: '448px',
                            }
                        }}>
                            <Box height={'240px'} alignContent={'center'}
                                sx={{
                                    [theme.breakpoints.up('sm')]: {
                                        height: '312px',
                                    }
                                }}
                                borderRadius={'24px'} boxShadow={'0px 0px 4px 0px #000000;'}
                                border={'1px solid #171717'}>
                                <img width={'100%'}
                                    src="https://i.imgur.com/9hbAOlv.png" alt="" />
                            </Box>
                            <Box display={'flex'} className='list-item' alignItems={'center'}
                                padding={'16px 0'}>
                                <ListItemIcon sx={CustomListStyles.listItemIcon}>
                                    <TodoListIcon sx={{ fill: '#F2F2F2' }} />
                                </ListItemIcon>
                                <ListItemText primary={
                                    <Typography variant='body'>Todo app</Typography>
                                } />
                                <ArrowRight className='arrow' sx={{ height: '9.5px', width: '6px', }} />
                            </Box>
                        </Box>
                    </ListItemButton>
                </List>
            </Box >
        </>
    )
}