import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';

export const TodoCode = () => {
    const codeString = `
    const [allTodos, setAllTodos] = useState([
        {
            id: 1,
            title: 'Cook food',
            date: '2024-03-21',
            description: 'Cook roast chicken in sweet sauce.'
        },
        {
            id: 2,
            title: 'Task 1',
            date: '2022-01-01',
            description: 'Task 1 description'
        }
    ]);
    const [completedTodos, setCompletedTodos] = useState([
        {
            id: 3,
            title: 'Cook food',
            date: '2024-03-21',
            description: 'Cook roast chicken in sweet sauce.'
        }
    ]);
    const [textTitle, setTextTitle] = useState('');
    const [textDate, setTextDate] = useState('');
    const [textDescription, setTextDescription] = useState('');
    const [openMenu, setOpenMenu] = useState(null);
    const [openCompletedMenu, setOpenCompletedMenu] = useState(null);
    const [selectedTodo, setSelectedTodo] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedCompletedTodo, setSelectedCompletedTodo] = useState(null);
    const [isEditing, setIsEditing] = useState(null);
    const [editingTodo, setEditingTodo] = useState('');
    const [showInputs, setShowInputs] = useState(false);

    const generateUniqueId = () => {
        return Math.random().toString(36).substr(2, 9);
    };
    const handleAddTodo = () => {
        let newTodoItem = {
            id: generateUniqueId(),
            title: textTitle,
            date: textDate,
            description: textDescription
        }
        if (!newTodoItem.title || !newTodoItem.date || !newTodoItem.description) {
            return alert('Please fill in all fields');
        }
        let newAllTodos = [...allTodos, newTodoItem];
        setAllTodos(newAllTodos);
        setTextTitle('');
        setTextDate('');
        setTextDescription('');
        setShowInputs(false);
        localStorage.setItem('allTodos', JSON.stringify(newAllTodos));
    }
    const handleCancelCreate = () => {
        setShowInputs(false);
    }
    const handleCompleteTodo = (index) => {
        let newCompletedTodos = [...completedTodos, allTodos[index]];
        setCompletedTodos(newCompletedTodos);
        handleDeleteTodo(index);
        localStorage.setItem('completedTodos', JSON.stringify(newCompletedTodos));
    }
    const handleUncompleteTodo = (index) => {
        let newAllTodos = [...allTodos, completedTodos[index]];
        setAllTodos(newAllTodos);
        handleDeleteCompletedTodo(index);
    }
    const handleDeleteTodo = (index) => {
        let reducedAllTodos = [...allTodos];
        console.log(index)
        reducedAllTodos.splice(index, 1);
        handleClose();
        localStorage.setItem('allTodos', JSON.stringify(reducedAllTodos));
        setAllTodos(reducedAllTodos);

    }
    const handleDeleteCompletedTodo = (index) => {
        let reducedCompletedTodos = [...completedTodos];
        console.log(index)
        reducedCompletedTodos.splice(index, 1);
        handleCompletedClose();
        localStorage.setItem('completedTodos', JSON.stringify(reducedCompletedTodos));
        setCompletedTodos(reducedCompletedTodos);

    }
    const handleMenu = (event, index, item) => {
        setSelectedTodo(index);
        setSelectedItem(item);
        setOpenMenu(event.currentTarget);
    };
    const handleCompletedMenu = (event, todo) => {
        setSelectedCompletedTodo(todo);
        setOpenCompletedMenu(event.currentTarget);
    };

    const handleClose = () => {
        setOpenMenu(null);
    };
    const handleCompletedClose = () => {
        setOpenCompletedMenu(null);
    };
    useEffect(() => {
        let savedTodo = JSON.parse(localStorage.getItem('allTodos'));
        let savedCompletedTodo = JSON.parse(localStorage.getItem('completedTodos'));
        if (savedTodo) {
            setAllTodos(savedTodo);
        }
        if (savedCompletedTodo) {
            setCompletedTodos(savedCompletedTodo);
        }
    }, [])

    const handleEditTodo = (index, item) => {
        console.log(index, item)
        setIsEditing(index)
        setEditingTodo(item)
        setShowInputs(true)
        handleClose();

    }
    const handleUpdateTitle = (value) => {
        setEditingTodo((prev) => {
            return { ...prev, title: value }
        })
    }
    const handleUpdateDate = (value) => {
        setEditingTodo((prev) => {
            return { ...prev, date: value }
        })
    }
    const handleUpdateDescription = (value) => {
        setEditingTodo((prev) => {
            return { ...prev, description: value }
        })
    }
    const handleSaveTodo = () => {
        let newAllTodos = [...allTodos];
        newAllTodos[isEditing] = editingTodo
        if (!editingTodo.title || !editingTodo.date || !editingTodo.description) {
            return alert('Please fill in all fields');
        }
        setAllTodos(newAllTodos)
        localStorage.setItem('allTodos', JSON.stringify(newAllTodos))
        setIsEditing(null)
        setShowInputs(false)
    }
    const handleCancelSave = () => {
        setIsEditing(null)
        setShowInputs(false)
    }
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