'use strict';

function HitAnimation(result, num, div, value, color, t, data)
{
	this.target = result;
	this.number = num;
	this.icon = div;
	this.color = value;
	this.borderColor = color;
	this.otherInfo = t;
	this.time = data;
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
			return 75;
		}
	};
	this.draw = function (x, y)
	{
		var ctx = global_canvasFightingMonster2D;
		if (this.target == "hero")
		{
			ctx = global_canvasFightingHero2D;
		}
		var size = 80;
		var legendWidth = 130;
		var _a_ = 60;
		if (this.number.length > 1)
		{
			legendWidth = 160;
		}
		if (this.number.length == 3)
		{
			legendWidth = 200;
		}
		if (this.number == "Miss")
		{
			legendWidth = 240;
		}
		if (this.number == "Immune")
		{
			legendWidth = 330;
		}
		if (this.icon == "images/coins.png")
		{
			legendWidth = 800;
			x = 0;
		}
		if (this.icon == "images/invisibilityIcon.png")
		{
			legendWidth = 240;
			x = 0;
		}
		if (this.icon == "images/invisibilityAmulet.png")
		{
			legendWidth = 240;
			x = 0;
		}
		if (this.icon == "images/bushyBlockIcon.png")
		{
			legendWidth = 250;
			x = 0;
		}
		if (this.icon == "images/deadIcon.png")
		{
			legendWidth = 300;
			x = 0;
		}
		if (this.icon == "images/stab_dark.png")
		{
			legendWidth = 250;
			x = 0;
		}
		if (this.number.endsWith("/30)"))
		{
			legendWidth = 330;
			x = 0;
		}
		if (this.number == "")
		{
			legendWidth = 80;
		}
		if (this.number.length == 10)
		{
			legendWidth = 350;
		}
		ctx.fillStyle = value;
		ctx.globalAlpha = 0.5;
		ctx.fillRect(x, y - this.getOffset(), legendWidth, size);
		ctx.globalAlpha = 1.0;
		ctx.fillStyle = this.borderColor;
		ctx.strokeRect(x, y - this.getOffset(), legendWidth, size);
		ctx.drawImage(getImage(this.icon, this.target + "_hitsplat"), x, y - this.getOffset(), size, size);
		if (this.number.length == 10)
		{
			ctx.font = "30px Arial";
		}
		else
		{
			ctx.font = "60px Arial";
		}
		ctx.fillStyle = "black";
		if (this.number.length == 10)
		{
			ctx.fillText(this.number, x + 130 - 45, y - this.getOffset() - 12 + 60);
		}
		else
		{
			ctx.fillText(this.number, x + 130 - 45, y - this.getOffset() + 60);
		}
		this.frameAt++;
		if (this.frameAt >= this.MAX_FRAMES)
		{
			if (this.target == "hero")
			{
				global_heroHitAnimationHashSet.delete(this);
			}
			else
			{
				global_monsterHitAnimationHashSet.delete(this);
			}
		}
	};
};
