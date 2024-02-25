import { Button, Box, Typography, List, ListItemButton } from "@mui/material";
import React, { useState, useRef, useEffect } from "react";
import { DeleteIcon, DecorateElement, SkipBack, SkipForward, Play, Pause } from "../../../utils/icons";
import "./MusicPlayer.scss";

export const MusicPlayerProgram = () => {
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
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <Box>
            <Box marginBottom={'20px'}>
                <Typography
                    variant='headline'
                    color='primary.light'
                >Music Player</Typography>
            </Box>
            <Box padding={'24px 12px'} position={"relative"} zIndex={1}
                sx={{
                    border: '1px solid',
                    borderColor: isPlaying ? 'primary.primary' : 'primary.contrastText',
                    borderRadius: '16px',
                    background: '#0D0D0C'
                }}>
                <DecorateElement
                    sx={{
                        fill: isPlaying ? '#E5CE71' : '#9A9693',
                        width: '8px',
                        maxHeight: '8px',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        margin: '12px'
                    }} />
                <DecorateElement
                    sx={{
                        fill: isPlaying ? '#E5CE71' : '#9A9693',
                        width: '8px',
                        maxHeight: '8px',
                        position: 'absolute',
                        top: '0',
                        right: '0',
                        margin: '12px'
                    }} />
                <DecorateElement
                    sx={{
                        fill: isPlaying ? '#E5CE71' : '#9A9693',
                        width: '8px',
                        maxHeight: '8px',
                        position: 'absolute',
                        bottom: '0',
                        left: '0',
                        margin: '12px'
                    }} />
                <DecorateElement
                    sx={{
                        fill: isPlaying ? '#E5CE71' : '#9A9693',
                        width: '8px',
                        maxHeight: '8px',
                        position: 'absolute',
                        bottom: '0',
                        right: '0',
                        margin: '12px'
                    }} />
                <Box display={"flex"}
                    justifyContent={"center"}
                    onClick={isPlaying ? pauseSong : playSong.bind(null, currentSong ? currentSong.id : allSongs[0].id)}>
                    <Box
                        height={'158px'}
                        width={'158px'}
                        sx={{
                            border: '1px solid',
                            borderColor: isPlaying ? 'primary.primary' : 'primary.contrastText',
                            borderRadius: '50%',
                            overflow: 'hidden'
                        }}>
                        <img
                            className={imageClass}
                            width={'100%'}
                            src="https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/quincy-larson-album-art.jpg" alt="" />
                    </Box>
                </Box>
            </Box>
            <Box
                position={'relative'}
                paddingTop={'54px'}
                margin={'0 12px'}
                marginTop={'-8px'}
                zIndex={'0'}
                sx={{
                    border: '1px solid',
                    borderTop: 'none',
                    borderColor: isPlaying ? 'primary.primary' : 'primary.contrastText',
                    borderRadius: '0 0 12px 12px'
                }}>
                <DecorateElement
                    sx={{
                        fill: isPlaying ? '#E5CE71' : '#9A9693',
                        width: '8px',
                        maxHeight: '8px',
                        position: 'absolute',
                        bottom: '0',
                        right: '0',
                        margin: '12px'
                    }} />
                <DecorateElement
                    sx={{
                        fill: isPlaying ? '#E5CE71' : '#9A9693',
                        width: '8px',
                        maxHeight: '8px',
                        position: 'absolute',
                        bottom: '0',
                        left: '0',
                        margin: '12px'
                    }} />
                <Box padding={'0 5px'} textAlign={"center"} display={'grid'} gap={'4px'} marginBottom={'120px'}>
                    <Typography variant="headline" color={isPlaying ? 'primary.primary' : 'primary.light'} fontWeight={'Bold'}>
                        {currentSong ? currentSong.title : allSongs.length > 0 ? allSongs[0].title : "Title Song"}
                    </Typography>
                    <Typography variant="body2" color={'primary.contrastText'} fontWeight={'Light'}>
                        {currentSong ? currentSong.artist : allSongs.length > 0 ? allSongs[0].artist : "Author Song"}
                    </Typography>
                </Box>
                <Box textAlign={'center'} padding={'0 26px 0 32px'}>
                    <input
                        type="range"
                        value={currentTime}
                        min={0}
                        max={duration || 0}
                        onChange={handleSeek}
                        onMouseDown={() => setIsSeeking(true)}
                        onMouseUp={handleSeekEnd}
                        onTouchStart={() => setIsSeeking(true)}
                        onTouchEnd={handleSeekEnd}
                        onTouchMove={handleSeek}
                        style={{
                            padding: '0px',
                            borderColor: '#CBC9C8',
                            height: '1px',
                            width: '100%',
                            opacity: '1',
                            accentColor: isPlaying ? '#E5CE71' : '#CBC9C8'
                        }}
                    />
                    <Box display={"flex"} justifyContent={"space-between"} marginTop={'9px'}>
                        <Typography variant="body2" color={isPlaying ? 'primary.primary' : 'primary.contrastText'}>{formatTime(currentTime)}</Typography>
                        <Typography variant="body2" color={isPlaying ? 'primary.primary' : 'primary.contrastText'}>{formatTime(duration)}</Typography>
                    </Box>
                </Box>
                <Box display={"flex"}
                    justifyContent={"center"}
                    marginTop={'32px'}
                    marginBottom={'48px'}
                    gap={'8px'}
                >
                    <Button onClick={playPreviousSong}
                        sx={{
                            '&:hover': {
                                background: 'none',
                            }
                        }}>
                        <SkipBack sx={{
                            fill: isPlaying ? '#E5CE71' : '#f2f2f2',
                            width: '32px',
                            height: '32px',
                            transition: 'all 0.2s',
                            '&:hover': {
                                fill: '#E5CE71',
                                transition: 'all 0.2s'
                            }
                        }} />
                    </Button>
                    <Button
                        sx={{
                            height: '68px',
                            width: '68px',
                            border: '1px solid',
                            borderColor: isPlaying ? 'primary.primary' : 'primary.light',
                            borderRadius: '50%',
                            alignContent: 'center',
                            background: isPlaying ? '#E5CE71' : 'none',
                            padding: isPlaying ? '0' : '0px 8px 0px 13px',
                            '&:hover': {
                                background: isPlaying ? '#E5CE71' : 'rgba(242, 242, 242, 0.08)',
                            },
                            '&:focus': {
                                background: isPlaying ? '#E5CE71' : 'rgba(242, 242, 242, 0.12)',
                            }
                        }}
                        onClick={isPlaying ? pauseSong : playSong.bind(null, currentSong ? currentSong.id : allSongs[0].id)}>
                        {!isPlaying ? (
                            <Play sx={{ width: '32px', height: '32px' }} />
                        ) : (
                            <Pause sx={{ width: '32px', height: '32px' }} />
                        )}
                    </Button>
                    <Button onClick={playNextSong}
                        sx={{
                            '&:hover': {
                                background: 'none',
                            }
                        }}>
                        <SkipForward sx={{
                            fill: isPlaying ? '#E5CE71' : '#f2f2f2',
                            width: '32px',
                            height: '32px',
                            transition: 'all 0.2s',
                            '&:hover': {
                                fill: '#E5CE71',
                                transition: 'all 0.2s'
                            }
                        }} />
                    </Button>
                </Box>
            </Box>
            <Box marginBottom={'20px'} marginTop={'48px'}>
                <Typography variant="headline" color={'primary.light'} >Playlist</Typography>
            </Box>
            <List sx={{ display: 'grid', gap: '20px' }}>
                {allSongs.map((song) => (
                    <ListItemButton display='flex' sx={{ padding: '0', gap: '32px' }} key={song.id}>
                        <Box
                            width='100%'
                            display="flex"
                            justifyContent={"space-between"}
                            sx={{
                                height: '48px',
                                ':hover': {
                                    '& .list': {
                                        color: 'primary.primary'
                                    }
                                },
                                color: currentSong && song.id === currentSong.id ? 'primary.primary' : 'primary.light'
                            }}
                            whiteSpace={"nowrap"}
                            overflow={"hidden"}
                            textOverflow={'ellipsis'}
                            onClick={() => playSong(song.id)}
                        >
                            <Box display={'block'}
                                whiteSpace={"nowrap"}
                                overflow={"hidden"}
                                textOverflow={'ellipsis'}
                                className='list'>
                                <Typography variant="body2"
                                    fontWeight='Medium'
                                    whiteSpace={"nowrap"}
                                    overflow={"hidden"}
                                    textOverflow={'ellipsis'}
                                >{song.title}</Typography>
                                <Typography
                                    variant="body3"
                                    fontWeight='Light'
                                    sx={{

                                        color: currentSong && song.id === currentSong.id ? 'primary.primary' : 'primary.contrastText'
                                    }}>{song.artist}</Typography>
                            </Box>
                        </Box>
                        <Box display={"flex"} alignItems={'center'}>
                            <Typography variant="body2"
                                fontWeight='Light'
                                color='primary.contrastText'>{song.duration}</Typography>
                            <Button
                                sx={{
                                    padding: '0px',
                                    minWidth: '48px',
                                    minHeight: '48px'
                                }} onClick={() => deleteSong(song.id)} aria-label={`Delete ${song.title}`}>
                                <DeleteIcon />
                            </Button>
                        </Box>
                    </ListItemButton>
                ))}
            </List>
        </Box>
    );
};