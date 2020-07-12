/**
 * clicksDonorShopItem extracted from ../../deobfuscated/bundle.js at line 5573-5596
 *
 * If this file doesn't contain a function, there is an error in ../raw/clicksDonorShopItem.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function clicksDonorShopItem(_0x1CF30)
{
	switch (_0x1CF30)
	{
	case "buyDonorCoins":
		$("<a href=\"transaction/donate.php?username=" + getItemString("username") + "\" target=\"_blank\"></a>")[0].click();
		break;
	case "donorPackage":
		;
	case "woodcuttingPatch5":
		;
	case "woodcuttingPatch6":
		;
	case "farmingPlot5":
		;
	case "farmingPlot6":
		;
	case "moreOfflineTime":
		;
	case "bonusXp":
		confirmDialogue("images/donorCoins.png", "Are you sure you want to purchase this?", "Purchase", "Cancel", "PURCHASE_DONOR=" + _0x1CF30);
		break
	}
}