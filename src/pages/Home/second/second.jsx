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
    TextAaIcon
} from '../../../utils/icons';

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
                        4
                    </Typography>
                </Box>
                <List sx={{ color: "primary.light", padding: 0 }}>
                    <Divider />
                    <ListItemButton sx={{ paddingLeft: 0, minHeight: 55 }}
                        to='/react-test/rpg' component={RouterLink}>
                        <ListItemIcon sx={{ minWidth: 40 }}>
                            <SwordsIcon />
                        </ListItemIcon>
                        <ListItemText primary={
                            <Typography variant='body'>Role Playing Game</Typography>
                        } />
                    </ListItemButton>
                    <Divider />
                    <ListItemButton sx={{ paddingLeft: 0, minHeight: 55 }}
                        to='/react-test/calorie-counter' component={RouterLink}>
                        <ListItemIcon sx={{ minWidth: 40 }}>
                            <FlameIcon />
                        </ListItemIcon>
                        <ListItemText primary={
                            <Typography variant='body'>Calorie counter</Typography>
                        } />
                    </ListItemButton>
                    <Divider />
                    <ListItemButton sx={{ paddingLeft: 0, minHeight: 55 }}
                    to='/react-test/music-player' component={RouterLink}>
                        <ListItemIcon sx={{ minWidth: 40 }}>
                            <MusicIcon />
                        </ListItemIcon>
                        <ListItemText primary={
                            <Typography variant='body'>Music player</Typography>
                        } />
                    </ListItemButton>
                    <Divider />
                    <ListItemButton sx={{ paddingLeft: 0, minHeight: 55 }}
                    to='/react-test/palindrome-checker' component={RouterLink}>
                        <ListItemIcon sx={{ minWidth: 40 }}>
                            <TextAaIcon />
                        </ListItemIcon>
                        <ListItemText primary={
                            <Typography variant='body'>Palindrome checker</Typography>
                        } />
                    </ListItemButton>
                    <Divider />
                    <ListItemButton sx={{ paddingLeft: 0, minHeight: 55 }}
                    to='/react-test/dessert-shop' component={RouterLink}>
                        <ListItemIcon sx={{ minWidth: 40 }}>
                            <TextAaIcon />
                        </ListItemIcon>
                        <ListItemText primary={
                            <Typography variant='body'>Dessert Shop</Typography>
                        } />
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