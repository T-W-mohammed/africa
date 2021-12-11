// header 

let overlay = document.createElement("div");

$('.nav .container .btn').click(function(){

	$(".links").css("left","0");

	let overlay = document.createElement("div");

	overlay.className = "overlay";

	document.body.appendChild(overlay);
});
$('.links .close i').click(function(){

	$(".links").css("left","-220px");

	$(".overlay").remove();

});
// header


// Create links According To The Number OF Sections

let Parent = document.querySelector(" body ");

let sections = Array.from(Parent.children);

let secNumber = sections.length;

let link = sections[0].getAttribute("class");

const links =document.querySelector(".links");


for (let i = 1 ;i < secNumber - 4 ; i++){
	
	let li = document.createElement("li");

	let a = document.createElement("a");

	a.innerHTML = sections[i].getAttribute("class");

	a.setAttribute("href","#"+sections[i].getAttribute("class"));

	sections[i].setAttribute("id", sections[i].getAttribute("class"));

	

	li.appendChild(a);

	links.appendChild(li);

		
}

let ancherTage  = document.querySelectorAll(".links li a ");
ancherTage.forEach( a =>{

	a.onclick = ()=>{

		$(".links").css("left","-220px");

		$(".overlay").remove();
	}
})


