import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export const MusicPlayerDescription = () => {
    return (
        <>
            <Box display='grid' gap='20px'>
                <Typography
                    variant='headline'
                    color='primary.light'
                >Description</Typography>
                <Typography variant='body1' color='primary.light' fontWeight='Light'>
                The Unique Design Music Player project is a JavaScript-based application that offers users the ability to listen to music and manage their playlists, including the option to delete tracks. The project stands out with its unconventional design, mimicking a physical media player for an immersive user experience.
                    <br /><br />
                    Key Features:
                    <br /><br />
1. Music Playback: Users can play their favorite tracks and enjoy uninterrupted music listening within the application.
<br /><br />
2. Playlist Management: The application allows users to create and manage playlists, adding or removing tracks as desired.
<br /><br />
3. Track Deletion: Users have the option to delete specific tracks from their playlists or library, providing flexibility in music organization.
<br /><br />
4. Unique Design: The project features a distinctive design that resembles a physical media player, enhancing the visual appeal and user engagement.
<br /><br />
5. User-Friendly Interface: Despite its unique design, the interface remains intuitive and easy to navigate, ensuring a seamless music playback experience.
<br /><br />
User Interaction:
<br /><br />
- Users can navigate through their music library, select tracks, and add them to playlists.
<br /><br />
- Deleting tracks is straightforward, with users able to remove unwanted songs from playlists or the entire library.

<br /><br />
- The unique design elements, such as interactive buttons and visual feedback, enhance the overall user interaction and enjoyment.
<br /><br />
Overall, the Unique Design Music Player project combines functionality with an eye-catching design, offering music enthusiasts a novel way to experience their favorite tunes while managing their music collections effortlessly.
                </Typography>
            </Box>
        </>
    )
}