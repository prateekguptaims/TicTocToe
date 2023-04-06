let music = new Audio("music.mp3");
let audioTurn =new Audio("tings.mp3");
let gameover=new Audio("gameover.mp3");
let isgameover= false;
let turn="X";

const changeTurn=()=>{
 return turn=="X"?"0":"X";
}
///function to check win
const checkwin=()=>{
    let boxtexts= document.getElementsByClassName('boxtext');
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];
    wins.forEach((e)=>{
        if((boxtexts[e[0]].innerText===boxtexts[e[1]].innerText) &&(boxtexts[e[2]].innerText===boxtexts[e[1]].innerText)&&(boxtexts[e[0]].innerText !=="")){
            document.querySelector(".info").innerText= boxtexts[e[0]].innerText + 'won';
            isgameover=true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="156px";
        }
    })


}

//Main logic start of game

let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext= element.querySelector(".boxtext");
    element.addEventListener('click',()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText= turn;
           turn= changeTurn();
            audioTurn.play();
            checkwin();
            if(!isgameover){

            document.getElementsByClassName("info")[0].innerHTML=`turn for ${turn}`;
            }
        }

    })
})
reset.addEventListener('click',()=>{
    let boxtexts= document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach((e)=>{
        e.innerText=" "
    })
})