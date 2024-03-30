import React from 'react';
import { Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material';

export const First = () => {
    const theme = useTheme();
    return (
        <>
            <Box className="hero">
                <Box className="info-text" display={'flex'} justifyContent={'space-between'}  marginBottom={'48px'}>
                    <Typography variant='body3' fontWeight='Ligth' color="primary.contrastText">
                        Yaroslav M., Oleksii K.
                    </Typography>
                    <Typography variant='body3' fontWeight='Ligth' color="primary.contrastText">
                        09/01/2024
                    </Typography>
                </Box>
                <Box className="hero-text"  display={'grid'} gap={'8px'}>
                    <Typography variant='display' color="primary.light">
                        Welcome 👋
                    </Typography>
                    <Typography variant='body1' fontWeight='Ligth' color="primary.light"
                    sx={{ 
                        maxWidth: { xs: '576px', md: '616px', lg: '636px', xl: '776px' },

                    }}>
                        This website is the result of our project practice in the College of Computer Science. Here you will find a showcase of our JavaScript projects created with love and attention to detail. We are optimistic that these projects will be engaging and provide insight into our knowledge and efforts.
                    </Typography>
                </Box>
            </Box>
        </>
    )
}