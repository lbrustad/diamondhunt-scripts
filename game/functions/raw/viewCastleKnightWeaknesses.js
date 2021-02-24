/**
 * viewCastleKnightWeaknesses extracted from ../../deobfuscated/bundle.js at line 12404-12415
 *
 * If this file doesn't contain a function, there is an error in ../raw/viewCastleKnightWeaknesses.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function viewCastleKnightWeaknesses()
{
	var _0x15A44 = "<center><table class=\'basic-table\' width=\'100%\'>";
	_0x15A44 += "<tr style=\'background-color:#4d4d4d\'><th>Enemy</th><th>Info and Tips</th></tr>";
	_0x15A44 += "<tr><td width=\'25%\'><img src=\'images/knight1Monster_black.png\' class=\'img-50\' />" + "WAVE 1" + "<br /></span></td><td style=\'font-size:10pt;\'>Weak to slash attacks.</td></tr>";
	_0x15A44 += "<tr><td width=\'25%\'><img src=\'images/knight2Monster_black.png\' class=\'img-50\' />" + "WAVE 2" + "<br /></span></td><td style=\'font-size:10pt;\'>No weaknesses.<br />Charges during the fight.</td></tr>";
	_0x15A44 += "<tr><td width=\'25%\'><img src=\'images/knight3Monster_black.png\' class=\'img-50\' />" + "WAVE 3" + "<br /></span></td><td style=\'font-size:10pt;\'>No weaknesses.<br />Charges multiple times during the fight.<br />A black charge is an attack.<br />A <span style=\'color:green\'>green</span> charge is a heal.</td></tr>";
	_0x15A44 += "<tr><td width=\'25%\'><img src=\'images/knight4Monster_black.png\' class=\'img-50\' />" + "WAVE 4" + "<br /></span></td><td style=\'font-size:10pt;\'>Weak to stab attacks.<br />Poisons.</td></tr>";
	_0x15A44 += "<tr><td width=\'25%\'><img src=\'images/knight5Monster_black.png\' class=\'img-50\' />" + "WAVE 5" + "<br /></span></td><td style=\'font-size:10pt;\'>Weak to scythe and ice arrows.<br />Considered a ghost.<br />Alternates between shields to block attack types: <span style=\'color:red\'>Melee</span>, <span style=\'color:blue\'>magic</span> or <span style=\'color:green\'>range</span>.</td></tr>";
	_0x15A44 += "</table></center><br />";
	confirmDialogue("images/kingIcon.png", _0x15A44, "Back", "", "FIGHT_SOLDIERS")
}