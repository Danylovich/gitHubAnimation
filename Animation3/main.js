var cnv = document.getElementById('canvas');
var ctx = cnv.getContext('2d');
var b = [];

var f = new field(b);

f.RC();
f.WidthHeight();
f.drawField();

function draw(){
    f.Block();
    f.drawBlock();
}