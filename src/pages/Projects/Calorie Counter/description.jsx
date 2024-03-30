import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export const CalorieCounterDescription = () => {
    return (
        <>
            <Box display='grid' gap='20px'>
                <Typography
                    variant='headline'
                    color='primary.light'
                >Description</Typography>
                <Typography variant='body1' color='primary.light' fontWeight='Light'>
                    The Calorie Calculator & Tracker project is a dynamic JavaScript application designed to help users manage their calorie intake and expenditure effectively. It provides users with the ability to track consumed and burned calories, set a base goal, and add food items and exercises to specific meal groups such as "breakfast," "lunch," "dinner," or "snacks." The project also includes a visual representation of remaining calories through a circular progress bar.
                    <br /><br />
                    Key Features:
                    <br /><br />
                    1. Calorie tracking: Users can track consumed and burned calories, allowing them to monitor their overall calorie balance.
                    <br /><br />
                    2. Base goal setting: Users can set a base calorie goal, which dynamically adjusts based on added food items and exercises.
                    <br /><br />
                    3. Food and exercise groups: Users can add food items with calorie values to meal groups and exercises to the Exercise group, affecting the base calorie goal accordingly.
                    <br /><br />
                    4. Edit and delete inputs: Users have the ability to edit or delete their inputs for each meal group and exercise, providing flexibility and control over their calorie tracking.
                    <br /><br />
                    5. Visual progress bar: The application features a visual circular progress bar that visually represents the remaining calories, filling up based on the user's progress towards their calorie goal.
                    <br /><br />
                    Overall, the Calorie Calculator & Tracker project utilizes JavaScript to create an interactive and informative platform for users to monitor and manage their calorie intake and expenditure, helping them achieve their health and fitness goals.
                </Typography>
            </Box>
        </>
    )
}