import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';

export const RpgCode = () => {
    const codeString = `
    const [xp, setXp] = useState(0)
    const [health, setHealth] = useState(100)
    const [gold, setGold] = useState(50)
    const [button1Text, setButton1Text] = useState('Go to store')
    const [button1, setButton1] = useState(() => goStore)
    const [button2Text, setButton2Text] = useState('Go to cave')
    const [button2, setButton2] = useState(() => goCave)
    const [button3Text, setButton3Text] = useState("Fight Dragon")
    const [button3, setButton3] = useState(() => fightDragon)
    const [text, setText] = useState("Welcome to Dragon Repeller. You must defeat the dragon that is preventing people from leaving the town. You are in the town square. Where do you want to go? Use the buttons above.")
    const [monsterStats, setMonsterStats] = useState('none')
    const [monsterName, setMonsterName] = useState('')
    const [monsterHealth, setMonsterHealth] = useState('')

    let statsXp = 0
    let currentWeapon = 0;
    let fighting;
    let inventory = ["stick"];

    const weapons = [
        { name: 'stick', power: 5 },
        { name: 'dagger', power: 30 },
        { name: 'claw hammer', power: 50 },
        { name: 'sword', power: 100 }
    ];
    const monsters = [
        {
            name: "slime",
            level: 2,
            health: 15
        },
        {
            name: "fanged beast",
            level: 8,
            health: 60
        },
        {
            name: "dragon",
            level: 20,
            health: 300
        }
    ]
const locations = [
    {
        name: "town square",
        "button text": ["Go to store", "Go to cave", "Fight dragon"],
        "button functions": [goStore, goCave, fightDragon],
        text: "You are in the town square. You see a sign that says \"Store\"."
    },
    {
        name: "store",
        "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
        "button functions": [buyHealth, buyWeapon, goTown],
        text: "You enter the store."
    },
    {
        name: "cave",
        "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
        "button functions": [fightSlime, fightBeast, goTown],
        text: "You enter the cave. You see some monsters."
    },
    {
        name: "fight",
        "button text": ["Attack", "Dodge", "Run"],
        "button functions": [attack, dodge, goTown],
        text: "You are fighting a monster."
    },
    {
        name: "kill monster",
        "button text": ["Go to town square", "Go to town square", "Go to town square"],
        "button functions": [goTown, goTown, easterEgg],
        text: 'The monster screams "Arg!" as it dies. You gain experience points and find gold.'
    },
    {
        name: "lose",
        "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
        "button functions": [restart, restart, restart],
        text: "You die. ☠️"
    },
    {
        name: "win",
        "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
        "button functions": [restart, restart, restart],
        text: "You defeat the dragon! YOU WIN THE GAME! 🎉"
    },
    {
        name: "easter egg",
        "button text": ["Eagle", "Tails", "Go to town square?"],
        "button functions": [pickEagle, pickTails, goTown],
        text: "You find a secret game. Pick a number above. Ten numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!"
    }
]
    function update(location) {
        setButton1Text(() => location["button text"][0])
        setButton1(() => location["button functions"][0])
        setButton2Text(() => location["button text"][1])
        setButton2(() => location["button functions"][1])
        setButton3Text(() => location["button text"][2])
        setButton3(() => location["button functions"][2])
        setText(() => location.text)
    }
    function goTown() {
        update(locations[0])
        setMonsterStats("none")
    }
    function goStore() {
        update(locations[1])
    }

    function goCave() {
        update(locations[2])
    }
    function buyHealth() {
        setGold(prevGold => {
            if (prevGold >= 10) {
                setHealth(prevHealth => prevHealth + 10)
                return prevGold - 10
            } else {
                setText("You do not have enough gold to buy health.")
                return prevGold
            }
        })
    }
    function buyWeapon() {
        if (currentWeapon < weapons.length - 1) {
            setGold(prevGold => {
                if (prevGold >= 30) {
                    currentWeapon++;
                    let newWeapon = weapons[currentWeapon].name;
                    setText(\`You now have a \${newWeapon}.\`)
                    inventory.push(newWeapon);
                    setText(prevText => prevText += \` In your inventory you have: \${inventory}\`)
                    return prevGold - 30;
                } else {
                    setText("You do not have enough gold to buy a weapon.")
                    return prevGold
                }
            })
        } else {
            setText("You already have the most powerful weapon!")
            setButton2Text("Sell weapon for 15 gold")
            setButton2(() => sellWeapon)
        }
    }
    function sellWeapon() {
        if (inventory.length > 1) {
            setGold(prevGold => prevGold + 15)
            let currentWeapon = inventory.shift()
            setText(\`You sold a \${currentWeapon}. In your inventory you have: \${inventory}\`)
        } else {
            setText("Don't sell your only weapon!")
        }
    }
    function fightSlime() {
        fighting = 0;
        goFight();
    }
    function fightBeast() {
        fighting = 1;
        goFight();
    }
    function fightDragon() {
        fighting = 2;
        goFight();
    }
    function goFight() {
        update(locations[3])
        setMonsterStats("flex")
        setMonsterName(() => monsters[fighting].name)
        setMonsterHealth(() => monsters[fighting].health)
    }
    function attack() {
        setText(\`The \${monsters[fighting].name} attacks. 
        You attack it with your \${weapons[currentWeapon].name}.\`)
        if (isMonsterHit()) {
            setMonsterHealth(prevMonsterHealth => {
                prevMonsterHealth -= weapons[currentWeapon].power + Math.floor(Math.random() * statsXp) + 1
                return prevMonsterHealth
            })
        } else {
            setText(prevText => prevText += " You miss.")
        }
        setHealth(prevHealth => {
            if (prevHealth <= 0) {
                lose();
            }
            return prevHealth - getMonsterAttackValue(monsters[fighting].level)
        })
        setMonsterHealth(prevMonsterHealth => {
            if (prevMonsterHealth <= 0) {
                fighting === 2 ? winGame() : defeatMonster();
            }
            return prevMonsterHealth
        })
        if (Math.random() <= .1 && inventory.length !== 1) {
            setText(prevText => prevText += \` Your \${inventory.pop()} breaks.\`)
            currentWeapon--;
        }
    }
    function getMonsterAttackValue(level) {
        const hit = (level * 5) - (Math.floor(Math.random() * statsXp))
        return hit > 0 ? hit : 0
    }

    function isMonsterHit() {
        return Math.random() > .2 || health < 20;
    }

    function dodge() {
        setText(\`You dodge the attack from the \${monsters[fighting].name}\`)
    }

    function defeatMonster() {
        setGold(prevGold => prevGold + Math.floor(monsters[fighting].level * 6.7))
        setXp(prevXp => prevXp + monsters[fighting].level)
        statsXp += monsters[fighting].level
        update(locations[4])
        setMonsterStats("none")
    }

    function lose() {
        update(locations[5])
    }

    function winGame() {
        update(locations[6])
    }

    function restart() {
        setXp(0)
        setHealth(100)
        setGold(50)
        currentWeapon = 0
        inventory = ["stick"]
        goTown();
    }
    function easterEgg() {
        update(locations[7]);
    }

    function pickEagle() {
        pick(1);
    }

    function pickTails() {
        pick(2);
    }

    function pick(guess) {
        let number = Math.floor(Math.random() * 2) + 1;

        setText(\`You choose an \${guess === 1 ? 'Eagle' : 'Tails'}. Falls out: \${number === 1 ? 'eagle' : 'tails'}.\`)
        if (number === guess) {
            setText(prevText => prevText += ' Right! You win 20 gold!')
            setGold(prevGold => prevGold + 20)
        } else {
            setText(prevText => prevText += ' Wrong! You lose 10 health!')
            setHealth(prevHealth => {
                if (prevHealth <= 10) {
                    return lose()
                }
                return prevHealth - 10
            })
        }
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