# Loops

In this programming assignment you will be asked to write some loops that follow a specific behavior.  Read the instructions carefully as I give hints at variables to make and how they work.

All loops should be declared inside a function with the title as the function's name.

## Loop One
-  This loop should be inside the function named loopOne(){}
-  The function should have one input named time
-  Use a while-loop to create the count down program that screams every 5 seconds from the notes.
-  I am basically asking you to copy my code with one small change: use the time-variable/parameter mentioned above.

## Loop Two
-  This loop should be inside a function named loopTwo(){}
-  This function performs a "Geomtric Sum"
    -  1 + 2 + 4 + 8 + 16 + ... + 2^power
    -  1 + 5 + 25 + 125 + 625 + ... + 5^power
-  This function accepts two inputs/parameters
    -  number
    -  power
-  At the beginning of the function, initialize a variable named sum to be zero.
-  Use a for-loop that starts at zero, stops at power, and increments by one.
-  Inside the for-loop add the number into the sum.
-  Then re-assign the number to be larger.
-  After the for-loop, return the sum variable.

## Loop Three
-  This loop should be inside a function named loopThree(){}
-  This function uses a for-loop to build a pyramid with a specific symbol.

\*<br/>
\*\*<br/>
\*\*\*<br/>
\*\*\*\*<br/>
\*\*\*\*\*<br/>
-  The function has two inputs
  -  symbol: which stroes the character/string to be repeated.
  -  number: to indicate how far down the pyramid should go.
-  Have the for-loop console.log() the symbol.  After the log, reassign the symbol to have ONE MORE symbol glued to it.
-  There is no return statement.
