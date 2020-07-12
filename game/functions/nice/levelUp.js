'use strict';

function levelUp(val, opt_validate)
{
	document.getElementById("top-bar-skills").style.display = "none";
	document.getElementById("top-bar-level-up").style.display = "";
	document.getElementById("top-bar-level-up").style.backgroundColor = getSkillBackgroundColor(val);
	document.getElementById("level-up-msg-area-td").innerHTML = "<img src='images/" + val + "Skill.png' class='img-50' /> " + "<b>LEVEL UP: </b>" + opt_validate + " <img src='images/" + val + "Skill.png' class='img-50' />";
	if (!global_inLevelUpAnimationFlag)
	{
		global_inLevelUpAnimationFlag = true;
		var _a_ = 0;
		for (; _a_ < 10; _a_++)
		{
			if (_a_ % 2 == 0)
			{
				$("#top-bar-level-up").fadeOut(500);
			}
			else
			{
				$("#top-bar-level-up").fadeIn(500);
			}
		}
		setTimeout(function ()
		{
			document.getElementById("top-bar-skills").style.display = "";
			document.getElementById("top-bar-level-up").style.display = "none";
			global_inLevelUpAnimationFlag = false;
		}, 5500);
	}
};
