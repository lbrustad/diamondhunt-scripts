'use strict';

function clicksRobot()
{
	if (getItem("robotTimer") == 1)
	{
		sendBytes("LOOT_ROBOT");
	}
	else
	{
		if (getItem("robotTimer") > 1)
		{
			confirmDialogue("images/robot.png", "Your robot is already mining away!", "Close", "", "");
		}
		else
		{
			if (getItem("diamondRobot") == 1)
			{
				document.getElementById("robot-dialogue-tr-sapphire").style.backgroundColor = "#99ffcc";
				document.getElementById("robot-dialogue-tr-emerald").style.backgroundColor = "#99ffcc";
				document.getElementById("robot-dialogue-tr-ruby").style.backgroundColor = "#99ffcc";
				document.getElementById("robot-dialogue-tr-diamond").style.backgroundColor = "#99ffcc";
				document.getElementById("robot-dialogue-socket-button").style.display = "none";
			}
			if (getItem("rubyRobot") == 1)
			{
				document.getElementById("robot-dialogue-tr-sapphire").style.backgroundColor = "#99ffcc";
				document.getElementById("robot-dialogue-tr-emerald").style.backgroundColor = "#99ffcc";
				document.getElementById("robot-dialogue-tr-ruby").style.backgroundColor = "#99ffcc";
			}
			if (getItem("emeraldRobot") == 1)
			{
				document.getElementById("robot-dialogue-tr-sapphire").style.backgroundColor = "#99ffcc";
				document.getElementById("robot-dialogue-tr-emerald").style.backgroundColor = "#99ffcc";
			}
			if (getItem("sapphireRobot") == 1)
			{
				document.getElementById("robot-dialogue-tr-sapphire").style.backgroundColor = "#99ffcc";
			}
			openDialogue("dialogue-robot");
		}
	}
};
