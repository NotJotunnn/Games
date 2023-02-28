import { useState } from 'react'
import Intro from './Intro'
import Questionaire from './Questionaire'

export default function Main() {

    const [ startGame, setStartGame ] = useState(false)

    function handleGameStart() {
        setStartGame(prevValue => !prevValue)
    }

    return (
        <main>
            {!startGame && <Intro handleClick={handleGameStart}/>}
            {startGame && <Questionaire />}
        </main>
    )
}