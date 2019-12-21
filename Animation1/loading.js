var n = 0;

function loading(){
    this.X = 0;
    this.Y = 0;
    this.w = W/2;
    this.h = H/2;
    this.s = [];
    this.radius = 0;
}

loading.prototype.l1 = function(){
    if(tick%100==0){
        if(this.s[0]<3){
            this.s[0]++;
        }else{
            this.s[0] = 0;
        }
    }
    this.X = 50;
    this.Y = 50;
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = '1';
    ctx.strokeRect(this.w-this.X-1,this.h-this.Y-1,this.X*2+2,this.Y*2+2);
    if(this.s[0] == 0){
        ctx.fillRect(this.w-this.X,this.h-this.Y,this.X,this.Y);
    }else if(this.s[0] == 1){
        ctx.fillRect(this.w,this.h-this.Y,this.X,this.Y);
    }else if(this.s[0] == 2){
        ctx.fillRect(this.w,this.h,this.X,this.Y);
    }else{
        ctx.fillRect(this.w-this.X,this.h,this.X,this.Y);
    }
}

loading.prototype.l2 = function(){
    if(this.s[1]<Math.PI*2){
        this.s[1]+=this.s[0];
    }else{
        this.s[1] = this.s[0];
    }
    if(this.s[2]<Math.PI*2){
        this.s[2]+=this.s[0];
    }else{
        this.s[2] = this.s[0];
    }
    this.radius = 50;
    ctx.beginPath();
    ctx.strokeStyle = 'white';
    ctx.lineWidth = '10';
    ctx.lineCap = 'round';
    ctx.arc(this.w,this.h,this.radius,this.s[1],this.s[2],false);
    ctx.stroke();
}

loading.prototype.l3 = function(){
    this.s[3]++;
    if(this.s[3]<540){
        if(this.s[2]<Math.PI*2){
            this.s[2]+=this.s[0];
        }else{
            this.s[2] = 0+this.s[0];
        }
    }else if(this.s[3]<1080){
        if(this.s[1]<Math.PI*2){
            this.s[1]+=this.s[0];
        }else{
            this.s[1] = 0+this.s[0];
        }
    }
    if(this.s[3]<1080){
        this.s[3]++;
    }else{
        this.s[3] = 0;
    }
    this.radius = 50;
    ctx.beginPath();
    ctx.strokeStyle = 'white';
    ctx.lineWidth = '10';
    ctx.lineCap = 'round';
    ctx.arc(this.w,this.h,this.radius,this.s[1],this.s[2],false);
    ctx.stroke();
}

loading.prototype.l4 = function(){
    if(this.s[0][2]<Math.PI*2){
        this.s[0][2] += this.s[0][0];
    }else{
        this.s[0][2] += 0+this.s[0][0];
    }
    if(this.s[0][1]<Math.PI*2){
        this.s[0][1] += this.s[0][0];
    }else{
        this.s[0][1] += 0+this.s[0][0];
    }
    if(this.s[1][2]<Math.PI*2){
        this.s[1][2] += this.s[1][0];
    }else{
        this.s[1][2] += 0+this.s[1][0];
    }
    if(this.s[1][1]<Math.PI*2){
        this.s[1][1] += this.s[1][0];
    }else{
        this.s[1][1] += 0+this.s[1][0];
    }
    this.radius = 50;
    ctx.beginPath();
    ctx.strokeStyle = 'white';
    ctx.lineCap = 'round';
    ctx.lineWidth = '2';
    ctx.arc(this.w,this.h,this.radius,Math.PI*2,false);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(this.w,this.h,this.radius/100*75,this.s[0][1],this.s[0][2],false);
    ctx.lineTo(W/2,H/2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(this.w,this.h,this.radius/100*50,this.s[1][1],this.s[1][2],false);
    ctx.lineTo(W/2,H/2);
    ctx.stroke();
}

loading.prototype.l5 = function(){
    if(tick%5==0){
        if(this.X == 50){
            this.s[0] = !this.s[0];
            // console.log('a');
        }else if(this.X == 10){
            this.s[0] = !this.s[0];
            // console.log('b');
        }
        if(this.s[0]){
            this.X++;
            // console.log(this.s[0]);
            // console.log(this.X);
            this.Y+=this.s[1];
        }else{
            this.X--;
            this.Y-=this.s[1];
        }
    }
    ctx.beginPath();
    ctx.strokeStyle = 'white';
    ctx.lineWidth = '2';
    ctx.moveTo(this.w,this.h);
    ctx.quadraticCurveTo(this.w-this.X/2,this.h-this.Y/2,this.w-this.X,this.h-this.Y);
    ctx.moveTo(this.w,this.h);
    ctx.quadraticCurveTo(this.w+this.X/2,this.h-this.Y/2,this.w+this.X,this.h-this.Y);
    ctx.moveTo(this.w-this.X,this.h-this.Y);
    ctx.lineTo(this.w-this.X,this.h+this.Y);
    ctx.moveTo(this.w,this.h);
    ctx.quadraticCurveTo(this.w-this.X/2,this.h+this.Y/2,this.w-this.X,this.h+this.Y);
    ctx.moveTo(this.w,this.h);
    ctx.quadraticCurveTo(this.w+this.X/2,this.h+this.Y/2,this.w+this.X,this.h+this.Y);
    ctx.moveTo(this.w+this.X,this.h-this.Y);
    ctx.lineTo(this.w+this.X,this.h+this.Y);
    ctx.stroke();
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.moveTo(this.w,this.h);
    ctx.quadraticCurveTo(this.w-this.Y/2,this.h-this.X/2,this.w-this.Y,this.h-this.X);
    ctx.moveTo(this.w,this.h);
    ctx.quadraticCurveTo(this.w+this.Y/2,this.h-this.X/2,this.w+this.Y,this.h-this.X);
    ctx.moveTo(this.w-this.Y,this.h-this.X);
    ctx.lineTo(this.w+this.Y,this.h-this.X);
    ctx.moveTo(this.w,this.h);
    ctx.quadraticCurveTo(this.w-this.Y/2,this.h+this.X/2,this.w-this.Y,this.h+this.X);
    ctx.moveTo(this.w,this.h);
    ctx.quadraticCurveTo(this.w+this.Y/2,this.h+this.X/2,this.w+this.Y,this.h+this.X);
    ctx.moveTo(this.w-this.Y,this.h+this.X);
    ctx.lineTo(this.w+this.Y,this.h+this.X);
    ctx.stroke();
}