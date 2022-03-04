//  Getting the element by querySelector
const text = document.querySelector('.fancy');
//  Getting the text of the element
const strText = text.textContent;

//  Splitting the text into array by .split method
const splitText = strText.split(""); 


text.textContent = "";

//  Making the text into the parts of span
for(let i=0;i<splitText.length;i++){
    text.innerHTML += "<span>"+splitText[i]+"</span>"
}

//  adding setInterval
let char = 0;
let timer = setInterval(onTick,90);

function onTick(){
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++
    if(char === splitText.length){
        complete();
        return;
    }
}

//  Stoping the animation 

function complete(){
    clearInterval(timer);
    timer = null;
}