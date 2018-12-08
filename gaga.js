
let start = new Date().getTime();
function getColor(){
    let letters= "0123456789ABCDEF".split('');
    let colors= "#";
    for(i=0;i<6;i++){
        colors+= letters[Math.floor(Math.random()*16)];
    }
    return colors;
}
function makeShapeAppear(){
    let top= Math.random()*300;
    let left= Math.random()*300;
    let width= (Math.random()*300) +50;
    if(Math.random()>0.5){
        document.getElementById("cercle").style.borderRadius= "50%";
    }else{
        document.getElementById("cercle").style.borderRadius= "0%";
    }
    document.getElementById("cercle").style.top= top + "px";
    document.getElementById("cercle").style.left= left + "px";
    document.getElementById("cercle").style.width= width + "px";
    document.getElementById("cercle").style.height= width+ "px";
    document.getElementById("cercle").style.display="block";
    document.getElementById("cercle").style.backgroundColor= getColor();
    start = new Date().getTime();
};


function appearAfterDelay(){
    setTimeout(makeShapeAppear,Math.random()*1000);

}

appearAfterDelay();
let counter=0;
document.getElementById("cercle").onclick=function(){
let end= new Date().getTime();
let time= (end-start)/1000;
function result(){
    if(time<1.0){
        counter+=1;
        return counter;
    }else{
        counter+=0
        return counter ;
    }
}
document.getElementById("timetaken").innerHTML= time + "s";
document.getElementById("text").innerHTML= "your score under 1 second is" + result();
appearAfterDelay();

}



