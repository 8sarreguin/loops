function loopOne(time){

      while(time > 0){

        if(time % 5 == 0){
            console.log("OH NO "+time+" seconds left!");
        }
        else {
          console.log(time+"seconds left");

        }
      time = time - 1;

      }
      console.log("You is done");
}
function loopTwo(number, power){

      let sum = 0;

      for(let p = 0; p < power; p=p + 1){

        sum = sum + Math.pow(number,p);
      }
      return sum;
}

function loopThree(symbol, number){
        let oldsymbol = symbol;
      for(let n = 0; n<number; n=n+1){
          console.log(oldsymbol);
          oldsymbol =oldsymbol+symbol;
      }



}

function main(){
    //Testing each function
    loopOne(10);
    loopOne(25);

    let powersOfTwo = loopTwo(2,10);
    let powersOfFive = loopTwo(5,4);
    console.log("The sum is "+powersOfTwo);
    console.log("The sum is "+powersOfFive);

    loopThree("#",6);
    loopThree("$",20);
    loopThree("x",10);

    console.log("You will need to scroll up to check all of them.");
}

//Hit ctrl + Shift + B to run the program.
//Hit ESC to make the printout messages go away.
main();
