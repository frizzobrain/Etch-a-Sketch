const button = document.getElementById("squarePerRowButton");
button.addEventListener("click", function(e){
    e.preventDefault();
    createDiv(button.form.squarePerRowId.value);
})

const createGrid = document.querySelector("#createGrid");
createGrid.addEventListener("click", function(e){
    //e.preventDefault();
    let numberSelected = prompt ("how many squares per row do you want?");
    while (isNaN(numberSelected)|| numberSelected <1 || numberSelected>=100 ){
        console.log(numberSelected);
        numberSelected = prompt ("choose a number between 1 and 100")
    } 
        createDiv(numberSelected);
    
});

let opacity;

const container = document.querySelector(".container");
function createDiv(val){
     opacity = 0;
    //reset grid first, removing all the previously created node
    container.querySelectorAll('*').forEach(n => n.remove());
    //create the new nodes
    for (let i=0; i<(val*val); i++){
    const div = document.createElement("div");
    const lato = 960/val;
    div.style.height= lato+"px";
    div.style.width = lato+"px";
    div.style.backgroundColor = "yellow";
    
    // div.style.border = "1px solid black";
    div.addEventListener("mouseenter",function(e){
        
        // background: rgb(0 0 0 / 40%);
        e.target.style.backgroundColor = 'rgba(' 
        + getRandomNumber() + ',' + getRandomNumber() + ',' + getRandomNumber() + ',' + getOpacity(opacity)+')';
    
    })
    container.appendChild(div);
}
}

function getRandomNumber() {
  var RandomNumber = Math.floor(Math.random() * 255);
  
  return RandomNumber;
}

function getOpacity() {
  opacity = opacity+ 0.1;
  console.log(opacity);
  return opacity;
}
