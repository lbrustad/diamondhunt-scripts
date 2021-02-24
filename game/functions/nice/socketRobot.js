'use strict';

function socketRobot()
{
	if (getItem("robot") == 1)
	{
		confirmDialogue("images/sapphire.png", "Add 3 sapphires to your robot?", "Confirm Socket", "Cancel", "SOCKET=robot");
	}
	else
	{
		if (getItem("sapphireRobot") == 1)
		{
			confirmDialogue("images/emerald.png", "Add 3 emeralds to your robot?", "Confirm Socket", "Cancel", "SOCKET=robot");
		}
		else
		{
			if (getItem("emeraldRobot") == 1)
			{
				confirmDialogue("images/ruby.png", "Add 3 rubies to your robot?", "Confirm Socket", "Cancel", "SOCKET=robot");
			}
			else
			{
				if (getItem("rubyRobot") == 1)
				{
					confirmDialogue("images/ruby.png", "Add 3 diamonds to your robot?", "Confirm Socket", "Cancel", "SOCKET=robot");
				}
				else
				{
					confirmDialogue("images/diamondRobot.png", "Your robot already has the best gem socketed.", "Close", "", "");
				}
			}
		}
	}
};
