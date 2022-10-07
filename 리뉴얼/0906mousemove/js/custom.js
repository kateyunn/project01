const mouse = document.querySelector('#mouse');
//console.log(mouse);

let mouseX = 0, mouseY = 0,currentX =0,currentY =0;

document.body.addEventListener('mousemove',function(event){mouseX = event.clientX;mouseY =event.clientY;console.log(mouseX,mouseY);
})


tick();
function tick(){
    requestAnimationFrame(tick);
    currentX += (mouseX-currentX)*0.1;
    currentY += (mouseY-currentY)*0.1;

mouse.style.transform = `translate(${currentX}px,${currentY}px)`;
}