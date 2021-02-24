'use strict';

function Knight5Monster()
{
	this.name = "knight5";
	this.idleAnimationObject = new MonsterAnimation("idle", [0, 1, 2, 3], 10);
	this.meleeAnimationObject = new MonsterAnimation("melee", [0, 1, 2, 3], 10);
	this.rangeAnimationObject = new MonsterAnimation("range", [0, 1, 2, 3], 10);
	this.mageAnimationObject = new MonsterAnimation("magic", [0, 1, 2, 3], 10);
	this.frameAt = 0;
	this.speedAt = 0;
	this.currentAnimation = this.idleAnimationObject;
	this.preloadImages = function ()
	{
		var exprData = this.idleAnimationObject;
		var i = 0;
		for (; i < exprData.getNumberOfFrames(); i++)
		{
			var image = getImage("images/" + this.name + "_" + "monster" + "_" + exprData.name + "_" + exprData.framesArray[i] + ".png", this.name + "_" + i + "_" + exprData);
			$("#section-combat-loader").append(image);
		}
		exprData = this.mageAnimationObject;
		i = 0;
		for (; i < exprData.getNumberOfFrames(); i++)
		{
			image = getImage("images/" + this.name + "_" + "monster" + "_" + exprData.name + "_" + exprData.framesArray[i] + ".png", this.name + "_" + i + "_" + exprData);
			$("#section-combat-loader").append(image);
		}
		exprData = this.rangeAnimationObject;
		i = 0;
		for (; i < exprData.getNumberOfFrames(); i++)
		{
			image = getImage("images/" + this.name + "_" + "monster" + "_" + exprData.name + "_" + exprData.framesArray[i] + ".png", this.name + "_" + i + "_" + exprData);
			$("#section-combat-loader").append(image);
		}
		exprData = this.meleeAnimationObject;
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
	this.callAnimation = function (canCreateDiscussions)
	{
		switch (canCreateDiscussions)
		{
		case 1:
			this.frameAt = 0;
			this.speedAt = 0;
			this.currentAnimation = this.meleeAnimationObject;
			break;
		case 2:
			this.frameAt = 0;
			this.speedAt = 0;
			this.currentAnimation = this.rangeAnimationObject;
			break;
		case 3:
			this.frameAt = 0;
			this.speedAt = 0;
			this.currentAnimation = this.mageAnimationObject;
			break;
		default:
			this.frameAt = 0;
			this.speedAt = 0;
			this.currentAnimation = this.idleAnimationObject;
			break;
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
};
