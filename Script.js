"use strict"
let el1= document.getElementsByClassName('view');
let el3= document.getElementsByClassName('acord_paragraf');
let el2= document.getElementsByClassName('word');
let el4= document.getElementsByClassName('butt');
let flag=true;
let flag2;


function onScreen(joke){
	let pos=joke;
	if(flag){
	el2[pos].innerHTML= +(el2[pos].innerHTML) + 1;
	flag=false;
	}
	else{
	 el2[pos].innerHTML= +(el2[pos].innerHTML) - 1;
	 flag=true;	
	}

	
}
function acordion(num){
	let numb=num;
	
	el3[numb].style.display="block";
	el4[numb].style.transform = "rotate(45deg)";
	for(let i=0;i<3;i++){
		if(i==numb) continue;

        el3[i].style.display="none";
        el4[i].style.transform = "rotate(-135deg)";
	}
	

	
}