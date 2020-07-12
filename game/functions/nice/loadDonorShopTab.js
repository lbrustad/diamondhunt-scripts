'use strict';

function loadDonorShopTab()
{
	var th_field = "";
	var SCROLL_ID = "item-section-donorshop-1";
	document.getElementById(SCROLL_ID).innerHTML = "";
	addItemBoxDonorShop("buyDonorCoins", "images/donorCoins.png", "BUY", 0, "tooltip-buyDonorCoins", SCROLL_ID);
	addItemBoxDonorShop("donorPackage", "images/donorPackage.png", "ALL DONOR BUFFS", 15, "tooltip-donorPackage", SCROLL_ID);
	addItemBoxDonorShop("woodcuttingPatch5", "images/woodcuttingSkill.png", "PATCH #5", 2, "tooltip-donorWoodcuttingPatch", SCROLL_ID);
	addItemBoxDonorShop("woodcuttingPatch6", "images/woodcuttingSkill.png", "PATCH #6", 2, "tooltip-donorWoodcuttingPatch", SCROLL_ID);
	addItemBoxDonorShop("farmingPlot5", "images/farmingSkill.png", "PATCH #5", 2, "tooltip-donorFarmingPlot", SCROLL_ID);
	addItemBoxDonorShop("farmingPlot6", "images/farmingSkill.png", "PATCH #6", 2, "tooltip-donorFarmingPlot", SCROLL_ID);
	addItemBoxDonorShop("moreOfflineTime", "images/hourglass.png", "12H OFFLINE TIME", 4, "tooltip-donorMoreOfflineTime", SCROLL_ID);
	addItemBoxDonorShop("bonusXp", "images/globalSkill.png", "+10% XP", 5, "tooltip-donorBonusXp", SCROLL_ID);
	refreshTooltips();
};
