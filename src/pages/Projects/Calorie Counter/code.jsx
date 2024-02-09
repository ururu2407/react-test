import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';

export const CalorieCounterCode = () => {
    const codeString = `
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