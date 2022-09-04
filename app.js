function rollthedice(){
    var randomnumber = Math.floor(Math.random()*6)+1;
    var dice = document.getElementById("dice");
    if(randomnumber===1){
        
        dice.style.transform="rotate3d(0,0,0,0deg)";

    }else if(randomnumber===2){

        dice.style.transform="rotate3d(0,1,0,-90deg)";

    }else if(randomnumber===3){

        dice.style.transform="rotate3d(0,1,0,-180deg)";
    }else if(randomnumber===4){
        dice.style.transform="rotate3d(0,1,0,-270deg)";


    }else if(randomnumber===5){

        dice.style.transform="rotate3d(1,0,0,-90deg)";
    }else{
        dice.style.transform="rotate3d(1,0,0,-270deg)";
        
    }
    document.getElementById("value").innerText="You got "+randomnumber;
    
}
let button = document.getElementById("btn");
button.addEventListener("click" ,rollthedice);

