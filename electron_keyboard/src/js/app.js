const pianoKeys = document.querySelectorAll(".key");

const div = document.querySelectorAll("#key__div");

const check = document.querySelector("#myToggle");

function playSound(newUrl) {
    const sound = new Audio(newUrl);
    sound.play()
}

pianoKeys.forEach((pianoKeys, i) => {
    pianoKeys.addEventListener("click", () => {
        addCss(i)
        setTimeout(function () {
            turnOffCss(i)
        }, 1100)
        playNote(i)
    })
})

function playNote(url) {
    const number = url < 9 ? '0' + (url + 1) : (url + 1);
    const newUrl = `../pianokeys/key${number}.wav`;
    playSound(newUrl)
}

function addCss(element) {
    pianoKeys[element].classList.add("active")
}

function turnOffCss(element) {
    pianoKeys[element].classList.remove("active")
}

// const piano = document.querySelector("input");

document.addEventListener("keydown", e => {
    if (!e.repeat){
        const value = {"number": 0}
        switch (e.code) {
            case 'Tab':                       
                for(i = 0; i <= div.length-1; i++){
                    div[i].classList.toggle("unactive")
                }
                break
            case 'KeyQ':
                value.number = 0
                addCss(value.number)
                setTimeout(function () {
                    turnOffCss(value.number)
                }, 1100)
                playNote(value.number)
                break
            case 'KeyA':
                value.number = 1
                addCss(value.number)
                setTimeout(function () {
                    turnOffCss(value.number)
                }, 1100)
                playNote(value.number)
                break
            case 'KeyW':
                value.number = 2
                addCss(value.number)
                setTimeout(function () {
                    turnOffCss(value.number)
                }, 1100)
                playNote(value.number)
                break
            case 'KeyS':
                value.number = 3
                addCss(value.number)
                setTimeout(function () {
                    turnOffCss(value.number)
                }, 1100)
                playNote(value.number)
                break
            case 'KeyE':
                value.number = 4
                addCss(value.number)
                setTimeout(function () {
                    turnOffCss(value.number)
                }, 1100)
                playNote(value.number)
                break
            case 'KeyD':
                value.number = 5
                addCss(value.number)
                setTimeout(function () {
                    turnOffCss(value.number)
                }, 1100)
                playNote(value.number)
                break
            case 'KeyR':
                value.number = 6
                addCss(value.number)
                setTimeout(function () {
                    turnOffCss(value.number)
                }, 1500)
                playNote(value.number)
                break
            case 'KeyF':
                value.number = 7
                addCss(value.number)
                setTimeout(function () {
                    turnOffCss(value.number)
                }, 1100)
                playNote(value.number)
                break
            case 'KeyT':
                value.number = 8
                addCss(value.number)
                setTimeout(function () {
                    turnOffCss(value.number)
                }, 1100)
                playNote(value.number)
                break
            case 'KeyG':
                value.number = 9
                addCss(value.number)
                setTimeout(function () {
                    turnOffCss(value.number)
                }, 1100)
                playNote(value.number)
                break
            case 'KeyY':
                value.number = 10
                addCss(value.number)
                setTimeout(function () {
                    turnOffCss(value.number)
                }, 1100)
                playNote(value.number)
                break
            case 'KeyH':
                value.number = 11
                addCss(value.number)
                setTimeout(function () {
                    turnOffCss(value.number)
                }, 1100)
                playNote(value.number)
                break
            case 'KeyU':
                value.number = 12
                addCss(value.number)
                setTimeout(function () {
                    turnOffCss(value.number)
                }, 1100)
                playNote(value.number)
                break
            case 'KeyJ':
                value.number = 13
                addCss(value.number)
                setTimeout(function () {
                    turnOffCss(value.number)
                }, 1100)
                playNote(value.number)
                break
            case 'KeyI':
                value.number = 14
                addCss(value.number)
                setTimeout(function () {
                    turnOffCss(value.number)
                }, 1100)
                playNote(value.number)
                break
            case 'KeyK':
                value.number = 15
                addCss(value.number)
                setTimeout(function () {
                    turnOffCss(value.number)
                }, 1100)
                playNote(value.number)
                break
                case 'KeyO':
                    value.number = 16
                    addCss(value.number)
                    setTimeout(function () {
                        turnOffCss(value.number)
                    }, 1100)
                    playNote(value.number)
                    break
                    case 'KeyL':
                        value.number = 17
                        addCss(value.number)
                        setTimeout(function () {
                            turnOffCss(value.number)
                        }, 1100)
                        playNote(value.number)
                        break
                        case 'KeyP':
                            value.number = 18
                            addCss(value.number)
                            setTimeout(function () {
                                turnOffCss(value.number)
                            }, 1100)
                            playNote(value.number)
                            break
                            case 'Semicolon':
                                value.number = 19
                                addCss(value.number)
                                setTimeout(function () {
                                    turnOffCss(value.number)
                                }, 1100)
                                playNote(value.number)
                                break
                                case 'BracketLeft':
                                    value.number = 20
                                    addCss(value.number)
                                    setTimeout(function () {
                                        turnOffCss(value.number)
                                    }, 1100)
                                    playNote(value.number)
                                    break
                                    case 'Equal':
                                        value.number = 21
                                        addCss(value.number)
                                        setTimeout(function () {
                                            turnOffCss(value.number)
                                        }, 1100)
                                        playNote(value.number)
                                        break
                                        case 'BracketRight':
                                            value.number = 22
                                            addCss(value.number)
                                            setTimeout(function () {
                                                turnOffCss(value.number)
                                            }, 1100)
                                            playNote(value.number)
                                            break
                                            case 'Backslash':
                                                value.number = 23
                                                addCss(value.number)
                                                setTimeout(function () {
                                                    turnOffCss(value.number)
                                                }, 1100)
                                                playNote(value.number)
                                                break
                                            }
                                        }
                                        
                                    });
                                    
check.addEventListener("click", () => {
    
    for(i = 0; i <= div.length-1; i++){
        div[i].classList.toggle("unactive")
    }
})