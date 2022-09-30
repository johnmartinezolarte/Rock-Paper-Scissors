let rounds, player, pc, sumPlayer=0, sumPc=0, valid=true;

do{
    rounds=+prompt('How many rounds of Rock Paper Scissors game would you like to play?');
    if(rounds>0) valid=false;
}while(valid);

for(let i=0;i<rounds;i++){
    do{
        player=+prompt(`Rock Paper Scissors game.\nRound #${i+1}\nChoose an option:\n1: Rock\n2: Paper\n3:Scissors`);
        if(player===1 || player===2 || player===3){
            valid=false;
        }else{
            valid=true;
        }
    }while(valid);

    pc=Math.floor(Math.random()*3+1);
    if(pc===1){
        alert(`Round #${i+1}\nPC chose Rock`);
    }else if(pc===2){
        alert(`Round #${i+1}\nPC chose Paper`);
    }else{
        alert(`Round #${i+1}\nPC chose Scissors`);
    }

    if(player===1 && pc===3){
        alert(`The winner of the round #${i+1} was: Player`);
        sumPlayer++;
    }else if(player===1 && pc===2){
        alert(`The winner of the round #${i+1} was: PC`);
        sumPc++;
    }else if(player===2 && pc===1){
        alert(`The winner of the round #${i+1} was: Player`);
        sumPlayer++;
    }else if(player===2 && pc===3){
        alert(`The winner of the round #${i+1} was: PC`);
        sumPc++;
    }else if(player===3 && pc===2){
        alert(`The winner of the round #${i+1} was: Player`);
        sumPlayer++;
    }else if(player===3 && pc===1){
        alert(`The winner of the round #${i+1} was: PC`);
        sumPc++;
    }else{
        alert(`The winner of the round #${i+1} was: Tie`);
    }
}

if(sumPlayer>sumPc){
    alert('The winner of the game is: PLAYER');
}else if(sumPc>sumPlayer){
    alert('The winner of the game is: PC');
}else{
    alert('The winner of the game is: TIE');
}