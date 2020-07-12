/**
 * openQuestDialogue extracted from ../../deobfuscated/bundle.js at line 4700-4778
 *
 * If this file doesn't contain a function, there is an error in ../raw/openQuestDialogue.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function openQuestDialogue(_0x1DC7A, _0x1C972, _0x1DC88, _0x1D072, _0x1DBFC, _0x1DC0A, _0x1DC18, _0x1DC26, _0x1DC42, _0x1DC50, _0x1DC5E, _0x1DC6C)
{
	document.getElementById("dialogue-quest-title").innerHTML = _0x1DC88;
	document.getElementById("dialogue-quest-text").innerHTML = "<table><tr><td class=\'dialogue-quest-text-td\'>" + _0x1D072 + "</td><td><img src=\'" + _0x1DC7A + "\' class=\'img-150\' /> </td></table>";
	document.getElementById("dialogue-quest-btn1").style.display = "none";
	document.getElementById("dialogue-quest-btn2").style.display = "none";
	document.getElementById("dialogue-quest-btn3").style.display = "none";
	document.getElementById("dialogue-quest-btn4").style.display = "none";
	if (_0x1DBFC != "")
	{
		document.getElementById("dialogue-quest-btn1").style.display = "";
		if (_0x1DC42 == "")
		{
			document.getElementById("dialogue-quest-btn1").setAttribute("onclick", "closeDialogue(\'dialogue-quest\');")
		}
		else
		{
			document.getElementById("dialogue-quest-btn1").setAttribute("onclick", "closeDialogue(\'dialogue-quest\');sendBytes(\'QUEST=" + _0x1C972 + "~" + _0x1DC42 + "\')")
		}
	}
	else
	{
		document.getElementById("dialogue-quest-btn1").style.display = "none"
	};
	if (_0x1DC0A != "")
	{
		document.getElementById("dialogue-quest-btn2").style.display = "";
		if (_0x1DC50 == "")
		{
			document.getElementById("dialogue-quest-btn2").setAttribute("onclick", "closeDialogue(\'dialogue-quest\');")
		}
		else
		{
			document.getElementById("dialogue-quest-btn2").setAttribute("onclick", "closeDialogue(\'dialogue-quest\');sendBytes(\'QUEST=" + _0x1C972 + "~" + _0x1DC50 + "\')")
		}
	}
	else
	{
		document.getElementById("dialogue-quest-btn2").style.display = "none"
	};
	if (_0x1DC18 != "")
	{
		document.getElementById("dialogue-quest-btn3").style.display = "";
		if (_0x1DC5E == "")
		{
			document.getElementById("dialogue-quest-btn3").setAttribute("onclick", "closeDialogue(\'dialogue-quest\');")
		}
		else
		{
			document.getElementById("dialogue-quest-btn3").setAttribute("onclick", "closeDialogue(\'dialogue-quest\');sendBytes(\'QUEST=" + _0x1C972 + "~" + _0x1DC5E + "\')")
		}
	}
	else
	{
		document.getElementById("dialogue-quest-btn3").style.display = "none"
	};
	if (_0x1DC26 != "")
	{
		document.getElementById("dialogue-quest-btn4").style.display = "";
		if (_0x1DC6C == "")
		{
			document.getElementById("dialogue-quest-btn4").setAttribute("onclick", "closeDialogue(\'dialogue-quest\');")
		}
		else
		{
			document.getElementById("dialogue-quest-btn4").setAttribute("onclick", "closeDialogue(\'dialogue-quest\');sendBytes(\'QUEST=" + _0x1C972 + "~" + _0x1DC6C + "\')")
		}
	}
	else
	{
		document.getElementById("dialogue-quest-btn4").style.display = "none"
	};
	var _0x1DC34 = "<img src=\'images/bubbleChat.png\' class=\'img-30\' /> ";
	document.getElementById("dialogue-quest-btn1").innerHTML = _0x1DC34 + _0x1DBFC;
	document.getElementById("dialogue-quest-btn2").innerHTML = _0x1DC34 + _0x1DC0A;
	document.getElementById("dialogue-quest-btn3").innerHTML = _0x1DC34 + _0x1DC18;
	document.getElementById("dialogue-quest-btn4").innerHTML = _0x1DC34 + _0x1DC26;
	openDialogueOverride("dialogue-quest", "large")
}