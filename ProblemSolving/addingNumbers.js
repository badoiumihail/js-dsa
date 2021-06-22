// Statement: Write a function which takes two numbers and returns their sum.
// --------------------------------------------------------------------------
//
// 1. Can I restate the problem in my own words?
// * Implement addition of two numbers
// 2. What are the inputs that go into the problem?
// * Are we talking about integers, floating point numbers; Will the numbers have a maximum value since many programming languages
// * can't work with numbers past a certain threshold; should it only be two numbers, what if the user inputs more numbers? etc.
// 3. What are the outputs that should come from the solution to the problem?
// * same thing for the outputs
// 4. Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem?
// * What if the user only gives only a single number, how should I manage this use case
// 5. How should I label the important pieces of data that are a part of the problem?
// * What matters? In this example things like naming the function 'sum', and the input parameters numberOne and numberTwo, and so on.


function sum(numberOne, numberTwo) {
    return numberOne + numberTwo;
}

console.log(sum(666, 334));
