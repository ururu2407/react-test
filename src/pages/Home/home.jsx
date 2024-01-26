import { First } from './first/first'
import { Second } from './second/second'
import { Box } from '@mui/material';

export const Home = () => {
    return (
        <>
            <Box className="main" display={'grid'} gap={'64px'}>
                <First />
                <Second />
            </Box>
        </>
    );
}

export default Home;
