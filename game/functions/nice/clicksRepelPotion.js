'use strict';

function clicksRepelPotion(canCreateDiscussions)
{
	var SpriteModel = [];
	var patch3c = "";
	if (canCreateDiscussions == 1)
	{
		SpriteModel.push("chicken");
		SpriteModel.push("rat");
		SpriteModel.push("bee");
		SpriteModel.push("snake");
		SpriteModel.push("ent");
		SpriteModel.push("thief");
		SpriteModel.push("bear");
		SpriteModel.push("skeleton");
		SpriteModel.push("spider");
	}
	if (canCreateDiscussions == 2)
	{
		SpriteModel.push("lavaAlien");
		SpriteModel.push("bat");
		SpriteModel.push("fireMage");
		SpriteModel.push("boneHead");
		SpriteModel.push("mammaPolarBear");
		SpriteModel.push("yeti");
		SpriteModel.push("ghost");
		SpriteModel.push("skeletonGhost");
		SpriteModel.push("reaper");
	}
	patch3c = patch3c + "Select a Monster you wish to Avoid<br /><br />";
	var layer_i = 0;
	for (; layer_i < SpriteModel.length; layer_i++)
	{
		var layer = SpriteModel[layer_i];
		patch3c = patch3c + ("<div onclick='repelMonster(\"" + layer + "\")' class='repel-potion-monster-btn'>");
		patch3c = patch3c + (" <img src='images/" + layer + "_monster_idle_0.png' class='img-70' />");
		patch3c = patch3c + "</div>";
	}
	confirmDialogue("none", patch3c, "Close", "", "");
};
