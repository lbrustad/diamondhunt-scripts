'use strict';

function clicksShopItem(sPrefix)
{
	switch (sPrefix)
	{
	case "rustySword":
	{
		var _a_ = 15;
		var artistTrack = "Purchase a <span style='color:brown'>Rusty sword</span> for <img src='images/coins.png' class='img-30' /> " + _a_ + " coins?";
		confirmDialogue("images/" + sPrefix + ".png", artistTrack, "Purchase", "Cancel", "SHOP=" + sPrefix);
	}
	break;
	case "apple":
	{
		_a_ = 5;
		artistTrack = "Purchase <span style='color:brown'>25 apples</span> for <img src='images/coins.png' class='img-30' /> " + _a_ + " coins?";
		confirmDialogue("images/" + sPrefix + ".png", artistTrack, "Purchase", "Cancel", "SHOP=" + sPrefix);
	}
	break;
	case "storeBananas":
	{
		_a_ = 50;
		artistTrack = "Purchase <span style='color:brown'>10 bananas</span> for <img src='images/coins.png' class='img-30' /> " + _a_ + " coins?";
		confirmDialogue("images/" + sPrefix + ".png", artistTrack, "Purchase", "Cancel", "SHOP=" + sPrefix);
	}
	break;
	case "stardustPickaxe":
	{
		_a_ = 100;
		artistTrack = "Purchase <span style='color:brown'>stardust pickaxe</span> for <img src='images/coins.png' class='img-30' /> " + _a_ + " coins?";
		confirmDialogue("images/" + sPrefix + ".png", artistTrack, "Purchase", "Cancel", "SHOP=" + sPrefix);
	}
	break;
	case "stardustHammer":
	{
		_a_ = 400;
		artistTrack = "Purchase <span style='color:brown'>stardust hammer</span> for <img src='images/coins.png' class='img-30' /> " + _a_ + " coins?";
		confirmDialogue("images/" + sPrefix + ".png", artistTrack, "Purchase", "Cancel", "SHOP=" + sPrefix);
	}
	break;
	case "woodenShield":
	{
		_a_ = 1500;
		artistTrack = "Purchase <span style='color:brown'>wooden shield</span> for <img src='images/coins.png' class='img-30' /> " + _a_ + " coins?";
		confirmDialogue("images/" + sPrefix + ".png", artistTrack, "Purchase", "Cancel", "SHOP=" + sPrefix);
	}
	break;
	case "carePackage1":
	{
		_a_ = 150;
		artistTrack = "Purchase <span style='color:brown'>care package</span> for <img src='images/coins.png' class='img-30' /> " + _a_ + " coins?";
		confirmDialogue("images/" + sPrefix + ".png", artistTrack, "Purchase", "Cancel", "SHOP=" + sPrefix);
	}
	break;
	case "carePackage2":
	{
		_a_ = 1000;
		artistTrack = "Purchase <span style='color:brown'>care package</span> for <img src='images/coins.png' class='img-30' /> " + _a_ + " coins?";
		confirmDialogue("images/" + sPrefix + ".png", artistTrack, "Purchase", "Cancel", "SHOP=" + sPrefix);
	}
	break;
	case "stardustBox1":
	{
		_a_ = 10000;
		openInputDialogue("Stardust Boxes", "images/" + sPrefix + ".png", sPrefix, 1, [sPrefix], [1], ["coins"], [_a_], "BUY", "SHOP_MULTI", "Contains a random amount of stardust.");
	}
	break;
	case "stardustBox2":
	{
		_a_ = 50000;
		openInputDialogue("Stardust Boxes", "images/" + sPrefix + ".png", sPrefix, 1, [sPrefix], [1], ["coins"], [_a_], "BUY", "SHOP_MULTI", "Contains a random amount of stardust.");
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
			_a_ = 100;
			artistTrack = "Purchase <span style='color:brown'>5 vials</span> for <img src='images/coins.png' class='img-30' /> " + _a_ + " coins?";
			confirmDialogue("images/" + sPrefix + ".png", artistTrack, "Purchase", "Cancel", "SHOP=" + sPrefix);
		}
	}
	break;
	case "logs":
	{
		_a_ = 100;
		artistTrack = "Purchase <span style='color:brown'>20 logs</span> for <img src='images/coins.png' class='img-30' /> " + _a_ + " coins?";
		confirmDialogue("images/" + sPrefix + ".png", artistTrack, "Purchase", "Cancel", "SHOP=" + sPrefix);
	}
	break;
	case "oakLogs":
	{
		_a_ = 250;
		artistTrack = "Purchase <span style='color:brown'>5 oak logs</span> for <img src='images/coins.png' class='img-30' /> " + _a_ + " coins?";
		confirmDialogue("images/" + sPrefix + ".png", artistTrack, "Purchase", "Cancel", "SHOP=" + sPrefix);
	}
	break;
	case "tree":
	{
		_a_ = 150;
		artistTrack = "Purchase <span style='color:brown'>A regular tree</span> for <img src='images/coins.png' class='img-30' /> " + _a_ + " coins?";
		confirmDialogue("images/" + sPrefix + ".png", artistTrack, "Purchase", "Cancel", "SHOP=" + sPrefix);
	}
	break;
	case "brewingKitMould":
	{
		_a_ = 500;
		artistTrack = "Purchase <span style='color:brown'>brewing kit mould</span> for <img src='images/coins.png' class='img-30' /> " + _a_ + " coins?";
		confirmDialogue("images/" + sPrefix + ".png", artistTrack, "Purchase", "Cancel", "SHOP=" + sPrefix);
	}
	break;
	case "bronzeOven":
	{
		_a_ = 10000;
		artistTrack = "Purchase <span style='color:brown'>bronze oven</span> for <img src='images/coins.png' class='img-30' /> " + _a_ + " coins?";
		confirmDialogue("images/" + sPrefix + ".png", artistTrack, "Purchase", "Cancel", "SHOP=" + sPrefix);
	}
	break;
	case "combatLog":
	{
		_a_ = 100;
		artistTrack = "Purchase <span style='color:brown'>combat log</span> for <img src='images/coins.png' class='img-30' /> " + _a_ + " coins?";
		confirmDialogue("images/" + sPrefix + ".png", artistTrack, "Purchase", "Cancel", "SHOP=" + sPrefix);
	}
	break;
	}
};
