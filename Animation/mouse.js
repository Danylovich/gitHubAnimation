var d = false;

cnv.onmousedown = function(event){
    d = !d;
    if(d){
        m=!m;
        f.X = event.offsetX;
        f.Y = event.offsetY;
        r = true;
        cnv.onmousemove = function(event){
            f.X = event.offsetX;
            f.Y = event.offsetY;
        }
    }else{
        m=!m;
        r = false;
        cnv.onmousemove = null;
    }
}