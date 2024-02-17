import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 0 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

export const CustomTab = (props) => {
    return (
        <Tab
            {...props}
            disableRipple
            sx={{
                '&.Mui-selected': {
                    // Стили для активного таба
                    boxShadow: 'none',
                },
                '&:hover': {
                    // Стили для hover

                    '& .custom-first-label': {
                        opacity: props.selected ? '1' : '0',
                        // visibility: props.selected ? '' : 'hidden',
                        // left: '-5px',
                        transition: 'all 0.2s'
                    },
                    '& .custom-second-label': {
                        transform: props.selected ? '' : 'translateX(-47px)',
                        color: props.selected ? '' : 'primary.primary',
                        transition: 'all 0.2s'
                    },
                    '& .custom-arrow-label': {
                        // Стили для Typography внутри таба
                        opacity: props.selected ? '0' : '1',
                        transition: 'all 0.2s'
                    },
                },
                '&.MuiTab-textColorInherit.Mui-selected': {
                    // Стили для активного таба (дополнительные стили)
                    // Если нужно убрать эффект волны при нажатии, установите boxShadow в 'none'
                    boxShadow: 'none',
                },
                '&.MuiTab-root.Mui-selected': {
                    // Дополнительные стили для активного таба (если нужно)
                    color: 'primary.primary',
                    boxShadow: 'none',
                    transition: 'all 0.2s'
                },
                '&.MuiTab-root': {
                    // Дополнительные стили для неактивного таба (если нужно)
                    boxShadow: 'none',
                    color: 'primary.contrastText',
                    display: 'flex',
                    alignItems: 'baseline',
                    padding: '16px 0',
                    paddingLeft: '0px',
                },
                '& .custom-first-label': {
                    // Стили для Typography внутри таба
                    color: props.selected ? 'primary.main' : 'primary.contrastText',
                    backgroundColor: props.selected ? 'primary.primary' : 'initial',
                    transition: 'all 0.2s'
                },
                '& .custom-arrow-label': {
                    // Стили для Typography внутри таба
                    opacity: 0
                },

            }}
        />
    );
};
export const a11yProps = (index) => {
    return {
        id: `vertical-tab-${index}`,
        className: `vertical-tab`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

CustomTab.propTypes = {
    label: PropTypes.string.isRequired,
    ...Tabs.propTypes, // Прокидываем все свойства Tabs

};

export const GlobalInputBaseStyles = () => (
    <style>
        {`
        .MuiInputBase-root {
            border: 1px solid;
            border-radius: 8px;
            border-color: #9A9693;
            padding: 4px 16px;
            transition: all 0.2s easy;
        }
        .MuiInputBase-input::placeholder {
            color: #9A9693;
            opacity: 1;
            transition: all 0.2s easy;
        }
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
        .MuiInputBase-input::placeholder {
            color: #9A9693;
            opacity: 1;
            transition: all 0.2s easy;
        }
        .MuiInputBase-root:hover {
            border: 1px solid;
            border-radius: 8px;
            border-color: #F2F2F2;
            color: #F2F2F2;
            transition: all 0.2s easy;
        }
        .MuiInputBase-root.Mui-focused {
            border: 1px solid;
            border-radius: 8px;
            border-color: #E5CE71;
            color: #F2F2F2;
            transition: all 0.2s easy;
        }
        .MuiInputBase-root:hover:before {
            display: none
        }
        .MuiInputBase-root.Mui-focused:after {
            display: none
        }
        `}
    </style>
);

export const CustomButton = ({ buttonText, onClick, padding = '8px 20px' }) => {
    return (
        <Button
            sx={{
                minHeight: '40px',
                border: '1px solid',
                borderColor: 'primary.light',
                color: 'primary.light',
                borderRadius: '12px',
                textTransform: 'none',
                padding: padding, // используем переданное значение padding
                fontFamily: `"Inconsolata", sans-serif`,
                fontSize: '14px',
                lineHeight: '1.42',
                letterSpacing: '0.1px',
                fontWeight: '500',
                '&:hover': {
                    borderColor: 'primary.primary',
                    backgroundColor: 'button.hover',
                    color: 'primary.primary'
                },
                '&:active': {
                    borderColor: 'primary.primary',
                    backgroundColor: 'button.pressed',
                    color: 'primary.primary'
                },
                '&:focus': {
                    borderColor: 'primary.primary',
                    backgroundColor: 'button.pressed',
                    color: 'primary.primary'
                }
            }}
            onClick={onClick}
        >
            {buttonText}
        </Button>
    );
};

