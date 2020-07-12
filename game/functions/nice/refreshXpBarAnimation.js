'use strict';

function refreshXpBarAnimation(data)
{
	var reverseItemData = data.split("~");
	var tiledImageBR = reverseItemData[0];
	var tiledImageTL = reverseItemData[1];
	var reverseItemControlData = reverseItemData[2];
	percentageDecimalXpBarWidth = (getItem(tiledImageBR + "Xp") - getXpNeeded(getLevel(getItem(tiledImageBR + "Xp")))) / (getXpNeeded(1 + parseInt(getLevel(getItem(tiledImageBR + "Xp")))) - getXpNeeded(getLevel(getItem(tiledImageBR + "Xp"))));
};
