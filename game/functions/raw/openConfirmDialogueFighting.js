/**
 * openConfirmDialogueFighting extracted from ../../deobfuscated/bundle.js at line 11373-11510
 *
 * If this file doesn't contain a function, there is an error in ../raw/openConfirmDialogueFighting.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function openConfirmDialogueFighting(_0x4827)
{
	document.getElementById("dialogue-fightingMarkerDialogue-title").innerHTML = getItemName(_0x4827).toUpperCase();
	document.getElementById("dialogue-fightingMarkerDialogue-title-area").src = "images/" + _0x4827 + ".png";
	openDialogueOverride("dialogue-fightingMarkerDialogue", "large");
	document.getElementById("dialogue-fightingMarkerDialogue-areaWarning").style.display = "none";
	if (_0x4827 == "northernFields")
	{
		document.getElementById("dialogue-fightingMarkerDialogue-areaWarning").style.display = "";
		document.getElementById("dialogue-fightingMarkerDialogue-areaWarning").innerHTML = "<img src=\'images/snowmanIcon.png\' class=\'img-30\' /> Be prepared for cold weather.";
		setTimeout(function ()
		{
			document.getElementById("dialogue-fightingMarkerDialogue-areaWarning").style.border = "1px solid red"
		}, 500);
		setTimeout(function ()
		{
			document.getElementById("dialogue-fightingMarkerDialogue-areaWarning").style.border = ""
		}, 1000);
		setTimeout(function ()
		{
			document.getElementById("dialogue-fightingMarkerDialogue-areaWarning").style.border = "1px solid red"
		}, 1500);
		setTimeout(function ()
		{
			document.getElementById("dialogue-fightingMarkerDialogue-areaWarning").style.border = ""
		}, 2000);
		setTimeout(function ()
		{
			document.getElementById("dialogue-fightingMarkerDialogue-areaWarning").style.border = "1px solid red"
		}, 2500);
		setTimeout(function ()
		{
			document.getElementById("dialogue-fightingMarkerDialogue-areaWarning").style.border = ""
		}, 3000);
		setTimeout(function ()
		{
			document.getElementById("dialogue-fightingMarkerDialogue-areaWarning").style.border = "1px solid red"
		}, 3500);
		setTimeout(function ()
		{
			document.getElementById("dialogue-fightingMarkerDialogue-areaWarning").style.border = ""
		}, 4000)
	};
	if (_0x4827 == "ocean")
	{
		document.getElementById("dialogue-fightingMarkerDialogue-areaWarning").style.display = "";
		document.getElementById("dialogue-fightingMarkerDialogue-areaWarning").innerHTML = "<img src=\'images/waveIcon.png\' class=\'img-30\' /> Attack speed reduced while fighting under water.";
		setTimeout(function ()
		{
			document.getElementById("dialogue-fightingMarkerDialogue-areaWarning").style.border = "1px solid red"
		}, 500);
		setTimeout(function ()
		{
			document.getElementById("dialogue-fightingMarkerDialogue-areaWarning").style.border = ""
		}, 1000);
		setTimeout(function ()
		{
			document.getElementById("dialogue-fightingMarkerDialogue-areaWarning").style.border = "1px solid red"
		}, 1500);
		setTimeout(function ()
		{
			document.getElementById("dialogue-fightingMarkerDialogue-areaWarning").style.border = ""
		}, 2000);
		setTimeout(function ()
		{
			document.getElementById("dialogue-fightingMarkerDialogue-areaWarning").style.border = "1px solid red"
		}, 2500);
		setTimeout(function ()
		{
			document.getElementById("dialogue-fightingMarkerDialogue-areaWarning").style.border = ""
		}, 3000);
		setTimeout(function ()
		{
			document.getElementById("dialogue-fightingMarkerDialogue-areaWarning").style.border = "1px solid red"
		}, 3500);
		setTimeout(function ()
		{
			document.getElementById("dialogue-fightingMarkerDialogue-areaWarning").style.border = ""
		}, 4000)
	};
	var _0x64D0 = document.getElementById("dialogue-fightingMarkerDialogue-hints");
	var _0x64B3 = getEncountersImgArrayForAreaareaChosen(_0x4827);
	var _0x6544 = _0x64B3[0];
	var _0x6527 = _0x64B3[1];
	var _0x650A = getMonsterHint(_0x6544);
	var _0x660F = "";
	if (getItemString("repelMonster") == _0x6544)
	{
		_0x660F = "<br /><span style=\'color:red\'>REPELLED</b>"
	};
	var _0x659B = _0x64B3[2];
	var _0x657E = _0x64B3[3];
	var _0x6561 = getMonsterHint(_0x659B);
	var _0x662C = "";
	if (getItemString("repelMonster") == _0x659B)
	{
		_0x662C = "<br /><span style=\'color:red\'>REPELLED</b>"
	};
	var _0x65F2 = _0x64B3[4];
	var _0x65D5 = _0x64B3[5];
	var _0x65B8 = getMonsterHint(_0x65F2);
	var _0x6649 = "";
	if (getItemString("repelMonster") == _0x65F2)
	{
		_0x6649 = "<br /><span style=\'color:red\'>REPELLED</b>"
	};
	var _0x41B2 = "<center><table class=\'basic-table\' width=\'100%\'>";
	_0x41B2 += "<tr style=\'background-color:#4d4d4d\'><th>Enemy</th><th>Info and Tips</th></tr>";
	_0x41B2 += "<tr><td width=\'25%\'><img style=\'float:left;\' src=\'" + _0x6527 + "\' class=\'img-50\' />" + getItemName(_0x6544) + "<br /><span style=\'color:grey;font-size:10pt;\'>(" + getItem(_0x6544 + "Kills") + " kills)</span></td><td style=\'font-size:10pt;\'>" + _0x650A + _0x660F + "</td></tr>";
	_0x41B2 += "<tr style=\'background-color:silver\'><td width=\'25%\'><img style=\'float:left;\' src=\'" + _0x657E + "\' class=\'img-50\' />" + getItemName(_0x659B) + "<br /><span style=\'color:grey;font-size:10pt;\'>(" + getItem(_0x659B + "Kills") + " kills)</span></td><td style=\'font-size:10pt;\'>" + _0x6561 + _0x662C + "</td></tr>";
	_0x41B2 += "<tr><td width=\'25%\'><img style=\'float:left;\' src=\'" + _0x65D5 + "\' class=\'img-50\' />" + getItemName(_0x65F2) + "<br /><span style=\'color:grey;font-size:10pt;\'>(" + getItem(_0x65F2 + "Kills") + " kills)</span></td><td style=\'font-size:10pt;\'>" + _0x65B8 + _0x6649 + "</td></tr>";
	_0x41B2 += "</table></center><br />";
	_0x64D0.innerHTML = _0x41B2;
	document.getElementById("dialogue-fightingMarkerDialogue-areaWarning2").style.display = "none";
	var _0x64ED = "";
	if (getItem("heroHp") < getItem("heroMaxHp"))
	{
		_0x64ED += "<img src=\'images/warning.png\' class=\'img-20\' /> You are not full HP!<br />"
	};
	if (getItem("heroMana") < getItem("heroMaxMana"))
	{
		_0x64ED += "<img src=\'images/warning.png\' class=\'img-20\' /> Your mana is not full!<br />"
	};
	if (getItem("teleportCooldown") > 0)
	{
		_0x64ED += "<img src=\'images/teleportIcon.png\' class=\'img-20\' /> Teleport on cooldown for <b>" + formatTime(getItem("teleportCooldown")) + "</b>.<br />"
	};
	if (getItemString("arrows") == "arrows" && getItemString("weapon") == "bow")
	{
		_0x64ED += "<img src=\'images/warning.png\' class=\'img-20\' /> You don\'t have arrows equipped!<br />"
	};
	if (_0x64ED.length > 0)
	{
		document.getElementById("dialogue-fightingMarkerDialogue-areaWarning2").style.display = "";
		document.getElementById("dialogue-fightingMarkerDialogue-areaWarning2").innerHTML = _0x64ED
	};
	document.getElementById("fightingMarkerDialogue-confirm-yes").setAttribute("onclick", "closeDialogue(\'dialogue-fightingMarkerDialogue\');sendBytes(\'FIGHT=" + _0x4827 + "\')")
}