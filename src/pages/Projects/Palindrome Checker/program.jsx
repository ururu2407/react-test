import React, { useRef, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { GlobalInputBaseStyles } from '../../../components/customs';

export const PalindromeCheckerProgram = () => {
    const inputRef = useRef()
    const [resultBool, setResultBoll] = useState(null)
    const [originalText, setOriginalText] = useState(0)
    const checkPalindrome = (input) => {
        const original = input
        if (input === '') {
            alert('Please input a value')
            return
        }

        const changedStr = input.replace(/\W|_/g, '',).toLowerCase();
        setOriginalText(original)
        if (changedStr === [...changedStr].reverse().join('')) {
            setResultBoll(1)
        } else {
            setResultBoll(2)
        }
    }
    function buttonFunc() {
        checkPalindrome(inputRef.current.value)
        console.log(inputRef.current.value)
        inputRef.current.value = ''

    }
    const [isFocused, setIsFocused] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    
    return (
        <>
            <GlobalInputBaseStyles />
            <Box display='grid' gap='20px'>
                <Typography
                    variant='headline'
                    color='primary.light'
                >Palindrome Checker</Typography>
                <Box display='grid'
                    padding='24px 16px'
                    gap='24px'
                    borderRadius='16px'
                    sx={{ boxShadow: resultBool === 1 ? '0 0 4px 0 #5FCBA4' : (resultBool === 2 ? '0 0 4px 0 #FF7777' : '0 0 4px 0 #000') }}
                    boxShadow={'0 0 4px 0 #000'}
                >
                    <Box>
                        <Typography variant='body2' fontWeight='Light' color='primary.light'>
                            💡 A palindrome is a word or phrase that reads the same backwards and forwards, e.g. level, refer.
                        </Typography>
                    </Box>
                    <Box display={'grid'} gap='16px'>
                        <input className='input'
                            ref={inputRef}
                            fullWidth
                            placeholder='Type to check...'
                            style={{
                                fontFamily: "Inconsolata",
                                background: 'none',
                                color: '#F2F2F2',
                                fontSize: '16px',
                                lineHeight: '1.5',
                                letterSpacing: '0.5px',
                                padding: '15px 16px',
                                border: '1px solid',
                                borderColor: isFocused ?
                                    '#E5CE71' :
                                    (isHovered ? '#F2F2F2' :
                                        (resultBool === 1 ? '#5FCBA4' : (resultBool === 2 ? '#FF7777' : '#9A9693'))),
                                borderRadius: '12px',
                                outline: 'none',
                                transition: 'border-color 0.3s',
                            }}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        />
                        <Button onClick={buttonFunc}
                            fullWidth
                            sx={{
                                backgroundColor: resultBool === 1 ? 'mintGreen' : (resultBool === 2 ? 'coralRed' : 'primary.primary'),
                                fontWeight: 'Regular',
                                textTransform: 'none',
                                padding: '12px 20px',
                                borderRadius: '12px',
                                '&:hover': {
                                    backgroundColor: resultBool === 1 ? 'mintGreen' : (resultBool === 2 ? 'coralRed' : 'primary.primary'),
                                }
                            }}>
                            <Typography variant='label1'>Check Palindrome</Typography>
                        </Button>
                    </Box>
                    <Box sx={{display: originalText === 0 ? 'none' : 'block'}}>
                        {
                            resultBool === 1 ? (
                                <Typography variant='body2' fontWeight='Medium' color='primary.light'>
                                    Yes,  ‘<span style={{ color: '#5FCBA4' }}>{originalText}</span>’ is a palindrome!
                                </Typography>
                            ) : (
                                <Typography variant='body2' fontWeight='Medium' color='primary.light'>
                                    No, ‘<span style={{ color: '#FF7777' }}>{originalText}</span>’ is not a palindrome!
                                </Typography>
                            )
                        }
                    </Box>
                </Box>
            </Box>
        </>
    );
};
