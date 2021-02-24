/**
 * openQuestDialogue extracted from ../../deobfuscated/bundle.js at line 7048-7126
 *
 * If this file doesn't contain a function, there is an error in ../raw/openQuestDialogue.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function openQuestDialogue(_0x18C4E, _0x15328, _0x18C71, _0x167F0, _0x18B13, _0x18B36, _0x18B59, _0x18B7C, _0x18BC2, _0x18BE5, _0x18C08, _0x18C2B)
{
	document.getElementById("dialogue-quest-title").innerHTML = _0x18C71;
	document.getElementById("dialogue-quest-text").innerHTML = "<table><tr><td class=\'dialogue-quest-text-td\'>" + _0x167F0 + "</td><td><img src=\'" + _0x18C4E + "\' class=\'img-150\' /> </td></table>";
	document.getElementById("dialogue-quest-btn1").style.display = "none";
	document.getElementById("dialogue-quest-btn2").style.display = "none";
	document.getElementById("dialogue-quest-btn3").style.display = "none";
	document.getElementById("dialogue-quest-btn4").style.display = "none";
	if (_0x18B13 != "")
	{
		document.getElementById("dialogue-quest-btn1").style.display = "";
		if (_0x18BC2 == "")
		{
			document.getElementById("dialogue-quest-btn1").setAttribute("onclick", "closeDialogue(\'dialogue-quest\');")
		}
		else
		{
			document.getElementById("dialogue-quest-btn1").setAttribute("onclick", "closeDialogue(\'dialogue-quest\');sendBytes(\'QUEST=" + _0x15328 + "~" + _0x18BC2 + "\')")
		}
	}
	else
	{
		document.getElementById("dialogue-quest-btn1").style.display = "none"
	};
	if (_0x18B36 != "")
	{
		document.getElementById("dialogue-quest-btn2").style.display = "";
		if (_0x18BE5 == "")
		{
			document.getElementById("dialogue-quest-btn2").setAttribute("onclick", "closeDialogue(\'dialogue-quest\');")
		}
		else
		{
			document.getElementById("dialogue-quest-btn2").setAttribute("onclick", "closeDialogue(\'dialogue-quest\');sendBytes(\'QUEST=" + _0x15328 + "~" + _0x18BE5 + "\')")
		}
	}
	else
	{
		document.getElementById("dialogue-quest-btn2").style.display = "none"
	};
	if (_0x18B59 != "")
	{
		document.getElementById("dialogue-quest-btn3").style.display = "";
		if (_0x18C08 == "")
		{
			document.getElementById("dialogue-quest-btn3").setAttribute("onclick", "closeDialogue(\'dialogue-quest\');")
		}
		else
		{
			document.getElementById("dialogue-quest-btn3").setAttribute("onclick", "closeDialogue(\'dialogue-quest\');sendBytes(\'QUEST=" + _0x15328 + "~" + _0x18C08 + "\')")
		}
	}
	else
	{
		document.getElementById("dialogue-quest-btn3").style.display = "none"
	};
	if (_0x18B7C != "")
	{
		document.getElementById("dialogue-quest-btn4").style.display = "";
		if (_0x18C2B == "")
		{
			document.getElementById("dialogue-quest-btn4").setAttribute("onclick", "closeDialogue(\'dialogue-quest\');")
		}
		else
		{
			document.getElementById("dialogue-quest-btn4").setAttribute("onclick", "closeDialogue(\'dialogue-quest\');sendBytes(\'QUEST=" + _0x15328 + "~" + _0x18C2B + "\')")
		}
	}
	else
	{
		document.getElementById("dialogue-quest-btn4").style.display = "none"
	};
	var _0x18B9F = "<img src=\'images/bubbleChat.png\' class=\'img-30\' /> ";
	document.getElementById("dialogue-quest-btn1").innerHTML = _0x18B9F + _0x18B13;
	document.getElementById("dialogue-quest-btn2").innerHTML = _0x18B9F + _0x18B36;
	document.getElementById("dialogue-quest-btn3").innerHTML = _0x18B9F + _0x18B59;
	document.getElementById("dialogue-quest-btn4").innerHTML = _0x18B9F + _0x18B7C;
	openDialogueOverride("dialogue-quest", "large")
}