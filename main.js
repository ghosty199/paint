var lastpositionofx
var lastpositionofy





canvas=document.getElementById("myCanvas")
ctx=canvas.getContext('2d')
color="red"
var lastpositionofx,lastpositionofy;
var mouseevent=""
canvas.addEventListener("touchstart", my_touchstart)
function my_touchstart(e){
  lastpositionofx=e.touches[0].clientX-canvas.offsetLeft 
   lastpositionofy=e.touches[0].clientY-canvas.offsetTop

    
}
canvas.addEventListener("touchmove", my_touchmove)

function my_touchmove(e){
    currentpositionofx=e.touches[0].clientX - canvas.offsetLeft;
    currentpositionofy=e.touches[0].clientY - canvas.offsetTop;
    
        
    
    ctx.beginPath()
ctx.strokeStyle=color
ctx.lineWidth=2
ctx.moveTo(lastpositionofx,lastpositionofy)
ctx.lineTo(currentpositionofx,currentpositionofy)
ctx.stroke()

    
lastpositionofx=currentpositionofx
lastpositionofy=currentpositionofy

}




function cleararea(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}