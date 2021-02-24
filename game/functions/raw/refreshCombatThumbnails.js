/**
 * refreshCombatThumbnails extracted from ../../deobfuscated/bundle.js at line 13599-13638
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshCombatThumbnails.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshCombatThumbnails()
{
	if (getItem("castleAccess") > 0)
	{
		document.getElementById("combat-thumbnail-castle").style.display = ""
	};
	if (getItem("snakeKills") > 0 || getItem("entKills") > 0 || getItem("thiefKills") > 0)
	{
		document.getElementById("combat-thumbnail-fields").style.display = "";
		document.getElementById("combat-thumbnail-forest").style.display = ""
	};
	if (getItem("bearKills") > 0 || getItem("spiderKills") > 0 || getItem("skeletonKills") > 0)
	{
		document.getElementById("combat-thumbnail-caves").style.display = ""
	};
	if (getItem("lavaAlienKills") > 0 || getItem("batKills") > 0 || getItem("fireMageKills") > 0)
	{
		document.getElementById("combat-thumbnail-lavaDungeon").style.display = ""
	};
	if (getItem("boneHeadKills") > 0 || getItem("mammaPolarBearKills") > 0 || getItem("yetiKills") > 0)
	{
		document.getElementById("combat-thumbnail-northernFields").style.display = ""
	};
	if (getItem("ghostKills") > 0 || getItem("skeletonGhostKills") > 0 || getItem("reaperKills") > 0)
	{
		document.getElementById("combat-thumbnail-cemetery").style.display = ""
	};
	if (getItem("pufferFishKills") > 0 || getItem("sharkKills") > 0 || getItem("tridentSoldierKills") > 0)
	{
		document.getElementById("combat-thumbnail-ocean").style.display = ""
	};
	if (getItem("skeletonMonksKills") > 0 || getItem("dungeonSpiderKills") > 0 || getItem("stoneWomenKills") > 0)
	{
		document.getElementById("combat-thumbnail-dungeon").style.display = ""
	};
	if (getItem("skeletonMonksKills") > 0 || getItem("dungeonSpiderKills") > 0 || getItem("stoneWomenKills") > 0)
	{
		document.getElementById("combat-thumbnail-dungeon").style.display = ""
	}
}