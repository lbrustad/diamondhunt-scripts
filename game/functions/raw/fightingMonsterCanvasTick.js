/**
 * fightingMonsterCanvasTick extracted from ../../deobfuscated/bundle.js at line 10450-10489
 *
 * If this file doesn't contain a function, there is an error in ../raw/fightingMonsterCanvasTick.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function fightingMonsterCanvasTick()
{
	if (global_lastTabId != "right-combat-fighting")
	{
		return
	};
	var _0x1D216 = getMonsterObject(getItem("monsterName"));
	if (_0x1D216 == "none")
	{
		return
	};
	global_canvasFightingMonster2D.clearRect(0, 0, global_canvasFightingMonster.width, global_canvasFightingMonster.height);
	if (getItem("monsterHp") == 0)
	{
		global_canvasFightingMonster2D.globalAlpha = 0.5;
		global_canvasFightingMonster2D.drawImage(_0x1D216.getDeathImage(), 50, global_canvasFightingMonster.height - _0x1D216.getHeight() - 50)
	}
	else
	{
		global_canvasFightingMonster2D.globalAlpha = 1.0;
		x = 50;
		y = global_canvasFightingMonster.height - _0x1D216.getHeight() - 50;
		if (global_monsterShake)
		{
			x += getRandomInt(10);
			y += getRandomInt(10)
		};
		global_canvasFightingMonster2D.shadowBlur = 15;
		global_canvasFightingMonster2D.shadowColor = "black";
		global_canvasFightingMonster2D.drawImage(_0x1D216.getImage(), x, y);
		if (getItem("combatCountDown") > 0)
		{
			global_canvasFightingMonster2D.font = "30px Arial";
			global_canvasFightingMonster2D.fillStyle = "yellow";
			global_canvasFightingMonster2D.fillText("Fighting in: " + getItem("combatCountDown"), 0, 200)
		}
	};
	_0x1D216.tick();
	global_monsterHitAnimationHashSet.forEach((_0x1D224) => _0x1D224.draw(50 + _0x1D216.getWidth() / 2.5, global_canvasFightingMonster.height - _0x1D216.getHeight() / 1.5))
}