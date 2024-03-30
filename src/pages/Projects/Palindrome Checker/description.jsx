import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export const PalindromeCheckerDescription = () => {
    return (
        <>
            <Box display='grid' gap='20px'>
                <Typography
                    variant='headline'
                    color='primary.light'
                >Description</Typography>
                <Typography variant='body1' color='primary.light' fontWeight='Light'>
                    The Palindrome Checker project is a simple JavaScript application that checks if a given word or phrase is a palindrome. What sets this project apart is its design feature that provides visual feedback using green or red color shadows around the container based on whether the input is a palindrome or not.
                    <br /><br />
                    Key Features:
                    <br /><br />
                    1. Palindrome Verification: Users can input a word or phrase, and the application checks if it is a palindrome (reads the same forwards and backwards).
                    <br /><br />
                    2. Visual Feedback: The design includes a container that dynamically changes its shadow color to green if the input is a palindrome or red if it is not, providing immediate visual feedback to the user.
                    <br /><br />
                    3. User-Friendly Interface: The interface is straightforward, with a clear input field for users to enter text and a visually appealing feedback mechanism.
                    <br /><br />
                    User Interaction:
                    <br /><br />
                    - Users input a word or phrase into the designated field.
                    <br /><br />
                    - Upon submission, the application instantly checks if the input is a palindrome.
                    <br /><br />
                    - The container's shadow color changes to green for palindromes or red for non-palindromes, helping users quickly determine the result.
                    <br /><br />
                    Overall, while the Palindrome Checker project focuses on a basic functionality, its visually engaging design with color-coded feedback adds an interactive element and enhances the user experience.
                </Typography>
            </Box>
        </>
    )
}