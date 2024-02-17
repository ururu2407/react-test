import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';

export const MusicPlayerCode = () => {
    const codeString = `
    
    `;
    const [copy, setCopy] = useState(false)
    return (
        <>
            <Box display='grid' gap='20px'>
                <Typography
                    variant='headline'
                    color='primary.light'
                >Code</Typography>
                <Box overflow={'auto'} borderRadius={'12px'} paddingBottom={'10px'} bgcolor={'rgb(40, 44, 52)'}>
                    <Box
                        bgcolor={'#44475a'}
                        padding={'4px'}
                        paddingLeft={'10px'}
                        paddingRight={'10px'}
                        color={'primary.light'}
                        display={'flex'}
                        justifyContent={'space-between'}
                        alignItems={'center'}>
                        <Typography variant='body2'>Example Code</Typography>
                        {copy ? (
                            <Button variant="text"
                                sx={{
                                    color: 'primary.light',
                                    textTransform: 'none',
                                    gap: '5px'
                                }}
                            >
                                <CheckIcon sx={{ height: '16px', width: '16px' }} />
                                <Typography variant='body2'>Copied!</Typography>
                            </Button>
                        ) : (
                            <Button variant="text"
                                sx={{
                                    color: 'primary.light',
                                    textTransform: 'none',
                                    gap: '5px'
                                }} onClick={() => {
                                    navigator.clipboard.writeText(codeString)
                                    setCopy(true)
                                    setTimeout(() => {
                                        setCopy(false)
                                    }, 3000)
                                }}
                            >
                                <ContentCopyIcon sx={{ height: '16px', width: '16px' }} />
                                <Typography variant='body2'>Copy Code</Typography>
                            </Button>
                        )}
                    </Box>
                    <SyntaxHighlighter
                        language="javascript"
                        style={atomOneDark}
                        customStyle={{
                            fontSize: "16px",
                            maxHeight: "700px",
                            margin: '0'
                        }}
                        wrapLongLines={true}
                    >
                        {codeString}
                    </SyntaxHighlighter>
                </Box>
            </Box>
        </>
    )
}