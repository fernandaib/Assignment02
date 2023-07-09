let randomNum = Math.round(Math.random());
// window.console.log(typeof randomNum);
// document.write(`${randomNum}`);

let choice = Number(prompt('Register an option either: 0 (for HEADS) or 1 (for TAILS)'));
// window.console.log(typeof choice);
// document.write(`${choice}`);

if (randomNum < 1 ){
    if(choice === 0){
        document.write('The flip was heads and you chose heads...you win!');
    }else if(choice === 1){
        document.write('The flip was heads but you chose tails...you lose!');
    }   
}

if (randomNum > 0 ){
    if(choice === 0){
        document.write('The flip was tails but you chose heads...you lose!');
    }else if(choice === 1){
        document.write('The flip was tails and you chose tails...you win!');
    }   
}



