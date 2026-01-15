let  StudentIDcard = {
    name: "Panther",
    Age: 11111 ,
    FatherName:" Bigpanther",
}
// console.log(StudentIDcard);

StudentIDcard.Greeting = function(){
    console.log("Heelo the programer");
}

StudentIDcard.GreetingTwo = function() {
    console.log(`Hello, ${this.name}`);
}

console.log(StudentIDcard.Greeting());
console.log(StudentIDcard.GreetingTwo());
