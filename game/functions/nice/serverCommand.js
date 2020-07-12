'use strict';

function serverCommand(data)
{
	var inventoryKeys = data;
	if (inventoryKeys.includes("="))
	{
		var tmp = data.split("=");
		var items = data.split("=").slice(1).join("=").split("~");
		inventoryKeys = tmp[0];
	}
	switch (inventoryKeys)
	{
	case "CONNECTION_ESTABLISHED":
		if (localStorage.getItem("auto_login_token") === null || localStorage.getItem("auto-login") != null)
		{
			document.getElementById("login-box-connecting").style.display = "none";
			document.getElementById("login-box-server-offline").style.display = "none";
			document.getElementById("login-box-connected-guest").style.display = "";
		}
		else
		{
			sendBytes("LOAD_TOKEN=" + localStorage.getItem("auto_login_token"));
		}
		break;
	case "REDSEND_TOKEN":
		document.getElementById("connecting-to-server-other-info").innerHTML = "This account session is already active on another server.";
		setTimeout(function ()
		{
			document.getElementById("connecting-to-server-other-info").innerHTML += "<br /><br />Starting the reconnecting phase...";
		}, 1000);
		setTimeout(function ()
		{
			document.getElementById("connecting-to-server-other-info").innerHTML += "<br /><span style='color:lime'>Succesfully saved session on other server...</span>";
		}, 3000);
		setTimeout(function ()
		{
			document.getElementById("connecting-to-server-other-info").innerHTML += "<br />Closing session...";
		}, 4000);
		setTimeout(function ()
		{
			document.getElementById("connecting-to-server-other-info").innerHTML += "<br /><span style='color:lime'>Succesfully closed.</span>";
		}, 6000);
		setTimeout(function ()
		{
			document.getElementById("connecting-to-server-other-info").innerHTML += "<br />Connecting...";
		}, 7000);
		setTimeout(function ()
		{
			sendBytes("LOAD_TOKEN=" + localStorage.getItem("auto_login_token"));
		}, 9000);
		break;
	case "SET_ITEMS":
		setItems(data.substr(inventoryKeys.length + 1));
		global_setItemsTickCount++;
		if (!global_loadedFirstItemsFlag)
		{
			global_loadedFirstItemsFlag = true;
			setTimeout(loadItemBoxes(), 100);
			sendBytes("LOAD_OBJECTS");
		}
		break;
	case "LOAD_FOOD_OBJECTS":
		objects_loadFood(data.substr(18));
		break;
	case "FORCE_REFRESH_TRADABLES":
		sendBytes("REFRESH_TRADABLES");
		break;
	case "LOAD_MACHINERY_OBJECTS":
		objects_loadMachinery(data.substr(23));
		break;
	case "LOAD_SHOP_OBJECTS":
		objects_loadShopPrices(data.substr(18));
		break;
	case "OPEN_DONOR_PAGE":
		clicksDonorShopItem("buyDonorCoins");
		break;
	case "REFRESH_TRADABLES":
		refreshTradables(data.substr(18));
		break;
	case "REFESH_MARKET":
		refreshMarket(data.substr(14));
		refreshMarketGUI();
		populateMarketTable();
		displayMarket(true);
		break;
	case "LOAD_SEED_OBJECTS":
		objects_loadSeeds(data.substr(18));
		break;
	case "LOAD_STARDUST_TOOL_CONVERSION":
		objects_loadStardustTools(data.substr(30));
		break;
	case "RELOAD":
		setTimeout(function ()
		{
			location.reload();
		}, parseInt(data.substr(7)));
		break;
	case "LOAD_EQUIPMENT_OBJECTS":
		objects_loadEquipment(data.substr(23));
		loadOnceOnLogin();
		sendBytes("READY");
		document.getElementById("chat-area").style.display = "";
		initializeTooltips();
		break;
	case "TELEPORT_ANIMATION":
		playTeleportAnimation();
		break;
	case "SHOW_STARS_MAP":
		showStarsMap();
		sendBytes("LOOKING_STARS");
		break;
	case "DISPLAY_GAME":
		document.getElementById("login-box").style.display = "none";
		document.getElementById("game").style.display = "";
		startClientTicks();
		setInterval(clientTick, 1000);
		if (getItemString("home") != "none")
		{
			navigate("right-home");
		}
		break;
	case "SET_LOCAL_STORAGE":
		localStorage.setItem(items[0], items[1]);
		break;
	case "SET_INNER_HTML":
		setInnerHTML(items[0], items[1]);
		break;
	case "CONFIRM_DIALOGUE":
		returnCommand = items[4];
		if (items.length > 5)
		{
			returnCommand = "";
			var i = 4;
			for (; i < items.length; i++)
			{
				returnCommand = returnCommand + ("~" + items[i]);
			}
			returnCommand = returnCommand.substr(1);
		}
		confirmDialogue(items[0], items[1], items[2], items[3], returnCommand);
		break;
	case "furnaceCapacity":
		initializeTooltips();
		break;
	case "BUY_SPECIAL_FISHING_BAIT_DIALOGUE":
		openInputDialogue("Special Bait<br />", "images/specialBait.png", "specialBait", 1, ["specialBait"], [1], ["coins"], [500], "Buy from Sketchy Dealer", "BUY_SPECIAL_BAIT", "Used to catch a special anguler fish.");
		break;
	case "ST":
		setTimeout(function ()
		{
			scrollText(items[0], items[1], items[2]);
		}, parseInt(items[3]));
		break;
	case "QUEST_OPTIONS":
		openQuestDialogue(items[0], items[1], items[2], items[3], items[4], items[5], items[6], items[7], items[8], items[9], items[10], items[11]);
		break;
	case "LEVEL_UP":
		levelUp(items[0], items[1]);
		break;
	case "LOOT_DIALOGUE":
		lootDialogue(data.substr(14));
		break;
	case "NAVIGATE":
		navigate(data.substr(9));
		break;
	case "HIT_SPLAT":
		addHitSplit(data.substr(10));
		break;
	case "CSS":
		setCSSFromServer(items[0], items[1], items[2], items[3]);
		break;
	case "SET_GLOBAL_VAR":
		window[items[0]] = items[1];
		break;
	case "START_MONSTER_ANIMATION":
		startMonsterAnimation(data.substr(24));
		break;
	case "START_HERO_ANIMATION":
		startHeroAnimation(data.substr(21));
		break;
	case "RELEASE_FARADOX":
		dimScreen("release_faradox", true);
		break;
	case "FARADOX_MINION2_DEAD":
		dimScreen("release_faradox_2", true);
		break;
	case "ACCESS_MANA":
		dimScreen("mana", true);
		break;
	case "BUSHY_DEAD":
		dimScreen("bushy_dead", true);
		break;
	case "SKY_CRYSTAL_SHAKE":
		doSkyCrystalShake();
		break;
	case "PLAY_DEAD_SCREEN":
		dimScreen("dead_hero", true);
		break;
	case "REFRESH_TREE_LIST_TAB":
		refreshTreeListTab(data.substr(22));
		break;
	case "REFRESH_COMBAT_LOGGER":
		refreshCombatLogger(data.substr(22));
		break;
	case "REFRESH_TRANSFORM_LOGGER":
		refreshTransferLogger(data.substr(25));
		break;
	case "CONVERT_GUEST_ERROR":
		displayConvertGuestError(data.substr(20));
		break;
	case "CONVERT_GUEST_ERROR":
		displayConvertGuestError(data.substr(20));
		break;
	case "CONVERT_GUEST_SUCCESS":
		closeDialogue("dialogue-profile-guest-to-user-password");
		confirmDialogue("images/check.png", "Submit succesful!<br /><br /><span style='color:grey'>Please login again to keep playing.</span><br /><br />Thank you for joining the community, if you have questions be sure to contact me.<br /><br />-Smitty", "Logout", "", "JS_CONVERT_GUEST_SUCCESS");
		break;
	case "CHANGE_PASSWORD_SUCCESS":
		closeDialogue("dialogue-profile-guest-to-user-password");
		confirmDialogue("images/check.png", "Password successfully changed.", "Close", "", "");
		break;
	case "RESET_LOGIN_TOKEN":
		logout();
		break;
	case "CHAT":
		chat(data.substr(5));
		break;
	case "REFRESH_MUTE_LIST":
		loadMuteList(data.substr(18));
		break;
	}
};
