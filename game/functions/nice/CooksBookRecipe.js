'use strict';

function CooksBookRecipe(kind, skill, skillLevel, isAvatar, environmentVariable, description, parametrizedComponentFactories, isSlidingUp, $cont)
{
	this.itemName = kind;
	this.skill = skill;
	this.skillLevel = skillLevel;
	this.recipe = isAvatar;
	this.recipeCost = environmentVariable;
	this.description = description;
	this.isMultiCraft = parametrizedComponentFactories;
	this.itemNameDisplay = isSlidingUp;
	this.timeToPrep = $cont;
};
