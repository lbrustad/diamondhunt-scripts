/**
 * clicksShopItem extracted from ../../deobfuscated/bundle.js at line 10440-10604
 *
 * If this file doesn't contain a function, there is an error in ../raw/clicksShopItem.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function clicksShopItem(_0x16255)
{
	switch (_0x16255)
	{
	case "rustySword":
	{
		var _0x150D5 = 15;
		var _0x15A44 = "Purchase a <span style=\'color:brown\'>Rusty sword</span> for <img src=\'images/coins.png\' class=\'img-30\' /> " + _0x150D5 + " coins?";
		confirmDialogue("images/" + _0x16255 + ".png", _0x15A44, "Purchase", "Cancel", "SHOP=" + _0x16255)
	}
	break;
	case "apple":
	{
		var _0x150D5 = 5;
		var _0x15A44 = "Purchase <span style=\'color:brown\'>25 apples</span> for <img src=\'images/coins.png\' class=\'img-30\' /> " + _0x150D5 + " coins?";
		confirmDialogue("images/" + _0x16255 + ".png", _0x15A44, "Purchase", "Cancel", "SHOP=" + _0x16255)
	}
	break;
	case "storeBananas":
	{
		var _0x150D5 = 50;
		var _0x15A44 = "Purchase <span style=\'color:brown\'>10 bananas</span> for <img src=\'images/coins.png\' class=\'img-30\' /> " + _0x150D5 + " coins?";
		confirmDialogue("images/" + _0x16255 + ".png", _0x15A44, "Purchase", "Cancel", "SHOP=" + _0x16255)
	}
	break;
	case "stardustPickaxe":
	{
		var _0x150D5 = 100;
		var _0x15A44 = "Purchase <span style=\'color:brown\'>stardust pickaxe</span> for <img src=\'images/coins.png\' class=\'img-30\' /> " + _0x150D5 + " coins?";
		confirmDialogue("images/" + _0x16255 + ".png", _0x15A44, "Purchase", "Cancel", "SHOP=" + _0x16255)
	}
	break;
	case "stardustHammer":
	{
		var _0x150D5 = 400;
		var _0x15A44 = "Purchase <span style=\'color:brown\'>stardust hammer</span> for <img src=\'images/coins.png\' class=\'img-30\' /> " + _0x150D5 + " coins?";
		confirmDialogue("images/" + _0x16255 + ".png", _0x15A44, "Purchase", "Cancel", "SHOP=" + _0x16255)
	}
	break;
	case "woodenShield":
	{
		var _0x150D5 = 1500;
		var _0x15A44 = "Purchase <span style=\'color:brown\'>wooden shield</span> for <img src=\'images/coins.png\' class=\'img-30\' /> " + _0x150D5 + " coins?";
		confirmDialogue("images/" + _0x16255 + ".png", _0x15A44, "Purchase", "Cancel", "SHOP=" + _0x16255)
	}
	break;
	case "carePackage1":
	{
		var _0x150D5 = 150;
		var _0x15A44 = "Purchase <span style=\'color:brown\'>care package</span> for <img src=\'images/coins.png\' class=\'img-30\' /> " + _0x150D5 + " coins?";
		confirmDialogue("images/" + _0x16255 + ".png", _0x15A44, "Purchase", "Cancel", "SHOP=" + _0x16255)
	}
	break;
	case "lumberJack":
	{
		var _0x150D5 = 250;
		var _0x15A44 = "Hire <span style=\'color:brown\'>lumberjack</span> for <img src=\'images/coins.png\' class=\'img-30\' /> " + _0x150D5 + " coins?";
		confirmDialogue("images/" + _0x16255 + ".png", _0x15A44, "Purchase", "Cancel", "SHOP=" + _0x16255)
	}
	break;
	case "carePackage2":
	{
		var _0x150D5 = 1000;
		var _0x15A44 = "Purchase <span style=\'color:brown\'>care package</span> for <img src=\'images/coins.png\' class=\'img-30\' /> " + _0x150D5 + " coins?";
		confirmDialogue("images/" + _0x16255 + ".png", _0x15A44, "Purchase", "Cancel", "SHOP=" + _0x16255)
	}
	break;
	case "carePackage3":
	{
		var _0x150D5 = 85000;
		var _0x15A44 = "Purchase <span style=\'color:brown\'>care package</span> for <img src=\'images/coins.png\' class=\'img-30\' /> " + formatNumber(_0x150D5) + " coins?";
		confirmDialogue("images/" + _0x16255 + ".png", _0x15A44, "Purchase", "Cancel", "SHOP=" + _0x16255)
	}
	break;
	case "carePackage4":
	{
		var _0x150D5 = 100000;
		var _0x15A44 = "Purchase <span style=\'color:brown\'>care package</span> for <img src=\'images/coins.png\' class=\'img-30\' /> " + formatNumber(_0x150D5) + " coins?";
		confirmDialogue("images/" + _0x16255 + ".png", _0x15A44, "Purchase", "Cancel", "SHOP=" + _0x16255)
	}
	break;
	case "pirate":
	{
		var _0x150D5 = 500000;
		var _0x15A44 = "Hire a <span style=\'color:brown\'>Pirate</span> for <img src=\'images/coins.png\' class=\'img-30\' /> " + formatNumber(_0x150D5) + " coins?";
		confirmDialogue("images/" + _0x16255 + ".png", _0x15A44, "Purchase", "Cancel", "SHOP=" + _0x16255)
	}
	break;
	case "piratesParrot":
	{
		var _0x150D5 = 500000;
		var _0x15A44 = "Buy a parrot for your pirate at " + formatNumber(_0x150D5) + " coins?<br /><br /><span style=\'color:grey\'>Permanently increases your chance of finding maps by 25%.</span>";
		confirmDialogue("images/" + _0x16255 + ".png", _0x15A44, "Purchase", "Cancel", "SHOP=" + _0x16255)
	}
	break;
	case "stardustBox1":
	{
		var _0x150D5 = 10000;
		openInputDialogue("Stardust Boxes", "images/" + _0x16255 + ".png", _0x16255, 1, [_0x16255], [1], ["coins"], [_0x150D5], "BUY", "SHOP_MULTI", "Contains a random amount of stardust.")
	}
	break;
	case "stardustBox2":
	{
		var _0x150D5 = 50000;
		openInputDialogue("Stardust Boxes", "images/" + _0x16255 + ".png", _0x16255, 1, [_0x16255], [1], ["coins"], [_0x150D5], "BUY", "SHOP_MULTI", "Contains a random amount of stardust.")
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
			var _0x150D5 = 100;
			var _0x15A44 = "Purchase <span style=\'color:brown\'>5 vials</span> for <img src=\'images/coins.png\' class=\'img-30\' /> " + _0x150D5 + " coins?";
			confirmDialogue("images/" + _0x16255 + ".png", _0x15A44, "Purchase", "Cancel", "SHOP=" + _0x16255)
		}
	}
	break;
	case "logs":
	{
		var _0x150D5 = 100;
		var _0x15A44 = "Purchase <span style=\'color:brown\'>20 logs</span> for <img src=\'images/coins.png\' class=\'img-30\' /> " + _0x150D5 + " coins?";
		confirmDialogue("images/" + _0x16255 + ".png", _0x15A44, "Purchase", "Cancel", "SHOP=" + _0x16255)
	}
	break;
	case "oakLogs":
	{
		var _0x150D5 = 250;
		var _0x15A44 = "Purchase <span style=\'color:brown\'>5 oak logs</span> for <img src=\'images/coins.png\' class=\'img-30\' /> " + _0x150D5 + " coins?";
		confirmDialogue("images/" + _0x16255 + ".png", _0x15A44, "Purchase", "Cancel", "SHOP=" + _0x16255)
	}
	break;
	case "tree":
	{
		var _0x150D5 = 150;
		var _0x15A44 = "Purchase <span style=\'color:brown\'>A regular tree</span> for <img src=\'images/coins.png\' class=\'img-30\' /> " + _0x150D5 + " coins?";
		confirmDialogue("images/" + _0x16255 + ".png", _0x15A44, "Purchase", "Cancel", "SHOP=" + _0x16255)
	}
	break;
	case "brewingKitMould":
	{
		var _0x150D5 = 500;
		var _0x15A44 = "Purchase <span style=\'color:brown\'>brewing kit mould</span> for <img src=\'images/coins.png\' class=\'img-30\' /> " + _0x150D5 + " coins?";
		confirmDialogue("images/" + _0x16255 + ".png", _0x15A44, "Purchase", "Cancel", "SHOP=" + _0x16255)
	}
	break;
	case "bronzeOven":
	{
		var _0x150D5 = 10000;
		var _0x15A44 = "Purchase <span style=\'color:brown\'>bronze oven</span> for <img src=\'images/coins.png\' class=\'img-30\' /> " + _0x150D5 + " coins?";
		confirmDialogue("images/" + _0x16255 + ".png", _0x15A44, "Purchase", "Cancel", "SHOP=" + _0x16255)
	}
	break;
	case "combatLog":
	{
		var _0x150D5 = 100;
		var _0x15A44 = "Purchase <span style=\'color:brown\'>combat log</span> for <img src=\'images/coins.png\' class=\'img-30\' /> " + _0x150D5 + " coins?";
		confirmDialogue("images/" + _0x16255 + ".png", _0x15A44, "Purchase", "Cancel", "SHOP=" + _0x16255)
	}
	break
	}
}