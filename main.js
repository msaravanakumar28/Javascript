  import { rollDice } from "./functions.js";
  
  $(document).ready(function () {

                $("#start").prop('disabled', false);              
                $("#rollButton,#end").prop('disabled', true);

                let currentPlayer = 1;
                let count = 0;
                let scores = {
                    player1: {
                        score: 0,

                    },
                    player2: {
                        score: 0,

                    }

                }
                $("#start").click(function () {

                    scores.player1.score = scores.player2.score = 0;
                    currentPlayer = 1
                    updatescore();

                    $("#end,#rollButton").prop('disabled', false);
                    $("#start").prop('disabled', true);
                 
                })



                $("#rollButton").click(function () {

                    $("#start").prop('disabled', true);              
                    $("#rollButton, #end").prop('disabled', false)

                    const diceValue = rollDice();
                    anim(diceValue);

                    scores[`player${currentPlayer}`].score += diceValue;
                    count++;


                });

                $("#end").click(function () {

              
                    $("#start").prop('disabled', false);
                    $("#rollButton, #end").prop('disabled', true);

                    let a = scores.player1.score;
                    let b = scores.player2.score;


                    if (count % 2 !== 0) {
                        $("#winner").html("Both Players should play Equal Games - Roll Dice once again");
                        $("#start").prop('disabled', true);
                        $("#rollButton,#end").prop('disabled', false);
                    }
                    else if (a > b) {
                        $("#winner").html("Player 1 wins");
                    } else if ((a === b) || (a = b = 0)) {
                        $("#winner").html("Game Draw");
                    }
                    else {
                        $("#winner").html("Player 2 wins");
                    }
                })

                
                function updatescore() {

                    $("#score1").html(scores.player1.score);
                    $("#score2").html(scores.player2.score);

                }

                function switchPlayer() {

                    currentPlayer = currentPlayer == 1 ? 2 : 1;

                }
                

                function anim(diceValue) {

                  /*   $("#displayDice").html(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="height: 250px; width: 250px;"><rect fill="#000" fill-opacity="1" height="512" width="512" rx="32" ry="32"></rect><g class="" transform="translate(0,0)" style=""><path d="M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zM256 206a50 50 0 0 1 0 100 50 50 0 0 1 0-100z" fill="#fff" fill-opacity="1"></path></g></svg>`)*/
                    let anim =0;
                    let delay = 300;
                    

                    for (let i=1;i<=6;i++)
                    {
                       let j = Math.floor(Math.random() * 6) + 1;;
                        setTimeout(() => {
                           $("#displayDice").html(`<img src="./${j}.png" alt="hello" width = "175px" height = "175px">`);

                        }, anim)
                       anim  += delay
                    }             

                    setTimeout(()=>{
                            $("#displayDice").html(`<img src="./${diceValue}.png" alt="Dice1" width = "175px" height = "175px">`);
                        updatescore();
                        switchPlayer();

                    },2100)

                 
                }

               

            });         
        
