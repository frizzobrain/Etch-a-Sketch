const button = document.getElementById("squarePerRowButton");
button.addEventListener("click", function(e){
    e.preventDefault();
    createDiv(button.form.squarePerRowId.value);
})

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
    div.addEventListener("mouseenter",e =>e.target.style.backgroundColor = "black");
    container.appendChild(div);
}
}

