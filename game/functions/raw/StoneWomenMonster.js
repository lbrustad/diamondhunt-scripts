/**
 * StoneWomenMonster extracted from ../../deobfuscated/bundle.js at line 15504-15621
 *
 * If this file doesn't contain a function, there is an error in ../raw/StoneWomenMonster.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function StoneWomenMonster()
{
	this.name = "stoneWomen";
	this.idleAnimationObject = new MonsterAnimation("idle", [0], 24);
	this.greenAnimationObject = new MonsterAnimation("green", [0], 24);
	this.blueAnimationObject = new MonsterAnimation("blue", [0], 24);
	this.purpleAnimationObject = new MonsterAnimation("purple", [0], 24);
	this.redAnimationObject = new MonsterAnimation("red", [0], 24);
	this.yellowAnimationObject = new MonsterAnimation("yellow", [0], 24);
	this.frameAt = 0;
	this.speedAt = 0;
	this.currentAnimation = this.idleAnimationObject;
	this.preloadImages = function ()
	{
		var _0x159B8 = this.greenAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x14C0C + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		};
		var _0x159B8 = this.blueAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x14C0C + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		};
		var _0x159B8 = this.purpleAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x14C0C + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		};
		var _0x159B8 = this.redAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x14C0C + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		};
		var _0x159B8 = this.yellowAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x14C0C + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		}
	};
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			if (getItem("freezeTimer") == 0)
			{
				this.frameAt++
			};
			if (this.frameAt >= animationObj.getNumberOfFrames())
			{
				this.frameAt = 0
			};
			this.speedAt = 0
		}
		else
		{
			this.speedAt++
		}
	};
	this.getImage = function ()
	{
		return getImage("images/" + this.name + "_" + "monster" + "_" + this.currentAnimation.name + "_" + this.currentAnimation.framesArray[this.frameAt] + ".png", this.name + "_" + this.frameAt + "_" + this.currentAnimation)
	};
	this.getDeathImage = function ()
	{
		return getImage("images/" + this.name + "Monster_black.png", "images/" + this.name + "Monster_black.png")
	};
	this.getWidth = function ()
	{
		return this.getImage().width
	};
	this.getHeight = function ()
	{
		return this.getImage().height
	};
	this.callAnimation = function (_0x159FE)
	{
		switch (_0x159FE)
		{
		case 1:
			this.frameAt = 0;
			this.speedAt = 0;
			this.currentAnimation = this.greenAnimationObject;
			break;
		case 2:
			this.frameAt = 0;
			this.speedAt = 0;
			this.currentAnimation = this.blueAnimationObject;
			break;
		case 3:
			this.frameAt = 0;
			this.speedAt = 0;
			this.currentAnimation = this.purpleAnimationObject;
			break;
		case 4:
			this.frameAt = 0;
			this.speedAt = 0;
			this.currentAnimation = this.redAnimationObject;
			break;
		case 5:
			this.frameAt = 0;
			this.speedAt = 0;
			this.currentAnimation = this.yellowAnimationObject;
			break;
		default:
			this.frameAt = 0;
			this.speedAt = 0;
			this.currentAnimation = this.idleAnimationObject;
			break
		}
	}
}