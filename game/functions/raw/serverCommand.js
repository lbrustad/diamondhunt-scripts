/**
 * serverCommand extracted from ../../deobfuscated/bundle.js at line 302-650
 *
 * If this file doesn't contain a function, there is an error in ../raw/serverCommand.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function serverCommand(_0x14DB0)
{
	var _0x150B2 = _0x14DB0;
	if (_0x150B2.includes("="))
	{
		var _0x14DD3 = _0x14DB0.split("=");
		var _0x19CB6 = _0x14DB0.split("=").slice(1).join("=").split("~");
		_0x150B2 = _0x14DD3[0]
	};
	switch (_0x150B2)
	{
	case "CONNECTION_ESTABLISHED":
		if (localStorage.getItem("auto_login_token") === null || localStorage.getItem("auto-login") != null)
		{
			document.getElementById("login-box-connecting").style.display = "none";
			document.getElementById("login-box-server-offline").style.display = "none";
			document.getElementById("login-box-connected-guest").style.display = ""
		}
		else
		{
			sendBytes("LOAD_TOKEN=" + localStorage.getItem("auto_login_token"))
		};
		break;
	case "REDSEND_TOKEN":
		document.getElementById("connecting-to-server-other-info").innerHTML = "This account session is already active on another server.";
		setTimeout(function ()
		{
			document.getElementById("connecting-to-server-other-info").innerHTML += "<br /><br />Starting the reconnecting phase..."
		}, 1000);
		setTimeout(function ()
		{
			document.getElementById("connecting-to-server-other-info").innerHTML += "<br /><span style=\'color:lime\'>Succesfully saved session on other server...</span>"
		}, 3000);
		setTimeout(function ()
		{
			document.getElementById("connecting-to-server-other-info").innerHTML += "<br />Closing session..."
		}, 4000);
		setTimeout(function ()
		{
			document.getElementById("connecting-to-server-other-info").innerHTML += "<br /><span style=\'color:lime\'>Succesfully closed.</span>"
		}, 6000);
		setTimeout(function ()
		{
			document.getElementById("connecting-to-server-other-info").innerHTML += "<br />Connecting..."
		}, 7000);
		setTimeout(function ()
		{
			sendBytes("LOAD_TOKEN=" + localStorage.getItem("auto_login_token"))
		}, 9000);
		break;
	case "SET_ITEMS":
		setItems(_0x14DB0.substr(_0x150B2.length + 1));
		global_setItemsTickCount++;
		if (!global_loadedFirstItemsFlag)
		{
			global_loadedFirstItemsFlag = true;
			setTimeout(loadItemBoxes(), 100);
			sendBytes("LOAD_OBJECTS")
		};
		break;
	case "HIDE_ITEMS":
		hideItems(_0x14DB0.substr(_0x150B2.length + 1));
		break;
	case "DIALOGUE_CHEF_SPICES":
		openDialogueSpices();
		break;
	case "LOAD_FOOD_OBJECTS":
		objects_loadFood(_0x14DB0.substr(18));
		break;
	case "FORCE_REFRESH_TRADABLES":
		sendBytes("REFRESH_TRADABLES");
		break;
	case "REFRESH_FRIENDS_LIST_ARRAY":
		refreshFriendsListArray(_0x14DB0.substr(27));
		break;
	case "REFRESH_FRIENDS_LIST":
		refreshFriendsList(_0x14DB0.substr(21));
		break;
	case "SHOW_LOADING":
		showLoading();
		break;
	case "HIDE_LOADING":
		hideLoading();
		break;
	case "REFRESH_IGNORE_LIST":
		refreshIgnoreList(_0x14DB0.substr(20));
		break;
	case "REFRESH_CAST_CHEST_LOG":
		refreshCastleChestLog(_0x14DB0.substr(23));
		break;
	case "LOAD_MACHINERY_OBJECTS":
		objects_loadMachinery(_0x14DB0.substr(23));
		break;
	case "LOAD_SHOP_OBJECTS":
		objects_loadShopPrices(_0x14DB0.substr(18));
		break;
	case "OPEN_DONOR_PAGE":
		clicksDonorShopItem("buyDonorCoins");
		break;
	case "REFRESH_TRADABLES":
		refreshTradables(_0x14DB0.substr(18));
		break;
	case "JS_ALERT":
		alert(_0x14DB0.substr(9));
		break;
	case "REFESH_MARKET":
		refreshMarket(_0x14DB0.substr(14));
		refreshMarketGUI();
		populateMarketTable();
		displayMarket(true);
		break;
	case "COMPLETE_CEMETERY_TOMBS":
		completeCemeteryTombs();
		break;
	case "LOAD_SEED_OBJECTS":
		objects_loadSeeds(_0x14DB0.substr(18));
		break;
	case "LOAD_STARDUST_TOOL_CONVERSION":
		objects_loadStardustTools(_0x14DB0.substr(30));
		break;
	case "RELOAD":
		setTimeout(function ()
		{
			location.reload()
		}, parseInt(_0x14DB0.substr(7)));
		break;
	case "LOAD_EQUIPMENT_OBJECTS":
		objects_loadEquipment(_0x14DB0.substr(23));
		loadOnceOnLogin();
		sendBytes("READY");
		document.getElementById("chat-area").style.display = "";
		break;
	case "TELEPORT_ANIMATION":
		playTeleportAnimation();
		break;
	case "SHOW_STARS_MAP":
		showStarsMap();
		sendBytes("LOOKING_STARS");
		break;
	case "DISPLAY_GAME":
		global_gameLoaded = true;
		document.getElementById("login-box").style.display = "none";
		document.getElementById("navigation-index-bar").style.display = "none";
		document.getElementById("game").style.display = "";
		startClientTicks();
		setInterval(clientTick, 1000);
		if (getItemString("home") != "none")
		{
			navigate("right-home")
		};
		initializeTooltips();
		refreshTooltips();
		if (global_newAccount)
		{
			dimScreen("combat_animation", true)
		};
		break;
	case "CALL_BACK":
		setTimeout(function ()
		{
			sendBytes(_0x19CB6[0])
		}, parseInt(_0x19CB6[1]));
		break;
	case "SET_LOCAL_STORAGE":
		localStorage.setItem(_0x19CB6[0], _0x19CB6[1]);
		break;
	case "REFRESH_MARKET_HISTORY":
		refreshMarketHistory(_0x14DB0.substr(23));
		break;
	case "SET_INNER_HTML":
		setInnerHTML(_0x19CB6[0], _0x19CB6[1]);
		break;
	case "EXPLORER_MESSAGE":
		setTimeout(function ()
		{
			confirmDialogue("images/explorer.png", "Pssst. Come talk to me.<br /><br /><span style=\'color:grey\'>Explorer added to combat section.</span>", "Close", "", "")
		}, 4000);
		break;
	case "CORRUPTED_KNIGHT_ANIMATION":
		doCorruptedKnightAnimation();
		break;
	case "CONFIRM_DIALOGUE":
		returnCommand = _0x19CB6[4];
		if (_0x19CB6.length > 5)
		{
			returnCommand = "";
			for (var _0x14C0C = 4; _0x14C0C < _0x19CB6.length; _0x14C0C++)
			{
				returnCommand += "~" + _0x19CB6[_0x14C0C]
			};
			returnCommand = returnCommand.substr(1)
		};
		confirmDialogue(_0x19CB6[0], _0x19CB6[1], _0x19CB6[2], _0x19CB6[3], returnCommand);
		break;
	case "CONFIRM_DELAY_DIALOGUE":
		setTimeout(function ()
		{
			confirmDialogue(_0x19CB6[0], _0x19CB6[1], "Close", "", "")
		}, _0x19CB6[2]);
		break;
	case "CONFIRM_DIALOGUE_2":
		confirmDialogue2(_0x19CB6[0], _0x19CB6[1], _0x19CB6[2], _0x19CB6[3], _0x19CB6[4], _0x19CB6[5], _0x19CB6[6]);
		break;
	case "CONFIRM_DIALOGUE_3":
		confirmDialogue3(_0x19CB6[0], _0x19CB6[1], _0x19CB6[2], _0x19CB6[3], _0x19CB6[4], _0x19CB6[5], _0x19CB6[6], _0x19CB6[7], _0x19CB6[8]);
		break;
	case "VIEW_CASTLE_WEAKNESSES":
		viewCastleKnightWeaknesses();
		break;
	case "SHOW_SPY_TOAST":
		showSpyToast();
		break;
	case "HIDE_SPY_TOAST":
		hideSpyToast();
		break;
	case "furnaceCapacity":
		initializeTooltips();
		break;
	case "EXIT_COMBAT_MAP":
		exitCombatMap();
		break;
	case "BUY_SPECIAL_FISHING_BAIT_DIALOGUE":
		openInputDialogue("Special Bait<br />", "images/specialBait.png", "specialBait", 1, ["specialBait"], [1], ["coins"], [500], "Buy from Sketchy Dealer", "BUY_SPECIAL_BAIT", "Used to catch a special anguler fish.");
		break;
	case "ST":
		setTimeout(function ()
		{
			scrollText(_0x19CB6[0], _0x19CB6[1], _0x19CB6[2])
		}, parseInt(_0x19CB6[3]));
		break;
	case "QUEST_OPTIONS":
		openQuestDialogue(_0x19CB6[0], _0x19CB6[1], _0x19CB6[2], _0x19CB6[3], _0x19CB6[4], _0x19CB6[5], _0x19CB6[6], _0x19CB6[7], _0x19CB6[8], _0x19CB6[9], _0x19CB6[10], _0x19CB6[11]);
		break;
	case "LEVEL_UP":
		levelUp(_0x19CB6[0], _0x19CB6[1]);
		break;
	case "LOOT_DIALOGUE":
		lootDialogue(_0x14DB0.substr(14));
		break;
	case "NAVIGATE":
		navigate(_0x14DB0.substr(9));
		break;
	case "HIT_SPLAT":
		addHitSplit(_0x14DB0.substr(10));
		break;
	case "CSS":
		setCSSFromServer(_0x19CB6[0], _0x19CB6[1], _0x19CB6[2], _0x19CB6[3]);
		break;
	case "SET_GLOBAL_VAR":
		window[_0x19CB6[0]] = _0x19CB6[1];
		break;
	case "START_MONSTER_ANIMATION":
		startMonsterAnimation(_0x14DB0.substr(24));
		break;
	case "START_HERO_ANIMATION":
		startHeroAnimation(_0x14DB0.substr(21));
		break;
	case "RELEASE_FARADOX":
		dimScreen("release_faradox", true);
		break;
	case "FARADOX_MINION2_DEAD":
		dimScreen("release_faradox_2", true);
		break;
	case "COMBAT_TUTORIAL":
		combatTutorial(_0x14DB0.substr(16));
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
	case "QUEST_SHAKE_FISH_EGGS":
		$("#body").effect("shake"
		, {
			direction: "left"
			, times: 40
			, distance: 10
		}, 2000);
		break;
	case "SHAKE_DUNGEON":
		shakeDungeon();
		break;
	case "SHAKE_ROCKET_IMAGE":
		shakeRocketNotificationImage();
		break;
	case "PLAY_DEAD_SCREEN":
		dimScreen("dead_hero", true);
		break;
	case "PLAY_DEAD_SCREEN_2":
		dimScreen("dead_hero_special", true);
		break;
	case "REFRESH_TREE_LIST_TAB":
		refreshTreeListTab(_0x14DB0.substr(22));
		break;
	case "REFRESH_COMBAT_LOGGER":
		refreshCombatLogger(_0x14DB0.substr(22));
		break;
	case "REFRESH_LOOT_BAGS_LOGGER":
		refreshLootBagsLogger(_0x14DB0.substr(25));
		break;
	case "REFRESH_TRANSFORM_LOGGER":
		refreshTransferLogger(_0x14DB0.substr(25));
		break;
	case "CONVERT_GUEST_ERROR":
		displayConvertGuestError(_0x14DB0.substr(20));
		break;
	case "CONVERT_GUEST_ERROR":
		displayConvertGuestError(_0x14DB0.substr(20));
		break;
	case "CONVERT_GUEST_SUCCESS":
		closeDialogue("dialogue-profile-guest-to-user-password");
		confirmDialogue("images/check.png", "Submit succesful!<br /><br /><span style=\'color:grey\'>Please login again to keep playing.</span><br /><br />Thank you for joining the community, if you have questions be sure to contact me.<br /><br />-Smitty", "Logout", "", "JS_CONVERT_GUEST_SUCCESS");
		break;
	case "CHANGE_PASSWORD_SUCCESS":
		closeDialogue("dialogue-profile-guest-to-user-password");
		confirmDialogue("images/check.png", "Password successfully changed.", "Close", "", "");
		break;
	case "RESET_LOGIN_TOKEN":
		logout();
		break;
	case "CHAT":
		chat(_0x14DB0.substr(5));
		break;
	case "REFRESH_MUTE_LIST":
		loadMuteList(_0x14DB0.substr(18));
		break;
	case "PLAY_NOTIFICATION":
		if (global_setItemsTickCount < 5)
		{
			return
		};
		if (!global_titleNotification)
		{
			if (localStorage.getItem("notificationSound") != null)
			{
				playSound("sounds/twinkle.mp3")
			};
			global_titleNotification = true
		};
		break;
	case "STOP_NOTIFICATION":
		global_titleNotification = false;
		break
	}
}