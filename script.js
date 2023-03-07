let ab = Math.random()*100
ab = Number.parseInt(ab)
let inp =35;
inp= Number.parseInt(inp);
let score = 100;

while(inp != ab){
    // inp = parseInt(prompt("Gusse the number"))
    score = score -1;
    if(inp == ab ){
        console.log("Congratulation! You Gusse the Correct Number.")
        console.log(`You Gusse ${100-score} Chance`)
    }
    else if (inp > ab && inp <100){
        console.log('You Gusee the number is Greater');
    }
    else if (inp < ab && inp > 0 ){
        console.log('You Gusse the Number of Smaller');
    }else{
        console.log('Enter a Number Betwen 1 to 100 ');
    }

}