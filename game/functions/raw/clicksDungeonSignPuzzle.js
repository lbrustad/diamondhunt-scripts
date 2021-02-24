/**
 * clicksDungeonSignPuzzle extracted from ../../deobfuscated/bundle.js at line 6505-6545
 *
 * If this file doesn't contain a function, there is an error in ../raw/clicksDungeonSignPuzzle.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function clicksDungeonSignPuzzle(_0x16304)
{
	var _0x1629B = document.getElementById("table-td-dungeonSigns-" + _0x16304);
	var _0x162E1 = _0x1629B.src;
	var _0x16278 = [];
	_0x16278.push("none.png");
	if (getItem("dungeonSign0") > 0)
	{
		_0x16278.push("dungeonSign0.png")
	};
	if (getItem("dungeonSign1") > 0)
	{
		_0x16278.push("dungeonSign1.png")
	};
	if (getItem("dungeonSign2") > 0)
	{
		_0x16278.push("dungeonSign2.png")
	};
	if (getItem("dungeonSign3") > 0)
	{
		_0x16278.push("dungeonSign3.png")
	};
	if (getItem("dungeonSign4") > 0)
	{
		_0x16278.push("dungeonSign4.png")
	};
	var _0x162BE = 0;
	for (var _0x14C0C = 0; _0x14C0C < _0x16278.length; _0x14C0C++)
	{
		if (_0x162E1.endsWith(_0x16278[_0x14C0C]))
		{
			_0x162BE = _0x14C0C + 1;
			if (_0x162BE == _0x16278.length)
			{
				_0x162BE = 0
			};
			break
		}
	};
	_0x1629B.src = "images/" + _0x16278[_0x162BE]
}