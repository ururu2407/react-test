import { First } from './first/first'
import { Second } from './second/second'
import { Third } from './third/third';
import { Fourth } from './fourth/fourth';
import { Fifth } from './fifth/fifth';
import { Sixth } from './sixth/sixth';
import { Box } from '@mui/material';

export const Home = () => {
    return (
        <>
            <Box className="main" display={'grid'} gap={'80px'}>
                <First />
                <Second />
                <Third />
                <Fourth />
                <Fifth />
                <Sixth />
            </Box>
        </>
    );
}

export default Home;
