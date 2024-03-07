import React from 'react';
import {
    List,
    Box,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    Divider,
} from '@mui/material';
import {
    SwordsIcon,
    FlameIcon,
    MusicIcon,
    TextAaIcon,
    ArrowRight,
    CakeIcon
} from '../../../utils/icons';
import { CustomListStyles } from '../../../components/customs';

import { Link as RouterLink } from "react-router-dom";

export const Second = () => {
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
                        5
                    </Typography>
                </Box>
                <List sx={CustomListStyles.list}>
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
                                <CakeIcon sx={{fill: '#F2F2F2'}}/>
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
        </>
    )
}