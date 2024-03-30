import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export const TodoDescription = () => {
    return (
        <>
            <Box display='grid' gap='20px'>
                <Typography
                    variant='headline'
                    color='primary.light'
                >Description</Typography>
                <Typography variant='body1' color='primary.light' fontWeight='Light'>
                    The Todo List Manager project is a comprehensive JavaScript application designed to help users manage their tasks effectively. It allows users to add tasks with titles, dates, and descriptions, providing a clear overview of their responsibilities. Additionally, the application includes features such as marking tasks as completed with checkboxes, moving them to the "Done" group, editing or deleting tasks, and displaying a visual representation of completed versus total tasks.
                    <br /><br />
                    Key Features:
                    <br /><br />
                    1. Task creation: Users can add tasks with titles, dates, and descriptions to the todo list.
                    <br /><br />
                    2. Task completion: Tasks can be marked as completed using checkboxes, and completed tasks are moved to the "Done" group for easy tracking.
                    <br /><br />
                    3. Task management: Users have the ability to edit or delete tasks as needed, allowing for flexibility in task management.
                    <br /><br />
                    4. Visual task count: The application prominently displays a count of completed tasks versus total tasks at the top, providing users with instant feedback on their progress.
                    <br /><br />
                    5. User-friendly interface: The interface is designed to be intuitive and visually appealing, enhancing the overall user experience of managing tasks efficiently.
                    <br /><br />
                    Overall, the Todo List Manager project leverages JavaScript to create a robust task management system that empowers users to stay organized and productive.
                </Typography>
            </Box>
        </>
    )
}