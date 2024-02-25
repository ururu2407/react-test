import React, { useState } from 'react';
import { Box, Typography, Button, Divider, Tooltip } from '@mui/material';
import { DeleteIcon, GoalIcon, FoodIcon, FlameRedIcon, InfoIcon } from '../../../utils/icons';
import { GlobalInputBaseStyles, PrimaryButton, TextButton } from '../../../components/customs';

export const CalorieCounterProgram = () => {
    const [mealData, setMealData] = useState({
        Breakfast: [],
        Lunch: [],
        Dinner: [],
    });

    const [exerciseData, setExerciseData] = useState([]);

    const [hiddenFields, setHiddenFields] = useState({
        breakfast: false,
        lunch: false,
        dinner: false,
    });

    const [hiddenExerciseFields, setHiddenExerciseFields] = useState(false);

    const [active, setActive] = useState({
        breakfast: false,
        lunch: false,
        dinner: false,
    });

    const [exerciseActive, setExerciseActive] = useState(false);

    const [baseGoal, setBaseGoal] = useState({
        name: 'Base goal',
        calories: 1000,
    });

    const [baseGoalEditing, setBaseGoalEditing] = useState(false);

    // Оригинальные значения базовой цели для отмены изменений
    const [originalBaseGoal, setOriginalBaseGoal] = useState({ ...baseGoal });

    const handleEditBaseGoal = () => {
        setBaseGoalEditing(true);
        // Сохраняем оригинальные значения перед редактированием
        setOriginalBaseGoal({ ...baseGoal });
    };

    const handleSaveBaseGoal = () => {
        setBaseGoalEditing(false);
    };

    const handleCancelBaseGoal = () => {
        // Отменяем изменения и восстанавливаем оригинальные значения
        setBaseGoal(originalBaseGoal);
    };

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
        showFields(meal);
        setMealData({
            ...mealData,
            [meal]: [...mealData[meal], { food: '', calories: '', displayText: false }],
        });
    };

    const addExercise = () => {
        setExerciseActive(true);
        showExerciseFields();
        setExerciseData([...exerciseData, { exercise: '', calories: '', displayText: false }]);
    };

    const hideFields = (meal) => {
        setActive({
            ...active,
            [meal]: false
        });
        setHiddenFields({
            ...hiddenFields,
            [meal]: true,
        });
        const updatedData = { ...mealData };
        updatedData[meal].forEach((field, index) => {
            updatedData[meal][index].displayText = true;
        });
        setMealData(updatedData);
    };

    const showFields = (meal) => {
        setActive({
            ...active,
            [meal]: true
        });
        setHiddenFields({
            ...hiddenFields,
            [meal]: false,
        });
        const updatedData = { ...mealData };
        updatedData[meal].forEach((field, index) => {
            updatedData[meal][index].displayText = false;
        });
        setMealData(updatedData);
    };

    const hideExerciseFields = () => {
        setExerciseActive(false);
        setHiddenExerciseFields(true);
        const updatedData = [...exerciseData];
        updatedData.forEach((field, index) => {
            updatedData[index].displayText = true;
        });
        setExerciseData(updatedData);
    };

    const showExerciseFields = () => {
        setExerciseActive(true);
        setHiddenExerciseFields(false);
        const updatedData = [...exerciseData];
        updatedData.forEach((field, index) => {
            updatedData[index].displayText = false;
        });
        setExerciseData(updatedData);
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

    const cancelMeal = (meal) => {
        const updatedData = { ...mealData };
        const lastInputIndex = updatedData[meal].length - 1;
        if (lastInputIndex >= 0) {
            if (updatedData[meal][lastInputIndex].food === '' && updatedData[meal][lastInputIndex].calories === '') {
                updatedData[meal].pop();
            } else {
                updatedData[meal][lastInputIndex].food = '';
                updatedData[meal][lastInputIndex].calories = '';
            }
            setMealData(updatedData);
        }
    };

    const cancelExercise = () => {
        const updatedData = [...exerciseData];
        const lastInputIndex = updatedData.length - 1;
        if (lastInputIndex >= 0) {
            if (updatedData[lastInputIndex].exercise === '' && updatedData[lastInputIndex].calories === '') {
                updatedData.pop();
            } else {
                updatedData[lastInputIndex].exercise = '';
                updatedData[lastInputIndex].calories = '';
            }
            setExerciseData(updatedData);
        }
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
    return (
        <>
            <GlobalInputBaseStyles />
            <Box display='grid' gap={'32px'}>
                <Typography
                    variant='headline'
                    color='primary.light'
                >Calorie Counter</Typography>
                <Box display={'flex'}>
                    <Box style={containerStyles} title='asd'>
                        {/* disableFocusListener */}
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
                        display={'grid'} gap={'16px'}
                    >
                        <Box>
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
                <Box border={'1px solid'} borderColor={'divider'} borderRadius={'12px'}>
                    <Box
                        display={'flex'}
                        justifyContent={'space-between'}
                        color={'primary.light'}
                        fontWeight={'Medium'}
                        padding='16px 16px 0 16px'
                    >
                        <Typography variant='body2' fontWeight={'Medium'}>{baseGoal.name}</Typography>
                        <Typography variant='body2' fontWeight={'Medium'}>{baseGoal.calories} cal</Typography>
                    </Box>
                    <Divider sx={{ margin: '16px' }} />
                    <Box
                        sx={{
                            borderBottom: '1px solid',
                            borderColor: 'divider',
                            margin: '16px',
                            paddingBottom: '16px'
                        }}
                        gap={'8px'}
                        style={{ display: baseGoalEditing ? 'flex' : 'none' }}
                    >
                        <input value={baseGoal.name} onChange={handleChangeBaseGoalName} />
                        <input type="number" value={baseGoal.calories} onChange={handleChangeBaseGoalCalories} />
                    </Box>
                    <Box display={'flex'} gap='12px' padding={'0 16px 16px 16px'}>
                        {baseGoalEditing ? ( // Если базовая цель редактируется
                            <>
                                <PrimaryButton buttonText={'Save'} onClick={handleSaveBaseGoal} />
                                <TextButton buttonText={'Cancel'} onClick={handleCancelBaseGoal} />
                            </>
                        ) : ( // Если базовая цель не редактируется
                            <PrimaryButton buttonText={'Edit'} onClick={handleEditBaseGoal} />
                        )}
                    </Box>
                </Box>
                {Object.keys(mealData).map((meal, mealIndex) => (
                    <Box border={'1px solid'} borderColor={'divider'} borderRadius={'12px'} key={mealIndex}>
                        <Box
                            display={'flex'}
                            justifyContent={'space-between'}
                            color={'primary.light'}
                            fontWeight={'Medium'}
                            padding='16px 16px 0 16px'
                        >
                            <Typography variant='body2' fontWeight={'Medium'}>{meal}</Typography>
                            <Typography variant='body2' fontWeight={'Medium'}>{sumCalories(meal)} cal</Typography>
                        </Box>
                        <Divider sx={{ margin: '16px' }} />
                        {mealData[meal].map((field, index) => (
                            <Box key={index} >
                                <Box sx={{
                                    borderBottom: '1px solid',
                                    borderColor: 'divider',
                                    margin: '16px',
                                    paddingBottom: '16px'
                                }} gap={'8px'} style={{ display: hiddenFields[meal] ? 'none' : 'flex' }}>
                                    <input
                                        placeholder='Chicken'
                                        value={field.food}
                                        onChange={(e) => {
                                            const updatedData = { ...mealData };
                                            updatedData[meal][index].food = e.target.value;
                                            setMealData(updatedData);
                                        }}
                                    />
                                    <input
                                        type="number"
                                        placeholder='100 cal'
                                        value={field.calories}
                                        onChange={(e) => {
                                            const updatedData = { ...mealData };
                                            updatedData[meal][index].calories = e.target.value;
                                            setMealData(updatedData);
                                        }}
                                    />
                                    <Button
                                        sx={{
                                            padding: '0',
                                            minWidth: '34px',
                                            minHeight: '34px'
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
                                <Box padding={'0 16px 0 16px'} color='primary.light' style={{ display: field.displayText ? 'block' : 'none' }}>
                                    <Typography minHeight={'24px'} variant='body2'>{field.food}</Typography>
                                    <Typography minHeight={'24px'} variant='body2'>{field.calories} cal</Typography>
                                    <Divider sx={{ margin: '16px 0' }} />
                                </Box>
                            </Box>
                        ))}
                        <Box display={'flex'} gap={'12px'} padding={'0 16px 16px 16px'}>
                            {!active[meal] ? (
                                <>
                                    <PrimaryButton buttonText={'Add Entry'} onClick={() => addField(meal)} />
                                    <TextButton buttonText={'Edit'} onClick={() => showFields(meal)} />
                                </>
                            ) : (
                                <>
                                    <PrimaryButton buttonText={'Save'} onClick={() => hideFields(meal)} />
                                    <TextButton buttonText={'Cancel'} onClick={() => cancelMeal(meal)} />
                                </>
                            )}
                        </Box>
                    </Box>
                ))}
                <Box
                    display={'block'}
                    color={'primary.light'}
                    border={'1px solid'} borderColor={'divider'} borderRadius={'12px'}
                >
                    <Box display={'flex'}
                        justifyContent={'space-between'}
                        color={'primary.light'}
                        fontWeight={'Medium'}
                        padding='16px 16px 0 16px'>
                        <Typography fontWeight={'Medium'} variant='body2'>Exercise</Typography>
                        <Typography fontWeight={'Medium'} variant='body2'>{exerciseData.reduce((acc, curr) => acc + parseFloat(curr.calories), 0)} cal</Typography>
                    </Box>
                    <Divider sx={{ margin: '16px' }} />
                    {exerciseData.map((exercise, index) => (
                        <Box key={index} >
                            <Box sx={{
                                borderBottom: '1px solid',
                                borderColor: 'divider',
                                margin: '16px',
                                paddingBottom: '16px'
                            }} gap={'8px'} style={{ display: hiddenExerciseFields ? 'none' : 'flex' }}>
                                <input
                                    value={exercise.exercise}
                                    placeholder='Cardio'
                                    onChange={(e) => {
                                        const updatedData = [...exerciseData];
                                        updatedData[index].exercise = e.target.value;
                                        setExerciseData(updatedData);
                                    }}
                                />
                                <input
                                    type="number"
                                    value={exercise.calories}
                                    placeholder='200 cal'
                                    onChange={(e) => {
                                        const updatedData = [...exerciseData];
                                        updatedData[index].calories = e.target.value;
                                        setExerciseData(updatedData);
                                    }}
                                />
                                <Button
                                    sx={{
                                        padding: '0',
                                        minWidth: '34px',
                                        minHeight: '34px'
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
                                <Typography padding={'0 16px 0 16px'} color='primary.light' style={{ display: exercise.displayText ? 'block' : 'none' }}>
                                    <Typography variant='body2'>{exercise.exercise}</Typography>
                                    <Typography variant='body2'>{exercise.calories} cal</Typography>
                                    <Divider sx={{ margin: '16px 0' }} />
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                    <Box display={'flex'} gap={'12px'} padding={'0 16px 16px 16px'}>
                        {!exerciseActive ? (
                            <>
                                <PrimaryButton buttonText={'Add Entry'} onClick={addExercise} />
                                <TextButton buttonText={'Edit'} onClick={showExerciseFields} />
                            </>
                        ) : (
                            <>
                                <PrimaryButton buttonText={'Save'} onClick={hideExerciseFields} />
                                <TextButton buttonText={'Cancel'} onClick={cancelExercise} />
                            </>
                        )}
                    </Box>
                </Box>
            </Box >
        </>
    );
};
