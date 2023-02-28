const rooms = document.querySelectorAll('.room'),
    display = document.getElementById('display'),
    reset = document.getElementById('reset');

var turn = 'X';
display.innerText = `${turn} TURN!`;

const baseColor = display.style.color,
    baseDrawColor = 'red',
    baseWinColor = 'yellowgreen';


reset.addEventListener('click', () => {
    reset.style.opacity = '0';

    for(i = 0; i < rooms.length; i++) {
        rooms[i].textContent = '';
        rooms[i].style.backgroundColor = baseColor;    
    }

    turn = 'X';
    display.textContent = `${turn} TURN!`
    display.style.color = baseColor;
    reset.style.backgroundColor = baseColor;
})

for(i = 0; i < rooms.length; i++) {
    rooms[i].addEventListener('click', e => {
        // console.log('Clicked on square nº: ', e.target.attributes[1].value)
        markSpot(e)
    })
}

const markSpot = e => {

    const innerText = e.target.innerText;


    if(turn == 'X') {
        if(!innerText) {
            e.target.innerText = 'X';
            changeTurns();
        }
    }
    else {
        if(!innerText) {
            e.target.innerText = 'O';
            changeTurns();
        }
    }
}

function winCondition() {
    const possibleWin = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

    for(i = 0; i < possibleWin.length; i++) {
        if(rooms[possibleWin[i][0]].innerText == rooms[possibleWin[i][1]].innerText && rooms[possibleWin[i][1]].innerText == rooms[possibleWin[i][2]].innerText && rooms[possibleWin[i][0]].innerText != '') {
            rooms[possibleWin[i][0]].style.backgroundColor = baseWinColor;
            rooms[possibleWin[i][1]].style.backgroundColor = baseWinColor;
            rooms[possibleWin[i][2]].style.backgroundColor = baseWinColor;
            display.style.color = baseWinColor;
            reset.style.backgroundColor = baseWinColor;
            display.innerText = `${turn} WINS!`
            return true;
        }
    }
    return false;
}

function drawChance() {
    var draw = false;

    for(i = 0; i < rooms.length; i++) {
        if(rooms[i].textContent == '') return draw = true;
    }

    if(!draw) {
        display.innerText = `DRAW!`
        for(i = 0; i < rooms.length; i++) {
            rooms[i].style.backgroundColor = baseDrawColor;
        }
        display.style.color = baseDrawColor;
        reset.style.backgroundColor = baseDrawColor;
    }

    return draw;
}

function changeTurns() {
    if(!winCondition()) {
        console.log('win')
        if(drawChance()){
            console.log('draw')
            if(turn == 'X') {
                turn = 'O';
                return display.innerText = `${turn} TURN!`;
            }
            turn = 'X';
            display.innerText = `${turn} TURN!`;
        } else {
            reset.style.opacity = '1';
        }
    } else {
        reset.style.opacity = '1';
    }
}