/**
 * addItemBoxQuests extracted from ../../deobfuscated/bundle.js at line 4070-4130
 *
 * If this file doesn't contain a function, there is an error in ../raw/addItemBoxQuests.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function addItemBoxQuests(_0x3BCE, _0x3B5A, _0x384B, _0x3C08, _0x3C25, _0x3B3D, _0x396D, _0x3BEB)
{
	var _0x398A = document.getElementById(_0x396D);
	var _0x3885 = document.createElement("div");
	var _0x3BB1 = false;
	if (getItem(_0x3BCE + "Quest") == -1)
	{
		_0x3BB1 = true;
		_0x3885.setAttribute("class", "quest-button-completed")
	}
	else
	{
		_0x3885.setAttribute("class", "quest-button")
	};
	_0x3885.setAttribute("id", "quest-box-" + _0x3BCE);
	_0x3885.setAttribute("onclick", "sendBytes(\'QUEST=" + _0x3BCE + "~0\')");
	var _0x38BF = document.createElement("div");
	if (getItem("questPoints") < _0x3BEB)
	{
		var _0x38DC = getImage("images/questPoints_lock.png", "quest-x-" + _0x3607);
		_0x38DC.setAttribute("class", "img-30");
		_0x3885.setAttribute("class", "quest-button-locked");
		_0x38BF.appendChild(_0x38DC);
		_0x38BF.innerHTML += " You need at least " + getItem("questPoints") + "/" + _0x3BEB + " quest points to unlock this quest.";
		_0x3885.setAttribute("onclick", "confirmDialogue(\'images/questPoints_lock.png\', \'You need to complete other quests to earn quest points before starting this one.\', \'Exit\', \'\', \'\')")
	}
	else
	{
		var _0x38BF = document.createElement("div");
		var _0x3AC9 = "";
		if (_0x3BB1)
		{
			_0x3AC9 = "<img src=\'images/check.png\' class=\'img-20\' />"
		};
		_0x38BF.innerHTML = _0x3B5A + " " + _0x3AC9 + "<br /><span style=\'font-size:10pt;color:black;\'>" + _0x384B + "<br /><br />" + _0x3B3D + "</span>";
		_0x38BF.setAttribute("style", "font-size:16pt;");
		var _0x3B94 = document.createElement("div");
		_0x3B94.setAttribute("style", "float:right;font-size:10pt;color:purple;text-align:right;");
		for (var _0x3607 = 0; _0x3607 < _0x3C08.length; _0x3607++)
		{
			var _0x38DC = getImage("images/x.png", _0x3BCE + "_quest-x-" + _0x3607);
			_0x38DC.setAttribute("class", "img-15");
			if (_0x3C25[_0x3607])
			{
				_0x38DC = getImage("images/check_dark.png", _0x3BCE + "_quest-check-" + _0x3607);
				_0x38DC.setAttribute("class", "img-15")
			};
			var _0x3B77 = document.createElement("span");
			_0x3B77.innerHTML = _0x3C08[_0x3607] + " ";
			if (_0x3C25[_0x3607] != null && getItem(_0x3BCE + "Quest") != -1)
			{
				_0x3B77.appendChild(_0x38DC)
			};
			_0x3B77.appendChild(document.createElement("br"));
			_0x3B94.appendChild(_0x3B77)
		};
		_0x3885.appendChild(_0x3B94)
	};
	_0x3885.appendChild(_0x38BF);
	_0x398A.appendChild(_0x3885)
}