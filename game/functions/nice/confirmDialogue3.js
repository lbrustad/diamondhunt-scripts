'use strict';

function confirmDialogue3(value, lines, range, module, count, starRatingTemplate, isSlidingUp, $cont, $slides)
{
	if (value == "" || value == "none")
	{
		document.getElementById("dialogue-confirm3-img").style.display = "none";
	}
	else
	{
		document.getElementById("dialogue-confirm3-img").src = value;
		document.getElementById("dialogue-confirm3-img").style.display = "";
	}
	document.getElementById("dialogue-confirm3-text").innerHTML = lines;
	document.getElementById("dialogue-confirm3").style.display = "";
	document.getElementById("dialogue-confirm3").style.top = scrollY + 20 + "px";
	document.getElementById("dialogue-confirm3-yes").innerHTML = range;
	document.getElementById("dialogue-confirm3-yes2").innerHTML = module;
	document.getElementById("dialogue-confirm3-yes3").innerHTML = count;
	document.getElementById("dialogue-confirm3-no").innerHTML = starRatingTemplate;
	document.getElementById("dialogue-confirm3-yes").setAttribute("onclick", "sendBytes('" + isSlidingUp + "');closeDialogue('dialogue-confirm3');");
	document.getElementById("dialogue-confirm3-yes2").setAttribute("onclick", "sendBytes('" + $cont + "');closeDialogue('dialogue-confirm3');");
	document.getElementById("dialogue-confirm3-yes3").setAttribute("onclick", "sendBytes('" + $slides + "');closeDialogue('dialogue-confirm3');");
};
