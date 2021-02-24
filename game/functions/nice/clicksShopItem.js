'use strict';

function clicksShopItem(sPrefix)
{
	switch (sPrefix)
	{
	case "rustySword":
	{
		var totalAssertions = 15;
		var artistTrack = "Purchase a <span style='color:brown'>Rusty sword</span> for <img src='images/coins.png' class='img-30' /> " + totalAssertions + " coins?";
		confirmDialogue("images/" + sPrefix + ".png", artistTrack, "Purchase", "Cancel", "SHOP=" + sPrefix);
	}
	break;
	case "apple":
	{
		totalAssertions = 5;
		artistTrack = "Purchase <span style='color:brown'>25 apples</span> for <img src='images/coins.png' class='img-30' /> " + totalAssertions + " coins?";
		confirmDialogue("images/" + sPrefix + ".png", artistTrack, "Purchase", "Cancel", "SHOP=" + sPrefix);
	}
	break;
	case "storeBananas":
	{
		totalAssertions = 50;
		artistTrack = "Purchase <span style='color:brown'>10 bananas</span> for <img src='images/coins.png' class='img-30' /> " + totalAssertions + " coins?";
		confirmDialogue("images/" + sPrefix + ".png", artistTrack, "Purchase", "Cancel", "SHOP=" + sPrefix);
	}
	break;
	case "stardustPickaxe":
	{
		totalAssertions = 100;
		artistTrack = "Purchase <span style='color:brown'>stardust pickaxe</span> for <img src='images/coins.png' class='img-30' /> " + totalAssertions + " coins?";
		confirmDialogue("images/" + sPrefix + ".png", artistTrack, "Purchase", "Cancel", "SHOP=" + sPrefix);
	}
	break;
	case "stardustHammer":
	{
		totalAssertions = 400;
		artistTrack = "Purchase <span style='color:brown'>stardust hammer</span> for <img src='images/coins.png' class='img-30' /> " + totalAssertions + " coins?";
		confirmDialogue("images/" + sPrefix + ".png", artistTrack, "Purchase", "Cancel", "SHOP=" + sPrefix);
	}
	break;
	case "woodenShield":
	{
		totalAssertions = 1500;
		artistTrack = "Purchase <span style='color:brown'>wooden shield</span> for <img src='images/coins.png' class='img-30' /> " + totalAssertions + " coins?";
		confirmDialogue("images/" + sPrefix + ".png", artistTrack, "Purchase", "Cancel", "SHOP=" + sPrefix);
	}
	break;
	case "carePackage1":
	{
		totalAssertions = 150;
		artistTrack = "Purchase <span style='color:brown'>care package</span> for <img src='images/coins.png' class='img-30' /> " + totalAssertions + " coins?";
		confirmDialogue("images/" + sPrefix + ".png", artistTrack, "Purchase", "Cancel", "SHOP=" + sPrefix);
	}
	break;
	case "lumberJack":
	{
		totalAssertions = 250;
		artistTrack = "Hire <span style='color:brown'>lumberjack</span> for <img src='images/coins.png' class='img-30' /> " + totalAssertions + " coins?";
		confirmDialogue("images/" + sPrefix + ".png", artistTrack, "Purchase", "Cancel", "SHOP=" + sPrefix);
	}
	break;
	case "carePackage2":
	{
		totalAssertions = 1000;
		artistTrack = "Purchase <span style='color:brown'>care package</span> for <img src='images/coins.png' class='img-30' /> " + totalAssertions + " coins?";
		confirmDialogue("images/" + sPrefix + ".png", artistTrack, "Purchase", "Cancel", "SHOP=" + sPrefix);
	}
	break;
	case "carePackage3":
	{
		totalAssertions = 85000;
		artistTrack = "Purchase <span style='color:brown'>care package</span> for <img src='images/coins.png' class='img-30' /> " + formatNumber(totalAssertions) + " coins?";
		confirmDialogue("images/" + sPrefix + ".png", artistTrack, "Purchase", "Cancel", "SHOP=" + sPrefix);
	}
	break;
	case "carePackage4":
	{
		totalAssertions = 100000;
		artistTrack = "Purchase <span style='color:brown'>care package</span> for <img src='images/coins.png' class='img-30' /> " + formatNumber(totalAssertions) + " coins?";
		confirmDialogue("images/" + sPrefix + ".png", artistTrack, "Purchase", "Cancel", "SHOP=" + sPrefix);
	}
	break;
	case "pirate":
	{
		totalAssertions = 500000;
		artistTrack = "Hire a <span style='color:brown'>Pirate</span> for <img src='images/coins.png' class='img-30' /> " + formatNumber(totalAssertions) + " coins?";
		confirmDialogue("images/" + sPrefix + ".png", artistTrack, "Purchase", "Cancel", "SHOP=" + sPrefix);
	}
	break;
	case "piratesParrot":
	{
		totalAssertions = 500000;
		artistTrack = "Buy a parrot for your pirate at " + formatNumber(totalAssertions) + " coins?<br /><br /><span style='color:grey'>Permanently increases your chance of finding maps by 25%.</span>";
		confirmDialogue("images/" + sPrefix + ".png", artistTrack, "Purchase", "Cancel", "SHOP=" + sPrefix);
	}
	break;
	case "stardustBox1":
	{
		totalAssertions = 10000;
		openInputDialogue("Stardust Boxes", "images/" + sPrefix + ".png", sPrefix, 1, [sPrefix], [1], ["coins"], [totalAssertions], "BUY", "SHOP_MULTI", "Contains a random amount of stardust.");
	}
	break;
	case "stardustBox2":
	{
		totalAssertions = 50000;
		openInputDialogue("Stardust Boxes", "images/" + sPrefix + ".png", sPrefix, 1, [sPrefix], [1], ["coins"], [totalAssertions], "BUY", "SHOP_MULTI", "Contains a random amount of stardust.");
	}
	break;
	case "vial":
	{
		if (getItem("brewingUnlocked") == 0)
		{
			confirmDialogue("images/brewingSkill.png", "You need to unlock the brewing skill before purchasing vials.", "Close", "", "");
		}
		else
		{
			totalAssertions = 100;
			artistTrack = "Purchase <span style='color:brown'>5 vials</span> for <img src='images/coins.png' class='img-30' /> " + totalAssertions + " coins?";
			confirmDialogue("images/" + sPrefix + ".png", artistTrack, "Purchase", "Cancel", "SHOP=" + sPrefix);
		}
	}
	break;
	case "logs":
	{
		totalAssertions = 100;
		artistTrack = "Purchase <span style='color:brown'>20 logs</span> for <img src='images/coins.png' class='img-30' /> " + totalAssertions + " coins?";
		confirmDialogue("images/" + sPrefix + ".png", artistTrack, "Purchase", "Cancel", "SHOP=" + sPrefix);
	}
	break;
	case "oakLogs":
	{
		totalAssertions = 250;
		artistTrack = "Purchase <span style='color:brown'>5 oak logs</span> for <img src='images/coins.png' class='img-30' /> " + totalAssertions + " coins?";
		confirmDialogue("images/" + sPrefix + ".png", artistTrack, "Purchase", "Cancel", "SHOP=" + sPrefix);
	}
	break;
	case "tree":
	{
		totalAssertions = 150;
		artistTrack = "Purchase <span style='color:brown'>A regular tree</span> for <img src='images/coins.png' class='img-30' /> " + totalAssertions + " coins?";
		confirmDialogue("images/" + sPrefix + ".png", artistTrack, "Purchase", "Cancel", "SHOP=" + sPrefix);
	}
	break;
	case "brewingKitMould":
	{
		totalAssertions = 500;
		artistTrack = "Purchase <span style='color:brown'>brewing kit mould</span> for <img src='images/coins.png' class='img-30' /> " + totalAssertions + " coins?";
		confirmDialogue("images/" + sPrefix + ".png", artistTrack, "Purchase", "Cancel", "SHOP=" + sPrefix);
	}
	break;
	case "bronzeOven":
	{
		totalAssertions = 10000;
		artistTrack = "Purchase <span style='color:brown'>bronze oven</span> for <img src='images/coins.png' class='img-30' /> " + totalAssertions + " coins?";
		confirmDialogue("images/" + sPrefix + ".png", artistTrack, "Purchase", "Cancel", "SHOP=" + sPrefix);
	}
	break;
	case "combatLog":
	{
		totalAssertions = 100;
		artistTrack = "Purchase <span style='color:brown'>combat log</span> for <img src='images/coins.png' class='img-30' /> " + totalAssertions + " coins?";
		confirmDialogue("images/" + sPrefix + ".png", artistTrack, "Purchase", "Cancel", "SHOP=" + sPrefix);
	}
	break;
	}
};
