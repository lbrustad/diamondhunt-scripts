/**
 * clicksRepelPotion extracted from ../../deobfuscated/bundle.js at line 15928-15965
 *
 * If this file doesn't contain a function, there is an error in ../raw/clicksRepelPotion.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function clicksRepelPotion(_0x4178)
{
	var _0x4B36 = [];
	var _0x41B2 = "";
	if (_0x4178 == 1)
	{
		_0x4B36.push("chicken");
		_0x4B36.push("rat");
		_0x4B36.push("bee");
		_0x4B36.push("snake");
		_0x4B36.push("ent");
		_0x4B36.push("thief");
		_0x4B36.push("bear");
		_0x4B36.push("skeleton");
		_0x4B36.push("spider")
	};
	if (_0x4178 == 2)
	{
		_0x4B36.push("lavaAlien");
		_0x4B36.push("bat");
		_0x4B36.push("fireMage");
		_0x4B36.push("boneHead");
		_0x4B36.push("mammaPolarBear");
		_0x4B36.push("yeti");
		_0x4B36.push("ghost");
		_0x4B36.push("skeletonGhost");
		_0x4B36.push("reaper")
	};
	_0x41B2 += "Select a Monster you wish to Avoid<br /><br />";
	for (var _0x3607 = 0; _0x3607 < _0x4B36.length; _0x3607++)
	{
		var _0x4B19 = _0x4B36[_0x3607];
		_0x41B2 += "<div onclick=\'repelMonster(\"" + _0x4B19 + "\")\' class=\'repel-potion-monster-btn\'>";
		_0x41B2 += " <img src=\'images/" + _0x4B19 + "_monster_idle_0.png\' class=\'img-70\' />";
		_0x41B2 += "</div>"
	};
	confirmDialogue("none", _0x41B2, "Close", "", "")
}