const button = document.getElementById("squarePerRowButton");
button.addEventListener("click", function(e){
    e.preventDefault();
    console.log(button.form.squarePerRowId.value);
})
