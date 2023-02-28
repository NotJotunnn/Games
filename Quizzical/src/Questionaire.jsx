import Question from './Question'
import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react'

export default function Questionaire() {
    // const array = [
    //     {
    //         question: 'How are you?',
    //         correct_answer: 'I am fine! hbu?',
    //         incorrect_answers: ['idc', 'stfu', 'go away']
    //     },
    //     {
    //         question: 'How are you?',
    //         correct_answer: 'I am fine! hbu?',
    //         incorrect_answers: ['idc', 'stfu', 'go away']
    //     },
    //     {
    //         question: 'How are you?',
    //         correct_answer: 'I am fine! hbu?',
    //         incorrect_answers: ['idc', 'stfu', 'go away']
    //     },
    //     {
    //         question: 'How are you?',
    //         correct_answer: 'I am fine! hbu?',
    //         incorrect_answers: ['idc', 'stfu', 'go away']
    //     }
    // ]

    const [ array, setArray ] = useState([])
    const [ gameState, setGameState ] = useState(false)
    const [ selectedQuestions, setSelectedQuestions ] = useState([])
    const [ counter, setCounter ] = useState(0)
    const [ gameLevel, setGameLevel ] = useState(0)

    useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple')
            .then(res => res.json())
            .then(data => setArray(data.results))
    }, [gameLevel])

    const questions = array.map(item => {
        return <Question 
            key={nanoid()}
            question={item.question}
            correct_answer={item.correct_answer}
            wrong_answers={item.incorrect_answers}
            isDisabled={gameState}
            sendDataUp={receiveDataFromQuestion}
            markedOption={selectedQuestions}
        />
    })

    function handleClick() {
        setGameState(prevValue => !prevValue)

        if(!gameState) return countCorrectAnswers()
    }

    function startNewGame() {
        setGameLevel(prevValue => prevValue+=1)
        setCounter(0)
        setSelectedQuestions([])
        setGameState(prevValue => !prevValue)
    }

    function countCorrectAnswers() {
        if(selectedQuestions.length > 0) {
            array.map(item => {
                if(selectedQuestions.filter(object => object.question == item.question).length>0) {
                    if(selectedQuestions.filter(object => object.question == item.question)[0].btnValue == item.correct_answer) {
                        setCounter(prevValue => prevValue+=1)
                    }
                }
            })
        }
    }

    function receiveDataFromQuestion(object) {
        if(selectedQuestions.length == 0) return setSelectedQuestions([object])

        setSelectedQuestions(prevValue => {
            prevValue.map((item, index) => {
                if(item.question == object.question) {
                    prevValue.splice(index, 1)
                }
            })
            prevValue.push(object)
            return prevValue
        })
    }
    
    return(
        <div className="questions">
            {/* {questions} Questions go here */}
            {questions}
            {!gameState && <button onClick={handleClick}>Check answers</button>}
            {gameState && <div className="score">
                <p>You scored {counter}/5 correct answers</p>
                <button onClick={startNewGame}>Play again</button>
            </div>}
        </div>
    )
}