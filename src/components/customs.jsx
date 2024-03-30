import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {useTheme} from '@mui/material';
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
export const CustomListStyles = {
    listItem: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        padding: '0px 0px',
        borderRadius: '24px',
        color: 'primary.contrastText',
        minHeight: 55,
        overflow: 'hidden',

        '& .arrow': {
            display: 'flex',
            position: 'absolute',
            right: '0px',
            opacity: '0',
            justifyContent: 'end',
            transition: 'all 0.2s ease',

            paddingRight: '5px',
        },
        '.list-item': {
            transform: 'translateX(0px)',
            transition: 'all 0.2s ease',

        },
        '&:hover, &:focus': {
            color: 'primary.light',
            transition: 'all 0.2s ease',
            backgroundColor: 'rgba(255, 255, 255, 0)',

            '& .list-item': {
                transform: 'translateX(-40px)', // Изменение цвета фона при ховере
                transition: 'all 0.2s ease',
            },
            
            '& .arrow': {
                opacity: '1',
                '& svg': {
                    height: '9.5px',
                    width: '6px',
                }
            }
        }
    },
   
    listItemIcon: {
        minWidth: 40,
    }
}

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
                        color: props.selected ? '' : 'primary.light',
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
                '& .custom-second-label': {
                    // Стили для Typography внутри таба
                    transform: 'translateX(0px)',

                    transition: 'all 0.2s'
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
            font-size: 16px;
            line-height: 1.5;
            letter-spacing: 0.5px;
            height: 40px;
            border: 1px solid;
            border-radius: 8px;
            border-color: #9A9693;
            padding: 11px 16px;
            transition: all 0.2s ease;
        }
        .MuiInputBase-input::placeholder {
            color: #9A9693;
            opacity: 1;
            transition: all 0.2s ease;
        }
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
        .MuiInputBase-input::placeholder {
            color: #9A9693;
            opacity: 1;
            transition: all 0.2s ease;
        }
        .MuiInputBase-root:hover {
            border: 1px solid;
            border-radius: 8px;
            border-color: #F2F2F2;
            color: #F2F2F2;
            transition: all 0.2s ease;
        }
        .MuiInputBase-root.Mui-focused {
            border: 1px solid;
            border-radius: 8px;
            border-color: #E5CE71;
            color: #F2F2F2;
            transition: all 0.2s ease;
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

export const OutlinedButton = ({ buttonText, onClick, padding = '8px 16px',  width = 'auto' }) => {
    return (
        <Button
            sx={{
                minHeight: '40px',
                maxWidth: width, // добавляем настраиваемую ширину
                width: '100%',
                border: '1px solid',
                borderColor: 'outlined',
                color: 'primary.primary',
                borderRadius: '12px',
                textTransform: 'none',
                padding: padding, // используем переданное значение padding
                fontFamily: `"Inconsolata", sans-serif`,
                fontSize: '16px',
                lineHeight: '1.42',
                letterSpacing: '0.1px',
                fontWeight: '400',
                '&:hover': {
                    backgroundColor: 'button.hover',
                },
                '&:active': {
                    backgroundColor: 'button.pressed',
                },
                '&:focus': {
                    backgroundColor: 'button.pressed',
                }
            }}
            onClick={onClick}
        >
            {buttonText}
        </Button>
    );
};

export const PrimaryButton = ({ buttonText, onClick, padding = '12px 20px', width = 'auto', height = '40px' }) => {
    return (
        <Button
            sx={{
                maxHeight: height,
                maxWidth: width, // добавляем настраиваемую ширину
                width: '100%',
                backgroundColor: 'primary.primary',
                color: 'primary.onPrimary',
                borderRadius: '12px',
                textTransform: 'none',
                padding: padding, // используем переданное значение padding
                fontFamily: `"Inconsolata", sans-serif`,
                fontSize: '16px',
                lineHeight: '1.42',
                letterSpacing: '0.1px',
                fontWeight: '400',
                '&:hover': {
                    backgroundColor: 'primary.primary',
                },
                '&:active': {
                    backgroundColor: 'primary.primary',
                },
                '&:focus': {
                    backgroundColor: 'primary.primary',
                }
            }}
            onClick={onClick}
        >
            {buttonText}
        </Button>
    );
};

export const TextButton = ({ buttonText, onClick, padding = '12px 20px',  width = 'auto', }) => {
    return (
        <Button
            sx={{
                maxHeight: '40px',
                maxWidth: width, // добавляем настраиваемую ширину
                width: '100%',
                backgroundColor: 'none',
                color: 'primary.primary',
                borderRadius: '12px',
                textTransform: 'none',
                padding: padding, // используем переданное значение padding
                fontFamily: `"Inconsolata", sans-serif`,
                fontSize: '16px',
                lineHeight: '1.42',
                letterSpacing: '0.1px',
                fontWeight: '400',
                '&:hover': {
                    backgroundColor: 'button.hover',
                },
                '&:active': {
                    backgroundColor: 'button.pressed',
                },
                '&:focus': {
                    backgroundColor: 'button.pressed',
                }
            }}
            onClick={onClick}
        >
            {buttonText}
        </Button>
    );
};
