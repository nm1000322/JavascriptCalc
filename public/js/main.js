
var set = 0;
function calculate(){


    var leg1 = parseInt($('#a').val());
    var leg2 = parseInt($('#b').val());
    var leg1squ = leg1*leg1;
    var leg2squ = leg2*leg2;
    var add = leg2squ + leg1squ;
    var result=Math.sqrt(add);
    return result;
}


function submit(){
    var go = calculate(set);
    $('#output').html("Hypotenuse: " + go);

}
$('#calc').click(submit);




function calculate2_1(){

    var meter = parseInt($('#meters').val());
    var convert = meter/.3048;
    return convert
}
function calculate2_2(){
    var foot = parseInt($('#feet').val());
    var convert2 = foot*.3048;
    console.log(convert2);
    return convert2;
}
function submit2(){
    console.log("Hi")
    var go = calculate2_1(set);
    $('#output2').html("Feet: " + go);
}
function submit3(){
    console.log("bye")
    var go = calculate2_2(set);
    $('#output2').html("Meters: " + go);
}
$('#calc2_1').click(submit2);
$('#calc2_2').click(submit3);


function calculate3() {
    var num1 = 1;
    var num2 = 1;
    var i = 2;
    var fib = 1;
    var point = parseInt($('#fib').val());

    while (i < point) {
        num1 = num2;
        num2 = fib;
        fib = num1 + num2;//0+1, 1+1
        //0=1, 1=1
        //1=1, 1=
        i = i + 1;

    }
    if (point == 1) {
        fib = 1;
    } else if (point == 2) {
        fib = 1;
    }
    return fib




}


function submit4(){
    var go = calculate3(set);
    $('#output3').html("Number in Sequence " + go);

}
$('#calc3').click(submit4);

