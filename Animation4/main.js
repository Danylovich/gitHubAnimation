var cnv = document.getElementById('MyCanv');
var ctx = cnv.getContext('2d');
var wB = 100; 
var nB = 5;
var chunks = [
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0]
];
var pos = {
    c:3,
    r:3
};

function drawAnimation(){
    let z = wB/8;
    ctx.beginPath();
    ctx.clearRect(0,0,cnv.width,cnv.height);
    ctx.strokeRect(0,0,cnv.width,cnv.height);
    let cC = pos.c-(nB-1)/2;
    let rC = pos.r-(nB-1)/2;
    chunk(cC,rC);
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'green';
    ctx.lineWidth = wB/50;
    for(let r = rC; r<rC+nB; r++){
        for(let c = cC; c<cC+nB; c++){
            if(chunks[r][c] == 0){
                ctx.strokeRect(c*wB-cC*wB,r*wB-rC*wB,wB,wB);
            }else{
                let t = [0,0,0,0];
                if(chunks[r-1][c] == 0){
                    t[0]++;
                    t[1]++;
                    if(chunks[r][c-1] == 1){
                        ctx.moveTo(c*wB-cC*wB-z,r*wB-rC*wB+z);
                    }else{
                        ctx.moveTo(c*wB-cC*wB+z,r*wB-rC*wB+z);
                    };
                    if(chunks[r][c+1] == 1){
                        ctx.lineTo(c*wB-cC*wB+wB+z,r*wB-rC*wB+z);
                    }else{
                        ctx.lineTo(c*wB-cC*wB+wB-z,r*wB-rC*wB+z);
                    };
                };
                if(chunks[r][c+1] == 0){
                    t[1]++;
                    t[2]++;
                    if(chunks[r-1][c] == 1){
                        ctx.moveTo(c*wB-cC*wB+wB-z,r*wB-rC*wB-z);
                    }else{
                        ctx.moveTo(c*wB-cC*wB+wB-z,r*wB-rC*wB+z);
                    };
                    if(chunks[r+1][c] == 1){
                        ctx.lineTo(c*wB-cC*wB+wB-z,r*wB-rC*wB+wB+z);
                    }else{
                        ctx.lineTo(c*wB-cC*wB+wB-z,r*wB-rC*wB+wB-z);
                    };
                };
                if(chunks[r+1][c] == 0){
                    t[2]++;
                    t[3]++;
                    if(chunks[r][c-1] == 1){
                        ctx.moveTo(c*wB-cC*wB-z,r*wB-rC*wB+wB-z);
                    }else{
                        ctx.moveTo(c*wB-cC*wB+z,r*wB-rC*wB+wB-z);
                    };
                    if(chunks[r][c+1] == 1){
                        ctx.lineTo(c*wB-cC*wB+wB+z,r*wB-rC*wB+wB-z);
                    }else{
                        ctx.lineTo(c*wB-cC*wB+wB-z,r*wB-rC*wB+wB-z);
                    };
                };
                if(chunks[r][c-1] == 0){
                    t[3]++;
                    t[0]++;
                    if(chunks[r-1][c] == 1){
                        ctx.moveTo(c*wB-cC*wB+z,r*wB-rC*wB-z);
                    }else{
                        ctx.moveTo(c*wB-cC*wB+z,r*wB-rC*wB+z);
                    };
                    if(chunks[r+1][c] == 1){
                        ctx.lineTo(c*wB-cC*wB+z,r*wB-rC*wB+wB+z);
                    }else{
                        ctx.lineTo(c*wB-cC*wB+z,r*wB-rC*wB+wB-z);
                    };
                };
                if(t[0] == 2 || t[0] == 0){
                    if(t[0] == 0 && chunks[r-1][c-1] == 1){
                    }else{
                        ctx.moveTo(c*wB-cC*wB,r*wB-rC*wB);
                        ctx.lineTo(c*wB-cC*wB+z,r*wB-rC*wB+z);
                    };
                };
                if(t[1] == 2 || t[1] == 0){
                    if(t[1] == 0 && chunks[r-1][c+1] == 1){
                    }else{
                        ctx.moveTo(c*wB-cC*wB+wB,r*wB-rC*wB);
                        ctx.lineTo(c*wB-cC*wB+wB-z,r*wB-rC*wB+z);
                    };
                };
                if(t[2] == 2 || t[2] == 0){
                    if(t[2] == 0 && chunks[r+1][c+1] == 1){
                    }else{
                        ctx.moveTo(c*wB-cC*wB+wB,r*wB-rC*wB+wB);
                        ctx.lineTo(c*wB-cC*wB+wB-z,r*wB-rC*wB+wB-z);
                    };
                };
                if(t[3] == 2 || t[3] == 0){
                    if(t[3] == 0 && chunks[r+1][c-1] == 1){
                    }else{
                        ctx.moveTo(c*wB-cC*wB,r*wB-rC*wB+wB);
                        ctx.lineTo(c*wB-cC*wB+z,r*wB-rC*wB+wB-z);
                    };
                };
            };
        };
    };
    ctx.stroke();
    plus();
};

function plus(){
    ctx.beginPath();
    ctx.lineWidth = wB/50;
    ctx.lineCap = 'round';
    ctx.moveTo(cnv.width/2-wB/20,cnv.height/2);
    ctx.lineTo(cnv.width/2+wB/20,cnv.height/2);
    ctx.moveTo(cnv.width/2,cnv.height/2-wB/20);
    ctx.lineTo(cnv.width/2,cnv.height/2+wB/20);
    ctx.stroke();
};

function chunk(c,r){
    if(c == 0){
        pos.c++;
        for(let r1 = 0; r1<chunks.length; r1++){
            chunks[r1].unshift(0);
        };
    }else if(c+nB == chunks[0].length-1){
        for(let r1 = 0; r1<chunks.length; r1++){
            chunks[r1].push(0);
        };
    };
    if(r == 0){
        pos.r++;
        chunks.unshift([]);
        for(let i = 0; i<chunks[1].length; i++){
            chunks[0][i] = 0;
        };
    }else if(r+nB == chunks.length-1){
        chunks.push([]);
        for(let i = 0; i<chunks[0].length; i++){
            chunks[chunks.length-1][i] = 0;
        };
    };
};

function keyDown(){
    switch(event.keyCode){
        case 37: pos.c--; break;
        case 65: pos.c--; break;
        case 38: pos.r--; break;
        case 87: pos.r--; break;
        case 39: pos.c++; break;
        case 68: pos.c++; break;
        case 40: pos.r++; break;
        case 83: pos.r++; break;
        case 32: chunks[pos.r][pos.c] = 1; break;
        case 13: chunks[pos.r][pos.c] = 0; break;
    };
};

window.onload = () =>{
    setInterval(drawAnimation,1);
    cnv.width = wB*nB;
    cnv.height = wB*nB;
};