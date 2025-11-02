// Don't touch this array
let names = ["Alex", "Sam", "John", "Lucia", "Marco", "Kristina"];

// Your code here
//Exercise 1
const exercise1 = () => {
    console.log("EXERCISE 1")
    console.log(`Hi! My name is Alex`)
}
exercise1();

//Exercise 2
const exercise2 = (name) => {
    return `Exercise 2` + ` Hi! My name is ${name}`;
};
console.log(exercise2(names[0]));

//Exercise 3
const exercise3 = (name = "Alex") => console.log(`Hi! My name is ${name}`);
exercise3();

//Exercise 4
const exercise4 = (name = "Alex", lastName) => console.log(`Hi! My name is ${name} ${lastName}`);
exercise4("Sally", "Resch");

//Exercise 5
const exercise5 = (name = "Alex", lastName) => {
    if (!lastName) {
        lastName = name + "sson";
    }
    console.log("EXERCISE 5")
    console.log(`Hi! My name is ${name} ${lastName}`);
}
exercise5();

//Exercise 6
//document.getElementById("exercise6").innerHTML = `Here i am`;
//Exercise 7
//document.getElementById("exercise7").innerHTML = `Here i am`;
//Exercise 8

const exercise8 = () => {
    let callExercise5 = exercise5();
    let newParagraph = document.createElement("p");
    newParagraph.textContent = callExercise5
    document.getElementById("exercise8").appendChild(newParagraph);
    return callExercise5()
}