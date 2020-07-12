/**
 * addItemBoxQuests extracted from ../../deobfuscated/bundle.js at line 3149-3202
 *
 * If this file doesn't contain a function, there is an error in ../raw/addItemBoxQuests.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function addItemBoxQuests(_0x1C972, _0x1C948, _0x1C7CE, _0x1C98E, _0x1C99C, _0x1C93A, _0x1C85A, _0x1C980)
{
	var _0x1C868 = document.getElementById(_0x1C85A);
	var _0x1C7EA = document.createElement("div");
	if (getItem(_0x1C972 + "Quest") == -1)
	{
		_0x1C7EA.setAttribute("class", "quest-button-completed")
	}
	else
	{
		_0x1C7EA.setAttribute("class", "quest-button")
	};
	_0x1C7EA.setAttribute("id", "quest-box-" + _0x1C972);
	_0x1C7EA.setAttribute("onclick", "sendBytes(\'QUEST=" + _0x1C972 + "~0\')");
	var _0x1C806 = document.createElement("div");
	if (getItem("questPoints") < _0x1C980)
	{
		var _0x1C814 = getImage("images/questPoints.png", "quest-x-" + _0x1C6B6);
		_0x1C814.setAttribute("class", "img-30");
		_0x1C7EA.setAttribute("class", "quest-button-locked");
		_0x1C806.appendChild(_0x1C814);
		_0x1C806.innerHTML += " REQUIRED QUEST POINTS: " + _0x1C980;
		_0x1C7EA.setAttribute("onclick", "confirmDialogue(\'images/questPoints.png\', \'You need to complete other quests to earn quest points before starting this one.\', \'Exit\', \'\', \'\')")
	}
	else
	{
		var _0x1C806 = document.createElement("div");
		_0x1C806.innerHTML = _0x1C948 + "<br /><span style=\'font-size:10pt;color:black;\'>" + _0x1C7CE + "<br /><br />" + _0x1C93A + "</span>";
		_0x1C806.setAttribute("style", "font-size:16pt;");
		var _0x1C964 = document.createElement("div");
		_0x1C964.setAttribute("style", "float:right;font-size:10pt;color:purple;text-align:right;");
		for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1C98E.length; _0x1C6B6++)
		{
			var _0x1C814 = getImage("images/x.png", _0x1C972 + "_quest-x-" + _0x1C6B6);
			_0x1C814.setAttribute("class", "img-15");
			if (_0x1C99C[_0x1C6B6])
			{
				_0x1C814 = getImage("images/check_dark.png", _0x1C972 + "_quest-check-" + _0x1C6B6);
				_0x1C814.setAttribute("class", "img-15")
			};
			var _0x1C956 = document.createElement("span");
			_0x1C956.innerHTML = _0x1C98E[_0x1C6B6] + " ";
			if (_0x1C99C[_0x1C6B6] != null && getItem(_0x1C972 + "Quest") != -1)
			{
				_0x1C956.appendChild(_0x1C814)
			};
			_0x1C956.appendChild(document.createElement("br"));
			_0x1C964.appendChild(_0x1C956)
		};
		_0x1C7EA.appendChild(_0x1C964)
	};
	_0x1C7EA.appendChild(_0x1C806);
	_0x1C868.appendChild(_0x1C7EA)
}