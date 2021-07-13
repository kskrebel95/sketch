var container=document.querySelector('.container');

for (i=0;i<16;i++){
    var box = document.createElement('div');
    box.classList.add('box');
    container.appendChild(box);
}
console.log(container);