//your JS code here. If required.

const save = document.getElementById("save");
const fontSize = document.getElementById("fontsize");
const fontcolor = document.getElementById("fontcolor");

function getCookies(name){
	const cookies = document.cookie.split(";");
	for(let cookie of cookies){
	    const [key, value] = cookie.trim().split("=");
		if(key === name){
			return decodeURIComponent(value);
		}
	}


	return null;
}

const savedfontsize = getCookies("Fontsize");
const savedcolor = getCookies("Fontcolor");

if(savedfontsize){
	fontSize = savedfontsize;
	document.doccumentElement.style.setProperty(
		"--fontsize",
		savedfontsize + "px";
	)
}

if(savedcolor){
	fontcolor = savedcolor;
	document.documentElement.style.setProperty(
		"--fontcolor",
		savedcolor 
		
	)
}

save.addEventListener('click',(e) =>{
	e.preventDefault();

	document.cookie = `Fontsize=${fontSize.value}`
	document.cookie = `Fontcolor=${fontcolor.value}`
	
	document.documentElement.style.setProperty(
		"--fontcolor",
		fontSize.value;
		
	)

	document.documentElement.style.setProperty(
		"--fontcolor",
		fontcolor.value;
		
	)
})