/**
 * openQuestDialogue extracted from ../../deobfuscated/bundle.js at line 6071-6149
 *
 * If this file doesn't contain a function, there is an error in ../raw/openQuestDialogue.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function openQuestDialogue(_0x688D, _0x3BCE, _0x68AA, _0x4BC7, _0x6788, _0x67A5, _0x67C2, _0x67DF, _0x6819, _0x6836, _0x6853, _0x6870)
{
	document.getElementById("dialogue-quest-title").innerHTML = _0x68AA;
	document.getElementById("dialogue-quest-text").innerHTML = "<table><tr><td class=\'dialogue-quest-text-td\'>" + _0x4BC7 + "</td><td><img src=\'" + _0x688D + "\' class=\'img-150\' /> </td></table>";
	document.getElementById("dialogue-quest-btn1").style.display = "none";
	document.getElementById("dialogue-quest-btn2").style.display = "none";
	document.getElementById("dialogue-quest-btn3").style.display = "none";
	document.getElementById("dialogue-quest-btn4").style.display = "none";
	if (_0x6788 != "")
	{
		document.getElementById("dialogue-quest-btn1").style.display = "";
		if (_0x6819 == "")
		{
			document.getElementById("dialogue-quest-btn1").setAttribute("onclick", "closeDialogue(\'dialogue-quest\');")
		}
		else
		{
			document.getElementById("dialogue-quest-btn1").setAttribute("onclick", "closeDialogue(\'dialogue-quest\');sendBytes(\'QUEST=" + _0x3BCE + "~" + _0x6819 + "\')")
		}
	}
	else
	{
		document.getElementById("dialogue-quest-btn1").style.display = "none"
	};
	if (_0x67A5 != "")
	{
		document.getElementById("dialogue-quest-btn2").style.display = "";
		if (_0x6836 == "")
		{
			document.getElementById("dialogue-quest-btn2").setAttribute("onclick", "closeDialogue(\'dialogue-quest\');")
		}
		else
		{
			document.getElementById("dialogue-quest-btn2").setAttribute("onclick", "closeDialogue(\'dialogue-quest\');sendBytes(\'QUEST=" + _0x3BCE + "~" + _0x6836 + "\')")
		}
	}
	else
	{
		document.getElementById("dialogue-quest-btn2").style.display = "none"
	};
	if (_0x67C2 != "")
	{
		document.getElementById("dialogue-quest-btn3").style.display = "";
		if (_0x6853 == "")
		{
			document.getElementById("dialogue-quest-btn3").setAttribute("onclick", "closeDialogue(\'dialogue-quest\');")
		}
		else
		{
			document.getElementById("dialogue-quest-btn3").setAttribute("onclick", "closeDialogue(\'dialogue-quest\');sendBytes(\'QUEST=" + _0x3BCE + "~" + _0x6853 + "\')")
		}
	}
	else
	{
		document.getElementById("dialogue-quest-btn3").style.display = "none"
	};
	if (_0x67DF != "")
	{
		document.getElementById("dialogue-quest-btn4").style.display = "";
		if (_0x6870 == "")
		{
			document.getElementById("dialogue-quest-btn4").setAttribute("onclick", "closeDialogue(\'dialogue-quest\');")
		}
		else
		{
			document.getElementById("dialogue-quest-btn4").setAttribute("onclick", "closeDialogue(\'dialogue-quest\');sendBytes(\'QUEST=" + _0x3BCE + "~" + _0x6870 + "\')")
		}
	}
	else
	{
		document.getElementById("dialogue-quest-btn4").style.display = "none"
	};
	var _0x67FC = "<img src=\'images/bubbleChat.png\' class=\'img-30\' /> ";
	document.getElementById("dialogue-quest-btn1").innerHTML = _0x67FC + _0x6788;
	document.getElementById("dialogue-quest-btn2").innerHTML = _0x67FC + _0x67A5;
	document.getElementById("dialogue-quest-btn3").innerHTML = _0x67FC + _0x67C2;
	document.getElementById("dialogue-quest-btn4").innerHTML = _0x67FC + _0x67DF;
	openDialogueOverride("dialogue-quest", "large")
}