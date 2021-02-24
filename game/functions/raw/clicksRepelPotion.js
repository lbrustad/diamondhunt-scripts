/**
 * clicksRepelPotion extracted from ../../deobfuscated/bundle.js at line 19606-19643
 *
 * If this file doesn't contain a function, there is an error in ../raw/clicksRepelPotion.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function clicksRepelPotion(_0x159FE)
{
	var _0x166FB = [];
	var _0x15A44 = "";
	if (_0x159FE == 1)
	{
		_0x166FB.push("chicken");
		_0x166FB.push("rat");
		_0x166FB.push("bee");
		_0x166FB.push("snake");
		_0x166FB.push("ent");
		_0x166FB.push("thief");
		_0x166FB.push("bear");
		_0x166FB.push("skeleton");
		_0x166FB.push("spider")
	};
	if (_0x159FE == 2)
	{
		_0x166FB.push("lavaAlien");
		_0x166FB.push("bat");
		_0x166FB.push("fireMage");
		_0x166FB.push("boneHead");
		_0x166FB.push("mammaPolarBear");
		_0x166FB.push("yeti");
		_0x166FB.push("ghost");
		_0x166FB.push("skeletonGhost");
		_0x166FB.push("reaper")
	};
	_0x15A44 += "Select a Monster you wish to Avoid<br /><br />";
	for (var _0x14C0C = 0; _0x14C0C < _0x166FB.length; _0x14C0C++)
	{
		var _0x166D8 = _0x166FB[_0x14C0C];
		_0x15A44 += "<div onclick=\'repelMonster(\"" + _0x166D8 + "\")\' class=\'repel-potion-monster-btn\'>";
		_0x15A44 += " <img src=\'images/" + _0x166D8 + "_monster_idle_0.png\' class=\'img-70\' />";
		_0x15A44 += "</div>"
	};
	confirmDialogue("none", _0x15A44, "Close", "", "")
}