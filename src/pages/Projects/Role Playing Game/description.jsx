import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export const RpgDescription = () => {
    return (
        <>
            <Box display='grid' gap='20px'>
                <Typography
                    variant='headline'
                    color='primary.light'
                >Description</Typography>
                <Typography variant='body1' color='primary.light' fontWeight='Light'>
                    The RPG project is an interactive game built using JavaScript that immerses players in a fantasy world where they embark on adventures, face challenges, and ultimately confront the main boss, the dragon. Players have three main indicators: health, gold, and experience, which they can manage throughout their journey.
                    <br /><br />
                    Key Features:
                    <br /><br />
                    1. Health, Gold, and Experience: Players start with initial values for health, gold, and experience, which they can increase or decrease based on their actions and encounters.
                    <br /><br />
                    2. Game Locations:
                    
                    <br/><br/>&nbsp;&nbsp;&nbsp;a. Shop: Players can visit the shop to purchase health potions and a dagger to enhance their abilities.
                    <br/><br/>&nbsp;&nbsp;&nbsp;b. Cave: Players can explore the cave and engage in battles with creatures like slimes or dangerous beasts, choosing to attack, dodge, or flee.
                    <br/><br/>&nbsp;&nbsp;&nbsp;c. Dragon's Lair: The ultimate challenge where players confront the dragon boss for a chance to claim vast amounts of gold and experience upon victory.
                    <br /><br />
                    3. Inventory Management: Players start with a basic stick in their inventory and can acquire additional items throughout their journey.
                    <br /><br />
                    4. Text-Based Interaction: All communication between the game and the player occurs through a special text block, providing updates, choices, and event outcomes.
                    <br /><br />
                    Game Flow:
                    <br /><br />
                    - Players begin by choosing their actions, such as visiting locations, battling creatures, or managing inventory.

                    <br /><br />
                    - Battles are resolved based on player choices and randomized events, with outcomes affecting health, gold, and experience.
                    <br /><br />
                    - Additional events encountered during exploration can bring either benefits or harm to the player, adding unpredictability and excitement to the game.
                    <br /><br />
                    Overall, the RPG project delivers an engaging gaming experience where players make strategic decisions, face challenges, and progress towards the ultimate goal of defeating the dragon and becoming a legendary hero.
                </Typography>
            </Box>
        </>
    )
}