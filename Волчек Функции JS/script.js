function areaRectangle(){
    var firstInput=Number(document.form1.t1.value);
    var secondInput=Number(document.form1.t2.value);
    var thriadInput=Number(document.form1.t3.value);
    var result=Number(((firstInput*16.38+secondInput*0.45+thriadInput)/3));
    form1.res.value=result;
}

function rangeTrapec(){
    var firstInput=Number(document.form2.x1.value);
    var secondInput=Number(document.form2.y1.value);
    var thriadInput=Number(document.form2.h1.value);
    var otvet=Number(((firstInput+secondInput)/(2*thriadInput)));
    document.form2.square_number.value=otvet;
}
function digitDelete(){
    var firstInput=Number(document.form3.digit.value);
    var otvet=Number(firstInput%100);
    form3.socr_digit.value=otvet;
}

function depthCounter(){
    var firstInput=Number(document.form4.timepad.value);
    var otvet=Number(firstInput*9.8);
    form4.depth.value=otvet;
}