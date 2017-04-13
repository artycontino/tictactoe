var player = 1;
function clickBtn(btn){
  if(player == 1){
  document.getElementById(btn).value = "X";
   document.getElementById(btn).disabled = "disabled";
  player -= 1;
  winner();
 }else{ 
  document.getElementById(btn).value = "O";
  document.getElementById(btn).disabled= "disabled";
  player += 1;
  winner()
}
}

function winner(){
  if(
  document.getElementById("subbox1").value == "X" &&
  document.getElementById("subbox4").value == "X" &&
  document.getElementById("subbox7").value == "X" ||
      document.getElementById("subbox2").value == "X" &&
  document.getElementById("subbox5").value == "X" &&
  document.getElementById("subbox8").value == "X" ||
        document.getElementById("subbox3").value == "X" &&
  document.getElementById("subbox6").value == "X" &&
  document.getElementById("subbox9").value == "X" ||
      document.getElementById("subbox1").value == "X" &&
  document.getElementById("subbox2").value == "X" &&
  document.getElementById("subbox3").value =="X"||      document.getElementById("subbox4").value == "X" &&
  document.getElementById("subbox5").value == "X" &&
  document.getElementById("subbox6").value == "X" ||
       document.getElementById("subbox7").value == "X" &&
  document.getElementById("subbox8").value == "X" &&
  document.getElementById("subbox9").value == "X"  ||    document.getElementById("subbox1").value == "X" &&
  document.getElementById("subbox5").value == "X" &&
  document.getElementById("subbox9").value == "X" ||
   document.getElementById("subbox3").value == "X" &&
  document.getElementById("subbox5").value == "X" &&
  document.getElementById("subbox7").value == "X"
 ){
alert("Player X Wins");
NewGame();
  }else if(
  document.getElementById("subbox1").value == "O" &&
  document.getElementById("subbox4").value == "O" &&
  document.getElementById("subbox7").value == "O" ||
      document.getElementById("subbox2").value == "O" &&
  document.getElementById("subbox5").value == "O" &&
  document.getElementById("subbox8").value == "O" ||
        document.getElementById("subbox3").value == "O" &&
  document.getElementById("subbox6").value == "O" &&
  document.getElementById("subbox9").value == "O" ||
      document.getElementById("subbox1").value == "O" &&
  document.getElementById("subbox2").value == "O" &&
  document.getElementById("subbox3").value =="O"||      document.getElementById("subbox4").value == "O" &&
  document.getElementById("subbox5").value == "O" &&
  document.getElementById("subbox6").value == "O" ||
       document.getElementById("subbox7").value == "0" &&
  document.getElementById("subbox8").value == "O" &&
  document.getElementById("subbox9").value == "O"  ||   
  document.getElementById("subbox5").value == "O" &&
  document.getElementById("subbox9").value == "O" ||
   document.getElementById("subbox3").value =="O" &&
  document.getElementById("subbox5").value == "O" &&
  document.getElementById("subbox7").value == "O"
 ){
alert("Player O Wins")
NewGame();
}
}
function newGame(){
  document.getElementById("subbox1").value ="";
  document.getElementById("subbox2").value ="";
  document.getElementById("subbox3").value ="";
  document.getElementById("subbox4").value ="";
  document.getElementById("subbox5").value =""; 
  document.getElementById("subbox6").value ="";
  document.getElementById("subbox7").value ="";
  document.getElementById("subbox8").value ="";
  document.getElementById("subbox9").value ="";
};




  