/**
 * SpiderMonster extracted from ../../deobfuscated/bundle.js at line 9231-9292
 *
 * If this file doesn't contain a function, there is an error in ../raw/SpiderMonster.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function SpiderMonster()
{
	this.name = "spider";
	this.idleAnimationObject = new MonsterAnimation("idle", [0], 24);
	this.secondaryAnimationObject = new MonsterAnimation("poison", [0, 1, 2, 3, 0, 0, 0, 0, 0], 4);
	this.frameAt = 0;
	this.speedAt = 0;
	this.currentAnimation = this.idleAnimationObject;
	this.preloadImages = function ()
	{
		var _0x1CC12 = this.idleAnimationObject;
		for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1CC12.getNumberOfFrames(); _0x1C6B6++)
		{
			var _0x1CC20 = getImage("images/" + this.name + "_" + "monster" + "_" + _0x1CC12.name + "_" + _0x1CC12.framesArray[_0x1C6B6] + ".png", this.name + "_" + _0x1C6B6 + "_" + _0x1CC12);
			$("#section-combat-loader").append(_0x1CC20)
		}
	};
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			this.frameAt++;
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
	this.callAnimation = function (_0x1CC2E)
	{
		switch (_0x1CC2E)
		{
		case 1:
			this.frameAt = 0;
			this.speedAt = 0;
			this.currentAnimation = this.secondaryAnimationObject;
			break
		}
	}
}