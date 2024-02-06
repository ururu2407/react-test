import React from 'react';
import {
    List,
    Box,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    Divider,
    Link
} from '@mui/material';
import {
    SwordsIcon,
    FlameIcon,
    MusicIcon,
    CalendarIcon,
    TextAaIcon,
    MedalIcon
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
                        6
                    </Typography>
                </Box>
                <List sx={{ color: "primary.light", padding: 0 }}>
                    <Divider />
                    <ListItemButton sx={{ paddingLeft: 0, minHeight: 55 }} to='/react-test/rpg' component={RouterLink}>
                        <ListItemIcon sx={{ minWidth: 40 }}>
                            <SwordsIcon />
                        </ListItemIcon>
                        <ListItemText primary={
                            <Typography variant='body'>Role Playing Game</Typography>
                        } />
                    </ListItemButton>
                    <Divider />
                    <ListItemButton sx={{ paddingLeft: 0, minHeight: 55 }}>
                        <ListItemIcon sx={{ minWidth: 40 }}>
                            <FlameIcon />
                        </ListItemIcon>
                        <ListItemText primary={
                            <Typography variant='body'>Calorie counter</Typography>
                        } />
                    </ListItemButton>
                    <Divider />
                    <ListItemButton sx={{ paddingLeft: 0, minHeight: 55 }}>
                        <ListItemIcon sx={{ minWidth: 40 }}>
                            <MusicIcon />
                        </ListItemIcon>
                        <ListItemText primary={
                            <Typography variant='body'>Music player</Typography>
                        } />
                    </ListItemButton>
                    <Divider />
                    <ListItemButton sx={{ paddingLeft: 0, minHeight: 55 }}>
                        <ListItemIcon sx={{ minWidth: 40 }}>
                            <CalendarIcon />
                        </ListItemIcon>
                        <ListItemText primary={
                            <Typography variant='body'>Date formatter</Typography>
                        } />
                    </ListItemButton>
                    <Divider />
                    <ListItemButton sx={{ paddingLeft: 0, minHeight: 55 }}>
                        <ListItemIcon sx={{ minWidth: 40 }}>
                            <TextAaIcon />
                        </ListItemIcon>
                        <ListItemText primary={
                            <Typography variant='body'>Palindrome checker</Typography>
                        } />
                    </ListItemButton>
                    <Divider />
                    <ListItemButton sx={{ paddingLeft: 0, minHeight: 55 }}>
                        <ListItemIcon sx={{ minWidth: 40 }}>
                            <MedalIcon />
                        </ListItemIcon>
                        <ListItemText primary={
                            <Typography variant='body'>Bulding football team cards</Typography>
                        } />
                    </ListItemButton>
                    <Divider />
                </List>
            </Box>
        </>
    )
}