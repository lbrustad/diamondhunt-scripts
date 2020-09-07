/**
 * FireMageMonster extracted from ../../deobfuscated/bundle.js at line 12243-12295
 *
 * If this file doesn't contain a function, there is an error in ../raw/FireMageMonster.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function FireMageMonster()
{
	this.name = "fireMage";
	this.idleAnimationObject = new MonsterAnimation("idle", [0, 1, 2], 12);
	this.frameAt = 0;
	this.speedAt = 0;
	this.currentAnimation = this.idleAnimationObject;
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
	this.preloadImages = function ()
	{
		var _0x413E = this.idleAnimationObject;
		for (var _0x3607 = 0; _0x3607 < _0x413E.getNumberOfFrames(); _0x3607++)
		{
			var _0x415B = getImage("images/" + this.name + "_" + "monster" + "_" + _0x413E.name + "_" + _0x413E.framesArray[_0x3607] + ".png", this.name + "_" + [_0x3607] + "_" + _0x413E);
			$("#section-combat-loader").append(_0x415B)
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
	}
}