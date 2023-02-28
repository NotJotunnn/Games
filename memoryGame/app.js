const start = document.getElementById('start'),
    modal = document.getElementById('modal'),
    amount = document.getElementById('amount'),
    table = document.getElementById('table'),
    hide = document.getElementById('hide');


const selectedCards = [];


hide.addEventListener('click', () => {
    hide.classList.remove('on-screen');
    const cards = document.querySelectorAll('.card-content');
    
    for(i=0; i<cards.length; i++) {
        cards[i].addEventListener('click', e => {
            if(e.target.classList.contains('reveal')) {
                
                // Selection treatment

                if(!e.target.classList.contains('selected')) {
                    selectedCards.push(e.target);
                    e.target.classList.add('selected')
                } else {
                    selectedCards.pop();
                    e.target.classList.remove('selected')
                }
                
                // Tests to see if 2 cards have been selected

                if(selectedCards.length > 1) {

                    // If both cards been selected have the right values in them, it keeps them facing upwards

                    if(selectedCards[0].style.cssText.split(':')[1].split(';')[0] == selectedCards[1].style.cssText.split(':')[1].split(';')[0]) {
                        selectedCards[0].classList.add('right');
                        selectedCards[1].classList.add('right');

                        selectedCards[0].classList.remove('reveal');
                        selectedCards[1].classList.remove('reveal');

                        selectedCards[0].classList.remove('selected');
                        selectedCards[1].classList.remove('selected');

                        selectedCards.pop()
                        selectedCards.pop()
                    }

                    // Else they show temporarily their colors, but then face downwards again

                    else {

                        // Variable used to separate the elements from a list whom they will be popped from.

                        var ele1 = selectedCards[0]; 
                        var ele2 = selectedCards[1];

                        ele1.classList.add('right');
                        ele2.classList.add('right');

                        ele1.classList.remove('selected');
                        ele2.classList.remove('selected');

                        // setTimeout used to prevent the cards from hiding their colors too quickly

                        setTimeout(() => {
                            ele1.classList.remove('right');
                            ele2.classList.remove('right');
                        }, 600)

                        selectedCards.pop()
                        selectedCards.pop()
                    }
                }
            }
            // Checks to see if all cards have been revealed
            winCondition(cards)
        })
    }
    

    // Starts the game
    if(!cards[0].classList.contains('reveal')) {
        for(i=0; i<cards.length; i++) {
            cards[i].classList.add('reveal')
        }
    }
})

start.addEventListener('click', () => {
    if(amount.value !== '') {
        modal.classList.remove('on-screen')
        table.classList.add('on-screen');
        hide.classList.add('on-screen');
    };
    shuffleDeck()
});

function shuffleDeck() {
    var colors = ['blue', 'red', 'green', 'skyblue', 'orange', 'pink', 'yellow', 'grey', 'wheat', 'darkblue', 'darkgoldenrod', 'darkgreen', 'midnightblue', 'rosybrown', 'plum', 'olive']

    const finalList = []

    for(i=0; i<amount.value; i++) {
        var temp = Math.floor(Math.random() * colors.length)

        finalList.push(colors[temp]);
        finalList.push(colors[temp]);

        colors.splice(temp, 1)
    }

    deal(finalList)
}

function deal(list) {
    var str = '';

    var size = list.length;
    
    for(i=0; i<size; i++) {
        var temp = Math.floor(Math.random() * list.length);
        
        str += `<div class="card"><div style="--background-color: ${list[temp]}; background-color: --background-color;" class="card-content"></div></div><br>`;
        
        list.splice(temp, 1);
    }
    
    table.innerHTML = str
}

function winCondition(cards) {
    count = 0;

    for(i=0; i<cards.length; i++) {
        if(cards[i].classList.contains('right')) count++
    }

    if(count == cards.length) {
        modal.classList.add('on-screen');
        table.classList.remove('on-screen');
    }
}