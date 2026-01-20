const button = document.getElementById("squarePerRowButton");
button.addEventListener("click", function(e){
    e.preventDefault();
    console.log(button.form.squarePerRowId.value);
})

const container = document.querySelector(".container");
function createDiv(val){
    for (let i=0; i<(val*val); i++){
    const div = document.createElement("div");
    const lato = 960/val;
    div.style.height= lato+"px";
    div.style.width = lato+"px";
    div.style.backgroundColor = "yellow";
    // div.style.border = "1px solid black";
    container.appendChild(div);
}
}
createDiv(2);
