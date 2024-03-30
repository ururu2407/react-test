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
        Snacks: [],
    });

    const [prevInputStates, setPrevInputStates] = useState([]);
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
            updatedData[meal][index][field] = ''; 
            setMealData(updatedData);
            setPrevInputStates(prevInputStates.slice(0, -1)); 
        } else if (prevInputStatesExercise.length > 0) {
            const updatedData = [...exerciseData];
            const lastInputState = prevInputStatesExercise[prevInputStatesExercise.length - 1];
            const { index, field } = lastInputState;
            updatedData[index][field] = ''; 
            setExerciseData(updatedData);
            setPrevInputStatesExercise(prevInputStatesExercise.slice(0, -1));
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