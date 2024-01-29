let result=document.getElementById("result");
let grid=document.getElementById("grid");
let cardChoose=[];
let cardChooseId=[];
let cardWon=[];
var confettiElement = document.getElementById('my-canvas');
var confettiSettings = { target: confettiElement };
var confetti = new ConfettiGenerator(confettiSettings);


const data=[
    {
        name:"cheeseburger",
        img:"img/cheeseburger.png"
    },
    {
        name:"fris",
        img:"img/fries.png"
    },
    {
        name:"hotdog",
        img:"img/hotdog.png"
    },
    {
        name:"ice-cream",
        img:"img/ice-cream.png"
    },
    {
        name:"milkshake",
        img:"img/milkshake.png"
    },
    {
        name:"pizza",
        img:"img/pizza.png"
    },
    {
        name:"cheeseburger",
        img:"img/cheeseburger.png"
    },
    {
        name:"fris",
        img:"img/fries.png"
    },
    {
        name:"hotdog",
        img:"img/hotdog.png"
    },
    {
        name:"ice-cream",
        img:"img/ice-cream.png"
    },
    {
        name:"milkshake",
        img:"img/milkshake.png"
    },
    {
        name:"pizza",
        img:"img/pizza.png"
    },
];
data.sort(()=>0.5-Math.random());

function createCards(){
    for(let i=0;i<data.length;i++){
     
        let img=document.createElement("img");
        img.setAttribute("class","cards");
        img.setAttribute("data-id",i);
        img.setAttribute("src","img/back.png");
        
        img.addEventListener("click",filpCard);
       
        grid.appendChild(img);
       

    }
}
createCards();
function filpCard(){

  setTimeout(() => {
   
    let cardId=this.getAttribute("data-id");
    cardChoose.push(data[cardId].name);
     cardChooseId.push(cardId);
  
    this.setAttribute("src",data[cardId].img);
    if(cardChoose.length==2){
      setTimeout(() => {
         checkMatch();
      }, 500);
    }
  }, 300);

}

function checkMatch(){
      
    let optionOneId=cardChooseId[0];
    let optionTwoId=cardChooseId[1];
    let cards=document.querySelectorAll("#grid img");
    if(optionOneId===optionTwoId){
        alert("you click on same card !");
    }
    if(cardChoose[0]===cardChoose[1]){
        alert("its a Match");
       cards[optionOneId].setAttribute("src","img/white.png");
       cards[optionTwoId].setAttribute("src","img/white.png");
      
       cards[optionOneId].removeEventListener("click",filpCard);
     
       cards[optionTwoId].removeEventListener("click",filpCard);
       console.log(cardChoose);
        cardWon.push(cardChoose);
       
        
    }
    else{
       cards[optionOneId].setAttribute("src","img/back.png");
       cards[optionTwoId].setAttribute("src","img/back.png");
    }
    result.textContent=cardWon.length;
    cardChoose=[];
    cardChooseId=[];
    if(cardWon.length===data.length/2){
     result.textContent="Congragulation you won";
     confettiElement.setAttribute("style","visibility: visible;");
   confetti.render();
  
    }
 
  

    
}
function resetGame(){
  document.location.reload();
}