/**
 * HitAnimation extracted from ../../deobfuscated/bundle.js at line 10357-10448
 *
 * If this file doesn't contain a function, there is an error in ../raw/HitAnimation.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function HitAnimation(_0x1C796, _0x1C7B2, _0x1C77A, _0x1C742, _0x1C734, _0x1C788, _0x1C7A4)
{
	this.target = _0x1C796;
	this.number = _0x1C7B2;
	this.icon = _0x1C77A;
	this.color = _0x1C742;
	this.borderColor = _0x1C734;
	this.otherInfo = _0x1C788;
	this.time = _0x1C7A4;
	this.frameAt = 0;
	this.MAX_FRAMES = 60;
	this.getOffset = function ()
	{
		switch (this.frameAt)
		{
		case 0:
			return 0;
		case 1:
			return 1;
		case 2:
			return 2;
		case 3:
			return 4;
		case 4:
			return 6;
		case 5:
			return 9;
		case 6:
			return 12;
		case 7:
			return 15;
		case 8:
			return 19;
		case 9:
			return 24;
		case 10:
			return 29;
		case 11:
			return 35;
		case 12:
			return 40;
		case 13:
			return 58;
		case 14:
			return 68;
		default:
			return 75
		}
	};
	this.draw = function (_0x1D5EA, _0x1D5F8)
	{
		var _0x1D5CE = global_canvasFightingMonster2D;
		if (this.target == "hero")
		{
			_0x1D5CE = global_canvasFightingHero2D
		};
		var _0x1D5B2 = 80;
		var _0x1D5C0 = 130;
		var _0x1D5DC = 60;
		if (this.number.length > 1)
		{
			_0x1D5C0 = 160
		};
		if (this.icon == "images/coins.png")
		{
			_0x1D5C0 = 800;
			_0x1D5EA = 0
		};
		_0x1D5CE.fillStyle = _0x1C742;
		_0x1D5CE.globalAlpha = 0.5;
		_0x1D5CE.fillRect(_0x1D5EA, _0x1D5F8 - this.getOffset(), _0x1D5C0, _0x1D5B2);
		_0x1D5CE.globalAlpha = 1.0;
		_0x1D5CE.fillStyle = this.borderColor;
		_0x1D5CE.strokeRect(_0x1D5EA, _0x1D5F8 - this.getOffset(), _0x1D5C0, _0x1D5B2);
		_0x1D5CE.drawImage(getImage(this.icon, this.target + "_hitsplat"), _0x1D5EA, _0x1D5F8 - this.getOffset(), _0x1D5B2, _0x1D5B2);
		_0x1D5CE.font = "60px Arial";
		_0x1D5CE.fillStyle = "black";
		_0x1D5CE.fillText(this.number, _0x1D5EA + 130 - 45, _0x1D5F8 - this.getOffset() + 60);
		this.frameAt++;
		if (this.frameAt >= this.MAX_FRAMES)
		{
			if (this.target == "hero")
			{
				global_heroHitAnimationHashSet.delete(this)
			}
			else
			{
				global_monsterHitAnimationHashSet.delete(this)
			}
		}
	}
}