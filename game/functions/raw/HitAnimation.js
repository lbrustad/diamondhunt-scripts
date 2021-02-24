/**
 * HitAnimation extracted from ../../deobfuscated/bundle.js at line 17639-17794
 *
 * If this file doesn't contain a function, there is an error in ../raw/HitAnimation.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function HitAnimation(_0x14E5F, _0x14EA5, _0x14E19, _0x14D8D, _0x14D6A, _0x14E3C, _0x14E82)
{
	this.target = _0x14E5F;
	this.number = _0x14EA5;
	this.icon = _0x14E19;
	this.color = _0x14D8D;
	this.borderColor = _0x14D6A;
	this.otherInfo = _0x14E3C;
	this.time = _0x14E82;
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
	this.draw = function (_0x177EF, _0x17812)
	{
		var _0x177A9 = global_canvasFightingMonster2D;
		if (this.target == "hero")
		{
			_0x177A9 = global_canvasFightingHero2D
		};
		var _0x17763 = 80;
		var _0x17786 = 130;
		var _0x177CC = 60;
		if (this.number.length > 1)
		{
			_0x17786 = 160
		};
		if (this.number.length == 3)
		{
			_0x17786 = 200
		};
		if (this.number == "Miss")
		{
			_0x17786 = 240
		};
		if (this.number == "Immune")
		{
			_0x17786 = 330
		};
		if (this.icon == "images/coins.png")
		{
			_0x17786 = 800;
			_0x177EF = 0
		};
		if (this.icon == "images/invisibilityIcon.png")
		{
			_0x17786 = 240;
			_0x177EF = 0
		};
		if (this.icon == "images/invisibilityAmulet.png")
		{
			_0x17786 = 240;
			_0x177EF = 0
		};
		if (this.icon == "images/bushyBlockIcon.png")
		{
			_0x17786 = 250;
			_0x177EF = 0
		};
		if (this.icon == "images/deadIcon.png")
		{
			_0x17786 = 300;
			_0x177EF = 0
		};
		if (this.icon == "images/stab_dark.png")
		{
			_0x17786 = 250;
			_0x177EF = 0
		};
		if (this.number.endsWith("/30)"))
		{
			_0x17786 = 330;
			_0x177EF = 0
		};
		if (this.number == "")
		{
			_0x17786 = 80
		};
		if (this.number.length == 10)
		{
			_0x17786 = 350
		};
		_0x177A9.fillStyle = _0x14D8D;
		_0x177A9.globalAlpha = 0.5;
		_0x177A9.fillRect(_0x177EF, _0x17812 - this.getOffset(), _0x17786, _0x17763);
		_0x177A9.globalAlpha = 1.0;
		_0x177A9.fillStyle = this.borderColor;
		_0x177A9.strokeRect(_0x177EF, _0x17812 - this.getOffset(), _0x17786, _0x17763);
		_0x177A9.drawImage(getImage(this.icon, this.target + "_hitsplat"), _0x177EF, _0x17812 - this.getOffset(), _0x17763, _0x17763);
		if (this.number.length == 10)
		{
			_0x177A9.font = "30px Arial"
		}
		else
		{
			_0x177A9.font = "60px Arial"
		};
		_0x177A9.fillStyle = "black";
		if (this.number.length == 10)
		{
			_0x177A9.fillText(this.number, _0x177EF + 130 - 45, _0x17812 - this.getOffset() - 12 + 60)
		}
		else
		{
			_0x177A9.fillText(this.number, _0x177EF + 130 - 45, _0x17812 - this.getOffset() + 60)
		};
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