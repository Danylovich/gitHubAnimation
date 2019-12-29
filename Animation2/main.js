var cnv = document.getElementById('canvas');
var ctx = cnv.getContext('2d');

var WHcanvas = false;
var b = false;
var d = false;
var x = 0;
var wB = 0;
var wT = 0;
var z = 0;
var e = 0;
function drawAnimation(){
    if(b){
        b = false;
        if(
            document.getElementById('kX').value != "" &&
            document.getElementById('wB').value != "" &&
            document.getElementById('wT').value != "" &&
            document.getElementById('wC').value != "" &&
            document.getElementById('hC').value != "" 
            ){
            x = Number(document.getElementById('kX').value);
            wB = Number(document.getElementById('wB').value);
            wT = Number(document.getElementById('wT').value);
            if(!WHcanvas){
                cnv.width = Number(document.getElementById('wC').value);
                cnv.height = Number(document.getElementById('hC').value);
                WHcanvas = true;
            }
            document.getElementById('f1').style.display = 'none';
            cnv.style.display = 'inline-block';
            document.getElementById('ok').style.display = 'none';
            document.getElementById('kX').value = null;
            document.getElementById('wB').value = null;
            document.getElementById('wT').value = null;
            d = true;
            if(wB >= wT){
                z = ((wB-wT)/2)/cnv.height;
            }else{
                z = ((wT-wB)/2)/cnv.height;
            }
        }
    }
    if(d && e !=cnv.height && document.getElementById('hC').value != "" ){
        e++;
        if(wB >= wT){
            ctx.beginPath();
            ctx.strokeStyle = document.getElementById('color').value;
            ctx.moveTo(x+z*e,cnv.height-e);
            ctx.lineTo(x+wB-z*e,cnv.height-e);
            ctx.stroke();
            ctx.beginPath();
            ctx.strokeStyle = 'black';
            ctx.moveTo(x,cnv.height);
            ctx.lineTo(x+z*e,cnv.height-e-1);
            ctx.moveTo(x+wB,cnv.height);
            ctx.lineTo(x+wB-z*e,cnv.height-e-1);
            ctx.stroke();
        }else{
            // console.log('a');
            ctx.beginPath();
            ctx.strokeStyle = document.getElementById('color').value;
            ctx.moveTo(x-z*e,cnv.height-e);
            ctx.lineTo(x+wB+z*e,cnv.height-e);
            ctx.stroke();
            ctx.beginPath();
            ctx.strokeStyle = 'black';
            ctx.moveTo(x,cnv.height);
            ctx.lineTo(x-z*e,cnv.height-e-1);
            ctx.moveTo(x+wB,cnv.height);
            ctx.lineTo(x+wB+z*e,cnv.height-e-1);
            ctx.stroke();
        }
    }else if(e == cnv.height){
        d = false;
        b = false;
        document.getElementById('f2').style.display = 'inline-block';
        document.getElementById('clear').style.display = 'inline-block';
    }
}

function but(){
    document.getElementById('f1').style.display = 'inline-block';
    cnv.style.display = 'none';
    document.getElementById('zcnv').style.display = 'none';
    document.getElementById('ok').style.display = 'inline-block';
    document.getElementById('f2').style.display = 'none';
    document.getElementById('clear').style.display = 'none';
    b = false;
    d = false;
    x = 0;
    wB = 0;
    wT = 0;
    z = 0;
    e = 0;
}

function ok(){
    b = true;
}

function c(){
    ctx.clearRect(0,0,cnv.width,cnv.height);
}
    
window.onload = ()=>{
    setInterval(drawAnimation,10);
    document.getElementById('f2').style.display = 'none';
    document.getElementById('clear').style.display = 'none';
    cnv.style.display = 'none';
}
// document.getElementById('f1').style.display = 'none';