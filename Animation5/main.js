var cnv = document.getElementById('MyCnv');
var ctx = cnv.getContext('2d');

var c = true;
var colors = ['red','green','blue'];
var X = 0;
var Y = 0;
var w = cnv.width/200;
var h = cnv.height/200;
var cnstX = 0;
var cnstY = 0;
var s = 0;
function drawAnimation(){
    ctx.beginPath();
    let n = Math.floor(Math.random()*colors.length);
    ctx.fillStyle = colors[n];
    if(c){
        ctx.fillRect(X,Y,w,h);
        if(s == -1){
            c = false;
            s = 0;
            return;
        };
        if(Y == cnstY){
            if(cnstX+w != cnv.width){
                cnstX+=w;
                Y = 0;
            }else{
                s++;
                Y = h*s;
            };
            if(cnstY+h != cnv.height){
                cnstY+=h;
            };
            X = cnstX;
            // console.log(cnstX + "|" + cnstY + "|" + X + "|" + Y);
        }else{
            X-=w;
            Y+=h;
        };
        if(X+w == cnv.width && Y+h == cnv.height){
            s = -1;
        };
    }else{
        ctx.clearRect(X,Y,w,h);
        if(s == -1){
            c = true;
            s = 0;
            return;
        };
        if(Y == cnstY){
            if(cnstX != 0){
                cnstX-=w;
                Y = cnv.height-h;
            }else{
                s++;
                Y = cnv.height-h-(h*s);
            };
            if(cnstY != 0){
                cnstY-=h;
            };
            X = cnstX;
        }else{
            X+=w;
            Y-=h;
        };
        if(X == 0 && Y == 0){
            s = -1;
        }
    };
};

window.onload = () =>{
    setInterval(drawAnimation,1);   
};