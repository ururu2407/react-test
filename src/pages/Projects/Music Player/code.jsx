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
    const [currentSong, setCurrentSong] = useState(null);
    const [songHistory, setSongHistory] = useState([]);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isSeeking, setIsSeeking] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [pauseTime, setPauseTime] = useState(0);
    const audioRef = useRef(new Audio());


    const [allSongs, setAllSongs] = useState([
        {
            id: 0,
            title: "Scratching The Surface",
            artist: "Quincy Larson",
            duration: "4:25",
            src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/scratching-the-surface.mp3",
        },
        {
            id: 1,
            title: "Can't Stay Down",
            artist: "Quincy Larson",
            duration: "4:15",
            src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/cant-stay-down.mp3",
        },
        {
            id: 2,
            title: "Still Learning",
            artist: "Quincy Larson",
            duration: "3:51",
            src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/still-learning.mp3",
        },
        {
            id: 3,
            title: "Cruising for a Musing",
            artist: "Quincy Larson",
            duration: "3:34",
            src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/cruising-for-a-musing.mp3",
        },
        {
            id: 4,
            title: "Never Not Favored",
            artist: "Quincy Larson",
            duration: "3:35",
            src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/never-not-favored.mp3",
        },
        {
            id: 5,
            title: "From the Ground Up",
            artist: "Quincy Larson",
            duration: "3:12",
            src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/from-the-ground-up.mp3",
        },
        {
            id: 6,
            title: "Walking on Air",
            artist: "Quincy Larson",
            duration: "3:25",
            src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/walking-on-air.mp3",
        },
        {
            id: 7,
            title: "Can't Stop Me. Can't Even Slow Me Down.",
            artist: "Quincy Larson",
            duration: "3:52",
            src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/cant-stop-me-cant-even-slow-me-down.mp3",
        },
        {
            id: 8,
            title: "The Surest Way Out is Through",
            artist: "Quincy Larson",
            duration: "3:10",
            src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/the-surest-way-out-is-through.mp3",
        },
        {
            id: 9,
            title: "Chasing That Feeling",
            artist: "Quincy Larson",
            duration: "2:43",
            src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/chasing-that-feeling.mp3",
        },
    ]);

    useEffect(() => {
        if (allSongs.length > 0) {
            setCurrentSong(allSongs[0]);
        }
    }, [allSongs]);

    const playSong = (id) => {
        const song = allSongs.find((song) => song.id === id);
        setCurrentSong(song);
        setSongHistory((prevHistory) => [...prevHistory, song]);

        const audio = audioRef.current;

        setCurrentTime(0);

        audio.src = song.src;
        audio.title = song.title;

        if (!isPlaying) {
            resumeSong();
        } else {
            audio.play();
            setIsPlaying(true);
        }
    };

    const pauseSong = () => {
        const audio = audioRef.current;
        audio.pause();

        setPauseTime(audio.currentTime);

        setIsPlaying(false);
    };

    useEffect(() => {
        const audio = audioRef.current;

        const handleTimeUpdate = () => {
            setCurrentTime(audio.currentTime);
            setDuration(audio.duration);
        };

        const handleSongEnded = () => {
            const currentIndex = allSongs.findIndex((song) => song.id === currentSong.id);
            if (currentIndex !== -1 && currentIndex < allSongs.length - 1) {
                playSong(allSongs[currentIndex + 1].id);
            } else {
                pauseSong();
                setCurrentSong(null);
            }
        };

        audio.addEventListener("timeupdate", handleTimeUpdate);
        audio.addEventListener("ended", handleSongEnded);

        return () => {
            audio.removeEventListener("timeupdate", handleTimeUpdate);
            audio.removeEventListener("ended", handleSongEnded);
        };
    }, [allSongs, currentSong, pauseSong, playSong]);

    const resumeSong = () => {
        const audio = audioRef.current;

        setCurrentTime(pauseTime);
        audio.currentTime = pauseTime;

        audio.play();
        setIsPlaying(true);
    };

    const deleteSong = (id) => {
        const updatedSongs = allSongs.filter((song) => song.id !== id);

        if (currentSong && currentSong.id === id) {
            setCurrentSong(null);
            pauseSong();
        }

        setAllSongs(updatedSongs);
    };

    const imageClass = isPlaying ? "rotate" : "";

    const playPreviousSong = () => {
        const previousSong = songHistory.pop();
        if (previousSong) {
            setCurrentSong(previousSong);
            const audio = audioRef.current;
            audio.src = previousSong.src;
            audio.title = previousSong.title;
            audio.currentTime = 0;
            audio.play();
            setIsPlaying(true);
        }
    };

    const playNextSong = () => {
        const currentIndex = allSongs.findIndex((song) => song.id === currentSong.id);
        if (currentIndex !== -1 && currentIndex < allSongs.length - 1) {
            playSong(allSongs[currentIndex + 1].id);
        }
    };

    const handleSeek = (e) => {
        const newTime = parseFloat(e.target.value);
        setCurrentTime(newTime);
    };

    const handleSeekEnd = (e) => {
        const newTime = parseFloat(e.target.value);
        setCurrentTime(newTime);
        audioRef.current.currentTime = newTime;
        setIsSeeking(false);
    };

    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = Math.floor(timeInSeconds % 60);
        return \`\${minutes}:\${seconds < 10 ? '0' : ''}\${seconds}\`;
    }`;

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