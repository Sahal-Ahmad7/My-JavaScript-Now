function myAGE() {
    console.log(13);    
}
myAGE();




function Add3Number(Number1, Number2 , Number3 ) {
    console.log(Number1 + Number2 + Number3); 
}
Add3Number(2, 2, 2);


//The question is can i store it an a variable/

//***************************Method:01 **************************************/
function Add3Number(Number1, Number2 , Number3 ) {
    let result = Number1 + Number2 + Number3
    return result
}
let result =Add3Number(2, 2, 2);
console.log(result);


///**************************Method:02 *****************************************/
function Add2Number() {
    return  Number1 + Number2
}
let result2  = Add2Number
console.log("Ans:" ,0 + 9);

//************************************************************************************************************** */
function NewEmployes(Name) {
    if(Name === undefined){
        console.log("Please enter your name");
        return
    }
    return `${Name}Congrauts! YOu are hired`
}
console.log(NewEmployes(" "));