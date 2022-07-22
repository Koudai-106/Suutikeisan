//カウンタの初期値を設定
var countUpValue1 = 0;
var countUpValue2 = 1;

function t1() {
    var element = document.querySelector( '#myCanvas1' );
    var context = element.getContext( '2d' );
    context.beginPath();
    if(countUpValue1 % 2 == 0){
        //a
        context.moveTo( 130, 290 );
        context.lineTo( 130, 310 );
        context.font = "25px Arial";
        context.fillText("a",120, 285);
        //b
        context.moveTo( 370, 290 );
        context.lineTo( 370, 310 );
        context.font = "25px Arial";
        context.fillText("b",365, 330);
        //c
        context.moveTo( 250, 150 );
        context.lineTo( 250, 350 );
        context.font = "25px Arial";
        context.fillText("c",245, 370);
        context.font = "25px Arial";
        context.fillText("f(c)",210, 250);

        context.strokeStyle = "black";
        context.lineWidth = 5;
        context.stroke();
        countUpValue1++;
    } else {
        //a
        context.font = "25px Arial";
        context.fillText("f(a)",120, 360);
        //b
        context.font = "25px Arial";
        context.fillText("f(b)",365, 220);

        context.lineWidth = 5;
        context.stroke();
        countUpValue1++;
    }
}

function h1() {
    var element = document.querySelector( '#myCanvas1' );
    var context = element.getContext( '2d' );
    context.beginPath();
    context.strokeStyle = "red";
    //計算範囲
    context.rect( 140, 285, 220, 30);

    context.lineWidth = 5;
    context.stroke();
}

function t2() {
    var element = document.querySelector( '#myCanvas2' );
    var context = element.getContext( '2d' );
    if(countUpValue2 % 4 == 1){
        //a
        context.moveTo( 300, 20 );
        context.lineTo( 300, 310 );
        context.font = "25px Arial";
        context.fillText("a",295, 330);
        context.lineWidth = 5;
        context.stroke();
        countUpValue2++;
    } else if(countUpValue2 % 4 == 2){
        //直線１
        context.moveTo( 210, 350 );
        context.lineTo( 323, 10 );
        context.lineWidth = 5;
        context.stroke();
        countUpValue2++;
    } else if(countUpValue2 % 4 == 3){
        //b
        context.moveTo( 226, 150 );
        context.lineTo( 226, 330 );
        context.font = "25px Arial";
        context.fillText("b",222, 360);
        context.lineWidth = 5;
        context.stroke();
        countUpValue2++;
    } else {
        //直線２
        context.moveTo( 170, 350 );
        context.lineTo( 337, 60 );
        context.lineWidth = 5;
        context.stroke();
        countUpValue2++;
    }
}