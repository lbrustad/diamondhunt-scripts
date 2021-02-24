var global_setItemsTickCount = 0;
var global_newAccount = false;
var global_titleNotification = false;
var global_gameLoaded = false;

function getServerWithLeastPeople()
{
	var _0x17510 = 0;
	var _0x17533 = 10000000;
	for (var _0x14C0C = 0; _0x14C0C <= 100; _0x14C0C++)
	{
		if (servers_information[_0x14C0C] == null)
		{
			break
		};
		var _0x17556 = servers_information[_0x14C0C][0];
		var _0x1759C = servers_information[_0x14C0C][1];
		var _0x17579 = servers_information[_0x14C0C][2];
		var _0x174ED = servers_information[_0x14C0C][3];
		if (_0x17579 == 1 || _0x1759C == 0)
		{
			continue
		};
		if (_0x17533 > _0x174ED)
		{
			_0x17510 = _0x17556;
			_0x17533 = _0x174ED
		}
	};
	return _0x17510
}

function getCurrentServerForDisplayInGame()
{
	if (wss_host == "ws://192.168.2.23")
	{
		return "local"
	}
	else
	{
		return localStorage.getItem("last_server")
	}
}

function loadSelectServerScreen()
{
	var _0x15A44 = "";
	_0x15A44 += "<br />";
	for (var _0x14C0C = 0; _0x14C0C <= 100; _0x14C0C++)
	{
		if (servers_information[_0x14C0C] == null)
		{
			break
		};
		var _0x17556 = servers_information[_0x14C0C][0];
		var _0x1759C = servers_information[_0x14C0C][1];
		var _0x17579 = servers_information[_0x14C0C][2];
		var _0x174ED = servers_information[_0x14C0C][3];
		var _0x17E16 = servers_information[_0x14C0C][4];
		if (_0x1759C == 1)
		{
			_0x15A44 += "<span onclick=\'localStorage.setItem(\"last_server\", " + _0x17556 + ");window.location.reload()\' class=\'login-menu-server\' id=\'login-menu-server-button\'>Server " + _0x17556 + "<br /><br /><span style=\'color:yellow;font-size:12pt;\'>" + _0x174ED + "/" + _0x17E16 + " online.</span>"
		}
		else
		{
			_0x15A44 += "<span onclick=\'localStorage.setItem(\"last_server\", " + _0x17556 + ");window.location.reload()\' class=\'login-menu-server\' id=\'login-menu-server-button\'>Server " + _0x17556 + "<br /><br /><span style=\'color:yellow;font-size:12pt;\'><span style=\'color:pink\'>OFFLINE</span></span>"
		};
		if (_0x17579 == 1)
		{
			_0x15A44 += "<br /><br /><span style=\'color:green;font-size:8pt;\'><img src=\'images/donorCoins.png\' class=\'img-15\' /> Donor Server</span>"
		}
		else
		{
			_0x15A44 += "<br />"
		};
		_0x15A44 += "</span>";
		_0x15A44 += "<br />"
	};
	document.getElementById("server-list-section").innerHTML = _0x15A44
}

function isServerOnline(_0x17556)
{
	for (var _0x14C0C = 0; _0x14C0C <= 100; _0x14C0C++)
	{
		if (servers_information[_0x14C0C] == null)
		{
			break
		};
		if (servers_information[_0x14C0C][0] == _0x17556 && servers_information[_0x14C0C][1] == 1)
		{
			return true
		}
	};
	return false
}

function selectServerStuff()
{
	loadSelectServerScreen();
	if (localStorage.getItem("last_server") == null)
	{
		localStorage.setItem("last_server", getServerWithLeastPeople())
	}
	else
	{
		if (!isServerOnline(localStorage.getItem("last_server")))
		{
			localStorage.setItem("last_server", getServerWithLeastPeople())
		}
	};
	document.getElementById("login-menu-server-button").innerHTML = "Server " + sanitize(localStorage.getItem("last_server"))
}
$(document).ready(function ()
{
	if (wss_host == "none")
	{
		selectServerStuff()
	};
	document.getElementById("server-number-in-game").innerHTML = getCurrentServerForDisplayInGame();
	if (wss_host == "none")
	{
		global_webSocket = new WebSocket("wss://dh3-server" + localStorage.getItem("last_server") + ".diamondhunt.co")
	}
	else
	{
		global_webSocket = new WebSocket(wss_host)
	};
	initWebSocketFunctions();
	global_canvasIdleHero = document.getElementById("canvas-idle-hero");
	global_canvasIdleHero2D = global_canvasIdleHero.getContext("2d");
	global_canvasFightingHero = document.getElementById("canvas-hero");
	global_canvasFightingHero2D = global_canvasFightingHero.getContext("2d");
	global_canvasFightingMonster = document.getElementById("canvas-monster");
	global_canvasFightingMonster2D = global_canvasFightingMonster.getContext("2d");
	document.addEventListener("keyup", (_0x14BE9) =>
	{
		switch (_0x14BE9.keyCode)
		{
		case 13:
			if ($("#login-box-new-account-password2").is(":focus"))
			{
				clicksCreateNewAccount()
			};
			if ($("#login-box-login-password").is(":focus"))
			{
				clicksLoginAccount()
			};
			break;
		case 27:
			var _0x14BC6 = document.getElementsByClassName("dialogue");
			for (var _0x14C0C = 0; _0x14C0C < _0x14BC6.length; _0x14C0C++)
			{
				_0x14BC6[_0x14C0C].style.display = "none"
			};
			break;
		case 49:
			if (getItem("researcherCombat") >= 3 && global_lastTabId == "right-combat-fighting" && !$("#chat-area-input").is(":focus"))
			{
				sendBytes("USE_IN_COMBAT_PRESET=1")
			};
			break;
		case 50:
			if (getItem("researcherCombat") >= 3 && global_lastTabId == "right-combat-fighting" && !$("#chat-area-input").is(":focus"))
			{
				sendBytes("USE_IN_COMBAT_PRESET=2")
			};
			break;
		case 51:
			if (getItem("researcherCombat") >= 3 && global_lastTabId == "right-combat-fighting" && !$("#chat-area-input").is(":focus"))
			{
				sendBytes("USE_IN_COMBAT_PRESET=3")
			};
			break;
		case 52:
			if (getItem("researcherCombat") >= 3 && global_lastTabId == "right-combat-fighting" && !$("#chat-area-input").is(":focus"))
			{
				sendBytes("USE_IN_COMBAT_PRESET=4")
			};
			break;
		case 53:
			if (getItem("researcherCombat") >= 3 && global_lastTabId == "right-combat-fighting" && !$("#chat-area-input").is(":focus"))
			{
				sendBytes("USE_IN_COMBAT_PRESET=5")
			};
			break;
		case 81:
			if (getItem("heal") >= 1 && global_lastTabId == "right-combat-fighting" && !$("#chat-area-input").is(":focus"))
			{
				sendBytes("CAST=heal")
			};
			break;
		case 87:
			if (getItem("poison") >= 1 && global_lastTabId == "right-combat-fighting" && !$("#chat-area-input").is(":focus"))
			{
				sendBytes("CAST=poison")
			};
			break;
		case 69:
			if (getItem("reflect") >= 1 && global_lastTabId == "right-combat-fighting" && !$("#chat-area-input").is(":focus"))
			{
				sendBytes("CAST=reflect")
			};
			break;
		case 82:
			if (getItem("fire") >= 1 && global_lastTabId == "right-combat-fighting" && !$("#chat-area-input").is(":focus"))
			{
				sendBytes("CAST=fire")
			};
			break;
		case 84:
			if (getItem("teleport") >= 1 && global_lastTabId == "right-combat-fighting" && !$("#chat-area-input").is(":focus"))
			{
				sendBytes("CAST=teleport")
			};
			break;
		case 89:
			if (getItem("freeze") >= 1 && global_lastTabId == "right-combat-fighting" && !$("#chat-area-input").is(":focus"))
			{
				sendBytes("CAST=ghostScan")
			};
			break;
		case 85:
			if (getItem("ghostScan") >= 1 && global_lastTabId == "right-combat-fighting" && !$("#chat-area-input").is(":focus"))
			{
				sendBytes("CAST=freeze")
			};
			break;
		case 73:
			if (getItem("invisibility") >= 1 && global_lastTabId == "right-combat-fighting" && !$("#chat-area-input").is(":focus"))
			{
				sendBytes("CAST=invisibility")
			};
			break;
		case 79:
			break;
		case 80:
			break
		}
	})
});
$(document).mousemove(function (_0x14BE9)
{
	window.mouseX = _0x14BE9.pageX;
	window.mouseY = _0x14BE9.pageY
});

function initWebSocketFunctions()
{
	try
	{
		global_webSocket.onerror = function (_0x14C75)
		{
			_0x17B37(_0x14C75)
		};
		global_webSocket.onopen = function (_0x14C75)
		{
			_0x17B7D(_0x14C75)
		};
		global_webSocket.onclose = function (_0x14C75)
		{
			_0x17B14(_0x14C75)
		};
		global_webSocket.onmessage = function (_0x14C75)
		{
			_0x17B5A(_0x14C75)
		};

		function _0x17B5A(_0x14C75)
		{
			serverCommand(_0x14C75.data)
		}

		function _0x17B7D(_0x14C75)
		{}

		function _0x17B14(_0x14C75)
		{}

		function _0x17B37(_0x14C75)
		{
			document.getElementById("login-box-connecting").style.display = "none";
			document.getElementById("login-box-server-offline").style.display = ""
		}
	}
	catch (err)
	{
		alert(err.message)
	}
}
String.prototype.includes = function (_0x14C52)
{
	var _0x14C2F = false;
	if (this.indexOf(_0x14C52) !== -1)
	{
		_0x14C2F = true
	};
	return _0x14C2F
};
global_loadedFirstItemsFlag = false;

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

function loadOnceOnLogin()
{
	if (getItemString("username").startsWith("guest"))
	{
		document.getElementById("top-options-bar-after-username").innerHTML = " <span onclick=\'openProfileDialogue()\' class=\'change-username-label\'>(Change username)</u>"
	}
	else
	{
		document.getElementById("top-options-bar-after-username").innerHTML = " <span onclick=\'openProfileDialogue()\' class=\'change-username-label\'>(profile)</u>"
	}
}

function refreshLootBagsLogger(_0x14DB0)
{
	document.getElementById("lootBags-log-section").innerHTML = _0x14DB0
}

function refreshCombatLogger(_0x14DB0)
{
	document.getElementById("combat-combatLog-section").innerHTML = _0x14DB0
}

function refreshTransferLogger(_0x14DB0)
{
	document.getElementById("transformLog-section").innerHTML = _0x14DB0
}

function getSkillLevel(_0x175BF)
{
	return getLevel(getItem(_0x175BF + "Xp"))
}
global_oreLevels = [];

function Ore(_0x14D47, _0x157AB)
{
	this.name = _0x14D47;
	this.level = _0x157AB
}

function showSpyToast()
{
	document.getElementById("spytoast").style.display = ""
}

function hideSpyToast()
{
	document.getElementById("spytoast").style.display = "none"
}

function addFriend(_0x14D47)
{
	sendBytes("ADD_FRIEND=" + _0x14D47);
	document.getElementById("dialogue-friends-list-add-textbox").value = ""
}

function addIgnore(_0x14D47)
{
	sendBytes("ADD_IGNORE=" + _0x14D47);
	document.getElementById("dialogue-ignore-list-add-textbox").value = ""
}

function addItemBoxOreToMine(_0x15233, _0x15256, _0x15210)
{
	var _0x151CA = "";
	var _0x151ED = getImage("images/" + _0x15233 + ".png", "addItemBoxOreToMine_" + _0x15233);
	_0x151CA += "<div onclick=\'clicksOreToMine(\"" + _0x15233 + "\")\' class=\'div-add-ore-to-mine\' class=\'mining-ore-to-mine-box\'>";
	_0x151CA += "<table class=\'table-add-ore-to-mine\' width=\'100%\'>";
	_0x151CA += "<tr>";
	_0x151CA += "<td style=\'font-size:22pt\'>" + _0x15256 + "</td>";
	_0x151CA += "</tr>";
	_0x151CA += "<tr>";
	_0x151CA += "<td>";
	if (getSkillLevel("mining") < _0x15210)
	{
		_0x151CA += "<img src=\'images/x.png\' class=\'img-150\' style=\'z-index:1;position:absolute;\' />"
	};
	_0x151CA += "<img src=\'" + _0x151ED.src + "\' class=\'img-150\' />";
	_0x151CA += "</td>";
	_0x151CA += "</tr>";
	_0x151CA += "<tr>";
	if (getSkillLevel("mining") < _0x15210)
	{
		_0x151CA += "<td style=\'color:red\'>Level " + _0x15210 + " Mining</td>"
	};
	_0x151CA += "<td style=\"height:50px;\" id=\"" + _0x15233 + "-mining-assigned-td\"></td>";
	_0x151CA += "</tr>";
	_0x151CA += "</table>";
	_0x151CA += "</div>";
	$("#item-section-ore-to-mine-1").append(_0x151CA);
	global_oreLevels[_0x15233] = new Ore(_0x15233, _0x15210)
}
var global_friendsAndIgnoreList = [];

function refreshFriendsListArray(_0x14DB0)
{
	var _0x14DD3 = _0x14DB0.split("~");
	for (var _0x14C0C = 0; _0x14C0C < _0x14DD3.length; _0x14C0C++)
	{
		global_friendsAndIgnoreList[_0x14DD3[_0x14C0C]] = _0x14DD3[(_0x14C0C + 1)];
		_0x14C0C++
	}
}

function combatTutorial(_0x159FE)
{
	if (_0x159FE == "1")
	{
		document.getElementById("back-button-fighting").style.display = "none";
		changeBodyBackground("images/cemetery_background.png");
		setTimeout(function ()
		{
			confirmDialogue("images/combatSkill.png", "Welcome to the Combat interface.", "Continue", "", "COMBAT_TUTORIAL_" + _0x159FE)
		}, 2000)
	};
	if (_0x159FE == "2")
	{
		document.getElementById("combat-fight-hint-1").style.display = ""
	};
	if (_0x159FE == "3")
	{
		document.getElementById("combat-fight-hint-1").style.display = "none";
		document.getElementById("combat-fight-hint-2").style.display = ""
	};
	if (_0x159FE == "4")
	{
		document.getElementById("combat-fight-hint-2").style.display = "none";
		document.getElementById("combat-fight-hint-3").style.display = ""
	};
	if (_0x159FE == "5")
	{
		document.getElementById("main-panel").style.display = "none";
		document.getElementById("navigation-area-buttons").style.display = "none";
		document.getElementById("chat-area").style.display = "none";
		document.getElementById("combat-fight-hint-5").style.display = ""
	};
	if (_0x159FE == "6")
	{
		document.getElementById("main-panel").style.display = "";
		document.getElementById("navigation-area-buttons").style.display = "";
		document.getElementById("chat-area").style.display = "";
		document.getElementById("combat-fight-hint-5").style.display = "none";
		document.getElementById("notification-hint").style.display = ""
	}
}

function refreshIgnoreList(_0x14DB0)
{
	if (_0x14DB0 == "none")
	{
		document.getElementById("dialogue-ignore-list-section").innerHTML = "<span style=\'color:grey\'>(No ignores yet)</span>"
	}
	else
	{
		var _0x15A44 = "";
		_0x15A44 += "<center><table style=\'border:1px solid black;border-radius:8pt;background-color:#e6ffe6;\' width=\'80%\'>";
		_0x15A44 += "<tr>";
		_0x15A44 += "<th style=\'color:black;\'>" + "Name" + "</th>";
		_0x15A44 += "<th style=\'color:black;\'>" + "Actions" + "</th>";
		_0x15A44 += "</tr>";
		var _0x14DD3 = _0x14DB0.split("~");
		for (var _0x14C0C = 0; _0x14C0C < _0x14DD3.length; _0x14C0C++)
		{
			_0x15A44 += "<tr>";
			var _0x16764 = _0x14DD3[_0x14C0C];
			_0x14C0C++;
			_0x15A44 += "<td class=\'center\'  style=\'color:black;\'>" + _0x16764 + "</td>";
			_0x15A44 += "<td class=\'center\' >" + "<img onclick=\'sendBytes(\"REMOVE_IGNORE=" + _0x16764 + "\")\' class=\'x-button img-20\' src=\'images/x.png\' />" + "</td>";
			_0x15A44 += "</tr>"
		};
		_0x15A44 += "</table></center>";
		document.getElementById("dialogue-ignore-list-section").innerHTML = _0x15A44
	};
	openDialogue("dialogue-ignore-list")
}

function refreshFriendsList(_0x14DB0)
{
	if (_0x14DB0 == "none")
	{
		document.getElementById("dialogue-friends-list-section").innerHTML = "<span style=\'color:grey\'>(No friends yet)</span>"
	}
	else
	{
		var _0x15A44 = "";
		_0x15A44 += "<center><table style=\'border:1px solid black;border-radius:8pt;background-color:#e6ffe6;\' width=\'80%\'>";
		_0x15A44 += "<tr>";
		_0x15A44 += "<th style=\'color:black;\'>" + "Name" + "</th>";
		_0x15A44 += "<th style=\'color:black;\'>" + "Status" + "</th>";
		_0x15A44 += "<th colspan=\'2\' style=\'color:black;\'>" + "Actions" + "</th>";
		_0x15A44 += "</tr>";
		var _0x14DD3 = _0x14DB0.split("~");
		for (var _0x14C0C = 0; _0x14C0C < _0x14DD3.length; _0x14C0C++)
		{
			_0x15A44 += "<tr>";
			var _0x16764 = _0x14DD3[_0x14C0C];
			_0x14C0C++;
			var _0x18FDC = _0x14DD3[_0x14C0C];
			var _0x18FFF = "<span title=\'This person must add you as a friend.\' style=\'color:grey\'>(Pending)</span>";
			if (_0x18FDC == 1)
			{
				_0x18FFF = "<span style=\'color:red\'>Offline</span>"
			}
			else
			{
				if (_0x18FDC == 2)
				{
					_0x18FFF = "<span style=\'color:green\'>Online</span>"
				}
			};
			_0x15A44 += "<td class=\'center\'  style=\'color:black;\'>" + _0x16764 + "</td>";
			_0x15A44 += "<td class=\'center\' >" + _0x18FFF + "</td>";
			_0x15A44 += "<td class=\'center\' >" + "<img onclick=\'sendBytes(\"REMOVE_FRIEND=" + _0x16764 + "\")\' class=\'x-button img-20\' src=\'images/x.png\' />" + "</td>";
			_0x15A44 += "<td class=\'center\' >" + "<img onclick=\'clicksSpyFriend(\"" + _0x16764 + "\");closeDialogue(\"dialogue-friends-list\")\' class=\'x-button img-20\' src=\'images/eyeIcon.png\' />" + "</td>";
			_0x15A44 += "</tr>"
		};
		_0x15A44 += "</table></center>";
		document.getElementById("dialogue-friends-list-section").innerHTML = _0x15A44
	};
	openDialogue("dialogue-friends-list")
}

function clicksSpyFriend(_0x16764)
{
	confirmDialogue("images/eyeIcon.png", "Do you want to log into this account under view mode?<br /><br /><span style=\'color:grey;font-size:10pt\'>You\'ll be able to see this friends account as if you were logged into it, but will not be able to interact with it.", "View Account", "Cancel", "SPY_PROFILE=" + _0x16764)
}

function showLoading()
{
	openDialogue("dialogue-loading")
}

function hideLoading()
{
	closeDialogue("dialogue-loading")
}

function getImageExtention(_0x15003)
{
	switch (_0x15003)
	{
	case "darkCrystal":
		;
	case "bloodDiamond":
		return ".gif";
	default:
		return ".png"
	}
}

function refreshCastleChestLog(_0x15A44)
{
	document.getElementById("combat-castleChestLog-section").innerHTML = _0x15A44
}

function refreshMiningAllocationIcons()
{
	if (loaded_loadMiningOreBoxes)
	{
		var _0x191A3 = "";
		var _0x191C6 = "";
		_0x191A3 = "stone";
		document.getElementById(_0x191A3 + "-mining-assigned-td").innerHTML = "";
		for (var _0x14C0C = 0; _0x14C0C < 5; _0x14C0C++)
		{
			_0x191C6 = "miner";
			if (getItem(_0x191C6 + "Allocation" + _0x14C0C) == _0x191A3)
			{
				var _0x151ED = getImage("images/" + _0x191C6 + ".gif", "refreshMiningAllocationIcons_" + _0x191A3 + "_" + _0x191C6 + "_" + _0x14C0C);
				_0x151ED.setAttribute("class", "img-50");
				document.getElementById(_0x191A3 + "-mining-assigned-td").append(_0x151ED)
			};
			_0x191C6 = "drills";
			if (getItem(_0x191C6 + "Allocation" + _0x14C0C) == _0x191A3)
			{
				var _0x151ED = getImage("images/" + _0x191C6 + ".gif", "refreshMiningAllocationIcons_" + _0x191A3 + "_" + _0x191C6 + "_" + _0x14C0C);
				_0x151ED.setAttribute("class", "img-50");
				document.getElementById(_0x191A3 + "-mining-assigned-td").append(_0x151ED)
			};
			_0x191C6 = "crushers";
			if (getItem(_0x191C6 + "Allocation" + _0x14C0C) == _0x191A3)
			{
				var _0x151ED = getImage("images/" + _0x191C6 + ".gif", "refreshMiningAllocationIcons_" + _0x191A3 + "_" + _0x191C6 + "_" + _0x14C0C);
				_0x151ED.setAttribute("class", "img-50");
				document.getElementById(_0x191A3 + "-mining-assigned-td").append(_0x151ED)
			};
			_0x191C6 = "giantDrills";
			if (getItem(_0x191C6 + "Allocation" + _0x14C0C) == _0x191A3)
			{
				var _0x151ED = getImage("images/" + _0x191C6 + ".gif", "refreshMiningAllocationIcons_" + _0x191A3 + "_" + _0x191C6 + "_" + _0x14C0C);
				_0x151ED.setAttribute("class", "img-50");
				document.getElementById(_0x191A3 + "-mining-assigned-td").append(_0x151ED)
			};
			_0x191C6 = "excavators";
			if (getItem(_0x191C6 + "Allocation" + _0x14C0C) == _0x191A3)
			{
				var _0x151ED = getImage("images/" + _0x191C6 + ".gif", "refreshMiningAllocationIcons_" + _0x191A3 + "_" + _0x191C6 + "_" + _0x14C0C);
				_0x151ED.setAttribute("class", "img-50");
				document.getElementById(_0x191A3 + "-mining-assigned-td").append(_0x151ED)
			}
		};
		_0x191A3 = "copper";
		document.getElementById(_0x191A3 + "-mining-assigned-td").innerHTML = "";
		for (var _0x14C0C = 0; _0x14C0C < 5; _0x14C0C++)
		{
			_0x191C6 = "miner";
			if (getItem(_0x191C6 + "Allocation" + _0x14C0C) == _0x191A3)
			{
				var _0x151ED = getImage("images/" + _0x191C6 + ".gif", "refreshMiningAllocationIcons_" + _0x191A3 + "_" + _0x191C6 + "_" + _0x14C0C);
				_0x151ED.setAttribute("class", "img-50");
				document.getElementById(_0x191A3 + "-mining-assigned-td").append(_0x151ED)
			};
			_0x191C6 = "drills";
			if (getItem(_0x191C6 + "Allocation" + _0x14C0C) == _0x191A3)
			{
				var _0x151ED = getImage("images/" + _0x191C6 + ".gif", "refreshMiningAllocationIcons_" + _0x191A3 + "_" + _0x191C6 + "_" + _0x14C0C);
				_0x151ED.setAttribute("class", "img-50");
				document.getElementById(_0x191A3 + "-mining-assigned-td").append(_0x151ED)
			};
			_0x191C6 = "crushers";
			if (getItem(_0x191C6 + "Allocation" + _0x14C0C) == _0x191A3)
			{
				var _0x151ED = getImage("images/" + _0x191C6 + ".gif", "refreshMiningAllocationIcons_" + _0x191A3 + "_" + _0x191C6 + "_" + _0x14C0C);
				_0x151ED.setAttribute("class", "img-50");
				document.getElementById(_0x191A3 + "-mining-assigned-td").append(_0x151ED)
			};
			_0x191C6 = "giantDrills";
			if (getItem(_0x191C6 + "Allocation" + _0x14C0C) == _0x191A3)
			{
				var _0x151ED = getImage("images/" + _0x191C6 + ".gif", "refreshMiningAllocationIcons_" + _0x191A3 + "_" + _0x191C6 + "_" + _0x14C0C);
				_0x151ED.setAttribute("class", "img-50");
				document.getElementById(_0x191A3 + "-mining-assigned-td").append(_0x151ED)
			};
			_0x191C6 = "excavators";
			if (getItem(_0x191C6 + "Allocation" + _0x14C0C) == _0x191A3)
			{
				var _0x151ED = getImage("images/" + _0x191C6 + ".gif", "refreshMiningAllocationIcons_" + _0x191A3 + "_" + _0x191C6 + "_" + _0x14C0C);
				_0x151ED.setAttribute("class", "img-50");
				document.getElementById(_0x191A3 + "-mining-assigned-td").append(_0x151ED)
			}
		};
		_0x191A3 = "iron";
		document.getElementById(_0x191A3 + "-mining-assigned-td").innerHTML = "";
		for (var _0x14C0C = 0; _0x14C0C < 5; _0x14C0C++)
		{
			_0x191C6 = "miner";
			if (getItem(_0x191C6 + "Allocation" + _0x14C0C) == _0x191A3)
			{
				var _0x151ED = getImage("images/" + _0x191C6 + ".gif", "refreshMiningAllocationIcons_" + _0x191A3 + "_" + _0x191C6 + "_" + _0x14C0C);
				_0x151ED.setAttribute("class", "img-50");
				document.getElementById(_0x191A3 + "-mining-assigned-td").append(_0x151ED)
			};
			_0x191C6 = "drills";
			if (getItem(_0x191C6 + "Allocation" + _0x14C0C) == _0x191A3)
			{
				var _0x151ED = getImage("images/" + _0x191C6 + ".gif", "refreshMiningAllocationIcons_" + _0x191A3 + "_" + _0x191C6 + "_" + _0x14C0C);
				_0x151ED.setAttribute("class", "img-50");
				document.getElementById(_0x191A3 + "-mining-assigned-td").append(_0x151ED)
			};
			_0x191C6 = "crushers";
			if (getItem(_0x191C6 + "Allocation" + _0x14C0C) == _0x191A3)
			{
				var _0x151ED = getImage("images/" + _0x191C6 + ".gif", "refreshMiningAllocationIcons_" + _0x191A3 + "_" + _0x191C6 + "_" + _0x14C0C);
				_0x151ED.setAttribute("class", "img-50");
				document.getElementById(_0x191A3 + "-mining-assigned-td").append(_0x151ED)
			};
			_0x191C6 = "giantDrills";
			if (getItem(_0x191C6 + "Allocation" + _0x14C0C) == _0x191A3)
			{
				var _0x151ED = getImage("images/" + _0x191C6 + ".gif", "refreshMiningAllocationIcons_" + _0x191A3 + "_" + _0x191C6 + "_" + _0x14C0C);
				_0x151ED.setAttribute("class", "img-50");
				document.getElementById(_0x191A3 + "-mining-assigned-td").append(_0x151ED)
			};
			_0x191C6 = "excavators";
			if (getItem(_0x191C6 + "Allocation" + _0x14C0C) == _0x191A3)
			{
				var _0x151ED = getImage("images/" + _0x191C6 + ".gif", "refreshMiningAllocationIcons_" + _0x191A3 + "_" + _0x191C6 + "_" + _0x14C0C);
				_0x151ED.setAttribute("class", "img-50");
				document.getElementById(_0x191A3 + "-mining-assigned-td").append(_0x151ED)
			}
		};
		_0x191A3 = "silver";
		document.getElementById(_0x191A3 + "-mining-assigned-td").innerHTML = "";
		for (var _0x14C0C = 0; _0x14C0C < 5; _0x14C0C++)
		{
			_0x191C6 = "miner";
			if (getItem(_0x191C6 + "Allocation" + _0x14C0C) == _0x191A3)
			{
				var _0x151ED = getImage("images/" + _0x191C6 + ".gif", "refreshMiningAllocationIcons_" + _0x191A3 + "_" + _0x191C6 + "_" + _0x14C0C);
				_0x151ED.setAttribute("class", "img-50");
				document.getElementById(_0x191A3 + "-mining-assigned-td").append(_0x151ED)
			};
			_0x191C6 = "drills";
			if (getItem(_0x191C6 + "Allocation" + _0x14C0C) == _0x191A3)
			{
				var _0x151ED = getImage("images/" + _0x191C6 + ".gif", "refreshMiningAllocationIcons_" + _0x191A3 + "_" + _0x191C6 + "_" + _0x14C0C);
				_0x151ED.setAttribute("class", "img-50");
				document.getElementById(_0x191A3 + "-mining-assigned-td").append(_0x151ED)
			};
			_0x191C6 = "crushers";
			if (getItem(_0x191C6 + "Allocation" + _0x14C0C) == _0x191A3)
			{
				var _0x151ED = getImage("images/" + _0x191C6 + ".gif", "refreshMiningAllocationIcons_" + _0x191A3 + "_" + _0x191C6 + "_" + _0x14C0C);
				_0x151ED.setAttribute("class", "img-50");
				document.getElementById(_0x191A3 + "-mining-assigned-td").append(_0x151ED)
			};
			_0x191C6 = "giantDrills";
			if (getItem(_0x191C6 + "Allocation" + _0x14C0C) == _0x191A3)
			{
				var _0x151ED = getImage("images/" + _0x191C6 + ".gif", "refreshMiningAllocationIcons_" + _0x191A3 + "_" + _0x191C6 + "_" + _0x14C0C);
				_0x151ED.setAttribute("class", "img-50");
				document.getElementById(_0x191A3 + "-mining-assigned-td").append(_0x151ED)
			};
			_0x191C6 = "excavators";
			if (getItem(_0x191C6 + "Allocation" + _0x14C0C) == _0x191A3)
			{
				var _0x151ED = getImage("images/" + _0x191C6 + ".gif", "refreshMiningAllocationIcons_" + _0x191A3 + "_" + _0x191C6 + "_" + _0x14C0C);
				_0x151ED.setAttribute("class", "img-50");
				document.getElementById(_0x191A3 + "-mining-assigned-td").append(_0x151ED)
			}
		};
		_0x191A3 = "gold";
		document.getElementById(_0x191A3 + "-mining-assigned-td").innerHTML = "";
		for (var _0x14C0C = 0; _0x14C0C < 5; _0x14C0C++)
		{
			_0x191C6 = "miner";
			if (getItem(_0x191C6 + "Allocation" + _0x14C0C) == _0x191A3)
			{
				var _0x151ED = getImage("images/" + _0x191C6 + ".gif", "refreshMiningAllocationIcons_" + _0x191A3 + "_" + _0x191C6 + "_" + _0x14C0C);
				_0x151ED.setAttribute("class", "img-50");
				document.getElementById(_0x191A3 + "-mining-assigned-td").append(_0x151ED)
			};
			_0x191C6 = "drills";
			if (getItem(_0x191C6 + "Allocation" + _0x14C0C) == _0x191A3)
			{
				var _0x151ED = getImage("images/" + _0x191C6 + ".gif", "refreshMiningAllocationIcons_" + _0x191A3 + "_" + _0x191C6 + "_" + _0x14C0C);
				_0x151ED.setAttribute("class", "img-50");
				document.getElementById(_0x191A3 + "-mining-assigned-td").append(_0x151ED)
			};
			_0x191C6 = "crushers";
			if (getItem(_0x191C6 + "Allocation" + _0x14C0C) == _0x191A3)
			{
				var _0x151ED = getImage("images/" + _0x191C6 + ".gif", "refreshMiningAllocationIcons_" + _0x191A3 + "_" + _0x191C6 + "_" + _0x14C0C);
				_0x151ED.setAttribute("class", "img-50");
				document.getElementById(_0x191A3 + "-mining-assigned-td").append(_0x151ED)
			};
			_0x191C6 = "giantDrills";
			if (getItem(_0x191C6 + "Allocation" + _0x14C0C) == _0x191A3)
			{
				var _0x151ED = getImage("images/" + _0x191C6 + ".gif", "refreshMiningAllocationIcons_" + _0x191A3 + "_" + _0x191C6 + "_" + _0x14C0C);
				_0x151ED.setAttribute("class", "img-50");
				document.getElementById(_0x191A3 + "-mining-assigned-td").append(_0x151ED)
			};
			_0x191C6 = "excavators";
			if (getItem(_0x191C6 + "Allocation" + _0x14C0C) == _0x191A3)
			{
				var _0x151ED = getImage("images/" + _0x191C6 + ".gif", "refreshMiningAllocationIcons_" + _0x191A3 + "_" + _0x191C6 + "_" + _0x14C0C);
				_0x151ED.setAttribute("class", "img-50");
				document.getElementById(_0x191A3 + "-mining-assigned-td").append(_0x151ED)
			}
		};
		_0x191A3 = "promethium";
		document.getElementById(_0x191A3 + "-mining-assigned-td").innerHTML = "";
		for (var _0x14C0C = 0; _0x14C0C < 5; _0x14C0C++)
		{
			_0x191C6 = "miner";
			if (getItem(_0x191C6 + "Allocation" + _0x14C0C) == _0x191A3)
			{
				var _0x151ED = getImage("images/" + _0x191C6 + ".gif", "refreshMiningAllocationIcons_" + _0x191A3 + "_" + _0x191C6 + "_" + _0x14C0C);
				_0x151ED.setAttribute("class", "img-50");
				document.getElementById(_0x191A3 + "-mining-assigned-td").append(_0x151ED)
			};
			_0x191C6 = "drills";
			if (getItem(_0x191C6 + "Allocation" + _0x14C0C) == _0x191A3)
			{
				var _0x151ED = getImage("images/" + _0x191C6 + ".gif", "refreshMiningAllocationIcons_" + _0x191A3 + "_" + _0x191C6 + "_" + _0x14C0C);
				_0x151ED.setAttribute("class", "img-50");
				document.getElementById(_0x191A3 + "-mining-assigned-td").append(_0x151ED)
			};
			_0x191C6 = "crushers";
			if (getItem(_0x191C6 + "Allocation" + _0x14C0C) == _0x191A3)
			{
				var _0x151ED = getImage("images/" + _0x191C6 + ".gif", "refreshMiningAllocationIcons_" + _0x191A3 + "_" + _0x191C6 + "_" + _0x14C0C);
				_0x151ED.setAttribute("class", "img-50");
				document.getElementById(_0x191A3 + "-mining-assigned-td").append(_0x151ED)
			};
			_0x191C6 = "giantDrills";
			if (getItem(_0x191C6 + "Allocation" + _0x14C0C) == _0x191A3)
			{
				var _0x151ED = getImage("images/" + _0x191C6 + ".gif", "refreshMiningAllocationIcons_" + _0x191A3 + "_" + _0x191C6 + "_" + _0x14C0C);
				_0x151ED.setAttribute("class", "img-50");
				document.getElementById(_0x191A3 + "-mining-assigned-td").append(_0x151ED)
			};
			_0x191C6 = "excavators";
			if (getItem(_0x191C6 + "Allocation" + _0x14C0C) == _0x191A3)
			{
				var _0x151ED = getImage("images/" + _0x191C6 + ".gif", "refreshMiningAllocationIcons_" + _0x191A3 + "_" + _0x191C6 + "_" + _0x14C0C);
				_0x151ED.setAttribute("class", "img-50");
				document.getElementById(_0x191A3 + "-mining-assigned-td").append(_0x151ED)
			}
		};
		_0x191A3 = "titanium";
		document.getElementById(_0x191A3 + "-mining-assigned-td").innerHTML = "";
		for (var _0x14C0C = 0; _0x14C0C < 5; _0x14C0C++)
		{
			_0x191C6 = "miner";
			if (getItem(_0x191C6 + "Allocation" + _0x14C0C) == _0x191A3)
			{
				var _0x151ED = getImage("images/" + _0x191C6 + ".gif", "refreshMiningAllocationIcons_" + _0x191A3 + "_" + _0x191C6 + "_" + _0x14C0C);
				_0x151ED.setAttribute("class", "img-50");
				document.getElementById(_0x191A3 + "-mining-assigned-td").append(_0x151ED)
			};
			_0x191C6 = "drills";
			if (getItem(_0x191C6 + "Allocation" + _0x14C0C) == _0x191A3)
			{
				var _0x151ED = getImage("images/" + _0x191C6 + ".gif", "refreshMiningAllocationIcons_" + _0x191A3 + "_" + _0x191C6 + "_" + _0x14C0C);
				_0x151ED.setAttribute("class", "img-50");
				document.getElementById(_0x191A3 + "-mining-assigned-td").append(_0x151ED)
			};
			_0x191C6 = "crushers";
			if (getItem(_0x191C6 + "Allocation" + _0x14C0C) == _0x191A3)
			{
				var _0x151ED = getImage("images/" + _0x191C6 + ".gif", "refreshMiningAllocationIcons_" + _0x191A3 + "_" + _0x191C6 + "_" + _0x14C0C);
				_0x151ED.setAttribute("class", "img-50");
				document.getElementById(_0x191A3 + "-mining-assigned-td").append(_0x151ED)
			};
			_0x191C6 = "giantDrills";
			if (getItem(_0x191C6 + "Allocation" + _0x14C0C) == _0x191A3)
			{
				var _0x151ED = getImage("images/" + _0x191C6 + ".gif", "refreshMiningAllocationIcons_" + _0x191A3 + "_" + _0x191C6 + "_" + _0x14C0C);
				_0x151ED.setAttribute("class", "img-50");
				document.getElementById(_0x191A3 + "-mining-assigned-td").append(_0x151ED)
			};
			_0x191C6 = "excavators";
			if (getItem(_0x191C6 + "Allocation" + _0x14C0C) == _0x191A3)
			{
				var _0x151ED = getImage("images/" + _0x191C6 + ".gif", "refreshMiningAllocationIcons_" + _0x191A3 + "_" + _0x191C6 + "_" + _0x14C0C);
				_0x151ED.setAttribute("class", "img-50");
				document.getElementById(_0x191A3 + "-mining-assigned-td").append(_0x151ED)
			}
		}
	}
}

function getMiningResourceOperatingNumber(_0x1736C)
{
	var _0x17349 = 0;
	for (var _0x14C0C = 0; _0x14C0C < 5; _0x14C0C++)
	{
		if (getItemString(_0x1736C + "Allocation" + _0x14C0C) != "none")
		{
			_0x17349++
		}
	};
	return _0x17349
}
global_lastMiningResourceClicked = "none";

function clicksMiningResource(_0x1657A)
{
	var _0x16557 = ["stone", "copper", "iron", "silver", "gold", "promethium", "titanium", "ancient"];
	var _0x15A44 = "";
	if (_0x1657A == "miner" && getItem("wrench") > 0)
	{
		_0x15A44 += "<div onclick=\"closeDialogue(\'dialogue-confirm\');clicksWrenchDialogue()\" class=\"dialogue-fancy-button-div\">";
		_0x15A44 += "<table width=\"100%\">";
		_0x15A44 += "<tr>";
		_0x15A44 += "<td width=\"120px\"><img src=\"images/wrench.png\" class=\"img-100\" /></td>";
		_0x15A44 += "<td style=\"text-align:right;\"><span style=\"font-size:20pt;color:orange\">WRENCH</span><hr class=\"hr-thin\" /><i style=\"color:grey\">Set up wrench options.</i></td>";
		_0x15A44 += "</tr>";
		_0x15A44 += "</table>";
		_0x15A44 += "</div>"
	};
	_0x15A44 += "<div onclick=\"sendBytes(\'MINING_ALLOCATE_RESET=" + _0x1657A + "\');closeDialogue(\'dialogue-confirm\')\" class=\"dialogue-fancy-button-div\">";
	_0x15A44 += "<table width=\"100%\">";
	_0x15A44 += "<tr>";
	_0x15A44 += "<td width=\"120px\"><img src=\"images/" + _0x1657A + "ResetMining.png\" class=\"img-100\" /></td>";
	_0x15A44 += "<td style=\"text-align:right;\"><span style=\"font-size:20pt\">RESET</span><hr class=\"hr-thin\" /><i style=\"color:grey\">Pull back all " + _0x1657A + " from mining</i></td>";
	_0x15A44 += "</tr>";
	_0x15A44 += "</table>";
	_0x15A44 += "</div>";
	_0x15A44 += "<h4 style=\'text-align:center\'>Total Resources Collected</h4>";
	var _0x16534 = false;
	for (var _0x14C0C = 0; _0x14C0C < _0x16557.length; _0x14C0C++)
	{
		if (getItem(_0x16557[_0x14C0C] + capitalizeFirstLetter(_0x1657A)))
		{
			_0x15A44 += "<div style=\'border:1px solid black; background-color:grey;padding:5px 10px;color:white; display:inline-block;margin:10px;\'>" + "<img src=\'images/" + _0x16557[_0x14C0C] + ".png\' class=\'img-40\' /> " + formatNumber(getItem(_0x16557[_0x14C0C] + capitalizeFirstLetter(_0x1657A))) + "</div>";
			_0x16534 = true
		}
	};
	if (!_0x16534)
	{
		_0x15A44 += "<i style=\'color:grey;font-size:10pt\'>(none)<br /><br /><b>Close this dialogue and select an ore below to mine.</b></i>"
	};
	confirmDialogue("none", _0x15A44, "Close", "", "")
}

function doCorruptedKnightAnimation()
{
	setTimeout(function ()
	{
		dimScreen("corrupted_knight_escape", true)
	}, 3000)
}

function clicksWrenchDialogue()
{
	var _0x15A44 = "";
	_0x15A44 += "Set your current running mining machinery to automatically be turned on if you reach 0 oil?<br /><br />";
	_0x15A44 += "<span style=\'color:grey;font-size:10pt;\'>If your oil income is in the negative, once it reaches 0, instead of automatically turning off all machines - your miner will turn on a preset of machines that you have set.</span>";
	confirmDialogue("images/wrench.png", _0x15A44, "Set Machines", "Close", "SET_WRENCH")
}

function capitalizeFirstLetter(_0x14C52)
{
	return _0x14C52.substr(0, 1).toUpperCase() + _0x14C52.substr(1)
}

function setCSSFromServer(_0x16C2D, _0x19D1F, _0x19CFC, _0x19CD9)
{
	switch (_0x19D1F)
	{
	case "border":
		document.getElementById(_0x16C2D).style.border = _0x19CFC;
	case "color":
		document.getElementById(_0x16C2D).style.color = _0x19CFC;
	case "display":
		document.getElementById(_0x16C2D).style.display = _0x19CFC
	}
}

function getMiningResourcesOn(_0x16255)
{
	var _0x1738F = 0;
	for (var _0x14C0C = 1; _0x14C0C <= 5; _0x14C0C++)
	{
		if (getItemString(_0x16255 + "Allocation" + 1) != "none")
		{
			_0x1738F++
		}
	};
	return _0x1738F
}
global_lastMiningOreClicked = "none";
global_lastMiningResourceClickedAvailable = [];

function clicksOreToMine(_0x15233)
{
	global_lastMiningOreClicked = _0x15233;
	if (global_lastMiningResourceClicked == "none")
	{
		if (global_oreLevels[_0x15233].level > getLevel(getItem("miningXp")))
		{
			confirmDialogue("images/x.png", "You need a mining level of " + global_oreLevels[_0x15233].level + " to mine " + _0x15233 + "<br /><br /><i style=\'color:grey;font-size:14pt\'><b>Mining Xp</b> can be gained by using a stardust pickaxe.</i>", "Close", "", "")
		}
		else
		{
			var _0x15049 = document.getElementById("dialogue-mining-ore-section");
			var _0x1613D = "";
			var _0x15A44 = "";
			_0x1613D = "miner";
			if (getItem(_0x1613D) > 0)
			{
				global_lastMiningResourceClickedAvailable[_0x1613D] = getMinersOrMachineryAvailable(_0x1613D);
				document.getElementById("dialogue-mining-ore-" + _0x1613D).style.display = "";
				var _0x1659D = getAllocationAmount(_0x1613D, _0x15233);
				document.getElementById("dialogue-mining-ore-" + _0x1613D + "-allocated").innerHTML = _0x1659D
			};
			_0x1613D = "drills";
			if (getItem(_0x1613D) > 0)
			{
				global_lastMiningResourceClickedAvailable[_0x1613D] = getMinersOrMachineryAvailable(_0x1613D);
				document.getElementById("dialogue-mining-ore-" + _0x1613D).style.display = "";
				var _0x1659D = getAllocationAmount(_0x1613D, _0x15233);
				document.getElementById("dialogue-mining-ore-" + _0x1613D + "-allocated").innerHTML = _0x1659D
			};
			_0x1613D = "crushers";
			if (getItem(_0x1613D) > 0)
			{
				global_lastMiningResourceClickedAvailable[_0x1613D] = getMinersOrMachineryAvailable(_0x1613D);
				document.getElementById("dialogue-mining-ore-" + _0x1613D).style.display = "";
				var _0x1659D = getAllocationAmount(_0x1613D, _0x15233);
				document.getElementById("dialogue-mining-ore-" + _0x1613D + "-allocated").innerHTML = _0x1659D
			};
			_0x1613D = "giantDrills";
			if (getItem(_0x1613D) > 0)
			{
				global_lastMiningResourceClickedAvailable[_0x1613D] = getMinersOrMachineryAvailable(_0x1613D);
				document.getElementById("dialogue-mining-ore-" + _0x1613D).style.display = "";
				var _0x1659D = getAllocationAmount(_0x1613D, _0x15233);
				document.getElementById("dialogue-mining-ore-" + _0x1613D + "-allocated").innerHTML = _0x1659D
			};
			_0x1613D = "excavators";
			if (getItem(_0x1613D) > 0)
			{
				global_lastMiningResourceClickedAvailable[_0x1613D] = getMinersOrMachineryAvailable(_0x1613D);
				document.getElementById("dialogue-mining-ore-" + _0x1613D).style.display = "";
				var _0x1659D = getAllocationAmount(_0x1613D, _0x15233);
				document.getElementById("dialogue-mining-ore-" + _0x1613D + "-allocated").innerHTML = _0x1659D
			};
			openDialogue("dialogue-mining-ore")
		}
	}
	else
	{
		sendBytes("MINING_ALLOCATE=" + global_lastMiningResourceClicked + "~" + _0x15233)
	}
}

function allocateMinerOrMachinery(_0x15995, _0x1594F)
{
	var _0x15972 = 1;
	if (!_0x1594F)
	{
		_0x15972 = -1
	};
	var _0x1592C = parseInt(document.getElementById("dialogue-mining-ore-" + _0x15995 + "-allocated").innerHTML);
	if (_0x1592C + _0x15972 < 0 && !_0x1594F)
	{
		return
	}
	else
	{
		if (_0x1594F && global_lastMiningResourceClickedAvailable[_0x15995] == 0)
		{
			return
		}
		else
		{
			global_lastMiningResourceClickedAvailable[_0x15995] += (_0x15972 * -1);
			if (_0x15972 > 0)
			{
				sendBytes("MINING_ALLOCATE=" + _0x15995 + "~" + global_lastMiningOreClicked)
			}
			else
			{
				sendBytes("MINING_DEALLOCATE=" + _0x15995 + "~" + global_lastMiningOreClicked)
			};
			document.getElementById("dialogue-mining-ore-" + _0x15995 + "-allocated").innerHTML = _0x1592C + _0x15972
		}
	}
}

function getMinersOrMachineryAvailable(_0x15995)
{
	var _0x15DF5 = 0;
	for (var _0x14C0C = 0; _0x14C0C < getItem(_0x15995); _0x14C0C++)
	{
		if (getItemString(_0x15995 + "Allocation" + _0x14C0C) == "none")
		{
			_0x15DF5++
		}
	};
	return _0x15DF5
}

function getAllocationAmount(_0x15995, _0x15233)
{
	var _0x15DF5 = 0;
	for (var _0x14C0C = 0; _0x14C0C < 5; _0x14C0C++)
	{
		if (getItem(_0x15995 + "Allocation" + _0x14C0C) == _0x15233)
		{
			_0x15DF5++
		}
	};
	return _0x15DF5
}
loaded_loadMiningOreBoxes = false;

function loadMiningOreBoxes()
{
	document.getElementById("item-section-ore-to-mine-1").innerHTML = "";
	addItemBoxOreToMine("stone", "STONE", 1);
	addItemBoxOreToMine("copper", "COPPER", 1);
	addItemBoxOreToMine("iron", "IRON", 5);
	addItemBoxOreToMine("silver", "SILVER", 10);
	addItemBoxOreToMine("gold", "GOLD", 20);
	addItemBoxOreToMine("promethium", "PROMETHIUM", 40);
	addItemBoxOreToMine("titanium", "TITANIUM", 65);
	refreshMiningAllocationIcons();
	if (!loaded_loadMiningOreBoxes)
	{
		loaded_loadMiningOreBoxes = true
	}
}

function startClientTicks()
{
	idleHeroCanvasTick();
	idleFightingCanvasTick();
	setInterval(idleHeroCanvasTick, 750);
	setInterval(idleFightingCanvasTick, 25);
	setInterval(fightingMonsterCanvasTick, 25)
}

function refreshFaradoxDarkCrystalTooltip()
{
	var _0x18FB9 = 0;
	if (getItem("greenCrystalUsed") > 0)
	{
		_0x18FB9++
	};
	if (getItem("cyanCrystalUsed") > 0)
	{
		_0x18FB9++
	};
	if (getItem("redCrystalUsed") > 0)
	{
		_0x18FB9++
	};
	if (getItem("blueCrystalUsed") > 0)
	{
		_0x18FB9++
	};
	if (getItem("yellowCrystalUsed") > 0)
	{
		_0x18FB9++
	};
	document.getElementById("darkCrystalUsed-amm").innerHTML = _0x18FB9
}
var global_tabOff = false;

function clientTick()
{
	if (global_lastTabId == "right-crafting")
	{
		refreshCraftables()
	};
	if (global_lastTabId == "right-brewing")
	{
		refreshBrewing()
	};
	if (global_lastTabId == "right-convertMagic")
	{
		refreshMagicTransformList()
	};
	if (global_lastTabId == "right-mining")
	{
		loadMiningOreBoxes()
	};
	if (document.hidden && !global_tabOff)
	{
		sendBytes("TAB_OFF");
		global_tabOff = true
	};
	if (!document.hidden && global_tabOff)
	{
		sendBytes("TAB_ON");
		global_tabOff = false
	};
	if (getItem("marketNofification") == 1)
	{
		showElement("notification-marketReady")
	}
	else
	{
		hideElement("notification-marketReady")
	};
	if (getItem("smallManaStar") > 0 || getItem("mediumManaStar") > 0 || getItem("largeManaStar") > 0 || getItem("hugeManaStar") > 0)
	{
		showElement("notification-manaReadyNotification")
	}
	else
	{
		hideElement("notification-manaReadyNotification")
	};
	if (document.hidden && global_titleNotification && localStorage.getItem("titletrigger") == null)
	{
		if (document.getElementById("html-title").innerHTML == "Diamond Hunt 3")
		{
			document.getElementById("html-title").innerHTML = "Notifications - Ready"
		}
		else
		{
			document.getElementById("html-title").innerHTML = "Diamond Hunt 3"
		}
	}
	else
	{
		if (document.getElementById("html-title").innerHTML != "Diamond Hunt 3")
		{
			document.getElementById("html-title").innerHTML = "Diamond Hunt 3"
		}
	}
}

function sanitize(_0x19C07)
{
	const _0x19BC1 = {
		'&': "&amp;"
		, '<': "&lt;"
		, '>': "&gt;"
		, '\"': "&quot;"
		, "\'": "&#x27;"
		, "/": "&#47;"
	};
	const _0x19BE4 = /[&<>"'/]/ig;
	return _0x19C07.replace(_0x19BE4, (_0x19C2A) =>
	{
		return (_0x19BC1[_0x19C2A])
	})
}

function removeChars(_0x19A86)
{
	return _0x19A86.replace(/[^\x00-\x7F]/g, "")
}
global_autoscrollChat = true;

function setAutoScroll(_0x15DD2)
{
	global_autoscrollChat = _0x15DD2;
	if (global_autoscrollChat)
	{
		document.getElementById("chat-autoscroll-button-check").src = "images/check.png";
		var _0x15F76 = document.getElementById("chat-area-view");
		$(_0x15F76).scrollTop($(_0x15F76)[0].scrollHeight)
	}
	else
	{
		document.getElementById("chat-autoscroll-button-check").src = "images/x.png"
	}
}

function chat(_0x14DB0)
{
	var _0x14DD3 = _0x14DB0.split("~");
	var _0x160F7 = _0x14DD3[0];
	var _0x1606B = _0x14DD3[1];
	var _0x15FDF = _0x14DD3[2];
	var _0x15F99 = _0x14DD3[3];
	var _0x16025 = _0x14DD3[4];
	var _0x14E3C = _0x14DD3[5];
	var _0x1608E = false;
	if (global_friendsAndIgnoreList[_0x160F7] != null)
	{
		if (global_friendsAndIgnoreList[_0x160F7] == "ignore")
		{
			return
		};
		if (global_friendsAndIgnoreList[_0x160F7] == "friend")
		{
			_0x1608E = true
		}
	};
	var _0x15FBC = "";
	if (_0x15F99 != "none")
	{
		_0x15FBC = " <img src=\'images/" + _0x15F99 + ".png\' style=\'vertical-align:middle\' width=\'30px\' height=\'30px\' /> "
	};
	var _0x16002 = "";
	var _0x160D4 = "";
	if (_0x15FDF != "none")
	{
		tagTitle = _0x15FDF;
		switch (_0x15FDF)
		{
		case "Superdonor":
			tagTitle = "Super donor";
			break;
		case "yell":
			tagTitle = "Server Message";
			break;
		case "Ultradonor":
			tagTitle = "Ultra donor";
			break
		};
		_0x16002 = " <span class=\'chat-tag-" + _0x15FDF + "\'>" + tagTitle + "</span> ";
		switch (_0x15FDF)
		{
		case "Dev":
			_0x160D4 = "style=\'color:#808000\'";
			break;
		case "Financier":
			_0x160D4 = "style=\'color:#007a99\'";
			break;
		case "Investor":
			_0x160D4 = "style=\'color:#cc66ff\'";
			break;
		case "InvestorPlus":
			_0x160D4 = "style=\'color:#00a3cc\'";
			break;
		case "Moderator":
			_0x160D4 = "style=\'color:grey;\'";
			break;
		case "yell":
			_0x160D4 = "style=\'color:blue;\'";
			break
		}
	};
	var _0x160B1 = _0x16025.split(" ");
	msg = "";
	for (var _0x14C0C = 0; _0x14C0C < _0x160B1.length; _0x14C0C++)
	{
		if (isValidURL(_0x160B1[_0x14C0C]))
		{
			msg += convertStringToURL(_0x160B1[_0x14C0C]) + " "
		}
		else
		{
			msg += sanitize(_0x160B1[_0x14C0C]) + " "
		}
	};
	_0x16025 = removeChars(msg);
	if (_0x14E3C == "error")
	{
		htmlOutput = "<span style=\'color:grey\'>" + _0x16025 + "</span>"
	}
	else
	{
		if (_0x14E3C == "pm_from")
		{
			_0x160D4 = "style=\'color:purple\'";
			htmlOutput = "<span style=\'color:grey\'>" + getTimeFetch() + "</span>" + _0x15FBC + _0x16002 + "<span " + _0x160D4 + "> [PM from " + _0x160F7 + "] " + _0x16025 + "</span>"
		}
		else
		{
			if (_0x14E3C == "pm_to")
			{
				_0x160D4 = "style=\'color:purple\'";
				htmlOutput = "<span style=\'color:grey\'>" + getTimeFetch() + "</span>" + _0x15FBC + _0x16002 + "<span " + _0x160D4 + "> [Sent to " + _0x160F7 + "] " + _0x16025 + "</span>"
			}
			else
			{
				if (_0x15FDF == "yell")
				{
					htmlOutput = "<span style=\'color:grey\'>" + getTimeFetch() + "</span>" + _0x15FBC + _0x16002 + "<span " + _0x160D4 + "><b>" + _0x16025 + "</b></span>"
				}
				else
				{
					var _0x16048 = "";
					if (_0x1608E)
					{
						_0x16048 = " <img src=\'images/smileIcon.svg\' style=\'vertical-align:middle\' width=\'30px\' height=\'30px\' /> "
					};
					if (_0x15FDF == "Investor")
					{
						htmlOutput = "<span style=\'color:grey\'>" + getTimeFetch() + _0x16048 + "</span>" + _0x15FBC + "<img src=\'images/investor.gif\' style=\'vertical-align:middle;\'  /> " + "<span " + _0x160D4 + "><b oncontextmenu=\'return rightClicksChatUsername(this, \"" + _0x160F7 + "\")\' onclick=\'clicksChatUsername(\"" + _0x160F7 + "\") class=\'chat-username\'>" + _0x160F7 + " (" + _0x1606B + "): </b>" + _0x16025 + "</span>"
					}
					else
					{
						if (_0x15FDF == "InvestorPlus")
						{
							htmlOutput = "<span style=\'color:grey\'>" + getTimeFetch() + _0x16048 + "</span>" + _0x15FBC + "<img src=\'images/investorPlus.gif\' style=\'vertical-align:middle;\'  /> " + "<span " + _0x160D4 + "><b oncontextmenu=\'return rightClicksChatUsername(this, \"" + _0x160F7 + "\")\' onclick=\'clicksChatUsername(\"" + _0x160F7 + "\") class=\'chat-username\'>" + _0x160F7 + " (" + _0x1606B + "): </b>" + _0x16025 + "</span>"
						}
						else
						{
							htmlOutput = "<span style=\'color:grey\'>" + getTimeFetch() + _0x16048 + "</span>" + _0x15FBC + _0x16002 + "<span " + _0x160D4 + "><b class=\'chat-username\' oncontextmenu=\'return rightClicksChatUsername(this, \"" + _0x160F7 + "\")\' onclick=\'clicksChatUsername\"" + _0x160F7 + "\")\'>" + _0x160F7 + " (" + _0x1606B + "): </b>" + _0x16025 + "</span>"
						}
					}
				}
			}
		}
	};
	var _0x15F76 = document.getElementById("chat-area-view");
	if (_0x15F76.innerHTML.length >= 60000)
	{
		_0x15F76.innerHTML = _0x15F76.innerHTML.substr(30000, _0x15F76.innerHTML.length)
	};
	$(_0x15F76).append("<div>" + htmlOutput + "</div>");
	if (global_autoscrollChat)
	{
		$(_0x15F76).scrollTop($(_0x15F76)[0].scrollHeight)
	}
}

function clicksChatUsername(_0x16160)
{
	akert(_0x16160);
	document.getElementById("chat-area-input").value = "/pm " + _0x16160.replaceAll(" ", "_") + " ";
	document.getElementById("chat-area-input").focus();
	return false
}

function rightClicksChatUsername(_0x16C0A, _0x16160)
{
	var _0x19B35 = window.open("https://dh3.diamondhunt.co/hiscores/search.php?username=" + _0x16160, "_blank");
	_0x19B35.focus();
	return false
}

function isValidURL(_0x17BA0)
{
	if (_0x17BA0.indexOf("http") >= 0 || _0x17BA0.indexOf("www.") >= 0 || _0x17BA0.indexOf(".com") >= 0 || _0x17BA0.indexOf(".ca") >= 0 || _0x17BA0.indexOf(".co") >= 0 || _0x17BA0.indexOf(".net") >= 0 || _0x17BA0.indexOf(".us") >= 0)
	{
		if (_0x17BA0.indexOf("%22") >= 0 || _0x17BA0.indexOf("%27") >= 0 || _0x17BA0.indexOf("%3E") >= 0 || _0x17BA0.indexOf("%3C") >= 0 || _0x17BA0.indexOf("&#62;") >= 0 || _0x17BA0.indexOf("&#60;") >= 0 || _0x17BA0.indexOf(";") >= 0 || _0x17BA0.indexOf("~") >= 0 || _0x17BA0.indexOf("\"") >= 0 || _0x17BA0.indexOf("<") >= 0 || _0x17BA0.indexOf(">") >= 0 || _0x17BA0.indexOf("javascript:") >= 0 || _0x17BA0.indexOf("window") >= 0 || _0x17BA0.indexOf("document") >= 0 || _0x17BA0.indexOf("cookie") >= 0)
		{
			return false
		};
		return true
	}
	else
	{
		return false
	}
}

function convertStringToURL(_0x14C52)
{
	if (!_0x14C52.startsWith("http"))
	{
		_0x14C52 = "http://" + _0x14C52
	};
	var _0x16908 = "<a onclick=\'return clicksLink();\' href=\'" + _0x14C52 + "\' target=\'_blank\'>" + _0x14C52 + "</a>";
	return _0x16908
}

function clicksLink()
{
	if (getItem("chatLinkWarning") == 0)
	{
		confirmDialogue("images/warning.png", "<b>Warning!</b> Clicking links in the chat can take you to dangerous websites.  Diamond Hunt is not responsible if you are compromised by clicking on external links.", "I understand", "Cancel", "CHAT_LINK_WARNING");
		return false
	};
	return true
}

function clicksFriendsButton()
{
	sendBytes("REFRESH_FRIENDS_LIST")
}

function clicksIgnoreButton()
{
	sendBytes("REFRESH_IGNORE_LIST")
}

function getTimeFetch()
{
	var _0x16E3A = new Date();
	if (_0x16E3A.getHours() < 10)
	{
		var _0x17605 = "0" + _0x16E3A.getHours()
	}
	else
	{
		var _0x17605 = _0x16E3A.getHours()
	};
	if (_0x16E3A.getMinutes() < 10)
	{
		var _0x17628 = "0" + _0x16E3A.getMinutes()
	}
	else
	{
		var _0x17628 = _0x16E3A.getMinutes()
	};
	var _0x175E2 = "[" + _0x17605 + ":" + _0x17628 + "] ";
	return _0x175E2
}

function chatInput(_0x14C75)
{
	if (_0x14C75.keyCode == 13)
	{
		chatSend()
	};
	if (_0x14C75.keyCode == 9)
	{
		if (getItemString("lastPM") != "none" && document.getElementById("chat-area-input").value.length == 0)
		{
			document.getElementById("chat-area-input").value = "/pm " + getItemString("lastPM") + " "
		};
		_0x14C75.preventDefault()
	}
}

function chatSend()
{
	sendBytes("CHAT=" + document.getElementById("chat-area-input").value.replace(/~/g, " "));
	document.getElementById("chat-area-input").value = ""
}

function changeChatHeight(_0x15D8C)
{
	var _0x15DAF = parseInt(document.getElementById("chat-area-view").style.height);
	_0x15DAF += _0x15D8C;
	document.getElementById("chat-area-view").style.height = _0x15DAF + "px"
}

function refreshHomeTab()
{
	if (getItem("homeHint") == 0)
	{
		sendBytes("HOME_HINT_OFF")
	}
}
var clientSetItesmTick = 0;

function setItems(_0x14DB0)
{
	clientSetItesmTick++;
	var _0x14DD3 = _0x14DB0.split("~");
	var _0x176B4 = [];
	for (var _0x14C0C = 0; _0x14C0C < _0x14DD3.length; _0x14C0C++)
	{
		var _0x15003 = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x176D7 = _0x14DD3[_0x14C0C];
		var _0x1771D = getItem(_0x15003);
		setItem(_0x15003, _0x176D7);
		if (_0x1771D != _0x176D7 || clientSetItesmTick <= 3)
		{
			_0x176B4.push(_0x15003)
		};
		if (document.getElementById("item-box-" + _0x15003) !== null)
		{
			if (getItem(_0x15003, false) > 0)
			{
				if (document.getElementById("item-box-" + _0x15003).style.display == "none")
				{
					document.getElementById("item-box-" + _0x15003).style.display = ""
				}
			}
			else
			{
				if (document.getElementById("item-box-" + _0x15003).style.display != "none")
				{
					document.getElementById("item-box-" + _0x15003).style.display = "none"
				}
			}
		};
		var _0x17691 = document.getElementsByTagName("item-" + _0x15003);
		for (var _0x176FA = 0; _0x176FA < _0x17691.length; _0x176FA++)
		{
			if (_0x17691[_0x176FA].hasAttribute("type"))
			{
				if (_0x17691[_0x176FA].getAttribute("type") == "timer")
				{
					_0x17691[_0x176FA].innerHTML = formatTime(_0x176D7)
				};
				if (_0x17691[_0x176FA].getAttribute("type") == "number")
				{
					_0x17691[_0x176FA].innerHTML = formatNumber(_0x176D7)
				}
			}
			else
			{
				_0x17691[_0x176FA].innerHTML = _0x176D7
			}
		}
	};
	for (var _0x14C0C = 0; _0x14C0C < _0x176B4.length; _0x14C0C++)
	{
		manageChangedItem(_0x176B4[_0x14C0C])
	}
}

function hideItems(_0x14DB0)
{
	clientSetItesmTick++;
	var _0x14DD3 = _0x14DB0.split("~");
	var _0x176B4 = [];
	for (var _0x14C0C = 0; _0x14C0C < _0x14DD3.length; _0x14C0C++)
	{
		var _0x15003 = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x176D7 = _0x14DD3[_0x14C0C];
		_0x176D7 = 0;
		var _0x1771D = getItem(_0x15003);
		setItem(_0x15003, _0x176D7);
		if (_0x1771D != _0x176D7 || clientSetItesmTick <= 3)
		{
			_0x176B4.push(_0x15003)
		};
		if (document.getElementById("item-box-" + _0x15003) !== null)
		{
			if (getItem(_0x15003, false) > 0)
			{
				if (document.getElementById("item-box-" + _0x15003).style.display == "none")
				{
					document.getElementById("item-box-" + _0x15003).style.display = ""
				}
			}
			else
			{
				if (document.getElementById("item-box-" + _0x15003).style.display != "none")
				{
					document.getElementById("item-box-" + _0x15003).style.display = "none"
				}
			}
		};
		var _0x17691 = document.getElementsByTagName("item-" + _0x15003);
		for (var _0x176FA = 0; _0x176FA < _0x17691.length; _0x176FA++)
		{
			if (_0x17691[_0x176FA].hasAttribute("type"))
			{
				if (_0x17691[_0x176FA].getAttribute("type") == "timer")
				{
					_0x17691[_0x176FA].innerHTML = formatTime(_0x176D7)
				};
				if (_0x17691[_0x176FA].getAttribute("type") == "number")
				{
					_0x17691[_0x176FA].innerHTML = formatNumber(_0x176D7)
				}
			}
			else
			{
				_0x17691[_0x176FA].innerHTML = _0x176D7
			}
		}
	};
	for (var _0x14C0C = 0; _0x14C0C < _0x176B4.length; _0x14C0C++)
	{
		manageChangedItem(_0x176B4[_0x14C0C])
	}
}

function formatNumber(_0x16D45)
{
	if (_0x16D45 == "INF")
	{
		return "<span style=\'font-size:20pt;vertical-align: middle;\'>&#8734;</span>"
	};
	if (isNaN(_0x16D45))
	{
		return _0x16D45
	};
	var _0x16D22 = "";
	if (_0x16D45 >= 1000000000 && _0x16D45 < 10000000000)
	{
		_0x16D45 /= 1000000;
		_0x16D22 = "M"
	}
	else
	{
		if (_0x16D45 >= 10000000000)
		{
			_0x16D45 /= 1000000000;
			_0x16D22 = "B"
		}
	};
	return Math.floor(_0x16D45).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "" + _0x16D22
}

function manageChangedItem(_0x15003)
{
	var _0x14EA5 = getItem(_0x15003, false);
	if (_0x15003.endsWith("Allocation0") || _0x15003.endsWith("Allocation1") || _0x15003.endsWith("Allocation2") || _0x15003.endsWith("Allocation3") || _0x15003.endsWith("Allocation4"))
	{
		refreshMiningAllocationIcons()
	};
	if (_0x14EA5 == -1)
	{
		if (_0x15003.endsWith("Quest"))
		{
			loadQuestAndAchievementsTab()
		}
	};
	if (_0x15003.endsWith("Quest"))
	{
		var _0x1808C = getQuestsInProgress();
		if (_0x1808C > 0)
		{
			document.getElementById("notification-questsStarted-label").innerHTML = "In Progress: " + _0x1808C;
			document.getElementById("notification-questsStarted").style.display = ""
		}
		else
		{
			document.getElementById("notification-questsStarted").style.display = "none"
		};
		if (_0x15003 == "theFrozenBarbarianQuest")
		{
			if (_0x14EA5 == 1)
			{
				showElement("frozenBarbarianMap")
			}
			else
			{
				hideElement("frozenBarbarianMap")
			}
		}
	};
	if (_0x15003.toLowerCase().endsWith("lootbag"))
	{
		if (document.getElementById("explorer" + "-status") != null)
		{
			document.getElementById("explorer" + "-status").innerHTML = formatNumber(getTotalLootBagsOwned())
		}
	};
	if (_0x15003.startsWith("heroDebuff"))
	{
		resetHeroNerfs()
	};
	if (_0x15003.endsWith("Cooldown"))
	{
		if (global_lastTabId == "right-combat-fighting")
		{
			refeshMagicInCombat()
		}
	};
	if (_0x15003.endsWith("Museum"))
	{
		refreshMuseum();
		if (document.getElementById("museum-info-itembox") != null)
		{
			document.getElementById("museum-info-itembox").innerHTML = getMuseumItemsCount()[0] + "/" + getMuseumItemsCount()[1]
		}
	};
	initializeTooltips;
	if (_0x15003.endsWith("Oven") || _0x15003 == "researcherCooking")
	{
		initializeTooltips()
	};
	if (_0x15003.endsWith("Seeds"))
	{
		if (_0x14EA5 == 0)
		{
			selectedSeed = "none"
		}
	};
	if (_0x15003.endsWith("PotionTimer"))
	{
		if (_0x14EA5 > 0)
		{
			showElement("notification-" + _0x15003);
			if (document.getElementById("notification" + "-" + _0x15003) != null)
			{
				document.getElementById("notification" + "-" + _0x15003).setAttribute("onclick", "clicksItem(\'" + _0x15003.substr(0, _0x15003.length - 5) + "\')")
			}
		}
		else
		{
			hideElement("notification-" + _0x15003)
		}
	};
	if (_0x15003.endsWith("Bought"))
	{
		loadShopTab()
	};
	if (_0x15003.endsWith("Xp"))
	{
		refreshTopSkillBar()
	};
	if (_0x15003.startsWith("researcher"))
	{
		if (document.getElementById("research-completed-label") != null)
		{
			document.getElementById("research-completed-label").innerHTML = getTotalResearches()
		};
		refreshResearching()
	};
	if (_0x15003.endsWith("Kills"))
	{
		initializeTooltips()
	};
	if (_0x15003.toLowerCase().endsWith("fishingnet") || _0x15003.toLowerCase().endsWith("harpoon") || _0x15003.toLowerCase().endsWith("fishingrod"))
	{
		initializeTooltips()
	};
	switch (_0x15003)
	{
	case "wrench":
		if (_0x14EA5 > 0)
		{
			if (document.getElementById("wrench-icon-miner") != null)
			{
				document.getElementById("wrench-icon-miner").style.display = ""
			}
		};
		break;
	case "chefCooldown":
		if (document.getElementById("chef" + "-itemBox-value") != null)
		{
			if (_0x14EA5 <= 1)
			{
				document.getElementById("chef" + "-itemBox-value").innerHTML = "Ready"
			}
			else
			{
				document.getElementById("chef" + "-itemBox-value").innerHTML = formatTime(_0x14EA5)
			}
		};
		if (_0x14EA5 == 0 && getItem("theStewChefQuest") == -1)
		{
			showElement("notification-chefStew")
		}
		else
		{
			hideElement("notification-chefStew")
		};
		break;
	case "piratesParrot":
		if (_0x14EA5 > 0 && document.getElementById("item-box-pirate-image") != null)
		{
			document.getElementById("item-box-pirate-image").src = "images/pirate2.png"
		};
		break;
	case "spyglass":
		if (document.getElementById("item-box-data-pirate") != null)
		{
			if (getItem("spyglass") > 0)
			{
				document.getElementById("item-box-data-pirate").style.display = "block"
			}
		};
		break;
	case "oxygenTankTimer":
		;
	case "rowBoatTimer":
		;
	case "canoeBoatTimer":
		var _0x180AF = _0x15003.substring(0, _0x15003.length - 5);
		if (_0x14EA5 > 1)
		{
			showElement("notification-" + _0x15003);
			if (document.getElementById(_0x180AF + "-itemBox-value") != null)
			{
				document.getElementById(_0x180AF + "-itemBox-value").innerHTML = formatTime(_0x14EA5)
			};
			hideElement("notification-" + _0x15003 + "-Ready")
		}
		else
		{
			hideElement("notification-" + _0x15003);
			if (_0x14EA5 == 1)
			{
				if (document.getElementById(_0x180AF + "-itemBox-value") != null)
				{
					document.getElementById(_0x180AF + "-itemBox-value").innerHTML = "Ready"
				};
				showElement("notification-" + _0x15003 + "-Ready")
			}
			else
			{
				if (document.getElementById(_0x180AF + "-itemBox-value") != null)
				{
					document.getElementById(_0x180AF + "-itemBox-value").innerHTML = ""
				};
				hideElement("notification-" + _0x15003 + "-Ready")
			}
		};
		break;
	case "dungeonSignsSolved":
		if (_0x14EA5 > 0)
		{
			document.getElementById("dungeonNotes-combat").style.display = ""
		};
		break;
	case "shinyMonster":
		if (_0x14EA5 == 1)
		{
			showElement("shiny-monster-gif")
		}
		else
		{
			hideElement("shiny-monster-gif")
		};
		break;
	case "blueFurnaceOrbBound":
		if (_0x14EA5 > 0)
		{
			showElement("blueFurnaceOrb-tooltip-furnace")
		};
		break;
	case "specialBaitOn":
		if (getItem("specialBaitOn") == 1)
		{
			showElement("notification-specialBaitOn")
		}
		else
		{
			hideElement("notification-specialBaitOn")
		};
		break;
	case "greenShinyMonsterOrbBound":
		;
	case "greenShinyMonsterOrbBoundTimer":
		var _0x1611A = "greenShinyMonsterOrbBound";
		if (getItem(_0x1611A) > 0)
		{
			if (getItem(_0x1611A + "Timer") == 0)
			{
				showElement("notification-" + _0x1611A);
				hideElement("notification-" + _0x1611A + "Timer")
			}
			else
			{
				hideElement("notification-" + _0x1611A);
				showElement("notification-" + _0x1611A + "Timer")
			}
		};
		break;
	case "theTraitorQuest":
		if (getItem("theTraitorQuest") == -1)
		{
			if (document.getElementById("castle-traitor") != null)
			{
				document.getElementById("castle-traitor").style.display = "none"
			}
		};
		if (getItem("theTraitorQuest") >= 2)
		{
			if (document.getElementById("castle-traitor") != null)
			{
				document.getElementById("castle-traitor").style.display = "none"
			}
		};
		if (getItem("theTraitorQuest") == 4)
		{
			if (document.getElementById("castle-traitor1") != null)
			{
				document.getElementById("castle-traitor1").style.display = ""
			}
		}
		else
		{
			document.getElementById("castle-traitor1").style.display = "none"
		};
		if (getItem("theTraitorQuest") == 5)
		{
			if (document.getElementById("castle-traitor2") != null)
			{
				document.getElementById("castle-traitor2").style.display = ""
			}
		}
		else
		{
			document.getElementById("castle-traitor2").style.display = "none"
		};
		if (getItem("theTraitorQuest") == 6 || getItem("theTraitorQuest") == 7)
		{
			if (document.getElementById("castle-traitor3") != null)
			{
				document.getElementById("castle-traitor3").style.display = ""
			}
		}
		else
		{
			document.getElementById("castle-traitor3").style.display = "none"
		};
		break;
	case "greenShinyWoodcuttingOrbBound":
		;
	case "greenShinyWoodcuttingOrbBoundTimer":
		var _0x1611A = "greenShinyWoodcuttingOrbBound";
		if (getItem(_0x1611A) > 0)
		{
			if (getItem(_0x1611A + "Timer") == 0)
			{
				showElement("notification-" + _0x1611A);
				hideElement("notification-" + _0x1611A + "Timer")
			}
			else
			{
				hideElement("notification-" + _0x1611A);
				showElement("notification-" + _0x1611A + "Timer")
			}
		};
		break;
	case "greenShinyFarmingOrbBound":
		;
	case "greenShinyFarmingOrbBoundTimer":
		var _0x1611A = "greenShinyFarmingOrbBound";
		if (getItem(_0x1611A) > 0)
		{
			if (getItem(_0x1611A + "Timer") == 0)
			{
				showElement("notification-" + _0x1611A);
				hideElement("notification-" + _0x1611A + "Timer")
			}
			else
			{
				hideElement("notification-" + _0x1611A);
				showElement("notification-" + _0x1611A + "Timer")
			}
		};
		break;
	case "watchSeed":
		;
	case "watchAt":
		;
	case "watch":
		;
	case "sapphireWatch":
		;
	case "emeraldWatch":
		;
	case "rubyWatch":
		;
	case "diamondWatch":
		var _0x18023 = getWatchTypeData();
		if (_0x18023 == null)
		{
			return
		};
		var _0x18069 = _0x18023[0];
		var _0x16741 = getItemString("watchSeed");
		if (_0x16741 == "none")
		{
			if (document.getElementById(_0x18069 + "-status") != null)
			{
				document.getElementById(_0x18069 + "-status").innerHTML = "Not Set"
			}
		}
		else
		{
			if (document.getElementById(_0x18069 + "-status") != null)
			{
				document.getElementById(_0x18069 + "-status").innerHTML = "<img src=\'images/" + _0x16741 + ".png\' class=\'img-20\' /> " + getItem("watchAt") + "/" + getItem("watchLimit")
			}
		};
		break;
	case "plotShiny1":
		;
	case "plotShiny2":
		;
	case "plotShiny3":
		;
	case "plotShiny4":
		;
	case "plotShiny5":
		;
	case "plotShiny6":
		var _0x180F5 = _0x15003.substr(9);
		if (_0x14EA5 > 0)
		{
			showElement("plot-section-shiny-" + _0x180F5)
		}
		else
		{
			hideElement("plot-section-shiny-" + _0x180F5)
		};
		break;
	case "repelMonster":
		if (_0x14EA5 == "none")
		{
			hideElement("notification-repelNotification")
		}
		else
		{
			document.getElementById("repelNotification-monsterImg").src = "images/" + _0x14EA5 + "_monster_idle_0.png";
			showElement("notification-repelNotification")
		};
		break;
	case "teleportCooldown":
		if (_0x14EA5 > 0)
		{
			showElement("teleport-spell-cd-notif")
		}
		else
		{
			hideElement("teleport-spell-cd-notif")
		};
		break;
	case "questPoints":
		loadQuestAndAchievementsTab();
		break;
	case "treasureMap":
		;
	case "greenTreasureMap":
		;
	case "redTreasureMap":
		if (_0x14EA5 > 0)
		{
			showElement("notification-treasureMapReady")
		}
		else
		{
			hideElement("notification-treasureMapReady")
		};
		break;
	case "researcherMagic":
		if (_0x14EA5 >= 3)
		{
			showElement("item-box-convertMagic")
		};
		break;
	case "hardcoreId":
		if (_0x14EA5 > 0)
		{
			document.getElementById("hardcore-icon-top-left").style.display = ""
		}
		else
		{
			document.getElementById("hardcore-icon-top-left").style.display = "none"
		};
		break;
	case "combatTut":
		if (_0x14EA5 == 3)
		{
			showElement("notification-hint")
		}
		else
		{
			hideElement("notification-hint")
		};
		if (_0x14EA5 >= 2)
		{
			document.getElementById("fighting-screen-magic-area").style.display = "none";
			document.getElementById("combat-spell-heal").style.display = "none";
			document.getElementById("combat-spell-fire").style.display = "none";
			document.getElementById("combat-spell-ghostScan").style.display = "none";
			document.getElementById("combat-spell-invisibility").style.display = "none";
			document.getElementById("hero-outer-mana-bar").style.display = "none";
			document.getElementById("hero-mana-display").style.display = "none"
		};
		break;
	case "largeManaPotionUsed":
		refreshPotionsCombat();
		break;
	case "titaniumRocketBoosters":
		if (document.getElementById("item-box-rocket-image") != null)
		{
			document.getElementById("item-box-rocket-image").src = "images/titaniumRocket.png"
		};
		break;
	case "energyRing1":
		;
	case "energyRing2":
		;
	case "energyRing3":
		;
	case "energyRing4":
		;
	case "cooldownRing1":
		;
	case "cooldownRing2":
		;
	case "cooldownRing3":
		;
	case "cooldownRing4":
		initializeTooltips();
		break;
	case "oilIn":
		;
	case "oilOut":
		showElement("span-oil-in-out-label");
		break;
	case "heroCooldown":
		if (getItem("heroCooldown") > 0)
		{
			if (document.getElementById("td-hero-cooldown").innerHTML == "")
			{
				var _0x151ED = getImage("images/hourglass.png", "cd_hourglass_hero");
				_0x151ED.setAttribute("class", "img-30");
				document.getElementById("td-hero-cooldown").append(_0x151ED);
				var _0x18046 = document.createElement("item-heroCooldown");
				_0x18046.setAttribute("type", "timer");
				document.getElementById("td-hero-cooldown").append(_0x18046)
			};
			showElement("notification-heroCooldownNotification")
		}
		else
		{
			if (document.getElementById("td-hero-cooldown").innerHTML != "")
			{
				document.getElementById("td-hero-cooldown").innerHTML = ""
			};
			hideElement("notification-heroCooldownNotification")
		};
		if (getItem("heroCooldownResetTimer") == 0)
		{
			if (getItem("heroCooldown") > 0 && getItem("researcherCombat") >= 2)
			{
				showElement("reset-combat-icon")
			};
			if (document.getElementById("reset-combat-icon-timer") != null)
			{
				document.getElementById("reset-combat-icon-timer").innerHTML = "(Ready)"
			}
		};
		break;
	case "snakeKills":
		;
	case "stardustCombatMapFound":
		if (getItem("snakeKills") > 0 && getItem("stardustCombatMapFound") == 0)
		{
			document.getElementById("stardustCombatMapFound-combat").style.display = ""
		}
		else
		{
			document.getElementById("stardustCombatMapFound-combat").style.display = "none"
		};
		break;
	case "heroCooldownResetTimer":
		;
	case "researcherCombat":
		if (getItem("researcherCombat") >= 2)
		{
			if (getItem("heroCooldownResetTimer") == 0)
			{
				if (getItem("heroCooldown") > 0)
				{
					showElement("reset-combat-icon")
				};
				document.getElementById("reset-combat-icon-timer").innerHTML = "(Ready)"
			}
			else
			{
				hideElement("reset-combat-icon");
				document.getElementById("reset-combat-icon-timer").innerHTML = "(" + formatTime(getItem("heroCooldownResetTimer")) + ")"
			}
		};
		break;
	case "boundDonorCoins":
		refreshDonorTable();
		loadDonorShopTab();
		break;
	case "lastCombatMap":
		if (_0x14EA5 > 0)
		{
			changeCombatMap(_0x14EA5)
		};
		break;
	case "fireFeatherSpawn":
		if (_0x14EA5 > 0)
		{
			showElement("fireFeatherSpawn-" + _0x14EA5);
			showElement("notification-fireFeatherSpawnReady")
		}
		else
		{
			hideElement("fireFeatherSpawn-1");
			hideElement("notification-fireFeatherSpawnReady")
		};
		break;
	case "iceFeatherSpawn":
		if (_0x14EA5 > 0)
		{
			showElement("iceFeatherSpawn-" + _0x14EA5);
			showElement("notification-iceFeatherSpawnReady")
		}
		else
		{
			hideElement("iceFeatherSpawn-1");
			hideElement("notification-iceFeatherSpawnReady")
		};
		break;
	case "chatIcon":
		refreshSigilsDialoguesIcons();
		break;
	case "rocketMap":
		document.getElementById("img-rocket-map").src = "images/rocketMap" + getItem(_0x15003) + ".png";
		break;
	case "updateLogNotification":
		if (_0x14EA5 > 0)
		{
			document.getElementById("new-updates-gif").style.display = ""
		}
		else
		{
			document.getElementById("new-updates-gif").style.display = "none"
		};
		break;
	case "giantSnakeTimer":
		if (_0x14EA5 > 0)
		{
			showElement("notification-" + _0x15003)
		}
		else
		{
			hideElement("notification-" + _0x15003)
		};
		break;
	case "heroReadyNotification":
		;
	case "woodcuttingReadyNotification":
		;
	case "farmingReadyNotification":
		;
	case "updateTimer":
		if (_0x14EA5 > 0)
		{
			showElement("notification-" + _0x15003)
		}
		else
		{
			hideElement("notification-" + _0x15003)
		};
		break;
	case "castleCooldown":
		if (getItem("speechKing") > 0)
		{
			if (_0x14EA5 > 0)
			{
				showElement("notification-castleCooldown");
				hideElement("notification-castleReady")
			}
			else
			{
				hideElement("notification-castleCooldown");
				showElement("notification-castleReady")
			}
		};
		break;
	case "cooksBookTimer":
		if (getItem(_0x15003) > 1)
		{
			showElement("notification-cooksBookTimer")
		}
		else
		{
			if (getItem(_0x15003) == 1)
			{
				hideElement("notification-cooksBookTimer");
				showElement("notification-cooksBookReady")
			}
			else
			{
				if (getItem(_0x15003) == 0)
				{
					hideElement("notification-cooksBookReady");
					hideElement("notification-cooksBookTimer")
				}
			}
		};
		break;
	case "titaniumRocketBoostersAvailable":
		if (_0x14EA5 > 0)
		{
			showElement("notification-rocketBoost")
		}
		else
		{
			hideElement("notification-rocketBoost")
		};
		break;
	case "robotTimer":
		if (_0x14EA5 > 1)
		{
			setInnerHTML("notification-robot-value", formatTime(_0x14EA5));
			showElement("notification-robot")
		}
		else
		{
			if (_0x14EA5 == 1)
			{
				setInnerHTML("notification-robot-value", "Ready");
				showElement("notification-robot")
			}
			else
			{
				hideElement("notification-robot")
			}
		};
		break;
	case "rocketKm":
		if (getItem(_0x15003) == 0)
		{
			hideElement("notification-rocket");
			setInnerHTML("itemBox-rocket-amount", "");
			if (getItem("rocket") > 0)
			{
				showElement("notification-rocketReady")
			}
		}
		else
		{
			hideElement("notification-rocketReady");
			if ((getItemString("rocketDestination") == "moon" && getItem(_0x15003) == 384000) || (getItemString("rocketDestination") == "mars" && getItem(_0x15003) == 54000000))
			{
				if (document.getElementById("itemBox-rocket-amount") != null)
				{
					document.getElementById("itemBox-rocket-amount").innerHTML = "LANDED";
					document.getElementById("notification-rocket-value").innerHTML = "LANDED";
					document.getElementById("notification-rocket-running").style.display = "none";
					document.getElementById("notification-rocket-landed").style.display = "";
					document.getElementById("notification-rocket-returning").style.display = "none"
				}
			}
			else
			{
				if (document.getElementById("itemBox-rocket-amount") != null)
				{
					if (getItem("rocketStatus") == 3)
					{
						document.getElementById("itemBox-rocket-amount").innerHTML = formatNumber(getItem(_0x15003)) + " KM";
						document.getElementById("notification-rocket-value").innerHTML = formatNumber(getItem(_0x15003)) + " KM";
						document.getElementById("notification-rocket-running").style.display = "none";
						document.getElementById("notification-rocket-landed").style.display = "none";
						document.getElementById("notification-rocket-returning").style.display = ""
					}
					else
					{
						document.getElementById("itemBox-rocket-amount").innerHTML = formatNumber(getItem(_0x15003)) + " KM";
						document.getElementById("notification-rocket-value").innerHTML = formatNumber(getItem(_0x15003)) + " KM";
						document.getElementById("notification-rocket-running").style.display = "";
						document.getElementById("notification-rocket-landed").style.display = "none";
						document.getElementById("notification-rocket-returning").style.display = "none"
					}
				}
			};
			showElement("notification-rocket")
		};
		break;
	case "cyanCrystalUsed":
		;
	case "greenCrystalUsed":
		;
	case "redCrystalUsed":
		;
	case "blueCrystalUsed":
		;
	case "yellowCrystalUsed":
		refreshDarkCrystalUsedLabel();
		refreshFaradoxDarkCrystalTooltip();
		break;
	case "researcherTimer":
		if (_0x14EA5 == 1)
		{
			document.getElementById("researcher-status-label").innerHTML = "<img src=\'images/" + getItemString("researcherSkill") + "Skill.png\' class=\'img-50\' /> <span onclick=\'sendBytes(\"CLAIM_RESEARCHER\")\' style=\'display:inline-block;border:1px solid green;background-color:black;padding:15px;cursor:pointer;\'>CLAIM <img src=\'images/atom.png\' class=\'img-30\' /></span></i>";
			showElement("notification-researcherReady")
		}
		else
		{
			if (_0x14EA5 > 1)
			{
				document.getElementById("researcher-status-label").innerHTML = "<img src=\'images/" + getItemString("researcherSkill") + "Skill.png\' class=\'img-50\' /> " + formatTime(_0x14EA5);
				showElement("notification-researcher");
				showElement("notification-researcherTimerNotification");
				hideElement("notification-researcherReady")
			}
			else
			{
				hideElement("notification-researcherTimerNotification");
				document.getElementById("researcher-status-label").innerHTML = "IDLE";
				hideElement("notification-researcherReady")
			}
		};
		break;
	case "researcherSkill":
		refreshResearching();
		break;
	case "researcherMining":
		if (_0x14EA5 == 1)
		{
			showElement("item-box-diamond_verydark")
		}
		else
		{
			if (_0x14EA5 >= 2 && _0x14EA5 <= 3)
			{
				hideElement("item-box-diamond_verydark");
				showElement("item-box-gemList2")
			}
			else
			{
				if (_0x14EA5 >= 4)
				{
					showElement("item-box-gemList3");
					hideElement("item-box-gemList2")
				}
			}
		};
		break;
	case "home":
		document.getElementById("navigation-right-home-button").style.display = "";
		document.getElementById("navigation-right-home-image").src = "images/" + getItemString("home") + ".png";
		break;
	case "homeHint":
		if (_0x14EA5 == 1)
		{
			hideElement("img-hint-arrow-home-button")
		};
		break;
	case "communityCenter2":
		document.getElementById("navigation-right-shop-button").onclick = function ()
		{
			navigate("right-shopOptions")
		};
		break;
	case "potionsMixed":
		hideElement("img-hint-arrow-brewing-button");
		break;
	case "treeUnlocked2":
		;
	case "treeUnlocked3":
		;
	case "treeUnlocked4":
		;
	case "treeUnlocked5":
		;
	case "treeUnlocked6":
		if (_0x14EA5 > 0)
		{
			unlockTreePatch(_0x15003.substr(12))
		}
		else
		{
			if (_0x15003 == "treeUnlocked5")
			{
				document.getElementById("tree-section-img-5").src = "images/tree_locked_donor.png"
			};
			if (_0x15003 == "treeUnlocked6")
			{
				document.getElementById("tree-section-img-6").src = "images/tree_locked_donor.png"
			}
		};
		initializeTooltips();
		break;
	case "plotUnlocked2":
		;
	case "plotUnlocked3":
		;
	case "plotUnlocked4":
		;
	case "plotUnlocked5":
		;
	case "plotUnlocked6":
		if (_0x14EA5 > 0)
		{
			unlockPlotPatch(_0x15003.substr(12))
		}
		else
		{
			if (_0x15003 == "plotUnlocked5")
			{
				document.getElementById("plot-section-img-5").src = "images/tree_locked_donor.png"
			};
			if (_0x15003 == "plotUnlocked6")
			{
				document.getElementById("plot-section-img-6").src = "images/tree_locked_donor.png"
			}
		};
		initializeTooltips();
		break;
	case "heroHp":
		;
	case "heroMaxHp":
		refreshHeroHpBar();
		break;
	case "heroMana":
		;
	case "heroMaxMana":
		if (_0x14EA5 > 0)
		{
			showElement("hero-mana-bar-fighting");
			showElement("monster-mana-bar-fighting");
			showElement("hero-mana-display")
		};
		refreshHeroManaBar();
		refeshMagicInCombat();
		break;
	case "smeltingOreType":
		if (getItemString("smeltingOreType") != "none")
		{
			showElement("notification-furnace");
			document.getElementById("notification-furnace-img").src = "images/" + getBestFurnace() + "On" + ".gif"
		}
		else
		{
			hideElement("notification-furnace")
		};
		break;
	case "charcoalFoundryLogType":
		if (getItemString("charcoalFoundryLogType") != "none")
		{
			showElement("notification-charcoalFoundry");
			document.getElementById("notification-charcoalFoundry-img").src = "images/" + "charcoalFoundry" + ".png"
		}
		else
		{
			hideElement("notification-charcoalFoundry")
		};
		break;
	case "smeltingCurrentAmount":
		var _0x180D2 = parseInt(getItem("smeltingCurrentAmount") / getItem("smeltingRequestedAmount") * 100);
		if (isNaN(_0x180D2))
		{
			_0x180D2 = 0
		};
		document.getElementById("notification-furnace-value").innerHTML = _0x180D2 + "%";
		break;
	case "charcoalFoundryCurrentAmount":
		var _0x180D2 = parseInt(getItem("charcoalFoundryCurrentAmount") / getItem("charcoalFoundryRequestedAmount") * 100);
		if (isNaN(_0x180D2))
		{
			_0x180D2 = 0
		};
		document.getElementById("notification-charcoalFoundry-value").innerHTML = _0x180D2 + "%";
		break;
	case "monsterHp":
		;
	case "monsterMaxHp":
		refreshMonsterHpBar();
		break;
	case "miningUnlocked":
		if (_0x14EA5 > 0)
		{
			document.getElementById("span-topBar-miningXPAreaLocked").style.display = "none";
			document.getElementById("span-topBar-miningXPArea").style.display = ""
		};
		break;
	case "craftingUnlocked":
		if (_0x14EA5 > 0)
		{
			document.getElementById("span-topBar-craftingXPAreaLocked").style.display = "none";
			document.getElementById("span-topBar-craftingXPArea").style.display = ""
		};
		break;
	case "bobsPanicQuest":
		if (_0x14EA5 == -1)
		{
			document.getElementById("img-hint-arrow-farming-button").style.display = "none";
			document.getElementById("img-hint-arrow-woodcutting-button").style.display = "none"
		};
		break;
	case "woodcuttingUnlocked":
		if (_0x14EA5 > 0)
		{
			document.getElementById("span-topBar-woodcuttingXPAreaLocked").style.display = "none";
			document.getElementById("span-topBar-woodcuttingXPArea").style.display = "";
			document.getElementById("navigation-right-woodcutting-button").style.display = ""
		};
		break;
	case "fishingUnlocked":
		if (_0x14EA5 > 0)
		{
			document.getElementById("span-topBar-fishingXPAreaLocked").style.display = "none";
			document.getElementById("span-topBar-fishingXPArea").style.display = "";
			document.getElementById("navigation-right-fishing-button").style.display = ""
		};
		break;
	case "cookingUnlocked":
		if (_0x14EA5 > 0)
		{
			document.getElementById("span-topBar-cookingXPAreaLocked").style.display = "none";
			document.getElementById("span-topBar-cookingXPArea").style.display = "";
			document.getElementById("navigation-right-cooking-button").style.display = ""
		};
		break;
	case "magicUnlocked":
		;
	case "spellScrollReflectCombatMapFound":
		;
	case "spellScrollTeleportCombatMapFound":
		if (_0x14EA5 > 0)
		{
			document.getElementById("span-topBar-magicXPAreaLocked").style.display = "none";
			document.getElementById("span-topBar-magicXPArea").style.display = "";
			document.getElementById("navigation-right-magic-button").style.display = ""
		};
		if (getItem("magicUnlocked") > 0 && getItem("spellScrollReflectCombatMapFound") == 0)
		{
			document.getElementById("spellScrollReflectGroundFound-combat").style.display = ""
		}
		else
		{
			document.getElementById("spellScrollReflectGroundFound-combat").style.display = "none"
		};
		if (getItem("magicUnlocked") > 0 && getItem("spellScrollTeleportCombatMapFound") == 0)
		{
			document.getElementById("spellScrollTeleportGroundFound-combat").style.display = ""
		}
		else
		{
			document.getElementById("spellScrollTeleportGroundFound-combat").style.display = "none"
		};
		break;
	case "spellScrollGhostScanCombatMapFound":
		;
	case "cemeteryPuzzleCompleted":
		if (getItem("spellScrollGhostScanCombatMapFound") > 0)
		{
			hideElement("spellScrollGhostScanGroundFound-combat")
		}
		else
		{
			if (getItem("cemeteryPuzzleCompleted") == 1)
			{
				showElement("spellScrollGhostScanGroundFound-combat")
			}
		};
		break;
	case "farmingUnlocked":
		if (_0x14EA5 > 0)
		{
			document.getElementById("span-topBar-farmingXPAreaLocked").style.display = "none";
			document.getElementById("span-topBar-farmingXPArea").style.display = "";
			document.getElementById("navigation-right-farming-button").style.display = ""
		};
		break;
	case "magicTabNotification":
		if (_0x14EA5 > 0)
		{
			document.getElementById("img-hint-arrow-magic-button").style.display = "none"
		};
		break;
	case "brewingUnlocked":
		if (_0x14EA5 > 0)
		{
			document.getElementById("span-topBar-brewingXPAreaLocked").style.display = "none";
			document.getElementById("span-topBar-brewingXPArea").style.display = "";
			document.getElementById("navigation-right-brewing-button").style.display = "";
			if (getItem("theResearcherQuest") > 0 || getItem("theResearcherQuest") == -1)
			{
				hideElement("img-hint-arrow-brewing-button")
			}
		};
		break;
	case "treeTimer1":
		refreshTreeTimer(1);
		break;
	case "treeTimer2":
		refreshTreeTimer(2);
		break;
	case "treeTimer3":
		refreshTreeTimer(3);
		break;
	case "treeTimer4":
		refreshTreeTimer(4);
		break;
	case "treeTimer5":
		refreshTreeTimer(5);
		break;
	case "treeTimer6":
		refreshTreeTimer(6);
		break;
	case "plotTimer1":
		refreshPlotTimer(1);
		break;
	case "plotTimer2":
		refreshPlotTimer(2);
		break;
	case "plotTimer3":
		refreshPlotTimer(3);
		break;
	case "plotTimer4":
		refreshPlotTimer(4);
		break;
	case "plotTimer5":
		refreshPlotTimer(5);
		break;
	case "plotTimer6":
		refreshPlotTimer(6);
		break;
	case "plot1":
		;
	case "plotStage1":
		refreshPlotImage(1);
		break;
	case "plot2":
		;
	case "plotStage2":
		refreshPlotImage(2);
		break;
	case "plot3":
		;
	case "plotStage3":
		refreshPlotImage(3);
		break;
	case "plot4":
		;
	case "plotStage4":
		refreshPlotImage(4);
		break;
	case "plot5":
		;
	case "plotStage5":
		refreshPlotImage(5);
		break;
	case "plot6":
		;
	case "plotStage6":
		refreshPlotImage(6);
		break;
	case "tree1":
		;
	case "treeStage1":
		refreshTreeImage(1);
		break;
	case "tree2":
		;
	case "treeStage2":
		refreshTreeImage(2);
		break;
	case "tree3":
		;
	case "treeStage3":
		refreshTreeImage(3);
		break;
	case "tree4":
		;
	case "treeStage4":
		refreshTreeImage(4);
		break;
	case "tree5":
		;
	case "treeStage5":
		refreshTreeImage(5);
		break;
	case "tree6":
		;
	case "treeStage6":
		refreshTreeImage(6);
		break;
	case "miningXp":
		loadMiningOreBoxes();
		break;
	case "smallManaStarUsed":
		;
	case "mediumManaStarUsed":
		;
	case "largeManaStarUsed":
		;
	case "hugeManaStarUsed":
		refreshManaStarTotalLabels();
		break;
	case "letTheMiningBeginQuest":
		if (_0x14EA5 == 2)
		{
			document.getElementById("navigation-right-mining-button").style.display = ""
		}
		else
		{
			if (_0x14EA5 > 2 || _0x14EA5 == -1)
			{
				document.getElementById("navigation-right-mining-button").style.display = "";
				document.getElementById("img-hint-arrow-mining-button").style.display = "none"
			}
		};
		if (_0x14EA5 == 3)
		{
			document.getElementById("navigation-right-crafting-button").style.display = ""
		}
		else
		{
			if (_0x14EA5 > 3 || _0x14EA5 == -1)
			{
				document.getElementById("navigation-right-crafting-button").style.display = "";
				document.getElementById("img-hint-arrow-crafting-button").style.display = "none"
			}
		};
		break;
	case "monsterName":
		if (_0x14EA5 == "none" && global_lastTabId == "right-combat-fighting")
		{
			navigate("right-combat")
		};
		resetAnimationOfCurrentFightToIdle();
		if (_0x14EA5 == "none")
		{
			hideElement("notification-inCombat")
		}
		else
		{
			showElement("notification-inCombat")
		};
		break
	}
}

function setItem(_0x19DF1, _0x14EA5)
{
	window["var_" + _0x19DF1] = _0x14EA5
}

function changeCombatFirstMapDungeon(_0x159FE)
{
	confirmDialogue("images/x.png", "The tunnel leads to a dead end.", "Close", "", "");
	changeCombatMap(_0x159FE)
}

function changeCombatMap(_0x159FE)
{
	if (_0x159FE == 15 && getItem("dungeonKeyUsed") == 1)
	{
		changeCombatMap(16);
		return
	};
	if (_0x159FE == 4 && getItem("lavaAlienKills") == 0)
	{
		confirmDialogue("images/forestAlien.png", "Sorry, I only bring adventurers to the northern fields if they have killed my dumb brother in the lava dungeon below.<br /><br />Besides, it\'s cold up in the north.", "Close", "", "");
		return
	};
	if (_0x159FE == 5 && getItem("weapon") != "torch")
	{
		confirmDialogue("images/torch.png", "You need a light source to go in here.", "Close", "", "");
		return
	};
	if (_0x159FE == 8 && getItem("iceHawkKills") == 0)
	{
		confirmDialogue("images/bossMarker.gif", "There\'s an enemy blocking the way!", "Close", "", "");
		return
	};
	if (_0x159FE == 11 && getItem("boots") != "flippers")
	{
		confirmDialogue("images/waveIcon.png", "You need as pair of flippers to swim out into the ocean.", "Close", "", "");
		return
	};
	if (_0x159FE == 13 && getItem("castleAccess") == 0)
	{
		confirmDialogue("images/castleGuard.png", "\"What do you want?\"", "Can I go through?", "Nevermind, I\'ll be on my way.", "CASTLE_GUARD_1");
		return
	};
	if (_0x159FE == 15)
	{
		if (getItem("dungeonWarning") == 0)
		{
			confirmDialogue("images/kingIcon.png", "The dungeon is a dangerous place with high level monsters. <br /><br />It\'s also easy to get lost, so explore at your one risk.", "I will be careful, my Lord.", "", "DUNGEON_WARNING");
			return
		}
	};
	if (_0x159FE == 16 && getItem("dungeonKeyUsed") == 0)
	{
		if (getItem("dungeonKey") == 0)
		{
			confirmDialogue("images/dungeonKey.png", "You need a dungeon key to go through this door.", "Cancel", "", "");
			return
		};
		if (getItem("dungeonKey") == 1)
		{
			confirmDialogue("images/dungeonKey.png", "Use dungeon key?", "Open Door", "Cancel", "USE_DUNGEON_KEY");
			return
		}
	};
	document.getElementById("div-map-1").style.display = "none";
	document.getElementById("div-map-2").style.display = "none";
	document.getElementById("div-map-3").style.display = "none";
	document.getElementById("div-map-4").style.display = "none";
	document.getElementById("div-map-5").style.display = "none";
	document.getElementById("div-map-6").style.display = "none";
	document.getElementById("div-map-7").style.display = "none";
	document.getElementById("div-map-8").style.display = "none";
	document.getElementById("div-map-9").style.display = "none";
	document.getElementById("div-map-10").style.display = "none";
	document.getElementById("div-map-11").style.display = "none";
	document.getElementById("div-map-12").style.display = "none";
	document.getElementById("div-map-13").style.display = "none";
	document.getElementById("div-map-14").style.display = "none";
	document.getElementById("div-map-15").style.display = "none";
	document.getElementById("div-map-15-1").style.display = "none";
	document.getElementById("div-map-15-2").style.display = "none";
	document.getElementById("div-map-15-3").style.display = "none";
	document.getElementById("div-map-15-4").style.display = "none";
	document.getElementById("div-map-15-5").style.display = "none";
	document.getElementById("div-map-15-6").style.display = "none";
	document.getElementById("div-map-15-7").style.display = "none";
	document.getElementById("div-map-15-8").style.display = "none";
	document.getElementById("div-map-16").style.display = "none";
	document.getElementById("div-map-" + _0x159FE).style.display = "inline-block";
	if (_0x159FE != getItem("lastCombatMap"))
	{
		if (_0x159FE == "15-1" || _0x159FE == "15-2" || _0x159FE == "15-3" || _0x159FE == "15-4" || _0x159FE == "15-5" || _0x159FE == "15-6" || _0x159FE == "15-7" || _0x159FE == "15-8")
		{
			return
		};
		sendBytes("LAST_COMBAT_MAP=" + _0x159FE)
	}
}

function speech()
{
	sendBytes("SPEAKS_KING")
}

function clicksCastleChest()
{
	if (getItem("speechKing") == 1)
	{
		confirmDialogue2("images/castleChest.png", "Loot chest?<br /><br /><span style=\'color:grey\'>You have " + getItem("castlePoints") + " points.", "Loot", "Loot History", "Close", "LOOT_CASTLE_CHEST", "REFRESH_LOOT_CASTLE_CHEST_HISTORY")
	}
	else
	{
		confirmDialogue("images/kingIcon.png", "You are quite brave trying to loot my chest.", "Sorry my Lord", "", "")
	}
}

function flashElement(_0x16C2D, _0x16C50, _0x14D8D)
{
	$(_0x16C2D)
}

function clicksSnowTomb()
{
	confirmDialogue(null, "<span style=\'color:grey\'><img src=\'images/cemetery1.png\' class=\'img-50\'/ > # 3<br /><img src=\'images/cemetery2.png\' class=\'img-50\'/ > # 1<br /><img src=\'images/cemetery3.png\' class=\'img-50\'/ > # 5<br /><img src=\'images/cemetery2.png\' class=\'img-50\'/ > # 3<br /><img src=\'images/cemetery3.png\' class=\'img-50\'/ > # 1</span>", "Close", "", "")
}

function getItemString(_0x17182)
{
	return "" + getItem(_0x17182, true)
}

function getItem(_0x17182, _0x1715F)
{
	if (window["var_" + _0x17182] == null)
	{
		if (_0x1715F)
		{
			return "none"
		}
		else
		{
			return 0
		}
	};
	var _0x14EA5 = window["var_" + _0x17182];
	if (isNaN(_0x14EA5))
	{
		return _0x14EA5
	}
	else
	{
		return parseInt(_0x14EA5)
	}
}

function variableExists(_0x14D47)
{
	return window[_0x14D47] != null
}

function logout()
{
	localStorage.removeItem("auto_login_token");
	window.location.reload()
}

function clicksPlayOnGuestButton()
{
	document.getElementById("login-box-connected-guest").style.display = "none";
	document.getElementById("login-box-loading").style.display = "";
	sendBytes("NEW_GUEST")
}

function clicksNewAccountButton()
{
	document.getElementById("login-box-connected-guest").style.display = "none";
	document.getElementById("login-box-new-account-form").style.display = ""
}

function clicksLoginButton()
{
	document.getElementById("login-box-connected-guest").style.display = "none";
	document.getElementById("login-box-login-form").style.display = "";
	document.getElementById("login-box-login-username").focus()
}

function hideElement(_0x16C2D)
{
	if (document.getElementById(_0x16C2D) != null)
	{
		if (document.getElementById(_0x16C2D).style.display != "none")
		{
			document.getElementById(_0x16C2D).style.display = "none"
		}
	}
}

function showElement(_0x16C2D)
{
	if (document.getElementById(_0x16C2D) != null)
	{
		if (document.getElementById(_0x16C2D).style.display == "none")
		{
			document.getElementById(_0x16C2D).style.display = ""
		}
	}
}

function clicksLoginBackButton()
{
	document.getElementById("login-box-connected-guest").style.display = "";
	document.getElementById("login-box-new-account-form").style.display = "none";
	document.getElementById("login-box-login-form").style.display = "none"
}

function setInnerHTML(_0x16C2D, _0x19D42)
{
	if (document.getElementById(_0x16C2D) != null)
	{
		document.getElementById(_0x16C2D).style.display = "";
		document.getElementById(_0x16C2D).innerHTML = _0x19D42
	}
}

function minimizeTopBar(_0x15DD2)
{
	if (_0x15DD2)
	{
		document.getElementById("table-top-main-items").style.display = "none";
		document.getElementById("maximize-btn").style.display = "";
		document.getElementById("minimize-btn").style.display = "none"
	}
	else
	{
		document.getElementById("table-top-main-items").style.display = "";
		document.getElementById("maximize-btn").style.display = "none";
		document.getElementById("minimize-btn").style.display = ""
	}
}

function clicksCreateNewAccount()
{
	var _0x16232 = document.getElementById("login-box-new-account-username").value;
	var _0x1620F = document.getElementById("login-box-new-account-password").value;
	var _0x161EC = document.getElementById("login-box-new-account-password2").value;
	var _0x161C9 = 0;
	if (document.getElementById("login-box-new-account-hardcore").checked)
	{
		_0x161C9 = 1
	};
	sendBytes("NEW_ACCOUNT=" + _0x16232 + "~" + _0x1620F + "~" + _0x161EC + "~" + _0x161C9);
	setInnerHTML("login-box-new-account-errors", "Loading...")
}

function clicksLoginAccount()
{
	var _0x16511 = document.getElementById("login-box-login-username").value;
	var _0x164EE = document.getElementById("login-box-login-password").value;
	sendBytes("LOGIN=" + _0x16511 + "~" + _0x164EE);
	setInnerHTML("login-box-new-account-errors", "Loading...")
}

function sendBytes(_0x14DB0)
{
	if (_0x14DB0.length <= 255)
	{
		global_webSocket.send(_0x14DB0)
	}
}
global_ImageCache = [];

function getImage(_0x16908, _0x1713C)
{
	if (global_ImageCache[_0x1713C] != null)
	{
		if (global_ImageCache[_0x1713C].url == _0x16908)
		{
			return global_ImageCache[_0x1713C].obj
		}
	};
	var _0x17119 = new ImageObject(_0x16908);
	global_ImageCache[_0x1713C] = _0x17119;
	return _0x17119.obj
}

function ImageObject(_0x16908)
{
	this.url = _0x16908;
	this.obj = new Image();
	this.obj.src = _0x16908
}
global_SoundCache = [];

function playSound(_0x16908)
{
	if (global_SoundCache[_0x16908] != null)
	{
		return global_SoundCache[_0x16908].obj.play()
	};
	var _0x18DCF = new SoundObject(_0x16908);
	global_SoundCache[_0x16908] = _0x18DCF;
	return _0x18DCF.obj.play()
}

function SoundObject(_0x16908)
{
	this.url = _0x16908;
	this.obj = new Audio(_0x16908);
	this.obj.volume = 0.2
}

function formatTime(_0x16DD1)
{
	if (_0x16DD1 <= 0)
	{
		return "0"
	};
	var _0x14E82 = _0x16DD1;
	var _0x16D68 = ~~(_0x14E82 / 3600);
	var _0x16D8B = ~~((_0x14E82 % 3600) / 60);
	var _0x16DF4 = (_0x14E82 % 60).toFixed(0);
	var _0x16DAE = "";
	days = 0;
	while (_0x16D68 >= 24)
	{
		_0x16D68 -= 24;
		days++
	};
	if (_0x16D68 > 0)
	{
		_0x16DAE += "" + _0x16D68 + ":" + (_0x16D8B < 10 ? "0" : "")
	};
	_0x16DAE += "" + _0x16D8B + ":" + (_0x16DF4 < 10 ? "0" : "");
	_0x16DAE += "" + _0x16DF4;
	if (days > 1)
	{
		return days + " days, " + _0x16DAE
	}
	else
	{
		if (days == 1)
		{
			return days + " day, " + _0x16DAE
		}
		else
		{
			return _0x16DAE
		}
	}
}

function idleHeroCanvasTickFrame()
{
	this.frameNumber = 0;
	this.tick = function ()
	{
		this.frameNumber++;
		if (this.frameNumber > 1)
		{
			this.frameNumber = 0
		}
	};
	this.getYValue = function ()
	{
		return this.frameNumber * 3
	}
}

function idleFightingHeroCanvasTickFrame()
{
	this.frameNumber = 0;
	this.fps = 25;
	this.fpsAt = 0;
	this.tick = function ()
	{
		if (this.fpsAt == this.fps)
		{
			this.frameNumber++;
			if (this.frameNumber > 1)
			{
				this.frameNumber = 0
			};
			this.fpsAt = 0
		};
		this.fpsAt++
	};
	this.getYValue = function ()
	{
		return this.frameNumber * 3
	}
}

function clicksMarketHistory()
{
	document.getElementById("marketHistory-loading").style.display = ""
}

function refreshMarketHistory(_0x14DB0)
{
	var _0x19117 = document.getElementById("marketHistory-section");
	document.getElementById("marketHistory-loading").style.display = "none";
	if (_0x14DB0 == "error")
	{
		document.getElementById("marketHistory-section").innerHTML = "<center>An error has occured.  Too many requests.  Try again later.</center>";
		return
	};
	if (_0x14DB0 == "empty")
	{
		document.getElementById("marketHistory-section").innerHTML = "<center>There are no transactions on the market for this account.</center>";
		return
	};
	var _0x14DD3 = _0x14DB0.split("~");
	var _0x15A44 = "<center><table class=\'simple-table\' width=\'70%\'>";
	_0x15A44 += "<tr>";
	_0x15A44 += "<th>" + "Item" + "</th>";
	_0x15A44 += "<th>" + "Icon" + "</th>";
	_0x15A44 += "<th>" + "Amount" + "</th>";
	_0x15A44 += "<th>" + "Price" + "</th>";
	_0x15A44 += "<th>" + "Bought/Sold" + "</th>";
	_0x15A44 += "<th>" + "Date <span style=\'color:grey\'>MM/DD/YYYY</span>" + "</th>";
	_0x15A44 += "</tr>";
	for (var _0x14C0C = 0; _0x14C0C < _0x14DD3.length; _0x14C0C += 0)
	{
		var _0x1913A = _0x14DD3[_0x14C0C] == "true";
		_0x14C0C++;
		var _0x1915D = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x15DF5 = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x19180 = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x190F4 = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		_0x15A44 += "<tr>";
		_0x15A44 += "<td>" + getItemName(_0x1915D) + "</td>";
		_0x15A44 += "<td>" + "<img src=\'images/" + _0x1915D + ".png\' class=\'img-50\' />" + "</td>";
		_0x15A44 += "<td>" + formatNumber(_0x15DF5) + "</td>";
		_0x15A44 += "<td>" + formatNumber(_0x19180 * _0x15DF5) + " <img src=\'images/coins.png\' class=\'img-20\' /> <br /><span style=\'color:grey;font-size:10pt;\'>(" + formatNumber(_0x19180) + " each)</span></td>";
		_0x15A44 += "<td>" + _0x1913A + "</td>";
		_0x15A44 += "<td>" + new Date(parseInt(_0x190F4)).toLocaleDateString("en-US"); + "</td>";
		_0x15A44 += "</tr>"
	};
	_0x19117.innerHTML = _0x15A44
}

function idleHeroCanvasTick()
{
	if (global_lastTabId != "right-combat")
	{
		return
	};
	global_canvasIdleHero2D.clearRect(0, 0, global_canvasIdleHero.width, global_canvasIdleHero.height);
	if (!variableExists("global_idleHeroCanvasTickFrame"))
	{
		global_idleHeroCanvasTickFrame = new idleHeroCanvasTickFrame()
	};
	global_idleHeroCanvasTickFrame.tick();
	global_canvasIdleHero2D.drawImage(getImage("images/" + getItem("body", true) + "Equip.png", "hero_idle_body"), 0, global_idleHeroCanvasTickFrame.getYValue());
	global_canvasIdleHero2D.drawImage(getImage("images/" + getItem("head", true) + "Equip.png", "hero_idle_head"), 0, global_idleHeroCanvasTickFrame.getYValue());
	global_canvasIdleHero2D.drawImage(getImage("images/" + getItem("amulet", true) + "Equip.png", "hero_idle_amulet"), 0, global_idleHeroCanvasTickFrame.getYValue());
	global_canvasIdleHero2D.drawImage(getImage("images/" + getItem("boots", true) + "Equip.png", "hero_idle_boots"), 0, 0);
	global_canvasIdleHero2D.drawImage(getImage("images/" + getItem("legs", true) + "Equip.png", "hero_idle_legs"), 0, global_idleHeroCanvasTickFrame.getYValue() / 4);
	global_canvasIdleHero2D.drawImage(getImage("images/" + getItem("gloves", true) + "Equip.png", "hero_idle_gloves"), 0, global_idleHeroCanvasTickFrame.getYValue());
	global_canvasIdleHero2D.drawImage(getImage("images/" + getItem("shield", true) + "Equip.png", "hero_idle_shield"), 0, global_idleHeroCanvasTickFrame.getYValue());
	global_canvasIdleHero2D.drawImage(getImage("images/" + getItem("weapon", true) + "Equip.png", "hero_idle_weapon"), 0, global_idleHeroCanvasTickFrame.getYValue());
	global_canvasIdleHero2D.drawImage(getImage("images/" + getItem("arrows", true) + "Equip.png", "hero_idle_arrows"), 0, 0)
}
global_lastTabId = "right-combat";

function navigate(_0x18348)
{
	sendBytes("LAST_TAB=" + _0x18348);
	hideAllRightTabs();
	document.getElementById("navigation-" + _0x18348).style.display = "";
	global_lastTabId = _0x18348;
	changeBackgroundRightSection("default");
	switch (_0x18348)
	{
	case "right-home":
		refreshHomeTab();
		break;
	case "right-marketHistory":
		clicksMarketHistory();
		sendBytes("REFRESH_MARKET_HISTORY");
		break;
	case "right-shop":
		loadShopTab();
		break;
	case "right-donorshop":
		loadDonorShopTab();
		refreshDonorTable();
		break;
	case "right-skills":
		break;
	case "right-quests":
		loadQuestAndAchievementsTab();
		break;
	case "right-combat-select":
		refreshCombatMap();
		break;
	case "right-combat-fighting":
		refreshCombatTab();
		break;
	case "right-combat":
		hideOtherInterfacesForCombat(false);
		break;
	case "right-mining":
		loadMiningOreBoxes();
		hideElement("img-hint-arrow-mining-button");
		break;
	case "right-magic":
		refreshManaStarTotalLabels();
		break;
	case "right-brewing":
		refreshBrewing();
		hideElement("img-hint-arrow-brewing-button");
		break;
	case "right-crafting":
		switchCraftingType("default");
		refreshCraftables();
		hideElement("img-hint-arrow-crafting-button");
		break;
	case "right-convertMagic":
		refreshMagicTransformList();
		break;
	case "right-woodcutting":
		changeBackgroundRightSection("woodcutting");
		hideElement("img-hint-arrow-woodcutting-button");
		break;
	case "right-farming":
		if (getTotalKills() >= 2 && getItem("bobsPanicQuest") == -1 && getItem("skyCrystalShake") == 0 && getItem("cyanCrystal") == 0)
		{
			sendBytes("SHAKE_SKYCRYSTAL=0")
		}
		else
		{
			if (getItem("rakeHeadTotal") == 0 && getLevel(getItem("craftingXp")) >= 17)
			{
				sendBytes("RAKE_HEAD")
			}
		};
		changeBackgroundRightSection("farming");
		hideElement("img-hint-arrow-farming-button");
		break;
	case "right-researcher":
		refreshResearching();
		break;
	case "right-cooking":
		if (getItem("cookingUnlockedNotification") == 0)
		{
			sendBytes("COOKING_ITEMS_MOVE")
		};
		break;
	case "right-cooksBook":
		refreshCooksBook();
		break;
	case "right-market":
		displayMarket(false);
		sendBytes("REFRESH_TRADABLES");
		break
	};
	if (_0x18348 != "right-combat-fighting" && getRandomInt(10000) == 0 && getItem("darkCrystalUsed") > 0)
	{
		faradoxRandomShow()
	}
}

function getTotalKills()
{
	var _0x1764B = 0;
	_0x1764B += getItem("chickenKills");
	_0x1764B += getItem("ratKills");
	_0x1764B += getItem("beeKills");
	return _0x1764B
}

function refreshManaStarTotalLabels()
{
	document.getElementById("hero-mana-bar-fighting").style.display = "";
	if (document.getElementById("span-manaStarsLabel") != null)
	{
		document.getElementById("span-manaStarsLabel").innerHTML = getTotalManaStarsOwned() + "/" + getTotalManaStarsAvailable()
	}
}

function getTotalManaStarsOwned()
{
	return getItem("smallManaStarUsed") + getItem("mediumManaStarUsed") + getItem("largeManaStarUsed") + getItem("hugeManaStarUsed")
}

function getTotalManaStarsAvailable()
{
	return 35
}

function getOilCost(_0x16255)
{
	switch (_0x16255)
	{
	case "drills":
		;
	case "copper":
		;
	case "sand":
		return 1;
	case "crushers":
		return 3;
	case "iron":
		return 5;
	case "giantDrills":
		return 10;
	case "excavators":
		return 30;
	case "silver":
		return 20;
	case "gold":
		return 100;
	case "promethium":
		return 1000;
	default:
		return 0
	}
}

function getCharcoalCost(_0x16255)
{
	switch (_0x16255)
	{
	case "titanium":
		return 20
	}
}

function refreshSigilsDialoguesIcons(_0x19833)
{
	var _0x15A44 = "";
	var _0x197CA = false;
	var _0x19856 = ["batSigil", "candyCaneSigil", "spiderSigil", "carrotSigil", "snowmanSigil", "catSigil", "bunnySigil", "bluePartyHatSigil", "whitePartyHatSigil", "yellowPartyHatSigil", "greenPartyHatSigil", "redPartyHatSigil", "pinkPartyHatSigil", "treeSigil", "ghostSigil", "easterEggSigil", "santaHatSigil", "pumpkinSigil"];
	for (var _0x14C0C = 0; _0x14C0C < _0x19856.length; _0x14C0C++)
	{
		if (getItem(_0x19856[_0x14C0C]) > 0 || _0x19833)
		{
			_0x197CA = true;
			_0x15A44 += "<div onclick=\'sendBytes(\"CHAT_ICON=" + _0x19856[_0x14C0C] + "\")\' class=\'dialogue-sigils-itemBox\'>";
			_0x15A44 += "<img src=\'images/" + _0x19856[_0x14C0C] + ".png\' class=\'img-30\' />";
			if (getItemString("chatIcon") == _0x19856[_0x14C0C])
			{
				_0x15A44 += "<br /><center><span>" + getItem(_0x19856[_0x14C0C]) + "</span> <img src=\'images/check.png\' class=\'img-20\' /></center>"
			}
			else
			{
				_0x15A44 += "<br /><center><span>" + getItem(_0x19856[_0x14C0C]) + "</span> </center>"
			};
			_0x15A44 += "</div>"
		}
	};
	_0x19856 = ["hardcoreSigil"];
	for (var _0x14C0C = 0; _0x14C0C < _0x19856.length; _0x14C0C++)
	{
		if (getItem(_0x19856[_0x14C0C]) > 0 || _0x19833)
		{
			_0x197CA = true;
			_0x15A44 += "<div onclick=\'sendBytes(\"CHAT_ICON=" + _0x19856[_0x14C0C] + "\")\' style=\'background-color:#b3ffd9;\' class=\'dialogue-sigils-itemBox\'>";
			_0x15A44 += "<img src=\'images/" + _0x19856[_0x14C0C] + ".png\' class=\'img-30\' />";
			if (getItemString("chatIcon") == _0x19856[_0x14C0C])
			{
				_0x15A44 += "<br /><center><span>" + getItem(_0x19856[_0x14C0C]) + "</span> <img src=\'images/check.png\' class=\'img-20\' /></center>"
			}
			else
			{
				_0x15A44 += "<br /><center><span>" + getItem(_0x19856[_0x14C0C]) + "</span> </center>"
			};
			_0x15A44 += "</div>"
		}
	};
	_0x19856 = ["globalSigil"];
	for (var _0x14C0C = 0; _0x14C0C < _0x19856.length; _0x14C0C++)
	{
		var _0x19810 = getGlobalLevel() >= 900;
		if (_0x19810 || _0x19833)
		{
			_0x197CA = true;
			_0x15A44 += "<div onclick=\'sendBytes(\"CHAT_ICON=" + _0x19856[_0x14C0C] + "\")\' style=\'background-color:#b3ffd9;\' class=\'dialogue-sigils-itemBox\'>";
			_0x15A44 += "<img src=\'images/" + _0x19856[_0x14C0C] + ".png\' class=\'img-30\' />";
			var _0x15DF5 = 0;
			if (_0x19810)
			{
				_0x15DF5 = 1
			};
			if (getItemString("chatIcon") == _0x19856[_0x14C0C])
			{
				_0x15A44 += "<br /><center><span>" + _0x15DF5 + "</span> <img src=\'images/check.png\' class=\'img-20\' /></center>"
			}
			else
			{
				_0x15A44 += "<br /><center><span>" + _0x15DF5 + "</span> </center>"
			};
			_0x15A44 += "</div>"
		}
	};
	_0x19856 = ["combatSigil", "magicSigil", "miningSigil", "craftingSigil", "woodcuttingSigil", "farmingSigil", "brewingSigil", "fishingSigil", "cookingSigil"];
	for (var _0x14C0C = 0; _0x14C0C < _0x19856.length; _0x14C0C++)
	{
		var _0x197ED = getLevel(getItem(_0x19856[_0x14C0C].substr(0, _0x19856[_0x14C0C].length - 5) + "Xp")) >= 100;
		if (_0x197ED || _0x19833)
		{
			_0x197CA = true;
			_0x15A44 += "<div onclick=\'sendBytes(\"CHAT_ICON=" + _0x19856[_0x14C0C] + "\")\' style=\'background-color:#b3ffd9;\' class=\'dialogue-sigils-itemBox\'>";
			_0x15A44 += "<img src=\'images/" + _0x19856[_0x14C0C] + ".png\' class=\'img-30\' />";
			var _0x15DF5 = 0;
			if (_0x197ED)
			{
				_0x15DF5 = 1
			};
			if (getItemString("chatIcon") == _0x19856[_0x14C0C])
			{
				_0x15A44 += "<br /><center><span>" + _0x15DF5 + "</span> <img src=\'images/check.png\' class=\'img-20\' /></center>"
			}
			else
			{
				_0x15A44 += "<br /><center><span>" + _0x15DF5 + "</span> </center>"
			};
			_0x15A44 += "</div>"
		}
	};
	_0x19856 = ["chickenMonsterSigil", "ratMonsterSigil", "beeMonsterSigil", "snakeMonsterSigil", "entMonsterSigil", "thiefMonsterSigil", "bearMonsterSigil", "spiderMonsterSigil", "skeletonMonsterSigil", "lavaAlienMonsterSigil", "batMonsterSigil", "fireMageMonsterSigil", "boneHeadMonsterSigil", "mammaPolarBearMonsterSigil", "yetiMonsterSigil", "ghostMonsterSigil", "skeletonGhostMonsterSigil", "reaperMonsterSigil", "sharkMonsterSigil", "pufferFishMonsterSigil", "tridentSoldierMonsterSigil", "skeletonMonksMonsterSigil", "dungeonSpiderMonsterSigil", "stoneWomenMonsterSigil", "museumSigil", "treasureChestSigil"];
	for (var _0x14C0C = 0; _0x14C0C < _0x19856.length; _0x14C0C++)
	{
		var _0x19879 = getItem(_0x19856[_0x14C0C]);
		if (_0x19856[_0x14C0C] == "museumSigil")
		{
			_0x19879 = 0;
			if (hasAllMuseumItems())
			{
				_0x19879 = 1
			}
		};
		if (_0x19879 > 0 || _0x19833)
		{
			_0x197CA = true;
			_0x15A44 += "<div onclick=\'sendBytes(\"CHAT_ICON=" + _0x19856[_0x14C0C] + "\")\' style=\'background-color:#e6e6e6;\' class=\'dialogue-sigils-itemBox\'>";
			_0x15A44 += "<img src=\'images/" + _0x19856[_0x14C0C] + ".png\' class=\'img-30\' />";
			if (getItemString("chatIcon") == _0x19856[_0x14C0C])
			{
				_0x15A44 += "<br /><center><span>" + _0x19879 + "</span> <img src=\'images/check.png\' class=\'img-20\' /></center>"
			}
			else
			{
				_0x15A44 += "<br /><center><span>" + _0x19879 + "</span> </center>"
			};
			_0x15A44 += "</div>"
		}
	};
	_0x19856 = ["goldEventSigil2", "silverEventSigil2", "bronzeEventSigil2", "eventSigil2", "goldEventSigil", "silverEventSigil", "bronzeEventSigil", "eventSigil"];
	for (var _0x14C0C = 0; _0x14C0C < _0x19856.length; _0x14C0C++)
	{
		if (getItem(_0x19856[_0x14C0C]) > 0 || _0x19833)
		{
			_0x197CA = true;
			_0x15A44 += "<div onclick=\'sendBytes(\"CHAT_ICON=" + _0x19856[_0x14C0C] + "\")\' style=\'background-color:pink;\' class=\'dialogue-sigils-itemBox\'>";
			_0x15A44 += "<img src=\'images/" + _0x19856[_0x14C0C] + ".png\' class=\'img-30\' />";
			if (getItemString("chatIcon") == _0x19856[_0x14C0C])
			{
				_0x15A44 += "<br /><center><span>" + getItem(_0x19856[_0x14C0C]) + "</span> <img src=\'images/check.png\' class=\'img-20\' /></center>"
			}
			else
			{
				_0x15A44 += "<br /><center><span>" + getItem(_0x19856[_0x14C0C]) + "</span> </center>"
			};
			_0x15A44 += "</div>"
		}
	};
	_0x15A44 += "<div style=\'border:1px solid grey;padding:10px;background-color:#EFEFEF;font-size:10pt;\'>Sigils are chat icons that are purely cosmetic.  They can be obtained through holiday events, monster drops (1/10,000) or special events.<br /><br />All sigils are untradable except for holiday sigils during their respective time of year.<br /><br /><span style=\'cursor:pointer;color:blue\' onclick=\'refreshSigilsDialoguesIcons(true)\'>(show all)</span></div>";
	document.getElementById("dialogue-sigils-section").innerHTML = _0x15A44
}

function openChatSigilsDialogues()
{
	refreshSigilsDialoguesIcons();
	openDialogue("dialogue-sigils")
}

function setOrBuyChatTag(_0x19EA0, _0x19E7D)
{
	if (_0x19E7D == "SET" || _0x19E7D == "UNSET")
	{
		sendBytes("SET_PRICE_TAG=" + _0x19EA0)
	}
	else
	{
		confirmDialogue("images/chatIcon.png", "Are you sure you wanna purchase this with tradable donor coins?", "Purchase", "Cancel", "BUY_PRICE_TAG=" + _0x19EA0)
	}
}

function refreshTagsDialoguesIcons()
{
	var _0x15A44 = "";
	var _0x1613D = "";
	var _0x19928 = "";
	var _0x19905 = getItem("spentDonorCoinsOnTags");
	var _0x198BF = false;
	var _0x198E2 = "";
	var _0x1989C = "";
	_0x15A44 += "<div style=\'border:1px solid grey;padding:10px;background-color:#EFEFEF;font-size:10pt;\'>Chat tags, which may be combined with sigils, allow you to show your support towards the game.  They are purchased with <b>tradable</b> donor coins.<br /><br />They are optional and only used for cosmetic purposes.<br /><br /><i style=\'color:grey\'>You also can buy them overtime, meaning spending 20$ on chat tags will knock off 20$ for all other tags.  Also, buying a higher tier tag will unlock all the previous ones for free.</i></div>";
	_0x15A44 += "<br /><br />";
	_0x15A44 += "<table width=\'100%\' style=\'margin:auto;background-color:#f2f2f2;color:black;text-align:center;border-collapse: collapse;border:1px solid black;\'>";
	_0x15A44 += "<tr>";
	_0x15A44 += "<th style=\'width:50%\'>Example</th><th><b style=\'color:green\'>Tradable</b> Donor Coins</th><th>Action</th>";
	_0x15A44 += "</tr>";
	_0x1613D = "Donor";
	_0x19928 = 20;
	testingForPriceAdjusted = _0x19928 - _0x19905;
	_0x198E2 = testingForPriceAdjusted;
	if (testingForPriceAdjusted <= 0)
	{
		_0x198E2 = "<img src=\'images/check.png\' class=\'img-20\' />";
		_0x1989C = "SET";
		if (getItem("chatTag") == _0x1613D)
		{
			_0x1989C = "UNSET"
		}
	}
	else
	{
		_0x198E2 = "<img src=\'images/donorCoins.png\' class=\'img-20\' /> " + testingForPriceAdjusted;
		_0x1989C = "BUY"
	};
	_0x15A44 += "<tr>";
	_0x15A44 += "<td style=\'padding:20px;\'><img style=\'border:1px solid grey;padding:3px;\'src=\'images/tagExample_" + _0x1613D + ".png\' /></td><td>" + _0x198E2 + "</td><td><input type=\'button\' value=\'" + _0x1989C + "\' onclick=\'setOrBuyChatTag(\"" + _0x1613D + "\",this.value);closeDialogue(\"dialogue-tags\")\' style=\'color:#006666;border:1px solid #006666\' class=\'chat-area-send-button\' /></td>";
	_0x15A44 += "</tr>";
	_0x1613D = "Superdonor";
	_0x19928 = 40;
	testingForPriceAdjusted = _0x19928 - _0x19905;
	_0x198E2 = testingForPriceAdjusted;
	if (testingForPriceAdjusted <= 0)
	{
		_0x198E2 = "<img src=\'images/check.png\' class=\'img-20\' />";
		_0x1989C = "SET";
		if (getItem("chatTag") == _0x1613D)
		{
			_0x1989C = "UNSET"
		}
	}
	else
	{
		_0x198E2 = "<img src=\'images/donorCoins.png\' class=\'img-20\' /> " + testingForPriceAdjusted;
		_0x1989C = "BUY"
	};
	_0x15A44 += "<tr>";
	_0x15A44 += "<td style=\'padding:20px;\'><img style=\'border:1px solid grey;padding:3px;\'src=\'images/tagExample_" + _0x1613D + ".png\' /></td><td>" + _0x198E2 + "</td><td><input type=\'button\' value=\'" + _0x1989C + "\' onclick=\'setOrBuyChatTag(\"" + _0x1613D + "\",this.value);closeDialogue(\"dialogue-tags\")\' style=\'color:#006666;border:1px solid #006666\' class=\'chat-area-send-button\' /></td>";
	_0x15A44 += "</tr>";
	_0x1613D = "Ultradonor";
	_0x19928 = 60;
	testingForPriceAdjusted = _0x19928 - _0x19905;
	_0x198E2 = testingForPriceAdjusted;
	if (testingForPriceAdjusted <= 0)
	{
		_0x198E2 = "<img src=\'images/check.png\' class=\'img-20\' />";
		_0x1989C = "SET";
		if (getItem("chatTag") == _0x1613D)
		{
			_0x1989C = "UNSET"
		}
	}
	else
	{
		_0x198E2 = "<img src=\'images/donorCoins.png\' class=\'img-20\' /> " + testingForPriceAdjusted;
		_0x1989C = "BUY"
	};
	_0x15A44 += "<tr>";
	_0x15A44 += "<td style=\'padding:20px;\'><img style=\'border:1px solid grey;padding:3px;\'src=\'images/tagExample_" + _0x1613D + ".png\' /></td><td>" + _0x198E2 + "</td><td><input type=\'button\' value=\'" + _0x1989C + "\' onclick=\'setOrBuyChatTag(\"" + _0x1613D + "\",this.value);closeDialogue(\"dialogue-tags\")\' style=\'color:#006666;border:1px solid #006666\' class=\'chat-area-send-button\' /></td>";
	_0x15A44 += "</tr>";
	_0x1613D = "Contributor";
	_0x19928 = 100;
	testingForPriceAdjusted = _0x19928 - _0x19905;
	_0x198E2 = testingForPriceAdjusted;
	if (testingForPriceAdjusted <= 0)
	{
		_0x198E2 = "<img src=\'images/check.png\' class=\'img-20\' />";
		_0x1989C = "SET";
		if (getItem("chatTag") == _0x1613D)
		{
			_0x1989C = "UNSET"
		}
	}
	else
	{
		_0x198E2 = "<img src=\'images/donorCoins.png\' class=\'img-20\' /> " + testingForPriceAdjusted;
		_0x1989C = "BUY"
	};
	_0x15A44 += "<tr>";
	_0x15A44 += "<td style=\'padding:20px;\'><img style=\'border:1px solid grey;padding:3px;\'src=\'images/tagExample_" + _0x1613D + ".png\' /></td><td>" + _0x198E2 + "</td><td><input type=\'button\' value=\'" + _0x1989C + "\' onclick=\'setOrBuyChatTag(\"" + _0x1613D + "\",this.value);closeDialogue(\"dialogue-tags\")\' style=\'color:#006666;border:1px solid #006666\' class=\'chat-area-send-button\' /></td>";
	_0x15A44 += "</tr>";
	_0x1613D = "Financier";
	_0x19928 = 250;
	testingForPriceAdjusted = _0x19928 - _0x19905;
	_0x198E2 = testingForPriceAdjusted;
	if (testingForPriceAdjusted <= 0)
	{
		_0x198E2 = "<img src=\'images/check.png\' class=\'img-20\' />";
		_0x1989C = "SET";
		if (getItem("chatTag") == _0x1613D)
		{
			_0x1989C = "UNSET"
		}
	}
	else
	{
		_0x198E2 = "<img src=\'images/donorCoins.png\' class=\'img-20\' /> " + testingForPriceAdjusted;
		_0x1989C = "BUY"
	};
	_0x15A44 += "<tr>";
	_0x15A44 += "<td style=\'padding:20px;\'><img style=\'border:1px solid grey;padding:3px;\'src=\'images/tagExample_" + _0x1613D + ".png\' /></td><td>" + _0x198E2 + "</td><td><input type=\'button\' value=\'" + _0x1989C + "\' onclick=\'setOrBuyChatTag(\"" + _0x1613D + "\",this.value);closeDialogue(\"dialogue-tags\")\' style=\'color:#006666;border:1px solid #006666\' class=\'chat-area-send-button\' /></td>";
	_0x15A44 += "</tr>";
	_0x1613D = "Investor";
	_0x19928 = 500;
	testingForPriceAdjusted = _0x19928 - _0x19905;
	_0x198E2 = testingForPriceAdjusted;
	if (testingForPriceAdjusted <= 0)
	{
		_0x198E2 = "<img src=\'images/check.png\' class=\'img-20\' />";
		_0x1989C = "SET";
		if (getItem("chatTag") == _0x1613D)
		{
			_0x1989C = "UNSET"
		}
	}
	else
	{
		_0x198E2 = "<img src=\'images/donorCoins.png\' class=\'img-20\' /> " + testingForPriceAdjusted;
		_0x1989C = "BUY"
	};
	_0x15A44 += "<tr>";
	_0x15A44 += "<td style=\'padding:20px;\'><span border:1px solid grey;padding:3px;><img style=\'vertical-align:text-top;\' src=\'images/investor.gif\' /> <span style=\'color:#cc66ff;dispaly:inline-block;vertical-align:text-top;font-size:16pt;\'> A chat tag!</span></span></td><td>" + _0x198E2 + "</td><td><input type=\'button\' value=\'" + _0x1989C + "\' onclick=\'setOrBuyChatTag(\"" + _0x1613D + "\",this.value);closeDialogue(\"dialogue-tags\")\' style=\'color:#006666;border:1px solid #006666\' class=\'chat-area-send-button\' /></td>";
	_0x15A44 += "</tr>";
	_0x1613D = "InvestorPlus";
	_0x19928 = 1000;
	testingForPriceAdjusted = _0x19928 - _0x19905;
	_0x198E2 = testingForPriceAdjusted;
	if (testingForPriceAdjusted <= 0)
	{
		_0x198E2 = "<img src=\'images/check.png\' class=\'img-20\' />";
		_0x1989C = "SET";
		if (getItem("chatTag") == _0x1613D)
		{
			_0x1989C = "UNSET"
		}
	}
	else
	{
		_0x198E2 = "<img src=\'images/donorCoins.png\' class=\'img-20\' /> " + testingForPriceAdjusted;
		_0x1989C = "BUY"
	};
	_0x15A44 += "<tr>";
	_0x15A44 += "<td style=\'padding:20px;\'><span border:1px solid grey;padding:3px;><img style=\'vertical-align:text-top;\' src=\'images/investorPlus.gif\' /> <span style=\'color:#00a3cc;dispaly:inline-block;vertical-align:text-top;font-size:16pt;\'> A chat tag!</span></span></td><td>" + _0x198E2 + "</td><td><input type=\'button\' value=\'" + _0x1989C + "\' onclick=\'setOrBuyChatTag(\"" + _0x1613D + "\",this.value);closeDialogue(\"dialogue-tags\")\' style=\'color:#006666;border:1px solid #006666\' class=\'chat-area-send-button\' /></td>";
	_0x15A44 += "</tr>";
	_0x15A44 += "</table>";
	_0x15A44 += "<br /><br />";
	_0x15A44 += "<table width=\'100%\' style=\'margin:auto;background-color:#f2f2f2;color:black;text-align:center;border-collapse: collapse;border:1px solid black;\'>";
	_0x15A44 += "<tr>";
	_0x15A44 += "<th style=\'width:50%\'>Example</th><th>Description</th>";
	_0x15A44 += "</tr>";
	_0x15A44 += "<tr>";
	_0x15A44 += "<td style=\'padding:20px;\'><img  style=\'border:1px solid grey;padding:3px;\' src=\'images/devTagExample.png\' /></td><td>Owner & Developper of the Diamond Hunt Games</td>";
	_0x15A44 += "</tr>";
	_0x15A44 += "<tr>";
	_0x15A44 += "<td style=\'padding:20px;\'><img  style=\'border:1px solid grey;padding:3px;\' src=\'images/tagExample_Moderator.png\' /></td><td>Moderates chat and market.</td>";
	_0x15A44 += "</tr>";
	_0x15A44 += "</table>";
	document.getElementById("dialogue-tags-section").innerHTML = _0x15A44
}

function openChatTagsDialogues()
{
	refreshTagsDialoguesIcons();
	openDialogueOverride("dialogue-tags", "large")
}

function isSmelting()
{
	return (getItem("smeltingCurrentAmount") < getItem("smeltingRequestedAmount") && getItem("smeltingNeededTimer") > 0)
}

function isUsingFoundry()
{
	return (getItem("charcoalFoundryCurrentAmount") < getItem("charcoalFoundryRequestedAmount") && getItem("charcoalFoundryNeededTimer") > 0)
}

function hideAllRightTabs()
{
	document.getElementById("navigation-right-combat-select").style.display = "none";
	document.getElementById("navigation-right-combat-fighting").style.display = "none";
	document.getElementById("navigation-right-rocketMap").style.display = "none";
	document.getElementById("navigation-right-combat").style.display = "none";
	document.getElementById("navigation-right-shop").style.display = "none";
	document.getElementById("navigation-right-donorshop").style.display = "none";
	document.getElementById("navigation-right-shopOptions").style.display = "none";
	document.getElementById("navigation-right-quests").style.display = "none";
	document.getElementById("navigation-right-mining").style.display = "none";
	document.getElementById("navigation-right-magic").style.display = "none";
	document.getElementById("navigation-right-market").style.display = "none";
	document.getElementById("navigation-right-crafting").style.display = "none";
	document.getElementById("navigation-right-woodcutting").style.display = "none";
	document.getElementById("navigation-right-farming").style.display = "none";
	document.getElementById("navigation-right-brewing").style.display = "none";
	document.getElementById("navigation-right-treeList").style.display = "none";
	document.getElementById("navigation-right-cooksBook").style.display = "none";
	document.getElementById("navigation-right-manaStars").style.display = "none";
	document.getElementById("navigation-right-seedList").style.display = "none";
	document.getElementById("navigation-right-gemList").style.display = "none";
	document.getElementById("navigation-right-convertMagic").style.display = "none";
	document.getElementById("navigation-right-transformLog").style.display = "none";
	document.getElementById("navigation-right-dungeonSigns").style.display = "none";
	document.getElementById("navigation-right-museum").style.display = "none";
	document.getElementById("navigation-right-puzzleChest1").style.display = "none";
	document.getElementById("navigation-right-combatLog").style.display = "none";
	document.getElementById("navigation-right-castleChestLog").style.display = "none";
	document.getElementById("navigation-right-pirate").style.display = "none";
	document.getElementById("navigation-right-marketHistory").style.display = "none";
	document.getElementById("navigation-right-explorer").style.display = "none";
	document.getElementById("navigation-right-lootBagLog").style.display = "none";
	document.getElementById("navigation-right-skills").style.display = "none";
	document.getElementById("navigation-right-muteList").style.display = "none";
	document.getElementById("navigation-right-home").style.display = "none";
	document.getElementById("navigation-right-fishing").style.display = "none";
	document.getElementById("navigation-right-cooking").style.display = "none";
	document.getElementById("navigation-right-researcher").style.display = "none";
	document.getElementById("navigation-right-combat-button").style.color = "white";
	document.getElementById("navigation-right-shop-button").style.color = "white";
	document.getElementById("navigation-right-quests-button").style.color = "white";
	document.getElementById("navigation-right-mining-button").style.color = "white";
	document.getElementById("navigation-right-magic-button").style.color = "white";
	document.getElementById("navigation-right-crafting-button").style.color = "white";
	document.getElementById("navigation-right-woodcutting-button").style.color = "white";
	document.getElementById("navigation-right-farming-button").style.color = "white";
	document.getElementById("navigation-right-brewing-button").style.color = "white";
	document.getElementById("navigation-right-skills-button").style.color = "white";
	document.getElementById("navigation-right-home-button").style.color = "white"
}

function getResearchPrice(_0x157AB)
{
	switch (_0x157AB)
	{
	case 0:
		return 100;
	case 1:
		return 1000;
	case 2:
		return 25000;
	case 3:
		return 200000;
	case 4:
		return 500000;
	case 5:
		return 800000;
	default:
		return -1
	}
}

function getResearchPerkDescription(_0x17484, _0x156FC)
{
	switch (_0x17484)
	{
	case 0:
		if (_0x156FC == "crafting")
		{
			return "Ability to smelt sand into glass."
		};
		if (_0x156FC == "mining")
		{
			return "Ability to find gems.<br /><span onclick=\'infoGemsDialogue()\' class=\'researcher-more-info-button\'>more info</span>"
		};
		if (_0x156FC == "combat")
		{
			return "Combat levels now increase maximum hp."
		};
		if (_0x156FC == "cooking")
		{
			return "Ability to make recipes in the cooking section."
		};
		if (_0x156FC == "fishing")
		{
			return "Chance of finding oyster pearls."
		};
		if (_0x156FC == "farming")
		{
			return "You may now eat mushrooms for extra energy."
		};
		if (_0x156FC == "woodcutting")
		{
			return "10% chance of obtaining a tree seed when chopping trees."
		};
		if (_0x156FC == "brewing")
		{
			return "Double stardust from small stardust potions."
		};
		if (_0x156FC == "magic")
		{
			return "Mana regenerate during combat every 10 seconds."
		};
		break;
	case 1:
		if (_0x156FC == "crafting")
		{
			return "Access to the museum."
		};
		if (_0x156FC == "mining")
		{
			return "Ability to find stardust prisms.<br /><span onclick=\'infoStardustPrismsDialogue()\' class=\'researcher-more-info-button\'>more info</span>"
		};
		if (_0x156FC == "farming")
		{
			return "Bob will now start looking for stardust seeds."
		};
		if (_0x156FC == "combat")
		{
			return "Allow you to reset your combat cooldown, once a day. <span id=\'reset-combat-icon-timer\'></span>"
		};
		if (_0x156FC == "brewing")
		{
			return "Ability to drink two potions at once, stacking the timer."
		};
		if (_0x156FC == "magic")
		{
			return "Mana regenerates 25% faster out of combat."
		};
		if (_0x156FC == "cooking")
		{
			return "Burning food will grant 25% of its cook XP."
		};
		if (_0x156FC == "fishing")
		{
			return "Ability to use an oxygen tank to explore ocean floors for treasure."
		};
		if (_0x156FC == "woodcutting")
		{
			return "1% chance of obtaining a strange leaf when chopping trees."
		};
		break;
	case 2:
		if (_0x156FC == "mining")
		{
			return "Ability to own 3 of each mining machinery."
		};
		if (_0x156FC == "crafting")
		{
			return "Ability to craft silver buckets."
		};
		if (_0x156FC == "woodcutting")
		{
			return "5% chance that chopping a tree will cause it to instantly regrow."
		};
		if (_0x156FC == "magic")
		{
			return "Ability to transform weapons into other items."
		};
		if (_0x156FC == "combat")
		{
			return "Ability to set presets, allowing you to switch gears in one click mid fight."
		};
		if (_0x156FC == "farming")
		{
			return "5% chance that harvesting a crop will cause it to instantly regrow."
		};
		if (_0x156FC == "brewing")
		{
			return "5% chance that drinking a potion will not get used."
		};
		if (_0x156FC == "cooking")
		{
			return "5% burn reduction on all ovens."
		};
		if (_0x156FC == "fishing")
		{
			return "Ability to find boat blueprints on the ocean floors."
		};
		break;
	case 3:
		if (_0x156FC == "woodcutting")
		{
			return "Maple trees now yield maple syrup."
		};
		if (_0x156FC == "combat")
		{
			return "5% chance that energy is refunded when fighting."
		};
		if (_0x156FC == "crafting")
		{
			return "Ability to craft large vials."
		};
		if (_0x156FC == "brewing")
		{
			return "Ability to brew mana potions."
		};
		if (_0x156FC == "fishing")
		{
			return "1% chance to bring back a map from a boat trip."
		};
		if (_0x156FC == "farming")
		{
			return "Ability to find blewit mushroom seeds."
		};
		if (_0x156FC == "mining")
		{
			return "Mining machinery can now find geodes."
		};
		if (_0x156FC == "cooking")
		{
			return "Chef\'s recipe is skippable, and the chef\'s dialogue now contains more information on the stew proposed."
		};
		if (_0x156FC == "magic")
		{
			return "Teleport cooldown reduced from 15 to 5 minutes."
		};
		break;
	case 4:
		if (_0x156FC == "woodcutting")
		{
			return "Chance for fruit trees to grow."
		};
		if (_0x156FC == "combat")
		{
			return "5% chance to encounter shiny monsters, yielding more loot."
		};
		if (_0x156FC == "farming")
		{
			return "5% chance that planting a seed will grow a shiny crop."
		};
		if (_0x156FC == "brewing")
		{
			return "Ability to brew repel potions.<br /><span onclick=\'infoRepelPotionDialogue()\' class=\'researcher-more-info-button\'>more info</span>"
		};
		if (_0x156FC == "cooking")
		{
			return "Teleporting from an area/boss will refund 10% of the energy used."
		};
		if (_0x156FC == "mining")
		{
			return "Ability to find special mining scrolls to learn different ways of gaining additional XP. <br /><span onclick=\'showMiningScrollsFound()\' class=\'researcher-more-info-button\'>(more info)</span>"
		};
		break;
	case 5:
		if (_0x156FC == "mining")
		{
			return "Ability to send your rocket to mars."
		}
	};
	return "-1"
}

function refreshResearching()
{
	var _0x15049 = document.getElementById("researcher-section");
	var _0x196F8 = "style=\'padding:10px;border:1px solid grey;background-image:url(images/background.jpg)\'";
	var _0x1971B = "style=\'padding:10px;border:1px solid grey;background-image:url(images/background.jpg);color:orange;\'";
	var _0x1973E = "style=\'padding:10px;border:1px solid grey;background-image:url(images/background.jpg);color:green;\'";
	var _0x19761 = "style=\'padding:10px;border:1px solid grey;background-image:url(images/background.jpg);color:yellow;cursor:pointer;\'";
	var _0x194C8 = "onmouseover=\'this.style.color = \"red\"\' onmouseout=\'this.style.color = \"yellow\"\'";
	var _0x19419 = "<center><table width=\'95%\' style=\'text-align:center;\'>";
	_0x19419 += "<tr>";
	_0x19419 += "<td " + _0x196F8 + " width=\'11%\'>" + "<img src=\'images/combatSkill_researcher.png\' class=\'img-50\' /> COMBAT" + "</td>";
	_0x19419 += "<td " + _0x196F8 + " width=\'11%\'>" + "<img src=\'images/magicSkill_researcher.png\' class=\'img-50\' /> MAGIC" + "</td>";
	_0x19419 += "<td " + _0x196F8 + " width=\'11%\'>" + "<img src=\'images/miningSkill_researcher.png\' class=\'img-50\' /> MINING" + "</td>";
	_0x19419 += "<td " + _0x196F8 + " width=\'11%\'>" + "<img src=\'images/craftingSkill_researcher.png\' class=\'img-50\' /> CRAFTING" + "</td>";
	_0x19419 += "<td " + _0x196F8 + " width=\'11%\'>" + "<img src=\'images/woodcuttingSkill_researcher.png\' class=\'img-50\' /> WOODCUTTING" + "</td>";
	_0x19419 += "<td " + _0x196F8 + " width=\'11%\'>" + "<img src=\'images/farmingSkill_researcher.png\' class=\'img-50\' /> FARMING" + "</td>";
	_0x19419 += "<td " + _0x196F8 + " width=\'11%\'>" + "<img src=\'images/brewingSkill_researcher.png\' class=\'img-50\' /> BREWING" + "</td>";
	_0x19419 += "<td " + _0x196F8 + " width=\'11%\'>" + "<img src=\'images/fishingSkill_researcher.png\' class=\'img-50\' /> FISHING" + "</td>";
	_0x19419 += "<td " + _0x196F8 + " width=\'11%\'>" + "<img src=\'images/cookingSkill_researcher.png\' class=\'img-50\' /> COOKING" + "</td>";
	_0x19419 += "</tr>";
	var _0x196B2 = ["combat", "magic", "mining", "crafting", "woodcutting", "farming", "brewing", "fishing", "cooking"];
	var _0x1950E = getItem("researcherCombat");
	var _0x195BD = getItem("researcherMagic");
	var _0x195E0 = getItem("researcherMining");
	var _0x19554 = getItem("researcherCrafting");
	var _0x19603 = getItem("researcherWoodcutting");
	var _0x19577 = getItem("researcherFarming");
	var _0x194EB = getItem("researcherBrewing");
	var _0x1959A = getItem("researcherFishing");
	var _0x19531 = getItem("researcherCooking");
	var _0x1966C = [_0x1950E, _0x195BD, _0x195E0, _0x19554, _0x19603, _0x19577, _0x194EB, _0x1959A, _0x19531];
	var _0x192DE = 5;
	var _0x1945F = 4;
	var _0x194A5 = 6;
	var _0x1936A = 4;
	var _0x197A7 = 5;
	var _0x193B0 = 5;
	var _0x19298 = 5;
	var _0x193F6 = 4;
	var _0x19324 = 5;
	var _0x19626 = [_0x192DE, _0x1945F, _0x194A5, _0x1936A, _0x197A7, _0x193B0, _0x19298, _0x193F6, _0x19324];
	var _0x192BB = false;
	var _0x1943C = false;
	var _0x19482 = false;
	var _0x19347 = false;
	var _0x19784 = false;
	var _0x1938D = false;
	var _0x19275 = false;
	var _0x193D3 = false;
	var _0x19301 = false;
	var _0x19649 = [_0x192BB, _0x1943C, _0x19482, _0x19347, _0x19784, _0x1938D, _0x19275, _0x193D3, _0x19301];
	_0x19419 += "<tr>";
	var _0x1968F = 0;
	for (var _0x14C0C = 0; _0x14C0C <= 8; _0x14C0C++)
	{
		if (_0x1968F == _0x19626[_0x14C0C])
		{
			_0x19419 += "<td " + _0x1973E + " width=\'11%\'>" + "You have already unlocked every perk for this skill." + "</td>";
			_0x19649[_0x14C0C] = true
		}
		else
		{
			if (_0x19649[_0x14C0C] || _0x1966C[_0x14C0C] < _0x1968F)
			{
				_0x19419 += "<td " + _0x1973E + " width=\'11%\'>" + "" + "</td>"
			}
			else
			{
				if (_0x1966C[_0x14C0C] > _0x1968F)
				{
					_0x19419 += "<td " + _0x1971B + " width=\'11%\'>" + getResearchPerkDescription(_0x1968F, _0x196B2[_0x14C0C]) + "</td>"
				}
				else
				{
					_0x19649[_0x14C0C] = true;
					var _0x196D5 = "";
					if (getItem("researcherTimer") > 0)
					{
						_0x196D5 = "style=\'text-decoration:line-through\'"
					};
					_0x19419 += "<td onclick=\'researchConfirm(\"" + _0x196B2[_0x14C0C] + "\")\' " + _0x194C8 + " " + _0x19761 + " width=\'11%\'>" + "<span " + _0x196D5 + ">Research for <img src=\'images/coins.png\' class=\'img-20\' /> " + formatNumber(getResearchPrice(_0x1966C[_0x14C0C])) + "</span><br /><br /><b style=\'color:grey\'>Unlocks: </b><i style=\'color:grey\'>" + getResearchPerkDescription(_0x1968F, _0x196B2[_0x14C0C]) + "</i></span></td>"
				}
			}
		}
	};
	_0x19419 += "</tr>";
	_0x19419 += "<tr>";
	var _0x1968F = 1;
	for (var _0x14C0C = 0; _0x14C0C <= 8; _0x14C0C++)
	{
		if (_0x1968F == _0x19626[_0x14C0C] && !_0x19649[_0x14C0C])
		{
			_0x19419 += "<td " + _0x1973E + " width=\'11%\'>" + "You have already unlocked every perk for this skill." + "</td>";
			_0x19649[_0x14C0C] = true
		}
		else
		{
			if (_0x19649[_0x14C0C] || _0x1966C[_0x14C0C] < _0x1968F)
			{
				_0x19419 += "<td " + _0x1973E + " width=\'11%\'>" + "" + "</td>"
			}
			else
			{
				if (_0x1966C[_0x14C0C] > _0x1968F)
				{
					_0x19419 += "<td " + _0x1971B + " width=\'11%\'>" + getResearchPerkDescription(_0x1968F, _0x196B2[_0x14C0C]) + "</td>"
				}
				else
				{
					_0x19649[_0x14C0C] = true;
					var _0x196D5 = "";
					if (getItem("researcherTimer") > 0)
					{
						_0x196D5 = "style=\'text-decoration:line-through\'"
					};
					_0x19419 += "<td onclick=\'researchConfirm(\"" + _0x196B2[_0x14C0C] + "\")\' " + _0x194C8 + " " + _0x19761 + " width=\'11%\'>" + "<span " + _0x196D5 + ">Research for <img src=\'images/coins.png\' class=\'img-20\' /> " + formatNumber(getResearchPrice(_0x1966C[_0x14C0C])) + "</span><br /><br /><b style=\'color:grey\'>Unlocks: </b><i style=\'color:grey\'>" + getResearchPerkDescription(_0x1968F, _0x196B2[_0x14C0C]) + "</i></span></td>"
				}
			}
		}
	};
	_0x19419 += "</tr>";
	_0x19419 += "<tr>";
	var _0x1968F = 2;
	for (var _0x14C0C = 0; _0x14C0C <= 8; _0x14C0C++)
	{
		if (_0x1968F == _0x19626[_0x14C0C] && !_0x19649[_0x14C0C])
		{
			_0x19419 += "<td " + _0x1973E + " width=\'11%\'>" + "You have already unlocked every perk for this skill." + "</td>";
			_0x19649[_0x14C0C] = true
		}
		else
		{
			if (_0x19649[_0x14C0C] || _0x1966C[_0x14C0C] < _0x1968F)
			{
				_0x19419 += "<td " + _0x1973E + " width=\'11%\'>" + "" + "</td>"
			}
			else
			{
				if (_0x1966C[_0x14C0C] > _0x1968F)
				{
					_0x19419 += "<td " + _0x1971B + " width=\'11%\'>" + getResearchPerkDescription(_0x1968F, _0x196B2[_0x14C0C]) + "</td>"
				}
				else
				{
					_0x19649[_0x14C0C] = true;
					var _0x196D5 = "";
					if (getItem("researcherTimer") > 0)
					{
						_0x196D5 = "style=\'text-decoration:line-through\'"
					};
					_0x19419 += "<td onclick=\'researchConfirm(\"" + _0x196B2[_0x14C0C] + "\")\' " + _0x194C8 + " " + _0x19761 + " width=\'11%\'>" + "<span " + _0x196D5 + ">Research for <img src=\'images/coins.png\' class=\'img-20\' /> " + formatNumber(getResearchPrice(_0x1966C[_0x14C0C])) + "</span><br /><br /><b style=\'color:grey\'>Unlocks: </b><i style=\'color:grey\'>" + getResearchPerkDescription(_0x1968F, _0x196B2[_0x14C0C]) + "</i></span></td>"
				}
			}
		}
	};
	_0x19419 += "</tr>";
	_0x19419 += "<tr>";
	var _0x1968F = 3;
	for (var _0x14C0C = 0; _0x14C0C <= 8; _0x14C0C++)
	{
		if (_0x1968F == _0x19626[_0x14C0C] && !_0x19649[_0x14C0C])
		{
			_0x19419 += "<td " + _0x1973E + " width=\'11%\'>" + "You have already unlocked every perk for this skill." + "</td>";
			_0x19649[_0x14C0C] = true
		}
		else
		{
			if (_0x19649[_0x14C0C] || _0x1966C[_0x14C0C] < _0x1968F)
			{
				_0x19419 += "<td " + _0x1973E + " width=\'11%\'>" + "" + "</td>"
			}
			else
			{
				if (_0x1966C[_0x14C0C] > _0x1968F)
				{
					_0x19419 += "<td " + _0x1971B + " width=\'11%\'>" + getResearchPerkDescription(_0x1968F, _0x196B2[_0x14C0C]) + "</td>"
				}
				else
				{
					_0x19649[_0x14C0C] = true;
					var _0x196D5 = "";
					if (getItem("researcherTimer") > 0)
					{
						_0x196D5 = "style=\'text-decoration:line-through\'"
					};
					_0x19419 += "<td onclick=\'researchConfirm(\"" + _0x196B2[_0x14C0C] + "\")\' " + _0x194C8 + " " + _0x19761 + " width=\'11%\'>" + "<span " + _0x196D5 + ">Research for <img src=\'images/coins.png\' class=\'img-20\' /> " + formatNumber(getResearchPrice(_0x1966C[_0x14C0C])) + "</span><br /><br /><b style=\'color:grey\'>Unlocks: </b><i style=\'color:grey\'>" + getResearchPerkDescription(_0x1968F, _0x196B2[_0x14C0C]) + "</i></span></td>"
				}
			}
		}
	};
	_0x19419 += "</tr>";
	_0x19419 += "<tr>";
	var _0x1968F = 4;
	for (var _0x14C0C = 0; _0x14C0C <= 8; _0x14C0C++)
	{
		if (_0x1968F == _0x19626[_0x14C0C] && !_0x19649[_0x14C0C])
		{
			_0x19419 += "<td " + _0x1973E + " width=\'11%\'>" + "You have already unlocked every perk for this skill." + "</td>";
			_0x19649[_0x14C0C] = true
		}
		else
		{
			if (_0x19649[_0x14C0C] || _0x1966C[_0x14C0C] < _0x1968F)
			{
				_0x19419 += "<td " + _0x1973E + " width=\'11%\'>" + "" + "</td>"
			}
			else
			{
				if (_0x1966C[_0x14C0C] > _0x1968F)
				{
					_0x19419 += "<td " + _0x1971B + " width=\'11%\'>" + getResearchPerkDescription(_0x1968F, _0x196B2[_0x14C0C]) + "</td>"
				}
				else
				{
					_0x19649[_0x14C0C] = true;
					var _0x196D5 = "";
					if (getItem("researcherTimer") > 0)
					{
						_0x196D5 = "style=\'text-decoration:line-through\'"
					};
					_0x19419 += "<td onclick=\'researchConfirm(\"" + _0x196B2[_0x14C0C] + "\")\' " + _0x194C8 + " " + _0x19761 + " width=\'11%\'>" + "<span " + _0x196D5 + ">Research for <img src=\'images/coins.png\' class=\'img-20\' /> " + formatNumber(getResearchPrice(_0x1966C[_0x14C0C])) + "</span><br /><br /><b style=\'color:grey\'>Unlocks: </b><i style=\'color:grey\'>" + getResearchPerkDescription(_0x1968F, _0x196B2[_0x14C0C]) + "</i></span></td>"
				}
			}
		}
	};
	_0x19419 += "</tr>";
	_0x19419 += "<tr>";
	var _0x1968F = 5;
	for (var _0x14C0C = 0; _0x14C0C <= 8; _0x14C0C++)
	{
		if (_0x1968F == _0x19626[_0x14C0C] && !_0x19649[_0x14C0C])
		{
			_0x19419 += "<td " + _0x1973E + " width=\'11%\'>" + "You have already unlocked every perk for this skill." + "</td>";
			_0x19649[_0x14C0C] = true
		}
		else
		{
			if (_0x19649[_0x14C0C] || _0x1966C[_0x14C0C] < _0x1968F)
			{
				_0x19419 += "<td " + _0x1973E + " width=\'11%\'>" + "" + "</td>"
			}
			else
			{
				if (_0x1966C[_0x14C0C] > _0x1968F)
				{
					_0x19419 += "<td " + _0x1971B + " width=\'11%\'>" + getResearchPerkDescription(_0x1968F, _0x196B2[_0x14C0C]) + "</td>"
				}
				else
				{
					_0x19649[_0x14C0C] = true;
					var _0x196D5 = "";
					if (getItem("researcherTimer") > 0)
					{
						_0x196D5 = "style=\'text-decoration:line-through\'"
					};
					_0x19419 += "<td onclick=\'researchConfirm(\"" + _0x196B2[_0x14C0C] + "\")\' " + _0x194C8 + " " + _0x19761 + " width=\'11%\'>" + "<span " + _0x196D5 + ">Research for <img src=\'images/coins.png\' class=\'img-20\' /> " + formatNumber(getResearchPrice(_0x1966C[_0x14C0C])) + "</span><br /><br /><b style=\'color:grey\'>Unlocks: </b><i style=\'color:grey\'>" + getResearchPerkDescription(_0x1968F, _0x196B2[_0x14C0C]) + "</i></span></td>"
				}
			}
		}
	};
	_0x19419 += "</tr>";
	_0x19419 += "</table>";
	_0x15049.innerHTML = _0x19419
}

function infoGemsDialogue()
{
	confirmDialogue("images/researcher.png", "You now have a rare chance of finding four types of gems.<br /><br /><b>They are 100% luck and drop rates cannot be changed.</b><br /><br />Visit your mining tab so see a list of obtainable gems and the drop rates.", "Close", "", "")
}

function infoStardustPrismsDialogue()
{
	confirmDialogue("images/stardustPrisms.png", "You now have a rare chance of finding stardust prisms.<br /><br /><br /><br />Visit your mining tab so see a list of obtainable stardust prisms and the drop rates.", "Close", "", "")
}

function infoRepelPotionDialogue()
{
	confirmDialogue("images/repelPotions.png", "Repel potions allow you to never encounter an enemy of your choice <b>indefinitely</b>.<br /><br />The effect of the potion can be switched off at any moment.<br /><br />They cannot be stacked, and the brewing kit has no effect.", "Close", "", "")
}

function researchConfirm(_0x156FC)
{
	if (getItem(_0x156FC.toLowerCase() + "Unlocked") == 0)
	{
		confirmDialogue("images/x.png", "You cannot research a skill that is locked.", "Close", "", "")
	}
	else
	{
		var _0x15E18 = getResearchPrice(getItem("researcher" + _0x156FC));
		confirmDialogue("images/" + _0x156FC.toLowerCase() + "Skill_researcher.png", "Start researching this skill?", "Research", "Cancel", "RESEARCH=" + _0x156FC.toLowerCase())
	}
}

function getItemName(_0x15003)
{
	if (_0x15003 == ("stardust1000"))
	{
		return "Stardust x 1000"
	};
	var _0x171A5 = _0x15003.charAt(0).toUpperCase();
	for (var _0x14C0C = 1; _0x14C0C < _0x15003.length; _0x14C0C++)
	{
		if (_0x15003.charAt(_0x14C0C) == _0x15003.charAt(_0x14C0C).toUpperCase() && _0x15003.charAt(_0x14C0C) != "\'")
		{
			_0x171A5 += " "
		};
		_0x171A5 += _0x15003.charAt(_0x14C0C)
	};
	return _0x171A5
}

function addItemBoxQuests(_0x15328, _0x1529C, _0x14EEB, _0x1536E, _0x15391, _0x15279, _0x15049, _0x1534B)
{
	var _0x1506C = document.getElementById(_0x15049);
	var _0x14F31 = document.createElement("div");
	var _0x15305 = false;
	if (getItem(_0x15328 + "Quest") == -1)
	{
		_0x15305 = true;
		_0x14F31.setAttribute("class", "quest-button-completed")
	}
	else
	{
		_0x14F31.setAttribute("class", "quest-button")
	};
	_0x14F31.setAttribute("id", "quest-box-" + _0x15328);
	_0x14F31.setAttribute("onclick", "sendBytes(\'QUEST=" + _0x15328 + "~0\')");
	var _0x14F77 = document.createElement("div");
	if (getItem("questPoints") < _0x1534B)
	{
		var _0x14F9A = getImage("images/questPoints_lock.png", "quest-x-" + _0x14C0C);
		_0x14F9A.setAttribute("class", "img-30");
		_0x14F31.setAttribute("class", "quest-button-locked");
		_0x14F77.appendChild(_0x14F9A);
		_0x14F77.innerHTML += " You need at least " + getItem("questPoints") + "/" + _0x1534B + " quest points to unlock this quest.";
		_0x14F31.setAttribute("onclick", "confirmDialogue(\'images/questPoints_lock.png\', \'You need to complete other quests to earn quest points before starting this one.\', \'Exit\', \'\', \'\')")
	}
	else
	{
		var _0x14F77 = document.createElement("div");
		var _0x151ED = "";
		if (_0x15305)
		{
			_0x151ED = "<img src=\'images/check.png\' class=\'img-20\' />"
		};
		_0x14F77.innerHTML = _0x1529C + " " + _0x151ED + "<br /><span style=\'font-size:10pt;color:black;\'>" + _0x14EEB + "<br /><br />" + _0x15279 + "</span>";
		_0x14F77.setAttribute("style", "font-size:16pt;");
		var _0x152E2 = document.createElement("div");
		_0x152E2.setAttribute("style", "float:right;font-size:10pt;color:purple;text-align:right;");
		for (var _0x14C0C = 0; _0x14C0C < _0x1536E.length; _0x14C0C++)
		{
			var _0x14F9A = getImage("images/x.png", _0x15328 + "_quest-x-" + _0x14C0C);
			_0x14F9A.setAttribute("class", "img-15");
			if (_0x15391[_0x14C0C])
			{
				_0x14F9A = getImage("images/check_dark.png", _0x15328 + "_quest-check-" + _0x14C0C);
				_0x14F9A.setAttribute("class", "img-15")
			};
			var _0x152BF = document.createElement("span");
			_0x152BF.innerHTML = _0x1536E[_0x14C0C] + " ";
			if (_0x15391[_0x14C0C] != null && getItem(_0x15328 + "Quest") != -1)
			{
				_0x152BF.appendChild(_0x14F9A)
			};
			_0x152BF.appendChild(document.createElement("br"));
			_0x152E2.appendChild(_0x152BF)
		};
		_0x14F31.appendChild(_0x152E2)
	};
	_0x14F31.appendChild(_0x14F77);
	_0x1506C.appendChild(_0x14F31)
}

function changeBackgroundRightSection(_0x15D69)
{
	switch (_0x15D69)
	{
	case "woodcutting":
		;
	case "farming":
		document.getElementById("right-panel").style.backgroundImage = "url(\'images/background13.png\')";
		break;
	default:
		document.getElementById("right-panel").style.backgroundImage = "";
		break
	}
}

function addItemBoxDonorShop(_0x150B2, _0x1511B, _0x151A7, _0x150D5, _0x1508F, _0x15049)
{
	var _0x14D8D = "#262626";
	var _0x14D6A = "#ffcc99";
	var _0x1506C = document.getElementById(_0x15049);
	var _0x14F31 = document.createElement("div");
	_0x14F31.setAttribute("class", "item-box");
	if (_0x1508F != "")
	{
		_0x14F31.setAttribute("data-tooltip-id", _0x1508F)
	};
	_0x14F31.setAttribute("onclick", "clicksDonorShopItem(\'" + _0x150B2 + "\')");
	_0x14F31.setAttribute("id", "item-box-donor-shop-" + _0x150B2);
	_0x14F31.style.backgroundColor = _0x14D8D;
	_0x14F31.style.border = "1px solid " + _0x14D6A;
	_0x14F31.style.height = "220px";
	var _0x14F77 = document.createElement("div");
	_0x14F77.setAttribute("style", "text-align:center; font-weight: bold;font-size:14pt;");
	_0x14F77.innerHTML = _0x151A7;
	var _0x14F54 = document.createElement("div");
	_0x14F54.setAttribute("style", "text-align:center");
	var _0x14F9A = document.createElement("img");
	var _0x14F9A = getImage(_0x1511B, "shop-" + _0x150B2);
	_0x14F9A.setAttribute("class", "img-100");
	var _0x14F0E = document.createElement("div");
	_0x14F0E.setAttribute("style", "text-align:center");
	var _0x15161 = getImage("images/donorCoins.png", "shop-" + _0x150B2 + "-coins");
	_0x15161.setAttribute("class", "img-20");
	var _0x1513E = getImage("images/check.png", "shop-" + _0x150B2 + "-check");
	_0x1513E.setAttribute("class", "img-10");
	var _0x15184 = getImage("images/x.png", "shop-" + _0x150B2 + "-x");
	_0x15184.setAttribute("class", "img-10");
	if (_0x150D5 > 0)
	{
		_0x14F0E.appendChild(_0x15161);
		_0x14F0E.innerHTML = _0x14F0E.innerHTML + " " + formatNumber(_0x150D5) + " ";
		if (getItem("boundDonorCoins", false) >= _0x150D5)
		{
			_0x14F0E.appendChild(_0x1513E)
		}
		else
		{
			_0x14F0E.appendChild(_0x15184)
		};
		var _0x150F8 = document.createElement("div");
		_0x150F8.innerHTML = "<i style=\'font-size:12pt;color:grey;\'>(Lasts 30 days)</i>";
		_0x14F0E.appendChild(_0x150F8)
	}
	else
	{
		var _0x150F8 = document.createElement("div");
		_0x150F8.innerHTML = "<i style=\'font-size:12pt;color:yellow;\'>1.00$ EACH<br /><span style=\'color:grey;font-size:10pt;\'>PayPal</span><br /><span style=\'color:grey;font-size:10pt;\'>(BTC Accepted Too)</span></i>";
		_0x14F0E.appendChild(_0x150F8)
	};
	_0x14F31.appendChild(_0x14F77);
	_0x14F31.appendChild(document.createElement("br"));
	_0x14F54.appendChild(_0x14F9A);
	_0x14F31.appendChild(_0x14F54);
	if (_0x150B2.length < 12)
	{
		_0x14F31.appendChild(document.createElement("br"))
	};
	_0x14F31.appendChild(document.createElement("br"));
	_0x14F31.appendChild(_0x14F0E);
	_0x1506C.appendChild(_0x14F31)
}

function addItemBoxShop(_0x14FE0, _0x1511B, _0x15003, _0x150D5, _0x1508F, _0x15049)
{
	var _0x14D8D = "#262626";
	var _0x14D6A = "#ffcc99";
	var _0x1506C = document.getElementById(_0x15049);
	var _0x14F31 = document.createElement("div");
	_0x14F31.setAttribute("class", "item-box");
	if (_0x1508F != "")
	{
		_0x14F31.setAttribute("data-tooltip-id", _0x1508F)
	};
	_0x14F31.setAttribute("onclick", "clicksShopItem(\'" + _0x14FE0 + "\')");
	_0x14F31.setAttribute("id", "item-box-shop-" + _0x14FE0);
	_0x14F31.style.backgroundColor = _0x14D8D;
	_0x14F31.style.border = "1px solid " + _0x14D6A;
	_0x14F31.style.height = "220px";
	var _0x14F77 = document.createElement("div");
	_0x14F77.setAttribute("style", "text-align:center; font-weight: bold;font-size:16pt;");
	_0x14F77.innerHTML = _0x15003;
	var _0x14F54 = document.createElement("div");
	_0x14F54.setAttribute("style", "text-align:center");
	var _0x14F9A = document.createElement("img");
	if (_0x1511B == "")
	{
		_0x1511B = "images/" + _0x14FE0 + ".png"
	};
	var _0x14F9A = getImage(_0x1511B, "shop-" + _0x14FE0);
	_0x14F9A.setAttribute("class", "img-100");
	var _0x14F0E = document.createElement("div");
	_0x14F0E.setAttribute("style", "text-align:center");
	var _0x15161 = getImage("images/coins.png", "shop-" + _0x14FE0 + "-coins");
	_0x15161.setAttribute("class", "img-20");
	var _0x1513E = getImage("images/check.png", "shop-" + _0x14FE0 + "-check");
	_0x1513E.setAttribute("class", "img-10");
	var _0x15184 = getImage("images/x.png", "shop-" + _0x14FE0 + "-x");
	_0x15184.setAttribute("class", "img-10");
	_0x14F0E.appendChild(_0x15161);
	_0x14F0E.innerHTML = _0x14F0E.innerHTML + " " + formatNumber(_0x150D5) + " ";
	if (getItem("coins", false) >= _0x150D5)
	{
		_0x14F0E.appendChild(_0x1513E)
	}
	else
	{
		_0x14F0E.appendChild(_0x15184)
	};
	_0x14F31.appendChild(_0x14F77);
	_0x14F31.appendChild(document.createElement("br"));
	_0x14F54.appendChild(_0x14F9A);
	_0x14F31.appendChild(_0x14F54);
	if (getItem("bought_" + _0x14FE0, false) > 0)
	{
		_0x14F31.style.display = "none"
	};
	if (_0x15003.length < 12)
	{
		_0x14F31.appendChild(document.createElement("br"))
	};
	_0x14F31.appendChild(document.createElement("br"));
	_0x14F31.appendChild(_0x14F0E);
	_0x1506C.appendChild(_0x14F31)
}

function loadQuestAndAchievementsTab()
{
	var _0x15049 = "item-section-quests-1";
	document.getElementById(_0x15049).innerHTML = "";
	addItemBoxQuests("theMissingFeathers", "THE MISSING FEATHERS", "An archer is in need of feathers to finish crafting his arrows!", ["Have any sword equipped."], [getItem("weapon") == "rustySword"], "EASY", _0x15049, 0);
	addItemBoxQuests("letTheMiningBegin", "LET THE MINING BEGIN", "A miner would like to show you how to mine.", ["No Requirements"], [null], "EASY", _0x15049, 1);
	addItemBoxQuests("bobsPanic", "BOB\'S PANIC", "With the world becoming evil, Bob needs your help.", ["Taint the World"], [getItem("darkCrystalUsed") == 1], "EASY", _0x15049, 2);
	addItemBoxQuests("theResearcher", "THE RESEARCHER", "A scientist would like to keep working and needs your help.", ["Unlock 6 different skills"], [getItem("miningUnlocked") == 1 && getItem("craftingUnlocked") == 1 && getItem("woodcuttingUnlocked") == 1 && getItem("farmingUnlocked") == 1 && getItem("brewingUnlocked") == 1], "EASY", _0x15049, 2);
	addItemBoxQuests("theFisherman", "THE FISHERMAN", "A fisherman is in need for glass to finish his fishing rod.", ["Have glass on you"], [getItem("glass") > 0], "EASY", _0x15049, 4);
	addItemBoxQuests("theTelescope", "THE TELESCOPE", "Help fix the astronomer\'s telescope.", ["Must own a house."], [getItemString("home") != "none"], "EASY", _0x15049, 5);
	addItemBoxQuests("theGiantSnake", "THE GIANT SNAKE", "A giant snake is roaming the forest", ["Have crafted snakeskin armour"], [getItem("craftedSnakeskinArmour") > 0], "EASY", _0x15049, 5);
	addItemBoxQuests("theWizard", "THE WIZARD", "You\'re a wizard, " + capitalizeFirstLetter(getItemString("username")), ["Defeated the boss after the forest."], [getItem("bushyKills") > 0], "MEDIUM", _0x15049, 5);
	addItemBoxQuests("theFisherman2", "THE FISHERMAN PART 2", "A fisherman needs help to find a special catch.", ["Have a ruby or diamond in your fishing tool."], [getItem("rubyFishingRod") == 1 || getItem("diamondFishingRod") == 1 || getItem("rubySmallFishingNet") == 1 || getItem("diamondSmallFishingNet") == 1 || getItem("rubyHarpoon") == 1 || getItem("diamondHarpoon") == 1], "MEDIUM", _0x15049, 9);
	addItemBoxQuests("mommyTheSpider", "MOMMY THE SPIDER", "Mommy is embarrassed that her babies spit out poison on every occasion.", ["Killed 3 spiders in caves."], [getItem("spiderKills") >= 3], "EASY", _0x15049, 10);
	addItemBoxQuests("theStewChef", "THE STEW CHEF", "A chef needs your help making the perfect stew.", ["Be on cooldown for 30 minutes or more."], [getItem("heroCooldown") > 1800 || getItem("theStewChefQuest") != 0], "MEDIUM", _0x15049, 13);
	addItemBoxQuests("theFrozenBarbarian", "THE FROZEN BARBARIAN", "A barbarian is freezing to death.", ["Killed 3 boneheads in the northern fields."], [getItem("boneHeadKills") >= 3], "MEDIUM", _0x15049, 15);
	addItemBoxQuests("theFishEggsExperiment", "THE FIGH EGGS EXPERIMENT", "Yet again, the fisherman needs your help!", ["Completed The Fisherman Part 2", "Opened a ocean loot bag."], [getItem("theFisherman2Quest") == -1, getItem("oceanLootBagOpened") > 0], "MEDIUM", _0x15049, 16);
	addItemBoxQuests("theTraitor", "TRAITOR!", "A traitor has been discovered.", ["Found the traitor."], [getItem("traitorFound") >= 1], "HARD", _0x15049, 15)
}

function getQuestsInProgress()
{
	var _0x17349 = 0;
	var _0x1743E = document.getElementById("item-section-quests-1").getElementsByTagName("div");
	for (var _0x14C0C = 0; _0x14C0C < _0x1743E.length; _0x14C0C++)
	{
		if (getItem(_0x1743E[_0x14C0C].id.split("-")[2] + "Quest") > 0)
		{
			_0x17349++
		}
	};
	return _0x17349
}

function loadShopTab()
{
	var _0x15003 = "";
	var _0x15049 = "item-section-shop-1";
	document.getElementById(_0x15049).innerHTML = "";
	_0x15003 = "apple";
	if (getItem(_0x15003 + "Bought", false) != 1)
	{
		addItemBoxShop(_0x15003, "images/apples.png", "25 APPLES", 5, "tooltip-apple", _0x15049)
	};
	_0x15003 = "rustySword";
	if (getItem(_0x15003 + "Bought", false) != 1)
	{
		addItemBoxShop(_0x15003, "", "RUSTY SWORD", 15, "tooltip-rustySword", _0x15049)
	};
	_0x15003 = "stardustPickaxe";
	if (getItem(_0x15003 + "Bought", false) != 1)
	{
		addItemBoxShop(_0x15003, "", "STARDUST PICKAXE", 100, "tooltip-stardustPickaxe", _0x15049)
	};
	_0x15003 = "woodenShield";
	if (getItem(_0x15003 + "Bought", false) != 1)
	{
		addItemBoxShop(_0x15003, "", "WOODEN SHIELD", 1500, "tooltip-woodenShield", _0x15049)
	};
	if (getItem("communityCenter") == 1)
	{
		_0x15003 = "carePackage1";
		if (getItem(_0x15003 + "Bought", false) != 1)
		{
			addItemBoxShop(_0x15003, "images/carePackage1.png", "PACKAGE<br /><br />", 150, "tooltip-carePackage", _0x15049)
		};
		_0x15003 = "brewingKitMould";
		if (getItem(_0x15003 + "Bought", false) != 1)
		{
			addItemBoxShop(_0x15003, "", "CRAFTING MOULD", 500, "tooltip-mould", _0x15049)
		};
		_0x15003 = "vial";
		if (getItem(_0x15003 + "Bought", false) != 1)
		{
			addItemBoxShop(_0x15003, "", "5 VIALS", 100, "tooltip-vial", _0x15049)
		};
		_0x15003 = "storeBananas";
		if (getItem(_0x15003 + "Bought", false) != 1)
		{
			addItemBoxShop(_0x15003, "", "10 BANANAS", 50, "tooltip-storeBananas", _0x15049)
		};
		_0x15003 = "logs";
		if (getItem(_0x15003 + "Bought", false) != 1)
		{
			addItemBoxShop(_0x15003, "", "20 LOGS", 100, "tooltip-logs", _0x15049)
		};
		_0x15003 = "oakLogs";
		if (getItem(_0x15003 + "Bought", false) != 1)
		{
			addItemBoxShop(_0x15003, "", "5 OAK LOGS", 250, "tooltip-oakLogs", _0x15049)
		}
	};
	if (getItem("communityCenter2") == 1)
	{
		_0x15003 = "combatLog";
		if (getItem(_0x15003 + "Bought", false) != 1)
		{
			addItemBoxShop(_0x15003, "", "COMBAT TRACKER", 100, "tooltip-combatLog", _0x15049)
		};
		_0x15003 = "tree";
		if (getItem(_0x15003 + "Bought", false) != 1)
		{
			addItemBoxShop(_0x15003, "", "TREE", 150, "", _0x15049)
		};
		_0x15003 = "stardustHammer";
		if (getItem(_0x15003 + "Bought", false) != 1)
		{
			addItemBoxShop(_0x15003, "", "STARDUST HAMMER", 400, "tooltip-stardustHammer", _0x15049)
		};
		_0x15003 = "stardustBox1";
		addItemBoxShop(_0x15003, "", "STARDUST BOX I", 10000, "tooltip-stardustBox1", _0x15049);
		_0x15003 = "stardustBox2";
		addItemBoxShop(_0x15003, "", "STARDUST BOX II", 50000, "tooltip-stardustBox2", _0x15049)
	};
	if (getItem("communityCenter3") == 1)
	{
		_0x15003 = "lumberJack";
		if (getItem(_0x15003 + "Bought", false) != 1)
		{
			addItemBoxShop(_0x15003, "images/lumberJack.png", "LUMBERJACK<br /><br />", 250, "tooltip-lumberJack", _0x15049)
		};
		_0x15003 = "carePackage2";
		if (getItem(_0x15003 + "Bought", false) != 1)
		{
			addItemBoxShop(_0x15003, "images/carePackage2.png", "PACKAGE<br /><br />", 1000, "tooltip-carePackage", _0x15049)
		};
		_0x15003 = "bronzeOven";
		if (getItem(_0x15003 + "Bought", false) != 1)
		{
			addItemBoxShop(_0x15003, "images/bronzeOven.png", "BRONZE OVEN<br /><br />", 10000, "tooltip-bronzeOven", _0x15049)
		}
	};
	if (getItem("communityCenter4") == 1)
	{
		_0x15003 = "carePackage3";
		if (getItem(_0x15003 + "Bought", false) != 1)
		{
			addItemBoxShop(_0x15003, "images/carePackage3.png", "PACKAGE<br /><br />", 85000, "tooltip-carePackage", _0x15049)
		};
		_0x15003 = "pirate";
		if (getItem(_0x15003 + "Bought", false) != 1)
		{
			addItemBoxShop(_0x15003, "images/pirate.png", "PIRATE<br /><br />", 500000, "tooltip-pirate", _0x15049)
		}
	};
	if (getItem("communityCenter5") == 1)
	{
		_0x15003 = "carePackage4";
		if (getItem(_0x15003 + "Bought", false) != 1)
		{
			addItemBoxShop(_0x15003, "images/carePackage4.png", "PACKAGE<br /><br />", 100000, "tooltip-carePackage", _0x15049)
		};
		_0x15003 = "piratesParrot";
		if (getItem(_0x15003 + "Bought", false) != 1)
		{
			addItemBoxShop(_0x15003, "images/piratesParrot.png", "PIRATE\'S PARROT<br />", 500000, "tooltip-piratesParrot", _0x15049)
		}
	}
}

function loadDonorShopTab()
{
	var _0x15003 = "";
	var _0x15049 = "item-section-donorshop-1";
	document.getElementById(_0x15049).innerHTML = "";
	addItemBoxDonorShop("buyDonorCoins", "images/donorCoins.png", "BUY", 0, "tooltip-buyDonorCoins", _0x15049);
	addItemBoxDonorShop("donorPackage", "images/donorPackage.png", "ALL DONOR BUFFS", 15, "tooltip-donorPackage", _0x15049);
	addItemBoxDonorShop("woodcuttingPatch5", "images/woodcuttingSkill.png", "PATCH #5", 2, "tooltip-donorWoodcuttingPatch", _0x15049);
	addItemBoxDonorShop("woodcuttingPatch6", "images/woodcuttingSkill.png", "PATCH #6", 2, "tooltip-donorWoodcuttingPatch", _0x15049);
	addItemBoxDonorShop("farmingPlot5", "images/farmingSkill.png", "PATCH #5", 2, "tooltip-donorFarmingPlot", _0x15049);
	addItemBoxDonorShop("farmingPlot6", "images/farmingSkill.png", "PATCH #6", 2, "tooltip-donorFarmingPlot", _0x15049);
	addItemBoxDonorShop("moreOfflineTime", "images/hourglass.png", "12H OFFLINE TIME", 4, "tooltip-donorMoreOfflineTime", _0x15049);
	addItemBoxDonorShop("bonusXp", "images/globalSkill.png", "+10% XP", 5, "tooltip-donorBonusXp", _0x15049)
}
var global_foodMap = [];

function Food(_0x16CFF, _0x16C73, _0x16CDC, _0x16CB9, _0x15909, _0x16C96, _0x14EEB)
{
	this.rawFoodName = _0x16CFF;
	this.cookedFoodName = _0x16C73;
	this.heat = _0x16CDC;
	this.energy = _0x16CB9;
	this.xp = _0x15909;
	this.cookLevel = _0x16C96;
	this.desc = _0x14EEB
}

function objects_loadFood(_0x14DB0)
{
	var _0x16AF2 = null;
	var _0x14DD3 = _0x14DB0.split("~");
	var _0x17349 = 0;
	for (var _0x14C0C = 0; _0x14C0C < _0x14DD3.length; _0x14C0C += 0)
	{
		var _0x16CFF = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x16C73 = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x16CDC = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x16CB9 = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x15909 = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x16C96 = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x14EEB = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		_0x16AF2 = new Food(_0x16CFF, _0x16C73, _0x16CDC, _0x16CB9, _0x15909, _0x16C96, _0x14EEB);
		global_foodMap[_0x16CFF] = _0x16AF2;
		global_foodMap[_0x16C73] = _0x16AF2;
		global_foodMap[_0x17349] = _0x16AF2;
		_0x17349++
	}
}
var global_machineryMap = [];

function Machinery(_0x17F51, _0x17F74, _0x17FDD, _0x17EE8, _0x17F2E, _0x17FBA, _0x17F0B, _0x17F97, _0x18000)
{
	this.machineryName = _0x17F51;
	this.oil = _0x17F74;
	this.stoneChance = _0x17FDD;
	this.copperChance = _0x17EE8;
	this.ironChance = _0x17F2E;
	this.silverChance = _0x17FBA;
	this.goldChance = _0x17F0B;
	this.promethiumChance = _0x17F97;
	this.titaniumChance = _0x18000
}

function objects_loadMachinery(_0x14DB0)
{
	var _0x17A42 = null;
	var _0x14DD3 = _0x14DB0.split("~");
	var _0x17349 = 0;
	for (var _0x14C0C = 0; _0x14C0C < _0x14DD3.length; _0x14C0C += 0)
	{
		var _0x17F51 = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x17F74 = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x17FDD = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x17EE8 = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x17F2E = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x17FBA = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x17F0B = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x17F97 = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x18000 = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		_0x17A42 = new Machinery(_0x17F51, _0x17F74, _0x17FDD, _0x17EE8, _0x17F2E, _0x17FBA, _0x17F0B, _0x17F97, _0x18000);
		global_machineryMap[_0x17349] = _0x17A42;
		_0x17349++
	}
}
var global_itemPriceMap = [];

function ItemPrice(_0x14D47, _0x15E18)
{
	this.name = _0x14D47;
	this.price = _0x15E18
}

function objects_loadShopPrices(_0x14DB0)
{
	var _0x1841A = null;
	var _0x14DD3 = _0x14DB0.split("~");
	var _0x17349 = 0;
	for (var _0x14C0C = 0; _0x14C0C < _0x14DD3.length; _0x14C0C += 0)
	{
		var _0x14D47 = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x15E18 = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		_0x1841A = new ItemPrice(_0x14D47, _0x15E18);
		global_itemPriceMap[_0x14D47] = _0x1841A;
		global_itemPriceMap[_0x17349] = _0x1841A;
		_0x17349++
	}
}

function StardustTool(_0x168E5, _0x18460, _0x1843D)
{
	this.tool = _0x168E5;
	this.arrayItemsToConvertArray = _0x18460;
	this.arrayItemsConvetXpArray = _0x1843D
}
var global_stardustToolsMap = [];

function objects_loadStardustTools(_0x14DB0)
{
	var _0x18483 = null;
	var _0x14DD3 = _0x14DB0.split("~");
	var _0x17349 = 0;
	var _0x184A6 = _0x14DD3[0];
	var _0x18460 = [];
	var _0x1843D = [];
	for (var _0x14C0C = 1; _0x14C0C < _0x14DD3.length; _0x14C0C += 0)
	{
		_0x18460.push(_0x14DD3[_0x14C0C]);
		_0x14C0C++;
		_0x1843D.push(_0x14DD3[_0x14C0C]);
		_0x14C0C++
	};
	global_stardustToolsMap[_0x184A6] = (new StardustTool(_0x184A6, _0x18460, _0x1843D))
}
var global_seedMap = [];

function Seed(_0x14D47, _0x157AB, _0x183D4, _0x1836B, _0x15909, _0x183F7, _0x1838E, _0x183B1, _0x14EEB)
{
	this.name = _0x14D47;
	this.level = _0x157AB;
	this.stopsDieingAtLevel = _0x183D4;
	this.bonemeal = _0x1836B;
	this.xp = _0x15909;
	this.timer = _0x183F7;
	this.droprate = _0x1838E;
	this.isTreeSeed = _0x183B1;
	this.desc = _0x14EEB
}

function objects_loadSeeds(_0x14DB0)
{
	var _0x17ACE = null;
	var _0x14DD3 = _0x14DB0.split("~");
	var _0x17349 = 0;
	for (var _0x14C0C = 0; _0x14C0C < _0x14DD3.length; _0x14C0C += 0)
	{
		var _0x14D47 = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x157AB = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x183D4 = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x1836B = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x15909 = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x183F7 = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x1838E = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x183B1 = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x14EEB = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		_0x17ACE = new Seed(_0x14D47, _0x157AB, _0x183D4, _0x1836B, _0x15909, _0x183F7, _0x1838E, _0x183B1, _0x14EEB);
		global_seedMap[_0x14D47] = _0x17ACE;
		global_seedMap[_0x17349] = _0x17ACE;
		_0x17349++
	}
}

function objects_loadEquipment(_0x14DB0)
{
	var _0x17993 = null;
	var _0x14DD3 = _0x14DB0.split("~");
	var _0x17349 = 0;
	for (var _0x14C0C = 0; _0x14C0C < _0x14DD3.length; _0x14C0C += 0)
	{
		var _0x14D47 = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x16B15 = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x16B38 = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x16BA1 = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x16B5B = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x16B7E = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x153B4 = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x16BC4 = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x14EEB = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		_0x17993 = new Equipment(_0x14D47, _0x16B15, _0x16B38, _0x16BA1, _0x16B5B, _0x16B7E, _0x153B4, _0x16BC4, _0x14EEB);
		global_equipmentMap[_0x14D47] = _0x17993;
		global_equipmentMap[_0x17349] = _0x17993;
		_0x17349++
	}
}
var global_equipmentMap = [];

function Equipment(_0x14D47, _0x16B15, _0x16B38, _0x16BA1, _0x16B5B, _0x16B7E, _0x153B4, _0x16BC4, _0x14EEB)
{
	this.name = _0x14D47;
	this.accuracy = _0x16B15;
	this.attack = _0x16B38;
	this.speed = _0x16BA1;
	this.defence = _0x16B5B;
	this.magic = _0x16B7E;
	this.slot = _0x153B4;
	this.type = _0x16BC4;
	this.desc = _0x14EEB
}

function objects_loadEquipment(_0x14DB0)
{
	var _0x17993 = null;
	var _0x14DD3 = _0x14DB0.split("~");
	var _0x17349 = 0;
	for (var _0x14C0C = 0; _0x14C0C < _0x14DD3.length; _0x14C0C += 0)
	{
		var _0x14D47 = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x16B15 = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x16B38 = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x16BA1 = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x16B5B = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x16B7E = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x153B4 = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x16BC4 = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x14EEB = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		_0x17993 = new Equipment(_0x14D47, _0x16B15, _0x16B38, _0x16BA1, _0x16B5B, _0x16B7E, _0x153B4, _0x16BC4, _0x14EEB);
		global_equipmentMap[_0x14D47] = _0x17993;
		global_equipmentMap[_0x17349] = _0x17993;
		_0x17349++
	}
}

function refreshDarkCrystalUsedLabel()
{
	if (document.getElementById("darkCrystalUsed-label") != null)
	{
		document.getElementById("darkCrystalUsed-label").innerHTML = "";
		if (getItem("cyanCrystalUsed") == 1)
		{
			document.getElementById("darkCrystalUsed-label").innerHTML = "<img src=\'images/cyanCrystal.png\' class=\'img-30\' />"
		};
		if (getItem("greenCrystalUsed") == 1)
		{
			document.getElementById("darkCrystalUsed-label").innerHTML += "<img src=\'images/greenCrystal.png\' class=\'img-30\' />"
		};
		if (getItem("redCrystalUsed") == 1)
		{
			document.getElementById("darkCrystalUsed-label").innerHTML += "<img src=\'images/redCrystal.png\' class=\'img-30\' />"
		};
		if (getItem("blueCrystalUsed") == 1)
		{
			document.getElementById("darkCrystalUsed-label").innerHTML += "<img src=\'images/blueCrystal.png\' class=\'img-30\' />"
		};
		if (getItem("yellowCrystalUsed") == 1)
		{
			document.getElementById("darkCrystalUsed-label").innerHTML += "<img src=\'images/yellowCrystal.png\' class=\'img-30\' />"
		}
	}
}

function addItemBox(_0x14FE0, _0x15026, _0x14EEB, _0x15049, _0x14D8D, _0x14D6A, _0x15003, _0x1508F, _0x14EC8)
{
	var _0x1506C = document.getElementById(_0x15049);
	var _0x14F31 = document.createElement("div");
	_0x14F31.setAttribute("class", "item-box");
	_0x14F31.setAttribute("onclick", "clicksItem(\'" + _0x14FE0 + "\')");
	_0x14F31.setAttribute("oncontextmenu", "return rightClicksItem(\'" + _0x14FE0 + "\');");
	_0x14F31.setAttribute("id", "item-box-" + _0x14FE0);
	if (_0x1508F != "")
	{
		_0x14F31.setAttribute("data-tooltip-id", _0x1508F)
	};
	_0x14F31.style.backgroundColor = _0x14D8D;
	_0x14F31.style.border = "1px solid " + _0x14D6A;
	var _0x14F77 = document.createElement("div");
	_0x14F77.setAttribute("style", "text-align:center; font-weight: bold;font-size:12pt;color:silver;");
	if (_0x14FE0.startsWith("stardust") && !_0x14FE0.endsWith("Potion") && !_0x14FE0.endsWith("Seeds"))
	{
		var _0x14FBD = getImage("images/stardustIcon.png", "item-" + _0x14FE0 + "-box-image-title-icon");
		_0x14FBD.setAttribute("class", "img-20");
		_0x14F77.appendChild(_0x14FBD)
	};
	if (_0x14FE0 == "sapphire" || _0x14FE0 == "ruby" || _0x14FE0 == "emerald" || _0x14FE0 == "diamond" || _0x14FE0 == "bloodDiamond")
	{
		_0x14F77.setAttribute("style", "text-align:center; font-weight: bold;color:cyan;")
	};
	_0x14F77.innerHTML += _0x15003;
	if (_0x14EC8)
	{
		_0x14F77.setAttribute("style", "text-align:center; font-weight: bold;font-size:16pt;color:orange;")
	};
	var _0x14F54 = document.createElement("div");
	_0x14F54.setAttribute("style", "text-align:center");
	var _0x14F9A = getImage("images/" + _0x14FE0 + getImageExtention(_0x14FE0), "item-" + _0x14FE0 + "-box-image");
	_0x14F9A.setAttribute("id", "item-box-" + _0x14FE0 + "-image");
	_0x14F9A.setAttribute("class", "img-100");
	var _0x14F0E = document.createElement("item-" + _0x14FE0);
	_0x14F0E.setAttribute("type", "number");
	_0x14F0E.setAttribute("style", "text-align:center;display:block;");
	_0x14F0E.innerHTML = formatNumber(getItem(_0x14FE0), false);
	if (_0x15026 == 1)
	{
		_0x14F0E = document.createElement("div");
		_0x14F0E.setAttribute("style", "text-align:center");
		_0x14F0E.setAttribute("id", "itemBox-" + _0x14FE0 + "-amount");
		_0x14F0E.innerHTML = ""
	};
	if (_0x14FE0 == "researcher")
	{
		_0x14F0E = document.createElement("span");
		_0x14F0E.setAttribute("style", "text-align:center;display:block;");
		_0x14F0E.innerHTML = "<b style=\'color:orange;\'>Completed: </b>" + "<span id=\'research-completed-label\'>" + getTotalResearches() + "</span>"
	};
	if (getOilPerSecondForAItem(_0x14FE0) > 0)
	{
		_0x14F0E = document.createElement("span");
		_0x14F0E.setAttribute("type", "number");
		_0x14F0E.setAttribute("style", "text-align:center;display:block;");
		_0x14F0E.innerHTML = "<div style=\'margin-top:7px;\'><img src=\'images/oil.png\' class=\'img-20\' /> " + formatNumber(getOilPerSecondForAItem(_0x14FE0)) + "</div>"
	};
	if (_0x14FE0.toLowerCase().endsWith("oxygentank"))
	{
		_0x14F0E = document.createElement("span");
		_0x14F0E.setAttribute("type", "number");
		_0x14F0E.setAttribute("style", "text-align:center;display:block;");
		_0x14F0E.innerHTML = "<span id=\'oxygenTank-itemBox-value\'></span>"
	};
	if (_0x14FE0.toLowerCase().endsWith("chef"))
	{
		_0x14F0E = document.createElement("span");
		_0x14F0E.setAttribute("type", "number");
		_0x14F0E.setAttribute("style", "text-align:center;display:block;");
		_0x14F0E.innerHTML = "<span id=\'chef-itemBox-value\'></span>"
	};
	if (_0x14FE0.toLowerCase().endsWith("bonemealbin"))
	{
		_0x14F0E = document.createElement("span");
		_0x14F0E.setAttribute("type", "number");
		_0x14F0E.setAttribute("style", "text-align:center;display:block;color:grey");
		_0x14F0E.innerHTML = "<img src=\'images/bonemeal.png\' class=\'img-20\' /> " + "<item-bonemeal>0</item-bonemeal>"
	};
	if (_0x14FE0 == "axe")
	{
		_0x14F0E = document.createElement("span");
		_0x14F0E.setAttribute("type", "number");
		_0x14F0E.setAttribute("style", "text-align:center;display:block;color:grey");
		_0x14F0E.innerHTML = "<img src=\'images/logs.png\' class=\'img-20\' /> 5 - 10"
	};
	if (_0x14FE0 == "sapphireAxe")
	{
		_0x14F0E = document.createElement("span");
		_0x14F0E.setAttribute("type", "number");
		_0x14F0E.setAttribute("style", "text-align:center;display:block;color:grey");
		_0x14F0E.innerHTML = "<img src=\'images/logs.png\' class=\'img-20\' /> 10 - 15"
	};
	if (_0x14FE0 == "emeraldAxe")
	{
		_0x14F0E = document.createElement("span");
		_0x14F0E.setAttribute("type", "number");
		_0x14F0E.setAttribute("style", "text-align:center;display:block;color:grey");
		_0x14F0E.innerHTML = "<img src=\'images/logs.png\' class=\'img-20\' /> 15 - 20"
	};
	if (_0x14FE0 == "rubyAxe")
	{
		_0x14F0E = document.createElement("span");
		_0x14F0E.setAttribute("type", "number");
		_0x14F0E.setAttribute("style", "text-align:center;display:block;color:grey");
		_0x14F0E.innerHTML = "<img src=\'images/logs.png\' class=\'img-20\' /> 20 - 25"
	};
	if (_0x14FE0 == "diamondAxe")
	{
		_0x14F0E = document.createElement("span");
		_0x14F0E.setAttribute("type", "number");
		_0x14F0E.setAttribute("style", "text-align:center;display:block;color:grey");
		_0x14F0E.innerHTML = "<img src=\'images/logs.png\' class=\'img-20\' /> 25 - 30"
	};
	if (_0x14FE0 == "chainsaw")
	{
		_0x14F0E = document.createElement("span");
		_0x14F0E.setAttribute("type", "number");
		_0x14F0E.setAttribute("style", "text-align:center;display:block;color:grey");
		_0x14F0E.innerHTML = "<img src=\'images/logs.png\' class=\'img-20\' /> +5"
	};
	if (_0x14FE0 == "pirate")
	{
		_0x14F0E = document.createElement("span");
		_0x14F0E.setAttribute("type", "number");
		_0x14F0E.setAttribute("style", "text-align:center;display:none;color:grey");
		_0x14F0E.setAttribute("id", "item-box-data-pirate");
		_0x14F0E.innerHTML = "<img src=\'images/spyglass.png\' class=\'img-20\' />"
	};
	if (_0x14FE0 == "oilFactory" || _0x14FE0 == "promethiumOilFactory" || _0x14FE0 == "titaniumOilFactory")
	{
		_0x14F0E = document.createElement("span");
		_0x14F0E.setAttribute("type", "number");
		_0x14F0E.setAttribute("style", "text-align:center;display:block;");
		_0x14F0E.innerHTML = "<img src=\'images/oil.png\' class=\'img-20\' /> <item-oilFactoryWorkers>0</item-oilFactoryWorkers>"
	};
	if (_0x14FE0 == "sapphireChainsaw")
	{
		_0x14F0E = document.createElement("span");
		_0x14F0E.setAttribute("type", "number");
		_0x14F0E.setAttribute("style", "text-align:center;display:block;color:grey");
		_0x14F0E.innerHTML = "<img src=\'images/logs.png\' class=\'img-20\' /> +10"
	};
	if (_0x14FE0 == "emeraldChainsaw")
	{
		_0x14F0E = document.createElement("span");
		_0x14F0E.setAttribute("type", "number");
		_0x14F0E.setAttribute("style", "text-align:center;display:block;color:grey");
		_0x14F0E.innerHTML = "<img src=\'images/logs.png\' class=\'img-20\' /> +15"
	};
	if (_0x14FE0 == "rubyChainsaw")
	{
		_0x14F0E = document.createElement("span");
		_0x14F0E.setAttribute("type", "number");
		_0x14F0E.setAttribute("style", "text-align:center;display:block;color:grey");
		_0x14F0E.innerHTML = "<img src=\'images/logs.png\' class=\'img-20\' /> +20"
	};
	if (_0x14FE0 == "diamondChainsaw")
	{
		_0x14F0E = document.createElement("span");
		_0x14F0E.setAttribute("type", "number");
		_0x14F0E.setAttribute("style", "text-align:center;display:block;color:grey");
		_0x14F0E.innerHTML = "<img src=\'images/logs.png\' class=\'img-20\' /> +25"
	};
	if (_0x14FE0 == "trowel")
	{
		_0x14F0E = document.createElement("span");
		_0x14F0E.setAttribute("type", "number");
		_0x14F0E.setAttribute("style", "text-align:center;display:block;color:grey");
		_0x14F0E.innerHTML = "<img src=\'images/seedList.png\' class=\'img-20\' /> +5%"
	};
	if (_0x14FE0 == "explorer")
	{
		_0x14F0E = document.createElement("span");
		_0x14F0E.setAttribute("type", "number");
		_0x14F0E.setAttribute("style", "text-align:center;display:block;color:grey");
		_0x14F0E.innerHTML = "<img src=\'images/lootBag_black.png\' class=\'img-20\' /> <span id=\'" + _0x14FE0 + "-status\'>0</span>"
	};
	if (_0x14FE0 == "watch" || _0x14FE0 == "sapphireWatch" || _0x14FE0 == "emeraldWatch" || _0x14FE0 == "rubyWatch" || _0x14FE0 == "diamondWatch")
	{
		_0x14F0E = document.createElement("span");
		_0x14F0E.setAttribute("type", "number");
		_0x14F0E.setAttribute("style", "text-align:center;display:block;color:grey");
		_0x14F0E.innerHTML = "<div id=\'" + _0x14FE0 + "-status\'>Not Set</div>"
	};
	if (_0x14FE0 == "sapphireTrowel")
	{
		_0x14F0E = document.createElement("span");
		_0x14F0E.setAttribute("type", "number");
		_0x14F0E.setAttribute("style", "text-align:center;display:block;color:grey");
		_0x14F0E.innerHTML = "<img src=\'images/seedList.png\' class=\'img-20\' /> +10%"
	};
	if (_0x14FE0 == "emeraldTrowel")
	{
		_0x14F0E = document.createElement("span");
		_0x14F0E.setAttribute("type", "number");
		_0x14F0E.setAttribute("style", "text-align:center;display:block;color:grey");
		_0x14F0E.innerHTML = "<img src=\'images/seedList.png\' class=\'img-20\' /> +15%"
	};
	if (_0x14FE0 == "rubyTrowel")
	{
		_0x14F0E = document.createElement("span");
		_0x14F0E.setAttribute("type", "number");
		_0x14F0E.setAttribute("style", "text-align:center;display:block;color:grey");
		_0x14F0E.innerHTML = "<img src=\'images/seedList.png\' class=\'img-20\' /> +20%"
	};
	if (_0x14FE0 == "diamondTrowel")
	{
		_0x14F0E = document.createElement("span");
		_0x14F0E.setAttribute("type", "number");
		_0x14F0E.setAttribute("style", "text-align:center;display:block;color:grey");
		_0x14F0E.innerHTML = "<img src=\'images/seedList.png\' class=\'img-20\' /> +25%"
	};
	if (_0x14FE0 == "museum")
	{
		_0x14F0E = document.createElement("span");
		_0x14F0E.setAttribute("type", "number");
		_0x14F0E.setAttribute("style", "text-align:center;display:block;color:grey");
		_0x14F0E.innerHTML = "<span id=\'museum-info-itembox\'>" + getMuseumItemsCount()[0] + "/" + getMuseumItemsCount()[1] + "</span>"
	};
	if (_0x14FE0 == "puzzleChest1")
	{
		_0x14F0E = document.createElement("span");
		_0x14F0E.setAttribute("type", "number");
		_0x14F0E.setAttribute("style", "text-align:center;display:block;");
		_0x14F0E.innerHTML = "<b>Difficulty:</b> <img src=\'images/easyIcon.png\' class=\'img-20\' /> " + "Easy"
	};
	if (_0x14FE0 == "manaStars")
	{
		_0x14F0E = document.createElement("span");
		_0x14F0E.setAttribute("type", "number");
		_0x14F0E.setAttribute("style", "text-align:center;display:block;");
		_0x14F0E.innerHTML = "<span id=\'span-manaStarsLabel\'></span>"
	};
	if (_0x14FE0.endsWith("Oven"))
	{
		_0x14F0E = document.createElement("span");
		_0x14F0E.setAttribute("type", "number");
		_0x14F0E.setAttribute("style", "text-align:center;display:block;");
		_0x14F0E.innerHTML = "<img src=\'images/heat.png\' class=\'img-20\' /> " + "<item-heat>0</item-heat>"
	};
	if (_0x14FE0 == "darkCrystalUsed")
	{
		_0x14F0E = document.createElement("span");
		_0x14F0E.setAttribute("style", "text-align:center;display:block;");
		_0x14F0E.innerHTML = "<span id=\'darkCrystalUsed-label\'></span>"
	};
	if (_0x14FE0.toLowerCase().endsWith("stew"))
	{
		_0x14F0E = document.createElement("span");
		_0x14F0E.setAttribute("style", "text-align:center;display:block;font-size:9pt;");
		_0x14F0E.innerHTML = "<img src=\'images/energy.png\' class=\'img-20\' /> <item-stewEnergy type=\'number\'>0</item-stewEnergy> " + "<br /> <img src=\'images/hourglass_grey.png\' class=\'img-20\' /> <item-stewCooldownReduction type=\'timer\'>0</item-stewCooldownReduction>"
	};
	_0x14F31.appendChild(_0x14F77);
	_0x14F54.appendChild(_0x14F9A);
	_0x14F31.appendChild(_0x14F54);
	if (!_0x14EC8)
	{
		if (getItem(_0x14FE0, false) == 0)
		{
			_0x14F31.style.display = "none"
		};
		_0x14F31.appendChild(_0x14F0E)
	};
	_0x1506C.appendChild(_0x14F31)
}

function resetRepel()
{
	confirmDialogue("none", "Undo repel?", "Undo", "Cancel", "UNDO_REPEL")
}

function addMuseumItemBox(_0x14FE0, _0x15535, _0x15026, _0x14EEB, _0x15049, _0x14D8D, _0x14D6A, _0x15003, _0x1508F, _0x14EC8)
{
	var _0x1506C = document.getElementById(_0x15049);
	var _0x14F31 = document.createElement("div");
	_0x14F31.setAttribute("class", "item-box");
	_0x14F31.setAttribute("onclick", "clicksItem(\'" + _0x15535 + "\')");
	_0x14F31.setAttribute("id", "item-box-" + _0x14FE0);
	if (_0x1508F != "")
	{
		_0x14F31.setAttribute("data-tooltip-id", _0x1508F)
	};
	_0x14F31.style.backgroundColor = _0x14D8D;
	_0x14F31.style.border = "1px solid " + _0x14D6A;
	var _0x14F77 = document.createElement("div");
	_0x14F77.setAttribute("style", "text-align:center; font-weight: bold;font-size:12pt;color:silver;");
	_0x14F77.innerHTML += _0x15003;
	if (_0x14EC8)
	{
		_0x14F77.setAttribute("style", "text-align:center; font-weight: bold;font-size:16pt;color:orange;")
	};
	var _0x14F54 = document.createElement("div");
	_0x14F54.setAttribute("style", "text-align:center");
	var _0x14F9A = getImage("images/" + _0x14FE0 + getImageExtention(_0x14FE0), "item-" + _0x14FE0 + "-box-image-" + getRandomInt(100000));
	_0x14F9A.setAttribute("class", "img-100");
	var _0x14F0E = document.createElement("item-" + _0x14FE0);
	_0x14F0E.setAttribute("type", "number");
	_0x14F0E.setAttribute("style", "text-align:center;display:block;");
	_0x14F0E.innerHTML = formatNumber(getItem(_0x14FE0), false);
	_0x14F31.appendChild(_0x14F77);
	_0x14F54.appendChild(_0x14F9A);
	_0x14F31.appendChild(_0x14F54);
	if (!_0x14EC8)
	{
		if (getItem(_0x14FE0, false) == 0)
		{
			_0x14F31.style.display = "none"
		};
		_0x14F31.appendChild(_0x14F0E)
	};
	_0x1506C.appendChild(_0x14F31)
}

function addItemBoxMining(_0x14FE0, _0x14EEB, _0x15049, _0x14D8D, _0x14D6A, _0x15003, _0x1508F, _0x14EC8)
{
	var _0x1506C = document.getElementById(_0x15049);
	var _0x14F31 = document.createElement("div");
	_0x14F31.setAttribute("class", "item-box");
	_0x14F31.setAttribute("onclick", "clicksItem(\'" + _0x14FE0 + "\')");
	_0x14F31.setAttribute("id", "item-box-" + _0x14FE0);
	if (_0x1508F != "")
	{
		_0x14F31.setAttribute("data-tooltip-id", _0x1508F)
	};
	_0x14F31.style.backgroundColor = _0x14D8D;
	_0x14F31.style.border = "1px solid " + _0x14D6A;
	var _0x14F77 = document.createElement("div");
	_0x14F77.setAttribute("style", "text-align:center; font-weight: bold;font-size:16pt;");
	if (_0x14FE0 == "miner")
	{
		_0x14F77.innerHTML = "<img style=\'display:none;\' id=\'wrench-icon-miner\' src=\'images/wrench.png\' class=\'img-20\' /> " + _0x15003
	}
	else
	{
		_0x14F77.innerHTML = _0x15003
	};
	if (_0x14EC8)
	{
		_0x14F77.setAttribute("style", "text-align:center; font-weight: bold;font-size:16pt;color:orange;")
	};
	var _0x14F54 = document.createElement("div");
	_0x14F54.setAttribute("style", "text-align:center");
	var _0x14F9A = getImage("images/" + _0x14FE0 + ".png", "item-" + _0x14FE0 + "-box-image");
	_0x14F9A.setAttribute("class", "img-100");
	var _0x14F0E = document.createElement("item-" + _0x14FE0);
	_0x14F0E.setAttribute("type", "number");
	_0x14F0E.setAttribute("style", "text-align:center;display:block;");
	_0x14F0E.innerHTML = formatNumber(getItem(_0x14FE0), false);
	_0x14F31.appendChild(_0x14F77);
	_0x14F54.appendChild(_0x14F9A);
	_0x14F31.appendChild(_0x14F54);
	if (!_0x14EC8)
	{
		if (getItem(_0x14FE0, false) == 0)
		{
			_0x14F31.style.display = "none"
		};
		_0x14F31.appendChild(_0x14F0E)
	};
	_0x1506C.appendChild(_0x14F31)
}

function refeshMagicInCombat()
{
	if (getItem("heal") == 1)
	{
		showElement("fighting-screen-magic-area")
	}
	else
	{
		return
	};
	var _0x18EA1 = ["heal", "poison", "reflect", "fire", "teleport", "freeze", "ghostScan", "invisibility"];
	var _0x18E5B = [3, 5, 3, 2, 0, 5, 0, 1];
	for (var _0x14C0C = 0; _0x14C0C < _0x18EA1.length; _0x14C0C++)
	{
		var _0x18E7E = _0x18EA1[_0x14C0C];
		if (getItem(_0x18E7E) > 0)
		{
			showElement("combat-spell-" + _0x18E7E);
			if (getItem(_0x18E7E + "Cooldown") > 0)
			{
				document.getElementById("combat-spell-" + _0x18E7E + "-icon").style.filter = "brightness(10%)";
				showElement("combat-spell-" + _0x18E7E + "-cooldown")
			}
			else
			{
				if (_0x18E5B[_0x14C0C] > getItem("heroMana"))
				{
					document.getElementById("combat-spell-" + _0x18E7E + "-icon").style.filter = "brightness(20%) sepia(100%) hue-rotate(190deg) saturate(500%)";
					hideElement("combat-spell-" + _0x18E7E + "-cooldown")
				}
				else
				{
					document.getElementById("combat-spell-" + _0x18E7E + "-icon").style.filter = "brightness(100%)";
					hideElement("combat-spell-" + _0x18E7E + "-cooldown")
				}
			}
		}
	}
}

function convertNumberWithLetrtsKMBToNumber(_0x14EA5)
{
	if ((_0x14EA5 + "").indexOf("k") != -1 || (_0x14EA5 + "").indexOf("K") != -1)
	{
		_0x14EA5 = _0x14EA5.toUpperCase();
		_0x14EA5 = _0x14EA5.replace("K", "");
		_0x14EA5 = _0x14EA5 * 1000
	};
	if ((_0x14EA5 + "").indexOf("m") != -1 || (_0x14EA5 + "").indexOf("M") != -1)
	{
		_0x14EA5 = _0x14EA5.toUpperCase();
		_0x14EA5 = _0x14EA5.replace("M", "");
		_0x14EA5 = _0x14EA5 * 1000000
	};
	if ((_0x14EA5 + "").indexOf("b") != -1 || (_0x14EA5 + "").indexOf("B") != -1)
	{
		_0x14EA5 = _0x14EA5.toUpperCase();
		_0x14EA5 = _0x14EA5.replace("B", "");
		_0x14EA5 = _0x14EA5 * 1000000000
	};
	return _0x14EA5
}

function loadItemBoxes()
{
	var _0x17BE6 = "#262626";
	var _0x17CB8 = "#665200";
	var _0x17C95 = "grey";
	var _0x17CDB = "#995c00";
	var _0x17CFE = "#331a00";
	var _0x17C72 = "#003366";
	var _0x17C4F = "#000d1a";
	var _0x17C09 = "#008000";
	var _0x17C2C = "#006600";
	if (getItemString("home") == "none")
	{
		addItemBox("donorCoins", 0, "", "item-section-combat-1", "green", "lime", "DONOR COINS", "tooltip-donorCoins", false)
	};
	addItemBox("lootBagLog", 0, "", "explorer-section", _0x17BE6, "grey", "LOOT BAG LOGS", "", false);
	addItemBox("fieldsLootBag", 0, "", "explorer-section", _0x17CB8, _0x17C95, "FIELDS", "tooltip-lootBag", false);
	addItemBox("forestLootBag", 0, "", "explorer-section", _0x17CB8, _0x17C95, "FOREST", "tooltip-lootBag", false);
	addItemBox("cavesLootBag", 0, "", "explorer-section", _0x17CB8, _0x17C95, "CAVES", "tooltip-lootBag", false);
	addItemBox("lavaDungeonLootBag", 0, "", "explorer-section", _0x17CB8, _0x17C95, "LAVA DUNG.", "tooltip-lootBag", false);
	addItemBox("northernFieldsLootBag", 0, "", "explorer-section", _0x17CB8, _0x17C95, "NORTH FIELDS", "tooltip-lootBag", false);
	addItemBox("cemeteryLootBag", 0, "", "explorer-section", _0x17CB8, _0x17C95, "CEMETERY", "tooltip-lootBag", false);
	addItemBox("oceanLootBag", 0, "", "explorer-section", _0x17CB8, _0x17C95, "OCEAN", "tooltip-lootBag", false);
	addItemBox("dungeonLootBag", 0, "", "explorer-section", _0x17CB8, _0x17C95, "CASTLE DUNGEON", "tooltip-lootBag", false);
	addItemBox("readMe", 0, "", "item-section-combat-1", _0x17BE6, "grey", "READ ME", "", false);
	addItemBox("fightMonsterButton", 0, "", "item-section-combat-1", _0x17BE6, "grey", "FIGHT NPC", "", true);
	addItemBox("fightPvpButton", 0, "", "item-section-combat-1", _0x17BE6, "grey", "PVP", "", true);
	addItemBox("combatLog", 1, "", "item-section-combat-1", _0x17BE6, "grey", "MONSTER LOG", "tooltip-combatLog", false);
	addItemBox("combatPresetsIcon", 1, "", "item-section-combat-1", _0x17BE6, "grey", "PRESETS", "tooltip-combatPresetsIcon", false);
	addItemBox("explorer", 1, "", "item-section-combat-1", _0x17BE6, "grey", "EXPLORER", "tooltip-explorer", false);
	addItemBox("heartCrystal1", 0, "", "item-section-combat-1", _0x17CB8, _0x17C95, "HEART CRYSTAL", "tooltip-heartCrystal", false);
	addItemBox("heartCrystal2", 0, "", "item-section-combat-1", _0x17CB8, _0x17C95, "HEART CRYSTAL", "tooltip-heartCrystal", false);
	addItemBox("bones", 0, "", "item-section-combat-1", _0x17CB8, _0x17C95, "BONES", "tooltip-bones", false);
	addItemBox("ashes", 0, "", "item-section-combat-1", _0x17CB8, _0x17C95, "ASHES", "tooltip-ashes", false);
	addItemBox("iceBones", 0, "", "item-section-combat-1", _0x17CB8, _0x17C95, "ICE BONES", "tooltip-iceBones", false);
	addItemBox("snakeBones", 0, "", "item-section-combat-1", _0x17CB8, _0x17C95, "SNAKE BONES", "tooltip-snakeBones", false);
	addItemBox("greenStoneEyes", 0, "", "item-section-combat-1", _0x17CB8, _0x17C95, "STONE EYES", "tooltip-stoneEyes", false);
	addItemBox("redStoneEyes", 0, "", "item-section-combat-1", _0x17CB8, _0x17C95, "STONE EYES", "tooltip-stoneEyes", false);
	addItemBox("yellowStoneEyes", 0, "", "item-section-combat-1", _0x17CB8, _0x17C95, "STONE EYES", "tooltip-stoneEyes", false);
	addItemBox("blueStoneEyes", 0, "", "item-section-combat-1", _0x17CB8, _0x17C95, "STONE EYES", "tooltip-stoneEyes", false);
	addItemBox("purpleStoneEyes", 0, "", "item-section-combat-1", _0x17CB8, _0x17C95, "STONE EYES", "tooltip-stoneEyes", false);
	addItemBox("burntRemains", 0, "", "item-section-combat-1", _0x17CB8, _0x17C95, "BURNT REMAINS", "tooltip-burntRemains", false);
	addItemBox("skeletonSkull", 0, "", "item-section-combat-1", _0x17CB8, _0x17C95, "SKULL", "tooltip-skeletonSkull", false);
	addItemBox("ghostClothes", 0, "", "item-section-combat-1", _0x17CB8, _0x17C95, "GHOST CLOTHES", "tooltip-ghostClothes", false);
	addItemBox("snakeskin", 0, "", "item-section-combat-1", _0x17CB8, _0x17C95, "SNAKESKIN", "tooltip-snakeskin", false);
	addItemBox("batSkin", 0, "", "item-section-combat-1", _0x17CB8, _0x17C95, "BATSKIN", "tooltip-batSkin", false);
	addItemBox("bearFur", 0, "", "item-section-combat-1", _0x17CB8, _0x17C95, "BEAR FUR", "tooltip-bearFur", false);
	addItemBox("polarBearFur", 0, "", "item-section-combat-1", _0x17CB8, _0x17C95, "POLAR BEAR FUR", "tooltip-polarBearFur", false);
	addItemBox("blackSilk", 0, "", "item-section-combat-1", _0x17CB8, _0x17C95, "BLACK SILK", "tooltip-blackSilk", false);
	addItemBox("feather", 0, "", "item-section-combat-1", _0x17CB8, _0x17C95, "FEATHERS", "tooltip-feather", false);
	addItemBox("fireFeather", 0, "", "item-section-combat-1", _0x17CB8, _0x17C95, "FIRE FEATHERS", "tooltip-feather", false);
	addItemBox("iceFeather", 0, "", "item-section-combat-1", _0x17CB8, _0x17C95, "ICE FEATHERS", "tooltip-feather", false);
	addItemBox("string", 0, "", "item-section-combat-1", _0x17CB8, _0x17C95, "STRING", "tooltip-string", false);
	addItemBox("magicString", 0, "", "item-section-combat-1", _0x17CB8, _0x17C95, "MAGIC STRING", "tooltip-magicString", false);
	addItemBox("thickString", 0, "", "item-section-combat-1", _0x17CB8, _0x17C95, "THICK STRING", "tooltip-string", false);
	addItemBox("bowBase", 0, "", "item-section-combat-1", _0x17CB8, _0x17C95, "BOW BASE", "tooltip-bowBase", false);
	addItemBox("smallSnowballs", 0, "", "item-section-combat-1", _0x17CB8, _0x17C95, "SMALL SNOWBALLS", "", false);
	addItemBox("mediumSnowball", 0, "", "item-section-combat-1", _0x17CB8, _0x17C95, "MEDIUM SNOWBALL", "", false);
	addItemBox("largeSnowball", 0, "", "item-section-combat-1", _0x17CB8, _0x17C95, "LARGE SNOWBALL", "", false);
	addItemBox("leftBranch", 0, "", "item-section-combat-1", _0x17CB8, _0x17C95, "LEFT BRANCH", "", false);
	addItemBox("rightBranch", 0, "", "item-section-combat-1", _0x17CB8, _0x17C95, "RIGHT BRANCH", "", false);
	addItemBox("chain", 0, "", "item-section-combat-1", _0x17CB8, _0x17C95, "CHAIN", "tooltip-cemeterySkeleton", false);
	addItemBox("skeletonHead", 0, "", "item-section-combat-1", _0x17CB8, _0x17C95, "CEMETERY SKULL", "tooltip-cemeterySkeleton", false);
	addItemBox("skeletonLeftArm", 0, "", "item-section-combat-1", _0x17CB8, _0x17C95, "LEFT ARM", "tooltip-cemeterySkeleton", false);
	addItemBox("skeletonRightArm", 0, "", "item-section-combat-1", _0x17CB8, _0x17C95, "RIGHT ARM", "tooltip-cemeterySkeleton", false);
	addItemBox("skeletonLeftLeg", 0, "", "item-section-combat-1", _0x17CB8, _0x17C95, "LEFT LEG", "tooltip-cemeterySkeleton", false);
	addItemBox("skeletonRightLeg", 0, "", "item-section-combat-1", _0x17CB8, _0x17C95, "RIGHT LEG", "tooltip-cemeterySkeleton", false);
	addItemBox("dungeonSign0", 0, "", "item-section-combat-1", _0x17CB8, _0x17C95, "STRANGE PANEL", "tooltip-strangeIcon", false);
	addItemBox("dungeonSign1", 0, "", "item-section-combat-1", _0x17CB8, _0x17C95, "STRANGE ICON", "tooltip-strangeIcon", false);
	addItemBox("dungeonSign2", 0, "", "item-section-combat-1", _0x17CB8, _0x17C95, "STRANGE ICON", "tooltip-strangeIcon", false);
	addItemBox("dungeonSign3", 0, "", "item-section-combat-1", _0x17CB8, _0x17C95, "STRANGE ICON", "tooltip-strangeIcon", false);
	addItemBox("dungeonSign4", 0, "", "item-section-combat-1", _0x17CB8, _0x17C95, "STRANGE ICON", "tooltip-strangeIcon", false);
	if (getItem("cookingUnlocked") == 0)
	{
		addItemBox("stew", 0, "", "item-section-combat-1", _0x17CDB, _0x17C95, "STEW", "tooltip-stew", false);
		addItemBox("apple", 0, "", "item-section-combat-1", _0x17CDB, _0x17C95, "APPLE", "tooltip-apple", false);
		addItemBox("storeBananas", 0, "", "item-section-combat-1", _0x17CDB, _0x17C95, "BANANAS", "tooltip-storeBananas", false);
		addItemBox("rawChicken", 0, "", "item-section-combat-1", _0x17CDB, _0x17C95, "RAW CHICKEN", "tooltip-rawChicken", false);
		addItemBox("cheese", 0, "", "item-section-combat-1", _0x17CDB, _0x17C95, "CHEESE", "tooltip-cheese", false);
		addItemBox("honey", 0, "", "item-section-combat-1", _0x17CDB, _0x17C95, "HONEY", "tooltip-honey", false)
	};
	addItemBox("combatVial", 0, "", "item-section-combat-1", _0x17CFE, _0x17C95, "EMPTY VIAL", "tooltip-combatVial", false);
	addItemBox("poisonCombatVial", 0, "", "item-section-combat-1", _0x17CFE, _0x17C95, "POISON VIAL", "tooltip-poisonCombatVial", false);
	addItemBox("arrow", 0, "", "item-section-combat-1", _0x17CFE, _0x17C95, "ARROWS", "tooltip-arrow", false);
	addItemBox("fireArrow", 0, "", "item-section-combat-1", _0x17CFE, _0x17C95, "FIRE ARROWS", "tooltip-fireArrow", false);
	addItemBox("iceArrow", 0, "", "item-section-combat-1", _0x17CFE, _0x17C95, "ICE ARROWS", "tooltip-iceArrow", false);
	addItemBox("arrowPlus", 0, "", "item-section-combat-1", _0x17CFE, _0x17C95, "ARROWS+", "tooltip-arrowPlus", false);
	addItemBox("rustySword", 0, "", "item-section-combat-1", _0x17CFE, _0x17C95, "RUSTY SWORD", "tooltip-rustySword", false);
	addItemBox("unlitTorch", 0, "", "item-section-combat-1", _0x17CFE, _0x17C95, "UNLIT TORCH", "tooltip-unlitTorch", false);
	addItemBox("torch", 0, "", "item-section-combat-1", _0x17CFE, _0x17C95, "TORCH", "tooltip-torch", false);
	addItemBox("stinger", 0, "", "item-section-combat-1", _0x17CFE, _0x17C95, "STINGER", "tooltip-stinger", false);
	addItemBox("brokenStinger", 0, "", "item-section-combat-1", _0x17CFE, _0x17C95, "STINGER", "tooltip-brokenStinger", false);
	addItemBox("ironDagger", 0, "", "item-section-combat-1", _0x17CFE, _0x17C95, "IRON DAGGER", "tooltip-ironDagger", false);
	addItemBox("offhandIronDagger", 0, "", "item-section-combat-1", _0x17CFE, _0x17C95, "OFFHAND DAGGER", "tooltip-offhandIronDagger", false);
	addItemBox("offhandScythe", 0, "", "item-section-combat-1", _0x17CFE, _0x17C95, "OFFHAND DAGGER+", "tooltip-offhandScythe", false);
	addItemBox("skeletonSword", 0, "", "item-section-combat-1", _0x17CFE, _0x17C95, "SKELETON SWORD", "tooltip-skeletonSword", false);
	addItemBox("bow", 0, "", "item-section-combat-1", _0x17CFE, _0x17C95, "BOW", "tooltip-bow", false);
	addItemBox("magicBow", 0, "", "item-section-combat-1", _0x17CFE, _0x17C95, "MAGIC BOW", "tooltip-magicBow", false);
	addItemBox("scythe", 0, "", "item-section-combat-1", _0x17CFE, _0x17C95, "SCYTHE", "tooltip-scythe", false);
	addItemBox("trident", 0, "", "item-section-combat-1", _0x17CFE, _0x17C95, "TRIDENT", "tooltip-trident", false);
	addItemBox("stoneMace", 0, "", "item-section-combat-1", _0x17CFE, _0x17C95, "STONE MACE", "tooltip-stoneMace", false);
	addItemBox("stoneMacePlus", 0, "", "item-section-combat-1", _0x17CFE, _0x17C95, "STONE MACE+", "tooltip-stoneMacePlus", false);
	addItemBox("yetiLeftFoot", 0, "", "item-section-combat-1", _0x17CFE, _0x17C95, "YETI\'S FOOT (L)", "tooltip-yetiLeftFoot", false);
	addItemBox("yetiRightFoot", 0, "", "item-section-combat-1", _0x17CFE, _0x17C95, "YETI\'S FOOT (R)", "tooltip-yetiRightFoot", false);
	addItemBox("snakeskinMask", 0, "", "item-section-combat-1", _0x17CFE, _0x17C95, "SNAKESKIN MASK", "tooltip-snakeskinMask", false);
	addItemBox("snakeskinBody", 0, "", "item-section-combat-1", _0x17CFE, _0x17C95, "SNAKESKIN BODY", "tooltip-snakeskinBody", false);
	addItemBox("snakeskinLegs", 0, "", "item-section-combat-1", _0x17CFE, _0x17C95, "SNAKESKIN LEGS", "tooltip-snakeskinLegs", false);
	addItemBox("snakeskinBoots", 0, "", "item-section-combat-1", _0x17CFE, _0x17C95, "SNAKESKIN BOOTS", "tooltip-snakeskinBoots", false);
	addItemBox("snakeskinGloves", 0, "", "item-section-combat-1", _0x17CFE, _0x17C95, "SNAKESKIN GLOVES", "tooltip-snakeskinGloves", false);
	addItemBox("bearFurMask", 0, "", "item-section-combat-1", _0x17CFE, _0x17C95, "BEAR MASK", "tooltip-bearFurMask", false);
	addItemBox("bearFurBody", 0, "", "item-section-combat-1", _0x17CFE, _0x17C95, "BEAR BODY", "tooltip-bearFurBody", false);
	addItemBox("bearFurLegs", 0, "", "item-section-combat-1", _0x17CFE, _0x17C95, "BEAR LEGS", "tooltip-bearFurLegs", false);
	addItemBox("bearFurBoots", 0, "", "item-section-combat-1", _0x17CFE, _0x17C95, "BEAR BOOTS", "tooltip-bearFurBoots", false);
	addItemBox("bearFurGloves", 0, "", "item-section-combat-1", _0x17CFE, _0x17C95, "BEAR GLOVES", "tooltip-bearFurGloves", false);
	addItemBox("polarBearFurMask", 0, "", "item-section-combat-1", _0x17CFE, _0x17C95, "POLAR MASK", "tooltip-polarBearFurMask", false);
	addItemBox("polarBearFurBody", 0, "", "item-section-combat-1", _0x17CFE, _0x17C95, "POLAR BODY", "tooltip-polarBearFurBody", false);
	addItemBox("polarBearFurLegs", 0, "", "item-section-combat-1", _0x17CFE, _0x17C95, "POLAR LEGS", "tooltip-polarBearFurLegs", false);
	addItemBox("polarBearFurBoots", 0, "", "item-section-combat-1", _0x17CFE, _0x17C95, "POLAR BOOTS", "tooltip-polarBearFurBoots", false);
	addItemBox("polarBearFurGloves", 0, "", "item-section-combat-1", _0x17CFE, _0x17C95, "POLAR GLOVES", "tooltip-polarBearFurGloves", false);
	addItemBox("batSkinMask", 0, "", "item-section-combat-1", _0x17CFE, _0x17C95, "BATSKIN MASK", "tooltip-batSkinMask", false);
	addItemBox("batSkinBody", 0, "", "item-section-combat-1", _0x17CFE, _0x17C95, "BATSKIN BODY", "tooltip-batSkinBody", false);
	addItemBox("batSkinLegs", 0, "", "item-section-combat-1", _0x17CFE, _0x17C95, "BATSKIN LEGS", "tooltip-batSkinLegs", false);
	addItemBox("batSkinBoots", 0, "", "item-section-combat-1", _0x17CFE, _0x17C95, "BATSKIN BOOTS", "tooltip-batSkinBoots", false);
	addItemBox("batSkinGloves", 0, "", "item-section-combat-1", _0x17CFE, _0x17C95, "BATSKIN GLOVES", "tooltip-batSkinGloves", false);
	addItemBox("promethiumHelmet", 0, "", "item-section-combat-1", _0x17CFE, _0x17C95, "PROM. HELM", "tooltip-promethiumHelmet", false);
	addItemBox("promethiumBody", 0, "", "item-section-combat-1", _0x17CFE, _0x17C95, "PROM. BODY", "tooltip-promethiumBody", false);
	addItemBox("promethiumLegs", 0, "", "item-section-combat-1", _0x17CFE, _0x17C95, "PROM. LEGS", "tooltip-promethiumLegs", false);
	addItemBox("promethiumBoots", 0, "", "item-section-combat-1", _0x17CFE, _0x17C95, "PROM. BOOTS", "tooltip-promethiumBoots", false);
	addItemBox("promethiumGloves", 0, "", "item-section-combat-1", _0x17CFE, _0x17C95, "PROM. GLOVES", "tooltip-promethiumGloves", false);
	addItemBox("flippers", 0, "", "item-section-combat-1", _0x17CFE, _0x17C95, "FLIPPERS", "tooltip-flippers", false);
	addItemBox("woodenShield", 0, "", "item-section-combat-1", _0x17CFE, _0x17C95, "WOOD SHIELD", "tooltip-woodenShield", false);
	addItemBox("skeletonShield", 0, "", "item-section-combat-1", _0x17CFE, _0x17C95, "SKELETON SHIELD", "tooltip-skeletonShield", false);
	addItemBox("cemeterySkeletonShield1", 0, "", "item-section-combat-1", _0x17CFE, _0x17C95, "BROKEN SHIELD", "tooltip-cemeterySkeletonShieldBroken", false);
	addItemBox("cemeterySkeletonShield2", 0, "", "item-section-combat-1", _0x17CFE, _0x17C95, "BROKEN SHIELD", "tooltip-cemeterySkeletonShieldBroken", false);
	addItemBox("cemeterySkeletonShield3", 0, "", "item-section-combat-1", _0x17CFE, _0x17C95, "BROKEN SHIELD", "tooltip-cemeterySkeletonShieldBroken", false);
	addItemBox("cemeterySkeletonShield", 0, "", "item-section-combat-1", _0x17CFE, _0x17C95, "CEMETERY SHIELD", "tooltip-cemeterySkeletonShieldBroken", false);
	addItemBox("knightsShield", 0, "", "item-section-combat-1", _0x17CFE, _0x17C95, "KNIGHT\'S SHIELD", "tooltip-knightsShield", false);
	addItemBox("magicOrb", 0, "", "item-section-combat-1", _0x17CFE, _0x17C95, "MAGIC ORB", "tooltip-magicOrb", false);
	addItemBox("boneAmulet", 0, "", "item-section-combat-1", _0x17CFE, _0x17C95, "BONE AMULET", "tooltip-boneAmulet", false);
	addItemBox("boneAmuletPlus", 0, "", "item-section-combat-1", _0x17CFE, _0x17C95, "BONE AMULET+", "tooltip-boneAmuletPlus", false);
	addItemBox("invisibilityAmulet", 0, "", "item-section-combat-1", _0x17CFE, _0x17C95, "INVIS. AMULET", "tooltip-invisibilityAmulet", false);
	addItemBox("wand", 0, "", "item-section-combat-1", _0x17C72, _0x17C4F, "WAND", "tooltip-wand", false);
	addItemBox("staff", 0, "", "item-section-combat-1", _0x17C72, _0x17C4F, "MAGIC STAFF", "tooltip-staff", false);
	addItemBox("reaperHood", 0, "", "item-section-combat-1", _0x17C72, _0x17C4F, "REAPER HOOD", "tooltip-reaperHood", false);
	addItemBox("reaperBody", 0, "", "item-section-combat-1", _0x17C72, _0x17C4F, "REAPER BODY", "tooltip-reaperBody", false);
	addItemBox("reaperLegs", 0, "", "item-section-combat-1", _0x17C72, _0x17C4F, "REAPER SKIRT", "tooltip-reaperLegs", false);
	addItemBox("reaperBoots", 0, "", "item-section-combat-1", _0x17C72, _0x17C4F, "REAPER BOOTS", "tooltip-reaperBoots", false);
	addItemBox("reaperGloves", 0, "", "item-section-combat-1", _0x17C72, _0x17C4F, "REAPER GLOVES", "tooltip-reaperGloves", false);
	addItemBox("cooldownRing1", 0, "", "item-section-combat-1", _0x17CB8, _0x17C95, "CD RING (1)", "tooltip-cooldownRing1", false);
	addItemBox("energyRing1", 0, "", "item-section-combat-1", _0x17CB8, _0x17C95, "ENERGY RING (1)", "tooltip-energyRing1", false);
	addItemBox("manaRing1", 0, "", "item-section-combat-1", _0x17CB8, _0x17C95, "MANA RING (1)", "tooltip-manaRing1", false);
	addItemBox("cooldownRing2", 0, "", "item-section-combat-1", _0x17CB8, _0x17C95, "CD RING (2)", "tooltip-cooldownRing2", false);
	addItemBox("energyRing2", 0, "", "item-section-combat-1", _0x17CB8, _0x17C95, "ENERGY RING (2)", "tooltip-energyRing2", false);
	addItemBox("manaRing2", 0, "", "item-section-combat-1", _0x17CB8, _0x17C95, "MANA RING (2)", "tooltip-manaRing2", false);
	addItemBox("cooldownRing3", 0, "", "item-section-combat-1", _0x17CB8, _0x17C95, "CD RING (3)", "tooltip-cooldownRing3", false);
	addItemBox("energyRing3", 0, "", "item-section-combat-1", _0x17CB8, _0x17C95, "ENERGY RING (3)", "tooltip-energyRing3", false);
	addItemBox("manaRing3", 0, "", "item-section-combat-1", _0x17CB8, _0x17C95, "MANA RING (3)", "tooltip-manaRing3", false);
	addItemBox("cooldownRing4", 0, "", "item-section-combat-1", _0x17CB8, _0x17C95, "CD RING (4)", "tooltip-cooldownRing4", false);
	addItemBox("energyRing4", 0, "", "item-section-combat-1", _0x17CB8, _0x17C95, "ENERGY RING (4)", "tooltip-energyRing4", false);
	addItemBox("manaRing4", 0, "", "item-section-combat-1", _0x17CB8, _0x17C95, "MANA RING (4)", "tooltip-manaRing4", false);
	addItemBox("convertMagic", 1, "", "item-section-magic-1", "#0066cc", "#0066cc", "CONVERT", "tooltip-convertMagic", false);
	addItemBox("manaStars", "manaStars", "", "item-section-magic-1", "#002233", "#80d4ff", "MANA STARS", "tooltip-manaStars", false);
	addItemBox("smallManaStar", "smallManaStar", "", "item-section-magic-1", "#002233", "#80d4ff", "MANA STAR", "tooltip-smallManaStar", false);
	addItemBox("mediumManaStar", "mediumManaStar", "", "item-section-magic-1", "#002233", "#80d4ff", "MANA STAR", "tooltip-mediumManaStar", false);
	addItemBox("largeManaStar", "largeManaStar", "", "item-section-magic-1", "#002233", "#80d4ff", "MANA STAR", "tooltip-largeManaStar", false);
	addItemBox("hugeManaStar", "hugeManaStar", "", "item-section-magic-1", "#002233", "#80d4ff", "MANA STAR", "tooltip-hugeManaStar", false);
	addItemBox("spellScrollHeal", "spellScrollHeal", "", "item-section-magic-1", "#002233", "#80d4ff", "SPELL SCROLL", "tooltip-spellScrollHeal", false);
	addItemBox("spellScrollPoison", "spellScrollPoison", "", "item-section-magic-1", "#002233", "#80d4ff", "SPELL SCROLL", "tooltip-spellScrollPoison", false);
	addItemBox("spellScrollReflect", "spellScrollReflect", "", "item-section-magic-1", "#002233", "#80d4ff", "SPELL SCROLL", "tooltip-spellScrollReflect", false);
	addItemBox("spellScrollFire", "spellScrollReflect", "", "item-section-magic-1", "#002233", "#80d4ff", "SPELL SCROLL", "tooltip-spellScrollFire", false);
	addItemBox("spellScrollTeleport", "spellScrollTeleport", "", "item-section-magic-1", "#002233", "#80d4ff", "SPELL SCROLL", "tooltip-spellScrollTeleport", false);
	addItemBox("spellScrollFreeze", "spellScrollFreeze", "", "item-section-magic-1", "#002233", "#80d4ff", "SPELL SCROLL", "tooltip-spellScrollFreeze", false);
	addItemBox("spellScrollGhostScan", "spellScrollGhostScan", "", "item-section-magic-1", "#002233", "#80d4ff", "SPELL SCROLL", "tooltip-spellScrollGhostScan", false);
	addItemBox("spellScrollInvisibility", "spellScrollInvisibility", "", "item-section-magic-1", "#002233", "#80d4ff", "SPELL SCROLL", "tooltip-spellScrollInvisibility", false);
	addItemBox("heal", "heal", "", "item-section-magic-1", "#002233", "#80d4ff", "HEAL", "tooltip-heal", false);
	addItemBox("poison", "poison", "", "item-section-magic-1", "#002233", "#80d4ff", "POISON", "tooltip-poison", false);
	addItemBox("reflect", "reflect", "", "item-section-magic-1", "#002233", "#80d4ff", "REFLECT", "tooltip-reflect", false);
	addItemBox("fire", "fire", "", "item-section-magic-1", "#002233", "#80d4ff", "FIRE", "tooltip-fire", false);
	addItemBox("teleport", "teleport", "", "item-section-magic-1", "#002233", "#80d4ff", "TELEPORT", "tooltip-teleport", false);
	addItemBox("freeze", "freeze", "", "item-section-magic-1", "#002233", "#80d4ff", "FREEZE", "tooltip-freeze", false);
	addItemBox("ghostScan", "ghostScan", "", "item-section-magic-1", "#002233", "#80d4ff", "GHOST SCAN", "tooltip-ghostScan", false);
	addItemBox("invisibility", "invisibility", "", "item-section-magic-1", "#002233", "#80d4ff", "INVISIBILITY", "tooltip-invisibility", false);
	addItemBox("transformLog", "transformLog", "", "convertMagic-section", "#002233", "#80d4ff", "TRANSFORM LOG", "tooltip-transformLog", true);
	addItemBox("needle", 0, "", "convertMagic-section", "#002233", "#80d4ff", "NEEDLE", "tooltip-needle", false);
	addItemBox("daggerBlade", 0, "", "convertMagic-section", "#002233", "#80d4ff", "DAGGER BLADE", "tooltip-daggerBlade", false);
	addItemBox("daggerHandle", 0, "", "convertMagic-section", "#002233", "#80d4ff", "DAGGER HANDLE", "tooltip-daggerHandle", false);
	addItemBox("skeletonSwordMetal", 0, "", "convertMagic-section", "#002233", "#80d4ff", "SWORD METAL", "tooltip-skeletonSwordMetal", false);
	addItemBox("scytheBlade", 0, "", "convertMagic-section", "#002233", "#80d4ff", "SCYTHE BLADE", "tooltip-scytheBlade", false);
	addItemBox("maceSpikes", 0, "", "convertMagic-section", "#002233", "#80d4ff", "MACE SPIKES", "tooltip-maceSpikes", false);
	addItemBoxMining("miner", "", "item-section-mining-1", _0x17BE6, "grey", "MINER", "tooltip-miner", false);
	addItemBoxMining("drills", "", "item-section-mining-1", _0x17BE6, "grey", "DRILLS", "tooltip-drills", false);
	addItemBoxMining("crushers", "", "item-section-mining-1", _0x17BE6, "grey", "CRUSHERS", "tooltip-crushers", false);
	addItemBoxMining("giantDrills", "", "item-section-mining-1", _0x17BE6, "grey", "GIANT DRILLS", "tooltip-giantDrills", false);
	addItemBoxMining("excavators", "", "item-section-mining-1", _0x17BE6, "grey", "EXCAVATORS", "tooltip-excavators", false);
	addItemBox("rocket", 1, "", "item-section-mining-1", "#333333", "grey", "ROCKET", "tooltip-rocket", false);
	addItemBox("robot", 1, "", "item-section-mining-1", "#333333", "grey", "ROBOT", "tooltip-robot", false);
	addItemBox("sapphireRobot", 1, "", "item-section-mining-1", "#333333", "grey", "ROBOT", "tooltip-robot", false);
	addItemBox("emeraldRobot", 1, "", "item-section-mining-1", "#333333", "grey", "ROBOT", "tooltip-robot", false);
	addItemBox("rubyRobot", 1, "", "item-section-mining-1", "#333333", "grey", "ROBOT", "tooltip-robot", false);
	addItemBox("diamondRobot", 1, "", "item-section-mining-1", "#333333", "grey", "ROBOT", "tooltip-robot", false);
	addItemBox("diamond_verydark", 1, "", "item-section-mining-1", "#333333", "grey", "GEM LIST", "tooltip-none", false);
	addItemBox("gemList2", 1, "", "item-section-mining-1", "#333333", "grey", "GEM/PRISM LIST", "tooltip-none", false);
	addItemBox("gemList3", 1, "", "item-section-mining-1", "#333333", "grey", "COLLECTION", "tooltip-none", false);
	addItemBox("stardustPickaxe", 1, "", "item-section-mining-1", "#333333", "grey", "PICKAXE", "tooltip-stardustPickaxe", false);
	addItemBox("sapphireStardustPickaxe", 1, "", "item-section-mining-1", "#333333", "grey", "PICKAXE", "tooltip-stardustPickaxe", false);
	addItemBox("emeraldStardustPickaxe", 1, "", "item-section-mining-1", "#333333", "grey", "PICKAXE", "tooltip-stardustPickaxe", false);
	addItemBox("rubyStardustPickaxe", 1, "", "item-section-mining-1", "#333333", "grey", "PICKAXE", "tooltip-stardustPickaxe", false);
	addItemBox("diamondStardustPickaxe", 1, "", "item-section-mining-1", "#333333", "grey", "PICKAXE", "tooltip-stardustPickaxe", false);
	addItemBox("shovel", 1, "", "item-section-mining-1", "#333333", "grey", "SHOVEL", "tooltip-shovel", false);
	addItemBox("sapphireShovel", 1, "", "item-section-mining-1", "#333333", "grey", "SHOVEL", "tooltip-sapphireShovel", false);
	addItemBox("emeraldShovel", 1, "", "item-section-mining-1", "#333333", "grey", "SHOVEL", "tooltip-emeraldShovel", false);
	addItemBox("rubyShovel", 1, "", "item-section-mining-1", "#333333", "grey", "SHOVEL", "tooltip-rubyShovel", false);
	addItemBox("diamondShovel", 1, "", "item-section-mining-1", "#333333", "grey", "SHOVEL", "tooltip-diamondShovel", false);
	addItemBox("oilStorage1", 1, "", "item-section-mining-1", "#333333", "grey", "OIL STORAGE I", "", false);
	addItemBox("oilStorage2", 1, "", "item-section-mining-1", "#333333", "grey", "OIL STORAGE II", "", false);
	addItemBox("oilStorage3", 1, "", "item-section-mining-1", "#333333", "grey", "OIL STORAGE III", "", false);
	addItemBox("oilStorage4", 1, "", "item-section-mining-1", "#333333", "grey", "OIL STORAGE VI", "", false);
	addItemBox("oilStorage5", 1, "", "item-section-mining-1", "#333333", "grey", "OIL STORAGE V", "", false);
	addItemBox("bronzeOilWell", 1, "", "item-section-mining-1", "#333333", "grey", "OIL WELL", "", false);
	addItemBox("ironOilWell", 1, "", "item-section-mining-1", "#333333", "grey", "OIL WELL", "", false);
	addItemBox("silverOilWell", 1, "", "item-section-mining-1", "#333333", "grey", "OIL WELL", "", false);
	addItemBox("goldOilWell", 1, "", "item-section-mining-1", "#333333", "grey", "OIL WELL", "", false);
	addItemBox("promethiumOilWell", 1, "", "item-section-mining-1", "#333333", "grey", "OIL WELL", "", false);
	addItemBox("oilFactory", 1, "", "item-section-mining-1", "#333333", "grey", "OIL FACTORY", "", false);
	addItemBox("promethiumOilFactory", 1, "", "item-section-mining-1", "#333333", "grey", "OIL FACTORY", "", false);
	addItemBox("titaniumOilFactory", 1, "", "item-section-mining-1", "#333333", "grey", "OIL FACTORY", "", false);
	addItemBox("darkCrystal", 0, "", "item-section-mining-1", "#333333", "grey", "DARK CRYSTAL", "tooltip-darkCrystal", false);
	addItemBox("darkCrystalUsed", 0, "", "item-section-mining-1", "#333333", "grey", "DARK CRYSTAL", "tooltip-darkCrystalUsed", false);
	addItemBox("cyanCrystal", 0, "", "item-section-mining-1", "#333333", "grey", "SKY CRYSTAL", "tooltip-colorCrystal", false);
	addItemBox("redCrystal", 0, "", "item-section-mining-1", "#333333", "grey", "LAVA CRYSTAL", "tooltip-colorCrystal", false);
	addItemBox("blueCrystal", 0, "", "item-section-mining-1", "#333333", "grey", "OCEAN CRYSTAL", "tooltip-colorCrystal", false);
	addItemBox("carePackage1", 0, "", "item-section-mining-1", "#333333", "grey", "CARE PACKAGE", "tooltip-carePackage", false);
	addItemBox("sapphire", 0, "", "item-section-mining-1", "#333333", "grey", "SAPPHIRE", "tooltip-gem", false);
	addItemBox("emerald", 0, "", "item-section-mining-1", "#333333", "grey", "EMERALD", "tooltip-gem", false);
	addItemBox("ruby", 0, "", "item-section-mining-1", "#333333", "grey", "RUBY", "tooltip-gem", false);
	addItemBox("diamond", 0, "", "item-section-mining-1", "#333333", "grey", "DIAMOND", "tooltip-gem", false);
	addItemBox("bloodDiamond", 0, "", "item-section-mining-1", "#333333", "grey", "BLOOD DIAMOND", "tooltip-gem", false);
	addItemBox("smallStardustPrism", 0, "", "item-section-mining-1", "#333333", "grey", "SMALL PRISM", "tooltip-smallStardustPrism", false);
	addItemBox("mediumStardustPrism", 0, "", "item-section-mining-1", "#333333", "grey", "MEDIUM PRISM", "tooltip-mediumStardustPrism", false);
	addItemBox("largeStardustPrism", 0, "", "item-section-mining-1", "#333333", "grey", "LARGE PRISM", "tooltip-largeStardustPrism", false);
	addItemBox("hugeStardustPrism", 0, "", "item-section-mining-1", "#333333", "grey", "HUGE PRISM", "tooltip-hugeStardustPrism", false);
	addItemBox("miningScrollSapphire", 0, "", "item-section-mining-1", "#333333", "grey", "SCROLL", "tooltip-miningScroll", false);
	addItemBox("miningScrollEmerald", 0, "", "item-section-mining-1", "#333333", "grey", "SCROLL", "tooltip-miningScroll", false);
	addItemBox("miningScrollRuby", 0, "", "item-section-mining-1", "#333333", "grey", "SCROLL", "tooltip-miningScroll", false);
	addItemBox("miningScrollDiamond", 0, "", "item-section-mining-1", "#333333", "grey", "SCROLL", "tooltip-miningScroll", false);
	addItemBox("miningScrollBloodDiamond", 0, "", "item-section-mining-1", "#333333", "grey", "SCROLL", "tooltip-miningScroll", false);
	addItemBox("miningScrollSmallStardustPrism", 0, "", "item-section-mining-1", "#333333", "grey", "SCROLL", "tooltip-miningScroll", false);
	addItemBox("miningScrollMediumStardustPrism", 0, "", "item-section-mining-1", "#333333", "grey", "SCROLL", "tooltip-miningScroll", false);
	addItemBox("miningScrollLargeStardustPrism", 0, "", "item-section-mining-1", "#333333", "grey", "SCROLL", "tooltip-miningScroll", false);
	addItemBox("miningScrollHugeStardustPrism", 0, "", "item-section-mining-1", "#333333", "grey", "SCROLL", "tooltip-miningScroll", false);
	addItemBox("miningScrollBlueGeode", 0, "", "item-section-mining-1", "#333333", "grey", "SCROLL", "tooltip-miningScroll", false);
	addItemBox("miningScrollGreenGeode", 0, "", "item-section-mining-1", "#333333", "grey", "SCROLL", "tooltip-miningScroll", false);
	addItemBox("miningScrollRedGeode", 0, "", "item-section-mining-1", "#333333", "grey", "SCROLL", "tooltip-miningScroll", false);
	addItemBox("miningScrollPurpleGeode", 0, "", "item-section-mining-1", "#333333", "grey", "SCROLL", "tooltip-miningScroll", false);
	addItemBox("sand", 0, "", "item-section-mining-1", "#333333", "grey", "SAND", "tooltip-sand", false);
	addItemBox("stone", 0, "", "item-section-mining-1", "#333333", "grey", "STONE", "tooltip-stone", false);
	addItemBox("copper", 0, "", "item-section-mining-1", "#333333", "grey", "COPPER", "tooltip-copper", false);
	addItemBox("iron", 0, "", "item-section-mining-1", "#333333", "grey", "IRON", "tooltip-iron", false);
	addItemBox("silver", 0, "", "item-section-mining-1", "#333333", "grey", "SILVER", "tooltip-silver", false);
	addItemBox("gold", 0, "", "item-section-mining-1", "#333333", "grey", "GOLD", "tooltip-gold", false);
	addItemBox("promethium", 0, "", "item-section-mining-1", "#333333", "grey", "PROMETHIUM", "tooltip-promethium", false);
	addItemBox("titanium", 0, "", "item-section-mining-1", "#333333", "grey", "TITANIUM", "tooltip-titanium", false);
	addItemBox("moonstone", 0, "", "item-section-mining-1", "#333333", "grey", "MOONSTONE", "tooltip-moonstone", false);
	addItemBox("marsRock", 0, "", "item-section-mining-1", "#333333", "grey", "MARS ROCK", "tooltip-marsRock", false);
	addItemBox("chisel", 1, "", "item-section-mining-1", "#0d0d0d", "grey", "CHISEL", "tooltip-chisel", false);
	addItemBox("sapphireChisel", 1, "", "item-section-mining-1", "#0d0d0d", "grey", "CHISEL", "tooltip-sapphireChisel", false);
	addItemBox("emeraldChisel", 1, "", "item-section-mining-1", "#0d0d0d", "grey", "CHISEL", "tooltip-emeraldChisel", false);
	addItemBox("rubyChisel", 1, "", "item-section-mining-1", "#0d0d0d", "grey", "CHISEL", "tooltip-rubyChisel", false);
	addItemBox("diamondChisel", 1, "", "item-section-mining-1", "#0d0d0d", "grey", "CHISEL", "tooltip-diamondChisel", false);
	addItemBox("ringMould", 0, "", "item-section-mining-1", "#0d0d0d", "grey", "RING MOULD", "tooltip-ringMould", false);
	addItemBox("blueGeode", 0, "", "item-section-mining-1", "#0d0d0d", "grey", "BLUE GEODE", "tooltip-geode", false);
	addItemBox("greenGeode", 0, "", "item-section-mining-1", "#0d0d0d", "grey", "GREEN GEODE", "tooltip-geode", false);
	addItemBox("redGeode", 0, "", "item-section-mining-1", "#0d0d0d", "grey", "RED GEODE", "tooltip-geode", false);
	addItemBox("purpleGeode", 0, "", "item-section-mining-1", "#0d0d0d", "grey", "PURPLE GEODE", "tooltip-geode", false);
	addItemBox("limeQuartzMineral", 0, "", "item-section-mining-1", "#0d0d0d", "grey", "MINERAL", "tooltip-limeQuartzMineral", false);
	addItemBox("jadeMineral", 0, "", "item-section-mining-1", "#0d0d0d", "grey", "MINERAL", "tooltip-jadeMineral", false);
	addItemBox("amethystMineral", 0, "", "item-section-mining-1", "#0d0d0d", "grey", "MINERAL", "tooltip-amethystMineral", false);
	addItemBox("blueMarbleMineral", 0, "", "item-section-mining-1", "#0d0d0d", "grey", "MINERAL", "tooltip-blueMarbleMineral", false);
	addItemBox("limoniteMineral", 0, "", "item-section-mining-1", "#0d0d0d", "grey", "MINERAL", "tooltip-limoniteMineral", false);
	addItemBox("tashmarineMineral", 0, "", "item-section-mining-1", "#0d0d0d", "grey", "MINERAL", "tooltip-tashmarineMineral", false);
	addItemBox("denseMarbleMineral", 0, "", "item-section-mining-1", "#0d0d0d", "grey", "MINERAL", "tooltip-denseMarbleMineral", false);
	addItemBox("fluoriteMineral", 0, "", "item-section-mining-1", "#0d0d0d", "grey", "MINERAL", "tooltip-fluoriteMineral", false);
	addItemBox("purpleQuartzMineral", 0, "", "item-section-mining-1", "#0d0d0d", "grey", "MINERAL", "tooltip-purpleQuartzMineral", false);
	addItemBox("crystalPrismeMineral", 0, "", "item-section-mining-1", "#0d0d0d", "grey", "MINERAL", "tooltip-crystalPrismeMineral", false);
	addItemBox("amberMineral", 0, "", "item-section-mining-1", "#0d0d0d", "grey", "MINERAL", "tooltip-amberMineral", false);
	addItemBox("tanzaniteMineral", 0, "", "item-section-mining-1", "#0d0d0d", "grey", "MINERAL", "tooltip-tanzaniteMineral", false);
	addItemBox("stardustHammer", 0, "", "item-section-crafting-1", "#595959", "grey", "HAMMER", "tooltip-stardustHammer", false);
	addItemBox("sapphireStardustHammer", 0, "", "item-section-crafting-1", "#595959", "grey", "HAMMER", "tooltip-stardustHammer", false);
	addItemBox("emeraldStardustHammer", 0, "", "item-section-crafting-1", "#595959", "grey", "HAMMER", "tooltip-stardustHammer", false);
	addItemBox("rubyStardustHammer", 0, "", "item-section-crafting-1", "#595959", "grey", "HAMMER", "tooltip-stardustHammer", false);
	addItemBox("diamondStardustHammer", 0, "", "item-section-crafting-1", "#595959", "grey", "HAMMER", "tooltip-stardustHammer", false);
	addItemBox("stoneFurnace", 0, "", "item-section-crafting-1", "#595959", "grey", "FURNACE", "tooltip-furnace", false);
	addItemBox("bronzeFurnace", 0, "", "item-section-crafting-1", "#595959", "grey", "FURNACE", "tooltip-furnace", false);
	addItemBox("ironFurnace", 0, "", "item-section-crafting-1", "#595959", "grey", "FURNACE", "tooltip-furnace", false);
	addItemBox("silverFurnace", 0, "", "item-section-crafting-1", "#595959", "grey", "FURNACE", "tooltip-furnace", false);
	addItemBox("goldFurnace", 0, "", "item-section-crafting-1", "#595959", "grey", "FURNACE", "tooltip-furnace", false);
	addItemBox("promethiumFurnace", 0, "", "item-section-crafting-1", "#595959", "grey", "FURNACE", "tooltip-furnace", false);
	addItemBox("titaniumFurnace", 0, "", "item-section-crafting-1", "#595959", "grey", "FURNACE", "tooltip-furnace", false);
	addItemBox("charcoalFoundry", 0, "", "item-section-crafting-1", "#595959", "grey", "FOUNDRY", "tooltip-charcoalFoundry", false);
	addItemBox("titaniumCharcoalFoundry", 0, "", "item-section-crafting-1", "#595959", "grey", "TITANIUM FOUNDRY", "tooltip-charcoalFoundry", false);
	addItemBox("charcoal", 0, "", "item-section-crafting-1", "#595959", "grey", "CHARCOAL", "tooltip-charcoal", false);
	addItemBox("lava", 0, "", "item-section-crafting-1", "#595959", "grey", "LAVA", "tooltip-lava", false);
	addItemBox("brewingKitMould", 0, "", "item-section-crafting-1", "#595959", "grey", "MOULD", "tooltip-mould", false);
	addItemBox("wrenchMould", 0, "", "item-section-crafting-1", "#595959", "grey", "MOULD", "tooltip-mould", false);
	addItemBox("trowelMould", 0, "", "item-section-crafting-1", "#595959", "grey", "MOULD", "tooltip-mould", false);
	addItemBox("watchMould", 0, "", "item-section-crafting-1", "#595959", "grey", "MOULD", "tooltip-mould", false);
	addItemBox("chainsawMould", 0, "", "item-section-crafting-1", "#595959", "grey", "MOULD", "tooltip-mould", false);
	addItemBox("houseBlueprint", 0, "", "item-section-crafting-1", "#595959", "grey", "BLUEPRINTS", "tooltip-bluePrints", false);
	addItemBox("museumBlueprint", 0, "", "item-section-crafting-1", "#595959", "grey", "BLUEPRINTS", "tooltip-bluePrints", false);
	addItemBox("oilFactoryBlueprint", 0, "", "item-section-crafting-1", "#595959", "grey", "BLUEPRINTS", "tooltip-oilFactoryBlueprint", false);
	addItemBox("promethiumOilFactoryBlueprint", 0, "", "item-section-crafting-1", "#595959", "grey", "BLUEPRINTS", "tooltip-oilFactoryBlueprint", false);
	addItemBox("titaniumOilFactoryBlueprint", 0, "", "item-section-crafting-1", "#595959", "grey", "BLUEPRINTS", "tooltip-oilFactoryBlueprint", false);
	addItemBox("spyglassMould", 0, "", "item-section-crafting-1", "#595959", "grey", "MOULD", "tooltip-mould", false);
	addItemBox("promethiumHelmetMould", 0, "", "item-section-crafting-1", "#595959", "grey", "MOULD", "tooltip-mould", false);
	addItemBox("promethiumBodyMould", 0, "", "item-section-crafting-1", "#595959", "grey", "MOULD", "tooltip-mould", false);
	addItemBox("promethiumLegsMould", 0, "", "item-section-crafting-1", "#595959", "grey", "MOULD", "tooltip-mould", false);
	addItemBox("promethiumBootsMould", 0, "", "item-section-crafting-1", "#595959", "grey", "MOULD", "tooltip-mould", false);
	addItemBox("promethiumGlovesMould", 0, "", "item-section-crafting-1", "#595959", "grey", "MOULD", "tooltip-mould", false);
	addItemBox("brokenStoneMace", 0, "", "item-section-crafting-1", "#595959", "grey", "BROKEN MACE", "tooltip-mould", false);
	addItemBox("sapphireGlassHand", 0, "", "item-section-crafting-1", "#595959", "grey", "GLASS HAND", "tooltip-sapphireGlassHand", false);
	addItemBox("emeraldGlassHand", 0, "", "item-section-crafting-1", "#595959", "grey", "GLASS HAND", "tooltip-emeraldGlassHand", false);
	addItemBox("rubyGlassHand", 0, "", "item-section-crafting-1", "#595959", "grey", "GLASS HAND", "tooltip-rubyGlassHand", false);
	addItemBox("diamondGlassHand", 0, "", "item-section-crafting-1", "#595959", "grey", "GLASS HAND", "tooltip-diamondGlassHand", false);
	addItemBox("tractorTire", 0, "", "item-section-crafting-1", "#333333", "grey", "TRACTOR TIRE", "tooltip-tractorTire", false);
	addItemBox("ironBucket", 0, "", "item-section-crafting-1", "#333333", "grey", "SILVER BUCKET", "tooltip-ironBucket", false);
	addItemBox("glass", 0, "", "item-section-crafting-1", "#333333", "grey", "GLASS", "tooltip-glass", false);
	addItemBox("bronzeBars", 0, "", "item-section-crafting-1", "#333333", "grey", "BRONZE BAR", "tooltip-bronzeBars", false);
	addItemBox("ironBars", 0, "", "item-section-crafting-1", "#333333", "grey", "IRON BAR", "tooltip-ironBars", false);
	addItemBox("silverBars", 0, "", "item-section-crafting-1", "#333333", "grey", "SILVER BAR", "tooltip-silverBars", false);
	addItemBox("goldBars", 0, "", "item-section-crafting-1", "#333333", "grey", "GOLD BAR", "tooltip-goldBars", false);
	addItemBox("glowingGoldBar", 0, "", "item-section-crafting-1", "#333333", "grey", "GLOWING GOLD", "tooltip-glowingGoldBars", false); - addItemBox("promethiumBars", 0, "", "item-section-crafting-1", "#333333", "grey", "PROMETHIUM BAR", "tooltip-promethiumBars", false);
	addItemBox("titaniumBars", 0, "", "item-section-crafting-1", "#333333", "grey", "TITANIUM BAR", "tooltip-titaniumBars", false);
	addItemBox("treeList", 1, "", "item-section-woodcutting-1", "#003300", "green", "TREE LIST", "tooltip-treeList", true);
	addItemBox("axe", 1, "", "item-section-woodcutting-1", "#003300", "green", "AXE", "tooltip-axe", false);
	addItemBox("sapphireAxe", 1, "", "item-section-woodcutting-1", "#003300", "green", "AXE", "tooltip-axe", false);
	addItemBox("emeraldAxe", 1, "", "item-section-woodcutting-1", "#003300", "green", "AXE", "tooltip-axe", false);
	addItemBox("rubyAxe", 1, "", "item-section-woodcutting-1", "#003300", "green", "AXE", "tooltip-axe", false);
	addItemBox("diamondAxe", 1, "", "item-section-woodcutting-1", "#003300", "green", "AXE", "tooltip-axe", false);
	addItemBox("chainsaw", 1, "", "item-section-woodcutting-1", "#003300", "green", "CHAINSAW", "tooltip-chainsaw", false);
	addItemBox("sapphireChainsaw", 1, "", "item-section-woodcutting-1", "#003300", "green", "CHAINSAW", "tooltip-chainsaw", false);
	addItemBox("emeraldChainsaw", 1, "", "item-section-woodcutting-1", "#003300", "green", "CHAINSAW", "tooltip-chainsaw", false);
	addItemBox("rubyChainsaw", 1, "", "item-section-woodcutting-1", "#003300", "green", "CHAINSAW", "tooltip-chainsaw", false);
	addItemBox("diamondChainsaw", 1, "", "item-section-woodcutting-1", "#003300", "green", "CHAINSAW", "tooltip-chainsaw", false);
	addItemBox("lumberJack", 1, "", "item-section-woodcutting-1", "#004d00", "green", "LUMBERJACK", "tooltip-lumberJack", false);
	addItemBox("cockroach", 0, "", "item-section-woodcutting-1", "#004d00", "green", "GIANT COCKROACH", "tooltip-cockroach", false);
	addItemBox("goldenCockroach", 0, "", "item-section-woodcutting-1", "#004d00", "green", "GIANT COCKROACH", "tooltip-goldenCockroach", false);
	addItemBox("logs", 0, "", "item-section-woodcutting-1", "#004d00", "green", "LOGS", "tooltip-logs", false);
	addItemBox("oakLogs", 0, "", "item-section-woodcutting-1", "#004d00", "green", "OAK LOGS", "tooltip-oakLogs", false);
	addItemBox("willowLogs", 0, "", "item-section-woodcutting-1", "#004d00", "green", "WILLOW LOGS", "tooltip-willowLogs", false);
	addItemBox("bambooLogs", 0, "", "item-section-woodcutting-1", "#004d00", "green", "BAMBOO", "tooltip-bambooLogs", false);
	addItemBox("mapleLogs", 0, "", "item-section-woodcutting-1", "#004d00", "green", "MAPLE", "tooltip-mapleLogs", false);
	addItemBox("lavaLogs", 0, "", "item-section-woodcutting-1", "#004d00", "green", "LAVA LOGS", "tooltip-lavaLogs", false);
	addItemBox("pineLogs", 0, "", "item-section-woodcutting-1", "#004d00", "green", "PINE LOGS", "tooltip-pineLogs", false);
	addItemBox("stardustLogs", 0, "", "item-section-woodcutting-1", "#004d00", "green", "STARDUST", "tooltip-stardustLogs", false);
	addItemBox("bob", 0, "", "item-section-farming-1", "#003300", "green", "BOB", "tooltip-bob", true);
	addItemBox("planter", 0, "", "item-section-farming-1", "#003300", "green", "PLANTER", "tooltip-planter", false);
	addItemBox("rakeHead", 0, "", "item-section-farming-1", "#003300", "green", "RAKE HEAD", "tooltip-rakeHead", false);
	addItemBox("rake", 0, "", "item-section-farming-1", "#003300", "green", "RAKE", "tooltip-rake", false);
	addItemBox("sapphireRake", 0, "", "item-section-farming-1", "#003300", "green", "RAKE", "tooltip-rake", false);
	addItemBox("emeraldRake", 0, "", "item-section-farming-1", "#003300", "green", "RAKE", "tooltip-rake", false);
	addItemBox("rubyRake", 0, "", "item-section-farming-1", "#003300", "green", "RAKE", "tooltip-rake", false);
	addItemBox("diamondRake", 0, "", "item-section-farming-1", "#003300", "green", "RAKE", "tooltip-rake", false);
	addItemBox("trowel", 0, "", "item-section-farming-1", "#003300", "green", "TROWEL", "tooltip-trowel", false);
	addItemBox("sapphireTrowel", 0, "", "item-section-farming-1", "#003300", "green", "TROWEL", "tooltip-trowel", false);
	addItemBox("emeraldTrowel", 0, "", "item-section-farming-1", "#003300", "green", "TROWEL", "tooltip-trowel", false);
	addItemBox("rubyTrowel", 0, "", "item-section-farming-1", "#003300", "green", "TROWEL", "tooltip-trowel", false);
	addItemBox("diamondTrowel", 0, "", "item-section-farming-1", "#003300", "green", "TROWEL", "tooltip-trowel", false);
	addItemBox("watch", 0, "", "item-section-farming-1", "#003300", "green", "WATCH", "tooltip-watch", false);
	addItemBox("sapphireWatch", 0, "", "item-section-farming-1", "#003300", "green", "WATCH", "tooltip-watch", false);
	addItemBox("emeraldWatch", 0, "", "item-section-farming-1", "#003300", "green", "WATCH", "tooltip-watch", false);
	addItemBox("rubyWatch", 0, "", "item-section-farming-1", "#003300", "green", "WATCH", "tooltip-watch", false);
	addItemBox("diamondWatch", 0, "", "item-section-farming-1", "#003300", "green", "WATCH", "tooltip-watch", false);
	addItemBox("seedList", 1, "", "item-section-farming-1", "#003300", "green", "SEED LIST", "", true);
	addItemBox("bonemealBin", "bonemeal", "", "item-section-farming-1", "#003300", "green", "BONEMEAL", "tooltip-bonemeal", false);
	addItemBox("sapphireBonemealBin", "bonemeal", "", "item-section-farming-1", "#003300", "green", "BONEMEAL", "tooltip-bonemeal", false);
	addItemBox("emeraldBonemealBin", "bonemeal", "", "item-section-farming-1", "#003300", "green", "BONEMEAL", "tooltip-bonemeal", false);
	addItemBox("rubyBonemealBin", "bonemeal", "", "item-section-farming-1", "#003300", "green", "BONEMEAL", "tooltip-bonemeal", false);
	addItemBox("diamondBonemealBin", "bonemeal", "", "item-section-farming-1", "#003300", "green", "BONEMEAL", "tooltip-bonemeal", false);
	addItemBox("treeSeeds", 0, "", "item-section-farming-1", "#004d00", "green", "TREE SEED", "tooltip-treeSeeds", false);
	addItemBox("oakTreeSeeds", 0, "", "item-section-farming-1", "#004d00", "green", "OAK SEED", "tooltip-oakTreeSeeds", false);
	addItemBox("willowTreeSeeds", 0, "", "item-section-farming-1", "#004d00", "green", "WILLOW SEED", "tooltip-willowTreeSeeds", false);
	addItemBox("bambooTreeSeeds", 0, "", "item-section-farming-1", "#004d00", "green", "BAMBOO SEED", "tooltip-bambooTreeSeeds", false);
	addItemBox("appleTreeSeeds", 0, "", "item-section-farming-1", "#004d00", "green", "APPLE SEED", "tooltip-appleTreeSeeds", false);
	addItemBox("mapleTreeSeeds", 0, "", "item-section-farming-1", "#004d00", "green", "MAPLE SEED", "tooltip-mapleTreeSeeds", false);
	addItemBox("lavaTreeSeeds", 0, "", "item-section-farming-1", "#004d00", "green", "LAVA TREE SEED", "tooltip-lavaTreeSeeds", false);
	addItemBox("bananaTreeSeeds", 0, "", "item-section-farming-1", "#004d00", "green", "BANANA SEED", "tooltip-bananaTreeSeeds", false);
	addItemBox("pineTreeSeeds", 0, "", "item-section-farming-1", "#004d00", "green", "PINE TREE SEED", "tooltip-pineTreeSeeds", false);
	addItemBox("stardustTreeSeeds", 0, "", "item-section-farming-1", "#004d00", "green", "STARDUST SEED", "tooltip-stardustTreeSeeds", false);
	addItemBox("palmTreeSeeds", 0, "", "item-section-farming-1", "#004d00", "green", "PALM TREE SEED", "tooltip-palmTreeSeeds", false);
	addItemBox("dottedGreenLeafSeeds", 0, "", "item-section-farming-1", "#004d00", "green", "DOTTED LEAF", "tooltip-dottedGreenLeafSeeds", false);
	addItemBox("greenLeafSeeds", 0, "", "item-section-farming-1", "#004d00", "green", "GREEN LEAF", "tooltip-greenLeafSeeds", false);
	addItemBox("limeLeafSeeds", 0, "", "item-section-farming-1", "#004d00", "green", "LIME LEAF", "tooltip-limeLeafSeeds", false);
	addItemBox("goldLeafSeeds", 0, "", "item-section-farming-1", "#004d00", "green", "GOLD LEAF", "tooltip-goldLeafSeeds", false);
	addItemBox("crystalLeafSeeds", 0, "", "item-section-farming-1", "#004d00", "green", "CRYSTAL LEAF", "tooltip-crystalLeafSeeds", false);
	addItemBox("stripedGoldLeafSeeds", 0, "", "item-section-farming-1", "#004d00", "green", "GOLD STRIPED", "tooltip-stripedGoldLeafSeeds", false);
	addItemBox("stripedCrystalLeafSeeds", 0, "", "item-section-farming-1", "#004d00", "green", "CRYSTAL STRIPED", "tooltip-stripedCrystalLeafSeeds", false);
	addItemBox("redMushroomSeeds", 0, "", "item-section-farming-1", "#004d00", "green", "MUSHROOMS", "tooltip-redMushroomSeeds", false);
	addItemBox("blewitMushroomSeeds", 0, "", "item-section-farming-1", "#004d00", "green", "BLEWIT MUSH.", "tooltip-blewitMushroomSeeds", false);
	addItemBox("stardustSeeds", 0, "", "item-section-farming-1", "#004d00", "green", "STARDUST SEEDS", "tooltip-stardustSeeds", false);
	addItemBox("carrotSeeds", 0, "", "item-section-farming-1", "#004d00", "green", "CARROT SEEDS", "tooltip-carrotSeeds", false);
	addItemBox("pumpkinSeeds", 0, "", "item-section-farming-1", "#004d00", "orange", "PUMPKIN SEEDS", "tooltip-pumpkinSeeds", false);
	addItemBox("brewingKit", 1, "", "item-section-brewing-1", "#4d004d", "purple", "BREWING KIT", "tooltip-brewingKit", false);
	addItemBox("sapphireBrewingKit", 1, "", "item-section-brewing-1", "#4d004d", "purple", "BREWING KIT", "tooltip-brewingKit", false);
	addItemBox("emeraldBrewingKit", 1, "", "item-section-brewing-1", "#4d004d", "purple", "BREWING KIT", "tooltip-brewingKit", false);
	addItemBox("rubyBrewingKit", 1, "", "item-section-brewing-1", "#4d004d", "purple", "BREWING KIT", "tooltip-brewingKit", false);
	addItemBox("diamondBrewingKit", 1, "", "item-section-brewing-1", "#4d004d", "purple", "BREWING KIT", "tooltip-brewingKit", false);
	addItemBox("vial", 0, "", "item-section-brewing-1", "#4d004d", "purple", "SMALL VIALS", "", false);
	addItemBox("largeVial", 0, "", "item-section-brewing-1", "#4d004d", "purple", "LARGE VIALS", "", false);
	addItemBox("dottedGreenLeaf", 0, "", "item-section-brewing-1", "#004d00", "green", "DOTTED LEAF", "tooltip-dottedGreenLeaf", false);
	addItemBox("greenLeaf", 0, "", "item-section-brewing-1", "#004d00", "green", "GREEN LEAF", "tooltip-greenLeaf", false);
	addItemBox("limeLeaf", 0, "", "item-section-brewing-1", "#004d00", "green", "LIME LEAF", "tooltip-limeLeaf", false);
	addItemBox("goldLeaf", 0, "", "item-section-brewing-1", "#004d00", "green", "GOLD LEAF", "tooltip-goldLeaf", false);
	addItemBox("crystalLeaf", 0, "", "item-section-brewing-1", "#004d00", "green", "CRYSTAL LEAF", "tooltip-crystalLeaf", false);
	addItemBox("stripedGoldLeaf", 0, "", "item-section-brewing-1", "#004d00", "green", "STRIPED GOLD", "tooltip-stripedGoldLeaf", false);
	addItemBox("stripedCrystalLeaf", 0, "", "item-section-brewing-1", "#004d00", "green", "STRIPED CRYSTAL", "tooltip-stripedCrystalLeaf", false);
	addItemBox("redMushroom", 0, "", "item-section-brewing-1", "#004d00", "green", "MUSHROOM", "tooltip-redMushroom", false);
	addItemBox("blewitMushroom", 0, "", "item-section-brewing-1", "#004d00", "green", "BLEWIT MUSH.", "tooltip-blewitMushroom", false);
	addItemBox("strangeLeafFix", 0, "", "item-section-brewing-1", "#004d00", "green", "STRANGE LEAF", "tooltip-strangeLeaf", false);
	addItemBox("stardustPotion", 0, "", "item-section-brewing-1", "#4d004d", "purple", "STARDUST POTION", "tooltip-stardustPotion", false);
	addItemBox("sandPotion", 0, "", "item-section-brewing-1", "#4d004d", "purple", "SAND POTION", "", false);
	addItemBox("cookingBoostPotion", 0, "", "item-section-brewing-1", "#4d004d", "purple", "COOKING BOOST", "", false);
	addItemBox("combatCooldownPotion", 0, "", "item-section-brewing-1", "#4d004d", "purple", "COMB. COOLDOWN", "", false);
	addItemBox("compostPotion", 0, "", "item-section-brewing-1", "#4d004d", "purple", "COMPOST POTION", "", false);
	addItemBox("oilPotion", 0, "", "item-section-brewing-1", "#4d004d", "purple", "OIL POTION", "", false);
	addItemBox("bonePotion", 0, "", "item-section-brewing-1", "#4d004d", "purple", "BONE POTION", "", false);
	addItemBox("treeStarterPotion", 0, "", "item-section-brewing-1", "#4d004d", "purple", "TREE STARTER", "", false);
	addItemBox("repelPotion1", 0, "", "item-section-brewing-1", "#4d004d", "purple", "REPEL POTION", "", false);
	addItemBox("barPotion", 0, "", "item-section-brewing-1", "#4d004d", "purple", "BAR POTION", "", false);
	addItemBox("sapphireStardustPotion", 0, "", "item-section-brewing-1", "#4d004d", "purple", "SAPPHIRE STAR.", "", false);
	addItemBox("largeManaPotion", 0, "", "item-section-brewing-1", "#4d004d", "purple", "MANA POTION", "", false);
	addItemBox("largeStardustPotion", 0, "", "item-section-brewing-1", "#4d004d", "purple", "STARDUST POTION", "", false);
	addItemBox("largeFurnacePotion", 0, "", "item-section-brewing-1", "#4d004d", "purple", "FURNACE POTION", "", false);
	addItemBox("largePiratePotion", 0, "", "item-section-brewing-1", "#4d004d", "purple", "PIRATE POTION", "", false);
	addItemBox("largeEmeraldStardustPotion", 0, "", "item-section-brewing-1", "#4d004d", "purple", "EMERALD STAR.", "", false);
	addItemBox("largeRocketSpeedPotion", 0, "", "item-section-brewing-1", "#4d004d", "purple", "ROCKET SPEED", "", false);
	addItemBox("repelPotion2", 0, "", "item-section-brewing-1", "#4d004d", "purple", "REPEL POTION", "", false);
	addItemBox("largeRubyStardustPotion", 0, "", "item-section-brewing-1", "#4d004d", "purple", "RUBY STAR.", "", false);
	addItemBox("largeBarPotion", 0, "", "item-section-brewing-1", "#4d004d", "purple", "LARGE BAR POT.", "", false);
	addItemBox("smallFishingNet", 1, "", "item-section-fishing-1", "#00061a", "#00124d", "SMALL NET", "tooltip-smallFishingNet", false);
	addItemBox("sapphireSmallFishingNet", 1, "", "item-section-fishing-1", "#00061a", "#00124d", "SMALL NET", "tooltip-smallFishingNet", false);
	addItemBox("emeraldSmallFishingNet", 1, "", "item-section-fishing-1", "#00061a", "#00124d", "SMALL NET", "tooltip-smallFishingNet", false);
	addItemBox("rubySmallFishingNet", 1, "", "item-section-fishing-1", "#00061a", "#00124d", "SMALL NET", "tooltip-smallFishingNet", false);
	addItemBox("diamondSmallFishingNet", 1, "", "item-section-fishing-1", "#00061a", "#00124d", "SMALL NET", "tooltip-smallFishingNet", false);
	addItemBox("fishingRod", 1, "", "item-section-fishing-1", "#00061a", "#00124d", "FISHING ROD", "tooltip-fishingRod", false);
	addItemBox("sapphireFishingRod", 1, "", "item-section-fishing-1", "#00061a", "#00124d", "FISHING ROD", "tooltip-fishingRod", false);
	addItemBox("emeraldFishingRod", 1, "", "item-section-fishing-1", "#00061a", "#00124d", "FISHING ROD", "tooltip-fishingRod", false);
	addItemBox("rubyFishingRod", 1, "", "item-section-fishing-1", "#00061a", "#00124d", "FISHING ROD", "tooltip-fishingRod", false);
	addItemBox("diamondFishingRod", 1, "", "item-section-fishing-1", "#00061a", "#00124d", "FISHING ROD", "tooltip-fishingRod", false);
	addItemBox("harpoon", 1, "", "item-section-fishing-1", "#00061a", "#00124d", "HARPOON", "tooltip-harpoon", false);
	addItemBox("sapphireHarpoon", 1, "", "item-section-fishing-1", "#00061a", "#00124d", "HARPOON", "tooltip-harpoon", false);
	addItemBox("emeraldHarpoon", 1, "", "item-section-fishing-1", "#00061a", "#00124d", "HARPOON", "tooltip-harpoon", false);
	addItemBox("rubyHarpoon", 1, "", "item-section-fishing-1", "#00061a", "#00124d", "HARPOON", "tooltip-harpoon", false);
	addItemBox("diamondHarpoon", 1, "", "item-section-fishing-1", "#00061a", "#00124d", "HARPOON", "tooltip-harpoon", false);
	addItemBox("oxygenTank", 0, "", "item-section-fishing-1", "#00061a", "#00124d", "OXYGEN TANK", "tooltip-oxygenTank", false);
	addItemBox("rowBoat", 0, "", "item-section-fishing-1", "#00061a", "#00124d", "ROW BOAT", "tooltip-rowBoat", false);
	addItemBox("canoeBoat", 0, "", "item-section-fishing-1", "#00061a", "#00124d", "CANOE", "tooltip-canoeBoat", false);
	addItemBox("specialBait", 0, "", "item-section-fishing-1", "#006666", "#004d4d", "SPECIAL BAIT", "tooltip-specialBait", false);
	addItemBox("specialFish", 0, "", "item-section-fishing-1", "#006666", "#004d4d", "SPECIAL FISH", "tooltip-specialFish", false);
	addItemBox("oyster", 0, "", "item-section-fishing-1", "#006666", "#004d4d", "OYSTER", "tooltip-oyster", false);
	addItemBox("specialOyster", 0, "", "item-section-fishing-1", "#006666", "#004d4d", "OYSTER", "tooltip-specialOyster", false);
	addItemBox("pearl", 0, "", "item-section-fishing-1", "#006666", "#004d4d", "PEARL", "tooltip-pearl", false);
	addItemBox("giantPearl", 0, "", "item-section-fishing-1", "#006666", "#004d4d", "GIANT PEARL", "tooltip-giantPearl", false);
	addItemBox("rarePearl", 0, "", "item-section-fishing-1", "#006666", "#004d4d", "PEARL", "tooltip-rarePearl", false);
	addItemBox("rareGiantPearl", 0, "", "item-section-fishing-1", "#006666", "#004d4d", "GIANT PEARL", "tooltip-rareGiantPearl", false);
	addItemBox("sharkTooth", 0, "", "item-section-fishing-1", "#006666", "#004d4d", "SHARK TOOTH", "tooltip-sharkTooth", false);
	addItemBox("rowBoatBlueprints", 0, "", "item-section-fishing-1", "#006666", "#004d4d", "ROW BOAT", "tooltip-rowBoatBlueprints", false);
	addItemBox("canoeBoatBlueprints", 0, "", "item-section-fishing-1", "#006666", "#004d4d", "CANOE", "tooltip-canoeBoatBlueprints", false);
	addItemBox("smallSeaShell", 0, "", "item-section-fishing-1", "#001e80", "#0036e6", "SMALL SHELL", "tooltip-smallSeaShell", false);
	addItemBox("mediumSeaShell", 0, "", "item-section-fishing-1", "#001e80", "#0036e6", "MEDIUM SHELL", "tooltip-mediumSeaShell", false);
	addItemBox("largeSeaShell", 0, "", "item-section-fishing-1", "#001e80", "#0036e6", "LARGE SHELL", "tooltip-largeSeaShell", false);
	addItemBox("seaweed", 0, "", "item-section-fishing-1", "#001e80", "#0036e6", "SEAWEED", "tooltip-seaweed", false);
	addItemBox("fishBones", 0, "", "item-section-fishing-1", "#001e80", "#0036e6", "FISH BONES", "tooltip-fishBones", false);
	addItemBox("rawShrimp", 0, "", "item-section-fishing-1", "#001e80", "#0036e6", "RAW SHRIMP", "tooltip-rawShrimp", false);
	addItemBox("rawAnchovy", 0, "", "item-section-fishing-1", "#001e80", "#0036e6", "RAW ANCHOVY", "tooltip-rawAnchovy", false);
	addItemBox("rawSardine", 0, "", "item-section-fishing-1", "#001e80", "#0036e6", "RAW SARDINE", "tooltip-rawSardine", false);
	addItemBox("rawCrab", 0, "", "item-section-fishing-1", "#001e80", "#0036e6", "RAW CRAB", "tooltip-rawCrab", false);
	addItemBox("rawPiranha", 0, "", "item-section-fishing-1", "#001e80", "#0036e6", "RAW PIRANHA", "tooltip-rawPiranha", false);
	addItemBox("rawTrout", 0, "", "item-section-fishing-1", "#001e80", "#0036e6", "RAW TROUT", "tooltip-rawTrout", false);
	addItemBox("rawSalmon", 0, "", "item-section-fishing-1", "#001e80", "#0036e6", "RAW SALMON", "tooltip-rawSalmon", false);
	addItemBox("rawEel", 0, "", "item-section-fishing-1", "#001e80", "#0036e6", "RAW EEL", "tooltip-rawEel", false);
	addItemBox("rawSeaTurtle", 0, "", "item-section-fishing-1", "#001e80", "#0036e6", "RAW SEA TURTLE", "tooltip-rawSeaTurtle", false);
	addItemBox("rawRainbowFish", 0, "", "item-section-fishing-1", "#001e80", "#0036e6", "RAW RAINBOW FISH", "tooltip-rawRainbowFish", false);
	addItemBox("rawTuna", 0, "", "item-section-fishing-1", "#001e80", "#0036e6", "RAW TUNA", "tooltip-rawTuna", false);
	addItemBox("rawSwordfish", 0, "", "item-section-fishing-1", "#001e80", "#0036e6", "RAW SWORDFISH", "tooltip-rawSwordfish", false);
	addItemBox("rawMantaRay", 0, "", "item-section-fishing-1", "#001e80", "#0036e6", "RAW MANTA RAY", "tooltip-rawMantaRay", false);
	addItemBox("rawShark", 0, "", "item-section-fishing-1", "#001e80", "#0036e6", "RAW SHARK", "tooltip-rawShark", false);
	addItemBox("rawWhale", 0, "", "item-section-fishing-1", "#001e80", "#0036e6", "RAW WHALE", "tooltip-rawWhale", false);
	addItemBox("shrimp", 0, "", "item-section-fishing-1", "#001e80", "#0036e6", "SHRIMP", "tooltip-shrimp", false);
	addItemBox("anchovy", 0, "", "item-section-fishing-1", "#001e80", "#0036e6", "ANCHOVY", "tooltip-anchovy", false);
	addItemBox("sardine", 0, "", "item-section-fishing-1", "#001e80", "#0036e6", "SARDINE", "tooltip-sardine", false);
	addItemBox("crab", 0, "", "item-section-fishing-1", "#001e80", "#0036e6", "CRAB", "tooltip-crab", false);
	addItemBox("piranha", 0, "", "item-section-fishing-1", "#001e80", "#0036e6", "PIRANHA", "tooltip-piranha", false);
	addItemBox("trout", 0, "", "item-section-fishing-1", "#001e80", "#0036e6", "TROUT", "tooltip-trout", false);
	addItemBox("salmon", 0, "", "item-section-fishing-1", "#001e80", "#0036e6", "SALMON", "tooltip-salmon", false);
	addItemBox("eel", 0, "", "item-section-fishing-1", "#001e80", "#0036e6", "EEL", "tooltip-eel", false);
	addItemBox("seaTurtle", 0, "", "item-section-fishing-1", "#001e80", "#0036e6", "SEA TURTLE", "tooltip-seaTurtle", false);
	addItemBox("rainbowFish", 0, "", "item-section-fishing-1", "#001e80", "#0036e6", "RAINBOW FISH", "tooltip-rainbowFish", false);
	addItemBox("tuna", 0, "", "item-section-fishing-1", "#001e80", "#0036e6", "TUNA", "tooltip-tuna", false);
	addItemBox("swordfish", 0, "", "item-section-fishing-1", "#001e80", "#0036e6", "SWORDFISH", "tooltip-swordfish", false);
	addItemBox("mantaRay", 0, "", "item-section-fishing-1", "#001e80", "#0036e6", "MANTA RAY", "tooltip-mantaRay", false);
	addItemBox("shark", 0, "", "item-section-fishing-1", "#001e80", "#0036e6", "SHARK", "tooltip-shark", false);
	addItemBox("whale", 0, "", "item-section-fishing-1", "#001e80", "#0036e6", "WHALE", "tooltip-whale", false);
	if (getItemString("home") != "none")
	{
		addItemBox("donorCoins", 0, "", "item-section-home-1", "green", "lime", "DONOR COINS", "tooltip-donorCoins", false)
	};
	addItemBox("stardust1000", 0, "", "item-section-home-1", "#1a344c", "#0d1a26", "STARDUST PACK", "tooltip-stardust1000", false);
	addItemBox("researcher", 1, "", "item-section-home-1", "#1a344c", "#0d1a26", "RESEARCHER", "tooltip-researcher", false);
	addItemBox("museum", 1, "", "item-section-home-1", "#1a344c", "#0d1a26", "MUSEUM", "tooltip-museum", false);
	addItemBox("pirate", 1, "", "item-section-home-1", "#1a344c", "#0d1a26", "PIRATE", "tooltip-pirate", false);
	addItemBox("treasureMap", 1, "", "item-section-home-1", "#1a344c", "#0d1a26", "TREASURE MAP", "tooltip-treasureMap", false);
	addItemBox("greenTreasureMap", 1, "", "item-section-home-1", "#1a344c", "#0d1a26", "TREASURE MAP", "tooltip-greenTreasureMap", false);
	addItemBox("treasureChest", 0, "", "item-section-home-1", "#1a344c", "#0d1a26", "TREASURE CHEST", "tooltip-treasureChest", false);
	addItemBox("greenTreasureChest", 0, "", "item-section-home-1", "#1a344c", "#0d1a26", "TREASURE CHEST", "tooltip-greenTreasureChest", false);
	addItemBox("goldKey", 0, "", "item-section-home-1", "#1a344c", "#0d1a26", "GOLD KEY", "tooltip-treasureChestKey", false);
	addItemBox("sapphireGoldKey", 0, "", "item-section-home-1", "#1a344c", "#0d1a26", "SAPPHIRE KEY", "tooltip-treasureChestKey", false);
	addItemBox("emeraldGoldKey", 0, "", "item-section-home-1", "#1a344c", "#0d1a26", "EMERALD KEY", "tooltip-treasureChestKey", false);
	addItemBox("rubyGoldKey", 0, "", "item-section-home-1", "#1a344c", "#0d1a26", "RUBY KEY", "tooltip-treasureChestKey", false);
	addItemBox("diamondGoldKey", 0, "", "item-section-home-1", "#1a344c", "#0d1a26", "DIAMOND KEY", "tooltip-treasureChestKey", false);
	addItemBox("promethiumKey", 0, "", "item-section-home-1", "#1a344c", "#0d1a26", "PROMETHIUM KEY", "tooltip-greenTreasureChestKey", false);
	addItemBox("sapphirePromethiumKey", 0, "", "item-section-home-1", "#1a344c", "#0d1a26", "SAPPHIRE KEY", "tooltip-greenTreasureChestKey", false);
	addItemBox("emeraldPromethiumKey", 0, "", "item-section-home-1", "#1a344c", "#0d1a26", "EMERALD KEY", "tooltip-greenTreasureChestKey", false);
	addItemBox("rubyPromethiumKey", 0, "", "item-section-home-1", "#1a344c", "#0d1a26", "RUBY KEY", "tooltip-greenTreasureChestKey", false);
	addItemBox("diamondPromethiumKey", 0, "", "item-section-home-1", "#1a344c", "#0d1a26", "DIAMOND KEY", "tooltip-greenTreasureChestKey", false);
	addItemBox("blueFurnaceOrb", 0, "", "item-section-home-1", "#1a344c", "#0d1a26", "ORB", "tooltip-orb", false);
	addItemBox("blueWoodcuttingOrb", 0, "", "item-section-home-1", "#1a344c", "#0d1a26", "ORB", "tooltip-orb", false);
	addItemBox("blueOreOrb", 0, "", "item-section-home-1", "#1a344c", "#0d1a26", "ORB", "tooltip-orb", false);
	addItemBox("blueManaOrb", 0, "", "item-section-home-1", "#1a344c", "#0d1a26", "ORB", "tooltip-orb", false);
	addItemBox("blueOilWellOrb", 0, "", "item-section-home-1", "#1a344c", "#0d1a26", "ORB", "tooltip-orb", false);
	addItemBox("greenOilFactoryOrb", 0, "", "item-section-home-1", "#1a344c", "#0d1a26", "ORB", "tooltip-orb", false);
	addItemBox("greenFishingOrb", 0, "", "item-section-home-1", "#1a344c", "#0d1a26", "ORB", "tooltip-orb", false);
	addItemBox("greenRocketOrb", 0, "", "item-section-home-1", "#1a344c", "#0d1a26", "ORB", "tooltip-orb", false);
	addItemBox("greenShinyMonsterOrb", 0, "", "item-section-home-1", "#1a344c", "#0d1a26", "ORB", "tooltip-orb", false);
	addItemBox("greenShinyWoodcuttingOrb", 0, "", "item-section-home-1", "#1a344c", "#0d1a26", "ORB", "tooltip-orb", false);
	addItemBox("greenShinyFarmingOrb", 0, "", "item-section-home-1", "#1a344c", "#0d1a26", "ORB", "tooltip-orb", false);
	addItemBox("shootingStar", 0, "", "item-section-home-1", "#1a344c", "#0d1a26", "SHOOTING STAR", "tooltip-shootingStar", false);
	addItemBox("knightsKey", 0, "", "item-section-home-1", "#1a344c", "#0d1a26", "KNIGHT\'S KEY", "tooltip-knightsKey", false);
	addItemBox("telescopeLens", 1, "", "item-section-home-1", "#1a344c", "#0d1a26", "TELESCOPE LENS", "tooltip-telescopeLens", false);
	addItemBox("telescopePart", 1, "", "item-section-home-1", "#1a344c", "#0d1a26", "TELESCOPE", "tooltip-telescopeLens", false);
	addItemBox("telescope", 1, "", "item-section-home-1", "#1a344c", "#0d1a26", "TELESCOPE", "tooltip-telescopeLens", false);
	addItemBox("carePackage2", 0, "", "item-section-home-1", "#1a344c", "0d1a26", "CARE PACKAGE", "tooltip-carePackage", false);
	addItemBox("carePackage3", 0, "", "item-section-home-1", "#1a344c", "0d1a26", "CARE PACKAGE", "tooltip-carePackage", false);
	addItemBox("carePackage4", 0, "", "item-section-home-1", "#1a344c", "0d1a26", "CARE PACKAGE", "tooltip-carePackage", false);
	addItemBox("stardustBox1", 0, "", "item-section-home-1", "#1a344c", "#0d1a26", "STARDUST BOX I", "tooltip-stardustBox", false);
	addItemBox("stardustBox2", 0, "", "item-section-home-1", "#1a344c", "#0d1a26", "STARDUST BOX I", "tooltip-stardustBox", false);
	addItemBox("puzzleChest1", 0, "", "item-section-home-1", "#1a344c", "#0d1a26", "PUZZLE CHEST", "tooltip-puzzleChest1", false);
	addItemBox("snowmanCrafted", 0, "", "item-section-home-1", "#1a344c", "#0d1a26", "SNOWMAN", "tooltip-snowmanCrafted", false);
	addItemBox("chickenMonsterSigil", 0, "", "item-section-home-1", "#003366", "#0d1a26", "MONSTER SIGIL", "tooltip-monsterSigil", false);
	addItemBox("pumpkinSigil", 0, "", "item-section-home-1", "purple", "#0d1a26", "HOLIDAY SIGIL", "tooltip-holidaySigil", false);
	addItemBox("santaHatSigil", 0, "", "item-section-home-1", "purple", "#0d1a26", "HOLIDAY SIGIL", "tooltip-holidaySigil", false);
	addItemBox("easterEggSigil", 0, "", "item-section-home-1", "purple", "#0d1a26", "HOLIDAY SIGIL", "tooltip-holidaySigil", false);
	addItemBox("ghostSigil", 0, "", "item-section-home-1", "purple", "#0d1a26", "HOLIDAY SIGIL", "tooltip-holidaySigil", false);
	addItemBox("treeSigil", 0, "", "item-section-home-1", "purple", "#0d1a26", "HOLIDAY SIGIL", "tooltip-holidaySigil", false);
	addItemBox("bluePartyHatSigil", 0, "", "item-section-home-1", "purple", "#0d1a26", "HOLIDAY SIGIL", "tooltip-holidaySigil", false);
	addItemBox("redPartyHatSigil", 0, "", "item-section-home-1", "purple", "#0d1a26", "HOLIDAY SIGIL", "tooltip-holidaySigil", false);
	addItemBox("yellowPartyHatSigil", 0, "", "item-section-home-1", "purple", "#0d1a26", "HOLIDAY SIGIL", "tooltip-holidaySigil", false);
	addItemBox("whitePartyHatSigil", 0, "", "item-section-home-1", "purple", "#0d1a26", "HOLIDAY SIGIL", "tooltip-holidaySigil", false);
	addItemBox("greenPartyHatSigil", 0, "", "item-section-home-1", "purple", "#0d1a26", "HOLIDAY SIGIL", "tooltip-holidaySigil", false);
	addItemBox("pinkPartyHatSigil", 0, "", "item-section-home-1", "purple", "#0d1a26", "HOLIDAY SIGIL", "tooltip-holidaySigil", false);
	addItemBox("bunnySigil", 0, "", "item-section-home-1", "purple", "#0d1a26", "HOLIDAY SIGIL", "tooltip-holidaySigil", false);
	addItemBox("catSigil", 0, "", "item-section-home-1", "purple", "#0d1a26", "HOLIDAY SIGIL", "tooltip-holidaySigil", false);
	addItemBox("candyCaneSigil", 0, "", "item-section-home-1", "purple", "#0d1a26", "HOLIDAY SIGIL", "tooltip-holidaySigil", false);
	addItemBox("snowmanSigil", 0, "", "item-section-home-1", "purple", "#0d1a26", "HOLIDAY SIGIL", "tooltip-holidaySigil", false);
	addItemBox("carrotSigil", 0, "", "item-section-home-1", "purple", "#0d1a26", "HOLIDAY SIGIL", "tooltip-holidaySigil", false);
	addItemBox("spiderSigil", 0, "", "item-section-home-1", "purple", "#0d1a26", "HOLIDAY SIGIL", "tooltip-holidaySigil", false);
	addItemBox("batSigil", 0, "", "item-section-home-1", "purple", "#0d1a26", "HOLIDAY SIGIL", "tooltip-holidaySigil", false);
	addItemBox("eventSigil", 0, "", "item-section-home-1", "#99003d", "#0d1a26", "EVENT SIGIL", "tooltip-eventSigil", false);
	addItemBox("bronzeEventSigil", 0, "", "item-section-home-1", "#99003d", "#0d1a26", "EVENT SIGIL", "tooltip-eventSigil", false);
	addItemBox("silverEventSigil", 0, "", "item-section-home-1", "#99003d", "#0d1a26", "EVENT SIGIL", "tooltip-eventSigil", false);
	addItemBox("goldEventSigil", 0, "", "item-section-home-1", "#99003d", "#0d1a26", "EVENT SIGIL", "tooltip-eventSigil", false);
	addItemBox("eventSigil2", 0, "", "item-section-home-1", "#99003d", "#0d1a26", "EVENT SIGIL", "tooltip-eventSigil", false);
	addItemBox("bronzeEventSigil2", 0, "", "item-section-home-1", "#99003d", "#0d1a26", "EVENT SIGIL", "tooltip-eventSigil", false);
	addItemBox("silverEventSigil2", 0, "", "item-section-home-1", "#99003d", "#0d1a26", "EVENT SIGIL", "tooltip-eventSigil", false);
	addItemBox("goldEventSigil2", 0, "", "item-section-home-1", "#99003d", "#0d1a26", "EVENT SIGIL", "tooltip-eventSigil", false);
	addItemBox("halloweenScroll", 0, "", "item-section-home-1", "#1a344c", "orange", "SCROLL", "tooltip-none", false);
	addItemBox("witchesHat", 0, "", "item-section-home-1", "#1a344c", "orange", "WITCH HAT", "tooltip-none", false);
	addItemBox("fallBranch", 0, "", "item-section-home-1", "#1a344c", "orange", "BRANCH", "tooltip-none", false);
	addItemBox("rottenLog", 0, "", "item-section-home-1", "#1a344c", "orange", "ROTTEN LOG", "tooltip-none", false);
	addItemBox("eyeball", 0, "", "item-section-home-1", "#1a344c", "orange", "EYE BALL", "tooltip-none", false);
	addItemBox("batWing", 0, "", "item-section-home-1", "#1a344c", "orange", "BAT WING", "tooltip-none", false);
	addItemBox("pumpkin", 0, "", "item-section-home-1", "#1a344c", "orange", "PUMPKIN", "tooltip-none", false);
	addItemBox("bronzeOven", 0, "", "item-section-cooking-1", "#666600", "#333300", "BRONZE OVEN", "tooltip-oven", false);
	addItemBox("ironOven", 0, "", "item-section-cooking-1", "#666600", "#333300", "IRON OVEN", "tooltip-oven", false);
	addItemBox("silverOven", 0, "", "item-section-cooking-1", "#666600", "#333300", "SILVER OVEN", "tooltip-oven", false);
	addItemBox("goldOven", 0, "", "item-section-cooking-1", "#666600", "#333300", "GOLD OVEN", "tooltip-oven", false);
	addItemBox("promethiumOven", 0, "", "item-section-cooking-1", "#666600", "#333300", "PROM OVEN", "tooltip-oven", false);
	addItemBox("titaniumOven", 0, "", "item-section-cooking-1", "#666600", "#333300", "TITANIUM OVEN", "tooltip-oven", false);
	addItemBox("chef", 0, "", "item-section-cooking-1", "#666600", "#333300", "CHEF", "tooltip-chef", false);
	addItemBox("sharkEggs", 0, "", "item-section-cooking-1", "#666600", "#333300", "SHARK EGGS", "", false);
	addItemBox("tridentSoldierEggs", 0, "", "item-section-cooking-1", "#666600", "#333300", "TRIDENT EGGS", "", false);
	addItemBox("cooksBook1", 1, "", "item-section-cooking-1", "#666600", "#333300", "COOKS BOOK", "tooltip-cooksBook", false);
	addItemBox("cheeseStew", 0, "", "item-section-cooking-1", "#666600", "#333300", "STEW", "", false);
	addItemBox("lavaStew", 0, "", "item-section-cooking-1", "#666600", "#333300", "STEW", "", false);
	addItemBox("oysterStew", 0, "", "item-section-cooking-1", "#666600", "#333300", "STEW", "", false);
	addItemBox("iceBonesStew", 0, "", "item-section-cooking-1", "#666600", "#333300", "STEW", "", false);
	addItemBox("fishStew", 0, "", "item-section-cooking-1", "#666600", "#333300", "STEW", "", false);
	addItemBox("honeyStew", 0, "", "item-section-cooking-1", "#666600", "#333300", "STEW", "", false);
	addItemBox("bananaStew", 0, "", "item-section-cooking-1", "#666600", "#333300", "STEW", "", false);
	addItemBox("appleStew", 0, "", "item-section-cooking-1", "#666600", "#333300", "STEW", "", false);
	addItemBox("yellowSpices", 0, "", "item-section-cooking-1", _0x17CDB, _0x17C95, "SPICES", "", false);
	addItemBox("greenSpices", 0, "", "item-section-cooking-1", _0x17CDB, _0x17C95, "SPICES", "", false);
	addItemBox("blueSpices", 0, "", "item-section-cooking-1", _0x17CDB, _0x17C95, "SPICES", "", false);
	addItemBox("redSpices", 0, "", "item-section-cooking-1", _0x17CDB, _0x17C95, "SPICES", "", false);
	if (getItem("cookingUnlocked") == 1)
	{
		addItemBox("apple", 0, "", "item-section-cooking-1", _0x17CDB, _0x17C95, "APPLE", "tooltip-apple", false);
		addItemBox("bananas", 0, "", "item-section-cooking-1", _0x17CDB, _0x17C95, "BANANAS", "tooltip-bananas", false);
		addItemBox("storeBananas", 0, "", "item-section-cooking-1", _0x17CDB, _0x17C95, "BANANAS", "tooltip-storeBananas", false);
		addItemBox("coconuts", 0, "", "item-section-cooking-1", _0x17CDB, _0x17C95, "COCONUTS", "tooltip-coconuts", false);
		addItemBox("carrot", 0, "", "item-section-cooking-1", _0x17CDB, _0x17C95, "CARROTS", "tooltip-carrot", false);
		addItemBox("salad", 0, "", "item-section-cooking-1", _0x17CDB, _0x17C95, "MUSHROOM SALAD", "tooltip-salad", false);
		addItemBox("rawChicken", 0, "", "item-section-cooking-1", _0x17CDB, _0x17C95, "RAW CHICKEN", "tooltip-rawChicken", false);
		addItemBox("oysterMornay", 0, "", "item-section-cooking-1", _0x17CDB, _0x17C95, "OYSTER MORNAY", "tooltip-oysterMornay", false);
		addItemBox("rawGiantSnakeTail", 0, "", "item-section-cooking-1", _0x17CDB, _0x17C95, "SNAKE TAIL", "tooltip-giantSnakeTail", false);
		addItemBox("giantSnakeTail", 0, "", "item-section-cooking-1", _0x17CDB, _0x17C95, "SNAKE TAIL", "tooltip-giantSnakeTail", false);
		addItemBox("cheese", 0, "", "item-section-cooking-1", _0x17CDB, _0x17C95, "CHEESE", "tooltip-cheese", false);
		addItemBox("honey", 0, "", "item-section-cooking-1", _0x17CDB, _0x17C95, "HONEY", "tooltip-honey", false);
		addItemBox("snakeSushiShrimp", 0, "", "item-section-cooking-1", _0x17CDB, _0x17C95, "SNAKESKIN SUSHI", "tooltip-snakeSushiShrimp", false);
		addItemBox("snakeSushiTrout", 0, "", "item-section-cooking-1", _0x17CDB, _0x17C95, "SNAKESKIN SUSHI", "tooltip-snakeSushiShrimpTrout", false);
		addItemBox("snakeSushiTuna", 0, "", "item-section-cooking-1", _0x17CDB, _0x17C95, "SNAKESKIN SUSHI", "tooltip-snakeSushiShrimpTuna", false);
		addItemBox("seaweedChicken", 0, "", "item-section-cooking-1", _0x17CDB, _0x17C95, "SEAWEED CHICKEN", "tooltip-seaweedChicken", false);
		addItemBox("batSkinSushi", 0, "", "item-section-cooking-1", _0x17CDB, _0x17C95, "BATSKIN SUSHI", "tooltip-batSkinSushi", false);
		addItemBox("mapleSyrup", 0, "", "item-section-cooking-1", _0x17CDB, _0x17C95, "MAPLE SYRUP", "tooltip-mapleSyrup", false)
	};
	addItemBox("rawBearMeat", 0, "", "item-section-cooking-1", _0x17CDB, _0x17C95, "RAW BEAR MEAT", "tooltip-rawBearMeat", false);
	addItemBox("bearMeat", 0, "", "item-section-cooking-1", _0x17CDB, _0x17C95, "BEAR MEAT", "tooltip-bearMeat", false);
	addItemBox("chicken", 0, "", "item-section-cooking-1", _0x17CDB, _0x17C95, "CHICKEN", "tooltip-chicken", false)
}

function getOilPerSecondForAItem(_0x16255)
{
	switch (_0x16255)
	{
	case "bronzeOilWell":
		return 1;
	case "ironOilWell":
		return 5;
	case "silverOilWell":
		return 10;
	case "goldOilWell":
		return 20;
	case "promethiumOilWell":
		return 35;
	default:
		return 0
	}
}

function clicksDungeonSignPuzzle(_0x16304)
{
	var _0x1629B = document.getElementById("table-td-dungeonSigns-" + _0x16304);
	var _0x162E1 = _0x1629B.src;
	var _0x16278 = [];
	_0x16278.push("none.png");
	if (getItem("dungeonSign0") > 0)
	{
		_0x16278.push("dungeonSign0.png")
	};
	if (getItem("dungeonSign1") > 0)
	{
		_0x16278.push("dungeonSign1.png")
	};
	if (getItem("dungeonSign2") > 0)
	{
		_0x16278.push("dungeonSign2.png")
	};
	if (getItem("dungeonSign3") > 0)
	{
		_0x16278.push("dungeonSign3.png")
	};
	if (getItem("dungeonSign4") > 0)
	{
		_0x16278.push("dungeonSign4.png")
	};
	var _0x162BE = 0;
	for (var _0x14C0C = 0; _0x14C0C < _0x16278.length; _0x14C0C++)
	{
		if (_0x162E1.endsWith(_0x16278[_0x14C0C]))
		{
			_0x162BE = _0x14C0C + 1;
			if (_0x162BE == _0x16278.length)
			{
				_0x162BE = 0
			};
			break
		}
	};
	_0x1629B.src = "images/" + _0x16278[_0x162BE]
}

function solveDungeonSignPuzzle()
{
	var _0x19EE6 = "DUNGEON_SIGN_PUZZLE=";
	var _0x19F09 = "";
	_0x19F09 = document.getElementById("table-td-dungeonSigns-" + 1).src.split("/");
	_0x19F09 = _0x19F09[_0x19F09.length - 1].slice(0, -4);
	_0x19EE6 += _0x19F09 + "~";
	_0x19F09 = document.getElementById("table-td-dungeonSigns-" + 2).src.split("/");
	_0x19F09 = _0x19F09[_0x19F09.length - 1].slice(0, -4);
	_0x19EE6 += _0x19F09 + "~";
	_0x19F09 = document.getElementById("table-td-dungeonSigns-" + 3).src.split("/");
	_0x19F09 = _0x19F09[_0x19F09.length - 1].slice(0, -4);
	_0x19EE6 += _0x19F09 + "~";
	_0x19F09 = document.getElementById("table-td-dungeonSigns-" + 4).src.split("/");
	_0x19F09 = _0x19F09[_0x19F09.length - 1].slice(0, -4);
	_0x19EE6 += _0x19F09 + "~";
	_0x19F09 = document.getElementById("table-td-dungeonSigns-" + 5).src.split("/");
	_0x19F09 = _0x19F09[_0x19F09.length - 1].slice(0, -4);
	_0x19EE6 += _0x19F09 + "~";
	_0x19F09 = document.getElementById("table-td-dungeonSigns-" + 6).src.split("/");
	_0x19F09 = _0x19F09[_0x19F09.length - 1].slice(0, -4);
	_0x19EE6 += _0x19F09 + "~";
	_0x19F09 = document.getElementById("table-td-dungeonSigns-" + 7).src.split("/");
	_0x19F09 = _0x19F09[_0x19F09.length - 1].slice(0, -4);
	_0x19EE6 += _0x19F09 + "~";
	_0x19F09 = document.getElementById("table-td-dungeonSigns-" + 8).src.split("/");
	_0x19F09 = _0x19F09[_0x19F09.length - 1].slice(0, -4);
	_0x19EE6 += _0x19F09 + "~";
	_0x19F09 = document.getElementById("table-td-dungeonSigns-" + 9).src.split("/");
	_0x19F09 = _0x19F09[_0x19F09.length - 1].slice(0, -4);
	_0x19EE6 += _0x19F09 + "~";
	_0x19F09 = document.getElementById("table-td-dungeonSigns-" + 10).src.split("/");
	_0x19F09 = _0x19F09[_0x19F09.length - 1].slice(0, -4);
	_0x19EE6 += _0x19F09 + "~";
	_0x19F09 = document.getElementById("table-td-dungeonSigns-" + 11).src.split("/");
	_0x19F09 = _0x19F09[_0x19F09.length - 1].slice(0, -4);
	_0x19EE6 += _0x19F09 + "~";
	_0x19F09 = document.getElementById("table-td-dungeonSigns-" + 12).src.split("/");
	_0x19F09 = _0x19F09[_0x19F09.length - 1].slice(0, -4);
	_0x19EE6 += _0x19F09;
	sendBytes(_0x19EE6)
}

function modifyPresetNameDialogue()
{
	var _0x18302 = document.getElementById("dialogue-combatPresets-select").selectedIndex;
	var _0x15A44 = "";
	_0x15A44 += "<span style=\'color:grey\'>Enter New Name</span><br /><input type=\'text\' maxlength=\'20\' style=\'font-size:18pt;\' value=\'" + getPresetSetName(_0x18302) + "\' id=\'change-preset-name-text\' /><br /><br />";
	document.getElementById("dialogue-combatPresetsModify-section").innerHTML = _0x15A44;
	document.getElementById("dialogue-combatPresetsModify-hidden").value = _0x18302;
	openDialogue("dialogue-combatPresetsModify")
}

function getPresetSetName(_0x173F8)
{
	var _0x1741B = getItemString("presetName" + _0x173F8);
	if (_0x1741B == "none")
	{
		return "Preset " + (_0x173F8 + 1)
	};
	return _0x1741B
}

function mouseEnterSkillTopBar(_0x16BC4, _0x156FC)
{
	if (_0x16BC4 == "enter")
	{
		document.getElementById("span-topBar-" + _0x156FC + "Xp").style.display = "none";
		document.getElementById("span-topBar-" + _0x156FC + "Xp-left").style.display = "";
		document.getElementById("span-topBar-" + _0x156FC + "Xp-left").innerHTML = formatNumber(getXpNeeded(1 + parseInt(getLevel(getItem(_0x156FC + "Xp")))) - getItem(_0x156FC + "Xp")) + " xp required"
	}
	else
	{
		document.getElementById("span-topBar-" + _0x156FC + "Xp").style.display = "";
		document.getElementById("span-topBar-" + _0x156FC + "Xp-left").style.display = "none"
	}
}

function getEnergyReduction(_0x16CB9)
{
	var _0x16F75 = 1.0;
	if (getItem("energyRing1") == 1)
	{
		_0x16F75 -= 0.01
	};
	if (getItem("energyRing2") == 1)
	{
		_0x16F75 -= 0.04
	};
	if (getItem("energyRing3") == 1)
	{
		_0x16F75 -= 0.10
	};
	if (getItem("energyRing3") == 1)
	{
		_0x16F75 -= 0.15
	};
	return parseInt(_0x16CB9 * _0x16F75)
}

function getAreaTimer(_0x16F98)
{
	var _0x16F75 = 1.0;
	if (getItem("cooldownRing1") == 1)
	{
		_0x16F75 -= 0.01
	};
	if (getItem("cooldownRing2") == 1)
	{
		_0x16F75 -= 0.04
	};
	if (getItem("cooldownRing3") == 1)
	{
		_0x16F75 -= 0.10
	};
	if (getItem("cooldownRing4") == 1)
	{
		_0x16F75 -= 0.15
	};
	return parseInt(_0x16F98 * _0x16F75)
}
var puzzleChest1_lastSelected = [-1, -1];

function clicksPuzzleChestOne(_0x159FE)
{
	var _0x165E3 = _0x159FE.split("-");
	if (puzzleChest1_lastSelected[0] != -1 || puzzleChest1_lastSelected[1] != -1)
	{
		var _0x166B5 = document.getElementById("td-puzzleChest1_" + puzzleChest1_lastSelected[0] + "-" + puzzleChest1_lastSelected[1]);
		var _0x1664C = document.getElementById("td-puzzleChest1_" + _0x165E3[0] + "-" + _0x165E3[1]);
		var _0x16692 = _0x166B5.getElementsByTagName("img")[0];
		var _0x16629 = _0x1664C.getElementsByTagName("img")[0];
		var _0x1666F = _0x16692.src;
		var _0x16606 = _0x16629.src;
		_0x16692.src = _0x16606;
		_0x16629.src = _0x1666F;
		puzzleChest1_lastSelected = [-1, -1];
		_0x166B5.style.border = "1px solid grey";
		_0x1664C.style.border = "1px solid grey"
	}
	else
	{
		puzzleChest1_lastSelected = _0x165E3;
		document.getElementById("td-puzzleChest1_" + puzzleChest1_lastSelected[0] + "-" + puzzleChest1_lastSelected[1]).style.border = "1px solid green"
	}
}

function clicksPuzzleChestOneSolveButton()
{
	var _0x1613D = "";
	_0x1613D = "0-0";
	if (!document.getElementById("td-puzzleChest1_" + _0x1613D).getElementsByTagName("img")[0].src.endsWith(_0x1613D + ".png"))
	{
		confirmDialogue("images/x.png", "The puzzle has not been solve correctly.", "Close", "", "");
		return
	};
	_0x1613D = "1-0";
	if (!document.getElementById("td-puzzleChest1_" + _0x1613D).getElementsByTagName("img")[0].src.endsWith(_0x1613D + ".png"))
	{
		confirmDialogue("images/x.png", "The puzzle has not been solve correctly.", "Close", "", "");
		return
	};
	_0x1613D = "2-0";
	if (!document.getElementById("td-puzzleChest1_" + _0x1613D).getElementsByTagName("img")[0].src.endsWith(_0x1613D + ".png"))
	{
		confirmDialogue("images/x.png", "The puzzle has not been solve correctly.", "Close", "", "");
		return
	};
	_0x1613D = "0-1";
	if (!document.getElementById("td-puzzleChest1_" + _0x1613D).getElementsByTagName("img")[0].src.endsWith(_0x1613D + ".png"))
	{
		confirmDialogue("images/x.png", "The puzzle has not been solve correctly.", "Close", "", "");
		return
	};
	_0x1613D = "1-1";
	if (!document.getElementById("td-puzzleChest1_" + _0x1613D).getElementsByTagName("img")[0].src.endsWith(_0x1613D + ".png"))
	{
		confirmDialogue("images/x.png", "The puzzle has not been solve correctly.", "Close", "", "");
		return
	};
	_0x1613D = "2-1";
	if (!document.getElementById("td-puzzleChest1_" + _0x1613D).getElementsByTagName("img")[0].src.endsWith(_0x1613D + ".png"))
	{
		confirmDialogue("images/x.png", "The puzzle has not been solve correctly.", "Close", "", "");
		return
	};
	_0x1613D = "0-2";
	if (!document.getElementById("td-puzzleChest1_" + _0x1613D).getElementsByTagName("img")[0].src.endsWith(_0x1613D + ".png"))
	{
		confirmDialogue("images/x.png", "The puzzle has not been solve correctly.", "Close", "", "");
		return
	};
	_0x1613D = "1-2";
	if (!document.getElementById("td-puzzleChest1_" + _0x1613D).getElementsByTagName("img")[0].src.endsWith(_0x1613D + ".png"))
	{
		confirmDialogue("images/x.png", "The puzzle has not been solve correctly.", "Close", "", "");
		return
	};
	_0x1613D = "2-2";
	if (!document.getElementById("td-puzzleChest1_" + _0x1613D).getElementsByTagName("img")[0].src.endsWith(_0x1613D + ".png"))
	{
		confirmDialogue("images/x.png", "The puzzle has not been solve correctly.", "Close", "", "");
		return
	};
	sendBytes("CHEST_PUZZLE_1_SOLVED")
}

function openDialogue(_0x16787)
{
	openDialogueOverride(_0x16787, "medium")
}

function getTotalResearches()
{
	return getItem("researcherCombat") + getItem("researcherMagic") + getItem("researcherMining") + getItem("researcherCrafting") + getItem("researcherWoodcutting") + getItem("researcherFarming") + getItem("researcherBrewing") + getItem("researcherFishing") + getItem("researcherCooking")
}

function openProfileDialogue()
{
	document.getElementById("dialogue-profile-username").innerHTML = getItemString("username");
	if (getItemString("username").startsWith("guest"))
	{
		document.getElementById("dialogue-profile-username-option").innerHTML = "<span class=\'change-username-label\'>(change)</span>";
		document.getElementById("dialogue-profile-password").innerHTML = "<span style=\'color:brown\'>None set</span>"
	};
	document.getElementById("dialogue-profile-password-option").innerHTML = "<span onclick=\'closeDialogue(\"dialogue-profile\");changePassword()\' class=\'change-username-label\'>(change)</span>";
	if (localStorage.getItem("auto-login") == null)
	{
		document.getElementById("dialogue-profile-autologin-option-checkbox").checked = true
	}
	else
	{
		if (localStorage.getItem("auto-login") == "off")
		{
			document.getElementById("dialogue-profile-autologin-option-checkbox").checked = false
		}
	};
	if (localStorage.getItem("titletrigger") == null)
	{
		document.getElementById("dialogue-profile-titletrigger-option-checkbox").checked = true
	}
	else
	{
		if (localStorage.getItem("titletrigger") == "off")
		{
			document.getElementById("dialogue-profile-titletrigger-option-checkbox").checked = false
		}
	};
	if (localStorage.getItem("notificationSound") == null)
	{
		document.getElementById("dialogue-profile-notificationSound-option-checkbox").checked = false
	}
	else
	{
		if (localStorage.getItem("notificationSound") == "off")
		{
			document.getElementById("dialogue-profile-notificationSound-option-checkbox").checked = true
		}
	};
	openDialogueOverride("dialogue-profile", "large")
}

function changedAutoLogin(_0x15DD2)
{
	if (_0x15DD2)
	{
		if (localStorage.getItem("auto-login") != null)
		{
			localStorage.removeItem("auto-login")
		}
	}
	else
	{
		localStorage.setItem("auto-login", "off")
	}
}

function changedTitleTrigger(_0x15DD2)
{
	if (_0x15DD2)
	{
		if (localStorage.getItem("titletrigger") != null)
		{
			localStorage.removeItem("titletrigger")
		}
	}
	else
	{
		localStorage.setItem("titletrigger", "off")
	}
}

function notificationSound(_0x15DD2)
{
	if (_0x15DD2)
	{
		playSound("sounds/twinkle.mp3");
		localStorage.setItem("notificationSound", "on")
	}
	else
	{
		if (localStorage.getItem("notificationSound") != null)
		{
			localStorage.removeItem("notificationSound")
		}
	}
}

function getTreesChopped()
{
	return p.getItem("treeChoppedTotal") + p.getItem("oakTreeChoppedTotal")
}

function changePassword()
{
	document.getElementById("dialogue-profile-guest-to-user-password-password").value = "";
	document.getElementById("dialogue-profile-guest-to-user-password-password2").value = "";
	if (getItemString("username").startsWith("guest"))
	{
		confirmDialogue("images/warning.png", "Guest accounts must set a username.", "Change Username", "Cancel", "JS_CHANGE_USERNAME")
	}
	else
	{
		document.getElementById("dialogue-profile-guest-to-user-password-errors").innerHTML = "";
		document.getElementById("dialogue-profile-guest-to-user-password-errors").style.display = "none";
		document.getElementById("change-username-tr").style.display = "none";
		openDialogue("dialogue-profile-guest-to-user-password")
	}
}

function changeUsername()
{
	document.getElementById("dialogue-profile-guest-to-user-password-username").value = "";
	document.getElementById("dialogue-profile-guest-to-user-password-password").value = "";
	document.getElementById("dialogue-profile-guest-to-user-password-password2").value = "";
	document.getElementById("dialogue-profile-guest-to-user-password-errors").innerHTML = "";
	document.getElementById("dialogue-profile-guest-to-user-password-errors").style.display = "none";
	openDialogue("dialogue-profile-guest-to-user-password")
}

function displayConvertGuestError(_0x16ACF)
{
	document.getElementById("dialogue-profile-guest-to-user-password-errors").innerHTML = "<ul>" + _0x16ACF + "</ul>";
	document.getElementById("dialogue-profile-guest-to-user-password-errors").style.display = ""
}

function getBestFurnace()
{
	var _0x1613D = "";
	_0x1613D = "stoneFurnace";
	if (getItem(_0x1613D) == 1)
	{
		return _0x1613D
	};
	_0x1613D = "bronzeFurnace";
	if (getItem(_0x1613D) == 1)
	{
		return _0x1613D
	};
	_0x1613D = "ironFurnace";
	if (getItem(_0x1613D) == 1)
	{
		return _0x1613D
	};
	_0x1613D = "silverFurnace";
	if (getItem(_0x1613D) == 1)
	{
		return _0x1613D
	};
	_0x1613D = "goldFurnace";
	if (getItem(_0x1613D) == 1)
	{
		return _0x1613D
	};
	_0x1613D = "promethiumFurnace";
	if (getItem(_0x1613D) == 1)
	{
		return _0x1613D
	};
	_0x1613D = "titaniumFurnace";
	if (getItem(_0x1613D) == 1)
	{
		return _0x1613D
	};
	return "none"
}

function openDialogueOverride(_0x16787, _0x189B5)
{
	if (_0x189B5 == "medium")
	{
		document.getElementById(_0x16787).style.minWidth = "400px";
		document.getElementById(_0x16787).style.left = "38%"
	};
	if (_0x189B5 == "large")
	{
		document.getElementById(_0x16787).style.minWidth = "700px";
		document.getElementById(_0x16787).style.left = "30%"
	};
	document.getElementById(_0x16787).style.top = (scrollY + 20) + "px";
	document.getElementById(_0x16787).style.display = ""
}

function confirmDialogue(_0x151ED, _0x167F0, _0x167AA, _0x167CD, _0x16813)
{
	if (_0x151ED == "" || _0x151ED == "none" || _0x151ED == null)
	{
		document.getElementById("dialogue-confirm-img").style.display = "none"
	}
	else
	{
		document.getElementById("dialogue-confirm-img").src = _0x151ED;
		document.getElementById("dialogue-confirm-img").style.display = ""
	};
	document.getElementById("dialogue-confirm-text").innerHTML = _0x167F0;
	document.getElementById("dialogue-confirm").style.display = "";
	document.getElementById("dialogue-confirm").style.top = (scrollY + 20) + "px";
	document.getElementById("dialogue-confirm-yes").innerHTML = _0x167AA;
	document.getElementById("dialogue-confirm-no").innerHTML = _0x167CD;
	if (_0x167CD == "")
	{
		document.getElementById("dialogue-confirm-no").style.display = "none"
	}
	else
	{
		document.getElementById("dialogue-confirm-no").style.display = ""
	};
	if (_0x16813 == "")
	{
		document.getElementById("dialogue-confirm-yes").setAttribute("onclick", "closeDialogue(\'dialogue-confirm\')")
	}
	else
	{
		if (_0x16813.startsWith("JS"))
		{
			switch (_0x16813)
			{
			case "JS_CHANGE_USERNAME":
				document.getElementById("dialogue-confirm-yes").setAttribute("onclick", "changeUsername();closeDialogue(\'dialogue-confirm\');");
				break;
			case "JS_CONVERT_GUEST_SUCCESS":
				document.getElementById("dialogue-confirm-yes").setAttribute("onclick", "logout();");
				break
			}
		}
		else
		{
			document.getElementById("dialogue-confirm-yes").setAttribute("onclick", "sendBytes(\'" + _0x16813 + "\');closeDialogue(\'dialogue-confirm\');")
		}
	}
}

function confirmDialogue2(_0x151ED, _0x167F0, _0x167AA, _0x167CD, _0x16836, _0x16813, _0x16859)
{
	if (_0x151ED == "" || _0x151ED == "none")
	{
		document.getElementById("dialogue-confirm2-img").style.display = "none"
	}
	else
	{
		document.getElementById("dialogue-confirm2-img").src = _0x151ED;
		document.getElementById("dialogue-confirm2-img").style.display = ""
	};
	document.getElementById("dialogue-confirm2-text").innerHTML = _0x167F0;
	document.getElementById("dialogue-confirm2").style.display = "";
	document.getElementById("dialogue-confirm2").style.top = (scrollY + 20) + "px";
	document.getElementById("dialogue-confirm2-yes").innerHTML = _0x167AA;
	document.getElementById("dialogue-confirm2-yes2").innerHTML = _0x167CD;
	document.getElementById("dialogue-confirm2-no").innerHTML = _0x16836;
	document.getElementById("dialogue-confirm2-yes").setAttribute("onclick", "sendBytes(\'" + _0x16813 + "\');closeDialogue(\'dialogue-confirm2\');");
	document.getElementById("dialogue-confirm2-yes2").setAttribute("onclick", "sendBytes(\'" + _0x16859 + "\');closeDialogue(\'dialogue-confirm2\');")
}

function confirmDialogue3(_0x151ED, _0x167F0, _0x167AA, _0x167CD, _0x16836, _0x1687C, _0x16813, _0x16859, _0x1689F)
{
	if (_0x151ED == "" || _0x151ED == "none")
	{
		document.getElementById("dialogue-confirm3-img").style.display = "none"
	}
	else
	{
		document.getElementById("dialogue-confirm3-img").src = _0x151ED;
		document.getElementById("dialogue-confirm3-img").style.display = ""
	};
	document.getElementById("dialogue-confirm3-text").innerHTML = _0x167F0;
	document.getElementById("dialogue-confirm3").style.display = "";
	document.getElementById("dialogue-confirm3").style.top = (scrollY + 20) + "px";
	document.getElementById("dialogue-confirm3-yes").innerHTML = _0x167AA;
	document.getElementById("dialogue-confirm3-yes2").innerHTML = _0x167CD;
	document.getElementById("dialogue-confirm3-yes3").innerHTML = _0x16836;
	document.getElementById("dialogue-confirm3-no").innerHTML = _0x1687C;
	document.getElementById("dialogue-confirm3-yes").setAttribute("onclick", "sendBytes(\'" + _0x16813 + "\');closeDialogue(\'dialogue-confirm3\');");
	document.getElementById("dialogue-confirm3-yes2").setAttribute("onclick", "sendBytes(\'" + _0x16859 + "\');closeDialogue(\'dialogue-confirm3\');");
	document.getElementById("dialogue-confirm3-yes3").setAttribute("onclick", "sendBytes(\'" + _0x1689F + "\');closeDialogue(\'dialogue-confirm3\');")
}

function closeDialogue(_0x16787)
{
	document.getElementById(_0x16787).style.display = "none"
}

function openQuestDialogue(_0x18C4E, _0x15328, _0x18C71, _0x167F0, _0x18B13, _0x18B36, _0x18B59, _0x18B7C, _0x18BC2, _0x18BE5, _0x18C08, _0x18C2B)
{
	document.getElementById("dialogue-quest-title").innerHTML = _0x18C71;
	document.getElementById("dialogue-quest-text").innerHTML = "<table><tr><td class=\'dialogue-quest-text-td\'>" + _0x167F0 + "</td><td><img src=\'" + _0x18C4E + "\' class=\'img-150\' /> </td></table>";
	document.getElementById("dialogue-quest-btn1").style.display = "none";
	document.getElementById("dialogue-quest-btn2").style.display = "none";
	document.getElementById("dialogue-quest-btn3").style.display = "none";
	document.getElementById("dialogue-quest-btn4").style.display = "none";
	if (_0x18B13 != "")
	{
		document.getElementById("dialogue-quest-btn1").style.display = "";
		if (_0x18BC2 == "")
		{
			document.getElementById("dialogue-quest-btn1").setAttribute("onclick", "closeDialogue(\'dialogue-quest\');")
		}
		else
		{
			document.getElementById("dialogue-quest-btn1").setAttribute("onclick", "closeDialogue(\'dialogue-quest\');sendBytes(\'QUEST=" + _0x15328 + "~" + _0x18BC2 + "\')")
		}
	}
	else
	{
		document.getElementById("dialogue-quest-btn1").style.display = "none"
	};
	if (_0x18B36 != "")
	{
		document.getElementById("dialogue-quest-btn2").style.display = "";
		if (_0x18BE5 == "")
		{
			document.getElementById("dialogue-quest-btn2").setAttribute("onclick", "closeDialogue(\'dialogue-quest\');")
		}
		else
		{
			document.getElementById("dialogue-quest-btn2").setAttribute("onclick", "closeDialogue(\'dialogue-quest\');sendBytes(\'QUEST=" + _0x15328 + "~" + _0x18BE5 + "\')")
		}
	}
	else
	{
		document.getElementById("dialogue-quest-btn2").style.display = "none"
	};
	if (_0x18B59 != "")
	{
		document.getElementById("dialogue-quest-btn3").style.display = "";
		if (_0x18C08 == "")
		{
			document.getElementById("dialogue-quest-btn3").setAttribute("onclick", "closeDialogue(\'dialogue-quest\');")
		}
		else
		{
			document.getElementById("dialogue-quest-btn3").setAttribute("onclick", "closeDialogue(\'dialogue-quest\');sendBytes(\'QUEST=" + _0x15328 + "~" + _0x18C08 + "\')")
		}
	}
	else
	{
		document.getElementById("dialogue-quest-btn3").style.display = "none"
	};
	if (_0x18B7C != "")
	{
		document.getElementById("dialogue-quest-btn4").style.display = "";
		if (_0x18C2B == "")
		{
			document.getElementById("dialogue-quest-btn4").setAttribute("onclick", "closeDialogue(\'dialogue-quest\');")
		}
		else
		{
			document.getElementById("dialogue-quest-btn4").setAttribute("onclick", "closeDialogue(\'dialogue-quest\');sendBytes(\'QUEST=" + _0x15328 + "~" + _0x18C2B + "\')")
		}
	}
	else
	{
		document.getElementById("dialogue-quest-btn4").style.display = "none"
	};
	var _0x18B9F = "<img src=\'images/bubbleChat.png\' class=\'img-30\' /> ";
	document.getElementById("dialogue-quest-btn1").innerHTML = _0x18B9F + _0x18B13;
	document.getElementById("dialogue-quest-btn2").innerHTML = _0x18B9F + _0x18B36;
	document.getElementById("dialogue-quest-btn3").innerHTML = _0x18B9F + _0x18B59;
	document.getElementById("dialogue-quest-btn4").innerHTML = _0x18B9F + _0x18B7C;
	openDialogueOverride("dialogue-quest", "large")
}

function clicksPotion(_0x165C0)
{
	if (getItem(_0x165C0 + "Timer") && getItem("warningPotionDrinking") == 0)
	{
		confirmDialogue("images/" + "warning" + ".png", "This potion is already active.  Drinking another one will simply reset the timer.<br /><br /><i style=\'color:grey\'>You won\'t see this warning again.</i>", "Close", "", "");
		sendBytes("DRINKING_POTION_WARNING")
	}
	else
	{
		if (_0x165C0 == "repelPotion1")
		{
			clicksRepelPotion(1)
		}
		else
		{
			if (_0x165C0 == "repelPotion2")
			{
				clicksRepelPotion(2)
			}
			else
			{
				if (_0x165C0 == "repelPotion3")
				{
					clicksRepelPotion(3)
				}
				else
				{
					if (_0x165C0 == "sapphireStardustPotion")
					{
						confirmDialogue("images/" + _0x165C0 + ".png", "Pour over a sapphire?<br /><br /><span style=\'color:grey\'>You will lose your sapphire.</span>", "Pour on Sapphire", "Cancel", "DRINK=" + _0x165C0)
					}
					else
					{
						if (_0x165C0 == "largeEmeraldStardustPotion")
						{
							confirmDialogue("images/" + _0x165C0 + ".png", "Pour over a emerald?<br /><br /><span style=\'color:grey\'>You will lose your emerald.</span>", "Pour on Emerald", "Cancel", "DRINK=" + _0x165C0)
						}
						else
						{
							if (_0x165C0 == "largeRubyStardustPotion")
							{
								confirmDialogue("images/" + _0x165C0 + ".png", "Pour over a ruby?<br /><br /><span style=\'color:grey\'>You will lose your ruby.</span>", "Pour on Ruby", "Cancel", "DRINK=" + _0x165C0)
							}
							else
							{
								confirmDialogue("images/" + _0x165C0 + ".png", "Drink this potion?", "Drink", "Cancel", "DRINK=" + _0x165C0)
							}
						}
					}
				}
			}
		}
	}
}

function getItemPrice(_0x14D47)
{
	if (global_itemPriceMap[_0x14D47] != null)
	{
		return global_itemPriceMap[_0x14D47].price
	};
	return 0
}

function rightClicksItem(_0x16255)
{
	if (global_equipmentMap[_0x16255] != null)
	{
		if (getItem("needle") > 0)
		{
			if (_0x16255.startsWith("snakeskin"))
			{
				confirmDialogue("images/needle.png", "<img src=\'images/" + _0x16255 + ".png\' class=\'img-50\' /> Use needle on this? <img src=\'images/" + _0x16255 + ".png\' class=\'img-30\' />", "Use Needle", "Cancel", "NEEDLE=" + _0x16255);
				return false
			}
			else
			{
				if (_0x16255.startsWith("bearFur"))
				{
					confirmDialogue("images/needle.png", "<img src=\'images/" + _0x16255 + ".png\' class=\'img-50\' /> Use needle on this? <img src=\'images/" + _0x16255 + ".png\' class=\'img-30\' />", "Use Needle", "Cancel", "NEEDLE=" + _0x16255);
					return false
				}
				else
				{
					if (_0x16255.startsWith("polarBearFur"))
					{
						confirmDialogue("images/needle.png", "<img src=\'images/" + _0x16255 + ".png\' class=\'img-50\' /> Use needle on this? <img src=\'images/" + _0x16255 + ".png\' class=\'img-30\' />", "Use Needle", "Cancel", "NEEDLE=" + _0x16255);
						return false
					}
					else
					{
						if (_0x16255.startsWith("batSkin"))
						{
							confirmDialogue("images/needle.png", "<img src=\'images/" + _0x16255 + ".png\' class=\'img-50\' /> Use needle on this? <img src=\'images/" + _0x16255 + ".png\' class=\'img-30\' />", "Use Needle", "Cancel", "NEEDLE=" + _0x16255);
							return false
						}
						else
						{
							if (_0x16255.startsWith("reaper"))
							{
								confirmDialogue("images/needle.png", "<img src=\'images/" + _0x16255 + ".png\' class=\'img-50\' /> Use needle on this? <img src=\'images/" + _0x16255 + ".png\' class=\'img-30\' />", "Use Needle", "Cancel", "NEEDLE=" + _0x16255);
								return false
							}
						}
					}
				}
			}
		}
	};
	if (global_foodMap[_0x16255] != null)
	{
		if (_0x16255.startsWith("raw"))
		{
			if (global_foodMap[_0x16255].heat != null)
			{
				var _0x19B58 = global_foodMap[_0x16255].heat;
				var _0x19B7B = getItem("heat") / global_foodMap[_0x16255].heat;
				_0x19B7B = parseInt(_0x19B7B);
				if (_0x19B7B > getItem(_0x16255))
				{
					_0x19B7B = getItem(_0x16255)
				};
				if (_0x19B7B > 0)
				{
					sendBytes("COOK=" + _0x16255 + "~" + _0x19B7B)
				};
				return false
			}
		}
	};
	if (_0x16255 == "monsterCanvas")
	{
		if (getItem("greenShinyMonsterOrbBound") > 0)
		{
			sendBytes("USE_SHINY_GREEN_ORB=" + "greenShinyMonsterOrbBound~none")
		};
		return false
	};
	if (_0x16255.startsWith("PLOT_"))
	{
		var _0x19B9E = _0x16255.split("_")[1];
		if (_0x16255.endsWith("WOODCUTTING"))
		{
			if (getItem("greenShinyWoodcuttingOrbBound") > 0)
			{
				sendBytes("USE_SHINY_GREEN_ORB=" + "greenShinyWoodcuttingOrbBound~" + _0x19B9E)
			}
		};
		if (_0x16255.endsWith("FARMING"))
		{
			if (getItem("greenShinyFarmingOrbBound") > 0)
			{
				sendBytes("USE_SHINY_GREEN_ORB=" + "greenShinyFarmingOrbBound~" + _0x19B9E)
			}
		};
		return false
	};
	if (_0x16255.endsWith("Seeds") && getItem("planter") == 1)
	{
		sendBytes("PLANTER=" + _0x16255);
		return false
	};
	switch (_0x16255)
	{
	case "planter":
		sendBytes("HARVEST_PLANTER");
		return false
	}
}

function clicksItem(_0x16255)
{
	if (_0x16255.endsWith("Seeds"))
	{
		clicksSeed(_0x16255);
		return
	};
	if (_0x16255.endsWith("Museum"))
	{
		if (getItem(_0x16255) == 0)
		{
			sendBytes("MUSEUM_OFFER=" + _0x16255.substr(0, _0x16255.length - 6));
			return
		}
	};
	if (_0x16255.startsWith("stardustBox"))
	{
		openInputDialogue("Open", "images/" + _0x16255 + ".png", _0x16255, 1, ["stardust"], [0], [_0x16255], [1], "Open", "OPEN_STARDUST_BOX", "Contains a random amount of stardust.");
		return
	};
	if (_0x16255.toLowerCase().endsWith("oilwell"))
	{
		sendBytes("CLICKS_OIL_WELL");
		return
	};
	if (_0x16255.startsWith("miningScroll"))
	{
		confirmDialogue("images/" + _0x16255 + ".png", "Learn how to gain mining XP from this resource?", "Read Scroll", "Close", "MINING_SCROLL=" + _0x16255);
		return
	};
	if (_0x16255.endsWith("StardustPrism"))
	{
		openInputDialogue("Open", "images/" + _0x16255 + ".png", _0x16255, 1, ["stardust"], [0], [_0x16255], [1], "Break", "OPEN_STARDUST_PRISM", "Contains a random amount of stardust.");
		return
	};
	if (_0x16255.toLowerCase().endsWith("geode"))
	{
		openInputDialogue("Open", "images/" + _0x16255 + ".png", _0x16255, 1, ["questionMarkIcon"], [0], [_0x16255], [1], "Crack", "OPEN_GEODES", "Contains ore or a mineral.");
		return
	};
	if (_0x16255.endsWith("ManaStar"))
	{
		confirmDialogue("images/" + _0x16255 + ".png", "Absorb the star to increase maximum mana permanently?", "Absorb Mana Star", "Cancel", "MANA_STAR=" + _0x16255);
		return
	};
	if (_0x16255.toLowerCase().endsWith("watch"))
	{
		clicksWatch();
		return
	};
	if (_0x16255 != "oyster" && _0x16255 != "specialOyster")
	{
		if (getItemPrice(_0x16255) > 0)
		{
			openInputDialogue("Sell", "images/" + _0x16255 + ".png", _0x16255, 1, ["coins"], [getItemPrice(_0x16255)], [_0x16255], [1], "Sell", "SELL", "Sell this to the shop for some coins.")
		}
	};
	if (_0x16255.toLowerCase().endsWith("rake"))
	{
		openRakeDialogue()
	};
	if (_0x16255.startsWith("heartCrystal"))
	{
		confirmDialogue("images/" + _0x16255 + ".png", "Break crystal and gain a permanent <img src=\'images/heartIcon.png\' class=\'img-20\' /> +5 health?", "Break Crystal", "Cancel", "HEART_CRYSTAL=" + _0x16255);
		return
	};
	if (global_foodMap[_0x16255] != null)
	{
		if (_0x16255.startsWith("raw"))
		{
			if (getItem("cookingUnlocked") == 0)
			{
				confirmDialogue("images/cookingSkill.png", "You need to unlock the cooking skill for this action.<br /><br /><span style=\'color:grey\'><b>Hint: </b> Cooking is unlocked after purchasing a bronze oven after upgrading the shop through crafting.", "Close", "", "")
			}
			else
			{
				if (getItem("cookingBoostPotionOn") == 1)
				{
					confirmDialogue("images/cookingBoostPotion.png", "You are about to use your cooking boost to cook one of this type of food.", "Cook", "Cancel", "COOK=" + _0x16255 + "~1")
				}
				else
				{
					if (global_foodMap[_0x16255].cookLevel > getLevel(getItem("cookingXp")))
					{
						confirmDialogue("images/cookingSkill.png", "You need a level of " + global_foodMap[_0x16255].cookLevel + " to cook this.", "Close", "", "")
					}
					else
					{
						openInputDialogue("Cook", "images/" + _0x16255 + ".png", _0x16255, 1, ["cookingSkill_xp"], [global_foodMap[_0x16255].xp], [_0x16255, "heat"], [1, global_foodMap[_0x16255].heat], "Cook", "COOK", "Cooking food allows it to be consumed afterwards for energy.  Remember to check your burn rate on your oven.")
					}
				}
			}
		}
		else
		{
			if (_0x16255 == "redMushroom" && getItem("researcherFarming") == 0)
			{
				return
			};
			openInputDialogue(getItemName(_0x16255.charAt(0).toUpperCase() + _0x16255.slice(1)) + "s", "images/" + _0x16255 + ".png", _0x16255, 1, ["energy"], [global_foodMap[_0x16255].energy], [_0x16255], [1], "Consume", "CONSUME", "Food gives you energy for your hero.  Energy is required to begin a fight with a monster.")
		}
	};
	if (_0x16255.startsWith("blue") && _0x16255.endsWith("Orb"))
	{
		clicksBlueOrb(_0x16255);
		return
	};
	if (_0x16255.startsWith("green") && _0x16255.endsWith("Orb"))
	{
		clicksGreenOrb(_0x16255);
		return
	};
	if (global_equipmentMap[_0x16255] != null)
	{
		if (document.getElementById("item-box-needle").style.border == "3px solid orange")
		{
			if (_0x16255.startsWith("snakeskin"))
			{
				confirmDialogue("images/needle.png", "<img src=\'images/" + _0x16255 + ".png\' class=\'img-50\' /> Use needle on this? <img src=\'images/" + _0x16255 + ".png\' class=\'img-30\' />", "Use Needle", "Cancel", "NEEDLE=" + _0x16255);
				return
			}
			else
			{
				if (_0x16255.startsWith("bearFur"))
				{
					confirmDialogue("images/needle.png", "<img src=\'images/" + _0x16255 + ".png\' class=\'img-50\' /> Use needle on this? <img src=\'images/" + _0x16255 + ".png\' class=\'img-30\' />", "Use Needle", "Cancel", "NEEDLE=" + _0x16255);
					return
				}
				else
				{
					if (_0x16255.startsWith("polarBearFur"))
					{
						confirmDialogue("images/needle.png", "<img src=\'images/" + _0x16255 + ".png\' class=\'img-50\' /> Use needle on this? <img src=\'images/" + _0x16255 + ".png\' class=\'img-30\' />", "Use Needle", "Cancel", "NEEDLE=" + _0x16255);
						return
					}
					else
					{
						if (_0x16255.startsWith("batSkin"))
						{
							confirmDialogue("images/needle.png", "<img src=\'images/" + _0x16255 + ".png\' class=\'img-50\' /> Use needle on this? <img src=\'images/" + _0x16255 + ".png\' class=\'img-30\' />", "Use Needle", "Cancel", "NEEDLE=" + _0x16255);
							return
						}
						else
						{
							if (_0x16255.startsWith("reaper"))
							{
								confirmDialogue("images/needle.png", "<img src=\'images/" + _0x16255 + ".png\' class=\'img-50\' /> Use needle on this? <img src=\'images/" + _0x16255 + ".png\' class=\'img-30\' />", "Use Needle", "Cancel", "NEEDLE=" + _0x16255);
								return
							}
						}
					}
				}
			}
		};
		sendBytes("EQUIP=" + _0x16255)
	};
	if (_0x16255.toLowerCase().endsWith("arrow"))
	{
		sendBytes("EQUIP=" + _0x16255);
		return
	};
	if (_0x16255.endsWith("Potion") || _0x16255.endsWith("Potion1") || _0x16255.endsWith("Potion2"))
	{
		clicksPotion(_0x16255);
		return
	};
	if (_0x16255.substr(0, _0x16255.length - 1).endsWith("Ring"))
	{
		confirmDialogue("images/" + _0x16255 + ".png", "Ring are automatically equipped.<br /><br /><span style=\'color:grey\'>Bonuses are stacked for each ring.</span>", "Close", "", "");
		return
	};
	if (_0x16255.endsWith("Mould"))
	{
		navigate("right-crafting");
		switchCraftingType(_0x16255);
		refreshCraftables();
		return
	};
	if (_0x16255.endsWith("Sigil"))
	{
		openChatSigilsDialogues()
	};
	if (_0x16255.startsWith("dungeonSign"))
	{
		navigate("right-dungeonSigns")
	};
	if (_0x16255.endsWith("Furnace"))
	{
		if (isSmelting())
		{
			confirmDialogue("images/" + getBestFurnace() + "On.gif", "Your furnace is already running! Would you like to reset it?<br /><br /><b style=\'color:red\'>Remaining ore and oil will be lost.</b>", "Reset Furnace", "Nevermind", "RESET_FURNACE")
		}
		else
		{
			if (getItem("letTheMiningBeginQuest") == 3)
			{
				sendBytes("QUEST=letTheMiningBegin~1")
			}
			else
			{
				openFurnaceDialogue(_0x16255)
			}
		}
	};
	if (global_museumItemsArray[_0x16255] != null)
	{
		sendBytes("CLICKS_MUSEUM_ITEM=" + _0x16255)
	};
	if (_0x16255.toLowerCase().endsWith("fishingnet"))
	{
		if (getItem("theFisherman2Quest") == -1)
		{
			document.getElementById("dialogue-swap-fishingTool-button2").onclick = function ()
			{
				openSmallFishingNetDialogue();
				closeDialogue("dialogue-swap-fishingTool")
			};
			if (getSmallFishingNetTypeData()[2] != "none")
			{
				document.getElementById("dialogue-swap-fishingTool-button2").style.display = "";
				document.getElementById("dialogue-swap-fishingTool-image").src = "images/" + getSmallFishingNetTypeData()[2] + ".png"
			}
			else
			{
				document.getElementById("dialogue-swap-fishingTool-button2").style.display = "none"
			};
			openDialogue("dialogue-swap-fishingTool")
		}
		else
		{
			openSmallFishingNetDialogue()
		}
	};
	if (_0x16255.toLowerCase().endsWith("fishingrod"))
	{
		if (getItem("theFisherman2Quest") == -1)
		{
			document.getElementById("dialogue-swap-fishingTool-button2").onclick = function ()
			{
				openFishingRodDialogue();
				closeDialogue("dialogue-swap-fishingTool")
			};
			if (getFishingRodTypeData()[2] != "none")
			{
				document.getElementById("dialogue-swap-fishingTool-button2").style.display = "";
				document.getElementById("dialogue-swap-fishingTool-image").src = "images/" + getFishingRodTypeData()[2] + ".png"
			}
			else
			{
				document.getElementById("dialogue-swap-fishingTool-button2").style.display = "none"
			};
			openDialogue("dialogue-swap-fishingTool")
		}
		else
		{
			openFishingRodDialogue()
		}
	};
	if (_0x16255.toLowerCase().endsWith("harpoon"))
	{
		if (getItem("theFisherman2Quest") == -1)
		{
			document.getElementById("dialogue-swap-fishingTool-button2").onclick = function ()
			{
				openHarpoonDialogue();
				closeDialogue("dialogue-swap-fishingTool")
			};
			if (getHarpoonTypeData()[2] != "none")
			{
				document.getElementById("dialogue-swap-fishingTool-button2").style.display = "";
				document.getElementById("dialogue-swap-fishingTool-image").src = "images/" + getHarpoonTypeData()[2] + ".png"
			}
			else
			{
				document.getElementById("dialogue-swap-fishingTool-button2").style.display = "none"
			};
			openDialogue("dialogue-swap-fishingTool")
		}
		else
		{
			openHarpoonDialogue()
		}
	};
	if (_0x16255.toLowerCase().endsWith("shovel"))
	{
		openShovelDialogue()
	};
	if (_0x16255.toLowerCase().endsWith("axe") && !_0x16255.toLowerCase().endsWith("pickaxe"))
	{
		openAxeDialogue()
	};
	if (_0x16255.toLowerCase().endsWith("chainsaw"))
	{
		openChainsawDialogue()
	};
	if (_0x16255.toLowerCase().endsWith("trowel"))
	{
		openTrowelDialogue()
	};
	openChainsawDialogue;
	if (_0x16255.toLowerCase().endsWith("chisel"))
	{
		openChiselDialogue()
	};
	if (_0x16255.toLowerCase().endsWith("bonemealbin"))
	{
		bonemealBinDialgue()
	};
	if (_0x16255.toLowerCase().endsWith("brewingkit"))
	{
		openBrewingKitDialogue()
	};
	if (_0x16255.toLowerCase().endsWith("stardustpickaxe"))
	{
		openStardustToolDialogue("stardustPickaxe")
	};
	if (_0x16255.toLowerCase().endsWith("stardusthammer"))
	{
		if (getItem("telescopePart") == 1 && getItem("telescopeLens") == 1)
		{
			confirmDialogue("images/telescopeLens.png", "Use the hammer to put the telescope lens in place?", "Fix Telescope", "Cancel", "FIX_TELESCOPE")
		}
		else
		{
			openStardustToolDialogue("stardustHammer")
		}
	};
	if (_0x16255.endsWith("Oven"))
	{
		clicksOven()
	};
	if (_0x16255.startsWith("spellScroll"))
	{
		confirmDialogue("images/" + _0x16255 + ".png", "Study the spell scroll?", "Learn", "Cancel", "LEARN_SPELL=" + _0x16255)
	};
	if (_0x16255 == "houseBlueprint")
	{
		confirmDialogue("images/researcher.png", "You may only craft one of three houses.<br /><br />The house you craft will define your character.", "Close", "", "");
		switchCraftingType(_0x16255);
		refreshCraftables();
		return
	};
	if (_0x16255.endsWith("LootBag"))
	{
		openInputDialogue("Loot Bag", "images/" + _0x16255 + ".png", _0x16255, 1, ["questionMarkIcon"], [1], [_0x16255], [1], "Open", "OPEN_LOOTBAGS", "Loot bags contain basic items which are area specific.");
		return
	};
	if (_0x16255.endsWith("Stew"))
	{
		confirmDialogue("images/" + _0x16255 + ".png", "Drink the stew?", "Drink", "Cancel", "DRINK_CHEF_STEW=" + _0x16255);
		return
	};
	if (_0x16255 == "museumBlueprint")
	{
		switchCraftingType(_0x16255);
		refreshCraftables();
		return
	};
	switch (_0x16255)
	{
	case "rowBoatBlueprints":
		navigate("right-crafting");
		switchCraftingType(_0x16255);
		refreshCraftables();
		break;
	case "canoeBoatBlueprints":
		navigate("right-crafting");
		switchCraftingType(_0x16255);
		refreshCraftables();
		break;
	case "seaweed":
		sendBytes("CLICKS_SEAWEED");
		break;
	case "spyglassMould":
		navigate("right-crafting");
		switchCraftingType(_0x16255);
		refreshCraftables();
		break;
	case "halloweenScroll":
		clicksHalloweenScroll();
		break;
	case "titaniumOilFactoryBlueprint":
		;
	case "promethiumOilFactoryBlueprint":
		;
	case "oilFactoryBlueprint":
		navigate("right-crafting");
		switchCraftingType("oilFactoryBlueprint");
		refreshCraftables();
		break;
	case "titaniumOilFactory":
		;
	case "promethiumOilFactory":
		;
	case "oilFactory":
		openOilFactoryDialogue();
		break;
	case "greenSpices":
		;
	case "blueSpices":
		;
	case "greenSpices":
		;
	case "yellowSpices":
		sendBytes("QUEST=theStewChef~0");
		break;
	case "charcoalFoundry":
		;
	case "titaniumCharcoalFoundry":
		if (isUsingFoundry())
		{
			confirmDialogue("images/" + "charcoalFoundry.png", "Your foundry is already running! Would you like to reset it?<br /><br /><b style=\'color:red\'>Remaining logs and oil will be lost.</b>", "Reset Foundry", "Nevermind", "RESET_FOUNDRY")
		}
		else
		{
			clicksCharcoalFoundry()
		};
		break;
	case "feather":
		navigate("right-crafting");
		switchCraftingType(_0x16255);
		refreshCraftables();
		break;
	case "fireFeather":
		navigate("right-crafting");
		switchCraftingType(_0x16255);
		refreshCraftables();
		break;
	case "maceSpikes":
		navigate("right-crafting");
		switchCraftingType(_0x16255);
		refreshCraftables();
		break;
	case "robot":
		;
	case "sapphireRobot":
		;
	case "emeraldRobot":
		;
	case "rubyRobot":
		;
	case "diamondRobot":
		clicksRobot();
		break;
	case "brokenStoneMace":
		if (getItem("stone") >= 50000)
		{
			confirmDialogue("images/brokenStoneMace.png", "The mace is broken and needs to be repaired with 50,000 stone.<br /><br /><span style=\'color:grey\'>The success rate scales based on your crafting level.<br /><br /><span style=\'font-size:10pt\'>You will lose your stone should you fail to repaire the stone mace.</span></span><br /><br /><img src=\'images/stone.png\' class=\'img-20\'> 50,000 <img src=\'images/check.png\' class=\'img-20\' />", "Attempt Repair", "Cancel", "REPAIR_STONE_MACE")
		}
		else
		{
			confirmDialogue("images/stone.png", "You need at least 50,000 stone to try to repair the stone mace.", "Close", "", "")
		};
		break;
	case "iceFeather":
		navigate("right-crafting");
		switchCraftingType(_0x16255);
		refreshCraftables();
		break;
	case "stew":
		confirmDialogue("images/stew.png", "Drink the stew to reduce cooldown by 15 minutes?", "Drink", "Close", "DRINK_STEW");
		break;
	case "chef":
		if (getItem("chefCooldown") > 1)
		{
			confirmDialogue("images/chef.png", "I\'m still trying to think of a stew recipe.  Come back later.", "Close", "", "")
		}
		else
		{
			if (ownsStew())
			{
				confirmDialogue("images/chef.png", "I\'m offended, do you not enjoy the master piece we have created? Finish eating your stew if you want to make a new one!", "Close", "", "");
				return
			};
			var _0x163B3 = getItemString("chefRecipeItem1");
			var _0x163D6 = getItemString("chefRecipeAmount1");
			var _0x1641C = getItemString("chefRecipeItem2");
			var _0x1643F = getItemString("chefRecipeAmount2");
			var _0x16485 = getItemString("chefRecipeItem3");
			var _0x164A8 = getItemString("chefRecipeAmount3");
			var _0x16390 = "<img src=\'images/check.png\' class=\'img-20\' />";
			if (getItem(_0x163B3) < _0x163D6)
			{
				_0x16390 = "<img src=\'images/x.png\' class=\'img-20\' />"
			};
			var _0x163F9 = "<img src=\'images/check.png\' class=\'img-20\' />";
			if (getItem(_0x1641C) < _0x1643F)
			{
				_0x163F9 = "<img src=\'images/x.png\' class=\'img-20\' />"
			};
			var _0x16462 = "<img src=\'images/check.png\' class=\'img-20\' />";
			if (getItem(_0x16485) < _0x164A8)
			{
				_0x16462 = "<img src=\'images/x.png\' class=\'img-20\' />"
			};
			if (getItem("researcherCooking") >= 4)
			{
				confirmDialogue2("images/chef.png", "I need some ingredients!  I\'m trying to make a <b style=\'color:green\'>" + getItemName(getItemString("chefStew")) + "</b><br /><br />Ingredients:<br /><br /><center><table width=\'70%\' style=\'text-align:center;color:black;padding:10px;border:1px solid #000033; background-color:#b3d9ff;\'><tr><td><img src=\'images/" + _0x163B3 + ".png\' class=\'img-50\' /></td><td>" + _0x163D6 + " " + _0x16390 + "</td></tr><tr><td><img src=\'images/" + _0x1641C + ".png\' class=\'img-50\' /></td><td>" + _0x1643F + " " + _0x163F9 + "</td></tr><tr><td><img src=\'images/" + _0x16485 + ".png\' class=\'img-50\' /></td><td>" + _0x164A8 + " " + _0x16462 + "</td></tr></table><br /><br /><table width=\'70%\' style=\'text-align:center;color:black;padding:10px;border:1px solid #000033; background-color:#b3d9ff;\'><tr><td><img src=\'images/energy.png\' class=\'img-50\' /></td><td style=\'color:green\'>" + formatNumber(getItem("stewEnergy")) + "</td></tr><tr><td><img src=\'images/hourglass.png\' class=\'img-50\' /></td><td style=\'color:green\'>" + formatTime(getItem("stewCooldownReduction")) + "</td></tr></table></center>", "Make Stew", "Skip this Stew", "Close", "MAKE_STEW", "SKIP_STEW")
			}
			else
			{
				confirmDialogue("images/chef.png", "I need some ingredients!  I\'m trying to make a <b style=\'color:green\'>" + getItemName(getItemString("chefStew")) + "</b><br /><br />Ingredients:<br /><br /><center><table width=\'70%\' style=\'text-align:center;color:black;padding:10px;border:1px solid #000033; background-color:#b3d9ff;\'><tr><td><img src=\'images/" + _0x163B3 + ".png\' class=\'img-50\' /></td><td>" + _0x163D6 + " " + _0x16390 + "</td></tr><tr><td><img src=\'images/" + _0x1641C + ".png\' class=\'img-50\' /></td><td>" + _0x1643F + " " + _0x163F9 + "</td></tr><tr><td><img src=\'images/" + _0x16485 + ".png\' class=\'img-50\' /></td><td>" + _0x164A8 + " " + _0x16462 + "</td></tr></table></center>", "Make Stew", "Close", "MAKE_STEW")
			}
		};
		break;
	case "darkCrystalUsed":
		confirmDialogue("images/faradox.png", "Faradox has been released into this world.<br /><br /><span style=\'color:grey\'>We need to find and use all 7 crystals scattered around the world for it to gain its power back.</span>", "Close", "", "");
		break;
	case "planter":
		confirmDialogue("images/planter.png", "<b>Right click</b> a seed to automatically harvest all and replant.<br /><br /><b>Right click</b> this planter to only harvest all.", "Close", "", "");
		break;
	case "lumberJack":
		sendBytes("LUMBERJACK");
		break;
	case "chain":
		;
	case "skeletonHead":
		;
	case "skeletonLeftArm":
		;
	case "skeletonRightArm":
		;
	case "skeletonLeftLeg":
		;
	case "skeletonRightLeg":
		navigate("right-crafting");
		switchCraftingType("cemeterySkeleton");
		refreshCraftables();
		break;
	case "smallSnowballs":
		;
	case "mediumSnowball":
		;
	case "largeSnowball":
		;
	case "leftBranch":
		;
	case "rightBranch":
		navigate("right-crafting");
		switchCraftingType("snowman");
		refreshCraftables();
		break;
	case "cemeterySkeletonShield1":
		;
	case "cemeterySkeletonShield2":
		;
	case "cemeterySkeletonShield3":
		navigate("right-crafting");
		switchCraftingType("cemeterySkeletonShield");
		refreshCraftables();
		break;
	case "stardust1000":
		sendBytes("OPEN_SD_PACKS");
		break;
	case "rocket":
		clicksRocket();
		break;
	case "oyster":
		openDialogue("dialogue-oysterOptions");
		break;
	case "specialOyster":
		openDialogue("dialogue-specialOysterOptions");
		break;
	case "vial":
		if (getItem("poisonCombatVial") > 0 || getItemString("weapon") == "posionCombatVial" || getItemString("weapon") == "combatVial" || getItem("combatVial") > 0)
		{
			return
		};
		if (getItem("mommyTheSpiderQuest") == 2)
		{
			confirmDialogue("images/vial.png", "Would you like to hold this as a weapon?", "Hold Vial", "Cancel", "HOLD_VIAL")
		};
		break;
	case "largeVial":
		if (getItem("mommyTheSpiderQuest") == 2)
		{
			if (getItem("poisonCombatVial") > 0 || getItemString("weapon") == "posionCombatVial" || getItemString("weapon") == "combatVial" || getItem("combatVial") > 0)
			{
				return
			};
			confirmDialogue("images/largeVial.png", "Try a smaller vial if you wish to hold poison.", "Close", "", "")
		};
		break;
	case "treasureMap":
		sendBytes("CLICKS_TREASURE_MAP");
		break;
	case "greenTreasureMap":
		sendBytes("CLICKS_GREEN_TREASURE_MAP");
		break;
	case "treasureChest":
		openDialogue("dialogue-treasureChest");
		break;
	case "greenTreasureChest":
		openDialogue("dialogue-greenTreasureChest");
		break;
	case "bones":
		if (getBonemealTypeData() == "none")
		{
			confirmDialogue("images/bones.png", "Hmm, wonder what I can do with these.", "Close", "", "")
		}
		else
		{
			var _0x15A21 = getBonemealTypeData()[3];
			if (_0x15A21 == "INF")
			{
				_0x15A21 = "&#8734;"
			};
			openInputDialogue("Bonemeal<br /><span style=\'color:grey;font-size:10pt;\'>Currently stored: " + getItem("bonemeal") + "/" + _0x15A21 + "</span>", "images/bonemeal.png", "bones", 1, ["bonemeal"], [1], ["bones"], [1], "Add", "ADD_BONEMEAL", "Bones can be stored in the bonemeal bin.  Bonemeal is required to plant high level seeds.");
			var _0x164CB = getMaxBonemealToPut(_0x16255);
			document.getElementById("dialogue-wild-input").value = _0x164CB;
			$("#dialogue-wild-input").keyup()
		};
		break;
	case "ashes":
		if (getBonemealTypeData() == "none")
		{
			confirmDialogue("images/ashes.png", "Hmm, wonder what I can do with these.", "Close", "", "")
		}
		else
		{
			var _0x15A21 = getBonemealTypeData()[3];
			if (_0x15A21 == "INF")
			{
				_0x15A21 = "&#8734;"
			};
			openInputDialogue("Bonemeal<br /><span style=\'color:grey;font-size:10pt;\'>Currently stored: " + getItem("bonemeal") + "/" + _0x15A21 + "</span>", "images/bonemeal.png", "ashes", 1, ["bonemeal"], [2], ["ashes"], [1], "Add", "ADD_BONEMEAL", "Ashes can be stored in the bonemeal bin.  Bonemeal is required to plant high level seeds.");
			var _0x164CB = getMaxBonemealToPut(_0x16255);
			document.getElementById("dialogue-wild-input").value = _0x164CB;
			$("#dialogue-wild-input").keyup()
		};
		break;
	case "iceBones":
		if (getBonemealTypeData() == "none")
		{
			confirmDialogue("images/iceBones.png", "Hmm, wonder what I can do with these.", "Close", "", "")
		}
		else
		{
			var _0x15A21 = getBonemealTypeData()[3];
			if (_0x15A21 == "INF")
			{
				_0x15A21 = "&#8734;"
			};
			openInputDialogue("Bonemeal<br /><span style=\'color:grey;font-size:10pt;\'>Currently stored: " + getItem("bonemeal") + "/" + _0x15A21 + "</span>", "images/bonemeal.png", "iceBones", 1, ["bonemeal"], [3], ["iceBones"], [1], "Add", "ADD_BONEMEAL", "Ice bones can be stored in the bonemeal bin.  Bonemeal is required to plant high level seeds. The cold has preserved its calcium content.");
			var _0x164CB = getMaxBonemealToPut(_0x16255);
			document.getElementById("dialogue-wild-input").value = _0x164CB;
			$("#dialogue-wild-input").keyup()
		};
		break;
	case "needle":
		if (document.getElementById("item-box-needle").style.border == "3px solid orange")
		{
			document.getElementById("item-box-needle").style.border = "1px solid rgb(128, 212, 255)"
		}
		else
		{
			document.getElementById("item-box-needle").style.border = "3px solid orange";
			confirmDialogue("images/needle.png", "Select skin or fur armour you wish to turn back into its primary form.<br /><br /><span style=\'color:grey\'>Shortcut:  You may simply right click the armour to instantly use the needle.</span>", "Close", "", "")
		};
		break;
	case "fishBones":
		if (getBonemealTypeData() == "none")
		{
			confirmDialogue("images/bones.png", "Hmm, wonder what I can do with these.", "Close", "", "")
		}
		else
		{
			if (getItem("fishBones") < 10)
			{
				confirmDialogue("images/fishBones.png", "You need at least 10 to get bonemeal out of these.", "Close", "", "");
				return
			};
			var _0x15A21 = getBonemealTypeData()[3];
			if (_0x15A21 == "INF")
			{
				_0x15A21 = "&#8734;"
			};
			openInputDialogue("Bonemeal<br /><span style=\'color:grey;font-size:10pt;\'>Currently stored: " + getItem("bonemeal") + "/" + _0x15A21 + "</span>", "images/bonemeal.png", "fishBones", 1, ["bonemeal"], [0.1], ["fishBones"], [1], "Add", "ADD_BONEMEAL", "Fishbones can be stored in the bonemeal bin.  Bonemeal is required to plant high level seeds.")
		};
		break;
	case "fightMonsterButton":
		if (getItem("monsterName", true) == "none")
		{
			navigate("right-combat-select")
		}
		else
		{
			navigate("right-combat-fighting")
		};
		break;
	case "specialBait":
		if (getItem("specialFish") > 0)
		{
			confirmDialogue("images/specialBait.png", "No point in using this, I already caught the special anguler fish!", "Close", "", "");
			return
		};
		if (getItem("specialBaitOn") == 1)
		{
			confirmDialogue("images/specialBait.png", "Stop fishing using special bait?", "Stop Fishing", "Nevermind", "STOP_SUPER_BAIT")
		}
		else
		{
			confirmDialogue("images/specialBait.png", "User special bait to fish?", "Use Super Bait", "Nevermind", "START_SUPER_BAIT")
		};
		break;
	case "oxygenTank":
		if (getItem("researcherFishing") >= 2)
		{
			if (getItem("oxygenTankTimer") == 1)
			{
				sendBytes("COLLECT_BOAT=oxygenTank")
			}
			else
			{
				if (getItem("oxygenTankTimer") > 1)
				{
					confirmDialogue("images/oxygenTank.png", "You\'re already exploring the deep ocean floors!", "Close", "", "");
					hideElement("notification-specialBaitOn")
				}
				else
				{
					confirmDialogue("images/oxygenTank.png", "Would you like to explore the ocean floors?<br /><br /><span style=\'color:grey\'>You will not obtain fish from your tool during this time.</span><br /><br /><center><table style=\'color:black;padding:10px;border:1px solid #000033; background-color:#b3d9ff;\'><tr><td><img src=\'images/hourglass.png\' class=\'img-50\' /></td><td>3 hours</td></tr><tr><td><img src=\'images/oxygenTank.png\' class=\'img-50\' /></td><td>" + formatNumber(getItem("oxygenTankTrips")) + " Trips completed</td></tr></table></center>", "Explore Ocean Floor", "Close", "SEND_BOAT=oxygenTank")
				}
			}
		}
		else
		{
			confirmDialogue("images/oxygenTank.png", "I\'m not sure how to use this yet.", "Close", "", "")
		};
		break;
	case "rowBoat":
		if (getItem(_0x16255 + "Timer") == 1)
		{
			sendBytes("COLLECT_BOAT=" + _0x16255)
		}
		else
		{
			if (getItem(_0x16255 + "Timer") > 1)
			{
				confirmDialogue("images/" + _0x16255 + ".png", "You\'re already out on a boat!", "Close", "", "")
			}
			else
			{
				confirmDialogue("images/" + _0x16255 + ".png", "Would you like to go fishing on your boat?<br /><br /><span style=\'color:grey\'>You will not obtain fish from your tool during this time.</span><br /><br /><center><table style=\'color:black;padding:10px;border:1px solid #000033; background-color:#b3d9ff;\'><tr><td><img src=\'images/hourglass.png\' class=\'img-50\' /></td><td>6 hours</td></tr><tr><td><img src=\'images/" + _0x16255 + ".png\' class=\'img-50\' /></td><td>" + formatNumber(getItem(_0x16255 + "Trips")) + " Trips completed</td></tr></table></center>", "Send Boat", "Close", "SEND_BOAT=" + _0x16255)
			}
		};
		break;
	case "canoeBoat":
		if (getItem(_0x16255 + "Timer") == 1)
		{
			sendBytes("COLLECT_BOAT=" + _0x16255)
		}
		else
		{
			if (getItem(_0x16255 + "Timer") > 1)
			{
				confirmDialogue("images/" + _0x16255 + ".png", "You\'re already out on a boat!", "Close", "", "")
			}
			else
			{
				confirmDialogue("images/" + _0x16255 + ".png", "Would you like to go fishing on your canoe?<br /><br /><span style=\'color:grey\'>You will not obtain fish from your tool during this time.</span><br /><br /><center><table style=\'color:black;padding:10px;border:1px solid #000033; background-color:#b3d9ff;\'><tr><td><img src=\'images/hourglass.png\' class=\'img-50\' /></td><td>10 hours</td></tr><tr><td><img src=\'images/" + _0x16255 + ".png\' class=\'img-50\' /></td><td>" + formatNumber(getItem(_0x16255 + "Trips")) + " Trips completed</td></tr></table></center>", "Send Boat", "Close", "SEND_BOAT=" + _0x16255)
			}
		};
		break;
	case "manaStars":
		navigate("right-manaStars");
		break;
	case "readMe":
		confirmDialogue("images/diamond.png", "Diamond Hunt 3 is a very slow paced game.  You will often find yourself unable to progress unless you wait.  These gaps of waiting will be filled over time as the game is updated.<br /><br />Also, even while you are logged off, your account will keep progressing for up to 8 hours.<br /><br />Thanks for playing!<br /><br /><b>Smitty</b>", "Close", "", "READ_ME");
		break;
	case "cooksBook1":
		navigate("right-cooksBook");
		break;
	case "telescopeLens":
		if (getItem("theTelescopeQuest") == 2)
		{
			confirmDialogue("images/telescopeLens.png", "I found the lens!  I should let the astronomer know.", "Close", "", "")
		}
		else
		{
			if (getItem("theTelescopeQuest") == 3)
			{
				confirmDialogue("images/telescopeLens.png", "I need to find a way to get the telescope lens in the telescope.<br /><br />Maybe I require some kind of tool where I can bang the lens in place.", "Close", "", "")
			}
		};
		break;
	case "telescopePart":
		confirmDialogue("images/telescopeLens.png", "I need to find a way to get the telescope lens in the telescope.<br /><br />Maybe I require some kind of tool where I can bang the lens in place.", "Close", "", "");
		break;
	case "telescope":
		confirmDialogue("images/telescope.png", "You look through the telescope...<br /><br />Nothing is visible! There is too much light pollution.", "Close", "", "");
		break;
	case "fightPvpButton":
		confirmDialogue("images/underConstruction.png", "This piece of content is currently under construction!", "Close", "", "");
		break;
	case "transformLog":
		navigate("right-transformLog");
		sendBytes("REFRESH_TRANSFORM_LOG");
		break;
	case "darkCrystal":
		confirmDialogue("images/darkCrystal.gif", "<i style=\'color:grey\'>You feel a sense of fear as the crystal continues to glow.</i><br /><br />Rub the glowing dark crystal?", "Touch Crystal", "Cancel", "RELEASE_FARADOX");
		break;
	case "cyanCrystal":
		confirmDialogue("images/cyanCrystal.png", "<i style=\'color:grey\'>You feel a sense of comfort near the sky crystal.</i><br /><br />Touch the crystal?", "Touch Crystal", "Cancel", "TOUCH_CRYSTAL=cyanCrystal");
		break;
	case "redCrystal":
		confirmDialogue("images/redCrystal.png", "<i style=\'color:grey\'>You feel a sense of comfort near the lava crystal.</i><br /><br />Touch the crystal?", "Touch Crystal", "Cancel", "TOUCH_CRYSTAL=redCrystal");
		break;
	case "blueCrystal":
		confirmDialogue("images/blueCrystal.png", "<i style=\'color:grey\'>You feel a sense of comfort near the ocean crystal.</i><br /><br />Touch the crystal?", "Touch Crystal", "Cancel", "TOUCH_CRYSTAL=blueCrystal");
		break;
	case "yellowCrystal":
		confirmDialogue("images/yellowCrystal.png", "<i style=\'color:grey\'>You feel a sense of comfort near the castle dungeon crystal.</i><br /><br />Touch the crystal?", "Touch Crystal", "Cancel", "TOUCH_CRYSTAL=yellowCrystal");
		break;
	case "puzzleChest1":
		navigate("right-puzzleChest1");
		break;
	case "combatPresetsIcon":
		clicksCombatPresets();
		break;
	case "miner":
		;
	case "drills":
		;
	case "crushers":
		;
	case "giantDrills":
		;
	case "excavators":
		if (_0x16255 == "miner" && getItem("letTheMiningBeginQuest") == 2 && getAllocationAmount(_0x16255) == 0)
		{
			if (getMinersOrMachineryAvailable("miner") == 0)
			{
				sendBytes("QUEST=letTheMiningBegin~0")
			}
			else
			{
				confirmDialogue("images/miner.gif", "Click on one of the ores which you have the level below.  Assign me to it.", "Close", "", "")
			}
		}
		else
		{
			clicksMiningResource(_0x16255)
		};
		break;
	case "carePackage1":
		confirmDialogue("images/carePackage1.png", "Open package?", "Open", "Wait", "OPEN_CARE_PACKAGE_1");
		break;
	case "carePackage2":
		confirmDialogue("images/carePackage2.png", "Open package?", "Open", "Wait", "OPEN_CARE_PACKAGE_2");
		break;
	case "carePackage3":
		confirmDialogue("images/carePackage3.png", "Open package?", "Open", "Wait", "OPEN_CARE_PACKAGE_3");
		break;
	case "carePackage4":
		confirmDialogue("images/carePackage4.png", "Open package?", "Open", "Wait", "OPEN_CARE_PACKAGE_4");
		break;
	case "researcher":
		navigate("right-researcher");
		break;
	case "donorCoins":
		openDialogue("dialogue-buyDonorCoins-gift-or-me");
		break;
	case "treeList":
		refreshTreeListTab();
		navigate("right-treeList");
		break;
	case "pirate":
		refreshBoundOrbs();
		navigate("right-pirate");
		break;
	case "combatLog":
		navigate("right-combatLog");
		sendBytes("REFRESH_COMBAT_LOG");
		break;
	case "lootBagLog":
		navigate("right-lootBagLog");
		sendBytes("REFRESH_LOOT_BAGS_LOG");
		break;
	case "explorer":
		if (getItem("explorerDialogue") == 1)
		{
			sendBytes("EXPLORER_DIALOGUE=4")
		}
		else
		{
			navigate("right-explorer")
		};
		break;
	case "seedList":
		refreshSeedListTab();
		navigate("right-seedList");
		break;
	case "diamond_verydark":
		;
	case "gemList2":
		refreshGemListTab();
		navigate("right-gemList");
		break;
	case "gemList3":
		refreshGemListTab();
		navigate("right-gemList");
		break;
	case "convertMagic":
		navigate("right-convertMagic");
		break;
	case "museum":
		refreshMuseum();
		navigate("right-museum");
		break;
	case "bob":
		if (getItem("bobsPanicQuest") != -1)
		{
			sendBytes("QUEST=bobsPanic~1")
		};
		break;
	case "snakeskin":
		navigate("right-crafting");
		switchCraftingType(_0x16255);
		refreshCraftables();
		break;
	case "bearFur":
		navigate("right-crafting");
		switchCraftingType(_0x16255);
		refreshCraftables();
		break;
	case "polarBearFur":
		navigate("right-crafting");
		switchCraftingType(_0x16255);
		refreshCraftables();
		break;
	case "blackSilk":
		navigate("right-crafting");
		switchCraftingType(_0x16255);
		refreshCraftables();
		break;
	case "batSkin":
		navigate("right-crafting");
		switchCraftingType(_0x16255);
		refreshCraftables();
		break;
	case "daggerBlade":
		;
	case "daggerHandle":
		navigate("right-crafting");
		switchCraftingType("offhandIronDagger");
		refreshCraftables();
		break;
	case "scytheBlade":
		navigate("right-crafting");
		switchCraftingType("offhandScythe");
		refreshCraftables();
		break;
	case "skeletonSwordMetal":
		navigate("right-crafting");
		switchCraftingType("boneAmuletPlus");
		refreshCraftables();
		break;
	case "bowBase":
		;
	case "magicString":
		navigate("right-crafting");
		switchCraftingType("bowBase");
		refreshCraftables();
		break
	}
}

function clicksHalloweenScroll()
{
	var _0x15A44 = "";
	var _0x1613D = "";
	var _0x14EEB = "";
	_0x15A44 += "I need to find the following items:<br /><br />";
	_0x1613D = "witchesHat";
	_0x14EEB = "A witch is roaming.";
	if (getItem(_0x1613D) >= 1)
	{
		_0x15A44 += "<img class=\'img-50\' src=\'images/" + _0x1613D + ".png\' />" + _0x14EEB
	}
	else
	{
		_0x15A44 += "<img class=\'img-50\' src=\'images/" + _0x1613D + "_black.png\' />" + _0x14EEB
	};
	_0x15A44 += "<br /><br />";
	_0x1613D = "fallBranch";
	_0x14EEB = "A branch with leaves changing colors.";
	if (getItem(_0x1613D) >= 1)
	{
		_0x15A44 += "<img class=\'img-50\' src=\'images/" + _0x1613D + ".png\' />" + _0x14EEB
	}
	else
	{
		_0x15A44 += "<img class=\'img-50\' src=\'images/" + _0x1613D + "_black.png\' />" + _0x14EEB
	};
	_0x15A44 += "<br /><br />";
	_0x1613D = "rottenLog";
	_0x14EEB = "A rotting log.";
	if (getItem(_0x1613D) >= 1)
	{
		_0x15A44 += "<img class=\'img-50\' src=\'images/" + _0x1613D + ".png\' />" + _0x14EEB
	}
	else
	{
		_0x15A44 += "<img class=\'img-50\' src=\'images/" + _0x1613D + "_black.png\' />" + _0x14EEB
	};
	_0x15A44 += "<br /><br />";
	_0x1613D = "eyeball";
	_0x14EEB = "Yeti\'s eyeball";
	if (getItem(_0x1613D) >= 1)
	{
		_0x15A44 += "<img class=\'img-50\' src=\'images/" + _0x1613D + ".png\' />" + _0x14EEB
	}
	else
	{
		_0x15A44 += "<img class=\'img-50\' src=\'images/" + _0x1613D + "_black.png\' />" + _0x14EEB
	};
	_0x15A44 += "<br /><br />";
	_0x1613D = "batWing";
	_0x14EEB = "A wing from the caves.";
	if (getItem(_0x1613D) >= 1)
	{
		_0x15A44 += "<img class=\'img-50\' src=\'images/" + _0x1613D + ".png\' />" + _0x14EEB
	}
	else
	{
		_0x15A44 += "<img class=\'img-50\' src=\'images/" + _0x1613D + "_black.png\' />" + _0x14EEB
	};
	_0x15A44 += "<br /><br />";
	_0x1613D = "pumpkin";
	_0x14EEB = "A pumpkin.";
	if (getItem(_0x1613D) >= 1)
	{
		_0x15A44 += "<img class=\'img-50\' src=\'images/" + _0x1613D + ".png\' />" + _0x14EEB
	}
	else
	{
		_0x15A44 += "<img class=\'img-50\' src=\'images/" + _0x1613D + "_black.png\' />" + _0x14EEB
	};
	confirmDialogue("images/halloweenScroll.png", _0x15A44, "Claim Reward", "Close", "CLAIM_HALLOWEEN_2020")
}

function clicksRocket()
{
	var _0x16255 = "rocket";
	if (getItemString("rocketDestination") == "moon" && getItem("rocketKm") == 384000)
	{
		sendBytes("COLLECT_ROCKET=moon");
		return
	};
	if (getItemString("rocketDestination") == "mars" && getItem("rocketKm") == 54000000)
	{
		sendBytes("COLLECT_ROCKET=mars");
		return
	};
	if (getItem("researcherMining") >= 6)
	{
		document.getElementById("moon-trips-completed").innerHTML = formatNumber(getItem("rocketTrips"));
		document.getElementById("mars-trips-completed").innerHTML = formatNumber(getItem("rocketTripsMars"));
		openDialogue("dialogue-rocket")
	}
	else
	{
		clicksRocketMoon()
	}
}

function clicksRocketMoon()
{
	var _0x16255 = "rocket";
	var _0x151ED = "<img src=\'images/x.png\' class=\'img-20\' />";
	if (getItem("oil") >= 100000)
	{
		_0x151ED = "<img src=\'images/check.png\' class=\'img-20\' />"
	};
	var _0x1671E = "";
	if (getItem("titaniumRocketBoosters") > 0)
	{
		_0x1671E = "<br /><table style=\'color:grey;padding:10px;border:1px solid #000033; background-color:#b3d9ff;\'><tr><td><img src=\'images/titaniumRocketBoosters.png\' class=\'img-30\' /></td><td style=\'font-size:10pt;text-align:right;\'>A notification will show up and can be clicked to activate the boosters. <u style=\'cursor:pointer;\' onclick=\'titaniumRocketBoostersMoreInfo()\'>(more info)</u></td></tr></table>"
	};
	confirmDialogue(getRocketImage(), "Would you like to go to the moon?<br /><br /><span style=\'color:grey\'>Requires <img src=\'images/oil.png\' class=\'img-20\' /> 100,000 oil " + _0x151ED + "</span><br /><br /><center><table style=\'color:black;padding:10px;border:1px solid #000033; background-color:#b3d9ff;\'><tr><td><img src=\'images/moon.png\' class=\'img-50\' /></td><td>384,000 km</td></tr><tr><td><img src=\'images/" + _0x16255 + ".png\' class=\'img-50\' /></td><td>" + formatNumber(getItem(_0x16255 + "Trips")) + " Trips completed</td></tr></table></center>" + _0x1671E, "Launch Rocket", "Close", "LAUNCH_ROCKET=moon")
}

function clicksRobot()
{
	if (getItem("robotTimer") == 1)
	{
		sendBytes("LOOT_ROBOT")
	}
	else
	{
		if (getItem("robotTimer") > 1)
		{
			confirmDialogue("images/robot.png", "Your robot is already mining away!", "Close", "", "")
		}
		else
		{
			if (getItem("diamondRobot") == 1)
			{
				document.getElementById("robot-dialogue-tr-sapphire").style.backgroundColor = "#99ffcc";
				document.getElementById("robot-dialogue-tr-emerald").style.backgroundColor = "#99ffcc";
				document.getElementById("robot-dialogue-tr-ruby").style.backgroundColor = "#99ffcc";
				document.getElementById("robot-dialogue-tr-diamond").style.backgroundColor = "#99ffcc";
				document.getElementById("robot-dialogue-socket-button").style.display = "none"
			};
			if (getItem("rubyRobot") == 1)
			{
				document.getElementById("robot-dialogue-tr-sapphire").style.backgroundColor = "#99ffcc";
				document.getElementById("robot-dialogue-tr-emerald").style.backgroundColor = "#99ffcc";
				document.getElementById("robot-dialogue-tr-ruby").style.backgroundColor = "#99ffcc"
			};
			if (getItem("emeraldRobot") == 1)
			{
				document.getElementById("robot-dialogue-tr-sapphire").style.backgroundColor = "#99ffcc";
				document.getElementById("robot-dialogue-tr-emerald").style.backgroundColor = "#99ffcc"
			};
			if (getItem("sapphireRobot") == 1)
			{
				document.getElementById("robot-dialogue-tr-sapphire").style.backgroundColor = "#99ffcc"
			};
			openDialogue("dialogue-robot")
		}
	}
}

function socketRobot()
{
	if (getItem("robot") == 1)
	{
		confirmDialogue("images/sapphire.png", "Add 3 sapphires to your robot?", "Confirm Socket", "Cancel", "SOCKET=robot")
	}
	else
	{
		if (getItem("sapphireRobot") == 1)
		{
			confirmDialogue("images/emerald.png", "Add 3 emeralds to your robot?", "Confirm Socket", "Cancel", "SOCKET=robot")
		}
		else
		{
			if (getItem("emeraldRobot") == 1)
			{
				confirmDialogue("images/ruby.png", "Add 3 rubies to your robot?", "Confirm Socket", "Cancel", "SOCKET=robot")
			}
			else
			{
				if (getItem("rubyRobot") == 1)
				{
					confirmDialogue("images/ruby.png", "Add 3 diamonds to your robot?", "Confirm Socket", "Cancel", "SOCKET=robot")
				}
				else
				{
					confirmDialogue("images/diamondRobot.png", "Your robot already has the best gem socketed.", "Close", "", "")
				}
			}
		}
	}
}

function clicksRocketMars()
{
	var _0x16255 = "rocket";
	var _0x151ED = "<img src=\'images/x.png\' class=\'img-20\' />";
	if (getItem("oil") >= 200000)
	{
		_0x151ED = "<img src=\'images/check.png\' class=\'img-20\' />"
	};
	var _0x1671E = "";
	if (getItem("titaniumRocketBoosters") > 0)
	{
		_0x1671E = "<br /><table style=\'color:grey;padding:10px;border:1px solid #000033; background-color:#b3d9ff;\'><tr><td><img src=\'images/titaniumRocketBoosters.png\' class=\'img-30\' /></td><td style=\'font-size:10pt;text-align:right;\'>A notification will show up and can be clicked to activate the boosters. <u style=\'cursor:pointer;\' onclick=\'titaniumRocketBoostersMoreInfo()\'>(more info)</u></td></tr></table>"
	};
	confirmDialogue(getRocketImage(), "Would you like to go to mars?<br /><br /><span style=\'color:grey\'>Requires <img src=\'images/oil.png\' class=\'img-20\' /> 200,000 oil " + _0x151ED + "</span><br /><br /><center><table style=\'color:black;padding:10px;border:1px solid #000033; background-color:#b3d9ff;\'><tr><td><img src=\'images/mars.png\' class=\'img-50\' /></td><td>54,000,000 km</td></tr><tr><td><img src=\'images/" + _0x16255 + ".png\' class=\'img-50\' /></td><td>" + formatNumber(getItem(_0x16255 + "TripsMars")) + " Trips completed</td></tr></table></center>" + _0x1671E, "Launch Rocket", "Close", "LAUNCH_ROCKET=mars")
}

function bindDonorCoinsInterface()
{
	openInputDialogue("Donor Coins", "images/donorCoins.png", "donorCoins", 1, [], [], ["donorCoins"], [1], "Bind", "BIND_DONOR_COINS", "Binding your donor coins will attach them to your account allowing you to use them in the donor shop - however they will become untradable.<br /><br /><b>Warning: </b> Only tradable donor coins can be used to purchase cosmetic chat tags.")
}

function giftDonorCoinsInterface1()
{
	open2InputTextDialogue("images/gift.png", "Enter the username who you wish to gift.", "Username", "Amount to Gift", "Gift Donor Coins", "Cancel", "GIFT_DONOR")
}

function giftDonorCoinsInterface2()
{
	openInputDialogue("Donor Coins", "images/gift.png", "donorCoins", 1, [], [], ["donorCoins"], [1], "Gift", "BIND_DONOR_COINS", "Binding your donor coins will attach them to your account allowing you to use them in the donor shop - however they will become untradable.<br /><br /><b>Warning: </b> Only tradable donor coins can be used to purchase cosmetic chat tags.")
}

function clicksCombatPresets()
{
	var _0x1613D;
	var _0x15A44 = "";
	var _0x16183 = getItem("presetsSetIndex");
	for (var _0x14C0C = 0; _0x14C0C <= 4; _0x14C0C++)
	{
		var _0x161A6 = document.getElementById("dialogue-combatPresets-" + _0x14C0C);
		if (_0x161A6 != null)
		{
			_0x161A6.style.display = "none"
		}
	};
	var _0x161A6 = document.getElementById("dialogue-combatPresets-" + _0x16183);
	if (_0x161A6 != null)
	{
		_0x161A6.style.display = ""
	};
	for (var _0x14C0C = 1; _0x14C0C <= 25; _0x14C0C++)
	{
		_0x1613D = _0x14C0C;
		_0x15A44 = "";
		if (getItemString("presetWeapon" + _0x1613D) != "weapon")
		{
			_0x15A44 += "<img src=\'images/" + getItemString("presetWeapon" + _0x1613D) + ".png\' class=\'img-30\' /> "
		};
		if (getItemString("presetShield" + _0x1613D) != "shield")
		{
			_0x15A44 += "<img src=\'images/" + getItemString("presetShield" + _0x1613D) + ".png\' class=\'img-30\' /> "
		};
		if (getItemString("presetHead" + _0x1613D) != "head")
		{
			_0x15A44 += "<img src=\'images/" + getItemString("presetHead" + _0x1613D) + ".png\' class=\'img-30\' /> "
		};
		if (getItemString("presetBody" + _0x1613D) != "body")
		{
			_0x15A44 += "<img src=\'images/" + getItemString("presetBody" + _0x1613D) + ".png\' class=\'img-30\' /> "
		};
		if (getItemString("presetLegs" + _0x1613D) != "legs")
		{
			_0x15A44 += "<img src=\'images/" + getItemString("presetLegs" + _0x1613D) + ".png\' class=\'img-30\' /> "
		};
		if (getItemString("presetBoots" + _0x1613D) != "boots")
		{
			_0x15A44 += "<img src=\'images/" + getItemString("presetBoots" + _0x1613D) + ".png\' class=\'img-30\' /> "
		};
		if (getItemString("presetGloves" + _0x1613D) != "gloves")
		{
			_0x15A44 += "<img src=\'images/" + getItemString("presetGloves" + _0x1613D) + ".png\' class=\'img-30\' /> "
		};
		if (getItemString("presetAmulet" + _0x1613D) != "amulet")
		{
			_0x15A44 += "<img src=\'images/" + getItemString("presetAmulet" + _0x1613D) + ".png\' class=\'img-30\' /> "
		};
		if (getItemString("presetArrows" + _0x1613D) != "arrows")
		{
			_0x15A44 += "<img src=\'images/" + getItemString("presetArrows" + _0x1613D) + ".png\' class=\'img-30\' /> "
		};
		if (_0x15A44.length > 0)
		{
			document.getElementById("preset" + _0x1613D + "-set").innerHTML = _0x15A44
		}
		else
		{
			document.getElementById("preset" + _0x1613D + "-set").innerHTML = "(Not Set)"
		}
	};
	document.getElementById("dialogue-combatPresets-select").selectedIndex = _0x16183;
	document.getElementById("preset-option-0").innerHTML = getPresetSetName(0);
	document.getElementById("preset-option-1").innerHTML = getPresetSetName(1);
	document.getElementById("preset-option-2").innerHTML = getPresetSetName(2);
	document.getElementById("preset-option-3").innerHTML = getPresetSetName(3);
	document.getElementById("preset-option-4").innerHTML = getPresetSetName(4);
	openDialogueOverride("dialogue-combatPresets", "large")
}

function presetsDropdownChanged()
{
	var _0x18E38 = document.getElementById("dialogue-combatPresets-select").selectedIndex;
	setItem("presetsSetIndex", _0x18E38);
	sendBytes("CHANGE_PRESET_SET=" + _0x18E38);
	clicksCombatPresets()
}

function setPreset(_0x159FE)
{
	closeDialogue("dialogue-combatPresets");
	confirmDialogue("images/combatPresetsIcon.png", "Set this preset to what you\'re currently wearing?", "Set Preset", "Cancel", "SET_PRESET=" + _0x159FE)
}

function usePreset(_0x159FE)
{
	closeDialogue("dialogue-combatPresets");
	sendBytes("USE_PRESET=" + _0x159FE)
}

function openInputTextDialogue(_0x1866D, _0x14EEB, _0x18690, _0x18627, _0x1864A, _0x16813)
{
	if (_0x1866D == "none")
	{
		document.getElementById("dialogue-text-input-img").style.display = "none"
	}
	else
	{
		document.getElementById("dialogue-text-input-img").style.display = "";
		document.getElementById("dialogue-text-input-img").src = _0x1866D
	};
	document.getElementById("dialogue-text-input-description").innerHTML = _0x14EEB;
	document.getElementById("dialogue-text-input-title").innerHTML = _0x18690;
	document.getElementById("dialogue-text-input-confirm").innerHTML = _0x18627;
	document.getElementById("dialogue-text-input-cancel").innerHTML = _0x1864A;
	document.getElementById("dialogue-text-input-confirm").onclick = function ()
	{
		sendBytes(_0x16813 + "=" + document.getElementById("dialogue-text-input-box").value);
		closeDialogue("dialogue-text-input")
	};
	openDialogue("dialogue-text-input")
}

function open2InputTextDialogue(_0x1866D, _0x14EEB, _0x18690, _0x186B3, _0x18627, _0x1864A, _0x16813)
{
	if (_0x1866D == "none")
	{
		document.getElementById("dialogue-text-input2-img").style.display = "none"
	}
	else
	{
		document.getElementById("dialogue-text-input2-img").style.display = "";
		document.getElementById("dialogue-text-input2-img").src = _0x1866D
	};
	document.getElementById("dialogue-text-input2-description").innerHTML = _0x14EEB;
	document.getElementById("dialogue-text-input2-title1").innerHTML = _0x18690;
	document.getElementById("dialogue-text-input2-title2").innerHTML = _0x186B3;
	document.getElementById("dialogue-text-input2-confirm").innerHTML = _0x18627;
	document.getElementById("dialogue-text-input2-cancel").innerHTML = _0x1864A;
	document.getElementById("dialogue-text-input2-confirm").onclick = function ()
	{
		sendBytes(_0x16813 + "=" + document.getElementById("dialogue-text-input2-box1").value + "~" + document.getElementById("dialogue-text-input2-box2").value);
		closeDialogue("dialogue-text-input2")
	};
	openDialogue("dialogue-text-input2")
}

function clicksDonorShopItem(_0x16255)
{
	switch (_0x16255)
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
		confirmDialogue("images/donorCoins.png", "Are you sure you want to purchase this?", "Purchase", "Cancel", "PURCHASE_DONOR=" + _0x16255);
		break
	}
}

function resetAnimationOfCurrentFightToIdle()
{
	var _0x16BE7 = getMonsterObject(getItemString("monsterName"));
	if (_0x16BE7 != "none")
	{
		_0x16BE7.frameAt = 0;
		_0x16BE7.speedAt = 0;
		_0x16BE7.currentAnimation = _0x16BE7.idleAnimationObject
	}
}
var global_museumItemsArray = new Array();

function refreshMuseum()
{
	document.getElementById("museum-section").innerHTML = "";
	var _0x1613D = "";
	_0x1613D = "brokenStinger";
	global_museumItemsArray[_0x1613D] = true;
	if (getItem(_0x1613D + "Museum") == 1)
	{
		addItemBox(_0x1613D, 0, "", "museum-section", "#1a344c", "#0d1a26", "BROKEN STINGER", "", true)
	}
	else
	{
		addMuseumItemBox("x_grey", _0x1613D + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "BROKEN STINGER", "", true)
	};
	_0x1613D = "snakeBones";
	global_museumItemsArray[_0x1613D] = true;
	if (getItem(_0x1613D + "Museum") == 1)
	{
		addItemBox(_0x1613D, 0, "", "museum-section", "#1a344c", "#0d1a26", "SNAKE BONES", "", true)
	}
	else
	{
		addMuseumItemBox("x_grey", _0x1613D + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "SNAKE BONES", "", true)
	};
	_0x1613D = "giantPearl";
	global_museumItemsArray[_0x1613D] = true;
	if (getItem(_0x1613D + "Museum") == 1)
	{
		addItemBox(_0x1613D, 0, "", "museum-section", "#1a344c", "#0d1a26", "GIANT PEARL", "", true)
	}
	else
	{
		addMuseumItemBox("x_grey", _0x1613D + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "GIANT PEARL", "", true)
	};
	_0x1613D = "rareGiantPearl";
	global_museumItemsArray[_0x1613D] = true;
	if (getItem(_0x1613D + "Museum") == 1)
	{
		addItemBox(_0x1613D, 0, "", "museum-section", "#1a344c", "#0d1a26", "RARE GIANT PEARL", "", true)
	}
	else
	{
		addMuseumItemBox("x_grey", _0x1613D + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "RARE GIANT PEARL", "", true)
	};
	_0x1613D = "skeletonSkull";
	global_museumItemsArray[_0x1613D] = true;
	if (getItem(_0x1613D + "Museum") == 1)
	{
		addItemBox(_0x1613D, 0, "", "museum-section", "#1a344c", "#0d1a26", "SKULL", "", true)
	}
	else
	{
		addMuseumItemBox("x_grey", _0x1613D + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "SKULL", "", true)
	};
	_0x1613D = "ghostClothes";
	global_museumItemsArray[_0x1613D] = true;
	if (getItem(_0x1613D + "Museum") == 1)
	{
		addItemBox(_0x1613D, 0, "", "museum-section", "#1a344c", "#0d1a26", "GHOST CLOTHES", "", true)
	}
	else
	{
		addMuseumItemBox("x_grey", _0x1613D + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "GHOST CLOTHES", "", true)
	};
	_0x1613D = "cockroach";
	global_museumItemsArray[_0x1613D] = true;
	if (getItem(_0x1613D + "Museum") == 1)
	{
		addItemBox(_0x1613D, 0, "", "museum-section", "#1a344c", "#0d1a26", "GIANT COCKROACH", "", true)
	}
	else
	{
		addMuseumItemBox("x_grey", _0x1613D + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "GIANT COCKROACH", "", true)
	};
	_0x1613D = "goldenCockroach";
	global_museumItemsArray[_0x1613D] = true;
	if (getItem(_0x1613D + "Museum") == 1)
	{
		addItemBox(_0x1613D, 0, "", "museum-section", "#1a344c", "#0d1a26", "GOLDEN COCKROACH", "", true)
	}
	else
	{
		addMuseumItemBox("x_grey", _0x1613D + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "GOLDEN COCKROACH", "", true)
	};
	_0x1613D = "smallSeaShell";
	global_museumItemsArray[_0x1613D] = true;
	if (getItem(_0x1613D + "Museum") == 1)
	{
		addItemBox(_0x1613D, 0, "", "museum-section", "#1a344c", "#0d1a26", "SMALL SHELL", "", true)
	}
	else
	{
		addMuseumItemBox("x_grey", _0x1613D + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "SMALL SHELL", "", true)
	};
	_0x1613D = "mediumSeaShell";
	global_museumItemsArray[_0x1613D] = true;
	if (getItem(_0x1613D + "Museum") == 1)
	{
		addItemBox(_0x1613D, 0, "", "museum-section", "#1a344c", "#0d1a26", "MEDIUM SHELL", "", true)
	}
	else
	{
		addMuseumItemBox("x_grey", _0x1613D + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "MEDIUM SHELL", "", true)
	};
	_0x1613D = "largeSeaShell";
	global_museumItemsArray[_0x1613D] = true;
	if (getItem(_0x1613D + "Museum") == 1)
	{
		addItemBox(_0x1613D, 0, "", "museum-section", "#1a344c", "#0d1a26", "LARGE SHELL", "", true)
	}
	else
	{
		addMuseumItemBox("x_grey", _0x1613D + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "LARGE SHELL", "", true)
	};
	_0x1613D = "yetiLeftFoot";
	global_museumItemsArray[_0x1613D] = true;
	if (getItem(_0x1613D + "Museum") == 1)
	{
		addItemBox(_0x1613D, 0, "", "museum-section", "#1a344c", "#0d1a26", "YETI\'S FOOT (L)", "", true)
	}
	else
	{
		addMuseumItemBox("x_grey", _0x1613D + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "YETI\'S FOOT (L)", "", true)
	};
	_0x1613D = "yetiRightFoot";
	global_museumItemsArray[_0x1613D] = true;
	if (getItem(_0x1613D + "Museum") == 1)
	{
		addItemBox(_0x1613D, 0, "", "museum-section", "#1a344c", "#0d1a26", "YETI\'S FOOT (R)", "", true)
	}
	else
	{
		addMuseumItemBox("x_grey", _0x1613D + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "YETI\'S FOOT (R)", "", true)
	};
	_0x1613D = "snowmanCrafted";
	global_museumItemsArray[_0x1613D] = true;
	if (getItem(_0x1613D + "Museum") == 1)
	{
		addItemBox(_0x1613D, 0, "", "museum-section", "#1a344c", "#0d1a26", "SNOWMAN", "", true)
	}
	else
	{
		addMuseumItemBox("x_grey", _0x1613D + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "SNOWMAN", "", true)
	};
	_0x1613D = "sharkTooth";
	global_museumItemsArray[_0x1613D] = true;
	if (getItem(_0x1613D + "Museum") == 1)
	{
		addItemBox(_0x1613D, 0, "", "museum-section", "#1a344c", "#0d1a26", "SHARK\'S TOOTH", "", true)
	}
	else
	{
		addMuseumItemBox("x_grey", _0x1613D + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "SHARK\'S TOOTH", "", true)
	};
	_0x1613D = "glowingGoldBar";
	global_museumItemsArray[_0x1613D] = true;
	if (getItem(_0x1613D + "Museum") == 1)
	{
		addItemBox(_0x1613D, 0, "", "museum-section", "#1a344c", "#0d1a26", "GLOWING GOLD", "", true)
	}
	else
	{
		addMuseumItemBox("x_grey", _0x1613D + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "GLOWING GOLD", "", true)
	};
	_0x1613D = "sapphireGlassHand";
	global_museumItemsArray[_0x1613D] = true;
	if (getItem(_0x1613D + "Museum") == 1)
	{
		addItemBox(_0x1613D, 0, "", "museum-section", "#1a344c", "#0d1a26", "SAPPHIRE GLASS HAND", "", true)
	}
	else
	{
		addMuseumItemBox("x_grey", _0x1613D + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "SAPPHIRE GLASS HAND", "", true)
	};
	_0x1613D = "emeraldGlassHand";
	global_museumItemsArray[_0x1613D] = true;
	if (getItem(_0x1613D + "Museum") == 1)
	{
		addItemBox(_0x1613D, 0, "", "museum-section", "#1a344c", "#0d1a26", "EMERALD GLASS HAND", "", true)
	}
	else
	{
		addMuseumItemBox("x_grey", _0x1613D + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "EMERALD GLASS HAND", "", true)
	};
	_0x1613D = "rubyGlassHand";
	global_museumItemsArray[_0x1613D] = true;
	if (getItem(_0x1613D + "Museum") == 1)
	{
		addItemBox(_0x1613D, 0, "", "museum-section", "#1a344c", "#0d1a26", "RUBY GLASS HAND", "", true)
	}
	else
	{
		addMuseumItemBox("x_grey", _0x1613D + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "RUBY GLASS HAND", "", true)
	};
	_0x1613D = "diamondGlassHand";
	global_museumItemsArray[_0x1613D] = true;
	if (getItem(_0x1613D + "Museum") == 1)
	{
		addItemBox(_0x1613D, 0, "", "museum-section", "#1a344c", "#0d1a26", "DIAMOND GLASS HAND", "", true)
	}
	else
	{
		addMuseumItemBox("x_grey", _0x1613D + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "DIAMOND GLASS HAND", "", true)
	};
	_0x1613D = "greenStoneEyes";
	global_museumItemsArray[_0x1613D] = true;
	if (getItem(_0x1613D + "Museum") == 1)
	{
		addItemBox(_0x1613D, 0, "", "museum-section", "#1a344c", "#0d1a26", "STONE EYES (G)", "", true)
	}
	else
	{
		addMuseumItemBox("x_grey", _0x1613D + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "STONE EYES (G)", "", true)
	};
	_0x1613D = "purpleStoneEyes";
	global_museumItemsArray[_0x1613D] = true;
	if (getItem(_0x1613D + "Museum") == 1)
	{
		addItemBox(_0x1613D, 0, "", "museum-section", "#1a344c", "#0d1a26", "STONE EYES (P)", "", true)
	}
	else
	{
		addMuseumItemBox("x_grey", _0x1613D + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "STONE EYES (P)", "", true)
	};
	_0x1613D = "redStoneEyes";
	global_museumItemsArray[_0x1613D] = true;
	if (getItem(_0x1613D + "Museum") == 1)
	{
		addItemBox(_0x1613D, 0, "", "museum-section", "#1a344c", "#0d1a26", "STONE EYES (R)", "", true)
	}
	else
	{
		addMuseumItemBox("x_grey", _0x1613D + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "STONE EYES (R)", "", true)
	};
	_0x1613D = "yellowStoneEyes";
	global_museumItemsArray[_0x1613D] = true;
	if (getItem(_0x1613D + "Museum") == 1)
	{
		addItemBox(_0x1613D, 0, "", "museum-section", "#1a344c", "#0d1a26", "STONE EYES (O)", "", true)
	}
	else
	{
		addMuseumItemBox("x_grey", _0x1613D + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "STONE EYES (O)", "", true)
	};
	_0x1613D = "blueStoneEyes";
	global_museumItemsArray[_0x1613D] = true;
	if (getItem(_0x1613D + "Museum") == 1)
	{
		addItemBox(_0x1613D, 0, "", "museum-section", "#1a344c", "#0d1a26", "STONE EYES (B)", "", true)
	}
	else
	{
		addMuseumItemBox("x_grey", _0x1613D + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "STONE EYES (B)", "", true)
	};
	_0x1613D = "burntRemains";
	global_museumItemsArray[_0x1613D] = true;
	if (getItem(_0x1613D + "Museum") == 1)
	{
		addItemBox(_0x1613D, 0, "", "museum-section", "#1a344c", "#0d1a26", "BURNT REMAINS", "", true)
	}
	else
	{
		addMuseumItemBox("x_grey", _0x1613D + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "BURNT REMAINS", "", true)
	}
}

function refreshHeroHpBar()
{
	var _0x19068 = parseInt(getItem("heroHp") / getItem("heroMaxHp") * 100);
	if (_0x19068 > 100)
	{
		_0x19068 = 100
	};
	document.getElementById("hero-inner-hp-bar").style.minWidth = _0x19068 + "%"
}

function refreshHeroManaBar()
{
	var _0x19068 = parseInt(getItem("heroMana") / getItem("heroMaxMana") * 100);
	if (_0x19068 > 100)
	{
		_0x19068 = 100
	};
	document.getElementById("hero-inner-mana-bar").style.minWidth = _0x19068 + "%"
}

function getSeedDropRate(_0x174CA)
{
	var _0x14EA5 = 0;
	switch (_0x174CA)
	{
	case "dottedGreenLeafSeeds":
		_0x14EA5 = 14400;
		break;
	case "greenLeafSeeds":
		_0x14EA5 = 14400 * 2;
		break;
	case "limeLeafSeeds":
		_0x14EA5 = 60000;
		break;
	case "goldLeafSeeds":
		_0x14EA5 = 150000;
		break;
	case "crystalLeafSeeds":
		_0x14EA5 = 500000;
		break;
	case "stripedGoldLeafSeeds":
		_0x14EA5 = 1000000;
		break;
	case "stripedCrystalLeafSeeds":
		_0x14EA5 = 3000000;
		break;
	case "redMushroomSeeds":
		_0x14EA5 = 3600;
		break;
	case "blewitMushroomSeeds":
		_0x14EA5 = 36000;
		break;
	case "stardustSeeds":
		_0x14EA5 = 28800;
		break;
	default:
		_0x14EA5 = 0;
		break
	};
	if (getTrowelTypeData()[3] == 0)
	{
		return _0x14EA5
	};
	var _0x174A7 = getTrowelTypeData()[3] / 100;
	return parseInt(_0x14EA5 * (1 - _0x174A7))
}

function getBurnRate()
{
	var _0x17001 = 1;
	switch (getOvenType())
	{
	case "bronzeOven":
		_0x17001 = 0.5;
		break;
	case "ironOven":
		_0x17001 = 0.4;
		break;
	case "silverOven":
		_0x17001 = 0.3;
		break;
	case "goldOven":
		_0x17001 = 0.2;
		break;
	case "promethiumOven":
		_0x17001 = 0.1;
		break;
	case "titaniumOven":
		_0x17001 = 0.05;
		break
	};
	if (getItem("researcherCooking") >= 3)
	{
		_0x17001 -= 0.05
	};
	return _0x17001
}

function getOvenType()
{
	var _0x1613D = "titaniumOven";
	if (getItem(_0x1613D) == 1)
	{
		return _0x1613D
	};
	var _0x1613D = "promethiumOven";
	if (getItem(_0x1613D) == 1)
	{
		return _0x1613D
	};
	var _0x1613D = "goldOven";
	if (getItem(_0x1613D) == 1)
	{
		return _0x1613D
	};
	var _0x1613D = "silverOven";
	if (getItem(_0x1613D) == 1)
	{
		return _0x1613D
	};
	var _0x1613D = "ironOven";
	if (getItem(_0x1613D) == 1)
	{
		return _0x1613D
	};
	var _0x1613D = "bronzeOven";
	if (getItem(_0x1613D) == 1)
	{
		return _0x1613D
	}
}

function refreshSeedListTab()
{
	var _0x15049 = document.getElementById("farming-seedList-section");
	var _0x15A44 = "<center>";
	var _0x1613D = "";
	_0x1613D = "dottedGreenLeafSeeds";
	rarity = getSeedDropRate(_0x1613D);
	if (getItem(_0x1613D + "BobTotal") > 0)
	{
		_0x15A44 += "<div class=\'mobile-style\' style=\'background-image:url(images/background16.jpg)\'>";
		_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "DOTTED GREEN";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:white;font-size:12pt;\'>1/" + formatNumber(rarity) + "</span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1613D + "BobTotal") + "</span>";
		_0x15A44 += "</span>";
		_0x15A44 += "</div>"
	};
	_0x1613D = "greenLeafSeeds";
	rarity = getSeedDropRate(_0x1613D);
	if (getItem(_0x1613D + "BobTotal") > 0)
	{
		_0x15A44 += "<div class=\'mobile-style\' style=\'background-image:url(images/background16.jpg)\'>";
		_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "GREEN LEAF";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:white;font-size:12pt;\'>1/" + formatNumber(rarity) + "</span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1613D + "BobTotal") + "</span>";
		_0x15A44 += "</span>";
		_0x15A44 += "</div>"
	};
	_0x1613D = "limeLeafSeeds";
	rarity = getSeedDropRate(_0x1613D);
	if (getItem(_0x1613D + "BobTotal") > 0)
	{
		_0x15A44 += "<div class=\'mobile-style\' style=\'background-image:url(images/background16.jpg)\'>";
		_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "LIME LEAF";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:white;font-size:12pt;\'>1/" + formatNumber(rarity) + "</span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1613D + "BobTotal") + "</span>";
		_0x15A44 += "</span>";
		_0x15A44 += "</div>"
	};
	_0x1613D = "goldLeafSeeds";
	rarity = getSeedDropRate(_0x1613D);
	if (getItem(_0x1613D + "BobTotal") > 0)
	{
		_0x15A44 += "<div class=\'mobile-style\' style=\'background-image:url(images/background16.jpg)\'>";
		_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "GOLD LEAF";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:white;font-size:12pt;\'>1/" + formatNumber(rarity) + "</span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1613D + "BobTotal") + "</span>";
		_0x15A44 += "</span>";
		_0x15A44 += "</div>"
	};
	_0x1613D = "crystalLeafSeeds";
	rarity = getSeedDropRate(_0x1613D);
	if (getItem(_0x1613D + "BobTotal") > 0)
	{
		_0x15A44 += "<div class=\'mobile-style\' style=\'background-image:url(images/background16.jpg)\'>";
		_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "CRYSTAL LEAF";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:white;font-size:12pt;\'>1/" + formatNumber(rarity) + "</span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1613D + "BobTotal") + "</span>";
		_0x15A44 += "</span>";
		_0x15A44 += "</div>"
	};
	_0x1613D = "stripedGoldLeafSeeds";
	rarity = getSeedDropRate(_0x1613D);
	if (getItem(_0x1613D + "BobTotal") > 0)
	{
		_0x15A44 += "<div class=\'mobile-style\' style=\'background-image:url(images/background16.jpg)\'>";
		_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "STRIPED GOLD";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:white;font-size:12pt;\'>1/" + formatNumber(rarity) + "</span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1613D + "BobTotal") + "</span>";
		_0x15A44 += "</span>";
		_0x15A44 += "</div>"
	};
	_0x1613D = "stripedCrystalLeafSeeds";
	rarity = getSeedDropRate(_0x1613D);
	if (getItem(_0x1613D + "BobTotal") > 0)
	{
		_0x15A44 += "<div class=\'mobile-style\' style=\'background-image:url(images/background16.jpg)\'>";
		_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "STRIPED CRYSTAL";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:white;font-size:12pt;\'>1/" + formatNumber(rarity) + "</span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1613D + "BobTotal") + "</span>";
		_0x15A44 += "</span>";
		_0x15A44 += "</div>"
	};
	_0x1613D = "redMushroomSeeds";
	rarity = getSeedDropRate(_0x1613D);
	if (getItem(_0x1613D + "BobTotal") > 0)
	{
		_0x15A44 += "<div class=\'mobile-style\' style=\'background-image:url(images/background7.jpg)\'>";
		_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "RED MUSHROOM";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:white;font-size:12pt;\'>1/" + formatNumber(rarity) + "</span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1613D + "BobTotal") + "</span>";
		_0x15A44 += "</span>";
		_0x15A44 += "</div>"
	};
	_0x1613D = "blewitMushroomSeeds";
	rarity = getSeedDropRate(_0x1613D);
	if (getItem(_0x1613D + "BobTotal") > 0)
	{
		_0x15A44 += "<div class=\'mobile-style\' style=\'background-image:url(images/background7.jpg)\'>";
		_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "BLEWIT MUSH";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:white;font-size:12pt;\'>1/" + formatNumber(rarity) + "</span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1613D + "BobTotal") + "</span>";
		_0x15A44 += "</span>";
		_0x15A44 += "</div>"
	};
	_0x1613D = "snapegrassSeeds";
	rarity = getSeedDropRate(_0x1613D);
	if (getItem(_0x1613D + "BobTotal") > 0)
	{
		_0x15A44 += "<div class=\'mobile-style\' style=\'background-image:url(images/background7.jpg)\'>";
		_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "SNAPEGRASS";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:white;font-size:12pt;\'>1/" + formatNumber(rarity) + "</span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1613D + "BobTotal") + "</span>";
		_0x15A44 += "</span>";
		_0x15A44 += "</div>"
	};
	_0x1613D = "stardustSeeds";
	rarity = getSeedDropRate(_0x1613D);
	if (getItem(_0x1613D + "BobTotal") > 0)
	{
		_0x15A44 += "<div class=\'mobile-style\' style=\'background-image:url(images/background_light.png)\'>";
		_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "STARDUST SEEDS";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:white;font-size:12pt;\'>1/" + formatNumber(rarity) + "</span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1613D + "BobTotal") + "</span>";
		_0x15A44 += "</span>";
		_0x15A44 += "</div>"
	};
	_0x1613D = "treeSeeds";
	rarity = getSeedDropRate(_0x1613D);
	if (getItem(_0x1613D + "Chopped") > 0)
	{
		_0x15A44 += "<div class=\'mobile-style\' style=\'background-image:url(images/background18.jpg)\'>";
		_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "TREE";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:white;font-size:12pt;color:grey\'>N/A</span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1613D + "Chopped") + "</span>";
		_0x15A44 += "</span>";
		_0x15A44 += "</div>"
	};
	_0x1613D = "oakTreeSeeds";
	rarity = getSeedDropRate(_0x1613D);
	if (getItem(_0x1613D + "Chopped") > 0)
	{
		_0x15A44 += "<div class=\'mobile-style\' style=\'background-image:url(images/background18.jpg)\'>";
		_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "OAK TREE";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:white;font-size:12pt;color:grey\'>N/A</span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1613D + "Chopped") + "</span>";
		_0x15A44 += "</span>";
		_0x15A44 += "</div>"
	};
	_0x1613D = "willowTreeSeeds";
	rarity = getSeedDropRate(_0x1613D);
	if (getItem(_0x1613D + "Chopped") > 0)
	{
		_0x15A44 += "<div class=\'mobile-style\' style=\'background-image:url(images/background18.jpg)\'>";
		_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "WILLOW TREE";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:white;font-size:12pt;color:grey\'>N/A</span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1613D + "Chopped") + "</span>";
		_0x15A44 += "</span>";
		_0x15A44 += "</div>"
	};
	_0x1613D = "bambooTreeSeeds";
	rarity = getSeedDropRate(_0x1613D);
	if (getItem(_0x1613D + "Chopped") > 0)
	{
		_0x15A44 += "<div class=\'mobile-style\' style=\'background-image:url(images/background18.jpg)\'>";
		_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "BAMBOO TREE";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:white;font-size:12pt;color:grey\'>N/A</span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1613D + "Chopped") + "</span>";
		_0x15A44 += "</span>";
		_0x15A44 += "</div>"
	};
	_0x1613D = "appleTreeSeeds";
	rarity = getSeedDropRate(_0x1613D);
	if (getItem(_0x1613D + "Chopped") > 0)
	{
		_0x15A44 += "<div class=\'mobile-style\' style=\'background-image:url(images/background18.jpg)\'>";
		_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "APPLE TREE";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:white;font-size:12pt;color:grey\'>N/A</span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1613D + "Chopped") + "</span>";
		_0x15A44 += "</span>";
		_0x15A44 += "</div>"
	};
	_0x1613D = "mapleTreeSeeds";
	rarity = getSeedDropRate(_0x1613D);
	if (getItem(_0x1613D + "Chopped") > 0)
	{
		_0x15A44 += "<div class=\'mobile-style\' style=\'background-image:url(images/background18.jpg)\'>";
		_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "MAPLE TREE";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:white;font-size:12pt;color:grey\'>N/A</span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1613D + "Chopped") + "</span>";
		_0x15A44 += "</span>";
		_0x15A44 += "</div>"
	};
	_0x1613D = "lavaTreeSeeds";
	rarity = getSeedDropRate(_0x1613D);
	if (getItem(_0x1613D + "Chopped") > 0)
	{
		_0x15A44 += "<div class=\'mobile-style\' style=\'background-image:url(images/background18.jpg)\'>";
		_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "LAVA TREE";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:white;font-size:12pt;color:grey\'>N/A</span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1613D + "Chopped") + "</span>";
		_0x15A44 += "</span>";
		_0x15A44 += "</div>"
	};
	_0x1613D = "bananaTreeSeeds";
	rarity = getSeedDropRate(_0x1613D);
	if (getItem(_0x1613D + "Chopped") > 0)
	{
		_0x15A44 += "<div class=\'mobile-style\' style=\'background-image:url(images/background18.jpg)\'>";
		_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "BANANA TREE";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:white;font-size:12pt;color:grey\'>N/A</span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1613D + "Chopped") + "</span>";
		_0x15A44 += "</span>";
		_0x15A44 += "</div>"
	};
	_0x1613D = "pineTreeSeeds";
	rarity = getSeedDropRate(_0x1613D);
	if (getItem(_0x1613D + "Chopped") > 0)
	{
		_0x15A44 += "<div class=\'mobile-style\' style=\'background-image:url(images/background18.jpg)\'>";
		_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "PINE TREE";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:white;font-size:12pt;color:grey\'>N/A</span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1613D + "Chopped") + "</span>";
		_0x15A44 += "</span>";
		_0x15A44 += "</div>"
	};
	_0x1613D = "stardustTreeSeeds";
	rarity = getSeedDropRate(_0x1613D);
	if (getItem(_0x1613D + "Chopped") > 0)
	{
		_0x15A44 += "<div class=\'mobile-style\' style=\'background-image:url(images/background18.jpg)\'>";
		_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "STARDUST TREE";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:white;font-size:12pt;color:grey\'>N/A</span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1613D + "Chopped") + "</span>";
		_0x15A44 += "</span>";
		_0x15A44 += "</div>"
	};
	_0x1613D = "palmTreeSeeds";
	rarity = getSeedDropRate(_0x1613D);
	if (getItem(_0x1613D + "Chopped") > 0)
	{
		_0x15A44 += "<div class=\'mobile-style\' style=\'background-image:url(images/background18.jpg)\'>";
		_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "PALM TREE";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:white;font-size:12pt;color:grey\'>N/A</span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1613D + "Chopped") + "</span>";
		_0x15A44 += "</span>";
		_0x15A44 += "</div>"
	};
	_0x15A44 += "</center>";
	_0x15049.innerHTML = _0x15A44
}

function doSkyCrystalShake()
{
	$("#body").effect("shake"
	, {
		direction: "left"
		, times: 40
		, distance: 10
	}, 10000);
	setTimeout(function ()
	{
		confirmDialogue("images/bob.png", "What\'s going on!", "Close", "", "SHAKE_SKYCRYSTAL=1")
	}, 10000)
}

function shakeDungeon()
{
	$("#body").effect("shake"
	, {
		direction: "left"
		, times: 40
		, distance: 10
	}, 5000);
	setTimeout(function ()
	{
		confirmDialogue("images/kingsKnightIcon.png", "OH NO!", "Close", "", "")
	}, 6000)
}

function refreshBoundOrbs()
{
	var _0x15049 = document.getElementById("pirate-section");
	var _0x15A44 = "<center>";
	var _0x18EC4 = "background-image:url(images/background19.jpg)";
	var _0x1611A = "";
	_0x1611A = "blueFurnaceOrb";
	if (getItem(_0x1611A + "Bound") > 0)
	{
		_0x15A44 += "<div class=\'mobile-style\' style=\'" + _0x18EC4 + ";max-height:300px;height:300px;vertical-align:text-top\'>";
		_0x15A44 += "<img src=\'images/" + _0x1611A + ".png\' />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + getItemName(_0x1611A).toUpperCase();
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:grey;font-size:12pt;\'>" + getOrbDescription(_0x1611A) + "</span>";
		_0x15A44 += "<br />";
		_0x15A44 += "</span>";
		_0x15A44 += "</div>"
	};
	_0x1611A = "blueWoodcuttingOrb";
	if (getItem(_0x1611A + "Bound") > 0)
	{
		_0x15A44 += "<div class=\'mobile-style\' style=\'" + _0x18EC4 + ";max-height:300px;height:300px;vertical-align:text-top\'>";
		_0x15A44 += "<img src=\'images/" + _0x1611A + ".png\' />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + getItemName(_0x1611A).toUpperCase();
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:grey;font-size:12pt;\'>" + getOrbDescription(_0x1611A) + "</span>";
		_0x15A44 += "<br />";
		_0x15A44 += "</span>";
		_0x15A44 += "</div>"
	};
	_0x1611A = "blueOreOrb";
	if (getItem(_0x1611A + "Bound") > 0)
	{
		_0x15A44 += "<div class=\'mobile-style\' style=\'" + _0x18EC4 + ";max-height:300px;height:300px;vertical-align:text-top\'>";
		_0x15A44 += "<img src=\'images/" + _0x1611A + ".png\' />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + getItemName(_0x1611A).toUpperCase();
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:grey;font-size:12pt;\'>" + getOrbDescription(_0x1611A) + "</span>";
		_0x15A44 += "<br />";
		_0x15A44 += "</span>";
		_0x15A44 += "</div>"
	};
	_0x1611A = "blueOilWellOrb";
	if (getItem(_0x1611A + "Bound") > 0)
	{
		_0x15A44 += "<div class=\'mobile-style\' style=\'" + _0x18EC4 + ";max-height:300px;height:300px;vertical-align:text-top\'>";
		_0x15A44 += "<img src=\'images/" + _0x1611A + ".png\' />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + getItemName(_0x1611A).toUpperCase();
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:grey;font-size:12pt;\'>" + getOrbDescription(_0x1611A) + "</span>";
		_0x15A44 += "<br />";
		_0x15A44 += "</span>";
		_0x15A44 += "</div>"
	};
	_0x1611A = "blueManaOrb";
	if (getItem(_0x1611A + "Bound") > 0)
	{
		_0x15A44 += "<div class=\'mobile-style\' style=\'" + _0x18EC4 + ";max-height:300px;height:300px;vertical-align:text-top\'>";
		_0x15A44 += "<img src=\'images/" + _0x1611A + ".png\' />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + getItemName(_0x1611A).toUpperCase();
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:grey;font-size:12pt;\'>" + getOrbDescription(_0x1611A) + "</span>";
		_0x15A44 += "<br />";
		_0x15A44 += "</span>";
		_0x15A44 += "</div>"
	};
	_0x18EC4 = "background-image:url(images/background20.jpg)";
	_0x1611A = "greenFishingOrb";
	if (getItem(_0x1611A + "Bound") > 0)
	{
		_0x15A44 += "<div class=\'mobile-style\' style=\'" + _0x18EC4 + ";max-height:300px;height:300px;vertical-align:text-top\'>";
		_0x15A44 += "<img src=\'images/" + _0x1611A + ".png\' />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + getItemName(_0x1611A).toUpperCase();
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:grey;font-size:12pt;\'>" + getOrbDescription(_0x1611A) + "</span>";
		_0x15A44 += "<br />";
		_0x15A44 += "</span>";
		_0x15A44 += "</div>"
	};
	_0x1611A = "greenRocketOrb";
	if (getItem(_0x1611A + "Bound") > 0)
	{
		_0x15A44 += "<div class=\'mobile-style\' style=\'" + _0x18EC4 + ";max-height:300px;height:300px;vertical-align:text-top\'>";
		_0x15A44 += "<img src=\'images/" + _0x1611A + ".png\' />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + getItemName(_0x1611A).toUpperCase();
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:grey;font-size:12pt;\'>" + getOrbDescription(_0x1611A) + "</span>";
		_0x15A44 += "<br />";
		_0x15A44 += "</span>";
		_0x15A44 += "</div>"
	};
	_0x1611A = "greenOilFactoryOrb";
	if (getItem(_0x1611A + "Bound") > 0)
	{
		_0x15A44 += "<div class=\'mobile-style\' style=\'" + _0x18EC4 + ";max-height:300px;height:300px;vertical-align:text-top\'>";
		_0x15A44 += "<img src=\'images/" + _0x1611A + ".png\' />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + getItemName(_0x1611A).toUpperCase();
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:grey;font-size:12pt;\'>" + getOrbDescription(_0x1611A) + "</span>";
		_0x15A44 += "<br />";
		_0x15A44 += "</span>";
		_0x15A44 += "</div>"
	};
	_0x1611A = "greenShinyMonsterOrb";
	if (getItem(_0x1611A + "Bound") > 0)
	{
		_0x15A44 += "<div class=\'mobile-style\' style=\'" + _0x18EC4 + ";max-height:300px;height:300px;vertical-align:text-top\'>";
		_0x15A44 += "<img src=\'images/" + _0x1611A + ".png\' />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + getItemName(_0x1611A).toUpperCase();
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:grey;font-size:12pt;\'>" + getOrbDescription(_0x1611A) + "</span>";
		_0x15A44 += "<br />";
		_0x15A44 += "</span>";
		_0x15A44 += "</div>"
	};
	_0x1611A = "greenShinyWoodcuttingOrb";
	if (getItem(_0x1611A + "Bound") > 0)
	{
		_0x15A44 += "<div class=\'mobile-style\' style=\'" + _0x18EC4 + ";max-height:300px;height:300px;vertical-align:text-top\'>";
		_0x15A44 += "<img src=\'images/" + _0x1611A + ".png\' />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + getItemName(_0x1611A).toUpperCase();
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:grey;font-size:12pt;\'>" + getOrbDescription(_0x1611A) + "</span>";
		_0x15A44 += "<br />";
		_0x15A44 += "</span>";
		_0x15A44 += "</div>"
	};
	_0x1611A = "greenShinyFarmingOrb";
	if (getItem(_0x1611A + "Bound") > 0)
	{
		_0x15A44 += "<div class=\'mobile-style\' style=\'" + _0x18EC4 + ";max-height:300px;height:300px;vertical-align:text-top\'>";
		_0x15A44 += "<img src=\'images/" + _0x1611A + ".png\' />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + getItemName(_0x1611A).toUpperCase();
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:grey;font-size:12pt;\'>" + getOrbDescription(_0x1611A) + "</span>";
		_0x15A44 += "<br />";
		_0x15A44 += "</span>";
		_0x15A44 += "</div>"
	};
	_0x15A44 += "</center>";
	if (_0x15A44 == "<center></center>")
	{
		_0x15A44 = "<center>You do not have any orbs.</center>"
	};
	_0x15049.innerHTML = _0x15A44
}

function refreshTreeListTab()
{
	var _0x15049 = document.getElementById("woodcutting-treeList-section");
	var _0x15A44 = "<center>";
	var _0x1613D = "";
	var _0x14F9A = "";
	var _0x14D47 = "";
	var _0x18EC4 = "background-image:url(images/background16.jpg)";
	var _0x199FA = "<img src=\'images/treeListLocked.png\' style=\'float:left;)\' class=\'img-100\' />";
	var _0x157AB = "";
	_0x1613D = "tree";
	rarity = "";
	if (getItem(_0x1613D + "ChoppedTotal") > 0)
	{
		_0x14D47 = _0x1613D;
		rarity = "Common";
		_0x157AB = "1";
		backgroundImageStyle = _0x18EC4;
		_0x14F9A = "<img src=\'images/" + _0x1613D + ".png\' style=\'float:left;\' class=\'img-100\' />"
	}
	else
	{
		_0x14D47 = "???";
		backgroundImageStyle = "";
		rarity = "";
		_0x157AB = "1";
		_0x14F9A = _0x199FA;
		backgroundImageStyle = ""
	};
	_0x15A44 += "<div class=\'mobile-style\' style=\'" + backgroundImageStyle + "\'>";
	_0x15A44 += _0x14F9A;
	_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x14D47.toUpperCase();
	_0x15A44 += "<br />";
	_0x15A44 += "<span style=\'color:white;font-size:12pt;\'>" + rarity + "</span>";
	_0x15A44 += "<br />";
	_0x15A44 += "<span style=\'color:grey;font-size:12pt;\'>Level " + _0x157AB + "</span>";
	_0x15A44 += "<br />";
	_0x15A44 += "<br />";
	_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Chopped " + getItem(_0x1613D + "ChoppedTotal") + "</span>";
	_0x15A44 += "</span>";
	_0x15A44 += "</div>";
	_0x1613D = "oakTree";
	rarity = "";
	if (getItem(_0x1613D + "ChoppedTotal") > 0)
	{
		_0x14D47 = getItemName(_0x1613D).toUpperCase();
		rarity = "Common";
		_0x157AB = "15";
		backgroundImageStyle = _0x18EC4;
		_0x14F9A = "<img src=\'images/" + _0x1613D + ".png\' style=\'float:left;\' class=\'img-100\' />"
	}
	else
	{
		_0x14D47 = "???";
		rarity = "";
		_0x157AB = "15";
		_0x14F9A = _0x199FA;
		backgroundImageStyle = ""
	};
	_0x15A44 += "<div class=\'mobile-style\' style=\'" + backgroundImageStyle + "\'>";
	_0x15A44 += _0x14F9A;
	_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x14D47;
	_0x15A44 += "<br />";
	_0x15A44 += "<span style=\'color:white;font-size:12pt;\'>" + rarity + "</span>";
	_0x15A44 += "<br />";
	_0x15A44 += "<span style=\'color:grey;font-size:12pt;\'>Level " + _0x157AB + "</span>";
	_0x15A44 += "<br />";
	_0x15A44 += "<br />";
	_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Chopped " + getItem(_0x1613D + "ChoppedTotal") + "</span>";
	_0x15A44 += "</span>";
	_0x15A44 += "</div>";
	_0x1613D = "willowTree";
	rarity = "";
	if (getItem(_0x1613D + "ChoppedTotal") > 0)
	{
		_0x14D47 = getItemName(_0x1613D).toUpperCase();
		rarity = "Common";
		_0x157AB = "30";
		backgroundImageStyle = _0x18EC4;
		_0x14F9A = "<img src=\'images/" + _0x1613D + ".png\' style=\'float:left;\' class=\'img-100\' />"
	}
	else
	{
		backgroundImageStyle = "";
		_0x14D47 = "???";
		_0x157AB = "30";
		rarity = "";
		_0x14F9A = _0x199FA
	};
	_0x15A44 += "<div class=\'mobile-style\' style=\'" + backgroundImageStyle + "\'>";
	_0x15A44 += _0x14F9A;
	_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x14D47;
	_0x15A44 += "<br />";
	_0x15A44 += "<span style=\'color:white;font-size:12pt;\'>" + rarity + "</span>";
	_0x15A44 += "<br />";
	_0x15A44 += "<span style=\'color:grey;font-size:12pt;\'>Level " + _0x157AB + "</span>";
	_0x15A44 += "<br />";
	_0x15A44 += "<br />";
	_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Chopped " + getItem(_0x1613D + "ChoppedTotal") + "</span>";
	_0x15A44 += "</span>";
	_0x15A44 += "</div>";
	_0x1613D = "bambooTree";
	rarity = "Uncommon";
	_0x157AB = "40";
	if (getItem(_0x1613D + "ChoppedTotal") > 0)
	{
		_0x14D47 = getItemName(_0x1613D).toUpperCase();
		backgroundImageStyle = _0x18EC4;
		_0x14F9A = "<img src=\'images/" + _0x1613D + ".png\' style=\'float:left;\' class=\'img-100\' />"
	}
	else
	{
		backgroundImageStyle = "";
		_0x14D47 = "???";
		_0x14F9A = _0x199FA
	};
	_0x15A44 += "<div class=\'mobile-style\' style=\'" + backgroundImageStyle + "\'>";
	_0x15A44 += _0x14F9A;
	_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x14D47;
	_0x15A44 += "<br />";
	_0x15A44 += "<span style=\'color:white;font-size:12pt;\'>" + rarity + "</span>";
	_0x15A44 += "<br />";
	_0x15A44 += "<span style=\'color:grey;font-size:12pt;\'>Level " + _0x157AB + "</span>";
	_0x15A44 += "<br />";
	_0x15A44 += "<br />";
	_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Chopped " + getItem(_0x1613D + "ChoppedTotal") + "</span>";
	_0x15A44 += "</span>";
	_0x15A44 += "</div>";
	if (getItem("researcherWoodcutting") >= 5)
	{
		_0x1613D = "appleTree";
		rarity = "Uncommon";
		_0x157AB = "45";
		if (getItem(_0x1613D + "ChoppedTotal") > 0)
		{
			_0x14D47 = getItemName(_0x1613D).toUpperCase();
			backgroundImageStyle = _0x18EC4;
			_0x14F9A = "<img src=\'images/" + _0x1613D + ".png\' style=\'float:left;\' class=\'img-100\' />"
		}
		else
		{
			backgroundImageStyle = "";
			_0x14D47 = "???";
			_0x14F9A = _0x199FA
		};
		_0x15A44 += "<div class=\'mobile-style\' style=\'" + backgroundImageStyle + "\'>";
		_0x15A44 += _0x14F9A;
		_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x14D47;
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:white;font-size:12pt;\'>" + rarity + "</span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:grey;font-size:12pt;\'>Level " + _0x157AB + "</span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Chopped " + getItem(_0x1613D + "ChoppedTotal") + "</span>";
		_0x15A44 += "</span>";
		_0x15A44 += "</div>"
	};
	_0x1613D = "mapleTree";
	rarity = "Uncommon";
	_0x157AB = "50";
	if (getItem(_0x1613D + "ChoppedTotal") > 0)
	{
		_0x14D47 = getItemName(_0x1613D).toUpperCase();
		backgroundImageStyle = _0x18EC4;
		_0x14F9A = "<img src=\'images/" + _0x1613D + ".png\' style=\'float:left;\' class=\'img-100\' />"
	}
	else
	{
		backgroundImageStyle = "";
		_0x14D47 = "???";
		_0x14F9A = _0x199FA
	};
	_0x15A44 += "<div class=\'mobile-style\' style=\'" + backgroundImageStyle + "\'>";
	_0x15A44 += _0x14F9A;
	_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x14D47;
	_0x15A44 += "<br />";
	_0x15A44 += "<span style=\'color:white;font-size:12pt;\'>" + rarity + "</span>";
	_0x15A44 += "<br />";
	_0x15A44 += "<span style=\'color:grey;font-size:12pt;\'>Level " + _0x157AB + "</span>";
	_0x15A44 += "<br />";
	_0x15A44 += "<br />";
	_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Chopped " + getItem(_0x1613D + "ChoppedTotal") + "</span>";
	_0x15A44 += "</span>";
	_0x15A44 += "</div>";
	_0x1613D = "lavaTree";
	rarity = "Rare";
	_0x157AB = "60";
	if (getItem(_0x1613D + "ChoppedTotal") > 0)
	{
		_0x14D47 = getItemName(_0x1613D).toUpperCase();
		backgroundImageStyle = _0x18EC4;
		_0x14F9A = "<img src=\'images/" + _0x1613D + ".png\' style=\'float:left;\' class=\'img-100\' />"
	}
	else
	{
		backgroundImageStyle = "";
		_0x14D47 = "???";
		_0x14F9A = _0x199FA
	};
	_0x15A44 += "<div class=\'mobile-style\' style=\'" + backgroundImageStyle + "\'>";
	_0x15A44 += _0x14F9A;
	_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x14D47;
	_0x15A44 += "<br />";
	_0x15A44 += "<span style=\'color:white;font-size:12pt;\'>" + rarity + "</span>";
	_0x15A44 += "<br />";
	_0x15A44 += "<span style=\'color:grey;font-size:12pt;\'>Level " + _0x157AB + "</span>";
	_0x15A44 += "<br />";
	_0x15A44 += "<br />";
	_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Chopped " + getItem(_0x1613D + "ChoppedTotal") + "</span>";
	_0x15A44 += "</span>";
	_0x15A44 += "</div>";
	if (getItem("researcherWoodcutting") >= 5)
	{
		_0x1613D = "bananaTree";
		rarity = "Rare";
		_0x157AB = "63";
		if (getItem(_0x1613D + "ChoppedTotal") > 0)
		{
			_0x14D47 = getItemName(_0x1613D).toUpperCase();
			backgroundImageStyle = _0x18EC4;
			_0x14F9A = "<img src=\'images/" + _0x1613D + ".png\' style=\'float:left;\' class=\'img-100\' />"
		}
		else
		{
			backgroundImageStyle = "";
			_0x14D47 = "???";
			_0x14F9A = _0x199FA
		};
		_0x15A44 += "<div class=\'mobile-style\' style=\'" + backgroundImageStyle + "\'>";
		_0x15A44 += _0x14F9A;
		_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x14D47;
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:white;font-size:12pt;\'>" + rarity + "</span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:grey;font-size:12pt;\'>Level " + _0x157AB + "</span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Chopped " + getItem(_0x1613D + "ChoppedTotal") + "</span>";
		_0x15A44 += "</span>";
		_0x15A44 += "</div>"
	};
	_0x1613D = "pineTree";
	rarity = "Rare";
	_0x157AB = "65";
	if (getItem(_0x1613D + "ChoppedTotal") > 0)
	{
		_0x14D47 = getItemName(_0x1613D).toUpperCase();
		backgroundImageStyle = _0x18EC4;
		_0x14F9A = "<img src=\'images/" + _0x1613D + ".png\' style=\'float:left;\' class=\'img-100\' />"
	}
	else
	{
		backgroundImageStyle = "";
		_0x14D47 = "???";
		_0x14F9A = _0x199FA
	};
	_0x15A44 += "<div class=\'mobile-style\' style=\'" + backgroundImageStyle + "\'>";
	_0x15A44 += _0x14F9A;
	_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x14D47;
	_0x15A44 += "<br />";
	_0x15A44 += "<span style=\'color:white;font-size:12pt;\'>" + rarity + "</span>";
	_0x15A44 += "<br />";
	_0x15A44 += "<span style=\'color:grey;font-size:12pt;\'>Level " + _0x157AB + "</span>";
	_0x15A44 += "<br />";
	_0x15A44 += "<br />";
	_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Chopped " + getItem(_0x1613D + "ChoppedTotal") + "</span>";
	_0x15A44 += "</span>";
	_0x15A44 += "</div>";
	_0x1613D = "stardustTree";
	rarity = "Rare";
	_0x157AB = "70";
	if (getItem(_0x1613D + "ChoppedTotal") > 0)
	{
		_0x14D47 = getItemName(_0x1613D).toUpperCase();
		backgroundImageStyle = _0x18EC4;
		_0x14F9A = "<img src=\'images/" + _0x1613D + ".png\' style=\'float:left;\' class=\'img-100\' />"
	}
	else
	{
		backgroundImageStyle = "";
		_0x14D47 = "???";
		_0x14F9A = _0x199FA
	};
	_0x15A44 += "<div class=\'mobile-style\' style=\'" + backgroundImageStyle + "\'>";
	_0x15A44 += _0x14F9A;
	_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x14D47;
	_0x15A44 += "<br />";
	_0x15A44 += "<span style=\'color:white;font-size:12pt;\'>" + rarity + "</span>";
	_0x15A44 += "<br />";
	_0x15A44 += "<span style=\'color:grey;font-size:12pt;\'>Level " + _0x157AB + "</span>";
	_0x15A44 += "<br />";
	_0x15A44 += "<br />";
	_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Chopped " + getItem(_0x1613D + "ChoppedTotal") + "</span>";
	_0x15A44 += "</span>";
	_0x15A44 += "</div>";
	if (getItem("researcherWoodcutting") >= 5)
	{
		_0x1613D = "palmTree";
		rarity = "Very Rare";
		_0x157AB = "75";
		if (getItem(_0x1613D + "ChoppedTotal") > 0)
		{
			_0x14D47 = getItemName(_0x1613D).toUpperCase();
			backgroundImageStyle = _0x18EC4;
			_0x14F9A = "<img src=\'images/" + _0x1613D + ".png\' style=\'float:left;\' class=\'img-100\' />"
		}
		else
		{
			backgroundImageStyle = "";
			_0x14D47 = "???";
			_0x14F9A = _0x199FA
		};
		_0x15A44 += "<div class=\'mobile-style\' style=\'" + backgroundImageStyle + "\'>";
		_0x15A44 += _0x14F9A;
		_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x14D47;
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:white;font-size:12pt;\'>" + rarity + "</span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:grey;font-size:12pt;\'>Level " + _0x157AB + "</span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Chopped " + getItem(_0x1613D + "ChoppedTotal") + "</span>";
		_0x15A44 += "</span>";
		_0x15A44 += "</div>"
	};
	_0x15A44 += "</center>";
	_0x15049.innerHTML = _0x15A44
}

function refreshGemListTab()
{
	var _0x15049 = document.getElementById("mining-gemList-section");
	var _0x15A44 = "<center>";
	var _0x1613D = "";
	_0x1613D = "sapphire";
	_0x15A44 += "<div class=\'mobile-style\'>";
	_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' style=\'float:left;\' class=\'img-100\' />";
	_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x1613D.toUpperCase();
	_0x15A44 += "<br />";
	_0x15A44 += "<span style=\'color:white;font-size:12pt;\'>1/100,000</span>";
	_0x15A44 += "<br />";
	_0x15A44 += "<br />";
	_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem("sapphireMined") + "</span>";
	if (getItem("researcherMining") >= 5)
	{
		var _0x19045 = "miningScrollSapphire";
		var _0x19022 = getItem(_0x19045 + "Total") > 0;
		var _0x151ED = "x.png";
		if (_0x19022)
		{
			_0x151ED = "check.png"
		};
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'><img src=\'images/" + _0x19045 + ".png\' class=\'img-20 />\' /> <img src=\'images/" + _0x151ED + "\' class=\'img-20\' /><br /><span style=\'color:grey;\'>(+" + formatNumber(getItem(_0x19045 + "XpTotal")) + " XP)</span>"
	};
	_0x15A44 += "</span>";
	_0x15A44 += "</div>";
	_0x1613D = "emerald";
	_0x15A44 += "<div class=\'mobile-style\'>";
	_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' style=\'float:left;\' class=\'img-100\' />";
	_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x1613D.toUpperCase();
	_0x15A44 += "<br />";
	_0x15A44 += "<span style=\'color:white;font-size:12pt;\'>1/250,000</span>";
	_0x15A44 += "<br />";
	_0x15A44 += "<br />";
	_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1613D + "Mined") + "</span>";
	if (getItem("researcherMining") >= 5)
	{
		var _0x19045 = "miningScrollEmerald";
		var _0x19022 = getItem(_0x19045 + "Total") > 0;
		var _0x151ED = "x.png";
		if (_0x19022)
		{
			_0x151ED = "check.png"
		};
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'><img src=\'images/" + _0x19045 + ".png\' class=\'img-20 />\' /> <img src=\'images/" + _0x151ED + "\' class=\'img-20\' /><br /><span style=\'color:grey;\'>(+" + formatNumber(getItem(_0x19045 + "XpTotal")) + " XP)</span>"
	};
	_0x15A44 += "</span>";
	_0x15A44 += "</div>";
	_0x1613D = "ruby";
	_0x15A44 += "<div class=\'mobile-style\'>";
	_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' style=\'float:left;\' class=\'img-100\' />";
	_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x1613D.toUpperCase();
	_0x15A44 += "<br />";
	_0x15A44 += "<span style=\'color:white;font-size:12pt;\'>1/500,000</span>";
	_0x15A44 += "<br />";
	_0x15A44 += "<br />";
	_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1613D + "Mined") + "</span>";
	if (getItem("researcherMining") >= 5)
	{
		var _0x19045 = "miningScrollRuby";
		var _0x19022 = getItem(_0x19045 + "Total") > 0;
		var _0x151ED = "x.png";
		if (_0x19022)
		{
			_0x151ED = "check.png"
		};
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'><img src=\'images/" + _0x19045 + ".png\' class=\'img-20 />\' /> <img src=\'images/" + _0x151ED + "\' class=\'img-20\' /><br /><span style=\'color:grey;\'>(+" + formatNumber(getItem(_0x19045 + "XpTotal")) + " XP)</span>"
	};
	_0x15A44 += "</span>";
	_0x15A44 += "</div>";
	_0x1613D = "diamond";
	_0x15A44 += "<div class=\'mobile-style\'>";
	_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' style=\'float:left;\' class=\'img-100\' />";
	_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x1613D.toUpperCase();
	_0x15A44 += "<br />";
	_0x15A44 += "<span style=\'color:white;font-size:12pt;\'>1/1,000,000</span>";
	_0x15A44 += "<br />";
	_0x15A44 += "<br />";
	_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1613D + "Mined") + "</span>";
	if (getItem("researcherMining") >= 5)
	{
		var _0x19045 = "miningScrollDiamond";
		var _0x19022 = getItem(_0x19045 + "Total") > 0;
		var _0x151ED = "x.png";
		if (_0x19022)
		{
			_0x151ED = "check.png"
		};
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'><img src=\'images/" + _0x19045 + ".png\' class=\'img-20 />\' /> <img src=\'images/" + _0x151ED + "\' class=\'img-20\' /><br /><span style=\'color:grey;\'>(+" + formatNumber(getItem(_0x19045 + "XpTotal")) + " XP)</span>"
	};
	_0x15A44 += "</span>";
	_0x15A44 += "</div>";
	_0x15049.innerHTML = _0x15A44;
	_0x1613D = "bloodDiamond";
	_0x15A44 += "<div class=\'mobile-style\'>";
	_0x15A44 += "<img src=\'images/" + _0x1613D + ".gif\' style=\'float:left;\' class=\'img-100\' />";
	_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "BLOOD DIAMOND";
	_0x15A44 += "<br />";
	_0x15A44 += "<span style=\'color:white;font-size:12pt;\'>1/???</span>";
	_0x15A44 += "<br />";
	_0x15A44 += "<br />";
	_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1613D + "Mined") + "</span>";
	if (getItem("researcherMining") >= 5)
	{
		var _0x19045 = "miningScrollBloodDiamond";
		var _0x19022 = getItem(_0x19045 + "Total") > 0;
		var _0x151ED = "x.png";
		if (_0x19022)
		{
			_0x151ED = "check.png"
		};
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'><img src=\'images/" + _0x19045 + ".png\' class=\'img-20 />\' /> <img src=\'images/" + _0x151ED + "\' class=\'img-20\' /><br /><span style=\'color:grey;\'>(+" + formatNumber(getItem(_0x19045 + "XpTotal")) + " XP)</span>"
	};
	_0x15A44 += "</span>";
	_0x15A44 += "</div>";
	var _0x15210 = 0;
	var _0x160D4 = "style=\'color:red\'";
	if (getItem("researcherMining") >= 2)
	{
		_0x15210 = 5;
		if (getLevel(getItem("miningXp")) >= _0x15210)
		{
			_0x160D4 = "style=\'color:lime\'"
		};
		_0x1613D = "smallStardustPrism";
		_0x15A44 += "<div class=\'mobile-style\'>";
		_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' style=\'float:left;\' class=\'img-100\' />";
		_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "SMALL";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:white;font-size:12pt;\'>1/4320  <br /><span style=\'color:grey\'><img src=\'images/miningSkill.png\' class=\'img-20\' /> <span " + _0x160D4 + ">" + _0x15210 + "</span></span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1613D + "Mined") + "</span>";
		if (getItem("researcherMining") >= 5)
		{
			var _0x19045 = "miningScrollSmallStardustPrism";
			var _0x19022 = getItem(_0x19045 + "Total") > 0;
			var _0x151ED = "x.png";
			if (_0x19022)
			{
				_0x151ED = "check.png"
			};
			_0x15A44 += "<br />";
			_0x15A44 += "<br />";
			_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'><img src=\'images/" + _0x19045 + ".png\' class=\'img-20 />\' /> <img src=\'images/" + _0x151ED + "\' class=\'img-20\' /><br /><span style=\'color:grey;\'>(+" + formatNumber(getItem(_0x19045 + "XpTotal")) + " XP)</span>"
		};
		_0x15A44 += "</span>";
		_0x15A44 += "</div>";
		_0x15210 = 20;
		_0x160D4 = "style=\'color:red\'";
		if (getLevel(getItem("miningXp")) >= _0x15210)
		{
			_0x160D4 = "style=\'color:lime\'"
		};
		_0x1613D = "mediumStardustPrism";
		_0x15A44 += "<div class=\'mobile-style\'>";
		_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' style=\'float:left;\' class=\'img-100\' />";
		_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "MEDIUM";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:white;font-size:12pt;\'>1/66,000  <br /><span style=\'color:grey\'><img src=\'images/miningSkill.png\' class=\'img-20\' /> <span " + _0x160D4 + ">" + _0x15210 + "</span></span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1613D + "Mined") + "</span>";
		if (getItem("researcherMining") >= 5)
		{
			var _0x19045 = "miningScrollMediumStardustPrism";
			var _0x19022 = getItem(_0x19045 + "Total") > 0;
			var _0x151ED = "x.png";
			if (_0x19022)
			{
				_0x151ED = "check.png"
			};
			_0x15A44 += "<br />";
			_0x15A44 += "<br />";
			_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'><img src=\'images/" + _0x19045 + ".png\' class=\'img-20 />\' /> <img src=\'images/" + _0x151ED + "\' class=\'img-20\' /><br /><span style=\'color:grey;\'>(+" + formatNumber(getItem(_0x19045 + "XpTotal")) + " XP)</span>"
		};
		_0x15A44 += "</span>";
		_0x15A44 += "</div>";
		_0x15210 = 50;
		_0x160D4 = "style=\'color:red\'";
		if (getLevel(getItem("miningXp")) >= _0x15210)
		{
			_0x160D4 = "style=\'color:lime\'"
		};
		_0x1613D = "largeStardustPrism";
		_0x15A44 += "<div class=\'mobile-style\'>";
		_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' style=\'float:left;\' class=\'img-100\' />";
		_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "LARGE";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:white;font-size:12pt;\'>1/188,000  <br /><span style=\'color:grey\'><img src=\'images/miningSkill.png\' class=\'img-20\' /> <span " + _0x160D4 + ">" + _0x15210 + "</span></span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1613D + "Mined") + "</span>";
		if (getItem("researcherMining") >= 5)
		{
			var _0x19045 = "miningScrollLargeStardustPrism";
			var _0x19022 = getItem(_0x19045 + "Total") > 0;
			var _0x151ED = "x.png";
			if (_0x19022)
			{
				_0x151ED = "check.png"
			};
			_0x15A44 += "<br />";
			_0x15A44 += "<br />";
			_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'><img src=\'images/" + _0x19045 + ".png\' class=\'img-20 />\' /> <img src=\'images/" + _0x151ED + "\' class=\'img-20\' /><br /><span style=\'color:grey;\'>(+" + formatNumber(getItem(_0x19045 + "XpTotal")) + " XP)</span>"
		};
		_0x15A44 += "</span>";
		_0x15A44 += "</div>";
		_0x15210 = 80;
		_0x160D4 = "style=\'color:red\'";
		if (getLevel(getItem("miningXp")) >= _0x15210)
		{
			_0x160D4 = "style=\'color:lime\'"
		};
		_0x1613D = "hugeStardustPrism";
		_0x15A44 += "<div class=\'mobile-style\'>";
		_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' style=\'float:left;\' class=\'img-100\' />";
		_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "HUGE";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:white;font-size:12pt;\'>1/400,000  <br /><span style=\'color:grey\'><img src=\'images/miningSkill.png\' class=\'img-20\' /> <span " + _0x160D4 + ">" + _0x15210 + "</span></span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1613D + "Mined") + "</span>";
		if (getItem("researcherMining") >= 5)
		{
			var _0x19045 = "miningScrollHugeStardustPrism";
			var _0x19022 = getItem(_0x19045 + "Total") > 0;
			var _0x151ED = "x.png";
			if (_0x19022)
			{
				_0x151ED = "check.png"
			};
			_0x15A44 += "<br />";
			_0x15A44 += "<br />";
			_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'><img src=\'images/" + _0x19045 + ".png\' class=\'img-20 />\' /> <img src=\'images/" + _0x151ED + "\' class=\'img-20\' /><br /><span style=\'color:grey;\'>(+" + formatNumber(getItem(_0x19045 + "XpTotal")) + " XP)</span>"
		};
		_0x15A44 += "</span>";
		_0x15A44 += "</div>"
	};
	var _0x1736C = "none";
	if (getItem("researcherMining") >= 4)
	{
		_0x1736C = "drills";
		_0x1613D = "blueGeode";
		_0x15A44 += "<div class=\'mobile-style\'>";
		_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' style=\'float:left;\' class=\'img-100\' />";
		_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "BLUE GEODE";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:white;font-size:12pt;\'>1/51,840 <br /><span style=\'color:grey\'><img src=\'images/" + _0x1736C + ".png\' class=\'img-20\' /> Per <span>" + getItemName(_0x1736C) + "</span></span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1613D + "Mined") + "</span>";
		if (getItem("researcherMining") >= 5)
		{
			var _0x19045 = "miningScrollBlueGeode";
			var _0x19022 = getItem(_0x19045 + "Total") > 0;
			var _0x151ED = "x.png";
			if (_0x19022)
			{
				_0x151ED = "check.png"
			};
			_0x15A44 += "<br />";
			_0x15A44 += "<br />";
			_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'><img src=\'images/" + _0x19045 + ".png\' class=\'img-20 />\' /> <img src=\'images/" + _0x151ED + "\' class=\'img-20\' /><br /><span style=\'color:grey;\'>(+" + formatNumber(getItem(_0x19045 + "XpTotal")) + " XP)</span>"
		};
		_0x15A44 += "</span>";
		_0x15A44 += "</div>"
	};
	if (getItem("researcherMining") >= 4)
	{
		_0x1736C = "crushers";
		_0x1613D = "greenGeode";
		_0x15A44 += "<div class=\'mobile-style\'>";
		_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' style=\'float:left;\' class=\'img-100\' />";
		_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "GREEN GEODE";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:white;font-size:12pt;\'>1/259,200 <br /><span style=\'color:grey\'><img src=\'images/" + _0x1736C + ".png\' class=\'img-20\' /> Per <span>" + getItemName(_0x1736C) + "</span></span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1613D + "Mined") + "</span>";
		if (getItem("researcherMining") >= 5)
		{
			var _0x19045 = "miningScrollGreenGeode";
			var _0x19022 = getItem(_0x19045 + "Total") > 0;
			var _0x151ED = "x.png";
			if (_0x19022)
			{
				_0x151ED = "check.png"
			};
			_0x15A44 += "<br />";
			_0x15A44 += "<br />";
			_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'><img src=\'images/" + _0x19045 + ".png\' class=\'img-20 />\' /> <img src=\'images/" + _0x151ED + "\' class=\'img-20\' /><br /><span style=\'color:grey;\'>(+" + formatNumber(getItem(_0x19045 + "XpTotal")) + " XP)</span>"
		};
		_0x15A44 += "</span>";
		_0x15A44 += "</div>"
	};
	if (getItem("researcherMining") >= 4)
	{
		_0x1736C = "giantDrills";
		_0x1613D = "redGeode";
		_0x15A44 += "<div class=\'mobile-style\'>";
		_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' style=\'float:left;\' class=\'img-100\' />";
		_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "RED GEODE";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:white;font-size:12pt;\'>1/777,600 <br /><span style=\'color:grey\'><img src=\'images/" + _0x1736C + ".png\' class=\'img-20\' /> Per <span>" + getItemName(_0x1736C) + "</span></span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1613D + "Mined") + "</span>";
		if (getItem("researcherMining") >= 5)
		{
			var _0x19045 = "miningScrollRedGeode";
			var _0x19022 = getItem(_0x19045 + "Total") > 0;
			var _0x151ED = "x.png";
			if (_0x19022)
			{
				_0x151ED = "check.png"
			};
			_0x15A44 += "<br />";
			_0x15A44 += "<br />";
			_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'><img src=\'images/" + _0x19045 + ".png\' class=\'img-20 />\' /> <img src=\'images/" + _0x151ED + "\' class=\'img-20\' /><br /><span style=\'color:grey;\'>(+" + formatNumber(getItem(_0x19045 + "XpTotal")) + " XP)</span>"
		};
		_0x15A44 += "</span>";
		_0x15A44 += "</div>"
	};
	if (getItem("researcherMining") >= 4)
	{
		_0x1736C = "excavators";
		_0x1613D = "purpleGeode";
		_0x15A44 += "<div class=\'mobile-style\'>";
		_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' style=\'float:left;\' class=\'img-100\' />";
		_0x15A44 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "PURPLE GEODE";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'color:white;font-size:12pt;\'>1/1,555,200 <br /><span style=\'color:grey\'><img src=\'images/" + _0x1736C + ".png\' class=\'img-20\' /> Per <span>" + getItemName(_0x1736C) + "</span></span>";
		_0x15A44 += "<br />";
		_0x15A44 += "<br />";
		_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1613D + "Mined") + "</span>";
		if (getItem("researcherMining") >= 5)
		{
			var _0x19045 = "miningScrollPurpleGeode";
			var _0x19022 = getItem(_0x19045 + "Total") > 0;
			var _0x151ED = "x.png";
			if (_0x19022)
			{
				_0x151ED = "check.png"
			};
			_0x15A44 += "<br />";
			_0x15A44 += "<br />";
			_0x15A44 += "<span style=\'font-size:12pt;color:yellow\'><img src=\'images/" + _0x19045 + ".png\' class=\'img-20 />\' /> <img src=\'images/" + _0x151ED + "\' class=\'img-20\' /><br /><span style=\'color:grey;\'>(+" + formatNumber(getItem(_0x19045 + "XpTotal")) + " XP)</span>"
		};
		_0x15A44 += "</span>";
		_0x15A44 += "</div>"
	};
	_0x15A44 += "</center>";
	_0x15049.innerHTML = _0x15A44
}

function refreshMonsterHpBar()
{
	var _0x19068 = parseInt(getItem("monsterHp") / getItem("monsterMaxHp") * 100);
	if (_0x19068 > 100)
	{
		_0x19068 = 100
	};
	document.getElementById("monster-inner-hp-bar").style.minWidth = _0x19068 + "%"
}
var selectedSeed = "none";

function clicksSeed(_0x16741)
{
	if (getItem("farmingXp") == 0)
	{
		confirmDialogue("images/" + _0x16741 + ".png", "Select a farming patch to plant your seed.", "Close", "", "")
	};
	if (selectedSeed == "none")
	{
		selectedSeed = _0x16741;
		document.getElementById("item-box-" + _0x16741).style.border = "5px solid orange"
	}
	else
	{
		if (selectedSeed == _0x16741)
		{
			selectedSeed = "none";
			resetSeedItemBoxBorders()
		}
		else
		{
			resetSeedItemBoxBorders();
			selectedSeed = _0x16741;
			document.getElementById("item-box-" + _0x16741).style.border = "5px solid orange"
		}
	}
}

function completeCemeteryTombs()
{
	$("#combat-map-div").effect("shake"
	, {
		direction: "left"
		, times: 40
		, distance: 3
	}, 2000, function ()
	{
		confirmDialogue("images/magicSkill.png", "A spellscroll has spawned nearby.", "Close", "", "")
	})
}

function clicksFarmingPlot(_0x16327)
{
	if (selectedSeed == "none")
	{
		if (getItem("plotUnlocked" + _0x16327) == 0)
		{
			confirmDialogue("images/farm_none.png", "Are you sure you want to unlock this patch?", "Unlock", "Cancel", "HARVEST=" + _0x16327)
		}
		else
		{
			sendBytes("HARVEST=" + _0x16327)
		}
	}
	else
	{
		sendBytes("PLANT=" + selectedSeed + "~" + _0x16327);
		setTimeout(function ()
		{
			if (freePlotsAmount() == 0)
			{
				selectedSeed = "none";
				resetSeedItemBoxBorders()
			}
		}, 1000)
	}
}

function incrementSpice(_0x14D8D, _0x15D8C)
{
	var _0x17858 = document.getElementById("dialogue-spices-" + _0x14D8D);
	var _0x17835 = parseInt(_0x17858.innerHTML);
	_0x17835 += _0x15D8C;
	if (_0x17835 > 4)
	{
		_0x17835 = 4
	};
	if (_0x17835 < 0)
	{
		_0x17835 = 0
	};
	if (_0x17835 > getItem(_0x14D8D + "Spices"))
	{
		return
	};
	_0x17858.innerHTML = _0x17835
}

function mixSpices()
{
	var _0x182DF = document.getElementById("dialogue-spices-" + "yellow").innerHTML;
	var _0x18299 = document.getElementById("dialogue-spices-" + "green").innerHTML;
	var _0x182BC = document.getElementById("dialogue-spices-" + "red").innerHTML;
	var _0x18276 = document.getElementById("dialogue-spices-" + "blue").innerHTML;
	sendBytes("MIX_QUEST_SPICES=" + _0x182DF + "~" + _0x18299 + "~" + _0x182BC + "~" + _0x18276)
}

function openDialogueSpices()
{
	document.getElementById("dialogue-spices-" + "yellow").innerHTML = 0;
	document.getElementById("dialogue-spices-" + "green").innerHTML = 0;
	document.getElementById("dialogue-spices-" + "red").innerHTML = 0;
	document.getElementById("dialogue-spices-" + "blue").innerHTML = 0;
	openDialogue("dialogue-spices")
}

function clicksWoodcuttingPlot(_0x16327)
{
	if (getItem("treeUnlocked" + _0x16327) == 0)
	{
		confirmDialogue("images/woodcuttingSkill.png", "Are you sure you want to unlock this patch?", "Unlock", "Cancel", "CHOP_TREE=" + _0x16327)
	}
	else
	{
		sendBytes("CHOP_TREE=" + _0x16327)
	}
}

function freePlotsAmount()
{
	var _0x16EA3 = 0;
	for (var _0x14C0C = 1; _0x14C0C <= 6; _0x14C0C++)
	{
		if (getItem("plotUnlocked" + _0x14C0C) == 1 && getItemString("plot" + _0x14C0C) == "none")
		{
			_0x16EA3++
		}
	};
	return _0x16EA3
}

function resetSeedItemBoxBorders()
{
	for (var _0x14C0C = 0; _0x14C0C < global_seedMap.length; _0x14C0C++)
	{
		var _0x17ACE = global_seedMap[_0x14C0C];
		if (document.getElementById("item-box-" + _0x17ACE.name) != null)
		{
			document.getElementById("item-box-" + _0x17ACE.name).style.border = "1px solid grey"
		}
	}
}

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

function openSwapFishingToolsDialogue()
{
	openDialogue("dialogue-swap-fishingTool-do")
}

function eatFoodDialogue(_0x16AF2)
{
	document.getElementById("dialogue-consumeFood-title").innerHTML = getItemName(_0x16AF2.cookedFoodName).toUpperCase() + "<br /><span style=\'font-size:12pt;color:grey\'><img src=\'images/energy.png\' class=\'img-30\' /> " + formatNumber(_0x16AF2.energy) + " energy each.</span>";
	document.getElementById("dialogue-consumeFood-hidden").value = _0x16AF2.cookedFoodName;
	openDialogue("dialogue-consumeFood");
	document.getElementById("dialogue-consumeFood-input").focus();
	document.getElementById("dialogue-consumeFood-input").value = 1
}

function openInputDialogue(_0x151A7, _0x18AF0, _0x18ACD, _0x18A64, _0x18555, _0x18578, _0x15EC7, _0x15EEA, _0x18AAA, _0x18A41, _0x14EEB, _0x15E81)
{
	var _0x18A87 = "";
	if (_0x14EEB != "")
	{
		_0x18A87 = "<span style=\'color:grey;cursor:pointer;\' onclick=\'this.innerHTML = \"<br /><br />" + _0x14EEB + "<br /><br />\"\'>(more info)</span>"
	};
	var _0x15A44 = "";
	_0x15A44 += "<div class=\'dialogue\' id=\'wild-dialogue\' style=\'display:none;\'>";
	_0x15A44 += "<center>";
	_0x15A44 += "<h1>" + _0x151A7 + "</h1>";
	_0x15A44 += "<div>" + "<img src=\'" + _0x18AF0 + "\' class=\'img-150\' />" + "</div>";
	_0x15A44 += "<br /><br />";
	_0x15A44 += "<div style=\'display:block\' class=\'input-multi-values-div\'>";
	_0x15A44 += "<table width=\'100%\'>";
	_0x15A44 += "<tr>";
	if (_0x18ACD == "ironBucket")
	{
		_0x15A44 += "<td colspan=\'4\'>How many " + getItemName("silverBuckets").toLowerCase() + "? " + _0x18A87 + "<input type=\'text\' value=\'" + _0x18A64 + "\' id=\'dialogue-wild-input\' /></td>"
	}
	else
	{
		_0x15A44 += "<td colspan=\'4\'>How many " + getItemName(_0x18ACD).toLowerCase() + "? " + _0x18A87 + "<input type=\'text\' value=\'" + _0x18A64 + "\' id=\'dialogue-wild-input\' /></td>"
	};
	_0x15A44 += "</tr>";
	_0x15A44 += "<tr>";
	_0x15A44 += "<td width=\'25%\'><div id=\'dialogue-wild-input-button-1\' class=\'input-button-values\'>ONE</div></td><td width=\'25%\'><div id=\'dialogue-wild-input-button-2\' class=\'input-button-values\'>25%</div></td><td width=\'25%\'><div id=\'dialogue-wild-input-button-3\' class=\'input-button-values\'>50%</div></td><td width=\'25%\'><div id=\'dialogue-wild-input-button-4\' class=\'input-button-values\'>ALL</div></td>";
	_0x15A44 += "</tr>";
	_0x15A44 += "</table>";
	_0x15A44 += "</div>";
	_0x15A44 += "<br />";
	_0x15A44 += "<div id=\'dialogue-wild-htmlboxes-area\'></div>";
	_0x15A44 += "<br />";
	_0x15A44 += "<div style=\'background-color:#b3ffff\' id=\'dialogue-wild-input-confirm\' class=\'dialogue-button\'>" + _0x18AAA + "</div><br />";
	_0x15A44 += "<div onclick=\'closeDialogue(\"wild-dialogue\")\' class=\'dialogue-button\'>Close</div><br />";
	_0x15A44 += "</center>";
	_0x15A44 += "</div>";
	document.getElementById("dynamic-dialogue-area").innerHTML = _0x15A44;
	if (_0x18555.length > 0)
	{
		var _0x18604 = (_0x18555[0] == "xp_icon")
	};
	document.getElementById("dialogue-wild-input-confirm").onclick = function ()
	{
		sendBytes(_0x18A41 + "=" + _0x18ACD + "~" + convertNumberWithLetrtsKMBToNumber(document.getElementById("dialogue-wild-input").value));
		closeDialogue("wild-dialogue")
	};
	document.getElementById("dialogue-wild-input-button-1").onclick = function ()
	{
		changeValueOfInput(_0x15EC7, _0x15EEA, "dialogue-wild-input", "ONE", _0x15E81);
		onKeyUpWildInputDialogue(_0x18555, _0x18578, _0x15EC7, _0x15EEA, convertNumberWithLetrtsKMBToNumber(document.getElementById("dialogue-wild-input").value))
	};
	document.getElementById("dialogue-wild-input-button-2").onclick = function ()
	{
		changeValueOfInput(_0x15EC7, _0x15EEA, "dialogue-wild-input", "25%", _0x15E81);
		onKeyUpWildInputDialogue(_0x18555, _0x18578, _0x15EC7, _0x15EEA, convertNumberWithLetrtsKMBToNumber(document.getElementById("dialogue-wild-input").value))
	};
	document.getElementById("dialogue-wild-input-button-3").onclick = function ()
	{
		changeValueOfInput(_0x15EC7, _0x15EEA, "dialogue-wild-input", "50%", _0x15E81);
		onKeyUpWildInputDialogue(_0x18555, _0x18578, _0x15EC7, _0x15EEA, convertNumberWithLetrtsKMBToNumber(document.getElementById("dialogue-wild-input").value))
	};
	document.getElementById("dialogue-wild-input-button-4").onclick = function ()
	{
		changeValueOfInput(_0x15EC7, _0x15EEA, "dialogue-wild-input", "ALL", _0x15E81);
		onKeyUpWildInputDialogue(_0x18555, _0x18578, _0x15EC7, _0x15EEA, convertNumberWithLetrtsKMBToNumber(document.getElementById("dialogue-wild-input").value))
	};
	document.getElementById("dialogue-wild-input").onkeyup = function ()
	{
		onKeyUpWildInputDialogue(_0x18555, _0x18578, _0x15EC7, _0x15EEA, convertNumberWithLetrtsKMBToNumber(document.getElementById("dialogue-wild-input").value))
	};
	openDialogue("wild-dialogue");
	onKeyUpWildInputDialogue(_0x18555, _0x18578, _0x15EC7, _0x15EEA, 1)
}

function onKeyUpWildInputDialogue(_0x18555, _0x18578, _0x15EC7, _0x15EEA, _0x1859B)
{
	var _0x18604 = (_0x18555[0] == "xp_icon");
	document.getElementById("dialogue-wild-htmlboxes-area");
	var _0x15A44 = "";
	for (var _0x14C0C = 0; _0x14C0C < _0x18578.length; _0x14C0C++)
	{
		var _0x169B7 = "html-box-check-or-check";
		var _0x185BE = _0x18578[_0x14C0C] * _0x1859B;
		var _0x185E1 = formatNumber(_0x185BE);
		if (_0x185BE == 0)
		{
			_0x185E1 = "???"
		};
		if (_0x18555[_0x14C0C] == "magicXp")
		{
			_0x15A44 += "<div style=\'border:1px solid purple;display:inline-block;background-color:#ff99cc;font-size:16pt\' class=" + _0x169B7 + ">";
			_0x15A44 += "<img src=\'images/" + "magicSkill" + ".png\' class=\'img-50\' /> +" + formatNumber(_0x185E1) + " XP";
			_0x15A44 += "</div>"
		}
		else
		{
			_0x15A44 += "<div class=" + _0x169B7 + ">";
			_0x15A44 += "<img src=\'images/" + _0x18555[_0x14C0C] + ".png\' class=\'img-50\' /> +" + formatNumber(_0x185E1);
			_0x15A44 += "</div>"
		}
	};
	for (var _0x14C0C = 0; _0x14C0C < _0x15EC7.length; _0x14C0C++)
	{
		var _0x169B7 = "html-box-check-or-x";
		var _0x169FD = "<img src=\'images/x.png\' class=\'img-20\' />";
		var _0x16A20 = _0x15EEA[_0x14C0C] * _0x1859B;
		if (_0x18604 && _0x15EC7[_0x14C0C] == "stardust")
		{
			_0x16A20 = _0x15EEA[_0x14C0C] * _0x18578[0] * _0x1859B
		};
		if (getItem(_0x15EC7[_0x14C0C]) >= _0x16A20)
		{
			_0x169FD = "<img src=\'images/check.png\' class=\'img-20\' />";
			_0x169B7 = "html-box-check-or-check"
		};
		_0x15A44 += "<div class=" + _0x169B7 + ">";
		_0x15A44 += "<img src=\'images/" + _0x15EC7[_0x14C0C] + ".png\' class=\'img-50\' /> " + formatNumber(_0x16A20) + " " + _0x169FD;
		_0x15A44 += "</div>"
	};
	document.getElementById("dialogue-wild-htmlboxes-area").innerHTML = _0x15A44
}

function ownsStew()
{
	return getItem("lavaStew") > 0 || getItem("chainStew") > 0 || getItem("oysterStew") > 0 || getItem("iceBonesStew") > 0 || getItem("fishStew") > 0 || getItem("bananaStew") > 0 || getItem("appleStew") > 0 || getItem("cheeseStew") > 0 || getItem("honeyStew") > 0
}

function bonemealBinDialgue()
{
	var _0x14DB0 = getBonemealTypeData();
	var _0x15A67 = _0x14DB0[2];
	var _0x15A21 = _0x14DB0[3];
	if (_0x15A21 == "INF")
	{
		_0x15A21 = "&#8734;"
	};
	var _0x15A8A = "<br /><br /><span style=\'color:grey;font-size:12pt;\'> <img src=\'images/" + _0x15A67 + ".png\' class=\'img-20\' /> Upgrade your bonemeal bin to increase its capacity.</span>";
	if (_0x15A67 == "none")
	{
		_0x15A8A = ""
	};
	var _0x15A44 = "<b style=\'font-size:16pt;\'><img src=\'images/bonemeal_dark.png\' class=\'img-60\' /> Current Bonemeal: " + getItem("bonemeal") + "/" + _0x15A21 + " <img src=\'images/bonemeal_dark.png\' class=\'img-60\' /></b>" + _0x15A8A;
	if (_0x15A67 == "none")
	{
		confirmDialogue("images/" + _0x14DB0[0] + ".png", _0x15A44, "Close", "", "")
	}
	else
	{
		confirmDialogue("images/" + _0x14DB0[0] + ".png", _0x15A44, "Socket Gem", "Close", "SOCKET=bonemealBin")
	}
}

function changeValueOfInput(_0x15EC7, _0x15EEA, _0x15E5E, _0x15E3B, _0x15E81)
{
	var _0x15DF5 = 0;
	var _0x15EA4 = [];
	for (var _0x14C0C = 0; _0x14C0C < _0x15EC7.length; _0x14C0C++)
	{
		_0x15EA4[_0x14C0C] = parseInt(getItem(_0x15EC7[_0x14C0C]) / _0x15EEA[_0x14C0C])
	};
	_0x15DF5 = Math.min.apply(Math, _0x15EA4);
	switch (_0x15E3B)
	{
	case "ONE":
		document.getElementById(_0x15E5E).value = 1;
		break;
	case "25%":
		document.getElementById(_0x15E5E).value = parseInt(_0x15DF5 * 0.25);
		break;
	case "50%":
		document.getElementById(_0x15E5E).value = parseInt(_0x15DF5 * 0.50);
		break;
	case "ALL":
		document.getElementById(_0x15E5E).value = _0x15DF5;
		break
	};
	if (_0x15DF5 > _0x15E81)
	{
		document.getElementById(_0x15E5E).value = _0x15E81;
		switch (_0x15E3B)
		{
		case "25%":
			document.getElementById(_0x15E5E).value = parseInt(_0x15E81 * 0.25);
			break;
		case "50%":
			document.getElementById(_0x15E5E).value = parseInt(_0x15E81 * 0.50);
			break
		}
	}
}

function showMiningScrollsFound()
{
	var _0x15A44 = "";
	_0x15A44 += "<table class=\'basic-table\' width=\'100%\'>";
	var _0x1613D = "";
	var _0x19EC3 = false;
	_0x1613D = "miningScrollSapphire";
	_0x19EC3 = getItem(_0x1613D + "Total") > 0;
	_0x15A44 += "<tr>";
	_0x15A44 += "<td>";
	_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-50 />\'";
	_0x15A44 += "</td>";
	_0x15A44 += "<td>";
	_0x15A44 += "Sapphire Scroll";
	_0x15A44 += "</td>";
	_0x15A44 += "<td>";
	_0x15A44 += "Finding sapphires will now grant mining XP.";
	_0x15A44 += "</td>";
	_0x15A44 += "<td>";
	if (_0x19EC3)
	{
		_0x15A44 += "<img src=\'images/check.png\' class=\'img-30\' />"
	}
	else
	{
		_0x15A44 += "<img src=\'images/x.png\' class=\'img-30\' />"
	};
	_0x15A44 += "</td>";
	_0x15A44 += "</tr>";
	_0x1613D = "miningScrollEmerald";
	_0x19EC3 = getItem(_0x1613D + "Total") > 0;
	_0x15A44 += "<tr>";
	_0x15A44 += "<td>";
	_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-50 />\'";
	_0x15A44 += "</td>";
	_0x15A44 += "<td>";
	_0x15A44 += "Emerald Scroll";
	_0x15A44 += "</td>";
	_0x15A44 += "<td>";
	_0x15A44 += "Finding emeralds will now grant mining XP.";
	_0x15A44 += "</td>";
	_0x15A44 += "<td>";
	if (_0x19EC3)
	{
		_0x15A44 += "<img src=\'images/check.png\' class=\'img-30\' />"
	}
	else
	{
		_0x15A44 += "<img src=\'images/x.png\' class=\'img-30\' />"
	};
	_0x15A44 += "</td>";
	_0x15A44 += "</tr>";
	_0x1613D = "miningScrollRuby";
	_0x19EC3 = getItem(_0x1613D + "Total") > 0;
	_0x15A44 += "<tr>";
	_0x15A44 += "<td>";
	_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-50 />\'";
	_0x15A44 += "</td>";
	_0x15A44 += "<td>";
	_0x15A44 += "Ruby Scroll";
	_0x15A44 += "</td>";
	_0x15A44 += "<td>";
	_0x15A44 += "Finding ruby will now grant mining XP.";
	_0x15A44 += "</td>";
	_0x15A44 += "<td>";
	if (_0x19EC3)
	{
		_0x15A44 += "<img src=\'images/check.png\' class=\'img-30\' />"
	}
	else
	{
		_0x15A44 += "<img src=\'images/x.png\' class=\'img-30\' />"
	};
	_0x15A44 += "</td>";
	_0x15A44 += "</tr>";
	_0x1613D = "miningScrollDiamond";
	_0x19EC3 = getItem(_0x1613D + "Total") > 0;
	_0x15A44 += "<tr>";
	_0x15A44 += "<td>";
	_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-50 />\'";
	_0x15A44 += "</td>";
	_0x15A44 += "<td>";
	_0x15A44 += "Diamond Scroll";
	_0x15A44 += "</td>";
	_0x15A44 += "<td>";
	_0x15A44 += "Finding diamond will now grant mining XP.";
	_0x15A44 += "</td>";
	_0x15A44 += "<td>";
	if (_0x19EC3)
	{
		_0x15A44 += "<img src=\'images/check.png\' class=\'img-30\' />"
	}
	else
	{
		_0x15A44 += "<img src=\'images/x.png\' class=\'img-30\' />"
	};
	_0x15A44 += "</td>";
	_0x15A44 += "</tr>";
	_0x1613D = "miningScrollBloodDiamond";
	_0x19EC3 = getItem(_0x1613D + "Total") > 0;
	_0x15A44 += "<tr>";
	_0x15A44 += "<td>";
	_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-50 />\'";
	_0x15A44 += "</td>";
	_0x15A44 += "<td>";
	_0x15A44 += "Blood Diamond Scroll";
	_0x15A44 += "</td>";
	_0x15A44 += "<td>";
	_0x15A44 += "Finding blood diamonds will now grant mining XP.";
	_0x15A44 += "</td>";
	_0x15A44 += "<td>";
	if (_0x19EC3)
	{
		_0x15A44 += "<img src=\'images/check.png\' class=\'img-30\' />"
	}
	else
	{
		_0x15A44 += "<img src=\'images/x.png\' class=\'img-30\' />"
	};
	_0x15A44 += "</td>";
	_0x15A44 += "</tr>";
	_0x1613D = "miningScrollSmallStardustPrism";
	_0x19EC3 = getItem(_0x1613D + "Total") > 0;
	_0x15A44 += "<tr>";
	_0x15A44 += "<td>";
	_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-50 />\'";
	_0x15A44 += "</td>";
	_0x15A44 += "<td>";
	_0x15A44 += "Small Stardust Prism";
	_0x15A44 += "</td>";
	_0x15A44 += "<td>";
	_0x15A44 += "Finding small stardust prism will now grant mining XP.";
	_0x15A44 += "</td>";
	_0x15A44 += "<td>";
	if (_0x19EC3)
	{
		_0x15A44 += "<img src=\'images/check.png\' class=\'img-30\' />"
	}
	else
	{
		_0x15A44 += "<img src=\'images/x.png\' class=\'img-30\' />"
	};
	_0x15A44 += "</td>";
	_0x15A44 += "</tr>";
	_0x1613D = "miningScrollMediumStardustPrism";
	_0x19EC3 = getItem(_0x1613D + "Total") > 0;
	_0x15A44 += "<tr>";
	_0x15A44 += "<td>";
	_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-50 />\'";
	_0x15A44 += "</td>";
	_0x15A44 += "<td>";
	_0x15A44 += "Medium Stardust Prism";
	_0x15A44 += "</td>";
	_0x15A44 += "<td>";
	_0x15A44 += "Finding medium stardust prism will now grant mining XP.";
	_0x15A44 += "</td>";
	_0x15A44 += "<td>";
	if (_0x19EC3)
	{
		_0x15A44 += "<img src=\'images/check.png\' class=\'img-30\' />"
	}
	else
	{
		_0x15A44 += "<img src=\'images/x.png\' class=\'img-30\' />"
	};
	_0x15A44 += "</td>";
	_0x15A44 += "</tr>";
	_0x1613D = "miningScrollLargeStardustPrism";
	_0x19EC3 = getItem(_0x1613D + "Total") > 0;
	_0x15A44 += "<tr>";
	_0x15A44 += "<td>";
	_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-50 />\'";
	_0x15A44 += "</td>";
	_0x15A44 += "<td>";
	_0x15A44 += "Large Stardust Prism";
	_0x15A44 += "</td>";
	_0x15A44 += "<td>";
	_0x15A44 += "Finding large stardust prism will now grant mining XP.";
	_0x15A44 += "</td>";
	_0x15A44 += "<td>";
	if (_0x19EC3)
	{
		_0x15A44 += "<img src=\'images/check.png\' class=\'img-30\' />"
	}
	else
	{
		_0x15A44 += "<img src=\'images/x.png\' class=\'img-30\' />"
	};
	_0x15A44 += "</td>";
	_0x15A44 += "</tr>";
	_0x1613D = "miningScrollHugeStardustPrism";
	_0x19EC3 = getItem(_0x1613D + "Total") > 0;
	_0x15A44 += "<tr>";
	_0x15A44 += "<td>";
	_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-50 />\'";
	_0x15A44 += "</td>";
	_0x15A44 += "<td>";
	_0x15A44 += "Huge Stardust Prism";
	_0x15A44 += "</td>";
	_0x15A44 += "<td>";
	_0x15A44 += "Finding huge stardust prism will now grant mining XP.";
	_0x15A44 += "</td>";
	_0x15A44 += "<td>";
	if (_0x19EC3)
	{
		_0x15A44 += "<img src=\'images/check.png\' class=\'img-30\' />"
	}
	else
	{
		_0x15A44 += "<img src=\'images/x.png\' class=\'img-30\' />"
	};
	_0x15A44 += "</td>";
	_0x15A44 += "</tr>";
	_0x1613D = "miningScrollBlueGeode";
	_0x19EC3 = getItem(_0x1613D + "Total") > 0;
	_0x15A44 += "<tr>";
	_0x15A44 += "<td>";
	_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-50 />\'";
	_0x15A44 += "</td>";
	_0x15A44 += "<td>";
	_0x15A44 += "Blue Geode";
	_0x15A44 += "</td>";
	_0x15A44 += "<td>";
	_0x15A44 += "Finding blue geode\'s will now grant mining XP.";
	_0x15A44 += "</td>";
	_0x15A44 += "<td>";
	if (_0x19EC3)
	{
		_0x15A44 += "<img src=\'images/check.png\' class=\'img-30\' />"
	}
	else
	{
		_0x15A44 += "<img src=\'images/x.png\' class=\'img-30\' />"
	};
	_0x15A44 += "</td>";
	_0x15A44 += "</tr>";
	_0x1613D = "miningScrollGreenGeode";
	_0x19EC3 = getItem(_0x1613D + "Total") > 0;
	_0x15A44 += "<tr>";
	_0x15A44 += "<td>";
	_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-50 />\'";
	_0x15A44 += "</td>";
	_0x15A44 += "<td>";
	_0x15A44 += "Green Geode";
	_0x15A44 += "</td>";
	_0x15A44 += "<td>";
	_0x15A44 += "Finding green geode\'s will now grant mining XP.";
	_0x15A44 += "</td>";
	_0x15A44 += "<td>";
	if (_0x19EC3)
	{
		_0x15A44 += "<img src=\'images/check.png\' class=\'img-30\' />"
	}
	else
	{
		_0x15A44 += "<img src=\'images/x.png\' class=\'img-30\' />"
	};
	_0x15A44 += "</td>";
	_0x15A44 += "</tr>";
	_0x1613D = "miningScrollRedGeode";
	_0x19EC3 = getItem(_0x1613D + "Total") > 0;
	_0x15A44 += "<tr>";
	_0x15A44 += "<td>";
	_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-50 />\'";
	_0x15A44 += "</td>";
	_0x15A44 += "<td>";
	_0x15A44 += "Red Geode";
	_0x15A44 += "</td>";
	_0x15A44 += "<td>";
	_0x15A44 += "Finding red geode\'s will now grant mining XP.";
	_0x15A44 += "</td>";
	_0x15A44 += "<td>";
	if (_0x19EC3)
	{
		_0x15A44 += "<img src=\'images/check.png\' class=\'img-30\' />"
	}
	else
	{
		_0x15A44 += "<img src=\'images/x.png\' class=\'img-30\' />"
	};
	_0x15A44 += "</td>";
	_0x15A44 += "</tr>";
	_0x1613D = "miningScrollPurpleGeode";
	_0x19EC3 = getItem(_0x1613D + "Total") > 0;
	_0x15A44 += "<tr>";
	_0x15A44 += "<td>";
	_0x15A44 += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-50 />\'";
	_0x15A44 += "</td>";
	_0x15A44 += "<td>";
	_0x15A44 += "Purple Geode";
	_0x15A44 += "</td>";
	_0x15A44 += "<td>";
	_0x15A44 += "Finding purple geode\'s will now grant mining XP.";
	_0x15A44 += "</td>";
	_0x15A44 += "<td>";
	if (_0x19EC3)
	{
		_0x15A44 += "<img src=\'images/check.png\' class=\'img-30\' />"
	}
	else
	{
		_0x15A44 += "<img src=\'images/x.png\' class=\'img-30\' />"
	};
	_0x15A44 += "</td>";
	_0x15A44 += "</tr>";
	_0x15A44 += "</table>";
	confirmDialogue("none", _0x15A44, "Close", "", "")
}

function scrollText(_0x14E19, _0x19C4D, _0x19C93)
{
	var _0x14F9A = "";
	if (_0x14E19 != "none")
	{
		_0x14F9A = "<img src=\'" + _0x14E19 + "\' class=\'img-70\' /> "
	};
	var _0x19C70 = $("<div class=\"scroller\" style=\"color:" + _0x19C4D + "\">" + _0x14F9A + _0x19C93 + "</div>").appendTo("body");
	$(_0x19C70).css(
	{
		position: "absolute"
		, left: mouseX - 50
		, top: mouseY - 50
	});
	$(_0x19C70).animate(
	{
		top: "-=50px"
	}, function ()
	{
		$(_0x19C70).fadeOut(1000, function ()
		{
			$(this).remove()
		})
	})
}
var changeTooltipPosition = function (_0x14C75)
{
	var _0x14C98 = _0x14C75.pageX - 8;
	var _0x14CBB = _0x14C75.pageY + 8;
	$("div.tooltip").css(
	{
		top: _0x14CBB
		, left: _0x14C98
	})
};
var showTooltip = function (_0x14C75)
{
	if (document.getElementById(this.getAttribute("data-tooltip-id")) == null)
	{
		return
	};
	$("div.tooltip").remove();
	$("<div class=\"tooltip\">" + document.getElementById(this.getAttribute("data-tooltip-id")).innerHTML + "</div>").appendTo("body");
	changeTooltipPosition(_0x14C75)
};
var hideTooltip = function ()
{
	$("div.tooltip").remove()
};

function refreshTooltips()
{
	if (!global_gameLoaded)
	{
		return
	};
	var _0x1996E = "[data-tooltip-id]";
	var _0x1994B = $(_0x1996E);
	for (var _0x14C0C = 0; _0x14C0C < _0x1994B.length; _0x14C0C++)
	{
		$(_0x1994B[_0x14C0C]).bind(
		{
			mousemove: changeTooltipPosition
			, mouseenter: showTooltip
			, mouseleave: hideTooltip
		})
	}
}

function initializeTooltips()
{
	if (!global_gameLoaded)
	{
		return
	};
	var _0x151CA = "";
	document.getElementById("dynamic-tooltips-area").innerHTML = "";
	for (var _0x14C0C = 0; _0x14C0C < global_foodMap.length; _0x14C0C++)
	{
		var _0x16AF2 = global_foodMap[_0x14C0C];
		if (_0x16AF2.rawFoodName != "none")
		{
			_0x151CA += "<div id=\'tooltip-" + _0x16AF2.rawFoodName + "\' style=\'display:none;\'>";
			_0x151CA += "<h2>" + getItemName(_0x16AF2.rawFoodName) + "</h2>";
			_0x151CA += "<img src=\'images/heat.png\' class=\'img-30\' /> " + formatNumber(_0x16AF2.heat) + " heat";
			_0x151CA += "<br />";
			_0x151CA += "<img src=\'images/energy.png\' class=\'img-30\' /> " + formatNumber(_0x16AF2.energy) + " energy";
			_0x151CA += "<br />";
			_0x151CA += "<img src=\'images/cookingSkill.png\' class=\'img-30\' /> Level " + _0x16AF2.cookLevel + " <span style=\'color:grey\'>(" + formatNumber(_0x16AF2.xp) + " XP)</span>";
			_0x151CA += "<br />";
			_0x151CA += "<hr class=\'hr-thin\' />";
			_0x151CA += _0x16AF2.desc;
			_0x151CA += "</div>"
		};
		_0x151CA += "<div id=\'tooltip-" + _0x16AF2.cookedFoodName + "\' style=\'display:none;\'>";
		_0x151CA += "<h2>" + getItemName(_0x16AF2.cookedFoodName) + "</h2>";
		_0x151CA += "<img src=\'images/energy.png\' class=\'img-30\' /> " + formatNumber(_0x16AF2.energy) + " energy";
		_0x151CA += "<br />";
		_0x151CA += "<hr class=\'hr-thin\' />";
		_0x151CA += _0x16AF2.desc;
		_0x151CA += "</div>"
	};
	for (var _0x14C0C = 0; _0x14C0C < global_seedMap.length; _0x14C0C++)
	{
		var _0x17ACE = global_seedMap[_0x14C0C];
		_0x151CA += "<div id=\'tooltip-" + _0x17ACE.name + "\' style=\'display:none;\'>";
		_0x151CA += "<h2>" + getItemName(_0x17ACE.name) + "</h2>";
		_0x151CA += "<img style=\'margin:3px;\' src=\'images/farmingSkill.png\' class=\'img-30\' /> Level " + formatNumber(_0x17ACE.level) + " <span style=\'color:grey\'>(" + formatNumber(_0x17ACE.xp) + " xp)</span>";
		_0x151CA += "<br />";
		var _0x178C1 = "";
		if (_0x17ACE.stopsDieingAtLevel == 0)
		{
			_0x151CA += "<img style=\'margin:3px;\' src=\'images/" + _0x17ACE.name.substr(0, _0x17ACE.name.length - 5) + ".png\' class=\'img-30\' /> Cannot die <img src=\'images/check.png\' class=\'img-15\' />"
		}
		else
		{
			if (getLevel(getItem("farmingXp")) >= _0x17ACE.stopsDieingAtLevel)
			{
				_0x151CA += "<img style=\'margin:3px;\' src=\'images/" + _0x17ACE.name.substr(0, _0x17ACE.name.length - 5) + ".png\' class=\'img-30\' /> Stops dying level: " + formatNumber(_0x17ACE.stopsDieingAtLevel) + " <img src=\'images/check.png\' class=\'img-15\' />"
			}
			else
			{
				_0x151CA += "<img style=\'margin:3px;\' src=\'images/deadLeaf.png\' class=\'img-30\' /> Stops dying level: " + formatNumber(_0x17ACE.stopsDieingAtLevel) + " <img src=\'images/x.png\' class=\'img-15\' />"
			}
		};
		if (parseInt(_0x17ACE.bonemeal) > 0)
		{
			if (getItem("bonemeal") >= parseInt(_0x17ACE.bonemeal))
			{
				_0x151CA += "<br />";
				_0x151CA += "<img style=\'margin:3px;\' src=\'images/bonemeal.png\' class=\'img-30\' /> Bonemeal: " + formatNumber(parseInt(_0x17ACE.bonemeal)) + " <img src=\'images/check.png\' class=\'img-15\' />"
			}
			else
			{
				_0x151CA += "<br />";
				_0x151CA += "<img style=\'margin:3px;\' src=\'images/bonemeal.png\' class=\'img-30\' /> Bonemeal: " + formatNumber(parseInt(_0x17ACE.bonemeal)) + " <img src=\'images/x.png\' class=\'img-15\' />"
			}
		};
		_0x151CA += "<br />";
		_0x151CA += "<img style=\'margin:3px;\' src=\'images/hourglass_grey.png\' class=\'img-30\' />" + formatTime(_0x17ACE.timer);
		_0x151CA += "<br />";
		_0x151CA += "<hr class=\'hr-thin\' />";
		_0x151CA += _0x17ACE.desc;
		_0x151CA += "</div>"
	};
	for (var _0x14C0C = 0; _0x14C0C < global_machineryMap.length; _0x14C0C++)
	{
		var _0x17A42 = global_machineryMap[_0x14C0C];
		_0x151CA += "<div id=\'tooltip-" + _0x17A42.machineryName + "\' style=\'display:none;\'>";
		_0x151CA += "<div style=\'font-size:16pt;font-weight:bold;margin-top:10px;\'>" + getItemName(_0x17A42.machineryName) + "</div>";
		if (_0x17A42.oil > 0)
		{
			_0x151CA += "<br /><img src=\'images/oil.png\' class=\'img-20\' /> " + _0x17A42.oil
		};
		_0x151CA += "<br />";
		_0x151CA += "<hr class=\'hr-thin\' />";
		var _0x1613D = "";
		var _0x178E4 = "";
		var _0x17907 = "";
		_0x1613D = "stone";
		_0x178E4 = _0x17A42.stoneChance;
		_0x17907 = 86400 / _0x178E4;
		if (_0x17907 % 1 != 0)
		{
			_0x17907 = _0x17907.toFixed(2)
		};
		if (_0x17907 >= 10)
		{
			_0x17907 = formatNumber(parseInt(_0x17907))
		};
		if (getItem(_0x1613D + "Total") > 0)
		{
			_0x151CA += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-20\' /> <b>" + capitalizeFirstLetter(_0x1613D) + ": </b> " + (1 + "/" + formatNumber(_0x178E4) + "<span style=\'color:grey\'> (~" + _0x17907 + " per day)</span>")
		}
		else
		{
			_0x151CA += "<img src=\'images/ore_black.png\' class=\'img-20\' /> <b>???</b><br />"
		};
		_0x151CA += "<br />";
		_0x1613D = "copper";
		_0x178E4 = _0x17A42.copperChance;
		_0x17907 = 86400 / _0x178E4;
		if (_0x17907 % 1 != 0)
		{
			_0x17907 = _0x17907.toFixed(2)
		};
		if (_0x17907 >= 10)
		{
			_0x17907 = formatNumber(parseInt(_0x17907))
		};
		if (getItem(_0x1613D + "Total") > 0)
		{
			_0x151CA += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-20\' /> <b>" + capitalizeFirstLetter(_0x1613D) + ": </b> " + (1 + "/" + formatNumber(_0x178E4) + "<span style=\'color:grey\'> (~" + _0x17907 + " per day)</span>")
		}
		else
		{
			_0x151CA += "<img src=\'images/ore_black.png\' class=\'img-20\' /> <b>???</b>"
		};
		_0x151CA += "<br />";
		_0x1613D = "iron";
		_0x178E4 = _0x17A42.ironChance;
		_0x17907 = 86400 / _0x178E4;
		if (_0x17907 % 1 != 0)
		{
			_0x17907 = _0x17907.toFixed(2)
		};
		if (_0x17907 >= 10)
		{
			_0x17907 = formatNumber(parseInt(_0x17907))
		};
		if (getItem(_0x1613D + "Total") > 0)
		{
			_0x151CA += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-20\' /> <b>" + capitalizeFirstLetter(_0x1613D) + ": </b> " + (1 + "/" + formatNumber(_0x178E4) + "<span style=\'color:grey\'> (~" + _0x17907 + " per day)</span>")
		}
		else
		{
			_0x151CA += "<img src=\'images/ore_black.png\' class=\'img-20\' /> <b>???</b>"
		};
		_0x151CA += "<br />";
		_0x1613D = "silver";
		_0x178E4 = _0x17A42.silverChance;
		_0x17907 = 86400 / _0x178E4;
		if (_0x17907 % 1 != 0)
		{
			_0x17907 = _0x17907.toFixed(2)
		};
		if (_0x17907 >= 10)
		{
			_0x17907 = formatNumber(parseInt(_0x17907))
		};
		if (getItem(_0x1613D + "Total") > 0)
		{
			_0x151CA += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-20\' /> <b>" + capitalizeFirstLetter(_0x1613D) + ": </b> " + (1 + "/" + formatNumber(_0x178E4) + "<span style=\'color:grey\'> (~" + _0x17907 + " per day)</span>")
		}
		else
		{
			_0x151CA += "<img src=\'images/ore_black.png\' class=\'img-20\' /> <b>???</b>"
		};
		_0x151CA += "<br />";
		_0x1613D = "gold";
		_0x178E4 = _0x17A42.goldChance;
		_0x17907 = 86400 / _0x178E4;
		if (_0x17907 % 1 != 0)
		{
			_0x17907 = _0x17907.toFixed(2)
		};
		if (_0x17907 >= 10)
		{
			_0x17907 = formatNumber(parseInt(_0x17907))
		};
		if (getItem(_0x1613D + "Total") > 0)
		{
			_0x151CA += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-20\' /> <b>" + capitalizeFirstLetter(_0x1613D) + ": </b> " + (1 + "/" + formatNumber(_0x178E4) + "<span style=\'color:grey\'> (~" + _0x17907 + " per day)</span>")
		}
		else
		{
			_0x151CA += "<img src=\'images/ore_black.png\' class=\'img-20\' /> <b>???</b>"
		};
		_0x151CA += "<br />";
		_0x1613D = "promethium";
		_0x178E4 = _0x17A42.promethiumChance;
		_0x17907 = 86400 / _0x178E4;
		if (_0x17907 % 1 != 0)
		{
			_0x17907 = _0x17907.toFixed(2)
		};
		if (_0x17907 >= 10)
		{
			_0x17907 = formatNumber(parseInt(_0x17907))
		};
		if (getItem(_0x1613D + "Total") > 0)
		{
			_0x151CA += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-20\' /> <b>" + capitalizeFirstLetter(_0x1613D) + ": </b> " + (1 + "/" + formatNumber(_0x178E4) + "<span style=\'color:grey\'> (~" + _0x17907 + " per day)</span>")
		}
		else
		{
			_0x151CA += "<img src=\'images/ore_black.png\' class=\'img-20\' /> <b>???</b>"
		};
		_0x151CA += "<br />";
		_0x1613D = "titanium";
		_0x178E4 = _0x17A42.titaniumChance;
		_0x17907 = 86400 / _0x178E4;
		if (_0x17907 % 1 != 0)
		{
			_0x17907 = _0x17907.toFixed(2)
		};
		if (_0x17907 >= 10)
		{
			_0x17907 = formatNumber(parseInt(_0x17907))
		};
		if (getItem(_0x1613D + "Total") > 0)
		{
			_0x151CA += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-20\' /> <b>" + capitalizeFirstLetter(_0x1613D) + ": </b> " + (1 + "/" + formatNumber(_0x178E4) + "<span style=\'color:grey\'> (~" + _0x17907 + " per day)</span>")
		}
		else
		{
			_0x151CA += "<img src=\'images/ore_black.png\' class=\'img-20\' /> <b>???</b>"
		};
		_0x151CA += "<br />";
		_0x151CA += "</div>"
	};
	for (var _0x14C0C = 0; _0x14C0C < global_equipmentMap.length; _0x14C0C++)
	{
		var _0x17993 = global_equipmentMap[_0x14C0C];
		_0x151CA += "<div id=\'tooltip-" + _0x17993.name + "\' style=\'display:none;\'>";
		_0x151CA += "<h2>" + getItemName(_0x17993.name) + "</h2>";
		_0x151CA += "<span style=\'font-size:14pt\'>";
		if (_0x17993.type != "none")
		{
			_0x151CA += "<img src=\'images/" + _0x17993.type + ".png\' class=\'img-20\' /> " + getItemName(_0x17993.type) + " Attack";
			_0x151CA += "<br />";
			_0x151CA += "<br />"
		};
		if (_0x17993.attack != "0")
		{
			_0x151CA += "<img src=\'images/attack_black.png\' class=\'img-30\' /> " + (_0x17993.attack);
			_0x151CA += "&nbsp;";
			_0x151CA += "&nbsp;";
			_0x151CA += "&nbsp;";
			_0x151CA += "&nbsp;"
		};
		if (_0x17993.accuracy != "0")
		{
			_0x151CA += "<img src=\'images/accuracy_black.png\' class=\'img-30\' /> " + (_0x17993.accuracy);
			_0x151CA += "&nbsp;";
			_0x151CA += "&nbsp;";
			_0x151CA += "&nbsp;";
			_0x151CA += "&nbsp;"
		};
		if (_0x17993.speed != "0")
		{
			_0x151CA += "<img src=\'images/speed_black.png\' class=\'img-30\' /> " + (_0x17993.speed);
			_0x151CA += "&nbsp;";
			_0x151CA += "&nbsp;";
			_0x151CA += "&nbsp;";
			_0x151CA += "&nbsp;"
		};
		if (_0x17993.defence != "0")
		{
			_0x151CA += "<img src=\'images/defence_black.png\' class=\'img-30\' /> " + (_0x17993.defence);
			_0x151CA += "&nbsp;";
			_0x151CA += "&nbsp;";
			_0x151CA += "&nbsp;";
			_0x151CA += "&nbsp;"
		};
		if (_0x17993.magic != "0")
		{
			_0x151CA += "<img src=\'images/magic_black.png\' class=\'img-30\' /> " + (_0x17993.magic);
			_0x151CA += "&nbsp;";
			_0x151CA += "&nbsp;";
			_0x151CA += "&nbsp;";
			_0x151CA += "&nbsp;"
		};
		_0x151CA += "</span>";
		_0x151CA += "<br />";
		_0x151CA += "<hr class=\'hr-thin\' />";
		_0x151CA += _0x17993.desc;
		_0x151CA += "</div>"
	};
	_0x151CA += generateHTMLGeneralTooltip("tooltip-feather", "feather", "Feathers", "Can be used to make arrows with the crafting skill.<br /><br /><img src=\'images/craftingSkill.png\' class=\'img-30\' /> <b>Click to craft arrows.</b>");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-stardustPickaxe", "stardustPickaxe", "Stardust Pickaxe", "Can be used to convert ores into <img src=\'images/miningSkill.png\' class=\'img-20\' /> <span style=\'color:#804000\'>mining</span> XP at the cost of <img src=\'images/stardustIcon.png\' class=\'img-20\' /> <span style=\'color:#804000\'>stardust</span>.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-stardustHammer", "stardustHammer", "Stardust Hammer", "Can be used to convert bars into <img src=\'images/craftingSkill.png\' class=\'img-20\' /> <span style=\'color:#804000\'>crafting</span> XP at the cost of <img src=\'images/stardustIcon.png\' class=\'img-20\' /> <span style=\'color:#804000\'>stardust</span>.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-stone", "stone", "Stone", "A common ore.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-copper", "copper", "Copper", "Can be smelted into <img src=\'images/bronzeBars.png\' class=\'img-20\' /> bronze bars.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-iron", "iron", "Iron", "Can be smelted into <img src=\'images/ironBars.png\' class=\'img-20\' />  iron bars.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-silver", "silver", "Silver", "Can be smelted into <img src=\'images/silverBars.png\' class=\'img-20\' />  silver bars.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-gold", "gold", "Gold", "Can be smelted into <img src=\'images/goldBars.png\' class=\'img-20\' />  gold bars.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-promethium", "promethium", "Promethium", "Can be smelted into <img src=\'images/promethiumBars.png\' class=\'img-20\' />  promethium bars.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-titanium", "titanium", "Titanium", "Can be smelted into <img src=\'images/titaniumBars.png\' class=\'img-20\' />  titanium bars.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-moonstone", "moonstone", "Moonstone", "A common rock found on the moon.  It can be converted into mining XP.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-marsRock", "marsRock", "Mars Rock", "A common rock found on the moon.  It can be converted into mining XP.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-piratesParrot", "", "Pirate\'s Parrot", "Permanently increases your chance of finding maps from pirate\'s by 50%.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-limeQuartzMineral", "limeQuartzMineral", "Mineral", "Can either be sold for coins or crafted into a ring.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-jadeMineral", "jadeMineral", "Mineral", "Can either be sold for coins or crafted into a ring.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-amethystMineral", "amethystMineral", "Mineral", "Can either be sold for coins or crafted into a ring.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-blueMarbleMineral", "blueMarbleMineral", "Mineral", "Can either be sold for coins or crafted into a ring.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-limoniteMineral", "limoniteMineral", "Mineral", "Can either be sold for coins or crafted into a ring.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-tashmarineMineral", "tashmarineMineral", "Mineral", "Can either be sold for coins or crafted into a ring.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-denseMarbleMineral", "denseMarbleMineral", "Mineral", "Can either be sold for coins or crafted into a ring.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-fluoriteMineral", "fluoriteMineral", "Mineral", "Can either be sold for coins or crafted into a ring.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-purpleQuartzMineral", "purpleQuartzMineral", "Mineral", "Can either be sold for coins or crafted into a ring.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-crystalPrismeMineral", "crystalPrismeMineral", "Mineral", "Can either be sold for coins or crafted into a ring.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-amberMineral", "amberMineral", "Mineral", "Can either be sold for coins or crafted into a ring.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-tanzaniteMineral", "tanzaniteMineral", "Mineral", "Can either be sold for coins or crafted into a ring.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-pearl", "pearl", "Pearl", "Found inside of an oyster.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-giantPearl", "", "Giant Pearl", "<img src=\'images/museum.png\' class=\'img-20\' /> It\'s huge!");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-oyster", "oyster", "Oyster", "Maybe it has a pearl inside.  I can always sell the oyster as a whole if I don\'t want to gamble.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-rarePearl", "rarePearl", "Rare Pearl", "Found inside of a oyster found along the beaches.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-rareGiantPearl", "", "Rare Giant Pearl", "<img src=\'images/museum.png\' class=\'img-20\' /> It\'s huge, and it looks special!");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-specialOyster", "oyster", "Rare Oyster", "Maybe it has a pearl inside.  I can always sell the oyster as a whole if I don\'t want to gamble.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-sharkTooth", "sharkTooth", "Shark\'s Tooth", "<img src=\'images/museum.png\' class=\'img-20\' /> A bite from a shark does over 100 damage!  Ouch!");
	_0x151CA += generateHTMLGeneralTooltip("combat-spell-heal-tooltip", "", "", "<span style=\'font-size:14pt;\'><br /><img src=\'images/largeManaStar.png\' class=\'img-30\' /> 3</span>");
	_0x151CA += generateHTMLGeneralTooltip("combat-spell-poison-tooltip", "", "", "<span style=\'font-size:14pt;\'><br /><img src=\'images/largeManaStar.png\' class=\'img-30\' /> 5</span>");
	_0x151CA += generateHTMLGeneralTooltip("combat-spell-reflect-tooltip", "", "", "<span style=\'font-size:14pt;\'><br /><img src=\'images/largeManaStar.png\' class=\'img-30\' /> 3</span>");
	_0x151CA += generateHTMLGeneralTooltip("combat-spell-fire-tooltip", "", "", "<span style=\'font-size:14pt;\'><br /><img src=\'images/largeManaStar.png\' class=\'img-30\' /> 2</span>");
	_0x151CA += generateHTMLGeneralTooltip("combat-spell-freeze-tooltip", "", "", "<span style=\'font-size:14pt;\'><br /><img src=\'images/largeManaStar.png\' class=\'img-30\' /> 5</span>");
	_0x151CA += generateHTMLGeneralTooltip("combat-spell-ghostScan-tooltip", "", "", "<span style=\'font-size:14pt;\'><br /><img src=\'images/largeManaStar.png\' class=\'img-30\' /> 0</span>");
	_0x151CA += generateHTMLGeneralTooltip("combat-spell-teleport-tooltip", "", "", "<span style=\'font-size:14pt;\'><br /><img src=\'images/largeManaStar.png\' class=\'img-30\' /> 0</span>");
	_0x151CA += generateHTMLGeneralTooltip("combat-spell-invisibility-tooltip", "", "", "<span style=\'font-size:14pt;\'><br /><img src=\'images/largeManaStar.png\' class=\'img-30\' /> 1</span>");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-monsterSigil", "", "Monster Sigil", "Monster sigils are extremely rare drops obtained from fighting in any zone.<br /><br />The drop rate is 1/10\'000.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-holidaySigil", "", "Holiday Sigil", "Holiday sigils can only be obtained during holiday events.  They become tradable every year during their respective holiday.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-eventSigil", "", "Event Sigil", "Event sigils are only obtained after joining none-holiday related events, such as diamond hunt mmo and other.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-bronzeBars", "bronzeBars", "Bronze Bar", "A bar made of copper.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-ironBars", "ironBars", "Iron Bar", "A bar made of iron.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-silverBars", "silverBars", "Silver Bar", "A bar made of silver.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-goldBars", "goldBars", "Gold Bar", "A bar made of gold.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-promethiumBars", "promethiumBars", "Promethium Bar", "A bar made of promethium.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-titaniumBars", "titaniumBars", "Titanium Bar", "A bar made of titanium.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-snakeskin", "snakeskin", "Snakeskin", "<img src=\'images/craftingSkill.png\' class=\'img-20\' /> Click to craft.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-bearFur", "bearFur", "Bear Fur", "<img src=\'images/craftingSkill.png\' class=\'img-20\' /> Click to craft.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-polarBearFur", "polarBearFur", "Polar Bear Fur", "<img src=\'images/craftingSkill.png\' class=\'img-20\' /> Click to craft.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-blackSilk", "blackSilk", "Black Silk", "Obtained from a reaper.<br /><br /><img src=\'images/craftingSkill.png\' class=\'img-20\' /> Click to craft.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-pirate", "", "Pirate", "Arrr, let\'s find some treasures!<br /><br /><span style=\'color:grey\'>Your pirate is constantly looking for maps.  They are very rare.</span>");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-treasureMap", "", "Treasure Map", "A treasure map!  These are quite rare!<br /><br /><span style=\'color:grey\'>You can only hold one of these at a time.</span>");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-greenTreasureMap", "", "Green Treasure Map", "A treasure map!  These maps are very rare!<br /><br /><span style=\'color:grey\'>You can only hold one of these at a time.</span>");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-bluePrints", "bluePrints", "Blueprints", "Click to follow and craft.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-strangeLeaf", "strangeLeaf", "Strange Leaf", "A rare secondary brewing ingredient.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-ironBucket", "ironBucket", "Silver Bucket", "Killing a lava type monster will let you collect a bucket of lava.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-lumberJack", "lumberJack", "Lumberjack", "Chop all your trees in one click.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-cooldownRing1", "cooldownRing1", "Cooldown Ring (1)", "Reduces combat cooldown by 1%.<br /><br /><span style=\'color:grey;font-size:8pt;\'>Rings are automatically active.  Effects of each unqiue ring is stackable.</span>");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-energyRing1", "energyRing1", "Energy Ring (1)", "Reduces energy use by 1%.<br /><br /><span style=\'color:grey;font-size:8pt;\'>Rings are automatically active.  Effects of each unqiue ring is stackable.</span>");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-manaRing1", "manaRing1", "Mana Ring (1)", "Increases maximum mana by 1.<br /><br /><span style=\'color:grey;font-size:8pt;\'>Rings are automatically active.  Effects of each unqiue ring is stackable.</span>");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-cooldownRing2", "cooldownRing2", "Cooldown Ring (2)", "Reduces combat cooldown by 4%.<br /><br /><span style=\'color:grey;font-size:8pt;\'>Rings are automatically active.  Effects of each unqiue ring is stackable.</span>");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-energyRing2", "energyRing2", "Energy Ring (2)", "Reduces energy use by 4%.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-manaRing2", "manaRing2", "Mana Ring (2)", "Increases maximum mana by 2.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-cooldownRing3", "cooldownRing3", "Cooldown Ring (3)", "Reduces combat cooldown by 10%.<br /><br /><span style=\'color:grey;font-size:8pt;\'>Rings are automatically active.  Effects of each unqiue ring is stackable.</span>");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-energyRing3", "energyRing3", "Energy Ring (3)", "Reduces energy use by 10%.<br /><br /><span style=\'color:grey;font-size:8pt;\'>Rings are automatically active.  Effects of each unqiue ring is stackable.</span>");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-manaRing3", "manaRing3", "Mana Ring (3)", "Increases maximum mana by 3.<br /><br /><span style=\'color:grey;font-size:8pt;\'>Rings are automatically active.  Effects of each unqiue ring is stackable.</span>");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-donorWoodcuttingPatch", "", "Donor Perk", "Unlocks an extra woodcutting patch.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-donorFarmingPlot", "", "Donor Perk", "Unlocks an extra farming patch.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-donorMoreOfflineTime", "", "Donor Perk", "Grants you 12h of offline time instead of 8h.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-donorBonusXp", "", "Donor Perk", "Every source of XP is increased by 10%.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-stardustBox1", "", "Stardust Box", "<img src=\'images/stardustIcon.png\' class=\'img-20\' /> 0 - 2000 Stardust.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-stardustBox2", "", "Stardust Box", "<img src=\'images/stardustIcon.png\' class=\'img-20\' /> 0 - 15000 Stardust.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-sapphireGlassHand", "", "Glass Hand", "<img src=\'images/museum.png\' class=\'img-20\' /> Shiny from every angle!");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-emeraldGlassHand", "", "Glass Hand", "<img src=\'images/museum.png\' class=\'img-20\' /> Very shiny from every angle!");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-rubyGlassHand", "", "Glass Hand", "<img src=\'images/museum.png\' class=\'img-20\' /> Extremely shiny from every angle!");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-diamondGlassHand", "", "Glass Hand", "<img src=\'images/museum.png\' class=\'img-20\' /> Wow! It\'s shiny even if I\'m not looking towards the hand!");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-snowmanCrafted", "", "Snowman", "<img src=\'images/museum.png\' class=\'img-20\' /> I think it spoke to me once!");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-brokenStinger", "", "Broken Stinger", "<img src=\'images/museum.png\' class=\'img-20\' /> Normally, I would be able to use this as a weapon.  Too bad it\'s broken.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-glowingGoldBar", "", "Broken Stinger", "<img src=\'images/museum.png\' class=\'img-20\' /> This gold bar seems quite unusual.  Almost like it\'s glowing.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-snakeBones", "", "Snake Bones", "<img src=\'images/museum.png\' class=\'img-20\' /> The remains of a giant snake who roamed the forest.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-skeletonSkull", "", "Skull", "<img src=\'images/museum.png\' class=\'img-20\' /> Obtained from a skeleton in the caves.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-ghostClothes", "", "Ghost Clothes", "<img src=\'images/museum.png\' class=\'img-20\' /> This belonged to the roaming ghost around the farm lands.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-cockroach", "", "Giant Cockroach", "<img src=\'images/museum.png\' class=\'img-20\' /> Crunch.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-goldenCockroach", "", "Golden Cockroach", "<img src=\'images/museum.png\' class=\'img-20\' /> Perhaps this can be smelted into a gold bar.  Wait no, that\'s cruel.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-stoneEyes", "", "Stone Eyes", "<img src=\'images/museum.png\' class=\'img-20\' /> A good defence against an attack is to go for the eyes.  Except these.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-burntRemains", "", "Burnt Remains", "<img src=\'images/museum.png\' class=\'img-20\' /> The dragon must have gotten to this poor fellow.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-yetiLeftFoot", "", "Yeti\'s Left Foot", "<img src=\'images/museum.png\' class=\'img-20\' /> It\'s still cold.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-yetiRightFoot", "", "Yeti\'s Right Foot", "<img src=\'images/museum.png\' class=\'img-20\' /> Yep, still cold.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-smallSeaShell", "", "Small Shell", "<img src=\'images/museum.png\' class=\'img-20\' /> Found on the ocean floors.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-mediumSeaShell", "", "Medium Shell", "<img src=\'images/museum.png\' class=\'img-20\' /> Found on the ocean floors.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-largeSeaShell", "", "Large Shell", "<img src=\'images/museum.png\' class=\'img-20\' /> Found on the ocean floors.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-mould", "craftingMould", "Crafting Mould", "Can be used to craft a specific item.<br /><br /><i>Click to operate</i>");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-carePackage", "carePackage", "Care Package", "I can buy one of these everytime I upgrade the shop!");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-gem", "gem", "Gem", "I can use these to socket tools granting them more power.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-smallManaStar", "", "Mana Star <span style=\'color:grey\'>(Small)</span>", "<img src=\'images/largeManaStar.png\' class=\'img-30\' /> Permanently increases mana by 1.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-mediumManaStar", "", "Mana Star <span style=\'color:grey\'>(Medium)</span>", "<img src=\'images/largeManaStar.png\' class=\'img-30\' /> Permanently increases mana by 2.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-largeManaStar", "", "Mana Star <span style=\'color:grey\'>(Large)</span>", "<img src=\'images/largeManaStar.png\' class=\'img-30\' /> Permanently increases mana by 3.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-hugeManaStar", "", "Mana Star <span style=\'color:grey\'>(Huge)</span>", "<img src=\'images/largeManaStar.png\' class=\'img-30\' />  Permanently increases mana by 5.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-donorCoins", "", "Tradable Donor Coins", "Donor coins may be used to buy temporary buffs that last for 30 days.<br /><br />These are currently tradable on the market, to use them in the donor shop; you must first bind them to your account.<br /><br /><span style=\'color:green\'>Click to bind coins to your account</span>");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-colorCrystal", "useless", "Sky Crystal", "It seems to be attracted to the dark crystal.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-shovel", "useless", "Shovel", "Slowly collects sand over time.<br /><br /><b>Found: </b><img src=\'images/sand.png\' class=\'img-20\' /> " + getItem("sandShovelTotal") + "<hr class=\'hr-thin\' />" + (1 + "/" + formatNumber(4000) + "<span style=\'color:grey\'> (~" + 21 + " per day)</span>"));
	_0x151CA += generateHTMLGeneralTooltip("tooltip-sapphireShovel", "useless", "Shovel", "Slowly collects sand over time.<br /><br /><b>Found: </b><img src=\'images/sand.png\' class=\'img-20\' /> " + getItem("sandShovelTotal") + "<hr class=\'hr-thin\' />" + (1 + "/" + formatNumber(3500) + "<span style=\'color:grey\'> (~" + 24 + " per day)</span>"));
	_0x151CA += generateHTMLGeneralTooltip("tooltip-emeraldShovel", "useless", "Shovel", "Slowly collects sand over time.<br /><br /><b>Found: </b><img src=\'images/sand.png\' class=\'img-20\' /> " + getItem("sandShovelTotal") + "<hr class=\'hr-thin\' />" + (1 + "/" + formatNumber(3000) + "<span style=\'color:grey\'> (~" + 28 + " per day)</span>"));
	_0x151CA += generateHTMLGeneralTooltip("tooltip-rubyShovel", "useless", "Shovel", "Slowly collects sand over time.<br /><br /><b>Found: </b><img src=\'images/sand.png\' class=\'img-20\' /> " + getItem("sandShovelTotal") + "<hr class=\'hr-thin\' />" + (1 + "/" + formatNumber(2500) + "<span style=\'color:grey\'> (~" + 34 + " per day)</span>"));
	_0x151CA += generateHTMLGeneralTooltip("tooltip-diamondShovel", "useless", "Shovel", "Slowly collects sand over time.<br /><br /><b>Found: </b><img src=\'images/sand.png\' class=\'img-20\' /> " + getItem("sandShovelTotal") + "<hr class=\'hr-thin\' />" + (1 + "/" + formatNumber(2000) + "<span style=\'color:grey\'> (~" + 43 + " per day)</span>"));
	_0x151CA += generateHTMLGeneralTooltip("tooltip-chisel", "useless", "Chisel", "<img src=\'images/geode_black.png\' class=\'img-20\' /> <b>Chance of failing to open a geode: </b> " + "50%");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-sapphireChisel", "useless", "Chisel", "<img src=\'images/geode_black.png\' class=\'img-20\' /> <b>Chance of failing to open a geode: </b> " + "40%");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-emeraldChisel", "useless", "Chisel", "<img src=\'images/geode_black.png\' class=\'img-20\' /> <b>Chance of failing to open a geode: </b> " + "30%");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-rubyChisel", "useless", "Chisel", "<img src=\'images/geode_black.png\' class=\'img-20\' /> <b>Chance of failing to open a geode: </b> " + "20%");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-diamondChisel", "useless", "Chisel", "<img src=\'images/geode_black.png\' class=\'img-20\' /> <b>Chance of failing to open a geode: </b> " + "0%");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-watch", "useless", "Watch", "To set the desired seed, click on the seed first (as if you were planting them) and then click on the watch.<br /><br /><span style=\'color:grey;font-size:10pt;\'>Bob will automatically harvest crops that are ready, and replant the seed that has been set.</span>");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-logs", "logs", "Logs", "Obtained from cutting a tree.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-oakLogs", "oakLogs", "Oak Logs", "Obtained from cutting a specific tree.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-willowLogs", "willowLogs", "Willow Logs", "Obtained from cutting a specific tree.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-mapleLogs", "mapleLogs", "Maple Logs", "Obtained from cutting a specific tree.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-bambooLogs", "bambooLogs", "Bamboo Logs", "Obtained from cutting a specific tree.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-lavaLogs", "lavaLogs", "Lava Logs", "Obtained from cutting a specific tree.<br /><br /><img src=\'images/ironBucket.png\' class=\'img-30\' /> 2% chance of getting lava when used with oven, assuming you have empty buckets.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-pineLogs", "pineLogs", "Pine Logs", "Obtained from cutting a specific tree.  It has snow sitting on top.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-stardustLogs", "stardustLogs", "Stardust Logs", "Obtained from cutting a specific tree.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-oven", "oven", "COOKING OVEN", "<b>Burn rate: " + parseInt(getBurnRate() * 100) + "%</b>");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-dottedGreenLeaf", "dottedGreenLeaf", "DOTTED GREEN LEAF", "A primary brewing ingredient.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-greenLeaf", "greenLeaf", "GREEN LEAF", "A primary brewing ingredient.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-limeLeaf", "limeLeaf", "LIME LEAF", "A primary brewing ingredient.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-goldLeaf", "goldLeaf", "GOLD LEAF", "A primary brewing ingredient.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-crystalLeaf", "crystalLeaf", "CRYSTAL LEAF", "A primary brewing ingredient.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-stripedGoldLeaf", "stripedGoldLeaf", "STRIPED GOLD LEAF", "A primary brewing ingredient.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-stripedCrystalLeaf", "stripedCrystalLeaf", "STRIPED CRYSTAL LEAF", "A primary brewing ingredient.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-stew", "stew", "STEW", "<img src=\'images/hourglass.png\' class=\'img-20\' /> Reduces cooldown by 15 minutes.");
	_0x151CA += generateHTMLGeneralTooltip("tooltip-redMushroom", "redMushroom", "RED MUSHROOM", "A secondary brewing ingredient.");
	var _0x17AF1 = "";
	_0x17AF1 += "<br /><img src=\'images/rawShrimp.png\' class=\'img-30\' /> Shrimp";
	if (getItem("sapphireSmallFishingNetTotal") > 0 || getItem("sapphireSmallFishingNet") > 0)
	{
		_0x17AF1 += "<br /><img src=\'images/rawAnchovy.png\' class=\'img-30\' /> Anchovy"
	};
	if (getItem("emeraldSmallFishingNetTotal") > 0 || getItem("emeraldSmallFishingNet") > 0)
	{
		_0x17AF1 += "<br /><img src=\'images/rawSardine.png\' class=\'img-30\' /> Sardine"
	};
	if (getItem("rubySmallFishingNetTotal") > 0 || getItem("rubySmallFishingNet") > 0)
	{
		_0x17AF1 += "<br /><img src=\'images/rawCrab.png\' class=\'img-30\' /> Crab"
	};
	if (getItem("diamondSmallFishingNetTotal") > 0 || getItem("diamondSmallFishingNet") > 0)
	{
		_0x17AF1 += "<br /><img src=\'images/rawPiranha.png\' class=\'img-30\' /> Piranhas"
	};
	_0x151CA += generateHTMLGeneralTooltip("tooltip-smallFishingNet", "varNameIfSellable", "Small Fishing Net", "<b>Catch size: </b> Small<br />" + _0x17AF1);
	var _0x179B6 = "";
	_0x179B6 += "<br /><img src=\'images/rawTrout.png\' class=\'img-30\' /> Trout";
	if (getItem("sapphireFishingRodTotal") > 0 || getItem("sapphireFishingRod") > 0)
	{
		_0x179B6 += "<br /><img src=\'images/rawSalmon.png\' class=\'img-30\' /> Salmon"
	};
	if (getItem("emeraldFishingRodTotal") > 0 || getItem("emeraldFishingRod") > 0)
	{
		_0x179B6 += "<br /><img src=\'images/rawEel.png\' class=\'img-30\' /> Eel"
	};
	if (getItem("rubyFishingRodTotal") > 0 || getItem("rubyFishingRod") > 0)
	{
		_0x179B6 += "<br /><img src=\'images/rawSeaTurtle.png\' class=\'img-30\' /> Sea Turtle"
	};
	if (getItem("diamondFishingRodTotal") > 0 || getItem("diamondFishingRod") > 0)
	{
		_0x179B6 += "<br /><img src=\'images/rawRainbowFish.png\' class=\'img-30\' /> Rainbow Fish"
	};
	_0x151CA += generateHTMLGeneralTooltip("tooltip-fishingRod", "varNameIfSellable", "Fishing Rod", "<b>Catch size: </b> Medium<br />" + _0x179B6);
	var _0x179D9 = "";
	_0x179D9 += "<br /><img src=\'images/rawTuna.png\' class=\'img-30\' /> Tuna";
	if (getItem("sapphireHarpoonTotal") > 0 || getItem("sapphireHarpoon") > 0)
	{
		_0x179D9 += "<br /><img src=\'images/rawSwordfish.png\' class=\'img-30\' /> Swordfish"
	};
	if (getItem("emeraldHarpoonTotal") > 0 || getItem("emeraldHarpoon") > 0)
	{
		_0x179D9 += "<br /><img src=\'images/rawMantaRay.png\' class=\'img-30\' /> Manta Ray"
	};
	if (getItem("rubyHarpoonTotal") > 0 || getItem("rubyHarpoon") > 0)
	{
		_0x179D9 += "<br /><img src=\'images/rawShark.png\' class=\'img-30\' /> Shark"
	};
	if (getItem("diamondHarpoonTotal") > 0 || getItem("diamondHarpoon") > 0)
	{
		_0x179D9 += "<br /><img src=\'images/rawWhale.png\' class=\'img-30\' /> Whale"
	};
	_0x151CA += generateHTMLGeneralTooltip("tooltip-harpoon", "varNameIfSellable", "Harpoon", "<b>Catch size: </b> Large<br />" + _0x179D9);
	var _0x17A1F = 0;
	var _0x1792A = "<img src=\'images/check.png\' class=\'img-20\'  />";
	_0x17A1F = 1;
	_0x1792A = "<img src=\'images/x.png\' class=\'img-20\' />";
	if (getLevel(getItem("magicXp")) >= _0x17A1F)
	{
		_0x1792A = "<img src=\'images/check.png\' class=\'img-20\' />"
	};
	_0x151CA += generateHTMLGeneralTooltip("tooltip-spellScrollHeal", "spellScrollHeal", "HEAL", "<img src=\'images/magicSkill.png\' class=\'img-20\' /> " + 1 + " magic required. " + _0x1792A);
	_0x17A1F = 5;
	_0x1792A = "<img src=\'images/x.png\' class=\'img-20\' />";
	if (getLevel(getItem("magicXp")) >= _0x17A1F)
	{
		_0x1792A = "<img src=\'images/check.png\' class=\'img-20\' />"
	};
	_0x151CA += generateHTMLGeneralTooltip("tooltip-spellScrollPoison", "", "POISON", "<img src=\'images/magicSkill.png\' class=\'img-20\' /> " + _0x17A1F + " magic required. " + _0x1792A);
	_0x17A1F = 10;
	_0x1792A = "<img src=\'images/x.png\' class=\'img-20\' />";
	if (getLevel(getItem("magicXp")) >= _0x17A1F)
	{
		_0x1792A = "<img src=\'images/check.png\' class=\'img-20\' />"
	};
	_0x151CA += generateHTMLGeneralTooltip("tooltip-spellScrollReflect", "", "REFLECT", "<img src=\'images/magicSkill.png\' class=\'img-20\' /> " + _0x17A1F + " magic required. " + _0x1792A);
	_0x17A1F = 15;
	_0x1792A = "<img src=\'images/x.png\' class=\'img-20\' />";
	if (getLevel(getItem("magicXp")) >= _0x17A1F)
	{
		_0x1792A = "<img src=\'images/check.png\' class=\'img-20\' />"
	};
	_0x151CA += generateHTMLGeneralTooltip("tooltip-spellScrollFire", "", "FIRE", "<img src=\'images/magicSkill.png\' class=\'img-20\' /> " + _0x17A1F + " magic required. " + _0x1792A);
	_0x17A1F = 20;
	_0x1792A = "<img src=\'images/x.png\' class=\'img-20\' />";
	if (getLevel(getItem("magicXp")) >= _0x17A1F)
	{
		_0x1792A = "<img src=\'images/check.png\' class=\'img-20\' />"
	};
	_0x151CA += generateHTMLGeneralTooltip("tooltip-spellScrollTeleport", "", "TELEPORT", "<img src=\'images/magicSkill.png\' class=\'img-20\' /> " + _0x17A1F + " magic required. " + _0x1792A);
	_0x17A1F = 30;
	_0x1792A = "<img src=\'images/x.png\' class=\'img-20\' />";
	if (getLevel(getItem("magicXp")) >= _0x17A1F)
	{
		_0x1792A = "<img src=\'images/check.png\' class=\'img-20\' />"
	};
	_0x151CA += generateHTMLGeneralTooltip("tooltip-spellScrollFreeze", "", "FREEZE", "<img src=\'images/magicSkill.png\' class=\'img-20\' /> " + _0x17A1F + " magic required. " + _0x1792A);
	_0x17A1F = 40;
	_0x1792A = "<img src=\'images/x.png\' class=\'img-20\' />";
	if (getLevel(getItem("magicXp")) >= _0x17A1F)
	{
		_0x1792A = "<img src=\'images/check.png\' class=\'img-20\' />"
	};
	_0x151CA += generateHTMLGeneralTooltip("tooltip-spellScrollGhostScan", "", "GHOST SCAN", "<img src=\'images/magicSkill.png\' class=\'img-20\' /> " + _0x17A1F + " magic required. " + _0x1792A);
	_0x17A1F = 50;
	_0x1792A = "<img src=\'images/x.png\' class=\'img-20\' />";
	if (getLevel(getItem("magicXp")) >= _0x17A1F)
	{
		_0x1792A = "<img src=\'images/check.png\' class=\'img-20\' />"
	};
	_0x151CA += generateHTMLGeneralTooltip("tooltip-spellScrollInvisibility", "", "INVISIBILITY", "<img src=\'images/magicSkill.png\' class=\'img-20\' /> " + _0x17A1F + " magic required. " + _0x1792A);
	var _0x14D47;
	var _0x17A65;
	var _0x14EEB;
	var _0x17970;
	var _0x1789E;
	var _0x17AAB;
	var _0x15A44;
	var _0x179FC;
	_0x15A44 = "";
	_0x14D47 = "HEAL";
	_0x17A65 = 3;
	_0x14EEB = "Heal instantly during combat.";
	_0x17970 = 10;
	_0x1789E = "<b>Base heal:</b> 2 health.";
	_0x179FC = "q";
	_0x17AAB = "<b>Multiplier:</b> Heal an additional 1 health per 5 magic bonus.";
	_0x15A44 += "<div style=\'font-size:16pt;font-weight:bold;\'>" + _0x14D47 + "</div>";
	_0x15A44 += "<div>" + _0x14EEB + "</div>";
	_0x15A44 += "<br />";
	_0x15A44 += "<b>Total Casts: </b> <item-healCasted>0</item-healCasted>";
	_0x15A44 += "<br />";
	_0x15A44 += "<br />";
	_0x15A44 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x15A44 += "<img src=\'images/hugeManaStar.png\' class=\'img-20\' /> <b>Mana cost:</b> " + _0x17A65;
	_0x15A44 += "<br />";
	_0x15A44 += "<img src=\'images/hourglass_grey.png\' class=\'img-20\' /> <b>Cooldown:</b> " + _0x17970 + " seconds";
	_0x15A44 += "</div>";
	_0x15A44 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x15A44 += "<img src=\'images/magic_black.png\' class=\'img-20\' /> " + _0x1789E;
	_0x15A44 += "<br />";
	_0x15A44 += "<img src=\'images/magic_grey.png\' class=\'img-20\' /> " + _0x17AAB;
	_0x15A44 += "</div>";
	_0x15A44 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x15A44 += "<img src=\'images/keybind.png\' class=\'img-20\' /> Keybind: " + _0x179FC;
	_0x15A44 += "</div>";
	_0x151CA += generateHTMLGeneralTooltip("tooltip-" + _0x14D47.toLowerCase(), _0x14D47.toLowerCase(), "", _0x15A44);
	_0x15A44 = "";
	_0x14D47 = "POISON";
	_0x17A65 = 5;
	_0x14EEB = "Poisons your enemy, dealing 1 damage every 7 seconds.";
	_0x17970 = 300;
	_0x1789E = "<b>Base poison:</b> 1 damage.";
	_0x179FC = "w";
	_0x17AAB = "<b>Multiplier:</b> Poison damaged increased by 1 per 10 magic bonus.";
	_0x15A44 += "<div style=\'font-size:16pt;font-weight:bold;\'>" + _0x14D47 + "</div>";
	_0x15A44 += "<div>" + _0x14EEB + "</div>";
	_0x15A44 += "<br />";
	_0x15A44 += "<b>Total Casts: </b> <item-poisonCasted>0</item-poisonCasted>";
	_0x15A44 += "<br />";
	_0x15A44 += "<br />";
	_0x15A44 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x15A44 += "<img src=\'images/hugeManaStar.png\' class=\'img-20\' /> <b>Mana cost:</b> " + _0x17A65;
	_0x15A44 += "<br />";
	_0x15A44 += "<img src=\'images/hourglass_grey.png\' class=\'img-20\' /> <b>Cooldown:</b> " + _0x17970 + " seconds";
	_0x15A44 += "</div>";
	_0x15A44 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x15A44 += "<img src=\'images/magic_black.png\' class=\'img-20\' /> " + _0x1789E;
	_0x15A44 += "<br />";
	_0x15A44 += "<img src=\'images/magic_grey.png\' class=\'img-20\' /> " + _0x17AAB;
	_0x15A44 += "</div>";
	_0x15A44 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x15A44 += "<img src=\'images/keybind.png\' class=\'img-20\' /> Keybind: " + _0x179FC;
	_0x15A44 += "</div>";
	_0x151CA += generateHTMLGeneralTooltip("tooltip-" + _0x14D47.toLowerCase(), _0x14D47.toLowerCase(), "", _0x15A44);
	_0x15A44 = "";
	_0x14D47 = "REFLECT";
	_0x17A65 = 3;
	_0x14EEB = "Reflects the next attack from the enemy back to them.  Does not work on poison attacks.";
	_0x17970 = 30;
	_0x1789E = "<b>Base damage:</b> N/A";
	_0x179FC = "e";
	_0x17AAB = "<b>Buff:</b> Having a magic bonus greater than 20 will not trigger reflect if the enemy hits a 0.";
	_0x15A44 += "<div style=\'font-size:16pt;font-weight:bold;\'>" + _0x14D47 + "</div>";
	_0x15A44 += "<div>" + _0x14EEB + "</div>";
	_0x15A44 += "<br />";
	_0x15A44 += "<b>Total Casts: </b> <item-reflectCasted>0</item-reflectCasted>";
	_0x15A44 += "<br />";
	_0x15A44 += "<br />";
	_0x15A44 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x15A44 += "<img src=\'images/hugeManaStar.png\' class=\'img-20\' /> <b>Mana cost:</b> " + _0x17A65;
	_0x15A44 += "<br />";
	_0x15A44 += "<img src=\'images/hourglass_grey.png\' class=\'img-20\' /> <b>Cooldown:</b> " + _0x17970 + " seconds";
	_0x15A44 += "</div>";
	_0x15A44 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x15A44 += "<img src=\'images/magic_black.png\' class=\'img-20\' /> " + _0x1789E;
	_0x15A44 += "<br />";
	_0x15A44 += "<img src=\'images/magic_grey.png\' class=\'img-20\' /> " + _0x17AAB;
	_0x15A44 += "</div>";
	_0x15A44 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x15A44 += "<img src=\'images/keybind.png\' class=\'img-20\' /> Keybind: " + _0x179FC;
	_0x15A44 += "</div>";
	_0x151CA += generateHTMLGeneralTooltip("tooltip-" + _0x14D47.toLowerCase(), _0x14D47.toLowerCase(), "", _0x15A44);
	_0x15A44 = "";
	_0x14D47 = "FIRE";
	_0x17A65 = 2;
	_0x14EEB = "Instantly deals fire damage to your enemy.";
	_0x17970 = 10;
	_0x1789E = "<b>Base damage:</b> 0 - 2";
	_0x179FC = "r";
	_0x17AAB = "<b>Buff:</b> +1 damage per 3 magic bonus.";
	_0x15A44 += "<div style=\'font-size:16pt;font-weight:bold;\'>" + _0x14D47 + "</div>";
	_0x15A44 += "<div>" + _0x14EEB + "</div>";
	_0x15A44 += "<br />";
	_0x15A44 += "<b>Total Casts: </b> <item-fireCasted>0</item-fireCasted>";
	_0x15A44 += "<br />";
	_0x15A44 += "<br />";
	_0x15A44 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x15A44 += "<img src=\'images/hugeManaStar.png\' class=\'img-20\' /> <b>Mana cost:</b> " + _0x17A65;
	_0x15A44 += "<br />";
	_0x15A44 += "<img src=\'images/hourglass_grey.png\' class=\'img-20\' /> <b>Cooldown:</b> " + _0x17970 + " seconds";
	_0x15A44 += "</div>";
	_0x15A44 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x15A44 += "<img src=\'images/magic_black.png\' class=\'img-20\' /> " + _0x1789E;
	_0x15A44 += "<br />";
	_0x15A44 += "<img src=\'images/magic_grey.png\' class=\'img-20\' /> " + _0x17AAB;
	_0x15A44 += "</div>";
	_0x15A44 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x15A44 += "<img src=\'images/keybind.png\' class=\'img-20\' /> Keybind: " + _0x179FC;
	_0x15A44 += "</div>";
	_0x151CA += generateHTMLGeneralTooltip("tooltip-" + _0x14D47.toLowerCase(), _0x14D47.toLowerCase(), "", _0x15A44);
	_0x15A44 = "";
	_0x14D47 = "TELEPORT";
	_0x17A65 = 0;
	_0x14EEB = "Teleports you out of combat, fully recovering HP and mana allowing you to fight again.";
	_0x17970 = 900;
	_0x1789E = "<b>Base damage:</b> n/a";
	_0x179FC = "t";
	_0x15A44 += "<div style=\'font-size:16pt;font-weight:bold;\'>" + _0x14D47 + "</div>";
	_0x15A44 += "<div>" + _0x14EEB + "</div>";
	_0x15A44 += "<br />";
	_0x15A44 += "<b>Total Casts: </b> <item-teleportCasted>0</item-teleportCasted>";
	_0x15A44 += "<br />";
	_0x15A44 += "<br />";
	_0x15A44 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x15A44 += "<img src=\'images/hugeManaStar.png\' class=\'img-20\' /> <b>Mana cost:</b> " + "(none)";
	_0x15A44 += "<br />";
	_0x15A44 += "<img src=\'images/hourglass_grey.png\' class=\'img-20\' /> <b>Cooldown:</b> " + 15 + " minutes.";
	_0x15A44 += "</div>";
	_0x15A44 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x15A44 += "<img src=\'images/keybind.png\' class=\'img-20\' /> Keybind: " + _0x179FC;
	_0x15A44 += "</div>";
	_0x151CA += generateHTMLGeneralTooltip("tooltip-" + _0x14D47.toLowerCase(), _0x14D47.toLowerCase(), "", _0x15A44);
	_0x15A44 = "";
	_0x14D47 = "GHOST SCAN";
	_0x17A65 = 0;
	_0x14EEB = "Ability to see ghosts.";
	_0x17970 = 300;
	_0x1789E = "<b>Base damage:</b> n/a";
	_0x179FC = "y";
	_0x15A44 += "<div style=\'font-size:16pt;font-weight:bold;\'>" + _0x14D47 + "</div>";
	_0x15A44 += "<div>" + _0x14EEB + "</div>";
	_0x15A44 += "<br />";
	_0x15A44 += "<b>Total Casts: </b> <item-ghostScanCasted>0</item-ghostScanCasted>";
	_0x15A44 += "<br />";
	_0x15A44 += "<br />";
	_0x15A44 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x15A44 += "<img src=\'images/hugeManaStar.png\' class=\'img-20\' /> <b>Mana cost:</b> " + "(none)";
	_0x15A44 += "<br />";
	_0x15A44 += "<img src=\'images/hourglass_grey.png\' class=\'img-20\' /> <b>Cooldown:</b> " + 5 + " minutes.";
	_0x15A44 += "</div>";
	_0x15A44 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x15A44 += "<img src=\'images/keybind.png\' class=\'img-20\' /> Keybind: " + _0x179FC;
	_0x15A44 += "</div>";
	_0x151CA += generateHTMLGeneralTooltip("tooltip-" + "ghostScan", _0x14D47.toLowerCase(), "", _0x15A44);
	_0x15A44 = "";
	_0x14D47 = "FREEZE";
	_0x17A65 = 5;
	_0x14EEB = "Freezes your enemy for a short duration";
	_0x17970 = 15;
	_0x1789E = "<b>Base Freeze Time:</b> 3 seconds";
	_0x179FC = "u";
	_0x17AAB = "<b>Buff:</b> +1 seconds per 5 magic bonus.";
	_0x15A44 += "<div style=\'font-size:16pt;font-weight:bold;\'>" + _0x14D47 + "</div>";
	_0x15A44 += "<div>" + _0x14EEB + "</div>";
	_0x15A44 += "<br />";
	_0x15A44 += "<b>Total Casts: </b> <item-" + _0x14D47.toLowerCase() + "Casted>0</item-" + _0x14D47.toLowerCase() + "Casted>";
	_0x15A44 += "<br />";
	_0x15A44 += "<br />";
	_0x15A44 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x15A44 += "<img src=\'images/hugeManaStar.png\' class=\'img-20\' /> <b>Mana cost:</b> " + _0x17A65;
	_0x15A44 += "<br />";
	_0x15A44 += "<img src=\'images/hourglass_grey.png\' class=\'img-20\' /> <b>Cooldown:</b> " + _0x17970 + " seconds";
	_0x15A44 += "</div>";
	_0x15A44 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x15A44 += "<img src=\'images/magic_black.png\' class=\'img-20\' /> " + _0x1789E;
	_0x15A44 += "<br />";
	_0x15A44 += "<img src=\'images/magic_grey.png\' class=\'img-20\' /> " + _0x17AAB;
	_0x15A44 += "</div>";
	_0x15A44 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x15A44 += "<img src=\'images/keybind.png\' class=\'img-20\' /> Keybind: " + _0x179FC;
	_0x15A44 += "</div>";
	_0x151CA += generateHTMLGeneralTooltip("tooltip-" + _0x14D47.toLowerCase(), _0x14D47.toLowerCase(), "", _0x15A44);
	_0x15A44 = "";
	_0x14D47 = "INVISIBILITY";
	_0x17A65 = 1;
	_0x14EEB = "Become invisibile, making your enemy miss.";
	_0x17970 = 30;
	_0x1789E = "<b>Invisibility time:</b> 2 second";
	_0x179FC = "i";
	_0x17AAB = "<b>Buff:</b> No mana cost at 20 magic bonus.";
	_0x15A44 += "<div style=\'font-size:16pt;font-weight:bold;\'>" + _0x14D47 + "</div>";
	_0x15A44 += "<div>" + _0x14EEB + "</div>";
	_0x15A44 += "<br />";
	_0x15A44 += "<b>Total Casts: </b> <item-" + _0x14D47.toLowerCase() + "Casted>0</item-" + _0x14D47.toLowerCase() + "Casted>";
	_0x15A44 += "<br />";
	_0x15A44 += "<br />";
	_0x15A44 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x15A44 += "<img src=\'images/hugeManaStar.png\' class=\'img-20\' /> <b>Mana cost:</b> " + _0x17A65;
	_0x15A44 += "<br />";
	_0x15A44 += "<img src=\'images/hourglass_grey.png\' class=\'img-20\' /> <b>Cooldown:</b> " + _0x17970 + " seconds";
	_0x15A44 += "</div>";
	_0x15A44 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x15A44 += "<img src=\'images/magic_black.png\' class=\'img-20\' /> " + _0x1789E;
	_0x15A44 += "<br />";
	_0x15A44 += "<img src=\'images/magic_grey.png\' class=\'img-20\' /> " + _0x17AAB;
	_0x15A44 += "</div>";
	_0x15A44 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x15A44 += "<img src=\'images/keybind.png\' class=\'img-20\' /> Keybind: " + _0x179FC;
	_0x15A44 += "</div>";
	_0x151CA += generateHTMLGeneralTooltip("tooltip-" + _0x14D47.toLowerCase(), _0x14D47.toLowerCase(), "", _0x15A44);
	if (getItem("treeUnlocked2") == 0)
	{
		_0x151CA += generateHTMLGeneralTooltip("tooltip-treeSection2", "treeSection2", "Tree Patch", "<img src=\'images/unlocked.png\' class=\'img-30\' /> Unlock for <img src=\'images/coins.png\' class=\'img-30\' /> 100 coins.")
	};
	if (getItem("treeUnlocked3") == 0)
	{
		_0x151CA += generateHTMLGeneralTooltip("tooltip-treeSection3", "treeSection3", "Tree Patch", "<img src=\'images/unlocked.png\' class=\'img-30\' /> Unlock for <img src=\'images/coins.png\' class=\'img-30\' /> 10,000 coins.")
	};
	if (getItem("treeUnlocked4") == 0)
	{
		_0x151CA += generateHTMLGeneralTooltip("tooltip-treeSection4", "treeSection4", "Tree Patch", "<img src=\'images/unlocked.png\' class=\'img-30\' /> Unlock for <img src=\'images/coins.png\' class=\'img-30\' /> 100,000 coins and <img src=\'images/woodcuttingSkill.png\' class=\'img-30\' /> 50 woodcutting.")
	};
	if (getItem("treeUnlocked6") == 0)
	{
		_0x151CA += generateHTMLGeneralTooltip("tooltip-treeSection5and6", "treeSection5and6", "Tree Patch", "<img src=\'images/unlocked.png\' class=\'img-30\' /> Unlock for <img src=\'images/donorCoins.png\' class=\'img-30\' /> 2 donor coins.")
	};
	if (getItem("plotUnlocked2") == 0)
	{
		_0x151CA += generateHTMLGeneralTooltip("tooltip-plotSection2", "plotSection2", "Farming Patch", "<img src=\'images/unlocked.png\' class=\'img-30\' /> Unlock for <img src=\'images/coins.png\' class=\'img-30\' /> 100 coins.")
	};
	if (getItem("plotUnlocked3") == 0)
	{
		_0x151CA += generateHTMLGeneralTooltip("tooltip-plotSection3", "plotSection3", "Farming Patch", "<img src=\'images/unlocked.png\' class=\'img-30\' /> Unlock for <img src=\'images/coins.png\' class=\'img-30\' /> 10,000 coins.")
	};
	if (getItem("plotUnlocked4") == 0)
	{
		_0x151CA += generateHTMLGeneralTooltip("tooltip-plotSection4", "plotSection4", "Farming Patch", "<img src=\'images/unlocked.png\' class=\'img-30\' /> Unlock for <img src=\'images/coins.png\' class=\'img-30\' /> 100,000 coins and <img src=\'images/farmingSkill.png\' class=\'img-30\' /> 50 farming.")
	};
	if (getItem("plotUnlocked6") == 0)
	{
		_0x151CA += generateHTMLGeneralTooltip("tooltip-plotSection5and6", "plotSection5and6", "Farming Patch", "<img src=\'images/unlocked.png\' class=\'img-30\' /> Unlock for <img src=\'images/donorCoins.png\' class=\'img-30\' /> 2 donor coins.")
	};
	var _0x1794D = "";
	var _0x1787B = "Fields";
	var _0x17A88 = [];
	_0x1794D = "";
	_0x1787B = "Fields";
	_0x17A88 = [];
	_0x17A88 = getEncountersImgArrayForAreaareaChosen(_0x1787B);
	_0x1794D += "<img src=\'images/energy.png\' class=\'img-30\' /> " + getEnergyReduction(50) + " &nbsp;&nbsp;&nbsp;&nbsp; <img src=\'images/hourglass_grey.png\' class=\'img-30\' /> " + formatTime(getAreaTimer(15 * 60));
	_0x1794D += "<br /><br />";
	_0x1794D += "<img src=\'" + _0x17A88[1] + "\' class=\'img-30\' /> Chickens &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x1794D += "<img src=\'" + _0x17A88[3] + "\' class=\'img-30\' /> Rats &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x1794D += "<img src=\'" + _0x17A88[5] + "\' class=\'img-30\' /> Bees";
	document.getElementById(_0x1787B.toLowerCase() + "-fightMarker-gif").src = _0x17A88[6];
	_0x151CA += generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-" + _0x1787B.toLowerCase(), "", _0x1787B, _0x1794D);
	_0x1794D = "";
	_0x1787B = "Forest";
	_0x17A88 = [];
	_0x17A88 = getEncountersImgArrayForAreaareaChosen(_0x1787B);
	_0x1794D += "<img src=\'images/energy.png\' class=\'img-30\' /> " + getEnergyReduction(200) + " &nbsp;&nbsp;&nbsp;&nbsp; <img src=\'images/hourglass_grey.png\' class=\'img-30\' /> " + formatTime(getAreaTimer(30 * 60));
	_0x1794D += "<br /><br />";
	_0x1794D += "<img src=\'" + _0x17A88[1] + "\' class=\'img-30\' /> Snake &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x1794D += "<img src=\'" + _0x17A88[3] + "\' class=\'img-30\' /> Ent &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x1794D += "<img src=\'" + _0x17A88[5] + "\' class=\'img-30\' /> Thief";
	document.getElementById(_0x1787B.toLowerCase() + "-fightMarker-gif").src = _0x17A88[6];
	_0x151CA += generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-" + _0x1787B.toLowerCase(), "", _0x1787B, _0x1794D);
	_0x1794D = "";
	_0x1787B = "Caves";
	_0x17A88 = [];
	_0x17A88 = getEncountersImgArrayForAreaareaChosen(_0x1787B);
	_0x1794D += "<img src=\'images/energy.png\' class=\'img-30\' /> " + getEnergyReduction(500) + " &nbsp;&nbsp;&nbsp;&nbsp; <img src=\'images/hourglass_grey.png\' class=\'img-30\' /> " + formatTime(getAreaTimer(60 * 60));
	_0x1794D += "<br /><br />";
	_0x1794D += "<img src=\'" + _0x17A88[1] + "\' class=\'img-30\' /> Bear &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x1794D += "<img src=\'" + _0x17A88[3] + "\' class=\'img-30\' /> Spider &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x1794D += "<img src=\'" + _0x17A88[5] + "\' class=\'img-30\' /> Skeleton";
	document.getElementById(_0x1787B.toLowerCase() + "-fightMarker-gif").src = _0x17A88[6];
	_0x151CA += generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-" + _0x1787B.toLowerCase(), "", _0x1787B, _0x1794D);
	_0x1794D = "";
	_0x1787B = "lavaDungeon";
	_0x17A88 = [];
	_0x17A88 = getEncountersImgArrayForAreaareaChosen(_0x1787B);
	_0x1794D += "<img src=\'images/energy.png\' class=\'img-30\' /> " + getEnergyReduction(2000) + " &nbsp;&nbsp;&nbsp;&nbsp; <img src=\'images/hourglass_grey.png\' class=\'img-30\' /> " + formatTime(getAreaTimer(90 * 60));
	_0x1794D += "<br /><br />";
	_0x1794D += "<img src=\'" + _0x17A88[1] + "\' class=\'img-30\' /> Lava Alien &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x1794D += "<img src=\'" + _0x17A88[3] + "\' class=\'img-30\' /> Bat &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x1794D += "<img src=\'" + _0x17A88[5] + "\' class=\'img-30\' /> Fire Mage";
	document.getElementById(_0x1787B + "-fightMarker-gif").src = _0x17A88[6];
	_0x151CA += generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-" + _0x1787B, "", _0x1787B, _0x1794D);
	_0x1794D = "";
	_0x1787B = "northernFields";
	_0x17A88 = [];
	_0x17A88 = getEncountersImgArrayForAreaareaChosen(_0x1787B);
	_0x1794D += "<img src=\'images/energy.png\' class=\'img-30\' /> " + getEnergyReduction(5000) + " &nbsp;&nbsp;&nbsp;&nbsp; <img src=\'images/hourglass_grey.png\' class=\'img-30\' /> " + formatTime(getAreaTimer(120 * 60));
	_0x1794D += "<br /><br />";
	_0x1794D += "<img src=\'" + _0x17A88[1] + "\' class=\'img-30\' /> Bonehead &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x1794D += "<img src=\'" + _0x17A88[3] + "\' class=\'img-30\' /> Mamma Polar Bear &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x1794D += "<img src=\'" + _0x17A88[5] + "\' class=\'img-30\' /> Yeti";
	document.getElementById(_0x1787B + "-fightMarker-gif").src = _0x17A88[6];
	_0x151CA += generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-" + _0x1787B, "", "Northern Fields", _0x1794D);
	_0x1794D = "";
	_0x1787B = "cemetery";
	_0x17A88 = [];
	_0x17A88 = getEncountersImgArrayForAreaareaChosen(_0x1787B);
	_0x1794D += "<img src=\'images/energy.png\' class=\'img-30\' /> " + formatNumber(getEnergyReduction(10000)) + " &nbsp;&nbsp;&nbsp;&nbsp; <img src=\'images/hourglass_grey.png\' class=\'img-30\' /> " + formatTime(getAreaTimer(150 * 60));
	_0x1794D += "<br /><br />";
	_0x1794D += "<img src=\'" + _0x17A88[1] + "\' class=\'img-30\' /> Ghost &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x1794D += "<img src=\'" + _0x17A88[3] + "\' class=\'img-30\' /> Skeleton Ghost &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x1794D += "<img src=\'" + _0x17A88[5] + "\' class=\'img-30\' /> Reaper";
	document.getElementById(_0x1787B + "-fightMarker-gif").src = _0x17A88[6];
	_0x151CA += generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-" + _0x1787B, "", _0x1787B, _0x1794D);
	_0x1794D = "";
	_0x1787B = "ocean";
	_0x17A88 = [];
	_0x17A88 = getEncountersImgArrayForAreaareaChosen(_0x1787B);
	_0x1794D += "<img src=\'images/energy.png\' class=\'img-30\' /> " + formatNumber(getEnergyReduction(16000)) + " &nbsp;&nbsp;&nbsp;&nbsp; <img src=\'images/hourglass_grey.png\' class=\'img-30\' /> " + formatTime(getAreaTimer(180 * 60));
	_0x1794D += "<br /><br />";
	_0x1794D += "<img src=\'" + _0x17A88[1] + "\' class=\'img-30\' /> Shark &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x1794D += "<img src=\'" + _0x17A88[3] + "\' class=\'img-30\' /> Puffer Fish &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x1794D += "<img src=\'" + _0x17A88[5] + "\' class=\'img-30\' /> Trident Soldier";
	document.getElementById(_0x1787B + "-fightMarker-gif").src = _0x17A88[6];
	_0x151CA += generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-" + _0x1787B, "", _0x1787B, _0x1794D);
	_0x1794D = "";
	_0x1787B = "dungeon";
	_0x17A88 = [];
	_0x17A88 = getEncountersImgArrayForAreaareaChosen(_0x1787B);
	_0x1794D += "<img src=\'images/energy.png\' class=\'img-30\' /> " + formatNumber(getEnergyReduction(30000)) + " &nbsp;&nbsp;&nbsp;&nbsp; <img src=\'images/hourglass_grey.png\' class=\'img-30\' /> " + formatTime(getAreaTimer(220 * 60));
	_0x1794D += "<br /><br />";
	_0x1794D += "<img src=\'" + _0x17A88[1] + "\' class=\'img-30\' /> Skeleton Monks &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x1794D += "<img src=\'" + _0x17A88[3] + "\' class=\'img-30\' /> Dungeon Spider &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x1794D += "<img src=\'" + _0x17A88[5] + "\' class=\'img-30\' /> Stone Women";
	document.getElementById(_0x1787B + "-fightMarker-gif").src = _0x17A88[6];
	_0x151CA += generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-" + _0x1787B, "", _0x1787B, _0x1794D);
	var _0x1634A = "";
	_0x1794D = "";
	_0x1634A = "bushy";
	if (getItem(_0x1634A + "Kills") == 0)
	{
		_0x1794D = "<center><img src=\'images/energy.png\' class=\'img-30\' /> " + getEnergyReduction(1000) + "</center><br /><img src=\'images/" + _0x1634A + "Monster_black.png\' class=\'img-50\' /> Defeated " + "<img src=\'images/x.png\' class=\'img-20\' />"
	}
	else
	{
		if (getItem(_0x1634A + "Kills") > 0)
		{
			document.getElementById("combat-map-fight-marker-boss-bushy").src = "images/bossMarkerCompleted.gif";
			_0x1794D = "<img src=\'images/" + _0x1634A + "_monster_idle_0.png\' class=\'img-50\' /> Defeated " + "<img src=\'images/check.png\' class=\'img-20\' />"
		}
	};
	_0x151CA += generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-boss-bushy", "", "BUSHY <span style=\'color:grey\'>(BOSS)</span><br /><span style=\'color:brown;font-size:8pt\'><b>Weakness:</b> None</span>", _0x1794D);
	_0x1634A = "fireHawk";
	if (getItem(_0x1634A + "Kills") == 0)
	{
		_0x1794D = "<center><img src=\'images/energy.png\' class=\'img-30\' /> " + getEnergyReduction(6000) + "</center><br /><img src=\'images/" + _0x1634A + "Monster_black.png\' class=\'img-50\' /> Defeated " + "<img src=\'images/x.png\' class=\'img-20\' />"
	}
	else
	{
		if (getItem(_0x1634A + "Kills") > 0)
		{
			document.getElementById("combat-map-fight-marker-boss-" + _0x1634A).src = "images/bossMarkerCompleted.gif";
			_0x1794D = "<img src=\'images/" + _0x1634A + "_monster_idle_0.png\' class=\'img-50\' /> Defeated " + "<img src=\'images/check.png\' class=\'img-20\' />"
		}
	};
	_0x151CA += generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-boss-" + _0x1634A, "", getItemName(_0x1634A).toUpperCase() + " <span style=\'color:grey\'>(BOSS)</span><br /><span style=\'color:brown;font-size:8pt\'><b>Weakness:</b> Water or Ice</span>", _0x1794D);
	_0x1634A = "iceHawk";
	if (getItem(_0x1634A + "Kills") == 0)
	{
		_0x1794D = "<center><img src=\'images/energy.png\' class=\'img-30\' /> " + formatNumber(getEnergyReduction(10000)) + "</center><br /><img src=\'images/" + _0x1634A + "Monster_black.png\' class=\'img-50\' /> Defeated " + "<img src=\'images/x.png\' class=\'img-20\' />"
	}
	else
	{
		if (getItem(_0x1634A + "Kills") > 0)
		{
			document.getElementById("combat-map-fight-marker-boss-" + _0x1634A).src = "images/bossMarkerCompleted.gif";
			_0x1794D = "<img src=\'images/" + _0x1634A + "_monster_idle_0.png\' class=\'img-50\' /> Defeated " + "<img src=\'images/check.png\' class=\'img-20\' />"
		}
	};
	_0x151CA += generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-boss-" + _0x1634A, "", getItemName(_0x1634A).toUpperCase() + " <span style=\'color:grey\'>(BOSS)</span><br /><span style=\'color:brown;font-size:8pt\'><b>Weakness:</b> Fire</span>", _0x1794D);
	_0x1634A = "piranhas";
	if (getItem(_0x1634A + "Kills") == 0)
	{
		_0x1794D = "<center><img src=\'images/energy.png\' class=\'img-30\' /> " + formatNumber(getEnergyReduction(25000)) + "</center><br /><img src=\'images/" + _0x1634A + "Monster_black.png\' class=\'img-50\' /> Defeated " + "<img src=\'images/x.png\' class=\'img-20\' />"
	}
	else
	{
		if (getItem(_0x1634A + "Kills") > 0)
		{
			document.getElementById("combat-map-fight-marker-boss-" + _0x1634A).src = "images/bossMarkerCompletedMany.gif";
			_0x1794D = "<img src=\'images/" + _0x1634A + "_monster_idle_0.png\' class=\'img-50\' /> Defeated " + "<img src=\'images/check.png\' class=\'img-20\' />"
		}
	};
	_0x151CA += generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-boss-" + _0x1634A, "", getItemName(_0x1634A).toUpperCase() + " <span style=\'color:grey\'>(BOSS)</span><br /><span style=\'color:brown;font-size:8pt\'><b>Weakness:</b> None</span>", _0x1794D);
	document.getElementById("dynamic-tooltips-area").innerHTML = _0x151CA
}

function getTooltipSellsForLabel(_0x16255)
{
	if (global_itemPriceMap[_0x16255] != null)
	{
		return "<br /><br /><div class=\'sell-tooltip-container\'><img src=\'images/shop_black.png\' class=\'img-20\' /> <b>Sells for:</b> <img src=\'images/coins.png\' class=\'img-20\' /> " + formatNumber(global_itemPriceMap[_0x16255].price) + "</div>"
	};
	return ""
}

function generateHTMLGeneralTooltip(_0x159FE, _0x16EC6, _0x151A7, _0x14EEB)
{
	var _0x151CA = "";
	_0x151CA += "<div id=\'" + _0x159FE + "\' style=\'display:none;\'>";
	if (_0x16EC6 != "" || _0x151A7 != "")
	{
		_0x151CA += "<h2>" + _0x151A7 + "</h2>";
		_0x151CA += "<hr class=\'hr-thin\' />"
	};
	_0x151CA += _0x14EEB;
	if (_0x16EC6 != "")
	{
		_0x151CA += getTooltipSellsForLabel(_0x16EC6)
	};
	_0x151CA += "</div>";
	return _0x151CA
}

function openFurnaceDialogue(_0x16F0C)
{
	document.getElementById("dialogue-furnace-selectOre").innerHTML = "";
	var _0x15A44 = "";
	if (getItem("researcherCrafting") >= 1)
	{
		_0x15A44 += generateHTMLToSelectOreFurnace(_0x16F0C, "sand")
	};
	_0x15A44 += generateHTMLToSelectOreFurnace(_0x16F0C, "copper");
	_0x15A44 += generateHTMLToSelectOreFurnace(_0x16F0C, "iron");
	_0x15A44 += generateHTMLToSelectOreFurnace(_0x16F0C, "silver");
	_0x15A44 += generateHTMLToSelectOreFurnace(_0x16F0C, "gold");
	_0x15A44 += generateHTMLToSelectOreFurnace(_0x16F0C, "promethium");
	_0x15A44 += generateHTMLToSelectOreFurnace(_0x16F0C, "titanium");
	document.getElementById("dialogue-furnace-selectOre").innerHTML = _0x15A44;
	document.getElementById("dialogue-furnace-buttons-area").innerHTML = "<br /><div onclick=\'closeDialogue(\"dialogue-furnace\")\' class=\'dialogue-button\'>Close</div>";
	openDialogueOverride("dialogue-furnace", "large")
}

function isNull(_0x15D69)
{
	if (_0x15D69 === undefined || variable === null)
	{
		return true
	};
	return false
}

function isInt(_0x14EA5)
{
	return !isNaN(_0x14EA5) && parseInt(Number(_0x14EA5)) == _0x14EA5 && !isNaN(parseInt(_0x14EA5, 10))
}
var global_tracker_furnaceDialgoue_furnace = "";
var global_tracker_furnaceDialgoue_ore = "";

function openFurnaceDialogue2(_0x16F0C, _0x15233)
{
	global_tracker_furnaceDialgoue_furnace = _0x16F0C;
	global_tracker_furnaceDialgoue_ore = _0x15233;
	document.getElementById("dialogue-furnace-enterOre").innerHTML = "";
	var _0x15A44 = "";
	_0x15A44 += "<div class=\'dialogue-furnace-enterOre\'>";
	_0x15A44 += "<table width=\'90%\'>";
	_0x15A44 += "<tr>";
	_0x15A44 += "<td>";
	_0x15A44 += "<img src=\'images/" + _0x16F0C + ".png\' class=\'img-100\' /> ";
	_0x15A44 += "<img src=\'images/" + _0x15233 + ".png\' class=\'img-100\' /> ";
	_0x15A44 += "</td>";
	_0x15A44 += "<td>";
	_0x15A44 += "<input type=\'text\' id=\'dialogue-furnace-smelt-amount\' class=\'enter-amount-text\' onkeyup=\'furnaceDialogueValueOnKeyUp(this.value)\' placeholder=\'amount\' />";
	_0x15A44 += "</td>";
	_0x15A44 += "</tr>";
	_0x15A44 += "</table>";
	_0x15A44 += "</div>";
	document.getElementById("dialogue-furnace-enterOre").innerHTML = _0x15A44;
	document.getElementById("dialogue-furnace-selectOre").innerHTML = "";
	document.getElementById("dialogue-furnace-buttons-area").innerHTML = "<br /><table width=\'80%\'><tr><td><div onclick=\'closeDialogue(\"dialogue-furnace\")\' class=\'dialogue-button\'>Close</div></td><td><div onclick=\'closeDialogue(\"dialogue-furnace\");smelt(\"" + _0x15233 + "\", document.getElementById(\"dialogue-furnace-smelt-amount\").value)\' style=\'background-color:#b3ffff\' class=\'dialogue-button\'>Smelt</div></td></tr></table>";
	setMaxOreThatCanSmelt(_0x15233, _0x16F0C);
	furnaceDialogueValueOnKeyUp(document.getElementById("dialogue-furnace-smelt-amount").value)
}

function smelt(_0x15233, _0x15D8C)
{
	sendBytes("SMELT=" + _0x15233 + "~" + _0x15D8C)
}

function setMaxOreThatCanSmelt(_0x15233, _0x16F0C)
{
	var _0x19E37 = getItem(_0x15233);
	if (getItem(_0x15233) >= getItem("furnaceCapacity"))
	{
		_0x19E37 = getItem("furnaceCapacity")
	};
	if (_0x15233 == "titanium")
	{
		var _0x19E14 = _0x19E37 * getCharcoalCost(_0x15233);
		if (getItem("charcoal") < _0x19E14)
		{
			_0x19E37 = getItem("charcoal") / getCharcoalCost(_0x15233)
		}
	}
	else
	{
		var _0x19E5A = _0x19E37 * getOilCost(_0x15233);
		if (getItem("oil") < _0x19E5A)
		{
			_0x19E37 = getItem("oil") / getOilCost(_0x15233)
		}
	};
	document.getElementById("dialogue-furnace-smelt-amount").value = parseInt(_0x19E37)
}

function furnaceDialogueValueOnKeyUp(_0x15D69)
{
	document.getElementById("dialogue-furnace-htmlBoxes").innerHTML = "";
	if (isInt(_0x15D69))
	{
		if (_0x15D69 > 0)
		{
			itemNameArray = [];
			itemAmountRequiredArray = [];
			displayNameArray = [];
			itemNameArray[0] = global_tracker_furnaceDialgoue_ore;
			itemAmountRequiredArray[0] = _0x15D69;
			displayNameArray[0] = "";
			if (global_tracker_furnaceDialgoue_ore == "titanium")
			{
				itemNameArray[1] = "charcoal";
				itemAmountRequiredArray[1] = getCharcoalCost(global_tracker_furnaceDialgoue_ore) * _0x15D69;
				displayNameArray[1] = ""
			}
			else
			{
				itemNameArray[1] = "oil";
				itemAmountRequiredArray[1] = getOilCost(global_tracker_furnaceDialgoue_ore) * _0x15D69;
				displayNameArray[1] = ""
			};
			document.getElementById("dialogue-furnace-htmlBoxes").innerHTML = createHTMLBoxCheckOrXCollection(itemNameArray, itemAmountRequiredArray, displayNameArray)
		}
	}
}

function createHTMLBoxCheckOrXCollection(_0x16A89, _0x16A66, _0x16A43)
{
	var _0x15A44 = "";
	_0x15A44 += "<div>";
	for (var _0x14C0C = 0; _0x14C0C < _0x16A89.length; _0x14C0C++)
	{
		_0x15A44 += createHTMLBoxCheckOrX(_0x16A89[_0x14C0C], _0x16A66[_0x14C0C], _0x16A43[_0x14C0C])
	};
	_0x15A44 += "</div>";
	return _0x15A44
}

function createHTMLBoxCheckOrX(_0x15003, _0x16A20, _0x169DA)
{
	var _0x169B7 = "html-box-check-or-x";
	var _0x169FD = "<img src=\'images/x.png\' class=\'img-30\' />";
	if (getItem(_0x15003) >= _0x16A20)
	{
		_0x169FD = "<img src=\'images/check.png\' class=\'img-30\' />";
		_0x169B7 = "html-box-check-or-check"
	};
	var _0x15A44 = "";
	_0x15A44 += "<div class=" + _0x169B7 + ">";
	_0x15A44 += "<img src=\'images/" + _0x15003 + ".png\' class=\'img-50\' /> " + formatNumber(_0x16A20) + " " + _0x169DA + _0x169FD;
	_0x15A44 += "</div>";
	return _0x15A44
}

function generateHTMLToSelectOreFurnace(_0x16F0C, _0x15233)
{
	if (getItem(_0x15233) == 0 && !(_0x15233 == "copper"))
	{
		return ""
	};
	var _0x16F2F = getOilCost(_0x15233);
	var _0x16EE9 = "images/oil_lighter.png";
	if (_0x16F2F == 0)
	{
		_0x16F2F = getCharcoalCost(_0x15233);
		_0x16EE9 = "images/charcoal_light.png"
	};
	document.getElementById("dialogue-furnace-enterOre").innerHTML = "";
	document.getElementById("dialogue-furnace-htmlBoxes").innerHTML = "";
	var _0x15A44 = "";
	_0x15A44 += "<div onclick=\'openFurnaceDialogue2(\"" + _0x16F0C + "\",\"" + _0x15233 + "\")\' class=\'select-ore-furnace\'>" + getItemName(_0x15233).toUpperCase() + "<br />";
	_0x15A44 += "<img src=\'images/" + _0x15233 + ".png\' class=\'img-100\' />";
	_0x15A44 += "<hr class=\'hr-thin\' />";
	_0x15A44 += "<img src=\'" + _0x16EE9 + "\' class=\'img-30\' /> " + _0x16F2F;
	_0x15A44 += "</div>";
	return _0x15A44
}

function getTotalLootBagsOwned()
{
	var _0x1766E = 0;
	_0x1766E += getItem("fieldsLootBag");
	_0x1766E += getItem("forestLootBag");
	_0x1766E += getItem("cavesLootBag");
	_0x1766E += getItem("lavaDungeonLootBag");
	_0x1766E += getItem("northernFieldsLootBag");
	_0x1766E += getItem("cemeteryLootBag");
	_0x1766E += getItem("oceanLootBag");
	_0x1766E += getItem("dungeonLootBag");
	return _0x1766E
}

function lootDialogue(_0x14DB0)
{
	var _0x14DD3 = _0x14DB0.split("~");
	var _0x151A7 = _0x14DD3[0];
	var _0x17E7F = _0x14DD3[1];
	var _0x151CA = "<h1 style=\'text-align:center;\'>" + _0x151A7 + "</h1>";
	for (var _0x14C0C = 1; _0x14C0C < _0x14DD3.length - 1; _0x14C0C++)
	{
		var _0x17EA2 = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x17EC5 = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x17E39 = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x14D6A = _0x14DD3[_0x14C0C];
		_0x151CA += "<span class=\'loot-span\' style=\'background-color:" + _0x17E39 + ";border:1px solid " + _0x14D6A + "\'><img src=\'" + _0x17EA2 + "\' class=\'img-50\' /> " + _0x17EC5 + "</span>"
	};
	var _0x17E5C = _0x14DD3[_0x14DD3.length - 1];
	if (_0x17E5C == "none")
	{
		_0x17E5C = ""
	};
	confirmDialogue("none", _0x151CA, "Collect", "", _0x17E5C)
}

function getLevel(_0x1720E, _0x171EB)
{
	if (_0x1720E == 0)
	{
		return 1
	};
	var _0x171C8 = 100;
	if (_0x171EB)
	{
		_0x171C8 = 1000
	};
	for (var _0x14C0C = 1; _0x14C0C <= _0x171C8; _0x14C0C++)
	{
		var _0x17231 = 3 + (_0x14C0C / 200);
		var _0x15909 = Math.pow(_0x14C0C, _0x17231);
		if (_0x1720E < _0x15909)
		{
			return _0x14C0C - 1
		}
	};
	return _0x171C8
}

function getXpNeeded(_0x157AB)
{
	return parseInt(Math.pow(_0x157AB, 3 + (_0x157AB / 200)))
}

function getNextLevelXpNeeded(_0x156FC)
{
	return getXpNeeded(parseInt(getLevel(getItem(_0x156FC + "Xp"))) + 1)
}

function viewCastleKnightWeaknesses()
{
	var _0x15A44 = "<center><table class=\'basic-table\' width=\'100%\'>";
	_0x15A44 += "<tr style=\'background-color:#4d4d4d\'><th>Enemy</th><th>Info and Tips</th></tr>";
	_0x15A44 += "<tr><td width=\'25%\'><img src=\'images/knight1Monster_black.png\' class=\'img-50\' />" + "WAVE 1" + "<br /></span></td><td style=\'font-size:10pt;\'>Weak to slash attacks.</td></tr>";
	_0x15A44 += "<tr><td width=\'25%\'><img src=\'images/knight2Monster_black.png\' class=\'img-50\' />" + "WAVE 2" + "<br /></span></td><td style=\'font-size:10pt;\'>No weaknesses.<br />Charges during the fight.</td></tr>";
	_0x15A44 += "<tr><td width=\'25%\'><img src=\'images/knight3Monster_black.png\' class=\'img-50\' />" + "WAVE 3" + "<br /></span></td><td style=\'font-size:10pt;\'>No weaknesses.<br />Charges multiple times during the fight.<br />A black charge is an attack.<br />A <span style=\'color:green\'>green</span> charge is a heal.</td></tr>";
	_0x15A44 += "<tr><td width=\'25%\'><img src=\'images/knight4Monster_black.png\' class=\'img-50\' />" + "WAVE 4" + "<br /></span></td><td style=\'font-size:10pt;\'>Weak to stab attacks.<br />Poisons.</td></tr>";
	_0x15A44 += "<tr><td width=\'25%\'><img src=\'images/knight5Monster_black.png\' class=\'img-50\' />" + "WAVE 5" + "<br /></span></td><td style=\'font-size:10pt;\'>Weak to scythe and ice arrows.<br />Considered a ghost.<br />Alternates between shields to block attack types: <span style=\'color:red\'>Melee</span>, <span style=\'color:blue\'>magic</span> or <span style=\'color:green\'>range</span>.</td></tr>";
	_0x15A44 += "</table></center><br />";
	confirmDialogue("images/kingIcon.png", _0x15A44, "Back", "", "FIGHT_SOLDIERS")
}

function getGlobalLevel()
{
	var _0x1606B = 0;
	var _0x1613D = "";
	_0x1613D = "combat";
	if (getItem(_0x1613D + "Unlocked") == 1)
	{
		_0x1606B += getLevel(getItem(_0x1613D + "Xp"))
	};
	_0x1613D = "magic";
	if (getItem(_0x1613D + "Unlocked") == 1)
	{
		_0x1606B += getLevel(getItem(_0x1613D + "Xp"))
	};
	_0x1613D = "crafting";
	if (getItem(_0x1613D + "Unlocked") == 1)
	{
		_0x1606B += getLevel(getItem(_0x1613D + "Xp"))
	};
	_0x1613D = "brewing";
	if (getItem(_0x1613D + "Unlocked") == 1)
	{
		_0x1606B += getLevel(getItem(_0x1613D + "Xp"))
	};
	_0x1613D = "woodcutting";
	if (getItem(_0x1613D + "Unlocked") == 1)
	{
		_0x1606B += getLevel(getItem(_0x1613D + "Xp"))
	};
	_0x1613D = "cooking";
	if (getItem(_0x1613D + "Unlocked") == 1)
	{
		_0x1606B += getLevel(getItem(_0x1613D + "Xp"))
	};
	_0x1613D = "farming";
	if (getItem(_0x1613D + "Unlocked") == 1)
	{
		_0x1606B += getLevel(getItem(_0x1613D + "Xp"))
	};
	_0x1613D = "fishing";
	if (getItem(_0x1613D + "Unlocked") == 1)
	{
		_0x1606B += getLevel(getItem(_0x1613D + "Xp"))
	};
	_0x1613D = "mining";
	if (getItem(_0x1613D + "Unlocked") == 1)
	{
		_0x1606B += getLevel(getItem(_0x1613D + "Xp"))
	};
	return _0x1606B
}

function refreshTopSkillBar(_0x199B4)
{
	var _0x1613D = "";
	var _0x19991 = 0.0;
	var _0x17BC3 = "";
	document.getElementById("span-topBar-globalLevel").innerHTML = "Level " + getGlobalLevel();
	_0x1613D = "combat";
	_0x17BC3 = getLevel(getItem(_0x1613D + "Xp"));
	document.getElementById("span-topBar-" + _0x1613D + "Level").innerHTML = _0x17BC3;
	_0x19991 = (getItem(_0x1613D + "Xp") - getXpNeeded(getLevel(getItem(_0x1613D + "Xp")))) / (getXpNeeded(1 + getLevel(getItem(_0x1613D + "Xp"))) - getXpNeeded(getLevel(getItem(_0x1613D + "Xp"))));
	if (_0x19991 > 1)
	{
		_0x19991 = 1
	};
	document.getElementById("xp-bar-" + _0x1613D + "-inner").style.width = parseInt(_0x19991 * 100) + "%";
	if (_0x17BC3 >= 100)
	{
		document.getElementById("xp-bar-" + _0x1613D + "-inner").style.backgroundColor = "#00ace6"
	};
	_0x1613D = "magic";
	_0x17BC3 = getLevel(getItem(_0x1613D + "Xp"));
	document.getElementById("span-topBar-" + _0x1613D + "Level").innerHTML = _0x17BC3;
	_0x19991 = (getItem(_0x1613D + "Xp") - getXpNeeded(getLevel(getItem(_0x1613D + "Xp")))) / (getXpNeeded(1 + getLevel(getItem(_0x1613D + "Xp"))) - getXpNeeded(getLevel(getItem(_0x1613D + "Xp"))));
	if (_0x19991 > 1)
	{
		_0x19991 = 1
	};
	document.getElementById("xp-bar-" + _0x1613D + "-inner").style.width = parseInt(_0x19991 * 100) + "%";
	if (_0x17BC3 >= 100)
	{
		document.getElementById("xp-bar-" + _0x1613D + "-inner").style.backgroundColor = "#00ace6"
	};
	_0x1613D = "mining";
	_0x17BC3 = getLevel(getItem(_0x1613D + "Xp"));
	document.getElementById("span-topBar-" + _0x1613D + "Level").innerHTML = _0x17BC3;
	_0x19991 = (getItem(_0x1613D + "Xp") - getXpNeeded(getLevel(getItem(_0x1613D + "Xp")))) / (getXpNeeded(1 + getLevel(getItem(_0x1613D + "Xp"))) - getXpNeeded(getLevel(getItem(_0x1613D + "Xp"))));
	if (_0x19991 > 1)
	{
		_0x19991 = 1
	};
	document.getElementById("xp-bar-" + _0x1613D + "-inner").style.width = parseInt(_0x19991 * 100) + "%";
	if (_0x17BC3 >= 100)
	{
		document.getElementById("xp-bar-" + _0x1613D + "-inner").style.backgroundColor = "#00ace6"
	};
	_0x1613D = "crafting";
	_0x17BC3 = getLevel(getItem(_0x1613D + "Xp"));
	document.getElementById("span-topBar-" + _0x1613D + "Level").innerHTML = _0x17BC3;
	_0x19991 = (getItem(_0x1613D + "Xp") - getXpNeeded(getLevel(getItem(_0x1613D + "Xp")))) / (getXpNeeded(1 + getLevel(getItem(_0x1613D + "Xp"))) - getXpNeeded(getLevel(getItem(_0x1613D + "Xp"))));
	if (_0x19991 > 1)
	{
		_0x19991 = 1
	};
	document.getElementById("xp-bar-" + _0x1613D + "-inner").style.width = parseInt(_0x19991 * 100) + "%";
	if (_0x17BC3 >= 100)
	{
		document.getElementById("xp-bar-" + _0x1613D + "-inner").style.backgroundColor = "#00ace6"
	};
	_0x1613D = "woodcutting";
	_0x17BC3 = getLevel(getItem(_0x1613D + "Xp"));
	document.getElementById("span-topBar-" + _0x1613D + "Level").innerHTML = _0x17BC3;
	_0x19991 = (getItem(_0x1613D + "Xp") - getXpNeeded(getLevel(getItem(_0x1613D + "Xp")))) / (getXpNeeded(1 + getLevel(getItem(_0x1613D + "Xp"))) - getXpNeeded(getLevel(getItem(_0x1613D + "Xp"))));
	if (_0x19991 > 1)
	{
		_0x19991 = 1
	};
	document.getElementById("xp-bar-" + _0x1613D + "-inner").style.width = parseInt(_0x19991 * 100) + "%";
	if (_0x17BC3 >= 100)
	{
		document.getElementById("xp-bar-" + _0x1613D + "-inner").style.backgroundColor = "#00ace6";
		document.getElementById("xp-bar-" + _0x1613D + "-inner").style.width = "100" + "%"
	};
	_0x1613D = "farming";
	_0x17BC3 = getLevel(getItem(_0x1613D + "Xp"));
	document.getElementById("span-topBar-" + _0x1613D + "Level").innerHTML = _0x17BC3;
	_0x19991 = (getItem(_0x1613D + "Xp") - getXpNeeded(getLevel(getItem(_0x1613D + "Xp")))) / (getXpNeeded(1 + getLevel(getItem(_0x1613D + "Xp"))) - getXpNeeded(getLevel(getItem(_0x1613D + "Xp"))));
	if (_0x19991 > 1)
	{
		_0x19991 = 1
	};
	document.getElementById("xp-bar-" + _0x1613D + "-inner").style.width = parseInt(_0x19991 * 100) + "%";
	if (_0x17BC3 >= 100)
	{
		document.getElementById("xp-bar-" + _0x1613D + "-inner").style.backgroundColor = "#00ace6"
	};
	_0x1613D = "brewing";
	_0x17BC3 = getLevel(getItem(_0x1613D + "Xp"));
	document.getElementById("span-topBar-" + _0x1613D + "Level").innerHTML = _0x17BC3;
	_0x19991 = (getItem(_0x1613D + "Xp") - getXpNeeded(getLevel(getItem(_0x1613D + "Xp")))) / (getXpNeeded(1 + getLevel(getItem(_0x1613D + "Xp"))) - getXpNeeded(getLevel(getItem(_0x1613D + "Xp"))));
	if (_0x19991 > 1)
	{
		_0x19991 = 1
	};
	document.getElementById("xp-bar-" + _0x1613D + "-inner").style.width = parseInt(_0x19991 * 100) + "%";
	if (_0x17BC3 >= 100)
	{
		document.getElementById("xp-bar-" + _0x1613D + "-inner").style.backgroundColor = "#00ace6"
	};
	_0x1613D = "fishing";
	_0x17BC3 = getLevel(getItem(_0x1613D + "Xp"));
	document.getElementById("span-topBar-" + _0x1613D + "Level").innerHTML = _0x17BC3;
	_0x19991 = (getItem(_0x1613D + "Xp") - getXpNeeded(getLevel(getItem(_0x1613D + "Xp")))) / (getXpNeeded(1 + getLevel(getItem(_0x1613D + "Xp"))) - getXpNeeded(getLevel(getItem(_0x1613D + "Xp"))));
	if (_0x19991 > 1)
	{
		_0x19991 = 1
	};
	document.getElementById("xp-bar-" + _0x1613D + "-inner").style.minWidth = parseInt(_0x19991 * 100) + "%";
	if (_0x17BC3 >= 100)
	{
		document.getElementById("xp-bar-" + _0x1613D + "-inner").style.backgroundColor = "#00ace6"
	};
	_0x1613D = "cooking";
	_0x17BC3 = getLevel(getItem(_0x1613D + "Xp"));
	document.getElementById("span-topBar-" + _0x1613D + "Level").innerHTML = _0x17BC3;
	_0x19991 = (getItem(_0x1613D + "Xp") - getXpNeeded(getLevel(getItem(_0x1613D + "Xp")))) / (getXpNeeded(1 + getLevel(getItem(_0x1613D + "Xp"))) - getXpNeeded(getLevel(getItem(_0x1613D + "Xp"))));
	if (_0x19991 > 1)
	{
		_0x19991 = 1
	};
	document.getElementById("xp-bar-" + _0x1613D + "-inner").style.minWidth = parseInt(_0x19991 * 100) + "%";
	if (_0x17BC3 >= 100)
	{
		document.getElementById("xp-bar-" + _0x1613D + "-inner").style.backgroundColor = "#00ace6"
	}
}

function getSkillBackgroundColor(_0x156FC)
{
	switch (_0x156FC)
	{
	case "combat":
		return "#e6ac00";
		break
	}
}
var global_inLevelUpAnimationFlag = false;

function levelUp(_0x156FC, _0x17BC3)
{
	document.getElementById("top-bar-skills").style.display = "none";
	document.getElementById("top-bar-level-up").style.display = "";
	document.getElementById("top-bar-level-up").style.backgroundColor = getSkillBackgroundColor(_0x156FC);
	document.getElementById("level-up-msg-area-td").innerHTML = "<img src=\'images/" + _0x156FC + "Skill.png\' class=\'img-50\' /> " + "<b>LEVEL UP: </b>" + _0x17BC3 + " <img src=\'images/" + _0x156FC + "Skill.png\' class=\'img-50\' />";
	if (!global_inLevelUpAnimationFlag)
	{
		global_inLevelUpAnimationFlag = true;
		for (var _0x14C0C = 0; _0x14C0C < 10; _0x14C0C++)
		{
			if (_0x14C0C % 2 == 0)
			{
				$("#top-bar-level-up").fadeOut(500)
			}
			else
			{
				$("#top-bar-level-up").fadeIn(500)
			}
		};
		setTimeout(function ()
		{
			document.getElementById("top-bar-skills").style.display = "";
			document.getElementById("top-bar-level-up").style.display = "none";
			global_inLevelUpAnimationFlag = false
		}, 5500)
	}
}

function getEnergyRequired(_0x1636D)
{
	var _0x16CB9 = 0;
	switch (_0x1636D)
	{
	case "fields":
		_0x16CB9 = 50;
		break;
	case "forest":
		_0x16CB9 = 200;
		break
	};
	return _0x16CB9
}

function getAreaCooldown(_0x1636D)
{
	var _0x16F52 = 0;
	switch (_0x1636D)
	{
	case "fields":
		_0x16F52 = 3600 / 4;
		break;
	case "forest":
		_0x16F52 = 3600 / 2;
		break
	};
	return _0x16F52
}

function getEncountersImgArrayForAreaareaChosen(_0x1636D)
{
	_0x1636D = _0x1636D.toLowerCase();
	var _0x1706A = [];
	var _0x1613D = "";
	switch (_0x1636D)
	{
	case "fields":
		var _0x170D3 = false;
		var _0x1708D = [];
		_0x1613D = "chicken";
		_0x1706A.push(_0x1613D);
		if (getItem(_0x1613D + "Kills") >= 100)
		{
			_0x1706A.push("images/" + _0x1613D + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1613D + "Kills") >= 30)
			{
				_0x1706A.push("images/" + _0x1613D + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1613D + "Kills") >= 1)
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_green.png")
				}
				else
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_black.png")
				}
			}
		};
		_0x1708D[0] = getItem(_0x1613D + "Kills");
		_0x1613D = "rat";
		_0x1706A.push(_0x1613D);
		if (getItem(_0x1613D + "Kills") >= 100)
		{
			_0x1706A.push("images/" + _0x1613D + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1613D + "Kills") >= 30)
			{
				_0x1706A.push("images/" + _0x1613D + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1613D + "Kills") >= 1)
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_green.png")
				}
				else
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_black.png")
				}
			}
		};
		_0x1708D[1] = getItem(_0x1613D + "Kills");
		_0x1613D = "bee";
		_0x1706A.push(_0x1613D);
		if (getItem(_0x1613D + "Kills") >= 100)
		{
			_0x1706A.push("images/" + _0x1613D + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1613D + "Kills") >= 30)
			{
				_0x1706A.push("images/" + _0x1613D + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1613D + "Kills") >= 1)
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_green.png")
				}
				else
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_black.png")
				}
			}
		};
		_0x1708D[2] = getItem(_0x1613D + "Kills");
		var _0x170B0 = "images/redFightMarker.gif";
		if (Math.min.apply(null, _0x1708D) >= 100)
		{
			_0x170B0 = "images/blue2FightMarker.gif"
		}
		else
		{
			if (Math.min.apply(null, _0x1708D) >= 20)
			{
				_0x170B0 = "images/blueFightMarker.gif"
			}
			else
			{
				if (Math.min.apply(null, _0x1708D) >= 20)
				{
					_0x170B0 = "images/blueFightMarker.gif"
				}
				else
				{
					if (Math.min.apply(null, _0x1708D) >= 1)
					{
						_0x170B0 = "images/greenFightMarker.gif"
					}
					else
					{
						for (var _0x14C0C = 0; _0x14C0C < _0x1708D.length; _0x14C0C++)
						{
							if (_0x1708D[0] > 0)
							{
								_0x170B0 = "images/yellowFightMarker.gif";
								break
							}
						}
					}
				}
			}
		};
		_0x1706A.push(_0x170B0);
		break;
	case "forest":
		var _0x170D3 = false;
		var _0x1708D = [];
		_0x1613D = "snake";
		_0x1706A.push(_0x1613D);
		if (getItem(_0x1613D + "Kills") >= 100)
		{
			_0x1706A.push("images/" + _0x1613D + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1613D + "Kills") >= 30)
			{
				_0x1706A.push("images/" + _0x1613D + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1613D + "Kills") >= 1)
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_green.png")
				}
				else
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_black.png")
				}
			}
		};
		_0x1708D[0] = getItem(_0x1613D + "Kills");
		_0x1613D = "ent";
		_0x1706A.push(_0x1613D);
		if (getItem(_0x1613D + "Kills") >= 100)
		{
			_0x1706A.push("images/" + _0x1613D + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1613D + "Kills") >= 30)
			{
				_0x1706A.push("images/" + _0x1613D + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1613D + "Kills") >= 1)
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_green.png")
				}
				else
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_black.png")
				}
			}
		};
		_0x1708D[1] = getItem(_0x1613D + "Kills");
		_0x1613D = "thief";
		_0x1706A.push(_0x1613D);
		if (getItem(_0x1613D + "Kills") >= 100)
		{
			_0x1706A.push("images/" + _0x1613D + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1613D + "Kills") >= 30)
			{
				_0x1706A.push("images/" + _0x1613D + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1613D + "Kills") >= 1)
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_green.png")
				}
				else
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_black.png")
				}
			}
		};
		_0x1708D[2] = getItem(_0x1613D + "Kills");
		var _0x170B0 = "images/redFightMarker.gif";
		if (Math.min.apply(null, _0x1708D) >= 100)
		{
			_0x170B0 = "images/blue2FightMarker.gif"
		}
		else
		{
			if (Math.min.apply(null, _0x1708D) >= 20)
			{
				_0x170B0 = "images/blueFightMarker.gif"
			}
			else
			{
				if (Math.min.apply(null, _0x1708D) >= 1)
				{
					_0x170B0 = "images/greenFightMarker.gif"
				}
				else
				{
					for (var _0x14C0C = 0; _0x14C0C < _0x1708D.length; _0x14C0C++)
					{
						if (_0x1708D[0] > 0)
						{
							_0x170B0 = "images/yellowFightMarker.gif";
							break
						}
					}
				}
			}
		};
		_0x1706A.push(_0x170B0);
		break;
	case "caves":
		var _0x170D3 = false;
		var _0x1708D = [];
		_0x1613D = "bear";
		_0x1706A.push(_0x1613D);
		if (getItem(_0x1613D + "Kills") >= 100)
		{
			_0x1706A.push("images/" + _0x1613D + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1613D + "Kills") >= 30)
			{
				_0x1706A.push("images/" + _0x1613D + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1613D + "Kills") >= 1)
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_green.png")
				}
				else
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_black.png")
				}
			}
		};
		_0x1708D[0] = getItem(_0x1613D + "Kills");
		_0x1613D = "spider";
		_0x1706A.push(_0x1613D);
		if (getItem(_0x1613D + "Kills") >= 100)
		{
			_0x1706A.push("images/" + _0x1613D + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1613D + "Kills") >= 30)
			{
				_0x1706A.push("images/" + _0x1613D + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1613D + "Kills") >= 1)
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_green.png")
				}
				else
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_black.png")
				}
			}
		};
		_0x1708D[1] = getItem(_0x1613D + "Kills");
		_0x1613D = "skeleton";
		_0x1706A.push(_0x1613D);
		if (getItem(_0x1613D + "Kills") >= 100)
		{
			_0x1706A.push("images/" + _0x1613D + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1613D + "Kills") >= 30)
			{
				_0x1706A.push("images/" + _0x1613D + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1613D + "Kills") >= 1)
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_green.png")
				}
				else
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_black.png")
				}
			}
		};
		_0x1708D[2] = getItem(_0x1613D + "Kills");
		var _0x170B0 = "images/redFightMarker.gif";
		if (Math.min.apply(null, _0x1708D) >= 100)
		{
			_0x170B0 = "images/blue2FightMarker.gif"
		}
		else
		{
			if (Math.min.apply(null, _0x1708D) >= 20)
			{
				_0x170B0 = "images/blueFightMarker.gif"
			}
			else
			{
				if (Math.min.apply(null, _0x1708D) >= 1)
				{
					_0x170B0 = "images/greenFightMarker.gif"
				}
				else
				{
					for (var _0x14C0C = 0; _0x14C0C < _0x1708D.length; _0x14C0C++)
					{
						if (_0x1708D[0] > 0)
						{
							_0x170B0 = "images/yellowFightMarker.gif";
							break
						}
					}
				}
			}
		};
		_0x1706A.push(_0x170B0);
		break;
	case "lavadungeon":
		var _0x170D3 = false;
		var _0x1708D = [];
		_0x1613D = "lavaAlien";
		_0x1706A.push(_0x1613D);
		if (getItem(_0x1613D + "Kills") >= 100)
		{
			_0x1706A.push("images/" + _0x1613D + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1613D + "Kills") >= 30)
			{
				_0x1706A.push("images/" + _0x1613D + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1613D + "Kills") >= 1)
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_green.png")
				}
				else
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_black.png")
				}
			}
		};
		_0x1708D[0] = getItem(_0x1613D + "Kills");
		_0x1613D = "bat";
		_0x1706A.push(_0x1613D);
		if (getItem(_0x1613D + "Kills") >= 100)
		{
			_0x1706A.push("images/" + _0x1613D + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1613D + "Kills") >= 30)
			{
				_0x1706A.push("images/" + _0x1613D + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1613D + "Kills") >= 1)
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_green.png")
				}
				else
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_black.png")
				}
			}
		};
		_0x1708D[1] = getItem(_0x1613D + "Kills");
		_0x1613D = "fireMage";
		_0x1706A.push(_0x1613D);
		if (getItem(_0x1613D + "Kills") >= 100)
		{
			_0x1706A.push("images/" + _0x1613D + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1613D + "Kills") >= 30)
			{
				_0x1706A.push("images/" + _0x1613D + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1613D + "Kills") >= 1)
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_green.png")
				}
				else
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_black.png")
				}
			}
		};
		_0x1708D[2] = getItem(_0x1613D + "Kills");
		var _0x170B0 = "images/redFightMarker.gif";
		if (Math.min.apply(null, _0x1708D) >= 100)
		{
			_0x170B0 = "images/blueFightMarker.gif"
		}
		else
		{
			if (Math.min.apply(null, _0x1708D) >= 1)
			{
				_0x170B0 = "images/greenFightMarker.gif"
			}
			else
			{
				for (var _0x14C0C = 0; _0x14C0C < _0x1708D.length; _0x14C0C++)
				{
					if (_0x1708D[0] > 0)
					{
						_0x170B0 = "images/yellowFightMarker.gif";
						break
					}
				}
			}
		};
		_0x1706A.push(_0x170B0);
		break;
	case "northernfields":
		var _0x170D3 = false;
		var _0x1708D = [];
		_0x1613D = "boneHead";
		_0x1706A.push(_0x1613D);
		if (getItem(_0x1613D + "Kills") >= 100)
		{
			_0x1706A.push("images/" + _0x1613D + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1613D + "Kills") >= 30)
			{
				_0x1706A.push("images/" + _0x1613D + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1613D + "Kills") >= 1)
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_green.png")
				}
				else
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_black.png")
				}
			}
		};
		_0x1708D[0] = getItem(_0x1613D + "Kills");
		_0x1613D = "mammaPolarBear";
		_0x1706A.push(_0x1613D);
		if (getItem(_0x1613D + "Kills") >= 100)
		{
			_0x1706A.push("images/" + _0x1613D + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1613D + "Kills") >= 30)
			{
				_0x1706A.push("images/" + _0x1613D + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1613D + "Kills") >= 1)
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_green.png")
				}
				else
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_black.png")
				}
			}
		};
		_0x1708D[1] = getItem(_0x1613D + "Kills");
		_0x1613D = "yeti";
		_0x1706A.push(_0x1613D);
		if (getItem(_0x1613D + "Kills") >= 100)
		{
			_0x1706A.push("images/" + _0x1613D + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1613D + "Kills") >= 30)
			{
				_0x1706A.push("images/" + _0x1613D + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1613D + "Kills") >= 1)
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_green.png")
				}
				else
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_black.png")
				}
			}
		};
		_0x1708D[2] = getItem(_0x1613D + "Kills");
		var _0x170B0 = "images/redFightMarker.gif";
		if (Math.min.apply(null, _0x1708D) >= 100)
		{
			_0x170B0 = "images/blue2FightMarker.gif"
		}
		else
		{
			if (Math.min.apply(null, _0x1708D) >= 20)
			{
				_0x170B0 = "images/blueFightMarker.gif"
			}
			else
			{
				if (Math.min.apply(null, _0x1708D) >= 1)
				{
					_0x170B0 = "images/greenFightMarker.gif"
				}
				else
				{
					for (var _0x14C0C = 0; _0x14C0C < _0x1708D.length; _0x14C0C++)
					{
						if (_0x1708D[0] > 0)
						{
							_0x170B0 = "images/yellowFightMarker.gif";
							break
						}
					}
				}
			}
		};
		_0x1706A.push(_0x170B0);
		break;
	case "cemetery":
		var _0x170D3 = false;
		var _0x1708D = [];
		_0x1613D = "ghost";
		_0x1706A.push(_0x1613D);
		if (getItem(_0x1613D + "Kills") >= 100)
		{
			_0x1706A.push("images/" + _0x1613D + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1613D + "Kills") >= 30)
			{
				_0x1706A.push("images/" + _0x1613D + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1613D + "Kills") >= 1)
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_green.png")
				}
				else
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_black.png")
				}
			}
		};
		_0x1708D[0] = getItem(_0x1613D + "Kills");
		_0x1613D = "skeletonGhost";
		_0x1706A.push(_0x1613D);
		if (getItem(_0x1613D + "Kills") >= 100)
		{
			_0x1706A.push("images/" + _0x1613D + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1613D + "Kills") >= 30)
			{
				_0x1706A.push("images/" + _0x1613D + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1613D + "Kills") >= 1)
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_green.png")
				}
				else
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_black.png")
				}
			}
		};
		_0x1708D[1] = getItem(_0x1613D + "Kills");
		_0x1613D = "reaper";
		_0x1706A.push(_0x1613D);
		if (getItem(_0x1613D + "Kills") >= 100)
		{
			_0x1706A.push("images/" + _0x1613D + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1613D + "Kills") >= 30)
			{
				_0x1706A.push("images/" + _0x1613D + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1613D + "Kills") >= 1)
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_green.png")
				}
				else
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_black.png")
				}
			}
		};
		_0x1708D[2] = getItem(_0x1613D + "Kills");
		var _0x170B0 = "images/redFightMarker.gif";
		if (Math.min.apply(null, _0x1708D) >= 100)
		{
			_0x170B0 = "images/blue2FightMarker.gif"
		}
		else
		{
			if (Math.min.apply(null, _0x1708D) >= 20)
			{
				_0x170B0 = "images/blueFightMarker.gif"
			}
			else
			{
				if (Math.min.apply(null, _0x1708D) >= 1)
				{
					_0x170B0 = "images/greenFightMarker.gif"
				}
				else
				{
					for (var _0x14C0C = 0; _0x14C0C < _0x1708D.length; _0x14C0C++)
					{
						if (_0x1708D[0] > 0)
						{
							_0x170B0 = "images/yellowFightMarker.gif";
							break
						}
					}
				}
			}
		};
		_0x1706A.push(_0x170B0);
		break;
	case "ocean":
		var _0x170D3 = false;
		var _0x1708D = [];
		_0x1613D = "shark";
		_0x1706A.push(_0x1613D);
		if (getItem(_0x1613D + "Kills") >= 100)
		{
			_0x1706A.push("images/" + _0x1613D + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1613D + "Kills") >= 30)
			{
				_0x1706A.push("images/" + _0x1613D + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1613D + "Kills") >= 1)
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_green.png")
				}
				else
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_black.png")
				}
			}
		};
		_0x1708D[0] = getItem(_0x1613D + "Kills");
		_0x1613D = "pufferFish";
		_0x1706A.push(_0x1613D);
		if (getItem(_0x1613D + "Kills") >= 100)
		{
			_0x1706A.push("images/" + _0x1613D + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1613D + "Kills") >= 30)
			{
				_0x1706A.push("images/" + _0x1613D + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1613D + "Kills") >= 1)
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_green.png")
				}
				else
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_black.png")
				}
			}
		};
		_0x1708D[1] = getItem(_0x1613D + "Kills");
		_0x1613D = "tridentSoldier";
		_0x1706A.push(_0x1613D);
		if (getItem(_0x1613D + "Kills") >= 100)
		{
			_0x1706A.push("images/" + _0x1613D + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1613D + "Kills") >= 30)
			{
				_0x1706A.push("images/" + _0x1613D + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1613D + "Kills") >= 1)
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_green.png")
				}
				else
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_black.png")
				}
			}
		};
		_0x1708D[2] = getItem(_0x1613D + "Kills");
		var _0x170B0 = "images/redFightMarker.gif";
		if (Math.min.apply(null, _0x1708D) >= 100)
		{
			_0x170B0 = "images/blue2FightMarker.gif"
		}
		else
		{
			if (Math.min.apply(null, _0x1708D) >= 20)
			{
				_0x170B0 = "images/blueFightMarker.gif"
			}
			else
			{
				if (Math.min.apply(null, _0x1708D) >= 1)
				{
					_0x170B0 = "images/greenFightMarker.gif"
				}
				else
				{
					for (var _0x14C0C = 0; _0x14C0C < _0x1708D.length; _0x14C0C++)
					{
						if (_0x1708D[0] > 0)
						{
							_0x170B0 = "images/yellowFightMarker.gif";
							break
						}
					}
				}
			}
		};
		_0x1706A.push(_0x170B0);
		break;
	case "dungeon":
		var _0x170D3 = false;
		var _0x1708D = [];
		_0x1613D = "skeletonMonks";
		_0x1706A.push(_0x1613D);
		if (getItem(_0x1613D + "Kills") >= 100)
		{
			_0x1706A.push("images/" + _0x1613D + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1613D + "Kills") >= 30)
			{
				_0x1706A.push("images/" + _0x1613D + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1613D + "Kills") >= 1)
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_green.png")
				}
				else
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_black.png")
				}
			}
		};
		_0x1708D[0] = getItem(_0x1613D + "Kills");
		_0x1613D = "dungeonSpider";
		_0x1706A.push(_0x1613D);
		if (getItem(_0x1613D + "Kills") >= 100)
		{
			_0x1706A.push("images/" + _0x1613D + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1613D + "Kills") >= 30)
			{
				_0x1706A.push("images/" + _0x1613D + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1613D + "Kills") >= 1)
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_green.png")
				}
				else
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_black.png")
				}
			}
		};
		_0x1708D[1] = getItem(_0x1613D + "Kills");
		_0x1613D = "stoneWomen";
		_0x1706A.push(_0x1613D);
		if (getItem(_0x1613D + "Kills") >= 100)
		{
			_0x1706A.push("images/" + _0x1613D + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1613D + "Kills") >= 30)
			{
				_0x1706A.push("images/" + _0x1613D + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1613D + "Kills") >= 1)
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_green.png")
				}
				else
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_black.png")
				}
			}
		};
		_0x1708D[2] = getItem(_0x1613D + "Kills");
		var _0x170B0 = "images/redFightMarker.gif";
		if (Math.min.apply(null, _0x1708D) >= 100)
		{
			_0x170B0 = "images/blue2FightMarker.gif"
		}
		else
		{
			if (Math.min.apply(null, _0x1708D) >= 20)
			{
				_0x170B0 = "images/blueFightMarker.gif"
			}
			else
			{
				if (Math.min.apply(null, _0x1708D) >= 1)
				{
					_0x170B0 = "images/greenFightMarker.gif"
				}
				else
				{
					for (var _0x14C0C = 0; _0x14C0C < _0x1708D.length; _0x14C0C++)
					{
						if (_0x1708D[0] > 0)
						{
							_0x170B0 = "images/yellowFightMarker.gif";
							break
						}
					}
				}
			}
		};
		_0x1706A.push(_0x170B0);
		break
	};
	return _0x1706A
}

function refreshCombatMap()
{
	showCombatMap()
}

function showStarsMap()
{
	document.getElementById("stars-map-div").style.display = "";
	document.getElementById("right-panel").style.display = "none";
	document.getElementById("notification-area").style.display = "none";
	document.getElementById("top-bar-skills").style.display = "none";
	document.getElementById("table-top-main-items").style.display = "none";
	document.getElementById("navigation-area-buttons").style.display = "none";
	changeBodyBackground("images/greatDipper.png")
}

function exitStarsMap()
{
	document.getElementById("stars-map-div").style.display = "none";
	if (document.getElementById("minimize-btn").style.display != "none")
	{
		document.getElementById("top-bar-skills").style.display = ""
	};
	document.getElementById("table-top-main-items").style.display = "";
	document.getElementById("notification-area").style.display = "";
	document.getElementById("right-panel").style.display = "";
	document.getElementById("navigation-area-buttons").style.display = "";
	resetBodyBackground();
	navigate("right-combat")
}

function showCombatMap()
{
	document.getElementById("combat-map-div").style.display = "";
	document.getElementById("combat-map-thumbnails-div").style.display = "";
	document.getElementById("right-panel").style.display = "none";
	document.getElementById("notification-area").style.display = "none";
	document.getElementById("top-bar-skills").style.display = "none";
	document.getElementById("table-top-main-items").style.display = "none";
	document.getElementById("navigation-area-buttons").style.display = "none";
	refreshCombatThumbnails()
}

function refreshCombatThumbnails()
{
	if (getItem("castleAccess") > 0)
	{
		document.getElementById("combat-thumbnail-castle").style.display = ""
	};
	if (getItem("snakeKills") > 0 || getItem("entKills") > 0 || getItem("thiefKills") > 0)
	{
		document.getElementById("combat-thumbnail-fields").style.display = "";
		document.getElementById("combat-thumbnail-forest").style.display = ""
	};
	if (getItem("bearKills") > 0 || getItem("spiderKills") > 0 || getItem("skeletonKills") > 0)
	{
		document.getElementById("combat-thumbnail-caves").style.display = ""
	};
	if (getItem("lavaAlienKills") > 0 || getItem("batKills") > 0 || getItem("fireMageKills") > 0)
	{
		document.getElementById("combat-thumbnail-lavaDungeon").style.display = ""
	};
	if (getItem("boneHeadKills") > 0 || getItem("mammaPolarBearKills") > 0 || getItem("yetiKills") > 0)
	{
		document.getElementById("combat-thumbnail-northernFields").style.display = ""
	};
	if (getItem("ghostKills") > 0 || getItem("skeletonGhostKills") > 0 || getItem("reaperKills") > 0)
	{
		document.getElementById("combat-thumbnail-cemetery").style.display = ""
	};
	if (getItem("pufferFishKills") > 0 || getItem("sharkKills") > 0 || getItem("tridentSoldierKills") > 0)
	{
		document.getElementById("combat-thumbnail-ocean").style.display = ""
	};
	if (getItem("skeletonMonksKills") > 0 || getItem("dungeonSpiderKills") > 0 || getItem("stoneWomenKills") > 0)
	{
		document.getElementById("combat-thumbnail-dungeon").style.display = ""
	};
	if (getItem("skeletonMonksKills") > 0 || getItem("dungeonSpiderKills") > 0 || getItem("stoneWomenKills") > 0)
	{
		document.getElementById("combat-thumbnail-dungeon").style.display = ""
	}
}

function exitCombatMap()
{
	$(window).scrollTop(0);
	document.getElementById("combat-map-div").style.display = "none";
	document.getElementById("combat-map-thumbnails-div").style.display = "none";
	document.getElementById("top-bar-skills").style.display = "";
	if (document.getElementById("minimize-btn").style.display != "none")
	{
		document.getElementById("table-top-main-items").style.display = ""
	};
	document.getElementById("notification-area").style.display = "";
	document.getElementById("right-panel").style.display = "";
	document.getElementById("navigation-area-buttons").style.display = "";
	navigate("right-combat")
}

function shakeRocketNotificationImage()
{
	$("#notification-rocket").effect("shake"
	, {
		direction: "left"
		, times: 100
		, distance: 1
	}, 10000);
	$("#item-box-rocket-image").effect("shake"
	, {
		direction: "left"
		, times: 100
		, distance: 1
	}, 10000)
}

function idleFightingCanvasTick()
{
	if (global_lastTabId != "right-combat-fighting")
	{
		return
	};
	global_canvasFightingHero2D.clearRect(0, 0, global_canvasFightingHero.width, global_canvasFightingHero.height);
	if (!variableExists("global_idleFightingHeroCanvasTickFrame"))
	{
		global_idleFightingHeroCanvasTickFrame = new idleFightingHeroCanvasTickFrame()
	};
	global_idleFightingHeroCanvasTickFrame.tick();
	if (global_heroFlicker && getRandomInt(1) == 0)
	{
		global_canvasFightingHero2D.shadowBlur = 5;
		global_canvasFightingHero2D.shadowColor = "yellow"
	}
	else
	{
		global_canvasFightingHero2D.shadowBlur = 0
	};
	if (getItem("heroStunned"))
	{
		global_canvasFightingHero2D.shadowBlur = 50;
		global_canvasFightingHero2D.shadowColor = "cyan"
	};
	if (getItem("invisibilityTimer") >= 1)
	{
		global_canvasFightingHero2D.globalAlpha = 0
	}
	else
	{
		global_canvasFightingHero2D.globalAlpha = 1.0
	};
	global_canvasFightingHero2D.drawImage(getImage("images/" + getItem("body", true) + "Equip.png", "hero_idle_body"), 0, global_idleFightingHeroCanvasTickFrame.getYValue());
	global_canvasFightingHero2D.drawImage(getImage("images/" + getItem("head", true) + "Equip.png", "hero_idle_head"), 0, global_idleFightingHeroCanvasTickFrame.getYValue());
	global_canvasFightingHero2D.drawImage(getImage("images/" + getItem("amulet", true) + "Equip.png", "hero_idle_amulet"), 0, global_idleFightingHeroCanvasTickFrame.getYValue());
	global_canvasFightingHero2D.drawImage(getImage("images/" + getItem("boots", true) + "Equip.png", "hero_idle_boots"), 0, 0);
	global_canvasFightingHero2D.drawImage(getImage("images/" + getItem("legs", true) + "Equip.png", "hero_idle_legs"), 0, global_idleFightingHeroCanvasTickFrame.getYValue() / 4);
	global_canvasFightingHero2D.drawImage(getImage("images/" + getItem("gloves", true) + "Equip.png", "hero_idle_gloves"), 0, global_idleFightingHeroCanvasTickFrame.getYValue());
	global_canvasFightingHero2D.drawImage(getImage("images/" + getItem("shield", true) + "Equip.png", "hero_fighting_shield"), 0, global_idleFightingHeroCanvasTickFrame.getYValue());
	global_canvasFightingHero2D.drawImage(getImage("images/" + getItem("weapon", true) + "Equip.png", "hero_fighting_weapon"), 0, global_idleFightingHeroCanvasTickFrame.getYValue());
	global_canvasFightingHero2D.drawImage(getImage("images/" + getItem("arrows", true) + "Equip.png", "hero_fighting_arrows"), 0, 0);
	global_heroHitAnimationHashSet.forEach((_0x16C0A) =>
	{
		return _0x16C0A.draw(100, 350)
	})
}

function clicksFightingButton(_0x1636D)
{
	$(window).scrollTop(0);
	if (getItem("giantSnakeTimer") > 0 && _0x1636D == "forest")
	{
		confirmDialogue2("images/warning.png", "There is currently a giant snake roaming the forest.  If you manage to find it, would you like to fight it?<br /><br /><span style=\'color:grey\'>The giant snake is not 100% guaranteed.</span>", "Yes, I\'m not scared!", "No, fight normal forest monsters", "Cancel", "FIGHT_WITH_GIANT_SNAKE=" + _0x1636D, "FIGHT=" + _0x1636D)
	}
	else
	{
		if (getItem("honey") > 0 && _0x1636D == "caves")
		{
			confirmDialogue2("images/honey.png", "Would you like to bring honey with you?<br /><br /><span style=\'color:grey\'>You will lose the honey when combat begins.</span>", "Bring 1 honey", "No, just find a fight", "Cancel", "FIGHT_WITH_ONE_HONEY=" + _0x1636D, "FIGHT=" + _0x1636D)
		}
		else
		{
			if (getItem("telescope") > 0 && _0x1636D == "fields")
			{
				sendBytes("FIGHT=" + _0x1636D)
			}
			else
			{
				if (_0x1636D == "fields" && getItem("combatXp") == 0 && getItemString("weapon") == "weapon")
				{
					confirmDialogue("images/rustySword.png", "I should maybe equip a weapon before fighting.", "Close", "", "");
					return
				};
				openConfirmDialogueFighting(_0x1636D)
			}
		}
	};
	exitCombatMap()
}

function openConfirmDialogueFighting(_0x1636D)
{
	document.getElementById("dialogue-fightingMarkerDialogue-title").innerHTML = getItemName(_0x1636D).toUpperCase();
	document.getElementById("dialogue-fightingMarkerDialogue-title-area").src = "images/" + _0x1636D + ".png";
	openDialogueOverride("dialogue-fightingMarkerDialogue", "large");
	document.getElementById("dialogue-fightingMarkerDialogue-areaWarning").style.display = "none";
	if (_0x1636D == "northernFields")
	{
		document.getElementById("dialogue-fightingMarkerDialogue-areaWarning").style.display = "";
		document.getElementById("dialogue-fightingMarkerDialogue-areaWarning").innerHTML = "<img src=\'images/snowmanIcon.png\' class=\'img-30\' /> Be prepared for cold weather.";
		setTimeout(function ()
		{
			document.getElementById("dialogue-fightingMarkerDialogue-areaWarning").style.border = "1px solid red"
		}, 500);
		setTimeout(function ()
		{
			document.getElementById("dialogue-fightingMarkerDialogue-areaWarning").style.border = ""
		}, 1000);
		setTimeout(function ()
		{
			document.getElementById("dialogue-fightingMarkerDialogue-areaWarning").style.border = "1px solid red"
		}, 1500);
		setTimeout(function ()
		{
			document.getElementById("dialogue-fightingMarkerDialogue-areaWarning").style.border = ""
		}, 2000);
		setTimeout(function ()
		{
			document.getElementById("dialogue-fightingMarkerDialogue-areaWarning").style.border = "1px solid red"
		}, 2500);
		setTimeout(function ()
		{
			document.getElementById("dialogue-fightingMarkerDialogue-areaWarning").style.border = ""
		}, 3000);
		setTimeout(function ()
		{
			document.getElementById("dialogue-fightingMarkerDialogue-areaWarning").style.border = "1px solid red"
		}, 3500);
		setTimeout(function ()
		{
			document.getElementById("dialogue-fightingMarkerDialogue-areaWarning").style.border = ""
		}, 4000)
	};
	if (_0x1636D == "ocean")
	{
		document.getElementById("dialogue-fightingMarkerDialogue-areaWarning").style.display = "";
		document.getElementById("dialogue-fightingMarkerDialogue-areaWarning").innerHTML = "<img src=\'images/waveIcon.png\' class=\'img-30\' /> Attack speed reduced while fighting under water.";
		setTimeout(function ()
		{
			document.getElementById("dialogue-fightingMarkerDialogue-areaWarning").style.border = "1px solid red"
		}, 500);
		setTimeout(function ()
		{
			document.getElementById("dialogue-fightingMarkerDialogue-areaWarning").style.border = ""
		}, 1000);
		setTimeout(function ()
		{
			document.getElementById("dialogue-fightingMarkerDialogue-areaWarning").style.border = "1px solid red"
		}, 1500);
		setTimeout(function ()
		{
			document.getElementById("dialogue-fightingMarkerDialogue-areaWarning").style.border = ""
		}, 2000);
		setTimeout(function ()
		{
			document.getElementById("dialogue-fightingMarkerDialogue-areaWarning").style.border = "1px solid red"
		}, 2500);
		setTimeout(function ()
		{
			document.getElementById("dialogue-fightingMarkerDialogue-areaWarning").style.border = ""
		}, 3000);
		setTimeout(function ()
		{
			document.getElementById("dialogue-fightingMarkerDialogue-areaWarning").style.border = "1px solid red"
		}, 3500);
		setTimeout(function ()
		{
			document.getElementById("dialogue-fightingMarkerDialogue-areaWarning").style.border = ""
		}, 4000)
	};
	var _0x187CB = document.getElementById("dialogue-fightingMarkerDialogue-hints");
	var _0x187A8 = getEncountersImgArrayForAreaareaChosen(_0x1636D);
	var _0x18857 = _0x187A8[0];
	var _0x18834 = _0x187A8[1];
	var _0x18811 = getMonsterHint(_0x18857);
	var _0x1894C = "";
	if (getItemString("repelMonster") == _0x18857)
	{
		_0x1894C = "<br /><span style=\'color:red\'>REPELLED</b>"
	};
	var _0x188C0 = _0x187A8[2];
	var _0x1889D = _0x187A8[3];
	var _0x1887A = getMonsterHint(_0x188C0);
	var _0x1896F = "";
	if (getItemString("repelMonster") == _0x188C0)
	{
		_0x1896F = "<br /><span style=\'color:red\'>REPELLED</b>"
	};
	var _0x18929 = _0x187A8[4];
	var _0x18906 = _0x187A8[5];
	var _0x188E3 = getMonsterHint(_0x18929);
	var _0x18992 = "";
	if (getItemString("repelMonster") == _0x18929)
	{
		_0x18992 = "<br /><span style=\'color:red\'>REPELLED</b>"
	};
	var _0x15A44 = "<center><table class=\'basic-table\' width=\'100%\'>";
	_0x15A44 += "<tr style=\'background-color:#4d4d4d\'><th>Enemy</th><th>Info and Tips</th></tr>";
	_0x15A44 += "<tr><td width=\'25%\'><img style=\'float:left;\' src=\'" + _0x18834 + "\' class=\'img-50\' />" + getItemName(_0x18857) + "<br /><span style=\'color:grey;font-size:10pt;\'>(" + getItem(_0x18857 + "Kills") + " kills)</span></td><td style=\'font-size:10pt;\'>" + _0x18811 + _0x1894C + "</td></tr>";
	_0x15A44 += "<tr style=\'background-color:silver\'><td width=\'25%\'><img style=\'float:left;\' src=\'" + _0x1889D + "\' class=\'img-50\' />" + getItemName(_0x188C0) + "<br /><span style=\'color:grey;font-size:10pt;\'>(" + getItem(_0x188C0 + "Kills") + " kills)</span></td><td style=\'font-size:10pt;\'>" + _0x1887A + _0x1896F + "</td></tr>";
	_0x15A44 += "<tr><td width=\'25%\'><img style=\'float:left;\' src=\'" + _0x18906 + "\' class=\'img-50\' />" + getItemName(_0x18929) + "<br /><span style=\'color:grey;font-size:10pt;\'>(" + getItem(_0x18929 + "Kills") + " kills)</span></td><td style=\'font-size:10pt;\'>" + _0x188E3 + _0x18992 + "</td></tr>";
	_0x15A44 += "</table></center><br />";
	_0x187CB.innerHTML = _0x15A44;
	document.getElementById("dialogue-fightingMarkerDialogue-areaWarning2").style.display = "none";
	var _0x187EE = "";
	if (getItem("heroHp") < getItem("heroMaxHp"))
	{
		_0x187EE += "<img src=\'images/warning.png\' class=\'img-20\' /> You are not full HP!<br />"
	};
	if (getItem("heroMana") < getItem("heroMaxMana"))
	{
		_0x187EE += "<img src=\'images/warning.png\' class=\'img-20\' /> Your mana is not full!<br />"
	};
	if (getItem("teleportCooldown") > 0)
	{
		_0x187EE += "<img src=\'images/teleportIcon.png\' class=\'img-20\' /> Teleport on cooldown for <b>" + formatTime(getItem("teleportCooldown")) + "</b>.<br />"
	};
	if (getItemString("arrows") == "arrows" && getItemString("weapon") == "bow")
	{
		_0x187EE += "<img src=\'images/warning.png\' class=\'img-20\' /> You don\'t have arrows equipped!<br />"
	};
	if (_0x187EE.length > 0)
	{
		document.getElementById("dialogue-fightingMarkerDialogue-areaWarning2").style.display = "";
		document.getElementById("dialogue-fightingMarkerDialogue-areaWarning2").innerHTML = _0x187EE
	};
	document.getElementById("fightingMarkerDialogue-confirm-yes").setAttribute("onclick", "closeDialogue(\'dialogue-fightingMarkerDialogue\');sendBytes(\'FIGHT=" + _0x1636D + "\')")
}

function clicksWatch()
{
	if (selectedSeed == "none")
	{
		if (getItemString("watchSeed") != "none")
		{
			confirmDialogue("images/watch.png", "Stop using Watch?", "Stop Using Watch", "Close", "RESET_WATCH")
		}
		else
		{
			if (getWatchTypeData()[2] == "sapphire")
			{
				confirmDialogue("images/sapphire.png", "Add a sapphire to your watch?<br /><br /><span style=\'color:grey\'>Upgrading the watch allows bob to do more farming runs for you.", "Socket Watch", "Close", "SOCKET=watch")
			};
			if (getWatchTypeData()[2] == "emerald")
			{
				confirmDialogue("images/emerald.png", "Add a emerald to your watch?<br /><br /><span style=\'color:grey\'>Upgrading the watch allows bob to do more farming runs for you.", "Socket Watch", "Close", "SOCKET=watch")
			};
			if (getWatchTypeData()[2] == "ruby")
			{
				confirmDialogue("images/ruby.png", "Add a ruby to your watch?<br /><br /><span style=\'color:grey\'>Upgrading the watch allows bob to do more farming runs for you.", "Socket Watch", "Close", "SOCKET=watch")
			};
			if (getWatchTypeData()[2] == "diamond")
			{
				confirmDialogue("images/diamond.png", "Add a diamond to your watch?<br /><br /><span style=\'color:grey\'>Upgrading the watch allows bob to do more farming runs for you.", "Socket Watch", "Close", "SOCKET=watch")
			}
		}
	}
	else
	{
		var _0x16741 = selectedSeed;
		selectedSeed = "none";
		resetSeedItemBoxBorders();
		sendBytes("WATCH_USE=" + _0x16741)
	}
}

function getMonsterHint(_0x166D8)
{
	switch (_0x166D8)
	{
	case "tridentSoldier":
		return "<img src=\'images/info_grey.png\' class=\'img-20\' />  After every 8 normal attacks, his weapon will charge.  If the trident soldier is over 30 HP, his charge will deal damage.  If not, it will heal him.";
	case "pufferFish":
		return "<img src=\'images/info_grey.png\' class=\'img-20\' />  Full of air, just a like a balloon.";
	case "shark":
		return "<img src=\'images/info_grey.png\' class=\'img-20\' />  Bites at a fixed interval, instantly killing you.";
	case "reaper":
		return "<img src=\'images/info_grey.png\' class=\'img-20\' />  His eyes begin to glow when he charges a strong attack.";
	case "ghost":
		return "<img src=\'images/info_grey.png\' class=\'img-20\' />  Can avoid attacks by going invisibile.";
	case "yeti":
		return "<img src=\'images/info_grey.png\' class=\'img-20\' />  Yeti\'s spend most of their time sleeping.";
	case "fireMage":
		return "<img src=\'images/info_grey.png\' class=\'img-20\' />  Randomly heals.";
	case "lavaAlien":
		return "<img src=\'images/info_grey.png\' class=\'img-20\' />  Charges for a strong attack at 30 HP.";
	case "spider":
		return "<img src=\'images/info_grey.png\' class=\'img-20\' />  Spits out poison at 6 HP.";
	case "thief":
		return "<img src=\'images/info_grey.png\' class=\'img-20\' />  Watch out!  He\'s after your money!";
	case "snake":
		return "<img src=\'images/info_grey.png\' class=\'img-20\' />  Having full snakeskin armour will negate all damages from snakes.";
	case "chicken":
		return "<img src=\'images/info_grey.png\' class=\'img-20\' />  A great source of feathers.";
	case "bee":
		return "<img src=\'images/info_grey.png\' class=\'img-20\' /> Attacks slighty faster than a rat or chicken.";
	case "skeletonMonks":
		return "<img src=\'images/info_grey.png\' class=\'img-20\' /> Attacking a charged skeleton monk will heal them for the damage dealt.<br />Also constantly heals when reaching low hp.";
	case "dungeonSpider":
		return "<img src=\'images/info_grey.png\' class=\'img-20\' /> Spits out poison at 30 HP.";
	case "stoneWomen":
		return "<img src=\'images/info_grey.png\' class=\'img-20\' /> Has 6 different forms and changes between them regularly.<br />Each form has a major weakness which is hinted in the sprite.<br />The form it begins with has no weaknesses.";
	default:
		return "<span style=\'color:grey\'>(No hints available for this NPC)</span>"
	}
}

function clicksFightingBossButton(_0x1634A)
{
	$(window).scrollTop(0);
	if (_0x1634A == "fireHawk")
	{
		confirmDialogue("none", "<center><img src=\'images/bossMarker.gif\' /><br /><br />Fight this boss?<br /><br /><span style=\'color:red\'>It is extremely hot in here.</span></center>", "Fight", "Run", "FIGHT_BOSS=" + _0x1634A)
	}
	else
	{
		confirmDialogue("none", "<center><img src=\'images/bossMarker.gif\' /><br /><br />Fight this boss?</center>", "Fight", "Run", "FIGHT_BOSS=" + _0x1634A)
	};
	exitCombatMap()
}

function WitchMonster()
{
	this.name = "witch";
	this.idleAnimationObject = new MonsterAnimation("idle", [0], 24);
	this.frameAt = 0;
	this.speedAt = 0;
	this.currentAnimation = this.idleAnimationObject;
	this.preloadImages = function ()
	{
		var _0x159B8 = this.idleAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x14C0C + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		}
	};
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			if (getItem("freezeTimer") == 0)
			{
				this.frameAt++
			};
			if (this.frameAt >= animationObj.getNumberOfFrames())
			{
				this.frameAt = 0
			};
			this.speedAt = 0
		}
		else
		{
			this.speedAt++
		}
	};
	this.getImage = function ()
	{
		return getImage("images/" + this.name + "_" + "monster" + "_" + this.currentAnimation.name + "_" + this.currentAnimation.framesArray[this.frameAt] + ".png", this.name + "_" + this.frameAt + "_" + this.currentAnimation)
	};
	this.getDeathImage = function ()
	{
		return getImage("images/" + this.name + "Monster_black.png", "images/" + this.name + "Monster_black.png")
	};
	this.getWidth = function ()
	{
		return this.getImage().width
	};
	this.getHeight = function ()
	{
		return this.getImage().height
	}
}

function ChickenMonster()
{
	this.name = "chicken";
	this.idleAnimationObject = new MonsterAnimation("idle", [0, 1], 24);
	this.frameAt = 0;
	this.speedAt = 0;
	this.currentAnimation = this.idleAnimationObject;
	this.preloadImages = function ()
	{
		var _0x159B8 = this.idleAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x14C0C + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		}
	};
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			if (getItem("freezeTimer") == 0)
			{
				this.frameAt++
			};
			if (this.frameAt >= animationObj.getNumberOfFrames())
			{
				this.frameAt = 0
			};
			this.speedAt = 0
		}
		else
		{
			this.speedAt++
		}
	};
	this.getImage = function ()
	{
		return getImage("images/" + this.name + "_" + "monster" + "_" + this.currentAnimation.name + "_" + this.currentAnimation.framesArray[this.frameAt] + ".png", this.name + "_" + this.frameAt + "_" + this.currentAnimation)
	};
	this.getDeathImage = function ()
	{
		return getImage("images/" + this.name + "Monster_black.png", "images/" + this.name + "Monster_black.png")
	};
	this.getWidth = function ()
	{
		return this.getImage().width
	};
	this.getHeight = function ()
	{
		return this.getImage().height
	}
}

function BoneHeadMonster()
{
	this.name = "boneHead";
	this.idleAnimationObject = new MonsterAnimation("idle", [0, 1], 24);
	this.frameAt = 0;
	this.speedAt = 0;
	this.currentAnimation = this.idleAnimationObject;
	this.preloadImages = function ()
	{
		var _0x159B8 = this.idleAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x14C0C + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		}
	};
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			if (getItem("freezeTimer") == 0)
			{
				this.frameAt++
			};
			if (this.frameAt >= animationObj.getNumberOfFrames())
			{
				this.frameAt = 0
			};
			this.speedAt = 0
		}
		else
		{
			this.speedAt++
		}
	};
	this.getImage = function ()
	{
		return getImage("images/" + this.name + "_" + "monster" + "_" + this.currentAnimation.name + "_" + this.currentAnimation.framesArray[this.frameAt] + ".png", this.name + "_" + this.frameAt + "_" + this.currentAnimation)
	};
	this.getDeathImage = function ()
	{
		return getImage("images/" + this.name + "Monster_black.png", "images/" + this.name + "Monster_black.png")
	};
	this.getWidth = function ()
	{
		return this.getImage().width
	};
	this.getHeight = function ()
	{
		return this.getImage().height
	}
}

function Knight1Monster()
{
	this.name = "knight1";
	this.idleAnimationObject = new MonsterAnimation("idle", [0, 1], 24);
	this.frameAt = 0;
	this.speedAt = 0;
	this.currentAnimation = this.idleAnimationObject;
	this.preloadImages = function ()
	{
		var _0x159B8 = this.idleAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x14C0C + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		}
	};
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			if (getItem("freezeTimer") == 0)
			{
				this.frameAt++
			};
			if (this.frameAt >= animationObj.getNumberOfFrames())
			{
				this.frameAt = 0
			};
			this.speedAt = 0
		}
		else
		{
			this.speedAt++
		}
	};
	this.getImage = function ()
	{
		return getImage("images/" + this.name + "_" + "monster" + "_" + this.currentAnimation.name + "_" + this.currentAnimation.framesArray[this.frameAt] + ".png", this.name + "_" + this.frameAt + "_" + this.currentAnimation)
	};
	this.getDeathImage = function ()
	{
		return getImage("images/" + this.name + "Monster_black.png", "images/" + this.name + "Monster_black.png")
	};
	this.getWidth = function ()
	{
		return this.getImage().width
	};
	this.getHeight = function ()
	{
		return this.getImage().height
	}
}

function Knight4Monster()
{
	this.name = "knight4";
	this.idleAnimationObject = new MonsterAnimation("idle", [0, 1], 24);
	this.frameAt = 0;
	this.speedAt = 0;
	this.currentAnimation = this.idleAnimationObject;
	this.preloadImages = function ()
	{
		var _0x159B8 = this.idleAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x14C0C + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		}
	};
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			if (getItem("freezeTimer") == 0)
			{
				this.frameAt++
			};
			if (this.frameAt >= animationObj.getNumberOfFrames())
			{
				this.frameAt = 0
			};
			this.speedAt = 0
		}
		else
		{
			this.speedAt++
		}
	};
	this.getImage = function ()
	{
		return getImage("images/" + this.name + "_" + "monster" + "_" + this.currentAnimation.name + "_" + this.currentAnimation.framesArray[this.frameAt] + ".png", this.name + "_" + this.frameAt + "_" + this.currentAnimation)
	};
	this.getDeathImage = function ()
	{
		return getImage("images/" + this.name + "Monster_black.png", "images/" + this.name + "Monster_black.png")
	};
	this.getWidth = function ()
	{
		return this.getImage().width
	};
	this.getHeight = function ()
	{
		return this.getImage().height
	}
}

function Knight5Monster()
{
	this.name = "knight5";
	this.idleAnimationObject = new MonsterAnimation("idle", [0, 1, 2, 3], 10);
	this.meleeAnimationObject = new MonsterAnimation("melee", [0, 1, 2, 3], 10);
	this.rangeAnimationObject = new MonsterAnimation("range", [0, 1, 2, 3], 10);
	this.mageAnimationObject = new MonsterAnimation("magic", [0, 1, 2, 3], 10);
	this.frameAt = 0;
	this.speedAt = 0;
	this.currentAnimation = this.idleAnimationObject;
	this.preloadImages = function ()
	{
		var _0x159B8 = this.idleAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x14C0C + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		};
		var _0x159B8 = this.mageAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x14C0C + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		};
		var _0x159B8 = this.rangeAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x14C0C + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		};
		var _0x159B8 = this.meleeAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x14C0C + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		}
	};
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			if (getItem("freezeTimer") == 0)
			{
				this.frameAt++
			};
			if (this.frameAt >= animationObj.getNumberOfFrames())
			{
				this.frameAt = 0
			};
			this.speedAt = 0
		}
		else
		{
			this.speedAt++
		}
	};
	this.callAnimation = function (_0x159FE)
	{
		switch (_0x159FE)
		{
		case 1:
			this.frameAt = 0;
			this.speedAt = 0;
			this.currentAnimation = this.meleeAnimationObject;
			break;
		case 2:
			this.frameAt = 0;
			this.speedAt = 0;
			this.currentAnimation = this.rangeAnimationObject;
			break;
		case 3:
			this.frameAt = 0;
			this.speedAt = 0;
			this.currentAnimation = this.mageAnimationObject;
			break;
		default:
			this.frameAt = 0;
			this.speedAt = 0;
			this.currentAnimation = this.idleAnimationObject;
			break
		}
	};
	this.getImage = function ()
	{
		return getImage("images/" + this.name + "_" + "monster" + "_" + this.currentAnimation.name + "_" + this.currentAnimation.framesArray[this.frameAt] + ".png", this.name + "_" + this.frameAt + "_" + this.currentAnimation)
	};
	this.getDeathImage = function ()
	{
		return getImage("images/" + this.name + "Monster_black.png", "images/" + this.name + "Monster_black.png")
	};
	this.getWidth = function ()
	{
		return this.getImage().width
	};
	this.getHeight = function ()
	{
		return this.getImage().height
	}
}

function Knight2Monster()
{
	this.name = "knight2";
	this.idleAnimationObject = new MonsterAnimation("idle", [0, 1], 24);
	this.hideAnimationObject = new MonsterAnimation("thunder", [0, 1], 4);
	this.frameAt = 0;
	this.speedAt = 0;
	this.currentAnimation = this.idleAnimationObject;
	this.preloadImages = function ()
	{
		var _0x159B8 = this.idleAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x14C0C + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		};
		var _0x159B8 = this.hideAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x14C0C + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		}
	};
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			if (getItem("freezeTimer") == 0)
			{
				this.frameAt++
			};
			if (this.frameAt >= animationObj.getNumberOfFrames())
			{
				this.frameAt = 0
			};
			this.speedAt = 0
		}
		else
		{
			this.speedAt++
		}
	};
	this.callAnimation = function (_0x159FE)
	{
		switch (_0x159FE)
		{
		case 1:
			this.frameAt = 0;
			this.speedAt = 0;
			this.currentAnimation = this.hideAnimationObject;
			break;
		default:
			this.frameAt = 0;
			this.speedAt = 0;
			this.currentAnimation = this.idleAnimationObject;
			break
		}
	};
	this.getImage = function ()
	{
		return getImage("images/" + this.name + "_" + "monster" + "_" + this.currentAnimation.name + "_" + this.currentAnimation.framesArray[this.frameAt] + ".png", this.name + "_" + this.frameAt + "_" + this.currentAnimation)
	};
	this.getDeathImage = function ()
	{
		return getImage("images/" + this.name + "Monster_black.png", "images/" + this.name + "Monster_black.png")
	};
	this.getWidth = function ()
	{
		return this.getImage().width
	};
	this.getHeight = function ()
	{
		return this.getImage().height
	}
}

function Knight3Monster()
{
	this.name = "knight3";
	this.idleAnimationObject = new MonsterAnimation("idle", [0, 1], 24);
	this.hideAnimationObject = new MonsterAnimation("shadow", [0, 1], 4);
	this.healAnimationObject = new MonsterAnimation("heal", [0, 1], 4);
	this.frameAt = 0;
	this.speedAt = 0;
	this.currentAnimation = this.idleAnimationObject;
	this.preloadImages = function ()
	{
		var _0x159B8 = this.idleAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x14C0C + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		};
		var _0x159B8 = this.hideAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x14C0C + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		};
		var _0x159B8 = this.healAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x14C0C + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		}
	};
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			if (getItem("freezeTimer") == 0)
			{
				this.frameAt++
			};
			if (this.frameAt >= animationObj.getNumberOfFrames())
			{
				this.frameAt = 0
			};
			this.speedAt = 0
		}
		else
		{
			this.speedAt++
		}
	};
	this.callAnimation = function (_0x159FE)
	{
		switch (_0x159FE)
		{
		case 1:
			this.frameAt = 0;
			this.speedAt = 0;
			this.currentAnimation = this.hideAnimationObject;
			break;
		case 2:
			this.frameAt = 0;
			this.speedAt = 0;
			this.currentAnimation = this.healAnimationObject;
			break;
		default:
			this.frameAt = 0;
			this.speedAt = 0;
			this.currentAnimation = this.idleAnimationObject;
			break
		}
	};
	this.getImage = function ()
	{
		return getImage("images/" + this.name + "_" + "monster" + "_" + this.currentAnimation.name + "_" + this.currentAnimation.framesArray[this.frameAt] + ".png", this.name + "_" + this.frameAt + "_" + this.currentAnimation)
	};
	this.getDeathImage = function ()
	{
		return getImage("images/" + this.name + "Monster_black.png", "images/" + this.name + "Monster_black.png")
	};
	this.getWidth = function ()
	{
		return this.getImage().width
	};
	this.getHeight = function ()
	{
		return this.getImage().height
	}
}

function GhostMonster()
{
	this.name = "ghost";
	this.idleAnimationObject = new MonsterAnimation("idle", [0, 1], 24);
	this.frameAt = 0;
	this.speedAt = 0;
	this.currentAnimation = this.idleAnimationObject;
	this.preloadImages = function ()
	{
		var _0x159B8 = this.idleAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x14C0C + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		}
	};
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			if (getItem("freezeTimer") == 0)
			{
				this.frameAt++
			};
			if (this.frameAt >= animationObj.getNumberOfFrames())
			{
				this.frameAt = 0
			};
			this.speedAt = 0
		}
		else
		{
			this.speedAt++
		}
	};
	this.getImage = function ()
	{
		return getImage("images/" + this.name + "_" + "monster" + "_" + this.currentAnimation.name + "_" + this.currentAnimation.framesArray[this.frameAt] + ".png", this.name + "_" + this.frameAt + "_" + this.currentAnimation)
	};
	this.getDeathImage = function ()
	{
		return getImage("images/" + this.name + "Monster_black.png", "images/" + this.name + "Monster_black.png")
	};
	this.getWidth = function ()
	{
		return this.getImage().width
	};
	this.getHeight = function ()
	{
		return this.getImage().height
	}
}

function ExplorerMonster()
{
	this.name = "explorer";
	this.idleAnimationObject = new MonsterAnimation("idle", [0, 1], 24);
	this.frameAt = 0;
	this.speedAt = 0;
	this.currentAnimation = this.idleAnimationObject;
	this.preloadImages = function ()
	{
		var _0x159B8 = this.idleAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x14C0C + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		}
	};
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			if (getItem("freezeTimer") == 0)
			{
				this.frameAt++
			};
			if (this.frameAt >= animationObj.getNumberOfFrames())
			{
				this.frameAt = 0
			};
			this.speedAt = 0
		}
		else
		{
			this.speedAt++
		}
	};
	this.getImage = function ()
	{
		return getImage("images/" + this.name + "_" + "monster" + "_" + this.currentAnimation.name + "_" + this.currentAnimation.framesArray[this.frameAt] + ".png", this.name + "_" + this.frameAt + "_" + this.currentAnimation)
	};
	this.getDeathImage = function ()
	{
		return getImage("images/" + this.name + "Monster_black.png", "images/" + this.name + "Monster_black.png")
	};
	this.getWidth = function ()
	{
		return this.getImage().width
	};
	this.getHeight = function ()
	{
		return this.getImage().height
	}
}

function SkeletonGhostMonster()
{
	this.name = "skeletonGhost";
	this.idleAnimationObject = new MonsterAnimation("idle", [0, 1], 24);
	this.frameAt = 0;
	this.speedAt = 0;
	this.currentAnimation = this.idleAnimationObject;
	this.preloadImages = function ()
	{
		var _0x159B8 = this.idleAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x14C0C + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		}
	};
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			if (getItem("freezeTimer") == 0)
			{
				this.frameAt++
			};
			if (this.frameAt >= animationObj.getNumberOfFrames())
			{
				this.frameAt = 0
			};
			this.speedAt = 0
		}
		else
		{
			this.speedAt++
		}
	};
	this.getImage = function ()
	{
		return getImage("images/" + this.name + "_" + "monster" + "_" + this.currentAnimation.name + "_" + this.currentAnimation.framesArray[this.frameAt] + ".png", this.name + "_" + this.frameAt + "_" + this.currentAnimation)
	};
	this.getDeathImage = function ()
	{
		return getImage("images/" + this.name + "Monster_black.png", "images/" + this.name + "Monster_black.png")
	};
	this.getWidth = function ()
	{
		return this.getImage().width
	};
	this.getHeight = function ()
	{
		return this.getImage().height
	}
}

function titaniumRocketBoostersMoreInfo()
{
	confirmDialogue("images/titaniumRocketBoosters.png", "A notification can show up at anytime, and will not go away until it\'s activated.  Activing it greatly increases rocket speed for a short duration.<br /><br /><i style=\'color:grey;font-size:10pt;\'>You always get one boost minimum per trip at the beginning.</i>", "Close", "", "")
}

function CemeterySkeletonMonster()
{
	this.name = "cemeterySkeleton";
	this.idleAnimationObject = new MonsterAnimation("idle", [0, 1], 24);
	this.frameAt = 0;
	this.speedAt = 0;
	this.currentAnimation = this.idleAnimationObject;
	this.preloadImages = function ()
	{
		var _0x159B8 = this.idleAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x14C0C + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		}
	};
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			if (getItem("freezeTimer") == 0)
			{
				this.frameAt++
			};
			if (this.frameAt >= animationObj.getNumberOfFrames())
			{
				this.frameAt = 0
			};
			this.speedAt = 0
		}
		else
		{
			this.speedAt++
		}
	};
	this.getImage = function ()
	{
		return getImage("images/" + this.name + "_" + "monster" + "_" + this.currentAnimation.name + "_" + this.currentAnimation.framesArray[this.frameAt] + ".png", this.name + "_" + this.frameAt + "_" + this.currentAnimation)
	};
	this.getDeathImage = function ()
	{
		return getImage("images/" + this.name + "Monster_black.png", "images/" + this.name + "Monster_black.png")
	};
	this.getWidth = function ()
	{
		return this.getImage().width
	};
	this.getHeight = function ()
	{
		return this.getImage().height
	}
}

function FireCemeterySkeletonMonster()
{
	this.name = "fireCemeterySkeleton";
	this.idleAnimationObject = new MonsterAnimation("idle", [0, 1], 24);
	this.frameAt = 0;
	this.speedAt = 0;
	this.currentAnimation = this.idleAnimationObject;
	this.preloadImages = function ()
	{
		var _0x159B8 = this.idleAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x14C0C + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		}
	};
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			if (getItem("freezeTimer") == 0)
			{
				this.frameAt++
			};
			if (this.frameAt >= animationObj.getNumberOfFrames())
			{
				this.frameAt = 0
			};
			this.speedAt = 0
		}
		else
		{
			this.speedAt++
		}
	};
	this.getImage = function ()
	{
		return getImage("images/" + this.name + "_" + "monster" + "_" + this.currentAnimation.name + "_" + this.currentAnimation.framesArray[this.frameAt] + ".png", this.name + "_" + this.frameAt + "_" + this.currentAnimation)
	};
	this.getDeathImage = function ()
	{
		return getImage("images/" + this.name + "Monster_black.png", "images/" + this.name + "Monster_black.png")
	};
	this.getWidth = function ()
	{
		return this.getImage().width
	};
	this.getHeight = function ()
	{
		return this.getImage().height
	}
}

function IceCemeterySkeletonMonster()
{
	this.name = "iceCemeterySkeleton";
	this.idleAnimationObject = new MonsterAnimation("idle", [0, 1], 24);
	this.frameAt = 0;
	this.speedAt = 0;
	this.currentAnimation = this.idleAnimationObject;
	this.preloadImages = function ()
	{
		var _0x159B8 = this.idleAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x14C0C + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		}
	};
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			if (getItem("freezeTimer") == 0)
			{
				this.frameAt++
			};
			if (this.frameAt >= animationObj.getNumberOfFrames())
			{
				this.frameAt = 0
			};
			this.speedAt = 0
		}
		else
		{
			this.speedAt++
		}
	};
	this.getImage = function ()
	{
		return getImage("images/" + this.name + "_" + "monster" + "_" + this.currentAnimation.name + "_" + this.currentAnimation.framesArray[this.frameAt] + ".png", this.name + "_" + this.frameAt + "_" + this.currentAnimation)
	};
	this.getDeathImage = function ()
	{
		return getImage("images/" + this.name + "Monster_black.png", "images/" + this.name + "Monster_black.png")
	};
	this.getWidth = function ()
	{
		return this.getImage().width
	};
	this.getHeight = function ()
	{
		return this.getImage().height
	}
}

function SkyChickenMonster()
{
	this.name = "skyChicken";
	this.idleAnimationObject = new MonsterAnimation("idle", [0, 1], 24);
	this.frameAt = 0;
	this.speedAt = 0;
	this.currentAnimation = this.idleAnimationObject;
	this.preloadImages = function ()
	{
		var _0x159B8 = this.idleAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x14C0C + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		}
	};
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			if (getItem("freezeTimer") == 0)
			{
				this.frameAt++
			};
			if (this.frameAt >= animationObj.getNumberOfFrames())
			{
				this.frameAt = 0
			};
			this.speedAt = 0
		}
		else
		{
			this.speedAt++
		}
	};
	this.getImage = function ()
	{
		return getImage("images/" + this.name + "_" + "monster" + "_" + this.currentAnimation.name + "_" + this.currentAnimation.framesArray[this.frameAt] + ".png", this.name + "_" + this.frameAt + "_" + this.currentAnimation)
	};
	this.getDeathImage = function ()
	{
		return getImage("images/" + this.name + "Monster_black.png", "images/" + this.name + "Monster_black.png")
	};
	this.getWidth = function ()
	{
		return this.getImage().width
	};
	this.getHeight = function ()
	{
		return this.getImage().height
	}
}

function RatMonster()
{
	this.name = "rat";
	this.idleAnimationObject = new MonsterAnimation("idle", [0, 1], 24);
	this.frameAt = 0;
	this.speedAt = 0;
	this.currentAnimation = this.idleAnimationObject;
	this.preloadImages = function ()
	{
		var _0x159B8 = this.idleAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x14C0C + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		}
	};
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			if (getItem("freezeTimer") == 0)
			{
				this.frameAt++
			};
			if (this.frameAt >= animationObj.getNumberOfFrames())
			{
				this.frameAt = 0
			};
			this.speedAt = 0
		}
		else
		{
			this.speedAt++
		}
	};
	this.getImage = function ()
	{
		return getImage("images/" + this.name + "_" + "monster" + "_" + this.currentAnimation.name + "_" + this.currentAnimation.framesArray[this.frameAt] + ".png", this.name + "_" + this.frameAt + "_" + this.currentAnimation)
	};
	this.getDeathImage = function ()
	{
		return getImage("images/" + this.name + "Monster_black.png", "images/" + this.name + "Monster_black.png")
	};
	this.getWidth = function ()
	{
		return this.getImage().width
	};
	this.getHeight = function ()
	{
		return this.getImage().height
	}
}

function BeeMonster()
{
	this.name = "bee";
	this.idleAnimationObject = new MonsterAnimation("idle", [0, 1, 2, 3], 5);
	this.frameAt = 0;
	this.speedAt = 0;
	this.currentAnimation = this.idleAnimationObject;
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			if (getItem("freezeTimer") == 0)
			{
				this.frameAt++
			};
			if (this.frameAt >= animationObj.getNumberOfFrames())
			{
				this.frameAt = 0
			};
			this.speedAt = 0
		}
		else
		{
			this.speedAt++
		}
	};
	this.preloadImages = function ()
	{
		var _0x159B8 = this.idleAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + [_0x14C0C] + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		}
	};
	this.getImage = function ()
	{
		return getImage("images/" + this.name + "_" + "monster" + "_" + this.currentAnimation.name + "_" + this.currentAnimation.framesArray[this.frameAt] + ".png", this.name + "_" + this.frameAt + "_" + this.currentAnimation)
	};
	this.getDeathImage = function ()
	{
		return getImage("images/" + this.name + "Monster_black.png", "images/" + this.name + "Monster_black.png")
	};
	this.getWidth = function ()
	{
		return this.getImage().width
	};
	this.getHeight = function ()
	{
		return this.getImage().height
	}
}

function BatMonster()
{
	this.name = "bat";
	this.idleAnimationObject = new MonsterAnimation("idle", [0, 1, 2, 3], 5);
	this.frameAt = 0;
	this.speedAt = 0;
	this.currentAnimation = this.idleAnimationObject;
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			if (getItem("freezeTimer") == 0)
			{
				this.frameAt++
			};
			if (this.frameAt >= animationObj.getNumberOfFrames())
			{
				this.frameAt = 0
			};
			this.speedAt = 0
		}
		else
		{
			this.speedAt++
		}
	};
	this.preloadImages = function ()
	{
		var _0x159B8 = this.idleAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + [_0x14C0C] + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		}
	};
	this.getImage = function ()
	{
		return getImage("images/" + this.name + "_" + "monster" + "_" + this.currentAnimation.name + "_" + this.currentAnimation.framesArray[this.frameAt] + ".png", this.name + "_" + this.frameAt + "_" + this.currentAnimation)
	};
	this.getDeathImage = function ()
	{
		return getImage("images/" + this.name + "Monster_black.png", "images/" + this.name + "Monster_black.png")
	};
	this.getWidth = function ()
	{
		return this.getImage().width
	};
	this.getHeight = function ()
	{
		return this.getImage().height
	}
}

function FireMageMonster()
{
	this.name = "fireMage";
	this.idleAnimationObject = new MonsterAnimation("idle", [0, 1, 2], 12);
	this.frameAt = 0;
	this.speedAt = 0;
	this.currentAnimation = this.idleAnimationObject;
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			if (getItem("freezeTimer") == 0)
			{
				this.frameAt++
			};
			if (this.frameAt >= animationObj.getNumberOfFrames())
			{
				this.frameAt = 0
			};
			this.speedAt = 0
		}
		else
		{
			this.speedAt++
		}
	};
	this.preloadImages = function ()
	{
		var _0x159B8 = this.idleAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + [_0x14C0C] + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		}
	};
	this.getImage = function ()
	{
		return getImage("images/" + this.name + "_" + "monster" + "_" + this.currentAnimation.name + "_" + this.currentAnimation.framesArray[this.frameAt] + ".png", this.name + "_" + this.frameAt + "_" + this.currentAnimation)
	};
	this.getDeathImage = function ()
	{
		return getImage("images/" + this.name + "Monster_black.png", "images/" + this.name + "Monster_black.png")
	};
	this.getWidth = function ()
	{
		return this.getImage().width
	};
	this.getHeight = function ()
	{
		return this.getImage().height
	}
}

function SnakeMonster()
{
	this.name = "snake";
	this.idleAnimationObject = new MonsterAnimation("idle", [0, 1], 24);
	this.frameAt = 0;
	this.speedAt = 0;
	this.currentAnimation = this.idleAnimationObject;
	this.preloadImages = function ()
	{
		var _0x159B8 = this.idleAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x14C0C + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		}
	};
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			if (getItem("freezeTimer") == 0)
			{
				this.frameAt++
			};
			if (this.frameAt >= animationObj.getNumberOfFrames())
			{
				this.frameAt = 0
			};
			this.speedAt = 0
		}
		else
		{
			this.speedAt++
		}
	};
	this.getImage = function ()
	{
		return getImage("images/" + this.name + "_" + "monster" + "_" + this.currentAnimation.name + "_" + this.currentAnimation.framesArray[this.frameAt] + ".png", this.name + "_" + this.frameAt + "_" + this.currentAnimation)
	};
	this.getDeathImage = function ()
	{
		return getImage("images/" + this.name + "Monster_black.png", "images/" + this.name + "Monster_black.png")
	};
	this.getWidth = function ()
	{
		return this.getImage().width
	};
	this.getHeight = function ()
	{
		return this.getImage().height
	}
}

function BearMonster()
{
	this.name = "bear";
	this.idleAnimationObject = new MonsterAnimation("idle", [0, 1], 24);
	this.frameAt = 0;
	this.speedAt = 0;
	this.currentAnimation = this.idleAnimationObject;
	this.preloadImages = function ()
	{
		var _0x159B8 = this.idleAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x14C0C + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		}
	};
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			if (getItem("freezeTimer") == 0)
			{
				this.frameAt++
			};
			if (this.frameAt >= animationObj.getNumberOfFrames())
			{
				this.frameAt = 0
			};
			this.speedAt = 0
		}
		else
		{
			this.speedAt++
		}
	};
	this.getImage = function ()
	{
		return getImage("images/" + this.name + "_" + "monster" + "_" + this.currentAnimation.name + "_" + this.currentAnimation.framesArray[this.frameAt] + ".png", this.name + "_" + this.frameAt + "_" + this.currentAnimation)
	};
	this.getDeathImage = function ()
	{
		return getImage("images/" + this.name + "Monster_black.png", "images/" + this.name + "Monster_black.png")
	};
	this.getWidth = function ()
	{
		return this.getImage().width
	};
	this.getHeight = function ()
	{
		return this.getImage().height
	}
}

function BearPackMonster()
{
	this.name = "bearPack";
	this.idleAnimationObject = new MonsterAnimation("idle", [0, 1], 24);
	this.frameAt = 0;
	this.speedAt = 0;
	this.currentAnimation = this.idleAnimationObject;
	this.preloadImages = function ()
	{
		var _0x159B8 = this.idleAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x14C0C + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		}
	};
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			if (getItem("freezeTimer") == 0)
			{
				this.frameAt++
			};
			if (this.frameAt >= animationObj.getNumberOfFrames())
			{
				this.frameAt = 0
			};
			this.speedAt = 0
		}
		else
		{
			this.speedAt++
		}
	};
	this.getImage = function ()
	{
		return getImage("images/" + this.name + "_" + "monster" + "_" + this.currentAnimation.name + "_" + this.currentAnimation.framesArray[this.frameAt] + ".png", this.name + "_" + this.frameAt + "_" + this.currentAnimation)
	};
	this.getDeathImage = function ()
	{
		return getImage("images/" + this.name + "Monster_black.png", "images/" + this.name + "Monster_black.png")
	};
	this.getWidth = function ()
	{
		return this.getImage().width
	};
	this.getHeight = function ()
	{
		return this.getImage().height
	}
}

function SpiderMonster()
{
	this.name = "spider";
	this.idleAnimationObject = new MonsterAnimation("idle", [0], 24);
	this.secondaryAnimationObject = new MonsterAnimation("poison", [0, 1, 2, 3, 0, 0, 0, 0, 0], 4);
	this.frameAt = 0;
	this.speedAt = 0;
	this.currentAnimation = this.idleAnimationObject;
	this.preloadImages = function ()
	{
		var _0x159B8 = this.idleAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x14C0C + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		};
		var _0x159B8 = this.secondaryAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x14C0C + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		}
	};
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			if (getItem("freezeTimer") == 0)
			{
				this.frameAt++
			};
			if (this.frameAt >= animationObj.getNumberOfFrames())
			{
				this.frameAt = 0
			};
			this.speedAt = 0
		}
		else
		{
			this.speedAt++
		}
	};
	this.getImage = function ()
	{
		return getImage("images/" + this.name + "_" + "monster" + "_" + this.currentAnimation.name + "_" + this.currentAnimation.framesArray[this.frameAt] + ".png", this.name + "_" + this.frameAt + "_" + this.currentAnimation)
	};
	this.getDeathImage = function ()
	{
		return getImage("images/" + this.name + "Monster_black.png", "images/" + this.name + "Monster_black.png")
	};
	this.getWidth = function ()
	{
		return this.getImage().width
	};
	this.getHeight = function ()
	{
		return this.getImage().height
	};
	this.callAnimation = function (_0x159FE)
	{
		switch (_0x159FE)
		{
		case 1:
			this.frameAt = 0;
			this.speedAt = 0;
			this.currentAnimation = this.secondaryAnimationObject;
			break
		}
	}
}

function DungeonSpiderMonster()
{
	this.name = "dungeonSpider";
	this.idleAnimationObject = new MonsterAnimation("idle", [0], 24);
	this.secondaryAnimationObject = new MonsterAnimation("poison", [0, 1, 2, 3, 0, 0, 0, 0, 0], 4);
	this.frameAt = 0;
	this.speedAt = 0;
	this.currentAnimation = this.idleAnimationObject;
	this.preloadImages = function ()
	{
		var _0x159B8 = this.idleAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x14C0C + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		};
		var _0x159B8 = this.secondaryAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x14C0C + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		}
	};
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			if (getItem("freezeTimer") == 0)
			{
				this.frameAt++
			};
			if (this.frameAt >= animationObj.getNumberOfFrames())
			{
				this.frameAt = 0
			};
			this.speedAt = 0
		}
		else
		{
			this.speedAt++
		}
	};
	this.getImage = function ()
	{
		return getImage("images/" + this.name + "_" + "monster" + "_" + this.currentAnimation.name + "_" + this.currentAnimation.framesArray[this.frameAt] + ".png", this.name + "_" + this.frameAt + "_" + this.currentAnimation)
	};
	this.getDeathImage = function ()
	{
		return getImage("images/" + this.name + "Monster_black.png", "images/" + this.name + "Monster_black.png")
	};
	this.getWidth = function ()
	{
		return this.getImage().width
	};
	this.getHeight = function ()
	{
		return this.getImage().height
	};
	this.callAnimation = function (_0x159FE)
	{
		switch (_0x159FE)
		{
		case 1:
			this.frameAt = 0;
			this.speedAt = 0;
			this.currentAnimation = this.secondaryAnimationObject;
			break
		}
	}
}

function SkeletonMonksMonster()
{
	this.name = "skeletonMonks";
	this.idleAnimationObject = new MonsterAnimation("idle", [0], 24);
	this.secondaryAnimationObject = new MonsterAnimation("charge", [0], 24);
	this.frameAt = 0;
	this.speedAt = 0;
	this.currentAnimation = this.idleAnimationObject;
	this.preloadImages = function ()
	{
		var _0x159B8 = this.idleAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x14C0C + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		};
		var _0x159B8 = this.secondaryAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x14C0C + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		}
	};
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			if (getItem("freezeTimer") == 0)
			{
				this.frameAt++
			};
			if (this.frameAt >= animationObj.getNumberOfFrames())
			{
				this.frameAt = 0
			};
			this.speedAt = 0
		}
		else
		{
			this.speedAt++
		}
	};
	this.getImage = function ()
	{
		return getImage("images/" + this.name + "_" + "monster" + "_" + this.currentAnimation.name + "_" + this.currentAnimation.framesArray[this.frameAt] + ".png", this.name + "_" + this.frameAt + "_" + this.currentAnimation)
	};
	this.getDeathImage = function ()
	{
		return getImage("images/" + this.name + "Monster_black.png", "images/" + this.name + "Monster_black.png")
	};
	this.getWidth = function ()
	{
		return this.getImage().width
	};
	this.getHeight = function ()
	{
		return this.getImage().height
	};
	this.callAnimation = function (_0x159FE)
	{
		switch (_0x159FE)
		{
		case 1:
			this.frameAt = 0;
			this.speedAt = 0;
			this.currentAnimation = this.secondaryAnimationObject;
			break;
		default:
			this.frameAt = 0;
			this.speedAt = 0;
			this.currentAnimation = this.idleAnimationObject;
			break
		}
	}
}

function StoneWomenMonster()
{
	this.name = "stoneWomen";
	this.idleAnimationObject = new MonsterAnimation("idle", [0], 24);
	this.greenAnimationObject = new MonsterAnimation("green", [0], 24);
	this.blueAnimationObject = new MonsterAnimation("blue", [0], 24);
	this.purpleAnimationObject = new MonsterAnimation("purple", [0], 24);
	this.redAnimationObject = new MonsterAnimation("red", [0], 24);
	this.yellowAnimationObject = new MonsterAnimation("yellow", [0], 24);
	this.frameAt = 0;
	this.speedAt = 0;
	this.currentAnimation = this.idleAnimationObject;
	this.preloadImages = function ()
	{
		var _0x159B8 = this.greenAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x14C0C + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		};
		var _0x159B8 = this.blueAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x14C0C + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		};
		var _0x159B8 = this.purpleAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x14C0C + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		};
		var _0x159B8 = this.redAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x14C0C + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		};
		var _0x159B8 = this.yellowAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x14C0C + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		}
	};
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			if (getItem("freezeTimer") == 0)
			{
				this.frameAt++
			};
			if (this.frameAt >= animationObj.getNumberOfFrames())
			{
				this.frameAt = 0
			};
			this.speedAt = 0
		}
		else
		{
			this.speedAt++
		}
	};
	this.getImage = function ()
	{
		return getImage("images/" + this.name + "_" + "monster" + "_" + this.currentAnimation.name + "_" + this.currentAnimation.framesArray[this.frameAt] + ".png", this.name + "_" + this.frameAt + "_" + this.currentAnimation)
	};
	this.getDeathImage = function ()
	{
		return getImage("images/" + this.name + "Monster_black.png", "images/" + this.name + "Monster_black.png")
	};
	this.getWidth = function ()
	{
		return this.getImage().width
	};
	this.getHeight = function ()
	{
		return this.getImage().height
	};
	this.callAnimation = function (_0x159FE)
	{
		switch (_0x159FE)
		{
		case 1:
			this.frameAt = 0;
			this.speedAt = 0;
			this.currentAnimation = this.greenAnimationObject;
			break;
		case 2:
			this.frameAt = 0;
			this.speedAt = 0;
			this.currentAnimation = this.blueAnimationObject;
			break;
		case 3:
			this.frameAt = 0;
			this.speedAt = 0;
			this.currentAnimation = this.purpleAnimationObject;
			break;
		case 4:
			this.frameAt = 0;
			this.speedAt = 0;
			this.currentAnimation = this.redAnimationObject;
			break;
		case 5:
			this.frameAt = 0;
			this.speedAt = 0;
			this.currentAnimation = this.yellowAnimationObject;
			break;
		default:
			this.frameAt = 0;
			this.speedAt = 0;
			this.currentAnimation = this.idleAnimationObject;
			break
		}
	}
}

function SkeletonMonster()
{
	this.name = "skeleton";
	this.idleAnimationObject = new MonsterAnimation("idle", [0, 1], 24);
	this.frameAt = 0;
	this.speedAt = 0;
	this.currentAnimation = this.idleAnimationObject;
	this.preloadImages = function ()
	{
		var _0x159B8 = this.idleAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x14C0C + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		}
	};
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			if (getItem("freezeTimer") == 0)
			{
				this.frameAt++
			};
			if (this.frameAt >= animationObj.getNumberOfFrames())
			{
				this.frameAt = 0
			};
			this.speedAt = 0
		}
		else
		{
			this.speedAt++
		}
	};
	this.getImage = function ()
	{
		return getImage("images/" + this.name + "_" + "monster" + "_" + this.currentAnimation.name + "_" + this.currentAnimation.framesArray[this.frameAt] + ".png", this.name + "_" + this.frameAt + "_" + this.currentAnimation)
	};
	this.getDeathImage = function ()
	{
		return getImage("images/" + this.name + "Monster_black.png", "images/" + this.name + "Monster_black.png")
	};
	this.getWidth = function ()
	{
		return this.getImage().width
	};
	this.getHeight = function ()
	{
		return this.getImage().height
	}
}

function GiantSnakeMonster()
{
	this.name = "giantSnake";
	this.idleAnimationObject = new MonsterAnimation("idle", [0, 1], 24);
	this.frameAt = 0;
	this.speedAt = 0;
	this.currentAnimation = this.idleAnimationObject;
	this.preloadImages = function ()
	{
		var _0x159B8 = this.idleAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x14C0C + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		}
	};
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			if (getItem("freezeTimer") == 0)
			{
				this.frameAt++
			};
			if (this.frameAt >= animationObj.getNumberOfFrames())
			{
				this.frameAt = 0
			};
			this.speedAt = 0
		}
		else
		{
			this.speedAt++
		}
	};
	this.getImage = function ()
	{
		return getImage("images/" + this.name + "_" + "monster" + "_" + this.currentAnimation.name + "_" + this.currentAnimation.framesArray[this.frameAt] + ".png", this.name + "_" + this.frameAt + "_" + this.currentAnimation)
	};
	this.getDeathImage = function ()
	{
		return getImage("images/" + this.name + "Monster_black.png", "images/" + this.name + "Monster_black.png")
	};
	this.getWidth = function ()
	{
		return this.getImage().width
	};
	this.getHeight = function ()
	{
		return this.getImage().height
	}
}

function MammaPolarBearMonster()
{
	this.name = "mammaPolarBear";
	this.idleAnimationObject = new MonsterAnimation("idle", [0, 1], 24);
	this.frameAt = 0;
	this.speedAt = 0;
	this.currentAnimation = this.idleAnimationObject;
	this.preloadImages = function ()
	{
		var _0x159B8 = this.idleAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x14C0C + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		}
	};
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			if (getItem("freezeTimer") == 0)
			{
				this.frameAt++
			};
			if (this.frameAt >= animationObj.getNumberOfFrames())
			{
				this.frameAt = 0
			};
			this.speedAt = 0
		}
		else
		{
			this.speedAt++
		}
	};
	this.getImage = function ()
	{
		return getImage("images/" + this.name + "_" + "monster" + "_" + this.currentAnimation.name + "_" + this.currentAnimation.framesArray[this.frameAt] + ".png", this.name + "_" + this.frameAt + "_" + this.currentAnimation)
	};
	this.getDeathImage = function ()
	{
		return getImage("images/" + this.name + "Monster_black.png", "images/" + this.name + "Monster_black.png")
	};
	this.getWidth = function ()
	{
		return this.getImage().width
	};
	this.getHeight = function ()
	{
		return this.getImage().height
	}
}

function EntMonster()
{
	this.name = "ent";
	this.idleAnimationObject = new MonsterAnimation("idle", [0, 1], 24);
	this.frameAt = 0;
	this.speedAt = 0;
	this.currentAnimation = this.idleAnimationObject;
	this.preloadImages = function ()
	{
		var _0x159B8 = this.idleAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x14C0C + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		}
	};
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			if (getItem("freezeTimer") == 0)
			{
				this.frameAt++
			};
			if (this.frameAt >= animationObj.getNumberOfFrames())
			{
				this.frameAt = 0
			};
			this.speedAt = 0
		}
		else
		{
			this.speedAt++
		}
	};
	this.getImage = function ()
	{
		return getImage("images/" + this.name + "_" + "monster" + "_" + this.currentAnimation.name + "_" + this.currentAnimation.framesArray[this.frameAt] + ".png", this.name + "_" + this.frameAt + "_" + this.currentAnimation)
	};
	this.getDeathImage = function ()
	{
		return getImage("images/" + this.name + "Monster_black.png", "images/" + this.name + "Monster_black.png")
	};
	this.getWidth = function ()
	{
		return this.getImage().width
	};
	this.getHeight = function ()
	{
		return this.getImage().height
	}
}

function ThiefMonster()
{
	this.name = "thief";
	this.idleAnimationObject = new MonsterAnimation("idle", [0, 1], 24);
	this.frameAt = 0;
	this.speedAt = 0;
	this.currentAnimation = this.idleAnimationObject;
	this.preloadImages = function ()
	{
		var _0x159B8 = this.idleAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x14C0C + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		}
	};
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			if (getItem("freezeTimer") == 0)
			{
				this.frameAt++
			};
			if (this.frameAt >= animationObj.getNumberOfFrames())
			{
				this.frameAt = 0
			};
			this.speedAt = 0
		}
		else
		{
			this.speedAt++
		}
	};
	this.getImage = function ()
	{
		return getImage("images/" + this.name + "_" + "monster" + "_" + this.currentAnimation.name + "_" + this.currentAnimation.framesArray[this.frameAt] + ".png", this.name + "_" + this.frameAt + "_" + this.currentAnimation)
	};
	this.getDeathImage = function ()
	{
		return getImage("images/" + this.name + "Monster_black.png", "images/" + this.name + "Monster_black.png")
	};
	this.getWidth = function ()
	{
		return this.getImage().width
	};
	this.getHeight = function ()
	{
		return this.getImage().height
	}
}

function FrozenBarbarianMonster()
{
	this.name = "frozenBarbarian";
	this.idleAnimationObject = new MonsterAnimation("idle", [0], 24);
	this.frameAt = 0;
	this.speedAt = 0;
	this.currentAnimation = this.idleAnimationObject;
	this.preloadImages = function ()
	{
		var _0x159B8 = this.idleAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x14C0C + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		}
	};
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			if (getItem("freezeTimer") == 0)
			{
				this.frameAt++
			};
			if (this.frameAt >= animationObj.getNumberOfFrames())
			{
				this.frameAt = 0
			};
			this.speedAt = 0
		}
		else
		{
			this.speedAt++
		}
	};
	this.getImage = function ()
	{
		return getImage("images/" + this.name + "_" + "monster" + "_" + this.currentAnimation.name + "_" + this.currentAnimation.framesArray[this.frameAt] + ".png", this.name + "_" + this.frameAt + "_" + this.currentAnimation)
	};
	this.getDeathImage = function ()
	{
		return getImage("images/" + this.name + "Monster_black.png", "images/" + this.name + "Monster_black.png")
	};
	this.getWidth = function ()
	{
		return this.getImage().width
	};
	this.getHeight = function ()
	{
		return this.getImage().height
	}
}

function MonsterAnimation(_0x14D47, _0x18325, _0x16BA1)
{
	this.name = _0x14D47;
	this.framesArray = _0x18325;
	this.speed = _0x16BA1;
	this.getNumberOfFrames = function ()
	{
		return this.framesArray.length
	}
}

function SkeletonTreeMonster()
{
	this.name = "skeletonTree";
	this.idleAnimationObject = new MonsterAnimation("idle", [0], 12);
	this.frameAt = 0;
	this.speedAt = 0;
	this.currentAnimation = this.idleAnimationObject;
	this.preloadImages = function ()
	{
		var _0x159B8 = this.idleAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x14C0C + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		}
	};
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			if (getItem("freezeTimer") == 0)
			{
				this.frameAt++
			};
			if (this.frameAt >= animationObj.getNumberOfFrames())
			{
				this.frameAt = 0
			};
			this.speedAt = 0
		}
		else
		{
			this.speedAt++
		}
	};
	this.getImage = function ()
	{
		return getImage("images/" + this.name + "_" + "monster" + "_" + this.currentAnimation.name + "_" + this.currentAnimation.framesArray[this.frameAt] + ".png", this.name + "_" + this.frameAt + "_" + this.currentAnimation)
	};
	this.getWidth = function ()
	{
		return this.getImage().width
	};
	this.getHeight = function ()
	{
		return this.getImage().height
	}
}

function BushyMonster()
{
	this.name = "bushy";
	this.hideAnimationObject = new MonsterAnimation("hide", [0, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 1, 0], 4);
	this.idleAnimationObject = new MonsterAnimation("idle", [0, 1], 24);
	this.frameAt = 0;
	this.speedAt = 0;
	this.currentAnimation = this.idleAnimationObject;
	this.preloadImages = function ()
	{
		var _0x159B8 = this.idleAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x159B8.framesArray[_0x14C0C] + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		};
		var _0x159B8 = this.hideAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x159B8.framesArray[_0x14C0C] + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		}
	};
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			if (getItem("freezeTimer") == 0)
			{
				this.frameAt++
			};
			if (this.frameAt >= animationObj.getNumberOfFrames())
			{
				this.frameAt = 0;
				if (this.currentAnimation.name != "idle")
				{
					this.currentAnimation = this.idleAnimationObject
				}
			};
			this.speedAt = 0
		}
		else
		{
			this.speedAt++
		}
	};
	this.callAnimation = function (_0x159FE)
	{
		switch (_0x159FE)
		{
		case 1:
			this.frameAt = 0;
			this.speedAt = 0;
			this.currentAnimation = this.hideAnimationObject;
			break
		}
	};
	this.getImage = function ()
	{
		return getImage("images/" + this.name + "_" + "monster" + "_" + this.currentAnimation.name + "_" + this.currentAnimation.framesArray[this.frameAt] + ".png", this.name + "_" + this.frameAt + "_" + this.currentAnimation)
	};
	this.getDeathImage = function ()
	{
		return getImage("images/" + this.name + "Monster_black.png", "images/" + this.name + "Monster_black.png")
	};
	this.getWidth = function ()
	{
		return this.getImage().width
	};
	this.getHeight = function ()
	{
		return this.getImage().height
	}
}

function FireHawkMonster()
{
	this.name = "fireHawk";
	this.hideAnimationObject = new MonsterAnimation("idle", [0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3], 2);
	this.idleAnimationObject = new MonsterAnimation("idle", [0, 1, 2, 3], 24);
	this.frameAt = 0;
	this.speedAt = 0;
	this.currentAnimation = this.idleAnimationObject;
	this.preloadImages = function ()
	{
		var _0x159B8 = this.idleAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x159B8.framesArray[_0x14C0C] + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		};
		var _0x159B8 = this.hideAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x159B8.framesArray[_0x14C0C] + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		}
	};
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			if (getItem("freezeTimer") == 0)
			{
				this.frameAt++
			};
			if (this.frameAt >= animationObj.getNumberOfFrames())
			{
				this.frameAt = 0;
				if (this.currentAnimation.name != "idle")
				{
					this.currentAnimation = this.idleAnimationObject
				}
			};
			this.speedAt = 0
		}
		else
		{
			this.speedAt++
		}
	};
	this.callAnimation = function (_0x159FE)
	{
		switch (_0x159FE)
		{
		case 1:
			this.frameAt = 0;
			this.speedAt = 0;
			this.currentAnimation = this.hideAnimationObject;
			break
		}
	};
	this.getImage = function ()
	{
		return getImage("images/" + this.name + "_" + "monster" + "_" + this.currentAnimation.name + "_" + this.currentAnimation.framesArray[this.frameAt] + ".png", this.name + "_" + this.frameAt + "_" + this.currentAnimation)
	};
	this.getDeathImage = function ()
	{
		return getImage("images/" + this.name + "Monster_black.png", "images/" + this.name + "Monster_black.png")
	};
	this.getWidth = function ()
	{
		return this.getImage().width
	};
	this.getHeight = function ()
	{
		return this.getImage().height
	}
}

function IceHawkMonster()
{
	this.name = "iceHawk";
	this.hideAnimationObject = new MonsterAnimation("idle", [0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3], 2);
	this.idleAnimationObject = new MonsterAnimation("idle", [0, 1, 2, 3], 24);
	this.frameAt = 0;
	this.speedAt = 0;
	this.currentAnimation = this.idleAnimationObject;
	this.preloadImages = function ()
	{
		var _0x159B8 = this.idleAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x159B8.framesArray[_0x14C0C] + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		};
		var _0x159B8 = this.hideAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x159B8.framesArray[_0x14C0C] + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		}
	};
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			if (getItem("freezeTimer") == 0)
			{
				this.frameAt++
			};
			if (this.frameAt >= animationObj.getNumberOfFrames())
			{
				this.frameAt = 0;
				if (this.currentAnimation.name != "idle")
				{
					this.currentAnimation = this.idleAnimationObject
				}
			};
			this.speedAt = 0
		}
		else
		{
			this.speedAt++
		}
	};
	this.callAnimation = function (_0x159FE)
	{
		switch (_0x159FE)
		{
		case 1:
			this.frameAt = 0;
			this.speedAt = 0;
			this.currentAnimation = this.hideAnimationObject;
			break
		}
	};
	this.getImage = function ()
	{
		return getImage("images/" + this.name + "_" + "monster" + "_" + this.currentAnimation.name + "_" + this.currentAnimation.framesArray[this.frameAt] + ".png", this.name + "_" + this.frameAt + "_" + this.currentAnimation)
	};
	this.getDeathImage = function ()
	{
		return getImage("images/" + this.name + "Monster_black.png", "images/" + this.name + "Monster_black.png")
	};
	this.getWidth = function ()
	{
		return this.getImage().width
	};
	this.getHeight = function ()
	{
		return this.getImage().height
	}
}

function PiranhasMonster()
{
	this.name = "piranhas";
	this.hideAnimationObject = new MonsterAnimation("charge", [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1], 2);
	this.idleAnimationObject = new MonsterAnimation("idle", [0, 1], 24);
	this.frameAt = 0;
	this.speedAt = 0;
	this.currentAnimation = this.idleAnimationObject;
	this.preloadImages = function ()
	{
		var _0x159B8 = this.idleAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x159B8.framesArray[_0x14C0C] + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		};
		var _0x159B8 = this.hideAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x159B8.framesArray[_0x14C0C] + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		}
	};
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			if (getItem("freezeTimer") == 0)
			{
				this.frameAt++
			};
			if (this.frameAt >= animationObj.getNumberOfFrames())
			{
				this.frameAt = 0;
				if (this.currentAnimation.name != "idle")
				{
					this.currentAnimation = this.idleAnimationObject
				}
			};
			this.speedAt = 0
		}
		else
		{
			this.speedAt++
		}
	};
	this.callAnimation = function (_0x159FE)
	{
		switch (_0x159FE)
		{
		case 1:
			this.frameAt = 0;
			this.speedAt = 0;
			this.currentAnimation = this.hideAnimationObject;
			break
		}
	};
	this.getImage = function ()
	{
		return getImage("images/" + this.name + "_" + "monster" + "_" + this.currentAnimation.name + "_" + this.currentAnimation.framesArray[this.frameAt] + ".png", this.name + "_" + this.frameAt + "_" + this.currentAnimation)
	};
	this.getDeathImage = function ()
	{
		return getImage("images/" + this.name + "Monster_black.png", "images/" + this.name + "Monster_black.png")
	};
	this.getWidth = function ()
	{
		return this.getImage().width
	};
	this.getHeight = function ()
	{
		return this.getImage().height
	}
}

function LavaAlienMonster()
{
	this.name = "lavaAlien";
	this.hideAnimationObject = new MonsterAnimation("charge", [0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3], 4);
	this.idleAnimationObject = new MonsterAnimation("idle", [0, 1], 24);
	this.frameAt = 0;
	this.speedAt = 0;
	this.currentAnimation = this.idleAnimationObject;
	this.preloadImages = function ()
	{
		var _0x159B8 = this.idleAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x159B8.framesArray[_0x14C0C] + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		};
		var _0x159B8 = this.hideAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x159B8.framesArray[_0x14C0C] + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		}
	};
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			if (getItem("freezeTimer") == 0)
			{
				this.frameAt++
			};
			if (this.frameAt >= animationObj.getNumberOfFrames())
			{
				this.frameAt = 0;
				if (this.currentAnimation.name != "idle")
				{
					this.currentAnimation = this.idleAnimationObject
				}
			};
			this.speedAt = 0
		}
		else
		{
			this.speedAt++
		}
	};
	this.callAnimation = function (_0x159FE)
	{
		switch (_0x159FE)
		{
		case 1:
			this.frameAt = 0;
			this.speedAt = 0;
			this.currentAnimation = this.hideAnimationObject;
			break
		}
	};
	this.getImage = function ()
	{
		return getImage("images/" + this.name + "_" + "monster" + "_" + this.currentAnimation.name + "_" + this.currentAnimation.framesArray[this.frameAt] + ".png", this.name + "_" + this.frameAt + "_" + this.currentAnimation)
	};
	this.getDeathImage = function ()
	{
		return getImage("images/" + this.name + "Monster_black.png", "images/" + this.name + "Monster_black.png")
	};
	this.getWidth = function ()
	{
		return this.getImage().width
	};
	this.getHeight = function ()
	{
		return this.getImage().height
	}
}

function ReaperMonster()
{
	this.name = "reaper";
	this.hideAnimationObject = new MonsterAnimation("stare", [0, 1, 2, 3], 24);
	this.idleAnimationObject = new MonsterAnimation("idle", [0, 1], 24);
	this.frameAt = 0;
	this.speedAt = 0;
	this.currentAnimation = this.idleAnimationObject;
	this.preloadImages = function ()
	{
		var _0x159B8 = this.idleAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x159B8.framesArray[_0x14C0C] + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		};
		var _0x159B8 = this.hideAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x159B8.framesArray[_0x14C0C] + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		}
	};
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			if (getItem("freezeTimer") == 0)
			{
				this.frameAt++
			};
			if (this.frameAt >= animationObj.getNumberOfFrames())
			{
				this.frameAt = 0;
				if (this.currentAnimation.name != "idle")
				{
					this.currentAnimation = this.idleAnimationObject
				}
			};
			this.speedAt = 0
		}
		else
		{
			this.speedAt++
		}
	};
	this.callAnimation = function (_0x159FE)
	{
		switch (_0x159FE)
		{
		case 1:
			this.frameAt = 0;
			this.speedAt = 0;
			this.currentAnimation = this.hideAnimationObject;
			break
		}
	};
	this.getImage = function ()
	{
		return getImage("images/" + this.name + "_" + "monster" + "_" + this.currentAnimation.name + "_" + this.currentAnimation.framesArray[this.frameAt] + ".png", this.name + "_" + this.frameAt + "_" + this.currentAnimation)
	};
	this.getDeathImage = function ()
	{
		return getImage("images/" + this.name + "Monster_black.png", "images/" + this.name + "Monster_black.png")
	};
	this.getWidth = function ()
	{
		return this.getImage().width
	};
	this.getHeight = function ()
	{
		return this.getImage().height
	}
}

function SharkMonster()
{
	this.name = "shark";
	this.hideAnimationObject = new MonsterAnimation("bite", [0], 100);
	this.idleAnimationObject = new MonsterAnimation("idle", [0, 1], 24);
	this.frameAt = 0;
	this.speedAt = 0;
	this.currentAnimation = this.idleAnimationObject;
	this.preloadImages = function ()
	{
		var _0x159B8 = this.idleAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x159B8.framesArray[_0x14C0C] + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		};
		var _0x159B8 = this.hideAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x159B8.framesArray[_0x14C0C] + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		}
	};
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			if (getItem("freezeTimer") == 0)
			{
				this.frameAt++
			};
			if (this.frameAt >= animationObj.getNumberOfFrames())
			{
				this.frameAt = 0;
				if (this.currentAnimation.name != "idle")
				{
					this.currentAnimation = this.idleAnimationObject
				}
			};
			this.speedAt = 0
		}
		else
		{
			this.speedAt++
		}
	};
	this.callAnimation = function (_0x159FE)
	{
		switch (_0x159FE)
		{
		case 1:
			this.frameAt = 0;
			this.speedAt = 0;
			this.currentAnimation = this.hideAnimationObject;
			break
		}
	};
	this.getImage = function ()
	{
		return getImage("images/" + this.name + "_" + "monster" + "_" + this.currentAnimation.name + "_" + this.currentAnimation.framesArray[this.frameAt] + ".png", this.name + "_" + this.frameAt + "_" + this.currentAnimation)
	};
	this.getDeathImage = function ()
	{
		return getImage("images/" + this.name + "Monster_black.png", "images/" + this.name + "Monster_black.png")
	};
	this.getWidth = function ()
	{
		return this.getImage().width
	};
	this.getHeight = function ()
	{
		return this.getImage().height
	}
}

function TridentSharkMonster()
{
	this.name = "tridentShark";
	this.hideAnimationObject = new MonsterAnimation("bite", [0], 100);
	this.idleAnimationObject = new MonsterAnimation("idle", [0, 1], 24);
	this.yellowAnimationObject = new MonsterAnimation("yellow", [0, 1, 2], 50);
	this.greenAnimationObject = new MonsterAnimation("green", [0, 1, 2], 50);
	this.frameAt = 0;
	this.speedAt = 0;
	this.currentAnimation = this.idleAnimationObject;
	this.preloadImages = function ()
	{
		var _0x159B8 = this.idleAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x159B8.framesArray[_0x14C0C] + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		};
		var _0x159B8 = this.hideAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x159B8.framesArray[_0x14C0C] + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		};
		var _0x159B8 = this.yellowAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x159B8.framesArray[_0x14C0C] + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		};
		var _0x159B8 = this.greenAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x159B8.framesArray[_0x14C0C] + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		}
	};
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			if (getItem("freezeTimer") == 0)
			{
				this.frameAt++
			};
			if (this.frameAt >= animationObj.getNumberOfFrames())
			{
				this.frameAt = 0;
				if (this.currentAnimation.name != "idle")
				{
					this.currentAnimation = this.idleAnimationObject
				}
			};
			this.speedAt = 0
		}
		else
		{
			this.speedAt++
		}
	};
	this.callAnimation = function (_0x159FE)
	{
		console.log(_0x159FE);
		switch (_0x159FE)
		{
		case 1:
			this.frameAt = 0;
			this.speedAt = 0;
			this.currentAnimation = this.hideAnimationObject;
			break;
		case 2:
			this.frameAt = 0;
			this.speedAt = 0;
			this.currentAnimation = this.yellowAnimationObject;
			break;
		case 3:
			this.frameAt = 0;
			this.speedAt = 0;
			this.currentAnimation = this.greenAnimationObject;
			break;
		default:
			this.frameAt = 0;
			this.speedAt = 0;
			this.currentAnimation = this.idleAnimationObject;
			break
		}
	};
	this.getImage = function ()
	{
		return getImage("images/" + this.name + "_" + "monster" + "_" + this.currentAnimation.name + "_" + this.currentAnimation.framesArray[this.frameAt] + ".png", this.name + "_" + this.frameAt + "_" + this.currentAnimation)
	};
	this.getDeathImage = function ()
	{
		return getImage("images/" + this.name + "Monster_black.png", "images/" + this.name + "Monster_black.png")
	};
	this.getWidth = function ()
	{
		return this.getImage().width
	};
	this.getHeight = function ()
	{
		return this.getImage().height
	}
}

function TridentSoldierMonster()
{
	this.name = "tridentSoldier";
	this.healAnimationObject = new MonsterAnimation("green", [0, 1, 2], 5);
	this.hideAnimationObject = new MonsterAnimation("yellow", [0, 1, 2], 24);
	this.idleAnimationObject = new MonsterAnimation("idle", [0, 1], 24);
	this.frameAt = 0;
	this.speedAt = 0;
	this.currentAnimation = this.idleAnimationObject;
	this.preloadImages = function ()
	{
		var _0x159B8 = this.idleAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x159B8.framesArray[_0x14C0C] + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		};
		var _0x159B8 = this.hideAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x159B8.framesArray[_0x14C0C] + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		};
		var _0x159B8 = this.healAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x14C0C + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		}
	};
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			if (getItem("freezeTimer") == 0)
			{
				this.frameAt++
			};
			if (this.frameAt >= animationObj.getNumberOfFrames())
			{
				this.frameAt = 0;
				if (this.currentAnimation.name != "idle")
				{
					this.currentAnimation = this.idleAnimationObject
				}
			};
			this.speedAt = 0
		}
		else
		{
			this.speedAt++
		}
	};
	this.callAnimation = function (_0x159FE)
	{
		switch (_0x159FE)
		{
		case 1:
			this.frameAt = 0;
			this.speedAt = 0;
			this.currentAnimation = this.hideAnimationObject;
			break;
		case 2:
			this.frameAt = 0;
			this.speedAt = 0;
			this.currentAnimation = this.healAnimationObject;
			break
		}
	};
	this.getImage = function ()
	{
		return getImage("images/" + this.name + "_" + "monster" + "_" + this.currentAnimation.name + "_" + this.currentAnimation.framesArray[this.frameAt] + ".png", this.name + "_" + this.frameAt + "_" + this.currentAnimation)
	};
	this.getDeathImage = function ()
	{
		return getImage("images/" + this.name + "Monster_black.png", "images/" + this.name + "Monster_black.png")
	};
	this.getWidth = function ()
	{
		return this.getImage().width
	};
	this.getHeight = function ()
	{
		return this.getImage().height
	}
}

function CorruptedKnightMonster()
{
	this.name = "corruptedKnight";
	this.idleAnimationObject = new MonsterAnimation("idle", [0, 1], 24);
	this.fireAnimationObject = new MonsterAnimation("fire", [0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0], 10);
	this.smokeAnimationObject = new MonsterAnimation("smoke", [0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2], 10);
	this.shieldAnimationObject = new MonsterAnimation("shield", [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 50);
	this.talkAnimationObject = new MonsterAnimation("talk", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 300);
	this.frameAt = 0;
	this.speedAt = 0;
	this.currentAnimation = this.idleAnimationObject;
	this.preloadImages = function ()
	{
		var _0x159B8 = this.idleAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x159B8.framesArray[_0x14C0C] + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		};
		var _0x159B8 = this.fireAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x159B8.framesArray[_0x14C0C] + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		};
		var _0x159B8 = this.smokeAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x159B8.framesArray[_0x14C0C] + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		};
		var _0x159B8 = this.shieldAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x159B8.framesArray[_0x14C0C] + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		};
		var _0x159B8 = this.talkAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x159B8.framesArray[_0x14C0C] + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		}
	};
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			if (getItem("freezeTimer") == 0)
			{
				this.frameAt++
			};
			if (this.frameAt >= animationObj.getNumberOfFrames())
			{
				this.frameAt = 0;
				if (this.currentAnimation.name != "idle")
				{
					this.currentAnimation = this.idleAnimationObject
				}
			};
			this.speedAt = 0
		}
		else
		{
			this.speedAt++
		}
	};
	this.callAnimation = function (_0x159FE)
	{
		console.log(_0x159FE);
		switch (_0x159FE)
		{
		case 1:
			this.frameAt = 0;
			this.speedAt = 0;
			this.currentAnimation = this.fireAnimationObject;
			break;
		case 2:
			this.frameAt = 0;
			this.speedAt = 0;
			this.currentAnimation = this.smokeAnimationObject;
			break;
		case 3:
			this.frameAt = 0;
			this.speedAt = 0;
			this.currentAnimation = this.shieldAnimationObject;
			break;
		case 4:
			this.frameAt = 0;
			this.speedAt = 0;
			this.currentAnimation = this.talkAnimationObject;
			break;
		default:
			this.frameAt = 0;
			this.speedAt = 0;
			this.currentAnimation = this.idleAnimationObject;
			break
		}
	};
	this.getImage = function ()
	{
		return getImage("images/" + this.name + "_" + "monster" + "_" + this.currentAnimation.name + "_" + this.currentAnimation.framesArray[this.frameAt] + ".png", this.name + "_" + this.frameAt + "_" + this.currentAnimation)
	};
	this.getDeathImage = function ()
	{
		return getImage("images/" + this.name + "Monster_black.png", "images/" + this.name + "Monster_black.png")
	};
	this.getWidth = function ()
	{
		return this.getImage().width
	};
	this.getHeight = function ()
	{
		return this.getImage().height
	}
}

function YetiMonster()
{
	this.name = "yeti";
	this.hideAnimationObject = new MonsterAnimation("awake", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 10000);
	this.idleAnimationObject = new MonsterAnimation("idle", [0, 1, 2], 24);
	this.frameAt = 0;
	this.speedAt = 0;
	this.currentAnimation = this.idleAnimationObject;
	this.preloadImages = function ()
	{
		var _0x159B8 = this.idleAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x159B8.framesArray[_0x14C0C] + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		};
		var _0x159B8 = this.hideAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x159B8.framesArray[_0x14C0C] + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		}
	};
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			if (getItem("freezeTimer") == 0)
			{
				this.frameAt++
			};
			if (this.frameAt >= animationObj.getNumberOfFrames())
			{
				this.frameAt = 0;
				if (this.currentAnimation.name != "idle")
				{
					this.currentAnimation = this.idleAnimationObject
				}
			};
			this.speedAt = 0
		}
		else
		{
			this.speedAt++
		}
	};
	this.callAnimation = function (_0x159FE)
	{
		switch (_0x159FE)
		{
		case 1:
			this.frameAt = 0;
			this.speedAt = 0;
			this.currentAnimation = this.hideAnimationObject;
			break
		}
	};
	this.getImage = function ()
	{
		return getImage("images/" + this.name + "_" + "monster" + "_" + this.currentAnimation.name + "_" + this.currentAnimation.framesArray[this.frameAt] + ".png", this.name + "_" + this.frameAt + "_" + this.currentAnimation)
	};
	this.getDeathImage = function ()
	{
		return getImage("images/" + this.name + "Monster_black.png", "images/" + this.name + "Monster_black.png")
	};
	this.getWidth = function ()
	{
		return this.getImage().width
	};
	this.getHeight = function ()
	{
		return this.getImage().height
	}
}

function PufferFishMonster()
{
	this.name = "pufferFish";
	this.hideAnimationObject = new MonsterAnimation("popped", [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1], 24);
	this.idleAnimationObject = new MonsterAnimation("idle", [0, 1], 24);
	this.frameAt = 0;
	this.speedAt = 0;
	this.currentAnimation = this.idleAnimationObject;
	this.preloadImages = function ()
	{
		var _0x159B8 = this.idleAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x159B8.framesArray[_0x14C0C] + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		};
		var _0x159B8 = this.hideAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x159B8.framesArray[_0x14C0C] + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		}
	};
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			if (getItem("freezeTimer") == 0)
			{
				this.frameAt++
			};
			if (this.frameAt >= animationObj.getNumberOfFrames())
			{
				this.frameAt = 0;
				if (this.currentAnimation.name != "idle")
				{
					this.currentAnimation = this.idleAnimationObject
				}
			};
			this.speedAt = 0
		}
		else
		{
			this.speedAt++
		}
	};
	this.callAnimation = function (_0x159FE)
	{
		switch (_0x159FE)
		{
		case 1:
			this.frameAt = 0;
			this.speedAt = 0;
			this.currentAnimation = this.hideAnimationObject;
			break
		}
	};
	this.getImage = function ()
	{
		return getImage("images/" + this.name + "_" + "monster" + "_" + this.currentAnimation.name + "_" + this.currentAnimation.framesArray[this.frameAt] + ".png", this.name + "_" + this.frameAt + "_" + this.currentAnimation)
	};
	this.getDeathImage = function ()
	{
		return getImage("images/" + this.name + "Monster_black.png", "images/" + this.name + "Monster_black.png")
	};
	this.getWidth = function ()
	{
		return this.getImage().width
	};
	this.getHeight = function ()
	{
		return this.getImage().height
	}
}

function BabyPolarBearMonster()
{
	this.name = "babyPolarBear";
	this.hideAnimationObject = new MonsterAnimation("crying", [0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2], 4);
	this.idleAnimationObject = new MonsterAnimation("idle", [0], 24);
	this.frameAt = 0;
	this.speedAt = 0;
	this.currentAnimation = this.idleAnimationObject;
	this.preloadImages = function ()
	{
		var _0x159B8 = this.idleAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x159B8.framesArray[_0x14C0C] + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		};
		var _0x159B8 = this.hideAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x159B8.framesArray[_0x14C0C] + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		}
	};
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			if (getItem("freezeTimer") == 0)
			{
				this.frameAt++
			};
			if (this.frameAt >= animationObj.getNumberOfFrames())
			{
				this.frameAt = 0;
				if (this.currentAnimation.name != "idle")
				{
					this.currentAnimation = this.idleAnimationObject
				}
			};
			this.speedAt = 0
		}
		else
		{
			this.speedAt++
		}
	};
	this.callAnimation = function (_0x159FE)
	{
		switch (_0x159FE)
		{
		case 1:
			this.frameAt = 0;
			this.speedAt = 0;
			this.currentAnimation = this.hideAnimationObject;
			break
		}
	};
	this.getImage = function ()
	{
		return getImage("images/" + this.name + "_" + "monster" + "_" + this.currentAnimation.name + "_" + this.currentAnimation.framesArray[this.frameAt] + ".png", this.name + "_" + this.frameAt + "_" + this.currentAnimation)
	};
	this.getDeathImage = function ()
	{
		return getImage("images/" + this.name + "Monster_black.png", "images/" + this.name + "Monster_black.png")
	};
	this.getWidth = function ()
	{
		return this.getImage().width
	};
	this.getHeight = function ()
	{
		return this.getImage().height
	}
}

function FaradoxMinionMonster()
{
	this.name = "faradoxMinion";
	this.chargeAnimationObject = new MonsterAnimation("charge", [0, 1, 2, 3, 4, 5, 6, 7, 4, 5, 6, 7, 4, 5, 6, 7, 4, 5, 6, 7, 4, 5, 6, 7, 4, 5, 6, 7, 4, 5, 6, 7, 4, 5, 6, 7, 4, 5, 6, 7, 4, 5, 6, 7, 4, 5, 6, 7, 4, 5, 6, 7, 4, 5, 6, 7, 4, 5, 6, 7, 4, 5, 6, 7, 4, 5, 6, 7, 4, 5, 6, 7], 4);
	this.idleAnimationObject = new MonsterAnimation("idle", [0, 1, 2], 12);
	this.frameAt = 0;
	this.speedAt = 0;
	this.currentAnimation = this.idleAnimationObject;
	this.preloadImages = function ()
	{
		var _0x159B8 = this.idleAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x159B8.framesArray[_0x14C0C] + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		};
		var _0x159B8 = this.chargeAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x159B8.framesArray[_0x14C0C] + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		}
	};
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			if (getItem("freezeTimer") == 0)
			{
				this.frameAt++
			};
			if (this.frameAt >= animationObj.getNumberOfFrames())
			{
				this.frameAt = 0;
				if (this.currentAnimation.name != "idle")
				{
					this.currentAnimation = this.idleAnimationObject
				}
			};
			this.speedAt = 0
		}
		else
		{
			this.speedAt++
		}
	};
	this.callAnimation = function (_0x159FE)
	{
		switch (_0x159FE)
		{
		case 1:
			this.frameAt = 0;
			this.speedAt = 0;
			this.currentAnimation = this.chargeAnimationObject;
			break
		}
	};
	this.getImage = function ()
	{
		return getImage("images/" + this.name + "_" + "monster" + "_" + this.currentAnimation.name + "_" + this.currentAnimation.framesArray[this.frameAt] + ".png", this.name + "_" + this.frameAt + "_" + this.currentAnimation)
	};
	this.getDeathImage = function ()
	{
		return getImage("images/" + this.name + "Monster_black.png", "images/" + this.name + "Monster_black.png")
	};
	this.getWidth = function ()
	{
		return this.getImage().width
	};
	this.getHeight = function ()
	{
		return this.getImage().height
	}
}

function FaradoxMinionMonster2()
{
	this.name = "faradoxMinion2";
	this.chargeAnimationObject = new MonsterAnimation("charge", [0, 1, 2, 3, 4, 5, 6, 7, 4, 5, 6, 7, 4, 5, 6, 7, 4, 5, 6, 7, 4, 5, 6, 7, 4, 5, 6, 7, 4, 5, 6, 7, 4, 5, 6, 7, 4, 5, 6, 7, 4, 5, 6, 7, 4, 5, 6, 7, 4, 5, 6, 7, 4, 5, 6, 7, 4, 5, 6, 7, 4, 5, 6, 7, 4, 5, 6, 7, 4, 5, 6, 7], 4);
	this.idleAnimationObject = new MonsterAnimation("idle", [0, 1, 2], 12);
	this.frameAt = 0;
	this.speedAt = 0;
	this.currentAnimation = this.idleAnimationObject;
	this.preloadImages = function ()
	{
		var _0x159B8 = this.idleAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x159B8.framesArray[_0x14C0C] + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		};
		var _0x159B8 = this.chargeAnimationObject;
		for (var _0x14C0C = 0; _0x14C0C < _0x159B8.getNumberOfFrames(); _0x14C0C++)
		{
			var _0x159DB = getImage("images/" + this.name + "_" + "monster" + "_" + _0x159B8.name + "_" + _0x159B8.framesArray[_0x14C0C] + ".png", this.name + "_" + _0x159B8.framesArray[_0x14C0C] + "_" + _0x159B8);
			$("#section-combat-loader").append(_0x159DB)
		}
	};
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			if (getItem("freezeTimer") == 0)
			{
				this.frameAt++
			};
			if (this.frameAt >= animationObj.getNumberOfFrames())
			{
				this.frameAt = 0;
				if (this.currentAnimation.name != "idle")
				{
					this.currentAnimation = this.idleAnimationObject
				}
			};
			this.speedAt = 0
		}
		else
		{
			this.speedAt++
		}
	};
	this.callAnimation = function (_0x159FE)
	{
		switch (_0x159FE)
		{
		case 1:
			this.frameAt = 0;
			this.speedAt = 0;
			this.currentAnimation = this.chargeAnimationObject;
			break
		}
	};
	this.getImage = function ()
	{
		return getImage("images/" + this.name + "_" + "monster" + "_" + this.currentAnimation.name + "_" + this.currentAnimation.framesArray[this.frameAt] + ".png", this.name + "_" + this.frameAt + "_" + this.currentAnimation)
	};
	this.getDeathImage = function ()
	{
		return getImage("images/" + this.name + "Monster_black.png", "images/" + this.name + "Monster_black.png")
	};
	this.getWidth = function ()
	{
		return this.getImage().width
	};
	this.getHeight = function ()
	{
		return this.getImage().height
	}
}
global_monsterShake = false;

function startMonsterAnimation(_0x159FE)
{
	if (_0x159FE.startsWith("shake"))
	{
		var _0x19F2C = _0x159FE.split("~")[1];
		global_monsterShake = true;
		setTimeout(function ()
		{
			global_monsterShake = false
		}, parseInt(_0x19F2C * 1000))
	}
	else
	{
		if (_0x159FE == 0)
		{
			resetAnimationOfCurrentFightToIdle()
		}
		else
		{
			getMonsterObject(getItem("monsterName")).callAnimation(parseInt(_0x159FE))
		}
	}
}
global_heroFlicker = false;

function startHeroAnimation(_0x159FE)
{
	if (_0x159FE.startsWith("flicker"))
	{
		global_heroFlicker = true;
		setTimeout(function ()
		{
			global_heroFlicker = false
		}, 3000)
	}
}

function getMonsterObject(_0x14D47)
{
	if (window.chickenMonsterObj == null)
	{
		chickenMonsterObj = new ChickenMonster();
		chickenMonsterObj.preloadImages()
	};
	if (window.skyChickenMonsterObj == null)
	{
		skyChickenMonsterObj = new SkyChickenMonster();
		skyChickenMonsterObj.preloadImages()
	};
	if (window.bushyMonsterObj == null)
	{
		bushyMonsterObj = new BushyMonster();
		bushyMonsterObj.preloadImages()
	};
	if (window.fireHawkMonsterObj == null)
	{
		fireHawkMonsterObj = new FireHawkMonster();
		fireHawkMonsterObj.preloadImages()
	};
	if (window.iceHawkMonsterObj == null)
	{
		iceHawkMonsterObj = new IceHawkMonster();
		iceHawkMonsterObj.preloadImages()
	};
	if (window.piranhasMonsterObj == null)
	{
		piranhasMonsterObj = new PiranhasMonster();
		piranhasMonsterObj.preloadImages()
	};
	if (window.witchMonsterObj == null)
	{
		witchMonsterObj = new WitchMonster();
		witchMonsterObj.preloadImages()
	};
	if (window.lavaAlienMonsterObj == null)
	{
		lavaAlienMonsterObj = new LavaAlienMonster();
		lavaAlienMonsterObj.preloadImages()
	};
	if (window.reaperMonsterObj == null)
	{
		reaperMonsterObj = new ReaperMonster();
		reaperMonsterObj.preloadImages()
	};
	if (window.sharkMonsterObj == null)
	{
		sharkMonsterObj = new SharkMonster();
		sharkMonsterObj.preloadImages()
	};
	if (window.tridentSharkMonsterObj == null)
	{
		tridentSharkMonsterObj = new TridentSharkMonster();
		tridentSharkMonsterObj.preloadImages()
	};
	if (window.tridentSoldierMonsterObj == null)
	{
		tridentSoldierMonsterObj = new TridentSoldierMonster();
		tridentSoldierMonsterObj.preloadImages()
	};
	if (window.corruptedKnightMonsterObj == null)
	{
		corruptedKnightMonsterObj = new CorruptedKnightMonster();
		corruptedKnightMonsterObj.preloadImages()
	};
	if (window.babyPolarBearMonsterObj == null)
	{
		babyPolarBearMonsterObj = new BabyPolarBearMonster();
		babyPolarBearMonsterObj.preloadImages()
	};
	if (window.faradoxMinionObj == null)
	{
		faradoxMinionObj = new FaradoxMinionMonster();
		faradoxMinionObj.preloadImages()
	};
	if (window.faradoxMinion2Obj == null)
	{
		faradoxMinion2Obj = new FaradoxMinionMonster2();
		faradoxMinion2Obj.preloadImages()
	};
	if (window.skeletonTreeMonsterObj == null)
	{
		skeletonTreeMonsterObj = new SkeletonTreeMonster()
	};
	if (window.ratMonsterObj == null)
	{
		ratMonsterObj = new RatMonster();
		ratMonsterObj.preloadImages()
	};
	if (_0x14D47 == "bee" && window.beeMonsterObj == null)
	{
		beeMonsterObj = new BeeMonster();
		beeMonsterObj.preloadImages()
	};
	if (_0x14D47 == "bat" && window.batMonsterObj == null)
	{
		batMonsterObj = new BatMonster();
		batMonsterObj.preloadImages()
	};
	if (_0x14D47 == "fireMage" && window.fireMageMonsterObj == null)
	{
		fireMageMonsterObj = new FireMageMonster();
		fireMageMonsterObj.preloadImages()
	};
	if (_0x14D47 == "boneHead" && window.boneHeadMonsterObj == null)
	{
		boneHeadMonsterObj = new BoneHeadMonster();
		boneHeadMonsterObj.preloadImages()
	};
	if (_0x14D47 == "knight1" && window.knight1MonsterObj == null)
	{
		knight1MonsterObj = new Knight1Monster();
		knight1MonsterObj.preloadImages()
	};
	if (_0x14D47 == "knight2" && window.knight2MonsterObj == null)
	{
		knight2MonsterObj = new Knight2Monster();
		knight2MonsterObj.preloadImages()
	};
	if (_0x14D47 == "knight3" && window.knight3MonsterObj == null)
	{
		knight3MonsterObj = new Knight3Monster();
		knight3MonsterObj.preloadImages()
	};
	if (_0x14D47 == "knight4" && window.knight4MonsterObj == null)
	{
		knight4MonsterObj = new Knight4Monster();
		knight4MonsterObj.preloadImages()
	};
	if (_0x14D47 == "knight5" && window.knight5MonsterObj == null)
	{
		knight5MonsterObj = new Knight5Monster();
		knight5MonsterObj.preloadImages()
	};
	if (_0x14D47 == "skeletonMonks" && window.skeletonMonksMonsterObj == null)
	{
		skeletonMonksMonsterObj = new SkeletonMonksMonster();
		skeletonMonksMonsterObj.preloadImages()
	};
	if (_0x14D47 == "stoneWomen" && window.stoneWomenMonsterObj == null)
	{
		stoneWomenMonsterObj = new StoneWomenMonster();
		stoneWomenMonsterObj.preloadImages()
	};
	if (_0x14D47 == "ghost" && window.ghostMonsterObj == null)
	{
		ghostMonsterObj = new GhostMonster();
		ghostMonsterObj.preloadImages()
	};
	if (_0x14D47 == "explorer" && window.explorerMonsterObj == null)
	{
		explorerMonsterObj = new ExplorerMonster();
		explorerMonsterObj.preloadImages()
	};
	if (_0x14D47 == "skeletonGhost" && window.skeletonGhostMonsterObj == null)
	{
		skeletonGhostMonsterObj = new SkeletonGhostMonster();
		skeletonGhostMonsterObj.preloadImages()
	};
	if (_0x14D47 == "cemeterySkeleton" && window.cemeterySkeletonMonsterObj == null)
	{
		cemeterySkeletonMonsterObj = new CemeterySkeletonMonster();
		cemeterySkeletonMonsterObj.preloadImages()
	};
	if (_0x14D47 == "fireCemeterySkeleton" && window.fireCemeterySkeletonMonsterObj == null)
	{
		fireCemeterySkeletonMonsterObj = new FireCemeterySkeletonMonster();
		fireCemeterySkeletonMonsterObj.preloadImages()
	};
	if (_0x14D47 == "iceCemeterySkeleton" && window.iceCemeterySkeletonMonsterObj == null)
	{
		iceCemeterySkeletonMonsterObj = new IceCemeterySkeletonMonster();
		iceCemeterySkeletonMonsterObj.preloadImages()
	};
	if (window.snakeMonsterObj == null)
	{
		snakeMonsterObj = new SnakeMonster();
		snakeMonsterObj.preloadImages()
	};
	if (window.bearMonsterObj == null)
	{
		bearMonsterObj = new BearMonster();
		bearMonsterObj.preloadImages()
	};
	if (window.bearPackMonsterObj == null)
	{
		bearPackMonsterObj = new BearPackMonster();
		bearPackMonsterObj.preloadImages()
	};
	if (window.spiderMonsterObj == null)
	{
		spiderMonsterObj = new SpiderMonster();
		spiderMonsterObj.preloadImages()
	};
	if (window.dungeonSpiderMonsterObj == null)
	{
		dungeonSpiderMonsterObj = new DungeonSpiderMonster();
		dungeonSpiderMonsterObj.preloadImages()
	};
	if (window.skeletonMonsterObj == null)
	{
		skeletonMonsterObj = new SkeletonMonster();
		skeletonMonsterObj.preloadImages()
	};
	if (window.yetiMonsterObj == null)
	{
		yetiMonsterObj = new YetiMonster();
		yetiMonsterObj.preloadImages()
	};
	if (window.pufferFishMonsterObj == null)
	{
		pufferFishMonsterObj = new PufferFishMonster();
		pufferFishMonsterObj.preloadImages()
	};
	if (window.mammaPolarBearObj == null)
	{
		mammaPolarBearObj = new MammaPolarBearMonster();
		mammaPolarBearObj.preloadImages()
	};
	if (window.giantSnakeMonsterObj == null)
	{
		giantSnakeMonsterObj = new GiantSnakeMonster();
		giantSnakeMonsterObj.preloadImages()
	};
	if (window.entMonsterObj == null)
	{
		entMonsterObj = new EntMonster();
		entMonsterObj.preloadImages()
	};
	if (window.thiefMonsterObj == null)
	{
		thiefMonsterObj = new ThiefMonster();
		thiefMonsterObj.preloadImages()
	};
	if (window.frozenBarbarianObj == null)
	{
		frozenBarbarianObj = new FrozenBarbarianMonster();
		frozenBarbarianObj.preloadImages()
	};
	switch (_0x14D47)
	{
	case "chicken":
		return chickenMonsterObj;
	case "bushy":
		return bushyMonsterObj;
	case "fireHawk":
		return fireHawkMonsterObj;
	case "iceHawk":
		return iceHawkMonsterObj;
	case "witch":
		return witchMonsterObj;
	case "piranhas":
		return piranhasMonsterObj;
	case "lavaAlien":
		return lavaAlienMonsterObj;
	case "reaper":
		return reaperMonsterObj;
	case "shark":
		return sharkMonsterObj;
	case "tridentShark":
		return tridentSharkMonsterObj;
	case "tridentSoldier":
		return tridentSoldierMonsterObj;
	case "corruptedKnight":
		return corruptedKnightMonsterObj;
	case "babyPolarBear":
		return babyPolarBearMonsterObj;
	case "skeletonTree":
		return skeletonTreeMonsterObj;
	case "rat":
		return ratMonsterObj;
	case "bee":
		return beeMonsterObj;
	case "bat":
		return batMonsterObj;
	case "snake":
		return snakeMonsterObj;
	case "mammaPolarBear":
		return mammaPolarBearObj;
	case "fireMage":
		return fireMageMonsterObj;
	case "ent":
		return entMonsterObj;
	case "thief":
		return thiefMonsterObj;
	case "frozenBarbarian":
		return frozenBarbarianObj;
	case "faradoxMinion":
		return faradoxMinionObj;
	case "faradoxMinion2":
		return faradoxMinion2Obj;
	case "skyChicken":
		return skyChickenMonsterObj;
	case "yeti":
		return yetiMonsterObj;
	case "pufferFish":
		return pufferFishMonsterObj;
	case "giantSnake":
		return giantSnakeMonsterObj;
	case "bear":
		return bearMonsterObj;
	case "bearPack":
		return bearPackMonsterObj;
	case "spider":
		return spiderMonsterObj;
	case "dungeonSpider":
		return dungeonSpiderMonsterObj;
	case "skeleton":
		return skeletonMonsterObj;
	case "boneHead":
		return boneHeadMonsterObj;
	case "knight1":
		return knight1MonsterObj;
	case "knight2":
		return knight2MonsterObj;
	case "knight3":
		return knight3MonsterObj;
	case "knight4":
		return knight4MonsterObj;
	case "knight5":
		return knight5MonsterObj;
	case "skeletonMonks":
		return skeletonMonksMonsterObj;
	case "stoneWomen":
		return stoneWomenMonsterObj;
	case "ghost":
		return ghostMonsterObj;
	case "explorer":
		return explorerMonsterObj;
	case "skeletonGhost":
		return skeletonGhostMonsterObj;
	case "cemeterySkeleton":
		return cemeterySkeletonMonsterObj;
	case "fireCemeterySkeleton":
		return fireCemeterySkeletonMonsterObj;
	case "iceCemeterySkeleton":
		return iceCemeterySkeletonMonsterObj
	};
	return "none"
}
var global_monsterHitAnimationHashSet = new Set();
var global_heroHitAnimationHashSet = new Set();

function addHitSplit(_0x14DB0)
{
	if (global_lastTabId == "right-combat-fighting")
	{
		var _0x14DD3 = _0x14DB0.split("~");
		var _0x14E5F = _0x14DD3[0];
		var _0x14EA5 = _0x14DD3[1];
		var _0x14E19 = _0x14DD3[2];
		var _0x14D8D = _0x14DD3[3];
		var _0x14D6A = _0x14DD3[4];
		var _0x14E3C = _0x14DD3[5];
		var _0x14E82 = getCurrentMillis();
		var _0x14DF6 = new HitAnimation(_0x14E5F, _0x14EA5, _0x14E19, _0x14D8D, _0x14D6A, _0x14E3C, _0x14E82);
		if (_0x14E5F == "hero")
		{
			global_heroHitAnimationHashSet.add(_0x14DF6)
		}
		else
		{
			global_monsterHitAnimationHashSet.add(_0x14DF6)
		}
	}
}

function HitAnimation(_0x14E5F, _0x14EA5, _0x14E19, _0x14D8D, _0x14D6A, _0x14E3C, _0x14E82)
{
	this.target = _0x14E5F;
	this.number = _0x14EA5;
	this.icon = _0x14E19;
	this.color = _0x14D8D;
	this.borderColor = _0x14D6A;
	this.otherInfo = _0x14E3C;
	this.time = _0x14E82;
	this.frameAt = 0;
	this.MAX_FRAMES = 60;
	this.getOffset = function ()
	{
		switch (this.frameAt)
		{
		case 0:
			return 0;
		case 1:
			return 1;
		case 2:
			return 2;
		case 3:
			return 4;
		case 4:
			return 6;
		case 5:
			return 9;
		case 6:
			return 12;
		case 7:
			return 15;
		case 8:
			return 19;
		case 9:
			return 24;
		case 10:
			return 29;
		case 11:
			return 35;
		case 12:
			return 40;
		case 13:
			return 58;
		case 14:
			return 68;
		default:
			return 75
		}
	};
	this.draw = function (_0x177EF, _0x17812)
	{
		var _0x177A9 = global_canvasFightingMonster2D;
		if (this.target == "hero")
		{
			_0x177A9 = global_canvasFightingHero2D
		};
		var _0x17763 = 80;
		var _0x17786 = 130;
		var _0x177CC = 60;
		if (this.number.length > 1)
		{
			_0x17786 = 160
		};
		if (this.number.length == 3)
		{
			_0x17786 = 200
		};
		if (this.number == "Miss")
		{
			_0x17786 = 240
		};
		if (this.number == "Immune")
		{
			_0x17786 = 330
		};
		if (this.icon == "images/coins.png")
		{
			_0x17786 = 800;
			_0x177EF = 0
		};
		if (this.icon == "images/invisibilityIcon.png")
		{
			_0x17786 = 240;
			_0x177EF = 0
		};
		if (this.icon == "images/invisibilityAmulet.png")
		{
			_0x17786 = 240;
			_0x177EF = 0
		};
		if (this.icon == "images/bushyBlockIcon.png")
		{
			_0x17786 = 250;
			_0x177EF = 0
		};
		if (this.icon == "images/deadIcon.png")
		{
			_0x17786 = 300;
			_0x177EF = 0
		};
		if (this.icon == "images/stab_dark.png")
		{
			_0x17786 = 250;
			_0x177EF = 0
		};
		if (this.number.endsWith("/30)"))
		{
			_0x17786 = 330;
			_0x177EF = 0
		};
		if (this.number == "")
		{
			_0x17786 = 80
		};
		if (this.number.length == 10)
		{
			_0x17786 = 350
		};
		_0x177A9.fillStyle = _0x14D8D;
		_0x177A9.globalAlpha = 0.5;
		_0x177A9.fillRect(_0x177EF, _0x17812 - this.getOffset(), _0x17786, _0x17763);
		_0x177A9.globalAlpha = 1.0;
		_0x177A9.fillStyle = this.borderColor;
		_0x177A9.strokeRect(_0x177EF, _0x17812 - this.getOffset(), _0x17786, _0x17763);
		_0x177A9.drawImage(getImage(this.icon, this.target + "_hitsplat"), _0x177EF, _0x17812 - this.getOffset(), _0x17763, _0x17763);
		if (this.number.length == 10)
		{
			_0x177A9.font = "30px Arial"
		}
		else
		{
			_0x177A9.font = "60px Arial"
		};
		_0x177A9.fillStyle = "black";
		if (this.number.length == 10)
		{
			_0x177A9.fillText(this.number, _0x177EF + 130 - 45, _0x17812 - this.getOffset() - 12 + 60)
		}
		else
		{
			_0x177A9.fillText(this.number, _0x177EF + 130 - 45, _0x17812 - this.getOffset() + 60)
		};
		this.frameAt++;
		if (this.frameAt >= this.MAX_FRAMES)
		{
			if (this.target == "hero")
			{
				global_heroHitAnimationHashSet.delete(this)
			}
			else
			{
				global_monsterHitAnimationHashSet.delete(this)
			}
		}
	}
}

function convertStardustToPack()
{
	if (getItem("researcher") == 0)
	{
		return
	};
	var _0x15DF5 = 0;
	if (getItem("stardust") >= 1000)
	{
		_0x15DF5 = parseInt(getItem("stardust") / 1000)
	};
	document.getElementById("dialogue-stardust-packs-input").value = _0x15DF5;
	keyListenerStadustPacks(_0x15DF5);
	openDialogue("dialogue-stardust-packs")
}

function keyListenerStadustPacks(_0x14EA5)
{
	_0x14EA5 = convertNumberWithLetrtsKMBToNumber(_0x14EA5);
	document.getElementById("dialogue-stardust-packs-area").innerHTML = "<img src=\'images/stardust.gif\' class=\'img-30\' /> -" + formatNumber(parseInt(_0x14EA5) * 1000) + "<br /><br /><img src=\'images/stardust1000.png\' class=\'img-30\' /> +" + formatNumber(parseInt(_0x14EA5))
}

function fightingMonsterCanvasTick()
{
	if (global_lastTabId != "right-combat-fighting")
	{
		return
	};
	var _0x16BE7 = getMonsterObject(getItem("monsterName"));
	if (_0x16BE7 == "none")
	{
		return
	};
	global_canvasFightingMonster2D.clearRect(0, 0, global_canvasFightingMonster.width, global_canvasFightingMonster.height);
	if (getItem("monsterHp") == 0 && getItem("monsterName") != "corruptedKnight")
	{
		global_canvasFightingMonster2D.globalAlpha = 0.5;
		global_canvasFightingMonster2D.drawImage(_0x16BE7.getDeathImage(), 50, global_canvasFightingMonster.height - _0x16BE7.getHeight() - 50)
	}
	else
	{
		global_canvasFightingMonster2D.globalAlpha = 1.0;
		x = 50;
		y = global_canvasFightingMonster.height - _0x16BE7.getHeight() - 50;
		if (global_monsterShake)
		{
			x += getRandomInt(10);
			y += getRandomInt(10)
		};
		global_canvasFightingMonster2D.shadowBlur = 15;
		global_canvasFightingMonster2D.shadowColor = "black";
		if (getItem("freezeTimer") > 0)
		{
			global_canvasFightingMonster2D.shadowBlur = 50;
			global_canvasFightingMonster2D.shadowColor = "cyan"
		};
		if (ghostScanRequired() && getItem("ghostScanOn") == 0)
		{
			global_canvasFightingMonster2D.globalAlpha = 0.1
		}
		else
		{
			global_canvasFightingMonster2D.globalAlpha = 1.0
		};
		if (getItem("hideEnemy") >= 1)
		{
			global_canvasFightingMonster2D.globalAlpha = 0
		};
		global_canvasFightingMonster2D.drawImage(_0x16BE7.getImage(), x, y);
		if (getItem("combatCountDown") > 0)
		{
			global_canvasFightingMonster2D.font = "30px Arial";
			global_canvasFightingMonster2D.fillStyle = "yellow";
			global_canvasFightingMonster2D.fillText("Fighting in: " + getItem("combatCountDown"), 0, 200)
		}
	};
	_0x16BE7.tick();
	global_monsterHitAnimationHashSet.forEach((_0x16C0A) =>
	{
		return _0x16C0A.draw(50 + _0x16BE7.getWidth() / 2.5, global_canvasFightingMonster.height - _0x16BE7.getHeight() / 1.5)
	})
}

function resetHeroNerfs()
{
	var _0x19B12 = .heroDebuffPosion;
	var _0x1511B = .images / poison.png;
	var _0x19AA9 = .Poisoned;
	var _0x19AEF = [false];
	var _0x15049 = document.getElementById("combat-fight-hero-nerfs");
	var _0x15A44 = "";
	for (var _0x14C0C = 0; _0x14C0C < _0x19B12.length; _0x14C0C++)
	{
		var _0x14D47 = _0x19B12[_0x14C0C];
		var _0x19ACC = _0x19AEF[_0x14C0C];
		var _0x14EEB = _0x19AA9[_0x14C0C];
		if (getItem(_0x19B12[_0x14C0C]) > 0)
		{
			_0x15A44 += "<div style=\'float:right;border:1px solid grey;background-color:#222211;padding:5px; margin:5px;\'>";
			_0x15A44 += "<img src=\'" + _0x1511B + "\' class=\'img-40\' / > " + _0x19AA9;
			if (_0x19AEF[_0x14C0C])
			{
				_0x15A44 += " <span style=\'color:grey\'>" + getItem(_0x19B12[_0x14C0C] + "Timer") + "</span>"
			};
			_0x15A44 += "</div> "
		}
	};
	_0x15049.innerHTML = _0x15A44
}

function hideOtherInterfacesForCombat(_0x17740)
{
	if (_0x17740)
	{
		document.getElementById("table-top-main-items").style.display = "none";
		document.getElementById("top-bar-skills").style.display = "none";
		document.getElementById("main-panel").style.display = "none";
		document.getElementById("navigation-area-buttons").style.display = "none";
		document.getElementById("chat-area").style.display = "none";
		document.getElementById("notification-area").style.display = "none";
		if (getItemString("monsterName") == "bushy")
		{
			changeBodyBackground("images/" + "forest" + "_background.png")
		}
		else
		{
			if (getItemString("monsterName") == "fireHawk")
			{
				changeBodyBackground("images/" + "lavaDungeon" + "_background.png")
			}
			else
			{
				if (getItemString("monsterName") == "piranhas")
				{
					changeBodyBackground("images/" + getItemString("monsterName") + "_background.png")
				}
				else
				{
					if (getItemString("monsterName") == "tridentShark")
					{
						changeBodyBackground("images/" + "ocean" + "_background.png")
					}
					else
					{
						if (getItemString("monsterName") == "corruptedKnight")
						{
							changeBodyBackground("images/forest" + "_background.png")
						}
						else
						{
							if (getItemString("monsterName").startsWith("knight"))
							{
								changeBodyBackground("images/" + "castleSoldiers" + "_background.png")
							}
							else
							{
								if (getItemString("currentFighingArea") != "none")
								{
									changeBodyBackground("images/" + getItemString("currentFighingArea") + "_background.png");
									if (getItemString("currentFighingArea") == "northernFields" || getItemString("monsterName") == "iceHawk")
									{
										if (!snowflakes_loaded)
										{
											generateSnowflakes()
										};
										changeBodyBackground("images/" + "northernFields" + "_background.png");
										document.getElementById("snowflakeContainer").style.display = "block"
									}
									else
									{
										document.getElementById("snowflakeContainer").style.display = "none"
									}
								}
							}
						}
					}
				}
			}
		}
	}
	else
	{
		if (document.getElementById("minimize-btn").style.display != "none")
		{
			document.getElementById("table-top-main-items").style.display = ""
		};
		document.getElementById("top-bar-skills").style.display = "";
		document.getElementById("main-panel").style.display = "";
		document.getElementById("navigation-area-buttons").style.display = "";
		document.getElementById("notification-area").style.display = "";
		document.getElementById("chat-area").style.display = "";
		document.getElementById("snowflakeContainer").style.display = "none";
		resetBodyBackground()
	}
}

function buttonsDialogue(_0x15B7F, _0x15BA2, _0x15BC5, _0x15BE8, _0x15C0B, _0x15C2E, _0x15C51, _0x15C74, _0x15AF3, _0x15B16, _0x15B39, _0x15B5C, _0x15CBA, _0x15CDD, _0x15D00, _0x15D23, _0x15D46, _0x15AD0)
{
	if (_0x15B7F == "none")
	{
		document.getElementById("dialogue-fancy-button-div-1").style.display = "none"
	}
	else
	{
		document.getElementById("dialogue-fancy-button-div-1").style.display = ""
	};
	if (_0x15BA2 == "none")
	{
		document.getElementById("dialogue-fancy-button-div-2").style.display = "none"
	}
	else
	{
		document.getElementById("dialogue-fancy-button-div-2").style.display = ""
	};
	if (_0x15BC5 == "none")
	{
		document.getElementById("dialogue-fancy-button-div-3").style.display = "none"
	}
	else
	{
		document.getElementById("dialogue-fancy-button-div-3").style.display = ""
	};
	if (_0x15BE8 == "none")
	{
		document.getElementById("dialogue-fancy-button-div-4").style.display = "none"
	}
	else
	{
		document.getElementById("dialogue-fancy-button-div-4").style.display = ""
	};
	for (var _0x14C0C = 1; _0x14C0C <= 4; _0x14C0C++)
	{
		var _0x1511B = window["btnImage" + _0x14C0C];
		var _0x151A7 = window["btnTitle" + _0x14C0C];
		var _0x14EEB = window["btnDesc" + _0x14C0C];
		var _0x15C97 = window["cmd" + _0x14C0C];
		if (_0x14C0C == 1)
		{
			var _0x1511B = _0x15B7F;
			var _0x151A7 = _0x15C0B;
			var _0x14EEB = _0x15AF3;
			var _0x15C97 = _0x15CBA
		}
		else
		{
			if (_0x14C0C == 2)
			{
				var _0x1511B = _0x15BA2;
				var _0x151A7 = _0x15C2E;
				var _0x14EEB = _0x15B16;
				var _0x15C97 = _0x15CDD
			}
			else
			{
				if (_0x14C0C == 3)
				{
					var _0x1511B = _0x15BC5;
					var _0x151A7 = _0x15C51;
					var _0x14EEB = _0x15B39;
					var _0x15C97 = _0x15D00
				}
				else
				{
					if (_0x14C0C == 4)
					{
						var _0x1511B = _0x15BE8;
						var _0x151A7 = _0x15C74;
						var _0x14EEB = _0x15B5C;
						var _0x15C97 = _0x15D23
					}
				}
			}
		};
		if (_0x1511B != "none")
		{
			document.getElementById("dialogue-fancy-button-div-" + _0x14C0C).style.display = "";
			document.getElementById("dialogue-fancy-button-img-" + _0x14C0C).src = _0x1511B;
			document.getElementById("dialogue-fancy-button-title-" + _0x14C0C).innerHTML = _0x151A7;
			document.getElementById("dialogue-fancy-button-desc-" + _0x14C0C).innerHTML = _0x14EEB;
			document.getElementById("dialogue-fancy-button-div-" + _0x14C0C).setAttribute("onclick", "sendBytes(\'" + _0x15C97 + "\');closeDialogue(\'dialogue-fancy-buttons\')")
		}
	};
	document.getElementById("dialogue-fancy-buttons-top-div").innerHTML = _0x15D46;
	document.getElementById("dialogue-fancy-buttons-bottom-div").innerHTML = _0x15AD0;
	openDialogue("dialogue-fancy-buttons")
}

function craftGoldKeysNavigate()
{
	navigate("right-crafting");
	switchCraftingType("goldKey");
	refreshCraftables()
}

function craftPromethiumKeysNavigate()
{
	navigate("right-crafting");
	switchCraftingType("promethiumKey");
	refreshCraftables()
}

function changeBodyBackground(_0x1511B)
{
	if (_0x1511B == "none")
	{
		resetBodyBackground()
	}
	else
	{
		document.getElementById("body").style.backgroundImage = "url(\'" + _0x1511B + "\')"
	}
}

function resetBodyBackground()
{
	document.getElementById("body").style.backgroundImage = "url(\'images/background2.jpg\')"
}

function refreshCombatTab()
{
	hideOtherInterfacesForCombat(true);
	refeshMagicInCombat();
	if (getItem("researcherCombat") >= 3)
	{
		document.getElementById("fighting-screen-presets-area").style.display = ""
	};
	refreshPotionsCombat()
}

function refreshPotionsCombat()
{
	var _0x19252 = false;
	if (getItem("largeManaPotion") > 0)
	{
		document.getElementById("fighting-screen-potions-area-largeManaPotion").style.display = "";
		document.getElementById("fighting-screen-potions-area-largeManaPotion").style.filter = "brightness(100%)";
		_0x19252 = true
	};
	if (getItem("largeManaPotionUsed") == 1)
	{
		document.getElementById("fighting-screen-potions-area-largeManaPotion").style.display = "";
		document.getElementById("fighting-screen-potions-area-largeManaPotion").style.filter = "brightness(10%)"
	};
	if (_0x19252)
	{
		document.getElementById("fighting-screen-potions-area").style.display = ""
	}
	else
	{
		document.getElementById("fighting-screen-potions-area").style.display = "none"
	}
}

function getRandomInt(_0x17461)
{
	_0x17461++;
	return Math.floor(Math.random() * Math.floor(_0x17461))
}
var craftListGlobal = "none";

function CraftingRecipe(_0x15003, _0x156FC, _0x1571F, _0x15670, _0x15693, _0x1559E, _0x1692B, _0x155E4)
{
	this.itemName = _0x15003;
	this.skill = _0x156FC;
	this.skillLevel = _0x1571F;
	this.recipe = _0x15670;
	this.recipeCost = _0x15693;
	this.description = _0x1559E;
	this.isMultiCraft = _0x1692B;
	this.itemNameDisplay = _0x155E4
}
var magicTransformListGlobal = [];

function MagicTransformRecipe(_0x15003, _0x157AB, _0x15909, _0x158A0, _0x157F1, _0x15814, _0x15837, _0x1585A, _0x157CE)
{
	this.itemName = _0x15003;
	this.level = _0x157AB;
	this.stardust = _0x158A0;
	this.output1 = _0x157F1;
	this.output2 = _0x15837;
	this.output1Amount = _0x15814;
	this.output2Amount = _0x1585A;
	this.obtainedItemVar = _0x157CE;
	this.xp = _0x15909
}

function CooksBookRecipe(_0x15003, _0x156FC, _0x1571F, _0x15670, _0x15693, _0x1559E, _0x1692B, _0x155E4, _0x1694E)
{
	this.itemName = _0x15003;
	this.skill = _0x156FC;
	this.skillLevel = _0x1571F;
	this.recipe = _0x15670;
	this.recipeCost = _0x15693;
	this.description = _0x1559E;
	this.isMultiCraft = _0x1692B;
	this.itemNameDisplay = _0x155E4;
	this.timeToPrep = _0x1694E
}

function refreshMagicTransformList()
{
	var _0x15049 = "convertMagic-section-2";
	var _0x1908B = [];
	document.getElementById(_0x15049).innerHTML = "";
	var _0x190AE = "";
	var _0x151CA = "";
	_0x190AE = "stinger";
	_0x1908B[_0x190AE] = (new MagicTransformRecipe(_0x190AE, 5, 200, 5000, ["ironBars", "honey"], ["5 - 10", "1 - 2"], ["needle"], ["1"], "bee_" + _0x190AE));
	_0x151CA += addTransformRecipeToTable(_0x1908B[_0x190AE], _0x15049);
	_0x190AE = "ironDagger";
	_0x1908B[_0x190AE] = (new MagicTransformRecipe(_0x190AE, 10, 500, 10000, ["ironBars", "coins"], ["20 - 50", "1000 - 2000"], ["daggerBlade", "daggerHandle"], ["1", "1"], "thief_" + _0x190AE));
	_0x151CA += addTransformRecipeToTable(_0x1908B[_0x190AE], _0x15049);
	_0x190AE = "skeletonSword";
	_0x1908B[_0x190AE] = (new MagicTransformRecipe(_0x190AE, 25, 1000, 50000, ["bones", "boneAmulet"], ["10 - 20", "1"], ["skeletonSwordMetal"], ["1"], "skeleton_" + _0x190AE));
	_0x151CA += addTransformRecipeToTable(_0x1908B[_0x190AE], _0x15049);
	_0x190AE = "bow";
	_0x1908B[_0x190AE] = (new MagicTransformRecipe(_0x190AE, 40, 3500, 100000, ["arrow", "fireArrow", "iceArrow", "bowBase"], ["30 - 60", "20 - 30", "5 - 20", "1"], ["magicString"], ["1 - 50"], "boneHead_" + "bowBase"));
	_0x151CA += addTransformRecipeToTable(_0x1908B[_0x190AE], _0x15049);
	_0x190AE = "scythe";
	_0x1908B[_0x190AE] = (new MagicTransformRecipe(_0x190AE, 50, 6000, 150000, ["iron", "ironBars"], ["750 - 1250", "500 - 1000"], ["scytheBlade"], ["1"], "reaper_" + "scythe"));
	_0x151CA += addTransformRecipeToTable(_0x1908B[_0x190AE], _0x15049);
	_0x190AE = "stoneMace";
	_0x1908B[_0x190AE] = (new MagicTransformRecipe(_0x190AE, 50, 6000, 300000, ["stone"], ["10000 - 20000"], ["maceSpikes"], ["50 - 100"], "stoneWomen_" + "brokenStoneMace"));
	_0x151CA += addTransformRecipeToTable(_0x1908B[_0x190AE], _0x15049);
	_0x151CA = "<tr><th>Weapon</th><th></th><th><img src=\'images/magicSkill.png\' class=\'img-30\' /> Magic Level</th><th>Transforms</th><th>Special Transforms</th><th><img src=\'images/stardustIcon.png\' class=\'img-30\' /> Stardust Cost</th><th>XP</th><th>Casts</th></tr>" + _0x151CA;
	document.getElementById(_0x15049).innerHTML += "<table class=\'table-craftables\' width=\'90%\'>" + _0x151CA + "</table><br />"
}

function switchCraftingType(_0x16BC4)
{
	if (global_craftingType == _0x16BC4)
	{
		global_craftingType = "default"
	}
	else
	{
		global_craftingType = _0x16BC4
	}
}
global_craftingType = "default";

function refreshCraftables()
{
	var _0x15049 = "item-section-crafting-2";
	var _0x18F50 = [];
	var _0x18F2D = "";
	document.getElementById(_0x15049).innerHTML = "";
	var _0x151CA = "";
	if (global_craftingType == "houseBlueprint")
	{
		_0x18F2D = "home1";
		if (getItem(_0x18F2D) == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [1], ["stone", "logs", "houseBlueprint"], [20, 5, 1], "A new home to live in.<br /><br /><i style=\'font-size:12pt\'>You live a simple life and value friends and family.  You tend to help others before yourself.  You are also too nice and sometimes get taken advantage of.</i>", false, "Cottage"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "home2";
		if (getItem(_0x18F2D) == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [1], ["stone", "logs", "houseBlueprint"], [100, 5, 1], "A new home to live in.<br /><br /><i style=\'font-size:12pt\'>You honor leadership and loyalty.  Treason is a crime and is severely punished and you are not afraid to kill for the better of your people.</i>", false, "Castle"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "home3";
		if (getItem(_0x18F2D) == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [1], ["ironBars", "logs", "coins", "houseBlueprint"], [10, 10, 1000, 1], "A new home to live in.<br /><br /><i style=\'font-size:12pt\'>You enjoy business and long hours.  You spend most of your time out of the house making sales.</i>", false, "Mansion"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		}
	};
	if (global_craftingType == "rowBoatBlueprints")
	{
		_0x18F2D = "rowBoat";
		if (getItem(_0x18F2D) == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [20], ["logs", "oakLogs", "rowBoatBlueprints"], [800, 300, 1], "Can be sent out for more fish.", false, "Row Boat"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		}
	};
	if (global_craftingType == "canoeBoatBlueprints")
	{
		_0x18F2D = "canoeBoat";
		if (getItem(_0x18F2D) == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [60], ["willowLogs", "mapleLogs", "goldBars", "canoeBoatBlueprints"], [400, 200, 50, 1], "Can be sent out for more fish.", false, "Canoe"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		}
	};
	if (global_craftingType == "museumBlueprint")
	{
		_0x18F2D = "museum";
		if (getItem(_0x18F2D) == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [10], ["stone", "museumBlueprint"], [100, 1], "A museum to start trade in rare items for coins.", false, "Museum"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		}
	};
	if (global_craftingType == "brewingKitMould")
	{
		_0x18F2D = "brewingKit";
		if (getItem(_0x18F2D) == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [4], ["stone", "ironBars", "brewingKitMould"], [10, 5, 1], "Unlocks the brewing skill.", false, "Brewing kit"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		}
	};
	if (global_craftingType == "watchMould")
	{
		_0x18F2D = "watch";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [43], ["goldBars", "planter", "watchMould"], [100, 1, 1], "Ability for bob the farmer to use the planter for you, automatically planting seeds.", false, "Watch"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		}
	};
	if (global_craftingType.startsWith("promethium") && global_craftingType.endsWith("Mould"))
	{
		_0x18F2D = "promethiumHelmet";
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [70], ["promethiumBars", "promethiumHelmetMould"], [30, 1], "A piece of promethium armour.", false, "Promethium Helmet"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		}
		_0x18F2D = "promethiumBody";
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [70], ["promethiumBars", "promethiumBodyMould"], [80, 1], "A piece of promethium armour.", false, "Promethium Body"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		}
		_0x18F2D = "promethiumLegs";
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [70], ["promethiumBars", "promethiumLegsMould"], [60, 1], "A piece of promethium armour.", false, "Promethium Legs"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		}
		_0x18F2D = "promethiumBoots";
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [70], ["promethiumBars", "promethiumBootsMould"], [20, 1], "A piece of promethium armour.", false, "Promethium Boots"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		}
		_0x18F2D = "promethiumGloves";
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [70], ["promethiumBars", "promethiumGlovesMould"], [20, 1], "A piece of promethium armour.", false, "Promethium Gloves"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		}
	};
	if (global_craftingType == "spyglassMould" && getItem("spyglass") == 0)
	{
		_0x18F2D = "spyglass";
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [65], ["glass", "mapleLogs", "spyglassMould"], [80, 200, 1], "Ability for your pirate to find green treaure maps.", false, "Spyglass"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		}
	};
	if (global_craftingType == "chainsawMould")
	{
		_0x18F2D = "chainsaw";
		if (getItem(_0x18F2D) == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [50], ["ironBars", "promethiumBars", "oil", "chainsawMould"], [100, 15, 5000, 1], "Gain more logs for every tree.<br/ ><span style=\'color:grey\'>Stacks with axe</span>", false, "Chainsaw"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		}
	};
	if (global_craftingType == "wrenchMould")
	{
		_0x18F2D = "wrench";
		if (getItem(_0x18F2D) == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [30], ["ironBars", "wrenchMould", "miner"], [5, 1, 1], "Ability for your miner to use a wrench, allowing him to turn on your mining machines if you run out of oil.<br /><span style=\'color:grey\'>Configure a preset to automatically turn on machines at zero oil)", false, "Wrench"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		}
	};
	if (global_craftingType == "trowelMould")
	{
		_0x18F2D = "trowel";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [58], ["ironBars", "mapleLogs", "trowelMould"], [30, 50, 1], "Increases your rate at finding seeds.", false, "Trowel"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		}
	};
	if (global_craftingType == "ringMould")
	{
		_0x18F2D = "cooldownRing1";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [20], ["silverBars", "limeQuartzMineral", "ringMould"], [20, 1, 1], "Reduces combat cooldown by 1%.", false, "Cooldown Ring (1)"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "energyRing1";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [20], ["silverBars", "jadeMineral", "ringMould"], [20, 1, 1], "Reduces energy use by 1%.", false, "Energy Ring (1)"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "manaRing1";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [20], ["silverBars", "amethystMineral", "ringMould"], [20, 1, 1], "Increases maximum mana by 1.", false, "Mana Ring (1)"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "cooldownRing2";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [40], ["goldBars", "blueMarbleMineral", "ringMould"], [20, 1, 1], "Reduces combat cooldown by 4%.", false, "Cooldown Ring (2)"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "energyRing2";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [40], ["goldBars", "limoniteMineral", "ringMould"], [20, 1, 1], "Reduces energy use by 4%.", false, "Energy Ring (2)"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "manaRing2";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [40], ["goldBars", "tashmarineMineral", "ringMould"], [20, 1, 1], "Increases maximum mana by 2.", false, "Mana Ring (2)"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "cooldownRing3";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [60], ["promethiumBars", "denseMarbleMineral", "ringMould"], [20, 1, 1], "Reduces combat cooldown by 10%.", false, "Cooldown Ring (3)"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "energyRing3";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [60], ["promethiumBars", "fluoriteMineral", "ringMould"], [20, 1, 1], "Reduces energy use by 10%.", false, "Energy Ring (3)"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "manaRing3";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [60], ["promethiumBars", "purpleQuartzMineral", "ringMould"], [20, 1, 1], "Increases maximum mana by 3.", false, "Mana Ring (3)"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "cooldownRing4";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [80], ["titaniumBars", "crystalPrismeMineral", "ringMould"], [20, 1, 1], "Reduces combat cooldown by 15%.", false, "Cooldown Ring (4)"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "energyRing4";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [80], ["titaniumBars", "amberMineral", "ringMould"], [20, 1, 1], "Reduces energy use by 15%.", false, "Energy Ring (4)"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "manaRing4";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [80], ["titaniumBars", "tanzaniteMineral", "ringMould"], [20, 1, 1], "Increases maximum mana by 5.", false, "Mana Ring (4)"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		}
	};
	if (global_craftingType == "offhandIronDagger")
	{
		_0x18F2D = "offhandIronDagger";
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [35], ["daggerHandle", "daggerBlade"], [1, 1], "An offhand iron dagger.", false, "Offhand Dagger"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		}
	};
	if (global_craftingType == "offhandScythe")
	{
		_0x18F2D = "offhandScythe";
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [35], ["offhandIronDagger", "scytheBlade"], [1, 1], "An upgraded offhand dagger.", false, "Offhand Dagger+"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		}
	};
	if (global_craftingType == "boneAmuletPlus")
	{
		_0x18F2D = "boneAmuletPlus";
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [50], ["boneAmulet", "skeletonSwordMetal"], [1, 3], "An upgraded bone amulet.", false, "Bone Amulet+"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		}
	};
	if (global_craftingType == "bowBase")
	{
		_0x18F2D = "bow";
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [40], ["bowBase", "string"], [1, 50], "A bow used for combat.  Requires arrows.", false, "Bow"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		}
		if (getItem("magicString") > 0)
		{
			_0x18F2D = "magicBow";
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [50], ["bowBase", "magicString"], [1, 50], "A bow used for combat.  Requires arrows.<br /><span style=\'color:grey\'>25% chance of getting your arrow back after firing it.</span>", false, "Magic Bow"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		}
	};
	if (global_craftingType == "needle")
	{
		_0x18F2D = "snakeskin";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [10], ["snakeskinMask"], [1], "Undo snakeskin armour.", false, "Snakeskin"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049);
		_0x18F2D = "snakeskin";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [10], ["snakeskinBody"], [1], "Undo snakeskin armour.", false, "Snakeskin"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049);
		_0x18F2D = "snakeskin";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [10], ["snakeskinLegs"], [1], "Undo snakeskin armour.", false, "Snakeskin"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049);
		_0x18F2D = "snakeskin";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [10], ["snakeskinBoots"], [1], "Undo snakeskin armour.", false, "Snakeskin"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049);
		_0x18F2D = "snakeskin";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [10], ["snakeskinGloves"], [1], "Undo snakeskin armour.", false, "Snakeskin"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
	};
	if (global_craftingType == "goldKey")
	{
		_0x18F2D = "goldKey";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [20], ["goldBars"], [5], "A key to open a treasure chest.<br /><span style=\'color:silver;font-size:10pt\'>One roll on drop table</span>", false, "Gold Key"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049);
		_0x18F2D = "sapphireGoldKey";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [30], ["sapphire", "goldBars"], [1, 5], "A key to open a treasure chest.<br /><span style=\'color:silver;font-size:10pt\'>Two roll on drop table</span>", false, "Sapphire Key"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049);
		_0x18F2D = "emeraldGoldKey";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [40], ["emerald", "goldBars"], [1, 5], "A key to open a treasure chest.<br /><span style=\'color:silver;font-size:10pt\'>Three roll on drop table</span>", false, "Emerald Key"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049);
		_0x18F2D = "rubyGoldKey";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [50], ["ruby", "goldBars"], [1, 5], "A key to open a treasure chest.<br /><span style=\'color:silver;font-size:10pt\'>Five roll on drop table</span>", false, "Ruby Key"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049);
		_0x18F2D = "diamondGoldKey";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [60], ["diamond", "goldBars"], [1, 5], "A key to open a treasure chest.<br /><span style=\'color:silver;font-size:10pt\'>Seven roll on drop table</span>", false, "Diamond Key"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
	};
	if (global_craftingType == "promethiumKey")
	{
		_0x18F2D = "promethiumKey";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [40], ["promethiumBars"], [5], "A key to open a green treasure chest.<br /><span style=\'color:silver;font-size:10pt\'>One roll on drop table</span>", false, "Promethium Key"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049);
		_0x18F2D = "sapphirePromethiumKey";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [50], ["sapphire", "promethiumBars"], [1, 5], "A key to open a green treasure chest.<br /><span style=\'color:silver;font-size:10pt\'>Two roll on drop table</span>", false, "Sapphire Key"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049);
		_0x18F2D = "emeraldPromethiumKey";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [60], ["emerald", "promethiumBars"], [1, 5], "A key to open a green treasure chest.<br /><span style=\'color:silver;font-size:10pt\'>Three roll on drop table</span>", false, "Emerald Key"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049);
		_0x18F2D = "rubyPromethiumKey";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [70], ["ruby", "promethiumBars"], [1, 5], "A key to open a green treasure chest.<br /><span style=\'color:silver;font-size:10pt\'>Five roll on drop table</span>", false, "Ruby Key"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049);
		_0x18F2D = "diamondPromethiumKey";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [80], ["diamond", "promethiumBars"], [1, 5], "A key to open a green treasure chest.<br /><span style=\'color:silver;font-size:10pt\'>Seven roll on drop table</span>", false, "Diamond Key"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
	};
	if (global_craftingType == "feather")
	{
		_0x18F2D = "arrow";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [10], ["feather", "logs", "bones"], [1, 1, 1], "Used with a bow.", true, "Arrow"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
	};
	if (global_craftingType == "fireFeather")
	{
		_0x18F2D = "fireArrow";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [40], ["fireFeather", "lavaLogs", "bones"], [1, 1, 1], "Used with a bow.", true, "Fire Arrow"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
	};
	if (global_craftingType == "maceSpikes")
	{
		_0x18F2D = "arrowPlus";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [60], ["feather", "mapleLogs", "maceSpikes"], [1, 1, 1], "Used with a bow.", true, "Arrow+"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049);
		_0x18F2D = "stoneMacePlus";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [60], ["stoneMace", "maceSpikes"], [1, 200], "Upgrades your mace for additional spike damage.", false, "Stone Mace+"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
	};
	if (global_craftingType == "iceFeather")
	{
		_0x18F2D = "iceArrow";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [50], ["iceFeather", "pineLogs", "iceBones"], [1, 1, 1], "Used with a bow.", true, "Ice Arrow"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
	};
	if (global_craftingType == "cemeterySkeleton")
	{
		_0x18F2D = "cemeterySkeleton";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [55], ["skeletonHead", "skeletonLeftArm", "skeletonRightArm", "skeletonLeftLeg", "skeletonRightLeg", "chain", "bones"], [1, 1, 1, 1, 1, 3, 10], "Assemble the skeleton back into its true form.", false, "Cemetery Skeleton"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049);
		_0x18F2D = "fireCemeterySkeleton";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [55], ["skeletonHead", "skeletonLeftArm", "skeletonRightArm", "skeletonLeftLeg", "skeletonRightLeg", "chain", "ashes"], [1, 1, 1, 1, 1, 3, 10], "Assemble the fire skeleton back into its true form.", false, "Fire Cemetery Skeleton"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049);
		_0x18F2D = "iceCemeterySkeleton";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [55], ["skeletonHead", "skeletonLeftArm", "skeletonRightArm", "skeletonLeftLeg", "skeletonRightLeg", "chain", "iceBones"], [1, 1, 1, 1, 1, 3, 10], "Assemble the ice skeleton back into its true form.", false, "Ice Cemetery Skeleton"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
	};
	if (global_craftingType == "snowman")
	{
		_0x18F2D = "snowman_monster_idle_0";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [40], ["smallSnowballs", "mediumSnowball", "largeSnowball", "leftBranch", "rightBranch", "carrot", "ironBucket", "stone"], [1, 1, 1, 1, 1, 1, 1, 2], "Make a snowman!", false, "Snowman"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
	};
	if (global_craftingType == "cemeterySkeletonShield")
	{
		_0x18F2D = "cemeterySkeletonShield";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [65], ["cemeterySkeletonShield1", "cemeterySkeletonShield2", "cemeterySkeletonShield3"], [1, 1, 1], "Combine three shield pieces into one.", false, "Cemetery Skeleton Shield"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
	};
	if (global_craftingType == "snakeskin")
	{
		_0x18F2D = "snakeskinMask";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [10], ["snakeskin"], [3], "A piece of equipment.", false, "Snakeskin Mask"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049);
		_0x18F2D = "snakeskinBody";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [10], ["snakeskin"], [10], "A piece of equipment.", false, "Snakeskin Body"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049);
		_0x18F2D = "snakeskinLegs";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [10], ["snakeskin"], [6], "A piece of equipment.", false, "Snakeskin Legs"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049);
		_0x18F2D = "snakeskinBoots";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [10], ["snakeskin"], [3], "A piece of equipment.", false, "Snakeskin Boots"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049);
		_0x18F2D = "snakeskinGloves";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [10], ["snakeskin"], [3], "A piece of equipment.", false, "Snakeskin Gloves"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
	};
	if (global_craftingType == "bearFur")
	{
		_0x18F2D = "bearFurMask";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [20], ["bearFur"], [3], "A piece of equipment.", false, "Bear Mask"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049);
		_0x18F2D = "bearFurBody";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [20], ["bearFur"], [10], "A piece of equipment.", false, "Bear Body"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049);
		_0x18F2D = "bearFurLegs";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [20], ["bearFur"], [6], "A piece of equipment.", false, "Bear Legs"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049);
		_0x18F2D = "bearFurBoots";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [20], ["bearFur"], [3], "A piece of equipment.", false, "Bear Boots"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049);
		_0x18F2D = "bearFurGloves";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [20], ["bearFur"], [3], "A piece of equipment.", false, "Bear Gloves"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
	};
	if (global_craftingType == "polarBearFur")
	{
		_0x18F2D = "polarBearFurMask";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [35], ["polarBearFur"], [3], "A piece of equipment.", false, "Bear Mask"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049);
		_0x18F2D = "polarBearFurBody";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [35], ["polarBearFur"], [10], "A piece of equipment.", false, "Bear Body"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049);
		_0x18F2D = "polarBearFurLegs";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [35], ["polarBearFur"], [6], "A piece of equipment.", false, "Bear Legs"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049);
		_0x18F2D = "polarBearFurBoots";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [35], ["polarBearFur"], [3], "A piece of equipment.", false, "Bear Boots"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049);
		_0x18F2D = "polarBearFurGloves";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [35], ["polarBearFur"], [3], "A piece of equipment.", false, "Bear Gloves"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
	};
	if (global_craftingType == "blackSilk")
	{
		_0x18F2D = "reaperHood";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [50], ["blackSilk"], [6], "A piece of mage equipment.", false, "Reaper Hood"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049);
		_0x18F2D = "reaperBody";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [50], ["blackSilk"], [20], "A piece of mage equipment.", false, "Reaper Body"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049);
		_0x18F2D = "reaperLegs";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [50], ["blackSilk"], [12], "A piece of mage equipment.", false, "Reaper Robe"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049);
		_0x18F2D = "reaperBoots";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [50], ["blackSilk"], [6], "A piece of mage equipment.", false, "Reaper Boots"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049);
		_0x18F2D = "reaperGloves";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [50], ["blackSilk"], [6], "A piece of mage equipment.", false, "Reaper Gloves"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
	};
	if (global_craftingType == "oilFactoryBlueprint")
	{
		_0x18F2D = "oilFactory";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [55], ["ironBars", "silverBars", "goldBars", "oilFactoryBlueprint"], [1000, 500, 250, 1], "Ability to hire workers for additional oil prodcution.", false, "Oil Factory"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "promethiumOilFactory";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [64], ["oilFactory", "promethiumBars", "promethiumOilFactoryBlueprint"], [1, 120, 1], "Increases capacity workers by 10.", false, "Promethium Oil Factory"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "titaniumOilFactory";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [72], ["promethiumOilFactory", "titaniumBars", "titaniumOilFactoryBlueprint"], [1, 30, 1], "Increases capacity workers by 10.", false, "Titanium Oil Factory"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		}
	};
	if (global_craftingType == "batSkin")
	{
		_0x18F2D = "batSkinMask";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [30], ["batSkin"], [3], "A piece of equipment.", false, "Batskin Mask"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049);
		_0x18F2D = "batSkinBody";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [30], ["batSkin"], [10], "A piece of equipment.", false, "Batskin Body"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049);
		_0x18F2D = "batSkinLegs";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [30], ["batSkin"], [6], "A piece of equipment.", false, "Batskin Legs"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049);
		_0x18F2D = "batSkinBoots";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [30], ["batSkin"], [3], "A piece of equipment.", false, "Batskin Boots"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049);
		_0x18F2D = "batSkinGloves";
		_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [30], ["batSkin"], [3], "A piece of equipment.", false, "Batskin Gloves"));
		_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
	};
	if (global_craftingType == "default")
	{
		_0x18F2D = "stoneFurnace";
		if (getItem(_0x18F2D) == 0 && getItem("furnaceCapacity") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [1], ["stone"], [5], "Smelt ores into metal bars.", false, "Stone Furnace"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "bronzeOilWell";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [1], ["bronzeBars"], [5], "Gain 1 oil per second.", false, "Bronze Oil Well"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "axe";
		if (getItem(_0x18F2D) == 0 && getItem("bobsPanicQuest") == 3)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [2], ["bronzeBars", "stone"], [2, 5], "Unlocks the woodcutting skill.", false, "Axe"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "communityCenter";
		if (getItem(_0x18F2D) == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [4], ["logs"], [5], "Upgrades the shop to carry more items.", false, "Community Center"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F2D = "brewingKit";
			if (getItem(_0x18F2D) == 0)
			{
				_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [4], ["stone", "ironBars", "brewingKitMould"], [10, 5, 1], "Unlocks the brewing skill.", false, "Brewing kit"));
				_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
			}
		};
		_0x18F2D = "vial";
		if (true)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [5], ["glass"], [1], "Vials for making potions.", true, "Vial"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "communityCenter2";
		if (getItem(_0x18F2D) == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [5], ["oakLogs"], [5], "Upgrades the shop to carry more items.", false, "Community Center 2"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "shovel";
		if (getItem(_0x18F2D) == 0 && getItem("sapphireShovel") == 0 && getItem("emeraldShovel") == 0 && getItem("rubyShovel") == 0 && getItem("diamondShovel") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [7], ["ironBars", "logs"], [5, 10], "Collects sand over time.", false, "Shovel"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "drills";
		if (getItem(_0x18F2D) == 0 || (getItem("researcherMining") >= 3 && getItem(_0x18F2D) < 3))
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [10], ["bronzeBars"], [20], "Drill a desired ore at the cost of oil.", false, "Drills"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "bronzeFurnace";
		if (getItem(_0x18F2D) == 0 && getItem("furnaceCapacity") == 10)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [12], ["stone", "bronzeBars", "stoneFurnace"], [200, 100, 1], "Increases your furnace capacity.", false, "Bronze Furnace"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "sapphireGlassHand";
		if (getItem(_0x18F2D) == 0 && getItem(_0x18F2D + "Museum") == 0)
		{
			if (getItem("museum") == 1)
			{
				_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [12], ["glass", "sapphire"], [20, 1], "A magnificent piece of art, it must be worth a lot of money.<br /><span style=\'color:green\'><img src=\'images/atom.png\' class=\'img-20\' /> Requires a Museum</span>", false, "Sapphire Glass Hand"))
			}
			else
			{
				_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [12], ["glass", "sapphire"], [20, 1], "A magnificent piece of art, it must be worth a lot of money.<br /><span style=\'color:red\'><img src=\'images/atom.png\' class=\'img-20\' /> Requires a Museum</span>", false, "Sapphire Glass Hand"))
			};
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "communityCenter3";
		if (getItem(_0x18F2D) == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [14], ["willowLogs"], [10], "Upgrades the shop to carry more items.", false, "Community Center 3"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "bonemealBin";
		if (getItem(_0x18F2D) == 0 && getItem("sapphireBonemealBin") == 0 && getItem("emeraldBonemealBin") == 0 && getItem("rubyBonemealBin") == 0 && getItem("diamondBonemealBin") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [15], ["logs"], [50], "Ability to convert bones to bonemeal.", false, "Bonemeal Bin"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "rake";
		if (getItem(_0x18F2D) == 0 && getItem("sapphireRake") == 0 && getItem("emeraldRake") == 0 && getItem("rubyRake") == 0 && getItem("diamondRake") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [17], ["silverBars", "logs", "rakeHead"], [3, 30, 1], "A tool used by bob to find higher tier seeds.", false, "Rake"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "ironFurnace";
		if (getItem(_0x18F2D) == 0 && getItem("furnaceCapacity") <= 30)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [18], ["stone", "ironBars", "bronzeFurnace"], [500, 100, 1], "Increases your furnace capacity.", false, "Iron Furnace"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "oxygenTank";
		if (getItem(_0x18F2D) == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [19], ["ironBars"], [50, 1], "Allows you to explore the ocean floors.<br /><span style=\'color:grey;font-size:12pt;\'><img src=\'images/atom.png\' class=\'img-20\' /> Research may be needed to use this item.</span>", false, "Oxygen Tank"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "crushers";
		if (getItem(_0x18F2D) == 0 || (getItem("researcherMining") >= 3 && getItem(_0x18F2D) < 3))
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [20], ["goldBars"], [5], "Mine a desired ore at the cost of oil.", false, "Crushers"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "oilStorage1";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [22], ["stone"], [1000], "Increases oil capacity to 5000", false, "Oil Storage I"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "ironOilWell";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [23], ["ironBars", "bronzeOilWell"], [25, 1], "Gain 5 oil per second.", false, "Iron Oil Well"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "ironOven";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [25], ["ironBars", "bronzeOven"], [100, 1], "Reduces the oven\'s burn rate.", false, "Iron Oven"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "silverFurnace";
		if (getItem(_0x18F2D) == 0 && getItem("furnaceCapacity") <= 75)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [28], ["silverBars", "stone", "ironFurnace"], [250, 5000, 1], "Increases your furnace capacity.", false, "Silver Furnace"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "silverOilWell";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [30], ["silverBars", "ironOilWell"], [200, 1], "Gain 10 oil per second.", false, "Silver Oil Well"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "wrench";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [30], ["ironBars", "wrenchMould", "miner"], [5, 1, 1], "Ability for your miner to use a wrench, allowing him to turn on your mining machines if you run out of oil.<br /><span style=\'color:grey\'>Configure a preset to automatically turn on machines at zero oil)", false, "Wrench"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "largeVial";
		if (getItem("researcherCrafting") >= 4)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [32], ["glass"], [20], "Large vials for making medium level potions.", true, "Large Vial"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "oilStorage2";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [33], ["stone", "oilStorage1"], [20000, 1], "Increases oil capacity to 20,000", false, "Oil Storage II"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "silverOven";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [35], ["silverBars", "ironOven"], [300, 1], "Reduces the oven\'s burn rate.", false, "Silver Oven"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "planter";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [36], ["goldBars", "glass", "tractorTire"], [10, 20, 1], "Ability to harvest and replant a seed on all plots in one click.", false, "Planter"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "unlitTorch";
		if (getItem(_0x18F2D) == 0 && getItem("torch") == 0 && getItemString("weapon") != "torch" && getItemString("weapon") != "unlitTorch")
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [37], ["goldBars", "bambooLogs"], [3, 50], "An unlit torch.", false, "Unlit Torch"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "emeraldGlassHand";
		if (getItem(_0x18F2D) == 0 && getItem(_0x18F2D + "Museum") == 0)
		{
			if (getItem("museum") == 1)
			{
				_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [39], ["glass", "emerald"], [20, 1], "A magnificent piece of art, it must be worth a lot of money.<br /><span style=\'color:green\'><img src=\'images/atom.png\' class=\'img-20\' /> Requires a Museum</span>", false, "Emerald Glass Hand"))
			}
			else
			{
				_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [39], ["glass", "emerald"], [20, 1], "A magnificent piece of art, it must be worth a lot of money.<br /><span style=\'color:red\'><img src=\'images/atom.png\' class=\'img-20\' /> Requires a Museum</span>", false, "Emerald Glass Hand"))
			};
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "ironBucket";
		if (getItem("researcherCrafting") >= 3)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [40], ["silverBars"], [50], "Collect a bucket of lava after killing a lava monster.", true, "Silver Bucket"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "chisel";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			if (getItem("researcherMining") >= 4)
			{
				_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [41], ["logs", "ironBars"], [25, 10], "Used to open geodes.<br /><span style=\'color:green\'><img src=\'images/atom.png\' class=\'img-20\' /> Requires the ability to mine geodes.</span>", false, "Chisel"))
			}
			else
			{
				_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [41], ["logs", "ironBars"], [25, 10], "Used to open geodes.<br /><span style=\'color:red\'><img src=\'images/atom.png\' class=\'img-20\' /> Requires the ability to mine geodes.</span>", false, "Chisel"))
			};
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "goldFurnace";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [42], ["goldBars", "stone", "silverFurnace"], [300, 20000, 1], "Increases your furnace capacity.", false, "Gold Furnace"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "communityCenter4";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [42], ["mapleLogs"], [10], "Upgrades the shop to carry more items.", false, "Community Center 4"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "watch";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [43], ["goldBars", "planter", "watchMould"], [100, 1, 1], "Ability for bob the farmer to use the planter for you, automatically planting seeds.", false, "Watch"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "goldOilWell";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [43], ["goldBars", "silverOilWell"], [500, 1], "Gain 20 oil per second.", false, "Gold Oil Well"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "oilStorage3";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [45], ["stone", "oilStorage2"], [50000, 1], "Increases oil capacity to 100,000", false, "Oil Storage III"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "goldOven";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [47], ["goldBars", "silverOven"], [600, 1], "Reduces the oven\'s burn rate.", false, "Gold Oven"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "giantDrills";
		if (getItem(_0x18F2D) == 0 || (getItem("researcherMining") >= 3 && getItem(_0x18F2D) < 3))
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [50], ["ironBars", "silverBars"], [2000, 500], "Mine a desired ore at the cost of oil.", false, "Giant Drills"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "chainsaw";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [50], ["ironBars", "promethiumBars", "oil", "chainsawMould"], [100, 15, 5000, 1], "Gain more logs for every tree.<br/ ><span style=\'color:grey\'>Stacks with axe</span>", false, "Chainsaw"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "promethiumFurnace";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [54], ["promethiumBars", "stone", "goldFurnace"], [25, 80000, 1], "Increases your furnace capacity.", false, "Promethium Furnace"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "oilFactory";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [55], ["ironBars", "silverBars", "goldBars", "oilFactoryBlueprint"], [1000, 500, 250, 1], "Ability to hire workers for additional oil prodcution.", false, "Oil Factory"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "promethiumOilWell";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [56], ["promethiumBars", "goldOilWell"], [40, 1], "Gain 35 oil per second.", false, "Promethium Oil Well"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "trowel";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [58], ["ironBars", "mapleLogs", "trowelMould"], [30, 50, 1], "Increases your rate at finding seeds.", false, "Trowel"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "communityCenter5";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [59], ["lavaLogs"], [10], "Upgrades the shop to carry more items.", false, "Community Center 5"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "rocket";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [60], ["promethiumBars", "ironBars", "silverBars", "goldBars"], [35, 5000, 2500, 500], "Ability to travel to the moon at the cost of oil.", false, "Rocket"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "oilStorage4";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [61], ["stone", "oilStorage3"], [100000, 1], "Increases oil capacity to 250,000", false, "Oil Storage IV"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "rubyGlassHand";
		if (getItem(_0x18F2D) == 0 && getItem(_0x18F2D + "Museum") == 0)
		{
			if (getItem("museum") == 1)
			{
				_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [62], ["glass", "ruby"], [20, 1], "A magnificent piece of art, it must be worth a lot of money.<br /><span style=\'color:green\'><img src=\'images/atom.png\' class=\'img-20\' /> Requires a Museum</span>", false, "Ruby Glass Hand"))
			}
			else
			{
				_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [62], ["glass", "ruby"], [20, 1], "A magnificent piece of art, it must be worth a lot of money.<br /><span style=\'color:red\'><img src=\'images/atom.png\' class=\'img-20\' /> Requires a Museum</span>", false, "Ruby Glass Hand"))
			};
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "promethiumOven";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [63], ["promethiumBars", "goldOven"], [100, 1], "Reduces the oven\'s burn rate.", false, "Promethium Oven"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "promethiumOilFactory";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [64], ["oilFactory", "promethiumBars", "promethiumOilFactoryBlueprint"], [1, 120, 1], "Increases capacity workers by 10.", false, "Promethium Oil Factory"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "excavators";
		if (getItem(_0x18F2D) == 0 || (getItem("researcherMining") >= 3 && getItem(_0x18F2D) < 3))
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [65], ["ironBars", "silverBars"], [5000, 2000], "Mine a desired ore at the cost of oil.", false, "Excavator"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "spyglass";
		if (getItem(_0x18F2D) == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [65], ["glass", "mapleLogs", "spyglassMould"], [80, 200, 1], "Ability for your pirate to find green treaure maps.", false, "Spyglass"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "charcoalFoundry";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [67], ["ironBars", "promethiumBars"], [5000, 75], "Converts logs into charcoal at the cost of oil.", false, "Charcoal Foundry"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "titaniumRocketBoosters";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [69], ["titaniumBars", "silverBars", "rocket"], [5, 1000, 1], "Ability to fire titanium boosters during a trip, increasing the rocket\'s speed.", false, "Titanium Boosters"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "titaniumFurnace";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [70], ["titaniumBars", "stone", "promethiumFurnace"], [15, 150000, 1], "Increases your furnace capacity.", false, "Titanium Furnace"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "titaniumOilFactory";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [72], ["promethiumOilFactory", "titaniumBars", "titaniumOilFactoryBlueprint"], [1, 30, 1], "Increases capacity workers by 10.", false, "Titanium Oil Factory"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "titaniumOven";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [75], ["titaniumBars", "promethiumOven"], [75, 1], "Cook food perfectly.", false, "Titanium Oven"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "oilStorage5";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [77], ["stone", "oilStorage4"], [400000, 1], "Increases oil capacity to 600,000", false, "Oil Storage V"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "titaniumCharcoalFoundry";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [78], ["ironBars", "titaniumBars", "charcoalFoundry"], [10000, 75, 1], "Increases the chance of getting charcoal for each log.", false, "Titanium Charcoal Foundry"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "diamondGlassHand";
		if (getItem(_0x18F2D) == 0 && getItem(_0x18F2D + "Museum") == 0)
		{
			if (getItem("museum") == 1)
			{
				_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [80], ["glass", "diamond"], [20, 1], "A magnificent piece of art, it must be worth a lot of money.<br /><span style=\'color:green\'><img src=\'images/atom.png\' class=\'img-20\' /> Requires a Museum</span>", false, "Diamond Glass Hand"))
			}
			else
			{
				_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [80], ["glass", "diamond"], [20, 1], "A magnificent piece of art, it must be worth a lot of money.<br /><span style=\'color:red\'><img src=\'images/atom.png\' class=\'img-20\' /> Requires a Museum</span>", false, "Diamond Glass Hand"))
			};
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "robot";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [80], ["bronzeBars", "goldBars", "promethiumBars"], [10000, 2000, 225], "A robot controlled using AI to dig through the earth for additional ore.", false, "Robot"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "shieldedRobot";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [82], ["diamondRobot", "charcoal", "lava"], [1, 1000, 100], "Ability to send your robot even deeper, where the temperature is high due to the earth\'s heat.", false, "Robot Heatshield"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		};
		_0x18F2D = "tnt";
		if (getItem(_0x18F2D + "Total") == 0)
		{
			_0x18F50[_0x18F2D] = (new CraftingRecipe(_0x18F2D, ["crafting"], [85], ["gunPowder", "string", "thickString", "logs"], [20, 50, 20, 20], "Can produce a powerful explosion. Should be used with care to avoid injuries.", false, "TNT"));
			_0x151CA += addRecipeToTable(_0x18F50[_0x18F2D], _0x15049)
		}
	};
	document.getElementById(_0x15049).innerHTML += "<table class=\'table-craftables\' width=\'90%\'><tr><th>Name</th><th>Item</th><th>Level</th><th>Materials</th><th width=\'50%\x09\'>Description</th></tr>" + _0x151CA + "</table><br />"
}

function getRocketImage()
{
	if (getItem("titaniumRocketBoosters") > 0)
	{
		return "images/titaniumRocket.png"
	};
	if (getItem("rocket") == 1)
	{
		return "images/rocket.png"
	}
}

function refreshCooksBook()
{
	var _0x15049 = "item-section-cooksBook-1";
	cookingRecipes = [];
	var _0x18F0A = "";
	document.getElementById(_0x15049).innerHTML = "";
	var _0x151CA = "";
	_0x18F0A = "salad";
	cookingRecipes[_0x18F0A] = (new CooksBookRecipe(_0x18F0A, ["cooking"], [1], ["dottedGreenLeaf", "redMushroom"], [5, 10], "A salad made from farmed ingredients.", true, "Mushroom Salad", 600));
	_0x151CA += addRecipeToTable(cookingRecipes[_0x18F0A], _0x15049);
	_0x18F0A = "oysterMornay";
	cookingRecipes[_0x18F0A] = (new CooksBookRecipe(_0x18F0A, ["cooking"], [5], ["oyster", "cheese"], [1, 1], "Boiled oyster with melted cheese.", true, "Oyster Mornay", 900));
	_0x151CA += addRecipeToTable(cookingRecipes[_0x18F0A], _0x15049);
	if (getSmallFishingNetTypeData()[0] != "none")
	{
		_0x18F0A = "snakeSushiShrimp";
		cookingRecipes[_0x18F0A] = (new CooksBookRecipe(_0x18F0A, ["cooking"], [10], ["snakeskin", "rawShrimp"], [2, 10], "A sushi made with snakeskin instead of traditional seaweed.", true, "Snakeskin Sushi", 1800));
		_0x151CA += addRecipeToTable(cookingRecipes[_0x18F0A], _0x15049)
	};
	if (getFishingRodTypeData()[0] != "none")
	{
		_0x18F0A = "snakeSushiTrout";
		cookingRecipes[_0x18F0A] = (new CooksBookRecipe(_0x18F0A, ["cooking"], [10], ["snakeskin", "rawTrout"], [2, 5], "A sushi made with snakeskin instead of traditional seaweed.", true, "Snakeskin Sushi", 1800));
		_0x151CA += addRecipeToTable(cookingRecipes[_0x18F0A], _0x15049)
	};
	if (getHarpoonTypeData()[0] != "none")
	{
		_0x18F0A = "snakeSushiTuna";
		cookingRecipes[_0x18F0A] = (new CooksBookRecipe(_0x18F0A, ["cooking"], [10], ["snakeskin", "rawTuna"], [2, 1], "A sushi made with snakeskin instead of traditional seaweed.", true, "Snakeskin Sushi", 1800));
		_0x151CA += addRecipeToTable(cookingRecipes[_0x18F0A], _0x15049)
	};
	_0x18F0A = "seaweedChicken";
	cookingRecipes[_0x18F0A] = (new CooksBookRecipe(_0x18F0A, ["cooking"], [20], ["seaweed", "chicken"], [10, 1], "A chicken with mixed with seaweed.", true, "Seaweed Chicken", 2700));
	_0x151CA += addRecipeToTable(cookingRecipes[_0x18F0A], _0x15049);
	_0x18F0A = "batSkinSushi";
	cookingRecipes[_0x18F0A] = (new CooksBookRecipe(_0x18F0A, ["cooking"], [30], ["batSkin", "rawShrimp", "rawTrout", "rawTuna"], [2, 10, 5, 1], "A sushi made with batskin instead of traditional seaweed.", true, "Batskin Sushi", 3600));
	_0x151CA += addRecipeToTable(cookingRecipes[_0x18F0A], _0x15049);
	document.getElementById(_0x15049).innerHTML += "<table class=\'table-craftables\' width=\'90%\'><tr><th>Name</th><th>Item</th><th>Level</th><th>Ingredients</th><th width=\'50%\'>Description</th><th>Prep Time</th></tr>" + _0x151CA + "</table><br />"
}

function refreshXpBarAnimation(_0x14DB0)
{
	var _0x14DD3 = _0x14DB0.split("~");
	var _0x1613D = _0x14DD3[0];
	var _0x19A63 = _0x14DD3[1];
	var _0x19A40 = _0x14DD3[2];
	percentageDecimalXpBarWidth = (getItem(_0x1613D + "Xp") - getXpNeeded(getLevel(getItem(_0x1613D + "Xp")))) / (getXpNeeded(1 + parseInt(getLevel(getItem(_0x1613D + "Xp")))) - getXpNeeded(getLevel(getItem(_0x1613D + "Xp"))))
}

function setInnerHTMLCache(_0x19D65, _0x19DAB)
{
	var _0x19DCE = (_0x19DAB.replace(/\s|'|"|&quot;|\//gi, ""));
	var _0x19D88 = (_0x19D65.innerHTML.replace(/\s|'|"|&quot;|\//gi, ""));
	if (_0x19DCE != _0x19D88)
	{
		_0x19D65.innerHTML = _0x19DAB
	}
}

function refreshBrewing()
{
	var _0x15049 = "item-section-brewing-2";
	brewingRecipes = [];
	var _0x18EE7 = "";
	var _0x151CA = "";
	potionItemName = "stardustPotion";
	potionDisplayName = "Stardust Potion";
	potionItemNameDescription = "Gain some stardust over time.<br /><span style=\'color:grey;font-size:12pt;\'>(Lasts for " + getBrewingTimeAdjusted(300) + ")</span>";
	if (getItem(potionItemName + "Drank") == 0)
	{
		potionItemNameDescription = "???"
	};
	brewingRecipes[potionItemName] = (new CraftingRecipe(potionItemName, ["brewing"], [1], ["dottedGreenLeaf", "redMushroom", "vial"], [1, 15, 1], potionItemNameDescription, true, potionDisplayName));
	_0x151CA += addRecipeToTable(brewingRecipes[potionItemName], _0x15049);
	potionItemName = "sandPotion";
	potionDisplayName = "Sand Potion";
	potionItemNameDescription = "Increases the chance of finding sand with a shovel.<br /><span style=\'color:grey;font-size:12pt;\'>(Lasts for " + getBrewingTimeAdjusted(3600) + ")</span>";
	if (getItem(potionItemName + "Drank") == 0)
	{
		potionItemNameDescription = "???"
	};
	brewingRecipes[potionItemName] = (new CraftingRecipe(potionItemName, ["brewing"], [3], ["dottedGreenLeaf", "redMushroom", "vial"], [2, 20, 1], potionItemNameDescription, true, potionDisplayName));
	_0x151CA += addRecipeToTable(brewingRecipes[potionItemName], _0x15049);
	potionItemName = "cookingBoostPotion";
	potionDisplayName = "Cooking Boost Potion";
	potionItemNameDescription = "Temporary increases your cooking level by 10 for the next food that you cook.<br /><span style=\'color:grey;font-size:12pt;\'>(Cooldown: 20:00)</span>";
	if (getItem(potionItemName + "Drank") == 0)
	{
		potionItemNameDescription = "???"
	};
	brewingRecipes[potionItemName] = (new CraftingRecipe(potionItemName, ["brewing"], [5], ["greenLeaf", "redMushroom", "vial"], [1, 10, 1], potionItemNameDescription, true, potionDisplayName));
	_0x151CA += addRecipeToTable(brewingRecipes[potionItemName], _0x15049);
	potionItemName = "combatCooldownPotion";
	potionDisplayName = "Combat Cooldown";
	potionItemNameDescription = "Your hero\'s cooldown will decrease twice as fast.<br /><span style=\'color:grey;font-size:12pt;\'>(Lasts for " + getBrewingTimeAdjusted(10 * 60) + ")</span>";
	if (getItem(potionItemName + "Drank") == 0)
	{
		potionItemNameDescription = "???"
	};
	brewingRecipes[potionItemName] = (new CraftingRecipe(potionItemName, ["brewing"], [8], ["dottedGreenLeaf", "greenLeaf", "bones", "vial"], [3, 3, 5, 1], potionItemNameDescription, true, potionDisplayName));
	_0x151CA += addRecipeToTable(brewingRecipes[potionItemName], _0x15049);
	potionItemName = "compostPotion";
	potionDisplayName = "Compost Potion";
	potionItemNameDescription = "Crops grow twice as fast.<br /><span style=\'color:grey;font-size:12pt;\'>(Lasts for " + getBrewingTimeAdjusted(1800) + ")</span>";
	if (getItem(potionItemName + "Drank") == 0)
	{
		potionItemNameDescription = "???"
	};
	brewingRecipes[potionItemName] = (new CraftingRecipe(potionItemName, ["brewing"], [10], ["greenLeaf", "redMushroom", "vial"], [2, 20, 1], potionItemNameDescription, true, potionDisplayName));
	_0x151CA += addRecipeToTable(brewingRecipes[potionItemName], _0x15049);
	potionItemName = "oilPotion";
	potionDisplayName = "Oil Potion";
	potionItemNameDescription = "Increases oil income by 10.<br /><span style=\'color:grey;font-size:12pt;\'>(Lasts for " + getBrewingTimeAdjusted(1800) + ")</span>";
	if (getItem(potionItemName + "Drank") == 0)
	{
		potionItemNameDescription = "???"
	};
	brewingRecipes[potionItemName] = (new CraftingRecipe(potionItemName, ["brewing"], [13], ["dottedGreenLeaf", "oil", "vial"], [4, 1, 1], potionItemNameDescription, true, potionDisplayName));
	_0x151CA += addRecipeToTable(brewingRecipes[potionItemName], _0x15049);
	potionItemName = "bonePotion";
	potionDisplayName = "Bone Potion";
	potionItemNameDescription = "Passively collects bones over time.<br /><span style=\'color:grey;font-size:12pt;\'>(Lasts for " + getBrewingTimeAdjusted(7200) + ")</span>";
	if (getItem(potionItemName + "Drank") == 0)
	{
		potionItemNameDescription = "???"
	};
	brewingRecipes[potionItemName] = (new CraftingRecipe(potionItemName, ["brewing"], [15], ["dottedGreenLeaf", "bones", "vial"], [5, 20, 1], potionItemNameDescription, true, potionDisplayName));
	_0x151CA += addRecipeToTable(brewingRecipes[potionItemName], _0x15049);
	potionItemName = "treeStarterPotion";
	potionDisplayName = "Tree Starter Potion";
	potionItemNameDescription = "Doubles your chances for a tree to start growing.<br /><span style=\'color:grey;font-size:12pt;\'>(Lasts for " + getBrewingTimeAdjusted(600) + ")</span>";
	if (getItem(potionItemName + "Drank") == 0)
	{
		potionItemNameDescription = "???"
	};
	brewingRecipes[potionItemName] = (new CraftingRecipe(potionItemName, ["brewing"], [18], ["dottedGreenLeaf", "redMushroom", "logs", "vial"], [3, 50, 1, 1], potionItemNameDescription, true, potionDisplayName));
	_0x151CA += addRecipeToTable(brewingRecipes[potionItemName], _0x15049);
	if (getItem("researcherBrewing") >= 5)
	{
		potionItemName = "repelPotion1";
		potionDisplayName = "Repel Potion";
		potionItemNameDescription = "Avoid an enemy in the fields, forest or caves.";
		if (getItem(potionItemName + "Drank") == 0)
		{
			potionItemNameDescription = "???"
		};
		brewingRecipes[potionItemName] = (new CraftingRecipe(potionItemName, ["brewing"], [20], ["strangeLeafFix", "blewitMushroom", "vial"], [1, 50, 1], potionItemNameDescription, true, potionDisplayName));
		_0x151CA += addRecipeToTable(brewingRecipes[potionItemName], _0x15049)
	};
	potionItemName = "barPotion";
	potionDisplayName = "Bar Potion";
	potionItemNameDescription = "20% chance that two bars are smelted instead of one, without using an extra ore.<br /><i style=\'font-size:12pt;\'>Works on: Bronze, iron, silver, gold</i><br /><span style=\'color:grey;font-size:12pt;\'>(Lasts for " + getBrewingTimeAdjusted(600) + ")</span>";
	if (getItem(potionItemName + "Drank") == 0)
	{
		potionItemNameDescription = "???"
	};
	brewingRecipes[potionItemName] = (new CraftingRecipe(potionItemName, ["brewing"], [22], ["greenLeaf", "limeLeaf", "bronzeBars", "ironBars", "silverBars", "goldBars", "vial"], [2, 2, 1, 1, 1, 1, 1], potionItemNameDescription, true, potionDisplayName));
	_0x151CA += addRecipeToTable(brewingRecipes[potionItemName], _0x15049);
	potionItemName = "sapphireStardustPotion";
	potionDisplayName = "Sapphire Stardust Potion";
	potionItemNameDescription = "Can be poured on a sapphire, converting it into stardust.";
	if (getItem(potionItemName + "Drank") == 0)
	{
		potionItemNameDescription = "???"
	};
	brewingRecipes[potionItemName] = (new CraftingRecipe(potionItemName, ["brewing"], [25], ["limeLeaf", "redMushroom", "vial"], [1, 100, 1], potionItemNameDescription, true, potionDisplayName));
	_0x151CA += addRecipeToTable(brewingRecipes[potionItemName], _0x15049);
	if (getItem("researcherBrewing") >= 4)
	{
		potionItemName = "largeManaPotion";
		potionDisplayName = "Mana Potion";
		potionItemNameDescription = "Restore 5 mana instantly in combat.";
		if (getItem(potionItemName + "Drank") == 0)
		{
			potionItemNameDescription = "???"
		};
		brewingRecipes[potionItemName] = (new CraftingRecipe(potionItemName, ["brewing"], [30], ["strangeLeafFix", "largeVial"], [5, 1], potionItemNameDescription, true, potionDisplayName));
		_0x151CA += addRecipeToTable(brewingRecipes[potionItemName], _0x15049)
	};
	potionItemName = "largeStardustPotion";
	potionDisplayName = "Large Stardust Potion";
	potionItemNameDescription = "Gain some stardust over time.<br /><span style=\'color:grey;font-size:12pt;\'>(Lasts for " + getBrewingTimeAdjusted(300) + ").";
	if (getItem(potionItemName + "Drank") == 0)
	{
		potionItemNameDescription = "???"
	};
	brewingRecipes[potionItemName] = (new CraftingRecipe(potionItemName, ["brewing"], [35], ["goldLeaf", "redMushroom", "largeVial"], [5, 450, 1], potionItemNameDescription, true, potionDisplayName));
	_0x151CA += addRecipeToTable(brewingRecipes[potionItemName], _0x15049);
	potionItemName = "largeFurnacePotion";
	potionDisplayName = "Furnace Potion";
	potionItemNameDescription = "Your furnace will run 3 times as fast.<br /><span style=\'color:grey;font-size:12pt;\'>(Lasts for " + getBrewingTimeAdjusted(1800) + ").";
	if (getItem(potionItemName + "Drank") == 0)
	{
		potionItemNameDescription = "???"
	};
	brewingRecipes[potionItemName] = (new CraftingRecipe(potionItemName, ["brewing"], [38], ["goldLeaf", "greenLeaf", "redMushroom", "largeVial"], [1, 15, 200, 1], potionItemNameDescription, true, potionDisplayName));
	_0x151CA += addRecipeToTable(brewingRecipes[potionItemName], _0x15049);
	potionItemName = "largePiratePotion";
	potionDisplayName = "Pirate Potion";
	potionItemNameDescription = "Doubles your pirate\'s chance to find a map.<br /><span style=\'color:grey;font-size:12pt;\'>(Lasts for " + getBrewingTimeAdjusted(3600 * 3) + ").";
	if (getItem(potionItemName + "Drank") == 0)
	{
		potionItemNameDescription = "???"
	};
	brewingRecipes[potionItemName] = (new CraftingRecipe(potionItemName, ["brewing"], [40], ["dottedGreenLeaf", "greenLeaf", "redMushroom", "largeVial"], [20, 20, 250, 1], potionItemNameDescription, true, potionDisplayName));
	_0x151CA += addRecipeToTable(brewingRecipes[potionItemName], _0x15049);
	potionItemName = "largeEmeraldStardustPotion";
	potionDisplayName = "Emerald Stardust Potion";
	potionItemNameDescription = "Can be poured on an emerald, converting it into stardust.";
	if (getItem(potionItemName + "Drank") == 0)
	{
		potionItemNameDescription = "???"
	};
	brewingRecipes[potionItemName] = (new CraftingRecipe(potionItemName, ["brewing"], [45], ["limeLeaf", "redMushroom", "largeVial"], [20, 800, 1], potionItemNameDescription, true, potionDisplayName));
	_0x151CA += addRecipeToTable(brewingRecipes[potionItemName], _0x15049);
	potionItemName = "largeRocketSpeedPotion";
	potionDisplayName = "Rocket Speed Potion";
	potionItemNameDescription = "Doubles your rocket\'s speed.<br /><span style=\'color:grey;font-size:12pt;\'>(Lasts for " + getBrewingTimeAdjusted(3600 * 2) + ").";
	if (getItem(potionItemName + "Drank") == 0)
	{
		potionItemNameDescription = "???"
	};
	brewingRecipes[potionItemName] = (new CraftingRecipe(potionItemName, ["brewing"], [50], ["dottedGreenLeaf", "greenLeaf", "oil", "largeVial"], [80, 50, 50000, 1], potionItemNameDescription, true, potionDisplayName));
	_0x151CA += addRecipeToTable(brewingRecipes[potionItemName], _0x15049);
	if (getItem("researcherBrewing") >= 5)
	{
		potionItemName = "repelPotion2";
		potionDisplayName = "Repel Potion";
		potionItemNameDescription = "Avoid an enemy in the lava dungeon, northern fields or cemetery.";
		if (getItem(potionItemName + "Drank") == 0)
		{
			potionItemNameDescription = "???"
		};
		brewingRecipes[potionItemName] = (new CraftingRecipe(potionItemName, ["brewing"], [53], ["strangeLeafFix", "blewitMushroom", "vial"], [5, 200, 1], potionItemNameDescription, true, potionDisplayName));
		_0x151CA += addRecipeToTable(brewingRecipes[potionItemName], _0x15049)
	};
	potionItemName = "largeBarPotion";
	potionDisplayName = "Large Bar Potion";
	potionItemNameDescription = "20% chance that two bars are smelted instead of one, without using an extra ore.<br /><i style=\'font-size:12pt;\'>Works on: Bronze, iron, silver, gold, promethium</i><br /><span style=\'color:grey;font-size:12pt;\'>(Lasts for " + getBrewingTimeAdjusted(600) + ")</span>";
	if (getItem(potionItemName + "Drank") == 0)
	{
		potionItemNameDescription = "???"
	};
	brewingRecipes[potionItemName] = (new CraftingRecipe(potionItemName, ["brewing"], [55], ["goldLeaf", "limeLeaf", "bronzeBars", "ironBars", "silverBars", "goldBars", "promethiumBars", "largeVial"], [8, 50, 1, 1, 1, 1, 1, 1], potionItemNameDescription, true, potionDisplayName));
	_0x151CA += addRecipeToTable(brewingRecipes[potionItemName], _0x15049);
	potionItemName = "largeRubyStardustPotion";
	potionDisplayName = "Ruby Stardust Potion";
	potionItemNameDescription = "Can be poured on a ruby, converting it into stardust.";
	if (getItem(potionItemName + "Drank") == 0)
	{
		potionItemNameDescription = "???"
	};
	brewingRecipes[potionItemName] = (new CraftingRecipe(potionItemName, ["brewing"], [60], ["goldLeaf", "redMushroom", "largeVial"], [16, 1500, 1], potionItemNameDescription, true, potionDisplayName));
	_0x151CA += addRecipeToTable(brewingRecipes[potionItemName], _0x15049);
	document.getElementById(_0x15049).innerHTML = "<table class=\'table-craftables\' width=\'90%\'><tbody><tr><th>Name</th><th>Item</th><th>Level</th><th>Materials</th><th>Description</th></tr>" + _0x151CA + "</tbody></table><br /><br />"
}

function faradoxRandomShow()
{
	$("#faradox-random-show").fadeIn(3000, function ()
	{
		$("#faradox-random-show").fadeOut(1000)
	})
}

function faradoxRandomShow2()
{
	$("#faradox-random-show").fadeIn(3000, function ()
	{
		$("#faradox-random-show").fadeOut(1000, function ()
		{
			sendBytes("CORRUPTED_KNIGHT_SHOW_FARADOX")
		})
	})
}

function addTransformRecipeToTable(_0x158C3, _0x15049)
{
	var _0x158E6 = _0x158C3.itemName;
	var _0x158A0 = _0x158C3.stardust;
	var _0x157AB = _0x158C3.level;
	var _0x157F1 = _0x158C3.output1;
	var _0x15837 = _0x158C3.output2;
	var _0x15814 = _0x158C3.output1Amount;
	var _0x1585A = _0x158C3.output2Amount;
	var _0x158A0 = _0x158C3.stardust;
	var _0x157CE = _0x158C3.obtainedItemVar;
	var _0x15909 = _0x158C3.xp;
	if (getItem(_0x157CE) == 0)
	{
		return "<tr onclick=\'confirmDialogue(\"images/convertMagic.png\",\"You need to have obtained this item yourself before you are able to transform it.\",\"Close\",\"\",\"\")\'><td colspan=\'8\' style=\'font-size:70pt;color:white;background-color:#1f2e2e\'>???</td></tr>"
	};
	var _0x15788 = true;
	var _0x1564D = "<td>" + getItemName(_0x158E6) + "</td>";
	_0x1564D += "<td>" + "<img src=\'images/" + _0x158E6 + ".png\' class=\'img-100\' /> " + "</td>";
	if (getLevel(getItem("magicXp")) >= _0x157AB)
	{
		_0x1564D += "<td style=\'color:green\'>" + _0x157AB + "</td>"
	}
	else
	{
		_0x1564D += "<td style=\'color:red\'>" + _0x157AB + "</td>";
		_0x15788 = false
	};
	if (getItem(_0x158E6) == 0)
	{
		_0x15788 = false
	};
	_0x1564D += "<td>";
	for (var _0x14C0C = 0; _0x14C0C < _0x157F1.length; _0x14C0C++)
	{
		var _0x156D9 = _0x157F1[_0x14C0C];
		_0x1564D += "<span title=\'" + getItemName(_0x156D9) + "\'>" + "<img src=\'images/" + _0x156D9 + ".png\' class=\'img-50\' /> " + _0x15814[_0x14C0C] + "</span>";
		_0x1564D += "<br />"
	};
	_0x1564D += "</td>";
	_0x1564D += "<td>";
	for (var _0x14C0C = 0; _0x14C0C < _0x15837.length; _0x14C0C++)
	{
		var _0x156D9 = _0x15837[_0x14C0C];
		_0x1564D += "<span title=\'" + getItemName(_0x156D9) + "\'>" + "<img src=\'images/" + _0x156D9 + ".png\' class=\'img-50\' />  " + _0x1585A[_0x14C0C] + "</span>";
		_0x1564D += "<br />"
	};
	_0x1564D += "</td>";
	var _0x1587D = "style=\'color:green\'";
	if (_0x158A0 > getItem("stardust"))
	{
		_0x15788 = false;
		_0x1587D = "style=\'color:red\'"
	};
	_0x1564D += "<td>";
	_0x1564D += "<img src=\'images/stardustIcon.png\' class=\'img-30\' /> " + "<span " + _0x1587D + ">" + formatNumber(_0x158A0) + "</span>";
	_0x1564D += "</td>";
	var _0x15765 = "style=\'background-color:#b3ffb3;\'";
	if (!_0x15788)
	{
		_0x15765 = "style=\'background-color:#ffc2b3;\'"
	};
	_0x1564D += "<td>";
	_0x1564D += formatNumber(_0x15909) + " XP";
	_0x1564D += "</td>";
	_0x1564D += "<td>";
	_0x1564D += formatNumber(getItem(_0x158E6 + "Transformed"));
	_0x1564D += "</td>";
	var _0x1562A = "onclick=\'transformItem(\"" + _0x158E6 + "\",\"" + _0x158A0 + "\", \"" + _0x15909 + "\")\'";
	return "<tr " + _0x1562A + " " + _0x15765 + ">" + _0x1564D + "</tr>"
}

function addRecipeToTable(_0x1557B, _0x15049)
{
	var _0x15003 = _0x1557B.itemName;
	var _0x156FC = _0x1557B.skill;
	var _0x1571F = _0x1557B.skillLevel;
	var _0x15670 = _0x1557B.recipe;
	var _0x15693 = _0x1557B.recipeCost;
	var _0x15607 = _0x1557B.isMultiCraft;
	var _0x155E4 = _0x1557B.itemNameDisplay;
	var _0x1559E = _0x1557B.description;
	var _0x15558 = true;
	var _0x1564D = "<td>" + _0x155E4 + "</td>";
	_0x1564D += "<td>" + "<img src=\'images/" + _0x15003 + ".png\' class=\'img-100\' /> " + "</td>";
	if (getLevel(getItem(_0x1557B.skill[0] + "Xp")) >= _0x1571F)
	{
		_0x1564D += "<td style=\'color:green\'>" + _0x1571F + "</td>"
	}
	else
	{
		_0x1564D += "<td style=\'color:red\'>" + _0x1571F + "</td>";
		_0x15558 = false
	};
	_0x1564D += "<td>";
	for (var _0x14C0C = 0; _0x14C0C < _0x15670.length; _0x14C0C++)
	{
		var _0x156D9 = _0x15670[_0x14C0C];
		var _0x156B6 = _0x15693[_0x14C0C];
		var _0x155C1 = getItem(_0x156D9) >= _0x156B6;
		var _0x15742 = "style=\'color:green\'";
		if (!_0x155C1)
		{
			_0x15558 = false;
			_0x15742 = "style=\'color:red\'"
		};
		if (_0x156D9 != "vial" && _0x156D9 != "largeVial" && _0x156D9 != "hugeVial")
		{
			_0x1564D += "<span title=\'" + getItemName(_0x156D9) + "\' " + _0x15742 + ">" + "<img src=\'images/" + _0x156D9 + ".png\' class=\'img-50\' /> " + formatNumber(_0x156B6) + " </span>";
			_0x1564D += "<br />"
		}
	};
	_0x1564D += "</td>";
	_0x1564D += "<td>" + _0x1559E + "</td>";
	if (_0x156FC[0] == "cooking")
	{
		_0x1564D += "<td>" + formatTime(_0x1557B.timeToPrep) + "</td>"
	};
	var _0x15765 = "style=\'background-color:#b3ffb3;\'";
	if (!_0x15558)
	{
		_0x15765 = "style=\'background-color:#ffc2b3;\'"
	};
	var _0x1562A = "onclick=\'craftItem(\"" + _0x15003 + "\", " + _0x15607 + ",\"" + _0x155E4 + "\",\"" + _0x15670 + "\"+ _0x15693+ "
		, ")\'";
	return "<tr " + _0x1562A + " " + _0x15765 + ">" + _0x1564D + "</tr>"
}

function craftItem(_0x15003, _0x16994, _0x16971)
{
	if (!_0x16994)
	{
		confirmDialogue("images/" + _0x15003 + ".png", _0x16971.toUpperCase(), "Craft", "Cancel", "CRAFT=" + _0x15003 + "~" + 1)
	}
	else
	{
		if (_0x15003 == "vial")
		{
			openInputDialogue("Crafting Vials", "images/vial.png", "vial", 1, ["vial"], [1], ["glass"], [1], "Craft", "MULTI_CRAFT", "These vials are used to mix potions with.")
		}
		else
		{
			if (_0x15003 == "largeVial")
			{
				openInputDialogue("Crafting Vials", "images/largeVial.png", "largeVial", 1, ["largeVial"], [1], ["glass"], [20], "Craft", "MULTI_CRAFT", "These vials are used to mix potions with.")
			}
			else
			{
				if (_0x15003 == "ironBucket")
				{
					openInputDialogue("Crafting Buckets", "images/ironBucket.png", "ironBucket", 1, ["ironBucket"], [1], ["silverBars"], [50], "Craft", "MULTI_CRAFT", "Bring back an extra bucket of lava after killing a lava type monster.")
				}
				else
				{
					if (_0x15003 == "arrow")
					{
						openInputDialogue("Crafting Arrows", "images/arrow.png", "arrow", 1, ["arrow"], [1], ["feather", "logs", "bones"], [1, 1, 1], "Craft", "MULTI_CRAFT", "Used with a bow to fire arrows at your enemy.")
					}
					else
					{
						if (_0x15003 == "fireArrow")
						{
							openInputDialogue("Crafting Arrows", "images/fireArrow.png", "fireArrow", 1, ["fireArrow"], [1], ["fireFeather", "lavaLogs", "bones"], [1, 1, 1], "Craft", "MULTI_CRAFT", "Used with a bow to shoot fire arrows at your enemy.")
						}
						else
						{
							if (_0x15003 == "iceArrow")
							{
								openInputDialogue("Crafting Arrows", "images/iceArrow.png", "iceArrow", 1, ["iceArrow"], [1], ["iceFeather", "pineLogs", "iceBones"], [1, 1, 1], "Craft", "MULTI_CRAFT", "Used with a bow to shoot ice arrows at your enemy.")
							}
							else
							{
								if (_0x15003 == "arrowPlus")
								{
									openInputDialogue("Crafting Arrows", "images/arrowPlus.png", "arrowPlus", 1, ["arrowPlus"], [1], ["feather", "mapleLogs", "maceSpikes"], [1, 1, 1], "Craft", "MULTI_CRAFT", "Used with a bow to shoot stronger arrows at your enemy.")
								}
								else
								{
									if (_0x15003.endsWith("Potion") || _0x15003.endsWith("Potion1") || _0x15003.endsWith("Potion2"))
									{
										openInputDialogue("Mix Potion", "images/" + _0x15003 + ".png", _0x15003, 1, [_0x15003], [1], brewingRecipes[_0x15003].recipe, brewingRecipes[_0x15003].recipeCost, "Mix", "BREW", "Potions generally give you a temporary buff when drank.")
									}
									else
									{
										if (_0x15003 == "salad" || _0x15003.startsWith("snakeSushi") || _0x15003.startsWith("oysterMornay") || _0x15003.startsWith("seaweedChicken") || _0x15003.startsWith("batSkinSushi"))
										{
											openInputDialogue("Prepare Food", "images/" + _0x15003 + ".png", _0x15003, 1, [_0x15003], [1], cookingRecipes[_0x15003].recipe, cookingRecipes[_0x15003].recipeCost, "Prepare", "PREPARE_FOOD", "Additional energy source at the cost of preperation time.")
										}
									}
								}
							}
						}
					}
				}
			}
		}
	};
	setTimeout(refreshCraftables, 1500)
}

function clicksRepelPotion(_0x159FE)
{
	var _0x166FB = [];
	var _0x15A44 = "";
	if (_0x159FE == 1)
	{
		_0x166FB.push("chicken");
		_0x166FB.push("rat");
		_0x166FB.push("bee");
		_0x166FB.push("snake");
		_0x166FB.push("ent");
		_0x166FB.push("thief");
		_0x166FB.push("bear");
		_0x166FB.push("skeleton");
		_0x166FB.push("spider")
	};
	if (_0x159FE == 2)
	{
		_0x166FB.push("lavaAlien");
		_0x166FB.push("bat");
		_0x166FB.push("fireMage");
		_0x166FB.push("boneHead");
		_0x166FB.push("mammaPolarBear");
		_0x166FB.push("yeti");
		_0x166FB.push("ghost");
		_0x166FB.push("skeletonGhost");
		_0x166FB.push("reaper")
	};
	_0x15A44 += "Select a Monster you wish to Avoid<br /><br />";
	for (var _0x14C0C = 0; _0x14C0C < _0x166FB.length; _0x14C0C++)
	{
		var _0x166D8 = _0x166FB[_0x14C0C];
		_0x15A44 += "<div onclick=\'repelMonster(\"" + _0x166D8 + "\")\' class=\'repel-potion-monster-btn\'>";
		_0x15A44 += " <img src=\'images/" + _0x166D8 + "_monster_idle_0.png\' class=\'img-70\' />";
		_0x15A44 += "</div>"
	};
	confirmDialogue("none", _0x15A44, "Close", "", "")
}

function repelMonster(_0x166D8)
{
	closeDialogue("dialogue-confirm");
	if (getItemString("repelMonster") == "none")
	{
		confirmDialogue("images/" + _0x166D8 + "_monster_idle_0.png", "Are you sure you want to repel this monster?<br /><br /><span style=\'color:grey\'>You may undo this at any moment.</span>", "Repel", "Cancel", "REPEL=" + _0x166D8)
	}
	else
	{
		confirmDialogue("images/" + _0x166D8 + "_monster_idle_0.png", "Are you sure you want to repel this monster?<br /><br /><span style=\'color:red\'>This will overwrite your previous repelled enemy.</span>", "Repel", "Cancel", "REPEL=" + _0x166D8)
	}
}
var addTextByDelay = function (_0x14D24, _0x14D01, _0x14CDE)
{
	if (!_0x14D01)
	{
		_0x14D01 = $("body")
	};
	if (!_0x14CDE)
	{
		_0x14CDE = 300
	};
	if (_0x14D24.length > 0)
	{
		_0x14D01.append(_0x14D24[0]);
		setTimeout(function ()
		{
			addTextByDelay(_0x14D24.slice(1), _0x14D01, _0x14CDE)
		}, _0x14CDE)
	}
};

function dimScreen(_0x150B2, _0x16AAC)
{
	if (_0x16AAC)
	{
		var _0x15A44 = "";
		if (_0x150B2 == "bushy_dead")
		{
			_0x15A44 += "<center>";
			_0x15A44 += "<br /><br />";
			_0x15A44 += "<br /><br />";
			_0x15A44 += "<img id=\'dim-screen-img-2\' src=\'images/greenCrystalAbsorbed.png\' />";
			_0x15A44 += "<br /><br />";
			_0x15A44 += "<div style=\'color:grey\' id=\'dim-screen-area1\'></div>";
			_0x15A44 += "<br /><br />";
			_0x15A44 += "<div style=\'color:red\' id=\'dim-screen-area2\'></div>";
			_0x15A44 += "</center>";
			$("#dim-screen").fadeIn(5000);
			$("#game").fadeOut(5000, function ()
			{
				document.getElementById("dim-screen").innerHTML = _0x15A44;
				setTimeout(function ()
				{
					$("#dim-screen-img-2").effect("shake"
					, {
						direction: "left"
						, times: 40
						, distance: 3
					}, 10000);
					addTextByDelay("The crystal continues to regain its power.", $("#dim-screen-area1"), 50);
					setTimeout(function ()
					{
						addTextByDelay("Faradox is noticing.", $("#dim-screen-area2"), 50)
					}, 3000);
					setTimeout(function ()
					{
						$("#dim-screen-img-2").fadeOut(6000, function ()
						{
							dimScreen("none", false);
							confirmDialogue("images/darkCrystalUsed.png", "The dark crystal has regained 2/7 of power.", "Close", "", "")
						})
					}, 6000)
				}, 1000)
			});
			return
		};
		if (_0x150B2 == "mana")
		{
			_0x15A44 += "<center>";
			_0x15A44 += "<br /><br />";
			_0x15A44 += "<img id=\'dim-screen-img-1\' src=\'images/animation_mana1.png\' />";
			_0x15A44 += "<br /><br />";
			_0x15A44 += "<img id=\'dim-screen-img-2\' src=\'images/default_hero.png\' />";
			_0x15A44 += "<br /><br />";
			_0x15A44 += "</center>";
			$("#dim-screen").fadeIn(5000);
			$("#game").fadeOut(5000, function ()
			{
				document.getElementById("dim-screen").innerHTML = _0x15A44;
				setTimeout(function ()
				{
					setTimeout(function ()
					{
						$("#dim-screen-img-2").fadeOut(1000);
						$("#dim-screen-img-1").fadeOut(3000, function ()
						{
							document.getElementById("dim-screen-img-1").src = "images/animation_mana3.png";
							$("#dim-screen-img-1").fadeIn(6000, function ()
							{
								dimScreen("none", false);
								confirmDialogue("images/hugeManaStar.png", "You now have access to mana power!", "Close", "", "")
							})
						})
					}, 3000)
				}, 1000)
			});
			return
		};
		if (_0x150B2 == "combat_animation")
		{
			_0x15A44 += "<center>";
			_0x15A44 += "<br /><br />";
			_0x15A44 += "<img id=\'dim-screen-img-1\' src=\'images/reaper_grey.png\' />";
			_0x15A44 += "<br /><br />";
			_0x15A44 += "<span id=\'dim-screen-area1\'></span>";
			_0x15A44 += "<br /><br />";
			_0x15A44 += "<span id=\'dim-screen-area2\'></span>";
			_0x15A44 += "</center>";
			$("#dim-screen").fadeIn(10);
			$("#game").fadeOut(10, function ()
			{
				document.getElementById("dim-screen").innerHTML = _0x15A44;
				setTimeout(function ()
				{
					setTimeout(function ()
					{
						setTimeout(function ()
						{
							addTextByDelay("Don\'t get any closer!", $("#dim-screen-area1"), 50)
						}, 1000);
						setTimeout(function ()
						{
							document.getElementById("dim-screen-area2").innerHTML += "<br /><br /><span class=\'resumeFight\' onclick=\'sendBytes(\"TUT_RESUME_FIGHT\");dimScreen(\"none\", false);\'><img src=\'images/scythe.png\' class=\'img-30\' /> Fight Reaper</span>"
						}, 5000)
					}, 1000)
				}, 1000)
			});
			return
		};
		if (_0x150B2 == "release_faradox")
		{
			_0x15A44 += "<center>";
			_0x15A44 += "<br /><br />";
			_0x15A44 += "<br /><br />";
			_0x15A44 += "<img id=\'dim-screen-img-1\' src=\'images/faradox.png\' />";
			_0x15A44 += "<br /><br />";
			_0x15A44 += "<div style=\'color:grey\' id=\'dim-screen-area1\'></div>";
			_0x15A44 += "<br /><br />";
			_0x15A44 += "<div style=\'color:red\' id=\'dim-screen-area2\'></div>";
			_0x15A44 += "</center>";
			$("#dim-screen").fadeIn(5000);
			$("#game").fadeOut(5000, function ()
			{
				document.getElementById("dim-screen").innerHTML = _0x15A44;
				setTimeout(function ()
				{
					addTextByDelay("You have released me.", $("#dim-screen-area1"), 50);
					setTimeout(function ()
					{
						addTextByDelay("Let this world become tainted as I grow stronger.", $("#dim-screen-area2"), 50)
					}, 3000);
					setTimeout(function ()
					{
						$("#dim-screen-img-1").fadeOut(6000, function ()
						{
							dimScreen("none", false);
							confirmDialogue("images/darkCrystalUsed.png", "The dark crystal has no more energy.", "Close", "", "")
						})
					}, 6000)
				}, 1000)
			});
			return
		};
		if (_0x150B2 == "release_faradox_2")
		{
			_0x15A44 += "<center>";
			_0x15A44 += "<br /><br />";
			_0x15A44 += "<br /><br />";
			_0x15A44 += "<img id=\'dim-screen-img-1\' src=\'images/faradox.png\' />";
			_0x15A44 += "<br /><br />";
			_0x15A44 += "<div style=\'color:grey\' id=\'dim-screen-area1\'></div>";
			_0x15A44 += "<br /><br />";
			_0x15A44 += "<div style=\'color:red\' id=\'dim-screen-area2\'></div>";
			_0x15A44 += "</center>";
			$("#dim-screen").fadeIn(5000);
			$("#game").fadeOut(5000, function ()
			{
				document.getElementById("dim-screen").innerHTML = _0x15A44;
				setTimeout(function ()
				{
					addTextByDelay("I am watching every move you make.", $("#dim-screen-area1"), 50);
					setTimeout(function ()
					{
						addTextByDelay("You killed one of my minions, and you will pay.", $("#dim-screen-area2"), 50)
					}, 3000);
					setTimeout(function ()
					{
						$("#dim-screen-img-1").fadeOut(6000, function ()
						{
							dimScreen("none", false);
							confirmDialogue("images/bobHappy.png", "You did it!  You got rid of that ghost in our fields!  Thank you!", "Close", "", "")
						})
					}, 6000)
				}, 1000)
			});
			return
		};
		var _0x15A44 = "";
		if (_0x150B2 == "dead_hero")
		{
			_0x15A44 += "<center>";
			_0x15A44 += "<br /><br />";
			_0x15A44 += "<br /><br />";
			_0x15A44 += "<img id=\'dim-screen-img-1\' src=\'images/deadHero.png\' />";
			_0x15A44 += "<br /><br />";
			_0x15A44 += "<div style=\'color:grey\' id=\'dim-screen-area1\'></div>";
			_0x15A44 += "</center>";
			$("#dim-screen").fadeIn(1000);
			$("#game").fadeOut(1000, function ()
			{
				document.getElementById("dim-screen").innerHTML = _0x15A44;
				setTimeout(function ()
				{
					addTextByDelay("You have fainted.", $("#dim-screen-area1"), 50);
					setTimeout(function ()
					{
						dimScreen("none", false)
					}, 6000)
				}, 1000)
			});
			return
		};
		if (_0x150B2 == "corrupted_knight_escape")
		{
			_0x15A44 += "<center>";
			_0x15A44 += "<br /><br />";
			_0x15A44 += "<br /><br />";
			_0x15A44 += "<br /><br />";
			_0x15A44 += "</center>";
			$("#dim-screen").fadeIn(1000);
			$("#game").fadeOut(1000, function ()
			{
				setTimeout(function ()
				{
					setTimeout(function ()
					{
						$("#dim-screen").fadeOut(1000, function ()
						{
							faradoxRandomShow()
						});
						$("#dim-screen").fadeOut(1000, function ()
						{
							$("#game").fadeIn(2000);
							faradoxRandomShow2()
						})
					}, 2000)
				}, 1000)
			});
			return
		};
		if (_0x150B2 == "dead_hero_special")
		{
			_0x15A44 += "<center>";
			_0x15A44 += "<br /><br />";
			_0x15A44 += "<br /><br />";
			_0x15A44 += "<img id=\'dim-screen-img-1\' src=\'images/deadHero.png\' />";
			_0x15A44 += "<br /><br />";
			_0x15A44 += "<div style=\'color:grey\' id=\'dim-screen-area1\'></div>";
			_0x15A44 += "</center>";
			$("#dim-screen").fadeIn(1000);
			$("#game").fadeOut(1000, function ()
			{
				document.getElementById("dim-screen").innerHTML = _0x15A44;
				setTimeout(function ()
				{
					addTextByDelay("You have fainted.", $("#dim-screen-area1"), 50);
					setTimeout(function ()
					{
						dimScreen("none", false);
						confirmDialogue("images/deathIcon.png", "The blow to your head has made you forget who you are, what spells you learned and the reaper has looted all your items except for a few <img src=\'images/coins.png\' class=\'img-30\' /> coins.", "Close", "", "COMBAT_TUTORIAL_6");
						document.getElementById("back-button-fighting").style.display = ""
					}, 6000)
				}, 1000)
			});
			return
		}
	}
	else
	{
		document.getElementById("game").style.display = "";
		document.getElementById("dim-screen").style.display = "none"
	}
}

function scrollToTop()
{
	$(window).scrollTop(0)
}

function playTeleportAnimation()
{
	scrollToTop();
	$("#dim-teleport-screen").fadeIn(10);
	$("#dim-teleport-screen").fadeOut(1000)
}

function unlockTreePatch(_0x16327)
{
	if (document.getElementById("tree-section-img-" + _0x16327).src == "images/tree_locked.png")
	{
		document.getElementById("tree-section-img-" + _0x16327).src = "images/tree_none.png"
	};
	document.getElementById("tree-section-" + _0x16327).classList.remove("tree-section-locked");
	refreshTreeImage(_0x16327)
}

function unlockPlotPatch(_0x180F5)
{
	if (document.getElementById("plot-section-img-" + _0x180F5).src == "images/tree_locked.png")
	{
		document.getElementById("plot-section-img-" + _0x180F5).src = "images/tree_none.png"
	};
	document.getElementById("plot-section-" + _0x180F5).classList.remove("plot-section-locked");
	refreshPlotImage(_0x180F5)
}

function refreshTreeImage(_0x16327)
{
	var _0x199D7 = getItemString("tree" + _0x16327);
	if (getItem("treeUnlocked" + _0x16327) == 1)
	{
		if (_0x199D7 == "none")
		{
			document.getElementById("tree-section-img-" + _0x16327).src = "images/tree_none.png"
		}
		else
		{
			document.getElementById("tree-section-img-" + _0x16327).src = "images/" + _0x199D7 + getItem("treeStage" + _0x16327) + ".png"
		}
	}
}

function refreshPlotImage(_0x16327)
{
	var _0x191E9 = getItemString("plot" + _0x16327);
	if (getItem("plotUnlocked" + _0x16327) == 1)
	{
		document.getElementById("plot-section-" + _0x16327).classList.remove("tree-section-locked");
		if (_0x191E9 == "none")
		{
			document.getElementById("plot-section-img-" + _0x16327).src = "images/farm_none.png"
		}
		else
		{
			document.getElementById("plot-section-img-" + _0x16327).src = "images/" + _0x191E9 + getItem("plotStage" + _0x16327) + ".png"
		}
	}
}

function refreshTreeTimer(_0x16327)
{
	if (getItemString("treeUnlocked" + _0x16327) == 1)
	{
		var _0x19A1D = getItem("treeTimer" + _0x16327);
		var _0x1920C = document.getElementById("tree-secton-timer-" + _0x16327);
		switch (_0x19A1D)
		{
		case 1:
			_0x1920C.innerHTML = "READY";
			break;
		case 0:
			_0x1920C.innerHTML = "";
			break;
		default:
			_0x1920C.innerHTML = formatTime(_0x19A1D);
			break
		}
	}
}

function refreshPlotTimer(_0x16327)
{
	if (getItemString("plotUnlocked" + _0x16327) == 1)
	{
		var _0x1922F = getItem("plotTimer" + _0x16327);
		var _0x1920C = document.getElementById("plot-secton-timer-" + _0x16327);
		switch (_0x1922F)
		{
		case 1:
			_0x1920C.innerHTML = "READY";
			break;
		case 0:
			_0x1920C.innerHTML = "";
			break;
		default:
			_0x1920C.innerHTML = formatTime(_0x1922F);
			break
		}
	}
}

function generateHTMLToSelectToolConversionItem(_0x168E5, _0x16255, _0x15909)
{
	var _0x15A44 = "";
	if (getItem(_0x16255) > 0)
	{
		_0x15A44 += "<div onclick=\'openStardustToolDialogue2(\"" + _0x168E5 + "\",\"" + _0x16255 + "\",\"" + _0x15909 + "\");closeDialogue(\"dialogue-stardust-tools\")\' class=\'select-ore-furnace\'>" + getItemName(_0x16255).toUpperCase() + "<br />";
		_0x15A44 += "<img src=\'images/" + _0x16255 + ".png\' class=\'img-100\' />";
		_0x15A44 += "<hr class=\'hr-thin\' />";
		_0x15A44 += "<img src=\'images/miningSkill_white.png\' class=\'img-30\' /> <span style=\'color:orange\'>XP per item:</span> " + parseFloat(_0x15909);
		_0x15A44 += "</div>"
	};
	return _0x15A44
}

function getBonemealTypeData()
{
	var _0x1613D = "";
	_0x1613D = "bonemealBin";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "none", "sapphire", "5"]
	};
	_0x1613D = "sapphireBonemealBin";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "sapphire", "emerald", "20"]
	};
	_0x1613D = "emeraldBonemealBin";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "emerald", "ruby", "50"]
	};
	_0x1613D = "rubyBonemealBin";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "ruby", "diamond", "100"]
	};
	_0x1613D = "diamondBonemealBin";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "diamond", "none", "INF"]
	};
	return "none"
}

function getPickaxeTypeData()
{
	var _0x1613D = "";
	_0x1613D = "stardustPickaxe";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "none", "sapphire", "17"]
	};
	_0x1613D = "sapphireStardustPickaxe";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "sapphire", "emerald", "16"]
	};
	_0x1613D = "emeraldStardustPickaxe";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "emerald", "ruby", "15"]
	};
	_0x1613D = "rubyStardustPickaxe";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "ruby", "diamond", "14"]
	};
	_0x1613D = "diamondStardustPickaxe";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "diamond", "none", "12"]
	}
}

function getWatchTypeData()
{
	var _0x1613D = "";
	_0x1613D = "watch";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "none", "sapphire", "3"]
	};
	_0x1613D = "sapphireWatch";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "sapphire", "emerald", "6"]
	};
	_0x1613D = "emeraldWatch";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "emerald", "ruby", "10"]
	};
	_0x1613D = "rubyWatch";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "ruby", "diamond", "14"]
	};
	_0x1613D = "diamondWatch";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "diamond", "none", "20"]
	}
}

function getShovelTypeData()
{
	var _0x1613D = "";
	_0x1613D = "shovel";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "none", "sapphire", "4000"]
	};
	_0x1613D = "sapphireShovel";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "sapphire", "emerald", "3500"]
	};
	_0x1613D = "emeraldShovel";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "emerald", "ruby", "3000"]
	};
	_0x1613D = "rubyShovel";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "ruby", "diamond", "2500"]
	};
	_0x1613D = "diamondShovel";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "diamond", "none", "2000"]
	}
}

function getChiselTypeData()
{
	var _0x1613D = "";
	_0x1613D = "chisel";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "none", "sapphire", 0.5]
	};
	_0x1613D = "sapphireChisel";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "sapphire", "emerald", 0.4]
	};
	_0x1613D = "emeraldChisel";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "emerald", "ruby", 0.3]
	};
	_0x1613D = "rubyChisel";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "ruby", "diamond", 0.2]
	};
	_0x1613D = "diamondChisel";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "diamond", "none", 0.0]
	}
}

function getSmallFishingNetTypeData()
{
	testingFor = "smallFishingNet";
	if (getItem(testingFor) == 1)
	{
		return [testingFor, "none", "sapphire", "rawAnchovy"]
	};
	testingFor = "sapphireSmallFishingNet";
	if (getItem(testingFor) == 1)
	{
		return [testingFor, "sapphire", "emerald", "rawSardine"]
	};
	testingFor = "emeraldSmallFishingNet";
	if (getItem(testingFor) == 1)
	{
		return [testingFor, "emerald", "ruby", "rawCrab"]
	};
	testingFor = "rubySmallFishingNet";
	if (getItem(testingFor) == 1)
	{
		return [testingFor, "ruby", "diamond", "rawPiranha"]
	};
	testingFor = "diamondSmallFishingNet";
	if (getItem(testingFor) == 1)
	{
		return [testingFor, "diamond", "none", "none"]
	};
	return ["none", "none", "none", "none"]
}

function getFishingRodTypeData()
{
	testingFor = "fishingRod";
	if (getItem(testingFor) == 1)
	{
		return [testingFor, "none", "sapphire", "rawSalmon"]
	};
	testingFor = "sapphireFishingRod";
	if (getItem(testingFor) == 1)
	{
		return [testingFor, "sapphire", "emerald", "rawEel"]
	};
	testingFor = "emeraldFishingRod";
	if (getItem(testingFor) == 1)
	{
		return [testingFor, "emerald", "ruby", "rawSeaTurtle"]
	};
	testingFor = "rubyFishingRod";
	if (getItem(testingFor) == 1)
	{
		return [testingFor, "ruby", "diamond", "rawRainbowFish"]
	};
	testingFor = "diamondFishingRod";
	if (getItem(testingFor) == 1)
	{
		return [testingFor, "diamond", "none", "none"]
	};
	return ["none", "none", "none", "none"]
}

function getHarpoonTypeData()
{
	testingFor = "harpoon";
	if (getItem(testingFor) == 1)
	{
		return [testingFor, "none", "sapphire", "rawSwordfish"]
	};
	testingFor = "sapphireHarpoon";
	if (getItem(testingFor) == 1)
	{
		return [testingFor, "sapphire", "emerald", "rawMantaRay"]
	};
	testingFor = "emeraldHarpoon";
	if (getItem(testingFor) == 1)
	{
		return [testingFor, "emerald", "ruby", "rawShark"]
	};
	testingFor = "rubyHarpoon";
	if (getItem(testingFor) == 1)
	{
		return [testingFor, "ruby", "diamond", "rawWhale"]
	};
	testingFor = "diamondHarpoon";
	if (getItem(testingFor) == 1)
	{
		return [testingFor, "diamond", "none", "none"]
	};
	return ["none", "none", "none", "none"]
}

function getAxeTypeData()
{
	var _0x1613D = "";
	_0x1613D = "axe";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "none", "sapphire", "0"]
	};
	_0x1613D = "sapphireAxe";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "sapphire", "emerald", "5"]
	};
	_0x1613D = "emeraldAxe";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "emerald", "ruby", "10"]
	};
	_0x1613D = "rubyAxe";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "ruby", "diamond", "15"]
	};
	_0x1613D = "diamondAxe";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "diamond", "none", "20"]
	};
	return ["none", "none", "none", 0]
}

function getChainsawTypeData()
{
	var _0x1613D = "";
	_0x1613D = "chainsaw";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "none", "sapphire", "5"]
	};
	_0x1613D = "sapphireChainsaw";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "sapphire", "emerald", "10"]
	};
	_0x1613D = "emeraldChainsaw";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "emerald", "ruby", "15"]
	};
	_0x1613D = "rubyChainsaw";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "ruby", "diamond", "20"]
	};
	_0x1613D = "diamondChainsaw";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "diamond", "none", "25"]
	};
	return ["none", "none", "none", 0]
}

function getTrowelTypeData()
{
	var _0x1613D = "";
	_0x1613D = "trowel";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "none", "sapphire", "5"]
	};
	_0x1613D = "sapphireTrowel";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "sapphire", "emerald", "10"]
	};
	_0x1613D = "emeraldTrowel";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "emerald", "ruby", "15"]
	};
	_0x1613D = "rubyTrowel";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "ruby", "diamond", "20"]
	};
	_0x1613D = "diamondTrowel";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "diamond", "none", "25"]
	};
	return ["none", "none", "none", 0]
}

function getHammerTypeData()
{
	var _0x1613D = "";
	_0x1613D = "stardustHammer";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "none", "sapphire", "17"]
	};
	_0x1613D = "sapphireStardustHammer";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "sapphire", "emerald", "16"]
	};
	_0x1613D = "emeraldStardustHammer";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "emerald", "ruby", "15"]
	};
	_0x1613D = "rubyStardustHammer";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "ruby", "diamond", "14"]
	};
	_0x1613D = "diamondStardustHammer";
	if (getItem(_0x1613D) == 1)
	{
		return [_0x1613D, "diamond", "none", "12"]
	}
}

function confirmSocketDialogue(_0x168E5, _0x168C2, _0x15A67)
{
	confirmDialogue(_0x168C2, "Add a <img src=\'images/" + _0x15A67 + ".png\' class=\'img-30\' /> to your tool?<br /><br /><i style=\'color:grey\'>Upgrading the tool will reduce its stardust cost per xp.</i>", "Confirm Socket", "Cancel", "SOCKET=" + _0x168E5)
}

function openStardustToolDialogue(_0x168E5)
{
	var _0x18CB7 = document.getElementById("dialogue-stardust-tools-socket-button");
	var _0x151ED = document.getElementById("dialogue-stardust-tools-socket-image");
	var _0x17EC5 = document.getElementById("dialogue-stardust-tools-socket-gem-label");
	var _0x18CFD;
	if (_0x168E5 == "stardustPickaxe")
	{
		var _0x18CFD = getPickaxeTypeData();
		var _0x15A67 = _0x18CFD[2]
	};
	if (_0x168E5 == "stardustHammer")
	{
		var _0x18CFD = getHammerTypeData();
		var _0x15A67 = _0x18CFD[2]
	};
	if (_0x15A67 == "none")
	{
		_0x18CB7.style.display = "none"
	}
	else
	{
		_0x151ED.src = "images/" + _0x15A67 + ".png";
		_0x18CB7.style.display = "";
		_0x18CB7.setAttribute("onclick", "confirmSocketDialogue(\'" + _0x168E5 + "\',\'images/" + _0x18CFD[0] + ".png\',\'" + _0x15A67 + "\');closeDialogue(\'dialogue-stardust-tools\')");
		_0x17EC5.innerHTML = _0x15A67
	};
	var _0x18CDA = global_stardustToolsMap[_0x168E5];
	var _0x18460 = _0x18CDA.arrayItemsToConvertArray;
	var _0x1843D = _0x18CDA.arrayItemsConvetXpArray;
	document.getElementById("dialogue-stardust-tools-selectItem").innerHTML = "";
	var _0x151CA = "";
	for (var _0x14C0C = 0; _0x14C0C < _0x18460.length; _0x14C0C++)
	{
		_0x151CA += generateHTMLToSelectToolConversionItem(_0x168E5, _0x18460[_0x14C0C], _0x1843D[_0x14C0C])
	};
	document.getElementById("dialogue-stardust-tools-selectItem").innerHTML = _0x151CA;
	openDialogueOverride("dialogue-stardust-tools", "large")
}

function openStardustToolDialogue2(_0x168E5, _0x16255, _0x17326)
{
	var _0x18D43;
	var _0x18D20;
	var _0x1873F;
	if (_0x168E5 == "stardustPickaxe")
	{
		_0x18D43 = parseInt(getPickaxeTypeData()[3]);
		_0x18D20 = getPickaxeTypeData()[0];
		_0x1873F = getPickaxeTypeData()[1];
		document.getElementById("dialogue-stardustTool2-skillChosen-hidden").value = "mining"
	}
	else
	{
		if (_0x168E5 == "stardustHammer")
		{
			_0x18D43 = parseInt(getHammerTypeData()[3]);
			_0x18D20 = getHammerTypeData()[0];
			_0x1873F = getHammerTypeData()[1];
			document.getElementById("dialogue-stardustTool2-skillChosen-hidden").value = "crafting"
		}
	};
	if (_0x18D43 > getItem("stardust"))
	{
		confirmDialogue("images/stardust.gif", "<span style=\'color:red\'>You do not have enough stardust.</span><br /><br /><span style=\'color:grey\'>Your current stardust required per XP is: " + _0x18D43, "Close", "", "");
		return
	};
	document.getElementById("dialogue-stardustTool2-item-img").src = "images/" + _0x16255 + ".png";
	document.getElementById("dialogue-stardustTool2-sdperxp-hidden").value = _0x18D43;
	document.getElementById("dialogue-stardustTool2-tool-hidden").value = _0x168E5;
	document.getElementById("dialogue-stardustTool2-item-hidden").value = _0x16255;
	document.getElementById("stardustTool2-info").innerHTML = "<b>Socket: </b>" + "<span style=\'color:grey\'>" + _0x1873F + " <img src=\'images/" + _0x1873F + ".png\' class=\'img-30\' /> " + "</span>" + "<br />" + "<b>Stardust Cost: </b>" + "<span style=\'color:grey\'>" + _0x18D43 + " <img src=\'images/stardustIcon.png\' class=\'img-20\' /> per XP";
	document.getElementById("dialogue-stardustTool2-input").value = 1;
	document.getElementById("dialogue-stardustTool2-submit-btn").onclick = function ()
	{
		sendBytes("USE_STARDUST_TOOL_" + _0x168E5.toUpperCase() + "=" + _0x16255 + "~" + document.getElementById("dialogue-stardustTool2-input").value);
		closeDialogue("dialogue-stardustTool2")
	};
	onKeyUpStardustXonvertXp();
	openDialogue("dialogue-stardustTool2")
}

function playerMarketBuyClicksAll()
{
	var _0x15003 = document.getElementById("dialogue-market-buy-hidden-itemName").value;
	var _0x15E18 = document.getElementById("dialogue-market-buy-hidden-price").value;
	var _0x15026 = document.getElementById("dialogue-market-buy-hidden-amount").value;
	var _0x184C9 = document.getElementById("dialogue-market-buy-input").value;
	var _0x184EC = _0x15E18 * _0x184C9;
	var _0x15463 = createHTMLBoxCheckOrXCollection(.coins, [_0x184EC], ["", ""]);
	document.getElementById("dialogue-market-buy-area").innerHTML = _0x15463
}

function getBonemealAmount(_0x16FBB)
{
	switch (_0x16FBB)
	{
	case "bones":
		return 1;
	case "ashes":
		return 2;
	case "iceBones":
		return 3;
	default:
		return 0
	}
}

function getMaxBonemealToPut(_0x16FBB)
{
	var _0x15A21 = parseInt(getBonemealTypeData()[3]);
	if (getItem("diamondBonemealBin") > 0)
	{
		return getItem(_0x16FBB)
	};
	if (_0x15A21 > 0)
	{
		_0x15A21 -= getItem("bonemeal");
		var _0x17254 = getBonemealAmount(_0x16FBB);
		var _0x164CB = parseInt(_0x15A21 / _0x17254);
		if (_0x164CB > getItem(_0x16FBB))
		{
			return getItem(_0x16FBB)
		}
		else
		{
			return _0x164CB
		}
	}
	else
	{
		return 1
	}
}

function clicksMaxMarketButton()
{
	document.getElementById("dialogue-market-buy-input").value = document.getElementById("dialogue-market-buy-hidden-amount").value;
	onKeyUpBuyPlayerMarket()
}

function onKeyUpBuyPlayerMarket()
{
	var _0x15003 = document.getElementById("dialogue-market-buy-hidden-itemName").value;
	var _0x15E18 = document.getElementById("dialogue-market-buy-hidden-price").value;
	var _0x15026 = document.getElementById("dialogue-market-buy-hidden-amount").value;
	var _0x184C9 = document.getElementById("dialogue-market-buy-input").value;
	var _0x184EC = _0x15E18 * _0x184C9;
	var _0x15463 = createHTMLBoxCheckOrXCollection(.coins, [_0x184EC], ["", ""]);
	document.getElementById("dialogue-market-buy-area").innerHTML = _0x15463
}

function openRakeDialogue()
{
	if (getItem("diamondRake") == 1)
	{
		document.getElementById("dialogue-rake-limeLeafSeeds-check-or-x").src = "images/check.png";
		document.getElementById("dialogue-rake-goldLeafSeeds-check-or-x").src = "images/check.png";
		document.getElementById("dialogue-rake-crystalLeafSeeds-check-or-x").src = "images/check.png";
		document.getElementById("dialogue-rake-stripedGoldLeafSeeds-check-or-x").src = "images/check.png";
		document.getElementById("dialogue-rake-stripedCrystalLeafSeeds-check-or-x").src = "images/check.png"
	}
	else
	{
		if (getItem("rubyRake") == 1)
		{
			document.getElementById("dialogue-rake-limeLeafSeeds-check-or-x").src = "images/check.png";
			document.getElementById("dialogue-rake-goldLeafSeeds-check-or-x").src = "images/check.png";
			document.getElementById("dialogue-rake-crystalLeafSeeds-check-or-x").src = "images/check.png"
		}
		else
		{
			if (getItem("emeraldRake") == 1)
			{
				document.getElementById("dialogue-rake-limeLeafSeeds-check-or-x").src = "images/check.png";
				document.getElementById("dialogue-rake-goldLeafSeeds-check-or-x").src = "images/check.png"
			}
			else
			{
				if (getItem("sapphireRake") == 1)
				{
					document.getElementById("dialogue-rake-limeLeafSeeds-check-or-x").src = "images/check.png"
				}
			}
		}
	};
	if (getItem("researcherFarming") >= 2)
	{
		document.getElementById("dialogue-rake-stardustSeeds-check-or-x").src = "images/check.png"
	};
	if (getItem("researcherFarming") >= 4)
	{
		document.getElementById("dialogue-rake-blewitMushroomSeeds-check-or-x").src = "images/check.png"
	};
	openDialogue("dialogue-rake")
}

function changeValueOfInputStardustTool(_0x15F30, _0x15F53, _0x15F0D)
{
	var _0x15E81 = getMaxForStardustTool();
	switch (_0x15F0D)
	{
	case "ONE":
		_0x15E81 = 1;
		break;
	case "25%":
		_0x15E81 *= 0.25;
		break;
	case "50%":
		_0x15E81 *= 0.5;
		break
	};
	document.getElementById("dialogue-stardustTool2-input").value = parseInt(_0x15E81);
	onKeyUpStardustXonvertXp()
}

function getMaxForStardustTool()
{
	var _0x14FE0 = document.getElementById("dialogue-stardustTool2-item-hidden").value;
	var _0x168E5 = document.getElementById("dialogue-stardustTool2-tool-hidden").value;
	var _0x17303 = parseInt(document.getElementById("dialogue-stardustTool2-sdperxp-hidden").value);
	var _0x17326 = 0;
	var _0x17277 = global_stardustToolsMap[_0x168E5].arrayItemsToConvertArray;
	var _0x1729A = global_stardustToolsMap[_0x168E5].arrayItemsConvetXpArray;
	for (var _0x14C0C = 0; _0x14C0C < _0x17277.length; _0x14C0C++)
	{
		if (_0x17277[_0x14C0C] == _0x14FE0)
		{
			_0x17326 = _0x1729A[_0x14C0C];
			break
		}
	};
	var _0x172BD = getItem(_0x14FE0);
	var _0x172E0 = _0x17326 * _0x172BD * _0x17303;
	if (getItem("stardust") >= _0x172E0)
	{
		return _0x172BD
	}
	else
	{
		return parseInt(getItem("stardust") / (_0x17326 * _0x17303))
	}
}

function onKeyUpStardustXonvertXp()
{
	var _0x14FE0 = document.getElementById("dialogue-stardustTool2-item-hidden").value;
	var _0x15DF5 = parseInt(document.getElementById("dialogue-stardustTool2-input").value);
	var _0x168E5 = document.getElementById("dialogue-stardustTool2-tool-hidden").value;
	var _0x17303 = parseInt(document.getElementById("dialogue-stardustTool2-sdperxp-hidden").value);
	var _0x1850F = document.getElementById("dialogue-stardustTool2-skillChosen-hidden").value;
	if (isNaN(_0x15DF5))
	{
		document.getElementById("dialogue-stardustTool2-section-area").innerHTML = "";
		return
	};
	var _0x17326 = 0;
	var _0x17277 = global_stardustToolsMap[_0x168E5].arrayItemsToConvertArray;
	var _0x1729A = global_stardustToolsMap[_0x168E5].arrayItemsConvetXpArray;
	for (var _0x14C0C = 0; _0x14C0C < _0x17277.length; _0x14C0C++)
	{
		if (_0x17277[_0x14C0C] == _0x14FE0)
		{
			_0x17326 = _0x1729A[_0x14C0C];
			break
		}
	};
	var _0x15463 = "";
	var _0x18532 = _0x17303 * _0x15DF5 * _0x17326;
	var _0x15909 = _0x15DF5 * _0x17326;
	_0x15463 = createHTMLBoxCheckOrXCollection([_0x14FE0, "stardust"], [_0x15DF5, _0x18532], ["", ""]);
	document.getElementById("dialogue-stardustTool2-section-area").innerHTML = "<span class=\'html-box-check-or-check\' style=\'border:1px solid purple;display:inline-block;background-color:#ff99cc;font-size:16pt\'><img src=\'images/" + _0x1850F + "Skill.png\' class=\'img-50\' /> +" + formatNumber(_0x17326 * _0x15DF5) + " XP</span>" + _0x15463
}

function loadMuteList(_0x14DB0)
{
	var _0x14DD3 = _0x14DB0.split("~");
	var _0x151CA = "<center>";
	_0x151CA += "<table id=\'muteList-table\' class=\'sortable basic-table\' width=\'90%\'>";
	_0x151CA += "<thead>";
	_0x151CA += "<tr><th>Username</th><th>Muted By</th><th>Date Muted</th><th>Date Unmuted</th><th width=\'50%\'>Reason</th><th>IP Muted</th><th>Is Currenty Muted</th></tr>";
	_0x151CA += "</thead>";
	_0x151CA += "<tbody>";
	for (var _0x14C0C = 0; _0x14C0C < _0x14DD3.length; _0x14C0C++)
	{
		var _0x17DF3 = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x17D8A = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x17D67 = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x17DD0 = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x17DAD = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x17D44 = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x17D21 = _0x14DD3[_0x14C0C];
		_0x151CA += "<tr>";
		_0x151CA += "<td>" + _0x17DF3 + "</td>";
		_0x151CA += "<td>" + _0x17D8A + "</td>";
		_0x151CA += "<td>" + formatUnixToDate(_0x17D67) + "</td>";
		if (_0x17DD0 - _0x17D67 >= 54000000000)
		{
			_0x151CA += "<td>" + "Forever" + "</td>"
		}
		else
		{
			_0x151CA += "<td>" + formatUnixToDate(_0x17DD0) + "</td>"
		};
		_0x151CA += "<td>" + _0x17DAD + "</td>";
		_0x151CA += "<td>" + _0x17D44 + "</td>";
		_0x151CA += "<td>" + _0x17D21 + "</td>";
		_0x151CA += "</tr>"
	};
	_0x151CA += "</tbody>";
	_0x151CA += "</table>";
	_0x151CA += "</center>";
	document.getElementById("section-muteList").innerHTML = _0x151CA;
	sorttable.makeSortable(document.getElementById("muteList-table"))
}

function formatUnixToDate(_0x16E17)
{
	var _0x16E5D = _0x16E17;
	var _0x16E3A = new Date(parseInt(_0x16E5D));
	var _0x16E80 = _0x16E3A.toString("MM/dd/yy HH:mm:ss");
	return _0x16E80
}

function openShovelDialogue()
{
	var _0x18C94 = getShovelTypeData();
	var _0x189D8 = _0x18C94[0];
	var _0x1873F = _0x18C94[1];
	var _0x15A67 = _0x18C94[2];
	var _0x178E4 = _0x18C94[3];
	if (_0x15A67 != "none")
	{
		confirmDialogue("images/" + _0x189D8 + ".png", "Add a <img src=\'images/" + _0x15A67 + ".png\' class=\'img-30\' /> to your shovel?<br /><br /><i style=\'color:grey\'>Upgrading your shovel will increase your chance of finding sand.</i>", "Socket", "Close", "SOCKET=shovel")
	}
}

function openSmallFishingNetDialogue()
{
	var _0x189FB = getSmallFishingNetTypeData();
	var _0x189D8 = _0x189FB[0];
	var _0x1873F = _0x189FB[1];
	var _0x15A67 = _0x189FB[2];
	var _0x18A1E = _0x189FB[3];
	if (_0x15A67 != "none")
	{
		confirmDialogue("images/" + _0x189D8 + ".png", "Add a <img src=\'images/" + _0x15A67 + ".png\' class=\'img-30\' /> to your fishing tool?<br /><br /><i style=\'color:grey\'>Upgrading will allow you to catch:<br /><br /><img src=\'images/" + _0x18A1E + ".png\' class=\'img-50\' /> <span style=\'color:brown\'>" + getItemName(_0x18A1E) + "</span>", "Socket", "Close", "SOCKET=smallFishingNet")
	}
}

function openFishingRodDialogue()
{
	var _0x189FB = getFishingRodTypeData();
	var _0x189D8 = _0x189FB[0];
	var _0x1873F = _0x189FB[1];
	var _0x15A67 = _0x189FB[2];
	var _0x18A1E = _0x189FB[3];
	if (_0x15A67 != "none")
	{
		confirmDialogue("images/" + _0x189D8 + ".png", "Add a <img src=\'images/" + _0x15A67 + ".png\' class=\'img-30\' /> to your fishing tool?<br /><br /><i style=\'color:grey\'>Upgrading will allow you to catch:<br /><br /><img src=\'images/" + _0x18A1E + ".png\' class=\'img-50\' /> <span style=\'color:brown\'>" + getItemName(_0x18A1E) + "</span>", "Socket", "Close", "SOCKET=fishingRod")
	}
}

function openHarpoonDialogue()
{
	var _0x189FB = getHarpoonTypeData();
	var _0x189D8 = _0x189FB[0];
	var _0x1873F = _0x189FB[1];
	var _0x15A67 = _0x189FB[2];
	var _0x18A1E = _0x189FB[3];
	if (_0x15A67 != "none")
	{
		confirmDialogue("images/" + _0x189D8 + ".png", "Add a <img src=\'images/" + _0x15A67 + ".png\' class=\'img-30\' /> to your fishing tool?<br /><br /><i style=\'color:grey\'>Upgrading will allow you to catch:<br /><br /><img src=\'images/" + _0x18A1E + ".png\' class=\'img-50\' /> <span style=\'color:brown\'>" + getItemName(_0x18A1E) + "</span>", "Socket", "Close", "SOCKET=harpoon")
	}
}

function openAxeDialogue()
{
	var _0x186D6 = getAxeTypeData();
	var _0x1871C = _0x186D6[0];
	var _0x1873F = _0x186D6[1];
	var _0x15A67 = _0x186D6[2];
	var _0x186F9 = _0x186D6[3];
	if (_0x15A67 != "none")
	{
		confirmDialogue("images/" + _0x1871C + ".png", "Add a <img src=\'images/" + _0x15A67 + ".png\' class=\'img-30\' /> to your axe?<br /><br /><i style=\'color:grey\'>Upgrading your axe will give you more logs when chopping trees.", "Socket", "Close", "SOCKET=axe")
	}
}

function openChainsawDialogue()
{
	var _0x186D6 = getChainsawTypeData();
	var _0x1871C = _0x186D6[0];
	var _0x1873F = _0x186D6[1];
	var _0x15A67 = _0x186D6[2];
	var _0x186F9 = _0x186D6[3];
	if (_0x15A67 != "none")
	{
		confirmDialogue("images/" + _0x1871C + ".png", "Add a <img src=\'images/" + _0x15A67 + ".png\' class=\'img-30\' /> to your chainsaw?<br /><br /><i style=\'color:grey\'>Upgrading your chainsaw will give you more logs when chopping trees.", "Socket", "Close", "SOCKET=chainsaw")
	}
}

function openTrowelDialogue()
{
	var _0x186D6 = getTrowelTypeData();
	var _0x1871C = _0x186D6[0];
	var _0x1873F = _0x186D6[1];
	var _0x15A67 = _0x186D6[2];
	var _0x186F9 = _0x186D6[3];
	if (_0x15A67 != "none")
	{
		confirmDialogue("images/" + _0x1871C + ".png", "Add a <img src=\'images/" + _0x15A67 + ".png\' class=\'img-30\' /> to your trowel?<br /><br /><i style=\'color:grey\'>Upgrading your trowel will increase your chance of finding seeds by 5%.", "Socket", "Close", "SOCKET=trowel")
	}
}

function openChiselDialogue()
{
	var _0x18762 = getChiselTypeData();
	var _0x1871C = _0x18762[0];
	var _0x1873F = _0x18762[1];
	var _0x15A67 = _0x18762[2];
	var _0x18785 = _0x18762[3];
	if (_0x15A67 != "none")
	{
		confirmDialogue("images/" + _0x1871C + ".png", "Add a <img src=\'images/" + _0x15A67 + ".png\' class=\'img-30\' /> to your chisel?<br /><br /><i style=\'color:grey\'>Upgrading your chisel will reduce your failure rate when opening geodes.", "Socket", "Close", "SOCKET=chisel")
	}
}

function getHeat(_0x170F6)
{
	var _0x16CDC = 0;
	switch (_0x170F6)
	{
	case "logs":
		_0x16CDC = 1;
		break;
	case "oakLogs":
		_0x16CDC = 2;
		break;
	case "willowLogs":
		_0x16CDC = 3;
		break;
	case "bambooLogs":
		_0x16CDC = 4;
		break;
	case "mapleLogs":
		_0x16CDC = 5;
		break;
	case "lavaLogs":
		_0x16CDC = 6;
		break;
	case "pineLogs":
		_0x16CDC = 7;
		break;
	case "stardustLogs":
		_0x16CDC = 8;
		break
	};
	return _0x16CDC
}

function addLogsOven(_0x15512)
{
	openInputDialogue("Add Logs", "images/" + _0x15512 + ".png", _0x15512, 1, ["heat"], [getHeat(_0x15512)], [_0x15512], [1], "Add Heat", "ADD_HEAT", "Adding logs to your oven will increase its heat.  Heat is used to cook food.")
}

function addLogsCharcoalFoundry(_0x15512)
{
	openInputDialogue("Add Logs", "images/" + _0x15512 + ".png", _0x15512, 1, ["charcoal"], [0], [_0x15512, "oil"], [1, 1000], "Add To Foundry", "ADD_CHARCOAL_FOUNDRY", "Burning logs in foundry will produce charcoal.", 100)
}

function clicksOven()
{
	var _0x151CA = "";
	var _0x1613D = "";
	_0x1613D = "logs";
	_0x1613D = "logs";
	_0x151CA += "<div oncontextmenu=\'sendBytes(\"ADD_ALL_HEAT=" + _0x1613D + "\");document.getElementById(\"dialogue-oven-log-" + _0x1613D + "\").innerHTML = 0;return false;\' onclick=\'addLogsOven(\"" + _0x1613D + "\");closeDialogue(\"dialogue-confirm\")\' class=\'oven-log-button\'>";
	_0x151CA += "<table width=\'100%\'>";
	_0x151CA += "<tr>";
	_0x151CA += "<td>";
	_0x151CA += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-70\' />";
	_0x151CA += "</td>";
	_0x151CA += "<td style=\'text-align:right;\'>";
	_0x151CA += "<span id=\'dialogue-oven-log-" + _0x1613D + "\' style=\'color:orange\'>" + formatNumber(getItem(_0x1613D)) + "</span><br /> " + _0x1613D.toUpperCase();
	_0x151CA += "<br /><br />";
	_0x151CA += "<img src=\'images/heat.png\' class=\'img-20\' /> " + getHeat(_0x1613D);
	_0x151CA += "</td>";
	_0x151CA += "</table>";
	_0x151CA += "</div>";
	_0x1613D = "oakLogs";
	if (getItem(_0x1613D) > 0)
	{
		_0x151CA += "<div oncontextmenu=\'sendBytes(\"ADD_ALL_HEAT=" + _0x1613D + "\");document.getElementById(\"dialogue-oven-log-" + _0x1613D + "\").innerHTML = 0;return false;\' onclick=\'addLogsOven(\"" + _0x1613D + "\");closeDialogue(\"dialogue-confirm\")\' class=\'oven-log-button\'>";
		_0x151CA += "<table width=\'100%\'>";
		_0x151CA += "<tr>";
		_0x151CA += "<td>";
		_0x151CA += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-70\' />";
		_0x151CA += "</td>";
		_0x151CA += "<td style=\'text-align:right;\'>";
		_0x151CA += "<span id=\'dialogue-oven-log-" + _0x1613D + "\' style=\'color:orange\'>" + formatNumber(getItem(_0x1613D)) + "</span><br /> " + "OAK";
		_0x151CA += "<br /><br />";
		_0x151CA += "<img src=\'images/heat.png\' class=\'img-20\' /> " + getHeat(_0x1613D);
		_0x151CA += "</td>";
		_0x151CA += "</table>";
		_0x151CA += "</div>"
	};
	_0x1613D = "willowLogs";
	if (getItem(_0x1613D) > 0)
	{
		_0x151CA += "<div oncontextmenu=\'sendBytes(\"ADD_ALL_HEAT=" + _0x1613D + "\");document.getElementById(\"dialogue-oven-log-" + _0x1613D + "\").innerHTML = 0;return false;\' onclick=\'addLogsOven(\"" + _0x1613D + "\");closeDialogue(\"dialogue-confirm\")\'  class=\'oven-log-button\'>";
		_0x151CA += "<table width=\'100%\'>";
		_0x151CA += "<tr>";
		_0x151CA += "<td>";
		_0x151CA += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-70\' />";
		_0x151CA += "</td>";
		_0x151CA += "<td style=\'text-align:right;\'>";
		_0x151CA += "<span id=\'dialogue-oven-log-" + _0x1613D + "\' style=\'color:orange\'>" + formatNumber(getItem(_0x1613D)) + "</span><br /> " + "WILLOW";
		_0x151CA += "<br /><br />";
		_0x151CA += "<img src=\'images/heat.png\' class=\'img-20\' /> " + getHeat(_0x1613D);
		_0x151CA += "</td>";
		_0x151CA += "</table>";
		_0x151CA += "</div>"
	};
	_0x1613D = "bambooLogs";
	if (getItem(_0x1613D) > 0)
	{
		_0x151CA += "<div oncontextmenu=\'sendBytes(\"ADD_ALL_HEAT=" + _0x1613D + "\");document.getElementById(\"dialogue-oven-log-" + _0x1613D + "\").innerHTML = 0;return false;\' onclick=\'addLogsOven(\"" + _0x1613D + "\");closeDialogue(\"dialogue-confirm\")\'  class=\'oven-log-button\'>";
		_0x151CA += "<table width=\'100%\'>";
		_0x151CA += "<tr>";
		_0x151CA += "<td>";
		_0x151CA += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-70\' />";
		_0x151CA += "</td>";
		_0x151CA += "<td style=\'text-align:right;\'>";
		_0x151CA += "<span id=\'dialogue-oven-log-" + _0x1613D + "\' style=\'color:orange\'>" + formatNumber(getItem(_0x1613D)) + "</span><br /> " + "BAMBOO";
		_0x151CA += "<br /><br />";
		_0x151CA += "<img src=\'images/heat.png\' class=\'img-20\' /> " + getHeat(_0x1613D);
		_0x151CA += "</td>";
		_0x151CA += "</table>";
		_0x151CA += "</div>"
	};
	_0x1613D = "mapleLogs";
	if (getItem(_0x1613D) > 0)
	{
		_0x151CA += "<div oncontextmenu=\'sendBytes(\"ADD_ALL_HEAT=" + _0x1613D + "\");document.getElementById(\"dialogue-oven-log-" + _0x1613D + "\").innerHTML = 0;return false;\' onclick=\'addLogsOven(\"" + _0x1613D + "\");closeDialogue(\"dialogue-confirm\")\'  class=\'oven-log-button\'>";
		_0x151CA += "<table width=\'100%\'>";
		_0x151CA += "<tr>";
		_0x151CA += "<td>";
		_0x151CA += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-70\' />";
		_0x151CA += "</td>";
		_0x151CA += "<td style=\'text-align:right;\'>";
		_0x151CA += "<span id=\'dialogue-oven-log-" + _0x1613D + "\' style=\'color:orange\'>" + formatNumber(getItem(_0x1613D)) + "</span><br /> " + "MAPLE";
		_0x151CA += "<br /><br />";
		_0x151CA += "<img src=\'images/heat.png\' class=\'img-20\' /> " + getHeat(_0x1613D);
		_0x151CA += "</td>";
		_0x151CA += "</table>";
		_0x151CA += "</div>"
	};
	_0x1613D = "lavaLogs";
	if (getItem(_0x1613D) > 0)
	{
		_0x151CA += "<div oncontextmenu=\'sendBytes(\"ADD_ALL_HEAT=" + _0x1613D + "\");document.getElementById(\"dialogue-oven-log-" + _0x1613D + "\").innerHTML = 0;return false;\' onclick=\'addLogsOven(\"" + _0x1613D + "\");closeDialogue(\"dialogue-confirm\")\'  class=\'oven-log-button\'>";
		_0x151CA += "<table width=\'100%\'>";
		_0x151CA += "<tr>";
		_0x151CA += "<td>";
		_0x151CA += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-70\' />";
		_0x151CA += "</td>";
		_0x151CA += "<td style=\'text-align:right;\'>";
		_0x151CA += "<span id=\'dialogue-oven-log-" + _0x1613D + "\' style=\'color:orange\'>" + formatNumber(getItem(_0x1613D)) + "</span><br /> " + "LAVA";
		_0x151CA += "<br /><br />";
		_0x151CA += "<img src=\'images/heat.png\' class=\'img-20\' /> " + getHeat(_0x1613D);
		_0x151CA += "</td>";
		_0x151CA += "</table>";
		_0x151CA += "</div>"
	};
	_0x1613D = "pineLogs";
	if (getItem(_0x1613D) > 0)
	{
		_0x151CA += "<div oncontextmenu=\'sendBytes(\"ADD_ALL_HEAT=" + _0x1613D + "\");document.getElementById(\"dialogue-oven-log-" + _0x1613D + "\").innerHTML = 0;return false;\' onclick=\'addLogsOven(\"" + _0x1613D + "\");closeDialogue(\"dialogue-confirm\")\'  class=\'oven-log-button\'>";
		_0x151CA += "<table width=\'100%\'>";
		_0x151CA += "<tr>";
		_0x151CA += "<td>";
		_0x151CA += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-70\' />";
		_0x151CA += "</td>";
		_0x151CA += "<td style=\'text-align:right;\'>";
		_0x151CA += "<span id=\'dialogue-oven-log-" + _0x1613D + "\' style=\'color:orange\'>" + formatNumber(getItem(_0x1613D)) + "</span><br /> " + "PINE";
		_0x151CA += "<br /><br />";
		_0x151CA += "<img src=\'images/heat.png\' class=\'img-20\' /> " + getHeat(_0x1613D);
		_0x151CA += "</td>";
		_0x151CA += "</table>";
		_0x151CA += "</div>"
	};
	_0x1613D = "stardustLogs";
	if (getItem(_0x1613D) > 0)
	{
		_0x151CA += "<div oncontextmenu=\'sendBytes(\"ADD_ALL_HEAT=" + _0x1613D + "\");document.getElementById(\"dialogue-oven-log-" + _0x1613D + "\").innerHTML = 0;return false;\' onclick=\'addLogsOven(\"" + _0x1613D + "\");closeDialogue(\"dialogue-confirm\")\'  class=\'oven-log-button\'>";
		_0x151CA += "<table width=\'100%\'>";
		_0x151CA += "<tr>";
		_0x151CA += "<td>";
		_0x151CA += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-70\' />";
		_0x151CA += "</td>";
		_0x151CA += "<td style=\'text-align:right;\'>";
		_0x151CA += "<span id=\'dialogue-oven-log-" + _0x1613D + "\' style=\'color:orange\'>" + formatNumber(getItem(_0x1613D)) + "</span><br /> " + "STARDUST";
		_0x151CA += "<br /><br />";
		_0x151CA += "<img src=\'images/heat.png\' class=\'img-20\' /> " + getHeat(_0x1613D);
		_0x151CA += "</td>";
		_0x151CA += "</table>";
		_0x151CA += "</div>"
	};
	if (getItem("heatTotal") > 100)
	{
		_0x151CA += "<br /><br /><span style=\'color:grey;font-size:10pt\'>Tip: Right click a log in this menu to automatically use them all.</span>"
	};
	confirmDialogue("none", _0x151CA, "Close", "", "")
}

function getCharcoalSuccessRate(_0x17024)
{
	var _0x17047 = 0;
	switch (_0x17024)
	{
	case "logs":
		_0x17047 = 0.01;
		break;
	case "oakLogs":
		_0x17047 = 0.02;
		break;
	case "willowLogs":
		_0x17047 = 0.03;
		break;
	case "bambooLogs":
		_0x17047 = 0.05;
		break;
	case "mapleLogs":
		_0x17047 = 0.07;
		break;
	case "lavaLogs":
		_0x17047 = 0.10;
		break;
	case "pineLogs":
		_0x17047 = 0.14;
		break;
	case "stardustLogs":
		_0x17047 = 0.20;
		break
	};
	if (getItem("titaniumCharcoalFoundry") == 1)
	{
		_0x17047 *= 2
	};
	return _0x17047
}

function charcoalFoundryMoreInfo()
{
	closeDialogue("dialogue-confirm");
	confirmDialogue("images/charcoalFoundry.png", "Add logs to the charcoal foundry at the expense of oil.  Each type of log requires the same amount of oil, however the chance of getting a charcoal per log changes.<br /><br />For example, a willow log has a 3% chance to yeild charocoal.  So on average, you will gain 15 charcoal for 100 willow logs burned in the foundry.", "Close", "", "")
}

function clicksCharcoalFoundry()
{
	var _0x151CA = "<center><span style=\'font-size:16pt;font-weight:bold;\'>Charcoal Foundry</span><br /><br /><span style=\'color:grey;font-size:10pt;\'>Converts log into charcoal.  Each log has a different success rate. <u style=\'cursor:pointer\' onclick=\'charcoalFoundryMoreInfo();\'>(more info)</u></span></center><br />";
	var _0x1613D = "";
	_0x1613D = "logs";
	_0x151CA += "<div onclick=\'addLogsCharcoalFoundry(\"" + _0x1613D + "\");closeDialogue(\"dialogue-confirm\")\' style=\'width:70%;\' class=\'oven-log-button\'>";
	_0x151CA += "<table width=\'100%\'>";
	_0x151CA += "<tr>";
	_0x151CA += "<td>";
	_0x151CA += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-70\' />";
	_0x151CA += "</td>";
	_0x151CA += "<td style=\'text-align:right;\'>";
	_0x151CA += "<span id=\'dialogue-oven-log-" + _0x1613D + "\' style=\'color:orange\'>" + formatNumber(getItem(_0x1613D)) + "</span><br /> " + _0x1613D.toUpperCase();
	_0x151CA += "<br /><br />";
	_0x151CA += "<img src=\'images/charcoal_light.png\' class=\'img-30\' /> <b style=\'font-size:14pt;color:grey\'>" + parseInt(getCharcoalSuccessRate(_0x1613D) * 100) + "%</b>";
	_0x151CA += "</td>";
	_0x151CA += "</table>";
	_0x151CA += "</div>";
	_0x1613D = "oakLogs";
	if (getItem(_0x1613D) > 0)
	{
		_0x151CA += "<div onclick=\'addLogsCharcoalFoundry(\"" + _0x1613D + "\");closeDialogue(\"dialogue-confirm\")\' style=\'width:70%;\'  class=\'oven-log-button\'>";
		_0x151CA += "<table width=\'100%\'>";
		_0x151CA += "<tr>";
		_0x151CA += "<td>";
		_0x151CA += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-70\' />";
		_0x151CA += "</td>";
		_0x151CA += "<td style=\'text-align:right;\'>";
		_0x151CA += "<span id=\'dialogue-oven-log-" + _0x1613D + "\' style=\'color:orange\'>" + formatNumber(getItem(_0x1613D)) + "</span><br /> " + _0x1613D.toUpperCase();
		_0x151CA += "<br /><br />";
		_0x151CA += "<img src=\'images/charcoal_light.png\' class=\'img-30\' /> <b style=\'font-size:14pt;color:grey\'>" + parseInt(getCharcoalSuccessRate(_0x1613D) * 100) + "%</b>";
		_0x151CA += "</td>";
		_0x151CA += "</table>";
		_0x151CA += "</div>"
	};
	_0x1613D = "willowLogs";
	if (getItem(_0x1613D) > 0)
	{
		_0x151CA += "<div onclick=\'addLogsCharcoalFoundry(\"" + _0x1613D + "\");closeDialogue(\"dialogue-confirm\")\' style=\'width:70%;\'  class=\'oven-log-button\'>";
		_0x151CA += "<table width=\'100%\'>";
		_0x151CA += "<tr>";
		_0x151CA += "<td>";
		_0x151CA += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-70\' />";
		_0x151CA += "</td>";
		_0x151CA += "<td style=\'text-align:right;\'>";
		_0x151CA += "<span id=\'dialogue-oven-log-" + _0x1613D + "\' style=\'color:orange\'>" + formatNumber(getItem(_0x1613D)) + "</span><br /> " + _0x1613D.toUpperCase();
		_0x151CA += "<br /><br />";
		_0x151CA += "<img src=\'images/charcoal_light.png\' class=\'img-30\' /> <b style=\'font-size:14pt;color:grey\'>" + parseInt(getCharcoalSuccessRate(_0x1613D) * 100) + "%</b>";
		_0x151CA += "</td>";
		_0x151CA += "</table>";
		_0x151CA += "</div>"
	};
	_0x1613D = "bambooLogs";
	if (getItem(_0x1613D) > 0)
	{
		_0x151CA += "<div onclick=\'addLogsCharcoalFoundry(\"" + _0x1613D + "\");closeDialogue(\"dialogue-confirm\")\' style=\'width:70%;\'  class=\'oven-log-button\'>";
		_0x151CA += "<table width=\'100%\'>";
		_0x151CA += "<tr>";
		_0x151CA += "<td>";
		_0x151CA += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-70\' />";
		_0x151CA += "</td>";
		_0x151CA += "<td style=\'text-align:right;\'>";
		_0x151CA += "<span id=\'dialogue-oven-log-" + _0x1613D + "\' style=\'color:orange\'>" + formatNumber(getItem(_0x1613D)) + "</span><br /> " + _0x1613D.toUpperCase();
		_0x151CA += "<br /><br />";
		_0x151CA += "<img src=\'images/charcoal_light.png\' class=\'img-30\' /> <b style=\'font-size:14pt;color:grey\'>" + parseInt(getCharcoalSuccessRate(_0x1613D) * 100) + "%</b>";
		_0x151CA += "</td>";
		_0x151CA += "</table>";
		_0x151CA += "</div>"
	};
	_0x1613D = "mapleLogs";
	if (getItem(_0x1613D) > 0)
	{
		_0x151CA += "<div onclick=\'addLogsCharcoalFoundry(\"" + _0x1613D + "\");closeDialogue(\"dialogue-confirm\")\' style=\'width:70%;\'  class=\'oven-log-button\'>";
		_0x151CA += "<table width=\'100%\'>";
		_0x151CA += "<tr>";
		_0x151CA += "<td>";
		_0x151CA += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-70\' />";
		_0x151CA += "</td>";
		_0x151CA += "<td style=\'text-align:right;\'>";
		_0x151CA += "<span id=\'dialogue-oven-log-" + _0x1613D + "\' style=\'color:orange\'>" + formatNumber(getItem(_0x1613D)) + "</span><br /> " + _0x1613D.toUpperCase();
		_0x151CA += "<br /><br />";
		_0x151CA += "<img src=\'images/charcoal_light.png\' class=\'img-30\' /> <b style=\'font-size:14pt;color:grey\'>" + parseInt(getCharcoalSuccessRate(_0x1613D) * 100) + "%</b>";
		_0x151CA += "</td>";
		_0x151CA += "</table>";
		_0x151CA += "</div>"
	};
	_0x1613D = "lavaLogs";
	if (getItem(_0x1613D) > 0)
	{
		_0x151CA += "<div onclick=\'addLogsCharcoalFoundry(\"" + _0x1613D + "\");closeDialogue(\"dialogue-confirm\")\' style=\'width:70%;\'  class=\'oven-log-button\'>";
		_0x151CA += "<table width=\'100%\'>";
		_0x151CA += "<tr>";
		_0x151CA += "<td>";
		_0x151CA += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-70\' />";
		_0x151CA += "</td>";
		_0x151CA += "<td style=\'text-align:right;\'>";
		_0x151CA += "<span id=\'dialogue-oven-log-" + _0x1613D + "\' style=\'color:orange\'>" + formatNumber(getItem(_0x1613D)) + "</span><br /> " + _0x1613D.toUpperCase();
		_0x151CA += "<br /><br />";
		_0x151CA += "<img src=\'images/charcoal_light.png\' class=\'img-30\' /> <b style=\'font-size:14pt;color:grey\'>" + parseInt(getCharcoalSuccessRate(_0x1613D) * 100) + "%</b>";
		_0x151CA += "</td>";
		_0x151CA += "</table>";
		_0x151CA += "</div>"
	};
	_0x1613D = "pineLogs";
	if (getItem(_0x1613D) > 0)
	{
		_0x151CA += "<div onclick=\'addLogsCharcoalFoundry(\"" + _0x1613D + "\");closeDialogue(\"dialogue-confirm\")\' style=\'width:70%;\'  class=\'oven-log-button\'>";
		_0x151CA += "<table width=\'100%\'>";
		_0x151CA += "<tr>";
		_0x151CA += "<td>";
		_0x151CA += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-70\' />";
		_0x151CA += "</td>";
		_0x151CA += "<td style=\'text-align:right;\'>";
		_0x151CA += "<span id=\'dialogue-oven-log-" + _0x1613D + "\' style=\'color:orange\'>" + formatNumber(getItem(_0x1613D)) + "</span><br /> " + _0x1613D.toUpperCase();
		_0x151CA += "<br /><br />";
		_0x151CA += "<img src=\'images/charcoal_light.png\' class=\'img-30\' /> <b style=\'font-size:14pt;color:grey\'>" + parseInt(getCharcoalSuccessRate(_0x1613D) * 100) + "%</b>";
		_0x151CA += "</td>";
		_0x151CA += "</table>";
		_0x151CA += "</div>"
	};
	_0x1613D = "stardustLogs";
	if (getItem(_0x1613D) > 0)
	{
		_0x151CA += "<div onclick=\'addLogsCharcoalFoundry(\"" + _0x1613D + "\");closeDialogue(\"dialogue-confirm\")\' style=\'width:70%;\'  class=\'oven-log-button\'>";
		_0x151CA += "<table width=\'100%\'>";
		_0x151CA += "<tr>";
		_0x151CA += "<td>";
		_0x151CA += "<img src=\'images/" + _0x1613D + ".png\' class=\'img-70\' />";
		_0x151CA += "</td>";
		_0x151CA += "<td style=\'text-align:right;\'>";
		_0x151CA += "<span id=\'dialogue-oven-log-" + _0x1613D + "\' style=\'color:orange\'>" + formatNumber(getItem(_0x1613D)) + "</span><br /> " + _0x1613D.toUpperCase();
		_0x151CA += "<br /><br />";
		_0x151CA += "<img src=\'images/charcoal_light.png\' class=\'img-30\' /> <b style=\'font-size:14pt;color:grey\'>" + parseInt(getCharcoalSuccessRate(_0x1613D) * 100) + "%</b>";
		_0x151CA += "</td>";
		_0x151CA += "</table>";
		_0x151CA += "</div>"
	};
	confirmDialogue("none", _0x151CA, "Close", "", "")
}
global_MarketData = [];

function MarketData(_0x181A4, _0x181C7, _0x15003, _0x18118, _0x15E18, _0x18181, _0x1815E, _0x1813B, _0x181EA)
{
	this.keyFound = _0x181A4;
	this.playerId = _0x181C7;
	this.itemName = _0x15003;
	this.itemAmount = _0x18118;
	this.price = _0x15E18;
	this.itemSlot = _0x18181;
	this.itemCollect = _0x1815E;
	this.itemCategory = _0x1813B;
	this.postDate = _0x181EA
}
global_TradablesData = [];

function Tradables(_0x15003, _0x154A9, _0x154EF, _0x153D7)
{
	this.itemName = _0x15003;
	this.lowerLimit = _0x154A9;
	this.upperLimit = _0x154EF;
	this.category = _0x153D7
}

function getPlayerSlotData(_0x153B4)
{
	for (i = 0; i < global_MarketData.length; i++)
	{
		if (global_MarketData[i].itemSlot == _0x153B4 && global_MarketData[i].playerId == getItem("playerId"))
		{
			return global_MarketData[i]
		}
	};
	return false
}

function refreshMarketGUI()
{
	for (var _0x14C0C = 1; _0x14C0C <= 3; _0x14C0C++)
	{
		var _0x190D1 = getPlayerSlotData(_0x14C0C);
		if (!_0x190D1)
		{
			document.getElementById("market-slot-empty-" + _0x14C0C).style.display = "";
			document.getElementById("market-slot-" + _0x14C0C).style.display = "none"
		}
		else
		{
			document.getElementById("market-slot-empty-" + _0x14C0C).style.display = "none";
			document.getElementById("market-slot-" + _0x14C0C).style.display = "";
			document.getElementById("market-slot-name-" + _0x14C0C).innerHTML = getItemName(_0x190D1.itemName).toUpperCase();
			document.getElementById("market-slot-img-" + _0x14C0C).src = "images/" + _0x190D1.itemName + ".png";
			document.getElementById("market-slot-amount-" + _0x14C0C).innerHTML = formatNumber(_0x190D1.itemAmount);
			document.getElementById("market-slot-price-" + _0x14C0C).innerHTML = formatNumber(_0x190D1.price);
			document.getElementById("market-slot-collect-" + _0x14C0C).innerHTML = formatNumber(_0x190D1.itemCollect);
			postDate = formatTime((_0x190D1.postDate - getCurrentMillis()) / 1000);
			if (postDate == 0)
			{
				document.getElementById("market-slot-timeleft-" + _0x14C0C).innerHTML = "<b style=\'color:#ff8566\'>EXPIRED!</b>"
			}
			else
			{
				document.getElementById("market-slot-timeleft-" + _0x14C0C).innerHTML = "<b style=\'color:orange\'>Expires in</b> " + postDate
			}
		}
	}
}

function displayMarket(_0x15DD2)
{
	if (_0x15DD2)
	{
		document.getElementById("market-loading-section").style.display = "none";
		document.getElementById("market-slots-section").style.display = "";
		document.getElementById("market-buttons-section").style.display = "";
		document.getElementById("market-display-section").style.display = ""
	}
	else
	{
		if (_0x15DD2)
		{
			document.getElementById("market-loading-section").style.display = "";
			document.getElementById("market-slots-section").style.display = "none";
			document.getElementById("market-buttons-section").style.display = "none";
			document.getElementById("market-display-section").style.display = "none"
		}
	}
}
var openTradablesDialogue_slot = 0;

function addItemSlotButton(_0x153B4)
{
	openTradablesDialogue_slot = _0x153B4;
	openTradablesDialogue(true)
}

function browseMarketDialogue()
{
	openTradablesDialogue(false)
}

function openTradablesDialogue(_0x18D66)
{
	var _0x15049 = document.getElementById("dialogue-tradables-section");
	var _0x151CA = "";
	var _0x18D89 = "";
	for (var _0x14C0C = 0; _0x14C0C < global_TradablesData.length; _0x14C0C++)
	{
		var _0x154CC = global_TradablesData[_0x14C0C];
		var _0x15003 = _0x154CC.itemName;
		var _0x154A9 = _0x154CC.lowerLimit;
		var _0x154EF = _0x154CC.upperLimit;
		var _0x153D7 = _0x154CC.category;
		if (_0x18D89 != _0x153D7)
		{
			if (_0x18D89 != "")
			{
				_0x151CA += "</div>"
			};
			_0x151CA += "<div class=\'market-tradables-dialogue-section\'>";
			_0x18D89 = _0x153D7
		};
		var _0x18DAC = "browseMarketItem(\"" + _0x15003 + "\");closeDialogue(\"dialogue-tradables\")";
		if (_0x18D66)
		{
			_0x18DAC = "addItemSlotButtonSelectItem(\"" + _0x14C0C + "\");closeDialogue(\"dialogue-tradables\")"
		};
		_0x151CA += "<div class=\'dialogue-tradables-item\'><img oncontextmenu=\'addItemSlotButtonSelectItemChangeLimits(\"" + _0x14C0C + "\");closeDialogue(\"dialogue-tradables\"); return false;\' onclick=\'" + _0x18DAC + "\' src=\'images/" + _0x15003 + ".png\' class=\'img-50\' /></div>"
	};
	_0x15049.innerHTML = _0x151CA;
	openDialogueOverride("dialogue-tradables", "large")
}

function browseMarketItem(_0x15003)
{
	var _0x15AAD = getItemName(_0x15003);
	document.getElementById("market-filter").value = _0x15AAD;
	marketFilter(_0x15AAD, true)
}

function addItemSlotButtonSelectItem(_0x15486)
{
	var _0x1541D = _0x15003;
	var _0x153FA = 0;
	var _0x15440 = 0;
	var _0x154CC = global_TradablesData[_0x15486];
	var _0x15003 = _0x154CC.itemName;
	var _0x154A9 = _0x154CC.lowerLimit;
	var _0x154EF = _0x154CC.upperLimit;
	var _0x153D7 = _0x154CC.category;
	var _0x15463 = "";
	_0x15463 += "<center>" + getItemName(_0x15003).toUpperCase() + "<br /><img src=\'images/" + _0x15003 + ".png\' class=\'img-100\' /></center>";
	_0x15463 += "<hr class=\'hr-thin\' />";
	_0x15463 += "<div style=\'text-align:left;margin:0 auto;width: 90%;border:1px solid black;color:white;padding:20px;background-color:#476b6b;border-radius:3pt;\'>";
	_0x15463 += "<input id=\'post-item-market-itemName\' value=\'" + _0x15003 + "\' type=\'hidden\'>";
	_0x15463 += "Amount to Sell<br />";
	_0x15463 += "<input id=\'post-item-market-amount\' placeholder=\'You own: " + getItem(_0x15003) + "\' class=\'input-larger\'>";
	_0x15463 += "<br /><br />";
	_0x15463 += "<img src=\'images/coins.png\' class=\'img-30\' /> Price each<br />";
	_0x15463 += "<input id=\'post-item-market-price\' class=\'input-larger\'>";
	_0x15463 += "</div>";
	_0x15463 += "<br />";
	_0x15463 += "<div class=\'blue-dark-box\'>";
	_0x15463 += "<b>Price limits: " + "</b>" + "<img src=\'images/coins.png\' class=\'img-30\' /> " + formatNumber(_0x154A9) + " - " + "<img src=\'images/coins.png\' class=\'img-30\' /> " + formatNumber(_0x154EF);
	_0x15463 += "</div>";
	document.getElementById("dialogue-tradablesPostItem-section").innerHTML = _0x15463;
	openDialogue("dialogue-tradables-post-item")
}

function addItemSlotButtonSelectItemChangeLimits(_0x15486)
{
	var _0x1541D = _0x15003;
	var _0x153FA = 0;
	var _0x15440 = 0;
	var _0x154CC = global_TradablesData[_0x15486];
	var _0x15003 = _0x154CC.itemName;
	var _0x154A9 = _0x154CC.lowerLimit;
	var _0x154EF = _0x154CC.upperLimit;
	var _0x153D7 = _0x154CC.category;
	var _0x15463 = "";
	_0x15463 += "<center>" + getItemName(_0x15003).toUpperCase() + "<br /><img src=\'images/" + _0x15003 + ".png\' class=\'img-100\' /></center>";
	_0x15463 += "<hr class=\'hr-thin\' />";
	_0x15463 += "<div style=\'text-align:left;margin:0 auto;width: 90%;border:1px solid black;color:white;padding:20px;background-color:#476b6b;border-radius:3pt;\'>";
	_0x15463 += "<input id=\'post-item-market-itemName-changePrice\' value=\'" + _0x15003 + "\' type=\'hidden\'>";
	_0x15463 += "New Lower Limit<br />";
	_0x15463 += "<input id=\'post-item-market-price-lowerLimit\' value=\'" + _0x154A9 + "\' placeholder=\'Currently: " + formatNumber(_0x154A9) + "\' class=\'input-larger\'>";
	_0x15463 += "<br /><br />";
	_0x15463 += "New Upper Limit<br />";
	_0x15463 += "<input id=\'post-item-market-price-upperLimit\' value=\'" + _0x154EF + "\'  placeholder=\'Currently: " + formatNumber(_0x154EF) + "\' class=\'input-larger\'>";
	_0x15463 += "</div>";
	_0x15463 += "<br />";
	_0x15463 += "<div class=\'blue-dark-box\'>";
	_0x15463 += "<b>CURRENT LIMITS: " + "</b>" + "<img src=\'images/coins.png\' class=\'img-30\' /> " + formatNumber(_0x154A9) + " - " + "<img src=\'images/coins.png\' class=\'img-30\' /> " + formatNumber(_0x154EF);
	_0x15463 += "</div>";
	document.getElementById("dialogue-tradablesPostItem-section-limits").innerHTML = _0x15463;
	openDialogue("dialogue-tradables-change-item-limits")
}

function doPostMarket(_0x15003, _0x15DF5, _0x15E18)
{
	_0x15DF5 = convertNumberWithLetrtsKMBToNumber(_0x15DF5);
	_0x15E18 = convertNumberWithLetrtsKMBToNumber(_0x15E18);
	confirmDialogue("images/shop_black.png", "Are you sure you want to post this on the market?<span style=\'color:grey\'><br /><br /><img src=\'images/" + _0x15003 + ".png\' class=\'img-30\' /> <b>Selling: </b>" + formatNumber(_0x15DF5) + "<br /><br /><img src=\'images/coins.png\' class=\'img-30\'> <b>Price each: </b>" + formatNumber(_0x15E18) + "<br /><br /><img src=\'images/coinPile.png\' class=\'img-30\'> <b>Total: </b>" + formatNumber(_0x15DF5 * _0x15E18) + "</span>", "Confirm Post", "Cancel", "POST_MARKET=" + _0x15003 + "~" + _0x15DF5 + "~" + _0x15E18 + "~" + openTradablesDialogue_slot)
}

function changeMarketLimits(_0x15003, _0x15DF5, _0x15E18)
{
	_0x15DF5 = convertNumberWithLetrtsKMBToNumber(_0x15DF5);
	_0x15E18 = convertNumberWithLetrtsKMBToNumber(_0x15E18);
	confirmDialogue("images/" + _0x15003 + ".png", "Are you sure you want to modifiy the price limits?<span style=\'color:grey\'><br /><br /><img src=\'images/coins.png\' class=\'img-30\'> <b>Lower: </b>" + formatNumber(_0x15DF5) + "<br /><br /><img src=\'images/coins.png\' class=\'img-30\'> <b>Upper: </b>" + formatNumber(_0x15E18), "Confirm Price Margins", "Cancel", "CHANGE_MARGIN_MARKET=" + _0x15003 + "~" + _0x15DF5 + "~" + _0x15E18)
}

function getCurrentMillis()
{
	return new Date().getTime()
}

function populateMarketTable()
{
	if (global_MarketData.length == 0)
	{
		document.getElementById("market-display-section").innerHTML = "<h1 style=\'text-align:center\'>Market is currently empty.</h1>";
		return
	};
	var _0x151CA = "<center>";
	_0x151CA += "<table id=\'market-table\' class=\'sortable basic-table\' width=\'90%\'>";
	_0x151CA += "<thead>";
	_0x151CA += "<tr><th width=\'15%\' colspan=\'2\'>Name</th><th width=\'15%\'>Amount</th><th width=\'15%\'>Price each</th><th width=\'15%\'>Category</th><th width=\'5%\'>Expires In</th></tr>";
	_0x151CA += "</thead>";
	_0x151CA += "<tbody>";
	for (var _0x14C0C = 0; _0x14C0C < global_MarketData.length; _0x14C0C++)
	{
		var _0x18E15 = global_MarketData[_0x14C0C];
		var _0x181A4 = _0x18E15.keyFound;
		var _0x15003 = _0x18E15.itemName;
		var _0x18118 = _0x18E15.itemAmount;
		var _0x18DF2 = _0x18E15.price;
		var _0x1813B = _0x18E15.itemCategory;
		var _0x181EA = _0x18E15.postDate;
		_0x181EA = formatTime((_0x181EA - getCurrentMillis()) / 1000);
		if (_0x18118 == 0 || _0x181EA == 0)
		{
			continue
		};
		customAttribute = "onclick=\'purchaseFromMarket(\"" + _0x181A4 + "\",\"" + _0x15003 + "\",\"" + _0x18118 + "\",\"" + _0x18DF2 + "\")\'";
		if (_0x181A4.split("_")[0] == getItem("playerId"))
		{
			customAttribute = "style=\'background-color:silver;\'"
		};
		_0x151CA += "<tr class=\'tr-hover\' id=\'marekt-row-" + _0x15003 + "\' " + customAttribute + " style=\'border:1px solid grey\'>";
		_0x151CA += "<td style=\'border:none\'>" + getItemName(_0x15003).toUpperCase() + "</td>";
		_0x151CA += "<td style=\'border:none\'>" + "<img class=\'img-50\' src=\'images/" + _0x15003 + ".png\'" + "</td>";
		_0x151CA += "<td style=\'border:none\'>" + formatNumber(_0x18118) + "</td>";
		_0x151CA += "<td style=\'border:none\'>" + formatNumber(_0x18DF2) + "</td>";
		_0x151CA += "<td style=\'color:grey\'style=\'border:none\'>" + _0x1813B + "</td>";
		_0x151CA += "<td style=\'border:none\'>" + _0x181EA + "</td>";
		_0x151CA += "</tr>"
	};
	_0x151CA += "</tbody>";
	_0x151CA += "</table>";
	_0x151CA += "</center>";
	document.getElementById("market-display-section").innerHTML = _0x151CA;
	sorttable.makeSortable(document.getElementById("market-table"));
	if (document.getElementById("market-filter").value.length > 0)
	{
		marketFilter(document.getElementById("market-filter").value, false)
	}
}

function purchaseFromMarket(_0x181A4, _0x15003, _0x18118, _0x15E18)
{
	document.getElementById("dialogue-market-buy-input").value = "";
	document.getElementById("dialogue-market-buy-hidden-itemName").value = _0x181A4;
	document.getElementById("dialogue-market-buy-hidden-keyFound").value = _0x15003;
	document.getElementById("dialogue-market-buy-hidden-price").value = _0x15E18;
	document.getElementById("dialogue-market-buy-hidden-amount").value = _0x18118;
	openDialogue("dialogue-market-buy")
}

function purchaseFromMarketConfirm()
{
	var _0x181A4 = document.getElementById("dialogue-market-buy-hidden-itemName").value;
	var _0x15003 = document.getElementById("dialogue-market-buy-hidden-keyFound").value;
	var _0x15E18 = document.getElementById("dialogue-market-buy-hidden-price").value;
	var _0x18118 = document.getElementById("dialogue-market-buy-hidden-amount").value;
	var _0x184C9 = document.getElementById("dialogue-market-buy-input").value;
	if (_0x15003 == "donorCoins")
	{
		confirmDialogue("images/shop_black.png", "You are about to purchase:<br /><br /><img src=\'images/" + _0x15003 + ".png\' class=\'img-30\' /> " + formatNumber(_0x184C9) + " for <img src=\'images/coins.png\' class=\'img-30\' />" + formatNumber(_0x184C9 * _0x15E18) + " coins.<br /><br /><b style=\'color:red\'>Warning:</b> Coins will automatically bind to your account.", "Confirm", "Cancel", "MARKET_BUY=" + _0x181A4 + "~" + _0x184C9 + "~" + _0x15003 + "~" + _0x15E18)
	}
	else
	{
		confirmDialogue("images/shop_black.png", "You are about to purchase:<br /><br /><img src=\'images/" + _0x15003 + ".png\' class=\'img-30\' /> " + formatNumber(_0x184C9) + " for <img src=\'images/coins.png\' class=\'img-30\' /> " + formatNumber(_0x184C9 * _0x15E18) + " coins.", "Confirm", "Cancel", "MARKET_BUY=" + _0x181A4 + "~" + _0x184C9 + "~" + _0x15003 + "~" + _0x15E18)
	}
}

function marketFilter(_0x14EA5, _0x1820D)
{
	_0x14EA5 = _0x14EA5.toLowerCase();
	var _0x18253 = document.getElementById("market-table");
	var _0x18230 = _0x18253.getElementsByTagName("tr");
	for (var _0x14C0C = 0; _0x14C0C < _0x18230.length; _0x14C0C++)
	{
		_0x18230[_0x14C0C].style.display = "";
		var _0x14D47 = _0x18230[_0x14C0C].id.split("-")[2];
		if (_0x14D47 != null)
		{
			_0x14D47 = getItemName(_0x14D47).toLowerCase();
			if (_0x1820D)
			{
				if (_0x14D47 != _0x14EA5)
				{
					_0x18230[_0x14C0C].style.display = "none"
				}
			}
			else
			{
				if (!_0x14D47.includes(_0x14EA5.trim()))
				{
					_0x18230[_0x14C0C].style.display = "none"
				}
			}
		}
	};
	if (_0x14EA5.length > 0)
	{
		document.getElementById("market-filter-x").style.display = ""
	}
	else
	{
		document.getElementById("market-filter-x").style.display = "none"
	}
}

function refreshTradables(_0x14DB0)
{
	global_TradablesData = [];
	var _0x14DD3 = _0x14DB0.split("~");
	for (var _0x14C0C = 0; _0x14C0C < _0x14DD3.length; _0x14C0C++)
	{
		var _0x15003 = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x154A9 = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x154EF = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x153D7 = _0x14DD3[_0x14C0C];
		global_TradablesData.push(new Tradables(_0x15003, _0x154A9, _0x154EF, _0x153D7))
	}
}

function refreshMarket(_0x14DB0)
{
	if (_0x14DB0 == "")
	{
		return
	};
	global_MarketData = [];
	var _0x14DD3 = _0x14DB0.split("~");
	for (var _0x14C0C = 0; _0x14C0C < _0x14DD3.length; _0x14C0C++)
	{
		var _0x181A4 = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x181C7 = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x15003 = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x18118 = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x18DF2 = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x18181 = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x1815E = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x1813B = _0x14DD3[_0x14C0C];
		_0x14C0C++;
		var _0x181EA = _0x14DD3[_0x14C0C];
		global_MarketData.push(new MarketData(_0x181A4, _0x181C7, _0x15003, _0x18118, _0x18DF2, _0x18181, _0x1815E, _0x1813B, _0x181EA))
	}
}

function openOilFactoryDialogue()
{
	if (getItem("oilFactory") == 1)
	{
		document.getElementById("dialogue-oilFactory-image").src = "images/" + "oilFactory" + ".png"
	}
	else
	{
		if (getItem("promethiumOilFactory") == 1)
		{
			document.getElementById("dialogue-oilFactory-image").src = "images/" + "promethiumOilFactory" + ".png"
		}
		else
		{
			if (getItem("titaniumOilFactory") == 1)
			{
				document.getElementById("dialogue-oilFactory-image").src = "images/" + "titaniumOilFactory" + ".png"
			}
		}
	};
	document.getElementById("dialogue-oilFactory-capacity").innerHTML = getOilFactoryCapacity();
	document.getElementById("dialogue-oilFactory-input").value = getOilFactoryCapacity() - getItem("oilFactoryWorkers");
	openDialogue("dialogue-oilFactory")
}

function getOilFactoryCapacity()
{
	var _0x15DF5 = 0;
	if (getItem("oilFactory") == 1)
	{
		_0x15DF5 = 10
	}
	else
	{
		if (getItem("promethiumOilFactory") == 1)
		{
			_0x15DF5 = 20
		}
		else
		{
			if (getItem("titaniumOilFactory") == 1)
			{
				_0x15DF5 = 30
			}
		}
	};
	if (getItem("greenOilFactoryOrbBound") > 0)
	{
		_0x15DF5 += 50
	};
	return _0x15DF5
}

function refreshDonorTable()
{
	var _0x18F73 = getCurrentMillis();
	var _0x1613D = "";
	_0x1613D = "woodcuttingPatch5";
	if (getItem(_0x1613D) == 0)
	{
		document.getElementById("donorTable-" + _0x1613D).innerHTML = "Locked"
	}
	else
	{
		if (_0x18F73 > getItem(_0x1613D))
		{
			document.getElementById("donorTable-" + _0x1613D).innerHTML = "Locked"
		}
		else
		{
			var _0x18F96 = getItem(_0x1613D) - _0x18F73;
			document.getElementById("donorTable-" + _0x1613D).innerHTML = "<span style=\'color:green\'>" + parseInt(1 + (_0x18F96 / 1000 / 60 / 60 / 24)) + " days</span>"
		}
	};
	_0x1613D = "woodcuttingPatch6";
	if (getItem(_0x1613D) == 0)
	{
		document.getElementById("donorTable-" + _0x1613D).innerHTML = "Locked"
	}
	else
	{
		if (_0x18F73 > getItem(_0x1613D))
		{
			document.getElementById("donorTable-" + _0x1613D).innerHTML = "Locked"
		}
		else
		{
			var _0x18F96 = getItem(_0x1613D) - _0x18F73;
			document.getElementById("donorTable-" + _0x1613D).innerHTML = "<span style=\'color:green\'>" + parseInt(1 + (_0x18F96 / 1000 / 60 / 60 / 24)) + " days</span>"
		}
	};
	_0x1613D = "farmingPlot5";
	if (getItem(_0x1613D) == 0)
	{
		document.getElementById("donorTable-" + _0x1613D).innerHTML = "Locked"
	}
	else
	{
		if (_0x18F73 > getItem(_0x1613D))
		{
			document.getElementById("donorTable-" + _0x1613D).innerHTML = "Locked"
		}
		else
		{
			var _0x18F96 = getItem(_0x1613D) - _0x18F73;
			document.getElementById("donorTable-" + _0x1613D).innerHTML = "<span style=\'color:green\'>" + parseInt(1 + (_0x18F96 / 1000 / 60 / 60 / 24)) + " days</span>"
		}
	};
	_0x1613D = "farmingPlot6";
	if (getItem(_0x1613D) == 0)
	{
		document.getElementById("donorTable-" + _0x1613D).innerHTML = "Locked"
	}
	else
	{
		if (_0x18F73 > getItem(_0x1613D))
		{
			document.getElementById("donorTable-" + _0x1613D).innerHTML = "Locked"
		}
		else
		{
			var _0x18F96 = getItem(_0x1613D) - _0x18F73;
			document.getElementById("donorTable-" + _0x1613D).innerHTML = "<span style=\'color:green\'>" + parseInt(1 + (_0x18F96 / 1000 / 60 / 60 / 24)) + " days</span>"
		}
	};
	_0x1613D = "moreOfflineTime";
	if (getItem(_0x1613D) == 0)
	{
		document.getElementById("donorTable-" + _0x1613D).innerHTML = "Locked"
	}
	else
	{
		if (_0x18F73 > getItem(_0x1613D))
		{
			document.getElementById("donorTable-" + _0x1613D).innerHTML = "Locked"
		}
		else
		{
			var _0x18F96 = getItem(_0x1613D) - _0x18F73;
			document.getElementById("donorTable-" + _0x1613D).innerHTML = "<span style=\'color:green\'>" + parseInt(1 + (_0x18F96 / 1000 / 60 / 60 / 24)) + " days</span>"
		}
	};
	_0x1613D = "bonusXp";
	if (getItem(_0x1613D) == 0)
	{
		document.getElementById("donorTable-" + _0x1613D).innerHTML = "Locked"
	}
	else
	{
		if (_0x18F73 > getItem(_0x1613D))
		{
			document.getElementById("donorTable-" + _0x1613D).innerHTML = "Locked"
		}
		else
		{
			var _0x18F96 = getItem(_0x1613D) - _0x18F73;
			document.getElementById("donorTable-" + _0x1613D).innerHTML = "<span style=\'color:green\'>" + parseInt(1 + (_0x18F96 / 1000 / 60 / 60 / 24)) + " days</span>"
		}
	}
}

function getOrbDescription(_0x1611A)
{
	var _0x14EEB = "";
	switch (_0x1611A)
	{
	case "blueOilWellOrb":
		_0x14EEB = "Oil wells produce twice the amount of oil.";
		break;
	case "blueOreOrb":
		_0x14EEB = "When mining an ore, there is a 10% chance of obtaining two instead of one.";
		break;
	case "blueWoodcuttingOrb":
		_0x14EEB = "A tree that instantly grows will grant more logs.";
		break;
	case "blueFurnaceOrb":
		_0x14EEB = "Furnace capacity increased by 50%.";
		break;
	case "blueManaOrb":
		_0x14EEB = "Mana regenerates very fast out of combat.";
		break;
	case "greenFishingOrb":
		_0x14EEB = "Catch 20% more fish.";
		break;
	case "greenRocketOrb":
		_0x14EEB = "Gain double the ore when looting other planets and moons.";
		break;
	case "greenOilFactoryOrb":
		_0x14EEB = "Ability to hire an additional 50 factory workers.";
		break;
	case "greenShinyMonsterOrb":
		_0x14EEB = "Right click a monster in combat to make it shiny.";
		break;
	case "greenShinyWoodcuttingOrb":
		_0x14EEB = "Right click a tree to make it shiny.";
		break;
	case "greenShinyFarmingOrb":
		_0x14EEB = "Right click a crop to make it shiny.";
		break
	};
	return _0x14EEB
}

function clicksBlueOrb(_0x1611A)
{
	var _0x15A44 = getOrbDescription(_0x1611A);
	confirmDialogue("images/" + _0x1611A + ".png", "Would you like to bind this to your account?  The orb will become untradable if so.<br /><br /><span style=\'color:grey\'>" + _0x15A44 + "</span>", "Bind Orb", "Cancel", "BIND_ORB=" + _0x1611A)
}

function clicksGreenOrb(_0x1611A)
{
	var _0x15A44 = getOrbDescription(_0x1611A);
	confirmDialogue("images/" + _0x1611A + ".png", "Would you like to bind this to your account?  The orb will become untradable if so.<br /><br /><span style=\'color:grey\'>" + _0x15A44 + "</span>", "Bind Orb", "Cancel", "BIND_GREEN_ORB=" + _0x1611A)
}

function getBrewingKitDataTypes()
{
	var _0x16278 = ["none", "none", "none", 0];
	var _0x1613D = "";
	_0x1613D = "brewingKit";
	if (getItem(_0x1613D) == 1)
	{
		_0x16278 = ["brewingKit", "none", "sapphire", "0%"];
		return _0x16278
	};
	_0x1613D = "sapphireBrewingKit";
	if (getItem(_0x1613D) == 1)
	{
		_0x16278 = ["sapphireBrewingKit", "sapphire", "emerald", "15%"];
		return _0x16278
	};
	_0x1613D = "emeraldBrewingKit";
	if (getItem(_0x1613D) == 1)
	{
		_0x16278 = ["emeraldBrewingKit", "emerald", "ruby", "30%"];
		return _0x16278
	};
	_0x1613D = "rubyBrewingKit";
	if (getItem(_0x1613D) == 1)
	{
		_0x16278 = ["rubyBrewingKit", "ruby", "diamond", "60%"];
		return _0x16278
	};
	_0x1613D = "diamondBrewingKit";
	if (getItem(_0x1613D) == 1)
	{
		_0x16278 = ["diamondBrewingKit", "diamond", "none", "100%"];
		return _0x16278
	};
	return _0x16278
}

function getBrewingTimeAdjusted(_0x16DD1)
{
	var _0x16FDE = getBrewingKitDataTypes()[3];
	if (_0x16FDE == "0%")
	{
		return formatTime(_0x16DD1)
	};
	_0x16FDE = parseFloat(_0x16FDE.substr(0, _0x16FDE.length - 1));
	_0x16FDE /= 100;
	_0x16DD1 *= (parseFloat(1) + parseFloat(_0x16FDE));
	return formatTime(_0x16DD1)
}

function openBrewingKitDialogue()
{
	var _0x14DD3 = getBrewingKitDataTypes();
	if (_0x14DD3[0] != "none")
	{
		if (_0x14DD3[0] == "diamondBrewingKit")
		{
			confirmDialogue("images/" + _0x14DD3[0] + ".png", "<b>Bonus Potion Time: </b>" + _0x14DD3[3], "Close", "", "")
		}
		else
		{
			confirmDialogue("images/" + _0x14DD3[0] + ".png", "<b>Bonus Potion Time: </b>" + _0x14DD3[3] + "<br /><br /><span style=\'color:grey\'>Socket a <img src=\'images/" + _0x14DD3[2] + ".png\' class=\'img-30\' /> <b>" + _0x14DD3[2] + "</b> to increase the timer for all potions.</span>", "Socket a " + _0x14DD3[2], "Close", "SOCKET=brewingKit")
		}
	}
}

function openOystersDialogues()
{
	openInputDialogue("Oyster", "images/oyster.png", "oyster", 1, [], [], ["oyster"], [1], "Open", "OPEN_OYSTERS", "There is a small chance of finding a valuable pearl.  Most of the time, the oyster is empty.")
}

function openSpecialOystersDialogues()
{
	openInputDialogue("Special Oyster", "images/specialOyster.png", "specialOyster", 1, [], [], ["specialOyster"], [1], "Open", "OPEN_SPECIAL_OYSTERS", "There is a small chance of finding a valuable pearl.  Most of the time, the oyster is empty.")
}

function openOystersSellDialogues()
{
	var _0x16255 = "oyster";
	openInputDialogue("Sell", "images/" + _0x16255 + ".png", _0x16255, 1, ["coins"], [getItemPrice(_0x16255)], [_0x16255], [1], "Sell", "SELL", "Sell this to the shop for some coins.")
}

function openSpecialOystersSellDialogues()
{
	var _0x16255 = "specialOyster";
	openInputDialogue("Sell", "images/" + _0x16255 + ".png", _0x16255, 1, ["coins"], [getItemPrice(_0x16255)], [_0x16255], [1], "Sell", "SELL", "Sell this to the shop for some coins.")
}

function hasAllMuseumItems()
{
	var _0x16278 = getMuseumItemsCount();
	return _0x16278[0] == _0x16278[1]
}

function getMuseumItemsCount()
{
	var _0x1613D = "";
	var _0x173D5 = 0;
	var _0x173B2 = 0;
	_0x1613D = "sapphireGlassHand";
	_0x173D5++;
	if (getItem(_0x1613D + "Museum") == 1)
	{
		_0x173B2++
	};
	_0x1613D = "emeraldGlassHand";
	_0x173D5++;
	if (getItem(_0x1613D + "Museum") == 1)
	{
		_0x173B2++
	};
	_0x1613D = "rubyGlassHand";
	_0x173D5++;
	if (getItem(_0x1613D + "Museum") == 1)
	{
		_0x173B2++
	};
	_0x1613D = "diamondGlassHand";
	_0x173D5++;
	if (getItem(_0x1613D + "Museum") == 1)
	{
		_0x173B2++
	};
	_0x1613D = "snowmanCrafted";
	_0x173D5++;
	if (getItem(_0x1613D + "Museum") == 1)
	{
		_0x173B2++
	};
	_0x1613D = "brokenStinger";
	_0x173D5++;
	if (getItem(_0x1613D + "Museum") == 1)
	{
		_0x173B2++
	};
	_0x1613D = "glowingGoldBar";
	_0x173D5++;
	if (getItem(_0x1613D + "Museum") == 1)
	{
		_0x173B2++
	};
	_0x1613D = "snakeBones";
	_0x173D5++;
	if (getItem(_0x1613D + "Museum") == 1)
	{
		_0x173B2++
	};
	_0x1613D = "giantPearl";
	_0x173D5++;
	if (getItem(_0x1613D + "Museum") == 1)
	{
		_0x173B2++
	};
	_0x1613D = "rareGiantPearl";
	_0x173D5++;
	if (getItem(_0x1613D + "Museum") == 1)
	{
		_0x173B2++
	};
	_0x1613D = "sharkTooth";
	_0x173D5++;
	if (getItem(_0x1613D + "Museum") == 1)
	{
		_0x173B2++
	};
	_0x1613D = "skeletonSkull";
	_0x173D5++;
	if (getItem(_0x1613D + "Museum") == 1)
	{
		_0x173B2++
	};
	_0x1613D = "ghostClothes";
	_0x173D5++;
	if (getItem(_0x1613D + "Museum") == 1)
	{
		_0x173B2++
	};
	_0x1613D = "cockroach";
	_0x173D5++;
	if (getItem(_0x1613D + "Museum") == 1)
	{
		_0x173B2++
	};
	_0x1613D = "goldenCockroach";
	_0x173D5++;
	if (getItem(_0x1613D + "Museum") == 1)
	{
		_0x173B2++
	};
	_0x1613D = "smallSeaShell";
	_0x173D5++;
	if (getItem(_0x1613D + "Museum") == 1)
	{
		_0x173B2++
	};
	_0x1613D = "mediumSeaShell";
	_0x173D5++;
	if (getItem(_0x1613D + "Museum") == 1)
	{
		_0x173B2++
	};
	_0x1613D = "largeSeaShell";
	_0x173D5++;
	if (getItem(_0x1613D + "Museum") == 1)
	{
		_0x173B2++
	};
	_0x1613D = "yetiLeftFoot";
	_0x173D5++;
	if (getItem(_0x1613D + "Museum") == 1)
	{
		_0x173B2++
	};
	_0x1613D = "yetiRightFoot";
	_0x173D5++;
	if (getItem(_0x1613D + "Museum") == 1)
	{
		_0x173B2++
	};
	_0x1613D = "greenStoneEyes";
	_0x173D5++;
	if (getItem(_0x1613D + "Museum") == 1)
	{
		_0x173B2++
	};
	_0x1613D = "purpleStoneEyes";
	_0x173D5++;
	if (getItem(_0x1613D + "Museum") == 1)
	{
		_0x173B2++
	};
	_0x1613D = "redStoneEyes";
	_0x173D5++;
	if (getItem(_0x1613D + "Museum") == 1)
	{
		_0x173B2++
	};
	_0x1613D = "yellowStoneEyes";
	_0x173D5++;
	if (getItem(_0x1613D + "Museum") == 1)
	{
		_0x173B2++
	};
	_0x1613D = "blueStoneEyes";
	_0x173D5++;
	if (getItem(_0x1613D + "Museum") == 1)
	{
		_0x173B2++
	};
	_0x1613D = "burntRemains";
	_0x173D5++;
	if (getItem(_0x1613D + "Museum") == 1)
	{
		_0x173B2++
	};
	return [_0x173B2, _0x173D5]
}

function transformItem(_0x1915D, _0x18532, _0x15909)
{
	openInputDialogue("TRANSFORM", "images/" + _0x1915D + ".png", _0x1915D, 1, ["magicXp"], [_0x15909], [_0x1915D], [1], "Transform", "TRANSFORM", "Transforming item using magic converts an equipment to a variety of items.")
}

function hardcoreInfo()
{
	confirmDialogue("images/hardcoreIcon.png", "Hardcore accounts disables the player market. You won\'t be able to sell or buy from other players.<br /><br /><span style=\'color:red\'>Not recommended for new players!</span>", "Close", "", "")
}

function ghostScanRequired()
{
	return getItemString("monsterName") == "knight5" || getItemString("monsterName") == "ghost" || getItemString("monsterName") == "skeletonGhost" || getItemString("monsterName") == "reaper"
}
