import React, { useState } from 'react';
import styles from './header.scss';
import {
    AppBar,
    Box,
    Link,
    Divider,
    Typography,
    Backdrop,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import { Link as RouterLink, useLocation  } from "react-router-dom";

import { CustomListStyles } from '../../components/customs';
import {
    BehanceIcon,
    GithubIcon,
    SwordsIcon,
    FlameIcon,
    MusicIcon,
    TextAaIcon,
    ArrowRight,
    CakeIcon,
    TodoListIcon
} from '../../utils/icons';

export const Header = () => {
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
        document.body.style.overflow = 'auto';
    };
    const handleOpen = () => {
        setOpen(true);
        document.body.style.overflow = 'hidden';
    };
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    return (
        <>
            <AppBar className={styles.header} position='fixed' elevation={0}>
                <Box className="navigation" display="flex" justifyContent='space-between'>
                    <nav className="nav-left">
                        <Link className='li'
                            variant='label1'
                            underline='none'
                            color={location.pathname === '/react-test/' ? 'primary.primary' : 'primary.contrastText'}
                            component={RouterLink}
                            to="/react-test/"
                            sx={{
                                '&:hover': {
                                    color: `${location.pathname ===  '/react-test/' ? 'primary.primary' : 'primary.light'}`
                                }
                            }}>
                            Home
                        </Link>
                        <Link className='li'
                            onClick={handleOpen}
                            variant='label1'
                            underline='none'
                            color="primary.contrastText"
                            sx={{
                                cursor: 'pointer',
                                '&:hover': {
                                    color: 'primary.light'
                                }
                            }}
                        >
                            Project
                        </Link>
                        <Backdrop
                            sx={{ color: '#fff', backdropFilter: 'blur(15px)', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                            open={open}
                            onClick={handleClose}
                        >
                            <Box display={'grid'} width={'100%'} gap={'20px'}
                                sx={{
                                    padding: {
                                        xs: '20px', sm: '20px 36px', md: '20px 44px', lg: '20px 72px',
                                        xl: '20px 168px'
                                    },
                                }}>
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
                                <List sx={CustomListStyles.list} >
                                    <Divider />
                                    <ListItemButton sx={CustomListStyles.listItem}
                                        to='/react-test/rpg' component={RouterLink}>
                                        <Box display={'flex'} className='list-item' alignItems={'center'}>
                                            <ListItemIcon sx={CustomListStyles.listItemIcon}>
                                                <SwordsIcon />
                                            </ListItemIcon>
                                            <ListItemText primary={
                                                <Typography variant='body'>Role Playing Game</Typography>
                                            } />
                                        </Box>
                                        <ArrowRight className='arrow' sx={{ height: '9.5px', width: '6px', }} />
                                    </ListItemButton>
                                    <Divider />
                                    <ListItemButton sx={CustomListStyles.listItem}
                                        to='/react-test/calorie-counter' component={RouterLink}>
                                        <Box display={'flex'} className='list-item' alignItems={'center'}>
                                            <ListItemIcon sx={CustomListStyles.listItemIcon}>
                                                <FlameIcon />
                                            </ListItemIcon>
                                            <ListItemText primary={
                                                <Typography variant='body'>Calorie Counter</Typography>
                                            } />
                                        </Box>
                                        <ArrowRight className='arrow' sx={{ height: '9.5px', width: '6px', }} />
                                    </ListItemButton>
                                    <Divider />
                                    <ListItemButton sx={CustomListStyles.listItem}
                                        to='/react-test/music-player' component={RouterLink}>
                                        <Box display={'flex'} className='list-item' alignItems={'center'}>
                                            <ListItemIcon sx={CustomListStyles.listItemIcon}>
                                                <MusicIcon />
                                            </ListItemIcon>
                                            <ListItemText primary={
                                                <Typography variant='body'>Music player</Typography>
                                            } />
                                        </Box>
                                        <ArrowRight className='arrow' sx={{ height: '9.5px', width: '6px', }} />
                                    </ListItemButton>
                                    <Divider />
                                    <ListItemButton sx={CustomListStyles.listItem}
                                        to='/react-test/palindrome-checker' component={RouterLink}>
                                        <Box display={'flex'} className='list-item' alignItems={'center'}>
                                            <ListItemIcon sx={CustomListStyles.listItemIcon}>
                                                <TextAaIcon />
                                            </ListItemIcon>
                                            <ListItemText primary={
                                                <Typography variant='body'>Palindrome checker</Typography>
                                            } />
                                        </Box>
                                        <ArrowRight className='arrow' sx={{ height: '9.5px', width: '6px', }} />
                                    </ListItemButton>
                                    <Divider />
                                    <ListItemButton sx={CustomListStyles.listItem}
                                        to='/react-test/dessert-shop' component={RouterLink}>
                                        <Box display={'flex'} className='list-item' alignItems={'center'}>
                                            <ListItemIcon sx={CustomListStyles.listItemIcon}>
                                                <CakeIcon sx={{ fill: '#F2F2F2' }} />
                                            </ListItemIcon>
                                            <ListItemText primary={
                                                <Typography variant='body'>Dessert shop</Typography>
                                            } />
                                        </Box>
                                        <ArrowRight className='arrow' sx={{ height: '9.5px', width: '6px', }} />
                                    </ListItemButton>
                                    <Divider />
                                    <ListItemButton sx={CustomListStyles.listItem}
                                        to='/react-test/todo-app' component={RouterLink}>
                                        <Box display={'flex'} className='list-item' alignItems={'center'}>
                                            <ListItemIcon sx={CustomListStyles.listItemIcon}>
                                                <TodoListIcon sx={{ fill: '#F2F2F2' }} />
                                            </ListItemIcon>
                                            <ListItemText primary={
                                                <Typography variant='body'>Todo app</Typography>
                                            } />
                                        </Box>
                                        <ArrowRight className='arrow' sx={{ height: '9.5px', width: '6px', }} />
                                    </ListItemButton>
                                    <Divider />
                                </List>
                            </Box>
                        </Backdrop>
                    </nav>
                    <nav className="nav-right">
                        <Link className='li'
                            underline='none'
                            color="primary.contrastText">
                            <Box sx={{
                                cursor: 'pointer',
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '50%',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    backgroundColor: 'rgba(212, 212, 212, 0.08)',
                                    transition: 'all 0.3s ease',
                                },
                                '&:focus': {
                                    backgroundColor: 'rgba(212, 212, 212, 0.12)',
                                    transition: 'all 0.3s ease',

                                }
                            }}>
                                <BehanceIcon />
                            </Box>
                        </Link>
                        <Link className='li'
                            underline='none'
                            color="primary.contrastText"
                            href="https://github.com/ururu2407/react-test">
                            <Box sx={{
                                cursor: 'pointer',
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '50%',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    backgroundColor: 'rgba(212, 212, 212, 0.08)',
                                    transition: 'all 0.3s ease',
                                },
                                '&:focus': {
                                    backgroundColor: 'rgba(212, 212, 212, 0.12)',
                                    transition: 'all 0.3s ease',

                                }
                            }}>
                                <GithubIcon />
                            </Box>
                        </Link>
                    </nav>
                </Box>
                <Divider sx={{ margin: "8px 20px 0 20px" }} />
            </AppBar >
        </>
    );
};