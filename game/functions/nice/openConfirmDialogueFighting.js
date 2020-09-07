'use strict';

function openConfirmDialogueFighting(i)
{
	document.getElementById("dialogue-fightingMarkerDialogue-title").innerHTML = getItemName(i).toUpperCase();
	document.getElementById("dialogue-fightingMarkerDialogue-title-area").src = "images/" + i + ".png";
	openDialogueOverride("dialogue-fightingMarkerDialogue", "large");
	document.getElementById("dialogue-fightingMarkerDialogue-areaWarning").style.display = "none";
	if (i == "northernFields")
	{
		document.getElementById("dialogue-fightingMarkerDialogue-areaWarning").style.display = "";
		document.getElementById("dialogue-fightingMarkerDialogue-areaWarning").innerHTML = "<img src='images/snowmanIcon.png' class='img-30' /> Be prepared for cold weather.";
		setTimeout(function ()
		{
			document.getElementById("dialogue-fightingMarkerDialogue-areaWarning").style.border = "1px solid red";
		}, 500);
		setTimeout(function ()
		{
			document.getElementById("dialogue-fightingMarkerDialogue-areaWarning").style.border = "";
		}, 1000);
		setTimeout(function ()
		{
			document.getElementById("dialogue-fightingMarkerDialogue-areaWarning").style.border = "1px solid red";
		}, 1500);
		setTimeout(function ()
		{
			document.getElementById("dialogue-fightingMarkerDialogue-areaWarning").style.border = "";
		}, 2000);
		setTimeout(function ()
		{
			document.getElementById("dialogue-fightingMarkerDialogue-areaWarning").style.border = "1px solid red";
		}, 2500);
		setTimeout(function ()
		{
			document.getElementById("dialogue-fightingMarkerDialogue-areaWarning").style.border = "";
		}, 3000);
		setTimeout(function ()
		{
			document.getElementById("dialogue-fightingMarkerDialogue-areaWarning").style.border = "1px solid red";
		}, 3500);
		setTimeout(function ()
		{
			document.getElementById("dialogue-fightingMarkerDialogue-areaWarning").style.border = "";
		}, 4000);
	}
	if (i == "ocean")
	{
		document.getElementById("dialogue-fightingMarkerDialogue-areaWarning").style.display = "";
		document.getElementById("dialogue-fightingMarkerDialogue-areaWarning").innerHTML = "<img src='images/waveIcon.png' class='img-30' /> Attack speed reduced while fighting under water.";
		setTimeout(function ()
		{
			document.getElementById("dialogue-fightingMarkerDialogue-areaWarning").style.border = "1px solid red";
		}, 500);
		setTimeout(function ()
		{
			document.getElementById("dialogue-fightingMarkerDialogue-areaWarning").style.border = "";
		}, 1000);
		setTimeout(function ()
		{
			document.getElementById("dialogue-fightingMarkerDialogue-areaWarning").style.border = "1px solid red";
		}, 1500);
		setTimeout(function ()
		{
			document.getElementById("dialogue-fightingMarkerDialogue-areaWarning").style.border = "";
		}, 2000);
		setTimeout(function ()
		{
			document.getElementById("dialogue-fightingMarkerDialogue-areaWarning").style.border = "1px solid red";
		}, 2500);
		setTimeout(function ()
		{
			document.getElementById("dialogue-fightingMarkerDialogue-areaWarning").style.border = "";
		}, 3000);
		setTimeout(function ()
		{
			document.getElementById("dialogue-fightingMarkerDialogue-areaWarning").style.border = "1px solid red";
		}, 3500);
		setTimeout(function ()
		{
			document.getElementById("dialogue-fightingMarkerDialogue-areaWarning").style.border = "";
		}, 4000);
	}
	var template = document.getElementById("dialogue-fightingMarkerDialogue-hints");
	var args = getEncountersImgArrayForAreaareaChosen(i);
	var step = args[0];
	var operator2 = args[1];
	var indexjsonSavenodeId = getMonsterHint(step);
	var pid = "";
	if (getItemString("repelMonster") == step)
	{
		pid = "<br /><span style='color:red'>REPELLED</b>";
	}
	var fullPath = args[2];
	var fseq = args[3];
	var t = getMonsterHint(fullPath);
	var fileName = "";
	if (getItemString("repelMonster") == fullPath)
	{
		fileName = "<br /><span style='color:red'>REPELLED</b>";
	}
	var termattr = args[4];
	var actionArg1 = args[5];
	var varWithEqual = getMonsterHint(termattr);
	var varVal = "";
	if (getItemString("repelMonster") == termattr)
	{
		varVal = "<br /><span style='color:red'>REPELLED</b>";
	}
	var templateHTML = "<center><table class='basic-table' width='100%'>";
	templateHTML = templateHTML + "<tr style='background-color:#4d4d4d'><th>Enemy</th><th>Info and Tips</th></tr>";
	templateHTML = templateHTML + ("<tr><td width='25%'><img style='float:left;' src='" + operator2 + "' class='img-50' />" + getItemName(step) + "<br /><span style='color:grey;font-size:10pt;'>(" + getItem(step + "Kills") + " kills)</span></td><td style='font-size:10pt;'>" + indexjsonSavenodeId + pid + "</td></tr>");
	templateHTML = templateHTML + ("<tr style='background-color:silver'><td width='25%'><img style='float:left;' src='" + fseq + "' class='img-50' />" + getItemName(fullPath) + "<br /><span style='color:grey;font-size:10pt;'>(" + getItem(fullPath + "Kills") + " kills)</span></td><td style='font-size:10pt;'>" + t + fileName + "</td></tr>");
	templateHTML = templateHTML + ("<tr><td width='25%'><img style='float:left;' src='" + actionArg1 + "' class='img-50' />" + getItemName(termattr) + "<br /><span style='color:grey;font-size:10pt;'>(" + getItem(termattr + "Kills") + " kills)</span></td><td style='font-size:10pt;'>" + varWithEqual + varVal + "</td></tr>");
	templateHTML = templateHTML + "</table></center><br />";
	template.innerHTML = templateHTML;
	document.getElementById("dialogue-fightingMarkerDialogue-areaWarning2").style.display = "none";
	var fsHTML = "";
	if (getItem("heroHp") < getItem("heroMaxHp"))
	{
		fsHTML = fsHTML + "<img src='images/warning.png' class='img-20' /> You are not full HP!<br />";
	}
	if (getItem("heroMana") < getItem("heroMaxMana"))
	{
		fsHTML = fsHTML + "<img src='images/warning.png' class='img-20' /> Your mana is not full!<br />";
	}
	if (getItem("teleportCooldown") > 0)
	{
		fsHTML = fsHTML + ("<img src='images/teleportIcon.png' class='img-20' /> Teleport on cooldown for <b>" + formatTime(getItem("teleportCooldown")) + "</b>.<br />");
	}
	if (getItemString("arrows") == "arrows" && getItemString("weapon") == "bow")
	{
		fsHTML = fsHTML + "<img src='images/warning.png' class='img-20' /> You don't have arrows equipped!<br />";
	}
	if (fsHTML.length > 0)
	{
		document.getElementById("dialogue-fightingMarkerDialogue-areaWarning2").style.display = "";
		document.getElementById("dialogue-fightingMarkerDialogue-areaWarning2").innerHTML = fsHTML;
	}
	document.getElementById("fightingMarkerDialogue-confirm-yes").setAttribute("onclick", "closeDialogue('dialogue-fightingMarkerDialogue');sendBytes('FIGHT=" + i + "')");
};
