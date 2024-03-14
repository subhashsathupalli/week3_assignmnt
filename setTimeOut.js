const prompt = require("prompt-sync")({sigint:true});

let callback1= (value)=>
{
    console.log("because of callback im printing 2nd");
    console.log(`double value of ${data} is ${value}`)
}
let callback2= (parameter,myCallback)=>
{
    setTimeout(()=>{
        let data = parameter *2;
        myCallback(data)
        console.log("after callback is over im printing last");
    },3000)

    console.log("because of set time out im printing first");
}

let data= prompt("give any number ill double it:");
callback2(data,callback1);