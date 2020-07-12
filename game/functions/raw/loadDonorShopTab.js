/**
 * loadDonorShopTab extracted from ../../deobfuscated/bundle.js at line 3475-3489
 *
 * If this file doesn't contain a function, there is an error in ../raw/loadDonorShopTab.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function loadDonorShopTab()
{
	var _0x1C83E = "";
	var _0x1C85A = "item-section-donorshop-1";
	document.getElementById(_0x1C85A).innerHTML = "";
	addItemBoxDonorShop("buyDonorCoins", "images/donorCoins.png", "BUY", 0, "tooltip-buyDonorCoins", _0x1C85A);
	addItemBoxDonorShop("donorPackage", "images/donorPackage.png", "ALL DONOR BUFFS", 15, "tooltip-donorPackage", _0x1C85A);
	addItemBoxDonorShop("woodcuttingPatch5", "images/woodcuttingSkill.png", "PATCH #5", 2, "tooltip-donorWoodcuttingPatch", _0x1C85A);
	addItemBoxDonorShop("woodcuttingPatch6", "images/woodcuttingSkill.png", "PATCH #6", 2, "tooltip-donorWoodcuttingPatch", _0x1C85A);
	addItemBoxDonorShop("farmingPlot5", "images/farmingSkill.png", "PATCH #5", 2, "tooltip-donorFarmingPlot", _0x1C85A);
	addItemBoxDonorShop("farmingPlot6", "images/farmingSkill.png", "PATCH #6", 2, "tooltip-donorFarmingPlot", _0x1C85A);
	addItemBoxDonorShop("moreOfflineTime", "images/hourglass.png", "12H OFFLINE TIME", 4, "tooltip-donorMoreOfflineTime", _0x1C85A);
	addItemBoxDonorShop("bonusXp", "images/globalSkill.png", "+10% XP", 5, "tooltip-donorBonusXp", _0x1C85A);
	refreshTooltips()
}