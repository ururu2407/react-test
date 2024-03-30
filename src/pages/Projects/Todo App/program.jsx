import React, { useState, useEffect } from 'react';
import { Box, Typography, Menu, MenuItem } from "@mui/material";
import { OutlinedButton, PrimaryButton } from "../../../components/customs";
import { MoreVertical, EditIcon, DeleteIcon } from '../../../utils/icons';
export const TodoList = () => {
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
    return (
        <>
            <Box display={'grid'} gap={'32px'}>
                <Box display={'grid'} gap={'16px'}>
                    <Box display={'flex'} padding={'32px'} justifyContent={'space-between'}
                        boxShadow={'0px 0px 4px 0px #000'} backgroundColor={'primary.main'}
                        borderRadius={'24px'} border={'1px solid'} borderColor={'primary.surfaceContainerLow'}>
                        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'}>
                            <Typography height={'32px'} variant='headline' fontWeight={'Bold'} color={'primary.light'}>Todo Done</Typography>
                            <Typography variant='body' color={'primary.light'}>keep in up</Typography>
                        </Box>
                        <Box className='todo-progress'>
                            <Typography variant='headline' fontWeight={'Bold'} color={'primary.onPrimary'}>{completedTodos.length} / {completedTodos.length + allTodos.length}</Typography>
                        </Box>
                    </Box>
                    {showInputs ? (
                        <Box display={'grid'} gap={'16px'} padding={'16px'} backgroundColor={'primary.surfaceContainerLow'} borderRadius={'12px'} >
                            <Box display={'flex'} flexWrap={'wrap'} gap={'8px'}>
                                <Typography variant="body" color="primary.light">Title</Typography>
                                {isEditing === null ? (
                                    <input type="text"
                                        placeholder="Task Title"
                                        value={textTitle}
                                        onChange={(e) => setTextTitle(e.target.value)} />
                                ) : (
                                    <input type="text"
                                        placeholder="Task Title"
                                        value={editingTodo.title}
                                        onChange={(e) => handleUpdateTitle(e.target.value)} />
                                )}

                            </Box>
                            <Box display={'flex'} flexWrap={'wrap'} gap={'8px'}>
                                <Typography variant="body" color="primary.light">Date</Typography>
                                {isEditing === null ? (
                                    <input className="input-wrapper" type="date"
                                        value={textDate}
                                        onChange={(e) => setTextDate(e.target.value)} />
                                ) : (
                                    <input className="input-wrapper" type="date"
                                        value={editingTodo.date}
                                        onChange={(e) => handleUpdateDate(e.target.value)} />
                                )}
                            </Box>
                            <Box display={'flex'} flexWrap={'wrap'} gap={'8px'}>
                                <Typography variant="body" color="primary.light">Description</Typography>
                                {isEditing === null ? (
                                    <textarea name="" id="" cols="30" rows="3"
                                        placeholder="Task description"
                                        value={textDescription}
                                        onChange={(e) => setTextDescription(e.target.value)}
                                        style={{
                                            width: '100%',
                                            background: 'none',
                                            border: '1px solid #262626',
                                            borderRadius: '12px',
                                            fontFamily: "Inconsolata",
                                            color: '#FAFAFA',
                                            fontSize: '16px',
                                            lineHeight: '1.5',
                                            letterSpacing: '0.5px',
                                            padding: '16px',
                                            outline: 'none',
                                            resize: 'none'
                                        }}></textarea>
                                ) : (
                                    <textarea name="" id="" cols="30" rows="3"
                                        placeholder="Task description"
                                        value={editingTodo.description}
                                        onChange={(e) => handleUpdateDescription(e.target.value)}
                                        style={{
                                            width: '100%',
                                            background: 'none',
                                            border: '1px solid #262626',
                                            borderRadius: '12px',
                                            fontFamily: "Inconsolata",
                                            color: '#FAFAFA',
                                            fontSize: '16px',
                                            lineHeight: '1.5',
                                            letterSpacing: '0.5px',
                                            padding: '16px',
                                            outline: 'none',
                                            resize: 'none'
                                        }}></textarea>
                                )}

                            </Box>
                            <Box display={'flex'} gap={'8px'}>
                                {isEditing === null ? (
                                    <OutlinedButton buttonText={'Cancel'}
                                        onClick={handleCancelCreate} />
                                ) : (
                                    <OutlinedButton buttonText={'Cancel'}
                                        onClick={handleCancelSave} />
                                )}
                                {isEditing === null ? (
                                    <PrimaryButton buttonText={'Add'}
                                        onClick={handleAddTodo} />
                                ) : (
                                    <PrimaryButton buttonText={'Save'}
                                        onClick={handleSaveTodo} />
                                )}
                            </Box>
                        </Box>
                    ) : (
                        <Box display={'flex'} justifyContent={'end'} >
                            <Box sx={{ width: { xs: '100%', sm: '162px' } }}>
                                <PrimaryButton buttonText={'Create new task'}
                                    onClick={() => setShowInputs(true)}
                                />
                            </Box>
                        </Box>
                    )}
                </Box>

                <Box display={'grid'} gap={'32px'}>
                    <Box display={'grid'} gap={'16px'}>
                        <Typography variant="title" fontWeight={'SemiBold'} color="primary.light"
                            sx={{ display: allTodos.length > 0 ? 'block' : 'none' }}>Todo</Typography>
                        {allTodos.map((item, index) => {
                            return (
                                <Box key={index} display={'flex'} gap={'16px'} padding={'16px'} backgroundColor={'primary.surfaceContainerLow'} borderRadius={'12px'}>
                                    <Box minWidth={'24px'} minHeight={'24px'}>
                                        <input type="checkbox" checked={false} onChange={() => handleCompleteTodo(index)} id={"myCheckbox" + item.id} />
                                        <label for={"myCheckbox" + item.id} class="checkbox-label"></label>
                                    </Box>
                                    <Box display={'grid'} width={'100%'} gap={'8px'}>
                                        <Box display={'grid'} height={'auto'}>
                                            <Typography variant="body1" fontWeight={'Medium'} color="primary.light">{item.title}</Typography>
                                            <Typography height={'20px'} variant="body3" fontWeight={'Light'} color="primary.contrastText">{item.date}</Typography>
                                        </Box>
                                        <Typography variant="body2" color="primary.light">{item.description}</Typography>
                                    </Box>
                                    <Box width={'24px'} height={'24px'} sx={{ cursor: 'pointer' }}>
                                        <MoreVertical onClick={(event) => handleMenu(event, index, item)} />
                                        <Menu
                                            id="menu-appbar"
                                            anchorEl={openMenu}
                                            anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            keepMounted
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            open={Boolean(openMenu)}
                                            onClose={() => {
                                                setSelectedTodo(null);
                                                handleClose();
                                            }}                                    >
                                            <MenuItem onClick={() => handleEditTodo(selectedTodo, selectedItem)}>
                                                <Box display={'flex'} gap={'12px'}>
                                                    <EditIcon />
                                                    <Typography variant='body2' color={'primary.light'}>Edit</Typography>
                                                </Box>
                                            </MenuItem>
                                            <MenuItem onClick={() => {
                                                handleDeleteTodo(selectedTodo)
                                            }}>
                                                <Box display={'flex'} gap={'12px'}>
                                                    <DeleteIcon />
                                                    <Typography variant='body2' color={'primary.light'}>Delete</Typography>
                                                </Box>
                                            </MenuItem>
                                        </Menu>
                                    </Box>
                                </Box>
                            );
                        })}
                    </Box>
                    <Box display={'grid'} gap={'16px'}>
                        <Typography variant="title" fontWeight={'SemiBold'} color="primary.light"
                            sx={{ display: completedTodos.length > 0 ? 'block' : 'none' }}>Done</Typography>
                        {completedTodos.map((item, index) => {
                            return (
                                <Box key={index}
                                    position={'relative'}
                                    display={'flex'}
                                    gap={'16px'}
                                    padding={'16px'}
                                    backgroundColor={'primary.surfaceContainerLow'}
                                    borderRadius={'12px'}>
                                    <Box minWidth={'24px'} minHeight={'24px'}>
                                        <input type="checkbox" checked={true} onChange={() => handleUncompleteTodo(index)} id={"CompletedCheckbox" + item.id} />
                                        <label for={"CompletedCheckbox" + item.id} class="checkbox-label"></label>
                                    </Box>
                                    <Box display={'grid'} width={'100%'} gap={'8px'}>
                                        <Box display={'grid'} height={'auto'}>
                                            <Typography variant="body1" fontWeight={'Medium'} color="primary.surface" sx={{ textDecoration: '1px line-through' }}>{item.title}</Typography>
                                            <Typography height={'20px'} variant="body3" fontWeight={'Light'} color="primary.surface">{item.date}</Typography>
                                        </Box>
                                        <Typography variant="body2" color="primary.surface">{item.description}</Typography>
                                    </Box>
                                    <Box width={'24px'} height={'24px'} sx={{ cursor: 'pointer' }}>
                                        <MoreVertical onClick={(event) => handleCompletedMenu(event, index)} />
                                        <Menu
                                            id="menu-appbar"
                                            anchorEl={openCompletedMenu}
                                            anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            keepMounted
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            open={Boolean(openCompletedMenu)}
                                            onClose={() => {
                                                setSelectedCompletedTodo(null);
                                                handleCompletedClose();
                                            }}                                     >
                                            <MenuItem disabled >
                                                <Box display={'flex'} gap={'12px'}>
                                                    <EditIcon />
                                                    <Typography variant='body2' color={'primary.light'}>Edit</Typography>
                                                </Box>
                                            </MenuItem>
                                            <MenuItem onClick={() => {
                                                handleDeleteCompletedTodo(selectedCompletedTodo)
                                            }}>
                                                <Box display={'flex'} gap={'12px'}>
                                                    <DeleteIcon />
                                                    <Typography variant='body2' color={'primary.light'}>Delete</Typography>
                                                </Box>
                                            </MenuItem>
                                        </Menu>
                                    </Box>
                                </Box>
                            );
                        })}
                    </Box>
                </Box>
            </Box >
        </>
    )
};