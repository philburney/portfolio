//An array containing strings of facts

const factArray=[
    "My favourite ski resort is Killington",
    "The highest mountain (actually a voclano) I have climbed is Rumiñawi in Ecudaor",
    "I enjoy playing badminton in my spare time",
    "I have been whitewater rafting down the Amazon",
    "I spent a month in Madagascar and saw plenty of Lemurs",
    "I've trekked the foothills of the Himilayas"
];

//Get the left arrow, right arrow and the fact element
let left = document.getElementById("leftarrow");
let right =document.getElementById("rightarrow");
let facts =document.getElementById("fact");

//Set the initial pointer to 0 so the first element is being shown
let pointer=0;

//Function to change the fact when the right arrow is clicked
function nextFact() {
    pointer++;   //increment the pointer to the next element
   
    if (pointer>factArray.length-1) {
        pointer=0;   //if the end of the array is reached reset the pointer to the beginning
    }
    facts.innerHTML=factArray[pointer];  //change the fact element text to the new fact
}

//function to change the fact if the left arrow is clicked
function prevFact() {
    pointer--;      //dec the pointer
    if (pointer<0) {
        pointer=factArray.length-1;   //if the counter is back to the beginning loop back to end of array
    }
    facts.innerHTML=factArray[pointer]; //change the fact element text to the new fact
}


//add event listeners
right.addEventListener("click",nextFact); // add event listener for click to right arrow
left.addEventListener("click",prevFact);  // add event listener for click to left arrow 
