/**
 * openConfirmDialogueFighting extracted from ../../deobfuscated/bundle.js at line 13754-13891
 *
 * If this file doesn't contain a function, there is an error in ../raw/openConfirmDialogueFighting.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function openConfirmDialogueFighting(_0x1636D)
{
	document.getElementById("dialogue-fightingMarkerDialogue-title").innerHTML = getItemName(_0x1636D).toUpperCase();
	document.getElementById("dialogue-fightingMarkerDialogue-title-area").src = "images/" + _0x1636D + ".png";
	openDialogueOverride("dialogue-fightingMarkerDialogue", "large");
	document.getElementById("dialogue-fightingMarkerDialogue-areaWarning").style.display = "none";
	if (_0x1636D == "northernFields")
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
	if (_0x1636D == "ocean")
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
	var _0x187CB = document.getElementById("dialogue-fightingMarkerDialogue-hints");
	var _0x187A8 = getEncountersImgArrayForAreaareaChosen(_0x1636D);
	var _0x18857 = _0x187A8[0];
	var _0x18834 = _0x187A8[1];
	var _0x18811 = getMonsterHint(_0x18857);
	var _0x1894C = "";
	if (getItemString("repelMonster") == _0x18857)
	{
		_0x1894C = "<br /><span style=\'color:red\'>REPELLED</b>"
	};
	var _0x188C0 = _0x187A8[2];
	var _0x1889D = _0x187A8[3];
	var _0x1887A = getMonsterHint(_0x188C0);
	var _0x1896F = "";
	if (getItemString("repelMonster") == _0x188C0)
	{
		_0x1896F = "<br /><span style=\'color:red\'>REPELLED</b>"
	};
	var _0x18929 = _0x187A8[4];
	var _0x18906 = _0x187A8[5];
	var _0x188E3 = getMonsterHint(_0x18929);
	var _0x18992 = "";
	if (getItemString("repelMonster") == _0x18929)
	{
		_0x18992 = "<br /><span style=\'color:red\'>REPELLED</b>"
	};
	var _0x15A44 = "<center><table class=\'basic-table\' width=\'100%\'>";
	_0x15A44 += "<tr style=\'background-color:#4d4d4d\'><th>Enemy</th><th>Info and Tips</th></tr>";
	_0x15A44 += "<tr><td width=\'25%\'><img style=\'float:left;\' src=\'" + _0x18834 + "\' class=\'img-50\' />" + getItemName(_0x18857) + "<br /><span style=\'color:grey;font-size:10pt;\'>(" + getItem(_0x18857 + "Kills") + " kills)</span></td><td style=\'font-size:10pt;\'>" + _0x18811 + _0x1894C + "</td></tr>";
	_0x15A44 += "<tr style=\'background-color:silver\'><td width=\'25%\'><img style=\'float:left;\' src=\'" + _0x1889D + "\' class=\'img-50\' />" + getItemName(_0x188C0) + "<br /><span style=\'color:grey;font-size:10pt;\'>(" + getItem(_0x188C0 + "Kills") + " kills)</span></td><td style=\'font-size:10pt;\'>" + _0x1887A + _0x1896F + "</td></tr>";
	_0x15A44 += "<tr><td width=\'25%\'><img style=\'float:left;\' src=\'" + _0x18906 + "\' class=\'img-50\' />" + getItemName(_0x18929) + "<br /><span style=\'color:grey;font-size:10pt;\'>(" + getItem(_0x18929 + "Kills") + " kills)</span></td><td style=\'font-size:10pt;\'>" + _0x188E3 + _0x18992 + "</td></tr>";
	_0x15A44 += "</table></center><br />";
	_0x187CB.innerHTML = _0x15A44;
	document.getElementById("dialogue-fightingMarkerDialogue-areaWarning2").style.display = "none";
	var _0x187EE = "";
	if (getItem("heroHp") < getItem("heroMaxHp"))
	{
		_0x187EE += "<img src=\'images/warning.png\' class=\'img-20\' /> You are not full HP!<br />"
	};
	if (getItem("heroMana") < getItem("heroMaxMana"))
	{
		_0x187EE += "<img src=\'images/warning.png\' class=\'img-20\' /> Your mana is not full!<br />"
	};
	if (getItem("teleportCooldown") > 0)
	{
		_0x187EE += "<img src=\'images/teleportIcon.png\' class=\'img-20\' /> Teleport on cooldown for <b>" + formatTime(getItem("teleportCooldown")) + "</b>.<br />"
	};
	if (getItemString("arrows") == "arrows" && getItemString("weapon") == "bow")
	{
		_0x187EE += "<img src=\'images/warning.png\' class=\'img-20\' /> You don\'t have arrows equipped!<br />"
	};
	if (_0x187EE.length > 0)
	{
		document.getElementById("dialogue-fightingMarkerDialogue-areaWarning2").style.display = "";
		document.getElementById("dialogue-fightingMarkerDialogue-areaWarning2").innerHTML = _0x187EE
	};
	document.getElementById("fightingMarkerDialogue-confirm-yes").setAttribute("onclick", "closeDialogue(\'dialogue-fightingMarkerDialogue\');sendBytes(\'FIGHT=" + _0x1636D + "\')")
}