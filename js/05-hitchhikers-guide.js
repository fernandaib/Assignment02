function gameFive(){
    alert('You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall.');   
    let instructions = prompt("Which direction would you like to head. Please enter f (Forward) / l(Left) / r(Right).");
    switch (instructions){
        case "l":
            alert('Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown!');
            break;
        case "f":
            alert('You walk 100 yards and safely make your way out of the cave.');
            break;
        case "r":
            alert('You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever!');
            break;
        default:
            alert('The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option.');
    }
    alert('The game is now over.');
};

let msjUser = prompt("Are you ready to play the game? press y (Yes) / n (No)");
if (msjUser ==="y"){    
    gameFive();    
    let rate = Number(prompt("Please, rate the game between 1 and 10. "));
    if (rate>= 1 && rate <= 5 ){
        alert('Thanks for your answer. We are working hard to improve the game. ');  
    } else if(rate >=6 && rate <= 10){        
        let msjUserTwo = prompt("Thanks for your answer. Do you want to play again? press y (Yes) / n (No)");
        if(msjUserTwo === "y"){
            gameFive();
            let msjUserThree = prompt(" Do you want to play again? press y (Yes) / n (No)");
            while (msjUserThree ==="y"){
                gameFive();
            }            
        }
    } else if (rate === 0 || rate>10){
        alert("Thanks for playing and end the game. Bye");        
    }
}else if(msjUser ==="n"){
    document.write('Bye');
}


