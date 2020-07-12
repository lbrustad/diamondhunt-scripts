'use strict';

function resetAnimationOfCurrentFightToIdle()
{
	var self = getMonsterObject(getItemString("monsterName"));
	if (self != "none")
	{
		self.frameAt = 0;
		self.speedAt = 0;
		self.currentAnimation = self.idleAnimationObject;
	}
};
