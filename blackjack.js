    let sum = 0;
    let hasBlackJack = false;
    let isAlive = false;
    let cardsArr = [];
    let msg = "";
    let messageEl = document.querySelector('#message-el');
    let cardsEl = document.querySelector('#cards');
    let sumEl = document.querySelector('#sum');
    let playerInfo = {
        name: "Talal",
        chips: 190
    }
    let playerEl = document.getElementById("player");
    function startGame(){
        isAlive = true;
        let firstCard = getRandomCard();
        let secondCard = getRandomCard();
        cardsArr = [firstCard, secondCard];
        sum = firstCard + secondCard;
    }
    function renderGame() {
        startGame();
        sumEl.textContent = "Sum:" + " " + sum;
        cardsEl.textContent = "Cards: "
        for (let i = 0; i < cardsArr.length; i++){
            cardsEl.textContent += cardsArr[i] + " ";
        }
        
        if (sum <= 20) {
            msg = "Do you want to draw a new card?";
        } else if(sum === 21){
            msg = "You've got Blackjack!";
            hasBlackJack = true;
        } else{
            msg = "You're out of the game!";
            isAlive = false;
        }
        messageEl.textContent = msg;
    }
    function drawNewCard(){
        if (isAlive && cardsArr.length >= 2 && hasBlackJack === false) {
            let card = getRandomCard();
            playerInfo.chips -= 10;
            sum += card;
            cardsArr.push(card);
            renderGame();
        }
    }
    function getRandomCard() {
        let randomNumber = Math.floor(Math.random() * 13) + 1;
        if (randomNumber === 1) {
            return 11;
        } else if(randomNumber > 10){
            return 10;
        } else{
            return randomNumber;
        }
    }