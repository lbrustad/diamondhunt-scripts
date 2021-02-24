'use strict';

function TridentSharkMonster()
{
	this.name = "tridentShark";
	this.hideAnimationObject = new MonsterAnimation("bite", [0], 100);
	this.idleAnimationObject = new MonsterAnimation("idle", [0, 1], 24);
	this.yellowAnimationObject = new MonsterAnimation("yellow", [0, 1, 2], 50);
	this.greenAnimationObject = new MonsterAnimation("green", [0, 1, 2], 50);
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
		exprData = this.hideAnimationObject;
		i = 0;
		for (; i < exprData.getNumberOfFrames(); i++)
		{
			image = getImage("images/" + this.name + "_" + "monster" + "_" + exprData.name + "_" + exprData.framesArray[i] + ".png", this.name + "_" + exprData.framesArray[i] + "_" + exprData);
			$("#section-combat-loader").append(image);
		}
		exprData = this.yellowAnimationObject;
		i = 0;
		for (; i < exprData.getNumberOfFrames(); i++)
		{
			image = getImage("images/" + this.name + "_" + "monster" + "_" + exprData.name + "_" + exprData.framesArray[i] + ".png", this.name + "_" + exprData.framesArray[i] + "_" + exprData);
			$("#section-combat-loader").append(image);
		}
		exprData = this.greenAnimationObject;
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
			this.currentAnimation = this.hideAnimationObject;
			break;
		case 2:
			this.frameAt = 0;
			this.speedAt = 0;
			this.currentAnimation = this.yellowAnimationObject;
			break;
		case 3:
			this.frameAt = 0;
			this.speedAt = 0;
			this.currentAnimation = this.greenAnimationObject;
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