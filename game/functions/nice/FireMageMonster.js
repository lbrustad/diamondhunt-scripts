'use strict';

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
			this.frameAt++;
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
	this.preloadImages = function ()
	{
		var processorState = this.idleAnimationObject;
		var quanti = 0;
		for (; quanti < processorState.getNumberOfFrames(); quanti++)
		{
			var img = getImage("images/" + this.name + "_" + "monster" + "_" + processorState.name + "_" + processorState.framesArray[quanti] + ".png", this.name + "_" + [quanti] + "_" + processorState);
			$("#section-combat-loader").append(img);
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
