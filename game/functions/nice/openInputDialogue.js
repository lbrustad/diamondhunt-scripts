'use strict';

function openInputDialogue(start_r, end_r, step, diff, config, $timeout, ajaxUtils, userService, $state, post, match)
{
	var th_field = "";
	if (match != "")
	{
		th_field = "<span style='color:grey;cursor:pointer;' onclick='this.innerHTML = \"<br /><br />" + match + "<br /><br />\"'>(more info)</span>";
	}
	var fsHTML = "";
	fsHTML = fsHTML + "<div class='dialogue' id='wild-dialogue' style='display:none;'>";
	fsHTML = fsHTML + "<center>";
	fsHTML = fsHTML + ("<h1>" + start_r + "</h1>");
	fsHTML = fsHTML + ("<div>" + "<img src='" + end_r + "' class='img-150' />" + "</div>");
	fsHTML = fsHTML + "<br /><br />";
	fsHTML = fsHTML + "<div style='display:block' class='input-multi-values-div'>";
	fsHTML = fsHTML + "<table width='100%'>";
	fsHTML = fsHTML + "<tr>";
	if (step == "ironBucket")
	{
		fsHTML = fsHTML + ("<td colspan='4'>How many " + getItemName("silverBuckets").toLowerCase() + "? " + th_field + "<input type='text' value='" + diff + "' id='dialogue-wild-input' /></td>");
	}
	else
	{
		fsHTML = fsHTML + ("<td colspan='4'>How many " + getItemName(step).toLowerCase() + "? " + th_field + "<input type='text' value='" + diff + "' id='dialogue-wild-input' /></td>");
	}
	fsHTML = fsHTML + "</tr>";
	fsHTML = fsHTML + "<tr>";
	fsHTML = fsHTML + "<td width='25%'><div id='dialogue-wild-input-button-1' class='input-button-values'>ONE</div></td><td width='25%'><div id='dialogue-wild-input-button-2' class='input-button-values'>25%</div></td><td width='25%'><div id='dialogue-wild-input-button-3' class='input-button-values'>50%</div></td><td width='25%'><div id='dialogue-wild-input-button-4' class='input-button-values'>ALL</div></td>";
	fsHTML = fsHTML + "</tr>";
	fsHTML = fsHTML + "</table>";
	fsHTML = fsHTML + "</div>";
	fsHTML = fsHTML + "<br />";
	fsHTML = fsHTML + "<div id='dialogue-wild-htmlboxes-area'></div>";
	fsHTML = fsHTML + "<br />";
	fsHTML = fsHTML + ("<div style='background-color:#b3ffff' id='dialogue-wild-input-confirm' class='dialogue-button'>" + $state + "</div><br />");
	fsHTML = fsHTML + "<div onclick='closeDialogue(\"wild-dialogue\")' class='dialogue-button'>Close</div><br />";
	fsHTML = fsHTML + "</center>";
	fsHTML = fsHTML + "</div>";
	document.getElementById("dynamic-dialogue-area").innerHTML = fsHTML;
	if (config.length > 0)
	{
		var _a_ = config[0] == "xp_icon";
	}
	document.getElementById("dialogue-wild-input-confirm").onclick = function ()
	{
		sendBytes(post + "=" + step + "~" + convertNumberWithLetrtsKMBToNumber(document.getElementById("dialogue-wild-input").value));
		closeDialogue("wild-dialogue");
	};
	document.getElementById("dialogue-wild-input-button-1").onclick = function ()
	{
		changeValueOfInput(ajaxUtils, userService, "dialogue-wild-input", "ONE");
		onKeyUpWildInputDialogue(config, $timeout, ajaxUtils, userService, convertNumberWithLetrtsKMBToNumber(document.getElementById("dialogue-wild-input").value));
	};
	document.getElementById("dialogue-wild-input-button-2").onclick = function ()
	{
		changeValueOfInput(ajaxUtils, userService, "dialogue-wild-input", "25%");
		onKeyUpWildInputDialogue(config, $timeout, ajaxUtils, userService, convertNumberWithLetrtsKMBToNumber(document.getElementById("dialogue-wild-input").value));
	};
	document.getElementById("dialogue-wild-input-button-3").onclick = function ()
	{
		changeValueOfInput(ajaxUtils, userService, "dialogue-wild-input", "50%");
		onKeyUpWildInputDialogue(config, $timeout, ajaxUtils, userService, convertNumberWithLetrtsKMBToNumber(document.getElementById("dialogue-wild-input").value));
	};
	document.getElementById("dialogue-wild-input-button-4").onclick = function ()
	{
		changeValueOfInput(ajaxUtils, userService, "dialogue-wild-input", "ALL");
		onKeyUpWildInputDialogue(config, $timeout, ajaxUtils, userService, convertNumberWithLetrtsKMBToNumber(document.getElementById("dialogue-wild-input").value));
	};
	document.getElementById("dialogue-wild-input").onkeyup = function ()
	{
		onKeyUpWildInputDialogue(config, $timeout, ajaxUtils, userService, convertNumberWithLetrtsKMBToNumber(document.getElementById("dialogue-wild-input").value));
	};
	openDialogue("wild-dialogue");
	onKeyUpWildInputDialogue(config, $timeout, ajaxUtils, userService, 1);
};
