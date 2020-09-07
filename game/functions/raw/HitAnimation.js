/**
 * HitAnimation extracted from ../../deobfuscated/bundle.js at line 14234-14384
 *
 * If this file doesn't contain a function, there is an error in ../raw/HitAnimation.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function HitAnimation(_0x37D7, _0x3811, _0x379D, _0x3729, _0x370C, _0x37BA, _0x37F4)
{
	this.target = _0x37D7;
	this.number = _0x3811;
	this.icon = _0x379D;
	this.color = _0x3729;
	this.borderColor = _0x370C;
	this.otherInfo = _0x37BA;
	this.time = _0x37F4;
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
	this.draw = function (_0x5820, _0x583D)
	{
		var _0x57E6 = global_canvasFightingMonster2D;
		if (this.target == "hero")
		{
			_0x57E6 = global_canvasFightingHero2D
		};
		var _0x57AC = 80;
		var _0x57C9 = 130;
		var _0x5803 = 60;
		if (this.number.length > 1)
		{
			_0x57C9 = 160
		};
		if (this.number.length == 3)
		{
			_0x57C9 = 200
		};
		if (this.number == "Miss")
		{
			_0x57C9 = 240
		};
		if (this.number == "Immune")
		{
			_0x57C9 = 330
		};
		if (this.icon == "images/coins.png")
		{
			_0x57C9 = 800;
			_0x5820 = 0
		};
		if (this.icon == "images/invisibilityIcon.png")
		{
			_0x57C9 = 240;
			_0x5820 = 0
		};
		if (this.icon == "images/invisibilityAmulet.png")
		{
			_0x57C9 = 240;
			_0x5820 = 0
		};
		if (this.icon == "images/bushyBlockIcon.png")
		{
			_0x57C9 = 250;
			_0x5820 = 0
		};
		if (this.icon == "images/stab_dark.png")
		{
			_0x57C9 = 250;
			_0x5820 = 0
		};
		if (this.number.endsWith("/30)"))
		{
			_0x57C9 = 330;
			_0x5820 = 0
		};
		if (this.number == "")
		{
			_0x57C9 = 80
		};
		if (this.number.length == 10)
		{
			_0x57C9 = 350
		};
		_0x57E6.fillStyle = _0x3729;
		_0x57E6.globalAlpha = 0.5;
		_0x57E6.fillRect(_0x5820, _0x583D - this.getOffset(), _0x57C9, _0x57AC);
		_0x57E6.globalAlpha = 1.0;
		_0x57E6.fillStyle = this.borderColor;
		_0x57E6.strokeRect(_0x5820, _0x583D - this.getOffset(), _0x57C9, _0x57AC);
		_0x57E6.drawImage(getImage(this.icon, this.target + "_hitsplat"), _0x5820, _0x583D - this.getOffset(), _0x57AC, _0x57AC);
		if (this.number.length == 10)
		{
			_0x57E6.font = "30px Arial"
		}
		else
		{
			_0x57E6.font = "60px Arial"
		};
		_0x57E6.fillStyle = "black";
		if (this.number.length == 10)
		{
			_0x57E6.fillText(this.number, _0x5820 + 130 - 45, _0x583D - this.getOffset() - 12 + 60)
		}
		else
		{
			_0x57E6.fillText(this.number, _0x5820 + 130 - 45, _0x583D - this.getOffset() + 60)
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