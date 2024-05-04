//variables
var ruondg = 0;
var Xg = "";
var Og = "";

//start
function game(buttonId){
    //change the value of buttons to X or O
    if (document.getElementById(buttonId).innerHTML == "here"){
        if(ruondg % 2 == 0){
            document.getElementById(buttonId).innerHTML = "X";
            Xg += buttonId + " ";
            //console.log("X " +buttonId);
        }else{
            document.getElementById(buttonId).innerHTML = "O";
            Og += buttonId + " ";
            //console.log("O " +buttonId);
        }
        //count the number of clicks
        ruondg++;
    }
    console.log("X :" +Xg);
    console.log("O :" +Og);
    //check if we had a winner
    if((Xg.search(/L/g) == 4) || (Xg.search(/R/g) == 4) || (Xg.search(/M/g) == 4) || (Xg.search(/C/g) == 4) ||
    (Xg.search(/B/g).length == 4) || (Xg.search(/T/g).length == 4)){
        document.getElementById("gameResult").innerHTML = "X player win!";
    }
    else if((Og.search(/L/g) == 4) || (Og.search(/R/g) == 4) || (Og.search(/M/g) == 4) || (Og.search(/C/g) == 4) ||
    (Og.search(/B/g) == 4) || (Og.search(/T/g) == 4)){
        document.getElementById("gameResult").innerHTML = "O player win!";
    }
    else if (ruondg >= 9){ // check for Draw
        document.getElementById("gameResult").innerHTML = "Draw!";
    }
}

//restart the game
function restGame(){
    ruondg = 0;
    Xg = "";
    Og = "";
    document.getElementById("gameResult").innerHTML = "Playing... ";

    document.getElementById("LT").innerHTML = "here";
    document.getElementById("MT").innerHTML = "here";
    document.getElementById("RT").innerHTML = "here";

    document.getElementById("LC").innerHTML = "here";
    document.getElementById("MC").innerHTML = "here";
    document.getElementById("RC").innerHTML = "here";

    document.getElementById("LB").innerHTML = "here";
    document.getElementById("MB").innerHTML = "here";
    document.getElementById("RB").innerHTML = "here";

}