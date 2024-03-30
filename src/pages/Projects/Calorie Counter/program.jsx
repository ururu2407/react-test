import React, { useState } from 'react';
import { Box, Typography, Button, Divider, Tooltip } from '@mui/material';
import { DeleteIcon, GoalIcon, FoodIcon, FlameRedIcon, InfoIcon } from '../../../utils/icons';
import { GlobalInputBaseStyles, PrimaryButton, TextButton } from '../../../components/customs';
import { useTheme } from '@mui/material/styles';

export const CalorieCounterProgram = () => {
    const [mealData, setMealData] = useState({
        Breakfast: [],
        Lunch: [],
        Dinner: [],
        Snacks: [],
    });

    const [prevInputStates, setPrevInputStates] = useState([]); // Состояние для хранения предыдущих состояний данных инпутов
    const [exerciseData, setExerciseData] = useState([]);
    const [prevInputStatesExercise, setPrevInputStatesExercise] = useState([]);

    const [active, setActive] = useState({
        breakfast: false,
        lunch: false,
        dinner: false,
    });

    const [baseGoal, setBaseGoal] = useState({
        name: 'Base goal',
        calories: 1000,
    });


    const handleChangeBaseGoalName = (event) => {
        setBaseGoal({
            ...baseGoal,
            name: event.target.value,
        });
    };

    const handleChangeBaseGoalCalories = (event) => {
        setBaseGoal({
            ...baseGoal,
            calories: event.target.value,
        });
    };

    const addField = (meal) => {
        setActive({
            ...active,
            [meal]: true
        });
        setMealData({
            ...mealData,
            [meal]: [...mealData[meal], { food: '', calories: '', displayText: false }],
        });
    };

    const addExercise = () => {
        setExerciseData([...exerciseData, { exercise: '', calories: '', displayText: false }]);
    };

    const sumCalories = (meal) => {
        let totalCalories = 0;
        mealData[meal].forEach((field) => {
            if (!isNaN(field.calories)) {
                totalCalories += parseFloat(field.calories);
            }
        });
        return totalCalories;
    };

    const sumTotalMealCalories = () => {
        let totalCalories = 0;
        for (const meal in mealData) {
            totalCalories += sumCalories(meal);
        }
        return totalCalories;
    };

    const sumExerciseCalories = () => {
        let totalCalories = 0;
        exerciseData.forEach((exercise) => {
            if (!isNaN(exercise.calories)) {
                totalCalories += parseFloat(exercise.calories);
            }
        });
        return totalCalories;
    };

    const sumTotalCalories = () => {
        let totalCalories = sumTotalMealCalories();
        let totalExerciseCalories = sumExerciseCalories();
        return {
            totalCalories,
            totalExerciseCalories,
            totalCaloriesWithoutExercise: totalCalories - totalExerciseCalories,
        };
    };

    const containerStyles = {
        position: 'relative',
        margin: '16px',
        width: '146px',
        height: '146px',
        borderRadius: '50%',
        background: `
          conic-gradient(#5FA0CB 0% calc(${sumTotalCalories().totalCalories} / ${baseGoal.calories} * 100%),
            transparent calc(${sumTotalCalories().totalCalories} / ${baseGoal.calories} * 100%) 100%
          ),
          conic-gradient(transparent 0% calc(${sumTotalCalories().totalCalories} / ${baseGoal.calories} * 100%),
            #FF7777 calc(${sumTotalCalories().totalCalories} / ${baseGoal.calories} * 100%) calc(calc(${sumTotalCalories().totalCalories} / ${baseGoal.calories} * 100%) + calc(${sumTotalCalories().totalExerciseCalories} / ${baseGoal.calories} * 100%)),
            #393937 calc(${sumTotalCalories().totalExerciseCalories} / ${baseGoal.calories} * 100%) 100%
          )`,
        boxSizing: 'border-box',
    };

    const beforeStyles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: '0',
        left: '0',
        width: '96%',
        height: '96%',
        borderRadius: '50%',
        margin: '3px',
        zIndex: '1',
        backgroundColor: '#0D0D0C',
    };
    const [isEditing, setIsEditing] = useState(true);

    const handleEditSave = () => {
        setIsEditing(!isEditing);
    };
    const handleBlur = (meal, index, field, value) => {
        setPrevInputStates(prevInputStates => [...prevInputStates, { meal, index, field, value }]);
    };

    const handleBlurExercise = (index, field, value) => {
        setPrevInputStatesExercise([...prevInputStatesExercise, { index, field, value }]);
    };

    const handleCancel = () => {
        if (prevInputStates.length > 0) {
            const updatedData = { ...mealData };
            const lastInputState = prevInputStates[prevInputStates.length - 1];
            const { meal, index, field } = lastInputState;
            updatedData[meal][index][field] = ''; // Очищаем значение поля
            setMealData(updatedData);
            setPrevInputStates(prevInputStates.slice(0, -1)); // Удаляем последнее состояние из списка
        } else if (prevInputStatesExercise.length > 0) {
            const updatedData = [...exerciseData];
            const lastInputState = prevInputStatesExercise[prevInputStatesExercise.length - 1];
            const { index, field } = lastInputState;
            updatedData[index][field] = ''; // Очищаем значение поля
            setExerciseData(updatedData);
            setPrevInputStatesExercise(prevInputStatesExercise.slice(0, -1)); // Удаляем последнее состояние из списка
        }
    };
    const theme = useTheme()
    return (
        <>
            <GlobalInputBaseStyles />
            <Box
                sx={{
                    display: { xs: 'grid', lg: 'flex' },
                    gap: { xs: '32px', lg: '42px' },
                }}>
                <Box display={'flex'} gap={'16px'}
                    sx={{
                        [theme.breakpoints.up('lg')]: {
                            flexDirection: 'column',
                        }
                    }}>
                    <Box style={containerStyles} title='asd'>
                        <Tooltip title='Remaining = Goal - Food + Exercise' margin='0'>
                            <Box style={beforeStyles} flexDirection={'column'}>
                                <Typography color='primary.light' fontWeight='Bold' variant='headline'>{baseGoal.calories - sumTotalCalories().totalCalories + sumTotalCalories().totalExerciseCalories}</Typography>
                                <Box display={'flex'} gap={'4px'} alignItems={'center'}>
                                    <Typography color='primary.contrastText' fontWeight='Light' variant='body3'>Remaining</Typography>
                                    <InfoIcon sx={{ width: '16px', height: '16px' }} />
                                </Box>
                            </Box>
                        </Tooltip>
                    </Box>
                    <Box
                        color={'primary.light'}
                        display={'grid'}
                        sx={{
                            justifyContent: { lg: 'center' },
                            gap: {
                                xs: '16px',
                                sm: '24px'
                            }
                        }}
                    >
                        <Box >
                            <Box display={'flex'} gap='8px'>
                                <GoalIcon />
                                <Typography variant='body2' fontWeight={'Light'}>Base goal</Typography>
                            </Box>
                            <Typography marginLeft={'32px'} variant='body2' fontWeight={'Medium'}>{baseGoal.calories}</Typography>
                        </Box>
                        <Box>
                            <Box display={'flex'} gap='8px'>
                                <FoodIcon />
                                <Typography variant='body2' fontWeight={'Light'}>Food</Typography>
                            </Box>
                            <Typography marginLeft={'32px'} variant='body2' fontWeight={'Medium'}>{sumTotalCalories().totalCalories}</Typography>
                        </Box>
                        <Box>
                            <Box display={'flex'} gap='8px'>
                                <FlameRedIcon style={{ color: 'red' }} />
                                <Typography variant='body2' fontWeight={'Light'}>Exercise</Typography>
                            </Box>
                            <Typography marginLeft={'32px'} variant='body2' fontWeight={'Medium'}>{sumTotalCalories().totalExerciseCalories}</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box padding={'16px'} backgroundColor={'primary.surfaceContainerLow'}
                    border={'1px solid'} borderRadius={'12px'} borderColor={'divider'}
                    sx={{ width: { lg: '100%' } }}>
                    <Box>
                        <Box
                            display={'flex'}
                            justifyContent={'space-between'}
                            color={'primary.light'}
                            fontWeight={'Medium'}
                        >
                            <Typography variant='body1' fontWeight={'Medium'}>{baseGoal.name}</Typography>
                            <Typography variant='body1' fontWeight={'Medium'}>{baseGoal.calories} cal</Typography>
                        </Box>
                        <Box paddingTop={'8px'}
                            gap={'16px'}
                            style={{ display: isEditing ? 'none' : 'flex' }}
                        >
                            <input value={baseGoal.name} onChange={handleChangeBaseGoalName} />
                            <input type="number" value={baseGoal.calories} onChange={handleChangeBaseGoalCalories} />
                        </Box>
                        <Divider sx={{ margin: '16px 0' }} />

                    </Box>
                    {Object.keys(mealData).map((meal, mealIndex) => (
                        <Box key={mealIndex}>
                            <Box
                                display={'flex'}
                                justifyContent={'space-between'}
                                color={'primary.light'}
                                fontWeight={'Medium'}
                            >
                                <Typography variant='body2' fontWeight={'Medium'}>{meal}</Typography>
                                <Typography variant='body2' fontWeight={'Medium'}>{sumCalories(meal)} cal</Typography>
                            </Box>
                            {mealData[meal].map((field, index) => (
                                <Box key={index} display={'grid'} gap={'12px'}>
                                    <Box position={'relative'} gap={'16px'} paddingTop={'12px'} style={{ display: isEditing ? 'none' : 'flex' }}>
                                        <input
                                            placeholder='Name'
                                            value={field.food}
                                            onBlur={(e) => handleBlur(meal, index, 'food', e.target.value)}
                                            onChange={(e) => {
                                                const updatedData = { ...mealData };
                                                updatedData[meal][index].food = e.target.value;
                                                setMealData(updatedData);
                                            }}
                                        />
                                        <input
                                            type="number"
                                            placeholder='100 cal'
                                            style={{
                                                marginRight: '38px'
                                            }}
                                            value={field.calories}
                                            onBlur={(e) => handleBlur(meal, index, 'calories', e.target.value)}
                                            onChange={(e) => {
                                                const updatedData = { ...mealData };
                                                updatedData[meal][index].calories = e.target.value;
                                                setMealData(updatedData);
                                            }}
                                        />
                                        <Button
                                            sx={{
                                                position: 'absolute',
                                                right: -16,
                                                marginTop: '-4px', padding: '0',
                                                minWidth: '48px',
                                                minHeight: '48px'
                                            }}
                                            onClick={() => {
                                                const updatedData = { ...mealData };
                                                updatedData[meal].splice(index, 1);
                                                setMealData(updatedData);
                                            }}
                                        >
                                            <DeleteIcon />
                                        </Button>
                                    </Box>
                                    <Box color='primary.light' padding={'8px 0 0 8px'} justifyContent={'space-between'} style={{ display: isEditing ? 'flex' : 'none' }}>
                                        <Typography height={'20px'} variant='body3'>{field.food}</Typography>
                                        <Typography height={'20px'} variant='body3'>{field.calories} cal</Typography>
                                    </Box>
                                </Box>
                            ))}
                            <Box padding={'8px 0'} sx={{ display: isEditing ? 'none' : 'block' }}>
                                <TextButton width='113px' buttonText={'+ Add Entry'} onClick={() => addField(meal)} />
                            </Box>
                            <Divider sx={{ margin: isEditing ? '16px 0' : '0 0 16px 0' }} />

                        </Box>
                    ))}
                    <Box
                        display={'block'}
                        color={'primary.light'}>
                        <Box display={'flex'}
                            justifyContent={'space-between'}
                            color={'primary.light'}
                            fontWeight={'Medium'}>
                            <Typography fontWeight={'Medium'} variant='body2'>Exercise</Typography>
                            <Typography fontWeight={'Medium'} variant='body2'>{exerciseData.reduce((acc, curr) => acc + parseFloat(curr.calories), 0)} cal</Typography>
                        </Box>
                        {exerciseData.map((exercise, index) => (
                            <Box key={index} >
                                <Box position={'relative'} gap={'16px'} paddingTop={'12px'} style={{ display: isEditing ? 'none' : 'flex' }}>
                                    <input
                                        value={exercise.exercise}
                                        placeholder='Name'
                                        onBlur={(e) => handleBlurExercise(index, 'exercise', e.target.value)}
                                        onChange={(e) => {
                                            const updatedData = [...exerciseData];
                                            updatedData[index].exercise = e.target.value;
                                            setExerciseData(updatedData);
                                        }}
                                    />
                                    <input
                                        type="number"
                                        value={exercise.calories}
                                        style={{
                                            marginRight: '38px'
                                        }}
                                        placeholder='200 cal'
                                        onBlur={(e) => handleBlurExercise(index, 'calories', e.target.value)}
                                        onChange={(e) => {
                                            const updatedData = [...exerciseData];
                                            updatedData[index].calories = e.target.value;
                                            setExerciseData(updatedData);
                                        }}
                                    />
                                    <Button
                                        sx={{
                                            position: 'absolute',
                                            right: -16,
                                            marginTop: '-4px',
                                            padding: '0',
                                            minWidth: '48px',
                                            minHeight: '48px'
                                        }}
                                        onClick={() => {
                                            const updatedData = [...exerciseData];
                                            updatedData.splice(index, 1);
                                            setExerciseData(updatedData);
                                        }}
                                    >
                                        <DeleteIcon />
                                    </Button>
                                </Box>
                                <Box >
                                    <Typography color='primary.light' padding={'8px 0 0 8px'} justifyContent={'space-between'} style={{ display: isEditing ? 'flex' : 'none' }}>
                                        <Typography height={'20px'} variant='body3'>{exercise.exercise}</Typography>
                                        <Typography height={'20px'} variant='body3'>{exercise.calories} cal</Typography>
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                        <Box padding={'8px 0'} sx={{ display: isEditing ? 'none' : 'block' }}>
                            <TextButton width='113px' buttonText={'+ Add Entry'} onClick={addExercise} />
                        </Box>

                    </Box>
                    {isEditing ? (
                        <Box marginTop={'26px'}>
                            <PrimaryButton width='128px' buttonText={'Edit'} onClick={handleEditSave} />
                        </Box>
                    ) : (
                        <Box display={'flex'} gap={'8px'} marginTop={'26px'}>
                            <PrimaryButton width='128px' buttonText={'Save'} onClick={handleEditSave} />
                            <TextButton width='128px' buttonText={'Cancel'} onClick={handleCancel} />
                        </Box>
                    )}
                </Box>
            </Box >
        </>
    );
};
