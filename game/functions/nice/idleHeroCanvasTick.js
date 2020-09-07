'use strict';

function idleHeroCanvasTick()
{
	if (global_lastTabId != "right-combat")
	{
		return;
	}
	global_canvasIdleHero2D.clearRect(0, 0, global_canvasIdleHero.width, global_canvasIdleHero.height);
	if (!variableExists("global_idleHeroCanvasTickFrame"))
	{
		global_idleHeroCanvasTickFrame = new idleHeroCanvasTickFrame;
	}
	global_idleHeroCanvasTickFrame.tick();
	global_canvasIdleHero2D.drawImage(getImage("images/" + getItem("body", true) + "Equip.png", "hero_idle_body"), 0, global_idleHeroCanvasTickFrame.getYValue());
	global_canvasIdleHero2D.drawImage(getImage("images/" + getItem("head", true) + "Equip.png", "hero_idle_head"), 0, global_idleHeroCanvasTickFrame.getYValue());
	global_canvasIdleHero2D.drawImage(getImage("images/" + getItem("amulet", true) + "Equip.png", "hero_idle_amulet"), 0, global_idleHeroCanvasTickFrame.getYValue());
	global_canvasIdleHero2D.drawImage(getImage("images/" + getItem("boots", true) + "Equip.png", "hero_idle_boots"), 0, 0);
	global_canvasIdleHero2D.drawImage(getImage("images/" + getItem("legs", true) + "Equip.png", "hero_idle_legs"), 0, global_idleHeroCanvasTickFrame.getYValue() / 4);
	global_canvasIdleHero2D.drawImage(getImage("images/" + getItem("gloves", true) + "Equip.png", "hero_idle_gloves"), 0, global_idleHeroCanvasTickFrame.getYValue());
	global_canvasIdleHero2D.drawImage(getImage("images/" + getItem("shield", true) + "Equip.png", "hero_idle_shield"), 0, global_idleHeroCanvasTickFrame.getYValue());
	global_canvasIdleHero2D.drawImage(getImage("images/" + getItem("weapon", true) + "Equip.png", "hero_idle_weapon"), 0, global_idleHeroCanvasTickFrame.getYValue());
	global_canvasIdleHero2D.drawImage(getImage("images/" + getItem("arrows", true) + "Equip.png", "hero_idle_arrows"), 0, 0);
};
