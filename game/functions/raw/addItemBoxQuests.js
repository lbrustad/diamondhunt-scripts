/**
 * addItemBoxQuests extracted from ../../deobfuscated/bundle.js at line 4758-4818
 *
 * If this file doesn't contain a function, there is an error in ../raw/addItemBoxQuests.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function addItemBoxQuests(_0x15328, _0x1529C, _0x14EEB, _0x1536E, _0x15391, _0x15279, _0x15049, _0x1534B)
{
	var _0x1506C = document.getElementById(_0x15049);
	var _0x14F31 = document.createElement("div");
	var _0x15305 = false;
	if (getItem(_0x15328 + "Quest") == -1)
	{
		_0x15305 = true;
		_0x14F31.setAttribute("class", "quest-button-completed")
	}
	else
	{
		_0x14F31.setAttribute("class", "quest-button")
	};
	_0x14F31.setAttribute("id", "quest-box-" + _0x15328);
	_0x14F31.setAttribute("onclick", "sendBytes(\'QUEST=" + _0x15328 + "~0\')");
	var _0x14F77 = document.createElement("div");
	if (getItem("questPoints") < _0x1534B)
	{
		var _0x14F9A = getImage("images/questPoints_lock.png", "quest-x-" + _0x14C0C);
		_0x14F9A.setAttribute("class", "img-30");
		_0x14F31.setAttribute("class", "quest-button-locked");
		_0x14F77.appendChild(_0x14F9A);
		_0x14F77.innerHTML += " You need at least " + getItem("questPoints") + "/" + _0x1534B + " quest points to unlock this quest.";
		_0x14F31.setAttribute("onclick", "confirmDialogue(\'images/questPoints_lock.png\', \'You need to complete other quests to earn quest points before starting this one.\', \'Exit\', \'\', \'\')")
	}
	else
	{
		var _0x14F77 = document.createElement("div");
		var _0x151ED = "";
		if (_0x15305)
		{
			_0x151ED = "<img src=\'images/check.png\' class=\'img-20\' />"
		};
		_0x14F77.innerHTML = _0x1529C + " " + _0x151ED + "<br /><span style=\'font-size:10pt;color:black;\'>" + _0x14EEB + "<br /><br />" + _0x15279 + "</span>";
		_0x14F77.setAttribute("style", "font-size:16pt;");
		var _0x152E2 = document.createElement("div");
		_0x152E2.setAttribute("style", "float:right;font-size:10pt;color:purple;text-align:right;");
		for (var _0x14C0C = 0; _0x14C0C < _0x1536E.length; _0x14C0C++)
		{
			var _0x14F9A = getImage("images/x.png", _0x15328 + "_quest-x-" + _0x14C0C);
			_0x14F9A.setAttribute("class", "img-15");
			if (_0x15391[_0x14C0C])
			{
				_0x14F9A = getImage("images/check_dark.png", _0x15328 + "_quest-check-" + _0x14C0C);
				_0x14F9A.setAttribute("class", "img-15")
			};
			var _0x152BF = document.createElement("span");
			_0x152BF.innerHTML = _0x1536E[_0x14C0C] + " ";
			if (_0x15391[_0x14C0C] != null && getItem(_0x15328 + "Quest") != -1)
			{
				_0x152BF.appendChild(_0x14F9A)
			};
			_0x152BF.appendChild(document.createElement("br"));
			_0x152E2.appendChild(_0x152BF)
		};
		_0x14F31.appendChild(_0x152E2)
	};
	_0x14F31.appendChild(_0x14F77);
	_0x1506C.appendChild(_0x14F31)
}