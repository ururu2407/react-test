import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { TabPanel, CustomTab, a11yProps } from '../../../components/customs';
import { ArrowRight } from '../../../utils/icons';
import { DessertShopProgram } from './program';
import { DessertShopDescription } from './description';
import { DessertShopCode } from './code';

export const DessertShop = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Box className='main'>
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{ marginBottom: '48px' }}
                >
                    <CustomTab label={
                        <Box textTransform='none' display='flex' alignItems={'center'} width={'100%'} justifyContent={'space-between'}>
                            <Box display='flex' gap='16px' alignItems={'center'}>
                                <Typography className='custom-first-label '
                                    sx={{ border: 1, borderRadius: '8px', width: '29px', height: '20px' }}
                                    display={'flex'} justifyContent={'center'} alignItems={'center'}
                                    fontWeight='Light'
                                    variant='body4'>
                                    01
                                </Typography>
                                <Typography className='custom-second-label' variant='body'>Dessert Shop</Typography>
                            </Box>
                            <ArrowRight className='custom-arrow-label' sx={{ height: '9.5px', width: '6px', }} />
                        </Box>

                    } {...a11yProps(0)} />
                    <CustomTab label={
                        <Box textTransform='none' display='flex' alignItems={'center'} width={'100%'} justifyContent={'space-between'}>
                            <Box display='flex' gap='16px' alignItems={'center'}>
                                <Typography className='custom-first-label'
                                    sx={{ border: 1, borderRadius: '8px', width: '29px', height: '20px' }}
                                    display={'flex'} justifyContent={'center'} alignItems={'center'}
                                    fontWeight='Light'
                                    variant='body4'>
                                    02
                                </Typography>
                                <Typography className='custom-second-label' variant='body'>Description</Typography>
                            </Box>
                            <ArrowRight className='custom-arrow-label' sx={{ height: '9.5px', width: '6px', }} />
                        </Box>

                    } {...a11yProps(1)} />
                    <CustomTab label={
                        <Box textTransform='none' display='flex' alignItems={'center'} width={'100%'} justifyContent={'space-between'}>
                            <Box display='flex' gap='16px' alignItems={'center'}>
                                <Typography className='custom-first-label'
                                    sx={{ border: 1, borderRadius: '8px', width: '29px', height: '20px' }}
                                    display={'flex'} justifyContent={'center'} alignItems={'center'}
                                    fontWeight='Light'
                                    variant='body4'>
                                    03
                                </Typography>
                                <Typography className='custom-second-label' variant='body'>Code</Typography>
                            </Box>
                            <ArrowRight className='custom-arrow-label' sx={{ height: '9.5px', width: '6px', }} />
                        </Box>

                    } {...a11yProps(2)} />
                </Tabs>
                <TabPanel sx={{ padding: '0px' }} value={value} index={0}>
                    <DessertShopProgram />
                </TabPanel>
                <TabPanel sx={{ padding: '0px' }} value={value} index={1}>
                    <DessertShopDescription />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <DessertShopCode/>
                </TabPanel>
            </Box>
        </>
    );
};
