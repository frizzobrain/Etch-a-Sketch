//this is not part of the project request.
//  I saw it searching for clues and i decided to implement it. It's kinda fun! Clean way to block wrong inputs. 
// A bit tricky to implement.

const button = document.querySelector("#squarePerRowButton");
button.addEventListener("click", function(e){
    e.preventDefault(); //button form has a default behavior that must be prevented
    createDiv(button.form.squarePerRowId.value);
})

const createGrid = document.querySelector("#createGrid");
createGrid.addEventListener("click", function(e){
    let numberSelected = prompt ("how many squares per row do you want?");
    while (isNaN(numberSelected)|| numberSelected <1 || numberSelected>=100 ){
        console.log(numberSelected);
        numberSelected = prompt ("choose a number between 1 and 100")
    } 
    createDiv(numberSelected);
    
});

let opacity; //we will use it to color the divs

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
        //toggle comment to the next line to see the divs. Keep in mind that the border 
        // will enlarge the divs so they won't fit properly in the container

        // div.style.border = "1px solid black"; 
        div.addEventListener("mouseenter",function(e){
        
        // e.target.style.backgroundColor = 'rgba(num,num,num,dec)'; this is the string to set the
        //background color using opacity (rbga is used for opacity, rbg is without opacity)
        //num is between 1 and 255, dec is between 0 and 1
        //test with those lines

        //e.target.style.backgroundColor = 'rgba(' 
        // + 255 + ',' + 255 + ',' + 30 + ',' + getOpacity(opacity)+')';

        e.target.style.backgroundColor = 'rgba(' 
        + getRandomRgbNumber() + ',' + getRandomRgbNumber() + ',' + getRandomRgbNumber() + ',' + 
        getOpacity(opacity)+')';
    
        })
        container.appendChild(div);
    }
}

function getRandomRgbNumber() {
  var RandomRgbNumber = Math.floor(Math.random() * 255);
  
  return RandomRgbNumber;
}

function getOpacity() {
  opacity = opacity+ 0.1;

  return opacity;
}
