/**
 * levelUp extracted from ../../deobfuscated/bundle.js at line 10429-10456
 *
 * If this file doesn't contain a function, there is an error in ../raw/levelUp.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function levelUp(_0x3EFA, _0x5B2F)
{
	document.getElementById("top-bar-skills").style.display = "none";
	document.getElementById("top-bar-level-up").style.display = "";
	document.getElementById("top-bar-level-up").style.backgroundColor = getSkillBackgroundColor(_0x3EFA);
	document.getElementById("level-up-msg-area-td").innerHTML = "<img src=\'images/" + _0x3EFA + "Skill.png\' class=\'img-50\' /> " + "<b>LEVEL UP: </b>" + _0x5B2F + " <img src=\'images/" + _0x3EFA + "Skill.png\' class=\'img-50\' />";
	if (!global_inLevelUpAnimationFlag)
	{
		global_inLevelUpAnimationFlag = true;
		for (var _0x3607 = 0; _0x3607 < 10; _0x3607++)
		{
			if (_0x3607 % 2 == 0)
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