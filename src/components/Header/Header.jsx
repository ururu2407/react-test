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
import { Link as RouterLink } from "react-router-dom";

import { CustomListStyles } from '../../components/customs';
import {
    BehanceIcon,
    GithubIcon,
    SwordsIcon,
    FlameIcon,
    MusicIcon,
    TextAaIcon,
    ArrowRight,
    CakeIcon
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
    return (
        <>
            <AppBar className={styles.header} position='fixed' elevation={0}>
                <Box className="navigation" display="flex" justifyContent='space-between'>
                    <nav className="nav-left">
                        <Link className='li'
                            variant='label1'
                            underline='none'
                            color="primary.contrastText"
                            component={RouterLink}
                            to="/react-test">
                            Home
                        </Link>
                        <Link className='li'
                            sx={{ cursor: 'pointer' }}
                            onClick={handleOpen}
                            variant='label1'
                            underline='none'
                            color="primary.contrastText"
                        >
                            Project
                        </Link>
                        <Backdrop
                            sx={{ color: '#fff', backdropFilter: 'blur(15px)', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                            open={open}
                            onClick={handleClose}
                        >
                            <Box display={'grid'} width={'100%'} padding={'20px'} gap={'20px'}>
                                <Box
                                    display={'flex'}
                                    justifyContent={'space-between'}
                                    color="primary.light">
                                    <Typography variant='headline' >
                                        Projects
                                    </Typography>
                                    <Typography variant='headline'>
                                        5
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
                                    {/*  <ListItemButton sx={{ paddingLeft: 0, minHeight: 55 }}>
                        <ListItemIcon sx={{ minWidth: 40 }}>
                            <MedalIcon />
                        </ListItemIcon>
                        <ListItemText primary={
                            <Typography variant='body'>Bulding football team cards</Typography>
                        } />
                    </ListItemButton>
                    <Divider /> */}
                                </List>
                            </Box>
                        </Backdrop>
                    </nav>
                    <nav className="nav-right">
                        <Link className='li'
                            underline='none'
                            color="primary.contrastText"
                            component={RouterLink}
                            to="/be">
                            <BehanceIcon />
                        </Link>
                        <Link className='li'
                            underline='none'
                            color="primary.contrastText"
                            component={RouterLink}
                            to="/git">
                            <GithubIcon />
                        </Link>
                    </nav>
                </Box>
                <Divider sx={{ marginLeft: '20px', marginRight: '20px' }} />
            </AppBar>
        </>
    );
};