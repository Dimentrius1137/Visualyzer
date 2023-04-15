const vistavit = document.querySelector('.upload');
const download = document.querySelector('.downloader');
const audio1 = document.querySelector('.mp3');
const btnPlay = document.querySelector('.play');

vistavit.addEventListener('click', ShowMusic)
btnPlay.innerText = "▶️";
btnPlay.addEventListener("click", 
function() 
{
	if(!context)
	{
		Preparation();
	}
	if(audio1.paused)
	{
		btnPlay.innerText = "⏸︎";
		audio1.src = showMusic.innerText;
		audio1.play();
		Loop1();
		console.log("вкл")
	}
	else
	{
		btnPlay.innerText = "▶️";
		audio1.src = showMusic.innerText;
		audio1.pause();
		console.log("выкл")
	}

	

});

const showMusic = document.querySelector('.show');

function ShowMusic()
{
	btnPlay.style.display = "inline-block";
	showMusic.innerText = download.value.split(/\\/g).pop();
}

let context, analyser, src, arr;
let logo1 = document.getElementById("logo").style;
function Preparation()
{
	context = new AudioContext();
	analyser = context.createAnalyser();
	
	src = context.createMediaElementSource(audio1);

	src.connect(analyser);
	analyser.connect(context.destination);
	Loop1();
}

function Loop1()
{
	if(!audio1.paused)
	{
	window.requestAnimationFrame(Loop1);
	}
	arr = new Uint8Array(analyser.frequencyBinCount);
	analyser.getByteFrequencyData(arr);
	logo1.minHeight = (arr[40])+"px";
	logo1.width = (arr[40])+"px";

}


























let a = [3, 2, 1];
let b = [];
let c = [];

const butons = document.querySelectorAll('.btn');
let str = "hello world";

String.prototype.Func = function() 
{
	let razdel = this.split(" ");
	let razdelRazdela;
	let UpperRazdel;
	let Perebor = '';
	for(let i = 0; i < razdel.length; i++)
	{
		UpperRazdel = razdel[i][0].toUpperCase();
		Perebor += (UpperRazdel + razdel[i].slice(1)).concat(' ');
		
		
	}
	let probel = " ";
	console.log(Perebor.slice(0, -1));
};


function solution(str1)
{
	let odd = '';
	let even = '';
	for(let i = 0, j = 0; i < str1.length; i++)
	{
		if(i % 2 == 0)
		{
		odd = str1[i]
		//console.log(odd);
		}
		if(i % 2 == 1)
		{
			even = str1[i];
			//console.log(even);
		}			
		
	}	
	console.log(odd + even);
}
str2 = 'abcdef';
solution(str2);
//str.Func();