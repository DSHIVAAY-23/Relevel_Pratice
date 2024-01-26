//Function is returned
var x = "don";
function example(){
    function inner(){
        console.log("Do SOmething");
    }
    return inner;
}
const v = example();
v();

console.log(x);

//Example2
//Function is passed as an argument
function msg(){
    console.log("Hello Students");
}

function example2(msg){
    msg();
}

example2(msg);
