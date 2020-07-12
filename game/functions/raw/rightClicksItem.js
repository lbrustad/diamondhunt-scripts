/**
 * rightClicksItem extracted from ../../deobfuscated/bundle.js at line 4822-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/rightClicksItem.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function rightClicksItem(_0x1CF30)
{
	if (global_equipmentMap[_0x1CF30] != null)
	{
		if (getItem("needle") > 0)
		{
			if (_0x1CF30.startsWith("snakeskin"))
			{
				confirmDialogue("images/needle.png", "<img src=\'images/" + _0x1CF30 + ".png\' class=\'img-50\' /> Use needle on this? <img src=\'images/" + _0x1CF30 + ".png\' class=\'img-30\' />", "Use Needle", "Cancel", "NEEDLE=" + _0x1CF30);
				return
			}
			else
			{
				if (_0x1CF30.startsWith("bearFur"))
				{
					confirmDialogue("images/needle.png", "<img src=\'images/" + _0x1CF30 + ".png\' class=\'img-50\' /> Use needle on this? <img src=\'images/" + _0x1CF30 + ".png\' class=\'img-30\' />", "Use Needle", "Cancel", "NEEDLE=" + _0x1CF30);
					return
				}
				else
				{
					if (_0x1CF30.startsWith("polarBearFur"))
					{
						confirmDialogue("images/needle.png", "<img src=\'images/" + _0x1CF30 + ".png\' class=\'img-50\' /> Use needle on this? <img src=\'images/" + _0x1CF30 + ".png\' class=\'img-30\' />", "Use Needle", "Cancel", "NEEDLE=" + _0x1CF30);
						return
					}
					else
					{
						if (_0x1CF30.startsWith("batSkin"))
						{
							confirmDialogue("images/needle.png", "<img src=\'images/" + _0x1CF30 + ".png\' class=\'img-50\' /> Use needle on this? <img src=\'images/" + _0x1CF30 + ".png\' class=\'img-30\' />", "Use Needle", "Cancel", "NEEDLE=" + _0x1CF30);
							return
						}
					}
				}
			}
		}
	}
}