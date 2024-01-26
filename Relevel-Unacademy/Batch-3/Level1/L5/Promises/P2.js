function VishwaPromise(){
    return new Promise(function(resolve,reject){
        const msg = "Let's see what is happening after 2 seconds";
        setTimeout(()=>{
            err = false;
            if(err){
                reject();
            }else{
                resolve();
            }
            console.log(msg); //means after 2 s this callback has to access to its lexical scope..
        },2000)
    });
}
const promise2 = rpromise();

const promise = rpromise();
console.log(promise);
promise.then(function(){
    console.log("See,Vishwa did what he said");
}).catch(function(){
    console.log("See,Vishwa can't kept his promise.");
})

console.log("This is the last line,but won't be executed last,if you know,you know Promises");

console.log(promise2);
promise.then(function(){
    console.log("hey secy");}).catch(function(){"f u"})

function rpromise(){
    return new Promise(function(resolve,reject){
        const msg = "Let's see ";

        setTimeout(()=>{
            err = false;
            if(!err){
                resolve();
                console.log("success");
            }
            else{
                reject();
                console.log("failure");
            }
        },2000);
});
}