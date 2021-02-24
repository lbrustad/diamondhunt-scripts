'use strict';

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
		var exprData = this.greenAnimationObject;
		var i = 0;
		for (; i < exprData.getNumberOfFrames(); i++)
		{
			var image = getImage("images/" + this.name + "_" + "monster" + "_" + exprData.name + "_" + exprData.framesArray[i] + ".png", this.name + "_" + i + "_" + exprData);
			$("#section-combat-loader").append(image);
		}
		exprData = this.blueAnimationObject;
		i = 0;
		for (; i < exprData.getNumberOfFrames(); i++)
		{
			image = getImage("images/" + this.name + "_" + "monster" + "_" + exprData.name + "_" + exprData.framesArray[i] + ".png", this.name + "_" + i + "_" + exprData);
			$("#section-combat-loader").append(image);
		}
		exprData = this.purpleAnimationObject;
		i = 0;
		for (; i < exprData.getNumberOfFrames(); i++)
		{
			image = getImage("images/" + this.name + "_" + "monster" + "_" + exprData.name + "_" + exprData.framesArray[i] + ".png", this.name + "_" + i + "_" + exprData);
			$("#section-combat-loader").append(image);
		}
		exprData = this.redAnimationObject;
		i = 0;
		for (; i < exprData.getNumberOfFrames(); i++)
		{
			image = getImage("images/" + this.name + "_" + "monster" + "_" + exprData.name + "_" + exprData.framesArray[i] + ".png", this.name + "_" + i + "_" + exprData);
			$("#section-combat-loader").append(image);
		}
		exprData = this.yellowAnimationObject;
		i = 0;
		for (; i < exprData.getNumberOfFrames(); i++)
		{
			image = getImage("images/" + this.name + "_" + "monster" + "_" + exprData.name + "_" + exprData.framesArray[i] + ".png", this.name + "_" + i + "_" + exprData);
			$("#section-combat-loader").append(image);
		}
	};
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			if (getItem("freezeTimer") == 0)
			{
				this.frameAt++;
			}
			if (this.frameAt >= animationObj.getNumberOfFrames())
			{
				this.frameAt = 0;
			}
			this.speedAt = 0;
		}
		else
		{
			this.speedAt++;
		}
	};
	this.getImage = function ()
	{
		return getImage("images/" + this.name + "_" + "monster" + "_" + this.currentAnimation.name + "_" + this.currentAnimation.framesArray[this.frameAt] + ".png", this.name + "_" + this.frameAt + "_" + this.currentAnimation);
	};
	this.getDeathImage = function ()
	{
		return getImage("images/" + this.name + "Monster_black.png", "images/" + this.name + "Monster_black.png");
	};
	this.getWidth = function ()
	{
		return this.getImage().width;
	};
	this.getHeight = function ()
	{
		return this.getImage().height;
	};
	this.callAnimation = function (canCreateDiscussions)
	{
		switch (canCreateDiscussions)
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
			break;
		}
	};
};
