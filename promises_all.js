const prompt = require("prompt-sync")({sigint:true});

let workout = new Promise(function(success,failure)    
{
   let time = prompt("enter time: ")
    if(time>5 && time<8)
            success("you are allowed to do workouts");
        
    else
            failure("you are not allowed to do workouts")
})

let go_to_work = new Promise(function(success,failure)
{
    let time = prompt("enter time: ")
    if(time>8 && time< 10)
        success("you are allowed to do work");
        
    else
        failure("you are not allowed to do work");
})

let return_to_home = new Promise(function(success,failure)
{
    let time = prompt("enter  time: ")
    if(time>16 && time< 19)
            success("u can allow to go home");
        
    else
            failure("you are not allowed to go home");
})

let print = async ()=>
{
    await Promise.all([workout, go_to_work, return_to_home]).then((values)=> 
    {
        console.log(values);
    }).catch((error)=> console.log("the error message is "));
    
    go_to_work.catch((error)=> console.log(error));
    workout.catch((error)=> console.log(error))
    return_to_home.catch((error)=> console.log(error));
}
print();