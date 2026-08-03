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

const savedfontsize = getCookies("fontsize");
const savedcolor = getCookies("fontcolor");

if(savedfontsize){
	fontSize.value = savedfontsize;
	document.documentElement.style.setProperty(
		"--fontsize",
		savedfontsize + "px"
	)
}

if(savedcolor){
	fontcolor.value = savedcolor;
	document.documentElement.style.setProperty(
		"--fontcolor",
		savedcolor 
		
	)
}

save.addEventListener('click',(e) =>{
	e.preventDefault();

	document.cookie = `fontsize=${fontSize.value}`
	document.cookie = `fontcolor=${fontcolor.value}`
	
	document.documentElement.style.setProperty(
		"--fontsize",
		fontSize.value + "px"
		
	)

	document.documentElement.style.setProperty(
		"--fontcolor",
		fontcolor.value
		
	)
})