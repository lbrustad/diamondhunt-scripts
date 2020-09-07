/**
 * idleFightingCanvasTick extracted from ../../deobfuscated/bundle.js at line 11294-11338
 *
 * If this file doesn't contain a function, there is an error in ../raw/idleFightingCanvasTick.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function idleFightingCanvasTick()
{
	if (global_lastTabId != "right-combat-fighting")
	{
		return
	};
	global_canvasFightingHero2D.clearRect(0, 0, global_canvasFightingHero.width, global_canvasFightingHero.height);
	if (!variableExists("global_idleFightingHeroCanvasTickFrame"))
	{
		global_idleFightingHeroCanvasTickFrame = new idleFightingHeroCanvasTickFrame()
	};
	global_idleFightingHeroCanvasTickFrame.tick();
	if (global_heroFlicker && getRandomInt(1) == 0)
	{
		global_canvasFightingHero2D.shadowBlur = 5;
		global_canvasFightingHero2D.shadowColor = "yellow"
	}
	else
	{
		global_canvasFightingHero2D.shadowBlur = 0
	};
	if (getItem("heroStunned"))
	{
		global_canvasFightingHero2D.shadowBlur = 50;
		global_canvasFightingHero2D.shadowColor = "cyan"
	};
	if (getItem("invisibilityTimer") >= 1)
	{
		global_canvasFightingHero2D.globalAlpha = 0
	}
	else
	{
		global_canvasFightingHero2D.globalAlpha = 1.0
	};
	global_canvasFightingHero2D.drawImage(getImage("images/" + getItem("body", true) + "Equip.png", "hero_idle_body"), 0, global_idleFightingHeroCanvasTickFrame.getYValue());
	global_canvasFightingHero2D.drawImage(getImage("images/" + getItem("head", true) + "Equip.png", "hero_idle_head"), 0, global_idleFightingHeroCanvasTickFrame.getYValue());
	global_canvasFightingHero2D.drawImage(getImage("images/" + getItem("amulet", true) + "Equip.png", "hero_idle_amulet"), 0, global_idleFightingHeroCanvasTickFrame.getYValue());
	global_canvasFightingHero2D.drawImage(getImage("images/" + getItem("boots", true) + "Equip.png", "hero_idle_boots"), 0, 0);
	global_canvasFightingHero2D.drawImage(getImage("images/" + getItem("legs", true) + "Equip.png", "hero_idle_legs"), 0, global_idleFightingHeroCanvasTickFrame.getYValue() / 4);
	global_canvasFightingHero2D.drawImage(getImage("images/" + getItem("gloves", true) + "Equip.png", "hero_idle_gloves"), 0, global_idleFightingHeroCanvasTickFrame.getYValue());
	global_canvasFightingHero2D.drawImage(getImage("images/" + getItem("shield", true) + "Equip.png", "hero_fighting_shield"), 0, global_idleFightingHeroCanvasTickFrame.getYValue());
	global_canvasFightingHero2D.drawImage(getImage("images/" + getItem("weapon", true) + "Equip.png", "hero_fighting_weapon"), 0, global_idleFightingHeroCanvasTickFrame.getYValue());
	global_canvasFightingHero2D.drawImage(getImage("images/" + getItem("arrows", true) + "Equip.png", "hero_fighting_arrows"), 0, 0);
	global_heroHitAnimationHashSet.forEach((_0x4F4A) => _0x4F4A.draw(100, 350))
}