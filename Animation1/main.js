document.getElementById('stop').style.display = 'none';
var cnv = document.getElementById('canvas');
var ctx = cnv.getContext('2d');
var i = document.getElementById('input');
var n = 0;
var o = false;
var W = cnv.width;
var H = cnv.height;
var l = new loading();
var enter = 'b';
var tick = "0";
i.focus();
function drawAnimation(){
    ctx.clearRect(0,0,W,H);
    if(n!="0"){
        tick++;
        if(n == "1"){
            if(o == false){
                l.s = [0];
                o = true;
            }
            l.l1();
        }else if (n == "2"){
            if(o == false){
                l.s = [Math.PI*2/360,Math.PI*1.5,Math.PI*2];
                o = true;
            }
            l.l2();
        }else if (n == "3"){
            if(o == false){
                l.s = [Math.PI*2/360,Math.PI*1.5,Math.PI*1.5,0];
                o = true;
            }
            l.l3();
        }else if (n == "4"){
            if(o == false){
                l.s = [[Math.PI*2/360,Math.PI*1.5,Math.PI*1.5],[Math.PI*2/360/12,Math.PI*1.5,Math.PI*1.5]];
                o = true;
            }
            l.l4();
        }else if (n == "5"){
            if(o == false){
                l.s = [false,2/40];
                l.X = 10;
                l.Y = 2;
                o = true;
            }
            l.l5();
        }
    }
}

function button(){
    if(i.value == '1' || i.value == '2' || i.value == '3' || i.value == '4' || i.value == '5'){
        n = i.value;
        document.getElementById('b').style.display = 'none';
        i.style.display = 'none';
        document.getElementById('stop').style.display = 'inline-block';
        i.value = null;
        enter = 'stop';
    }
}

function stop(){
    n = "0";
    o = false;
    document.getElementById('b').style.display = 'inline-block';
    i.style.display = 'inline-block';
    document.getElementById('stop').style.display = 'none';
    enter = 'b';
    i.focus();
}

function keyDown(){
    switch(event.keyCode){
        case 13: 
            if(enter == 'b'){
                button();
            }else{
                stop();
            }
        break;
        case 77: document.getElementById('href').focus(); break;
    }
}

window.onload = ()=>{
    setInterval(drawAnimation,1);
}
