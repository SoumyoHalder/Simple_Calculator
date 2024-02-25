let str="";
function one(){
    str=str+'1';
    document.querySelector(".text").innerHTML=str;
}
function two(){
    str=str+'2';
    document.querySelector(".text").innerHTML=str;
}
function three(){
    str=str+'3';
    document.querySelector(".text").innerHTML=str;
}
function four(){
    str=str+'4';
    document.querySelector(".text").innerHTML=str;
}
function five(){
    str=str+'5';
    document.querySelector(".text").innerHTML=str;
}
function six(){
    str=str+'6';
    document.querySelector(".text").innerHTML=str;
}
function seven(){
    str=str+'7';
    document.querySelector(".text").innerHTML=str;
}
function eight(){
    str=str+'8';
    document.querySelector(".text").innerHTML=str;
}
function nine(){
    str=str+'9';
    document.querySelector(".text").innerHTML=str;
}
function zero(){
    str=str+'0';
    document.querySelector(".text").innerHTML=str;
}
function dot(){
    str=str+'.';
    document.querySelector(".text").innerHTML=str;
}

function plus(){
    str=str+'+';
    document.querySelector(".text").innerHTML=str;
}
function minus(){
    str=str+'-';
    document.querySelector(".text").innerHTML=str;
}
function mult(){
    str=str+'*';
    document.querySelector(".text").innerHTML=str;
}
function divi(){
    str=str+'/';
    document.querySelector(".text").innerHTML=str;
}
function mod(){
    str=str+'%';
    document.querySelector(".text").innerHTML=str;
}
function equal(){
    try {
        str=eval(str);
    } catch (e) {
        alert(`Invalid Input !!! \n${e.name}`);
    }
    document.querySelector(".text").innerHTML=str;
}
function clean(){
    str="";
    document.querySelector(".text").innerHTML=str;
}
function erase(){
    str=str.slice(0,str.length-1);
    document.querySelector(".text").innerHTML=str;
}

function theme(){
    document.querySelector(".container").classList.toggle("theme_change");

    document.querySelector(".text").classList.toggle(".text_color");

}