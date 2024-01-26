

const msg = "Hello Students";

function Outer(){
    const msg = "Hello Students";
    function inner(){
        console.log(msg);
        return 22;              //store refrence of parent function variables
    }
    return inner;
}
const op = Outer();
op();


function otw(outer){
    const msg = op();
    function inner(){
         console.log(msg);
        
    }
    return inner;
}
const e = otw();
e();
