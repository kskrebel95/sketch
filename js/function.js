var boxHeight=0;

// adds divs
var container=document.querySelector('.container');

for (i=0;i<16;i++){
    var box = document.createElement('div');
    box.classList.add('box');
    container.appendChild(box);
}

// to change color of boxes on hover
function changeBg(e){
    this.classList.add('changeColor');
  }

function boxListener(boxes){
    boxes.forEach(boxes => {
    boxes.addEventListener('mouseover',changeBg);
});
}
var boxes=document.querySelectorAll('.box');
boxListener(boxes);


// resets grid and prompt dimensions of new grid, calls function to create grid afterwards
function gridReset(){
    boxes.forEach(boxes => {
        boxes.classList.remove('changeColor');
    });

     boxHeight= prompt('enter box height (100 box max):');
        while (boxHeight <= 0 || boxHeight > 100){
            boxHeight= prompt('enter box height (100 box max):');
        }

    generateGrid(boxHeight);
}

function generateGrid(boxHeight){
    //removes current divs
        while (container.firstChild) {
            container.firstChild.remove();
        }

    //creates new grid
    for (i=0;i<boxHeight*boxHeight;i++){
        var box = document.createElement('div');
        box.classList.add('box');
        container.appendChild(box);
    }
    container.style= "grid-template-columns:repeat("+boxHeight+",1fr)";
    var newBoxes=document.querySelectorAll('.box');
    boxListener(newBoxes);
}

//reset button to call gridReset
var resetBtn=document.querySelector('.resetBtn');

resetBtn.addEventListener('click',gridReset);
