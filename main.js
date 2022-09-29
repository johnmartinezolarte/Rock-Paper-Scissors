const tag=parameter=>document.querySelector(parameter);
const displayContainerTop=tag('.container_top');
const displayContainerBottom=tag('.container_bottom');
const numberGames=tag('.number_games');
const startPlay=tag('.start_play');
const displayOptionsBtnPlayer=tag('.options_btnplay');
const displayOptionsPlayer=tag('.options_player');
const rock=tag('.rock');
const paper=tag('.paper');
const scissors=tag('.scissors');
const restart=tag('.restart');
const scorePlayer=tag('.score_player');
const scorePc=tag('.score_pc');
const displayPlayer=tag('.img_player');
const displayPc=tag('.img_pc');
const displayRoundWinner=tag('.round_winner');
const nextRound=tag('.next_round');
const displayGameWinner=tag('.game_winner');
const displayOptionsPc=tag('.options_pc');

let sumPlayer=0, sumPc=0, resultPlayer, resultPc;

startPlay.addEventListener('click', ()=>{
    if(numberGames.value>0){
        displayContainerTop.style.display='none';
        displayContainerBottom.style.visibility='visible';
        
        for(let i=0;i<numberGames.value;i++){


            rock.addEventListener('click', ()=>{
                displayOptionsPlayer.style.visibility='hidden';
                displayOptionsPc.style.visibility='hidden';
                displayPc.style.visibility='visible';
                displayPlayer.style.visibility='visible';
                displayPlayer.src="./images/rock.jpg";
                nextRound.style.visibility='visible';
                resultPc=Math.floor(Math.random()*3+1);
                if(resultPc===3){
                    sumPlayer++;
                    displayPc.src="./images/scissors.jpg";
                    displayRoundWinner.innerHTML='The winner of the round was: Player'
                    scorePlayer.innerHTML=sumPlayer;
                }else if(resultPc===2){
                    sumPc++;
                    displayPc.src="./images/paper.jpg";
                    displayRoundWinner.innerHTML='The winner of the round was: PC'
                    scorePc.innerHTML=sumPc;
                }else{
                    displayPc.src="./images/rock.jpg";
                    displayRoundWinner.innerHTML='The winner of the round was: Tie'
                }


        
                nextRound.addEventListener('click', ()=>{
                    nextRound.style.visibility='hidden';
                    displayRoundWinner.innerHTML='';
                    displayOptionsPlayer.style.visibility='visible';
                    displayOptionsPc.style.visibility='visible';
                    displayPlayer.style.visibility='hidden';
                    displayPc.style.visibility='hidden';

                })
            })



        }
    }else{
        alert('Enter a value greater than 0.');
    }
});
restart.addEventListener('click', ()=>{
    location.reload();
})