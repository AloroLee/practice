function learnOfFunction (){
    console.log("I am practicing how to create functions")
}

learnOfFunction();

// function is the keyword that tells JavaScript you’re creating a function.
// learnOfFunction is the name you give your function (you can call it anything you like).
// Inside the { } braces is the code that runs when the function is called.
// To call a function, you simply use its name followed by parentheses "();"


function hello(friend){
    console.log("greetings, " + friend)
}

hello("Mr.Paul")

// friend is the parameter.
// "Mr.Paul" is the arguments passed when calling the function.

function divide(j,k){
    return j / k;
}

let division = divide(10,5)
console.log(division);

// The divide function takes two parameters j and k, divides them, and returns the result.
// return ends the function and sends the value back to the caller.
