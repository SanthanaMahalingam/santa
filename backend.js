let wdElement=document.getElementById("h1");
let inpElement=document.getElementById("in1");
let dElement=document.getElementById("display");
let a=["0","1","2","3","4","5","6","7","8","9"];
let count=10;
let y="";

restart();

function restart(){
    let x=Math.ceil(Math.random()*10)-1;
    wdElement.textContent=a[x];
    y=a[x];
}

function reloard(){
    window.location.reload();
}

function check(){
    let word=inpElement.value;
    if( word === y && count != 0){
        dElement.textContent="Successfull Done!!!";
        dElement.style.backgroundColor="green";
        dElement.style.color="white";
        clearInterval(counter);
    }
}

let counter=setInterval(function(){
    count=count-1;
    dElement.textContent=count;
    if(count===0){
        dElement.textContent="Failed !!!";
        dElement.style.backgroundColor="black";
        dElement.style.color="red";
        dElement.style.borderColor="red";
        dElement.style.borderStyle="solid";
        clearInterval(counter);
    }
},1000);





