/**
 * levelUp extracted from ../../deobfuscated/bundle.js at line 12606-12633
 *
 * If this file doesn't contain a function, there is an error in ../raw/levelUp.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function levelUp(_0x156FC, _0x17BC3)
{
	document.getElementById("top-bar-skills").style.display = "none";
	document.getElementById("top-bar-level-up").style.display = "";
	document.getElementById("top-bar-level-up").style.backgroundColor = getSkillBackgroundColor(_0x156FC);
	document.getElementById("level-up-msg-area-td").innerHTML = "<img src=\'images/" + _0x156FC + "Skill.png\' class=\'img-50\' /> " + "<b>LEVEL UP: </b>" + _0x17BC3 + " <img src=\'images/" + _0x156FC + "Skill.png\' class=\'img-50\' />";
	if (!global_inLevelUpAnimationFlag)
	{
		global_inLevelUpAnimationFlag = true;
		for (var _0x14C0C = 0; _0x14C0C < 10; _0x14C0C++)
		{
			if (_0x14C0C % 2 == 0)
			{
				$("#top-bar-level-up").fadeOut(500)
			}
			else
			{
				$("#top-bar-level-up").fadeIn(500)
			}
		};
		setTimeout(function ()
		{
			document.getElementById("top-bar-skills").style.display = "";
			document.getElementById("top-bar-level-up").style.display = "none";
			global_inLevelUpAnimationFlag = false
		}, 5500)
	}
}