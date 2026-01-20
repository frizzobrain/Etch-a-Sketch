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

const container = document.querySelector(".container");
function createDiv(val){
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
    div.addEventListener("mouseenter",e =>e.target.style.backgroundColor = getColor());
    container.appendChild(div);
}
}

function getColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
