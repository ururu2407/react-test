import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export const DessertShopDescription = () => {
    return (
        <>
            <Box display='grid' gap='20px'>
                <Typography
                    variant='headline'
                    color='primary.light'
                >Description</Typography>
                <Typography variant='body1' color='primary.light' fontWeight='Light'>
                    The Dessert Shop project is a JavaScript-based application designed to facilitate the selection and purchase of desserts from a predefined list. Users have the capability to browse through available desserts, switch between dessert types, and add selected items to their shopping cart. The application provides a user-friendly interface for seamless navigation and a smooth shopping experience.
                    <br /><br />
                    Key Features:
                    <br /><br />
                    1. Browse and select desserts: Users can explore a variety of desserts categorized by type, such as cakes, pastries, and ice creams.
                    <br /><br />
                    2. Switch between dessert types: The application allows users to easily switch between different types of desserts to find their desired options.
                    <br /><br />
                    3. Add desserts to cart: Users can add selected desserts to their shopping cart for checkout and purchase.
                    <br /><br />
                    4. User-friendly interface: The interface is designed to be intuitive and easy to navigate, enhancing the overall user experience.
                    <br /><br />
                    5. Smooth shopping experience: The project aims to provide a seamless and efficient process for users to browse, select, and purchase desserts of their choice.
                    <br /><br />
                    Overall, the Dessert Shop project leverages JavaScript to create a functional and interactive platform for dessert enthusiasts to explore and indulge in their favorite treats.
                </Typography>
            </Box>
        </>
    )
}