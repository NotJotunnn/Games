import { useEffect, useState } from "react"
import { nanoid } from 'nanoid'

export default function Question({ question, correct_answer, wrong_answers ,isDisabled, sendDataUp, markedOption }) 
{
    const [ answers, setAnswers ] = useState([])

    useEffect(() => {
            const TempArray = []
            let TempArray2 = []

            TempArray.push({
                value: correct_answer,
                isSelected: false,
                isDisabled
            })

            wrong_answers.map(item => TempArray.push({
                value: item,
                isSelected: false,
                isDisabled
            }))

            function compare(a, b) {
                const valueA = a.value.toUpperCase();
                const valueB = b.value.toUpperCase();
              
                let comparison = 0;
                if (valueA > valueB) {
                  comparison = 1;
                } else if (valueA < valueB) {
                  comparison = -1;
                }
                return comparison;
              }

            TempArray.sort(compare)
            
            if(markedOption.length > 0) {
                let isSelect = markedOption.filter(item => item.question == question)
                
                if(isSelect.length > 0) {
                    TempArray2 = TempArray.map(item => {
                        if(isSelect[0].btnValue == item.value)  {
                            return {
                                ...item,
                                isSelected: true
                            }
                        } else return item
                    })
                }
            }

            setAnswers(prevValue => TempArray2.length > 0 ? prevValue = TempArray2 : prevValue = TempArray)
    }, [])

    function handleClick(e) {
        let btnValue = e.target.value

        setAnswers(prevValues => {
            return prevValues.map(items => {
                if(items.value == btnValue) return {
                    ...items,
                    isSelected: true
                }
                else {
                    return {
                        ...items,
                        isSelected: false
                    }
                }
            })
        })

        sendDataUp({question, btnValue})
    }

    function cleanUpWeirdText(value) {
        let value1 = value.replace(/&quot;|&#039;/g, "'")
        let value2 = value1.replace(/&ldquo;/g, '"')
        let value3 = value2.replace(/&rdquo;/g, '"')
        let value4 = value3.replace(/&iacute;/g, 'í')
        let value5 = value4.replace(/&ouml;/g, 'ö')
        let value6 = value5.replace(/&auml;/g, 'ä')
        

        return value6
    }

    const title = cleanUpWeirdText(question)

    const answersGroup = answers.map(elem => {
        return <button className={elem.isSelected ? 'selected' : ''} 
        style={isDisabled ? elem.isSelected ? elem.value == correct_answer ? {backgroundColor: 'var(--correct)', color: 'var(--accent)', border: '2px solid var(--correct)'} : {backgroundColor: 'var(--wrong)', opacity: '40%', color: 'var(--accent)', border: '2px solid var(--wrong)', opacity: '40%'} : elem.value == correct_answer ? {backgroundColor: 'var(--correct)', color: 'var(--accent)', border: '2px solid var(--correct)'} : {opacity: '40%'} : {}} 
        onClick={e => handleClick(e)} key={nanoid()} disabled={isDisabled ? true : false} value={elem.value}>{cleanUpWeirdText(elem.value)}</button>
    })

    return (
        <div className="question">
            <h2>{title}</h2>
            <div className="options">{answersGroup}</div>
            <hr />
        </div>
    )
}