const tag=parameter=>document.querySelector(parameter);
const displayContainerTop=tag('.container_top');
const displayContainerBottom=tag('.container_bottom');
const numberGames=tag('.number_games');
const startPlay=tag('.start_play');
const displayOptionsChoose=tag('.title_choose_options');
const rockPlayer=tag('.rock');
const paperPlayer=tag('.paper');
const scissorsPlayer=tag('.scissors');
const restart=tag('.restart');
const scorePlayer=tag('.score_player');
const scorePc=tag('.score_pc');
const displayPlayer=tag('.img_player');
const displayPc=tag('.img_pc');
const displayRoundWinner=tag('.round_winner');
const nextRound=tag('.next_round');
const displayGameWinner=tag('.game_winner');
const displayOptionsPc=tag('.container_right');
const textVs=tag('.text_vs');

let sumPlayer=0, sumPc=0, sumtie=0, resultPc, rounds;

startPlay.addEventListener('click', ()=>{
    (numberGames.value>0)?(displayContainerTop.style.display='none',displayContainerBottom.style.visibility='visible',rounds= +numberGames.value):alert('Enter a value greater than 0.')
});

numberGames.addEventListener("keyup", function(event){
    event.preventDefault();
    if(event.keyCode === 13){
        startPlay.click();
    }
});

rockPlayer.addEventListener('click',rock);
paperPlayer.addEventListener('click',paper);
scissorsPlayer.addEventListener('click',scissors);

function rock(){
    displayOptionsChoose.style.visibility='hidden';
    displayOptionsPc.style.visibility='hidden';
    displayPc.style.visibility='visible';
    displayPlayer.style.visibility='visible';
    displayPlayer.src="./images/rock.jpg";
    textVs.style.visibility='visible';
    resultPc=Math.floor(Math.random()*3+1);
    if(resultPc===3){
        sumPlayer++;
        displayPc.src="./images/scissors.jpg";
        displayRoundWinner.innerHTML='The winner of the round was: Player';
        scorePlayer.innerHTML=sumPlayer;
    }else if(resultPc===2){
        sumPc++;
        displayPc.src="./images/paper.jpg";
        displayRoundWinner.innerHTML='The winner of the round was: PC';
        scorePc.innerHTML=sumPc;
    }else{
        displayPc.src="./images/rock.jpg";
        displayRoundWinner.innerHTML='The winner of the round was: Tie';
        sumtie++
    }
    if(sumPlayer+sumPc+sumtie===rounds){
        setTimeout(gameWinner,3000,displayGameWinner);
    }else{
        nextRound.style.visibility='visible';
    }
}

function paper(){
    displayOptionsChoose.style.visibility='hidden';
    displayOptionsPc.style.visibility='hidden';
    displayPc.style.visibility='visible';
    displayPlayer.style.visibility='visible';
    displayPlayer.src="./images/paper.jpg";
    textVs.style.visibility='visible';
    resultPc=Math.floor(Math.random()*3+1);
    if(resultPc===1){
        sumPlayer++;
        displayPc.src="./images/rock.jpg";
        displayRoundWinner.innerHTML='The winner of the round was: Player';
        scorePlayer.innerHTML=sumPlayer;
    }else if(resultPc===3){
        sumPc++;
        displayPc.src="./images/scissors.jpg";
        displayRoundWinner.innerHTML='The winner of the round was: PC';
        scorePc.innerHTML=sumPc;
    }else{
        displayPc.src="./images/paper.jpg";
        displayRoundWinner.innerHTML='The winner of the round was: Tie';
        sumtie++
    }
    if(sumPlayer+sumPc+sumtie===rounds){
        setTimeout(gameWinner,3000,displayGameWinner);
    }else{
        nextRound.style.visibility='visible';
    }
}

function scissors(){
    displayOptionsChoose.style.visibility='hidden';
    displayOptionsPc.style.visibility='hidden';
    displayPc.style.visibility='visible';
    displayPlayer.style.visibility='visible';
    displayPlayer.src="./images/scissors.jpg";
    textVs.style.visibility='visible';
    resultPc=Math.floor(Math.random()*3+1);
    if(resultPc===2){
        sumPlayer++;
        displayPc.src="./images/paper.jpg";
        displayRoundWinner.innerHTML='The winner of the round was: Player';
        scorePlayer.innerHTML=sumPlayer;
    }else if(resultPc===1){
        sumPc++;
        displayPc.src="./images/rock.jpg";
        displayRoundWinner.innerHTML='The winner of the round was: PC';
        scorePc.innerHTML=sumPc;
    }else{
        displayPc.src="./images/scissors.jpg";
        displayRoundWinner.innerHTML='The winner of the round was: Tie';
        sumtie++
    }
    if(sumPlayer+sumPc+sumtie===rounds){
        setTimeout(gameWinner,3000,displayGameWinner);
    }else{
        nextRound.style.visibility='visible';
    }
}

nextRound.addEventListener('click', ()=>{
    nextRound.style.visibility='hidden';
    displayRoundWinner.innerHTML='';
    displayOptionsChoose.style.visibility='visible';
    displayOptionsPc.style.visibility='visible';
    displayPlayer.style.visibility='hidden';
    displayPc.style.visibility='hidden';
    textVs.style.visibility='hidden';
})

function gameWinner(display){
    displayRoundWinner.style.visibility='hidden';
    display.style.visibility='visible';
    if(sumPlayer>sumPc){
        display.innerHTML='The winner of the game is: PLAYER';
    }else if(sumPc>sumPlayer){
        display.innerHTML='The winner of the game is: PC';
    }else{
        display.innerHTML='The winner of the game is: TIE';
    }
}

restart.addEventListener('click', ()=>{
    location.reload();
})