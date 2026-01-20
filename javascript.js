const button = document.getElementById("squarePerRowButton");
button.addEventListener("click", function(e){
    e.preventDefault();
    console.log(button.form.squarePerRowId.value);
})

const container = document.querySelector(".container");
function createDiv(val){
    const div = document.createElement("div");
    const lato = 960/val;
    div.style.height= lato+"px";
    div.style.width = lato+"px";
    div.style.backgroundColor = "black";
    container.appendChild(div);
}

createDiv(20);