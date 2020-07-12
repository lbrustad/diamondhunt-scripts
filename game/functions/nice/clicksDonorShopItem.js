'use strict';

function clicksDonorShopItem(canCreateDiscussions)
{
	switch (canCreateDiscussions)
	{
	case "buyDonorCoins":
		$('<a href="transaction/donate.php?username=' + getItemString("username") + '" target="_blank"></a>')[0].click();
		break;
	case "donorPackage":
	case "woodcuttingPatch5":
	case "woodcuttingPatch6":
	case "farmingPlot5":
	case "farmingPlot6":
	case "moreOfflineTime":
	case "bonusXp":
		confirmDialogue("images/donorCoins.png", "Are you sure you want to purchase this?", "Purchase", "Cancel", "PURCHASE_DONOR=" + canCreateDiscussions);
		break;
	}
};
