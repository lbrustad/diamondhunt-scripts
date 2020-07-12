'use strict';

function rightClicksItem(stroke_prev)
{
	if (global_equipmentMap[stroke_prev] != null)
	{
		if (getItem("needle") > 0)
		{
			if (stroke_prev.startsWith("snakeskin"))
			{
				confirmDialogue("images/needle.png", "<img src='images/" + stroke_prev + ".png' class='img-50' /> Use needle on this? <img src='images/" + stroke_prev + ".png' class='img-30' />", "Use Needle", "Cancel", "NEEDLE=" + stroke_prev);
				return;
			}
			else
			{
				if (stroke_prev.startsWith("bearFur"))
				{
					confirmDialogue("images/needle.png", "<img src='images/" + stroke_prev + ".png' class='img-50' /> Use needle on this? <img src='images/" + stroke_prev + ".png' class='img-30' />", "Use Needle", "Cancel", "NEEDLE=" + stroke_prev);
					return;
				}
				else
				{
					if (stroke_prev.startsWith("polarBearFur"))
					{
						confirmDialogue("images/needle.png", "<img src='images/" + stroke_prev + ".png' class='img-50' /> Use needle on this? <img src='images/" + stroke_prev + ".png' class='img-30' />", "Use Needle", "Cancel", "NEEDLE=" + stroke_prev);
						return;
					}
					else
					{
						if (stroke_prev.startsWith("batSkin"))
						{
							confirmDialogue("images/needle.png", "<img src='images/" + stroke_prev + ".png' class='img-50' /> Use needle on this? <img src='images/" + stroke_prev + ".png' class='img-30' />", "Use Needle", "Cancel", "NEEDLE=" + stroke_prev);
							return;
						}
					}
				}
			}
		}
	}
};
