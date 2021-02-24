'use strict';

function CorruptedKnightMonster()
{
	this.name = "corruptedKnight";
	this.idleAnimationObject = new MonsterAnimation("idle", [0, 1], 24);
	this.fireAnimationObject = new MonsterAnimation("fire", [0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0], 10);
	this.smokeAnimationObject = new MonsterAnimation("smoke", [0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2], 10);
	this.shieldAnimationObject = new MonsterAnimation("shield", [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 50);
	this.talkAnimationObject = new MonsterAnimation("talk", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 300);
	this.frameAt = 0;
	this.speedAt = 0;
	this.currentAnimation = this.idleAnimationObject;
	this.preloadImages = function ()
	{
		var exprData = this.idleAnimationObject;
		var i = 0;
		for (; i < exprData.getNumberOfFrames(); i++)
		{
			var image = getImage("images/" + this.name + "_" + "monster" + "_" + exprData.name + "_" + exprData.framesArray[i] + ".png", this.name + "_" + exprData.framesArray[i] + "_" + exprData);
			$("#section-combat-loader").append(image);
		}
		exprData = this.fireAnimationObject;
		i = 0;
		for (; i < exprData.getNumberOfFrames(); i++)
		{
			image = getImage("images/" + this.name + "_" + "monster" + "_" + exprData.name + "_" + exprData.framesArray[i] + ".png", this.name + "_" + exprData.framesArray[i] + "_" + exprData);
			$("#section-combat-loader").append(image);
		}
		exprData = this.smokeAnimationObject;
		i = 0;
		for (; i < exprData.getNumberOfFrames(); i++)
		{
			image = getImage("images/" + this.name + "_" + "monster" + "_" + exprData.name + "_" + exprData.framesArray[i] + ".png", this.name + "_" + exprData.framesArray[i] + "_" + exprData);
			$("#section-combat-loader").append(image);
		}
		exprData = this.shieldAnimationObject;
		i = 0;
		for (; i < exprData.getNumberOfFrames(); i++)
		{
			image = getImage("images/" + this.name + "_" + "monster" + "_" + exprData.name + "_" + exprData.framesArray[i] + ".png", this.name + "_" + exprData.framesArray[i] + "_" + exprData);
			$("#section-combat-loader").append(image);
		}
		exprData = this.talkAnimationObject;
		i = 0;
		for (; i < exprData.getNumberOfFrames(); i++)
		{
			image = getImage("images/" + this.name + "_" + "monster" + "_" + exprData.name + "_" + exprData.framesArray[i] + ".png", this.name + "_" + exprData.framesArray[i] + "_" + exprData);
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
				if (this.currentAnimation.name != "idle")
				{
					this.currentAnimation = this.idleAnimationObject;
				}
			}
			this.speedAt = 0;
		}
		else
		{
			this.speedAt++;
		}
	};
	this.callAnimation = function (animate_param)
	{
		console.log(animate_param);
		switch (animate_param)
		{
		case 1:
			this.frameAt = 0;
			this.speedAt = 0;
			this.currentAnimation = this.fireAnimationObject;
			break;
		case 2:
			this.frameAt = 0;
			this.speedAt = 0;
			this.currentAnimation = this.smokeAnimationObject;
			break;
		case 3:
			this.frameAt = 0;
			this.speedAt = 0;
			this.currentAnimation = this.shieldAnimationObject;
			break;
		case 4:
			this.frameAt = 0;
			this.speedAt = 0;
			this.currentAnimation = this.talkAnimationObject;
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
