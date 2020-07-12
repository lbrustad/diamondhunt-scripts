/**
 * clicksShopItem extracted from ../../deobfuscated/bundle.js at line 6581-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/clicksShopItem.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function clicksShopItem(_0x1CF30)
{
	switch (_0x1CF30)
	{
	case "rustySword":
	{
		var _0x1C892 = 15;
		var _0x1CC4A = "Purchase a <span style=\'color:brown\'>Rusty sword</span> for <img src=\'images/coins.png\' class=\'img-30\' /> " + _0x1C892 + " coins?";
		confirmDialogue("images/" + _0x1CF30 + ".png", _0x1CC4A, "Purchase", "Cancel", "SHOP=" + _0x1CF30)
	}
	break;
	case "apple":
	{
		var _0x1C892 = 5;
		var _0x1CC4A = "Purchase <span style=\'color:brown\'>25 apples</span> for <img src=\'images/coins.png\' class=\'img-30\' /> " + _0x1C892 + " coins?";
		confirmDialogue("images/" + _0x1CF30 + ".png", _0x1CC4A, "Purchase", "Cancel", "SHOP=" + _0x1CF30)
	}
	break;
	case "storeBananas":
	{
		var _0x1C892 = 50;
		var _0x1CC4A = "Purchase <span style=\'color:brown\'>10 bananas</span> for <img src=\'images/coins.png\' class=\'img-30\' /> " + _0x1C892 + " coins?";
		confirmDialogue("images/" + _0x1CF30 + ".png", _0x1CC4A, "Purchase", "Cancel", "SHOP=" + _0x1CF30)
	}
	break;
	case "stardustPickaxe":
	{
		var _0x1C892 = 100;
		var _0x1CC4A = "Purchase <span style=\'color:brown\'>stardust pickaxe</span> for <img src=\'images/coins.png\' class=\'img-30\' /> " + _0x1C892 + " coins?";
		confirmDialogue("images/" + _0x1CF30 + ".png", _0x1CC4A, "Purchase", "Cancel", "SHOP=" + _0x1CF30)
	}
	break;
	case "stardustHammer":
	{
		var _0x1C892 = 400;
		var _0x1CC4A = "Purchase <span style=\'color:brown\'>stardust hammer</span> for <img src=\'images/coins.png\' class=\'img-30\' /> " + _0x1C892 + " coins?";
		confirmDialogue("images/" + _0x1CF30 + ".png", _0x1CC4A, "Purchase", "Cancel", "SHOP=" + _0x1CF30)
	}
	break;
	case "woodenShield":
	{
		var _0x1C892 = 1500;
		var _0x1CC4A = "Purchase <span style=\'color:brown\'>wooden shield</span> for <img src=\'images/coins.png\' class=\'img-30\' /> " + _0x1C892 + " coins?";
		confirmDialogue("images/" + _0x1CF30 + ".png", _0x1CC4A, "Purchase", "Cancel", "SHOP=" + _0x1CF30)
	}
	break;
	case "carePackage1":
	{
		var _0x1C892 = 150;
		var _0x1CC4A = "Purchase <span style=\'color:brown\'>care package</span> for <img src=\'images/coins.png\' class=\'img-30\' /> " + _0x1C892 + " coins?";
		confirmDialogue("images/" + _0x1CF30 + ".png", _0x1CC4A, "Purchase", "Cancel", "SHOP=" + _0x1CF30)
	}
	break;
	case "carePackage2":
	{
		var _0x1C892 = 1000;
		var _0x1CC4A = "Purchase <span style=\'color:brown\'>care package</span> for <img src=\'images/coins.png\' class=\'img-30\' /> " + _0x1C892 + " coins?";
		confirmDialogue("images/" + _0x1CF30 + ".png", _0x1CC4A, "Purchase", "Cancel", "SHOP=" + _0x1CF30)
	}
	break;
	case "stardustBox1":
	{
		var _0x1C892 = 10000;
		openInputDialogue("Stardust Boxes", "images/" + _0x1CF30 + ".png", _0x1CF30, 1, [_0x1CF30], [1], ["coins"], [_0x1C892], "BUY", "SHOP_MULTI", "Contains a random amount of stardust.")
	}
	break;
	case "stardustBox2":
	{
		var _0x1C892 = 50000;
		openInputDialogue("Stardust Boxes", "images/" + _0x1CF30 + ".png", _0x1CF30, 1, [_0x1CF30], [1], ["coins"], [_0x1C892], "BUY", "SHOP_MULTI", "Contains a random amount of stardust.")
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
			var _0x1C892 = 100;
			var _0x1CC4A = "Purchase <span style=\'color:brown\'>5 vials</span> for <img src=\'images/coins.png\' class=\'img-30\' /> " + _0x1C892 + " coins?";
			confirmDialogue("images/" + _0x1CF30 + ".png", _0x1CC4A, "Purchase", "Cancel", "SHOP=" + _0x1CF30)
		}
	}
	break;
	case "logs":
	{
		var _0x1C892 = 100;
		var _0x1CC4A = "Purchase <span style=\'color:brown\'>20 logs</span> for <img src=\'images/coins.png\' class=\'img-30\' /> " + _0x1C892 + " coins?";
		confirmDialogue("images/" + _0x1CF30 + ".png", _0x1CC4A, "Purchase", "Cancel", "SHOP=" + _0x1CF30)
	}
	break;
	case "oakLogs":
	{
		var _0x1C892 = 250;
		var _0x1CC4A = "Purchase <span style=\'color:brown\'>5 oak logs</span> for <img src=\'images/coins.png\' class=\'img-30\' /> " + _0x1C892 + " coins?";
		confirmDialogue("images/" + _0x1CF30 + ".png", _0x1CC4A, "Purchase", "Cancel", "SHOP=" + _0x1CF30)
	}
	break;
	case "tree":
	{
		var _0x1C892 = 150;
		var _0x1CC4A = "Purchase <span style=\'color:brown\'>A regular tree</span> for <img src=\'images/coins.png\' class=\'img-30\' /> " + _0x1C892 + " coins?";
		confirmDialogue("images/" + _0x1CF30 + ".png", _0x1CC4A, "Purchase", "Cancel", "SHOP=" + _0x1CF30)
	}
	break;
	case "brewingKitMould":
	{
		var _0x1C892 = 500;
		var _0x1CC4A = "Purchase <span style=\'color:brown\'>brewing kit mould</span> for <img src=\'images/coins.png\' class=\'img-30\' /> " + _0x1C892 + " coins?";
		confirmDialogue("images/" + _0x1CF30 + ".png", _0x1CC4A, "Purchase", "Cancel", "SHOP=" + _0x1CF30)
	}
	break;
	case "bronzeOven":
	{
		var _0x1C892 = 10000;
		var _0x1CC4A = "Purchase <span style=\'color:brown\'>bronze oven</span> for <img src=\'images/coins.png\' class=\'img-30\' /> " + _0x1C892 + " coins?";
		confirmDialogue("images/" + _0x1CF30 + ".png", _0x1CC4A, "Purchase", "Cancel", "SHOP=" + _0x1CF30)
	}
	break;
	case "combatLog":
	{
		var _0x1C892 = 100;
		var _0x1CC4A = "Purchase <span style=\'color:brown\'>combat log</span> for <img src=\'images/coins.png\' class=\'img-30\' /> " + _0x1C892 + " coins?";
		confirmDialogue("images/" + _0x1CF30 + ".png", _0x1CC4A, "Purchase", "Cancel", "SHOP=" + _0x1CF30)
	}
	break
	}
}