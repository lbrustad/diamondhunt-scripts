/**
 * clicksShopItem extracted from ../../deobfuscated/bundle.js at line 8683-8833
 *
 * If this file doesn't contain a function, there is an error in ../raw/clicksShopItem.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function clicksShopItem(_0x47D0)
{
	switch (_0x47D0)
	{
	case "rustySword":
	{
		var _0x39E1 = 15;
		var _0x41B2 = "Purchase a <span style=\'color:brown\'>Rusty sword</span> for <img src=\'images/coins.png\' class=\'img-30\' /> " + _0x39E1 + " coins?";
		confirmDialogue("images/" + _0x47D0 + ".png", _0x41B2, "Purchase", "Cancel", "SHOP=" + _0x47D0)
	}
	break;
	case "apple":
	{
		var _0x39E1 = 5;
		var _0x41B2 = "Purchase <span style=\'color:brown\'>25 apples</span> for <img src=\'images/coins.png\' class=\'img-30\' /> " + _0x39E1 + " coins?";
		confirmDialogue("images/" + _0x47D0 + ".png", _0x41B2, "Purchase", "Cancel", "SHOP=" + _0x47D0)
	}
	break;
	case "storeBananas":
	{
		var _0x39E1 = 50;
		var _0x41B2 = "Purchase <span style=\'color:brown\'>10 bananas</span> for <img src=\'images/coins.png\' class=\'img-30\' /> " + _0x39E1 + " coins?";
		confirmDialogue("images/" + _0x47D0 + ".png", _0x41B2, "Purchase", "Cancel", "SHOP=" + _0x47D0)
	}
	break;
	case "stardustPickaxe":
	{
		var _0x39E1 = 100;
		var _0x41B2 = "Purchase <span style=\'color:brown\'>stardust pickaxe</span> for <img src=\'images/coins.png\' class=\'img-30\' /> " + _0x39E1 + " coins?";
		confirmDialogue("images/" + _0x47D0 + ".png", _0x41B2, "Purchase", "Cancel", "SHOP=" + _0x47D0)
	}
	break;
	case "stardustHammer":
	{
		var _0x39E1 = 400;
		var _0x41B2 = "Purchase <span style=\'color:brown\'>stardust hammer</span> for <img src=\'images/coins.png\' class=\'img-30\' /> " + _0x39E1 + " coins?";
		confirmDialogue("images/" + _0x47D0 + ".png", _0x41B2, "Purchase", "Cancel", "SHOP=" + _0x47D0)
	}
	break;
	case "woodenShield":
	{
		var _0x39E1 = 1500;
		var _0x41B2 = "Purchase <span style=\'color:brown\'>wooden shield</span> for <img src=\'images/coins.png\' class=\'img-30\' /> " + _0x39E1 + " coins?";
		confirmDialogue("images/" + _0x47D0 + ".png", _0x41B2, "Purchase", "Cancel", "SHOP=" + _0x47D0)
	}
	break;
	case "carePackage1":
	{
		var _0x39E1 = 150;
		var _0x41B2 = "Purchase <span style=\'color:brown\'>care package</span> for <img src=\'images/coins.png\' class=\'img-30\' /> " + _0x39E1 + " coins?";
		confirmDialogue("images/" + _0x47D0 + ".png", _0x41B2, "Purchase", "Cancel", "SHOP=" + _0x47D0)
	}
	break;
	case "lumberJack":
	{
		var _0x39E1 = 250;
		var _0x41B2 = "Hire <span style=\'color:brown\'>lumberjack</span> for <img src=\'images/coins.png\' class=\'img-30\' /> " + _0x39E1 + " coins?";
		confirmDialogue("images/" + _0x47D0 + ".png", _0x41B2, "Purchase", "Cancel", "SHOP=" + _0x47D0)
	}
	break;
	case "carePackage2":
	{
		var _0x39E1 = 1000;
		var _0x41B2 = "Purchase <span style=\'color:brown\'>care package</span> for <img src=\'images/coins.png\' class=\'img-30\' /> " + _0x39E1 + " coins?";
		confirmDialogue("images/" + _0x47D0 + ".png", _0x41B2, "Purchase", "Cancel", "SHOP=" + _0x47D0)
	}
	break;
	case "carePackage3":
	{
		var _0x39E1 = 85000;
		var _0x41B2 = "Purchase <span style=\'color:brown\'>care package</span> for <img src=\'images/coins.png\' class=\'img-30\' /> " + formatNumber(_0x39E1) + " coins?";
		confirmDialogue("images/" + _0x47D0 + ".png", _0x41B2, "Purchase", "Cancel", "SHOP=" + _0x47D0)
	}
	break;
	case "pirate":
	{
		var _0x39E1 = 500000;
		var _0x41B2 = "Hire a <span style=\'color:brown\'>Pirate</span> for <img src=\'images/coins.png\' class=\'img-30\' /> " + formatNumber(_0x39E1) + " coins?";
		confirmDialogue("images/" + _0x47D0 + ".png", _0x41B2, "Purchase", "Cancel", "SHOP=" + _0x47D0)
	}
	break;
	case "stardustBox1":
	{
		var _0x39E1 = 10000;
		openInputDialogue("Stardust Boxes", "images/" + _0x47D0 + ".png", _0x47D0, 1, [_0x47D0], [1], ["coins"], [_0x39E1], "BUY", "SHOP_MULTI", "Contains a random amount of stardust.")
	}
	break;
	case "stardustBox2":
	{
		var _0x39E1 = 50000;
		openInputDialogue("Stardust Boxes", "images/" + _0x47D0 + ".png", _0x47D0, 1, [_0x47D0], [1], ["coins"], [_0x39E1], "BUY", "SHOP_MULTI", "Contains a random amount of stardust.")
	}
	break;
	case "vial":
	{
		if (getItem("brewingUnlocked") == 0)
		{
			confirmDialogue("images/brewingSkill.png", "You need to unlock the brewing skill before purchasing vials.", "Close", "", "")
		}
		else
		{
			var _0x39E1 = 100;
			var _0x41B2 = "Purchase <span style=\'color:brown\'>5 vials</span> for <img src=\'images/coins.png\' class=\'img-30\' /> " + _0x39E1 + " coins?";
			confirmDialogue("images/" + _0x47D0 + ".png", _0x41B2, "Purchase", "Cancel", "SHOP=" + _0x47D0)
		}
	}
	break;
	case "logs":
	{
		var _0x39E1 = 100;
		var _0x41B2 = "Purchase <span style=\'color:brown\'>20 logs</span> for <img src=\'images/coins.png\' class=\'img-30\' /> " + _0x39E1 + " coins?";
		confirmDialogue("images/" + _0x47D0 + ".png", _0x41B2, "Purchase", "Cancel", "SHOP=" + _0x47D0)
	}
	break;
	case "oakLogs":
	{
		var _0x39E1 = 250;
		var _0x41B2 = "Purchase <span style=\'color:brown\'>5 oak logs</span> for <img src=\'images/coins.png\' class=\'img-30\' /> " + _0x39E1 + " coins?";
		confirmDialogue("images/" + _0x47D0 + ".png", _0x41B2, "Purchase", "Cancel", "SHOP=" + _0x47D0)
	}
	break;
	case "tree":
	{
		var _0x39E1 = 150;
		var _0x41B2 = "Purchase <span style=\'color:brown\'>A regular tree</span> for <img src=\'images/coins.png\' class=\'img-30\' /> " + _0x39E1 + " coins?";
		confirmDialogue("images/" + _0x47D0 + ".png", _0x41B2, "Purchase", "Cancel", "SHOP=" + _0x47D0)
	}
	break;
	case "brewingKitMould":
	{
		var _0x39E1 = 500;
		var _0x41B2 = "Purchase <span style=\'color:brown\'>brewing kit mould</span> for <img src=\'images/coins.png\' class=\'img-30\' /> " + _0x39E1 + " coins?";
		confirmDialogue("images/" + _0x47D0 + ".png", _0x41B2, "Purchase", "Cancel", "SHOP=" + _0x47D0)
	}
	break;
	case "bronzeOven":
	{
		var _0x39E1 = 10000;
		var _0x41B2 = "Purchase <span style=\'color:brown\'>bronze oven</span> for <img src=\'images/coins.png\' class=\'img-30\' /> " + _0x39E1 + " coins?";
		confirmDialogue("images/" + _0x47D0 + ".png", _0x41B2, "Purchase", "Cancel", "SHOP=" + _0x47D0)
	}
	break;
	case "combatLog":
	{
		var _0x39E1 = 100;
		var _0x41B2 = "Purchase <span style=\'color:brown\'>combat log</span> for <img src=\'images/coins.png\' class=\'img-30\' /> " + _0x39E1 + " coins?";
		confirmDialogue("images/" + _0x47D0 + ".png", _0x41B2, "Purchase", "Cancel", "SHOP=" + _0x47D0)
	}
	break
	}
}