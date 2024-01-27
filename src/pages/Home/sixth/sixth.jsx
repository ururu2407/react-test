import React from 'react';
import {
    Typography,
    Box,
    List,
    ListItem,
    ListItemText,
    ListItemIcon
} from '@mui/material';
import { BehanceIconLight, GithubIconLight, HandshakeIcon } from '../../../utils/icons';


export const Sixth = () => {
    return (
        <>
            <Box display={'grid'} gap='20px'>
                <Box display={'grid'} gap='8px'>
                    <Typography
                        sx={{ border: 1, borderRadius: '8px', width: '29px', height: '20px' }}
                        display={'flex'} justifyContent={'center'} alignItems={'center'}
                        fontWeight='Light'
                        variant='body4'
                        color="primary.contrastText">
                        06</Typography>
                    <Typography variant='headline' color='primary.light'>Results</Typography>
                </Box>
                <Typography
                    variant='title'
                    color='primary.light'
                >Reflections and definitions</Typography>
                <Box display={'flex'}>
                    <Box width={'103px'}
                        paddingRight={'20px'}
                        sx={{ borderRight: '1px solid', borderColor: 'divider' }}>
                        <Typography
                            variant='body'
                            fontWeight='Light'
                            color='primary.contrastText'>Preparatory stage</Typography>
                    </Box>
                    <Box paddingLeft={'20px'}
                        display='grid'
                        gap='16px'>
                        <Typography
                            sx={{ border: '1px dashed', borderRadius: '12px', borderColor: 'mintGreen', width: 'fit-content' }}
                            padding={'12px 15px'}
                            variant='body2'
                            fontWeight='Light'
                            color='primary.light'>Teambuilding</Typography>
                        <Typography
                            sx={{ border: '1px dashed', borderRadius: '12px', borderColor: 'mintGreen', width: 'fit-content' }}
                            padding={'12px 15px'}
                            variant='body2'
                            fontWeight='Light'
                            color='primary.light'>Project theme selection</Typography>
                        <Typography
                            sx={{ border: '1px dashed', borderRadius: '12px', borderColor: 'mintGreen', width: 'fit-content' }}
                            padding={'12px 15px'}
                            variant='body2'
                            fontWeight='Light'
                            color='primary.light'>Develop project plan</Typography>
                    </Box>
                </Box>
                <Typography
                    variant='body1'
                    fontWeight='Light'
                    color='primary.light'
                >At the beginning of our journey through project practice, my classmate and I teamed up. The first thing we did was to divide our roles.</Typography>
                <List sx={{ padding: 0 }}>
                    <ListItem sx={{ padding: '12px 0 12px 0', height: '48px' }}>
                        <ListItemIcon sx={{ minWidth: '40px' }}>
                            <BehanceIconLight />
                        </ListItemIcon>
                        <ListItemText primary={
                            <Typography
                                variant='body1'
                                color='primary.light'
                                fontWeight='Light'
                            >Designer - Yaroslav M.</Typography>
                        } />
                    </ListItem>
                    <ListItem sx={{ padding: '12px 0 12px 0', height: '48px' }}>
                        <ListItemIcon sx={{ minWidth: '40px' }}>
                            <GithubIconLight />
                        </ListItemIcon>
                        <ListItemText primary={
                            <Typography
                                variant='body1'
                                color='primary.light'
                                fontWeight='Light'
                            >Developer - Oleksii K.</Typography>
                        } />
                    </ListItem>
                </List>
                <Box display='flex' justifyContent='center' alignItems='center'>
                    <Box sx={{ width: '48px', height: '48px' }} padding='14px'>
                        <BehanceIconLight sx={{ width: '48px', height: '48px' }} />
                    </Box>
                    <HandshakeIcon sx={{ width: '32px', height: '32px' }} />
                    <Box sx={{ width: '48px', height: '48px' }} padding='14px'>
                        <GithubIconLight sx={{ width: '48px', height: '48px' }} />
                    </Box>
                </Box>
                <Typography
                    variant='body1'
                    fontWeight='Light'
                    color='primary.light'
                >After that, we started discussing potential topics for our projects. Oleksii mentioned that he intended to create a bunch of JavaScript projects, there was an idea to develop their design.</Typography>
                <Box display={'grid'} gap='20px'>
                    <Box
                        display={'flex'} justifyContent={'center'} alignItems={'center'}
                        padding={'8px'} border={1} borderRadius={'16px'}
                        borderColor={'divider'}>
                        <img src="https://s3-alpha-sig.figma.com/img/6a27/7f3b/5cabc87345042c683d7dff81fc173745?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dlOAoFZCQbqZkVI-q2Dzt5Fu92KIxRLe2cuss5QXGboAqGHuunemx94Yz9LGzuZ~1ebuonV7hVUpNzhI5eC0R~nyvjZxbmSz2sUtpHx~pI8KlYXU-y3vaqwEj0dWQD6ikLk5bUZXw6gxmRCtB8eJlcGTv9jJsP6MLBYJW1yOiPoss2lkjMSF42JQWJM8z3QM~09FcywiDTjgmCKBSu1vNh3IPS~6KWyI-gf5FFMqXIE9K64J1muSFoOD~wba7bepr1UFTaWBxrIkOuiLfhWF7f~-4Z5dBCbUZ~UeHjVPyzvD~JIHC8a-OXx1wm1nHS6Ap1S2Z7H6O9e0Y48ZsGCpjQ__"
                            alt=""
                            width={'100%'}
                            style={{ borderRadius: '16px' }}  /* Apply borderRadius directly to the img */
                        />
                    </Box>
                    <Box display={'flex'}>
                        <Box
                            display={'flex'} justifyContent={'center'} alignItems={'center'}
                            padding={'8px'} border={1} borderRadius={'16px'}
                            borderColor={'divider'}>
                            <img src="https://s3-alpha-sig.figma.com/img/a743/97b1/8939d34c75d4663574b3a98b3579d8c0?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gvI731FzZvTj1chMdK7FlEDzSH6jHM3IrL0b7bfvdX3z0D3rrqG5gCU-zUV13a9tiSLJtG7tCYq-v2UFfSWTEa31r8Py0M6IQgT5CIvM1IjQbWvgRUzDdUa3BBlu22QrUb-UN9Az8Q88W7uvxysDSNUBSiKRdz-r6MfBh-Tawoe9D~2QOCZXpIaK48~5RCXq-~GInaTPACZ-e9cD6vEGoipkJwxloUcSfz35Onko9Dwihm~1iCZ6-2udQ~yblBZro7w3oT8qe8XofOMG1s2of1kNeHiNeVRjo4l7qnjwsg~dGxTr3XPeixrG6AtXHaMiEncf1SVPb8PoF2AZbl8ZWg__"
                                alt=""
                                width={'100%'}
                                style={{ borderRadius: '16px' }}  /* Apply borderRadius directly to the img */
                            />
                        </Box>
                        <Box
                            display={'flex'} justifyContent={'center'} alignItems={'center'}
                            padding={'8px'} border={1} borderRadius={'16px'}
                            borderColor={'divider'}>
                            <img src="https://s3-alpha-sig.figma.com/img/a743/97b1/8939d34c75d4663574b3a98b3579d8c0?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gvI731FzZvTj1chMdK7FlEDzSH6jHM3IrL0b7bfvdX3z0D3rrqG5gCU-zUV13a9tiSLJtG7tCYq-v2UFfSWTEa31r8Py0M6IQgT5CIvM1IjQbWvgRUzDdUa3BBlu22QrUb-UN9Az8Q88W7uvxysDSNUBSiKRdz-r6MfBh-Tawoe9D~2QOCZXpIaK48~5RCXq-~GInaTPACZ-e9cD6vEGoipkJwxloUcSfz35Onko9Dwihm~1iCZ6-2udQ~yblBZro7w3oT8qe8XofOMG1s2of1kNeHiNeVRjo4l7qnjwsg~dGxTr3XPeixrG6AtXHaMiEncf1SVPb8PoF2AZbl8ZWg__"
                                alt=""
                                width={'100%'}
                                style={{ borderRadius: '16px' }}  /* Apply borderRadius directly to the img */
                            />
                        </Box>
                    </Box>
                    <Box
                        display={'flex'} justifyContent={'center'} alignItems={'center'}
                        padding={'8px'} border={1} borderRadius={'16px'}
                        borderColor={'divider'}>
                        <img src="https://s3-alpha-sig.figma.com/img/ad0c/130a/bb3f8871e8325bcf3f424d00f3823a06?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SnjZwVhaSJIm8YHCXSFFZDpK04sKx9rivQ9Nm~f-MCLGWPBFYSOdu01WjhHQEEZFMMD3Q5BKzqDfKHk4aiIZp~ne9bC84UuKlhRM0qdRB-n5-BLkV-qtAlj~M-zXz8fEzDjv~Zf3Q5V6iZs-gVV-OiXDMCujMz0NovXwp164VdCSiTqkYoRzXxTx7HclfcbjfybT6sqle-J2u-XH3c0Kx5WbLHlpDMEkdKBi7H6eq36kfON8VZC~G2rgRS-HURElNPgc6rhRsEIyzqcp6ryAuPqR-3TOZpR3w2Sqo72PmrzSdrXbTDy4UjfGRBrg3fRjS1YFb0oo-THIIrk~ArJpAA__"
                            alt=""
                            width={'100%'}
                            style={{ borderRadius: '16px' }}  /* Apply borderRadius directly to the img */
                        />
                    </Box>
                </Box>
                <Typography
                    variant='body1'
                    color="primary.light"
                    fontWeight='Light'
                    marginBottom={'44px'}
                >However, on closer examination, we were struck by the idea that we could go further than simple design for these projects. Instead, we considered the concept of creating a website portfolio that would be a hallmark of our skills and achievements.
                    <br /><br />This project allowed us to combine our talents in various fields and create something that reflects not only our achievements, but also our creative vision and ambitions in the field of programming.
                </Typography>
                <Typography
                    variant='title'
                    color='primary.light'
                >Execution of work</Typography>
                <Box display={'flex'}>
                    <Box width={'103px'}
                        paddingRight={'20px'}
                        sx={{ borderRight: '1px solid', borderColor: 'divider' }}>
                        <Typography
                            variant='body'
                            fontWeight='Light'
                            color='primary.contrastText'>Main stage</Typography>
                    </Box>
                    <Box paddingLeft={'20px'}
                        display='grid'
                        gap='16px'>
                        <Typography
                            sx={{ border: '1px dashed', borderRadius: '12px', borderColor: 'carolinaBlue', width: 'fit-content' }}
                            padding={'12px 15px'}
                            variant='body2'
                            fontWeight='Light'
                            color='primary.light'>Execution of work</Typography>
                        <Typography
                            sx={{ border: '1px dashed', borderRadius: '12px', borderColor: 'carolinaBlue', width: 'fit-content' }}
                            padding={'12px 15px'}
                            variant='body2'
                            fontWeight='Light'
                            color='primary.light'>Progress reporting</Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}