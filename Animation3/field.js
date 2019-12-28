function field(b){
    this.size = 20;
    this.R = 0;
    this.C = 0;
    this.block = b;
}

field.prototype.RC = function(){
    this.R = Math.floor(cnv.height/this.size);
    this.C = Math.floor(cnv.width/this.size);
}

field.prototype.WidthHeight = function(){
    cnv.width = this.R*this.size;
    cnv.height = this.C*this.size;
}

field.prototype.Block = function(){
    for(let i = 0; i<this.block.length; i++){
        if(!this.block[i][2]){
            this.block[i][0] = Math.floor(this.block[i][0]/this.size);
            this.block[i][1] = Math.floor(this.block[i][1]/this.size);
            this.block[i][2] = true;
        }
    }
}

field.prototype.drawBlock = function(x,y){
    for(let i = 0; i<this.block.length; i++){
        ctx.beginPath();
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.block[i][0]*this.size,this.block[i][1]*this.size,this.size,this.size);
    }
}



field.prototype.drawField = function(){
    for(let r = 0; r<this.R; r++){
        for(let c = 0; c<this.C; c++){
            var cx = this.size * c;
            var cy = this.size * r;
            ctx.beginPath();
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 1;
            ctx.strokeRect(cx,cy,this.size,this.size);
            ctx.stroke();
        }
    }
}