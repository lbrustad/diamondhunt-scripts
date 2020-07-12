'use strict';

function fightingMonsterCanvasTick()
{
	if (global_lastTabId != "right-combat-fighting")
	{
		return;
	}
	var mergedPiskel = getMonsterObject(getItem("monsterName"));
	if (mergedPiskel == "none")
	{
		return;
	}
	global_canvasFightingMonster2D.clearRect(0, 0, global_canvasFightingMonster.width, global_canvasFightingMonster.height);
	if (getItem("monsterHp") == 0)
	{
		global_canvasFightingMonster2D.globalAlpha = 0.5;
		global_canvasFightingMonster2D.drawImage(mergedPiskel.getDeathImage(), 50, global_canvasFightingMonster.height - mergedPiskel.getHeight() - 50);
	}
	else
	{
		global_canvasFightingMonster2D.globalAlpha = 1.0;
		x = 50;
		y = global_canvasFightingMonster.height - mergedPiskel.getHeight() - 50;
		if (global_monsterShake)
		{
			x = x + getRandomInt(10);
			y = y + getRandomInt(10);
		}
		global_canvasFightingMonster2D.shadowBlur = 15;
		global_canvasFightingMonster2D.shadowColor = "black";
		global_canvasFightingMonster2D.drawImage(mergedPiskel.getImage(), x, y);
		if (getItem("combatCountDown") > 0)
		{
			global_canvasFightingMonster2D.font = "30px Arial";
			global_canvasFightingMonster2D.fillStyle = "yellow";
			global_canvasFightingMonster2D.fillText("Fighting in: " + getItem("combatCountDown"), 0, 200);
		}
	}
	mergedPiskel.tick();
	global_monsterHitAnimationHashSet.forEach(function (barline)
	{
		return barline.draw(50 + mergedPiskel.getWidth() / 2.5, global_canvasFightingMonster.height - mergedPiskel.getHeight() / 1.5);
	});
};
