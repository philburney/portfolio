const factArray=[
    "My favourite ski resort is Killington",
    "The highest mountain (actually a voclano) I have climbed is Rumiñawi in Ecudaor",
    "I enjoy playing badminton in my spare time",
    "I have been whitewater rafting down the Amazon",
    "I spent a month in Madagascar and saw plenty of Lemurs",
    "I've trekked the foothills of the Himilayas"
];

let left = document.getElementById("leftarrow");
let right =document.getElementById("rightarrow");
let facts =document.getElementById("fact");
let pointer=0;

function nextFact() {
    pointer++;
   
    if (pointer>factArray.length-1) {
        pointer=0;
    }
    facts.innerHTML=factArray[pointer];
}

function prevFact() {
    pointer--;
    if (pointer<0) {
        pointer=factArray.length-1;
    }
    facts.innerHTML=factArray[pointer];
}
right.addEventListener("click",nextFact);
left.addEventListener("click",prevFact);
