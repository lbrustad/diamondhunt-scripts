'use strict';

function CraftingRecipe(kind, skill, skillLevel, isAvatar, environmentVariable, description, train_state, language)
{
	this.itemName = kind;
	this.skill = skill;
	this.skillLevel = skillLevel;
	this.recipe = isAvatar;
	this.recipeCost = environmentVariable;
	this.description = description;
	this.isMultiCraft = train_state;
	this.itemNameDisplay = language;
};
