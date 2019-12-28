cnv.onmousemove = function (e){
    var x = e.offsetX;
    var y = e.offsetY;
    var dx = e.movementX;
    var dy = e.movementY;
    
    if(e.buttons > 0){
        b.push([x-dx,y-dy,false]);
        if(dx>0 || dy>0){
            let ex = dx/100;
            let ey = dy/100;
            for(let i = 0; i<=100; i++){
                b.push([x-ex*i,y-ey*i,false]);
            }
        }
        ctx.beginPath();
        ctx.strokeStyle = 'blue';
        ctx.lineCap = 'round';
        ctx.lineWidth = 8;
        ctx.moveTo(x, y);
        ctx.lineTo(x - dx, y - dy);
        ctx.stroke();
    }
}
