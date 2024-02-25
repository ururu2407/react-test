import React from 'react';
import styles from './header.scss';
import { AppBar, Box, Link, Divider } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";
import { BehanceIcon, GithubIcon } from '../../utils/icons';

export const Header = () => {
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
                        {/* <Link className='li'
                            variant='label1'
                            underline='none'
                            color="primary.contrastText"
                            component={RouterLink}
                            to="/project">
                            Project
                        </Link> */}
                    </nav>
                    <nav className="nav-right">
                        <Link className='li'
                            underline='none'
                            color="primary.contrastText"
                            component={RouterLink}
                            to="/be">
                            <BehanceIcon/>
                        </Link>
                        <Link className='li'
                            underline='none'
                            color="primary.contrastText"
                            component={RouterLink}
                            to="/git">
                            <GithubIcon/>
                        </Link>
                    </nav>
                </Box>
                <Divider sx={{marginLeft: '20px', marginRight: '20px'}} />
            </AppBar>
        </>
    );
};