#! /usr/bin/env node
import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "enter First Number", type: "number", name: "firstNumber" },
  { message: "enter Second Number", type: "number", name: "secondNumber"},
  { 
    message: "select one of the operators to perform action",
   type: "list", 
   name: "operator",
   choices:["Addition","Subtraction","Multiplication","Division","Percentage","Exponention"],
  },
]);
console.log(answer);

//conditional statement
if (answer.operator === "Addition") {
  console.log(answer.firstNumber + answer.secondNumber);
 }
 else if (answer.operator === "Subtraction") {
  console.log(answer.firstNumber - answer.secondNumber);
}
 else if (answer.operator === "Multiplication"){
  console.log(answer.firstNumber * answer.secondNumber);
 }
 else if (answer.operator === "Division") {
  console.log(answer.firstNumber / answer.secondNumber);
}
 else if (answer.operator === "Percentage") {
 console.log(answer.firstNumber / answer.secondNumber * 100);
}
 else if (answer.operator === "Exponention") {
  console.log(answer.firstNumber ** answer.secondNumber);
   } else {
  console.log("Please select valid operator");
}



