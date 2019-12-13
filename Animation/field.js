var r = true;

function field(){
    this.X = 0;
    this.Y = 0;
    this.rgbNumber = [];
    this.randomRGB = 0;
    this.radius = 1;
}

field.prototype.randomEffect = function(){
    this.rgbNumber = [Math.floor(Math.random()*256),Math.floor(Math.random()*256),Math.floor(Math.random()*256)];
    this.randomRGB = Math.floor(Math.random()*3);
    if(!m){
        this.radius = 1;
        this.X = Math.floor(Math.random()*cnv.width);
        this.Y = Math.floor(Math.random()*cnv.height);
        r = false;
    }else{
        this.radius = 10;
    }
}

field.prototype.Effect = function(){
    if(this.rgbNumber[this.randomRGB] != 255){
        this.rgbNumber[this.randomRGB]++;
        this.radius++;
    }else{
        r = true;
    }
}


field.prototype.drawEffect = function(){
    ctx.beginPath();
    ctx.strokeStyle = 'rgba('+this.rgbNumber[0]+','+this.rgbNumber[1]+','+this.rgbNumber[2]+',1'+')';
    ctx.fillStyle = 'rgba('+this.rgbNumber[0]+','+this.rgbNumber[1]+','+this.rgbNumber[2]+',1'+')';
    ctx.arc(this.X,this.Y,this.radius,Math.PI*2,false);
    if(!m){
        ctx.stroke();
    }else{
        ctx.fill();
    }
}