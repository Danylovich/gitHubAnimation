var cnv = document.getElementById('canvas');
var ctx = cnv.getContext('2d');
var m = false;
var f = new field();

window.onload = ()=>{
    setInterval(drawAnimation,50);
}

function drawAnimation(){
    if(!m){
        if(r){
            f.randomEffect();
        }
        f.Effect();
        f.drawEffect();
    }else{
        f.randomEffect();
        f.drawEffect();
    }
}

function keyDown(){
    switch(event.keyCode){
        case 67: ctx.clearRect(0,0,cnv.width,cnv.height); r = true; break;
    }
}