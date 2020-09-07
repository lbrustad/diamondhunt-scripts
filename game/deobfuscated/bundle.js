var global_setItemsTickCount = 0;
var global_newAccount = false;
var global_titleNotification = false;
var global_gameLoaded = false;

function getServerWithLeastPeople()
{
	var _0x566D = 0;
	var _0x568A = 10000000;
	for (var _0x3607 = 0; _0x3607 <= 100; _0x3607++)
	{
		if (servers_information[_0x3607] == null)
		{
			break
		};
		var _0x56A7 = servers_information[_0x3607][0];
		var _0x56E1 = servers_information[_0x3607][1];
		var _0x56C4 = servers_information[_0x3607][2];
		var _0x5650 = servers_information[_0x3607][3];
		if (_0x56C4 == 1 || _0x56E1 == 0)
		{
			continue
		};
		if (_0x568A > _0x5650)
		{
			_0x566D = _0x56A7;
			_0x568A = _0x5650
		}
	};
	return _0x566D
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
	var _0x41B2 = "";
	_0x41B2 += "<br />";
	for (var _0x3607 = 0; _0x3607 <= 100; _0x3607++)
	{
		if (servers_information[_0x3607] == null)
		{
			break
		};
		var _0x56A7 = servers_information[_0x3607][0];
		var _0x56E1 = servers_information[_0x3607][1];
		var _0x56C4 = servers_information[_0x3607][2];
		var _0x5650 = servers_information[_0x3607][3];
		var _0x5D1C = servers_information[_0x3607][4];
		if (_0x56E1 == 1)
		{
			_0x41B2 += "<span onclick=\'localStorage.setItem(\"last_server\", " + _0x56A7 + ");window.location.reload()\' class=\'login-menu-server\' id=\'login-menu-server-button\'>Server " + _0x56A7 + "<br /><br /><span style=\'color:yellow;font-size:12pt;\'>" + _0x5650 + "/" + _0x5D1C + " online.</span>"
		}
		else
		{
			_0x41B2 += "<span onclick=\'localStorage.setItem(\"last_server\", " + _0x56A7 + ");window.location.reload()\' class=\'login-menu-server\' id=\'login-menu-server-button\'>Server " + _0x56A7 + "<br /><br /><span style=\'color:yellow;font-size:12pt;\'><span style=\'color:pink\'>OFFLINE</span></span>"
		};
		if (_0x56C4 == 1)
		{
			_0x41B2 += "<br /><br /><span style=\'color:green;font-size:8pt;\'><img src=\'images/donorCoins.png\' class=\'img-15\' /> Donor Server</span>"
		}
		else
		{
			_0x41B2 += "<br />"
		};
		_0x41B2 += "</span>";
		_0x41B2 += "<br />"
	};
	document.getElementById("server-list-section").innerHTML = _0x41B2
}

function isServerOnline(_0x56A7)
{
	for (var _0x3607 = 0; _0x3607 <= 100; _0x3607++)
	{
		if (servers_information[_0x3607] == null)
		{
			break
		};
		if (servers_information[_0x3607][0] == _0x56A7 && servers_information[_0x3607][1] == 1)
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
	document.addEventListener("keyup", (_0x35EA) =>
	{
		switch (_0x35EA.keyCode)
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
			var _0x35CD = document.getElementsByClassName("dialogue");
			for (var _0x3607 = 0; _0x3607 < _0x35CD.length; _0x3607++)
			{
				_0x35CD[_0x3607].style.display = "none"
			};
			break;
		case 49:
			if (getItem("researcherCombat") >= 3 && global_lastTabId == "right-combat-fighting" && !$("#chat-area-input").is(":focus"))
			{
				sendBytes("USE_PRESET=1")
			};
			break;
		case 50:
			if (getItem("researcherCombat") >= 3 && global_lastTabId == "right-combat-fighting" && !$("#chat-area-input").is(":focus"))
			{
				sendBytes("USE_PRESET=2")
			};
			break;
		case 51:
			if (getItem("researcherCombat") >= 3 && global_lastTabId == "right-combat-fighting" && !$("#chat-area-input").is(":focus"))
			{
				sendBytes("USE_PRESET=3")
			};
			break;
		case 52:
			if (getItem("researcherCombat") >= 3 && global_lastTabId == "right-combat-fighting" && !$("#chat-area-input").is(":focus"))
			{
				sendBytes("USE_PRESET=4")
			};
			break;
		case 53:
			if (getItem("researcherCombat") >= 3 && global_lastTabId == "right-combat-fighting" && !$("#chat-area-input").is(":focus"))
			{
				sendBytes("USE_PRESET=5")
			};
			break;
		case 84:
			if (getItem("teleport") >= 1 && global_lastTabId == "right-combat-fighting" && !$("#chat-area-input").is(":focus"))
			{
				sendBytes("CAST=teleport")
			};
			break
		}
	})
});
$(document).mousemove(function (_0x35EA)
{
	window.mouseX = _0x35EA.pageX;
	window.mouseY = _0x35EA.pageY
});

function initWebSocketFunctions()
{
	try
	{
		global_webSocket.onerror = function (_0x365E)
		{
			_0x5ABB(_0x365E)
		};
		global_webSocket.onopen = function (_0x365E)
		{
			_0x5AF5(_0x365E)
		};
		global_webSocket.onclose = function (_0x365E)
		{
			_0x5A9E(_0x365E)
		};
		global_webSocket.onmessage = function (_0x365E)
		{
			_0x5AD8(_0x365E)
		};

		function _0x5AD8(_0x365E)
		{
			serverCommand(_0x365E.data)
		}

		function _0x5AF5(_0x365E)
		{}

		function _0x5A9E(_0x365E)
		{}

		function _0x5ABB(_0x365E)
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
String.prototype.includes = function (_0x3641)
{
	var _0x3624 = false;
	if (this.indexOf(_0x3641) !== -1)
	{
		_0x3624 = true
	};
	return _0x3624
};
global_loadedFirstItemsFlag = false;

function serverCommand(_0x3746)
{
	var _0x39C4 = _0x3746;
	if (_0x39C4.includes("="))
	{
		var _0x3763 = _0x3746.split("=");
		var _0x753D = _0x3746.split("=").slice(1).join("=").split("~");
		_0x39C4 = _0x3763[0]
	};
	switch (_0x39C4)
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
		setItems(_0x3746.substr(_0x39C4.length + 1));
		global_setItemsTickCount++;
		if (!global_loadedFirstItemsFlag)
		{
			global_loadedFirstItemsFlag = true;
			setTimeout(loadItemBoxes(), 100);
			sendBytes("LOAD_OBJECTS")
		};
		break;
	case "DIALOGUE_CHEF_SPICES":
		openDialogueSpices();
		break;
	case "LOAD_FOOD_OBJECTS":
		objects_loadFood(_0x3746.substr(18));
		break;
	case "FORCE_REFRESH_TRADABLES":
		sendBytes("REFRESH_TRADABLES");
		break;
	case "LOAD_MACHINERY_OBJECTS":
		objects_loadMachinery(_0x3746.substr(23));
		break;
	case "LOAD_SHOP_OBJECTS":
		objects_loadShopPrices(_0x3746.substr(18));
		break;
	case "OPEN_DONOR_PAGE":
		clicksDonorShopItem("buyDonorCoins");
		break;
	case "REFRESH_TRADABLES":
		refreshTradables(_0x3746.substr(18));
		break;
	case "JS_ALERT":
		alert(_0x3746.substr(9));
		break;
	case "REFESH_MARKET":
		refreshMarket(_0x3746.substr(14));
		refreshMarketGUI();
		populateMarketTable();
		displayMarket(true);
		break;
	case "COMPLETE_CEMETERY_TOMBS":
		completeCemeteryTombs();
		break;
	case "LOAD_SEED_OBJECTS":
		objects_loadSeeds(_0x3746.substr(18));
		break;
	case "LOAD_STARDUST_TOOL_CONVERSION":
		objects_loadStardustTools(_0x3746.substr(30));
		break;
	case "RELOAD":
		setTimeout(function ()
		{
			location.reload()
		}, parseInt(_0x3746.substr(7)));
		break;
	case "LOAD_EQUIPMENT_OBJECTS":
		objects_loadEquipment(_0x3746.substr(23));
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
	case "SET_LOCAL_STORAGE":
		localStorage.setItem(_0x753D[0], _0x753D[1]);
		break;
	case "REFRESH_MARKET_HISTORY":
		refreshMarketHistory(_0x3746.substr(23));
		break;
	case "SET_INNER_HTML":
		setInnerHTML(_0x753D[0], _0x753D[1]);
		break;
	case "EXPLORER_MESSAGE":
		setTimeout(function ()
		{
			confirmDialogue("images/explorer.png", "Pssst. Come talk to me.<br /><br /><span style=\'color:grey\'>Explorer added to combat section.</span>", "Close", "", "")
		}, 4000);
		break;
	case "CONFIRM_DIALOGUE":
		returnCommand = _0x753D[4];
		if (_0x753D.length > 5)
		{
			returnCommand = "";
			for (var _0x3607 = 4; _0x3607 < _0x753D.length; _0x3607++)
			{
				returnCommand += "~" + _0x753D[_0x3607]
			};
			returnCommand = returnCommand.substr(1)
		};
		confirmDialogue(_0x753D[0], _0x753D[1], _0x753D[2], _0x753D[3], returnCommand);
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
			scrollText(_0x753D[0], _0x753D[1], _0x753D[2])
		}, parseInt(_0x753D[3]));
		break;
	case "QUEST_OPTIONS":
		openQuestDialogue(_0x753D[0], _0x753D[1], _0x753D[2], _0x753D[3], _0x753D[4], _0x753D[5], _0x753D[6], _0x753D[7], _0x753D[8], _0x753D[9], _0x753D[10], _0x753D[11]);
		break;
	case "LEVEL_UP":
		levelUp(_0x753D[0], _0x753D[1]);
		break;
	case "LOOT_DIALOGUE":
		lootDialogue(_0x3746.substr(14));
		break;
	case "NAVIGATE":
		navigate(_0x3746.substr(9));
		break;
	case "HIT_SPLAT":
		addHitSplit(_0x3746.substr(10));
		break;
	case "CSS":
		setCSSFromServer(_0x753D[0], _0x753D[1], _0x753D[2], _0x753D[3]);
		break;
	case "SET_GLOBAL_VAR":
		window[_0x753D[0]] = _0x753D[1];
		break;
	case "START_MONSTER_ANIMATION":
		startMonsterAnimation(_0x3746.substr(24));
		break;
	case "START_HERO_ANIMATION":
		startHeroAnimation(_0x3746.substr(21));
		break;
	case "RELEASE_FARADOX":
		dimScreen("release_faradox", true);
		break;
	case "FARADOX_MINION2_DEAD":
		dimScreen("release_faradox_2", true);
		break;
	case "COMBAT_TUTORIAL":
		combatTutorial(_0x3746.substr(16));
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
		refreshTreeListTab(_0x3746.substr(22));
		break;
	case "REFRESH_COMBAT_LOGGER":
		refreshCombatLogger(_0x3746.substr(22));
		break;
	case "REFRESH_LOOT_BAGS_LOGGER":
		refreshLootBagsLogger(_0x3746.substr(25));
		break;
	case "REFRESH_TRANSFORM_LOGGER":
		refreshTransferLogger(_0x3746.substr(25));
		break;
	case "CONVERT_GUEST_ERROR":
		displayConvertGuestError(_0x3746.substr(20));
		break;
	case "CONVERT_GUEST_ERROR":
		displayConvertGuestError(_0x3746.substr(20));
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
		chat(_0x3746.substr(5));
		break;
	case "REFRESH_MUTE_LIST":
		loadMuteList(_0x3746.substr(18));
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

function refreshLootBagsLogger(_0x3746)
{
	document.getElementById("lootBags-log-section").innerHTML = _0x3746
}

function refreshCombatLogger(_0x3746)
{
	document.getElementById("combat-combatLog-section").innerHTML = _0x3746
}

function refreshTransferLogger(_0x3746)
{
	document.getElementById("transformLog-section").innerHTML = _0x3746
}

function getSkillLevel(_0x56FE)
{
	return getLevel(getItem(_0x56FE + "Xp"))
}
global_oreLevels = [];

function Ore(_0x4ED6, _0x3F8B)
{
	this.name = _0x4ED6;
	this.level = _0x3F8B
}

function addItemBoxOreToMine(_0x3B03, _0x3B20, _0x3AE6)
{
	var _0x3AAC = "";
	var _0x3AC9 = getImage("images/" + _0x3B03 + ".png", "addItemBoxOreToMine_" + _0x3B03);
	_0x3AAC += "<div onclick=\'clicksOreToMine(\"" + _0x3B03 + "\")\' class=\'div-add-ore-to-mine\' class=\'mining-ore-to-mine-box\'>";
	_0x3AAC += "<table class=\'table-add-ore-to-mine\' width=\'100%\'>";
	_0x3AAC += "<tr>";
	_0x3AAC += "<td style=\'font-size:22pt\'>" + _0x3B20 + "</td>";
	_0x3AAC += "</tr>";
	_0x3AAC += "<tr>";
	_0x3AAC += "<td>";
	if (getSkillLevel("mining") < _0x3AE6)
	{
		_0x3AAC += "<img src=\'images/x.png\' class=\'img-150\' style=\'z-index:1;position:absolute;\' />"
	};
	_0x3AAC += "<img src=\'" + _0x3AC9.src + "\' class=\'img-150\' />";
	_0x3AAC += "</td>";
	_0x3AAC += "</tr>";
	_0x3AAC += "<tr>";
	if (getSkillLevel("mining") < _0x3AE6)
	{
		_0x3AAC += "<td style=\'color:red\'>Level " + _0x3AE6 + " Mining</td>"
	};
	_0x3AAC += "<td style=\"height:50px;\" id=\"" + _0x3B03 + "-mining-assigned-td\"></td>";
	_0x3AAC += "</tr>";
	_0x3AAC += "</table>";
	_0x3AAC += "</div>";
	$("#item-section-ore-to-mine-1").append(_0x3AAC);
	global_oreLevels[_0x3B03] = new Ore(_0x3B03, _0x3AE6)
}

function combatTutorial(_0x4178)
{
	if (_0x4178 == "1")
	{
		document.getElementById("back-button-fighting").style.display = "none";
		changeBodyBackground("images/cemetery_background.png");
		setTimeout(function ()
		{
			confirmDialogue("images/combatSkill.png", "Welcome to the Combat interface.", "Continue", "", "COMBAT_TUTORIAL_" + _0x4178)
		}, 2000)
	};
	if (_0x4178 == "2")
	{
		document.getElementById("combat-fight-hint-1").style.display = ""
	};
	if (_0x4178 == "3")
	{
		document.getElementById("combat-fight-hint-1").style.display = "none";
		document.getElementById("combat-fight-hint-2").style.display = ""
	};
	if (_0x4178 == "4")
	{
		document.getElementById("combat-fight-hint-2").style.display = "none";
		document.getElementById("combat-fight-hint-3").style.display = ""
	};
	if (_0x4178 == "5")
	{
		document.getElementById("main-panel").style.display = "none";
		document.getElementById("navigation-area-buttons").style.display = "none";
		document.getElementById("chat-area").style.display = "none";
		document.getElementById("combat-fight-hint-5").style.display = ""
	};
	if (_0x4178 == "6")
	{
		document.getElementById("main-panel").style.display = "";
		document.getElementById("navigation-area-buttons").style.display = "";
		document.getElementById("chat-area").style.display = "";
		document.getElementById("combat-fight-hint-5").style.display = "none";
		document.getElementById("notification-hint").style.display = ""
	}
}

function getImageExtention(_0x3933)
{
	switch (_0x3933)
	{
	case "darkCrystal":
		;
	case "bloodDiamond":
		return ".gif";
	default:
		return ".png"
	}
}

function refreshMiningAllocationIcons()
{
	if (loaded_loadMiningOreBoxes)
	{
		var _0x6CA1 = "";
		var _0x6CBE = "";
		_0x6CA1 = "stone";
		document.getElementById(_0x6CA1 + "-mining-assigned-td").innerHTML = "";
		for (var _0x3607 = 0; _0x3607 < 5; _0x3607++)
		{
			_0x6CBE = "miner";
			if (getItem(_0x6CBE + "Allocation" + _0x3607) == _0x6CA1)
			{
				var _0x3AC9 = getImage("images/" + _0x6CBE + ".gif", "refreshMiningAllocationIcons_" + _0x6CA1 + "_" + _0x6CBE + "_" + _0x3607);
				_0x3AC9.setAttribute("class", "img-50");
				document.getElementById(_0x6CA1 + "-mining-assigned-td").append(_0x3AC9)
			};
			_0x6CBE = "drills";
			if (getItem(_0x6CBE + "Allocation" + _0x3607) == _0x6CA1)
			{
				var _0x3AC9 = getImage("images/" + _0x6CBE + ".gif", "refreshMiningAllocationIcons_" + _0x6CA1 + "_" + _0x6CBE + "_" + _0x3607);
				_0x3AC9.setAttribute("class", "img-50");
				document.getElementById(_0x6CA1 + "-mining-assigned-td").append(_0x3AC9)
			};
			_0x6CBE = "crushers";
			if (getItem(_0x6CBE + "Allocation" + _0x3607) == _0x6CA1)
			{
				var _0x3AC9 = getImage("images/" + _0x6CBE + ".gif", "refreshMiningAllocationIcons_" + _0x6CA1 + "_" + _0x6CBE + "_" + _0x3607);
				_0x3AC9.setAttribute("class", "img-50");
				document.getElementById(_0x6CA1 + "-mining-assigned-td").append(_0x3AC9)
			};
			_0x6CBE = "giantDrills";
			if (getItem(_0x6CBE + "Allocation" + _0x3607) == _0x6CA1)
			{
				var _0x3AC9 = getImage("images/" + _0x6CBE + ".gif", "refreshMiningAllocationIcons_" + _0x6CA1 + "_" + _0x6CBE + "_" + _0x3607);
				_0x3AC9.setAttribute("class", "img-50");
				document.getElementById(_0x6CA1 + "-mining-assigned-td").append(_0x3AC9)
			};
			_0x6CBE = "excavators";
			if (getItem(_0x6CBE + "Allocation" + _0x3607) == _0x6CA1)
			{
				var _0x3AC9 = getImage("images/" + _0x6CBE + ".gif", "refreshMiningAllocationIcons_" + _0x6CA1 + "_" + _0x6CBE + "_" + _0x3607);
				_0x3AC9.setAttribute("class", "img-50");
				document.getElementById(_0x6CA1 + "-mining-assigned-td").append(_0x3AC9)
			}
		};
		_0x6CA1 = "copper";
		document.getElementById(_0x6CA1 + "-mining-assigned-td").innerHTML = "";
		for (var _0x3607 = 0; _0x3607 < 5; _0x3607++)
		{
			_0x6CBE = "miner";
			if (getItem(_0x6CBE + "Allocation" + _0x3607) == _0x6CA1)
			{
				var _0x3AC9 = getImage("images/" + _0x6CBE + ".gif", "refreshMiningAllocationIcons_" + _0x6CA1 + "_" + _0x6CBE + "_" + _0x3607);
				_0x3AC9.setAttribute("class", "img-50");
				document.getElementById(_0x6CA1 + "-mining-assigned-td").append(_0x3AC9)
			};
			_0x6CBE = "drills";
			if (getItem(_0x6CBE + "Allocation" + _0x3607) == _0x6CA1)
			{
				var _0x3AC9 = getImage("images/" + _0x6CBE + ".gif", "refreshMiningAllocationIcons_" + _0x6CA1 + "_" + _0x6CBE + "_" + _0x3607);
				_0x3AC9.setAttribute("class", "img-50");
				document.getElementById(_0x6CA1 + "-mining-assigned-td").append(_0x3AC9)
			};
			_0x6CBE = "crushers";
			if (getItem(_0x6CBE + "Allocation" + _0x3607) == _0x6CA1)
			{
				var _0x3AC9 = getImage("images/" + _0x6CBE + ".gif", "refreshMiningAllocationIcons_" + _0x6CA1 + "_" + _0x6CBE + "_" + _0x3607);
				_0x3AC9.setAttribute("class", "img-50");
				document.getElementById(_0x6CA1 + "-mining-assigned-td").append(_0x3AC9)
			};
			_0x6CBE = "giantDrills";
			if (getItem(_0x6CBE + "Allocation" + _0x3607) == _0x6CA1)
			{
				var _0x3AC9 = getImage("images/" + _0x6CBE + ".gif", "refreshMiningAllocationIcons_" + _0x6CA1 + "_" + _0x6CBE + "_" + _0x3607);
				_0x3AC9.setAttribute("class", "img-50");
				document.getElementById(_0x6CA1 + "-mining-assigned-td").append(_0x3AC9)
			};
			_0x6CBE = "excavators";
			if (getItem(_0x6CBE + "Allocation" + _0x3607) == _0x6CA1)
			{
				var _0x3AC9 = getImage("images/" + _0x6CBE + ".gif", "refreshMiningAllocationIcons_" + _0x6CA1 + "_" + _0x6CBE + "_" + _0x3607);
				_0x3AC9.setAttribute("class", "img-50");
				document.getElementById(_0x6CA1 + "-mining-assigned-td").append(_0x3AC9)
			}
		};
		_0x6CA1 = "iron";
		document.getElementById(_0x6CA1 + "-mining-assigned-td").innerHTML = "";
		for (var _0x3607 = 0; _0x3607 < 5; _0x3607++)
		{
			_0x6CBE = "miner";
			if (getItem(_0x6CBE + "Allocation" + _0x3607) == _0x6CA1)
			{
				var _0x3AC9 = getImage("images/" + _0x6CBE + ".gif", "refreshMiningAllocationIcons_" + _0x6CA1 + "_" + _0x6CBE + "_" + _0x3607);
				_0x3AC9.setAttribute("class", "img-50");
				document.getElementById(_0x6CA1 + "-mining-assigned-td").append(_0x3AC9)
			};
			_0x6CBE = "drills";
			if (getItem(_0x6CBE + "Allocation" + _0x3607) == _0x6CA1)
			{
				var _0x3AC9 = getImage("images/" + _0x6CBE + ".gif", "refreshMiningAllocationIcons_" + _0x6CA1 + "_" + _0x6CBE + "_" + _0x3607);
				_0x3AC9.setAttribute("class", "img-50");
				document.getElementById(_0x6CA1 + "-mining-assigned-td").append(_0x3AC9)
			};
			_0x6CBE = "crushers";
			if (getItem(_0x6CBE + "Allocation" + _0x3607) == _0x6CA1)
			{
				var _0x3AC9 = getImage("images/" + _0x6CBE + ".gif", "refreshMiningAllocationIcons_" + _0x6CA1 + "_" + _0x6CBE + "_" + _0x3607);
				_0x3AC9.setAttribute("class", "img-50");
				document.getElementById(_0x6CA1 + "-mining-assigned-td").append(_0x3AC9)
			};
			_0x6CBE = "giantDrills";
			if (getItem(_0x6CBE + "Allocation" + _0x3607) == _0x6CA1)
			{
				var _0x3AC9 = getImage("images/" + _0x6CBE + ".gif", "refreshMiningAllocationIcons_" + _0x6CA1 + "_" + _0x6CBE + "_" + _0x3607);
				_0x3AC9.setAttribute("class", "img-50");
				document.getElementById(_0x6CA1 + "-mining-assigned-td").append(_0x3AC9)
			};
			_0x6CBE = "excavators";
			if (getItem(_0x6CBE + "Allocation" + _0x3607) == _0x6CA1)
			{
				var _0x3AC9 = getImage("images/" + _0x6CBE + ".gif", "refreshMiningAllocationIcons_" + _0x6CA1 + "_" + _0x6CBE + "_" + _0x3607);
				_0x3AC9.setAttribute("class", "img-50");
				document.getElementById(_0x6CA1 + "-mining-assigned-td").append(_0x3AC9)
			}
		};
		_0x6CA1 = "silver";
		document.getElementById(_0x6CA1 + "-mining-assigned-td").innerHTML = "";
		for (var _0x3607 = 0; _0x3607 < 5; _0x3607++)
		{
			_0x6CBE = "miner";
			if (getItem(_0x6CBE + "Allocation" + _0x3607) == _0x6CA1)
			{
				var _0x3AC9 = getImage("images/" + _0x6CBE + ".gif", "refreshMiningAllocationIcons_" + _0x6CA1 + "_" + _0x6CBE + "_" + _0x3607);
				_0x3AC9.setAttribute("class", "img-50");
				document.getElementById(_0x6CA1 + "-mining-assigned-td").append(_0x3AC9)
			};
			_0x6CBE = "drills";
			if (getItem(_0x6CBE + "Allocation" + _0x3607) == _0x6CA1)
			{
				var _0x3AC9 = getImage("images/" + _0x6CBE + ".gif", "refreshMiningAllocationIcons_" + _0x6CA1 + "_" + _0x6CBE + "_" + _0x3607);
				_0x3AC9.setAttribute("class", "img-50");
				document.getElementById(_0x6CA1 + "-mining-assigned-td").append(_0x3AC9)
			};
			_0x6CBE = "crushers";
			if (getItem(_0x6CBE + "Allocation" + _0x3607) == _0x6CA1)
			{
				var _0x3AC9 = getImage("images/" + _0x6CBE + ".gif", "refreshMiningAllocationIcons_" + _0x6CA1 + "_" + _0x6CBE + "_" + _0x3607);
				_0x3AC9.setAttribute("class", "img-50");
				document.getElementById(_0x6CA1 + "-mining-assigned-td").append(_0x3AC9)
			};
			_0x6CBE = "giantDrills";
			if (getItem(_0x6CBE + "Allocation" + _0x3607) == _0x6CA1)
			{
				var _0x3AC9 = getImage("images/" + _0x6CBE + ".gif", "refreshMiningAllocationIcons_" + _0x6CA1 + "_" + _0x6CBE + "_" + _0x3607);
				_0x3AC9.setAttribute("class", "img-50");
				document.getElementById(_0x6CA1 + "-mining-assigned-td").append(_0x3AC9)
			};
			_0x6CBE = "excavators";
			if (getItem(_0x6CBE + "Allocation" + _0x3607) == _0x6CA1)
			{
				var _0x3AC9 = getImage("images/" + _0x6CBE + ".gif", "refreshMiningAllocationIcons_" + _0x6CA1 + "_" + _0x6CBE + "_" + _0x3607);
				_0x3AC9.setAttribute("class", "img-50");
				document.getElementById(_0x6CA1 + "-mining-assigned-td").append(_0x3AC9)
			}
		};
		_0x6CA1 = "gold";
		document.getElementById(_0x6CA1 + "-mining-assigned-td").innerHTML = "";
		for (var _0x3607 = 0; _0x3607 < 5; _0x3607++)
		{
			_0x6CBE = "miner";
			if (getItem(_0x6CBE + "Allocation" + _0x3607) == _0x6CA1)
			{
				var _0x3AC9 = getImage("images/" + _0x6CBE + ".gif", "refreshMiningAllocationIcons_" + _0x6CA1 + "_" + _0x6CBE + "_" + _0x3607);
				_0x3AC9.setAttribute("class", "img-50");
				document.getElementById(_0x6CA1 + "-mining-assigned-td").append(_0x3AC9)
			};
			_0x6CBE = "drills";
			if (getItem(_0x6CBE + "Allocation" + _0x3607) == _0x6CA1)
			{
				var _0x3AC9 = getImage("images/" + _0x6CBE + ".gif", "refreshMiningAllocationIcons_" + _0x6CA1 + "_" + _0x6CBE + "_" + _0x3607);
				_0x3AC9.setAttribute("class", "img-50");
				document.getElementById(_0x6CA1 + "-mining-assigned-td").append(_0x3AC9)
			};
			_0x6CBE = "crushers";
			if (getItem(_0x6CBE + "Allocation" + _0x3607) == _0x6CA1)
			{
				var _0x3AC9 = getImage("images/" + _0x6CBE + ".gif", "refreshMiningAllocationIcons_" + _0x6CA1 + "_" + _0x6CBE + "_" + _0x3607);
				_0x3AC9.setAttribute("class", "img-50");
				document.getElementById(_0x6CA1 + "-mining-assigned-td").append(_0x3AC9)
			};
			_0x6CBE = "giantDrills";
			if (getItem(_0x6CBE + "Allocation" + _0x3607) == _0x6CA1)
			{
				var _0x3AC9 = getImage("images/" + _0x6CBE + ".gif", "refreshMiningAllocationIcons_" + _0x6CA1 + "_" + _0x6CBE + "_" + _0x3607);
				_0x3AC9.setAttribute("class", "img-50");
				document.getElementById(_0x6CA1 + "-mining-assigned-td").append(_0x3AC9)
			};
			_0x6CBE = "excavators";
			if (getItem(_0x6CBE + "Allocation" + _0x3607) == _0x6CA1)
			{
				var _0x3AC9 = getImage("images/" + _0x6CBE + ".gif", "refreshMiningAllocationIcons_" + _0x6CA1 + "_" + _0x6CBE + "_" + _0x3607);
				_0x3AC9.setAttribute("class", "img-50");
				document.getElementById(_0x6CA1 + "-mining-assigned-td").append(_0x3AC9)
			}
		};
		_0x6CA1 = "promethium";
		document.getElementById(_0x6CA1 + "-mining-assigned-td").innerHTML = "";
		for (var _0x3607 = 0; _0x3607 < 5; _0x3607++)
		{
			_0x6CBE = "miner";
			if (getItem(_0x6CBE + "Allocation" + _0x3607) == _0x6CA1)
			{
				var _0x3AC9 = getImage("images/" + _0x6CBE + ".gif", "refreshMiningAllocationIcons_" + _0x6CA1 + "_" + _0x6CBE + "_" + _0x3607);
				_0x3AC9.setAttribute("class", "img-50");
				document.getElementById(_0x6CA1 + "-mining-assigned-td").append(_0x3AC9)
			};
			_0x6CBE = "drills";
			if (getItem(_0x6CBE + "Allocation" + _0x3607) == _0x6CA1)
			{
				var _0x3AC9 = getImage("images/" + _0x6CBE + ".gif", "refreshMiningAllocationIcons_" + _0x6CA1 + "_" + _0x6CBE + "_" + _0x3607);
				_0x3AC9.setAttribute("class", "img-50");
				document.getElementById(_0x6CA1 + "-mining-assigned-td").append(_0x3AC9)
			};
			_0x6CBE = "crushers";
			if (getItem(_0x6CBE + "Allocation" + _0x3607) == _0x6CA1)
			{
				var _0x3AC9 = getImage("images/" + _0x6CBE + ".gif", "refreshMiningAllocationIcons_" + _0x6CA1 + "_" + _0x6CBE + "_" + _0x3607);
				_0x3AC9.setAttribute("class", "img-50");
				document.getElementById(_0x6CA1 + "-mining-assigned-td").append(_0x3AC9)
			};
			_0x6CBE = "giantDrills";
			if (getItem(_0x6CBE + "Allocation" + _0x3607) == _0x6CA1)
			{
				var _0x3AC9 = getImage("images/" + _0x6CBE + ".gif", "refreshMiningAllocationIcons_" + _0x6CA1 + "_" + _0x6CBE + "_" + _0x3607);
				_0x3AC9.setAttribute("class", "img-50");
				document.getElementById(_0x6CA1 + "-mining-assigned-td").append(_0x3AC9)
			};
			_0x6CBE = "excavators";
			if (getItem(_0x6CBE + "Allocation" + _0x3607) == _0x6CA1)
			{
				var _0x3AC9 = getImage("images/" + _0x6CBE + ".gif", "refreshMiningAllocationIcons_" + _0x6CA1 + "_" + _0x6CBE + "_" + _0x3607);
				_0x3AC9.setAttribute("class", "img-50");
				document.getElementById(_0x6CA1 + "-mining-assigned-td").append(_0x3AC9)
			}
		};
		_0x6CA1 = "titanium";
		document.getElementById(_0x6CA1 + "-mining-assigned-td").innerHTML = "";
		for (var _0x3607 = 0; _0x3607 < 5; _0x3607++)
		{
			_0x6CBE = "miner";
			if (getItem(_0x6CBE + "Allocation" + _0x3607) == _0x6CA1)
			{
				var _0x3AC9 = getImage("images/" + _0x6CBE + ".gif", "refreshMiningAllocationIcons_" + _0x6CA1 + "_" + _0x6CBE + "_" + _0x3607);
				_0x3AC9.setAttribute("class", "img-50");
				document.getElementById(_0x6CA1 + "-mining-assigned-td").append(_0x3AC9)
			};
			_0x6CBE = "drills";
			if (getItem(_0x6CBE + "Allocation" + _0x3607) == _0x6CA1)
			{
				var _0x3AC9 = getImage("images/" + _0x6CBE + ".gif", "refreshMiningAllocationIcons_" + _0x6CA1 + "_" + _0x6CBE + "_" + _0x3607);
				_0x3AC9.setAttribute("class", "img-50");
				document.getElementById(_0x6CA1 + "-mining-assigned-td").append(_0x3AC9)
			};
			_0x6CBE = "crushers";
			if (getItem(_0x6CBE + "Allocation" + _0x3607) == _0x6CA1)
			{
				var _0x3AC9 = getImage("images/" + _0x6CBE + ".gif", "refreshMiningAllocationIcons_" + _0x6CA1 + "_" + _0x6CBE + "_" + _0x3607);
				_0x3AC9.setAttribute("class", "img-50");
				document.getElementById(_0x6CA1 + "-mining-assigned-td").append(_0x3AC9)
			};
			_0x6CBE = "giantDrills";
			if (getItem(_0x6CBE + "Allocation" + _0x3607) == _0x6CA1)
			{
				var _0x3AC9 = getImage("images/" + _0x6CBE + ".gif", "refreshMiningAllocationIcons_" + _0x6CA1 + "_" + _0x6CBE + "_" + _0x3607);
				_0x3AC9.setAttribute("class", "img-50");
				document.getElementById(_0x6CA1 + "-mining-assigned-td").append(_0x3AC9)
			};
			_0x6CBE = "excavators";
			if (getItem(_0x6CBE + "Allocation" + _0x3607) == _0x6CA1)
			{
				var _0x3AC9 = getImage("images/" + _0x6CBE + ".gif", "refreshMiningAllocationIcons_" + _0x6CA1 + "_" + _0x6CBE + "_" + _0x3607);
				_0x3AC9.setAttribute("class", "img-50");
				document.getElementById(_0x6CA1 + "-mining-assigned-td").append(_0x3AC9)
			}
		}
	}
}

function getMiningResourceOperatingNumber(_0x5568)
{
	var _0x554B = 0;
	for (var _0x3607 = 0; _0x3607 < 5; _0x3607++)
	{
		if (getItemString(_0x5568 + "Allocation" + _0x3607) != "none")
		{
			_0x554B++
		}
	};
	return _0x554B
}
global_lastMiningResourceClicked = "none";

function clicksMiningResource(_0x49F7)
{
	var _0x49DA = ["stone", "copper", "iron", "silver", "gold", "promethium", "titanium", "ancient"];
	var _0x41B2 = "";
	if (_0x49F7 == "miner" && getItem("wrench") > 0)
	{
		_0x41B2 += "<div onclick=\"closeDialogue(\'dialogue-confirm\');clicksWrenchDialogue()\" class=\"dialogue-fancy-button-div\">";
		_0x41B2 += "<table width=\"100%\">";
		_0x41B2 += "<tr>";
		_0x41B2 += "<td width=\"120px\"><img src=\"images/wrench.png\" class=\"img-100\" /></td>";
		_0x41B2 += "<td style=\"text-align:right;\"><span style=\"font-size:20pt;color:orange\">WRENCH</span><hr class=\"hr-thin\" /><i style=\"color:grey\">Set up wrench options.</i></td>";
		_0x41B2 += "</tr>";
		_0x41B2 += "</table>";
		_0x41B2 += "</div>"
	};
	_0x41B2 += "<div onclick=\"sendBytes(\'MINING_ALLOCATE_RESET=" + _0x49F7 + "\');closeDialogue(\'dialogue-confirm\')\" class=\"dialogue-fancy-button-div\">";
	_0x41B2 += "<table width=\"100%\">";
	_0x41B2 += "<tr>";
	_0x41B2 += "<td width=\"120px\"><img src=\"images/" + _0x49F7 + "ResetMining.png\" class=\"img-100\" /></td>";
	_0x41B2 += "<td style=\"text-align:right;\"><span style=\"font-size:20pt\">RESET</span><hr class=\"hr-thin\" /><i style=\"color:grey\">Pull back all " + _0x49F7 + " from mining</i></td>";
	_0x41B2 += "</tr>";
	_0x41B2 += "</table>";
	_0x41B2 += "</div>";
	_0x41B2 += "<h4 style=\'text-align:center\'>Total Resources Collected</h4>";
	var _0x49BD = false;
	for (var _0x3607 = 0; _0x3607 < _0x49DA.length; _0x3607++)
	{
		if (getItem(_0x49DA[_0x3607] + capitalizeFirstLetter(_0x49F7)))
		{
			_0x41B2 += "<div style=\'border:1px solid black; background-color:grey;padding:5px 10px;color:white; display:inline-block;margin:10px;\'>" + "<img src=\'images/" + _0x49DA[_0x3607] + ".png\' class=\'img-40\' /> " + formatNumber(getItem(_0x49DA[_0x3607] + capitalizeFirstLetter(_0x49F7))) + "</div>";
			_0x49BD = true
		}
	};
	if (!_0x49BD)
	{
		_0x41B2 += "<i style=\'color:grey;font-size:10pt\'>(none)<br /><br /><b>Close this dialogue and select an ore below to mine.</b></i>"
	};
	confirmDialogue("none", _0x41B2, "Close", "", "")
}

function clicksWrenchDialogue()
{
	var _0x41B2 = "";
	_0x41B2 += "Set your current running mining machinery to automatically be turned on if you reach 0 oil?<br /><br />";
	_0x41B2 += "<span style=\'color:grey;font-size:10pt;\'>If your oil income is in the negative, once it reaches 0, instead of automatically turning off all machines - your miner will turn on a preset of machines that you have set.</span>";
	confirmDialogue("images/wrench.png", _0x41B2, "Set Machines", "Close", "SET_WRENCH")
}

function capitalizeFirstLetter(_0x3641)
{
	return _0x3641.substr(0, 1).toUpperCase() + _0x3641.substr(1)
}

function setCSSFromServer(_0x4F67, _0x7594, _0x7577, _0x755A)
{
	switch (_0x7594)
	{
	case "border":
		document.getElementById(_0x4F67).style.border = _0x7577;
	case "color":
		document.getElementById(_0x4F67).style.color = _0x7577;
	case "display":
		document.getElementById(_0x4F67).style.display = _0x7577
	}
}

function getMiningResourcesOn(_0x47D0)
{
	var _0x5585 = 0;
	for (var _0x3607 = 1; _0x3607 <= 5; _0x3607++)
	{
		if (getItemString(_0x47D0 + "Allocation" + 1) != "none")
		{
			_0x5585++
		}
	};
	return _0x5585
}
global_lastMiningOreClicked = "none";
global_lastMiningResourceClickedAvailable = [];

function clicksOreToMine(_0x3B03)
{
	global_lastMiningOreClicked = _0x3B03;
	if (global_lastMiningResourceClicked == "none")
	{
		if (global_oreLevels[_0x3B03].level > getLevel(getItem("miningXp")))
		{
			confirmDialogue("images/x.png", "You need a mining level of " + global_oreLevels[_0x3B03].level + " to mine " + _0x3B03 + "<br /><br /><i style=\'color:grey;font-size:14pt\'><b>Mining Xp</b> can be gained by using a stardust pickaxe.</i>", "Close", "", "")
		}
		else
		{
			var _0x396D = document.getElementById("dialogue-mining-ore-section");
			var _0x473F = "";
			var _0x41B2 = "";
			_0x473F = "miner";
			if (getItem(_0x473F) > 0)
			{
				global_lastMiningResourceClickedAvailable[_0x473F] = getMinersOrMachineryAvailable(_0x473F);
				document.getElementById("dialogue-mining-ore-" + _0x473F).style.display = "";
				var _0x4A14 = getAllocationAmount(_0x473F, _0x3B03);
				document.getElementById("dialogue-mining-ore-" + _0x473F + "-allocated").innerHTML = _0x4A14
			};
			_0x473F = "drills";
			if (getItem(_0x473F) > 0)
			{
				global_lastMiningResourceClickedAvailable[_0x473F] = getMinersOrMachineryAvailable(_0x473F);
				document.getElementById("dialogue-mining-ore-" + _0x473F).style.display = "";
				var _0x4A14 = getAllocationAmount(_0x473F, _0x3B03);
				document.getElementById("dialogue-mining-ore-" + _0x473F + "-allocated").innerHTML = _0x4A14
			};
			_0x473F = "crushers";
			if (getItem(_0x473F) > 0)
			{
				global_lastMiningResourceClickedAvailable[_0x473F] = getMinersOrMachineryAvailable(_0x473F);
				document.getElementById("dialogue-mining-ore-" + _0x473F).style.display = "";
				var _0x4A14 = getAllocationAmount(_0x473F, _0x3B03);
				document.getElementById("dialogue-mining-ore-" + _0x473F + "-allocated").innerHTML = _0x4A14
			};
			_0x473F = "giantDrills";
			if (getItem(_0x473F) > 0)
			{
				global_lastMiningResourceClickedAvailable[_0x473F] = getMinersOrMachineryAvailable(_0x473F);
				document.getElementById("dialogue-mining-ore-" + _0x473F).style.display = "";
				var _0x4A14 = getAllocationAmount(_0x473F, _0x3B03);
				document.getElementById("dialogue-mining-ore-" + _0x473F + "-allocated").innerHTML = _0x4A14
			};
			_0x473F = "excavators";
			if (getItem(_0x473F) > 0)
			{
				global_lastMiningResourceClickedAvailable[_0x473F] = getMinersOrMachineryAvailable(_0x473F);
				document.getElementById("dialogue-mining-ore-" + _0x473F).style.display = "";
				var _0x4A14 = getAllocationAmount(_0x473F, _0x3B03);
				document.getElementById("dialogue-mining-ore-" + _0x473F + "-allocated").innerHTML = _0x4A14
			};
			openDialogue("dialogue-mining-ore")
		}
	}
	else
	{
		sendBytes("MINING_ALLOCATE=" + global_lastMiningResourceClicked + "~" + _0x3B03)
	}
}

function allocateMinerOrMachinery(_0x4121, _0x40E7)
{
	var _0x4104 = 1;
	if (!_0x40E7)
	{
		_0x4104 = -1
	};
	var _0x40CA = parseInt(document.getElementById("dialogue-mining-ore-" + _0x4121 + "-allocated").innerHTML);
	if (_0x40CA + _0x4104 < 0 && !_0x40E7)
	{
		return
	}
	else
	{
		if (_0x40E7 && global_lastMiningResourceClickedAvailable[_0x4121] == 0)
		{
			return
		}
		else
		{
			global_lastMiningResourceClickedAvailable[_0x4121] += (_0x4104 * -1);
			if (_0x4104 > 0)
			{
				sendBytes("MINING_ALLOCATE=" + _0x4121 + "~" + global_lastMiningOreClicked)
			}
			else
			{
				sendBytes("MINING_DEALLOCATE=" + _0x4121 + "~" + global_lastMiningOreClicked)
			};
			document.getElementById("dialogue-mining-ore-" + _0x4121 + "-allocated").innerHTML = _0x40CA + _0x4104
		}
	}
}

function getMinersOrMachineryAvailable(_0x4121)
{
	var _0x44C1 = 0;
	for (var _0x3607 = 0; _0x3607 < getItem(_0x4121); _0x3607++)
	{
		if (getItemString(_0x4121 + "Allocation" + _0x3607) == "none")
		{
			_0x44C1++
		}
	};
	return _0x44C1
}

function getAllocationAmount(_0x4121, _0x3B03)
{
	var _0x44C1 = 0;
	for (var _0x3607 = 0; _0x3607 < 5; _0x3607++)
	{
		if (getItem(_0x4121 + "Allocation" + _0x3607) == _0x3B03)
		{
			_0x44C1++
		}
	};
	return _0x44C1
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
	var _0x6B7F = 0;
	if (getItem("greenCrystalUsed") > 0)
	{
		_0x6B7F++
	};
	if (getItem("cyanCrystalUsed") > 0)
	{
		_0x6B7F++
	};
	if (getItem("redCrystalUsed") > 0)
	{
		_0x6B7F++
	};
	if (getItem("blueCrystalUsed") > 0)
	{
		_0x6B7F++
	};
	document.getElementById("darkCrystalUsed-amm").innerHTML = _0x6B7F
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

function sanitize(_0x74AC)
{
	const _0x7472 = {
		'&': "&amp;"
		, '<': "&lt;"
		, '>': "&gt;"
		, '\"': "&quot;"
		, "\'": "&#x27;"
		, "/": "&#47;"
	};
	const _0x748F = /[&<>"'/]/ig;
	return _0x74AC.replace(_0x748F, (_0x74C9) => (_0x7472[_0x74C9]))
}

function removeChars(_0x73E1)
{
	return _0x73E1.replace(/[^\x00-\x7F]/g, "")
}
global_autoscrollChat = true;

function setAutoScroll(_0x44A4)
{
	global_autoscrollChat = _0x44A4;
	if (global_autoscrollChat)
	{
		document.getElementById("chat-autoscroll-button-check").src = "images/check.png";
		var _0x4600 = document.getElementById("chat-area-view");
		$(_0x4600).scrollTop($(_0x4600)[0].scrollHeight)
	}
	else
	{
		document.getElementById("chat-autoscroll-button-check").src = "images/x.png"
	}
}

function chat(_0x3746)
{
	var _0x3763 = _0x3746.split("~");
	var _0x4705 = _0x3763[0];
	var _0x46AE = _0x3763[1];
	var _0x4657 = _0x3763[2];
	var _0x461D = _0x3763[3];
	var _0x4691 = _0x3763[4];
	var _0x37BA = _0x3763[5];
	var _0x463A = "";
	if (_0x461D != "none")
	{
		_0x463A = " <img src=\'images/" + _0x461D + ".png\' style=\'vertical-align:middle\' width=\'30px\' height=\'30px\' /> "
	};
	var _0x4674 = "";
	var _0x46E8 = "";
	if (_0x4657 != "none")
	{
		tagTitle = _0x4657;
		switch (_0x4657)
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
		_0x4674 = " <span class=\'chat-tag-" + _0x4657 + "\'>" + tagTitle + "</span> ";
		switch (_0x4657)
		{
		case "Dev":
			_0x46E8 = "style=\'color:#808000\'";
			break;
		case "Financier":
			_0x46E8 = "style=\'color:#007a99\'";
			break;
		case "Investor":
			_0x46E8 = "style=\'color:#cc66ff\'";
			break;
		case "InvestorPlus":
			_0x46E8 = "style=\'color:#00a3cc\'";
			break;
		case "Moderator":
			_0x46E8 = "style=\'color:grey;\'";
			break;
		case "yell":
			_0x46E8 = "style=\'color:blue;\'";
			break
		}
	};
	var _0x46CB = _0x4691.split(" ");
	msg = "";
	for (var _0x3607 = 0; _0x3607 < _0x46CB.length; _0x3607++)
	{
		if (isValidURL(_0x46CB[_0x3607]))
		{
			msg += convertStringToURL(_0x46CB[_0x3607]) + " "
		}
		else
		{
			msg += sanitize(_0x46CB[_0x3607]) + " "
		}
	};
	_0x4691 = removeChars(msg);
	if (_0x37BA == "error")
	{
		htmlOutput = "<span style=\'color:grey\'>" + _0x4691 + "</span>"
	}
	else
	{
		if (_0x37BA == "pm_from")
		{
			_0x46E8 = "style=\'color:purple\'";
			htmlOutput = "<span style=\'color:grey\'>" + getTimeFetch() + "</span>" + _0x463A + _0x4674 + "<span " + _0x46E8 + "> [PM from " + _0x4705 + "] " + _0x4691 + "</span>"
		}
		else
		{
			if (_0x37BA == "pm_to")
			{
				_0x46E8 = "style=\'color:purple\'";
				htmlOutput = "<span style=\'color:grey\'>" + getTimeFetch() + "</span>" + _0x463A + _0x4674 + "<span " + _0x46E8 + "> [Sent to " + _0x4705 + "] " + _0x4691 + "</span>"
			}
			else
			{
				if (_0x4657 == "yell")
				{
					htmlOutput = "<span style=\'color:grey\'>" + getTimeFetch() + "</span>" + _0x463A + _0x4674 + "<span " + _0x46E8 + "><b>" + _0x4691 + "</b></span>"
				}
				else
				{
					if (_0x4657 == "Investor")
					{
						htmlOutput = "<span style=\'color:grey\'>" + getTimeFetch() + "</span>" + _0x463A + "<img src=\'images/investor.gif\' style=\'vertical-align:middle;\'  /> " + "<span " + _0x46E8 + "><b>" + _0x4705 + " (" + _0x46AE + "): </b>" + _0x4691 + "</span>"
					}
					else
					{
						if (_0x4657 == "InvestorPlus")
						{
							htmlOutput = "<span style=\'color:grey\'>" + getTimeFetch() + "</span>" + _0x463A + "<img src=\'images/investorPlus.gif\' style=\'vertical-align:middle;\'  /> " + "<span " + _0x46E8 + "><b>" + _0x4705 + " (" + _0x46AE + "): </b>" + _0x4691 + "</span>"
						}
						else
						{
							htmlOutput = "<span style=\'color:grey\'>" + getTimeFetch() + "</span>" + _0x463A + _0x4674 + "<span " + _0x46E8 + "><b>" + _0x4705 + " (" + _0x46AE + "): </b>" + _0x4691 + "</span>"
						}
					}
				}
			}
		}
	};
	var _0x4600 = document.getElementById("chat-area-view");
	if (_0x4600.innerHTML.length >= 60000)
	{
		_0x4600.innerHTML = _0x4600.innerHTML.substr(30000, _0x4600.innerHTML.length)
	};
	$(_0x4600).append("<div>" + htmlOutput + "</div>");
	if (global_autoscrollChat)
	{
		$(_0x4600).scrollTop($(_0x4600)[0].scrollHeight)
	}
}

function isValidURL(_0x5B12)
{
	if (_0x5B12.indexOf("http") >= 0 || _0x5B12.indexOf("www.") >= 0 || _0x5B12.indexOf(".com") >= 0 || _0x5B12.indexOf(".ca") >= 0 || _0x5B12.indexOf(".co") >= 0 || _0x5B12.indexOf(".net") >= 0 || _0x5B12.indexOf(".us") >= 0)
	{
		if (_0x5B12.indexOf("%22") >= 0 || _0x5B12.indexOf("%27") >= 0 || _0x5B12.indexOf("%3E") >= 0 || _0x5B12.indexOf("%3C") >= 0 || _0x5B12.indexOf("&#62;") >= 0 || _0x5B12.indexOf("&#60;") >= 0 || _0x5B12.indexOf(";") >= 0 || _0x5B12.indexOf("~") >= 0 || _0x5B12.indexOf("\"") >= 0 || _0x5B12.indexOf("<") >= 0 || _0x5B12.indexOf(">") >= 0 || _0x5B12.indexOf("javascript:") >= 0 || _0x5B12.indexOf("window") >= 0 || _0x5B12.indexOf("document") >= 0 || _0x5B12.indexOf("cookie") >= 0)
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

function convertStringToURL(_0x3641)
{
	if (!_0x3641.startsWith("http"))
	{
		_0x3641 = "http://" + _0x3641
	};
	var _0x4CAF = "<a onclick=\'return clicksLink();\' href=\'" + _0x3641 + "\' target=\'_blank\'>" + _0x3641 + "</a>";
	return _0x4CAF
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

function getTimeFetch()
{
	var _0x511A = new Date();
	if (_0x511A.getHours() < 10)
	{
		var _0x5738 = "0" + _0x511A.getHours()
	}
	else
	{
		var _0x5738 = _0x511A.getHours()
	};
	if (_0x511A.getMinutes() < 10)
	{
		var _0x5755 = "0" + _0x511A.getMinutes()
	}
	else
	{
		var _0x5755 = _0x511A.getMinutes()
	};
	var _0x571B = "[" + _0x5738 + ":" + _0x5755 + "] ";
	return _0x571B
}

function chatInput(_0x365E)
{
	if (_0x365E.keyCode == 13)
	{
		chatSend()
	};
	if (_0x365E.keyCode == 9)
	{
		if (getItemString("lastPM") != "none" && document.getElementById("chat-area-input").value.length == 0)
		{
			document.getElementById("chat-area-input").value = "/pm " + getItemString("lastPM") + " "
		};
		_0x365E.preventDefault()
	}
}

function chatSend()
{
	sendBytes("CHAT=" + document.getElementById("chat-area-input").value.replace(/~/g, " "));
	document.getElementById("chat-area-input").value = ""
}

function changeChatHeight(_0x446A)
{
	var _0x4487 = parseInt(document.getElementById("chat-area-view").style.height);
	_0x4487 += _0x446A;
	document.getElementById("chat-area-view").style.height = _0x4487 + "px"
}

function refreshHomeTab()
{
	if (getItem("homeHint") == 0)
	{
		sendBytes("HOME_HINT_OFF")
	}
}
var clientSetItesmTick = 0;

function setItems(_0x3746)
{
	clientSetItesmTick++;
	var _0x3763 = _0x3746.split("~");
	var _0x767C = [];
	for (var _0x3607 = 0; _0x3607 < _0x3763.length; _0x3607++)
	{
		var _0x3933 = _0x3763[_0x3607];
		_0x3607++;
		var _0x7699 = _0x3763[_0x3607];
		var _0x76D3 = getItem(_0x3933);
		setItem(_0x3933, _0x7699);
		if (_0x76D3 != _0x7699 || clientSetItesmTick <= 3)
		{
			_0x767C.push(_0x3933)
		};
		if (document.getElementById("item-box-" + _0x3933) !== null)
		{
			if (getItem(_0x3933, false) > 0)
			{
				if (document.getElementById("item-box-" + _0x3933).style.display == "none")
				{
					document.getElementById("item-box-" + _0x3933).style.display = ""
				}
			}
			else
			{
				if (document.getElementById("item-box-" + _0x3933).style.display != "none")
				{
					document.getElementById("item-box-" + _0x3933).style.display = "none"
				}
			}
		};
		var _0x765F = document.getElementsByTagName("item-" + _0x3933);
		for (var _0x76B6 = 0; _0x76B6 < _0x765F.length; _0x76B6++)
		{
			if (_0x765F[_0x76B6].hasAttribute("type"))
			{
				if (_0x765F[_0x76B6].getAttribute("type") == "timer")
				{
					_0x765F[_0x76B6].innerHTML = formatTime(_0x7699)
				};
				if (_0x765F[_0x76B6].getAttribute("type") == "number")
				{
					_0x765F[_0x76B6].innerHTML = formatNumber(_0x7699)
				}
			}
			else
			{
				_0x765F[_0x76B6].innerHTML = _0x7699
			}
		}
	};
	for (var _0x3607 = 0; _0x3607 < _0x767C.length; _0x3607++)
	{
		manageChangedItem(_0x767C[_0x3607])
	}
}

function formatNumber(_0x504F)
{
	if (_0x504F == "INF")
	{
		return "<span style=\'font-size:20pt;vertical-align: middle;\'>&#8734;</span>"
	};
	if (isNaN(_0x504F))
	{
		return _0x504F
	};
	var _0x5032 = "";
	if (_0x504F >= 1000000000 && _0x504F < 10000000000)
	{
		_0x504F /= 1000000;
		_0x5032 = "M"
	}
	else
	{
		if (_0x504F >= 10000000000)
		{
			_0x504F /= 1000000000;
			_0x5032 = "B"
		}
	};
	return Math.floor(_0x504F).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "" + _0x5032
}

function manageChangedItem(_0x3933)
{
	var _0x3811 = getItem(_0x3933, false);
	if (_0x3933.endsWith("Allocation0") || _0x3933.endsWith("Allocation1") || _0x3933.endsWith("Allocation2") || _0x3933.endsWith("Allocation3") || _0x3933.endsWith("Allocation4"))
	{
		refreshMiningAllocationIcons()
	};
	if (_0x3811 == -1)
	{
		if (_0x3933.endsWith("Quest"))
		{
			loadQuestAndAchievementsTab()
		}
	};
	if (_0x3933.endsWith("Quest"))
	{
		var _0x5EEC = getQuestsInProgress();
		if (_0x5EEC > 0)
		{
			document.getElementById("notification-questsStarted-label").innerHTML = "In Progress: " + _0x5EEC;
			document.getElementById("notification-questsStarted").style.display = ""
		}
		else
		{
			document.getElementById("notification-questsStarted").style.display = "none"
		};
		if (_0x3933 == "theFrozenBarbarianQuest")
		{
			if (_0x3811 == 1)
			{
				showElement("frozenBarbarianMap")
			}
			else
			{
				hideElement("frozenBarbarianMap")
			}
		}
	};
	if (_0x3933.startsWith("heroDebuff"))
	{
		resetHeroNerfs()
	};
	if (_0x3933.endsWith("Cooldown"))
	{
		if (global_lastTabId == "right-combat-fighting")
		{
			refeshMagicInCombat()
		}
	};
	if (_0x3933.endsWith("Museum"))
	{
		refreshMuseum();
		if (document.getElementById("museum-info-itembox") != null)
		{
			document.getElementById("museum-info-itembox").innerHTML = getMuseumItemsCount()[0] + "/" + getMuseumItemsCount()[1]
		}
	};
	initializeTooltips;
	if (_0x3933.endsWith("Oven") || _0x3933 == "researcherCooking")
	{
		initializeTooltips()
	};
	if (_0x3933.endsWith("Seeds"))
	{
		if (_0x3811 == 0)
		{
			selectedSeed = "none"
		}
	};
	if (_0x3933.endsWith("PotionTimer"))
	{
		if (_0x3811 > 0)
		{
			showElement("notification-" + _0x3933);
			if (document.getElementById("notification" + "-" + _0x3933) != null)
			{
				document.getElementById("notification" + "-" + _0x3933).setAttribute("onclick", "clicksItem(\'" + _0x3933.substr(0, _0x3933.length - 5) + "\')")
			}
		}
		else
		{
			hideElement("notification-" + _0x3933)
		}
	};
	if (_0x3933.endsWith("Bought"))
	{
		loadShopTab()
	};
	if (_0x3933.endsWith("Xp"))
	{
		refreshTopSkillBar()
	};
	if (_0x3933.startsWith("researcher"))
	{
		if (document.getElementById("research-completed-label") != null)
		{
			document.getElementById("research-completed-label").innerHTML = getTotalResearches()
		};
		refreshResearching()
	};
	if (_0x3933.endsWith("Kills"))
	{
		initializeTooltips()
	};
	if (_0x3933.toLowerCase().endsWith("fishingnet") || _0x3933.toLowerCase().endsWith("harpoon") || _0x3933.toLowerCase().endsWith("fishingrod"))
	{
		initializeTooltips()
	};
	switch (_0x3933)
	{
	case "wrench":
		if (_0x3811 > 0)
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
			if (_0x3811 <= 1)
			{
				document.getElementById("chef" + "-itemBox-value").innerHTML = "Ready"
			}
			else
			{
				document.getElementById("chef" + "-itemBox-value").innerHTML = formatTime(_0x3811)
			}
		};
		if (_0x3811 == 0 && getItem("theStewChefQuest") == -1)
		{
			showElement("notification-chefStew")
		}
		else
		{
			hideElement("notification-chefStew")
		};
		break;
	case "oxygenTankTimer":
		;
	case "rowBoatTimer":
		;
	case "canoeBoatTimer":
		var _0x5F09 = _0x3933.substring(0, _0x3933.length - 5);
		if (_0x3811 > 1)
		{
			showElement("notification-" + _0x3933);
			if (document.getElementById(_0x5F09 + "-itemBox-value") != null)
			{
				document.getElementById(_0x5F09 + "-itemBox-value").innerHTML = formatTime(_0x3811)
			};
			hideElement("notification-" + _0x3933 + "-Ready")
		}
		else
		{
			hideElement("notification-" + _0x3933);
			if (_0x3811 == 1)
			{
				if (document.getElementById(_0x5F09 + "-itemBox-value") != null)
				{
					document.getElementById(_0x5F09 + "-itemBox-value").innerHTML = "Ready"
				};
				showElement("notification-" + _0x3933 + "-Ready")
			}
			else
			{
				if (document.getElementById(_0x5F09 + "-itemBox-value") != null)
				{
					document.getElementById(_0x5F09 + "-itemBox-value").innerHTML = ""
				};
				hideElement("notification-" + _0x3933 + "-Ready")
			}
		};
		break;
	case "shinyMonster":
		if (_0x3811 == 1)
		{
			showElement("shiny-monster-gif")
		}
		else
		{
			hideElement("shiny-monster-gif")
		};
		break;
	case "blueFurnaceOrbBound":
		if (_0x3811 > 0)
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
		var _0x5F43 = _0x3933.substr(9);
		if (_0x3811 > 0)
		{
			showElement("plot-section-shiny-" + _0x5F43)
		}
		else
		{
			hideElement("plot-section-shiny-" + _0x5F43)
		};
		break;
	case "repelMonster":
		if (_0x3811 == "none")
		{
			hideElement("notification-repelNotification")
		}
		else
		{
			document.getElementById("repelNotification-monsterImg").src = "images/" + _0x3811 + "_monster_idle_0.png";
			showElement("notification-repelNotification")
		};
		break;
	case "teleportCooldown":
		if (_0x3811 > 0)
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
		if (_0x3811 > 0)
		{
			showElement("notification-treasureMapReady")
		}
		else
		{
			hideElement("notification-treasureMapReady")
		};
		break;
	case "researcherMagic":
		if (_0x3811 >= 3)
		{
			showElement("item-box-convertMagic")
		};
		break;
	case "hardcoreId":
		if (_0x3811 > 0)
		{
			document.getElementById("hardcore-icon-top-left").style.display = ""
		}
		else
		{
			document.getElementById("hardcore-icon-top-left").style.display = "none"
		};
		break;
	case "combatTut":
		if (_0x3811 == 3)
		{
			showElement("notification-hint")
		}
		else
		{
			hideElement("notification-hint")
		};
		if (_0x3811 >= 2)
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
	case "cooldownRing1":
		;
	case "cooldownRing2":
		;
	case "cooldownRing3":
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
				var _0x3AC9 = getImage("images/hourglass.png", "cd_hourglass_hero");
				_0x3AC9.setAttribute("class", "img-30");
				document.getElementById("td-hero-cooldown").append(_0x3AC9);
				var _0x5ECF = document.createElement("item-heroCooldown");
				_0x5ECF.setAttribute("type", "timer");
				document.getElementById("td-hero-cooldown").append(_0x5ECF)
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
		if (_0x3811 > 0)
		{
			changeCombatMap(_0x3811)
		};
		break;
	case "fireFeatherSpawn":
		if (_0x3811 > 0)
		{
			showElement("fireFeatherSpawn-" + _0x3811);
			showElement("notification-fireFeatherSpawnReady")
		}
		else
		{
			hideElement("fireFeatherSpawn-1");
			hideElement("notification-fireFeatherSpawnReady")
		};
		break;
	case "iceFeatherSpawn":
		if (_0x3811 > 0)
		{
			showElement("iceFeatherSpawn-" + _0x3811);
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
		document.getElementById("img-rocket-map").src = "images/rocketMap" + getItem(_0x3933) + ".png";
		break;
	case "updateLogNotification":
		if (_0x3811 > 0)
		{
			document.getElementById("new-updates-gif").style.display = ""
		}
		else
		{
			document.getElementById("new-updates-gif").style.display = "none"
		};
		break;
	case "giantSnakeTimer":
		if (_0x3811 > 0)
		{
			showElement("notification-" + _0x3933)
		}
		else
		{
			hideElement("notification-" + _0x3933)
		};
		break;
	case "heroReadyNotification":
		;
	case "woodcuttingReadyNotification":
		;
	case "farmingReadyNotification":
		;
	case "updateTimer":
		if (_0x3811 > 0)
		{
			showElement("notification-" + _0x3933)
		}
		else
		{
			hideElement("notification-" + _0x3933)
		};
		break;
	case "cooksBookTimer":
		if (getItem(_0x3933) > 1)
		{
			showElement("notification-cooksBookTimer")
		}
		else
		{
			if (getItem(_0x3933) == 1)
			{
				hideElement("notification-cooksBookTimer");
				showElement("notification-cooksBookReady")
			}
			else
			{
				if (getItem(_0x3933) == 0)
				{
					hideElement("notification-cooksBookReady");
					hideElement("notification-cooksBookTimer")
				}
			}
		};
		break;
	case "titaniumRocketBoostersAvailable":
		if (_0x3811 > 0)
		{
			showElement("notification-rocketBoost")
		}
		else
		{
			hideElement("notification-rocketBoost")
		};
		break;
	case "rocketKm":
		if (getItem(_0x3933) == 0)
		{
			hideElement("notification-rocket");
			setInnerHTML("itemBox-rocket-amount", "")
		}
		else
		{
			if (getItemString("rocketDestination") == "moon" && getItem(_0x3933) == 384000)
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
						document.getElementById("itemBox-rocket-amount").innerHTML = formatNumber(getItem(_0x3933)) + " KM";
						document.getElementById("notification-rocket-value").innerHTML = formatNumber(getItem(_0x3933)) + " KM";
						document.getElementById("notification-rocket-running").style.display = "none";
						document.getElementById("notification-rocket-landed").style.display = "none";
						document.getElementById("notification-rocket-returning").style.display = ""
					}
					else
					{
						document.getElementById("itemBox-rocket-amount").innerHTML = formatNumber(getItem(_0x3933)) + " KM";
						document.getElementById("notification-rocket-value").innerHTML = formatNumber(getItem(_0x3933)) + " KM";
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
		refreshDarkCrystalUsedLabel();
		refreshFaradoxDarkCrystalTooltip();
		break;
	case "researcherTimer":
		if (_0x3811 == 1)
		{
			document.getElementById("researcher-status-label").innerHTML = "<img src=\'images/" + getItemString("researcherSkill") + "Skill.png\' class=\'img-50\' /> <span onclick=\'sendBytes(\"CLAIM_RESEARCHER\")\' style=\'display:inline-block;border:1px solid green;background-color:black;padding:15px;cursor:pointer;\'>CLAIM <img src=\'images/atom.png\' class=\'img-30\' /></span></i>";
			showElement("notification-researcherReady")
		}
		else
		{
			if (_0x3811 > 1)
			{
				document.getElementById("researcher-status-label").innerHTML = "<img src=\'images/" + getItemString("researcherSkill") + "Skill.png\' class=\'img-50\' /> " + formatTime(_0x3811);
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
		if (_0x3811 == 1)
		{
			showElement("item-box-diamond_verydark")
		}
		else
		{
			if (_0x3811 >= 2 && _0x3811 <= 3)
			{
				hideElement("item-box-diamond_verydark");
				showElement("item-box-gemList2")
			}
			else
			{
				if (_0x3811 >= 4)
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
		if (_0x3811 == 1)
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
		if (_0x3811 > 0)
		{
			unlockTreePatch(_0x3933.substr(12))
		}
		else
		{
			if (_0x3933 == "treeUnlocked5")
			{
				document.getElementById("tree-section-img-5").src = "images/tree_locked_donor.png"
			};
			if (_0x3933 == "treeUnlocked6")
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
		if (_0x3811 > 0)
		{
			unlockPlotPatch(_0x3933.substr(12))
		}
		else
		{
			if (_0x3933 == "plotUnlocked5")
			{
				document.getElementById("plot-section-img-5").src = "images/tree_locked_donor.png"
			};
			if (_0x3933 == "plotUnlocked6")
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
		if (_0x3811 > 0)
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
		var _0x5F26 = parseInt(getItem("smeltingCurrentAmount") / getItem("smeltingRequestedAmount") * 100);
		if (isNaN(_0x5F26))
		{
			_0x5F26 = 0
		};
		document.getElementById("notification-furnace-value").innerHTML = _0x5F26 + "%";
		break;
	case "charcoalFoundryCurrentAmount":
		var _0x5F26 = parseInt(getItem("charcoalFoundryCurrentAmount") / getItem("charcoalFoundryRequestedAmount") * 100);
		if (isNaN(_0x5F26))
		{
			_0x5F26 = 0
		};
		document.getElementById("notification-charcoalFoundry-value").innerHTML = _0x5F26 + "%";
		break;
	case "monsterHp":
		;
	case "monsterMaxHp":
		refreshMonsterHpBar();
		break;
	case "miningUnlocked":
		if (_0x3811 > 0)
		{
			document.getElementById("span-topBar-miningXPAreaLocked").style.display = "none";
			document.getElementById("span-topBar-miningXPArea").style.display = ""
		};
		break;
	case "craftingUnlocked":
		if (_0x3811 > 0)
		{
			document.getElementById("span-topBar-craftingXPAreaLocked").style.display = "none";
			document.getElementById("span-topBar-craftingXPArea").style.display = ""
		};
		break;
	case "bobsPanicQuest":
		if (_0x3811 == -1)
		{
			document.getElementById("img-hint-arrow-farming-button").style.display = "none";
			document.getElementById("img-hint-arrow-woodcutting-button").style.display = "none"
		};
		break;
	case "woodcuttingUnlocked":
		if (_0x3811 > 0)
		{
			document.getElementById("span-topBar-woodcuttingXPAreaLocked").style.display = "none";
			document.getElementById("span-topBar-woodcuttingXPArea").style.display = "";
			document.getElementById("navigation-right-woodcutting-button").style.display = ""
		};
		break;
	case "fishingUnlocked":
		if (_0x3811 > 0)
		{
			document.getElementById("span-topBar-fishingXPAreaLocked").style.display = "none";
			document.getElementById("span-topBar-fishingXPArea").style.display = "";
			document.getElementById("navigation-right-fishing-button").style.display = ""
		};
		break;
	case "cookingUnlocked":
		if (_0x3811 > 0)
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
		if (_0x3811 > 0)
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
		if (_0x3811 > 0)
		{
			document.getElementById("span-topBar-farmingXPAreaLocked").style.display = "none";
			document.getElementById("span-topBar-farmingXPArea").style.display = "";
			document.getElementById("navigation-right-farming-button").style.display = ""
		};
		break;
	case "magicTabNotification":
		if (_0x3811 > 0)
		{
			document.getElementById("img-hint-arrow-magic-button").style.display = "none"
		};
		break;
	case "brewingUnlocked":
		if (_0x3811 > 0)
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
		if (_0x3811 == 2)
		{
			document.getElementById("navigation-right-mining-button").style.display = ""
		}
		else
		{
			if (_0x3811 > 2 || _0x3811 == -1)
			{
				document.getElementById("navigation-right-mining-button").style.display = "";
				document.getElementById("img-hint-arrow-mining-button").style.display = "none"
			}
		};
		if (_0x3811 == 3)
		{
			document.getElementById("navigation-right-crafting-button").style.display = ""
		}
		else
		{
			if (_0x3811 > 3 || _0x3811 == -1)
			{
				document.getElementById("navigation-right-crafting-button").style.display = "";
				document.getElementById("img-hint-arrow-crafting-button").style.display = "none"
			}
		};
		break;
	case "monsterName":
		if (_0x3811 == "none" && global_lastTabId == "right-combat-fighting")
		{
			navigate("right-combat")
		};
		resetAnimationOfCurrentFightToIdle();
		if (_0x3811 == "none")
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

function setItem(_0x7642, _0x3811)
{
	window["var_" + _0x7642] = _0x3811
}

function changeCombatMap(_0x4178)
{
	if (_0x4178 == 4 && getItem("lavaAlienKills") == 0)
	{
		confirmDialogue("images/forestAlien.png", "Sorry, I only bring adventurers to the northern fields if they have killed my dumb brother in the lava dungeon below.<br /><br />Besides, it\'s cold up in the north.", "Close", "", "");
		return
	};
	if (_0x4178 == 5 && getItem("weapon") != "torch")
	{
		confirmDialogue("images/torch.png", "You need a light source to go in here.", "Close", "", "");
		return
	};
	if (_0x4178 == 8 && getItem("iceHawkKills") == 0)
	{
		confirmDialogue("images/bossMarker.gif", "There\'s an enemy blocking the way!", "Close", "", "");
		return
	};
	if (_0x4178 == 11 && getItem("boots") != "flippers")
	{
		confirmDialogue("images/waveIcon.png", "You need as pair of flippers to swim out into the ocean.", "Close", "", "");
		return
	};
	if (_0x4178 == 13 && getItem("castleAccess") == 0)
	{
		confirmDialogue("images/castleGuard.png", "\"What do you want?\"", "Can I go through?", "Nevermind, I\'ll be on my way.", "CASTLE_GUARD_1");
		return
	};
	if (_0x4178 == 14)
	{
		confirmDialogue("images/crownIcon.png", "The castle is not ready yet.<br /><br /><span style=\'color:grey\'>To be released at the end of next week.</span>", "Close", "", "");
		return
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
	document.getElementById("div-map-" + _0x4178).style.display = "inline-block";
	if (_0x4178 != getItem("lastCombatMap"))
	{
		sendBytes("LAST_COMBAT_MAP=" + _0x4178)
	};
	refreshCombatMapThumbnail(_0x4178)
}

function flashElement(_0x4F67, _0x4F84, _0x3729)
{
	$(_0x4F67)
}

function clicksSnowTomb()
{
	confirmDialogue(null, "<span style=\'color:grey\'><img src=\'images/cemetery1.png\' class=\'img-50\'/ > # 3<br /><img src=\'images/cemetery2.png\' class=\'img-50\'/ > # 1<br /><img src=\'images/cemetery3.png\' class=\'img-50\'/ > # 5<br /><img src=\'images/cemetery2.png\' class=\'img-50\'/ > # 3<br /><img src=\'images/cemetery3.png\' class=\'img-50\'/ > # 1</span>", "Close", "", "")
}

function getItemString(_0x53D2)
{
	return "" + getItem(_0x53D2, true)
}

function getItem(_0x53D2, _0x53B5)
{
	if (window["var_" + _0x53D2] == null)
	{
		if (_0x53B5)
		{
			return "none"
		}
		else
		{
			return 0
		}
	};
	var _0x3811 = window["var_" + _0x53D2];
	if (isNaN(_0x3811))
	{
		return _0x3811
	}
	else
	{
		return parseInt(_0x3811)
	}
}

function variableExists(_0x4ED6)
{
	return window[_0x4ED6] != null
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

function hideElement(_0x4F67)
{
	if (document.getElementById(_0x4F67) != null)
	{
		if (document.getElementById(_0x4F67).style.display != "none")
		{
			document.getElementById(_0x4F67).style.display = "none"
		}
	}
}

function showElement(_0x4F67)
{
	if (document.getElementById(_0x4F67) != null)
	{
		if (document.getElementById(_0x4F67).style.display == "none")
		{
			document.getElementById(_0x4F67).style.display = ""
		}
	}
}

function clicksLoginBackButton()
{
	document.getElementById("login-box-connected-guest").style.display = "";
	document.getElementById("login-box-new-account-form").style.display = "none";
	document.getElementById("login-box-login-form").style.display = "none"
}

function setInnerHTML(_0x4F67, _0x75B1)
{
	if (document.getElementById(_0x4F67) != null)
	{
		document.getElementById(_0x4F67).style.display = "";
		document.getElementById(_0x4F67).innerHTML = _0x75B1
	}
}

function minimizeTopBar(_0x44A4)
{
	if (_0x44A4)
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
	var _0x47B3 = document.getElementById("login-box-new-account-username").value;
	var _0x4796 = document.getElementById("login-box-new-account-password").value;
	var _0x4779 = document.getElementById("login-box-new-account-password2").value;
	var _0x475C = 0;
	if (document.getElementById("login-box-new-account-hardcore").checked)
	{
		_0x475C = 1
	};
	sendBytes("NEW_ACCOUNT=" + _0x47B3 + "~" + _0x4796 + "~" + _0x4779 + "~" + _0x475C);
	setInnerHTML("login-box-new-account-errors", "Loading...")
}

function clicksLoginAccount()
{
	var _0x49A0 = document.getElementById("login-box-login-username").value;
	var _0x4983 = document.getElementById("login-box-login-password").value;
	sendBytes("LOGIN=" + _0x49A0 + "~" + _0x4983);
	setInnerHTML("login-box-new-account-errors", "Loading...")
}

function sendBytes(_0x3746)
{
	if (_0x3746.length <= 255)
	{
		global_webSocket.send(_0x3746)
	}
}
global_ImageCache = [];

function getImage(_0x4CAF, _0x5398)
{
	if (global_ImageCache[_0x5398] != null)
	{
		if (global_ImageCache[_0x5398].url == _0x4CAF)
		{
			return global_ImageCache[_0x5398].obj
		}
	};
	var _0x537B = new ImageObject(_0x4CAF);
	global_ImageCache[_0x5398] = _0x537B;
	return _0x537B.obj
}

function ImageObject(_0x4CAF)
{
	this.url = _0x4CAF;
	this.obj = new Image();
	this.obj.src = _0x4CAF
}
global_SoundCache = [];

function playSound(_0x4CAF)
{
	if (global_SoundCache[_0x4CAF] != null)
	{
		return global_SoundCache[_0x4CAF].obj.play()
	};
	var _0x69CC = new SoundObject(_0x4CAF);
	global_SoundCache[_0x4CAF] = _0x69CC;
	return _0x69CC.obj.play()
}

function SoundObject(_0x4CAF)
{
	this.url = _0x4CAF;
	this.obj = new Audio(_0x4CAF);
	this.obj.volume = 0.2
}

function formatTime(_0x50C3)
{
	if (_0x50C3 <= 0)
	{
		return "0"
	};
	var _0x37F4 = _0x50C3;
	var _0x506C = ~~(_0x37F4 / 3600);
	var _0x5089 = ~~((_0x37F4 % 3600) / 60);
	var _0x50E0 = (_0x37F4 % 60).toFixed(0);
	var _0x50A6 = "";
	days = 0;
	while (_0x506C >= 24)
	{
		_0x506C -= 24;
		days++
	};
	if (_0x506C > 0)
	{
		_0x50A6 += "" + _0x506C + ":" + (_0x5089 < 10 ? "0" : "")
	};
	_0x50A6 += "" + _0x5089 + ":" + (_0x50E0 < 10 ? "0" : "");
	_0x50A6 += "" + _0x50E0;
	if (days > 1)
	{
		return days + " days, " + _0x50A6
	}
	else
	{
		if (days == 1)
		{
			return days + " day, " + _0x50A6
		}
		else
		{
			return _0x50A6
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

function refreshMarketHistory(_0x3746)
{
	var _0x6C2D = document.getElementById("marketHistory-section");
	document.getElementById("marketHistory-loading").style.display = "none";
	if (_0x3746 == "error")
	{
		document.getElementById("marketHistory-section").innerHTML = "<center>An error has occured.  Too many requests.  Try again later.</center>";
		return
	};
	if (_0x3746 == "empty")
	{
		document.getElementById("marketHistory-section").innerHTML = "<center>There are no transactions on the market for this account.</center>";
		return
	};
	var _0x3763 = _0x3746.split("~");
	var _0x41B2 = "<center><table class=\'simple-table\' width=\'70%\'>";
	_0x41B2 += "<tr>";
	_0x41B2 += "<th>" + "Item" + "</th>";
	_0x41B2 += "<th>" + "Icon" + "</th>";
	_0x41B2 += "<th>" + "Amount" + "</th>";
	_0x41B2 += "<th>" + "Price" + "</th>";
	_0x41B2 += "<th>" + "Bought/Sold" + "</th>";
	_0x41B2 += "<th>" + "Date <span style=\'color:grey\'>MM/DD/YYYY</span>" + "</th>";
	_0x41B2 += "</tr>";
	for (var _0x3607 = 0; _0x3607 < _0x3763.length; _0x3607 += 0)
	{
		var _0x6C4A = _0x3763[_0x3607] == "true";
		_0x3607++;
		var _0x6C67 = _0x3763[_0x3607];
		_0x3607++;
		var _0x44C1 = _0x3763[_0x3607];
		_0x3607++;
		var _0x6C84 = _0x3763[_0x3607];
		_0x3607++;
		var _0x6C10 = _0x3763[_0x3607];
		_0x3607++;
		_0x41B2 += "<tr>";
		_0x41B2 += "<td>" + getItemName(_0x6C67) + "</td>";
		_0x41B2 += "<td>" + "<img src=\'images/" + _0x6C67 + ".png\' class=\'img-50\' />" + "</td>";
		_0x41B2 += "<td>" + formatNumber(_0x44C1) + "</td>";
		_0x41B2 += "<td>" + formatNumber(_0x6C84 * _0x44C1) + " <img src=\'images/coins.png\' class=\'img-20\' /> <br /><span style=\'color:grey;font-size:10pt;\'>(" + formatNumber(_0x6C84) + " each)</span></td>";
		_0x41B2 += "<td>" + _0x6C4A + "</td>";
		_0x41B2 += "<td>" + new Date(parseInt(_0x6C10)).toLocaleDateString("en-US"); + "</td>";
		_0x41B2 += "</tr>"
	};
	_0x6C2D.innerHTML = _0x41B2
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

function navigate(_0x6113)
{
	sendBytes("LAST_TAB=" + _0x6113);
	hideAllRightTabs();
	document.getElementById("navigation-" + _0x6113).style.display = "";
	global_lastTabId = _0x6113;
	changeBackgroundRightSection("default");
	switch (_0x6113)
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
	if (_0x6113 != "right-combat-fighting" && getRandomInt(10000) == 0 && getItem("darkCrystalUsed") > 0)
	{
		faradoxRandomShow()
	}
}

function getTotalKills()
{
	var _0x5772 = 0;
	_0x5772 += getItem("chickenKills");
	_0x5772 += getItem("ratKills");
	_0x5772 += getItem("beeKills");
	return _0x5772
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

function getOilCost(_0x47D0)
{
	switch (_0x47D0)
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

function getCharcoalCost(_0x47D0)
{
	switch (_0x47D0)
	{
	case "titanium":
		return 20
	}
}

function refreshSigilsDialoguesIcons(_0x7211)
{
	var _0x41B2 = "";
	var _0x71BA = false;
	var _0x722E = ["candyCaneSigil", "spiderSigil", "carrotSigil", "snowmanSigil", "catSigil", "bunnySigil", "bluePartyHatSigil", "whitePartyHatSigil", "yellowPartyHatSigil", "greenPartyHatSigil", "redPartyHatSigil", "pinkPartyHatSigil", "treeSigil", "ghostSigil", "easterEggSigil", "santaHatSigil", "pumpkinSigil"];
	for (var _0x3607 = 0; _0x3607 < _0x722E.length; _0x3607++)
	{
		if (getItem(_0x722E[_0x3607]) > 0 || _0x7211)
		{
			_0x71BA = true;
			_0x41B2 += "<div onclick=\'sendBytes(\"CHAT_ICON=" + _0x722E[_0x3607] + "\")\' class=\'dialogue-sigils-itemBox\'>";
			_0x41B2 += "<img src=\'images/" + _0x722E[_0x3607] + ".png\' class=\'img-30\' />";
			if (getItemString("chatIcon") == _0x722E[_0x3607])
			{
				_0x41B2 += "<br /><center><span>" + getItem(_0x722E[_0x3607]) + "</span> <img src=\'images/check.png\' class=\'img-20\' /></center>"
			}
			else
			{
				_0x41B2 += "<br /><center><span>" + getItem(_0x722E[_0x3607]) + "</span> </center>"
			};
			_0x41B2 += "</div>"
		}
	};
	_0x722E = ["hardcoreSigil"];
	for (var _0x3607 = 0; _0x3607 < _0x722E.length; _0x3607++)
	{
		if (getItem(_0x722E[_0x3607]) > 0 || _0x7211)
		{
			_0x71BA = true;
			_0x41B2 += "<div onclick=\'sendBytes(\"CHAT_ICON=" + _0x722E[_0x3607] + "\")\' style=\'background-color:#b3ffd9;\' class=\'dialogue-sigils-itemBox\'>";
			_0x41B2 += "<img src=\'images/" + _0x722E[_0x3607] + ".png\' class=\'img-30\' />";
			if (getItemString("chatIcon") == _0x722E[_0x3607])
			{
				_0x41B2 += "<br /><center><span>" + getItem(_0x722E[_0x3607]) + "</span> <img src=\'images/check.png\' class=\'img-20\' /></center>"
			}
			else
			{
				_0x41B2 += "<br /><center><span>" + getItem(_0x722E[_0x3607]) + "</span> </center>"
			};
			_0x41B2 += "</div>"
		}
	};
	_0x722E = ["globalSigil"];
	for (var _0x3607 = 0; _0x3607 < _0x722E.length; _0x3607++)
	{
		var _0x71F4 = getGlobalLevel() >= 900;
		if (_0x71F4 || _0x7211)
		{
			_0x71BA = true;
			_0x41B2 += "<div onclick=\'sendBytes(\"CHAT_ICON=" + _0x722E[_0x3607] + "\")\' style=\'background-color:#b3ffd9;\' class=\'dialogue-sigils-itemBox\'>";
			_0x41B2 += "<img src=\'images/" + _0x722E[_0x3607] + ".png\' class=\'img-30\' />";
			var _0x44C1 = 0;
			if (_0x71F4)
			{
				_0x44C1 = 1
			};
			if (getItemString("chatIcon") == _0x722E[_0x3607])
			{
				_0x41B2 += "<br /><center><span>" + _0x44C1 + "</span> <img src=\'images/check.png\' class=\'img-20\' /></center>"
			}
			else
			{
				_0x41B2 += "<br /><center><span>" + _0x44C1 + "</span> </center>"
			};
			_0x41B2 += "</div>"
		}
	};
	_0x722E = ["combatSigil", "magicSigil", "miningSigil", "craftingSigil", "woodcuttingSigil", "farmingSigil", "brewingSigil", "fishingSigil", "cookingSigil"];
	for (var _0x3607 = 0; _0x3607 < _0x722E.length; _0x3607++)
	{
		var _0x71D7 = getLevel(getItem(_0x722E[_0x3607].substr(0, _0x722E[_0x3607].length - 5) + "Xp")) >= 100;
		if (_0x71D7 || _0x7211)
		{
			_0x71BA = true;
			_0x41B2 += "<div onclick=\'sendBytes(\"CHAT_ICON=" + _0x722E[_0x3607] + "\")\' style=\'background-color:#b3ffd9;\' class=\'dialogue-sigils-itemBox\'>";
			_0x41B2 += "<img src=\'images/" + _0x722E[_0x3607] + ".png\' class=\'img-30\' />";
			var _0x44C1 = 0;
			if (_0x71D7)
			{
				_0x44C1 = 1
			};
			if (getItemString("chatIcon") == _0x722E[_0x3607])
			{
				_0x41B2 += "<br /><center><span>" + _0x44C1 + "</span> <img src=\'images/check.png\' class=\'img-20\' /></center>"
			}
			else
			{
				_0x41B2 += "<br /><center><span>" + _0x44C1 + "</span> </center>"
			};
			_0x41B2 += "</div>"
		}
	};
	_0x722E = ["chickenMonsterSigil", "ratMonsterSigil", "beeMonsterSigil", "snakeMonsterSigil", "entMonsterSigil", "thiefMonsterSigil", "bearMonsterSigil", "spiderMonsterSigil", "skeletonMonsterSigil", "lavaAlienMonsterSigil", "batMonsterSigil", "fireMageMonsterSigil", "boneHeadMonsterSigil", "mammaPolarBearMonsterSigil", "yetiMonsterSigil", "treasureChestSigil"];
	for (var _0x3607 = 0; _0x3607 < _0x722E.length; _0x3607++)
	{
		if (getItem(_0x722E[_0x3607]) > 0 || _0x7211)
		{
			_0x71BA = true;
			_0x41B2 += "<div onclick=\'sendBytes(\"CHAT_ICON=" + _0x722E[_0x3607] + "\")\' style=\'background-color:#e6e6e6;\' class=\'dialogue-sigils-itemBox\'>";
			_0x41B2 += "<img src=\'images/" + _0x722E[_0x3607] + ".png\' class=\'img-30\' />";
			if (getItemString("chatIcon") == _0x722E[_0x3607])
			{
				_0x41B2 += "<br /><center><span>" + getItem(_0x722E[_0x3607]) + "</span> <img src=\'images/check.png\' class=\'img-20\' /></center>"
			}
			else
			{
				_0x41B2 += "<br /><center><span>" + getItem(_0x722E[_0x3607]) + "</span> </center>"
			};
			_0x41B2 += "</div>"
		}
	};
	_0x722E = ["goldEventSigil2", "silverEventSigil2", "bronzeEventSigil2", "eventSigil2", "goldEventSigil", "silverEventSigil", "bronzeEventSigil", "eventSigil"];
	for (var _0x3607 = 0; _0x3607 < _0x722E.length; _0x3607++)
	{
		if (getItem(_0x722E[_0x3607]) > 0 || _0x7211)
		{
			_0x71BA = true;
			_0x41B2 += "<div onclick=\'sendBytes(\"CHAT_ICON=" + _0x722E[_0x3607] + "\")\' style=\'background-color:pink;\' class=\'dialogue-sigils-itemBox\'>";
			_0x41B2 += "<img src=\'images/" + _0x722E[_0x3607] + ".png\' class=\'img-30\' />";
			if (getItemString("chatIcon") == _0x722E[_0x3607])
			{
				_0x41B2 += "<br /><center><span>" + getItem(_0x722E[_0x3607]) + "</span> <img src=\'images/check.png\' class=\'img-20\' /></center>"
			}
			else
			{
				_0x41B2 += "<br /><center><span>" + getItem(_0x722E[_0x3607]) + "</span> </center>"
			};
			_0x41B2 += "</div>"
		}
	};
	_0x41B2 += "<div style=\'border:1px solid grey;padding:10px;background-color:#EFEFEF;font-size:10pt;\'>Sigils are chat icons that are purely cosmetic.  They can be obtained through holiday events, monster drops (1/10,000) or special events.<br /><br />All sigils are untradable except for holiday sigils during their respective time of year.<br /><br /><span style=\'cursor:pointer;color:blue\' onclick=\'refreshSigilsDialoguesIcons(true)\'>(show all)</span></div>";
	document.getElementById("dialogue-sigils-section").innerHTML = _0x41B2
}

function openChatSigilsDialogues()
{
	refreshSigilsDialoguesIcons();
	openDialogue("dialogue-sigils")
}

function setOrBuyChatTag(_0x7764, _0x7747)
{
	if (_0x7747 == "SET" || _0x7747 == "UNSET")
	{
		sendBytes("SET_PRICE_TAG=" + _0x7764)
	}
	else
	{
		confirmDialogue("images/chatIcon.png", "Are you sure you wanna purchase this with tradable donor coins?", "Purchase", "Cancel", "BUY_PRICE_TAG=" + _0x7764)
	}
}

function refreshTagsDialoguesIcons()
{
	var _0x41B2 = "";
	var _0x473F = "";
	var _0x72BF = "";
	var _0x72A2 = getItem("spentDonorCoinsOnTags");
	var _0x7268 = false;
	var _0x7285 = "";
	var _0x724B = "";
	_0x41B2 += "<div style=\'border:1px solid grey;padding:10px;background-color:#EFEFEF;font-size:10pt;\'>Chat tags, which may be combined with sigils, allow you to show your support towards the game.  They are purchased with <b>tradable</b> donor coins.<br /><br />They are optional and only used for cosmetic purposes.<br /><br /><i style=\'color:grey\'>You also can buy them overtime, meaning spending 20$ on chat tags will knock off 20$ for all other tags.  Also, buying a higher tier tag will unlock all the previous ones for free.</i></div>";
	_0x41B2 += "<br /><br />";
	_0x41B2 += "<table width=\'100%\' style=\'margin:auto;background-color:#f2f2f2;color:black;text-align:center;border-collapse: collapse;border:1px solid black;\'>";
	_0x41B2 += "<tr>";
	_0x41B2 += "<th style=\'width:50%\'>Example</th><th><b style=\'color:green\'>Tradable</b> Donor Coins</th><th>Action</th>";
	_0x41B2 += "</tr>";
	_0x473F = "Donor";
	_0x72BF = 20;
	testingForPriceAdjusted = _0x72BF - _0x72A2;
	_0x7285 = testingForPriceAdjusted;
	if (testingForPriceAdjusted <= 0)
	{
		_0x7285 = "<img src=\'images/check.png\' class=\'img-20\' />";
		_0x724B = "SET";
		if (getItem("chatTag") == _0x473F)
		{
			_0x724B = "UNSET"
		}
	}
	else
	{
		_0x7285 = "<img src=\'images/donorCoins.png\' class=\'img-20\' /> " + testingForPriceAdjusted;
		_0x724B = "BUY"
	};
	_0x41B2 += "<tr>";
	_0x41B2 += "<td style=\'padding:20px;\'><img style=\'border:1px solid grey;padding:3px;\'src=\'images/tagExample_" + _0x473F + ".png\' /></td><td>" + _0x7285 + "</td><td><input type=\'button\' value=\'" + _0x724B + "\' onclick=\'setOrBuyChatTag(\"" + _0x473F + "\",this.value);closeDialogue(\"dialogue-tags\")\' style=\'color:#006666;border:1px solid #006666\' class=\'chat-area-send-button\' /></td>";
	_0x41B2 += "</tr>";
	_0x473F = "Superdonor";
	_0x72BF = 40;
	testingForPriceAdjusted = _0x72BF - _0x72A2;
	_0x7285 = testingForPriceAdjusted;
	if (testingForPriceAdjusted <= 0)
	{
		_0x7285 = "<img src=\'images/check.png\' class=\'img-20\' />";
		_0x724B = "SET";
		if (getItem("chatTag") == _0x473F)
		{
			_0x724B = "UNSET"
		}
	}
	else
	{
		_0x7285 = "<img src=\'images/donorCoins.png\' class=\'img-20\' /> " + testingForPriceAdjusted;
		_0x724B = "BUY"
	};
	_0x41B2 += "<tr>";
	_0x41B2 += "<td style=\'padding:20px;\'><img style=\'border:1px solid grey;padding:3px;\'src=\'images/tagExample_" + _0x473F + ".png\' /></td><td>" + _0x7285 + "</td><td><input type=\'button\' value=\'" + _0x724B + "\' onclick=\'setOrBuyChatTag(\"" + _0x473F + "\",this.value);closeDialogue(\"dialogue-tags\")\' style=\'color:#006666;border:1px solid #006666\' class=\'chat-area-send-button\' /></td>";
	_0x41B2 += "</tr>";
	_0x473F = "Ultradonor";
	_0x72BF = 60;
	testingForPriceAdjusted = _0x72BF - _0x72A2;
	_0x7285 = testingForPriceAdjusted;
	if (testingForPriceAdjusted <= 0)
	{
		_0x7285 = "<img src=\'images/check.png\' class=\'img-20\' />";
		_0x724B = "SET";
		if (getItem("chatTag") == _0x473F)
		{
			_0x724B = "UNSET"
		}
	}
	else
	{
		_0x7285 = "<img src=\'images/donorCoins.png\' class=\'img-20\' /> " + testingForPriceAdjusted;
		_0x724B = "BUY"
	};
	_0x41B2 += "<tr>";
	_0x41B2 += "<td style=\'padding:20px;\'><img style=\'border:1px solid grey;padding:3px;\'src=\'images/tagExample_" + _0x473F + ".png\' /></td><td>" + _0x7285 + "</td><td><input type=\'button\' value=\'" + _0x724B + "\' onclick=\'setOrBuyChatTag(\"" + _0x473F + "\",this.value);closeDialogue(\"dialogue-tags\")\' style=\'color:#006666;border:1px solid #006666\' class=\'chat-area-send-button\' /></td>";
	_0x41B2 += "</tr>";
	_0x473F = "Contributor";
	_0x72BF = 100;
	testingForPriceAdjusted = _0x72BF - _0x72A2;
	_0x7285 = testingForPriceAdjusted;
	if (testingForPriceAdjusted <= 0)
	{
		_0x7285 = "<img src=\'images/check.png\' class=\'img-20\' />";
		_0x724B = "SET";
		if (getItem("chatTag") == _0x473F)
		{
			_0x724B = "UNSET"
		}
	}
	else
	{
		_0x7285 = "<img src=\'images/donorCoins.png\' class=\'img-20\' /> " + testingForPriceAdjusted;
		_0x724B = "BUY"
	};
	_0x41B2 += "<tr>";
	_0x41B2 += "<td style=\'padding:20px;\'><img style=\'border:1px solid grey;padding:3px;\'src=\'images/tagExample_" + _0x473F + ".png\' /></td><td>" + _0x7285 + "</td><td><input type=\'button\' value=\'" + _0x724B + "\' onclick=\'setOrBuyChatTag(\"" + _0x473F + "\",this.value);closeDialogue(\"dialogue-tags\")\' style=\'color:#006666;border:1px solid #006666\' class=\'chat-area-send-button\' /></td>";
	_0x41B2 += "</tr>";
	_0x473F = "Financier";
	_0x72BF = 250;
	testingForPriceAdjusted = _0x72BF - _0x72A2;
	_0x7285 = testingForPriceAdjusted;
	if (testingForPriceAdjusted <= 0)
	{
		_0x7285 = "<img src=\'images/check.png\' class=\'img-20\' />";
		_0x724B = "SET";
		if (getItem("chatTag") == _0x473F)
		{
			_0x724B = "UNSET"
		}
	}
	else
	{
		_0x7285 = "<img src=\'images/donorCoins.png\' class=\'img-20\' /> " + testingForPriceAdjusted;
		_0x724B = "BUY"
	};
	_0x41B2 += "<tr>";
	_0x41B2 += "<td style=\'padding:20px;\'><img style=\'border:1px solid grey;padding:3px;\'src=\'images/tagExample_" + _0x473F + ".png\' /></td><td>" + _0x7285 + "</td><td><input type=\'button\' value=\'" + _0x724B + "\' onclick=\'setOrBuyChatTag(\"" + _0x473F + "\",this.value);closeDialogue(\"dialogue-tags\")\' style=\'color:#006666;border:1px solid #006666\' class=\'chat-area-send-button\' /></td>";
	_0x41B2 += "</tr>";
	_0x473F = "Investor";
	_0x72BF = 500;
	testingForPriceAdjusted = _0x72BF - _0x72A2;
	_0x7285 = testingForPriceAdjusted;
	if (testingForPriceAdjusted <= 0)
	{
		_0x7285 = "<img src=\'images/check.png\' class=\'img-20\' />";
		_0x724B = "SET";
		if (getItem("chatTag") == _0x473F)
		{
			_0x724B = "UNSET"
		}
	}
	else
	{
		_0x7285 = "<img src=\'images/donorCoins.png\' class=\'img-20\' /> " + testingForPriceAdjusted;
		_0x724B = "BUY"
	};
	_0x41B2 += "<tr>";
	_0x41B2 += "<td style=\'padding:20px;\'><span border:1px solid grey;padding:3px;><img style=\'vertical-align:text-top;\' src=\'images/investor.gif\' /> <span style=\'color:#cc66ff;dispaly:inline-block;vertical-align:text-top;font-size:16pt;\'> A chat tag!</span></span></td><td>" + _0x7285 + "</td><td><input type=\'button\' value=\'" + _0x724B + "\' onclick=\'setOrBuyChatTag(\"" + _0x473F + "\",this.value);closeDialogue(\"dialogue-tags\")\' style=\'color:#006666;border:1px solid #006666\' class=\'chat-area-send-button\' /></td>";
	_0x41B2 += "</tr>";
	_0x473F = "InvestorPlus";
	_0x72BF = 1000;
	testingForPriceAdjusted = _0x72BF - _0x72A2;
	_0x7285 = testingForPriceAdjusted;
	if (testingForPriceAdjusted <= 0)
	{
		_0x7285 = "<img src=\'images/check.png\' class=\'img-20\' />";
		_0x724B = "SET";
		if (getItem("chatTag") == _0x473F)
		{
			_0x724B = "UNSET"
		}
	}
	else
	{
		_0x7285 = "<img src=\'images/donorCoins.png\' class=\'img-20\' /> " + testingForPriceAdjusted;
		_0x724B = "BUY"
	};
	_0x41B2 += "<tr>";
	_0x41B2 += "<td style=\'padding:20px;\'><span border:1px solid grey;padding:3px;><img style=\'vertical-align:text-top;\' src=\'images/investorPlus.gif\' /> <span style=\'color:#00a3cc;dispaly:inline-block;vertical-align:text-top;font-size:16pt;\'> A chat tag!</span></span></td><td>" + _0x7285 + "</td><td><input type=\'button\' value=\'" + _0x724B + "\' onclick=\'setOrBuyChatTag(\"" + _0x473F + "\",this.value);closeDialogue(\"dialogue-tags\")\' style=\'color:#006666;border:1px solid #006666\' class=\'chat-area-send-button\' /></td>";
	_0x41B2 += "</tr>";
	_0x41B2 += "</table>";
	_0x41B2 += "<br /><br />";
	_0x41B2 += "<table width=\'100%\' style=\'margin:auto;background-color:#f2f2f2;color:black;text-align:center;border-collapse: collapse;border:1px solid black;\'>";
	_0x41B2 += "<tr>";
	_0x41B2 += "<th style=\'width:50%\'>Example</th><th>Description</th>";
	_0x41B2 += "</tr>";
	_0x41B2 += "<tr>";
	_0x41B2 += "<td style=\'padding:20px;\'><img  style=\'border:1px solid grey;padding:3px;\' src=\'images/devTagExample.png\' /></td><td>Owner & Developper of the Diamond Hunt Games</td>";
	_0x41B2 += "</tr>";
	_0x41B2 += "<tr>";
	_0x41B2 += "<td style=\'padding:20px;\'><img  style=\'border:1px solid grey;padding:3px;\' src=\'images/tagExample_Moderator.png\' /></td><td>Moderates chat and market.</td>";
	_0x41B2 += "</tr>";
	_0x41B2 += "</table>";
	document.getElementById("dialogue-tags-section").innerHTML = _0x41B2
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
	document.getElementById("navigation-right-museum").style.display = "none";
	document.getElementById("navigation-right-puzzleChest1").style.display = "none";
	document.getElementById("navigation-right-combatLog").style.display = "none";
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

function getResearchPrice(_0x3F8B)
{
	switch (_0x3F8B)
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
	default:
		return -1
	}
}

function getResearchPerkDescription(_0x5616, _0x3EFA)
{
	switch (_0x5616)
	{
	case 0:
		if (_0x3EFA == "crafting")
		{
			return "Ability to smelt sand into glass."
		};
		if (_0x3EFA == "mining")
		{
			return "Ability to find gems.<br /><span onclick=\'infoGemsDialogue()\' class=\'researcher-more-info-button\'>more info</span>"
		};
		if (_0x3EFA == "combat")
		{
			return "Combat levels now increase maximum hp."
		};
		if (_0x3EFA == "cooking")
		{
			return "Ability to make recipes in the cooking section."
		};
		if (_0x3EFA == "fishing")
		{
			return "Chance of finding oyster pearls."
		};
		if (_0x3EFA == "farming")
		{
			return "You may now eat mushrooms for extra energy."
		};
		if (_0x3EFA == "woodcutting")
		{
			return "10% chance of obtaining a tree seed when chopping trees."
		};
		if (_0x3EFA == "brewing")
		{
			return "Double stardust from small stardust potions."
		};
		if (_0x3EFA == "magic")
		{
			return "Mana regenerate during combat every 10 seconds."
		};
		break;
	case 1:
		if (_0x3EFA == "crafting")
		{
			return "Access to the museum."
		};
		if (_0x3EFA == "mining")
		{
			return "Ability to find stardust prisms.<br /><span onclick=\'infoStardustPrismsDialogue()\' class=\'researcher-more-info-button\'>more info</span>"
		};
		if (_0x3EFA == "farming")
		{
			return "Bob will now start looking for stardust seeds."
		};
		if (_0x3EFA == "combat")
		{
			return "Allow you to reset your combat cooldown, once a day. <span id=\'reset-combat-icon-timer\'></span>"
		};
		if (_0x3EFA == "brewing")
		{
			return "Ability to drink two potions at once, stacking the timer."
		};
		if (_0x3EFA == "magic")
		{
			return "Mana regenerates 25% faster out of combat."
		};
		if (_0x3EFA == "cooking")
		{
			return "Burning food will grant 25% of its cook XP."
		};
		if (_0x3EFA == "fishing")
		{
			return "Ability to use an oxygen tank to explore ocean floors for treasure."
		};
		if (_0x3EFA == "woodcutting")
		{
			return "1% chance of obtaining a strange leaf when chopping trees."
		};
		break;
	case 2:
		if (_0x3EFA == "mining")
		{
			return "Ability to own 3 of each mining machinery."
		};
		if (_0x3EFA == "crafting")
		{
			return "Ability to craft silver buckets."
		};
		if (_0x3EFA == "woodcutting")
		{
			return "5% chance that chopping a tree will cause it to instantly regrow."
		};
		if (_0x3EFA == "magic")
		{
			return "Ability to transform weapons into other items."
		};
		if (_0x3EFA == "combat")
		{
			return "Ability to set presets, allowing you to switch gears in one click mid fight."
		};
		if (_0x3EFA == "farming")
		{
			return "5% chance that harvesting a crop will cause it to instantly regrow."
		};
		if (_0x3EFA == "brewing")
		{
			return "5% chance that drinking a potion will not get used."
		};
		if (_0x3EFA == "cooking")
		{
			return "5% burn reduction on all ovens."
		};
		if (_0x3EFA == "fishing")
		{
			return "Ability to find boat blueprints on the ocean floors."
		};
		break;
	case 3:
		if (_0x3EFA == "woodcutting")
		{
			return "Maple trees now yield maple syrup."
		};
		if (_0x3EFA == "combat")
		{
			return "5% chance that energy is refunded when fighting."
		};
		if (_0x3EFA == "crafting")
		{
			return "Ability to craft large vials."
		};
		if (_0x3EFA == "brewing")
		{
			return "Ability to brew mana potions."
		};
		if (_0x3EFA == "fishing")
		{
			return "1% chance to bring back a map from a boat trip."
		};
		if (_0x3EFA == "farming")
		{
			return "Ability to find blewit mushroom seeds."
		};
		if (_0x3EFA == "mining")
		{
			return "Mining machinery can now find geodes."
		};
		if (_0x3EFA == "cooking")
		{
			return "Chef\'s recipe is skippable, and the chef\'s dialogue now contains more information on the stew proposed."
		};
		if (_0x3EFA == "magic")
		{
			return "Teleport cooldown reduced from 15 to 5 minutes."
		};
		break;
	case 4:
		if (_0x3EFA == "woodcutting")
		{
			return "Chance for fruit trees to grow."
		};
		if (_0x3EFA == "combat")
		{
			return "5% chance to encounter shiny monsters, yielding more loot."
		};
		if (_0x3EFA == "farming")
		{
			return "5% chance that planting a seed will grow a shiny crop."
		};
		if (_0x3EFA == "brewing")
		{
			return "Ability to brew repel potions.<br /><span onclick=\'infoRepelPotionDialogue()\' class=\'researcher-more-info-button\'>more info</span>"
		};
		if (_0x3EFA == "cooking")
		{
			return "Teleporting on of an area or a boss will refund 10% of the energy used."
		}
	};
	return "-1"
}

function refreshResearching()
{
	var _0x396D = document.getElementById("researcher-section");
	var _0x710C = "style=\'padding:10px;border:1px solid grey;background-image:url(images/background.jpg)\'";
	var _0x7129 = "style=\'padding:10px;border:1px solid grey;background-image:url(images/background.jpg);color:orange;\'";
	var _0x7146 = "style=\'padding:10px;border:1px solid grey;background-image:url(images/background.jpg);color:green;\'";
	var _0x7163 = "style=\'padding:10px;border:1px solid grey;background-image:url(images/background.jpg);color:yellow;cursor:pointer;\'";
	var _0x6F3C = "onmouseover=\'this.style.color = \"red\"\' onmouseout=\'this.style.color = \"yellow\"\'";
	var _0x6EAB = "<center><table width=\'95%\' style=\'text-align:center;\'>";
	_0x6EAB += "<tr>";
	_0x6EAB += "<td " + _0x710C + " width=\'11%\'>" + "<img src=\'images/combatSkill_researcher.png\' class=\'img-50\' /> COMBAT" + "</td>";
	_0x6EAB += "<td " + _0x710C + " width=\'11%\'>" + "<img src=\'images/magicSkill_researcher.png\' class=\'img-50\' /> MAGIC" + "</td>";
	_0x6EAB += "<td " + _0x710C + " width=\'11%\'>" + "<img src=\'images/miningSkill_researcher.png\' class=\'img-50\' /> MINING" + "</td>";
	_0x6EAB += "<td " + _0x710C + " width=\'11%\'>" + "<img src=\'images/craftingSkill_researcher.png\' class=\'img-50\' /> CRAFTING" + "</td>";
	_0x6EAB += "<td " + _0x710C + " width=\'11%\'>" + "<img src=\'images/woodcuttingSkill_researcher.png\' class=\'img-50\' /> WOODCUTTING" + "</td>";
	_0x6EAB += "<td " + _0x710C + " width=\'11%\'>" + "<img src=\'images/farmingSkill_researcher.png\' class=\'img-50\' /> FARMING" + "</td>";
	_0x6EAB += "<td " + _0x710C + " width=\'11%\'>" + "<img src=\'images/brewingSkill_researcher.png\' class=\'img-50\' /> BREWING" + "</td>";
	_0x6EAB += "<td " + _0x710C + " width=\'11%\'>" + "<img src=\'images/fishingSkill_researcher.png\' class=\'img-50\' /> FISHING" + "</td>";
	_0x6EAB += "<td " + _0x710C + " width=\'11%\'>" + "<img src=\'images/cookingSkill_researcher.png\' class=\'img-50\' /> COOKING" + "</td>";
	_0x6EAB += "</tr>";
	var _0x70D2 = ["combat", "magic", "mining", "crafting", "woodcutting", "farming", "brewing", "fishing", "cooking"];
	var _0x6F76 = getItem("researcherCombat");
	var _0x7007 = getItem("researcherMagic");
	var _0x7024 = getItem("researcherMining");
	var _0x6FB0 = getItem("researcherCrafting");
	var _0x7041 = getItem("researcherWoodcutting");
	var _0x6FCD = getItem("researcherFarming");
	var _0x6F59 = getItem("researcherBrewing");
	var _0x6FEA = getItem("researcherFishing");
	var _0x6F93 = getItem("researcherCooking");
	var _0x7098 = [_0x6F76, _0x7007, _0x7024, _0x6FB0, _0x7041, _0x6FCD, _0x6F59, _0x6FEA, _0x6F93];
	var _0x6DA6 = 5;
	var _0x6EE5 = 4;
	var _0x6F1F = 4;
	var _0x6E1A = 4;
	var _0x719D = 5;
	var _0x6E54 = 5;
	var _0x6D6C = 5;
	var _0x6E8E = 4;
	var _0x6DE0 = 5;
	var _0x705E = [_0x6DA6, _0x6EE5, _0x6F1F, _0x6E1A, _0x719D, _0x6E54, _0x6D6C, _0x6E8E, _0x6DE0];
	var _0x6D89 = false;
	var _0x6EC8 = false;
	var _0x6F02 = false;
	var _0x6DFD = false;
	var _0x7180 = false;
	var _0x6E37 = false;
	var _0x6D4F = false;
	var _0x6E71 = false;
	var _0x6DC3 = false;
	var _0x707B = [_0x6D89, _0x6EC8, _0x6F02, _0x6DFD, _0x7180, _0x6E37, _0x6D4F, _0x6E71, _0x6DC3];
	_0x6EAB += "<tr>";
	var _0x70B5 = 0;
	for (var _0x3607 = 0; _0x3607 <= 8; _0x3607++)
	{
		if (_0x70B5 == _0x705E[_0x3607])
		{
			_0x6EAB += "<td " + _0x7146 + " width=\'11%\'>" + "You have already unlocked every perk for this skill." + "</td>";
			_0x707B[_0x3607] = true
		}
		else
		{
			if (_0x707B[_0x3607] || _0x7098[_0x3607] < _0x70B5)
			{
				_0x6EAB += "<td " + _0x7146 + " width=\'11%\'>" + "" + "</td>"
			}
			else
			{
				if (_0x7098[_0x3607] > _0x70B5)
				{
					_0x6EAB += "<td " + _0x7129 + " width=\'11%\'>" + getResearchPerkDescription(_0x70B5, _0x70D2[_0x3607]) + "</td>"
				}
				else
				{
					_0x707B[_0x3607] = true;
					var _0x70EF = "";
					if (getItem("researcherTimer") > 0)
					{
						_0x70EF = "style=\'text-decoration:line-through\'"
					};
					_0x6EAB += "<td onclick=\'researchConfirm(\"" + _0x70D2[_0x3607] + "\")\' " + _0x6F3C + " " + _0x7163 + " width=\'11%\'>" + "<span " + _0x70EF + ">Research for <img src=\'images/coins.png\' class=\'img-20\' /> " + formatNumber(getResearchPrice(_0x7098[_0x3607])) + "</span><br /><br /><b style=\'color:grey\'>Unlocks: </b><i style=\'color:grey\'>" + getResearchPerkDescription(_0x70B5, _0x70D2[_0x3607]) + "</i></span></td>"
				}
			}
		}
	};
	_0x6EAB += "</tr>";
	_0x6EAB += "<tr>";
	var _0x70B5 = 1;
	for (var _0x3607 = 0; _0x3607 <= 8; _0x3607++)
	{
		if (_0x70B5 == _0x705E[_0x3607] && !_0x707B[_0x3607])
		{
			_0x6EAB += "<td " + _0x7146 + " width=\'11%\'>" + "You have already unlocked every perk for this skill." + "</td>";
			_0x707B[_0x3607] = true
		}
		else
		{
			if (_0x707B[_0x3607] || _0x7098[_0x3607] < _0x70B5)
			{
				_0x6EAB += "<td " + _0x7146 + " width=\'11%\'>" + "" + "</td>"
			}
			else
			{
				if (_0x7098[_0x3607] > _0x70B5)
				{
					_0x6EAB += "<td " + _0x7129 + " width=\'11%\'>" + getResearchPerkDescription(_0x70B5, _0x70D2[_0x3607]) + "</td>"
				}
				else
				{
					_0x707B[_0x3607] = true;
					var _0x70EF = "";
					if (getItem("researcherTimer") > 0)
					{
						_0x70EF = "style=\'text-decoration:line-through\'"
					};
					_0x6EAB += "<td onclick=\'researchConfirm(\"" + _0x70D2[_0x3607] + "\")\' " + _0x6F3C + " " + _0x7163 + " width=\'11%\'>" + "<span " + _0x70EF + ">Research for <img src=\'images/coins.png\' class=\'img-20\' /> " + formatNumber(getResearchPrice(_0x7098[_0x3607])) + "</span><br /><br /><b style=\'color:grey\'>Unlocks: </b><i style=\'color:grey\'>" + getResearchPerkDescription(_0x70B5, _0x70D2[_0x3607]) + "</i></span></td>"
				}
			}
		}
	};
	_0x6EAB += "</tr>";
	_0x6EAB += "<tr>";
	var _0x70B5 = 2;
	for (var _0x3607 = 0; _0x3607 <= 8; _0x3607++)
	{
		if (_0x70B5 == _0x705E[_0x3607] && !_0x707B[_0x3607])
		{
			_0x6EAB += "<td " + _0x7146 + " width=\'11%\'>" + "You have already unlocked every perk for this skill." + "</td>";
			_0x707B[_0x3607] = true
		}
		else
		{
			if (_0x707B[_0x3607] || _0x7098[_0x3607] < _0x70B5)
			{
				_0x6EAB += "<td " + _0x7146 + " width=\'11%\'>" + "" + "</td>"
			}
			else
			{
				if (_0x7098[_0x3607] > _0x70B5)
				{
					_0x6EAB += "<td " + _0x7129 + " width=\'11%\'>" + getResearchPerkDescription(_0x70B5, _0x70D2[_0x3607]) + "</td>"
				}
				else
				{
					_0x707B[_0x3607] = true;
					var _0x70EF = "";
					if (getItem("researcherTimer") > 0)
					{
						_0x70EF = "style=\'text-decoration:line-through\'"
					};
					_0x6EAB += "<td onclick=\'researchConfirm(\"" + _0x70D2[_0x3607] + "\")\' " + _0x6F3C + " " + _0x7163 + " width=\'11%\'>" + "<span " + _0x70EF + ">Research for <img src=\'images/coins.png\' class=\'img-20\' /> " + formatNumber(getResearchPrice(_0x7098[_0x3607])) + "</span><br /><br /><b style=\'color:grey\'>Unlocks: </b><i style=\'color:grey\'>" + getResearchPerkDescription(_0x70B5, _0x70D2[_0x3607]) + "</i></span></td>"
				}
			}
		}
	};
	_0x6EAB += "</tr>";
	_0x6EAB += "<tr>";
	var _0x70B5 = 3;
	for (var _0x3607 = 0; _0x3607 <= 8; _0x3607++)
	{
		if (_0x70B5 == _0x705E[_0x3607] && !_0x707B[_0x3607])
		{
			_0x6EAB += "<td " + _0x7146 + " width=\'11%\'>" + "You have already unlocked every perk for this skill." + "</td>";
			_0x707B[_0x3607] = true
		}
		else
		{
			if (_0x707B[_0x3607] || _0x7098[_0x3607] < _0x70B5)
			{
				_0x6EAB += "<td " + _0x7146 + " width=\'11%\'>" + "" + "</td>"
			}
			else
			{
				if (_0x7098[_0x3607] > _0x70B5)
				{
					_0x6EAB += "<td " + _0x7129 + " width=\'11%\'>" + getResearchPerkDescription(_0x70B5, _0x70D2[_0x3607]) + "</td>"
				}
				else
				{
					_0x707B[_0x3607] = true;
					var _0x70EF = "";
					if (getItem("researcherTimer") > 0)
					{
						_0x70EF = "style=\'text-decoration:line-through\'"
					};
					_0x6EAB += "<td onclick=\'researchConfirm(\"" + _0x70D2[_0x3607] + "\")\' " + _0x6F3C + " " + _0x7163 + " width=\'11%\'>" + "<span " + _0x70EF + ">Research for <img src=\'images/coins.png\' class=\'img-20\' /> " + formatNumber(getResearchPrice(_0x7098[_0x3607])) + "</span><br /><br /><b style=\'color:grey\'>Unlocks: </b><i style=\'color:grey\'>" + getResearchPerkDescription(_0x70B5, _0x70D2[_0x3607]) + "</i></span></td>"
				}
			}
		}
	};
	_0x6EAB += "</tr>";
	_0x6EAB += "<tr>";
	var _0x70B5 = 4;
	for (var _0x3607 = 0; _0x3607 <= 8; _0x3607++)
	{
		if (_0x70B5 == _0x705E[_0x3607] && !_0x707B[_0x3607])
		{
			_0x6EAB += "<td " + _0x7146 + " width=\'11%\'>" + "You have already unlocked every perk for this skill." + "</td>";
			_0x707B[_0x3607] = true
		}
		else
		{
			if (_0x707B[_0x3607] || _0x7098[_0x3607] < _0x70B5)
			{
				_0x6EAB += "<td " + _0x7146 + " width=\'11%\'>" + "" + "</td>"
			}
			else
			{
				if (_0x7098[_0x3607] > _0x70B5)
				{
					_0x6EAB += "<td " + _0x7129 + " width=\'11%\'>" + getResearchPerkDescription(_0x70B5, _0x70D2[_0x3607]) + "</td>"
				}
				else
				{
					_0x707B[_0x3607] = true;
					var _0x70EF = "";
					if (getItem("researcherTimer") > 0)
					{
						_0x70EF = "style=\'text-decoration:line-through\'"
					};
					_0x6EAB += "<td onclick=\'researchConfirm(\"" + _0x70D2[_0x3607] + "\")\' " + _0x6F3C + " " + _0x7163 + " width=\'11%\'>" + "<span " + _0x70EF + ">Research for <img src=\'images/coins.png\' class=\'img-20\' /> " + formatNumber(getResearchPrice(_0x7098[_0x3607])) + "</span><br /><br /><b style=\'color:grey\'>Unlocks: </b><i style=\'color:grey\'>" + getResearchPerkDescription(_0x70B5, _0x70D2[_0x3607]) + "</i></span></td>"
				}
			}
		}
	};
	_0x6EAB += "</tr>";
	_0x6EAB += "</table>";
	_0x396D.innerHTML = _0x6EAB
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

function researchConfirm(_0x3EFA)
{
	if (getItem(_0x3EFA.toLowerCase() + "Unlocked") == 0)
	{
		confirmDialogue("images/x.png", "You cannot research a skill that is locked.", "Close", "", "")
	}
	else
	{
		var _0x44DE = getResearchPrice(getItem("researcher" + _0x3EFA));
		confirmDialogue("images/" + _0x3EFA.toLowerCase() + "Skill_researcher.png", "Start researching this skill?", "Research", "Cancel", "RESEARCH=" + _0x3EFA.toLowerCase())
	}
}

function getItemName(_0x3933)
{
	if (_0x3933 == ("stardust1000"))
	{
		return "Stardust x 1000"
	};
	var _0x53EF = _0x3933.charAt(0).toUpperCase();
	for (var _0x3607 = 1; _0x3607 < _0x3933.length; _0x3607++)
	{
		if (_0x3933.charAt(_0x3607) == _0x3933.charAt(_0x3607).toUpperCase() && _0x3933.charAt(_0x3607) != "\'")
		{
			_0x53EF += " "
		};
		_0x53EF += _0x3933.charAt(_0x3607)
	};
	return _0x53EF
}

function addItemBoxQuests(_0x3BCE, _0x3B5A, _0x384B, _0x3C08, _0x3C25, _0x3B3D, _0x396D, _0x3BEB)
{
	var _0x398A = document.getElementById(_0x396D);
	var _0x3885 = document.createElement("div");
	var _0x3BB1 = false;
	if (getItem(_0x3BCE + "Quest") == -1)
	{
		_0x3BB1 = true;
		_0x3885.setAttribute("class", "quest-button-completed")
	}
	else
	{
		_0x3885.setAttribute("class", "quest-button")
	};
	_0x3885.setAttribute("id", "quest-box-" + _0x3BCE);
	_0x3885.setAttribute("onclick", "sendBytes(\'QUEST=" + _0x3BCE + "~0\')");
	var _0x38BF = document.createElement("div");
	if (getItem("questPoints") < _0x3BEB)
	{
		var _0x38DC = getImage("images/questPoints_lock.png", "quest-x-" + _0x3607);
		_0x38DC.setAttribute("class", "img-30");
		_0x3885.setAttribute("class", "quest-button-locked");
		_0x38BF.appendChild(_0x38DC);
		_0x38BF.innerHTML += " You need at least " + getItem("questPoints") + "/" + _0x3BEB + " quest points to unlock this quest.";
		_0x3885.setAttribute("onclick", "confirmDialogue(\'images/questPoints_lock.png\', \'You need to complete other quests to earn quest points before starting this one.\', \'Exit\', \'\', \'\')")
	}
	else
	{
		var _0x38BF = document.createElement("div");
		var _0x3AC9 = "";
		if (_0x3BB1)
		{
			_0x3AC9 = "<img src=\'images/check.png\' class=\'img-20\' />"
		};
		_0x38BF.innerHTML = _0x3B5A + " " + _0x3AC9 + "<br /><span style=\'font-size:10pt;color:black;\'>" + _0x384B + "<br /><br />" + _0x3B3D + "</span>";
		_0x38BF.setAttribute("style", "font-size:16pt;");
		var _0x3B94 = document.createElement("div");
		_0x3B94.setAttribute("style", "float:right;font-size:10pt;color:purple;text-align:right;");
		for (var _0x3607 = 0; _0x3607 < _0x3C08.length; _0x3607++)
		{
			var _0x38DC = getImage("images/x.png", _0x3BCE + "_quest-x-" + _0x3607);
			_0x38DC.setAttribute("class", "img-15");
			if (_0x3C25[_0x3607])
			{
				_0x38DC = getImage("images/check_dark.png", _0x3BCE + "_quest-check-" + _0x3607);
				_0x38DC.setAttribute("class", "img-15")
			};
			var _0x3B77 = document.createElement("span");
			_0x3B77.innerHTML = _0x3C08[_0x3607] + " ";
			if (_0x3C25[_0x3607] != null && getItem(_0x3BCE + "Quest") != -1)
			{
				_0x3B77.appendChild(_0x38DC)
			};
			_0x3B77.appendChild(document.createElement("br"));
			_0x3B94.appendChild(_0x3B77)
		};
		_0x3885.appendChild(_0x3B94)
	};
	_0x3885.appendChild(_0x38BF);
	_0x398A.appendChild(_0x3885)
}

function changeBackgroundRightSection(_0x444D)
{
	switch (_0x444D)
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

function addItemBoxDonorShop(_0x39C4, _0x3A1B, _0x3A8F, _0x39E1, _0x39A7, _0x396D)
{
	var _0x3729 = "#262626";
	var _0x370C = "#ffcc99";
	var _0x398A = document.getElementById(_0x396D);
	var _0x3885 = document.createElement("div");
	_0x3885.setAttribute("class", "item-box");
	if (_0x39A7 != "")
	{
		_0x3885.setAttribute("data-tooltip-id", _0x39A7)
	};
	_0x3885.setAttribute("onclick", "clicksDonorShopItem(\'" + _0x39C4 + "\')");
	_0x3885.setAttribute("id", "item-box-donor-shop-" + _0x39C4);
	_0x3885.style.backgroundColor = _0x3729;
	_0x3885.style.border = "1px solid " + _0x370C;
	_0x3885.style.height = "220px";
	var _0x38BF = document.createElement("div");
	_0x38BF.setAttribute("style", "text-align:center; font-weight: bold;font-size:14pt;");
	_0x38BF.innerHTML = _0x3A8F;
	var _0x38A2 = document.createElement("div");
	_0x38A2.setAttribute("style", "text-align:center");
	var _0x38DC = document.createElement("img");
	var _0x38DC = getImage(_0x3A1B, "shop-" + _0x39C4);
	_0x38DC.setAttribute("class", "img-100");
	var _0x3868 = document.createElement("div");
	_0x3868.setAttribute("style", "text-align:center");
	var _0x3A55 = getImage("images/donorCoins.png", "shop-" + _0x39C4 + "-coins");
	_0x3A55.setAttribute("class", "img-20");
	var _0x3A38 = getImage("images/check.png", "shop-" + _0x39C4 + "-check");
	_0x3A38.setAttribute("class", "img-10");
	var _0x3A72 = getImage("images/x.png", "shop-" + _0x39C4 + "-x");
	_0x3A72.setAttribute("class", "img-10");
	if (_0x39E1 > 0)
	{
		_0x3868.appendChild(_0x3A55);
		_0x3868.innerHTML = _0x3868.innerHTML + " " + formatNumber(_0x39E1) + " ";
		if (getItem("boundDonorCoins", false) >= _0x39E1)
		{
			_0x3868.appendChild(_0x3A38)
		}
		else
		{
			_0x3868.appendChild(_0x3A72)
		};
		var _0x39FE = document.createElement("div");
		_0x39FE.innerHTML = "<i style=\'font-size:12pt;color:grey;\'>(Lasts 30 days)</i>";
		_0x3868.appendChild(_0x39FE)
	}
	else
	{
		var _0x39FE = document.createElement("div");
		_0x39FE.innerHTML = "<i style=\'font-size:12pt;color:yellow;\'>1.00$ EACH<br /><span style=\'color:grey;font-size:10pt;\'>PayPal</span><br /><span style=\'color:grey;font-size:10pt;\'>(BTC Accepted Too)</span></i>";
		_0x3868.appendChild(_0x39FE)
	};
	_0x3885.appendChild(_0x38BF);
	_0x3885.appendChild(document.createElement("br"));
	_0x38A2.appendChild(_0x38DC);
	_0x3885.appendChild(_0x38A2);
	if (_0x39C4.length < 12)
	{
		_0x3885.appendChild(document.createElement("br"))
	};
	_0x3885.appendChild(document.createElement("br"));
	_0x3885.appendChild(_0x3868);
	_0x398A.appendChild(_0x3885)
}

function addItemBoxShop(_0x3916, _0x3A1B, _0x3933, _0x39E1, _0x39A7, _0x396D)
{
	var _0x3729 = "#262626";
	var _0x370C = "#ffcc99";
	var _0x398A = document.getElementById(_0x396D);
	var _0x3885 = document.createElement("div");
	_0x3885.setAttribute("class", "item-box");
	if (_0x39A7 != "")
	{
		_0x3885.setAttribute("data-tooltip-id", _0x39A7)
	};
	_0x3885.setAttribute("onclick", "clicksShopItem(\'" + _0x3916 + "\')");
	_0x3885.setAttribute("id", "item-box-shop-" + _0x3916);
	_0x3885.style.backgroundColor = _0x3729;
	_0x3885.style.border = "1px solid " + _0x370C;
	_0x3885.style.height = "220px";
	var _0x38BF = document.createElement("div");
	_0x38BF.setAttribute("style", "text-align:center; font-weight: bold;font-size:16pt;");
	_0x38BF.innerHTML = _0x3933;
	var _0x38A2 = document.createElement("div");
	_0x38A2.setAttribute("style", "text-align:center");
	var _0x38DC = document.createElement("img");
	if (_0x3A1B == "")
	{
		_0x3A1B = "images/" + _0x3916 + ".png"
	};
	var _0x38DC = getImage(_0x3A1B, "shop-" + _0x3916);
	_0x38DC.setAttribute("class", "img-100");
	var _0x3868 = document.createElement("div");
	_0x3868.setAttribute("style", "text-align:center");
	var _0x3A55 = getImage("images/coins.png", "shop-" + _0x3916 + "-coins");
	_0x3A55.setAttribute("class", "img-20");
	var _0x3A38 = getImage("images/check.png", "shop-" + _0x3916 + "-check");
	_0x3A38.setAttribute("class", "img-10");
	var _0x3A72 = getImage("images/x.png", "shop-" + _0x3916 + "-x");
	_0x3A72.setAttribute("class", "img-10");
	_0x3868.appendChild(_0x3A55);
	_0x3868.innerHTML = _0x3868.innerHTML + " " + formatNumber(_0x39E1) + " ";
	if (getItem("coins", false) >= _0x39E1)
	{
		_0x3868.appendChild(_0x3A38)
	}
	else
	{
		_0x3868.appendChild(_0x3A72)
	};
	_0x3885.appendChild(_0x38BF);
	_0x3885.appendChild(document.createElement("br"));
	_0x38A2.appendChild(_0x38DC);
	_0x3885.appendChild(_0x38A2);
	if (getItem("bought_" + _0x3916, false) > 0)
	{
		_0x3885.style.display = "none"
	};
	if (_0x3933.length < 12)
	{
		_0x3885.appendChild(document.createElement("br"))
	};
	_0x3885.appendChild(document.createElement("br"));
	_0x3885.appendChild(_0x3868);
	_0x398A.appendChild(_0x3885)
}

function loadQuestAndAchievementsTab()
{
	var _0x396D = "item-section-quests-1";
	document.getElementById(_0x396D).innerHTML = "";
	addItemBoxQuests("theMissingFeathers", "THE MISSING FEATHERS", "An archer is in need of feathers to finish crafting his arrows!", ["Have any sword equipped."], [getItem("weapon") == "rustySword"], "EASY", _0x396D, 0);
	addItemBoxQuests("letTheMiningBegin", "LET THE MINING BEGIN", "A miner would like to show you how to mine.", ["No Requirements"], [null], "EASY", _0x396D, 1);
	addItemBoxQuests("bobsPanic", "BOB\'S PANIC", "With the world becoming evil, Bob needs your help.", ["Taint the World"], [getItem("darkCrystalUsed") == 1], "EASY", _0x396D, 2);
	addItemBoxQuests("theResearcher", "THE RESEARCHER", "A scientist would like to keep working and needs your help.", ["Unlock 6 different skills"], [getItem("miningUnlocked") == 1 && getItem("craftingUnlocked") == 1 && getItem("woodcuttingUnlocked") == 1 && getItem("farmingUnlocked") == 1 && getItem("brewingUnlocked") == 1], "EASY", _0x396D, 2);
	addItemBoxQuests("theFisherman", "THE FISHERMAN", "A fisherman is in need for glass to finish his fishing rod.", ["Have glass on you"], [getItem("glass") > 0], "EASY", _0x396D, 4);
	addItemBoxQuests("theTelescope", "THE TELESCOPE", "Help fix the astronomer\'s telescope.", ["Must own a house."], [getItemString("home") != "none"], "EASY", _0x396D, 5);
	addItemBoxQuests("theGiantSnake", "THE GIANT SNAKE", "A giant snake is roaming the forest", ["Have crafted snakeskin armour"], [getItem("craftedSnakeskinArmour") > 0], "EASY", _0x396D, 5);
	addItemBoxQuests("theWizard", "THE WIZARD", "You\'re a wizard, " + capitalizeFirstLetter(getItemString("username")), ["Defeated the boss after the forest."], [getItem("bushyKills") > 0], "MEDIUM", _0x396D, 5);
	addItemBoxQuests("theFisherman2", "THE FISHERMAN PART 2", "A fisherman needs help to find a special catch.", ["Have a ruby or diamond in your fishing tool."], [getItem("rubyFishingRod") == 1 || getItem("diamondFishingRod") == 1 || getItem("rubySmallFishingNet") == 1 || getItem("diamondSmallFishingNet") == 1 || getItem("rubyHarpoon") == 1 || getItem("diamondHarpoon") == 1], "MEDIUM", _0x396D, 9);
	addItemBoxQuests("mommyTheSpider", "MOMMY THE SPIDER", "Mommy is embarrassed that her babies spit out poison on every occasion.", ["Killed 3 spiders in caves."], [getItem("spiderKills") >= 3], "EASY", _0x396D, 10);
	addItemBoxQuests("theStewChef", "THE STEW CHEF", "A chef needs your help making the perfect stew.", ["Be on cooldown for 30 minutes or more."], [getItem("heroCooldown") > 1800 || getItem("theStewChefQuest") != 0], "MEDIUM", _0x396D, 13);
	addItemBoxQuests("theFrozenBarbarian", "THE FROZEN BARBARIAN", "A barbarian is freezing to death.", ["Killed 3 boneheads in the northern fields."], [getItem("boneHeadKills") >= 3], "MEDIUM", _0x396D, 15)
}

function getQuestsInProgress()
{
	var _0x554B = 0;
	var _0x55DC = document.getElementById("item-section-quests-1").getElementsByTagName("div");
	for (var _0x3607 = 0; _0x3607 < _0x55DC.length; _0x3607++)
	{
		if (getItem(_0x55DC[_0x3607].id.split("-")[2] + "Quest") > 0)
		{
			_0x554B++
		}
	};
	return _0x554B
}

function loadShopTab()
{
	var _0x3933 = "";
	var _0x396D = "item-section-shop-1";
	document.getElementById(_0x396D).innerHTML = "";
	_0x3933 = "apple";
	if (getItem(_0x3933 + "Bought", false) != 1)
	{
		addItemBoxShop(_0x3933, "images/apples.png", "25 APPLES", 5, "tooltip-apple", _0x396D)
	};
	_0x3933 = "rustySword";
	if (getItem(_0x3933 + "Bought", false) != 1)
	{
		addItemBoxShop(_0x3933, "", "RUSTY SWORD", 15, "tooltip-rustySword", _0x396D)
	};
	_0x3933 = "stardustPickaxe";
	if (getItem(_0x3933 + "Bought", false) != 1)
	{
		addItemBoxShop(_0x3933, "", "STARDUST PICKAXE", 100, "tooltip-stardustPickaxe", _0x396D)
	};
	_0x3933 = "woodenShield";
	if (getItem(_0x3933 + "Bought", false) != 1)
	{
		addItemBoxShop(_0x3933, "", "WOODEN SHIELD", 1500, "tooltip-woodenShield", _0x396D)
	};
	if (getItem("communityCenter") == 1)
	{
		_0x3933 = "carePackage1";
		if (getItem(_0x3933 + "Bought", false) != 1)
		{
			addItemBoxShop(_0x3933, "images/carePackage1.png", "PACKAGE<br /><br />", 150, "tooltip-carePackage", _0x396D)
		};
		_0x3933 = "brewingKitMould";
		if (getItem(_0x3933 + "Bought", false) != 1)
		{
			addItemBoxShop(_0x3933, "", "CRAFTING MOULD", 500, "tooltip-mould", _0x396D)
		};
		_0x3933 = "vial";
		if (getItem(_0x3933 + "Bought", false) != 1)
		{
			addItemBoxShop(_0x3933, "", "5 VIALS", 100, "tooltip-vial", _0x396D)
		};
		_0x3933 = "storeBananas";
		if (getItem(_0x3933 + "Bought", false) != 1)
		{
			addItemBoxShop(_0x3933, "", "10 BANANAS", 50, "tooltip-storeBananas", _0x396D)
		};
		_0x3933 = "logs";
		if (getItem(_0x3933 + "Bought", false) != 1)
		{
			addItemBoxShop(_0x3933, "", "20 LOGS", 100, "tooltip-logs", _0x396D)
		};
		_0x3933 = "oakLogs";
		if (getItem(_0x3933 + "Bought", false) != 1)
		{
			addItemBoxShop(_0x3933, "", "5 OAK LOGS", 250, "tooltip-oakLogs", _0x396D)
		}
	};
	if (getItem("communityCenter2") == 1)
	{
		_0x3933 = "combatLog";
		if (getItem(_0x3933 + "Bought", false) != 1)
		{
			addItemBoxShop(_0x3933, "", "COMBAT TRACKER", 100, "tooltip-combatLog", _0x396D)
		};
		_0x3933 = "tree";
		if (getItem(_0x3933 + "Bought", false) != 1)
		{
			addItemBoxShop(_0x3933, "", "TREE", 150, "", _0x396D)
		};
		_0x3933 = "stardustHammer";
		if (getItem(_0x3933 + "Bought", false) != 1)
		{
			addItemBoxShop(_0x3933, "", "STARDUST HAMMER", 400, "tooltip-stardustHammer", _0x396D)
		};
		_0x3933 = "stardustBox1";
		addItemBoxShop(_0x3933, "", "STARDUST BOX I", 10000, "tooltip-stardustBox1", _0x396D);
		_0x3933 = "stardustBox2";
		addItemBoxShop(_0x3933, "", "STARDUST BOX II", 50000, "tooltip-stardustBox2", _0x396D)
	};
	if (getItem("communityCenter3") == 1)
	{
		_0x3933 = "lumberJack";
		if (getItem(_0x3933 + "Bought", false) != 1)
		{
			addItemBoxShop(_0x3933, "images/lumberJack.png", "LUMBERJACK<br /><br />", 250, "tooltip-lumberJack", _0x396D)
		};
		_0x3933 = "carePackage2";
		if (getItem(_0x3933 + "Bought", false) != 1)
		{
			addItemBoxShop(_0x3933, "images/carePackage2.png", "PACKAGE<br /><br />", 1000, "tooltip-carePackage", _0x396D)
		};
		_0x3933 = "bronzeOven";
		if (getItem(_0x3933 + "Bought", false) != 1)
		{
			addItemBoxShop(_0x3933, "images/bronzeOven.png", "BRONZE OVEN<br /><br />", 10000, "tooltip-bronzeOven", _0x396D)
		}
	};
	if (getItem("communityCenter4") == 1)
	{
		_0x3933 = "carePackage3";
		if (getItem(_0x3933 + "Bought", false) != 1)
		{
			addItemBoxShop(_0x3933, "images/carePackage3.png", "PACKAGE<br /><br />", 85000, "tooltip-carePackage", _0x396D)
		};
		_0x3933 = "pirate";
		if (getItem(_0x3933 + "Bought", false) != 1)
		{
			addItemBoxShop(_0x3933, "images/pirate.png", "PIRATE<br /><br />", 500000, "tooltip-pirate", _0x396D)
		}
	}
}

function loadDonorShopTab()
{
	var _0x3933 = "";
	var _0x396D = "item-section-donorshop-1";
	document.getElementById(_0x396D).innerHTML = "";
	addItemBoxDonorShop("buyDonorCoins", "images/donorCoins.png", "BUY", 0, "tooltip-buyDonorCoins", _0x396D);
	addItemBoxDonorShop("donorPackage", "images/donorPackage.png", "ALL DONOR BUFFS", 15, "tooltip-donorPackage", _0x396D);
	addItemBoxDonorShop("woodcuttingPatch5", "images/woodcuttingSkill.png", "PATCH #5", 2, "tooltip-donorWoodcuttingPatch", _0x396D);
	addItemBoxDonorShop("woodcuttingPatch6", "images/woodcuttingSkill.png", "PATCH #6", 2, "tooltip-donorWoodcuttingPatch", _0x396D);
	addItemBoxDonorShop("farmingPlot5", "images/farmingSkill.png", "PATCH #5", 2, "tooltip-donorFarmingPlot", _0x396D);
	addItemBoxDonorShop("farmingPlot6", "images/farmingSkill.png", "PATCH #6", 2, "tooltip-donorFarmingPlot", _0x396D);
	addItemBoxDonorShop("moreOfflineTime", "images/hourglass.png", "12H OFFLINE TIME", 4, "tooltip-donorMoreOfflineTime", _0x396D);
	addItemBoxDonorShop("bonusXp", "images/globalSkill.png", "+10% XP", 5, "tooltip-donorBonusXp", _0x396D)
}
var global_foodMap = [];

function Food(_0x5015, _0x4FA1, _0x4FF8, _0x4FDB, _0x40AD, _0x4FBE, _0x384B)
{
	this.rawFoodName = _0x5015;
	this.cookedFoodName = _0x4FA1;
	this.heat = _0x4FF8;
	this.energy = _0x4FDB;
	this.xp = _0x40AD;
	this.cookLevel = _0x4FBE;
	this.desc = _0x384B
}

function objects_loadFood(_0x3746)
{
	var _0x4E45 = null;
	var _0x3763 = _0x3746.split("~");
	var _0x554B = 0;
	for (var _0x3607 = 0; _0x3607 < _0x3763.length; _0x3607 += 0)
	{
		var _0x5015 = _0x3763[_0x3607];
		_0x3607++;
		var _0x4FA1 = _0x3763[_0x3607];
		_0x3607++;
		var _0x4FF8 = _0x3763[_0x3607];
		_0x3607++;
		var _0x4FDB = _0x3763[_0x3607];
		_0x3607++;
		var _0x40AD = _0x3763[_0x3607];
		_0x3607++;
		var _0x4FBE = _0x3763[_0x3607];
		_0x3607++;
		var _0x384B = _0x3763[_0x3607];
		_0x3607++;
		_0x4E45 = new Food(_0x5015, _0x4FA1, _0x4FF8, _0x4FDB, _0x40AD, _0x4FBE, _0x384B);
		global_foodMap[_0x5015] = _0x4E45;
		global_foodMap[_0x4FA1] = _0x4E45;
		global_foodMap[_0x554B] = _0x4E45;
		_0x554B++
	}
}
var global_machineryMap = [];

function Machinery(_0x5E21, _0x5E3E, _0x5E95, _0x5DCA, _0x5E04, _0x5E78, _0x5DE7, _0x5E5B, _0x5EB2)
{
	this.machineryName = _0x5E21;
	this.oil = _0x5E3E;
	this.stoneChance = _0x5E95;
	this.copperChance = _0x5DCA;
	this.ironChance = _0x5E04;
	this.silverChance = _0x5E78;
	this.goldChance = _0x5DE7;
	this.promethiumChance = _0x5E5B;
	this.titaniumChance = _0x5EB2
}

function objects_loadMachinery(_0x3746)
{
	var _0x59F0 = null;
	var _0x3763 = _0x3746.split("~");
	var _0x554B = 0;
	for (var _0x3607 = 0; _0x3607 < _0x3763.length; _0x3607 += 0)
	{
		var _0x5E21 = _0x3763[_0x3607];
		_0x3607++;
		var _0x5E3E = _0x3763[_0x3607];
		_0x3607++;
		var _0x5E95 = _0x3763[_0x3607];
		_0x3607++;
		var _0x5DCA = _0x3763[_0x3607];
		_0x3607++;
		var _0x5E04 = _0x3763[_0x3607];
		_0x3607++;
		var _0x5E78 = _0x3763[_0x3607];
		_0x3607++;
		var _0x5DE7 = _0x3763[_0x3607];
		_0x3607++;
		var _0x5E5B = _0x3763[_0x3607];
		_0x3607++;
		var _0x5EB2 = _0x3763[_0x3607];
		_0x3607++;
		_0x59F0 = new Machinery(_0x5E21, _0x5E3E, _0x5E95, _0x5DCA, _0x5E04, _0x5E78, _0x5DE7, _0x5E5B, _0x5EB2);
		global_machineryMap[_0x554B] = _0x59F0;
		_0x554B++
	}
}
var global_itemPriceMap = [];

function ItemPrice(_0x4ED6, _0x44DE)
{
	this.name = _0x4ED6;
	this.price = _0x44DE
}

function objects_loadShopPrices(_0x3746)
{
	var _0x61C1 = null;
	var _0x3763 = _0x3746.split("~");
	var _0x554B = 0;
	for (var _0x3607 = 0; _0x3607 < _0x3763.length; _0x3607 += 0)
	{
		var _0x4ED6 = _0x3763[_0x3607];
		_0x3607++;
		var _0x44DE = _0x3763[_0x3607];
		_0x3607++;
		_0x61C1 = new ItemPrice(_0x4ED6, _0x44DE);
		global_itemPriceMap[_0x4ED6] = _0x61C1;
		global_itemPriceMap[_0x554B] = _0x61C1;
		_0x554B++
	}
}

function StardustTool(_0x4C92, _0x61FB, _0x61DE)
{
	this.tool = _0x4C92;
	this.arrayItemsToConvertArray = _0x61FB;
	this.arrayItemsConvetXpArray = _0x61DE
}
var global_stardustToolsMap = [];

function objects_loadStardustTools(_0x3746)
{
	var _0x6218 = null;
	var _0x3763 = _0x3746.split("~");
	var _0x554B = 0;
	var _0x6235 = _0x3763[0];
	var _0x61FB = [];
	var _0x61DE = [];
	for (var _0x3607 = 1; _0x3607 < _0x3763.length; _0x3607 += 0)
	{
		_0x61FB.push(_0x3763[_0x3607]);
		_0x3607++;
		_0x61DE.push(_0x3763[_0x3607]);
		_0x3607++
	};
	global_stardustToolsMap[_0x6235] = (new StardustTool(_0x6235, _0x61FB, _0x61DE))
}
var global_seedMap = [];

function Seed(_0x4ED6, _0x3F8B, _0x6187, _0x6130, _0x40AD, _0x61A4, _0x614D, _0x616A, _0x384B)
{
	this.name = _0x4ED6;
	this.level = _0x3F8B;
	this.stopsDieingAtLevel = _0x6187;
	this.bonemeal = _0x6130;
	this.xp = _0x40AD;
	this.timer = _0x61A4;
	this.droprate = _0x614D;
	this.isTreeSeed = _0x616A;
	this.desc = _0x384B
}

function objects_loadSeeds(_0x3746)
{
	var _0x5A64 = null;
	var _0x3763 = _0x3746.split("~");
	var _0x554B = 0;
	for (var _0x3607 = 0; _0x3607 < _0x3763.length; _0x3607 += 0)
	{
		var _0x4ED6 = _0x3763[_0x3607];
		_0x3607++;
		var _0x3F8B = _0x3763[_0x3607];
		_0x3607++;
		var _0x6187 = _0x3763[_0x3607];
		_0x3607++;
		var _0x6130 = _0x3763[_0x3607];
		_0x3607++;
		var _0x40AD = _0x3763[_0x3607];
		_0x3607++;
		var _0x61A4 = _0x3763[_0x3607];
		_0x3607++;
		var _0x614D = _0x3763[_0x3607];
		_0x3607++;
		var _0x616A = _0x3763[_0x3607];
		_0x3607++;
		var _0x384B = _0x3763[_0x3607];
		_0x3607++;
		_0x5A64 = new Seed(_0x4ED6, _0x3F8B, _0x6187, _0x6130, _0x40AD, _0x61A4, _0x614D, _0x616A, _0x384B);
		global_seedMap[_0x4ED6] = _0x5A64;
		global_seedMap[_0x554B] = _0x5A64;
		_0x554B++
	}
}

function objects_loadEquipment(_0x3746)
{
	var _0x597C = null;
	var _0x3763 = _0x3746.split("~");
	var _0x554B = 0;
	for (var _0x3607 = 0; _0x3607 < _0x3763.length; _0x3607 += 0)
	{
		var _0x4ED6 = _0x3763[_0x3607];
		_0x3607++;
		var _0x4E62 = _0x3763[_0x3607];
		_0x3607++;
		var _0x4E7F = _0x3763[_0x3607];
		_0x3607++;
		var _0x4EF3 = _0x3763[_0x3607];
		_0x3607++;
		var _0x4E9C = _0x3763[_0x3607];
		_0x3607++;
		var _0x4EB9 = _0x3763[_0x3607];
		_0x3607++;
		var _0x3C42 = _0x3763[_0x3607];
		_0x3607++;
		var _0x4F10 = _0x3763[_0x3607];
		_0x3607++;
		var _0x384B = _0x3763[_0x3607];
		_0x3607++;
		_0x597C = new Equipment(_0x4ED6, _0x4E62, _0x4E7F, _0x4EF3, _0x4E9C, _0x4EB9, _0x3C42, _0x4F10, _0x384B);
		global_equipmentMap[_0x4ED6] = _0x597C;
		global_equipmentMap[_0x554B] = _0x597C;
		_0x554B++
	}
}
var global_equipmentMap = [];

function Equipment(_0x4ED6, _0x4E62, _0x4E7F, _0x4EF3, _0x4E9C, _0x4EB9, _0x3C42, _0x4F10, _0x384B)
{
	this.name = _0x4ED6;
	this.accuracy = _0x4E62;
	this.attack = _0x4E7F;
	this.speed = _0x4EF3;
	this.defence = _0x4E9C;
	this.magic = _0x4EB9;
	this.slot = _0x3C42;
	this.type = _0x4F10;
	this.desc = _0x384B
}

function objects_loadEquipment(_0x3746)
{
	var _0x597C = null;
	var _0x3763 = _0x3746.split("~");
	var _0x554B = 0;
	for (var _0x3607 = 0; _0x3607 < _0x3763.length; _0x3607 += 0)
	{
		var _0x4ED6 = _0x3763[_0x3607];
		_0x3607++;
		var _0x4E62 = _0x3763[_0x3607];
		_0x3607++;
		var _0x4E7F = _0x3763[_0x3607];
		_0x3607++;
		var _0x4EF3 = _0x3763[_0x3607];
		_0x3607++;
		var _0x4E9C = _0x3763[_0x3607];
		_0x3607++;
		var _0x4EB9 = _0x3763[_0x3607];
		_0x3607++;
		var _0x3C42 = _0x3763[_0x3607];
		_0x3607++;
		var _0x4F10 = _0x3763[_0x3607];
		_0x3607++;
		var _0x384B = _0x3763[_0x3607];
		_0x3607++;
		_0x597C = new Equipment(_0x4ED6, _0x4E62, _0x4E7F, _0x4EF3, _0x4E9C, _0x4EB9, _0x3C42, _0x4F10, _0x384B);
		global_equipmentMap[_0x4ED6] = _0x597C;
		global_equipmentMap[_0x554B] = _0x597C;
		_0x554B++
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
		}
	}
}

function addItemBox(_0x3916, _0x3950, _0x384B, _0x396D, _0x3729, _0x370C, _0x3933, _0x39A7, _0x382E)
{
	var _0x398A = document.getElementById(_0x396D);
	var _0x3885 = document.createElement("div");
	_0x3885.setAttribute("class", "item-box");
	_0x3885.setAttribute("onclick", "clicksItem(\'" + _0x3916 + "\')");
	_0x3885.setAttribute("oncontextmenu", "return rightClicksItem(\'" + _0x3916 + "\');");
	_0x3885.setAttribute("id", "item-box-" + _0x3916);
	if (_0x39A7 != "")
	{
		_0x3885.setAttribute("data-tooltip-id", _0x39A7)
	};
	_0x3885.style.backgroundColor = _0x3729;
	_0x3885.style.border = "1px solid " + _0x370C;
	var _0x38BF = document.createElement("div");
	_0x38BF.setAttribute("style", "text-align:center; font-weight: bold;font-size:12pt;color:silver;");
	if (_0x3916.startsWith("stardust") && !_0x3916.endsWith("Potion") && !_0x3916.endsWith("Seeds"))
	{
		var _0x38F9 = getImage("images/stardustIcon.png", "item-" + _0x3916 + "-box-image-title-icon");
		_0x38F9.setAttribute("class", "img-20");
		_0x38BF.appendChild(_0x38F9)
	};
	if (_0x3916 == "sapphire" || _0x3916 == "ruby" || _0x3916 == "emerald" || _0x3916 == "diamond" || _0x3916 == "bloodDiamond")
	{
		_0x38BF.setAttribute("style", "text-align:center; font-weight: bold;color:cyan;")
	};
	_0x38BF.innerHTML += _0x3933;
	if (_0x382E)
	{
		_0x38BF.setAttribute("style", "text-align:center; font-weight: bold;font-size:16pt;color:orange;")
	};
	var _0x38A2 = document.createElement("div");
	_0x38A2.setAttribute("style", "text-align:center");
	var _0x38DC = getImage("images/" + _0x3916 + getImageExtention(_0x3916), "item-" + _0x3916 + "-box-image");
	_0x38DC.setAttribute("id", "item-box-" + _0x3916 + "-image");
	_0x38DC.setAttribute("class", "img-100");
	var _0x3868 = document.createElement("item-" + _0x3916);
	_0x3868.setAttribute("type", "number");
	_0x3868.setAttribute("style", "text-align:center;display:block;");
	_0x3868.innerHTML = formatNumber(getItem(_0x3916), false);
	if (_0x3950 == 1)
	{
		_0x3868 = document.createElement("div");
		_0x3868.setAttribute("style", "text-align:center");
		_0x3868.setAttribute("id", "itemBox-" + _0x3916 + "-amount");
		_0x3868.innerHTML = ""
	};
	if (_0x3916 == "researcher")
	{
		_0x3868 = document.createElement("span");
		_0x3868.setAttribute("style", "text-align:center;display:block;");
		_0x3868.innerHTML = "<b style=\'color:orange;\'>Completed: </b>" + "<span id=\'research-completed-label\'>" + getTotalResearches() + "</span>"
	};
	if (getOilPerSecondForAItem(_0x3916) > 0)
	{
		_0x3868 = document.createElement("span");
		_0x3868.setAttribute("type", "number");
		_0x3868.setAttribute("style", "text-align:center;display:block;");
		_0x3868.innerHTML = "<div style=\'margin-top:7px;\'><img src=\'images/oil.png\' class=\'img-20\' /> " + formatNumber(getOilPerSecondForAItem(_0x3916)) + "</div>"
	};
	if (_0x3916.toLowerCase().endsWith("oxygentank"))
	{
		_0x3868 = document.createElement("span");
		_0x3868.setAttribute("type", "number");
		_0x3868.setAttribute("style", "text-align:center;display:block;");
		_0x3868.innerHTML = "<span id=\'oxygenTank-itemBox-value\'></span>"
	};
	if (_0x3916.toLowerCase().endsWith("chef"))
	{
		_0x3868 = document.createElement("span");
		_0x3868.setAttribute("type", "number");
		_0x3868.setAttribute("style", "text-align:center;display:block;");
		_0x3868.innerHTML = "<span id=\'chef-itemBox-value\'></span>"
	};
	if (_0x3916.toLowerCase().endsWith("bonemealbin"))
	{
		_0x3868 = document.createElement("span");
		_0x3868.setAttribute("type", "number");
		_0x3868.setAttribute("style", "text-align:center;display:block;");
		_0x3868.innerHTML = "<img src=\'images/bonemeal.png\' class=\'img-20\' /> " + "<item-bonemeal>0</item-bonemeal>"
	};
	if (_0x3916 == "axe")
	{
		_0x3868 = document.createElement("span");
		_0x3868.setAttribute("type", "number");
		_0x3868.setAttribute("style", "text-align:center;display:block;");
		_0x3868.innerHTML = "<img src=\'images/logs.png\' class=\'img-20\' /> 5 - 10"
	};
	if (_0x3916 == "sapphireAxe")
	{
		_0x3868 = document.createElement("span");
		_0x3868.setAttribute("type", "number");
		_0x3868.setAttribute("style", "text-align:center;display:block;");
		_0x3868.innerHTML = "<img src=\'images/logs.png\' class=\'img-20\' /> 10 - 15"
	};
	if (_0x3916 == "emeraldAxe")
	{
		_0x3868 = document.createElement("span");
		_0x3868.setAttribute("type", "number");
		_0x3868.setAttribute("style", "text-align:center;display:block;");
		_0x3868.innerHTML = "<img src=\'images/logs.png\' class=\'img-20\' /> 15 - 20"
	};
	if (_0x3916 == "rubyAxe")
	{
		_0x3868 = document.createElement("span");
		_0x3868.setAttribute("type", "number");
		_0x3868.setAttribute("style", "text-align:center;display:block;");
		_0x3868.innerHTML = "<img src=\'images/logs.png\' class=\'img-20\' /> 20 - 25"
	};
	if (_0x3916 == "diamondAxe")
	{
		_0x3868 = document.createElement("span");
		_0x3868.setAttribute("type", "number");
		_0x3868.setAttribute("style", "text-align:center;display:block;");
		_0x3868.innerHTML = "<img src=\'images/logs.png\' class=\'img-20\' /> 25 - 30"
	};
	if (_0x3916 == "chainsaw")
	{
		_0x3868 = document.createElement("span");
		_0x3868.setAttribute("type", "number");
		_0x3868.setAttribute("style", "text-align:center;display:block;color:grey");
		_0x3868.innerHTML = "<img src=\'images/logs.png\' class=\'img-20\' /> +5"
	};
	if (_0x3916 == "sapphireChainsaw")
	{
		_0x3868 = document.createElement("span");
		_0x3868.setAttribute("type", "number");
		_0x3868.setAttribute("style", "text-align:center;display:block;color:grey");
		_0x3868.innerHTML = "<img src=\'images/logs.png\' class=\'img-20\' /> +10"
	};
	if (_0x3916 == "emeraldChainsaw")
	{
		_0x3868 = document.createElement("span");
		_0x3868.setAttribute("type", "number");
		_0x3868.setAttribute("style", "text-align:center;display:block;color:grey");
		_0x3868.innerHTML = "<img src=\'images/logs.png\' class=\'img-20\' /> +15"
	};
	if (_0x3916 == "rubyChainsaw")
	{
		_0x3868 = document.createElement("span");
		_0x3868.setAttribute("type", "number");
		_0x3868.setAttribute("style", "text-align:center;display:block;color:grey");
		_0x3868.innerHTML = "<img src=\'images/logs.png\' class=\'img-20\' /> +20"
	};
	if (_0x3916 == "diamondChainsaw")
	{
		_0x3868 = document.createElement("span");
		_0x3868.setAttribute("type", "number");
		_0x3868.setAttribute("style", "text-align:center;display:block;color:grey");
		_0x3868.innerHTML = "<img src=\'images/logs.png\' class=\'img-20\' /> +25"
	};
	if (_0x3916 == "trowel")
	{
		_0x3868 = document.createElement("span");
		_0x3868.setAttribute("type", "number");
		_0x3868.setAttribute("style", "text-align:center;display:block;color:grey");
		_0x3868.innerHTML = "<img src=\'images/seedList.png\' class=\'img-20\' /> +5%"
	};
	if (_0x3916 == "sapphireTrowel")
	{
		_0x3868 = document.createElement("span");
		_0x3868.setAttribute("type", "number");
		_0x3868.setAttribute("style", "text-align:center;display:block;color:grey");
		_0x3868.innerHTML = "<img src=\'images/seedList.png\' class=\'img-20\' /> +10%"
	};
	if (_0x3916 == "emeraldTrowel")
	{
		_0x3868 = document.createElement("span");
		_0x3868.setAttribute("type", "number");
		_0x3868.setAttribute("style", "text-align:center;display:block;color:grey");
		_0x3868.innerHTML = "<img src=\'images/seedList.png\' class=\'img-20\' /> +15%"
	};
	if (_0x3916 == "rubyTrowel")
	{
		_0x3868 = document.createElement("span");
		_0x3868.setAttribute("type", "number");
		_0x3868.setAttribute("style", "text-align:center;display:block;color:grey");
		_0x3868.innerHTML = "<img src=\'images/seedList.png\' class=\'img-20\' /> +20%"
	};
	if (_0x3916 == "diamondTrowel")
	{
		_0x3868 = document.createElement("span");
		_0x3868.setAttribute("type", "number");
		_0x3868.setAttribute("style", "text-align:center;display:block;color:grey");
		_0x3868.innerHTML = "<img src=\'images/seedList.png\' class=\'img-20\' /> +25%"
	};
	if (_0x3916 == "museum")
	{
		_0x3868 = document.createElement("span");
		_0x3868.setAttribute("type", "number");
		_0x3868.setAttribute("style", "text-align:center;display:block;color:grey");
		_0x3868.innerHTML = "<span id=\'museum-info-itembox\'>" + getMuseumItemsCount()[0] + "/" + getMuseumItemsCount()[1] + "</span>"
	};
	if (_0x3916 == "puzzleChest1")
	{
		_0x3868 = document.createElement("span");
		_0x3868.setAttribute("type", "number");
		_0x3868.setAttribute("style", "text-align:center;display:block;");
		_0x3868.innerHTML = "<b>Difficulty:</b> <img src=\'images/easyIcon.png\' class=\'img-20\' /> " + "Easy"
	};
	if (_0x3916 == "manaStars")
	{
		_0x3868 = document.createElement("span");
		_0x3868.setAttribute("type", "number");
		_0x3868.setAttribute("style", "text-align:center;display:block;");
		_0x3868.innerHTML = "<span id=\'span-manaStarsLabel\'></span>"
	};
	if (_0x3916.endsWith("Oven"))
	{
		_0x3868 = document.createElement("span");
		_0x3868.setAttribute("type", "number");
		_0x3868.setAttribute("style", "text-align:center;display:block;");
		_0x3868.innerHTML = "<img src=\'images/heat.png\' class=\'img-20\' /> " + "<item-heat>0</item-heat>"
	};
	if (_0x3916 == "darkCrystalUsed")
	{
		_0x3868 = document.createElement("span");
		_0x3868.setAttribute("style", "text-align:center;display:block;");
		_0x3868.innerHTML = "<span id=\'darkCrystalUsed-label\'></span>"
	};
	if (_0x3916.toLowerCase().endsWith("stew"))
	{
		_0x3868 = document.createElement("span");
		_0x3868.setAttribute("style", "text-align:center;display:block;font-size:9pt;");
		_0x3868.innerHTML = "<img src=\'images/energy.png\' class=\'img-20\' /> <item-stewEnergy type=\'number\'>0</item-stewEnergy> " + "<br /> <img src=\'images/hourglass_grey.png\' class=\'img-20\' /> <item-stewCooldownReduction type=\'timer\'>0</item-stewCooldownReduction>"
	};
	_0x3885.appendChild(_0x38BF);
	_0x38A2.appendChild(_0x38DC);
	_0x3885.appendChild(_0x38A2);
	if (!_0x382E)
	{
		if (getItem(_0x3916, false) == 0)
		{
			_0x3885.style.display = "none"
		};
		_0x3885.appendChild(_0x3868)
	};
	_0x398A.appendChild(_0x3885)
}

function resetRepel()
{
	confirmDialogue("none", "Undo repel?", "Undo", "Cancel", "UNDO_REPEL")
}

function addMuseumItemBox(_0x3916, _0x3D81, _0x3950, _0x384B, _0x396D, _0x3729, _0x370C, _0x3933, _0x39A7, _0x382E)
{
	var _0x398A = document.getElementById(_0x396D);
	var _0x3885 = document.createElement("div");
	_0x3885.setAttribute("class", "item-box");
	_0x3885.setAttribute("onclick", "clicksItem(\'" + _0x3D81 + "\')");
	_0x3885.setAttribute("id", "item-box-" + _0x3916);
	if (_0x39A7 != "")
	{
		_0x3885.setAttribute("data-tooltip-id", _0x39A7)
	};
	_0x3885.style.backgroundColor = _0x3729;
	_0x3885.style.border = "1px solid " + _0x370C;
	var _0x38BF = document.createElement("div");
	_0x38BF.setAttribute("style", "text-align:center; font-weight: bold;font-size:12pt;color:silver;");
	_0x38BF.innerHTML += _0x3933;
	if (_0x382E)
	{
		_0x38BF.setAttribute("style", "text-align:center; font-weight: bold;font-size:16pt;color:orange;")
	};
	var _0x38A2 = document.createElement("div");
	_0x38A2.setAttribute("style", "text-align:center");
	var _0x38DC = getImage("images/" + _0x3916 + getImageExtention(_0x3916), "item-" + _0x3916 + "-box-image-" + getRandomInt(100000));
	_0x38DC.setAttribute("class", "img-100");
	var _0x3868 = document.createElement("item-" + _0x3916);
	_0x3868.setAttribute("type", "number");
	_0x3868.setAttribute("style", "text-align:center;display:block;");
	_0x3868.innerHTML = formatNumber(getItem(_0x3916), false);
	_0x3885.appendChild(_0x38BF);
	_0x38A2.appendChild(_0x38DC);
	_0x3885.appendChild(_0x38A2);
	if (!_0x382E)
	{
		if (getItem(_0x3916, false) == 0)
		{
			_0x3885.style.display = "none"
		};
		_0x3885.appendChild(_0x3868)
	};
	_0x398A.appendChild(_0x3885)
}

function addItemBoxMining(_0x3916, _0x384B, _0x396D, _0x3729, _0x370C, _0x3933, _0x39A7, _0x382E)
{
	var _0x398A = document.getElementById(_0x396D);
	var _0x3885 = document.createElement("div");
	_0x3885.setAttribute("class", "item-box");
	_0x3885.setAttribute("onclick", "clicksItem(\'" + _0x3916 + "\')");
	_0x3885.setAttribute("id", "item-box-" + _0x3916);
	if (_0x39A7 != "")
	{
		_0x3885.setAttribute("data-tooltip-id", _0x39A7)
	};
	_0x3885.style.backgroundColor = _0x3729;
	_0x3885.style.border = "1px solid " + _0x370C;
	var _0x38BF = document.createElement("div");
	_0x38BF.setAttribute("style", "text-align:center; font-weight: bold;font-size:16pt;");
	if (_0x3916 == "miner")
	{
		_0x38BF.innerHTML = "<img style=\'display:none;\' id=\'wrench-icon-miner\' src=\'images/wrench.png\' class=\'img-20\' /> " + _0x3933
	}
	else
	{
		_0x38BF.innerHTML = _0x3933
	};
	if (_0x382E)
	{
		_0x38BF.setAttribute("style", "text-align:center; font-weight: bold;font-size:16pt;color:orange;")
	};
	var _0x38A2 = document.createElement("div");
	_0x38A2.setAttribute("style", "text-align:center");
	var _0x38DC = getImage("images/" + _0x3916 + ".png", "item-" + _0x3916 + "-box-image");
	_0x38DC.setAttribute("class", "img-100");
	var _0x3868 = document.createElement("item-" + _0x3916);
	_0x3868.setAttribute("type", "number");
	_0x3868.setAttribute("style", "text-align:center;display:block;");
	_0x3868.innerHTML = formatNumber(getItem(_0x3916), false);
	_0x3885.appendChild(_0x38BF);
	_0x38A2.appendChild(_0x38DC);
	_0x3885.appendChild(_0x38A2);
	if (!_0x382E)
	{
		if (getItem(_0x3916, false) == 0)
		{
			_0x3885.style.display = "none"
		};
		_0x3885.appendChild(_0x3868)
	};
	_0x398A.appendChild(_0x3885)
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
	var _0x6A5D = ["heal", "poison", "reflect", "fire", "teleport", "freeze", "ghostScan", "invisibility"];
	var _0x6A23 = [3, 5, 3, 2, 0, 5, 0, 1];
	for (var _0x3607 = 0; _0x3607 < _0x6A5D.length; _0x3607++)
	{
		var _0x6A40 = _0x6A5D[_0x3607];
		if (getItem(_0x6A40) > 0)
		{
			showElement("combat-spell-" + _0x6A40);
			if (getItem(_0x6A40 + "Cooldown") > 0)
			{
				document.getElementById("combat-spell-" + _0x6A40 + "-icon").style.filter = "brightness(10%)";
				showElement("combat-spell-" + _0x6A40 + "-cooldown")
			}
			else
			{
				if (_0x6A23[_0x3607] > getItem("heroMana"))
				{
					document.getElementById("combat-spell-" + _0x6A40 + "-icon").style.filter = "brightness(20%) sepia(100%) hue-rotate(190deg) saturate(500%)";
					hideElement("combat-spell-" + _0x6A40 + "-cooldown")
				}
				else
				{
					document.getElementById("combat-spell-" + _0x6A40 + "-icon").style.filter = "brightness(100%)";
					hideElement("combat-spell-" + _0x6A40 + "-cooldown")
				}
			}
		}
	}
}

function convertNumberWithLetrtsKMBToNumber(_0x3811)
{
	if ((_0x3811 + "").indexOf("k") != -1 || (_0x3811 + "").indexOf("K") != -1)
	{
		_0x3811 = _0x3811.toUpperCase();
		_0x3811 = _0x3811.replace("K", "");
		_0x3811 = _0x3811 * 1000
	};
	if ((_0x3811 + "").indexOf("m") != -1 || (_0x3811 + "").indexOf("M") != -1)
	{
		_0x3811 = _0x3811.toUpperCase();
		_0x3811 = _0x3811.replace("M", "");
		_0x3811 = _0x3811 * 1000000
	};
	if ((_0x3811 + "").indexOf("b") != -1 || (_0x3811 + "").indexOf("B") != -1)
	{
		_0x3811 = _0x3811.toUpperCase();
		_0x3811 = _0x3811.replace("B", "");
		_0x3811 = _0x3811 * 1000000000
	};
	return _0x3811
}

function loadItemBoxes()
{
	var _0x5B4C = "#262626";
	var _0x5BFA = "#665200";
	var _0x5BDD = "grey";
	var _0x5C17 = "#995c00";
	var _0x5C34 = "#331a00";
	var _0x5BC0 = "#003366";
	var _0x5BA3 = "#000d1a";
	var _0x5B69 = "#008000";
	var _0x5B86 = "#006600";
	if (getItemString("home") == "none")
	{
		addItemBox("donorCoins", 0, "", "item-section-combat-1", "green", "lime", "DONOR COINS", "tooltip-donorCoins", false)
	};
	addItemBox("lootBagLog", 0, "", "explorer-section", _0x5B4C, "grey", "LOOT BAG LOGS", "", false);
	addItemBox("fieldsLootBag", 0, "", "explorer-section", _0x5BFA, _0x5BDD, "FIELDS", "tooltip-lootBag", false);
	addItemBox("forestLootBag", 0, "", "explorer-section", _0x5BFA, _0x5BDD, "FOREST", "tooltip-lootBag", false);
	addItemBox("cavesLootBag", 0, "", "explorer-section", _0x5BFA, _0x5BDD, "CAVES", "tooltip-lootBag", false);
	addItemBox("lavaDungeonLootBag", 0, "", "explorer-section", _0x5BFA, _0x5BDD, "LAVA DUNG.", "tooltip-lootBag", false);
	addItemBox("northernFieldsLootBag", 0, "", "explorer-section", _0x5BFA, _0x5BDD, "NORTH FIELDS", "tooltip-lootBag", false);
	addItemBox("cemeteryLootBag", 0, "", "explorer-section", _0x5BFA, _0x5BDD, "CEMETERY", "tooltip-lootBag", false);
	addItemBox("oceanLootBag", 0, "", "explorer-section", _0x5BFA, _0x5BDD, "OCEAN", "tooltip-lootBag", false);
	addItemBox("readMe", 0, "", "item-section-combat-1", _0x5B4C, "grey", "READ ME", "", false);
	addItemBox("fightMonsterButton", 0, "", "item-section-combat-1", _0x5B4C, "grey", "FIGHT NPC", "", true);
	addItemBox("fightPvpButton", 0, "", "item-section-combat-1", _0x5B4C, "grey", "PVP", "", true);
	addItemBox("combatLog", 1, "", "item-section-combat-1", _0x5B4C, "grey", "MONSTER LOG", "tooltip-combatLog", false);
	addItemBox("combatPresetsIcon", 1, "", "item-section-combat-1", _0x5B4C, "grey", "PRESETS", "tooltip-combatPresetsIcon", false);
	addItemBox("explorer", 1, "", "item-section-combat-1", _0x5B4C, "grey", "EXPLORER", "tooltip-explorer", false);
	addItemBox("heartCrystal1", 0, "", "item-section-combat-1", _0x5BFA, _0x5BDD, "HEART CRYSTAL", "tooltip-heartCrystal", false);
	addItemBox("heartCrystal2", 0, "", "item-section-combat-1", _0x5BFA, _0x5BDD, "HEART CRYSTAL", "tooltip-heartCrystal", false);
	addItemBox("bones", 0, "", "item-section-combat-1", _0x5BFA, _0x5BDD, "BONES", "tooltip-bones", false);
	addItemBox("ashes", 0, "", "item-section-combat-1", _0x5BFA, _0x5BDD, "ASHES", "tooltip-ashes", false);
	addItemBox("iceBones", 0, "", "item-section-combat-1", _0x5BFA, _0x5BDD, "ICE BONES", "tooltip-iceBones", false);
	addItemBox("snakeBones", 0, "", "item-section-combat-1", _0x5BFA, _0x5BDD, "SNAKE BONES", "tooltip-snakeBones", false);
	addItemBox("skeletonSkull", 0, "", "item-section-combat-1", _0x5BFA, _0x5BDD, "SKULL", "tooltip-skeletonSkull", false);
	addItemBox("ghostClothes", 0, "", "item-section-combat-1", _0x5BFA, _0x5BDD, "GHOST CLOTHES", "tooltip-ghostClothes", false);
	addItemBox("snakeskin", 0, "", "item-section-combat-1", _0x5BFA, _0x5BDD, "SNAKESKIN", "tooltip-snakeskin", false);
	addItemBox("batSkin", 0, "", "item-section-combat-1", _0x5BFA, _0x5BDD, "BATSKIN", "tooltip-batSkin", false);
	addItemBox("bearFur", 0, "", "item-section-combat-1", _0x5BFA, _0x5BDD, "BEAR FUR", "tooltip-bearFur", false);
	addItemBox("polarBearFur", 0, "", "item-section-combat-1", _0x5BFA, _0x5BDD, "POLAR BEAR FUR", "tooltip-polarBearFur", false);
	addItemBox("blackSilk", 0, "", "item-section-combat-1", _0x5BFA, _0x5BDD, "BLACK SILK", "tooltip-blackSilk", false);
	addItemBox("feather", 0, "", "item-section-combat-1", _0x5BFA, _0x5BDD, "FEATHERS", "tooltip-feather", false);
	addItemBox("fireFeather", 0, "", "item-section-combat-1", _0x5BFA, _0x5BDD, "FIRE FEATHERS", "tooltip-feather", false);
	addItemBox("iceFeather", 0, "", "item-section-combat-1", _0x5BFA, _0x5BDD, "ICE FEATHERS", "tooltip-feather", false);
	addItemBox("string", 0, "", "item-section-combat-1", _0x5BFA, _0x5BDD, "STRING", "tooltip-string", false);
	addItemBox("magicString", 0, "", "item-section-combat-1", _0x5BFA, _0x5BDD, "MAGIC STRING", "tooltip-magicString", false);
	addItemBox("bowBase", 0, "", "item-section-combat-1", _0x5BFA, _0x5BDD, "BOW BASE", "tooltip-bowBase", false);
	addItemBox("smallSnowballs", 0, "", "item-section-combat-1", _0x5BFA, _0x5BDD, "SMALL SNOWBALLS", "", false);
	addItemBox("mediumSnowball", 0, "", "item-section-combat-1", _0x5BFA, _0x5BDD, "MEDIUM SNOWBALL", "", false);
	addItemBox("largeSnowball", 0, "", "item-section-combat-1", _0x5BFA, _0x5BDD, "LARGE SNOWBALL", "", false);
	addItemBox("leftBranch", 0, "", "item-section-combat-1", _0x5BFA, _0x5BDD, "LEFT BRANCH", "", false);
	addItemBox("rightBranch", 0, "", "item-section-combat-1", _0x5BFA, _0x5BDD, "RIGHT BRANCH", "", false);
	addItemBox("chain", 0, "", "item-section-combat-1", _0x5BFA, _0x5BDD, "CHAIN", "tooltip-cemeterySkeleton", false);
	addItemBox("skeletonHead", 0, "", "item-section-combat-1", _0x5BFA, _0x5BDD, "CEMETERY SKULL", "tooltip-cemeterySkeleton", false);
	addItemBox("skeletonLeftArm", 0, "", "item-section-combat-1", _0x5BFA, _0x5BDD, "LEFT ARM", "tooltip-cemeterySkeleton", false);
	addItemBox("skeletonRightArm", 0, "", "item-section-combat-1", _0x5BFA, _0x5BDD, "RIGHT ARM", "tooltip-cemeterySkeleton", false);
	addItemBox("skeletonLeftLeg", 0, "", "item-section-combat-1", _0x5BFA, _0x5BDD, "LEFT LEG", "tooltip-cemeterySkeleton", false);
	addItemBox("skeletonRightLeg", 0, "", "item-section-combat-1", _0x5BFA, _0x5BDD, "RIGHT LEG", "tooltip-cemeterySkeleton", false);
	if (getItem("cookingUnlocked") == 0)
	{
		addItemBox("stew", 0, "", "item-section-combat-1", _0x5C17, _0x5BDD, "STEW", "tooltip-stew", false);
		addItemBox("apple", 0, "", "item-section-combat-1", _0x5C17, _0x5BDD, "APPLE", "tooltip-apple", false);
		addItemBox("storeBananas", 0, "", "item-section-combat-1", _0x5C17, _0x5BDD, "BANANAS", "tooltip-storeBananas", false);
		addItemBox("rawChicken", 0, "", "item-section-combat-1", _0x5C17, _0x5BDD, "RAW CHICKEN", "tooltip-rawChicken", false);
		addItemBox("cheese", 0, "", "item-section-combat-1", _0x5C17, _0x5BDD, "CHEESE", "tooltip-cheese", false);
		addItemBox("honey", 0, "", "item-section-combat-1", _0x5C17, _0x5BDD, "HONEY", "tooltip-honey", false)
	};
	addItemBox("combatVial", 0, "", "item-section-combat-1", _0x5C34, _0x5BDD, "EMPTY VIAL", "tooltip-combatVial", false);
	addItemBox("poisonCombatVial", 0, "", "item-section-combat-1", _0x5C34, _0x5BDD, "POISON VIAL", "tooltip-poisonCombatVial", false);
	addItemBox("arrow", 0, "", "item-section-combat-1", _0x5C34, _0x5BDD, "ARROWS", "tooltip-arrow", false);
	addItemBox("fireArrow", 0, "", "item-section-combat-1", _0x5C34, _0x5BDD, "FIRE ARROWS", "tooltip-fireArrow", false);
	addItemBox("iceArrow", 0, "", "item-section-combat-1", _0x5C34, _0x5BDD, "ICE ARROWS", "tooltip-iceArrow", false);
	addItemBox("rustySword", 0, "", "item-section-combat-1", _0x5C34, _0x5BDD, "RUSTY SWORD", "tooltip-rustySword", false);
	addItemBox("unlitTorch", 0, "", "item-section-combat-1", _0x5C34, _0x5BDD, "UNLIT TORCH", "tooltip-unlitTorch", false);
	addItemBox("torch", 0, "", "item-section-combat-1", _0x5C34, _0x5BDD, "TORCH", "tooltip-torch", false);
	addItemBox("stinger", 0, "", "item-section-combat-1", _0x5C34, _0x5BDD, "STINGER", "tooltip-stinger", false);
	addItemBox("brokenStinger", 0, "", "item-section-combat-1", _0x5C34, _0x5BDD, "STINGER", "tooltip-brokenStinger", false);
	addItemBox("ironDagger", 0, "", "item-section-combat-1", _0x5C34, _0x5BDD, "IRON DAGGER", "tooltip-ironDagger", false);
	addItemBox("offhandIronDagger", 0, "", "item-section-combat-1", _0x5C34, _0x5BDD, "OFFHAND DAGGER", "tooltip-offhandIronDagger", false);
	addItemBox("skeletonSword", 0, "", "item-section-combat-1", _0x5C34, _0x5BDD, "SKELETON SWORD", "tooltip-skeletonSword", false);
	addItemBox("bow", 0, "", "item-section-combat-1", _0x5C34, _0x5BDD, "BOW", "tooltip-bow", false);
	addItemBox("magicBow", 0, "", "item-section-combat-1", _0x5C34, _0x5BDD, "MAGIC BOW", "tooltip-magicBow", false);
	addItemBox("scythe", 0, "", "item-section-combat-1", _0x5C34, _0x5BDD, "SCYTHE", "tooltip-scythe", false);
	addItemBox("trident", 0, "", "item-section-combat-1", _0x5C34, _0x5BDD, "TRIDENT", "tooltip-trident", false);
	addItemBox("yetiLeftFoot", 0, "", "item-section-combat-1", _0x5C34, _0x5BDD, "YETI\'S FOOT (L)", "tooltip-yetiLeftFoot", false);
	addItemBox("yetiRightFoot", 0, "", "item-section-combat-1", _0x5C34, _0x5BDD, "YETI\'S FOOT (R)", "tooltip-yetiRightFoot", false);
	addItemBox("snakeskinMask", 0, "", "item-section-combat-1", _0x5C34, _0x5BDD, "SNAKESKIN MASK", "tooltip-snakeskinMask", false);
	addItemBox("snakeskinBody", 0, "", "item-section-combat-1", _0x5C34, _0x5BDD, "SNAKESKIN BODY", "tooltip-snakeskinBody", false);
	addItemBox("snakeskinLegs", 0, "", "item-section-combat-1", _0x5C34, _0x5BDD, "SNAKESKIN LEGS", "tooltip-snakeskinLegs", false);
	addItemBox("snakeskinBoots", 0, "", "item-section-combat-1", _0x5C34, _0x5BDD, "SNAKESKIN BOOTS", "tooltip-snakeskinBoots", false);
	addItemBox("snakeskinGloves", 0, "", "item-section-combat-1", _0x5C34, _0x5BDD, "SNAKESKIN GLOVES", "tooltip-snakeskinGloves", false);
	addItemBox("batSkinMask", 0, "", "item-section-combat-1", _0x5C34, _0x5BDD, "BATSKIN MASK", "tooltip-batSkinMask", false);
	addItemBox("batSkinBody", 0, "", "item-section-combat-1", _0x5C34, _0x5BDD, "BATSKIN BODY", "tooltip-batSkinBody", false);
	addItemBox("batSkinLegs", 0, "", "item-section-combat-1", _0x5C34, _0x5BDD, "BATSKIN LEGS", "tooltip-batSkinLegs", false);
	addItemBox("batSkinBoots", 0, "", "item-section-combat-1", _0x5C34, _0x5BDD, "BATSKIN BOOTS", "tooltip-batSkinBoots", false);
	addItemBox("batSkinGloves", 0, "", "item-section-combat-1", _0x5C34, _0x5BDD, "BATSKIN GLOVES", "tooltip-batSkinGloves", false);
	addItemBox("bearFurMask", 0, "", "item-section-combat-1", _0x5C34, _0x5BDD, "BEAR MASK", "tooltip-bearFurMask", false);
	addItemBox("bearFurBody", 0, "", "item-section-combat-1", _0x5C34, _0x5BDD, "BEAR BODY", "tooltip-bearFurBody", false);
	addItemBox("bearFurLegs", 0, "", "item-section-combat-1", _0x5C34, _0x5BDD, "BEAR LEGS", "tooltip-bearFurLegs", false);
	addItemBox("bearFurBoots", 0, "", "item-section-combat-1", _0x5C34, _0x5BDD, "BEAR BOOTS", "tooltip-bearFurBoots", false);
	addItemBox("bearFurGloves", 0, "", "item-section-combat-1", _0x5C34, _0x5BDD, "BEAR GLOVES", "tooltip-bearFurGloves", false);
	addItemBox("polarBearFurMask", 0, "", "item-section-combat-1", _0x5C34, _0x5BDD, "POLAR MASK", "tooltip-polarBearFurMask", false);
	addItemBox("polarBearFurBody", 0, "", "item-section-combat-1", _0x5C34, _0x5BDD, "POLAR BODY", "tooltip-polarBearFurBody", false);
	addItemBox("polarBearFurLegs", 0, "", "item-section-combat-1", _0x5C34, _0x5BDD, "POLAR LEGS", "tooltip-polarBearFurLegs", false);
	addItemBox("polarBearFurBoots", 0, "", "item-section-combat-1", _0x5C34, _0x5BDD, "POLAR BOOTS", "tooltip-polarBearFurBoots", false);
	addItemBox("polarBearFurGloves", 0, "", "item-section-combat-1", _0x5C34, _0x5BDD, "POLAR GLOVES", "tooltip-polarBearFurGloves", false);
	addItemBox("flippers", 0, "", "item-section-combat-1", _0x5C34, _0x5BDD, "FLIPPERS", "tooltip-flippers", false);
	addItemBox("woodenShield", 0, "", "item-section-combat-1", _0x5C34, _0x5BDD, "WOOD SHIELD", "tooltip-woodenShield", false);
	addItemBox("skeletonShield", 0, "", "item-section-combat-1", _0x5C34, _0x5BDD, "SKELETON SHIELD", "tooltip-skeletonShield", false);
	addItemBox("cemeterySkeletonShield1", 0, "", "item-section-combat-1", _0x5C34, _0x5BDD, "BROKEN SHIELD", "tooltip-cemeterySkeletonShieldBroken", false);
	addItemBox("cemeterySkeletonShield2", 0, "", "item-section-combat-1", _0x5C34, _0x5BDD, "BROKEN SHIELD", "tooltip-cemeterySkeletonShieldBroken", false);
	addItemBox("cemeterySkeletonShield3", 0, "", "item-section-combat-1", _0x5C34, _0x5BDD, "BROKEN SHIELD", "tooltip-cemeterySkeletonShieldBroken", false);
	addItemBox("cemeterySkeletonShield", 0, "", "item-section-combat-1", _0x5C34, _0x5BDD, "CEMETERY SHIELD", "tooltip-cemeterySkeletonShieldBroken", false);
	addItemBox("boneAmulet", 0, "", "item-section-combat-1", _0x5C34, _0x5BDD, "BONE AMULET", "tooltip-boneAmulet", false);
	addItemBox("boneAmuletPlus", 0, "", "item-section-combat-1", _0x5C34, _0x5BDD, "BONE AMULET+", "tooltip-boneAmuletPlus", false);
	addItemBox("invisibilityAmulet", 0, "", "item-section-combat-1", _0x5C34, _0x5BDD, "INVIS. AMULET", "tooltip-invisibilityAmulet", false);
	addItemBox("wand", 0, "", "item-section-combat-1", _0x5BC0, _0x5BA3, "WAND", "tooltip-wand", false);
	addItemBox("staff", 0, "", "item-section-combat-1", _0x5BC0, _0x5BA3, "MAGIC STAFF", "tooltip-staff", false);
	addItemBox("reaperHood", 0, "", "item-section-combat-1", _0x5BC0, _0x5BA3, "REAPER HOOD", "tooltip-reaperHood", false);
	addItemBox("reaperBody", 0, "", "item-section-combat-1", _0x5BC0, _0x5BA3, "REAPER BODY", "tooltip-reaperBody", false);
	addItemBox("reaperLegs", 0, "", "item-section-combat-1", _0x5BC0, _0x5BA3, "REAPER SKIRT", "tooltip-reaperLegs", false);
	addItemBox("reaperBoots", 0, "", "item-section-combat-1", _0x5BC0, _0x5BA3, "REAPER BOOTS", "tooltip-reaperBoots", false);
	addItemBox("reaperGloves", 0, "", "item-section-combat-1", _0x5BC0, _0x5BA3, "REAPER GLOVES", "tooltip-reaperGloves", false);
	addItemBox("cooldownRing1", 0, "", "item-section-combat-1", _0x5BFA, _0x5BDD, "CD RING (1)", "tooltip-cooldownRing1", false);
	addItemBox("energyRing1", 0, "", "item-section-combat-1", _0x5BFA, _0x5BDD, "ENERGY RING (1)", "tooltip-energyRing1", false);
	addItemBox("manaRing1", 0, "", "item-section-combat-1", _0x5BFA, _0x5BDD, "MANA RING (1)", "tooltip-manaRing1", false);
	addItemBox("cooldownRing2", 0, "", "item-section-combat-1", _0x5BFA, _0x5BDD, "CD RING (2)", "tooltip-cooldownRing2", false);
	addItemBox("energyRing2", 0, "", "item-section-combat-1", _0x5BFA, _0x5BDD, "ENERGY RING (2)", "tooltip-energyRing2", false);
	addItemBox("manaRing2", 0, "", "item-section-combat-1", _0x5BFA, _0x5BDD, "MANA RING (2)", "tooltip-manaRing2", false);
	addItemBox("cooldownRing3", 0, "", "item-section-combat-1", _0x5BFA, _0x5BDD, "CD RING (3)", "tooltip-cooldownRing3", false);
	addItemBox("energyRing3", 0, "", "item-section-combat-1", _0x5BFA, _0x5BDD, "ENERGY RING (3)", "tooltip-energyRing3", false);
	addItemBox("manaRing3", 0, "", "item-section-combat-1", _0x5BFA, _0x5BDD, "MANA RING (3)", "tooltip-manaRing3", false);
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
	addItemBoxMining("miner", "", "item-section-mining-1", _0x5B4C, "grey", "MINER", "tooltip-miner", false);
	addItemBoxMining("drills", "", "item-section-mining-1", _0x5B4C, "grey", "DRILLS", "tooltip-drills", false);
	addItemBoxMining("crushers", "", "item-section-mining-1", _0x5B4C, "grey", "CRUSHERS", "tooltip-crushers", false);
	addItemBoxMining("giantDrills", "", "item-section-mining-1", _0x5B4C, "grey", "GIANT DRILLS", "tooltip-giantDrills", false);
	addItemBoxMining("excavators", "", "item-section-mining-1", _0x5B4C, "grey", "EXCAVATORS", "tooltip-excavators", false);
	addItemBox("rocket", 1, "", "item-section-mining-1", "#333333", "grpey", "ROCKET", "tooltip-rocket", false);
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
	addItemBox("bronzeOilWell", 1, "", "item-section-mining-1", "#333333", "grey", "OIL WELL", "", false);
	addItemBox("ironOilWell", 1, "", "item-section-mining-1", "#333333", "grey", "OIL WELL", "", false);
	addItemBox("silverOilWell", 1, "", "item-section-mining-1", "#333333", "grey", "OIL WELL", "", false);
	addItemBox("goldOilWell", 1, "", "item-section-mining-1", "#333333", "grey", "OIL WELL", "", false);
	addItemBox("promethiumOilWell", 1, "", "item-section-mining-1", "#333333", "grey", "OIL WELL", "", false);
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
	addItemBox("sand", 0, "", "item-section-mining-1", "#333333", "grey", "SAND", "tooltip-sand", false);
	addItemBox("stone", 0, "", "item-section-mining-1", "#333333", "grey", "STONE", "tooltip-stone", false);
	addItemBox("copper", 0, "", "item-section-mining-1", "#333333", "grey", "COPPER", "tooltip-copper", false);
	addItemBox("iron", 0, "", "item-section-mining-1", "#333333", "grey", "IRON", "tooltip-iron", false);
	addItemBox("silver", 0, "", "item-section-mining-1", "#333333", "grey", "SILVER", "tooltip-silver", false);
	addItemBox("gold", 0, "", "item-section-mining-1", "#333333", "grey", "GOLD", "tooltip-gold", false);
	addItemBox("promethium", 0, "", "item-section-mining-1", "#333333", "grey", "PROMETHIUM", "tooltip-promethium", false);
	addItemBox("titanium", 0, "", "item-section-mining-1", "#333333", "grey", "TITANIUM", "tooltip-titanium", false);
	addItemBox("moonstone", 0, "", "item-section-mining-1", "#333333", "grey", "MOONSTONE", "tooltip-moonstone", false);
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
	addItemBox("charcoal", 0, "", "item-section-crafting-1", "#595959", "grey", "CHARCOAL", "tooltip-charcoal", false);
	addItemBox("lava", 0, "", "item-section-crafting-1", "#595959", "grey", "LAVA", "tooltip-lava", false);
	addItemBox("brewingKitMould", 0, "", "item-section-crafting-1", "#595959", "grey", "MOULD", "tooltip-mould", false);
	addItemBox("wrenchMould", 0, "", "item-section-crafting-1", "#595959", "grey", "MOULD", "tooltip-mould", false);
	addItemBox("trowelMould", 0, "", "item-section-crafting-1", "#595959", "grey", "MOULD", "tooltip-mould", false);
	addItemBox("chainsawMould", 0, "", "item-section-crafting-1", "#595959", "grey", "MOULD", "tooltip-mould", false);
	addItemBox("houseBlueprint", 0, "", "item-section-crafting-1", "#595959", "grey", "BLUEPRINTS", "tooltip-bluePrints", false);
	addItemBox("museumBlueprint", 0, "", "item-section-crafting-1", "#595959", "grey", "BLUEPRINTS", "tooltip-bluePrints", false);
	addItemBox("sapphireGlassHand", 0, "", "item-section-crafting-1", "#595959", "grey", "GLASS HAND", "tooltip-sapphireGlassHand", false);
	addItemBox("emeraldGlassHand", 0, "", "item-section-crafting-1", "#595959", "grey", "GLASS HAND", "tooltip-emeraldGlassHand", false);
	addItemBox("rubyGlassHand", 0, "", "item-section-crafting-1", "#595959", "grey", "GLASS HAND", "tooltip-rubyGlassHand", false);
	addItemBox("tractorTire", 0, "", "item-section-crafting-1", "#333333", "grey", "TRACTOR TIRE", "tooltip-tractorTire", false);
	addItemBox("ironBucket", 0, "", "item-section-crafting-1", "#333333", "grey", "SILVER BUCKET", "tooltip-ironBucket", false);
	addItemBox("glass", 0, "", "item-section-crafting-1", "#333333", "grey", "GLASS", "tooltip-glass", false);
	addItemBox("bronzeBars", 0, "", "item-section-crafting-1", "#333333", "grey", "BRONZE BAR", "tooltip-bronzeBars", false);
	addItemBox("ironBars", 0, "", "item-section-crafting-1", "#333333", "grey", "IRON BAR", "tooltip-ironBars", false);
	addItemBox("silverBars", 0, "", "item-section-crafting-1", "#333333", "grey", "SILVER BAR", "tooltip-silverBars", false);
	addItemBox("goldBars", 0, "", "item-section-crafting-1", "#333333", "grey", "GOLD BAR", "tooltip-goldBars", false);
	addItemBox("promethiumBars", 0, "", "item-section-crafting-1", "#333333", "grey", "PROMETHIUM BAR", "tooltip-promethiumBars", false);
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
	addItemBox("treasureChest", 0, "", "item-section-home-1", "#1a344c", "#0d1a26", "TREASURE CHEST", "tooltip-treasureChest", false);
	addItemBox("goldKey", 0, "", "item-section-home-1", "#1a344c", "#0d1a26", "GOLD KEY", "tooltip-treasureChestKey", false);
	addItemBox("sapphireGoldKey", 0, "", "item-section-home-1", "#1a344c", "#0d1a26", "SAPPHIRE KEY", "tooltip-treasureChestKey", false);
	addItemBox("emeraldGoldKey", 0, "", "item-section-home-1", "#1a344c", "#0d1a26", "EMERALD KEY", "tooltip-treasureChestKey", false);
	addItemBox("rubyGoldKey", 0, "", "item-section-home-1", "#1a344c", "#0d1a26", "RUBY KEY", "tooltip-treasureChestKey", false);
	addItemBox("diamondGoldKey", 0, "", "item-section-home-1", "#1a344c", "#0d1a26", "DIAMOND KEY", "tooltip-treasureChestKey", false);
	addItemBox("blueFurnaceOrb", 0, "", "item-section-home-1", "#1a344c", "#0d1a26", "ORB", "tooltip-orb", false);
	addItemBox("blueWoodcuttingOrb", 0, "", "item-section-home-1", "#1a344c", "#0d1a26", "ORB", "tooltip-orb", false);
	addItemBox("blueOreOrb", 0, "", "item-section-home-1", "#1a344c", "#0d1a26", "ORB", "tooltip-orb", false);
	addItemBox("blueManaOrb", 0, "", "item-section-home-1", "#1a344c", "#0d1a26", "ORB", "tooltip-orb", false);
	addItemBox("blueOilWellOrb", 0, "", "item-section-home-1", "#1a344c", "#0d1a26", "ORB", "tooltip-orb", false);
	addItemBox("shootingStar", 0, "", "item-section-home-1", "#1a344c", "#0d1a26", "SHOOTING STAR", "tooltip-shootingStar", false);
	addItemBox("telescopeLens", 1, "", "item-section-home-1", "#1a344c", "#0d1a26", "TELESCOPE LENS", "tooltip-telescopeLens", false);
	addItemBox("telescopePart", 1, "", "item-section-home-1", "#1a344c", "#0d1a26", "TELESCOPE", "tooltip-telescopeLens", false);
	addItemBox("telescope", 1, "", "item-section-home-1", "#1a344c", "#0d1a26", "TELESCOPE", "tooltip-telescopeLens", false);
	addItemBox("carePackage2", 0, "", "item-section-home-1", "#1a344c", "0d1a26", "CARE PACKAGE", "tooltip-carePackage", false);
	addItemBox("carePackage3", 0, "", "item-section-home-1", "#1a344c", "0d1a26", "CARE PACKAGE", "tooltip-carePackage", false);
	addItemBox("stardustBox1", 0, "", "item-section-home-1", "#1a344c", "#0d1a26", "STARDUST BOX I", "tooltip-stardustBox", false);
	addItemBox("stardustBox2", 0, "", "item-section-home-1", "#1a344c", "#0d1a26", "STARDUST BOX I", "tooltip-stardustBox", false);
	addItemBox("puzzleChest1", 0, "", "item-section-home-1", "#1a344c", "#0d1a26", "PUZZLE CHEST", "tooltip-puzzleChest1", false);
	addItemBox("snowmanCrafted", 0, "", "item-section-home-1", "#1a344c", "#0d1a26", "SNOWMAN", "tooltip-snowmanCrafted", false);
	addItemBox("bronzeOven", 0, "", "item-section-cooking-1", "#666600", "#333300", "BRONZE OVEN", "tooltip-oven", false);
	addItemBox("ironOven", 0, "", "item-section-cooking-1", "#666600", "#333300", "IRON OVEN", "tooltip-oven", false);
	addItemBox("silverOven", 0, "", "item-section-cooking-1", "#666600", "#333300", "SILVER OVEN", "tooltip-oven", false);
	addItemBox("goldOven", 0, "", "item-section-cooking-1", "#666600", "#333300", "GOLD OVEN", "tooltip-oven", false);
	addItemBox("promethiumOven", 0, "", "item-section-cooking-1", "#666600", "#333300", "PROM OVEN", "tooltip-oven", false);
	addItemBox("chef", 0, "", "item-section-cooking-1", "#666600", "#333300", "CHEF", "tooltip-chef", false);
	addItemBox("cooksBook1", 1, "", "item-section-cooking-1", "#666600", "#333300", "COOKS BOOK", "tooltip-cooksBook", false);
	addItemBox("cheeseStew", 0, "", "item-section-cooking-1", "#666600", "#333300", "STEW", "", false);
	addItemBox("lavaStew", 0, "", "item-section-cooking-1", "#666600", "#333300", "STEW", "", false);
	addItemBox("oysterStew", 0, "", "item-section-cooking-1", "#666600", "#333300", "STEW", "", false);
	addItemBox("iceBonesStew", 0, "", "item-section-cooking-1", "#666600", "#333300", "STEW", "", false);
	addItemBox("fishStew", 0, "", "item-section-cooking-1", "#666600", "#333300", "STEW", "", false);
	addItemBox("honeyStew", 0, "", "item-section-cooking-1", "#666600", "#333300", "STEW", "", false);
	addItemBox("bananaStew", 0, "", "item-section-cooking-1", "#666600", "#333300", "STEW", "", false);
	addItemBox("appleStew", 0, "", "item-section-cooking-1", "#666600", "#333300", "STEW", "", false);
	addItemBox("yellowSpices", 0, "", "item-section-cooking-1", _0x5C17, _0x5BDD, "SPICES", "", false);
	addItemBox("greenSpices", 0, "", "item-section-cooking-1", _0x5C17, _0x5BDD, "SPICES", "", false);
	addItemBox("blueSpices", 0, "", "item-section-cooking-1", _0x5C17, _0x5BDD, "SPICES", "", false);
	addItemBox("redSpices", 0, "", "item-section-cooking-1", _0x5C17, _0x5BDD, "SPICES", "", false);
	if (getItem("cookingUnlocked") == 1)
	{
		addItemBox("apple", 0, "", "item-section-cooking-1", _0x5C17, _0x5BDD, "APPLE", "tooltip-apple", false);
		addItemBox("bananas", 0, "", "item-section-cooking-1", _0x5C17, _0x5BDD, "BANANAS", "tooltip-bananas", false);
		addItemBox("storeBananas", 0, "", "item-section-cooking-1", _0x5C17, _0x5BDD, "BANANAS", "tooltip-storeBananas", false);
		addItemBox("carrot", 0, "", "item-section-cooking-1", _0x5C17, _0x5BDD, "CARROTS", "tooltip-carrot", false);
		addItemBox("salad", 0, "", "item-section-cooking-1", _0x5C17, _0x5BDD, "MUSHROOM SALAD", "tooltip-salad", false);
		addItemBox("rawChicken", 0, "", "item-section-cooking-1", _0x5C17, _0x5BDD, "RAW CHICKEN", "tooltip-rawChicken", false);
		addItemBox("oysterMornay", 0, "", "item-section-cooking-1", _0x5C17, _0x5BDD, "OYSTER MORNAY", "tooltip-oysterMornay", false);
		addItemBox("rawGiantSnakeTail", 0, "", "item-section-cooking-1", _0x5C17, _0x5BDD, "SNAKE TAIL", "tooltip-giantSnakeTail", false);
		addItemBox("giantSnakeTail", 0, "", "item-section-cooking-1", _0x5C17, _0x5BDD, "SNAKE TAIL", "tooltip-giantSnakeTail", false);
		addItemBox("cheese", 0, "", "item-section-cooking-1", _0x5C17, _0x5BDD, "CHEESE", "tooltip-cheese", false);
		addItemBox("honey", 0, "", "item-section-cooking-1", _0x5C17, _0x5BDD, "HONEY", "tooltip-honey", false);
		addItemBox("snakeSushiShrimp", 0, "", "item-section-cooking-1", _0x5C17, _0x5BDD, "SNAKESKIN SUSHI", "tooltip-snakeSushiShrimp", false);
		addItemBox("snakeSushiTrout", 0, "", "item-section-cooking-1", _0x5C17, _0x5BDD, "SNAKESKIN SUSHI", "tooltip-snakeSushiShrimpTrout", false);
		addItemBox("snakeSushiTuna", 0, "", "item-section-cooking-1", _0x5C17, _0x5BDD, "SNAKESKIN SUSHI", "tooltip-snakeSushiShrimpTuna", false);
		addItemBox("seaweedChicken", 0, "", "item-section-cooking-1", _0x5C17, _0x5BDD, "SEAWEED CHICKEN", "tooltip-seaweedChicken", false);
		addItemBox("batSkinSushi", 0, "", "item-section-cooking-1", _0x5C17, _0x5BDD, "BATSKIN SUSHI", "tooltip-batSkinSushi", false);
		addItemBox("mapleSyrup", 0, "", "item-section-cooking-1", _0x5C17, _0x5BDD, "MAPLE SYRUP", "tooltip-mapleSyrup", false)
	};
	addItemBox("chicken", 0, "", "item-section-cooking-1", _0x5C17, _0x5BDD, "CHICKEN", "tooltip-chicken", false)
}

function getOilPerSecondForAItem(_0x47D0)
{
	switch (_0x47D0)
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

function mouseEnterSkillTopBar(_0x4F10, _0x3EFA)
{
	if (_0x4F10 == "enter")
	{
		document.getElementById("span-topBar-" + _0x3EFA + "Xp").style.display = "none";
		document.getElementById("span-topBar-" + _0x3EFA + "Xp-left").style.display = "";
		document.getElementById("span-topBar-" + _0x3EFA + "Xp-left").innerHTML = formatNumber(getXpNeeded(1 + parseInt(getLevel(getItem(_0x3EFA + "Xp")))) - getItem(_0x3EFA + "Xp")) + " xp required"
	}
	else
	{
		document.getElementById("span-topBar-" + _0x3EFA + "Xp").style.display = "";
		document.getElementById("span-topBar-" + _0x3EFA + "Xp-left").style.display = "none"
	}
}

function getEnergyReduction(_0x4FDB)
{
	var _0x521F = 1.0;
	if (getItem("energyRing1") == 1)
	{
		_0x521F -= 0.01
	};
	if (getItem("energyRing2") == 1)
	{
		_0x521F -= 0.04
	};
	if (getItem("energyRing3") == 1)
	{
		_0x521F -= 0.10
	};
	return parseInt(_0x4FDB * _0x521F)
}

function getAreaTimer(_0x523C)
{
	var _0x521F = 1.0;
	if (getItem("cooldownRing1") == 1)
	{
		_0x521F -= 0.01
	};
	if (getItem("cooldownRing2") == 1)
	{
		_0x521F -= 0.04
	};
	if (getItem("cooldownRing3") == 1)
	{
		_0x521F -= 0.10
	};
	return parseInt(_0x523C * _0x521F)
}
var puzzleChest1_lastSelected = [-1, -1];

function clicksPuzzleChestOne(_0x4178)
{
	var _0x4A4E = _0x4178.split("-");
	if (puzzleChest1_lastSelected[0] != -1 || puzzleChest1_lastSelected[1] != -1)
	{
		var _0x4AFC = document.getElementById("td-puzzleChest1_" + puzzleChest1_lastSelected[0] + "-" + puzzleChest1_lastSelected[1]);
		var _0x4AA5 = document.getElementById("td-puzzleChest1_" + _0x4A4E[0] + "-" + _0x4A4E[1]);
		var _0x4ADF = _0x4AFC.getElementsByTagName("img")[0];
		var _0x4A88 = _0x4AA5.getElementsByTagName("img")[0];
		var _0x4AC2 = _0x4ADF.src;
		var _0x4A6B = _0x4A88.src;
		_0x4ADF.src = _0x4A6B;
		_0x4A88.src = _0x4AC2;
		puzzleChest1_lastSelected = [-1, -1];
		_0x4AFC.style.border = "1px solid grey";
		_0x4AA5.style.border = "1px solid grey"
	}
	else
	{
		puzzleChest1_lastSelected = _0x4A4E;
		document.getElementById("td-puzzleChest1_" + puzzleChest1_lastSelected[0] + "-" + puzzleChest1_lastSelected[1]).style.border = "1px solid green"
	}
}

function clicksPuzzleChestOneSolveButton()
{
	var _0x473F = "";
	_0x473F = "0-0";
	if (!document.getElementById("td-puzzleChest1_" + _0x473F).getElementsByTagName("img")[0].src.endsWith(_0x473F + ".png"))
	{
		confirmDialogue("images/x.png", "The puzzle has not been solve correctly.", "Close", "", "");
		return
	};
	_0x473F = "1-0";
	if (!document.getElementById("td-puzzleChest1_" + _0x473F).getElementsByTagName("img")[0].src.endsWith(_0x473F + ".png"))
	{
		confirmDialogue("images/x.png", "The puzzle has not been solve correctly.", "Close", "", "");
		return
	};
	_0x473F = "2-0";
	if (!document.getElementById("td-puzzleChest1_" + _0x473F).getElementsByTagName("img")[0].src.endsWith(_0x473F + ".png"))
	{
		confirmDialogue("images/x.png", "The puzzle has not been solve correctly.", "Close", "", "");
		return
	};
	_0x473F = "0-1";
	if (!document.getElementById("td-puzzleChest1_" + _0x473F).getElementsByTagName("img")[0].src.endsWith(_0x473F + ".png"))
	{
		confirmDialogue("images/x.png", "The puzzle has not been solve correctly.", "Close", "", "");
		return
	};
	_0x473F = "1-1";
	if (!document.getElementById("td-puzzleChest1_" + _0x473F).getElementsByTagName("img")[0].src.endsWith(_0x473F + ".png"))
	{
		confirmDialogue("images/x.png", "The puzzle has not been solve correctly.", "Close", "", "");
		return
	};
	_0x473F = "2-1";
	if (!document.getElementById("td-puzzleChest1_" + _0x473F).getElementsByTagName("img")[0].src.endsWith(_0x473F + ".png"))
	{
		confirmDialogue("images/x.png", "The puzzle has not been solve correctly.", "Close", "", "");
		return
	};
	_0x473F = "0-2";
	if (!document.getElementById("td-puzzleChest1_" + _0x473F).getElementsByTagName("img")[0].src.endsWith(_0x473F + ".png"))
	{
		confirmDialogue("images/x.png", "The puzzle has not been solve correctly.", "Close", "", "");
		return
	};
	_0x473F = "1-2";
	if (!document.getElementById("td-puzzleChest1_" + _0x473F).getElementsByTagName("img")[0].src.endsWith(_0x473F + ".png"))
	{
		confirmDialogue("images/x.png", "The puzzle has not been solve correctly.", "Close", "", "");
		return
	};
	_0x473F = "2-2";
	if (!document.getElementById("td-puzzleChest1_" + _0x473F).getElementsByTagName("img")[0].src.endsWith(_0x473F + ".png"))
	{
		confirmDialogue("images/x.png", "The puzzle has not been solve correctly.", "Close", "", "");
		return
	};
	sendBytes("CHEST_PUZZLE_1_SOLVED")
}

function openDialogue(_0x4B70)
{
	openDialogueOverride(_0x4B70, "medium")
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

function changedAutoLogin(_0x44A4)
{
	if (_0x44A4)
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

function changedTitleTrigger(_0x44A4)
{
	if (_0x44A4)
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

function notificationSound(_0x44A4)
{
	if (_0x44A4)
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

function displayConvertGuestError(_0x4E28)
{
	document.getElementById("dialogue-profile-guest-to-user-password-errors").innerHTML = "<ul>" + _0x4E28 + "</ul>";
	document.getElementById("dialogue-profile-guest-to-user-password-errors").style.display = ""
}

function getBestFurnace()
{
	var _0x473F = "";
	_0x473F = "stoneFurnace";
	if (getItem(_0x473F) == 1)
	{
		return _0x473F
	};
	_0x473F = "bronzeFurnace";
	if (getItem(_0x473F) == 1)
	{
		return _0x473F
	};
	_0x473F = "ironFurnace";
	if (getItem(_0x473F) == 1)
	{
		return _0x473F
	};
	_0x473F = "silverFurnace";
	if (getItem(_0x473F) == 1)
	{
		return _0x473F
	};
	_0x473F = "goldFurnace";
	if (getItem(_0x473F) == 1)
	{
		return _0x473F
	};
	_0x473F = "promethiumFurnace";
	if (getItem(_0x473F) == 1)
	{
		return _0x473F
	};
	_0x473F = "titaniumFurnace";
	if (getItem(_0x473F) == 1)
	{
		return _0x473F
	};
	return "none"
}

function openDialogueOverride(_0x4B70, _0x6666)
{
	if (_0x6666 == "medium")
	{
		document.getElementById(_0x4B70).style.minWidth = "400px";
		document.getElementById(_0x4B70).style.left = "38%"
	};
	if (_0x6666 == "large")
	{
		document.getElementById(_0x4B70).style.minWidth = "700px";
		document.getElementById(_0x4B70).style.left = "30%"
	};
	document.getElementById(_0x4B70).style.top = (scrollY + 20) + "px";
	document.getElementById(_0x4B70).style.display = ""
}

function confirmDialogue(_0x3AC9, _0x4BC7, _0x4B8D, _0x4BAA, _0x4BE4)
{
	if (_0x3AC9 == "" || _0x3AC9 == "none" || _0x3AC9 == null)
	{
		document.getElementById("dialogue-confirm-img").style.display = "none"
	}
	else
	{
		document.getElementById("dialogue-confirm-img").src = _0x3AC9;
		document.getElementById("dialogue-confirm-img").style.display = ""
	};
	document.getElementById("dialogue-confirm-text").innerHTML = _0x4BC7;
	document.getElementById("dialogue-confirm").style.display = "";
	document.getElementById("dialogue-confirm").style.top = (scrollY + 20) + "px";
	document.getElementById("dialogue-confirm-yes").innerHTML = _0x4B8D;
	document.getElementById("dialogue-confirm-no").innerHTML = _0x4BAA;
	if (_0x4BAA == "")
	{
		document.getElementById("dialogue-confirm-no").style.display = "none"
	}
	else
	{
		document.getElementById("dialogue-confirm-no").style.display = ""
	};
	if (_0x4BE4 == "")
	{
		document.getElementById("dialogue-confirm-yes").setAttribute("onclick", "closeDialogue(\'dialogue-confirm\')")
	}
	else
	{
		if (_0x4BE4.startsWith("JS"))
		{
			switch (_0x4BE4)
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
			document.getElementById("dialogue-confirm-yes").setAttribute("onclick", "sendBytes(\'" + _0x4BE4 + "\');closeDialogue(\'dialogue-confirm\');")
		}
	}
}

function confirmDialogue2(_0x3AC9, _0x4BC7, _0x4B8D, _0x4BAA, _0x4C01, _0x4BE4, _0x4C1E)
{
	if (_0x3AC9 == "" || _0x3AC9 == "none")
	{
		document.getElementById("dialogue-confirm2-img").style.display = "none"
	}
	else
	{
		document.getElementById("dialogue-confirm2-img").src = _0x3AC9;
		document.getElementById("dialogue-confirm2-img").style.display = ""
	};
	document.getElementById("dialogue-confirm2-text").innerHTML = _0x4BC7;
	document.getElementById("dialogue-confirm2").style.display = "";
	document.getElementById("dialogue-confirm2").style.top = (scrollY + 20) + "px";
	document.getElementById("dialogue-confirm2-yes").innerHTML = _0x4B8D;
	document.getElementById("dialogue-confirm2-yes2").innerHTML = _0x4BAA;
	document.getElementById("dialogue-confirm2-no").innerHTML = _0x4C01;
	document.getElementById("dialogue-confirm2-yes").setAttribute("onclick", "sendBytes(\'" + _0x4BE4 + "\');closeDialogue(\'dialogue-confirm2\');");
	document.getElementById("dialogue-confirm2-yes2").setAttribute("onclick", "sendBytes(\'" + _0x4C1E + "\');closeDialogue(\'dialogue-confirm2\');")
}

function confirmDialogue3(_0x3AC9, _0x4BC7, _0x4B8D, _0x4BAA, _0x4C01, _0x4C3B, _0x4BE4, _0x4C1E, _0x4C58)
{
	if (_0x3AC9 == "" || _0x3AC9 == "none")
	{
		document.getElementById("dialogue-confirm3-img").style.display = "none"
	}
	else
	{
		document.getElementById("dialogue-confirm3-img").src = _0x3AC9;
		document.getElementById("dialogue-confirm3-img").style.display = ""
	};
	document.getElementById("dialogue-confirm3-text").innerHTML = _0x4BC7;
	document.getElementById("dialogue-confirm3").style.display = "";
	document.getElementById("dialogue-confirm3").style.top = (scrollY + 20) + "px";
	document.getElementById("dialogue-confirm3-yes").innerHTML = _0x4B8D;
	document.getElementById("dialogue-confirm3-yes2").innerHTML = _0x4BAA;
	document.getElementById("dialogue-confirm3-yes3").innerHTML = _0x4C01;
	document.getElementById("dialogue-confirm3-no").innerHTML = _0x4C3B;
	document.getElementById("dialogue-confirm3-yes").setAttribute("onclick", "sendBytes(\'" + _0x4BE4 + "\');closeDialogue(\'dialogue-confirm3\');");
	document.getElementById("dialogue-confirm3-yes2").setAttribute("onclick", "sendBytes(\'" + _0x4C1E + "\');closeDialogue(\'dialogue-confirm3\');");
	document.getElementById("dialogue-confirm3-yes3").setAttribute("onclick", "sendBytes(\'" + _0x4C58 + "\');closeDialogue(\'dialogue-confirm3\');")
}

function closeDialogue(_0x4B70)
{
	document.getElementById(_0x4B70).style.display = "none"
}

function openQuestDialogue(_0x688D, _0x3BCE, _0x68AA, _0x4BC7, _0x6788, _0x67A5, _0x67C2, _0x67DF, _0x6819, _0x6836, _0x6853, _0x6870)
{
	document.getElementById("dialogue-quest-title").innerHTML = _0x68AA;
	document.getElementById("dialogue-quest-text").innerHTML = "<table><tr><td class=\'dialogue-quest-text-td\'>" + _0x4BC7 + "</td><td><img src=\'" + _0x688D + "\' class=\'img-150\' /> </td></table>";
	document.getElementById("dialogue-quest-btn1").style.display = "none";
	document.getElementById("dialogue-quest-btn2").style.display = "none";
	document.getElementById("dialogue-quest-btn3").style.display = "none";
	document.getElementById("dialogue-quest-btn4").style.display = "none";
	if (_0x6788 != "")
	{
		document.getElementById("dialogue-quest-btn1").style.display = "";
		if (_0x6819 == "")
		{
			document.getElementById("dialogue-quest-btn1").setAttribute("onclick", "closeDialogue(\'dialogue-quest\');")
		}
		else
		{
			document.getElementById("dialogue-quest-btn1").setAttribute("onclick", "closeDialogue(\'dialogue-quest\');sendBytes(\'QUEST=" + _0x3BCE + "~" + _0x6819 + "\')")
		}
	}
	else
	{
		document.getElementById("dialogue-quest-btn1").style.display = "none"
	};
	if (_0x67A5 != "")
	{
		document.getElementById("dialogue-quest-btn2").style.display = "";
		if (_0x6836 == "")
		{
			document.getElementById("dialogue-quest-btn2").setAttribute("onclick", "closeDialogue(\'dialogue-quest\');")
		}
		else
		{
			document.getElementById("dialogue-quest-btn2").setAttribute("onclick", "closeDialogue(\'dialogue-quest\');sendBytes(\'QUEST=" + _0x3BCE + "~" + _0x6836 + "\')")
		}
	}
	else
	{
		document.getElementById("dialogue-quest-btn2").style.display = "none"
	};
	if (_0x67C2 != "")
	{
		document.getElementById("dialogue-quest-btn3").style.display = "";
		if (_0x6853 == "")
		{
			document.getElementById("dialogue-quest-btn3").setAttribute("onclick", "closeDialogue(\'dialogue-quest\');")
		}
		else
		{
			document.getElementById("dialogue-quest-btn3").setAttribute("onclick", "closeDialogue(\'dialogue-quest\');sendBytes(\'QUEST=" + _0x3BCE + "~" + _0x6853 + "\')")
		}
	}
	else
	{
		document.getElementById("dialogue-quest-btn3").style.display = "none"
	};
	if (_0x67DF != "")
	{
		document.getElementById("dialogue-quest-btn4").style.display = "";
		if (_0x6870 == "")
		{
			document.getElementById("dialogue-quest-btn4").setAttribute("onclick", "closeDialogue(\'dialogue-quest\');")
		}
		else
		{
			document.getElementById("dialogue-quest-btn4").setAttribute("onclick", "closeDialogue(\'dialogue-quest\');sendBytes(\'QUEST=" + _0x3BCE + "~" + _0x6870 + "\')")
		}
	}
	else
	{
		document.getElementById("dialogue-quest-btn4").style.display = "none"
	};
	var _0x67FC = "<img src=\'images/bubbleChat.png\' class=\'img-30\' /> ";
	document.getElementById("dialogue-quest-btn1").innerHTML = _0x67FC + _0x6788;
	document.getElementById("dialogue-quest-btn2").innerHTML = _0x67FC + _0x67A5;
	document.getElementById("dialogue-quest-btn3").innerHTML = _0x67FC + _0x67C2;
	document.getElementById("dialogue-quest-btn4").innerHTML = _0x67FC + _0x67DF;
	openDialogueOverride("dialogue-quest", "large")
}

function clicksPotion(_0x4A31)
{
	if (getItem(_0x4A31 + "Timer") && getItem("warningPotionDrinking") == 0)
	{
		confirmDialogue("images/" + "warning" + ".png", "This potion is already active.  Drinking another one will simply reset the timer.<br /><br /><i style=\'color:grey\'>You won\'t see this warning again.</i>", "Close", "", "");
		sendBytes("DRINKING_POTION_WARNING")
	}
	else
	{
		if (_0x4A31 == "repelPotion1")
		{
			clicksRepelPotion(1)
		}
		else
		{
			if (_0x4A31 == "repelPotion2")
			{
				clicksRepelPotion(2)
			}
			else
			{
				if (_0x4A31 == "repelPotion3")
				{
					clicksRepelPotion(3)
				}
				else
				{
					if (_0x4A31 == "sapphireStardustPotion")
					{
						confirmDialogue("images/" + _0x4A31 + ".png", "Pour over a sapphire?<br /><br /><span style=\'color:grey\'>You will lose your sapphire.</span>", "Pour on Sapphire", "Cancel", "DRINK=" + _0x4A31)
					}
					else
					{
						if (_0x4A31 == "largeEmeraldStardustPotion")
						{
							confirmDialogue("images/" + _0x4A31 + ".png", "Pour over a emerald?<br /><br /><span style=\'color:grey\'>You will lose your emerald.</span>", "Pour on Emerald", "Cancel", "DRINK=" + _0x4A31)
						}
						else
						{
							confirmDialogue("images/" + _0x4A31 + ".png", "Drink this potion?", "Drink", "Cancel", "DRINK=" + _0x4A31)
						}
					}
				}
			}
		}
	}
}

function getItemPrice(_0x4ED6)
{
	if (global_itemPriceMap[_0x4ED6] != null)
	{
		return global_itemPriceMap[_0x4ED6].price
	};
	return 0
}

function rightClicksItem(_0x47D0)
{
	if (global_equipmentMap[_0x47D0] != null)
	{
		if (getItem("needle") > 0)
		{
			if (_0x47D0.startsWith("snakeskin"))
			{
				confirmDialogue("images/needle.png", "<img src=\'images/" + _0x47D0 + ".png\' class=\'img-50\' /> Use needle on this? <img src=\'images/" + _0x47D0 + ".png\' class=\'img-30\' />", "Use Needle", "Cancel", "NEEDLE=" + _0x47D0);
				return false
			}
			else
			{
				if (_0x47D0.startsWith("bearFur"))
				{
					confirmDialogue("images/needle.png", "<img src=\'images/" + _0x47D0 + ".png\' class=\'img-50\' /> Use needle on this? <img src=\'images/" + _0x47D0 + ".png\' class=\'img-30\' />", "Use Needle", "Cancel", "NEEDLE=" + _0x47D0);
					return false
				}
				else
				{
					if (_0x47D0.startsWith("polarBearFur"))
					{
						confirmDialogue("images/needle.png", "<img src=\'images/" + _0x47D0 + ".png\' class=\'img-50\' /> Use needle on this? <img src=\'images/" + _0x47D0 + ".png\' class=\'img-30\' />", "Use Needle", "Cancel", "NEEDLE=" + _0x47D0);
						return false
					}
					else
					{
						if (_0x47D0.startsWith("batSkin"))
						{
							confirmDialogue("images/needle.png", "<img src=\'images/" + _0x47D0 + ".png\' class=\'img-50\' /> Use needle on this? <img src=\'images/" + _0x47D0 + ".png\' class=\'img-30\' />", "Use Needle", "Cancel", "NEEDLE=" + _0x47D0);
							return false
						}
						else
						{
							if (_0x47D0.startsWith("reaper"))
							{
								confirmDialogue("images/needle.png", "<img src=\'images/" + _0x47D0 + ".png\' class=\'img-50\' /> Use needle on this? <img src=\'images/" + _0x47D0 + ".png\' class=\'img-30\' />", "Use Needle", "Cancel", "NEEDLE=" + _0x47D0);
								return false
							}
						}
					}
				}
			}
		}
	};
	if (_0x47D0.endsWith("Seeds") && getItem("planter") == 1)
	{
		sendBytes("PLANTER=" + _0x47D0);
		return false
	};
	switch (_0x47D0)
	{
	case "planter":
		sendBytes("HARVEST_PLANTER");
		return false
	}
}

function clicksItem(_0x47D0)
{
	if (_0x47D0.endsWith("Seeds"))
	{
		clicksSeed(_0x47D0);
		return
	};
	if (_0x47D0.endsWith("Museum"))
	{
		if (getItem(_0x47D0) == 0)
		{
			sendBytes("MUSEUM_OFFER=" + _0x47D0.substr(0, _0x47D0.length - 6));
			return
		}
	};
	if (_0x47D0.startsWith("stardustBox"))
	{
		openInputDialogue("Open", "images/" + _0x47D0 + ".png", _0x47D0, 1, ["stardust"], [0], [_0x47D0], [1], "Open", "OPEN_STARDUST_BOX", "Contains a random amount of stardust.");
		return
	};
	if (_0x47D0.toLowerCase().endsWith("oilwell"))
	{
		sendBytes("CLICKS_OIL_WELL");
		return
	};
	if (_0x47D0.endsWith("StardustPrism"))
	{
		openInputDialogue("Open", "images/" + _0x47D0 + ".png", _0x47D0, 1, ["stardust"], [0], [_0x47D0], [1], "Break", "OPEN_STARDUST_PRISM", "Contains a random amount of stardust.");
		return
	};
	if (_0x47D0.toLowerCase().endsWith("geode"))
	{
		openInputDialogue("Open", "images/" + _0x47D0 + ".png", _0x47D0, 1, ["questionMarkIcon"], [0], [_0x47D0], [1], "Crack", "OPEN_GEODES", "Contains ore or a mineral.");
		return
	};
	if (_0x47D0.endsWith("ManaStar"))
	{
		confirmDialogue("images/" + _0x47D0 + ".png", "Absorb the star to increase maximum mana permanently?", "Absorb Mana Star", "Cancel", "MANA_STAR=" + _0x47D0);
		return
	};
	if (_0x47D0 != "oyster" && _0x47D0 != "specialOyster")
	{
		if (getItemPrice(_0x47D0) > 0)
		{
			openInputDialogue("Sell", "images/" + _0x47D0 + ".png", _0x47D0, 1, ["coins"], [getItemPrice(_0x47D0)], [_0x47D0], [1], "Sell", "SELL", "Sell this to the shop for some coins.")
		}
	};
	if (_0x47D0.toLowerCase().endsWith("rake"))
	{
		openRakeDialogue()
	};
	if (_0x47D0.startsWith("heartCrystal"))
	{
		confirmDialogue("images/" + _0x47D0 + ".png", "Break crystal and gain a permanent <img src=\'images/heartIcon.png\' class=\'img-20\' /> +5 health?", "Break Crystal", "Cancel", "HEART_CRYSTAL=" + _0x47D0);
		return
	};
	if (global_foodMap[_0x47D0] != null)
	{
		if (_0x47D0.startsWith("raw"))
		{
			if (getItem("cookingUnlocked") == 0)
			{
				confirmDialogue("images/cookingSkill.png", "You need to unlock the cooking skill for this action.<br /><br /><span style=\'color:grey\'><b>Hint: </b> Cooking is unlocked after purchasing a bronze oven after upgrading the shop through crafting.", "Close", "", "")
			}
			else
			{
				if (getItem("cookingBoostPotionOn") == 1)
				{
					confirmDialogue("images/cookingBoostPotion.png", "You are about to use your cooking boost to cook one of this type of food.", "Cook", "Cancel", "COOK=" + _0x47D0 + "~1")
				}
				else
				{
					if (global_foodMap[_0x47D0].cookLevel > getLevel(getItem("cookingXp")))
					{
						confirmDialogue("images/cookingSkill.png", "You need a level of " + global_foodMap[_0x47D0].cookLevel + " to cook this.", "Close", "", "")
					}
					else
					{
						openInputDialogue("Cook", "images/" + _0x47D0 + ".png", _0x47D0, 1, ["cookingSkill_xp"], [global_foodMap[_0x47D0].xp], [_0x47D0, "heat"], [1, global_foodMap[_0x47D0].heat], "Cook", "COOK", "Cooking food allows it to be consumed afterwards for energy.  Remember to check your burn rate on your oven.")
					}
				}
			}
		}
		else
		{
			if (_0x47D0 == "redMushroom" && getItem("researcherFarming") == 0)
			{
				return
			};
			openInputDialogue(getItemName(_0x47D0.charAt(0).toUpperCase() + _0x47D0.slice(1)) + "s", "images/" + _0x47D0 + ".png", _0x47D0, 1, ["energy"], [global_foodMap[_0x47D0].energy], [_0x47D0], [1], "Consume", "CONSUME", "Food gives you energy for your hero.  Energy is required to begin a fight with a monster.")
		}
	};
	if (_0x47D0.startsWith("blue") && _0x47D0.endsWith("Orb"))
	{
		clicksBlueOrb(_0x47D0);
		return
	};
	if (global_equipmentMap[_0x47D0] != null)
	{
		if (document.getElementById("item-box-needle").style.border == "3px solid orange")
		{
			if (_0x47D0.startsWith("snakeskin"))
			{
				confirmDialogue("images/needle.png", "<img src=\'images/" + _0x47D0 + ".png\' class=\'img-50\' /> Use needle on this? <img src=\'images/" + _0x47D0 + ".png\' class=\'img-30\' />", "Use Needle", "Cancel", "NEEDLE=" + _0x47D0);
				return
			}
			else
			{
				if (_0x47D0.startsWith("bearFur"))
				{
					confirmDialogue("images/needle.png", "<img src=\'images/" + _0x47D0 + ".png\' class=\'img-50\' /> Use needle on this? <img src=\'images/" + _0x47D0 + ".png\' class=\'img-30\' />", "Use Needle", "Cancel", "NEEDLE=" + _0x47D0);
					return
				}
				else
				{
					if (_0x47D0.startsWith("polarBearFur"))
					{
						confirmDialogue("images/needle.png", "<img src=\'images/" + _0x47D0 + ".png\' class=\'img-50\' /> Use needle on this? <img src=\'images/" + _0x47D0 + ".png\' class=\'img-30\' />", "Use Needle", "Cancel", "NEEDLE=" + _0x47D0);
						return
					}
					else
					{
						if (_0x47D0.startsWith("batSkin"))
						{
							confirmDialogue("images/needle.png", "<img src=\'images/" + _0x47D0 + ".png\' class=\'img-50\' /> Use needle on this? <img src=\'images/" + _0x47D0 + ".png\' class=\'img-30\' />", "Use Needle", "Cancel", "NEEDLE=" + _0x47D0);
							return
						}
						else
						{
							if (_0x47D0.startsWith("reaper"))
							{
								confirmDialogue("images/needle.png", "<img src=\'images/" + _0x47D0 + ".png\' class=\'img-50\' /> Use needle on this? <img src=\'images/" + _0x47D0 + ".png\' class=\'img-30\' />", "Use Needle", "Cancel", "NEEDLE=" + _0x47D0);
								return
							}
						}
					}
				}
			}
		};
		sendBytes("EQUIP=" + _0x47D0)
	};
	if (_0x47D0.toLowerCase().endsWith("arrow"))
	{
		sendBytes("EQUIP=" + _0x47D0);
		return
	};
	if (_0x47D0.endsWith("Potion") || _0x47D0.endsWith("Potion1") || _0x47D0.endsWith("Potion2"))
	{
		clicksPotion(_0x47D0);
		return
	};
	if (_0x47D0.substr(0, _0x47D0.length - 1).endsWith("Ring"))
	{
		confirmDialogue("images/" + _0x47D0 + ".png", "Ring are automatically equipped.<br /><br /><span style=\'color:grey\'>Bonuses are stacked for each ring.</span>", "Close", "", "");
		return
	};
	if (_0x47D0.endsWith("Mould"))
	{
		navigate("right-crafting");
		switchCraftingType(_0x47D0);
		refreshCraftables();
		return
	};
	if (_0x47D0.endsWith("Furnace"))
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
				openFurnaceDialogue(_0x47D0)
			}
		}
	};
	if (global_museumItemsArray[_0x47D0] != null)
	{
		sendBytes("CLICKS_MUSEUM_ITEM=" + _0x47D0)
	};
	if (_0x47D0.toLowerCase().endsWith("fishingnet"))
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
	if (_0x47D0.toLowerCase().endsWith("fishingrod"))
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
	if (_0x47D0.toLowerCase().endsWith("harpoon"))
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
	if (_0x47D0.toLowerCase().endsWith("shovel"))
	{
		openShovelDialogue()
	};
	if (_0x47D0.toLowerCase().endsWith("axe") && !_0x47D0.toLowerCase().endsWith("pickaxe"))
	{
		openAxeDialogue()
	};
	if (_0x47D0.toLowerCase().endsWith("chainsaw"))
	{
		openChainsawDialogue()
	};
	if (_0x47D0.toLowerCase().endsWith("trowel"))
	{
		openTrowelDialogue()
	};
	openChainsawDialogue;
	if (_0x47D0.toLowerCase().endsWith("chisel"))
	{
		openChiselDialogue()
	};
	if (_0x47D0.toLowerCase().endsWith("bonemealbin"))
	{
		bonemealBinDialgue()
	};
	if (_0x47D0.toLowerCase().endsWith("brewingkit"))
	{
		openBrewingKitDialogue()
	};
	if (_0x47D0.toLowerCase().endsWith("stardustpickaxe"))
	{
		openStardustToolDialogue("stardustPickaxe")
	};
	if (_0x47D0.toLowerCase().endsWith("stardusthammer"))
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
	if (_0x47D0.endsWith("Oven"))
	{
		clicksOven()
	};
	if (_0x47D0.startsWith("spellScroll"))
	{
		confirmDialogue("images/" + _0x47D0 + ".png", "Study the spell scroll?", "Learn", "Cancel", "LEARN_SPELL=" + _0x47D0)
	};
	if (_0x47D0 == "houseBlueprint")
	{
		confirmDialogue("images/researcher.png", "You may only craft one of three houses.<br /><br />The house you craft will define your character.", "Close", "", "");
		switchCraftingType(_0x47D0);
		refreshCraftables();
		return
	};
	if (_0x47D0.endsWith("LootBag"))
	{
		openInputDialogue("Loot Bag", "images/" + _0x47D0 + ".png", _0x47D0, 1, ["questionMarkIcon"], [1], [_0x47D0], [1], "Open", "OPEN_LOOTBAGS", "Loot bags contain basic items which are area specific.");
		return
	};
	if (_0x47D0.endsWith("Stew"))
	{
		confirmDialogue("images/" + _0x47D0 + ".png", "Drink the stew?", "Drink", "Cancel", "DRINK_CHEF_STEW=" + _0x47D0);
		return
	};
	if (_0x47D0 == "museumBlueprint")
	{
		switchCraftingType(_0x47D0);
		refreshCraftables();
		return
	};
	switch (_0x47D0)
	{
	case "rowBoatBlueprints":
		navigate("right-crafting");
		switchCraftingType(_0x47D0);
		refreshCraftables();
		break;
	case "canoeBoatBlueprints":
		navigate("right-crafting");
		switchCraftingType(_0x47D0);
		refreshCraftables();
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
		switchCraftingType(_0x47D0);
		refreshCraftables();
		break;
	case "fireFeather":
		navigate("right-crafting");
		switchCraftingType(_0x47D0);
		refreshCraftables();
		break;
	case "iceFeather":
		navigate("right-crafting");
		switchCraftingType(_0x47D0);
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
			var _0x4861 = getItemString("chefRecipeItem1");
			var _0x487E = getItemString("chefRecipeAmount1");
			var _0x48B8 = getItemString("chefRecipeItem2");
			var _0x48D5 = getItemString("chefRecipeAmount2");
			var _0x490F = getItemString("chefRecipeItem3");
			var _0x492C = getItemString("chefRecipeAmount3");
			var _0x4844 = "<img src=\'images/check.png\' class=\'img-20\' />";
			if (getItem(_0x4861) < _0x487E)
			{
				_0x4844 = "<img src=\'images/x.png\' class=\'img-20\' />"
			};
			var _0x489B = "<img src=\'images/check.png\' class=\'img-20\' />";
			if (getItem(_0x48B8) < _0x48D5)
			{
				_0x489B = "<img src=\'images/x.png\' class=\'img-20\' />"
			};
			var _0x48F2 = "<img src=\'images/check.png\' class=\'img-20\' />";
			if (getItem(_0x490F) < _0x492C)
			{
				_0x48F2 = "<img src=\'images/x.png\' class=\'img-20\' />"
			};
			if (getItem("researcherCooking") >= 4)
			{
				confirmDialogue2("images/chef.png", "I need some ingredients!  I\'m trying to make a <b style=\'color:green\'>" + getItemName(getItemString("chefStew")) + "</b><br /><br />Ingredients:<br /><br /><center><table width=\'70%\' style=\'text-align:center;color:black;padding:10px;border:1px solid #000033; background-color:#b3d9ff;\'><tr><td><img src=\'images/" + _0x4861 + ".png\' class=\'img-50\' /></td><td>" + _0x487E + " " + _0x4844 + "</td></tr><tr><td><img src=\'images/" + _0x48B8 + ".png\' class=\'img-50\' /></td><td>" + _0x48D5 + " " + _0x489B + "</td></tr><tr><td><img src=\'images/" + _0x490F + ".png\' class=\'img-50\' /></td><td>" + _0x492C + " " + _0x48F2 + "</td></tr></table><br /><br /><table width=\'70%\' style=\'text-align:center;color:black;padding:10px;border:1px solid #000033; background-color:#b3d9ff;\'><tr><td><img src=\'images/energy.png\' class=\'img-50\' /></td><td style=\'color:green\'>" + formatNumber(getItem("stewEnergy")) + "</td></tr><tr><td><img src=\'images/hourglass.png\' class=\'img-50\' /></td><td style=\'color:green\'>" + formatTime(getItem("stewCooldownReduction")) + "</td></tr></table></center>", "Make Stew", "Skip this Stew", "Close", "MAKE_STEW", "SKIP_STEW")
			}
			else
			{
				confirmDialogue("images/chef.png", "I need some ingredients!  I\'m trying to make a <b style=\'color:green\'>" + getItemName(getItemString("chefStew")) + "</b><br /><br />Ingredients:<br /><br /><center><table width=\'70%\' style=\'text-align:center;color:black;padding:10px;border:1px solid #000033; background-color:#b3d9ff;\'><tr><td><img src=\'images/" + _0x4861 + ".png\' class=\'img-50\' /></td><td>" + _0x487E + " " + _0x4844 + "</td></tr><tr><td><img src=\'images/" + _0x48B8 + ".png\' class=\'img-50\' /></td><td>" + _0x48D5 + " " + _0x489B + "</td></tr><tr><td><img src=\'images/" + _0x490F + ".png\' class=\'img-50\' /></td><td>" + _0x492C + " " + _0x48F2 + "</td></tr></table></center>", "Make Stew", "Close", "MAKE_STEW")
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
		if (getItemString("rocketDestination") == "moon" && getItem("rocketKm") == 384000)
		{
			sendBytes("COLLECT_ROCKET=moon")
		}
		else
		{
			var _0x3AC9 = "<img src=\'images/x.png\' class=\'img-20\' />";
			if (getItem("oil") >= 100000)
			{
				_0x3AC9 = "<img src=\'images/check.png\' class=\'img-20\' />"
			};
			var _0x4966 = "";
			if (getItem("titaniumRocketBoosters") > 0)
			{
				_0x4966 = "<br /><table style=\'color:grey;padding:10px;border:1px solid #000033; background-color:#b3d9ff;\'><tr><td><img src=\'images/titaniumRocketBoosters.png\' class=\'img-30\' /></td><td style=\'font-size:10pt;text-align:right;\'>A notification will show up and can be clicked to activate the boosters. <u style=\'cursor:pointer;\' onclick=\'titaniumRocketBoostersMoreInfo()\'>(more info)</u></td></tr></table>"
			};
			confirmDialogue(getRocketImage(), "Would you like to go to the moon?<br /><br /><span style=\'color:grey\'>Requires <img src=\'images/oil.png\' class=\'img-20\' /> 100,000 oil " + _0x3AC9 + "</span><br /><br /><center><table style=\'color:black;padding:10px;border:1px solid #000033; background-color:#b3d9ff;\'><tr><td><img src=\'images/moon.png\' class=\'img-50\' /></td><td>384,000 km</td></tr><tr><td><img src=\'images/" + _0x47D0 + ".png\' class=\'img-50\' /></td><td>" + formatNumber(getItem(_0x47D0 + "Trips")) + " Trips completed</td></tr></table></center>" + _0x4966, "Launch Rocket", "Close", "LAUNCH_ROCKET=moon")
		};
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
	case "treasureChest":
		openDialogue("dialogue-treasureChest");
		break;
	case "bones":
		if (getBonemealTypeData() == "none")
		{
			confirmDialogue("images/bones.png", "Hmm, wonder what I can do with these.", "Close", "", "")
		}
		else
		{
			var _0x4195 = getBonemealTypeData()[3];
			if (_0x4195 == "INF")
			{
				_0x4195 = "&#8734;"
			};
			openInputDialogue("Bonemeal<br /><span style=\'color:grey;font-size:10pt;\'>Currently stored: " + getItem("bonemeal") + "/" + _0x4195 + "</span>", "images/bonemeal.png", "bones", 1, ["bonemeal"], [1], ["bones"], [1], "Add", "ADD_BONEMEAL", "Bones can be stored in the bonemeal bin.  Bonemeal is required to plant high level seeds.");
			var _0x4949 = getMaxBonemealToPut(_0x47D0);
			document.getElementById("dialogue-wild-input").value = _0x4949;
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
			var _0x4195 = getBonemealTypeData()[3];
			if (_0x4195 == "INF")
			{
				_0x4195 = "&#8734;"
			};
			openInputDialogue("Bonemeal<br /><span style=\'color:grey;font-size:10pt;\'>Currently stored: " + getItem("bonemeal") + "/" + _0x4195 + "</span>", "images/bonemeal.png", "ashes", 1, ["bonemeal"], [2], ["ashes"], [1], "Add", "ADD_BONEMEAL", "Ashes can be stored in the bonemeal bin.  Bonemeal is required to plant high level seeds.");
			var _0x4949 = getMaxBonemealToPut(_0x47D0);
			document.getElementById("dialogue-wild-input").value = _0x4949;
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
			var _0x4195 = getBonemealTypeData()[3];
			if (_0x4195 == "INF")
			{
				_0x4195 = "&#8734;"
			};
			openInputDialogue("Bonemeal<br /><span style=\'color:grey;font-size:10pt;\'>Currently stored: " + getItem("bonemeal") + "/" + _0x4195 + "</span>", "images/bonemeal.png", "iceBones", 1, ["bonemeal"], [3], ["iceBones"], [1], "Add", "ADD_BONEMEAL", "Ice bones can be stored in the bonemeal bin.  Bonemeal is required to plant high level seeds. The cold has preserved its calcium content.");
			var _0x4949 = getMaxBonemealToPut(_0x47D0);
			document.getElementById("dialogue-wild-input").value = _0x4949;
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
			var _0x4195 = getBonemealTypeData()[3];
			if (_0x4195 == "INF")
			{
				_0x4195 = "&#8734;"
			};
			openInputDialogue("Bonemeal<br /><span style=\'color:grey;font-size:10pt;\'>Currently stored: " + getItem("bonemeal") + "/" + _0x4195 + "</span>", "images/bonemeal.png", "fishBones", 1, ["bonemeal"], [0.1], ["fishBones"], [1], "Add", "ADD_BONEMEAL", "Fishbones can be stored in the bonemeal bin.  Bonemeal is required to plant high level seeds.")
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
		if (getItem(_0x47D0 + "Timer") == 1)
		{
			sendBytes("COLLECT_BOAT=" + _0x47D0)
		}
		else
		{
			if (getItem(_0x47D0 + "Timer") > 1)
			{
				confirmDialogue("images/" + _0x47D0 + ".png", "You\'re already out on a boat!", "Close", "", "")
			}
			else
			{
				confirmDialogue("images/" + _0x47D0 + ".png", "Would you like to go fishing on your boat?<br /><br /><span style=\'color:grey\'>You will not obtain fish from your tool during this time.</span><br /><br /><center><table style=\'color:black;padding:10px;border:1px solid #000033; background-color:#b3d9ff;\'><tr><td><img src=\'images/hourglass.png\' class=\'img-50\' /></td><td>6 hours</td></tr><tr><td><img src=\'images/" + _0x47D0 + ".png\' class=\'img-50\' /></td><td>" + formatNumber(getItem(_0x47D0 + "Trips")) + " Trips completed</td></tr></table></center>", "Send Boat", "Close", "SEND_BOAT=" + _0x47D0)
			}
		};
		break;
	case "canoeBoat":
		if (getItem(_0x47D0 + "Timer") == 1)
		{
			sendBytes("COLLECT_BOAT=" + _0x47D0)
		}
		else
		{
			if (getItem(_0x47D0 + "Timer") > 1)
			{
				confirmDialogue("images/" + _0x47D0 + ".png", "You\'re already out on a boat!", "Close", "", "")
			}
			else
			{
				confirmDialogue("images/" + _0x47D0 + ".png", "Would you like to go fishing on your canoe?<br /><br /><span style=\'color:grey\'>You will not obtain fish from your tool during this time.</span><br /><br /><center><table style=\'color:black;padding:10px;border:1px solid #000033; background-color:#b3d9ff;\'><tr><td><img src=\'images/hourglass.png\' class=\'img-50\' /></td><td>10 hours</td></tr><tr><td><img src=\'images/" + _0x47D0 + ".png\' class=\'img-50\' /></td><td>" + formatNumber(getItem(_0x47D0 + "Trips")) + " Trips completed</td></tr></table></center>", "Send Boat", "Close", "SEND_BOAT=" + _0x47D0)
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
		if (_0x47D0 == "miner" && getItem("letTheMiningBeginQuest") == 2 && getAllocationAmount(_0x47D0) == 0)
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
			clicksMiningResource(_0x47D0)
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
		switchCraftingType(_0x47D0);
		refreshCraftables();
		break;
	case "bearFur":
		navigate("right-crafting");
		switchCraftingType(_0x47D0);
		refreshCraftables();
		break;
	case "polarBearFur":
		navigate("right-crafting");
		switchCraftingType(_0x47D0);
		refreshCraftables();
		break;
	case "blackSilk":
		navigate("right-crafting");
		switchCraftingType(_0x47D0);
		refreshCraftables();
		break;
	case "batSkin":
		navigate("right-crafting");
		switchCraftingType(_0x47D0);
		refreshCraftables();
		break;
	case "daggerBlade":
		;
	case "daggerHandle":
		navigate("right-crafting");
		switchCraftingType("offhandIronDagger");
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
	var _0x473F;
	var _0x41B2 = "";
	for (var _0x3607 = 1; _0x3607 <= 5; _0x3607++)
	{
		_0x473F = _0x3607;
		_0x41B2 = "";
		if (getItemString("presetWeapon" + _0x473F) != "weapon")
		{
			_0x41B2 += "<img src=\'images/" + getItemString("presetWeapon" + _0x473F) + ".png\' class=\'img-30\' /> "
		};
		if (getItemString("presetShield" + _0x473F) != "shield")
		{
			_0x41B2 += "<img src=\'images/" + getItemString("presetShield" + _0x473F) + ".png\' class=\'img-30\' /> "
		};
		if (getItemString("presetHead" + _0x473F) != "head")
		{
			_0x41B2 += "<img src=\'images/" + getItemString("presetHead" + _0x473F) + ".png\' class=\'img-30\' /> "
		};
		if (getItemString("presetBody" + _0x473F) != "body")
		{
			_0x41B2 += "<img src=\'images/" + getItemString("presetBody" + _0x473F) + ".png\' class=\'img-30\' /> "
		};
		if (getItemString("presetLegs" + _0x473F) != "legs")
		{
			_0x41B2 += "<img src=\'images/" + getItemString("presetLegs" + _0x473F) + ".png\' class=\'img-30\' /> "
		};
		if (getItemString("presetBoots" + _0x473F) != "boots")
		{
			_0x41B2 += "<img src=\'images/" + getItemString("presetBoots" + _0x473F) + ".png\' class=\'img-30\' /> "
		};
		if (getItemString("presetGloves" + _0x473F) != "gloves")
		{
			_0x41B2 += "<img src=\'images/" + getItemString("presetGloves" + _0x473F) + ".png\' class=\'img-30\' /> "
		};
		if (getItemString("presetAmulet" + _0x473F) != "amulet")
		{
			_0x41B2 += "<img src=\'images/" + getItemString("presetAmulet" + _0x473F) + ".png\' class=\'img-30\' /> "
		};
		if (getItemString("presetArrows" + _0x473F) != "arrows")
		{
			_0x41B2 += "<img src=\'images/" + getItemString("presetArrows" + _0x473F) + ".png\' class=\'img-30\' /> "
		};
		if (_0x41B2.length > 0)
		{
			document.getElementById("preset" + _0x473F + "-set").innerHTML = _0x41B2
		}
		else
		{
			document.getElementById("preset" + _0x473F + "-set").innerHTML = "(Not Set)"
		}
	};
	openDialogueOverride("dialogue-combatPresets", "large")
}

function setPreset(_0x4178)
{
	closeDialogue("dialogue-combatPresets");
	confirmDialogue("images/combatPresetsIcon.png", "Set this preset to what you\'re currently wearing?", "Set Preset", "Cancel", "SET_PRESET=" + _0x4178)
}

function usePreset(_0x4178)
{
	closeDialogue("dialogue-combatPresets");
	sendBytes("USE_PRESET=" + _0x4178)
}

function openInputTextDialogue(_0x63AE, _0x384B, _0x63CB, _0x6374, _0x6391, _0x4BE4)
{
	if (_0x63AE == "none")
	{
		document.getElementById("dialogue-text-input-img").style.display = "none"
	}
	else
	{
		document.getElementById("dialogue-text-input-img").style.display = "";
		document.getElementById("dialogue-text-input-img").src = _0x63AE
	};
	document.getElementById("dialogue-text-input-description").innerHTML = _0x384B;
	document.getElementById("dialogue-text-input-title").innerHTML = _0x63CB;
	document.getElementById("dialogue-text-input-confirm").innerHTML = _0x6374;
	document.getElementById("dialogue-text-input-cancel").innerHTML = _0x6391;
	document.getElementById("dialogue-text-input-confirm").onclick = function ()
	{
		sendBytes(_0x4BE4 + "=" + document.getElementById("dialogue-text-input-box").value);
		closeDialogue("dialogue-text-input")
	};
	openDialogue("dialogue-text-input")
}

function open2InputTextDialogue(_0x63AE, _0x384B, _0x63CB, _0x63E8, _0x6374, _0x6391, _0x4BE4)
{
	if (_0x63AE == "none")
	{
		document.getElementById("dialogue-text-input2-img").style.display = "none"
	}
	else
	{
		document.getElementById("dialogue-text-input2-img").style.display = "";
		document.getElementById("dialogue-text-input2-img").src = _0x63AE
	};
	document.getElementById("dialogue-text-input2-description").innerHTML = _0x384B;
	document.getElementById("dialogue-text-input2-title1").innerHTML = _0x63CB;
	document.getElementById("dialogue-text-input2-title2").innerHTML = _0x63E8;
	document.getElementById("dialogue-text-input2-confirm").innerHTML = _0x6374;
	document.getElementById("dialogue-text-input2-cancel").innerHTML = _0x6391;
	document.getElementById("dialogue-text-input2-confirm").onclick = function ()
	{
		sendBytes(_0x4BE4 + "=" + document.getElementById("dialogue-text-input2-box1").value + "~" + document.getElementById("dialogue-text-input2-box2").value);
		closeDialogue("dialogue-text-input2")
	};
	openDialogue("dialogue-text-input2")
}

function clicksDonorShopItem(_0x47D0)
{
	switch (_0x47D0)
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
		confirmDialogue("images/donorCoins.png", "Are you sure you want to purchase this?", "Purchase", "Cancel", "PURCHASE_DONOR=" + _0x47D0);
		break
	}
}

function resetAnimationOfCurrentFightToIdle()
{
	var _0x4F2D = getMonsterObject(getItemString("monsterName"));
	if (_0x4F2D != "none")
	{
		_0x4F2D.frameAt = 0;
		_0x4F2D.speedAt = 0;
		_0x4F2D.currentAnimation = _0x4F2D.idleAnimationObject
	}
}
var global_museumItemsArray = new Array();

function refreshMuseum()
{
	document.getElementById("museum-section").innerHTML = "";
	var _0x473F = "";
	_0x473F = "brokenStinger";
	global_museumItemsArray[_0x473F] = true;
	if (getItem(_0x473F + "Museum") == 1)
	{
		addItemBox(_0x473F, 0, "", "museum-section", "#1a344c", "#0d1a26", "BROKEN STINGER", "", true)
	}
	else
	{
		addMuseumItemBox("x_grey", _0x473F + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "BROKEN STINGER", "", true)
	};
	_0x473F = "snakeBones";
	global_museumItemsArray[_0x473F] = true;
	if (getItem(_0x473F + "Museum") == 1)
	{
		addItemBox(_0x473F, 0, "", "museum-section", "#1a344c", "#0d1a26", "SNAKE BONES", "", true)
	}
	else
	{
		addMuseumItemBox("x_grey", _0x473F + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "SNAKE BONES", "", true)
	};
	_0x473F = "giantPearl";
	global_museumItemsArray[_0x473F] = true;
	if (getItem(_0x473F + "Museum") == 1)
	{
		addItemBox(_0x473F, 0, "", "museum-section", "#1a344c", "#0d1a26", "GIANT PEARL", "", true)
	}
	else
	{
		addMuseumItemBox("x_grey", _0x473F + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "GIANT PEARL", "", true)
	};
	_0x473F = "rareGiantPearl";
	global_museumItemsArray[_0x473F] = true;
	if (getItem(_0x473F + "Museum") == 1)
	{
		addItemBox(_0x473F, 0, "", "museum-section", "#1a344c", "#0d1a26", "RARE GIANT PEARL", "", true)
	}
	else
	{
		addMuseumItemBox("x_grey", _0x473F + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "RARE GIANT PEARL", "", true)
	};
	_0x473F = "skeletonSkull";
	global_museumItemsArray[_0x473F] = true;
	if (getItem(_0x473F + "Museum") == 1)
	{
		addItemBox(_0x473F, 0, "", "museum-section", "#1a344c", "#0d1a26", "SKULL", "", true)
	}
	else
	{
		addMuseumItemBox("x_grey", _0x473F + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "SKULL", "", true)
	};
	_0x473F = "ghostClothes";
	global_museumItemsArray[_0x473F] = true;
	if (getItem(_0x473F + "Museum") == 1)
	{
		addItemBox(_0x473F, 0, "", "museum-section", "#1a344c", "#0d1a26", "GHOST CLOTHES", "", true)
	}
	else
	{
		addMuseumItemBox("x_grey", _0x473F + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "GHOST CLOTHES", "", true)
	};
	_0x473F = "cockroach";
	global_museumItemsArray[_0x473F] = true;
	if (getItem(_0x473F + "Museum") == 1)
	{
		addItemBox(_0x473F, 0, "", "museum-section", "#1a344c", "#0d1a26", "GIANT COCKROACH", "", true)
	}
	else
	{
		addMuseumItemBox("x_grey", _0x473F + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "GIANT COCKROACH", "", true)
	};
	_0x473F = "goldenCockroach";
	global_museumItemsArray[_0x473F] = true;
	if (getItem(_0x473F + "Museum") == 1)
	{
		addItemBox(_0x473F, 0, "", "museum-section", "#1a344c", "#0d1a26", "GOLDEN COCKROACH", "", true)
	}
	else
	{
		addMuseumItemBox("x_grey", _0x473F + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "GOLDEN COCKROACH", "", true)
	};
	_0x473F = "smallSeaShell";
	global_museumItemsArray[_0x473F] = true;
	if (getItem(_0x473F + "Museum") == 1)
	{
		addItemBox(_0x473F, 0, "", "museum-section", "#1a344c", "#0d1a26", "SMALL SHELL", "", true)
	}
	else
	{
		addMuseumItemBox("x_grey", _0x473F + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "SMALL SHELL", "", true)
	};
	_0x473F = "mediumSeaShell";
	global_museumItemsArray[_0x473F] = true;
	if (getItem(_0x473F + "Museum") == 1)
	{
		addItemBox(_0x473F, 0, "", "museum-section", "#1a344c", "#0d1a26", "MEDIUM SHELL", "", true)
	}
	else
	{
		addMuseumItemBox("x_grey", _0x473F + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "MEDIUM SHELL", "", true)
	};
	_0x473F = "largeSeaShell";
	global_museumItemsArray[_0x473F] = true;
	if (getItem(_0x473F + "Museum") == 1)
	{
		addItemBox(_0x473F, 0, "", "museum-section", "#1a344c", "#0d1a26", "LARGE SHELL", "", true)
	}
	else
	{
		addMuseumItemBox("x_grey", _0x473F + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "LARGE SHELL", "", true)
	};
	_0x473F = "yetiLeftFoot";
	global_museumItemsArray[_0x473F] = true;
	if (getItem(_0x473F + "Museum") == 1)
	{
		addItemBox(_0x473F, 0, "", "museum-section", "#1a344c", "#0d1a26", "YETI\'S FOOT (L)", "", true)
	}
	else
	{
		addMuseumItemBox("x_grey", _0x473F + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "YETI\'S FOOT (L)", "", true)
	};
	_0x473F = "yetiRightFoot";
	global_museumItemsArray[_0x473F] = true;
	if (getItem(_0x473F + "Museum") == 1)
	{
		addItemBox(_0x473F, 0, "", "museum-section", "#1a344c", "#0d1a26", "YETI\'S FOOT (R)", "", true)
	}
	else
	{
		addMuseumItemBox("x_grey", _0x473F + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "YETI\'S FOOT (R)", "", true)
	};
	_0x473F = "snowmanCrafted";
	global_museumItemsArray[_0x473F] = true;
	if (getItem(_0x473F + "Museum") == 1)
	{
		addItemBox(_0x473F, 0, "", "museum-section", "#1a344c", "#0d1a26", "SNOWMAN", "", true)
	}
	else
	{
		addMuseumItemBox("x_grey", _0x473F + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "SNOWMAN", "", true)
	};
	_0x473F = "sharkTooth";
	global_museumItemsArray[_0x473F] = true;
	if (getItem(_0x473F + "Museum") == 1)
	{
		addItemBox(_0x473F, 0, "", "museum-section", "#1a344c", "#0d1a26", "SHARK\'S TOOTH", "", true)
	}
	else
	{
		addMuseumItemBox("x_grey", _0x473F + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "SHARK\'S TOOTH", "", true)
	};
	_0x473F = "sapphireGlassHand";
	global_museumItemsArray[_0x473F] = true;
	if (getItem(_0x473F + "Museum") == 1)
	{
		addItemBox(_0x473F, 0, "", "museum-section", "#1a344c", "#0d1a26", "SAPPHIRE GLASS HAND", "", true)
	}
	else
	{
		addMuseumItemBox("x_grey", _0x473F + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "SAPPHIRE GLASS HAND", "", true)
	};
	_0x473F = "emeraldGlassHand";
	global_museumItemsArray[_0x473F] = true;
	if (getItem(_0x473F + "Museum") == 1)
	{
		addItemBox(_0x473F, 0, "", "museum-section", "#1a344c", "#0d1a26", "EMERALD GLASS HAND", "", true)
	}
	else
	{
		addMuseumItemBox("x_grey", _0x473F + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "EMERALD GLASS HAND", "", true)
	};
	_0x473F = "rubyGlassHand";
	global_museumItemsArray[_0x473F] = true;
	if (getItem(_0x473F + "Museum") == 1)
	{
		addItemBox(_0x473F, 0, "", "museum-section", "#1a344c", "#0d1a26", "RUBY GLASS HAND", "", true)
	}
	else
	{
		addMuseumItemBox("x_grey", _0x473F + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "RUBY GLASS HAND", "", true)
	}
}

function refreshHeroHpBar()
{
	var _0x6B9C = parseInt(getItem("heroHp") / getItem("heroMaxHp") * 100);
	if (_0x6B9C > 100)
	{
		_0x6B9C = 100
	};
	document.getElementById("hero-inner-hp-bar").style.minWidth = _0x6B9C + "%"
}

function refreshHeroManaBar()
{
	var _0x6B9C = parseInt(getItem("heroMana") / getItem("heroMaxMana") * 100);
	if (_0x6B9C > 100)
	{
		_0x6B9C = 100
	};
	document.getElementById("hero-inner-mana-bar").style.minWidth = _0x6B9C + "%"
}

function getSeedDropRate(_0x5633)
{
	switch (_0x5633)
	{
	case "dottedGreenLeafSeeds":
		return 14400;
	case "greenLeafSeeds":
		return 14400 * 2;
	case "limeLeafSeeds":
		return 60000;
	case "goldLeafSeeds":
		return 150000;
	case "crystalLeafSeeds":
		return 500000;
	case "stripedGoldLeafSeeds":
		return 1000000;
	case "stripedCrystalLeafSeeds":
		return 3000000;
	case "redMushroomSeeds":
		return 3600;
	case "blewitMushroomSeeds":
		return 36000;
	case "stardustSeeds":
		return 28800;
	default:
		return 0
	}
}

function getBurnRate()
{
	var _0x52B0 = 1;
	switch (getOvenType())
	{
	case "bronzeOven":
		_0x52B0 = 0.5;
		break;
	case "ironOven":
		_0x52B0 = 0.4;
		break;
	case "silverOven":
		_0x52B0 = 0.3;
		break;
	case "goldOven":
		_0x52B0 = 0.2;
		break;
	case "promethiumOven":
		_0x52B0 = 0.1;
		break
	};
	if (getItem("researcherCooking") >= 3)
	{
		_0x52B0 -= 0.05
	};
	return _0x52B0
}

function getOvenType()
{
	var _0x473F = "promethiumOven";
	if (getItem(_0x473F) == 1)
	{
		return _0x473F
	};
	var _0x473F = "goldOven";
	if (getItem(_0x473F) == 1)
	{
		return _0x473F
	};
	var _0x473F = "silverOven";
	if (getItem(_0x473F) == 1)
	{
		return _0x473F
	};
	var _0x473F = "ironOven";
	if (getItem(_0x473F) == 1)
	{
		return _0x473F
	};
	var _0x473F = "bronzeOven";
	if (getItem(_0x473F) == 1)
	{
		return _0x473F
	}
}

function refreshSeedListTab()
{
	var _0x396D = document.getElementById("farming-seedList-section");
	var _0x41B2 = "<center>";
	var _0x473F = "";
	_0x473F = "dottedGreenLeafSeeds";
	rarity = getSeedDropRate(_0x473F);
	if (getItem(_0x473F + "BobTotal") > 0)
	{
		_0x41B2 += "<div class=\'mobile-style\' style=\'background-image:url(images/background16.jpg)\'>";
		_0x41B2 += "<img src=\'images/" + _0x473F + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "DOTTED GREEN";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:white;font-size:12pt;\'>1/" + formatNumber(rarity) + "</span>";
		_0x41B2 += "<br />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x473F + "BobTotal") + "</span>";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>"
	};
	_0x473F = "greenLeafSeeds";
	rarity = getSeedDropRate(_0x473F);
	if (getItem(_0x473F + "BobTotal") > 0)
	{
		_0x41B2 += "<div class=\'mobile-style\' style=\'background-image:url(images/background16.jpg)\'>";
		_0x41B2 += "<img src=\'images/" + _0x473F + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "GREEN LEAF";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:white;font-size:12pt;\'>1/" + formatNumber(rarity) + "</span>";
		_0x41B2 += "<br />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x473F + "BobTotal") + "</span>";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>"
	};
	_0x473F = "limeLeafSeeds";
	rarity = getSeedDropRate(_0x473F);
	if (getItem(_0x473F + "BobTotal") > 0)
	{
		_0x41B2 += "<div class=\'mobile-style\' style=\'background-image:url(images/background16.jpg)\'>";
		_0x41B2 += "<img src=\'images/" + _0x473F + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "LIME LEAF";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:white;font-size:12pt;\'>1/" + formatNumber(rarity) + "</span>";
		_0x41B2 += "<br />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x473F + "BobTotal") + "</span>";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>"
	};
	_0x473F = "goldLeafSeeds";
	rarity = getSeedDropRate(_0x473F);
	if (getItem(_0x473F + "BobTotal") > 0)
	{
		_0x41B2 += "<div class=\'mobile-style\' style=\'background-image:url(images/background16.jpg)\'>";
		_0x41B2 += "<img src=\'images/" + _0x473F + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "GOLD LEAF";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:white;font-size:12pt;\'>1/" + formatNumber(rarity) + "</span>";
		_0x41B2 += "<br />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x473F + "BobTotal") + "</span>";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>"
	};
	_0x473F = "crystalLeafSeeds";
	rarity = getSeedDropRate(_0x473F);
	if (getItem(_0x473F + "BobTotal") > 0)
	{
		_0x41B2 += "<div class=\'mobile-style\' style=\'background-image:url(images/background16.jpg)\'>";
		_0x41B2 += "<img src=\'images/" + _0x473F + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "CRYSTAL LEAF";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:white;font-size:12pt;\'>1/" + formatNumber(rarity) + "</span>";
		_0x41B2 += "<br />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x473F + "BobTotal") + "</span>";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>"
	};
	_0x473F = "stripedGoldLeafSeeds";
	rarity = getSeedDropRate(_0x473F);
	if (getItem(_0x473F + "BobTotal") > 0)
	{
		_0x41B2 += "<div class=\'mobile-style\' style=\'background-image:url(images/background16.jpg)\'>";
		_0x41B2 += "<img src=\'images/" + _0x473F + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "STRIPED GOLD";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:white;font-size:12pt;\'>1/" + formatNumber(rarity) + "</span>";
		_0x41B2 += "<br />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x473F + "BobTotal") + "</span>";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>"
	};
	_0x473F = "stripedCrystalLeafSeeds";
	rarity = getSeedDropRate(_0x473F);
	if (getItem(_0x473F + "BobTotal") > 0)
	{
		_0x41B2 += "<div class=\'mobile-style\' style=\'background-image:url(images/background16.jpg)\'>";
		_0x41B2 += "<img src=\'images/" + _0x473F + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "STRIPED CRYSTAL";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:white;font-size:12pt;\'>1/" + formatNumber(rarity) + "</span>";
		_0x41B2 += "<br />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x473F + "BobTotal") + "</span>";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>"
	};
	_0x473F = "redMushroomSeeds";
	rarity = getSeedDropRate(_0x473F);
	if (getItem(_0x473F + "BobTotal") > 0)
	{
		_0x41B2 += "<div class=\'mobile-style\' style=\'background-image:url(images/background7.jpg)\'>";
		_0x41B2 += "<img src=\'images/" + _0x473F + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "RED MUSHROOM";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:white;font-size:12pt;\'>1/" + formatNumber(rarity) + "</span>";
		_0x41B2 += "<br />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x473F + "BobTotal") + "</span>";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>"
	};
	_0x473F = "blewitMushroomSeeds";
	rarity = getSeedDropRate(_0x473F);
	if (getItem(_0x473F + "BobTotal") > 0)
	{
		_0x41B2 += "<div class=\'mobile-style\' style=\'background-image:url(images/background7.jpg)\'>";
		_0x41B2 += "<img src=\'images/" + _0x473F + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "BLEWIT MUSH";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:white;font-size:12pt;\'>1/" + formatNumber(rarity) + "</span>";
		_0x41B2 += "<br />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x473F + "BobTotal") + "</span>";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>"
	};
	_0x473F = "snapegrassSeeds";
	rarity = getSeedDropRate(_0x473F);
	if (getItem(_0x473F + "BobTotal") > 0)
	{
		_0x41B2 += "<div class=\'mobile-style\' style=\'background-image:url(images/background7.jpg)\'>";
		_0x41B2 += "<img src=\'images/" + _0x473F + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "SNAPEGRASS";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:white;font-size:12pt;\'>1/" + formatNumber(rarity) + "</span>";
		_0x41B2 += "<br />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x473F + "BobTotal") + "</span>";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>"
	};
	_0x473F = "stardustSeeds";
	rarity = getSeedDropRate(_0x473F);
	if (getItem(_0x473F + "BobTotal") > 0)
	{
		_0x41B2 += "<div class=\'mobile-style\' style=\'background-image:url(images/background_light.png)\'>";
		_0x41B2 += "<img src=\'images/" + _0x473F + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "STARDUST SEEDS";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:white;font-size:12pt;\'>1/" + formatNumber(rarity) + "</span>";
		_0x41B2 += "<br />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x473F + "BobTotal") + "</span>";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>"
	};
	_0x473F = "treeSeeds";
	rarity = getSeedDropRate(_0x473F);
	if (getItem(_0x473F + "Chopped") > 0)
	{
		_0x41B2 += "<div class=\'mobile-style\' style=\'background-image:url(images/background18.jpg)\'>";
		_0x41B2 += "<img src=\'images/" + _0x473F + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "TREE";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:white;font-size:12pt;color:grey\'>N/A</span>";
		_0x41B2 += "<br />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x473F + "Chopped") + "</span>";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>"
	};
	_0x473F = "oakTreeSeeds";
	rarity = getSeedDropRate(_0x473F);
	if (getItem(_0x473F + "Chopped") > 0)
	{
		_0x41B2 += "<div class=\'mobile-style\' style=\'background-image:url(images/background18.jpg)\'>";
		_0x41B2 += "<img src=\'images/" + _0x473F + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "OAK TREE";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:white;font-size:12pt;color:grey\'>N/A</span>";
		_0x41B2 += "<br />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x473F + "Chopped") + "</span>";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>"
	};
	_0x473F = "willowTreeSeeds";
	rarity = getSeedDropRate(_0x473F);
	if (getItem(_0x473F + "Chopped") > 0)
	{
		_0x41B2 += "<div class=\'mobile-style\' style=\'background-image:url(images/background18.jpg)\'>";
		_0x41B2 += "<img src=\'images/" + _0x473F + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "WILLOW TREE";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:white;font-size:12pt;color:grey\'>N/A</span>";
		_0x41B2 += "<br />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x473F + "Chopped") + "</span>";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>"
	};
	_0x473F = "bambooTreeSeeds";
	rarity = getSeedDropRate(_0x473F);
	if (getItem(_0x473F + "Chopped") > 0)
	{
		_0x41B2 += "<div class=\'mobile-style\' style=\'background-image:url(images/background18.jpg)\'>";
		_0x41B2 += "<img src=\'images/" + _0x473F + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "BAMBOO TREE";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:white;font-size:12pt;color:grey\'>N/A</span>";
		_0x41B2 += "<br />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x473F + "Chopped") + "</span>";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>"
	};
	_0x473F = "appleTreeSeeds";
	rarity = getSeedDropRate(_0x473F);
	if (getItem(_0x473F + "Chopped") > 0)
	{
		_0x41B2 += "<div class=\'mobile-style\' style=\'background-image:url(images/background18.jpg)\'>";
		_0x41B2 += "<img src=\'images/" + _0x473F + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "APPLE TREE";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:white;font-size:12pt;color:grey\'>N/A</span>";
		_0x41B2 += "<br />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x473F + "Chopped") + "</span>";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>"
	};
	_0x473F = "mapleTreeSeeds";
	rarity = getSeedDropRate(_0x473F);
	if (getItem(_0x473F + "Chopped") > 0)
	{
		_0x41B2 += "<div class=\'mobile-style\' style=\'background-image:url(images/background18.jpg)\'>";
		_0x41B2 += "<img src=\'images/" + _0x473F + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "MAPLE TREE";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:white;font-size:12pt;color:grey\'>N/A</span>";
		_0x41B2 += "<br />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x473F + "Chopped") + "</span>";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>"
	};
	_0x473F = "lavaTreeSeeds";
	rarity = getSeedDropRate(_0x473F);
	if (getItem(_0x473F + "Chopped") > 0)
	{
		_0x41B2 += "<div class=\'mobile-style\' style=\'background-image:url(images/background18.jpg)\'>";
		_0x41B2 += "<img src=\'images/" + _0x473F + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "LAVA TREE";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:white;font-size:12pt;color:grey\'>N/A</span>";
		_0x41B2 += "<br />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x473F + "Chopped") + "</span>";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>"
	};
	_0x473F = "bananaTreeSeeds";
	rarity = getSeedDropRate(_0x473F);
	if (getItem(_0x473F + "Chopped") > 0)
	{
		_0x41B2 += "<div class=\'mobile-style\' style=\'background-image:url(images/background18.jpg)\'>";
		_0x41B2 += "<img src=\'images/" + _0x473F + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "BANANA TREE";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:white;font-size:12pt;color:grey\'>N/A</span>";
		_0x41B2 += "<br />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x473F + "Chopped") + "</span>";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>"
	};
	_0x473F = "pineTreeSeeds";
	rarity = getSeedDropRate(_0x473F);
	if (getItem(_0x473F + "Chopped") > 0)
	{
		_0x41B2 += "<div class=\'mobile-style\' style=\'background-image:url(images/background18.jpg)\'>";
		_0x41B2 += "<img src=\'images/" + _0x473F + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "PINE TREE";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:white;font-size:12pt;color:grey\'>N/A</span>";
		_0x41B2 += "<br />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x473F + "Chopped") + "</span>";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>"
	};
	_0x473F = "stardustTreeSeeds";
	rarity = getSeedDropRate(_0x473F);
	if (getItem(_0x473F + "Chopped") > 0)
	{
		_0x41B2 += "<div class=\'mobile-style\' style=\'background-image:url(images/background18.jpg)\'>";
		_0x41B2 += "<img src=\'images/" + _0x473F + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "STARDUST TREE";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:white;font-size:12pt;color:grey\'>N/A</span>";
		_0x41B2 += "<br />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x473F + "Chopped") + "</span>";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>"
	};
	_0x41B2 += "</center>";
	_0x396D.innerHTML = _0x41B2
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

function refreshBoundOrbs()
{
	var _0x396D = document.getElementById("pirate-section");
	var _0x41B2 = "<center>";
	var _0x6A7A = "background-image:url(images/background19.jpg)";
	var _0x4722 = "";
	_0x4722 = "blueFurnaceOrb";
	if (getItem(_0x4722 + "Bound") > 0)
	{
		_0x41B2 += "<div class=\'mobile-style\' style=\'" + _0x6A7A + ";max-height:300px;height:300px;vertical-align:text-top\'>";
		_0x41B2 += "<img src=\'images/" + _0x4722 + ".png\' />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + getItemName(_0x4722).toUpperCase();
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:grey;font-size:12pt;\'>" + getOrbDescription(_0x4722) + "</span>";
		_0x41B2 += "<br />";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>"
	};
	_0x4722 = "blueWoodcuttingOrb";
	if (getItem(_0x4722 + "Bound") > 0)
	{
		_0x41B2 += "<div class=\'mobile-style\' style=\'" + _0x6A7A + ";max-height:300px;height:300px;vertical-align:text-top\'>";
		_0x41B2 += "<img src=\'images/" + _0x4722 + ".png\' />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + getItemName(_0x4722).toUpperCase();
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:grey;font-size:12pt;\'>" + getOrbDescription(_0x4722) + "</span>";
		_0x41B2 += "<br />";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>"
	};
	_0x4722 = "blueOreOrb";
	if (getItem(_0x4722 + "Bound") > 0)
	{
		_0x41B2 += "<div class=\'mobile-style\' style=\'" + _0x6A7A + ";max-height:300px;height:300px;vertical-align:text-top\'>";
		_0x41B2 += "<img src=\'images/" + _0x4722 + ".png\' />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + getItemName(_0x4722).toUpperCase();
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:grey;font-size:12pt;\'>" + getOrbDescription(_0x4722) + "</span>";
		_0x41B2 += "<br />";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>"
	};
	_0x4722 = "blueOilWellOrb";
	if (getItem(_0x4722 + "Bound") > 0)
	{
		_0x41B2 += "<div class=\'mobile-style\' style=\'" + _0x6A7A + ";max-height:300px;height:300px;vertical-align:text-top\'>";
		_0x41B2 += "<img src=\'images/" + _0x4722 + ".png\' />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + getItemName(_0x4722).toUpperCase();
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:grey;font-size:12pt;\'>" + getOrbDescription(_0x4722) + "</span>";
		_0x41B2 += "<br />";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>"
	};
	_0x4722 = "blueManaOrb";
	if (getItem(_0x4722 + "Bound") > 0)
	{
		_0x41B2 += "<div class=\'mobile-style\' style=\'" + _0x6A7A + ";max-height:300px;height:300px;vertical-align:text-top\'>";
		_0x41B2 += "<img src=\'images/" + _0x4722 + ".png\' />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + getItemName(_0x4722).toUpperCase();
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:grey;font-size:12pt;\'>" + getOrbDescription(_0x4722) + "</span>";
		_0x41B2 += "<br />";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>"
	};
	_0x41B2 += "</center>";
	if (_0x41B2 == "<center></center>")
	{
		_0x41B2 = "<center>You do not have any orbs.</center>"
	};
	_0x396D.innerHTML = _0x41B2
}

function refreshTreeListTab()
{
	var _0x396D = document.getElementById("woodcutting-treeList-section");
	var _0x41B2 = "<center>";
	var _0x473F = "";
	var _0x38DC = "";
	var _0x4ED6 = "";
	var _0x6A7A = "background-image:url(images/background16.jpg)";
	var _0x736D = "<img src=\'images/treeListLocked.png\' style=\'float:left;)\' class=\'img-100\' />";
	var _0x3F8B = "";
	_0x473F = "tree";
	rarity = "";
	if (getItem(_0x473F + "ChoppedTotal") > 0)
	{
		_0x4ED6 = _0x473F;
		rarity = "Common";
		_0x3F8B = "1";
		backgroundImageStyle = _0x6A7A;
		_0x38DC = "<img src=\'images/" + _0x473F + ".png\' style=\'float:left;\' class=\'img-100\' />"
	}
	else
	{
		_0x4ED6 = "???";
		backgroundImageStyle = "";
		rarity = "";
		_0x3F8B = "1";
		_0x38DC = _0x736D;
		backgroundImageStyle = ""
	};
	_0x41B2 += "<div class=\'mobile-style\' style=\'" + backgroundImageStyle + "\'>";
	_0x41B2 += _0x38DC;
	_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x4ED6.toUpperCase();
	_0x41B2 += "<br />";
	_0x41B2 += "<span style=\'color:white;font-size:12pt;\'>" + rarity + "</span>";
	_0x41B2 += "<br />";
	_0x41B2 += "<span style=\'color:grey;font-size:12pt;\'>Level " + _0x3F8B + "</span>";
	_0x41B2 += "<br />";
	_0x41B2 += "<br />";
	_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Chopped " + getItem(_0x473F + "ChoppedTotal") + "</span>";
	_0x41B2 += "</span>";
	_0x41B2 += "</div>";
	_0x473F = "oakTree";
	rarity = "";
	if (getItem(_0x473F + "ChoppedTotal") > 0)
	{
		_0x4ED6 = getItemName(_0x473F).toUpperCase();
		rarity = "Common";
		_0x3F8B = "15";
		backgroundImageStyle = _0x6A7A;
		_0x38DC = "<img src=\'images/" + _0x473F + ".png\' style=\'float:left;\' class=\'img-100\' />"
	}
	else
	{
		_0x4ED6 = "???";
		rarity = "";
		_0x3F8B = "15";
		_0x38DC = _0x736D;
		backgroundImageStyle = ""
	};
	_0x41B2 += "<div class=\'mobile-style\' style=\'" + backgroundImageStyle + "\'>";
	_0x41B2 += _0x38DC;
	_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x4ED6;
	_0x41B2 += "<br />";
	_0x41B2 += "<span style=\'color:white;font-size:12pt;\'>" + rarity + "</span>";
	_0x41B2 += "<br />";
	_0x41B2 += "<span style=\'color:grey;font-size:12pt;\'>Level " + _0x3F8B + "</span>";
	_0x41B2 += "<br />";
	_0x41B2 += "<br />";
	_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Chopped " + getItem(_0x473F + "ChoppedTotal") + "</span>";
	_0x41B2 += "</span>";
	_0x41B2 += "</div>";
	_0x473F = "willowTree";
	rarity = "";
	if (getItem(_0x473F + "ChoppedTotal") > 0)
	{
		_0x4ED6 = getItemName(_0x473F).toUpperCase();
		rarity = "Common";
		_0x3F8B = "30";
		backgroundImageStyle = _0x6A7A;
		_0x38DC = "<img src=\'images/" + _0x473F + ".png\' style=\'float:left;\' class=\'img-100\' />"
	}
	else
	{
		backgroundImageStyle = "";
		_0x4ED6 = "???";
		_0x3F8B = "30";
		rarity = "";
		_0x38DC = _0x736D
	};
	_0x41B2 += "<div class=\'mobile-style\' style=\'" + backgroundImageStyle + "\'>";
	_0x41B2 += _0x38DC;
	_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x4ED6;
	_0x41B2 += "<br />";
	_0x41B2 += "<span style=\'color:white;font-size:12pt;\'>" + rarity + "</span>";
	_0x41B2 += "<br />";
	_0x41B2 += "<span style=\'color:grey;font-size:12pt;\'>Level " + _0x3F8B + "</span>";
	_0x41B2 += "<br />";
	_0x41B2 += "<br />";
	_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Chopped " + getItem(_0x473F + "ChoppedTotal") + "</span>";
	_0x41B2 += "</span>";
	_0x41B2 += "</div>";
	_0x473F = "bambooTree";
	rarity = "Uncommon";
	_0x3F8B = "40";
	if (getItem(_0x473F + "ChoppedTotal") > 0)
	{
		_0x4ED6 = getItemName(_0x473F).toUpperCase();
		backgroundImageStyle = _0x6A7A;
		_0x38DC = "<img src=\'images/" + _0x473F + ".png\' style=\'float:left;\' class=\'img-100\' />"
	}
	else
	{
		backgroundImageStyle = "";
		_0x4ED6 = "???";
		_0x38DC = _0x736D
	};
	_0x41B2 += "<div class=\'mobile-style\' style=\'" + backgroundImageStyle + "\'>";
	_0x41B2 += _0x38DC;
	_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x4ED6;
	_0x41B2 += "<br />";
	_0x41B2 += "<span style=\'color:white;font-size:12pt;\'>" + rarity + "</span>";
	_0x41B2 += "<br />";
	_0x41B2 += "<span style=\'color:grey;font-size:12pt;\'>Level " + _0x3F8B + "</span>";
	_0x41B2 += "<br />";
	_0x41B2 += "<br />";
	_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Chopped " + getItem(_0x473F + "ChoppedTotal") + "</span>";
	_0x41B2 += "</span>";
	_0x41B2 += "</div>";
	if (getItem("researcherWoodcutting") >= 5)
	{
		_0x473F = "appleTree";
		rarity = "Uncommon";
		_0x3F8B = "45";
		if (getItem(_0x473F + "ChoppedTotal") > 0)
		{
			_0x4ED6 = getItemName(_0x473F).toUpperCase();
			backgroundImageStyle = _0x6A7A;
			_0x38DC = "<img src=\'images/" + _0x473F + ".png\' style=\'float:left;\' class=\'img-100\' />"
		}
		else
		{
			backgroundImageStyle = "";
			_0x4ED6 = "???";
			_0x38DC = _0x736D
		};
		_0x41B2 += "<div class=\'mobile-style\' style=\'" + backgroundImageStyle + "\'>";
		_0x41B2 += _0x38DC;
		_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x4ED6;
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:white;font-size:12pt;\'>" + rarity + "</span>";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:grey;font-size:12pt;\'>Level " + _0x3F8B + "</span>";
		_0x41B2 += "<br />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Chopped " + getItem(_0x473F + "ChoppedTotal") + "</span>";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>"
	};
	_0x473F = "mapleTree";
	rarity = "Uncommon";
	_0x3F8B = "50";
	if (getItem(_0x473F + "ChoppedTotal") > 0)
	{
		_0x4ED6 = getItemName(_0x473F).toUpperCase();
		backgroundImageStyle = _0x6A7A;
		_0x38DC = "<img src=\'images/" + _0x473F + ".png\' style=\'float:left;\' class=\'img-100\' />"
	}
	else
	{
		backgroundImageStyle = "";
		_0x4ED6 = "???";
		_0x38DC = _0x736D
	};
	_0x41B2 += "<div class=\'mobile-style\' style=\'" + backgroundImageStyle + "\'>";
	_0x41B2 += _0x38DC;
	_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x4ED6;
	_0x41B2 += "<br />";
	_0x41B2 += "<span style=\'color:white;font-size:12pt;\'>" + rarity + "</span>";
	_0x41B2 += "<br />";
	_0x41B2 += "<span style=\'color:grey;font-size:12pt;\'>Level " + _0x3F8B + "</span>";
	_0x41B2 += "<br />";
	_0x41B2 += "<br />";
	_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Chopped " + getItem(_0x473F + "ChoppedTotal") + "</span>";
	_0x41B2 += "</span>";
	_0x41B2 += "</div>";
	_0x473F = "lavaTree";
	rarity = "Rare";
	_0x3F8B = "60";
	if (getItem(_0x473F + "ChoppedTotal") > 0)
	{
		_0x4ED6 = getItemName(_0x473F).toUpperCase();
		backgroundImageStyle = _0x6A7A;
		_0x38DC = "<img src=\'images/" + _0x473F + ".png\' style=\'float:left;\' class=\'img-100\' />"
	}
	else
	{
		backgroundImageStyle = "";
		_0x4ED6 = "???";
		_0x38DC = _0x736D
	};
	_0x41B2 += "<div class=\'mobile-style\' style=\'" + backgroundImageStyle + "\'>";
	_0x41B2 += _0x38DC;
	_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x4ED6;
	_0x41B2 += "<br />";
	_0x41B2 += "<span style=\'color:white;font-size:12pt;\'>" + rarity + "</span>";
	_0x41B2 += "<br />";
	_0x41B2 += "<span style=\'color:grey;font-size:12pt;\'>Level " + _0x3F8B + "</span>";
	_0x41B2 += "<br />";
	_0x41B2 += "<br />";
	_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Chopped " + getItem(_0x473F + "ChoppedTotal") + "</span>";
	_0x41B2 += "</span>";
	_0x41B2 += "</div>";
	if (getItem("researcherWoodcutting") >= 5)
	{
		_0x473F = "bananaTree";
		rarity = "Rare";
		_0x3F8B = "63";
		if (getItem(_0x473F + "ChoppedTotal") > 0)
		{
			_0x4ED6 = getItemName(_0x473F).toUpperCase();
			backgroundImageStyle = _0x6A7A;
			_0x38DC = "<img src=\'images/" + _0x473F + ".png\' style=\'float:left;\' class=\'img-100\' />"
		}
		else
		{
			backgroundImageStyle = "";
			_0x4ED6 = "???";
			_0x38DC = _0x736D
		};
		_0x41B2 += "<div class=\'mobile-style\' style=\'" + backgroundImageStyle + "\'>";
		_0x41B2 += _0x38DC;
		_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x4ED6;
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:white;font-size:12pt;\'>" + rarity + "</span>";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:grey;font-size:12pt;\'>Level " + _0x3F8B + "</span>";
		_0x41B2 += "<br />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Chopped " + getItem(_0x473F + "ChoppedTotal") + "</span>";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>"
	};
	_0x473F = "pineTree";
	rarity = "Rare";
	_0x3F8B = "65";
	if (getItem(_0x473F + "ChoppedTotal") > 0)
	{
		_0x4ED6 = getItemName(_0x473F).toUpperCase();
		backgroundImageStyle = _0x6A7A;
		_0x38DC = "<img src=\'images/" + _0x473F + ".png\' style=\'float:left;\' class=\'img-100\' />"
	}
	else
	{
		backgroundImageStyle = "";
		_0x4ED6 = "???";
		_0x38DC = _0x736D
	};
	_0x41B2 += "<div class=\'mobile-style\' style=\'" + backgroundImageStyle + "\'>";
	_0x41B2 += _0x38DC;
	_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x4ED6;
	_0x41B2 += "<br />";
	_0x41B2 += "<span style=\'color:white;font-size:12pt;\'>" + rarity + "</span>";
	_0x41B2 += "<br />";
	_0x41B2 += "<span style=\'color:grey;font-size:12pt;\'>Level " + _0x3F8B + "</span>";
	_0x41B2 += "<br />";
	_0x41B2 += "<br />";
	_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Chopped " + getItem(_0x473F + "ChoppedTotal") + "</span>";
	_0x41B2 += "</span>";
	_0x41B2 += "</div>";
	_0x473F = "stardustTree";
	rarity = "Rare";
	_0x3F8B = "70";
	if (getItem(_0x473F + "ChoppedTotal") > 0)
	{
		_0x4ED6 = getItemName(_0x473F).toUpperCase();
		backgroundImageStyle = _0x6A7A;
		_0x38DC = "<img src=\'images/" + _0x473F + ".png\' style=\'float:left;\' class=\'img-100\' />"
	}
	else
	{
		backgroundImageStyle = "";
		_0x4ED6 = "???";
		_0x38DC = _0x736D
	};
	_0x41B2 += "<div class=\'mobile-style\' style=\'" + backgroundImageStyle + "\'>";
	_0x41B2 += _0x38DC;
	_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x4ED6;
	_0x41B2 += "<br />";
	_0x41B2 += "<span style=\'color:white;font-size:12pt;\'>" + rarity + "</span>";
	_0x41B2 += "<br />";
	_0x41B2 += "<span style=\'color:grey;font-size:12pt;\'>Level " + _0x3F8B + "</span>";
	_0x41B2 += "<br />";
	_0x41B2 += "<br />";
	_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Chopped " + getItem(_0x473F + "ChoppedTotal") + "</span>";
	_0x41B2 += "</span>";
	_0x41B2 += "</div>";
	_0x41B2 += "</center>";
	_0x396D.innerHTML = _0x41B2
}

function refreshGemListTab()
{
	var _0x396D = document.getElementById("mining-gemList-section");
	var _0x41B2 = "<center>";
	var _0x473F = "";
	_0x473F = "sapphire";
	_0x41B2 += "<div class=\'mobile-style\'>";
	_0x41B2 += "<img src=\'images/" + _0x473F + ".png\' style=\'float:left;\' class=\'img-100\' />";
	_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x473F.toUpperCase();
	_0x41B2 += "<br />";
	_0x41B2 += "<span style=\'color:white;font-size:12pt;\'>1/100,000</span>";
	_0x41B2 += "<br />";
	_0x41B2 += "<br />";
	_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem("sapphireMined") + "</span>";
	_0x41B2 += "</span>";
	_0x41B2 += "</div>";
	_0x473F = "emerald";
	_0x41B2 += "<div class=\'mobile-style\'>";
	_0x41B2 += "<img src=\'images/" + _0x473F + ".png\' style=\'float:left;\' class=\'img-100\' />";
	_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x473F.toUpperCase();
	_0x41B2 += "<br />";
	_0x41B2 += "<span style=\'color:white;font-size:12pt;\'>1/250,000</span>";
	_0x41B2 += "<br />";
	_0x41B2 += "<br />";
	_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x473F + "Mined") + "</span>";
	_0x41B2 += "</span>";
	_0x41B2 += "</div>";
	_0x473F = "ruby";
	_0x41B2 += "<div class=\'mobile-style\'>";
	_0x41B2 += "<img src=\'images/" + _0x473F + ".png\' style=\'float:left;\' class=\'img-100\' />";
	_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x473F.toUpperCase();
	_0x41B2 += "<br />";
	_0x41B2 += "<span style=\'color:white;font-size:12pt;\'>1/500,000</span>";
	_0x41B2 += "<br />";
	_0x41B2 += "<br />";
	_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x473F + "Mined") + "</span>";
	_0x41B2 += "</span>";
	_0x41B2 += "</div>";
	_0x473F = "diamond";
	_0x41B2 += "<div class=\'mobile-style\'>";
	_0x41B2 += "<img src=\'images/" + _0x473F + ".png\' style=\'float:left;\' class=\'img-100\' />";
	_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x473F.toUpperCase();
	_0x41B2 += "<br />";
	_0x41B2 += "<span style=\'color:white;font-size:12pt;\'>1/1,000,000</span>";
	_0x41B2 += "<br />";
	_0x41B2 += "<br />";
	_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x473F + "Mined") + "</span>";
	_0x41B2 += "</span>";
	_0x41B2 += "</div>";
	_0x396D.innerHTML = _0x41B2;
	_0x473F = "bloodDiamond";
	_0x41B2 += "<div class=\'mobile-style\'>";
	_0x41B2 += "<img src=\'images/" + _0x473F + ".gif\' style=\'float:left;\' class=\'img-100\' />";
	_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "BLOOD DIAMOND";
	_0x41B2 += "<br />";
	_0x41B2 += "<span style=\'color:white;font-size:12pt;\'>1/???</span>";
	_0x41B2 += "<br />";
	_0x41B2 += "<br />";
	_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x473F + "Mined") + "</span>";
	_0x41B2 += "</span>";
	_0x41B2 += "</div>";
	var _0x3AE6 = 0;
	var _0x46E8 = "style=\'color:red\'";
	if (getItem("researcherMining") >= 2)
	{
		_0x3AE6 = 5;
		if (getLevel(getItem("miningXp")) >= _0x3AE6)
		{
			_0x46E8 = "style=\'color:lime\'"
		};
		_0x473F = "smallStardustPrism";
		_0x41B2 += "<div class=\'mobile-style\'>";
		_0x41B2 += "<img src=\'images/" + _0x473F + ".png\' style=\'float:left;\' class=\'img-100\' />";
		_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "SMALL";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:white;font-size:12pt;\'>1/4320  <br /><span style=\'color:grey\'><img src=\'images/miningSkill.png\' class=\'img-20\' /> <span " + _0x46E8 + ">" + _0x3AE6 + "</span></span>";
		_0x41B2 += "<br />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x473F + "Mined") + "</span>";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>";
		_0x3AE6 = 20;
		_0x46E8 = "style=\'color:red\'";
		if (getLevel(getItem("miningXp")) >= _0x3AE6)
		{
			_0x46E8 = "style=\'color:lime\'"
		};
		_0x473F = "mediumStardustPrism";
		_0x41B2 += "<div class=\'mobile-style\'>";
		_0x41B2 += "<img src=\'images/" + _0x473F + ".png\' style=\'float:left;\' class=\'img-100\' />";
		_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "MEDIUM";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:white;font-size:12pt;\'>1/66,000  <br /><span style=\'color:grey\'><img src=\'images/miningSkill.png\' class=\'img-20\' /> <span " + _0x46E8 + ">" + _0x3AE6 + "</span></span>";
		_0x41B2 += "<br />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x473F + "Mined") + "</span>";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>";
		_0x3AE6 = 50;
		_0x46E8 = "style=\'color:red\'";
		if (getLevel(getItem("miningXp")) >= _0x3AE6)
		{
			_0x46E8 = "style=\'color:lime\'"
		};
		_0x473F = "largeStardustPrism";
		_0x41B2 += "<div class=\'mobile-style\'>";
		_0x41B2 += "<img src=\'images/" + _0x473F + ".png\' style=\'float:left;\' class=\'img-100\' />";
		_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "LARGE";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:white;font-size:12pt;\'>1/188,000  <br /><span style=\'color:grey\'><img src=\'images/miningSkill.png\' class=\'img-20\' /> <span " + _0x46E8 + ">" + _0x3AE6 + "</span></span>";
		_0x41B2 += "<br />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x473F + "Mined") + "</span>";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>";
		_0x3AE6 = 80;
		_0x46E8 = "style=\'color:red\'";
		if (getLevel(getItem("miningXp")) >= _0x3AE6)
		{
			_0x46E8 = "style=\'color:lime\'"
		};
		_0x473F = "hugeStardustPrism";
		_0x41B2 += "<div class=\'mobile-style\'>";
		_0x41B2 += "<img src=\'images/" + _0x473F + ".png\' style=\'float:left;\' class=\'img-100\' />";
		_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "HUGE";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:white;font-size:12pt;\'>1/TBA  <br /><span style=\'color:grey\'><img src=\'images/miningSkill.png\' class=\'img-20\' /> <span " + _0x46E8 + ">" + _0x3AE6 + "</span></span>";
		_0x41B2 += "<br />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x473F + "Mined") + "</span>";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>"
	};
	var _0x5568 = "none";
	if (getItem("researcherMining") >= 4)
	{
		_0x5568 = "drills";
		_0x473F = "blueGeode";
		_0x41B2 += "<div class=\'mobile-style\'>";
		_0x41B2 += "<img src=\'images/" + _0x473F + ".png\' style=\'float:left;\' class=\'img-100\' />";
		_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "BLUE GEODE";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:white;font-size:12pt;\'>1/51,840 <br /><span style=\'color:grey\'><img src=\'images/" + _0x5568 + ".png\' class=\'img-20\' /> Per <span>" + getItemName(_0x5568) + "</span></span>";
		_0x41B2 += "<br />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x473F + "Mined") + "</span>";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>"
	};
	if (getItem("researcherMining") >= 4)
	{
		_0x5568 = "crushers";
		_0x473F = "greenGeode";
		_0x41B2 += "<div class=\'mobile-style\'>";
		_0x41B2 += "<img src=\'images/" + _0x473F + ".png\' style=\'float:left;\' class=\'img-100\' />";
		_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "GREEN GEODE";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:white;font-size:12pt;\'>1/259,200 <br /><span style=\'color:grey\'><img src=\'images/" + _0x5568 + ".png\' class=\'img-20\' /> Per <span>" + getItemName(_0x5568) + "</span></span>";
		_0x41B2 += "<br />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x473F + "Mined") + "</span>";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>"
	};
	if (getItem("researcherMining") >= 4)
	{
		_0x5568 = "giantDrills";
		_0x473F = "redGeode";
		_0x41B2 += "<div class=\'mobile-style\'>";
		_0x41B2 += "<img src=\'images/" + _0x473F + ".png\' style=\'float:left;\' class=\'img-100\' />";
		_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "RED GEODE";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:white;font-size:12pt;\'>1/777,600 <br /><span style=\'color:grey\'><img src=\'images/" + _0x5568 + ".png\' class=\'img-20\' /> Per <span>" + getItemName(_0x5568) + "</span></span>";
		_0x41B2 += "<br />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x473F + "Mined") + "</span>";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>"
	};
	if (getItem("researcherMining") >= 4)
	{
		_0x5568 = "excavators";
		_0x473F = "purpleGeode";
		_0x41B2 += "<div class=\'mobile-style\'>";
		_0x41B2 += "<img src=\'images/" + _0x473F + ".png\' style=\'float:left;\' class=\'img-100\' />";
		_0x41B2 += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "PURPLE GEODE";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'color:white;font-size:12pt;\'>1/1,555,200 <br /><span style=\'color:grey\'><img src=\'images/" + _0x5568 + ".png\' class=\'img-20\' /> Per <span>" + getItemName(_0x5568) + "</span></span>";
		_0x41B2 += "<br />";
		_0x41B2 += "<br />";
		_0x41B2 += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x473F + "Mined") + "</span>";
		_0x41B2 += "</span>";
		_0x41B2 += "</div>"
	};
	_0x41B2 += "</center>";
	_0x396D.innerHTML = _0x41B2
}

function refreshMonsterHpBar()
{
	var _0x6B9C = parseInt(getItem("monsterHp") / getItem("monsterMaxHp") * 100);
	if (_0x6B9C > 100)
	{
		_0x6B9C = 100
	};
	document.getElementById("monster-inner-hp-bar").style.minWidth = _0x6B9C + "%"
}
var selectedSeed = "none";

function clicksSeed(_0x4B53)
{
	if (getItem("farmingXp") == 0)
	{
		confirmDialogue("images/" + _0x4B53 + ".png", "Select a farming patch to plant your seed.", "Close", "", "")
	};
	if (selectedSeed == "none")
	{
		selectedSeed = _0x4B53;
		document.getElementById("item-box-" + _0x4B53).style.border = "5px solid orange"
	}
	else
	{
		if (selectedSeed == _0x4B53)
		{
			selectedSeed = "none";
			resetSeedItemBoxBorders()
		}
		else
		{
			resetSeedItemBoxBorders();
			selectedSeed = _0x4B53;
			document.getElementById("item-box-" + _0x4B53).style.border = "5px solid orange"
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

function clicksFarmingPlot(_0x47ED)
{
	if (selectedSeed == "none")
	{
		if (getItem("plotUnlocked" + _0x47ED) == 0)
		{
			confirmDialogue("images/farm_none.png", "Are you sure you want to unlock this patch?", "Unlock", "Cancel", "HARVEST=" + _0x47ED)
		}
		else
		{
			sendBytes("HARVEST=" + _0x47ED)
		}
	}
	else
	{
		sendBytes("PLANT=" + selectedSeed + "~" + _0x47ED);
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

function incrementSpice(_0x3729, _0x446A)
{
	var _0x5877 = document.getElementById("dialogue-spices-" + _0x3729);
	var _0x585A = parseInt(_0x5877.innerHTML);
	_0x585A += _0x446A;
	if (_0x585A > 4)
	{
		_0x585A = 4
	};
	if (_0x585A < 0)
	{
		_0x585A = 0
	};
	if (_0x585A > getItem(_0x3729 + "Spices"))
	{
		return
	};
	_0x5877.innerHTML = _0x585A
}

function mixSpices()
{
	var _0x60D9 = document.getElementById("dialogue-spices-" + "yellow").innerHTML;
	var _0x609F = document.getElementById("dialogue-spices-" + "green").innerHTML;
	var _0x60BC = document.getElementById("dialogue-spices-" + "red").innerHTML;
	var _0x6082 = document.getElementById("dialogue-spices-" + "blue").innerHTML;
	sendBytes("MIX_QUEST_SPICES=" + _0x60D9 + "~" + _0x609F + "~" + _0x60BC + "~" + _0x6082)
}

function openDialogueSpices()
{
	document.getElementById("dialogue-spices-" + "yellow").innerHTML = 0;
	document.getElementById("dialogue-spices-" + "green").innerHTML = 0;
	document.getElementById("dialogue-spices-" + "red").innerHTML = 0;
	document.getElementById("dialogue-spices-" + "blue").innerHTML = 0;
	openDialogue("dialogue-spices")
}

function clicksWoodcuttingPlot(_0x47ED)
{
	if (getItem("treeUnlocked" + _0x47ED) == 0)
	{
		confirmDialogue("images/woodcuttingSkill.png", "Are you sure you want to unlock this patch?", "Unlock", "Cancel", "CHOP_TREE=" + _0x47ED)
	}
	else
	{
		sendBytes("CHOP_TREE=" + _0x47ED)
	}
}

function freePlotsAmount()
{
	var _0x5171 = 0;
	for (var _0x3607 = 1; _0x3607 <= 6; _0x3607++)
	{
		if (getItem("plotUnlocked" + _0x3607) == 1 && getItemString("plot" + _0x3607) == "none")
		{
			_0x5171++
		}
	};
	return _0x5171
}

function resetSeedItemBoxBorders()
{
	for (var _0x3607 = 0; _0x3607 < global_seedMap.length; _0x3607++)
	{
		var _0x5A64 = global_seedMap[_0x3607];
		if (document.getElementById("item-box-" + _0x5A64.name) != null)
		{
			document.getElementById("item-box-" + _0x5A64.name).style.border = "1px solid grey"
		}
	}
}

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

function openSwapFishingToolsDialogue()
{
	openDialogue("dialogue-swap-fishingTool-do")
}

function eatFoodDialogue(_0x4E45)
{
	document.getElementById("dialogue-consumeFood-title").innerHTML = getItemName(_0x4E45.cookedFoodName).toUpperCase() + "<br /><span style=\'font-size:12pt;color:grey\'><img src=\'images/energy.png\' class=\'img-30\' /> " + formatNumber(_0x4E45.energy) + " energy each.</span>";
	document.getElementById("dialogue-consumeFood-hidden").value = _0x4E45.cookedFoodName;
	openDialogue("dialogue-consumeFood");
	document.getElementById("dialogue-consumeFood-input").focus();
	document.getElementById("dialogue-consumeFood-input").value = 1
}

function openInputDialogue(_0x3A8F, _0x676B, _0x674E, _0x66F7, _0x62C6, _0x62E3, _0x456F, _0x458C, _0x6731, _0x66DA, _0x384B, _0x4535)
{
	var _0x6714 = "";
	if (_0x384B != "")
	{
		_0x6714 = "<span style=\'color:grey;cursor:pointer;\' onclick=\'this.innerHTML = \"<br /><br />" + _0x384B + "<br /><br />\"\'>(more info)</span>"
	};
	var _0x41B2 = "";
	_0x41B2 += "<div class=\'dialogue\' id=\'wild-dialogue\' style=\'display:none;\'>";
	_0x41B2 += "<center>";
	_0x41B2 += "<h1>" + _0x3A8F + "</h1>";
	_0x41B2 += "<div>" + "<img src=\'" + _0x676B + "\' class=\'img-150\' />" + "</div>";
	_0x41B2 += "<br /><br />";
	_0x41B2 += "<div style=\'display:block\' class=\'input-multi-values-div\'>";
	_0x41B2 += "<table width=\'100%\'>";
	_0x41B2 += "<tr>";
	if (_0x674E == "ironBucket")
	{
		_0x41B2 += "<td colspan=\'4\'>How many " + getItemName("silverBuckets").toLowerCase() + "? " + _0x6714 + "<input type=\'text\' value=\'" + _0x66F7 + "\' id=\'dialogue-wild-input\' /></td>"
	}
	else
	{
		_0x41B2 += "<td colspan=\'4\'>How many " + getItemName(_0x674E).toLowerCase() + "? " + _0x6714 + "<input type=\'text\' value=\'" + _0x66F7 + "\' id=\'dialogue-wild-input\' /></td>"
	};
	_0x41B2 += "</tr>";
	_0x41B2 += "<tr>";
	_0x41B2 += "<td width=\'25%\'><div id=\'dialogue-wild-input-button-1\' class=\'input-button-values\'>ONE</div></td><td width=\'25%\'><div id=\'dialogue-wild-input-button-2\' class=\'input-button-values\'>25%</div></td><td width=\'25%\'><div id=\'dialogue-wild-input-button-3\' class=\'input-button-values\'>50%</div></td><td width=\'25%\'><div id=\'dialogue-wild-input-button-4\' class=\'input-button-values\'>ALL</div></td>";
	_0x41B2 += "</tr>";
	_0x41B2 += "</table>";
	_0x41B2 += "</div>";
	_0x41B2 += "<br />";
	_0x41B2 += "<div id=\'dialogue-wild-htmlboxes-area\'></div>";
	_0x41B2 += "<br />";
	_0x41B2 += "<div style=\'background-color:#b3ffff\' id=\'dialogue-wild-input-confirm\' class=\'dialogue-button\'>" + _0x6731 + "</div><br />";
	_0x41B2 += "<div onclick=\'closeDialogue(\"wild-dialogue\")\' class=\'dialogue-button\'>Close</div><br />";
	_0x41B2 += "</center>";
	_0x41B2 += "</div>";
	document.getElementById("dynamic-dialogue-area").innerHTML = _0x41B2;
	if (_0x62C6.length > 0)
	{
		var _0x6357 = (_0x62C6[0] == "xp_icon")
	};
	document.getElementById("dialogue-wild-input-confirm").onclick = function ()
	{
		sendBytes(_0x66DA + "=" + _0x674E + "~" + convertNumberWithLetrtsKMBToNumber(document.getElementById("dialogue-wild-input").value));
		closeDialogue("wild-dialogue")
	};
	document.getElementById("dialogue-wild-input-button-1").onclick = function ()
	{
		changeValueOfInput(_0x456F, _0x458C, "dialogue-wild-input", "ONE", _0x4535);
		onKeyUpWildInputDialogue(_0x62C6, _0x62E3, _0x456F, _0x458C, convertNumberWithLetrtsKMBToNumber(document.getElementById("dialogue-wild-input").value))
	};
	document.getElementById("dialogue-wild-input-button-2").onclick = function ()
	{
		changeValueOfInput(_0x456F, _0x458C, "dialogue-wild-input", "25%", _0x4535);
		onKeyUpWildInputDialogue(_0x62C6, _0x62E3, _0x456F, _0x458C, convertNumberWithLetrtsKMBToNumber(document.getElementById("dialogue-wild-input").value))
	};
	document.getElementById("dialogue-wild-input-button-3").onclick = function ()
	{
		changeValueOfInput(_0x456F, _0x458C, "dialogue-wild-input", "50%", _0x4535);
		onKeyUpWildInputDialogue(_0x62C6, _0x62E3, _0x456F, _0x458C, convertNumberWithLetrtsKMBToNumber(document.getElementById("dialogue-wild-input").value))
	};
	document.getElementById("dialogue-wild-input-button-4").onclick = function ()
	{
		changeValueOfInput(_0x456F, _0x458C, "dialogue-wild-input", "ALL", _0x4535);
		onKeyUpWildInputDialogue(_0x62C6, _0x62E3, _0x456F, _0x458C, convertNumberWithLetrtsKMBToNumber(document.getElementById("dialogue-wild-input").value))
	};
	document.getElementById("dialogue-wild-input").onkeyup = function ()
	{
		onKeyUpWildInputDialogue(_0x62C6, _0x62E3, _0x456F, _0x458C, convertNumberWithLetrtsKMBToNumber(document.getElementById("dialogue-wild-input").value))
	};
	openDialogue("wild-dialogue");
	onKeyUpWildInputDialogue(_0x62C6, _0x62E3, _0x456F, _0x458C, 1)
}

function onKeyUpWildInputDialogue(_0x62C6, _0x62E3, _0x456F, _0x458C, _0x6300)
{
	var _0x6357 = (_0x62C6[0] == "xp_icon");
	document.getElementById("dialogue-wild-htmlboxes-area");
	var _0x41B2 = "";
	for (var _0x3607 = 0; _0x3607 < _0x62E3.length; _0x3607++)
	{
		var _0x4D40 = "html-box-check-or-check";
		var _0x631D = _0x62E3[_0x3607] * _0x6300;
		var _0x633A = formatNumber(_0x631D);
		if (_0x631D == 0)
		{
			_0x633A = "???"
		};
		if (_0x62C6[_0x3607] == "magicXp")
		{
			_0x41B2 += "<div style=\'border:1px solid purple;display:inline-block;background-color:#ff99cc;font-size:16pt\' class=" + _0x4D40 + ">";
			_0x41B2 += "<img src=\'images/" + "magicSkill" + ".png\' class=\'img-50\' /> +" + formatNumber(_0x633A) + " XP";
			_0x41B2 += "</div>"
		}
		else
		{
			_0x41B2 += "<div class=" + _0x4D40 + ">";
			_0x41B2 += "<img src=\'images/" + _0x62C6[_0x3607] + ".png\' class=\'img-50\' /> +" + formatNumber(_0x633A);
			_0x41B2 += "</div>"
		}
	};
	for (var _0x3607 = 0; _0x3607 < _0x456F.length; _0x3607++)
	{
		var _0x4D40 = "html-box-check-or-x";
		var _0x4D7A = "<img src=\'images/x.png\' class=\'img-20\' />";
		var _0x4D97 = _0x458C[_0x3607] * _0x6300;
		if (_0x6357 && _0x456F[_0x3607] == "stardust")
		{
			_0x4D97 = _0x458C[_0x3607] * _0x62E3[0] * _0x6300
		};
		if (getItem(_0x456F[_0x3607]) >= _0x4D97)
		{
			_0x4D7A = "<img src=\'images/check.png\' class=\'img-20\' />";
			_0x4D40 = "html-box-check-or-check"
		};
		_0x41B2 += "<div class=" + _0x4D40 + ">";
		_0x41B2 += "<img src=\'images/" + _0x456F[_0x3607] + ".png\' class=\'img-50\' /> " + formatNumber(_0x4D97) + " " + _0x4D7A;
		_0x41B2 += "</div>"
	};
	document.getElementById("dialogue-wild-htmlboxes-area").innerHTML = _0x41B2
}

function ownsStew()
{
	return getItem("lavaStew") > 0 || getItem("chainStew") > 0 || getItem("oysterStew") > 0 || getItem("iceBonesStew") > 0 || getItem("fishStew") > 0 || getItem("bananaStew") > 0 || getItem("appleStew") > 0 || getItem("cheeseStew") > 0 || getItem("honeyStew") > 0
}

function bonemealBinDialgue()
{
	var _0x3746 = getBonemealTypeData();
	var _0x41CF = _0x3746[2];
	var _0x4195 = _0x3746[3];
	if (_0x4195 == "INF")
	{
		_0x4195 = "&#8734;"
	};
	var _0x41EC = "<br /><br /><span style=\'color:grey;font-size:12pt;\'> <img src=\'images/" + _0x41CF + ".png\' class=\'img-20\' /> Upgrade your bonemeal bin to increase its capacity.</span>";
	if (_0x41CF == "none")
	{
		_0x41EC = ""
	};
	var _0x41B2 = "<b style=\'font-size:16pt;\'><img src=\'images/bonemeal_dark.png\' class=\'img-60\' /> Current Bonemeal: " + getItem("bonemeal") + "/" + _0x4195 + " <img src=\'images/bonemeal_dark.png\' class=\'img-60\' /></b>" + _0x41EC;
	if (_0x41CF == "none")
	{
		confirmDialogue("images/" + _0x3746[0] + ".png", _0x41B2, "Close", "", "")
	}
	else
	{
		confirmDialogue("images/" + _0x3746[0] + ".png", _0x41B2, "Socket Gem", "Close", "SOCKET=bonemealBin")
	}
}

function changeValueOfInput(_0x456F, _0x458C, _0x4518, _0x44FB, _0x4535)
{
	var _0x44C1 = 0;
	var _0x4552 = [];
	for (var _0x3607 = 0; _0x3607 < _0x456F.length; _0x3607++)
	{
		_0x4552[_0x3607] = parseInt(getItem(_0x456F[_0x3607]) / _0x458C[_0x3607])
	};
	_0x44C1 = Math.min.apply(Math, _0x4552);
	switch (_0x44FB)
	{
	case "ONE":
		document.getElementById(_0x4518).value = 1;
		break;
	case "25%":
		document.getElementById(_0x4518).value = parseInt(_0x44C1 * 0.25);
		break;
	case "50%":
		document.getElementById(_0x4518).value = parseInt(_0x44C1 * 0.50);
		break;
	case "ALL":
		document.getElementById(_0x4518).value = _0x44C1;
		break
	};
	if (_0x44C1 > _0x4535)
	{
		document.getElementById(_0x4518).value = _0x4535;
		switch (_0x44FB)
		{
		case "25%":
			document.getElementById(_0x4518).value = parseInt(_0x4535 * 0.25);
			break;
		case "50%":
			document.getElementById(_0x4518).value = parseInt(_0x4535 * 0.50);
			break
		}
	}
}

function scrollText(_0x379D, _0x74E6, _0x7520)
{
	var _0x38DC = "";
	if (_0x379D != "none")
	{
		_0x38DC = "<img src=\'" + _0x379D + "\' class=\'img-70\' /> "
	};
	var _0x7503 = $("<div class=\"scroller\" style=\"color:" + _0x74E6 + "\">" + _0x38DC + _0x7520 + "</div>").appendTo("body");
	$(_0x7503).css(
	{
		position: "absolute"
		, left: mouseX - 50
		, top: mouseY - 50
	});
	$(_0x7503).animate(
	{
		top: "-=50px"
	}, function ()
	{
		$(_0x7503).fadeOut(1000, function ()
		{
			$(this).remove()
		})
	})
}
var changeTooltipPosition = function (_0x365E)
{
	var _0x367B = _0x365E.pageX - 8;
	var _0x3698 = _0x365E.pageY + 8;
	$("div.tooltip").css(
	{
		top: _0x3698
		, left: _0x367B
	})
};
var showTooltip = function (_0x365E)
{
	if (document.getElementById(this.getAttribute("data-tooltip-id")) == null)
	{
		return
	};
	$("div.tooltip").remove();
	$("<div class=\"tooltip\">" + document.getElementById(this.getAttribute("data-tooltip-id")).innerHTML + "</div>").appendTo("body");
	changeTooltipPosition(_0x365E)
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
	var _0x72F9 = "[data-tooltip-id]";
	var _0x72DC = $(_0x72F9);
	for (var _0x3607 = 0; _0x3607 < _0x72DC.length; _0x3607++)
	{
		$(_0x72DC[_0x3607]).bind(
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
	var _0x3AAC = "";
	document.getElementById("dynamic-tooltips-area").innerHTML = "";
	for (var _0x3607 = 0; _0x3607 < global_foodMap.length; _0x3607++)
	{
		var _0x4E45 = global_foodMap[_0x3607];
		if (_0x4E45.rawFoodName != "none")
		{
			_0x3AAC += "<div id=\'tooltip-" + _0x4E45.rawFoodName + "\' style=\'display:none;\'>";
			_0x3AAC += "<h2>" + getItemName(_0x4E45.rawFoodName) + "</h2>";
			_0x3AAC += "<img src=\'images/heat.png\' class=\'img-30\' /> " + formatNumber(_0x4E45.heat) + " heat";
			_0x3AAC += "<br />";
			_0x3AAC += "<img src=\'images/energy.png\' class=\'img-30\' /> " + formatNumber(_0x4E45.energy) + " energy";
			_0x3AAC += "<br />";
			_0x3AAC += "<img src=\'images/cookingSkill.png\' class=\'img-30\' /> Level " + _0x4E45.cookLevel + " <span style=\'color:grey\'>(" + formatNumber(_0x4E45.xp) + " XP)</span>";
			_0x3AAC += "<br />";
			_0x3AAC += "<hr class=\'hr-thin\' />";
			_0x3AAC += _0x4E45.desc;
			_0x3AAC += "</div>"
		};
		_0x3AAC += "<div id=\'tooltip-" + _0x4E45.cookedFoodName + "\' style=\'display:none;\'>";
		_0x3AAC += "<h2>" + getItemName(_0x4E45.cookedFoodName) + "</h2>";
		_0x3AAC += "<img src=\'images/energy.png\' class=\'img-30\' /> " + formatNumber(_0x4E45.energy) + " energy";
		_0x3AAC += "<br />";
		_0x3AAC += "<hr class=\'hr-thin\' />";
		_0x3AAC += _0x4E45.desc;
		_0x3AAC += "</div>"
	};
	for (var _0x3607 = 0; _0x3607 < global_seedMap.length; _0x3607++)
	{
		var _0x5A64 = global_seedMap[_0x3607];
		_0x3AAC += "<div id=\'tooltip-" + _0x5A64.name + "\' style=\'display:none;\'>";
		_0x3AAC += "<h2>" + getItemName(_0x5A64.name) + "</h2>";
		_0x3AAC += "<img style=\'margin:3px;\' src=\'images/farmingSkill.png\' class=\'img-30\' /> Level " + formatNumber(_0x5A64.level) + " <span style=\'color:grey\'>(" + formatNumber(_0x5A64.xp) + " xp)</span>";
		_0x3AAC += "<br />";
		var _0x58CE = "";
		if (_0x5A64.stopsDieingAtLevel == 0)
		{
			_0x3AAC += "<img style=\'margin:3px;\' src=\'images/" + _0x5A64.name.substr(0, _0x5A64.name.length - 5) + ".png\' class=\'img-30\' /> Cannot die <img src=\'images/check.png\' class=\'img-15\' />"
		}
		else
		{
			if (getLevel(getItem("farmingXp")) >= _0x5A64.stopsDieingAtLevel)
			{
				_0x3AAC += "<img style=\'margin:3px;\' src=\'images/" + _0x5A64.name.substr(0, _0x5A64.name.length - 5) + ".png\' class=\'img-30\' /> Stops dying level: " + formatNumber(_0x5A64.stopsDieingAtLevel) + " <img src=\'images/check.png\' class=\'img-15\' />"
			}
			else
			{
				_0x3AAC += "<img style=\'margin:3px;\' src=\'images/deadLeaf.png\' class=\'img-30\' /> Stops dying level: " + formatNumber(_0x5A64.stopsDieingAtLevel) + " <img src=\'images/x.png\' class=\'img-15\' />"
			}
		};
		if (parseInt(_0x5A64.bonemeal) > 0)
		{
			if (getItem("bonemeal") >= parseInt(_0x5A64.bonemeal))
			{
				_0x3AAC += "<br />";
				_0x3AAC += "<img style=\'margin:3px;\' src=\'images/bonemeal.png\' class=\'img-30\' /> Bonemeal: " + formatNumber(parseInt(_0x5A64.bonemeal)) + " <img src=\'images/check.png\' class=\'img-15\' />"
			}
			else
			{
				_0x3AAC += "<br />";
				_0x3AAC += "<img style=\'margin:3px;\' src=\'images/bonemeal.png\' class=\'img-30\' /> Bonemeal: " + formatNumber(parseInt(_0x5A64.bonemeal)) + " <img src=\'images/x.png\' class=\'img-15\' />"
			}
		};
		_0x3AAC += "<br />";
		_0x3AAC += "<img style=\'margin:3px;\' src=\'images/hourglass_grey.png\' class=\'img-30\' />" + formatTime(_0x5A64.timer);
		_0x3AAC += "<br />";
		_0x3AAC += "<hr class=\'hr-thin\' />";
		_0x3AAC += _0x5A64.desc;
		_0x3AAC += "</div>"
	};
	for (var _0x3607 = 0; _0x3607 < global_machineryMap.length; _0x3607++)
	{
		var _0x59F0 = global_machineryMap[_0x3607];
		_0x3AAC += "<div id=\'tooltip-" + _0x59F0.machineryName + "\' style=\'display:none;\'>";
		_0x3AAC += "<div style=\'font-size:16pt;font-weight:bold;margin-top:10px;\'>" + getItemName(_0x59F0.machineryName) + "</div>";
		if (_0x59F0.oil > 0)
		{
			_0x3AAC += "<br /><img src=\'images/oil.png\' class=\'img-20\' /> " + _0x59F0.oil
		};
		_0x3AAC += "<br />";
		_0x3AAC += "<hr class=\'hr-thin\' />";
		var _0x473F = "";
		var _0x58EB = "";
		var _0x5908 = "";
		_0x473F = "stone";
		_0x58EB = _0x59F0.stoneChance;
		_0x5908 = 86400 / _0x58EB;
		if (_0x5908 % 1 != 0)
		{
			_0x5908 = _0x5908.toFixed(2)
		};
		if (_0x5908 >= 10)
		{
			_0x5908 = formatNumber(parseInt(_0x5908))
		};
		if (getItem(_0x473F + "Total") > 0)
		{
			_0x3AAC += "<img src=\'images/" + _0x473F + ".png\' class=\'img-20\' /> <b>" + capitalizeFirstLetter(_0x473F) + ": </b> " + (1 + "/" + formatNumber(_0x58EB) + "<span style=\'color:grey\'> (~" + _0x5908 + " per day)</span>")
		}
		else
		{
			_0x3AAC += "<img src=\'images/ore_black.png\' class=\'img-20\' /> <b>???</b><br />"
		};
		_0x3AAC += "<br />";
		_0x473F = "copper";
		_0x58EB = _0x59F0.copperChance;
		_0x5908 = 86400 / _0x58EB;
		if (_0x5908 % 1 != 0)
		{
			_0x5908 = _0x5908.toFixed(2)
		};
		if (_0x5908 >= 10)
		{
			_0x5908 = formatNumber(parseInt(_0x5908))
		};
		if (getItem(_0x473F + "Total") > 0)
		{
			_0x3AAC += "<img src=\'images/" + _0x473F + ".png\' class=\'img-20\' /> <b>" + capitalizeFirstLetter(_0x473F) + ": </b> " + (1 + "/" + formatNumber(_0x58EB) + "<span style=\'color:grey\'> (~" + _0x5908 + " per day)</span>")
		}
		else
		{
			_0x3AAC += "<img src=\'images/ore_black.png\' class=\'img-20\' /> <b>???</b>"
		};
		_0x3AAC += "<br />";
		_0x473F = "iron";
		_0x58EB = _0x59F0.ironChance;
		_0x5908 = 86400 / _0x58EB;
		if (_0x5908 % 1 != 0)
		{
			_0x5908 = _0x5908.toFixed(2)
		};
		if (_0x5908 >= 10)
		{
			_0x5908 = formatNumber(parseInt(_0x5908))
		};
		if (getItem(_0x473F + "Total") > 0)
		{
			_0x3AAC += "<img src=\'images/" + _0x473F + ".png\' class=\'img-20\' /> <b>" + capitalizeFirstLetter(_0x473F) + ": </b> " + (1 + "/" + formatNumber(_0x58EB) + "<span style=\'color:grey\'> (~" + _0x5908 + " per day)</span>")
		}
		else
		{
			_0x3AAC += "<img src=\'images/ore_black.png\' class=\'img-20\' /> <b>???</b>"
		};
		_0x3AAC += "<br />";
		_0x473F = "silver";
		_0x58EB = _0x59F0.silverChance;
		_0x5908 = 86400 / _0x58EB;
		if (_0x5908 % 1 != 0)
		{
			_0x5908 = _0x5908.toFixed(2)
		};
		if (_0x5908 >= 10)
		{
			_0x5908 = formatNumber(parseInt(_0x5908))
		};
		if (getItem(_0x473F + "Total") > 0)
		{
			_0x3AAC += "<img src=\'images/" + _0x473F + ".png\' class=\'img-20\' /> <b>" + capitalizeFirstLetter(_0x473F) + ": </b> " + (1 + "/" + formatNumber(_0x58EB) + "<span style=\'color:grey\'> (~" + _0x5908 + " per day)</span>")
		}
		else
		{
			_0x3AAC += "<img src=\'images/ore_black.png\' class=\'img-20\' /> <b>???</b>"
		};
		_0x3AAC += "<br />";
		_0x473F = "gold";
		_0x58EB = _0x59F0.goldChance;
		_0x5908 = 86400 / _0x58EB;
		if (_0x5908 % 1 != 0)
		{
			_0x5908 = _0x5908.toFixed(2)
		};
		if (_0x5908 >= 10)
		{
			_0x5908 = formatNumber(parseInt(_0x5908))
		};
		if (getItem(_0x473F + "Total") > 0)
		{
			_0x3AAC += "<img src=\'images/" + _0x473F + ".png\' class=\'img-20\' /> <b>" + capitalizeFirstLetter(_0x473F) + ": </b> " + (1 + "/" + formatNumber(_0x58EB) + "<span style=\'color:grey\'> (~" + _0x5908 + " per day)</span>")
		}
		else
		{
			_0x3AAC += "<img src=\'images/ore_black.png\' class=\'img-20\' /> <b>???</b>"
		};
		_0x3AAC += "<br />";
		_0x473F = "promethium";
		_0x58EB = _0x59F0.promethiumChance;
		_0x5908 = 86400 / _0x58EB;
		if (_0x5908 % 1 != 0)
		{
			_0x5908 = _0x5908.toFixed(2)
		};
		if (_0x5908 >= 10)
		{
			_0x5908 = formatNumber(parseInt(_0x5908))
		};
		if (getItem(_0x473F + "Total") > 0)
		{
			_0x3AAC += "<img src=\'images/" + _0x473F + ".png\' class=\'img-20\' /> <b>" + capitalizeFirstLetter(_0x473F) + ": </b> " + (1 + "/" + formatNumber(_0x58EB) + "<span style=\'color:grey\'> (~" + _0x5908 + " per day)</span>")
		}
		else
		{
			_0x3AAC += "<img src=\'images/ore_black.png\' class=\'img-20\' /> <b>???</b>"
		};
		_0x3AAC += "<br />";
		_0x473F = "titanium";
		_0x58EB = _0x59F0.titaniumChance;
		_0x5908 = 86400 / _0x58EB;
		if (_0x5908 % 1 != 0)
		{
			_0x5908 = _0x5908.toFixed(2)
		};
		if (_0x5908 >= 10)
		{
			_0x5908 = formatNumber(parseInt(_0x5908))
		};
		if (getItem(_0x473F + "Total") > 0)
		{
			_0x3AAC += "<img src=\'images/" + _0x473F + ".png\' class=\'img-20\' /> <b>" + capitalizeFirstLetter(_0x473F) + ": </b> " + (1 + "/" + formatNumber(_0x58EB) + "<span style=\'color:grey\'> (~" + _0x5908 + " per day)</span>")
		}
		else
		{
			_0x3AAC += "<img src=\'images/ore_black.png\' class=\'img-20\' /> <b>???</b>"
		};
		_0x3AAC += "<br />";
		_0x3AAC += "</div>"
	};
	for (var _0x3607 = 0; _0x3607 < global_equipmentMap.length; _0x3607++)
	{
		var _0x597C = global_equipmentMap[_0x3607];
		_0x3AAC += "<div id=\'tooltip-" + _0x597C.name + "\' style=\'display:none;\'>";
		_0x3AAC += "<h2>" + getItemName(_0x597C.name) + "</h2>";
		_0x3AAC += "<span style=\'font-size:14pt\'>";
		if (_0x597C.type != "none")
		{
			_0x3AAC += "<img src=\'images/" + _0x597C.type + ".png\' class=\'img-20\' /> " + getItemName(_0x597C.type) + " Attack";
			_0x3AAC += "<br />";
			_0x3AAC += "<br />"
		};
		if (_0x597C.attack != "0")
		{
			_0x3AAC += "<img src=\'images/attack_black.png\' class=\'img-30\' /> " + (_0x597C.attack);
			_0x3AAC += "&nbsp;";
			_0x3AAC += "&nbsp;";
			_0x3AAC += "&nbsp;";
			_0x3AAC += "&nbsp;"
		};
		if (_0x597C.accuracy != "0")
		{
			_0x3AAC += "<img src=\'images/accuracy_black.png\' class=\'img-30\' /> " + (_0x597C.accuracy);
			_0x3AAC += "&nbsp;";
			_0x3AAC += "&nbsp;";
			_0x3AAC += "&nbsp;";
			_0x3AAC += "&nbsp;"
		};
		if (_0x597C.speed != "0")
		{
			_0x3AAC += "<img src=\'images/speed_black.png\' class=\'img-30\' /> " + (_0x597C.speed);
			_0x3AAC += "&nbsp;";
			_0x3AAC += "&nbsp;";
			_0x3AAC += "&nbsp;";
			_0x3AAC += "&nbsp;"
		};
		if (_0x597C.defence != "0")
		{
			_0x3AAC += "<img src=\'images/defence_black.png\' class=\'img-30\' /> " + (_0x597C.defence);
			_0x3AAC += "&nbsp;";
			_0x3AAC += "&nbsp;";
			_0x3AAC += "&nbsp;";
			_0x3AAC += "&nbsp;"
		};
		if (_0x597C.magic != "0")
		{
			_0x3AAC += "<img src=\'images/magic_black.png\' class=\'img-30\' /> " + (_0x597C.magic);
			_0x3AAC += "&nbsp;";
			_0x3AAC += "&nbsp;";
			_0x3AAC += "&nbsp;";
			_0x3AAC += "&nbsp;"
		};
		_0x3AAC += "</span>";
		_0x3AAC += "<br />";
		_0x3AAC += "<hr class=\'hr-thin\' />";
		_0x3AAC += _0x597C.desc;
		_0x3AAC += "</div>"
	};
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-feather", "feather", "Feathers", "Can be used to make arrows with the crafting skill.<br /><br /><img src=\'images/craftingSkill.png\' class=\'img-30\' /> <b>Click to craft arrows.</b>");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-stardustPickaxe", "stardustPickaxe", "Stardust Pickaxe", "Can be used to convert ores into <img src=\'images/miningSkill.png\' class=\'img-20\' /> <span style=\'color:#804000\'>mining</span> XP at the cost of <img src=\'images/stardustIcon.png\' class=\'img-20\' /> <span style=\'color:#804000\'>stardust</span>.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-stardustHammer", "stardustHammer", "Stardust Hammer", "Can be used to convert bars into <img src=\'images/craftingSkill.png\' class=\'img-20\' /> <span style=\'color:#804000\'>crafting</span> XP at the cost of <img src=\'images/stardustIcon.png\' class=\'img-20\' /> <span style=\'color:#804000\'>stardust</span>.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-stone", "stone", "Stone", "A common ore.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-copper", "copper", "Copper", "Can be smelted into <img src=\'images/bronzeBars.png\' class=\'img-20\' /> bronze bars.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-iron", "iron", "Iron", "Can be smelted into <img src=\'images/ironBars.png\' class=\'img-20\' />  iron bars.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-silver", "silver", "Silver", "Can be smelted into <img src=\'images/silverBars.png\' class=\'img-20\' />  silver bars.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-gold", "gold", "Gold", "Can be smelted into <img src=\'images/goldBars.png\' class=\'img-20\' />  gold bars.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-promethium", "promethium", "Promethium", "Can be smelted into <img src=\'images/promethiumBars.png\' class=\'img-20\' />  promethium bars.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-titanium", "titanium", "Titanium", "Can be smelted into <img src=\'images/titaniumBars.png\' class=\'img-20\' />  titanium bars.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-moonstone", "moonstone", "Moonstone", "A common rock found on the moon.  It can be converted into mining XP.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-limeQuartzMineral", "limeQuartzMineral", "Mineral", "Can either be sold for coins or crafted into a ring.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-jadeMineral", "jadeMineral", "Mineral", "Can either be sold for coins or crafted into a ring.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-amethystMineral", "amethystMineral", "Mineral", "Can either be sold for coins or crafted into a ring.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-blueMarbleMineral", "blueMarbleMineral", "Mineral", "Can either be sold for coins or crafted into a ring.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-limoniteMineral", "limoniteMineral", "Mineral", "Can either be sold for coins or crafted into a ring.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-tashmarineMineral", "tashmarineMineral", "Mineral", "Can either be sold for coins or crafted into a ring.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-denseMarbleMineral", "denseMarbleMineral", "Mineral", "Can either be sold for coins or crafted into a ring.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-fluoriteMineral", "fluoriteMineral", "Mineral", "Can either be sold for coins or crafted into a ring.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-purpleQuartzMineral", "purpleQuartzMineral", "Mineral", "Can either be sold for coins or crafted into a ring.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-crystalPrismeMineral", "crystalPrismeMineral", "Mineral", "Can either be sold for coins or crafted into a ring.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-amberMineral", "amberMineral", "Mineral", "Can either be sold for coins or crafted into a ring.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-tanzaniteMineral", "tanzaniteMineral", "Mineral", "Can either be sold for coins or crafted into a ring.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-pearl", "pearl", "Pearl", "Found inside of an oyster.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-giantPearl", "", "Giant Pearl", "<img src=\'images/museum.png\' class=\'img-20\' /> It\'s huge!");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-oyster", "oyster", "Oyster", "Maybe it has a pearl inside.  I can always sell the oyster as a whole if I don\'t want to gamble.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-rarePearl", "rarePearl", "Rare Pearl", "Found inside of a oyster found along the beaches.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-rareGiantPearl", "", "Rare Giant Pearl", "<img src=\'images/museum.png\' class=\'img-20\' /> It\'s huge, and it looks special!");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-specialOyster", "oyster", "Rare Oyster", "Maybe it has a pearl inside.  I can always sell the oyster as a whole if I don\'t want to gamble.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-sharkTooth", "sharkTooth", "Shark\'s Tooth", "<img src=\'images/museum.png\' class=\'img-20\' /> A bite from a shark does over 100 damage!  Ouch!");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-bronzeBars", "bronzeBars", "Bronze Bar", "A bar made of copper.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-ironBars", "ironBars", "Iron Bar", "A bar made of iron.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-silverBars", "silverBars", "Silver Bar", "A bar made of silver.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-goldBars", "goldBars", "Gold Bar", "A bar made of gold.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-promethiumBars", "promethiumBars", "Promethium Bar", "A bar made of promethium.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-titaniumBars", "titaniumBars", "Titanium Bar", "A bar made of titanium.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-snakeskin", "snakeskin", "Snakeskin", "<img src=\'images/craftingSkill.png\' class=\'img-20\' /> Click to craft.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-bearFur", "bearFur", "Bear Fur", "<img src=\'images/craftingSkill.png\' class=\'img-20\' /> Click to craft.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-polarBearFur", "polarBearFur", "Polar Bear Fur", "<img src=\'images/craftingSkill.png\' class=\'img-20\' /> Click to craft.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-blackSilk", "blackSilk", "Black Silk", "Obtained from a reaper.<br /><br /><img src=\'images/craftingSkill.png\' class=\'img-20\' /> Click to craft.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-pirate", "", "Pirate", "1/600,000 chance of finding a treasure map.<br /><br /><span style=\'color:grey\'>I can only hold one map at a time.</span>");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-bluePrints", "bluePrints", "Blueprints", "Click to follow and craft.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-strangeLeaf", "strangeLeaf", "Strange Leaf", "A rare secondary brewing ingredient.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-ironBucket", "ironBucket", "Silver Bucket", "Killing a lava type monster will let you collect a bucket of lava.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-lumberJack", "lumberJack", "Lumberjack", "Chop all your trees in one click.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-cooldownRing1", "cooldownRing1", "Cooldown Ring (1)", "Reduces combat cooldown by 1%.<br /><br /><span style=\'color:grey;font-size:8pt;\'>Rings are automatically active.  Effects of each unqiue ring is stackable.</span>");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-energyRing1", "energyRing1", "Energy Ring (1)", "Reduces energy use by 1%.<br /><br /><span style=\'color:grey;font-size:8pt;\'>Rings are automatically active.  Effects of each unqiue ring is stackable.</span>");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-manaRing1", "manaRing1", "Mana Ring (1)", "Increases maximum mana by 1.<br /><br /><span style=\'color:grey;font-size:8pt;\'>Rings are automatically active.  Effects of each unqiue ring is stackable.</span>");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-cooldownRing2", "cooldownRing2", "Cooldown Ring (2)", "Reduces combat cooldown by 4%.<br /><br /><span style=\'color:grey;font-size:8pt;\'>Rings are automatically active.  Effects of each unqiue ring is stackable.</span>");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-energyRing2", "energyRing2", "Energy Ring (2)", "Reduces energy use by 4%.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-manaRing2", "manaRing2", "Mana Ring (2)", "Increases maximum mana by 2.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-cooldownRing3", "cooldownRing3", "Cooldown Ring (3)", "Reduces combat cooldown by 10%.<br /><br /><span style=\'color:grey;font-size:8pt;\'>Rings are automatically active.  Effects of each unqiue ring is stackable.</span>");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-energyRing3", "energyRing3", "Energy Ring (3)", "Reduces energy use by 10%.<br /><br /><span style=\'color:grey;font-size:8pt;\'>Rings are automatically active.  Effects of each unqiue ring is stackable.</span>");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-manaRing3", "manaRing3", "Mana Ring (3)", "Increases maximum mana by 3.<br /><br /><span style=\'color:grey;font-size:8pt;\'>Rings are automatically active.  Effects of each unqiue ring is stackable.</span>");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-donorWoodcuttingPatch", "", "Donor Perk", "Unlocks an extra woodcutting patch.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-donorFarmingPlot", "", "Donor Perk", "Unlocks an extra farming patch.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-donorMoreOfflineTime", "", "Donor Perk", "Grants you 12h of offline time instead of 8h.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-donorBonusXp", "", "Donor Perk", "Every source of XP is increased by 10%.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-stardustBox1", "", "Stardust Box", "<img src=\'images/stardustIcon.png\' class=\'img-20\' /> 0 - 2000 Stardust.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-stardustBox2", "", "Stardust Box", "<img src=\'images/stardustIcon.png\' class=\'img-20\' /> 0 - 15000 Stardust.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-sapphireGlassHand", "", "Glass Hand", "<img src=\'images/museum.png\' class=\'img-20\' /> Shiny from every angle!");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-emeraldGlassHand", "", "Glass Hand", "<img src=\'images/museum.png\' class=\'img-20\' /> Very shiny from every angle!");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-rubyGlassHand", "", "Glass Hand", "<img src=\'images/museum.png\' class=\'img-20\' /> Extremely shiny from every angle!");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-snowmanCrafted", "", "Snowman", "<img src=\'images/museum.png\' class=\'img-20\' /> I think it spoke to me once!");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-brokenStinger", "", "Broken Stinger", "<img src=\'images/museum.png\' class=\'img-20\' /> Normally, I would be able to use this as a weapon.  Too bad it\'s broken.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-snakeBones", "", "Snake Bones", "<img src=\'images/museum.png\' class=\'img-20\' /> The remains of a giant snake who roamed the forest.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-skeletonSkull", "", "Skull", "<img src=\'images/museum.png\' class=\'img-20\' /> Obtained from a skeleton in the caves.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-ghostClothes", "", "Ghost Clothes", "<img src=\'images/museum.png\' class=\'img-20\' /> This belonged to the roaming ghost around the farm lands.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-cockroach", "", "Giant Cockroach", "<img src=\'images/museum.png\' class=\'img-20\' /> Crunch.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-goldenCockroach", "", "Golden Cockroach", "<img src=\'images/museum.png\' class=\'img-20\' /> Perhaps this can be smelted into a gold bar.  Wait no, that\'s cruel.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-yetiLeftFoot", "", "Yeti\'s Left Foot", "<img src=\'images/museum.png\' class=\'img-20\' /> It\'s still cold.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-yetiRightFoot", "", "Yeti\'s Right Foot", "<img src=\'images/museum.png\' class=\'img-20\' /> Yep, still cold.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-smallSeaShell", "", "Small Shell", "<img src=\'images/museum.png\' class=\'img-20\' /> Found on the ocean floors.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-mediumSeaShell", "", "Medium Shell", "<img src=\'images/museum.png\' class=\'img-20\' /> Found on the ocean floors.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-largeSeaShell", "", "Large Shell", "<img src=\'images/museum.png\' class=\'img-20\' /> Found on the ocean floors.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-mould", "craftingMould", "Crafting Mould", "Can be used to craft a specific item.<br /><br /><i>Click to operate</i>");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-carePackage", "carePackage", "Care Package", "I can buy one of these everytime I upgrade the shop!");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-gem", "gem", "Gem", "I can use these to socket tools granting them more power.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-smallManaStar", "", "Mana Star <span style=\'color:grey\'>(Small)</span>", "<img src=\'images/largeManaStar.png\' class=\'img-30\' /> Permanently increases mana by 1.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-mediumManaStar", "", "Mana Star <span style=\'color:grey\'>(Medium)</span>", "<img src=\'images/largeManaStar.png\' class=\'img-30\' /> Permanently increases mana by 2.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-largeManaStar", "", "Mana Star <span style=\'color:grey\'>(Large)</span>", "<img src=\'images/largeManaStar.png\' class=\'img-30\' /> Permanently increases mana by 3.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-hugeManaStar", "", "Mana Star <span style=\'color:grey\'>(Huge)</span>", "<img src=\'images/largeManaStar.png\' class=\'img-30\' />  Permanently increases mana by 5.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-donorCoins", "", "Tradable Donor Coins", "Donor coins may be used to buy temporary buffs that last for 30 days.<br /><br />These are currently tradable on the market, to use them in the donor shop; you must first bind them to your account.<br /><br /><span style=\'color:green\'>Click to bind coins to your account</span>");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-colorCrystal", "useless", "Sky Crystal", "It seems to be attracted to the dark crystal.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-shovel", "useless", "Shovel", "Slowly collects sand over time.<br /><br /><b>Found: </b><img src=\'images/sand.png\' class=\'img-20\' /> " + getItem("sandShovelTotal") + "<hr class=\'hr-thin\' />" + (1 + "/" + formatNumber(4000) + "<span style=\'color:grey\'> (~" + 21 + " per day)</span>"));
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-sapphireShovel", "useless", "Shovel", "Slowly collects sand over time.<br /><br /><b>Found: </b><img src=\'images/sand.png\' class=\'img-20\' /> " + getItem("sandShovelTotal") + "<hr class=\'hr-thin\' />" + (1 + "/" + formatNumber(3500) + "<span style=\'color:grey\'> (~" + 24 + " per day)</span>"));
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-emeraldShovel", "useless", "Shovel", "Slowly collects sand over time.<br /><br /><b>Found: </b><img src=\'images/sand.png\' class=\'img-20\' /> " + getItem("sandShovelTotal") + "<hr class=\'hr-thin\' />" + (1 + "/" + formatNumber(3000) + "<span style=\'color:grey\'> (~" + 28 + " per day)</span>"));
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-rubyShovel", "useless", "Shovel", "Slowly collects sand over time.<br /><br /><b>Found: </b><img src=\'images/sand.png\' class=\'img-20\' /> " + getItem("sandShovelTotal") + "<hr class=\'hr-thin\' />" + (1 + "/" + formatNumber(2500) + "<span style=\'color:grey\'> (~" + 34 + " per day)</span>"));
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-diamondShovel", "useless", "Shovel", "Slowly collects sand over time.<br /><br /><b>Found: </b><img src=\'images/sand.png\' class=\'img-20\' /> " + getItem("sandShovelTotal") + "<hr class=\'hr-thin\' />" + (1 + "/" + formatNumber(2000) + "<span style=\'color:grey\'> (~" + 43 + " per day)</span>"));
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-chisel", "useless", "Chisel", "<img src=\'images/geode_black.png\' class=\'img-20\' /> <b>Chance of failing to open a geode: </b> " + "50%");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-sapphireChisel", "useless", "Chisel", "<img src=\'images/geode_black.png\' class=\'img-20\' /> <b>Chance of failing to open a geode: </b> " + "40%");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-emeraldChisel", "useless", "Chisel", "<img src=\'images/geode_black.png\' class=\'img-20\' /> <b>Chance of failing to open a geode: </b> " + "30%");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-rubyChisel", "useless", "Chisel", "<img src=\'images/geode_black.png\' class=\'img-20\' /> <b>Chance of failing to open a geode: </b> " + "20%");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-diamondChisel", "useless", "Chisel", "<img src=\'images/geode_black.png\' class=\'img-20\' /> <b>Chance of failing to open a geode: </b> " + "0%");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-logs", "logs", "Logs", "Obtained from cutting a tree.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-oakLogs", "oakLogs", "Oak Logs", "Obtained from cutting a specific tree.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-willowLogs", "willowLogs", "Willow Logs", "Obtained from cutting a specific tree.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-mapleLogs", "mapleLogs", "Maple Logs", "Obtained from cutting a specific tree.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-bambooLogs", "bambooLogs", "Bamboo Logs", "Obtained from cutting a specific tree.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-lavaLogs", "lavaLogs", "Lava Logs", "Obtained from cutting a specific tree.<br /><br /><img src=\'images/ironBucket.png\' class=\'img-30\' /> 2% chance of getting lava when used with oven, assuming you have empty buckets.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-pineLogs", "pineLogs", "Pine Logs", "Obtained from cutting a specific tree.  It has snow sitting on top.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-stardustLogs", "stardustLogs", "Stardust Logs", "Obtained from cutting a specific tree.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-oven", "oven", "COOKING OVEN", "<b>Burn rate: " + parseInt(getBurnRate() * 100) + "%</b>");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-dottedGreenLeaf", "dottedGreenLeaf", "DOTTED GREEN LEAF", "A primary brewing ingredient.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-greenLeaf", "greenLeaf", "GREEN LEAF", "A primary brewing ingredient.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-limeLeaf", "limeLeaf", "LIME LEAF", "A primary brewing ingredient.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-goldLeaf", "goldLeaf", "GOLD LEAF", "A primary brewing ingredient.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-crystalLeaf", "crystalLeaf", "CRYSTAL LEAF", "A primary brewing ingredient.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-stripedGoldLeaf", "stripedGoldLeaf", "STRIPED GOLD LEAF", "A primary brewing ingredient.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-stripedCrystalLeaf", "stripedCrystalLeaf", "STRIPED CRYSTAL LEAF", "A primary brewing ingredient.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-stew", "stew", "STEW", "<img src=\'images/hourglass.png\' class=\'img-20\' /> Reduces cooldown by 15 minutes.");
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-redMushroom", "redMushroom", "RED MUSHROOM", "A secondary brewing ingredient.");
	var _0x5A81 = "";
	_0x5A81 += "<br /><img src=\'images/rawShrimp.png\' class=\'img-30\' /> Shrimp";
	if (getItem("sapphireSmallFishingNetTotal") > 0 || getItem("sapphireSmallFishingNet") > 0)
	{
		_0x5A81 += "<br /><img src=\'images/rawAnchovy.png\' class=\'img-30\' /> Anchovy"
	};
	if (getItem("emeraldSmallFishingNetTotal") > 0 || getItem("emeraldSmallFishingNet") > 0)
	{
		_0x5A81 += "<br /><img src=\'images/rawSardine.png\' class=\'img-30\' /> Sardine"
	};
	if (getItem("rubySmallFishingNetTotal") > 0 || getItem("rubySmallFishingNet") > 0)
	{
		_0x5A81 += "<br /><img src=\'images/rawCrab.png\' class=\'img-30\' /> Crab"
	};
	if (getItem("diamondSmallFishingNetTotal") > 0 || getItem("diamondSmallFishingNet") > 0)
	{
		_0x5A81 += "<br /><img src=\'images/rawPiranha.png\' class=\'img-30\' /> Piranhas"
	};
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-smallFishingNet", "varNameIfSellable", "Small Fishing Net", "<b>Catch size: </b> Small<br />" + _0x5A81);
	var _0x5999 = "";
	_0x5999 += "<br /><img src=\'images/rawTrout.png\' class=\'img-30\' /> Trout";
	if (getItem("sapphireFishingRodTotal") > 0 || getItem("sapphireFishingRod") > 0)
	{
		_0x5999 += "<br /><img src=\'images/rawSalmon.png\' class=\'img-30\' /> Salmon"
	};
	if (getItem("emeraldFishingRodTotal") > 0 || getItem("emeraldFishingRod") > 0)
	{
		_0x5999 += "<br /><img src=\'images/rawEel.png\' class=\'img-30\' /> Eel"
	};
	if (getItem("rubyFishingRodTotal") > 0 || getItem("rubyFishingRod") > 0)
	{
		_0x5999 += "<br /><img src=\'images/rawSeaTurtle.png\' class=\'img-30\' /> Sea Turtle"
	};
	if (getItem("diamondFishingRodTotal") > 0 || getItem("diamondFishingRod") > 0)
	{
		_0x5999 += "<br /><img src=\'images/rawRainbowFish.png\' class=\'img-30\' /> Rainbow Fish"
	};
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-fishingRod", "varNameIfSellable", "Fishing Rod", "<b>Catch size: </b> Medium<br />" + _0x5999);
	var _0x59B6 = "";
	_0x59B6 += "<br /><img src=\'images/rawTuna.png\' class=\'img-30\' /> Tuna";
	if (getItem("sapphireHarpoonTotal") > 0 || getItem("sapphireHarpoon") > 0)
	{
		_0x59B6 += "<br /><img src=\'images/rawSwordfish.png\' class=\'img-30\' /> Swordfish"
	};
	if (getItem("emeraldHarpoonTotal") > 0 || getItem("emeraldHarpoon") > 0)
	{
		_0x59B6 += "<br /><img src=\'images/rawMantaRay.png\' class=\'img-30\' /> Manta Ray"
	};
	if (getItem("rubyHarpoonTotal") > 0 || getItem("rubyHarpoon") > 0)
	{
		_0x59B6 += "<br /><img src=\'images/rawShark.png\' class=\'img-30\' /> Shark"
	};
	if (getItem("diamondHarpoonTotal") > 0 || getItem("diamondHarpoon") > 0)
	{
		_0x59B6 += "<br /><img src=\'images/rawWhale.png\' class=\'img-30\' /> Whale"
	};
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-harpoon", "varNameIfSellable", "Harpoon", "<b>Catch size: </b> Large<br />" + _0x59B6);
	var _0x59D3 = 0;
	var _0x5925 = "<img src=\'images/check.png\' class=\'img-20\'  />";
	_0x59D3 = 1;
	_0x5925 = "<img src=\'images/x.png\' class=\'img-20\' />";
	if (getLevel(getItem("magicXp")) >= _0x59D3)
	{
		_0x5925 = "<img src=\'images/check.png\' class=\'img-20\' />"
	};
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-spellScrollHeal", "spellScrollHeal", "HEAL", "<img src=\'images/magicSkill.png\' class=\'img-20\' /> " + 1 + " magic required. " + _0x5925);
	_0x59D3 = 5;
	_0x5925 = "<img src=\'images/x.png\' class=\'img-20\' />";
	if (getLevel(getItem("magicXp")) >= _0x59D3)
	{
		_0x5925 = "<img src=\'images/check.png\' class=\'img-20\' />"
	};
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-spellScrollPoison", "", "POISON", "<img src=\'images/magicSkill.png\' class=\'img-20\' /> " + _0x59D3 + " magic required. " + _0x5925);
	_0x59D3 = 10;
	_0x5925 = "<img src=\'images/x.png\' class=\'img-20\' />";
	if (getLevel(getItem("magicXp")) >= _0x59D3)
	{
		_0x5925 = "<img src=\'images/check.png\' class=\'img-20\' />"
	};
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-spellScrollReflect", "", "REFLECT", "<img src=\'images/magicSkill.png\' class=\'img-20\' /> " + _0x59D3 + " magic required. " + _0x5925);
	_0x59D3 = 15;
	_0x5925 = "<img src=\'images/x.png\' class=\'img-20\' />";
	if (getLevel(getItem("magicXp")) >= _0x59D3)
	{
		_0x5925 = "<img src=\'images/check.png\' class=\'img-20\' />"
	};
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-spellScrollFire", "", "FIRE", "<img src=\'images/magicSkill.png\' class=\'img-20\' /> " + _0x59D3 + " magic required. " + _0x5925);
	_0x59D3 = 20;
	_0x5925 = "<img src=\'images/x.png\' class=\'img-20\' />";
	if (getLevel(getItem("magicXp")) >= _0x59D3)
	{
		_0x5925 = "<img src=\'images/check.png\' class=\'img-20\' />"
	};
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-spellScrollTeleport", "", "TELEPORT", "<img src=\'images/magicSkill.png\' class=\'img-20\' /> " + _0x59D3 + " magic required. " + _0x5925);
	_0x59D3 = 30;
	_0x5925 = "<img src=\'images/x.png\' class=\'img-20\' />";
	if (getLevel(getItem("magicXp")) >= _0x59D3)
	{
		_0x5925 = "<img src=\'images/check.png\' class=\'img-20\' />"
	};
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-spellScrollFreeze", "", "FREEZE", "<img src=\'images/magicSkill.png\' class=\'img-20\' /> " + _0x59D3 + " magic required. " + _0x5925);
	_0x59D3 = 40;
	_0x5925 = "<img src=\'images/x.png\' class=\'img-20\' />";
	if (getLevel(getItem("magicXp")) >= _0x59D3)
	{
		_0x5925 = "<img src=\'images/check.png\' class=\'img-20\' />"
	};
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-spellScrollGhostScan", "", "GHOST SCAN", "<img src=\'images/magicSkill.png\' class=\'img-20\' /> " + _0x59D3 + " magic required. " + _0x5925);
	_0x59D3 = 50;
	_0x5925 = "<img src=\'images/x.png\' class=\'img-20\' />";
	if (getLevel(getItem("magicXp")) >= _0x59D3)
	{
		_0x5925 = "<img src=\'images/check.png\' class=\'img-20\' />"
	};
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-spellScrollInvisibility", "", "INVISIBILITY", "<img src=\'images/magicSkill.png\' class=\'img-20\' /> " + _0x59D3 + " magic required. " + _0x5925);
	var _0x4ED6;
	var _0x5A0D;
	var _0x384B;
	var _0x595F;
	var _0x58B1;
	var _0x5A47;
	var _0x41B2;
	_0x41B2 = "";
	_0x4ED6 = "HEAL";
	_0x5A0D = 3;
	_0x384B = "Heal instantly during combat.";
	_0x595F = 10;
	_0x58B1 = "<b>Base heal:</b> 2 health.";
	_0x5A47 = "<b>Multiplier:</b> Heal an additional 1 health per 5 magic bonus.";
	_0x41B2 += "<div style=\'font-size:16pt;font-weight:bold;\'>" + _0x4ED6 + "</div>";
	_0x41B2 += "<div>" + _0x384B + "</div>";
	_0x41B2 += "<br />";
	_0x41B2 += "<b>Total Casts: </b> <item-healCasted>0</item-healCasted>";
	_0x41B2 += "<br />";
	_0x41B2 += "<br />";
	_0x41B2 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x41B2 += "<img src=\'images/hugeManaStar.png\' class=\'img-20\' /> <b>Mana cost:</b> " + _0x5A0D;
	_0x41B2 += "<br />";
	_0x41B2 += "<img src=\'images/hourglass_grey.png\' class=\'img-20\' /> <b>Cooldown:</b> " + _0x595F + " seconds";
	_0x41B2 += "</div>";
	_0x41B2 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x41B2 += "<img src=\'images/magic_black.png\' class=\'img-20\' /> " + _0x58B1;
	_0x41B2 += "<br />";
	_0x41B2 += "<img src=\'images/magic_grey.png\' class=\'img-20\' /> " + _0x5A47;
	_0x41B2 += "</div>";
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-" + _0x4ED6.toLowerCase(), _0x4ED6.toLowerCase(), "", _0x41B2);
	_0x41B2 = "";
	_0x4ED6 = "POISON";
	_0x5A0D = 5;
	_0x384B = "Poisons your enemy, dealing 1 damage every 7 seconds.";
	_0x595F = 300;
	_0x58B1 = "<b>Base poison:</b> 1 damage.";
	_0x5A47 = "<b>Multiplier:</b> Poison damaged increased by 1 per 10 magic bonus.";
	_0x41B2 += "<div style=\'font-size:16pt;font-weight:bold;\'>" + _0x4ED6 + "</div>";
	_0x41B2 += "<div>" + _0x384B + "</div>";
	_0x41B2 += "<br />";
	_0x41B2 += "<b>Total Casts: </b> <item-poisonCasted>0</item-poisonCasted>";
	_0x41B2 += "<br />";
	_0x41B2 += "<br />";
	_0x41B2 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x41B2 += "<img src=\'images/hugeManaStar.png\' class=\'img-20\' /> <b>Mana cost:</b> " + _0x5A0D;
	_0x41B2 += "<br />";
	_0x41B2 += "<img src=\'images/hourglass_grey.png\' class=\'img-20\' /> <b>Cooldown:</b> " + _0x595F + " seconds";
	_0x41B2 += "</div>";
	_0x41B2 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x41B2 += "<img src=\'images/magic_black.png\' class=\'img-20\' /> " + _0x58B1;
	_0x41B2 += "<br />";
	_0x41B2 += "<img src=\'images/magic_grey.png\' class=\'img-20\' /> " + _0x5A47;
	_0x41B2 += "</div>";
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-" + _0x4ED6.toLowerCase(), _0x4ED6.toLowerCase(), "", _0x41B2);
	_0x41B2 = "";
	_0x4ED6 = "REFLECT";
	_0x5A0D = 3;
	_0x384B = "Reflects the next attack from the enemy back to them.";
	_0x595F = 30;
	_0x58B1 = "<b>Base damage:</b> N/A";
	_0x5A47 = "<b>Buff:</b> Having a magic bonus greater than 20 will not trigger reflect if the enemy hits a 0.";
	_0x41B2 += "<div style=\'font-size:16pt;font-weight:bold;\'>" + _0x4ED6 + "</div>";
	_0x41B2 += "<div>" + _0x384B + "</div>";
	_0x41B2 += "<br />";
	_0x41B2 += "<b>Total Casts: </b> <item-reflectCasted>0</item-reflectCasted>";
	_0x41B2 += "<br />";
	_0x41B2 += "<br />";
	_0x41B2 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x41B2 += "<img src=\'images/hugeManaStar.png\' class=\'img-20\' /> <b>Mana cost:</b> " + _0x5A0D;
	_0x41B2 += "<br />";
	_0x41B2 += "<img src=\'images/hourglass_grey.png\' class=\'img-20\' /> <b>Cooldown:</b> " + _0x595F + " seconds";
	_0x41B2 += "</div>";
	_0x41B2 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x41B2 += "<img src=\'images/magic_black.png\' class=\'img-20\' /> " + _0x58B1;
	_0x41B2 += "<br />";
	_0x41B2 += "<img src=\'images/magic_grey.png\' class=\'img-20\' /> " + _0x5A47;
	_0x41B2 += "</div>";
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-" + _0x4ED6.toLowerCase(), _0x4ED6.toLowerCase(), "", _0x41B2);
	_0x41B2 = "";
	_0x4ED6 = "FIRE";
	_0x5A0D = 2;
	_0x384B = "Instantly deals fire damage to your enemy.";
	_0x595F = 10;
	_0x58B1 = "<b>Base damage:</b> 0 - 2";
	_0x5A47 = "<b>Buff:</b> +1 damage per 3 magic bonus.";
	_0x41B2 += "<div style=\'font-size:16pt;font-weight:bold;\'>" + _0x4ED6 + "</div>";
	_0x41B2 += "<div>" + _0x384B + "</div>";
	_0x41B2 += "<br />";
	_0x41B2 += "<b>Total Casts: </b> <item-fireCasted>0</item-fireCasted>";
	_0x41B2 += "<br />";
	_0x41B2 += "<br />";
	_0x41B2 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x41B2 += "<img src=\'images/hugeManaStar.png\' class=\'img-20\' /> <b>Mana cost:</b> " + _0x5A0D;
	_0x41B2 += "<br />";
	_0x41B2 += "<img src=\'images/hourglass_grey.png\' class=\'img-20\' /> <b>Cooldown:</b> " + _0x595F + " seconds";
	_0x41B2 += "</div>";
	_0x41B2 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x41B2 += "<img src=\'images/magic_black.png\' class=\'img-20\' /> " + _0x58B1;
	_0x41B2 += "<br />";
	_0x41B2 += "<img src=\'images/magic_grey.png\' class=\'img-20\' /> " + _0x5A47;
	_0x41B2 += "</div>";
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-" + _0x4ED6.toLowerCase(), _0x4ED6.toLowerCase(), "", _0x41B2);
	_0x41B2 = "";
	_0x4ED6 = "TELEPORT";
	_0x5A0D = 0;
	_0x384B = "Teleports you out of combat, fully recovering HP and mana allowing you to fight again.";
	_0x595F = 900;
	_0x58B1 = "<b>Base damage:</b> n/a";
	_0x41B2 += "<div style=\'font-size:16pt;font-weight:bold;\'>" + _0x4ED6 + "</div>";
	_0x41B2 += "<div>" + _0x384B + "</div>";
	_0x41B2 += "<br />";
	_0x41B2 += "<b>Total Casts: </b> <item-teleportCasted>0</item-teleportCasted>";
	_0x41B2 += "<br />";
	_0x41B2 += "<br />";
	_0x41B2 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x41B2 += "<img src=\'images/hugeManaStar.png\' class=\'img-20\' /> <b>Mana cost:</b> " + "(none)";
	_0x41B2 += "<br />";
	_0x41B2 += "<img src=\'images/hourglass_grey.png\' class=\'img-20\' /> <b>Cooldown:</b> " + 15 + " minutes.";
	_0x41B2 += "</div>";
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-" + _0x4ED6.toLowerCase(), _0x4ED6.toLowerCase(), "", _0x41B2);
	_0x41B2 = "";
	_0x4ED6 = "GHOST SCAN";
	_0x5A0D = 0;
	_0x384B = "Ability to see ghosts.";
	_0x595F = 300;
	_0x58B1 = "<b>Base damage:</b> n/a";
	_0x41B2 += "<div style=\'font-size:16pt;font-weight:bold;\'>" + _0x4ED6 + "</div>";
	_0x41B2 += "<div>" + _0x384B + "</div>";
	_0x41B2 += "<br />";
	_0x41B2 += "<b>Total Casts: </b> <item-ghostScanCasted>0</item-ghostScanCasted>";
	_0x41B2 += "<br />";
	_0x41B2 += "<br />";
	_0x41B2 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x41B2 += "<img src=\'images/hugeManaStar.png\' class=\'img-20\' /> <b>Mana cost:</b> " + "(none)";
	_0x41B2 += "<br />";
	_0x41B2 += "<img src=\'images/hourglass_grey.png\' class=\'img-20\' /> <b>Cooldown:</b> " + 5 + " minutes.";
	_0x41B2 += "</div>";
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-" + "ghostScan", _0x4ED6.toLowerCase(), "", _0x41B2);
	_0x41B2 = "";
	_0x4ED6 = "FREEZE";
	_0x5A0D = 5;
	_0x384B = "Freezes your enemy for a short duration";
	_0x595F = 15;
	_0x58B1 = "<b>Base Freeze Time:</b> 3 seconds";
	_0x5A47 = "<b>Buff:</b> +1 seconds per 5 magic bonus.";
	_0x41B2 += "<div style=\'font-size:16pt;font-weight:bold;\'>" + _0x4ED6 + "</div>";
	_0x41B2 += "<div>" + _0x384B + "</div>";
	_0x41B2 += "<br />";
	_0x41B2 += "<b>Total Casts: </b> <item-" + _0x4ED6.toLowerCase() + "Casted>0</item-" + _0x4ED6.toLowerCase() + "Casted>";
	_0x41B2 += "<br />";
	_0x41B2 += "<br />";
	_0x41B2 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x41B2 += "<img src=\'images/hugeManaStar.png\' class=\'img-20\' /> <b>Mana cost:</b> " + _0x5A0D;
	_0x41B2 += "<br />";
	_0x41B2 += "<img src=\'images/hourglass_grey.png\' class=\'img-20\' /> <b>Cooldown:</b> " + _0x595F + " seconds";
	_0x41B2 += "</div>";
	_0x41B2 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x41B2 += "<img src=\'images/magic_black.png\' class=\'img-20\' /> " + _0x58B1;
	_0x41B2 += "<br />";
	_0x41B2 += "<img src=\'images/magic_grey.png\' class=\'img-20\' /> " + _0x5A47;
	_0x41B2 += "</div>";
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-" + _0x4ED6.toLowerCase(), _0x4ED6.toLowerCase(), "", _0x41B2);
	_0x41B2 = "";
	_0x4ED6 = "INVISIBILITY";
	_0x5A0D = 1;
	_0x384B = "Become invisibile, making your enemy miss.";
	_0x595F = 30;
	_0x58B1 = "<b>Invisibility time:</b> 2 second";
	_0x5A47 = "<b>Buff:</b> No mana cost at 20 magic bonus.";
	_0x41B2 += "<div style=\'font-size:16pt;font-weight:bold;\'>" + _0x4ED6 + "</div>";
	_0x41B2 += "<div>" + _0x384B + "</div>";
	_0x41B2 += "<br />";
	_0x41B2 += "<b>Total Casts: </b> <item-" + _0x4ED6.toLowerCase() + "Casted>0</item-" + _0x4ED6.toLowerCase() + "Casted>";
	_0x41B2 += "<br />";
	_0x41B2 += "<br />";
	_0x41B2 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x41B2 += "<img src=\'images/hugeManaStar.png\' class=\'img-20\' /> <b>Mana cost:</b> " + _0x5A0D;
	_0x41B2 += "<br />";
	_0x41B2 += "<img src=\'images/hourglass_grey.png\' class=\'img-20\' /> <b>Cooldown:</b> " + _0x595F + " seconds";
	_0x41B2 += "</div>";
	_0x41B2 += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x41B2 += "<img src=\'images/magic_black.png\' class=\'img-20\' /> " + _0x58B1;
	_0x41B2 += "<br />";
	_0x41B2 += "<img src=\'images/magic_grey.png\' class=\'img-20\' /> " + _0x5A47;
	_0x41B2 += "</div>";
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-" + _0x4ED6.toLowerCase(), _0x4ED6.toLowerCase(), "", _0x41B2);
	if (getItem("treeUnlocked2") == 0)
	{
		_0x3AAC += generateHTMLGeneralTooltip("tooltip-treeSection2", "treeSection2", "Tree Patch", "<img src=\'images/unlocked.png\' class=\'img-30\' /> Unlock for <img src=\'images/coins.png\' class=\'img-30\' /> 100 coins.")
	};
	if (getItem("treeUnlocked3") == 0)
	{
		_0x3AAC += generateHTMLGeneralTooltip("tooltip-treeSection3", "treeSection3", "Tree Patch", "<img src=\'images/unlocked.png\' class=\'img-30\' /> Unlock for <img src=\'images/coins.png\' class=\'img-30\' /> 10,000 coins.")
	};
	if (getItem("treeUnlocked4") == 0)
	{
		_0x3AAC += generateHTMLGeneralTooltip("tooltip-treeSection4", "treeSection4", "Tree Patch", "<img src=\'images/unlocked.png\' class=\'img-30\' /> Unlock for <img src=\'images/coins.png\' class=\'img-30\' /> 100,000 coins and <img src=\'images/woodcuttingSkill.png\' class=\'img-30\' /> 50 woodcutting.")
	};
	if (getItem("treeUnlocked6") == 0)
	{
		_0x3AAC += generateHTMLGeneralTooltip("tooltip-treeSection5and6", "treeSection5and6", "Tree Patch", "<img src=\'images/unlocked.png\' class=\'img-30\' /> Unlock for <img src=\'images/donorCoins.png\' class=\'img-30\' /> 2 donor coins.")
	};
	if (getItem("plotUnlocked2") == 0)
	{
		_0x3AAC += generateHTMLGeneralTooltip("tooltip-plotSection2", "plotSection2", "Farming Patch", "<img src=\'images/unlocked.png\' class=\'img-30\' /> Unlock for <img src=\'images/coins.png\' class=\'img-30\' /> 100 coins.")
	};
	if (getItem("plotUnlocked3") == 0)
	{
		_0x3AAC += generateHTMLGeneralTooltip("tooltip-plotSection3", "plotSection3", "Farming Patch", "<img src=\'images/unlocked.png\' class=\'img-30\' /> Unlock for <img src=\'images/coins.png\' class=\'img-30\' /> 10,000 coins.")
	};
	if (getItem("plotUnlocked4") == 0)
	{
		_0x3AAC += generateHTMLGeneralTooltip("tooltip-plotSection4", "plotSection4", "Farming Patch", "<img src=\'images/unlocked.png\' class=\'img-30\' /> Unlock for <img src=\'images/coins.png\' class=\'img-30\' /> 100,000 coins and <img src=\'images/farmingSkill.png\' class=\'img-30\' /> 50 farming.")
	};
	if (getItem("plotUnlocked6") == 0)
	{
		_0x3AAC += generateHTMLGeneralTooltip("tooltip-plotSection5and6", "plotSection5and6", "Farming Patch", "<img src=\'images/unlocked.png\' class=\'img-30\' /> Unlock for <img src=\'images/donorCoins.png\' class=\'img-30\' /> 2 donor coins.")
	};
	var _0x5942 = "";
	var _0x5894 = "Fields";
	var _0x5A2A = [];
	_0x5942 = "";
	_0x5894 = "Fields";
	_0x5A2A = [];
	_0x5A2A = getEncountersImgArrayForAreaareaChosen(_0x5894);
	_0x5942 += "<img src=\'images/energy.png\' class=\'img-30\' /> " + getEnergyReduction(50) + " &nbsp;&nbsp;&nbsp;&nbsp; <img src=\'images/hourglass_grey.png\' class=\'img-30\' /> " + formatTime(getAreaTimer(15 * 60));
	_0x5942 += "<br /><br />";
	_0x5942 += "<img src=\'" + _0x5A2A[1] + "\' class=\'img-30\' /> Chickens &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x5942 += "<img src=\'" + _0x5A2A[3] + "\' class=\'img-30\' /> Rats &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x5942 += "<img src=\'" + _0x5A2A[5] + "\' class=\'img-30\' /> Bees";
	document.getElementById(_0x5894.toLowerCase() + "-fightMarker-gif").src = _0x5A2A[6];
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-" + _0x5894.toLowerCase(), "", _0x5894, _0x5942);
	_0x5942 = "";
	_0x5894 = "Forest";
	_0x5A2A = [];
	_0x5A2A = getEncountersImgArrayForAreaareaChosen(_0x5894);
	_0x5942 += "<img src=\'images/energy.png\' class=\'img-30\' /> " + getEnergyReduction(200) + " &nbsp;&nbsp;&nbsp;&nbsp; <img src=\'images/hourglass_grey.png\' class=\'img-30\' /> " + formatTime(getAreaTimer(30 * 60));
	_0x5942 += "<br /><br />";
	_0x5942 += "<img src=\'" + _0x5A2A[1] + "\' class=\'img-30\' /> Snake &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x5942 += "<img src=\'" + _0x5A2A[3] + "\' class=\'img-30\' /> Ent &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x5942 += "<img src=\'" + _0x5A2A[5] + "\' class=\'img-30\' /> Thief";
	document.getElementById(_0x5894.toLowerCase() + "-fightMarker-gif").src = _0x5A2A[6];
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-" + _0x5894.toLowerCase(), "", _0x5894, _0x5942);
	_0x5942 = "";
	_0x5894 = "Caves";
	_0x5A2A = [];
	_0x5A2A = getEncountersImgArrayForAreaareaChosen(_0x5894);
	_0x5942 += "<img src=\'images/energy.png\' class=\'img-30\' /> " + getEnergyReduction(500) + " &nbsp;&nbsp;&nbsp;&nbsp; <img src=\'images/hourglass_grey.png\' class=\'img-30\' /> " + formatTime(getAreaTimer(60 * 60));
	_0x5942 += "<br /><br />";
	_0x5942 += "<img src=\'" + _0x5A2A[1] + "\' class=\'img-30\' /> Bear &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x5942 += "<img src=\'" + _0x5A2A[3] + "\' class=\'img-30\' /> Spider &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x5942 += "<img src=\'" + _0x5A2A[5] + "\' class=\'img-30\' /> Skeleton";
	document.getElementById(_0x5894.toLowerCase() + "-fightMarker-gif").src = _0x5A2A[6];
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-" + _0x5894.toLowerCase(), "", _0x5894, _0x5942);
	_0x5942 = "";
	_0x5894 = "lavaDungeon";
	_0x5A2A = [];
	_0x5A2A = getEncountersImgArrayForAreaareaChosen(_0x5894);
	_0x5942 += "<img src=\'images/energy.png\' class=\'img-30\' /> " + getEnergyReduction(2000) + " &nbsp;&nbsp;&nbsp;&nbsp; <img src=\'images/hourglass_grey.png\' class=\'img-30\' /> " + formatTime(getAreaTimer(90 * 60));
	_0x5942 += "<br /><br />";
	_0x5942 += "<img src=\'" + _0x5A2A[1] + "\' class=\'img-30\' /> Lava Alien &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x5942 += "<img src=\'" + _0x5A2A[3] + "\' class=\'img-30\' /> Bat &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x5942 += "<img src=\'" + _0x5A2A[5] + "\' class=\'img-30\' /> Fire Mage";
	document.getElementById(_0x5894 + "-fightMarker-gif").src = _0x5A2A[6];
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-" + _0x5894, "", _0x5894, _0x5942);
	_0x5942 = "";
	_0x5894 = "northernFields";
	_0x5A2A = [];
	_0x5A2A = getEncountersImgArrayForAreaareaChosen(_0x5894);
	_0x5942 += "<img src=\'images/energy.png\' class=\'img-30\' /> " + getEnergyReduction(5000) + " &nbsp;&nbsp;&nbsp;&nbsp; <img src=\'images/hourglass_grey.png\' class=\'img-30\' /> " + formatTime(getAreaTimer(120 * 60));
	_0x5942 += "<br /><br />";
	_0x5942 += "<img src=\'" + _0x5A2A[1] + "\' class=\'img-30\' /> Bonehead &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x5942 += "<img src=\'" + _0x5A2A[3] + "\' class=\'img-30\' /> Mamma Polar Bear &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x5942 += "<img src=\'" + _0x5A2A[5] + "\' class=\'img-30\' /> Yeti";
	document.getElementById(_0x5894 + "-fightMarker-gif").src = _0x5A2A[6];
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-" + _0x5894, "", "Northern Fields", _0x5942);
	_0x5942 = "";
	_0x5894 = "cemetery";
	_0x5A2A = [];
	_0x5A2A = getEncountersImgArrayForAreaareaChosen(_0x5894);
	_0x5942 += "<img src=\'images/energy.png\' class=\'img-30\' /> " + getEnergyReduction(10000) + " &nbsp;&nbsp;&nbsp;&nbsp; <img src=\'images/hourglass_grey.png\' class=\'img-30\' /> " + formatTime(getAreaTimer(150 * 60));
	_0x5942 += "<br /><br />";
	_0x5942 += "<img src=\'" + _0x5A2A[1] + "\' class=\'img-30\' /> Ghost &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x5942 += "<img src=\'" + _0x5A2A[3] + "\' class=\'img-30\' /> Skeleton Ghost &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x5942 += "<img src=\'" + _0x5A2A[5] + "\' class=\'img-30\' /> Reaper";
	document.getElementById(_0x5894 + "-fightMarker-gif").src = _0x5A2A[6];
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-" + _0x5894, "", _0x5894, _0x5942);
	_0x5942 = "";
	_0x5894 = "ocean";
	_0x5A2A = [];
	_0x5A2A = getEncountersImgArrayForAreaareaChosen(_0x5894);
	_0x5942 += "<img src=\'images/energy.png\' class=\'img-30\' /> " + getEnergyReduction(16000) + " &nbsp;&nbsp;&nbsp;&nbsp; <img src=\'images/hourglass_grey.png\' class=\'img-30\' /> " + formatTime(getAreaTimer(180 * 60));
	_0x5942 += "<br /><br />";
	_0x5942 += "<img src=\'" + _0x5A2A[1] + "\' class=\'img-30\' /> Shark &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x5942 += "<img src=\'" + _0x5A2A[3] + "\' class=\'img-30\' /> Puffer Fish &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x5942 += "<img src=\'" + _0x5A2A[5] + "\' class=\'img-30\' /> Trident Soldier";
	document.getElementById(_0x5894 + "-fightMarker-gif").src = _0x5A2A[6];
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-" + _0x5894, "", _0x5894, _0x5942);
	var _0x480A = "";
	_0x5942 = "";
	_0x480A = "bushy";
	if (getItem(_0x480A + "Kills") == 0)
	{
		_0x5942 = "<center><img src=\'images/energy.png\' class=\'img-30\' /> " + getEnergyReduction(1000) + "</center><br /><img src=\'images/" + _0x480A + "Monster_black.png\' class=\'img-50\' /> Defeated " + "<img src=\'images/x.png\' class=\'img-20\' />"
	}
	else
	{
		if (getItem(_0x480A + "Kills") > 0)
		{
			document.getElementById("combat-map-fight-marker-boss-bushy").src = "images/bossMarkerCompleted.gif";
			_0x5942 = "<img src=\'images/" + _0x480A + "_monster_idle_0.png\' class=\'img-50\' /> Defeated " + "<img src=\'images/check.png\' class=\'img-20\' />"
		}
	};
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-boss-bushy", "", "BUSHY <span style=\'color:grey\'>(BOSS)</span><br /><span style=\'color:brown;font-size:8pt\'><b>Weakness:</b> None</span>", _0x5942);
	_0x480A = "fireHawk";
	if (getItem(_0x480A + "Kills") == 0)
	{
		_0x5942 = "<center><img src=\'images/energy.png\' class=\'img-30\' /> " + getEnergyReduction(6000) + "</center><br /><img src=\'images/" + _0x480A + "Monster_black.png\' class=\'img-50\' /> Defeated " + "<img src=\'images/x.png\' class=\'img-20\' />"
	}
	else
	{
		if (getItem(_0x480A + "Kills") > 0)
		{
			document.getElementById("combat-map-fight-marker-boss-" + _0x480A).src = "images/bossMarkerCompleted.gif";
			_0x5942 = "<img src=\'images/" + _0x480A + "_monster_idle_0.png\' class=\'img-50\' /> Defeated " + "<img src=\'images/check.png\' class=\'img-20\' />"
		}
	};
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-boss-" + _0x480A, "", getItemName(_0x480A).toUpperCase() + " <span style=\'color:grey\'>(BOSS)</span><br /><span style=\'color:brown;font-size:8pt\'><b>Weakness:</b> Water or Ice</span>", _0x5942);
	_0x480A = "iceHawk";
	if (getItem(_0x480A + "Kills") == 0)
	{
		_0x5942 = "<center><img src=\'images/energy.png\' class=\'img-30\' /> " + formatNumber(getEnergyReduction(10000)) + "</center><br /><img src=\'images/" + _0x480A + "Monster_black.png\' class=\'img-50\' /> Defeated " + "<img src=\'images/x.png\' class=\'img-20\' />"
	}
	else
	{
		if (getItem(_0x480A + "Kills") > 0)
		{
			document.getElementById("combat-map-fight-marker-boss-" + _0x480A).src = "images/bossMarkerCompleted.gif";
			_0x5942 = "<img src=\'images/" + _0x480A + "_monster_idle_0.png\' class=\'img-50\' /> Defeated " + "<img src=\'images/check.png\' class=\'img-20\' />"
		}
	};
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-boss-" + _0x480A, "", getItemName(_0x480A).toUpperCase() + " <span style=\'color:grey\'>(BOSS)</span><br /><span style=\'color:brown;font-size:8pt\'><b>Weakness:</b> Fire</span>", _0x5942);
	_0x480A = "piranhas";
	if (getItem(_0x480A + "Kills") == 0)
	{
		_0x5942 = "<center><img src=\'images/energy.png\' class=\'img-30\' /> " + formatNumber(getEnergyReduction(25000)) + "</center><br /><img src=\'images/" + _0x480A + "Monster_black.png\' class=\'img-50\' /> Defeated " + "<img src=\'images/x.png\' class=\'img-20\' />"
	}
	else
	{
		if (getItem(_0x480A + "Kills") > 0)
		{
			document.getElementById("combat-map-fight-marker-boss-" + _0x480A).src = "images/bossMarkerCompletedMany.gif";
			_0x5942 = "<img src=\'images/" + _0x480A + "_monster_idle_0.png\' class=\'img-50\' /> Defeated " + "<img src=\'images/check.png\' class=\'img-20\' />"
		}
	};
	_0x3AAC += generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-boss-" + _0x480A, "", getItemName(_0x480A).toUpperCase() + " <span style=\'color:grey\'>(BOSS)</span><br /><span style=\'color:brown;font-size:8pt\'><b>Weakness:</b> None</span>", _0x5942);
	document.getElementById("dynamic-tooltips-area").innerHTML = _0x3AAC
}

function getTooltipSellsForLabel(_0x47D0)
{
	if (global_itemPriceMap[_0x47D0] != null)
	{
		return "<br /><br /><div class=\'sell-tooltip-container\'><img src=\'images/shop_black.png\' class=\'img-20\' /> <b>Sells for:</b> <img src=\'images/coins.png\' class=\'img-20\' /> " + formatNumber(global_itemPriceMap[_0x47D0].price) + "</div>"
	};
	return ""
}

function generateHTMLGeneralTooltip(_0x4178, _0x518E, _0x3A8F, _0x384B)
{
	var _0x3AAC = "";
	_0x3AAC += "<div id=\'" + _0x4178 + "\' style=\'display:none;\'>";
	_0x3AAC += "<h2>" + _0x3A8F + "</h2>";
	_0x3AAC += "<hr class=\'hr-thin\' />";
	_0x3AAC += _0x384B;
	_0x3AAC += getTooltipSellsForLabel(_0x518E);
	_0x3AAC += "</div>";
	return _0x3AAC
}

function openFurnaceDialogue(_0x51C8)
{
	document.getElementById("dialogue-furnace-selectOre").innerHTML = "";
	var _0x41B2 = "";
	if (getItem("researcherCrafting") >= 1)
	{
		_0x41B2 += generateHTMLToSelectOreFurnace(_0x51C8, "sand")
	};
	_0x41B2 += generateHTMLToSelectOreFurnace(_0x51C8, "copper");
	_0x41B2 += generateHTMLToSelectOreFurnace(_0x51C8, "iron");
	_0x41B2 += generateHTMLToSelectOreFurnace(_0x51C8, "silver");
	_0x41B2 += generateHTMLToSelectOreFurnace(_0x51C8, "gold");
	_0x41B2 += generateHTMLToSelectOreFurnace(_0x51C8, "promethium");
	_0x41B2 += generateHTMLToSelectOreFurnace(_0x51C8, "titanium");
	document.getElementById("dialogue-furnace-selectOre").innerHTML = _0x41B2;
	document.getElementById("dialogue-furnace-buttons-area").innerHTML = "<br /><div onclick=\'closeDialogue(\"dialogue-furnace\")\' class=\'dialogue-button\'>Close</div>";
	openDialogueOverride("dialogue-furnace", "large")
}

function isNull(_0x444D)
{
	if (_0x444D === undefined || variable === null)
	{
		return true
	};
	return false
}

function isInt(_0x3811)
{
	return !isNaN(_0x3811) && parseInt(Number(_0x3811)) == _0x3811 && !isNaN(parseInt(_0x3811, 10))
}
var global_tracker_furnaceDialgoue_furnace = "";
var global_tracker_furnaceDialgoue_ore = "";

function openFurnaceDialogue2(_0x51C8, _0x3B03)
{
	global_tracker_furnaceDialgoue_furnace = _0x51C8;
	global_tracker_furnaceDialgoue_ore = _0x3B03;
	document.getElementById("dialogue-furnace-enterOre").innerHTML = "";
	var _0x41B2 = "";
	_0x41B2 += "<div class=\'dialogue-furnace-enterOre\'>";
	_0x41B2 += "<table width=\'90%\'>";
	_0x41B2 += "<tr>";
	_0x41B2 += "<td>";
	_0x41B2 += "<img src=\'images/" + _0x51C8 + ".png\' class=\'img-100\' /> ";
	_0x41B2 += "<img src=\'images/" + _0x3B03 + ".png\' class=\'img-100\' /> ";
	_0x41B2 += "</td>";
	_0x41B2 += "<td>";
	_0x41B2 += "<input type=\'text\' id=\'dialogue-furnace-smelt-amount\' class=\'enter-amount-text\' onkeyup=\'furnaceDialogueValueOnKeyUp(this.value)\' placeholder=\'amount\' />";
	_0x41B2 += "</td>";
	_0x41B2 += "</tr>";
	_0x41B2 += "</table>";
	_0x41B2 += "</div>";
	document.getElementById("dialogue-furnace-enterOre").innerHTML = _0x41B2;
	document.getElementById("dialogue-furnace-selectOre").innerHTML = "";
	document.getElementById("dialogue-furnace-buttons-area").innerHTML = "<br /><table width=\'80%\'><tr><td><div onclick=\'closeDialogue(\"dialogue-furnace\")\' class=\'dialogue-button\'>Close</div></td><td><div onclick=\'closeDialogue(\"dialogue-furnace\");smelt(\"" + _0x3B03 + "\", document.getElementById(\"dialogue-furnace-smelt-amount\").value)\' style=\'background-color:#b3ffff\' class=\'dialogue-button\'>Smelt</div></td></tr></table>";
	setMaxOreThatCanSmelt(_0x3B03, _0x51C8);
	furnaceDialogueValueOnKeyUp(document.getElementById("dialogue-furnace-smelt-amount").value)
}

function smelt(_0x3B03, _0x446A)
{
	sendBytes("SMELT=" + _0x3B03 + "~" + _0x446A)
}

function setMaxOreThatCanSmelt(_0x3B03, _0x51C8)
{
	var _0x770D = getItem(_0x3B03);
	if (getItem(_0x3B03) >= getItem("furnaceCapacity"))
	{
		_0x770D = getItem("furnaceCapacity")
	};
	if (_0x3B03 == "titanium")
	{
		var _0x76F0 = _0x770D * getCharcoalCost(_0x3B03);
		if (getItem("charcoal") < _0x76F0)
		{
			_0x770D = getItem("charcoal") / getCharcoalCost(_0x3B03)
		}
	}
	else
	{
		var _0x772A = _0x770D * getOilCost(_0x3B03);
		if (getItem("oil") < _0x772A)
		{
			_0x770D = getItem("oil") / getOilCost(_0x3B03)
		}
	};
	document.getElementById("dialogue-furnace-smelt-amount").value = parseInt(_0x770D)
}

function furnaceDialogueValueOnKeyUp(_0x444D)
{
	document.getElementById("dialogue-furnace-htmlBoxes").innerHTML = "";
	if (isInt(_0x444D))
	{
		if (_0x444D > 0)
		{
			itemNameArray = [];
			itemAmountRequiredArray = [];
			displayNameArray = [];
			itemNameArray[0] = global_tracker_furnaceDialgoue_ore;
			itemAmountRequiredArray[0] = _0x444D;
			displayNameArray[0] = "";
			if (global_tracker_furnaceDialgoue_ore == "titanium")
			{
				itemNameArray[1] = "charcoal";
				itemAmountRequiredArray[1] = getCharcoalCost(global_tracker_furnaceDialgoue_ore) * _0x444D;
				displayNameArray[1] = ""
			}
			else
			{
				itemNameArray[1] = "oil";
				itemAmountRequiredArray[1] = getOilCost(global_tracker_furnaceDialgoue_ore) * _0x444D;
				displayNameArray[1] = ""
			};
			document.getElementById("dialogue-furnace-htmlBoxes").innerHTML = createHTMLBoxCheckOrXCollection(itemNameArray, itemAmountRequiredArray, displayNameArray)
		}
	}
}

function createHTMLBoxCheckOrXCollection(_0x4DEE, _0x4DD1, _0x4DB4)
{
	var _0x41B2 = "";
	_0x41B2 += "<div>";
	for (var _0x3607 = 0; _0x3607 < _0x4DEE.length; _0x3607++)
	{
		_0x41B2 += createHTMLBoxCheckOrX(_0x4DEE[_0x3607], _0x4DD1[_0x3607], _0x4DB4[_0x3607])
	};
	_0x41B2 += "</div>";
	return _0x41B2
}

function createHTMLBoxCheckOrX(_0x3933, _0x4D97, _0x4D5D)
{
	var _0x4D40 = "html-box-check-or-x";
	var _0x4D7A = "<img src=\'images/x.png\' class=\'img-30\' />";
	if (getItem(_0x3933) >= _0x4D97)
	{
		_0x4D7A = "<img src=\'images/check.png\' class=\'img-30\' />";
		_0x4D40 = "html-box-check-or-check"
	};
	var _0x41B2 = "";
	_0x41B2 += "<div class=" + _0x4D40 + ">";
	_0x41B2 += "<img src=\'images/" + _0x3933 + ".png\' class=\'img-50\' /> " + formatNumber(_0x4D97) + " " + _0x4D5D + _0x4D7A;
	_0x41B2 += "</div>";
	return _0x41B2
}

function generateHTMLToSelectOreFurnace(_0x51C8, _0x3B03)
{
	if (getItem(_0x3B03) == 0 && !(_0x3B03 == "copper"))
	{
		return ""
	};
	var _0x51E5 = getOilCost(_0x3B03);
	var _0x51AB = "images/oil_lighter.png";
	if (_0x51E5 == 0)
	{
		_0x51E5 = getCharcoalCost(_0x3B03);
		_0x51AB = "images/charcoal_light.png"
	};
	document.getElementById("dialogue-furnace-enterOre").innerHTML = "";
	document.getElementById("dialogue-furnace-htmlBoxes").innerHTML = "";
	var _0x41B2 = "";
	_0x41B2 += "<div onclick=\'openFurnaceDialogue2(\"" + _0x51C8 + "\",\"" + _0x3B03 + "\")\' class=\'select-ore-furnace\'>" + getItemName(_0x3B03).toUpperCase() + "<br />";
	_0x41B2 += "<img src=\'images/" + _0x3B03 + ".png\' class=\'img-100\' />";
	_0x41B2 += "<hr class=\'hr-thin\' />";
	_0x41B2 += "<img src=\'" + _0x51AB + "\' class=\'img-30\' /> " + _0x51E5;
	_0x41B2 += "</div>";
	return _0x41B2
}

function lootDialogue(_0x3746)
{
	var _0x3763 = _0x3746.split("~");
	var _0x3A8F = _0x3763[0];
	var _0x5D73 = _0x3763[1];
	var _0x3AAC = "<h1 style=\'text-align:center;\'>" + _0x3A8F + "</h1>";
	for (var _0x3607 = 1; _0x3607 < _0x3763.length - 1; _0x3607++)
	{
		var _0x5D90 = _0x3763[_0x3607];
		_0x3607++;
		var _0x5DAD = _0x3763[_0x3607];
		_0x3607++;
		var _0x5D39 = _0x3763[_0x3607];
		_0x3607++;
		var _0x370C = _0x3763[_0x3607];
		_0x3AAC += "<span class=\'loot-span\' style=\'background-color:" + _0x5D39 + ";border:1px solid " + _0x370C + "\'><img src=\'" + _0x5D90 + "\' class=\'img-50\' /> " + _0x5DAD + "</span>"
	};
	var _0x5D56 = _0x3763[_0x3763.length - 1];
	if (_0x5D56 == "none")
	{
		_0x5D56 = ""
	};
	confirmDialogue("none", _0x3AAC, "Collect", "", _0x5D56)
}

function getLevel(_0x5446, _0x5429)
{
	if (_0x5446 == 0)
	{
		return 1
	};
	var _0x540C = 100;
	if (_0x5429)
	{
		_0x540C = 1000
	};
	for (var _0x3607 = 1; _0x3607 <= _0x540C; _0x3607++)
	{
		var _0x5463 = 3 + (_0x3607 / 200);
		var _0x40AD = Math.pow(_0x3607, _0x5463);
		if (_0x5446 < _0x40AD)
		{
			return _0x3607 - 1
		}
	};
	return _0x540C
}

function getXpNeeded(_0x3F8B)
{
	return parseInt(Math.pow(_0x3F8B, 3 + (_0x3F8B / 200)))
}

function getNextLevelXpNeeded(_0x3EFA)
{
	return getXpNeeded(parseInt(getLevel(getItem(_0x3EFA + "Xp"))) + 1)
}

function getGlobalLevel()
{
	var _0x46AE = 0;
	var _0x473F = "";
	_0x473F = "combat";
	if (getItem(_0x473F + "Unlocked") == 1)
	{
		_0x46AE += getLevel(getItem(_0x473F + "Xp"))
	};
	_0x473F = "magic";
	if (getItem(_0x473F + "Unlocked") == 1)
	{
		_0x46AE += getLevel(getItem(_0x473F + "Xp"))
	};
	_0x473F = "crafting";
	if (getItem(_0x473F + "Unlocked") == 1)
	{
		_0x46AE += getLevel(getItem(_0x473F + "Xp"))
	};
	_0x473F = "brewing";
	if (getItem(_0x473F + "Unlocked") == 1)
	{
		_0x46AE += getLevel(getItem(_0x473F + "Xp"))
	};
	_0x473F = "woodcutting";
	if (getItem(_0x473F + "Unlocked") == 1)
	{
		_0x46AE += getLevel(getItem(_0x473F + "Xp"))
	};
	_0x473F = "cooking";
	if (getItem(_0x473F + "Unlocked") == 1)
	{
		_0x46AE += getLevel(getItem(_0x473F + "Xp"))
	};
	_0x473F = "farming";
	if (getItem(_0x473F + "Unlocked") == 1)
	{
		_0x46AE += getLevel(getItem(_0x473F + "Xp"))
	};
	_0x473F = "fishing";
	if (getItem(_0x473F + "Unlocked") == 1)
	{
		_0x46AE += getLevel(getItem(_0x473F + "Xp"))
	};
	_0x473F = "mining";
	if (getItem(_0x473F + "Unlocked") == 1)
	{
		_0x46AE += getLevel(getItem(_0x473F + "Xp"))
	};
	return _0x46AE
}

function refreshTopSkillBar(_0x7333)
{
	var _0x473F = "";
	var _0x7316 = 0.0;
	var _0x5B2F = "";
	document.getElementById("span-topBar-globalLevel").innerHTML = "Level " + getGlobalLevel();
	_0x473F = "combat";
	_0x5B2F = getLevel(getItem(_0x473F + "Xp"));
	document.getElementById("span-topBar-" + _0x473F + "Level").innerHTML = _0x5B2F;
	_0x7316 = (getItem(_0x473F + "Xp") - getXpNeeded(getLevel(getItem(_0x473F + "Xp")))) / (getXpNeeded(1 + getLevel(getItem(_0x473F + "Xp"))) - getXpNeeded(getLevel(getItem(_0x473F + "Xp"))));
	if (_0x7316 > 1)
	{
		_0x7316 = 1
	};
	document.getElementById("xp-bar-" + _0x473F + "-inner").style.width = parseInt(_0x7316 * 100) + "%";
	if (_0x5B2F >= 100)
	{
		document.getElementById("xp-bar-" + _0x473F + "-inner").style.backgroundColor = "#00ace6"
	};
	_0x473F = "magic";
	_0x5B2F = getLevel(getItem(_0x473F + "Xp"));
	document.getElementById("span-topBar-" + _0x473F + "Level").innerHTML = _0x5B2F;
	_0x7316 = (getItem(_0x473F + "Xp") - getXpNeeded(getLevel(getItem(_0x473F + "Xp")))) / (getXpNeeded(1 + getLevel(getItem(_0x473F + "Xp"))) - getXpNeeded(getLevel(getItem(_0x473F + "Xp"))));
	if (_0x7316 > 1)
	{
		_0x7316 = 1
	};
	document.getElementById("xp-bar-" + _0x473F + "-inner").style.width = parseInt(_0x7316 * 100) + "%";
	if (_0x5B2F >= 100)
	{
		document.getElementById("xp-bar-" + _0x473F + "-inner").style.backgroundColor = "#00ace6"
	};
	_0x473F = "mining";
	_0x5B2F = getLevel(getItem(_0x473F + "Xp"));
	document.getElementById("span-topBar-" + _0x473F + "Level").innerHTML = _0x5B2F;
	_0x7316 = (getItem(_0x473F + "Xp") - getXpNeeded(getLevel(getItem(_0x473F + "Xp")))) / (getXpNeeded(1 + getLevel(getItem(_0x473F + "Xp"))) - getXpNeeded(getLevel(getItem(_0x473F + "Xp"))));
	if (_0x7316 > 1)
	{
		_0x7316 = 1
	};
	document.getElementById("xp-bar-" + _0x473F + "-inner").style.width = parseInt(_0x7316 * 100) + "%";
	if (_0x5B2F >= 100)
	{
		document.getElementById("xp-bar-" + _0x473F + "-inner").style.backgroundColor = "#00ace6"
	};
	_0x473F = "crafting";
	_0x5B2F = getLevel(getItem(_0x473F + "Xp"));
	document.getElementById("span-topBar-" + _0x473F + "Level").innerHTML = _0x5B2F;
	_0x7316 = (getItem(_0x473F + "Xp") - getXpNeeded(getLevel(getItem(_0x473F + "Xp")))) / (getXpNeeded(1 + getLevel(getItem(_0x473F + "Xp"))) - getXpNeeded(getLevel(getItem(_0x473F + "Xp"))));
	if (_0x7316 > 1)
	{
		_0x7316 = 1
	};
	document.getElementById("xp-bar-" + _0x473F + "-inner").style.width = parseInt(_0x7316 * 100) + "%";
	if (_0x5B2F >= 100)
	{
		document.getElementById("xp-bar-" + _0x473F + "-inner").style.backgroundColor = "#00ace6"
	};
	_0x473F = "woodcutting";
	_0x5B2F = getLevel(getItem(_0x473F + "Xp"));
	document.getElementById("span-topBar-" + _0x473F + "Level").innerHTML = _0x5B2F;
	_0x7316 = (getItem(_0x473F + "Xp") - getXpNeeded(getLevel(getItem(_0x473F + "Xp")))) / (getXpNeeded(1 + getLevel(getItem(_0x473F + "Xp"))) - getXpNeeded(getLevel(getItem(_0x473F + "Xp"))));
	if (_0x7316 > 1)
	{
		_0x7316 = 1
	};
	document.getElementById("xp-bar-" + _0x473F + "-inner").style.width = parseInt(_0x7316 * 100) + "%";
	if (_0x5B2F >= 100)
	{
		document.getElementById("xp-bar-" + _0x473F + "-inner").style.backgroundColor = "#00ace6";
		document.getElementById("xp-bar-" + _0x473F + "-inner").style.width = "100" + "%"
	};
	_0x473F = "farming";
	_0x5B2F = getLevel(getItem(_0x473F + "Xp"));
	document.getElementById("span-topBar-" + _0x473F + "Level").innerHTML = _0x5B2F;
	_0x7316 = (getItem(_0x473F + "Xp") - getXpNeeded(getLevel(getItem(_0x473F + "Xp")))) / (getXpNeeded(1 + getLevel(getItem(_0x473F + "Xp"))) - getXpNeeded(getLevel(getItem(_0x473F + "Xp"))));
	if (_0x7316 > 1)
	{
		_0x7316 = 1
	};
	document.getElementById("xp-bar-" + _0x473F + "-inner").style.width = parseInt(_0x7316 * 100) + "%";
	if (_0x5B2F >= 100)
	{
		document.getElementById("xp-bar-" + _0x473F + "-inner").style.backgroundColor = "#00ace6"
	};
	_0x473F = "brewing";
	_0x5B2F = getLevel(getItem(_0x473F + "Xp"));
	document.getElementById("span-topBar-" + _0x473F + "Level").innerHTML = _0x5B2F;
	_0x7316 = (getItem(_0x473F + "Xp") - getXpNeeded(getLevel(getItem(_0x473F + "Xp")))) / (getXpNeeded(1 + getLevel(getItem(_0x473F + "Xp"))) - getXpNeeded(getLevel(getItem(_0x473F + "Xp"))));
	if (_0x7316 > 1)
	{
		_0x7316 = 1
	};
	document.getElementById("xp-bar-" + _0x473F + "-inner").style.width = parseInt(_0x7316 * 100) + "%";
	if (_0x5B2F >= 100)
	{
		document.getElementById("xp-bar-" + _0x473F + "-inner").style.backgroundColor = "#00ace6"
	};
	_0x473F = "fishing";
	_0x5B2F = getLevel(getItem(_0x473F + "Xp"));
	document.getElementById("span-topBar-" + _0x473F + "Level").innerHTML = _0x5B2F;
	_0x7316 = (getItem(_0x473F + "Xp") - getXpNeeded(getLevel(getItem(_0x473F + "Xp")))) / (getXpNeeded(1 + getLevel(getItem(_0x473F + "Xp"))) - getXpNeeded(getLevel(getItem(_0x473F + "Xp"))));
	if (_0x7316 > 1)
	{
		_0x7316 = 1
	};
	document.getElementById("xp-bar-" + _0x473F + "-inner").style.minWidth = parseInt(_0x7316 * 100) + "%";
	if (_0x5B2F >= 100)
	{
		document.getElementById("xp-bar-" + _0x473F + "-inner").style.backgroundColor = "#00ace6"
	};
	_0x473F = "cooking";
	_0x5B2F = getLevel(getItem(_0x473F + "Xp"));
	document.getElementById("span-topBar-" + _0x473F + "Level").innerHTML = _0x5B2F;
	_0x7316 = (getItem(_0x473F + "Xp") - getXpNeeded(getLevel(getItem(_0x473F + "Xp")))) / (getXpNeeded(1 + getLevel(getItem(_0x473F + "Xp"))) - getXpNeeded(getLevel(getItem(_0x473F + "Xp"))));
	if (_0x7316 > 1)
	{
		_0x7316 = 1
	};
	document.getElementById("xp-bar-" + _0x473F + "-inner").style.minWidth = parseInt(_0x7316 * 100) + "%";
	if (_0x5B2F >= 100)
	{
		document.getElementById("xp-bar-" + _0x473F + "-inner").style.backgroundColor = "#00ace6"
	}
}

function getSkillBackgroundColor(_0x3EFA)
{
	switch (_0x3EFA)
	{
	case "combat":
		return "#e6ac00";
		break
	}
}
var global_inLevelUpAnimationFlag = false;

function levelUp(_0x3EFA, _0x5B2F)
{
	document.getElementById("top-bar-skills").style.display = "none";
	document.getElementById("top-bar-level-up").style.display = "";
	document.getElementById("top-bar-level-up").style.backgroundColor = getSkillBackgroundColor(_0x3EFA);
	document.getElementById("level-up-msg-area-td").innerHTML = "<img src=\'images/" + _0x3EFA + "Skill.png\' class=\'img-50\' /> " + "<b>LEVEL UP: </b>" + _0x5B2F + " <img src=\'images/" + _0x3EFA + "Skill.png\' class=\'img-50\' />";
	if (!global_inLevelUpAnimationFlag)
	{
		global_inLevelUpAnimationFlag = true;
		for (var _0x3607 = 0; _0x3607 < 10; _0x3607++)
		{
			if (_0x3607 % 2 == 0)
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

function getEnergyRequired(_0x4827)
{
	var _0x4FDB = 0;
	switch (_0x4827)
	{
	case "fields":
		_0x4FDB = 50;
		break;
	case "forest":
		_0x4FDB = 200;
		break
	};
	return _0x4FDB
}

function getAreaCooldown(_0x4827)
{
	var _0x5202 = 0;
	switch (_0x4827)
	{
	case "fields":
		_0x5202 = 3600 / 4;
		break;
	case "forest":
		_0x5202 = 3600 / 2;
		break
	};
	return _0x5202
}

function getEncountersImgArrayForAreaareaChosen(_0x4827)
{
	_0x4827 = _0x4827.toLowerCase();
	var _0x52EA = [];
	var _0x473F = "";
	switch (_0x4827)
	{
	case "fields":
		var _0x5341 = false;
		var _0x5307 = [];
		_0x473F = "chicken";
		_0x52EA.push(_0x473F);
		if (getItem(_0x473F + "Kills") >= 100)
		{
			_0x52EA.push("images/" + _0x473F + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x473F + "Kills") >= 30)
			{
				_0x52EA.push("images/" + _0x473F + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x473F + "Kills") >= 1)
				{
					_0x52EA.push("images/" + _0x473F + "Monster_green.png")
				}
				else
				{
					_0x52EA.push("images/" + _0x473F + "Monster_black.png")
				}
			}
		};
		_0x5307[0] = getItem(_0x473F + "Kills");
		_0x473F = "rat";
		_0x52EA.push(_0x473F);
		if (getItem(_0x473F + "Kills") >= 100)
		{
			_0x52EA.push("images/" + _0x473F + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x473F + "Kills") >= 30)
			{
				_0x52EA.push("images/" + _0x473F + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x473F + "Kills") >= 1)
				{
					_0x52EA.push("images/" + _0x473F + "Monster_green.png")
				}
				else
				{
					_0x52EA.push("images/" + _0x473F + "Monster_black.png")
				}
			}
		};
		_0x5307[1] = getItem(_0x473F + "Kills");
		_0x473F = "bee";
		_0x52EA.push(_0x473F);
		if (getItem(_0x473F + "Kills") >= 100)
		{
			_0x52EA.push("images/" + _0x473F + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x473F + "Kills") >= 30)
			{
				_0x52EA.push("images/" + _0x473F + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x473F + "Kills") >= 1)
				{
					_0x52EA.push("images/" + _0x473F + "Monster_green.png")
				}
				else
				{
					_0x52EA.push("images/" + _0x473F + "Monster_black.png")
				}
			}
		};
		_0x5307[2] = getItem(_0x473F + "Kills");
		var _0x5324 = "images/redFightMarker.gif";
		if (Math.min.apply(null, _0x5307) >= 100)
		{
			_0x5324 = "images/blueFightMarker.gif"
		}
		else
		{
			if (Math.min.apply(null, _0x5307) >= 1)
			{
				_0x5324 = "images/greenFightMarker.gif"
			}
			else
			{
				for (var _0x3607 = 0; _0x3607 < _0x5307.length; _0x3607++)
				{
					if (_0x5307[0] > 0)
					{
						_0x5324 = "images/yellowFightMarker.gif";
						break
					}
				}
			}
		};
		_0x52EA.push(_0x5324);
		break;
	case "forest":
		var _0x5341 = false;
		var _0x5307 = [];
		_0x473F = "snake";
		_0x52EA.push(_0x473F);
		if (getItem(_0x473F + "Kills") >= 100)
		{
			_0x52EA.push("images/" + _0x473F + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x473F + "Kills") >= 30)
			{
				_0x52EA.push("images/" + _0x473F + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x473F + "Kills") >= 1)
				{
					_0x52EA.push("images/" + _0x473F + "Monster_green.png")
				}
				else
				{
					_0x52EA.push("images/" + _0x473F + "Monster_black.png")
				}
			}
		};
		_0x5307[0] = getItem(_0x473F + "Kills");
		_0x473F = "ent";
		_0x52EA.push(_0x473F);
		if (getItem(_0x473F + "Kills") >= 100)
		{
			_0x52EA.push("images/" + _0x473F + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x473F + "Kills") >= 30)
			{
				_0x52EA.push("images/" + _0x473F + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x473F + "Kills") >= 1)
				{
					_0x52EA.push("images/" + _0x473F + "Monster_green.png")
				}
				else
				{
					_0x52EA.push("images/" + _0x473F + "Monster_black.png")
				}
			}
		};
		_0x5307[1] = getItem(_0x473F + "Kills");
		_0x473F = "thief";
		_0x52EA.push(_0x473F);
		if (getItem(_0x473F + "Kills") >= 100)
		{
			_0x52EA.push("images/" + _0x473F + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x473F + "Kills") >= 30)
			{
				_0x52EA.push("images/" + _0x473F + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x473F + "Kills") >= 1)
				{
					_0x52EA.push("images/" + _0x473F + "Monster_green.png")
				}
				else
				{
					_0x52EA.push("images/" + _0x473F + "Monster_black.png")
				}
			}
		};
		_0x5307[2] = getItem(_0x473F + "Kills");
		var _0x5324 = "images/redFightMarker.gif";
		if (Math.min.apply(null, _0x5307) >= 100)
		{
			_0x5324 = "images/blueFightMarker.gif"
		}
		else
		{
			if (Math.min.apply(null, _0x5307) >= 1)
			{
				_0x5324 = "images/greenFightMarker.gif"
			}
			else
			{
				for (var _0x3607 = 0; _0x3607 < _0x5307.length; _0x3607++)
				{
					if (_0x5307[0] > 0)
					{
						_0x5324 = "images/yellowFightMarker.gif";
						break
					}
				}
			}
		};
		_0x52EA.push(_0x5324);
		break;
	case "caves":
		var _0x5341 = false;
		var _0x5307 = [];
		_0x473F = "bear";
		_0x52EA.push(_0x473F);
		if (getItem(_0x473F + "Kills") >= 100)
		{
			_0x52EA.push("images/" + _0x473F + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x473F + "Kills") >= 30)
			{
				_0x52EA.push("images/" + _0x473F + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x473F + "Kills") >= 1)
				{
					_0x52EA.push("images/" + _0x473F + "Monster_green.png")
				}
				else
				{
					_0x52EA.push("images/" + _0x473F + "Monster_black.png")
				}
			}
		};
		_0x5307[0] = getItem(_0x473F + "Kills");
		_0x473F = "spider";
		_0x52EA.push(_0x473F);
		if (getItem(_0x473F + "Kills") >= 100)
		{
			_0x52EA.push("images/" + _0x473F + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x473F + "Kills") >= 30)
			{
				_0x52EA.push("images/" + _0x473F + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x473F + "Kills") >= 1)
				{
					_0x52EA.push("images/" + _0x473F + "Monster_green.png")
				}
				else
				{
					_0x52EA.push("images/" + _0x473F + "Monster_black.png")
				}
			}
		};
		_0x5307[1] = getItem(_0x473F + "Kills");
		_0x473F = "skeleton";
		_0x52EA.push(_0x473F);
		if (getItem(_0x473F + "Kills") >= 100)
		{
			_0x52EA.push("images/" + _0x473F + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x473F + "Kills") >= 30)
			{
				_0x52EA.push("images/" + _0x473F + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x473F + "Kills") >= 1)
				{
					_0x52EA.push("images/" + _0x473F + "Monster_green.png")
				}
				else
				{
					_0x52EA.push("images/" + _0x473F + "Monster_black.png")
				}
			}
		};
		_0x5307[2] = getItem(_0x473F + "Kills");
		var _0x5324 = "images/redFightMarker.gif";
		if (Math.min.apply(null, _0x5307) >= 100)
		{
			_0x5324 = "images/blueFightMarker.gif"
		}
		else
		{
			if (Math.min.apply(null, _0x5307) >= 1)
			{
				_0x5324 = "images/greenFightMarker.gif"
			}
			else
			{
				for (var _0x3607 = 0; _0x3607 < _0x5307.length; _0x3607++)
				{
					if (_0x5307[0] > 0)
					{
						_0x5324 = "images/yellowFightMarker.gif";
						break
					}
				}
			}
		};
		_0x52EA.push(_0x5324);
		break;
	case "lavadungeon":
		var _0x5341 = false;
		var _0x5307 = [];
		_0x473F = "lavaAlien";
		_0x52EA.push(_0x473F);
		if (getItem(_0x473F + "Kills") >= 100)
		{
			_0x52EA.push("images/" + _0x473F + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x473F + "Kills") >= 30)
			{
				_0x52EA.push("images/" + _0x473F + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x473F + "Kills") >= 1)
				{
					_0x52EA.push("images/" + _0x473F + "Monster_green.png")
				}
				else
				{
					_0x52EA.push("images/" + _0x473F + "Monster_black.png")
				}
			}
		};
		_0x5307[0] = getItem(_0x473F + "Kills");
		_0x473F = "bat";
		_0x52EA.push(_0x473F);
		if (getItem(_0x473F + "Kills") >= 100)
		{
			_0x52EA.push("images/" + _0x473F + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x473F + "Kills") >= 30)
			{
				_0x52EA.push("images/" + _0x473F + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x473F + "Kills") >= 1)
				{
					_0x52EA.push("images/" + _0x473F + "Monster_green.png")
				}
				else
				{
					_0x52EA.push("images/" + _0x473F + "Monster_black.png")
				}
			}
		};
		_0x5307[1] = getItem(_0x473F + "Kills");
		_0x473F = "fireMage";
		_0x52EA.push(_0x473F);
		if (getItem(_0x473F + "Kills") >= 100)
		{
			_0x52EA.push("images/" + _0x473F + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x473F + "Kills") >= 30)
			{
				_0x52EA.push("images/" + _0x473F + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x473F + "Kills") >= 1)
				{
					_0x52EA.push("images/" + _0x473F + "Monster_green.png")
				}
				else
				{
					_0x52EA.push("images/" + _0x473F + "Monster_black.png")
				}
			}
		};
		_0x5307[2] = getItem(_0x473F + "Kills");
		var _0x5324 = "images/redFightMarker.gif";
		if (Math.min.apply(null, _0x5307) >= 100)
		{
			_0x5324 = "images/blueFightMarker.gif"
		}
		else
		{
			if (Math.min.apply(null, _0x5307) >= 1)
			{
				_0x5324 = "images/greenFightMarker.gif"
			}
			else
			{
				for (var _0x3607 = 0; _0x3607 < _0x5307.length; _0x3607++)
				{
					if (_0x5307[0] > 0)
					{
						_0x5324 = "images/yellowFightMarker.gif";
						break
					}
				}
			}
		};
		_0x52EA.push(_0x5324);
		break;
	case "northernfields":
		var _0x5341 = false;
		var _0x5307 = [];
		_0x473F = "boneHead";
		_0x52EA.push(_0x473F);
		if (getItem(_0x473F + "Kills") >= 100)
		{
			_0x52EA.push("images/" + _0x473F + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x473F + "Kills") >= 30)
			{
				_0x52EA.push("images/" + _0x473F + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x473F + "Kills") >= 1)
				{
					_0x52EA.push("images/" + _0x473F + "Monster_green.png")
				}
				else
				{
					_0x52EA.push("images/" + _0x473F + "Monster_black.png")
				}
			}
		};
		_0x5307[0] = getItem(_0x473F + "Kills");
		_0x473F = "mammaPolarBear";
		_0x52EA.push(_0x473F);
		if (getItem(_0x473F + "Kills") >= 100)
		{
			_0x52EA.push("images/" + _0x473F + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x473F + "Kills") >= 30)
			{
				_0x52EA.push("images/" + _0x473F + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x473F + "Kills") >= 1)
				{
					_0x52EA.push("images/" + _0x473F + "Monster_green.png")
				}
				else
				{
					_0x52EA.push("images/" + _0x473F + "Monster_black.png")
				}
			}
		};
		_0x5307[1] = getItem(_0x473F + "Kills");
		_0x473F = "yeti";
		_0x52EA.push(_0x473F);
		if (getItem(_0x473F + "Kills") >= 100)
		{
			_0x52EA.push("images/" + _0x473F + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x473F + "Kills") >= 30)
			{
				_0x52EA.push("images/" + _0x473F + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x473F + "Kills") >= 1)
				{
					_0x52EA.push("images/" + _0x473F + "Monster_green.png")
				}
				else
				{
					_0x52EA.push("images/" + _0x473F + "Monster_black.png")
				}
			}
		};
		_0x5307[2] = getItem(_0x473F + "Kills");
		var _0x5324 = "images/redFightMarker.gif";
		if (Math.min.apply(null, _0x5307) >= 100)
		{
			_0x5324 = "images/blueFightMarker.gif"
		}
		else
		{
			if (Math.min.apply(null, _0x5307) >= 1)
			{
				_0x5324 = "images/greenFightMarker.gif"
			}
			else
			{
				for (var _0x3607 = 0; _0x3607 < _0x5307.length; _0x3607++)
				{
					if (_0x5307[0] > 0)
					{
						_0x5324 = "images/yellowFightMarker.gif";
						break
					}
				}
			}
		};
		_0x52EA.push(_0x5324);
		break;
	case "cemetery":
		var _0x5341 = false;
		var _0x5307 = [];
		_0x473F = "ghost";
		_0x52EA.push(_0x473F);
		if (getItem(_0x473F + "Kills") >= 100)
		{
			_0x52EA.push("images/" + _0x473F + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x473F + "Kills") >= 30)
			{
				_0x52EA.push("images/" + _0x473F + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x473F + "Kills") >= 1)
				{
					_0x52EA.push("images/" + _0x473F + "Monster_green.png")
				}
				else
				{
					_0x52EA.push("images/" + _0x473F + "Monster_black.png")
				}
			}
		};
		_0x5307[0] = getItem(_0x473F + "Kills");
		_0x473F = "skeletonGhost";
		_0x52EA.push(_0x473F);
		if (getItem(_0x473F + "Kills") >= 100)
		{
			_0x52EA.push("images/" + _0x473F + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x473F + "Kills") >= 30)
			{
				_0x52EA.push("images/" + _0x473F + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x473F + "Kills") >= 1)
				{
					_0x52EA.push("images/" + _0x473F + "Monster_green.png")
				}
				else
				{
					_0x52EA.push("images/" + _0x473F + "Monster_black.png")
				}
			}
		};
		_0x5307[1] = getItem(_0x473F + "Kills");
		_0x473F = "reaper";
		_0x52EA.push(_0x473F);
		if (getItem(_0x473F + "Kills") >= 100)
		{
			_0x52EA.push("images/" + _0x473F + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x473F + "Kills") >= 30)
			{
				_0x52EA.push("images/" + _0x473F + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x473F + "Kills") >= 1)
				{
					_0x52EA.push("images/" + _0x473F + "Monster_green.png")
				}
				else
				{
					_0x52EA.push("images/" + _0x473F + "Monster_black.png")
				}
			}
		};
		_0x5307[2] = getItem(_0x473F + "Kills");
		var _0x5324 = "images/redFightMarker.gif";
		if (Math.min.apply(null, _0x5307) >= 100)
		{
			_0x5324 = "images/blueFightMarker.gif"
		}
		else
		{
			if (Math.min.apply(null, _0x5307) >= 1)
			{
				_0x5324 = "images/greenFightMarker.gif"
			}
			else
			{
				for (var _0x3607 = 0; _0x3607 < _0x5307.length; _0x3607++)
				{
					if (_0x5307[0] > 0)
					{
						_0x5324 = "images/yellowFightMarker.gif";
						break
					}
				}
			}
		};
		_0x52EA.push(_0x5324);
		break;
	case "ocean":
		var _0x5341 = false;
		var _0x5307 = [];
		_0x473F = "shark";
		_0x52EA.push(_0x473F);
		if (getItem(_0x473F + "Kills") >= 100)
		{
			_0x52EA.push("images/" + _0x473F + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x473F + "Kills") >= 30)
			{
				_0x52EA.push("images/" + _0x473F + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x473F + "Kills") >= 1)
				{
					_0x52EA.push("images/" + _0x473F + "Monster_green.png")
				}
				else
				{
					_0x52EA.push("images/" + _0x473F + "Monster_black.png")
				}
			}
		};
		_0x5307[0] = getItem(_0x473F + "Kills");
		_0x473F = "pufferFish";
		_0x52EA.push(_0x473F);
		if (getItem(_0x473F + "Kills") >= 100)
		{
			_0x52EA.push("images/" + _0x473F + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x473F + "Kills") >= 30)
			{
				_0x52EA.push("images/" + _0x473F + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x473F + "Kills") >= 1)
				{
					_0x52EA.push("images/" + _0x473F + "Monster_green.png")
				}
				else
				{
					_0x52EA.push("images/" + _0x473F + "Monster_black.png")
				}
			}
		};
		_0x5307[1] = getItem(_0x473F + "Kills");
		_0x473F = "tridentSoldier";
		_0x52EA.push(_0x473F);
		if (getItem(_0x473F + "Kills") >= 100)
		{
			_0x52EA.push("images/" + _0x473F + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x473F + "Kills") >= 30)
			{
				_0x52EA.push("images/" + _0x473F + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x473F + "Kills") >= 1)
				{
					_0x52EA.push("images/" + _0x473F + "Monster_green.png")
				}
				else
				{
					_0x52EA.push("images/" + _0x473F + "Monster_black.png")
				}
			}
		};
		_0x5307[2] = getItem(_0x473F + "Kills");
		var _0x5324 = "images/redFightMarker.gif";
		if (Math.min.apply(null, _0x5307) >= 100)
		{
			_0x5324 = "images/blueFightMarker.gif"
		}
		else
		{
			if (Math.min.apply(null, _0x5307) >= 1)
			{
				_0x5324 = "images/greenFightMarker.gif"
			}
			else
			{
				for (var _0x3607 = 0; _0x3607 < _0x5307.length; _0x3607++)
				{
					if (_0x5307[0] > 0)
					{
						_0x5324 = "images/yellowFightMarker.gif";
						break
					}
				}
			}
		};
		_0x52EA.push(_0x5324);
		break
	};
	return _0x52EA
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
	document.getElementById("navigation-area-buttons").style.display = "none"
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
	global_heroHitAnimationHashSet.forEach((_0x4F4A) => _0x4F4A.draw(100, 350))
}

function clicksFightingButton(_0x4827)
{
	$(window).scrollTop(0);
	if (getItem("giantSnakeTimer") > 0 && _0x4827 == "forest")
	{
		confirmDialogue2("images/warning.png", "There is currently a giant snake roaming the forest.  If you manage to find it, would you like to fight it?<br /><br /><span style=\'color:grey\'>The giant snake is not 100% guaranteed.</span>", "Yes, I\'m not scared!", "No, fight normal forest monsters", "Cancel", "FIGHT_WITH_GIANT_SNAKE=" + _0x4827, "FIGHT=" + _0x4827)
	}
	else
	{
		if (getItem("honey") > 0 && _0x4827 == "caves")
		{
			confirmDialogue2("images/honey.png", "Would you like to bring honey with you?<br /><br /><span style=\'color:grey\'>You will lose the honey when combat begins.</span>", "Bring 1 honey", "No, just find a fight", "Cancel", "FIGHT_WITH_ONE_HONEY=" + _0x4827, "FIGHT=" + _0x4827)
		}
		else
		{
			if (getItem("telescope") > 0 && _0x4827 == "fields")
			{
				sendBytes("FIGHT=" + _0x4827)
			}
			else
			{
				if (_0x4827 == "fields" && getItem("combatXp") == 0 && getItemString("weapon") == "weapon")
				{
					confirmDialogue("images/rustySword.png", "I should maybe equip a weapon before fighting.", "Close", "", "");
					return
				};
				openConfirmDialogueFighting(_0x4827)
			}
		}
	};
	exitCombatMap()
}

function openConfirmDialogueFighting(_0x4827)
{
	document.getElementById("dialogue-fightingMarkerDialogue-title").innerHTML = getItemName(_0x4827).toUpperCase();
	document.getElementById("dialogue-fightingMarkerDialogue-title-area").src = "images/" + _0x4827 + ".png";
	openDialogueOverride("dialogue-fightingMarkerDialogue", "large");
	document.getElementById("dialogue-fightingMarkerDialogue-areaWarning").style.display = "none";
	if (_0x4827 == "northernFields")
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
	if (_0x4827 == "ocean")
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
	var _0x64D0 = document.getElementById("dialogue-fightingMarkerDialogue-hints");
	var _0x64B3 = getEncountersImgArrayForAreaareaChosen(_0x4827);
	var _0x6544 = _0x64B3[0];
	var _0x6527 = _0x64B3[1];
	var _0x650A = getMonsterHint(_0x6544);
	var _0x660F = "";
	if (getItemString("repelMonster") == _0x6544)
	{
		_0x660F = "<br /><span style=\'color:red\'>REPELLED</b>"
	};
	var _0x659B = _0x64B3[2];
	var _0x657E = _0x64B3[3];
	var _0x6561 = getMonsterHint(_0x659B);
	var _0x662C = "";
	if (getItemString("repelMonster") == _0x659B)
	{
		_0x662C = "<br /><span style=\'color:red\'>REPELLED</b>"
	};
	var _0x65F2 = _0x64B3[4];
	var _0x65D5 = _0x64B3[5];
	var _0x65B8 = getMonsterHint(_0x65F2);
	var _0x6649 = "";
	if (getItemString("repelMonster") == _0x65F2)
	{
		_0x6649 = "<br /><span style=\'color:red\'>REPELLED</b>"
	};
	var _0x41B2 = "<center><table class=\'basic-table\' width=\'100%\'>";
	_0x41B2 += "<tr style=\'background-color:#4d4d4d\'><th>Enemy</th><th>Info and Tips</th></tr>";
	_0x41B2 += "<tr><td width=\'25%\'><img style=\'float:left;\' src=\'" + _0x6527 + "\' class=\'img-50\' />" + getItemName(_0x6544) + "<br /><span style=\'color:grey;font-size:10pt;\'>(" + getItem(_0x6544 + "Kills") + " kills)</span></td><td style=\'font-size:10pt;\'>" + _0x650A + _0x660F + "</td></tr>";
	_0x41B2 += "<tr style=\'background-color:silver\'><td width=\'25%\'><img style=\'float:left;\' src=\'" + _0x657E + "\' class=\'img-50\' />" + getItemName(_0x659B) + "<br /><span style=\'color:grey;font-size:10pt;\'>(" + getItem(_0x659B + "Kills") + " kills)</span></td><td style=\'font-size:10pt;\'>" + _0x6561 + _0x662C + "</td></tr>";
	_0x41B2 += "<tr><td width=\'25%\'><img style=\'float:left;\' src=\'" + _0x65D5 + "\' class=\'img-50\' />" + getItemName(_0x65F2) + "<br /><span style=\'color:grey;font-size:10pt;\'>(" + getItem(_0x65F2 + "Kills") + " kills)</span></td><td style=\'font-size:10pt;\'>" + _0x65B8 + _0x6649 + "</td></tr>";
	_0x41B2 += "</table></center><br />";
	_0x64D0.innerHTML = _0x41B2;
	document.getElementById("dialogue-fightingMarkerDialogue-areaWarning2").style.display = "none";
	var _0x64ED = "";
	if (getItem("heroHp") < getItem("heroMaxHp"))
	{
		_0x64ED += "<img src=\'images/warning.png\' class=\'img-20\' /> You are not full HP!<br />"
	};
	if (getItem("heroMana") < getItem("heroMaxMana"))
	{
		_0x64ED += "<img src=\'images/warning.png\' class=\'img-20\' /> Your mana is not full!<br />"
	};
	if (getItem("teleportCooldown") > 0)
	{
		_0x64ED += "<img src=\'images/teleportIcon.png\' class=\'img-20\' /> Teleport on cooldown for <b>" + formatTime(getItem("teleportCooldown")) + "</b>.<br />"
	};
	if (getItemString("arrows") == "arrows" && getItemString("weapon") == "bow")
	{
		_0x64ED += "<img src=\'images/warning.png\' class=\'img-20\' /> You don\'t have arrows equipped!<br />"
	};
	if (_0x64ED.length > 0)
	{
		document.getElementById("dialogue-fightingMarkerDialogue-areaWarning2").style.display = "";
		document.getElementById("dialogue-fightingMarkerDialogue-areaWarning2").innerHTML = _0x64ED
	};
	document.getElementById("fightingMarkerDialogue-confirm-yes").setAttribute("onclick", "closeDialogue(\'dialogue-fightingMarkerDialogue\');sendBytes(\'FIGHT=" + _0x4827 + "\')")
}

function getMonsterHint(_0x4B19)
{
	switch (_0x4B19)
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
	default:
		return "<span style=\'color:grey\'>(No hints available for this NPC)</span>"
	}
}

function clicksFightingBossButton(_0x480A)
{
	$(window).scrollTop(0);
	if (_0x480A == "fireHawk")
	{
		confirmDialogue("none", "<center><img src=\'images/bossMarker.gif\' /><br /><br />Fight this boss?<br /><br /><span style=\'color:red\'>It is extremely hot in here.</span></center>", "Fight", "Run", "FIGHT_BOSS=" + _0x480A)
	}
	else
	{
		confirmDialogue("none", "<center><img src=\'images/bossMarker.gif\' /><br /><br />Fight this boss?</center>", "Fight", "Run", "FIGHT_BOSS=" + _0x480A)
	};
	exitCombatMap()
}

function refreshCombatMapThumbnail(_0x6AB4)
{
	for (var _0x3607 = 1; _0x3607 <= 100; _0x3607++)
	{
		if (_0x3607 == 5)
		{
			continue
		};
		var _0x6AD1 = document.getElementById("div-map-" + _0x3607 + "-thumbnail");
		if (_0x6AD1 == null)
		{
			break
		};
		if (getItem("lastCombatMapHistory" + _0x3607) == 0 && _0x3607 > 1)
		{
			_0x6AD1.style.display = "none"
		}
		else
		{
			_0x6AD1.style.display = ""
		};
		_0x6AD1.style.border = "none";
		if (_0x6AB4 == _0x3607)
		{
			_0x6AD1.style.border = "3px solid green"
		}
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
		var _0x413E = this.idleAnimationObject;
		for (var _0x3607 = 0; _0x3607 < _0x413E.getNumberOfFrames(); _0x3607++)
		{
			var _0x415B = getImage("images/" + this.name + "_" + "monster" + "_" + _0x413E.name + "_" + _0x413E.framesArray[_0x3607] + ".png", this.name + "_" + _0x3607 + "_" + _0x413E);
			$("#section-combat-loader").append(_0x415B)
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
		var _0x413E = this.idleAnimationObject;
		for (var _0x3607 = 0; _0x3607 < _0x413E.getNumberOfFrames(); _0x3607++)
		{
			var _0x415B = getImage("images/" + this.name + "_" + "monster" + "_" + _0x413E.name + "_" + _0x413E.framesArray[_0x3607] + ".png", this.name + "_" + _0x3607 + "_" + _0x413E);
			$("#section-combat-loader").append(_0x415B)
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

function GhostMonster()
{
	this.name = "ghost";
	this.idleAnimationObject = new MonsterAnimation("idle", [0, 1], 24);
	this.frameAt = 0;
	this.speedAt = 0;
	this.currentAnimation = this.idleAnimationObject;
	this.preloadImages = function ()
	{
		var _0x413E = this.idleAnimationObject;
		for (var _0x3607 = 0; _0x3607 < _0x413E.getNumberOfFrames(); _0x3607++)
		{
			var _0x415B = getImage("images/" + this.name + "_" + "monster" + "_" + _0x413E.name + "_" + _0x413E.framesArray[_0x3607] + ".png", this.name + "_" + _0x3607 + "_" + _0x413E);
			$("#section-combat-loader").append(_0x415B)
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
		var _0x413E = this.idleAnimationObject;
		for (var _0x3607 = 0; _0x3607 < _0x413E.getNumberOfFrames(); _0x3607++)
		{
			var _0x415B = getImage("images/" + this.name + "_" + "monster" + "_" + _0x413E.name + "_" + _0x413E.framesArray[_0x3607] + ".png", this.name + "_" + _0x3607 + "_" + _0x413E);
			$("#section-combat-loader").append(_0x415B)
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
		var _0x413E = this.idleAnimationObject;
		for (var _0x3607 = 0; _0x3607 < _0x413E.getNumberOfFrames(); _0x3607++)
		{
			var _0x415B = getImage("images/" + this.name + "_" + "monster" + "_" + _0x413E.name + "_" + _0x413E.framesArray[_0x3607] + ".png", this.name + "_" + _0x3607 + "_" + _0x413E);
			$("#section-combat-loader").append(_0x415B)
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
		var _0x413E = this.idleAnimationObject;
		for (var _0x3607 = 0; _0x3607 < _0x413E.getNumberOfFrames(); _0x3607++)
		{
			var _0x415B = getImage("images/" + this.name + "_" + "monster" + "_" + _0x413E.name + "_" + _0x413E.framesArray[_0x3607] + ".png", this.name + "_" + _0x3607 + "_" + _0x413E);
			$("#section-combat-loader").append(_0x415B)
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
		var _0x413E = this.idleAnimationObject;
		for (var _0x3607 = 0; _0x3607 < _0x413E.getNumberOfFrames(); _0x3607++)
		{
			var _0x415B = getImage("images/" + this.name + "_" + "monster" + "_" + _0x413E.name + "_" + _0x413E.framesArray[_0x3607] + ".png", this.name + "_" + _0x3607 + "_" + _0x413E);
			$("#section-combat-loader").append(_0x415B)
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
		var _0x413E = this.idleAnimationObject;
		for (var _0x3607 = 0; _0x3607 < _0x413E.getNumberOfFrames(); _0x3607++)
		{
			var _0x415B = getImage("images/" + this.name + "_" + "monster" + "_" + _0x413E.name + "_" + _0x413E.framesArray[_0x3607] + ".png", this.name + "_" + _0x3607 + "_" + _0x413E);
			$("#section-combat-loader").append(_0x415B)
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
		var _0x413E = this.idleAnimationObject;
		for (var _0x3607 = 0; _0x3607 < _0x413E.getNumberOfFrames(); _0x3607++)
		{
			var _0x415B = getImage("images/" + this.name + "_" + "monster" + "_" + _0x413E.name + "_" + _0x413E.framesArray[_0x3607] + ".png", this.name + "_" + _0x3607 + "_" + _0x413E);
			$("#section-combat-loader").append(_0x415B)
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
		var _0x413E = this.idleAnimationObject;
		for (var _0x3607 = 0; _0x3607 < _0x413E.getNumberOfFrames(); _0x3607++)
		{
			var _0x415B = getImage("images/" + this.name + "_" + "monster" + "_" + _0x413E.name + "_" + _0x413E.framesArray[_0x3607] + ".png", this.name + "_" + _0x3607 + "_" + _0x413E);
			$("#section-combat-loader").append(_0x415B)
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
		var _0x413E = this.idleAnimationObject;
		for (var _0x3607 = 0; _0x3607 < _0x413E.getNumberOfFrames(); _0x3607++)
		{
			var _0x415B = getImage("images/" + this.name + "_" + "monster" + "_" + _0x413E.name + "_" + _0x413E.framesArray[_0x3607] + ".png", this.name + "_" + [_0x3607] + "_" + _0x413E);
			$("#section-combat-loader").append(_0x415B)
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
		var _0x413E = this.idleAnimationObject;
		for (var _0x3607 = 0; _0x3607 < _0x413E.getNumberOfFrames(); _0x3607++)
		{
			var _0x415B = getImage("images/" + this.name + "_" + "monster" + "_" + _0x413E.name + "_" + _0x413E.framesArray[_0x3607] + ".png", this.name + "_" + [_0x3607] + "_" + _0x413E);
			$("#section-combat-loader").append(_0x415B)
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
		var _0x413E = this.idleAnimationObject;
		for (var _0x3607 = 0; _0x3607 < _0x413E.getNumberOfFrames(); _0x3607++)
		{
			var _0x415B = getImage("images/" + this.name + "_" + "monster" + "_" + _0x413E.name + "_" + _0x413E.framesArray[_0x3607] + ".png", this.name + "_" + [_0x3607] + "_" + _0x413E);
			$("#section-combat-loader").append(_0x415B)
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
		var _0x413E = this.idleAnimationObject;
		for (var _0x3607 = 0; _0x3607 < _0x413E.getNumberOfFrames(); _0x3607++)
		{
			var _0x415B = getImage("images/" + this.name + "_" + "monster" + "_" + _0x413E.name + "_" + _0x413E.framesArray[_0x3607] + ".png", this.name + "_" + _0x3607 + "_" + _0x413E);
			$("#section-combat-loader").append(_0x415B)
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
		var _0x413E = this.idleAnimationObject;
		for (var _0x3607 = 0; _0x3607 < _0x413E.getNumberOfFrames(); _0x3607++)
		{
			var _0x415B = getImage("images/" + this.name + "_" + "monster" + "_" + _0x413E.name + "_" + _0x413E.framesArray[_0x3607] + ".png", this.name + "_" + _0x3607 + "_" + _0x413E);
			$("#section-combat-loader").append(_0x415B)
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
		var _0x413E = this.idleAnimationObject;
		for (var _0x3607 = 0; _0x3607 < _0x413E.getNumberOfFrames(); _0x3607++)
		{
			var _0x415B = getImage("images/" + this.name + "_" + "monster" + "_" + _0x413E.name + "_" + _0x413E.framesArray[_0x3607] + ".png", this.name + "_" + _0x3607 + "_" + _0x413E);
			$("#section-combat-loader").append(_0x415B)
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
		var _0x413E = this.idleAnimationObject;
		for (var _0x3607 = 0; _0x3607 < _0x413E.getNumberOfFrames(); _0x3607++)
		{
			var _0x415B = getImage("images/" + this.name + "_" + "monster" + "_" + _0x413E.name + "_" + _0x413E.framesArray[_0x3607] + ".png", this.name + "_" + _0x3607 + "_" + _0x413E);
			$("#section-combat-loader").append(_0x415B)
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
	this.callAnimation = function (_0x4178)
	{
		switch (_0x4178)
		{
		case 1:
			this.frameAt = 0;
			this.speedAt = 0;
			this.currentAnimation = this.secondaryAnimationObject;
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
		var _0x413E = this.idleAnimationObject;
		for (var _0x3607 = 0; _0x3607 < _0x413E.getNumberOfFrames(); _0x3607++)
		{
			var _0x415B = getImage("images/" + this.name + "_" + "monster" + "_" + _0x413E.name + "_" + _0x413E.framesArray[_0x3607] + ".png", this.name + "_" + _0x3607 + "_" + _0x413E);
			$("#section-combat-loader").append(_0x415B)
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
		var _0x413E = this.idleAnimationObject;
		for (var _0x3607 = 0; _0x3607 < _0x413E.getNumberOfFrames(); _0x3607++)
		{
			var _0x415B = getImage("images/" + this.name + "_" + "monster" + "_" + _0x413E.name + "_" + _0x413E.framesArray[_0x3607] + ".png", this.name + "_" + _0x3607 + "_" + _0x413E);
			$("#section-combat-loader").append(_0x415B)
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
		var _0x413E = this.idleAnimationObject;
		for (var _0x3607 = 0; _0x3607 < _0x413E.getNumberOfFrames(); _0x3607++)
		{
			var _0x415B = getImage("images/" + this.name + "_" + "monster" + "_" + _0x413E.name + "_" + _0x413E.framesArray[_0x3607] + ".png", this.name + "_" + _0x3607 + "_" + _0x413E);
			$("#section-combat-loader").append(_0x415B)
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
		var _0x413E = this.idleAnimationObject;
		for (var _0x3607 = 0; _0x3607 < _0x413E.getNumberOfFrames(); _0x3607++)
		{
			var _0x415B = getImage("images/" + this.name + "_" + "monster" + "_" + _0x413E.name + "_" + _0x413E.framesArray[_0x3607] + ".png", this.name + "_" + _0x3607 + "_" + _0x413E);
			$("#section-combat-loader").append(_0x415B)
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
		var _0x413E = this.idleAnimationObject;
		for (var _0x3607 = 0; _0x3607 < _0x413E.getNumberOfFrames(); _0x3607++)
		{
			var _0x415B = getImage("images/" + this.name + "_" + "monster" + "_" + _0x413E.name + "_" + _0x413E.framesArray[_0x3607] + ".png", this.name + "_" + _0x3607 + "_" + _0x413E);
			$("#section-combat-loader").append(_0x415B)
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
		var _0x413E = this.idleAnimationObject;
		for (var _0x3607 = 0; _0x3607 < _0x413E.getNumberOfFrames(); _0x3607++)
		{
			var _0x415B = getImage("images/" + this.name + "_" + "monster" + "_" + _0x413E.name + "_" + _0x413E.framesArray[_0x3607] + ".png", this.name + "_" + _0x3607 + "_" + _0x413E);
			$("#section-combat-loader").append(_0x415B)
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

function MonsterAnimation(_0x4ED6, _0x60F6, _0x4EF3)
{
	this.name = _0x4ED6;
	this.framesArray = _0x60F6;
	this.speed = _0x4EF3;
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
		var _0x413E = this.idleAnimationObject;
		for (var _0x3607 = 0; _0x3607 < _0x413E.getNumberOfFrames(); _0x3607++)
		{
			var _0x415B = getImage("images/" + this.name + "_" + "monster" + "_" + _0x413E.name + "_" + _0x413E.framesArray[_0x3607] + ".png", this.name + "_" + _0x3607 + "_" + _0x413E);
			$("#section-combat-loader").append(_0x415B)
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
		var _0x413E = this.idleAnimationObject;
		for (var _0x3607 = 0; _0x3607 < _0x413E.getNumberOfFrames(); _0x3607++)
		{
			var _0x415B = getImage("images/" + this.name + "_" + "monster" + "_" + _0x413E.name + "_" + _0x413E.framesArray[_0x3607] + ".png", this.name + "_" + _0x413E.framesArray[_0x3607] + "_" + _0x413E);
			$("#section-combat-loader").append(_0x415B)
		};
		var _0x413E = this.hideAnimationObject;
		for (var _0x3607 = 0; _0x3607 < _0x413E.getNumberOfFrames(); _0x3607++)
		{
			var _0x415B = getImage("images/" + this.name + "_" + "monster" + "_" + _0x413E.name + "_" + _0x413E.framesArray[_0x3607] + ".png", this.name + "_" + _0x413E.framesArray[_0x3607] + "_" + _0x413E);
			$("#section-combat-loader").append(_0x415B)
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
	this.callAnimation = function (_0x4178)
	{
		switch (_0x4178)
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
		var _0x413E = this.idleAnimationObject;
		for (var _0x3607 = 0; _0x3607 < _0x413E.getNumberOfFrames(); _0x3607++)
		{
			var _0x415B = getImage("images/" + this.name + "_" + "monster" + "_" + _0x413E.name + "_" + _0x413E.framesArray[_0x3607] + ".png", this.name + "_" + _0x413E.framesArray[_0x3607] + "_" + _0x413E);
			$("#section-combat-loader").append(_0x415B)
		};
		var _0x413E = this.hideAnimationObject;
		for (var _0x3607 = 0; _0x3607 < _0x413E.getNumberOfFrames(); _0x3607++)
		{
			var _0x415B = getImage("images/" + this.name + "_" + "monster" + "_" + _0x413E.name + "_" + _0x413E.framesArray[_0x3607] + ".png", this.name + "_" + _0x413E.framesArray[_0x3607] + "_" + _0x413E);
			$("#section-combat-loader").append(_0x415B)
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
	this.callAnimation = function (_0x4178)
	{
		switch (_0x4178)
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
		var _0x413E = this.idleAnimationObject;
		for (var _0x3607 = 0; _0x3607 < _0x413E.getNumberOfFrames(); _0x3607++)
		{
			var _0x415B = getImage("images/" + this.name + "_" + "monster" + "_" + _0x413E.name + "_" + _0x413E.framesArray[_0x3607] + ".png", this.name + "_" + _0x413E.framesArray[_0x3607] + "_" + _0x413E);
			$("#section-combat-loader").append(_0x415B)
		};
		var _0x413E = this.hideAnimationObject;
		for (var _0x3607 = 0; _0x3607 < _0x413E.getNumberOfFrames(); _0x3607++)
		{
			var _0x415B = getImage("images/" + this.name + "_" + "monster" + "_" + _0x413E.name + "_" + _0x413E.framesArray[_0x3607] + ".png", this.name + "_" + _0x413E.framesArray[_0x3607] + "_" + _0x413E);
			$("#section-combat-loader").append(_0x415B)
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
	this.callAnimation = function (_0x4178)
	{
		switch (_0x4178)
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
		var _0x413E = this.idleAnimationObject;
		for (var _0x3607 = 0; _0x3607 < _0x413E.getNumberOfFrames(); _0x3607++)
		{
			var _0x415B = getImage("images/" + this.name + "_" + "monster" + "_" + _0x413E.name + "_" + _0x413E.framesArray[_0x3607] + ".png", this.name + "_" + _0x413E.framesArray[_0x3607] + "_" + _0x413E);
			$("#section-combat-loader").append(_0x415B)
		};
		var _0x413E = this.hideAnimationObject;
		for (var _0x3607 = 0; _0x3607 < _0x413E.getNumberOfFrames(); _0x3607++)
		{
			var _0x415B = getImage("images/" + this.name + "_" + "monster" + "_" + _0x413E.name + "_" + _0x413E.framesArray[_0x3607] + ".png", this.name + "_" + _0x413E.framesArray[_0x3607] + "_" + _0x413E);
			$("#section-combat-loader").append(_0x415B)
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
	this.callAnimation = function (_0x4178)
	{
		switch (_0x4178)
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
		var _0x413E = this.idleAnimationObject;
		for (var _0x3607 = 0; _0x3607 < _0x413E.getNumberOfFrames(); _0x3607++)
		{
			var _0x415B = getImage("images/" + this.name + "_" + "monster" + "_" + _0x413E.name + "_" + _0x413E.framesArray[_0x3607] + ".png", this.name + "_" + _0x413E.framesArray[_0x3607] + "_" + _0x413E);
			$("#section-combat-loader").append(_0x415B)
		};
		var _0x413E = this.hideAnimationObject;
		for (var _0x3607 = 0; _0x3607 < _0x413E.getNumberOfFrames(); _0x3607++)
		{
			var _0x415B = getImage("images/" + this.name + "_" + "monster" + "_" + _0x413E.name + "_" + _0x413E.framesArray[_0x3607] + ".png", this.name + "_" + _0x413E.framesArray[_0x3607] + "_" + _0x413E);
			$("#section-combat-loader").append(_0x415B)
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
	this.callAnimation = function (_0x4178)
	{
		switch (_0x4178)
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
		var _0x413E = this.idleAnimationObject;
		for (var _0x3607 = 0; _0x3607 < _0x413E.getNumberOfFrames(); _0x3607++)
		{
			var _0x415B = getImage("images/" + this.name + "_" + "monster" + "_" + _0x413E.name + "_" + _0x413E.framesArray[_0x3607] + ".png", this.name + "_" + _0x413E.framesArray[_0x3607] + "_" + _0x413E);
			$("#section-combat-loader").append(_0x415B)
		};
		var _0x413E = this.hideAnimationObject;
		for (var _0x3607 = 0; _0x3607 < _0x413E.getNumberOfFrames(); _0x3607++)
		{
			var _0x415B = getImage("images/" + this.name + "_" + "monster" + "_" + _0x413E.name + "_" + _0x413E.framesArray[_0x3607] + ".png", this.name + "_" + _0x413E.framesArray[_0x3607] + "_" + _0x413E);
			$("#section-combat-loader").append(_0x415B)
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
	this.callAnimation = function (_0x4178)
	{
		switch (_0x4178)
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
		var _0x413E = this.idleAnimationObject;
		for (var _0x3607 = 0; _0x3607 < _0x413E.getNumberOfFrames(); _0x3607++)
		{
			var _0x415B = getImage("images/" + this.name + "_" + "monster" + "_" + _0x413E.name + "_" + _0x413E.framesArray[_0x3607] + ".png", this.name + "_" + _0x413E.framesArray[_0x3607] + "_" + _0x413E);
			$("#section-combat-loader").append(_0x415B)
		};
		var _0x413E = this.hideAnimationObject;
		for (var _0x3607 = 0; _0x3607 < _0x413E.getNumberOfFrames(); _0x3607++)
		{
			var _0x415B = getImage("images/" + this.name + "_" + "monster" + "_" + _0x413E.name + "_" + _0x413E.framesArray[_0x3607] + ".png", this.name + "_" + _0x413E.framesArray[_0x3607] + "_" + _0x413E);
			$("#section-combat-loader").append(_0x415B)
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
	this.callAnimation = function (_0x4178)
	{
		switch (_0x4178)
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
		var _0x413E = this.idleAnimationObject;
		for (var _0x3607 = 0; _0x3607 < _0x413E.getNumberOfFrames(); _0x3607++)
		{
			var _0x415B = getImage("images/" + this.name + "_" + "monster" + "_" + _0x413E.name + "_" + _0x413E.framesArray[_0x3607] + ".png", this.name + "_" + _0x413E.framesArray[_0x3607] + "_" + _0x413E);
			$("#section-combat-loader").append(_0x415B)
		};
		var _0x413E = this.hideAnimationObject;
		for (var _0x3607 = 0; _0x3607 < _0x413E.getNumberOfFrames(); _0x3607++)
		{
			var _0x415B = getImage("images/" + this.name + "_" + "monster" + "_" + _0x413E.name + "_" + _0x413E.framesArray[_0x3607] + ".png", this.name + "_" + _0x413E.framesArray[_0x3607] + "_" + _0x413E);
			$("#section-combat-loader").append(_0x415B)
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
	this.callAnimation = function (_0x4178)
	{
		switch (_0x4178)
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
		var _0x413E = this.idleAnimationObject;
		for (var _0x3607 = 0; _0x3607 < _0x413E.getNumberOfFrames(); _0x3607++)
		{
			var _0x415B = getImage("images/" + this.name + "_" + "monster" + "_" + _0x413E.name + "_" + _0x413E.framesArray[_0x3607] + ".png", this.name + "_" + _0x413E.framesArray[_0x3607] + "_" + _0x413E);
			$("#section-combat-loader").append(_0x415B)
		};
		var _0x413E = this.hideAnimationObject;
		for (var _0x3607 = 0; _0x3607 < _0x413E.getNumberOfFrames(); _0x3607++)
		{
			var _0x415B = getImage("images/" + this.name + "_" + "monster" + "_" + _0x413E.name + "_" + _0x413E.framesArray[_0x3607] + ".png", this.name + "_" + _0x413E.framesArray[_0x3607] + "_" + _0x413E);
			$("#section-combat-loader").append(_0x415B)
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
	this.callAnimation = function (_0x4178)
	{
		switch (_0x4178)
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
		var _0x413E = this.idleAnimationObject;
		for (var _0x3607 = 0; _0x3607 < _0x413E.getNumberOfFrames(); _0x3607++)
		{
			var _0x415B = getImage("images/" + this.name + "_" + "monster" + "_" + _0x413E.name + "_" + _0x413E.framesArray[_0x3607] + ".png", this.name + "_" + _0x413E.framesArray[_0x3607] + "_" + _0x413E);
			$("#section-combat-loader").append(_0x415B)
		};
		var _0x413E = this.hideAnimationObject;
		for (var _0x3607 = 0; _0x3607 < _0x413E.getNumberOfFrames(); _0x3607++)
		{
			var _0x415B = getImage("images/" + this.name + "_" + "monster" + "_" + _0x413E.name + "_" + _0x413E.framesArray[_0x3607] + ".png", this.name + "_" + _0x413E.framesArray[_0x3607] + "_" + _0x413E);
			$("#section-combat-loader").append(_0x415B)
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
	this.callAnimation = function (_0x4178)
	{
		switch (_0x4178)
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
		var _0x413E = this.idleAnimationObject;
		for (var _0x3607 = 0; _0x3607 < _0x413E.getNumberOfFrames(); _0x3607++)
		{
			var _0x415B = getImage("images/" + this.name + "_" + "monster" + "_" + _0x413E.name + "_" + _0x413E.framesArray[_0x3607] + ".png", this.name + "_" + _0x413E.framesArray[_0x3607] + "_" + _0x413E);
			$("#section-combat-loader").append(_0x415B)
		};
		var _0x413E = this.hideAnimationObject;
		for (var _0x3607 = 0; _0x3607 < _0x413E.getNumberOfFrames(); _0x3607++)
		{
			var _0x415B = getImage("images/" + this.name + "_" + "monster" + "_" + _0x413E.name + "_" + _0x413E.framesArray[_0x3607] + ".png", this.name + "_" + _0x413E.framesArray[_0x3607] + "_" + _0x413E);
			$("#section-combat-loader").append(_0x415B)
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
	this.callAnimation = function (_0x4178)
	{
		switch (_0x4178)
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
		var _0x413E = this.idleAnimationObject;
		for (var _0x3607 = 0; _0x3607 < _0x413E.getNumberOfFrames(); _0x3607++)
		{
			var _0x415B = getImage("images/" + this.name + "_" + "monster" + "_" + _0x413E.name + "_" + _0x413E.framesArray[_0x3607] + ".png", this.name + "_" + _0x413E.framesArray[_0x3607] + "_" + _0x413E);
			$("#section-combat-loader").append(_0x415B)
		};
		var _0x413E = this.chargeAnimationObject;
		for (var _0x3607 = 0; _0x3607 < _0x413E.getNumberOfFrames(); _0x3607++)
		{
			var _0x415B = getImage("images/" + this.name + "_" + "monster" + "_" + _0x413E.name + "_" + _0x413E.framesArray[_0x3607] + ".png", this.name + "_" + _0x413E.framesArray[_0x3607] + "_" + _0x413E);
			$("#section-combat-loader").append(_0x415B)
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
	this.callAnimation = function (_0x4178)
	{
		switch (_0x4178)
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
		var _0x413E = this.idleAnimationObject;
		for (var _0x3607 = 0; _0x3607 < _0x413E.getNumberOfFrames(); _0x3607++)
		{
			var _0x415B = getImage("images/" + this.name + "_" + "monster" + "_" + _0x413E.name + "_" + _0x413E.framesArray[_0x3607] + ".png", this.name + "_" + _0x413E.framesArray[_0x3607] + "_" + _0x413E);
			$("#section-combat-loader").append(_0x415B)
		};
		var _0x413E = this.chargeAnimationObject;
		for (var _0x3607 = 0; _0x3607 < _0x413E.getNumberOfFrames(); _0x3607++)
		{
			var _0x415B = getImage("images/" + this.name + "_" + "monster" + "_" + _0x413E.name + "_" + _0x413E.framesArray[_0x3607] + ".png", this.name + "_" + _0x413E.framesArray[_0x3607] + "_" + _0x413E);
			$("#section-combat-loader").append(_0x415B)
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
	this.callAnimation = function (_0x4178)
	{
		switch (_0x4178)
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

function startMonsterAnimation(_0x4178)
{
	if (_0x4178.startsWith("shake"))
	{
		var _0x7781 = _0x4178.split("~")[1];
		global_monsterShake = true;
		setTimeout(function ()
		{
			global_monsterShake = false
		}, parseInt(_0x7781 * 1000))
	}
	else
	{
		if (_0x4178 == 0)
		{
			resetAnimationOfCurrentFightToIdle()
		}
		else
		{
			getMonsterObject(getItem("monsterName")).callAnimation(parseInt(_0x4178))
		}
	}
}
global_heroFlicker = false;

function startHeroAnimation(_0x4178)
{
	if (_0x4178.startsWith("flicker"))
	{
		global_heroFlicker = true;
		setTimeout(function ()
		{
			global_heroFlicker = false
		}, 3000)
	}
}

function getMonsterObject(_0x4ED6)
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
	if (window.tridentSoldierMonsterObj == null)
	{
		tridentSoldierMonsterObj = new TridentSoldierMonster();
		tridentSoldierMonsterObj.preloadImages()
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
	if (_0x4ED6 == "bee" && window.beeMonsterObj == null)
	{
		beeMonsterObj = new BeeMonster();
		beeMonsterObj.preloadImages()
	};
	if (_0x4ED6 == "bat" && window.batMonsterObj == null)
	{
		batMonsterObj = new BatMonster();
		batMonsterObj.preloadImages()
	};
	if (_0x4ED6 == "fireMage" && window.fireMageMonsterObj == null)
	{
		fireMageMonsterObj = new FireMageMonster();
		fireMageMonsterObj.preloadImages()
	};
	if (_0x4ED6 == "boneHead" && window.boneHeadMonsterObj == null)
	{
		boneHeadMonsterObj = new BoneHeadMonster();
		boneHeadMonsterObj.preloadImages()
	};
	if (_0x4ED6 == "ghost" && window.ghostMonsterObj == null)
	{
		ghostMonsterObj = new GhostMonster();
		ghostMonsterObj.preloadImages()
	};
	if (_0x4ED6 == "explorer" && window.explorerMonsterObj == null)
	{
		explorerMonsterObj = new ExplorerMonster();
		explorerMonsterObj.preloadImages()
	};
	if (_0x4ED6 == "skeletonGhost" && window.skeletonGhostMonsterObj == null)
	{
		skeletonGhostMonsterObj = new SkeletonGhostMonster();
		skeletonGhostMonsterObj.preloadImages()
	};
	if (_0x4ED6 == "cemeterySkeleton" && window.cemeterySkeletonMonsterObj == null)
	{
		cemeterySkeletonMonsterObj = new CemeterySkeletonMonster();
		cemeterySkeletonMonsterObj.preloadImages()
	};
	if (_0x4ED6 == "fireCemeterySkeleton" && window.fireCemeterySkeletonMonsterObj == null)
	{
		fireCemeterySkeletonMonsterObj = new FireCemeterySkeletonMonster();
		fireCemeterySkeletonMonsterObj.preloadImages()
	};
	if (_0x4ED6 == "iceCemeterySkeleton" && window.iceCemeterySkeletonMonsterObj == null)
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
	switch (_0x4ED6)
	{
	case "chicken":
		return chickenMonsterObj;
	case "bushy":
		return bushyMonsterObj;
	case "fireHawk":
		return fireHawkMonsterObj;
	case "iceHawk":
		return iceHawkMonsterObj;
	case "piranhas":
		return piranhasMonsterObj;
	case "lavaAlien":
		return lavaAlienMonsterObj;
	case "reaper":
		return reaperMonsterObj;
	case "shark":
		return sharkMonsterObj;
	case "tridentSoldier":
		return tridentSoldierMonsterObj;
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
	case "skeleton":
		return skeletonMonsterObj;
	case "boneHead":
		return boneHeadMonsterObj;
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

function addHitSplit(_0x3746)
{
	if (global_lastTabId == "right-combat-fighting")
	{
		var _0x3763 = _0x3746.split("~");
		var _0x37D7 = _0x3763[0];
		var _0x3811 = _0x3763[1];
		var _0x379D = _0x3763[2];
		var _0x3729 = _0x3763[3];
		var _0x370C = _0x3763[4];
		var _0x37BA = _0x3763[5];
		var _0x37F4 = getCurrentMillis();
		var _0x3780 = new HitAnimation(_0x37D7, _0x3811, _0x379D, _0x3729, _0x370C, _0x37BA, _0x37F4);
		if (_0x37D7 == "hero")
		{
			global_heroHitAnimationHashSet.add(_0x3780)
		}
		else
		{
			global_monsterHitAnimationHashSet.add(_0x3780)
		}
	}
}

function HitAnimation(_0x37D7, _0x3811, _0x379D, _0x3729, _0x370C, _0x37BA, _0x37F4)
{
	this.target = _0x37D7;
	this.number = _0x3811;
	this.icon = _0x379D;
	this.color = _0x3729;
	this.borderColor = _0x370C;
	this.otherInfo = _0x37BA;
	this.time = _0x37F4;
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
	this.draw = function (_0x5820, _0x583D)
	{
		var _0x57E6 = global_canvasFightingMonster2D;
		if (this.target == "hero")
		{
			_0x57E6 = global_canvasFightingHero2D
		};
		var _0x57AC = 80;
		var _0x57C9 = 130;
		var _0x5803 = 60;
		if (this.number.length > 1)
		{
			_0x57C9 = 160
		};
		if (this.number.length == 3)
		{
			_0x57C9 = 200
		};
		if (this.number == "Miss")
		{
			_0x57C9 = 240
		};
		if (this.number == "Immune")
		{
			_0x57C9 = 330
		};
		if (this.icon == "images/coins.png")
		{
			_0x57C9 = 800;
			_0x5820 = 0
		};
		if (this.icon == "images/invisibilityIcon.png")
		{
			_0x57C9 = 240;
			_0x5820 = 0
		};
		if (this.icon == "images/invisibilityAmulet.png")
		{
			_0x57C9 = 240;
			_0x5820 = 0
		};
		if (this.icon == "images/bushyBlockIcon.png")
		{
			_0x57C9 = 250;
			_0x5820 = 0
		};
		if (this.icon == "images/stab_dark.png")
		{
			_0x57C9 = 250;
			_0x5820 = 0
		};
		if (this.number.endsWith("/30)"))
		{
			_0x57C9 = 330;
			_0x5820 = 0
		};
		if (this.number == "")
		{
			_0x57C9 = 80
		};
		if (this.number.length == 10)
		{
			_0x57C9 = 350
		};
		_0x57E6.fillStyle = _0x3729;
		_0x57E6.globalAlpha = 0.5;
		_0x57E6.fillRect(_0x5820, _0x583D - this.getOffset(), _0x57C9, _0x57AC);
		_0x57E6.globalAlpha = 1.0;
		_0x57E6.fillStyle = this.borderColor;
		_0x57E6.strokeRect(_0x5820, _0x583D - this.getOffset(), _0x57C9, _0x57AC);
		_0x57E6.drawImage(getImage(this.icon, this.target + "_hitsplat"), _0x5820, _0x583D - this.getOffset(), _0x57AC, _0x57AC);
		if (this.number.length == 10)
		{
			_0x57E6.font = "30px Arial"
		}
		else
		{
			_0x57E6.font = "60px Arial"
		};
		_0x57E6.fillStyle = "black";
		if (this.number.length == 10)
		{
			_0x57E6.fillText(this.number, _0x5820 + 130 - 45, _0x583D - this.getOffset() - 12 + 60)
		}
		else
		{
			_0x57E6.fillText(this.number, _0x5820 + 130 - 45, _0x583D - this.getOffset() + 60)
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
	var _0x44C1 = 0;
	if (getItem("stardust") >= 1000)
	{
		_0x44C1 = parseInt(getItem("stardust") / 1000)
	};
	document.getElementById("dialogue-stardust-packs-input").value = _0x44C1;
	keyListenerStadustPacks(_0x44C1);
	openDialogue("dialogue-stardust-packs")
}

function keyListenerStadustPacks(_0x3811)
{
	_0x3811 = convertNumberWithLetrtsKMBToNumber(_0x3811);
	document.getElementById("dialogue-stardust-packs-area").innerHTML = "<img src=\'images/stardust.gif\' class=\'img-30\' /> -" + formatNumber(parseInt(_0x3811) * 1000) + "<br /><br /><img src=\'images/stardust1000.png\' class=\'img-30\' /> +" + formatNumber(parseInt(_0x3811))
}

function fightingMonsterCanvasTick()
{
	if (global_lastTabId != "right-combat-fighting")
	{
		return
	};
	var _0x4F2D = getMonsterObject(getItem("monsterName"));
	if (_0x4F2D == "none")
	{
		return
	};
	global_canvasFightingMonster2D.clearRect(0, 0, global_canvasFightingMonster.width, global_canvasFightingMonster.height);
	if (getItem("monsterHp") == 0)
	{
		global_canvasFightingMonster2D.globalAlpha = 0.5;
		global_canvasFightingMonster2D.drawImage(_0x4F2D.getDeathImage(), 50, global_canvasFightingMonster.height - _0x4F2D.getHeight() - 50)
	}
	else
	{
		global_canvasFightingMonster2D.globalAlpha = 1.0;
		x = 50;
		y = global_canvasFightingMonster.height - _0x4F2D.getHeight() - 50;
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
		global_canvasFightingMonster2D.drawImage(_0x4F2D.getImage(), x, y);
		if (getItem("combatCountDown") > 0)
		{
			global_canvasFightingMonster2D.font = "30px Arial";
			global_canvasFightingMonster2D.fillStyle = "yellow";
			global_canvasFightingMonster2D.fillText("Fighting in: " + getItem("combatCountDown"), 0, 200)
		}
	};
	_0x4F2D.tick();
	global_monsterHitAnimationHashSet.forEach((_0x4F4A) => _0x4F4A.draw(50 + _0x4F2D.getWidth() / 2.5, global_canvasFightingMonster.height - _0x4F2D.getHeight() / 1.5))
}

function resetHeroNerfs()
{
	var _0x7455 = .heroDebuffPosion;
	var _0x3A1B = .images / poison.png;
	var _0x73FE = .Poisoned;
	var _0x7438 = [false];
	var _0x396D = document.getElementById("combat-fight-hero-nerfs");
	var _0x41B2 = "";
	for (var _0x3607 = 0; _0x3607 < _0x7455.length; _0x3607++)
	{
		var _0x4ED6 = _0x7455[_0x3607];
		var _0x741B = _0x7438[_0x3607];
		var _0x384B = _0x73FE[_0x3607];
		if (getItem(_0x7455[_0x3607]) > 0)
		{
			_0x41B2 += "<div style=\'float:right;border:1px solid grey;background-color:#222211;padding:5px; margin:5px;\'>";
			_0x41B2 += "<img src=\'" + _0x3A1B + "\' class=\'img-40\' / > " + _0x73FE;
			if (_0x7438[_0x3607])
			{
				_0x41B2 += " <span style=\'color:grey\'>" + getItem(_0x7455[_0x3607] + "Timer") + "</span>"
			};
			_0x41B2 += "</div> "
		}
	};
	_0x396D.innerHTML = _0x41B2
}

function hideOtherInterfacesForCombat(_0x578F)
{
	if (_0x578F)
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

function buttonsDialogue(_0x42B7, _0x42D4, _0x42F1, _0x430E, _0x432B, _0x4348, _0x4365, _0x4382, _0x4243, _0x4260, _0x427D, _0x429A, _0x43BC, _0x43D9, _0x43F6, _0x4413, _0x4430, _0x4226)
{
	if (_0x42B7 == "none")
	{
		document.getElementById("dialogue-fancy-button-div-1").style.display = "none"
	}
	else
	{
		document.getElementById("dialogue-fancy-button-div-1").style.display = ""
	};
	if (_0x42D4 == "none")
	{
		document.getElementById("dialogue-fancy-button-div-2").style.display = "none"
	}
	else
	{
		document.getElementById("dialogue-fancy-button-div-2").style.display = ""
	};
	if (_0x42F1 == "none")
	{
		document.getElementById("dialogue-fancy-button-div-3").style.display = "none"
	}
	else
	{
		document.getElementById("dialogue-fancy-button-div-3").style.display = ""
	};
	if (_0x430E == "none")
	{
		document.getElementById("dialogue-fancy-button-div-4").style.display = "none"
	}
	else
	{
		document.getElementById("dialogue-fancy-button-div-4").style.display = ""
	};
	for (var _0x3607 = 1; _0x3607 <= 4; _0x3607++)
	{
		var _0x3A1B = window["btnImage" + _0x3607];
		var _0x3A8F = window["btnTitle" + _0x3607];
		var _0x384B = window["btnDesc" + _0x3607];
		var _0x439F = window["cmd" + _0x3607];
		if (_0x3607 == 1)
		{
			var _0x3A1B = _0x42B7;
			var _0x3A8F = _0x432B;
			var _0x384B = _0x4243;
			var _0x439F = _0x43BC
		}
		else
		{
			if (_0x3607 == 2)
			{
				var _0x3A1B = _0x42D4;
				var _0x3A8F = _0x4348;
				var _0x384B = _0x4260;
				var _0x439F = _0x43D9
			}
			else
			{
				if (_0x3607 == 3)
				{
					var _0x3A1B = _0x42F1;
					var _0x3A8F = _0x4365;
					var _0x384B = _0x427D;
					var _0x439F = _0x43F6
				}
				else
				{
					if (_0x3607 == 4)
					{
						var _0x3A1B = _0x430E;
						var _0x3A8F = _0x4382;
						var _0x384B = _0x429A;
						var _0x439F = _0x4413
					}
				}
			}
		};
		if (_0x3A1B != "none")
		{
			document.getElementById("dialogue-fancy-button-div-" + _0x3607).style.display = "";
			document.getElementById("dialogue-fancy-button-img-" + _0x3607).src = _0x3A1B;
			document.getElementById("dialogue-fancy-button-title-" + _0x3607).innerHTML = _0x3A8F;
			document.getElementById("dialogue-fancy-button-desc-" + _0x3607).innerHTML = _0x384B;
			document.getElementById("dialogue-fancy-button-div-" + _0x3607).setAttribute("onclick", "sendBytes(\'" + _0x439F + "\');closeDialogue(\'dialogue-fancy-buttons\')")
		}
	};
	document.getElementById("dialogue-fancy-buttons-top-div").innerHTML = _0x4430;
	document.getElementById("dialogue-fancy-buttons-bottom-div").innerHTML = _0x4226;
	openDialogue("dialogue-fancy-buttons")
}

function craftGoldKeysNavigate()
{
	navigate("right-crafting");
	switchCraftingType("goldKey");
	refreshCraftables()
}

function changeBodyBackground(_0x3A1B)
{
	if (_0x3A1B == "none")
	{
		resetBodyBackground()
	}
	else
	{
		document.getElementById("body").style.backgroundImage = "url(\'" + _0x3A1B + "\')"
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
	var _0x6D32 = false;
	if (getItem("largeManaPotion") > 0)
	{
		document.getElementById("fighting-screen-potions-area-largeManaPotion").style.display = "";
		document.getElementById("fighting-screen-potions-area-largeManaPotion").style.filter = "brightness(100%)";
		_0x6D32 = true
	};
	if (getItem("largeManaPotionUsed") == 1)
	{
		document.getElementById("fighting-screen-potions-area-largeManaPotion").style.display = "";
		document.getElementById("fighting-screen-potions-area-largeManaPotion").style.filter = "brightness(10%)"
	};
	if (_0x6D32)
	{
		document.getElementById("fighting-screen-potions-area").style.display = ""
	}
	else
	{
		document.getElementById("fighting-screen-potions-area").style.display = "none"
	}
}

function getRandomInt(_0x55F9)
{
	_0x55F9++;
	return Math.floor(Math.random() * Math.floor(_0x55F9))
}
var craftListGlobal = "none";

function CraftingRecipe(_0x3933, _0x3EFA, _0x3F17, _0x3E86, _0x3EA3, _0x3DD8, _0x4CCC, _0x3E12)
{
	this.itemName = _0x3933;
	this.skill = _0x3EFA;
	this.skillLevel = _0x3F17;
	this.recipe = _0x3E86;
	this.recipeCost = _0x3EA3;
	this.description = _0x3DD8;
	this.isMultiCraft = _0x4CCC;
	this.itemNameDisplay = _0x3E12
}
var magicTransformListGlobal = [];

function MagicTransformRecipe(_0x3933, _0x3F8B, _0x40AD, _0x4056, _0x3FC5, _0x3FE2, _0x3FFF, _0x401C, _0x3FA8)
{
	this.itemName = _0x3933;
	this.level = _0x3F8B;
	this.stardust = _0x4056;
	this.output1 = _0x3FC5;
	this.output2 = _0x3FFF;
	this.output1Amount = _0x3FE2;
	this.output2Amount = _0x401C;
	this.obtainedItemVar = _0x3FA8;
	this.xp = _0x40AD
}

function CooksBookRecipe(_0x3933, _0x3EFA, _0x3F17, _0x3E86, _0x3EA3, _0x3DD8, _0x4CCC, _0x3E12, _0x4CE9)
{
	this.itemName = _0x3933;
	this.skill = _0x3EFA;
	this.skillLevel = _0x3F17;
	this.recipe = _0x3E86;
	this.recipeCost = _0x3EA3;
	this.description = _0x3DD8;
	this.isMultiCraft = _0x4CCC;
	this.itemNameDisplay = _0x3E12;
	this.timeToPrep = _0x4CE9
}

function refreshMagicTransformList()
{
	var _0x396D = "convertMagic-section-2";
	var _0x6BB9 = [];
	document.getElementById(_0x396D).innerHTML = "";
	var _0x6BD6 = "";
	var _0x3AAC = "";
	_0x6BD6 = "stinger";
	_0x6BB9[_0x6BD6] = (new MagicTransformRecipe(_0x6BD6, 5, 200, 5000, ["ironBars", "honey"], ["5 - 10", "1 - 2"], ["needle"], ["1"], "bee_" + _0x6BD6));
	_0x3AAC += addTransformRecipeToTable(_0x6BB9[_0x6BD6], _0x396D);
	_0x6BD6 = "ironDagger";
	_0x6BB9[_0x6BD6] = (new MagicTransformRecipe(_0x6BD6, 10, 500, 10000, ["ironBars", "coins"], ["20 - 50", "1000 - 2000"], ["daggerBlade", "daggerHandle"], ["1", "1"], "thief_" + _0x6BD6));
	_0x3AAC += addTransformRecipeToTable(_0x6BB9[_0x6BD6], _0x396D);
	_0x6BD6 = "skeletonSword";
	_0x6BB9[_0x6BD6] = (new MagicTransformRecipe(_0x6BD6, 25, 1000, 50000, ["bones", "boneAmulet"], ["10 - 20", "1"], ["skeletonSwordMetal"], ["1"], "skeleton_" + _0x6BD6));
	_0x3AAC += addTransformRecipeToTable(_0x6BB9[_0x6BD6], _0x396D);
	_0x6BD6 = "bow";
	_0x6BB9[_0x6BD6] = (new MagicTransformRecipe(_0x6BD6, 40, 3500, 100000, ["arrow", "fireArrow", "iceArrow", "bowBase"], ["30 - 60", "20 - 30", "5 - 20", "1"], ["magicString"], ["1 - 50"], "boneHead_" + "bowBase"));
	_0x3AAC += addTransformRecipeToTable(_0x6BB9[_0x6BD6], _0x396D);
	_0x3AAC = "<tr><th>Weapon</th><th></th><th><img src=\'images/magicSkill.png\' class=\'img-30\' /> Magic Level</th><th>Transforms</th><th>Special Transforms</th><th><img src=\'images/stardustIcon.png\' class=\'img-30\' /> Stardust Cost</th><th>XP</th><th>Casts</th></tr>" + _0x3AAC;
	document.getElementById(_0x396D).innerHTML += "<table class=\'table-craftables\' width=\'90%\'>" + _0x3AAC + "</table><br />"
}

function switchCraftingType(_0x4F10)
{
	if (global_craftingType == _0x4F10)
	{
		global_craftingType = "default"
	}
	else
	{
		global_craftingType = _0x4F10
	}
}
global_craftingType = "default";

function refreshCraftables()
{
	var _0x396D = "item-section-crafting-2";
	var _0x6B28 = [];
	var _0x6B0B = "";
	document.getElementById(_0x396D).innerHTML = "";
	var _0x3AAC = "";
	if (global_craftingType == "houseBlueprint")
	{
		_0x6B0B = "home1";
		if (getItem(_0x6B0B) == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [1], ["stone", "logs", "houseBlueprint"], [20, 5, 1], "A new home to live in.<br /><br /><i style=\'font-size:12pt\'>You live a simple life and value friends and family.  You tend to help others before yourself.  You are also too nice and sometimes get taken advantage of.</i>", false, "Cottage"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "home2";
		if (getItem(_0x6B0B) == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [1], ["stone", "logs", "houseBlueprint"], [100, 5, 1], "A new home to live in.<br /><br /><i style=\'font-size:12pt\'>You honor leadership and loyalty.  Treason is a crime and is severely punished and you are not afraid to kill for the better of your people.</i>", false, "Castle"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "home3";
		if (getItem(_0x6B0B) == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [1], ["ironBars", "logs", "coins", "houseBlueprint"], [10, 10, 1000, 1], "A new home to live in.<br /><br /><i style=\'font-size:12pt\'>You enjoy business and long hours.  You spend most of your time out of the house making sales.</i>", false, "Mansion"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		}
	};
	if (global_craftingType == "rowBoatBlueprints")
	{
		_0x6B0B = "rowBoat";
		if (getItem(_0x6B0B) == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [20], ["logs", "oakLogs", "rowBoatBlueprints"], [800, 300, 1], "Can be sent out for more fish.", false, "Row Boat"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		}
	};
	if (global_craftingType == "canoeBoatBlueprints")
	{
		_0x6B0B = "canoeBoat";
		if (getItem(_0x6B0B) == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [60], ["willowLogs", "mapleLogs", "goldBars", "canoeBoatBlueprints"], [400, 200, 50, 1], "Can be sent out for more fish.", false, "Canoe"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		}
	};
	if (global_craftingType == "museumBlueprint")
	{
		_0x6B0B = "museum";
		if (getItem(_0x6B0B) == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [10], ["stone", "museumBlueprint"], [100, 1], "A museum to start trade in rare items for coins.", false, "Museum"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		}
	};
	if (global_craftingType == "brewingKitMould")
	{
		_0x6B0B = "brewingKit";
		if (getItem(_0x6B0B) == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [4], ["stone", "ironBars", "brewingKitMould"], [10, 5, 1], "Unlocks the brewing skill.", false, "Brewing kit"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		}
	};
	if (global_craftingType == "chainsawMould")
	{
		_0x6B0B = "chainsaw";
		if (getItem(_0x6B0B) == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [50], ["ironBars", "promethiumBars", "oil", "chainsawMould"], [100, 15, 5000, 1], "Gain more logs for every tree.<br/ ><span style=\'color:grey\'>Stacks with axe</span>", false, "Chainsaw"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		}
	};
	if (global_craftingType == "wrenchMould")
	{
		_0x6B0B = "wrench";
		if (getItem(_0x6B0B) == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [30], ["ironBars", "wrenchMould", "miner"], [5, 1, 1], "Ability for your miner to use a wrench, allowing him to turn on your mining machines if you run out of oil.<br /><span style=\'color:grey\'>Configure a preset to automatically turn on machines at zero oil)", false, "Wrench"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		}
	};
	if (global_craftingType == "trowelMould")
	{
		_0x6B0B = "trowel";
		if (getItem(_0x6B0B + "Total") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [58], ["ironBars", "mapleLogs", "trowelMould"], [30, 50, 1], "Increases your rate at finding seeds.", false, "Trowel"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		}
	};
	if (global_craftingType == "ringMould")
	{
		_0x6B0B = "cooldownRing1";
		if (getItem(_0x6B0B + "Total") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [20], ["silverBars", "limeQuartzMineral", "ringMould"], [20, 1, 1], "Reduces combat cooldown by 1%.", false, "Cooldown Ring (1)"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "energyRing1";
		if (getItem(_0x6B0B + "Total") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [20], ["silverBars", "jadeMineral", "ringMould"], [20, 1, 1], "Reduces energy use by 1%.", false, "Energy Ring (1)"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "manaRing1";
		if (getItem(_0x6B0B + "Total") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [20], ["silverBars", "amethystMineral", "ringMould"], [20, 1, 1], "Increases maximum mana by 1.", false, "Mana Ring (1)"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "cooldownRing2";
		if (getItem(_0x6B0B + "Total") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [40], ["goldBars", "blueMarbleMineral", "ringMould"], [20, 1, 1], "Reduces combat cooldown by 4%.", false, "Cooldown Ring (2)"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "energyRing2";
		if (getItem(_0x6B0B + "Total") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [40], ["goldBars", "limoniteMineral", "ringMould"], [20, 1, 1], "Reduces energy use by 4%.", false, "Energy Ring (2)"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "manaRing2";
		if (getItem(_0x6B0B + "Total") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [40], ["goldBars", "tashmarineMineral", "ringMould"], [20, 1, 1], "Increases maximum mana by 2.", false, "Mana Ring (2)"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "cooldownRing3";
		if (getItem(_0x6B0B + "Total") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [60], ["promethiumBars", "denseMarbleMineral", "ringMould"], [20, 1, 1], "Reduces combat cooldown by 10%.", false, "Cooldown Ring (3)"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "energyRing3";
		if (getItem(_0x6B0B + "Total") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [60], ["promethiumBars", "fluoriteMineral", "ringMould"], [20, 1, 1], "Reduces energy use by 10%.", false, "Energy Ring (3)"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "manaRing3";
		if (getItem(_0x6B0B + "Total") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [60], ["promethiumBars", "purpleQuartzMineral", "ringMould"], [20, 1, 1], "Increases maximum mana by 3.", false, "Mana Ring (3)"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		}
	};
	if (global_craftingType == "offhandIronDagger")
	{
		_0x6B0B = "offhandIronDagger";
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [35], ["daggerHandle", "daggerBlade"], [1, 1], "An offhand iron dagger.", false, "Offhand Dagger"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		}
	};
	if (global_craftingType == "boneAmuletPlus")
	{
		_0x6B0B = "boneAmuletPlus";
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [50], ["boneAmulet", "skeletonSwordMetal"], [1, 3], "An upgraded bone amulet.", false, "Bone Amulet+"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		}
	};
	if (global_craftingType == "bowBase")
	{
		_0x6B0B = "bow";
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [40], ["bowBase", "string"], [1, 50], "A bow used for combat.  Requires arrows.", false, "Bow"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		}
		if (getItem("magicString") > 0)
		{
			_0x6B0B = "magicBow";
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [50], ["bowBase", "magicString"], [1, 50], "A bow used for combat.  Requires arrows.<br /><span style=\'color:grey\'>25% chance of getting your arrow back after firing it.</span>", false, "Magic Bow"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		}
	};
	if (global_craftingType == "needle")
	{
		_0x6B0B = "snakeskin";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [10], ["snakeskinMask"], [1], "Undo snakeskin armour.", false, "Snakeskin"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D);
		_0x6B0B = "snakeskin";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [10], ["snakeskinBody"], [1], "Undo snakeskin armour.", false, "Snakeskin"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D);
		_0x6B0B = "snakeskin";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [10], ["snakeskinLegs"], [1], "Undo snakeskin armour.", false, "Snakeskin"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D);
		_0x6B0B = "snakeskin";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [10], ["snakeskinBoots"], [1], "Undo snakeskin armour.", false, "Snakeskin"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D);
		_0x6B0B = "snakeskin";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [10], ["snakeskinGloves"], [1], "Undo snakeskin armour.", false, "Snakeskin"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
	};
	if (global_craftingType == "goldKey")
	{
		_0x6B0B = "goldKey";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [20], ["goldBars"], [5], "A key to open a treasure chest.<br /><span style=\'color:silver;font-size:10pt\'>One roll on drop table</span>", false, "Gold Key"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D);
		_0x6B0B = "sapphireGoldKey";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [30], ["sapphire", "goldBars"], [1, 5], "A key to open a treasure chest.<br /><span style=\'color:silver;font-size:10pt\'>Two roll on drop table</span>", false, "Sapphire Key"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D);
		_0x6B0B = "emeraldGoldKey";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [40], ["emerald", "goldBars"], [1, 5], "A key to open a treasure chest.<br /><span style=\'color:silver;font-size:10pt\'>Three roll on drop table</span>", false, "Emerald Key"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D);
		_0x6B0B = "rubyGoldKey";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [50], ["ruby", "goldBars"], [1, 5], "A key to open a treasure chest.<br /><span style=\'color:silver;font-size:10pt\'>Five roll on drop table</span>", false, "Ruby Key"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D);
		_0x6B0B = "diamondGoldKey";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [60], ["diamond", "goldBars"], [1, 5], "A key to open a treasure chest.<br /><span style=\'color:silver;font-size:10pt\'>Seven roll on drop table</span>", false, "Diamond Key"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
	};
	if (global_craftingType == "feather")
	{
		_0x6B0B = "arrow";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [10], ["feather", "logs", "bones"], [1, 1, 1], "Used with a bow.", true, "Arrow"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
	};
	if (global_craftingType == "fireFeather")
	{
		_0x6B0B = "fireArrow";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [40], ["fireFeather", "lavaLogs", "bones"], [1, 1, 1], "Used with a bow.", true, "Fire Arrow"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
	};
	if (global_craftingType == "iceFeather")
	{
		_0x6B0B = "iceArrow";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [50], ["iceFeather", "pineLogs", "iceBones"], [1, 1, 1], "Used with a bow.", true, "Ice Arrow"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
	};
	if (global_craftingType == "cemeterySkeleton")
	{
		_0x6B0B = "cemeterySkeleton";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [55], ["skeletonHead", "skeletonLeftArm", "skeletonRightArm", "skeletonLeftLeg", "skeletonRightLeg", "chain", "bones"], [1, 1, 1, 1, 1, 3, 10], "Assemble the skeleton back into its true form.", false, "Cemetery Skeleton"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D);
		_0x6B0B = "fireCemeterySkeleton";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [55], ["skeletonHead", "skeletonLeftArm", "skeletonRightArm", "skeletonLeftLeg", "skeletonRightLeg", "chain", "ashes"], [1, 1, 1, 1, 1, 3, 10], "Assemble the fire skeleton back into its true form.", false, "Fire Cemetery Skeleton"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D);
		_0x6B0B = "iceCemeterySkeleton";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [55], ["skeletonHead", "skeletonLeftArm", "skeletonRightArm", "skeletonLeftLeg", "skeletonRightLeg", "chain", "iceBones"], [1, 1, 1, 1, 1, 3, 10], "Assemble the ice skeleton back into its true form.", false, "Ice Cemetery Skeleton"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
	};
	if (global_craftingType == "snowman")
	{
		_0x6B0B = "snowman_monster_idle_0";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [40], ["smallSnowballs", "mediumSnowball", "largeSnowball", "leftBranch", "rightBranch", "carrot", "ironBucket", "stone"], [1, 1, 1, 1, 1, 1, 1, 2], "Make a snowman!", false, "Snowman"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
	};
	if (global_craftingType == "cemeterySkeletonShield")
	{
		_0x6B0B = "cemeterySkeletonShield";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [65], ["cemeterySkeletonShield1", "cemeterySkeletonShield2", "cemeterySkeletonShield3"], [1, 1, 1], "Combine three shield pieces into one.", false, "Cemetery Skeleton Shield"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
	};
	if (global_craftingType == "snakeskin")
	{
		_0x6B0B = "snakeskinMask";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [10], ["snakeskin"], [3], "A piece of equipment.", false, "Snakeskin Mask"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D);
		_0x6B0B = "snakeskinBody";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [10], ["snakeskin"], [10], "A piece of equipment.", false, "Snakeskin Body"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D);
		_0x6B0B = "snakeskinLegs";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [10], ["snakeskin"], [6], "A piece of equipment.", false, "Snakeskin Legs"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D);
		_0x6B0B = "snakeskinBoots";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [10], ["snakeskin"], [3], "A piece of equipment.", false, "Snakeskin Boots"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D);
		_0x6B0B = "snakeskinGloves";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [10], ["snakeskin"], [3], "A piece of equipment.", false, "Snakeskin Gloves"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
	};
	if (global_craftingType == "bearFur")
	{
		_0x6B0B = "bearFurMask";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [20], ["bearFur"], [3], "A piece of equipment.", false, "Bear Mask"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D);
		_0x6B0B = "bearFurBody";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [20], ["bearFur"], [10], "A piece of equipment.", false, "Bear Body"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D);
		_0x6B0B = "bearFurLegs";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [20], ["bearFur"], [6], "A piece of equipment.", false, "Bear Legs"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D);
		_0x6B0B = "bearFurBoots";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [20], ["bearFur"], [3], "A piece of equipment.", false, "Bear Boots"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D);
		_0x6B0B = "bearFurGloves";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [20], ["bearFur"], [3], "A piece of equipment.", false, "Bear Gloves"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
	};
	if (global_craftingType == "polarBearFur")
	{
		_0x6B0B = "polarBearFurMask";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [35], ["polarBearFur"], [3], "A piece of equipment.", false, "Bear Mask"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D);
		_0x6B0B = "polarBearFurBody";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [35], ["polarBearFur"], [10], "A piece of equipment.", false, "Bear Body"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D);
		_0x6B0B = "polarBearFurLegs";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [35], ["polarBearFur"], [6], "A piece of equipment.", false, "Bear Legs"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D);
		_0x6B0B = "polarBearFurBoots";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [35], ["polarBearFur"], [3], "A piece of equipment.", false, "Bear Boots"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D);
		_0x6B0B = "polarBearFurGloves";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [35], ["polarBearFur"], [3], "A piece of equipment.", false, "Bear Gloves"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
	};
	if (global_craftingType == "blackSilk")
	{
		_0x6B0B = "reaperHood";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [50], ["blackSilk"], [6], "A piece of mage equipment.", false, "Reaper Hood"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D);
		_0x6B0B = "reaperBody";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [50], ["blackSilk"], [20], "A piece of mage equipment.", false, "Reaper Body"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D);
		_0x6B0B = "reaperLegs";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [50], ["blackSilk"], [12], "A piece of mage equipment.", false, "Reaper Robe"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D);
		_0x6B0B = "reaperBoots";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [50], ["blackSilk"], [6], "A piece of mage equipment.", false, "Reaper Boots"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D);
		_0x6B0B = "reaperGloves";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [50], ["blackSilk"], [6], "A piece of mage equipment.", false, "Reaper Gloves"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
	};
	if (global_craftingType == "batSkin")
	{
		_0x6B0B = "batSkinMask";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [30], ["batSkin"], [3], "A piece of equipment.", false, "Batskin Mask"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D);
		_0x6B0B = "batSkinBody";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [30], ["batSkin"], [10], "A piece of equipment.", false, "Batskin Body"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D);
		_0x6B0B = "batSkinLegs";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [30], ["batSkin"], [6], "A piece of equipment.", false, "Batskin Legs"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D);
		_0x6B0B = "batSkinBoots";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [30], ["batSkin"], [3], "A piece of equipment.", false, "Batskin Boots"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D);
		_0x6B0B = "batSkinGloves";
		_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [30], ["batSkin"], [3], "A piece of equipment.", false, "Batskin Gloves"));
		_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
	};
	if (global_craftingType == "default")
	{
		_0x6B0B = "stoneFurnace";
		if (getItem(_0x6B0B) == 0 && getItem("furnaceCapacity") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [1], ["stone"], [5], "Smelt ores into metal bars.", false, "Stone Furnace"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "bronzeOilWell";
		if (getItem(_0x6B0B + "Total") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [1], ["bronzeBars"], [5], "Gain 1 oil per second.", false, "Bronze Oil Well"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "axe";
		if (getItem(_0x6B0B) == 0 && getItem("bobsPanicQuest") == 3)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [2], ["bronzeBars", "stone"], [2, 5], "Unlocks the woodcutting skill.", false, "Axe"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "communityCenter";
		if (getItem(_0x6B0B) == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [4], ["logs"], [5], "Upgrades the shop to carry more items.", false, "Community Center"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		if (getItem(_0x6B0B + "Total") == 0)
		{
			_0x6B0B = "brewingKit";
			if (getItem(_0x6B0B) == 0)
			{
				_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [4], ["stone", "ironBars", "brewingKitMould"], [10, 5, 1], "Unlocks the brewing skill.", false, "Brewing kit"));
				_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
			}
		};
		_0x6B0B = "vial";
		if (true)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [5], ["glass"], [1], "Vials for making potions.", true, "Vial"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "communityCenter2";
		if (getItem(_0x6B0B) == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [5], ["oakLogs"], [5], "Upgrades the shop to carry more items.", false, "Community Center 2"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "shovel";
		if (getItem(_0x6B0B) == 0 && getItem("sapphireShovel") == 0 && getItem("emeraldShovel") == 0 && getItem("rubyShovel") == 0 && getItem("diamondShovel") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [7], ["ironBars", "logs"], [5, 10], "Collects sand over time.", false, "Shovel"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "drills";
		if (getItem(_0x6B0B) == 0 || (getItem("researcherMining") >= 3 && getItem(_0x6B0B) < 3))
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [10], ["bronzeBars"], [20], "Drill a desired ore at the cost of oil.", false, "Drills"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "bronzeFurnace";
		if (getItem(_0x6B0B) == 0 && getItem("furnaceCapacity") == 10)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [12], ["stone", "bronzeBars", "stoneFurnace"], [200, 100, 1], "Increases your furnace capacity.", false, "Bronze Furnace"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "sapphireGlassHand";
		if (getItem(_0x6B0B) == 0 && getItem(_0x6B0B + "Museum") == 0)
		{
			if (getItem("museum") == 1)
			{
				_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [12], ["glass", "sapphire"], [20, 1], "A magnificent piece of art, it must be worth a lot of money.<br /><span style=\'color:green\'><img src=\'images/atom.png\' class=\'img-20\' /> Requires a Museum</span>", false, "Sapphire Glass Hand"))
			}
			else
			{
				_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [12], ["glass", "sapphire"], [20, 1], "A magnificent piece of art, it must be worth a lot of money.<br /><span style=\'color:red\'><img src=\'images/atom.png\' class=\'img-20\' /> Requires a Museum</span>", false, "Sapphire Glass Hand"))
			};
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "communityCenter3";
		if (getItem(_0x6B0B) == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [14], ["willowLogs"], [10], "Upgrades the shop to carry more items.", false, "Community Center 3"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "bonemealBin";
		if (getItem(_0x6B0B) == 0 && getItem("sapphireBonemealBin") == 0 && getItem("emeraldBonemealBin") == 0 && getItem("rubyBonemealBin") == 0 && getItem("diamondBonemealBin") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [15], ["logs"], [50], "Ability to convert bones to bonemeal.", false, "Bonemeal Bin"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "rake";
		if (getItem(_0x6B0B) == 0 && getItem("sapphireRake") == 0 && getItem("emeraldRake") == 0 && getItem("rubyRake") == 0 && getItem("diamondRake") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [17], ["silverBars", "logs", "rakeHead"], [3, 30, 1], "A tool used by bob to find higher tier seeds.", false, "Rake"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "ironFurnace";
		if (getItem(_0x6B0B) == 0 && getItem("furnaceCapacity") <= 30)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [18], ["stone", "ironBars", "bronzeFurnace"], [500, 100, 1], "Increases your furnace capacity.", false, "Iron Furnace"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "oxygenTank";
		if (getItem(_0x6B0B) == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [19], ["ironBars"], [50, 1], "Allows you to explore the ocean floors.<br /><span style=\'color:grey;font-size:12pt;\'><img src=\'images/atom.png\' class=\'img-20\' /> Research may be needed to use this item.</span>", false, "Oxygen Tank"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "crushers";
		if (getItem(_0x6B0B) == 0 || (getItem("researcherMining") >= 3 && getItem(_0x6B0B) < 3))
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [20], ["goldBars"], [5], "Mine a desired ore at the cost of oil.", false, "Crushers"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "oilStorage1";
		if (getItem(_0x6B0B + "Total") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [22], ["stone"], [1000], "Increases oil capacity to 5000", false, "Oil Storage I"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "ironOilWell";
		if (getItem(_0x6B0B + "Total") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [23], ["ironBars", "bronzeOilWell"], [25, 1], "Gain 5 oil per second.", false, "Iron Oil Well"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "ironOven";
		if (getItem(_0x6B0B + "Total") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [25], ["ironBars", "bronzeOven"], [100, 1], "Reduces the oven\'s burn rate.", false, "Iron Oven"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "silverFurnace";
		if (getItem(_0x6B0B) == 0 && getItem("furnaceCapacity") <= 75)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [28], ["silverBars", "stone", "ironFurnace"], [250, 5000, 1], "Increases your furnace capacity.", false, "Silver Furnace"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "silverOilWell";
		if (getItem(_0x6B0B + "Total") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [30], ["silverBars", "ironOilWell"], [200, 1], "Gain 10 oil per second.", false, "Silver Oil Well"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "wrench";
		if (getItem(_0x6B0B + "Total") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [30], ["ironBars", "wrenchMould", "miner"], [5, 1, 1], "Ability for your miner to use a wrench, allowing him to turn on your mining machines if you run out of oil.<br /><span style=\'color:grey\'>Configure a preset to automatically turn on machines at zero oil)", false, "Wrench"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "largeVial";
		if (getItem("researcherCrafting") >= 4)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [32], ["glass"], [20], "Large vials for making medium level potions.", true, "Large Vial"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "oilStorage2";
		if (getItem(_0x6B0B + "Total") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [33], ["stone", "oilStorage1"], [20000, 1], "Increases oil capacity to 20,000", false, "Oil Storage II"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "silverOven";
		if (getItem(_0x6B0B + "Total") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [35], ["silverBars", "ironOven"], [300, 1], "Reduces the oven\'s burn rate.", false, "Silver Oven"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "planter";
		if (getItem(_0x6B0B + "Total") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [36], ["goldBars", "glass", "tractorTire"], [10, 20, 1], "Ability to harvest and replant a seed on all plots in one click.", false, "Planter"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "unlitTorch";
		if (getItem(_0x6B0B) == 0 && getItem("torch") == 0 && getItemString("weapon") != "torch" && getItemString("weapon") != "unlitTorch")
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [37], ["goldBars", "bambooLogs"], [3, 50], "An unlit torch.", false, "Unlit Torch"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "emeraldGlassHand";
		if (getItem(_0x6B0B) == 0 && getItem(_0x6B0B + "Museum") == 0)
		{
			if (getItem("museum") == 1)
			{
				_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [39], ["glass", "emerald"], [20, 1], "A magnificent piece of art, it must be worth a lot of money.<br /><span style=\'color:green\'><img src=\'images/atom.png\' class=\'img-20\' /> Requires a Museum</span>", false, "Emerald Glass Hand"))
			}
			else
			{
				_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [39], ["glass", "emerald"], [20, 1], "A magnificent piece of art, it must be worth a lot of money.<br /><span style=\'color:red\'><img src=\'images/atom.png\' class=\'img-20\' /> Requires a Museum</span>", false, "Emerald Glass Hand"))
			};
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "ironBucket";
		if (getItem("researcherCrafting") >= 3)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [40], ["silverBars"], [50], "Collect a bucket of lava after killing a lava monster.", true, "Silver Bucket"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "chisel";
		if (getItem(_0x6B0B + "Total") == 0)
		{
			if (getItem("researcherMining") >= 4)
			{
				_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [41], ["logs", "ironBars"], [25, 10], "Used to open geodes.<br /><span style=\'color:green\'><img src=\'images/atom.png\' class=\'img-20\' /> Requires the ability to mine geodes.</span>", false, "Chisel"))
			}
			else
			{
				_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [41], ["logs", "ironBars"], [25, 10], "Used to open geodes.<br /><span style=\'color:red\'><img src=\'images/atom.png\' class=\'img-20\' /> Requires the ability to mine geodes.</span>", false, "Chisel"))
			};
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "goldFurnace";
		if (getItem(_0x6B0B + "Total") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [42], ["goldBars", "stone", "silverFurnace"], [300, 20000, 1], "Increases your furnace capacity.", false, "Gold Furnace"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "communityCenter4";
		if (getItem(_0x6B0B + "Total") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [42], ["mapleLogs"], [10], "Upgrades the shop to carry more items.", false, "Community Center 4"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "goldOilWell";
		if (getItem(_0x6B0B + "Total") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [43], ["goldBars", "silverOilWell"], [500, 1], "Gain 20 oil per second.", false, "Gold Oil Well"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "oilStorage3";
		if (getItem(_0x6B0B + "Total") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [45], ["stone", "oilStorage2"], [50000, 1], "Increases oil capacity to 100,000", false, "Oil Storage III"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "goldOven";
		if (getItem(_0x6B0B + "Total") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [47], ["goldBars", "silverOven"], [600, 1], "Reduces the oven\'s burn rate.", false, "Gold Oven"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "giantDrills";
		if (getItem(_0x6B0B) == 0 || (getItem("researcherMining") >= 3 && getItem(_0x6B0B) < 3))
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [50], ["ironBars", "silverBars"], [2000, 500], "Mine a desired ore at the cost of oil.", false, "Giant Drills"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "chainsaw";
		if (getItem(_0x6B0B + "Total") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [50], ["ironBars", "promethiumBars", "oil", "chainsawMould"], [100, 15, 5000, 1], "Gain more logs for every tree.<br/ ><span style=\'color:grey\'>Stacks with axe</span>", false, "Chainsaw"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "promethiumFurnace";
		if (getItem(_0x6B0B + "Total") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [54], ["promethiumBars", "stone", "goldFurnace"], [25, 80000, 1], "Increases your furnace capacity.", false, "Promethium Furnace"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "promethiumOilWell";
		if (getItem(_0x6B0B + "Total") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [56], ["promethiumBars", "goldOilWell"], [40, 1], "Gain 35 oil per second.", false, "Promethium Oil Well"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "trowel";
		if (getItem(_0x6B0B + "Total") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [58], ["ironBars", "mapleLogs", "trowelMould"], [30, 50, 1], "Increases your rate at finding seeds.", false, "Trowel"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "rocket";
		if (getItem(_0x6B0B + "Total") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [60], ["promethiumBars", "ironBars", "silverBars", "goldBars"], [35, 5000, 2500, 500], "Ability to travel to the moon at the cost of oil.", false, "Rocket"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "oilStorage4";
		if (getItem(_0x6B0B + "Total") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [61], ["stone", "oilStorage3"], [100000, 1], "Increases oil capacity to 250,000", false, "Oil Storage IV"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "rubyGlassHand";
		if (getItem(_0x6B0B) == 0 && getItem(_0x6B0B + "Museum") == 0)
		{
			if (getItem("museum") == 1)
			{
				_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [62], ["glass", "ruby"], [20, 1], "A magnificent piece of art, it must be worth a lot of money.<br /><span style=\'color:green\'><img src=\'images/atom.png\' class=\'img-20\' /> Requires a Museum</span>", false, "Ruby Glass Hand"))
			}
			else
			{
				_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [62], ["glass", "ruby"], [20, 1], "A magnificent piece of art, it must be worth a lot of money.<br /><span style=\'color:red\'><img src=\'images/atom.png\' class=\'img-20\' /> Requires a Museum</span>", false, "Ruby Glass Hand"))
			};
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "promethiumOven";
		if (getItem(_0x6B0B + "Total") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [63], ["promethiumBars", "goldOven"], [100, 1], "Reduces the oven\'s burn rate.", false, "Promethium Oven"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "excavators";
		if (getItem(_0x6B0B) == 0 || (getItem("researcherMining") >= 3 && getItem(_0x6B0B) < 3))
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [65], ["ironBars", "silverBars"], [5000, 2000], "Mine a desired ore at the cost of oil.", false, "Excavator"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "charcoalFoundry";
		if (getItem(_0x6B0B + "Total") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [67], ["ironBars", "promethiumBars"], [5000, 75], "Converts logs into charcoal at the cost of oil.", false, "Charcoal Foundry"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "titaniumRocketBoosters";
		if (getItem(_0x6B0B + "Total") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [69], ["titaniumBars", "silverBars", "rocket"], [5, 1000, 1], "Ability to fire titanium boosters during a trip, increasing the rocket\'s speed.", false, "Titanium Boosters"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		};
		_0x6B0B = "titaniumFurnace";
		if (getItem(_0x6B0B + "Total") == 0)
		{
			_0x6B28[_0x6B0B] = (new CraftingRecipe(_0x6B0B, ["crafting"], [70], ["titaniumBars", "stone", "promethiumFurnace"], [15, 150000, 1], "Increases your furnace capacity.", false, "Titanium Furnace"));
			_0x3AAC += addRecipeToTable(_0x6B28[_0x6B0B], _0x396D)
		}
	};
	document.getElementById(_0x396D).innerHTML += "<table class=\'table-craftables\' width=\'90%\'><tr><th>Name</th><th>Item</th><th>Level</th><th>Materials</th><th width=\'50%\x09\'>Description</th></tr>" + _0x3AAC + "</table><br />"
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
	var _0x396D = "item-section-cooksBook-1";
	cookingRecipes = [];
	var _0x6AEE = "";
	document.getElementById(_0x396D).innerHTML = "";
	var _0x3AAC = "";
	_0x6AEE = "salad";
	cookingRecipes[_0x6AEE] = (new CooksBookRecipe(_0x6AEE, ["cooking"], [1], ["dottedGreenLeaf", "redMushroom"], [5, 10], "A salad made from farmed ingredients.", true, "Mushroom Salad", 600));
	_0x3AAC += addRecipeToTable(cookingRecipes[_0x6AEE], _0x396D);
	_0x6AEE = "oysterMornay";
	cookingRecipes[_0x6AEE] = (new CooksBookRecipe(_0x6AEE, ["cooking"], [5], ["oyster", "cheese"], [1, 1], "Boiled oyster with melted cheese.", true, "Oyster Mornay", 900));
	_0x3AAC += addRecipeToTable(cookingRecipes[_0x6AEE], _0x396D);
	if (getSmallFishingNetTypeData()[0] != "none")
	{
		_0x6AEE = "snakeSushiShrimp";
		cookingRecipes[_0x6AEE] = (new CooksBookRecipe(_0x6AEE, ["cooking"], [10], ["snakeskin", "rawShrimp"], [2, 10], "A sushi made with snakeskin instead of traditional seaweed.", true, "Snakeskin Sushi", 1800));
		_0x3AAC += addRecipeToTable(cookingRecipes[_0x6AEE], _0x396D)
	};
	if (getFishingRodTypeData()[0] != "none")
	{
		_0x6AEE = "snakeSushiTrout";
		cookingRecipes[_0x6AEE] = (new CooksBookRecipe(_0x6AEE, ["cooking"], [10], ["snakeskin", "rawTrout"], [2, 5], "A sushi made with snakeskin instead of traditional seaweed.", true, "Snakeskin Sushi", 1800));
		_0x3AAC += addRecipeToTable(cookingRecipes[_0x6AEE], _0x396D)
	};
	if (getHarpoonTypeData()[0] != "none")
	{
		_0x6AEE = "snakeSushiTuna";
		cookingRecipes[_0x6AEE] = (new CooksBookRecipe(_0x6AEE, ["cooking"], [10], ["snakeskin", "rawTuna"], [2, 1], "A sushi made with snakeskin instead of traditional seaweed.", true, "Snakeskin Sushi", 1800));
		_0x3AAC += addRecipeToTable(cookingRecipes[_0x6AEE], _0x396D)
	};
	_0x6AEE = "seaweedChicken";
	cookingRecipes[_0x6AEE] = (new CooksBookRecipe(_0x6AEE, ["cooking"], [20], ["seaweed", "chicken"], [10, 1], "A chicken with mixed with seaweed.", true, "Seaweed Chicken", 2700));
	_0x3AAC += addRecipeToTable(cookingRecipes[_0x6AEE], _0x396D);
	_0x6AEE = "batSkinSushi";
	cookingRecipes[_0x6AEE] = (new CooksBookRecipe(_0x6AEE, ["cooking"], [30], ["batSkin", "rawShrimp", "rawTrout", "rawTuna"], [2, 10, 5, 1], "A sushi made with batskin instead of traditional seaweed.", true, "Batskin Sushi", 3600));
	_0x3AAC += addRecipeToTable(cookingRecipes[_0x6AEE], _0x396D);
	document.getElementById(_0x396D).innerHTML += "<table class=\'table-craftables\' width=\'90%\'><tr><th>Name</th><th>Item</th><th>Level</th><th>Ingredients</th><th width=\'50%\'>Description</th><th>Prep Time</th></tr>" + _0x3AAC + "</table><br />"
}

function refreshXpBarAnimation(_0x3746)
{
	var _0x3763 = _0x3746.split("~");
	var _0x473F = _0x3763[0];
	var _0x73C4 = _0x3763[1];
	var _0x73A7 = _0x3763[2];
	percentageDecimalXpBarWidth = (getItem(_0x473F + "Xp") - getXpNeeded(getLevel(getItem(_0x473F + "Xp")))) / (getXpNeeded(1 + parseInt(getLevel(getItem(_0x473F + "Xp")))) - getXpNeeded(getLevel(getItem(_0x473F + "Xp"))))
}

function setInnerHTMLCache(_0x75CE, _0x7608)
{
	var _0x7625 = (_0x7608.replace(/\s|'|"|&quot;|\//gi, ""));
	var _0x75EB = (_0x75CE.innerHTML.replace(/\s|'|"|&quot;|\//gi, ""));
	if (_0x7625 != _0x75EB)
	{
		_0x75CE.innerHTML = _0x7608
	}
}

function refreshBrewing()
{
	var _0x396D = "item-section-brewing-2";
	brewingRecipes = [];
	var _0x6A97 = "";
	var _0x3AAC = "";
	potionItemName = "stardustPotion";
	potionDisplayName = "Stardust Potion";
	potionItemNameDescription = "Gain some stardust over time.<br /><span style=\'color:grey;font-size:12pt;\'>(Lasts for " + getBrewingTimeAdjusted(300) + ")</span>";
	if (getItem(potionItemName + "Drank") == 0)
	{
		potionItemNameDescription = "???"
	};
	brewingRecipes[potionItemName] = (new CraftingRecipe(potionItemName, ["brewing"], [1], ["dottedGreenLeaf", "redMushroom", "vial"], [1, 15, 1], potionItemNameDescription, true, potionDisplayName));
	_0x3AAC += addRecipeToTable(brewingRecipes[potionItemName], _0x396D);
	potionItemName = "sandPotion";
	potionDisplayName = "Sand Potion";
	potionItemNameDescription = "Increases the chance of finding sand with a shovel.<br /><span style=\'color:grey;font-size:12pt;\'>(Lasts for " + getBrewingTimeAdjusted(3600) + ")</span>";
	if (getItem(potionItemName + "Drank") == 0)
	{
		potionItemNameDescription = "???"
	};
	brewingRecipes[potionItemName] = (new CraftingRecipe(potionItemName, ["brewing"], [3], ["dottedGreenLeaf", "redMushroom", "vial"], [2, 20, 1], potionItemNameDescription, true, potionDisplayName));
	_0x3AAC += addRecipeToTable(brewingRecipes[potionItemName], _0x396D);
	potionItemName = "cookingBoostPotion";
	potionDisplayName = "Cooking Boost Potion";
	potionItemNameDescription = "Temporary increases your cooking level by 10 for the next food that you cook.<br /><span style=\'color:grey;font-size:12pt;\'>(Cooldown: 20:00)</span>";
	if (getItem(potionItemName + "Drank") == 0)
	{
		potionItemNameDescription = "???"
	};
	brewingRecipes[potionItemName] = (new CraftingRecipe(potionItemName, ["brewing"], [5], ["greenLeaf", "redMushroom", "vial"], [1, 10, 1], potionItemNameDescription, true, potionDisplayName));
	_0x3AAC += addRecipeToTable(brewingRecipes[potionItemName], _0x396D);
	potionItemName = "combatCooldownPotion";
	potionDisplayName = "Combat Cooldown";
	potionItemNameDescription = "Your hero\'s cooldown will decrease twice as fast.<br /><span style=\'color:grey;font-size:12pt;\'>(Lasts for " + getBrewingTimeAdjusted(10 * 60) + ")</span>";
	if (getItem(potionItemName + "Drank") == 0)
	{
		potionItemNameDescription = "???"
	};
	brewingRecipes[potionItemName] = (new CraftingRecipe(potionItemName, ["brewing"], [8], ["dottedGreenLeaf", "greenLeaf", "bones", "vial"], [3, 3, 5, 1], potionItemNameDescription, true, potionDisplayName));
	_0x3AAC += addRecipeToTable(brewingRecipes[potionItemName], _0x396D);
	potionItemName = "compostPotion";
	potionDisplayName = "Compost Potion";
	potionItemNameDescription = "Crops grow twice as fast.<br /><span style=\'color:grey;font-size:12pt;\'>(Lasts for " + getBrewingTimeAdjusted(1800) + ")</span>";
	if (getItem(potionItemName + "Drank") == 0)
	{
		potionItemNameDescription = "???"
	};
	brewingRecipes[potionItemName] = (new CraftingRecipe(potionItemName, ["brewing"], [10], ["greenLeaf", "redMushroom", "vial"], [2, 20, 1], potionItemNameDescription, true, potionDisplayName));
	_0x3AAC += addRecipeToTable(brewingRecipes[potionItemName], _0x396D);
	potionItemName = "oilPotion";
	potionDisplayName = "Oil Potion";
	potionItemNameDescription = "Increases oil income by 10.<br /><span style=\'color:grey;font-size:12pt;\'>(Lasts for " + getBrewingTimeAdjusted(1800) + ")</span>";
	if (getItem(potionItemName + "Drank") == 0)
	{
		potionItemNameDescription = "???"
	};
	brewingRecipes[potionItemName] = (new CraftingRecipe(potionItemName, ["brewing"], [13], ["dottedGreenLeaf", "oil", "vial"], [4, 1, 1], potionItemNameDescription, true, potionDisplayName));
	_0x3AAC += addRecipeToTable(brewingRecipes[potionItemName], _0x396D);
	potionItemName = "bonePotion";
	potionDisplayName = "Bone Potion";
	potionItemNameDescription = "Passively collects bones over time.<br /><span style=\'color:grey;font-size:12pt;\'>(Lasts for " + getBrewingTimeAdjusted(7200) + ")</span>";
	if (getItem(potionItemName + "Drank") == 0)
	{
		potionItemNameDescription = "???"
	};
	brewingRecipes[potionItemName] = (new CraftingRecipe(potionItemName, ["brewing"], [15], ["dottedGreenLeaf", "bones", "vial"], [5, 20, 1], potionItemNameDescription, true, potionDisplayName));
	_0x3AAC += addRecipeToTable(brewingRecipes[potionItemName], _0x396D);
	potionItemName = "treeStarterPotion";
	potionDisplayName = "Tree Starter Potion";
	potionItemNameDescription = "Doubles your chances for a tree to start growing.<br /><span style=\'color:grey;font-size:12pt;\'>(Lasts for " + getBrewingTimeAdjusted(600) + ")</span>";
	if (getItem(potionItemName + "Drank") == 0)
	{
		potionItemNameDescription = "???"
	};
	brewingRecipes[potionItemName] = (new CraftingRecipe(potionItemName, ["brewing"], [18], ["dottedGreenLeaf", "redMushroom", "logs", "vial"], [3, 50, 1, 1], potionItemNameDescription, true, potionDisplayName));
	_0x3AAC += addRecipeToTable(brewingRecipes[potionItemName], _0x396D);
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
		_0x3AAC += addRecipeToTable(brewingRecipes[potionItemName], _0x396D)
	};
	potionItemName = "barPotion";
	potionDisplayName = "Bar Potion";
	potionItemNameDescription = "20% chance that two bars are smelted instead of one, without using an extra ore.<br /><i style=\'font-size:12pt;\'>Works on: Bronze, iron, silver, gold</i><br /><span style=\'color:grey;font-size:12pt;\'>(Lasts for " + getBrewingTimeAdjusted(600) + ")</span>";
	if (getItem(potionItemName + "Drank") == 0)
	{
		potionItemNameDescription = "???"
	};
	brewingRecipes[potionItemName] = (new CraftingRecipe(potionItemName, ["brewing"], [22], ["greenLeaf", "limeLeaf", "bronzeBars", "ironBars", "silverBars", "goldBars", "vial"], [2, 2, 1, 1, 1, 1, 1], potionItemNameDescription, true, potionDisplayName));
	_0x3AAC += addRecipeToTable(brewingRecipes[potionItemName], _0x396D);
	potionItemName = "sapphireStardustPotion";
	potionDisplayName = "Sapphire Stardust Potion";
	potionItemNameDescription = "Can be poured on a sapphire, converting it into stardust.";
	if (getItem(potionItemName + "Drank") == 0)
	{
		potionItemNameDescription = "???"
	};
	brewingRecipes[potionItemName] = (new CraftingRecipe(potionItemName, ["brewing"], [25], ["limeLeaf", "redMushroom", "vial"], [1, 100, 1], potionItemNameDescription, true, potionDisplayName));
	_0x3AAC += addRecipeToTable(brewingRecipes[potionItemName], _0x396D);
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
		_0x3AAC += addRecipeToTable(brewingRecipes[potionItemName], _0x396D)
	};
	potionItemName = "largeStardustPotion";
	potionDisplayName = "Large Stardust Potion";
	potionItemNameDescription = "Gain some stardust over time.<br /><span style=\'color:grey;font-size:12pt;\'>(Lasts for " + getBrewingTimeAdjusted(300) + ").";
	if (getItem(potionItemName + "Drank") == 0)
	{
		potionItemNameDescription = "???"
	};
	brewingRecipes[potionItemName] = (new CraftingRecipe(potionItemName, ["brewing"], [35], ["goldLeaf", "redMushroom", "largeVial"], [5, 450, 1], potionItemNameDescription, true, potionDisplayName));
	_0x3AAC += addRecipeToTable(brewingRecipes[potionItemName], _0x396D);
	potionItemName = "largeFurnacePotion";
	potionDisplayName = "Furnace Potion";
	potionItemNameDescription = "Your furnace will run 3 times as fast.<br /><span style=\'color:grey;font-size:12pt;\'>(Lasts for " + getBrewingTimeAdjusted(1800) + ").";
	if (getItem(potionItemName + "Drank") == 0)
	{
		potionItemNameDescription = "???"
	};
	brewingRecipes[potionItemName] = (new CraftingRecipe(potionItemName, ["brewing"], [38], ["goldLeaf", "greenLeaf", "redMushroom", "largeVial"], [1, 15, 200, 1], potionItemNameDescription, true, potionDisplayName));
	_0x3AAC += addRecipeToTable(brewingRecipes[potionItemName], _0x396D);
	potionItemName = "largePiratePotion";
	potionDisplayName = "Pirate Potion";
	potionItemNameDescription = "Doubles your pirate\'s chance to find a map.<br /><span style=\'color:grey;font-size:12pt;\'>(Lasts for " + getBrewingTimeAdjusted(3600 * 3) + ").";
	if (getItem(potionItemName + "Drank") == 0)
	{
		potionItemNameDescription = "???"
	};
	brewingRecipes[potionItemName] = (new CraftingRecipe(potionItemName, ["brewing"], [40], ["dottedGreenLeaf", "greenLeaf", "redMushroom", "largeVial"], [20, 20, 250, 1], potionItemNameDescription, true, potionDisplayName));
	_0x3AAC += addRecipeToTable(brewingRecipes[potionItemName], _0x396D);
	potionItemName = "largeEmeraldStardustPotion";
	potionDisplayName = "Emerald Stardust Potion";
	potionItemNameDescription = "Can be poured on an emerald, converting it into stardust.";
	if (getItem(potionItemName + "Drank") == 0)
	{
		potionItemNameDescription = "???"
	};
	brewingRecipes[potionItemName] = (new CraftingRecipe(potionItemName, ["brewing"], [45], ["limeLeaf", "redMushroom", "largeVial"], [20, 800, 1], potionItemNameDescription, true, potionDisplayName));
	_0x3AAC += addRecipeToTable(brewingRecipes[potionItemName], _0x396D);
	potionItemName = "largeRocketSpeedPotion";
	potionDisplayName = "Rocket Speed Potion";
	potionItemNameDescription = "Doubles your rocket\'s speed.<br /><span style=\'color:grey;font-size:12pt;\'>(Lasts for " + getBrewingTimeAdjusted(3600 * 2) + ").";
	if (getItem(potionItemName + "Drank") == 0)
	{
		potionItemNameDescription = "???"
	};
	brewingRecipes[potionItemName] = (new CraftingRecipe(potionItemName, ["brewing"], [50], ["dottedGreenLeaf", "greenLeaf", "oil", "largeVial"], [80, 50, 50000, 1], potionItemNameDescription, true, potionDisplayName));
	_0x3AAC += addRecipeToTable(brewingRecipes[potionItemName], _0x396D);
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
		_0x3AAC += addRecipeToTable(brewingRecipes[potionItemName], _0x396D)
	};
	potionItemName = "largeBarPotion";
	potionDisplayName = "Large Bar Potion";
	potionItemNameDescription = "20% chance that two bars are smelted instead of one, without using an extra ore.<br /><i style=\'font-size:12pt;\'>Works on: Bronze, iron, silver, gold, promethium</i><br /><span style=\'color:grey;font-size:12pt;\'>(Lasts for " + getBrewingTimeAdjusted(600) + ")</span>";
	if (getItem(potionItemName + "Drank") == 0)
	{
		potionItemNameDescription = "???"
	};
	brewingRecipes[potionItemName] = (new CraftingRecipe(potionItemName, ["brewing"], [55], ["goldLeaf", "limeLeaf", "bronzeBars", "ironBars", "silverBars", "goldBars", "promethiumBars", "largeVial"], [8, 50, 1, 1, 1, 1, 1, 1], potionItemNameDescription, true, potionDisplayName));
	_0x3AAC += addRecipeToTable(brewingRecipes[potionItemName], _0x396D);
	document.getElementById(_0x396D).innerHTML = "<table class=\'table-craftables\' width=\'90%\'><tbody><tr><th>Name</th><th>Item</th><th>Level</th><th>Materials</th><th>Description</th></tr>" + _0x3AAC + "</tbody></table><br /><br />"
}

function faradoxRandomShow()
{
	$("#faradox-random-show").fadeIn(3000, function ()
	{
		$("#faradox-random-show").fadeOut(1000)
	})
}

function addTransformRecipeToTable(_0x4073, _0x396D)
{
	var _0x4090 = _0x4073.itemName;
	var _0x4056 = _0x4073.stardust;
	var _0x3F8B = _0x4073.level;
	var _0x3FC5 = _0x4073.output1;
	var _0x3FFF = _0x4073.output2;
	var _0x3FE2 = _0x4073.output1Amount;
	var _0x401C = _0x4073.output2Amount;
	var _0x4056 = _0x4073.stardust;
	var _0x3FA8 = _0x4073.obtainedItemVar;
	var _0x40AD = _0x4073.xp;
	if (getItem(_0x3FA8) == 0)
	{
		return "<tr onclick=\'confirmDialogue(\"images/convertMagic.png\",\"You need to have obtained this item yourself before you are able to transform it.\",\"Close\",\"\",\"\")\'><td colspan=\'8\' style=\'font-size:70pt;color:white;background-color:#1f2e2e\'>???</td></tr>"
	};
	var _0x3F6E = true;
	var _0x3E69 = "<td>" + getItemName(_0x4090) + "</td>";
	_0x3E69 += "<td>" + "<img src=\'images/" + _0x4090 + ".png\' class=\'img-100\' /> " + "</td>";
	if (getLevel(getItem("magicXp")) >= _0x3F8B)
	{
		_0x3E69 += "<td style=\'color:green\'>" + _0x3F8B + "</td>"
	}
	else
	{
		_0x3E69 += "<td style=\'color:red\'>" + _0x3F8B + "</td>";
		_0x3F6E = false
	};
	if (getItem(_0x4090) == 0)
	{
		_0x3F6E = false
	};
	_0x3E69 += "<td>";
	for (var _0x3607 = 0; _0x3607 < _0x3FC5.length; _0x3607++)
	{
		var _0x3EDD = _0x3FC5[_0x3607];
		_0x3E69 += "<span title=\'" + getItemName(_0x3EDD) + "\'>" + "<img src=\'images/" + _0x3EDD + ".png\' class=\'img-50\' /> " + _0x3FE2[_0x3607] + "</span>";
		_0x3E69 += "<br />"
	};
	_0x3E69 += "</td>";
	_0x3E69 += "<td>";
	for (var _0x3607 = 0; _0x3607 < _0x3FFF.length; _0x3607++)
	{
		var _0x3EDD = _0x3FFF[_0x3607];
		_0x3E69 += "<span title=\'" + getItemName(_0x3EDD) + "\'>" + "<img src=\'images/" + _0x3EDD + ".png\' class=\'img-50\' />  " + _0x401C[_0x3607] + "</span>";
		_0x3E69 += "<br />"
	};
	_0x3E69 += "</td>";
	var _0x4039 = "style=\'color:green\'";
	if (_0x4056 > getItem("stardust"))
	{
		_0x3F6E = false;
		_0x4039 = "style=\'color:red\'"
	};
	_0x3E69 += "<td>";
	_0x3E69 += "<img src=\'images/stardustIcon.png\' class=\'img-30\' /> " + "<span " + _0x4039 + ">" + formatNumber(_0x4056) + "</span>";
	_0x3E69 += "</td>";
	var _0x3F51 = "style=\'background-color:#b3ffb3;\'";
	if (!_0x3F6E)
	{
		_0x3F51 = "style=\'background-color:#ffc2b3;\'"
	};
	_0x3E69 += "<td>";
	_0x3E69 += formatNumber(_0x40AD) + " XP";
	_0x3E69 += "</td>";
	_0x3E69 += "<td>";
	_0x3E69 += formatNumber(getItem(_0x4090 + "Transformed"));
	_0x3E69 += "</td>";
	var _0x3E4C = "onclick=\'transformItem(\"" + _0x4090 + "\",\"" + _0x4056 + "\", \"" + _0x40AD + "\")\'";
	return "<tr " + _0x3E4C + " " + _0x3F51 + ">" + _0x3E69 + "</tr>"
}

function addRecipeToTable(_0x3DBB, _0x396D)
{
	var _0x3933 = _0x3DBB.itemName;
	var _0x3EFA = _0x3DBB.skill;
	var _0x3F17 = _0x3DBB.skillLevel;
	var _0x3E86 = _0x3DBB.recipe;
	var _0x3EA3 = _0x3DBB.recipeCost;
	var _0x3E2F = _0x3DBB.isMultiCraft;
	var _0x3E12 = _0x3DBB.itemNameDisplay;
	var _0x3DD8 = _0x3DBB.description;
	var _0x3D9E = true;
	var _0x3E69 = "<td>" + _0x3E12 + "</td>";
	_0x3E69 += "<td>" + "<img src=\'images/" + _0x3933 + ".png\' class=\'img-100\' /> " + "</td>";
	if (getLevel(getItem(_0x3DBB.skill[0] + "Xp")) >= _0x3F17)
	{
		_0x3E69 += "<td style=\'color:green\'>" + _0x3F17 + "</td>"
	}
	else
	{
		_0x3E69 += "<td style=\'color:red\'>" + _0x3F17 + "</td>";
		_0x3D9E = false
	};
	_0x3E69 += "<td>";
	for (var _0x3607 = 0; _0x3607 < _0x3E86.length; _0x3607++)
	{
		var _0x3EDD = _0x3E86[_0x3607];
		var _0x3EC0 = _0x3EA3[_0x3607];
		var _0x3DF5 = getItem(_0x3EDD) >= _0x3EC0;
		var _0x3F34 = "style=\'color:green\'";
		if (!_0x3DF5)
		{
			_0x3D9E = false;
			_0x3F34 = "style=\'color:red\'"
		};
		if (_0x3EDD != "vial" && _0x3EDD != "largeVial" && _0x3EDD != "hugeVial")
		{
			_0x3E69 += "<span title=\'" + getItemName(_0x3EDD) + "\' " + _0x3F34 + ">" + "<img src=\'images/" + _0x3EDD + ".png\' class=\'img-50\' /> " + formatNumber(_0x3EC0) + " </span>";
			_0x3E69 += "<br />"
		}
	};
	_0x3E69 += "</td>";
	_0x3E69 += "<td>" + _0x3DD8 + "</td>";
	if (_0x3EFA[0] == "cooking")
	{
		_0x3E69 += "<td>" + formatTime(_0x3DBB.timeToPrep) + "</td>"
	};
	var _0x3F51 = "style=\'background-color:#b3ffb3;\'";
	if (!_0x3D9E)
	{
		_0x3F51 = "style=\'background-color:#ffc2b3;\'"
	};
	var _0x3E4C = "onclick=\'craftItem(\"" + _0x3933 + "\", " + _0x3E2F + ",\"" + _0x3E12 + "\",\"" + _0x3E86 + "\"+ _0x3EA3+ "
		, ")\'";
	return "<tr " + _0x3E4C + " " + _0x3F51 + ">" + _0x3E69 + "</tr>"
}

function craftItem(_0x3933, _0x4D23, _0x4D06)
{
	if (!_0x4D23)
	{
		confirmDialogue("images/" + _0x3933 + ".png", _0x4D06.toUpperCase(), "Craft", "Cancel", "CRAFT=" + _0x3933 + "~" + 1)
	}
	else
	{
		if (_0x3933 == "vial")
		{
			openInputDialogue("Crafting Vials", "images/vial.png", "vial", 1, ["vial"], [1], ["glass"], [1], "Craft", "MULTI_CRAFT", "These vials are used to mix potions with.")
		}
		else
		{
			if (_0x3933 == "largeVial")
			{
				openInputDialogue("Crafting Vials", "images/largeVial.png", "largeVial", 1, ["largeVial"], [1], ["glass"], [20], "Craft", "MULTI_CRAFT", "These vials are used to mix potions with.")
			}
			else
			{
				if (_0x3933 == "ironBucket")
				{
					openInputDialogue("Crafting Buckets", "images/ironBucket.png", "ironBucket", 1, ["ironBucket"], [1], ["silverBars"], [50], "Craft", "MULTI_CRAFT", "Bring back an extra bucket of lava after killing a lava type monster.")
				}
				else
				{
					if (_0x3933 == "arrow")
					{
						openInputDialogue("Crafting Arrows", "images/arrow.png", "arrow", 1, ["arrow"], [1], ["feather", "logs", "bones"], [1, 1, 1], "Craft", "MULTI_CRAFT", "Used with a bow to fire arrows at your enemy.")
					}
					else
					{
						if (_0x3933 == "fireArrow")
						{
							openInputDialogue("Crafting Arrows", "images/fireArrow.png", "fireArrow", 1, ["fireArrow"], [1], ["fireFeather", "lavaLogs", "bones"], [1, 1, 1], "Craft", "MULTI_CRAFT", "Used with a bow to shoot fire arrows at your enemy.")
						}
						else
						{
							if (_0x3933 == "iceArrow")
							{
								openInputDialogue("Crafting Arrows", "images/iceArrow.png", "iceArrow", 1, ["iceArrow"], [1], ["iceFeather", "pineLogs", "iceBones"], [1, 1, 1], "Craft", "MULTI_CRAFT", "Used with a bow to shoot ice arrows at your enemy.")
							}
							else
							{
								if (_0x3933.endsWith("Potion") || _0x3933.endsWith("Potion1") || _0x3933.endsWith("Potion2"))
								{
									openInputDialogue("Mix Potion", "images/" + _0x3933 + ".png", _0x3933, 1, [_0x3933], [1], brewingRecipes[_0x3933].recipe, brewingRecipes[_0x3933].recipeCost, "Mix", "BREW", "Potions generally give you a temporary buff when drank.")
								}
								else
								{
									if (_0x3933 == "salad" || _0x3933.startsWith("snakeSushi") || _0x3933.startsWith("oysterMornay") || _0x3933.startsWith("seaweedChicken") || _0x3933.startsWith("batSkinSushi"))
									{
										openInputDialogue("Prepare Food", "images/" + _0x3933 + ".png", _0x3933, 1, [_0x3933], [1], cookingRecipes[_0x3933].recipe, cookingRecipes[_0x3933].recipeCost, "Prepare", "PREPARE_FOOD", "Additional energy source at the cost of preperation time.")
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

function clicksRepelPotion(_0x4178)
{
	var _0x4B36 = [];
	var _0x41B2 = "";
	if (_0x4178 == 1)
	{
		_0x4B36.push("chicken");
		_0x4B36.push("rat");
		_0x4B36.push("bee");
		_0x4B36.push("snake");
		_0x4B36.push("ent");
		_0x4B36.push("thief");
		_0x4B36.push("bear");
		_0x4B36.push("skeleton");
		_0x4B36.push("spider")
	};
	if (_0x4178 == 2)
	{
		_0x4B36.push("lavaAlien");
		_0x4B36.push("bat");
		_0x4B36.push("fireMage");
		_0x4B36.push("boneHead");
		_0x4B36.push("mammaPolarBear");
		_0x4B36.push("yeti");
		_0x4B36.push("ghost");
		_0x4B36.push("skeletonGhost");
		_0x4B36.push("reaper")
	};
	_0x41B2 += "Select a Monster you wish to Avoid<br /><br />";
	for (var _0x3607 = 0; _0x3607 < _0x4B36.length; _0x3607++)
	{
		var _0x4B19 = _0x4B36[_0x3607];
		_0x41B2 += "<div onclick=\'repelMonster(\"" + _0x4B19 + "\")\' class=\'repel-potion-monster-btn\'>";
		_0x41B2 += " <img src=\'images/" + _0x4B19 + "_monster_idle_0.png\' class=\'img-70\' />";
		_0x41B2 += "</div>"
	};
	confirmDialogue("none", _0x41B2, "Close", "", "")
}

function repelMonster(_0x4B19)
{
	closeDialogue("dialogue-confirm");
	if (getItemString("repelMonster") == "none")
	{
		confirmDialogue("images/" + _0x4B19 + "_monster_idle_0.png", "Are you sure you want to repel this monster?<br /><br /><span style=\'color:grey\'>You may undo this at any moment.</span>", "Repel", "Cancel", "REPEL=" + _0x4B19)
	}
	else
	{
		confirmDialogue("images/" + _0x4B19 + "_monster_idle_0.png", "Are you sure you want to repel this monster?<br /><br /><span style=\'color:red\'>This will overwrite your previous repelled enemy.</span>", "Repel", "Cancel", "REPEL=" + _0x4B19)
	}
}
var addTextByDelay = function (_0x36EF, _0x36D2, _0x36B5)
{
	if (!_0x36D2)
	{
		_0x36D2 = $("body")
	};
	if (!_0x36B5)
	{
		_0x36B5 = 300
	};
	if (_0x36EF.length > 0)
	{
		_0x36D2.append(_0x36EF[0]);
		setTimeout(function ()
		{
			addTextByDelay(_0x36EF.slice(1), _0x36D2, _0x36B5)
		}, _0x36B5)
	}
};

function dimScreen(_0x39C4, _0x4E0B)
{
	if (_0x4E0B)
	{
		var _0x41B2 = "";
		if (_0x39C4 == "bushy_dead")
		{
			_0x41B2 += "<center>";
			_0x41B2 += "<br /><br />";
			_0x41B2 += "<br /><br />";
			_0x41B2 += "<img id=\'dim-screen-img-2\' src=\'images/greenCrystalAbsorbed.png\' />";
			_0x41B2 += "<br /><br />";
			_0x41B2 += "<div style=\'color:grey\' id=\'dim-screen-area1\'></div>";
			_0x41B2 += "<br /><br />";
			_0x41B2 += "<div style=\'color:red\' id=\'dim-screen-area2\'></div>";
			_0x41B2 += "</center>";
			$("#dim-screen").fadeIn(5000);
			$("#game").fadeOut(5000, function ()
			{
				document.getElementById("dim-screen").innerHTML = _0x41B2;
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
		if (_0x39C4 == "mana")
		{
			_0x41B2 += "<center>";
			_0x41B2 += "<br /><br />";
			_0x41B2 += "<img id=\'dim-screen-img-1\' src=\'images/animation_mana1.png\' />";
			_0x41B2 += "<br /><br />";
			_0x41B2 += "<img id=\'dim-screen-img-2\' src=\'images/default_hero.png\' />";
			_0x41B2 += "<br /><br />";
			_0x41B2 += "</center>";
			$("#dim-screen").fadeIn(5000);
			$("#game").fadeOut(5000, function ()
			{
				document.getElementById("dim-screen").innerHTML = _0x41B2;
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
		if (_0x39C4 == "combat_animation")
		{
			_0x41B2 += "<center>";
			_0x41B2 += "<br /><br />";
			_0x41B2 += "<img id=\'dim-screen-img-1\' src=\'images/reaper_grey.png\' />";
			_0x41B2 += "<br /><br />";
			_0x41B2 += "<span id=\'dim-screen-area1\'></span>";
			_0x41B2 += "<br /><br />";
			_0x41B2 += "<span id=\'dim-screen-area2\'></span>";
			_0x41B2 += "</center>";
			$("#dim-screen").fadeIn(10);
			$("#game").fadeOut(10, function ()
			{
				document.getElementById("dim-screen").innerHTML = _0x41B2;
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
		if (_0x39C4 == "release_faradox")
		{
			_0x41B2 += "<center>";
			_0x41B2 += "<br /><br />";
			_0x41B2 += "<br /><br />";
			_0x41B2 += "<img id=\'dim-screen-img-1\' src=\'images/faradox.png\' />";
			_0x41B2 += "<br /><br />";
			_0x41B2 += "<div style=\'color:grey\' id=\'dim-screen-area1\'></div>";
			_0x41B2 += "<br /><br />";
			_0x41B2 += "<div style=\'color:red\' id=\'dim-screen-area2\'></div>";
			_0x41B2 += "</center>";
			$("#dim-screen").fadeIn(5000);
			$("#game").fadeOut(5000, function ()
			{
				document.getElementById("dim-screen").innerHTML = _0x41B2;
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
		if (_0x39C4 == "release_faradox_2")
		{
			_0x41B2 += "<center>";
			_0x41B2 += "<br /><br />";
			_0x41B2 += "<br /><br />";
			_0x41B2 += "<img id=\'dim-screen-img-1\' src=\'images/faradox.png\' />";
			_0x41B2 += "<br /><br />";
			_0x41B2 += "<div style=\'color:grey\' id=\'dim-screen-area1\'></div>";
			_0x41B2 += "<br /><br />";
			_0x41B2 += "<div style=\'color:red\' id=\'dim-screen-area2\'></div>";
			_0x41B2 += "</center>";
			$("#dim-screen").fadeIn(5000);
			$("#game").fadeOut(5000, function ()
			{
				document.getElementById("dim-screen").innerHTML = _0x41B2;
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
		var _0x41B2 = "";
		if (_0x39C4 == "dead_hero")
		{
			_0x41B2 += "<center>";
			_0x41B2 += "<br /><br />";
			_0x41B2 += "<br /><br />";
			_0x41B2 += "<img id=\'dim-screen-img-1\' src=\'images/deadHero.png\' />";
			_0x41B2 += "<br /><br />";
			_0x41B2 += "<div style=\'color:grey\' id=\'dim-screen-area1\'></div>";
			_0x41B2 += "</center>";
			$("#dim-screen").fadeIn(1000);
			$("#game").fadeOut(1000, function ()
			{
				document.getElementById("dim-screen").innerHTML = _0x41B2;
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
		if (_0x39C4 == "dead_hero_special")
		{
			_0x41B2 += "<center>";
			_0x41B2 += "<br /><br />";
			_0x41B2 += "<br /><br />";
			_0x41B2 += "<img id=\'dim-screen-img-1\' src=\'images/deadHero.png\' />";
			_0x41B2 += "<br /><br />";
			_0x41B2 += "<div style=\'color:grey\' id=\'dim-screen-area1\'></div>";
			_0x41B2 += "</center>";
			$("#dim-screen").fadeIn(1000);
			$("#game").fadeOut(1000, function ()
			{
				document.getElementById("dim-screen").innerHTML = _0x41B2;
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

function unlockTreePatch(_0x47ED)
{
	if (document.getElementById("tree-section-img-" + _0x47ED).src == "images/tree_locked.png")
	{
		document.getElementById("tree-section-img-" + _0x47ED).src = "images/tree_none.png"
	};
	document.getElementById("tree-section-" + _0x47ED).classList.remove("tree-section-locked");
	refreshTreeImage(_0x47ED)
}

function unlockPlotPatch(_0x5F43)
{
	if (document.getElementById("plot-section-img-" + _0x5F43).src == "images/tree_locked.png")
	{
		document.getElementById("plot-section-img-" + _0x5F43).src = "images/tree_none.png"
	};
	document.getElementById("plot-section-" + _0x5F43).classList.remove("plot-section-locked");
	refreshPlotImage(_0x5F43)
}

function refreshTreeImage(_0x47ED)
{
	var _0x7350 = getItemString("tree" + _0x47ED);
	if (getItem("treeUnlocked" + _0x47ED) == 1)
	{
		if (_0x7350 == "none")
		{
			document.getElementById("tree-section-img-" + _0x47ED).src = "images/tree_none.png"
		}
		else
		{
			document.getElementById("tree-section-img-" + _0x47ED).src = "images/" + _0x7350 + getItem("treeStage" + _0x47ED) + ".png"
		}
	}
}

function refreshPlotImage(_0x47ED)
{
	var _0x6CDB = getItemString("plot" + _0x47ED);
	if (getItem("plotUnlocked" + _0x47ED) == 1)
	{
		document.getElementById("plot-section-" + _0x47ED).classList.remove("tree-section-locked");
		if (_0x6CDB == "none")
		{
			document.getElementById("plot-section-img-" + _0x47ED).src = "images/farm_none.png"
		}
		else
		{
			document.getElementById("plot-section-img-" + _0x47ED).src = "images/" + _0x6CDB + getItem("plotStage" + _0x47ED) + ".png"
		}
	}
}

function refreshTreeTimer(_0x47ED)
{
	if (getItemString("treeUnlocked" + _0x47ED) == 1)
	{
		var _0x738A = getItem("treeTimer" + _0x47ED);
		var _0x6CF8 = document.getElementById("tree-secton-timer-" + _0x47ED);
		switch (_0x738A)
		{
		case 1:
			_0x6CF8.innerHTML = "READY";
			break;
		case 0:
			_0x6CF8.innerHTML = "";
			break;
		default:
			_0x6CF8.innerHTML = formatTime(_0x738A);
			break
		}
	}
}

function refreshPlotTimer(_0x47ED)
{
	if (getItemString("plotUnlocked" + _0x47ED) == 1)
	{
		var _0x6D15 = getItem("plotTimer" + _0x47ED);
		var _0x6CF8 = document.getElementById("plot-secton-timer-" + _0x47ED);
		switch (_0x6D15)
		{
		case 1:
			_0x6CF8.innerHTML = "READY";
			break;
		case 0:
			_0x6CF8.innerHTML = "";
			break;
		default:
			_0x6CF8.innerHTML = formatTime(_0x6D15);
			break
		}
	}
}

function generateHTMLToSelectToolConversionItem(_0x4C92, _0x47D0, _0x40AD)
{
	var _0x41B2 = "";
	if (getItem(_0x47D0) > 0)
	{
		_0x41B2 += "<div onclick=\'openStardustToolDialogue2(\"" + _0x4C92 + "\",\"" + _0x47D0 + "\",\"" + _0x40AD + "\");closeDialogue(\"dialogue-stardust-tools\")\' class=\'select-ore-furnace\'>" + getItemName(_0x47D0).toUpperCase() + "<br />";
		_0x41B2 += "<img src=\'images/" + _0x47D0 + ".png\' class=\'img-100\' />";
		_0x41B2 += "<hr class=\'hr-thin\' />";
		_0x41B2 += "<img src=\'images/miningSkill_white.png\' class=\'img-30\' /> <span style=\'color:orange\'>XP per item:</span> " + parseFloat(_0x40AD);
		_0x41B2 += "</div>"
	};
	return _0x41B2
}

function getBonemealTypeData()
{
	var _0x473F = "";
	_0x473F = "bonemealBin";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "none", "sapphire", "5"]
	};
	_0x473F = "sapphireBonemealBin";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "sapphire", "emerald", "20"]
	};
	_0x473F = "emeraldBonemealBin";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "emerald", "ruby", "50"]
	};
	_0x473F = "rubyBonemealBin";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "ruby", "diamond", "100"]
	};
	_0x473F = "diamondBonemealBin";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "diamond", "none", "INF"]
	};
	return "none"
}

function getPickaxeTypeData()
{
	var _0x473F = "";
	_0x473F = "stardustPickaxe";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "none", "sapphire", "17"]
	};
	_0x473F = "sapphireStardustPickaxe";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "sapphire", "emerald", "16"]
	};
	_0x473F = "emeraldStardustPickaxe";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "emerald", "ruby", "15"]
	};
	_0x473F = "rubyStardustPickaxe";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "ruby", "diamond", "14"]
	};
	_0x473F = "diamondStardustPickaxe";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "diamond", "none", "12"]
	}
}

function getShovelTypeData()
{
	var _0x473F = "";
	_0x473F = "shovel";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "none", "sapphire", "4000"]
	};
	_0x473F = "sapphireShovel";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "sapphire", "emerald", "3500"]
	};
	_0x473F = "emeraldShovel";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "emerald", "ruby", "3000"]
	};
	_0x473F = "rubyShovel";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "ruby", "diamond", "2500"]
	};
	_0x473F = "diamondShovel";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "diamond", "none", "2000"]
	}
}

function getChiselTypeData()
{
	var _0x473F = "";
	_0x473F = "chisel";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "none", "sapphire", 0.5]
	};
	_0x473F = "sapphireChisel";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "sapphire", "emerald", 0.4]
	};
	_0x473F = "emeraldChisel";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "emerald", "ruby", 0.3]
	};
	_0x473F = "rubyChisel";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "ruby", "diamond", 0.2]
	};
	_0x473F = "diamondChisel";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "diamond", "none", 0.0]
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
	var _0x473F = "";
	_0x473F = "axe";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "none", "sapphire", "0"]
	};
	_0x473F = "sapphireAxe";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "sapphire", "emerald", "5"]
	};
	_0x473F = "emeraldAxe";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "emerald", "ruby", "10"]
	};
	_0x473F = "rubyAxe";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "ruby", "diamond", "15"]
	};
	_0x473F = "diamondAxe";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "diamond", "none", "20"]
	};
	return ["none", "none", "none", 0]
}

function getChainsawTypeData()
{
	var _0x473F = "";
	_0x473F = "chainsaw";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "none", "sapphire", "5"]
	};
	_0x473F = "sapphireChainsaw";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "sapphire", "emerald", "10"]
	};
	_0x473F = "emeraldChainsaw";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "emerald", "ruby", "15"]
	};
	_0x473F = "rubyChainsaw";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "ruby", "diamond", "20"]
	};
	_0x473F = "diamondChainsaw";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "diamond", "none", "25"]
	};
	return ["none", "none", "none", 0]
}

function getTrowelTypeData()
{
	var _0x473F = "";
	_0x473F = "trowel";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "none", "sapphire", "5"]
	};
	_0x473F = "sapphireTrowel";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "sapphire", "emerald", "10"]
	};
	_0x473F = "emeraldTrowel";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "emerald", "ruby", "15"]
	};
	_0x473F = "rubyTrowel";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "ruby", "diamond", "20"]
	};
	_0x473F = "diamondTrowel";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "diamond", "none", "25"]
	};
	return ["none", "none", "none", 0]
}

function getHammerTypeData()
{
	var _0x473F = "";
	_0x473F = "stardustHammer";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "none", "sapphire", "17"]
	};
	_0x473F = "sapphireStardustHammer";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "sapphire", "emerald", "16"]
	};
	_0x473F = "emeraldStardustHammer";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "emerald", "ruby", "15"]
	};
	_0x473F = "rubyStardustHammer";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "ruby", "diamond", "14"]
	};
	_0x473F = "diamondStardustHammer";
	if (getItem(_0x473F) == 1)
	{
		return [_0x473F, "diamond", "none", "12"]
	}
}

function confirmSocketDialogue(_0x4C92, _0x4C75, _0x41CF)
{
	confirmDialogue(_0x4C75, "Add a <img src=\'images/" + _0x41CF + ".png\' class=\'img-30\' /> to your tool?<br /><br /><i style=\'color:grey\'>Upgrading the tool will reduce its stardust cost per xp.</i>", "Confirm Socket", "Cancel", "SOCKET=" + _0x4C92)
}

function openStardustToolDialogue(_0x4C92)
{
	var _0x68E4 = document.getElementById("dialogue-stardust-tools-socket-button");
	var _0x3AC9 = document.getElementById("dialogue-stardust-tools-socket-image");
	var _0x5DAD = document.getElementById("dialogue-stardust-tools-socket-gem-label");
	var _0x691E;
	if (_0x4C92 == "stardustPickaxe")
	{
		var _0x691E = getPickaxeTypeData();
		var _0x41CF = _0x691E[2]
	};
	if (_0x4C92 == "stardustHammer")
	{
		var _0x691E = getHammerTypeData();
		var _0x41CF = _0x691E[2]
	};
	if (_0x41CF == "none")
	{
		_0x68E4.style.display = "none"
	}
	else
	{
		_0x3AC9.src = "images/" + _0x41CF + ".png";
		_0x68E4.style.display = "";
		_0x68E4.setAttribute("onclick", "confirmSocketDialogue(\'" + _0x4C92 + "\',\'images/" + _0x691E[0] + ".png\',\'" + _0x41CF + "\');closeDialogue(\'dialogue-stardust-tools\')");
		_0x5DAD.innerHTML = _0x41CF
	};
	var _0x6901 = global_stardustToolsMap[_0x4C92];
	var _0x61FB = _0x6901.arrayItemsToConvertArray;
	var _0x61DE = _0x6901.arrayItemsConvetXpArray;
	document.getElementById("dialogue-stardust-tools-selectItem").innerHTML = "";
	var _0x3AAC = "";
	for (var _0x3607 = 0; _0x3607 < _0x61FB.length; _0x3607++)
	{
		_0x3AAC += generateHTMLToSelectToolConversionItem(_0x4C92, _0x61FB[_0x3607], _0x61DE[_0x3607])
	};
	document.getElementById("dialogue-stardust-tools-selectItem").innerHTML = _0x3AAC;
	openDialogueOverride("dialogue-stardust-tools", "large")
}

function openStardustToolDialogue2(_0x4C92, _0x47D0, _0x552E)
{
	var _0x6958;
	var _0x693B;
	var _0x645C;
	if (_0x4C92 == "stardustPickaxe")
	{
		_0x6958 = parseInt(getPickaxeTypeData()[3]);
		_0x693B = getPickaxeTypeData()[0];
		_0x645C = getPickaxeTypeData()[1];
		document.getElementById("dialogue-stardustTool2-skillChosen-hidden").value = "mining"
	}
	else
	{
		if (_0x4C92 == "stardustHammer")
		{
			_0x6958 = parseInt(getHammerTypeData()[3]);
			_0x693B = getHammerTypeData()[0];
			_0x645C = getHammerTypeData()[1];
			document.getElementById("dialogue-stardustTool2-skillChosen-hidden").value = "crafting"
		}
	};
	if (_0x6958 > getItem("stardust"))
	{
		confirmDialogue("images/stardust.gif", "<span style=\'color:red\'>You do not have enough stardust.</span><br /><br /><span style=\'color:grey\'>Your current stardust required per XP is: " + _0x6958, "Close", "", "");
		return
	};
	document.getElementById("dialogue-stardustTool2-item-img").src = "images/" + _0x47D0 + ".png";
	document.getElementById("dialogue-stardustTool2-sdperxp-hidden").value = _0x6958;
	document.getElementById("dialogue-stardustTool2-tool-hidden").value = _0x4C92;
	document.getElementById("dialogue-stardustTool2-item-hidden").value = _0x47D0;
	document.getElementById("stardustTool2-info").innerHTML = "<b>Socket: </b>" + "<span style=\'color:grey\'>" + _0x645C + " <img src=\'images/" + _0x645C + ".png\' class=\'img-30\' /> " + "</span>" + "<br />" + "<b>Stardust Cost: </b>" + "<span style=\'color:grey\'>" + _0x6958 + " <img src=\'images/stardustIcon.png\' class=\'img-20\' /> per XP";
	document.getElementById("dialogue-stardustTool2-input").value = 1;
	document.getElementById("dialogue-stardustTool2-submit-btn").onclick = function ()
	{
		sendBytes("USE_STARDUST_TOOL_" + _0x4C92.toUpperCase() + "=" + _0x47D0 + "~" + document.getElementById("dialogue-stardustTool2-input").value);
		closeDialogue("dialogue-stardustTool2")
	};
	onKeyUpStardustXonvertXp();
	openDialogue("dialogue-stardustTool2")
}

function playerMarketBuyClicksAll()
{
	var _0x3933 = document.getElementById("dialogue-market-buy-hidden-itemName").value;
	var _0x44DE = document.getElementById("dialogue-market-buy-hidden-price").value;
	var _0x3950 = document.getElementById("dialogue-market-buy-hidden-amount").value;
	var _0x6252 = document.getElementById("dialogue-market-buy-input").value;
	var _0x626F = _0x44DE * _0x6252;
	var _0x3CD3 = createHTMLBoxCheckOrXCollection(.coins, [_0x626F], ["", ""]);
	document.getElementById("dialogue-market-buy-area").innerHTML = _0x3CD3
}

function getBonemealAmount(_0x5259)
{
	switch (_0x5259)
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

function getMaxBonemealToPut(_0x5259)
{
	var _0x4195 = parseInt(getBonemealTypeData()[3]);
	if (getItem("diamondBonemealBin") > 0)
	{
		return getItem(_0x5259)
	};
	if (_0x4195 > 0)
	{
		_0x4195 -= getItem("bonemeal");
		var _0x5480 = getBonemealAmount(_0x5259);
		var _0x4949 = parseInt(_0x4195 / _0x5480);
		if (_0x4949 > getItem(_0x5259))
		{
			return getItem(_0x5259)
		}
		else
		{
			return _0x4949
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
	var _0x3933 = document.getElementById("dialogue-market-buy-hidden-itemName").value;
	var _0x44DE = document.getElementById("dialogue-market-buy-hidden-price").value;
	var _0x3950 = document.getElementById("dialogue-market-buy-hidden-amount").value;
	var _0x6252 = document.getElementById("dialogue-market-buy-input").value;
	var _0x626F = _0x44DE * _0x6252;
	var _0x3CD3 = createHTMLBoxCheckOrXCollection(.coins, [_0x626F], ["", ""]);
	document.getElementById("dialogue-market-buy-area").innerHTML = _0x3CD3
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

function changeValueOfInputStardustTool(_0x45C6, _0x45E3, _0x45A9)
{
	var _0x4535 = getMaxForStardustTool();
	switch (_0x45A9)
	{
	case "ONE":
		_0x4535 = 1;
		break;
	case "25%":
		_0x4535 *= 0.25;
		break;
	case "50%":
		_0x4535 *= 0.5;
		break
	};
	document.getElementById("dialogue-stardustTool2-input").value = parseInt(_0x4535);
	onKeyUpStardustXonvertXp()
}

function getMaxForStardustTool()
{
	var _0x3916 = document.getElementById("dialogue-stardustTool2-item-hidden").value;
	var _0x4C92 = document.getElementById("dialogue-stardustTool2-tool-hidden").value;
	var _0x5511 = parseInt(document.getElementById("dialogue-stardustTool2-sdperxp-hidden").value);
	var _0x552E = 0;
	var _0x549D = global_stardustToolsMap[_0x4C92].arrayItemsToConvertArray;
	var _0x54BA = global_stardustToolsMap[_0x4C92].arrayItemsConvetXpArray;
	for (var _0x3607 = 0; _0x3607 < _0x549D.length; _0x3607++)
	{
		if (_0x549D[_0x3607] == _0x3916)
		{
			_0x552E = _0x54BA[_0x3607];
			break
		}
	};
	var _0x54D7 = getItem(_0x3916);
	var _0x54F4 = _0x552E * _0x54D7 * _0x5511;
	if (getItem("stardust") >= _0x54F4)
	{
		return _0x54D7
	}
	else
	{
		return parseInt(getItem("stardust") / (_0x552E * _0x5511))
	}
}

function onKeyUpStardustXonvertXp()
{
	var _0x3916 = document.getElementById("dialogue-stardustTool2-item-hidden").value;
	var _0x44C1 = parseInt(document.getElementById("dialogue-stardustTool2-input").value);
	var _0x4C92 = document.getElementById("dialogue-stardustTool2-tool-hidden").value;
	var _0x5511 = parseInt(document.getElementById("dialogue-stardustTool2-sdperxp-hidden").value);
	var _0x628C = document.getElementById("dialogue-stardustTool2-skillChosen-hidden").value;
	if (isNaN(_0x44C1))
	{
		document.getElementById("dialogue-stardustTool2-section-area").innerHTML = "";
		return
	};
	var _0x552E = 0;
	var _0x549D = global_stardustToolsMap[_0x4C92].arrayItemsToConvertArray;
	var _0x54BA = global_stardustToolsMap[_0x4C92].arrayItemsConvetXpArray;
	for (var _0x3607 = 0; _0x3607 < _0x549D.length; _0x3607++)
	{
		if (_0x549D[_0x3607] == _0x3916)
		{
			_0x552E = _0x54BA[_0x3607];
			break
		}
	};
	var _0x3CD3 = "";
	var _0x62A9 = _0x5511 * _0x44C1 * _0x552E;
	var _0x40AD = _0x44C1 * _0x552E;
	_0x3CD3 = createHTMLBoxCheckOrXCollection([_0x3916, "stardust"], [_0x44C1, _0x62A9], ["", ""]);
	document.getElementById("dialogue-stardustTool2-section-area").innerHTML = "<span class=\'html-box-check-or-check\' style=\'border:1px solid purple;display:inline-block;background-color:#ff99cc;font-size:16pt\'><img src=\'images/" + _0x628C + "Skill.png\' class=\'img-50\' /> +" + formatNumber(_0x552E * _0x44C1) + " XP</span>" + _0x3CD3
}

function loadMuteList(_0x3746)
{
	var _0x3763 = _0x3746.split("~");
	var _0x3AAC = "<center>";
	_0x3AAC += "<table id=\'muteList-table\' class=\'sortable basic-table\' width=\'90%\'>";
	_0x3AAC += "<thead>";
	_0x3AAC += "<tr><th>Username</th><th>Muted By</th><th>Date Muted</th><th>Date Unmuted</th><th width=\'50%\'>Reason</th><th>IP Muted</th><th>Is Currenty Muted</th></tr>";
	_0x3AAC += "</thead>";
	_0x3AAC += "<tbody>";
	for (var _0x3607 = 0; _0x3607 < _0x3763.length; _0x3607++)
	{
		var _0x5CFF = _0x3763[_0x3607];
		_0x3607++;
		var _0x5CA8 = _0x3763[_0x3607];
		_0x3607++;
		var _0x5C8B = _0x3763[_0x3607];
		_0x3607++;
		var _0x5CE2 = _0x3763[_0x3607];
		_0x3607++;
		var _0x5CC5 = _0x3763[_0x3607];
		_0x3607++;
		var _0x5C6E = _0x3763[_0x3607];
		_0x3607++;
		var _0x5C51 = _0x3763[_0x3607];
		_0x3AAC += "<tr>";
		_0x3AAC += "<td>" + _0x5CFF + "</td>";
		_0x3AAC += "<td>" + _0x5CA8 + "</td>";
		_0x3AAC += "<td>" + formatUnixToDate(_0x5C8B) + "</td>";
		if (_0x5CE2 - _0x5C8B >= 54000000000)
		{
			_0x3AAC += "<td>" + "Forever" + "</td>"
		}
		else
		{
			_0x3AAC += "<td>" + formatUnixToDate(_0x5CE2) + "</td>"
		};
		_0x3AAC += "<td>" + _0x5CC5 + "</td>";
		_0x3AAC += "<td>" + _0x5C6E + "</td>";
		_0x3AAC += "<td>" + _0x5C51 + "</td>";
		_0x3AAC += "</tr>"
	};
	_0x3AAC += "</tbody>";
	_0x3AAC += "</table>";
	_0x3AAC += "</center>";
	document.getElementById("section-muteList").innerHTML = _0x3AAC;
	sorttable.makeSortable(document.getElementById("muteList-table"))
}

function formatUnixToDate(_0x50FD)
{
	var _0x5137 = _0x50FD;
	var _0x511A = new Date(parseInt(_0x5137));
	var _0x5154 = _0x511A.toString("MM/dd/yy HH:mm:ss");
	return _0x5154
}

function openShovelDialogue()
{
	var _0x68C7 = getShovelTypeData();
	var _0x6683 = _0x68C7[0];
	var _0x645C = _0x68C7[1];
	var _0x41CF = _0x68C7[2];
	var _0x58EB = _0x68C7[3];
	if (_0x41CF != "none")
	{
		confirmDialogue("images/" + _0x6683 + ".png", "Add a <img src=\'images/" + _0x41CF + ".png\' class=\'img-30\' /> to your shovel?<br /><br /><i style=\'color:grey\'>Upgrading your shovel will increase your chance of finding sand.</i>", "Socket", "Close", "SOCKET=shovel")
	}
}

function openSmallFishingNetDialogue()
{
	var _0x66A0 = getSmallFishingNetTypeData();
	var _0x6683 = _0x66A0[0];
	var _0x645C = _0x66A0[1];
	var _0x41CF = _0x66A0[2];
	var _0x66BD = _0x66A0[3];
	if (_0x41CF != "none")
	{
		confirmDialogue("images/" + _0x6683 + ".png", "Add a <img src=\'images/" + _0x41CF + ".png\' class=\'img-30\' /> to your fishing tool?<br /><br /><i style=\'color:grey\'>Upgrading will allow you to catch:<br /><br /><img src=\'images/" + _0x66BD + ".png\' class=\'img-50\' /> <span style=\'color:brown\'>" + getItemName(_0x66BD) + "</span>", "Socket", "Close", "SOCKET=smallFishingNet")
	}
}

function openFishingRodDialogue()
{
	var _0x66A0 = getFishingRodTypeData();
	var _0x6683 = _0x66A0[0];
	var _0x645C = _0x66A0[1];
	var _0x41CF = _0x66A0[2];
	var _0x66BD = _0x66A0[3];
	if (_0x41CF != "none")
	{
		confirmDialogue("images/" + _0x6683 + ".png", "Add a <img src=\'images/" + _0x41CF + ".png\' class=\'img-30\' /> to your fishing tool?<br /><br /><i style=\'color:grey\'>Upgrading will allow you to catch:<br /><br /><img src=\'images/" + _0x66BD + ".png\' class=\'img-50\' /> <span style=\'color:brown\'>" + getItemName(_0x66BD) + "</span>", "Socket", "Close", "SOCKET=fishingRod")
	}
}

function openHarpoonDialogue()
{
	var _0x66A0 = getHarpoonTypeData();
	var _0x6683 = _0x66A0[0];
	var _0x645C = _0x66A0[1];
	var _0x41CF = _0x66A0[2];
	var _0x66BD = _0x66A0[3];
	if (_0x41CF != "none")
	{
		confirmDialogue("images/" + _0x6683 + ".png", "Add a <img src=\'images/" + _0x41CF + ".png\' class=\'img-30\' /> to your fishing tool?<br /><br /><i style=\'color:grey\'>Upgrading will allow you to catch:<br /><br /><img src=\'images/" + _0x66BD + ".png\' class=\'img-50\' /> <span style=\'color:brown\'>" + getItemName(_0x66BD) + "</span>", "Socket", "Close", "SOCKET=harpoon")
	}
}

function openAxeDialogue()
{
	var _0x6405 = getAxeTypeData();
	var _0x643F = _0x6405[0];
	var _0x645C = _0x6405[1];
	var _0x41CF = _0x6405[2];
	var _0x6422 = _0x6405[3];
	if (_0x41CF != "none")
	{
		confirmDialogue("images/" + _0x643F + ".png", "Add a <img src=\'images/" + _0x41CF + ".png\' class=\'img-30\' /> to your axe?<br /><br /><i style=\'color:grey\'>Upgrading your axe will give you more logs when chopping trees.", "Socket", "Close", "SOCKET=axe")
	}
}

function openChainsawDialogue()
{
	var _0x6405 = getChainsawTypeData();
	var _0x643F = _0x6405[0];
	var _0x645C = _0x6405[1];
	var _0x41CF = _0x6405[2];
	var _0x6422 = _0x6405[3];
	if (_0x41CF != "none")
	{
		confirmDialogue("images/" + _0x643F + ".png", "Add a <img src=\'images/" + _0x41CF + ".png\' class=\'img-30\' /> to your chainsaw?<br /><br /><i style=\'color:grey\'>Upgrading your chainsaw will give you more logs when chopping trees.", "Socket", "Close", "SOCKET=chainsaw")
	}
}

function openTrowelDialogue()
{
	var _0x6405 = getTrowelTypeData();
	var _0x643F = _0x6405[0];
	var _0x645C = _0x6405[1];
	var _0x41CF = _0x6405[2];
	var _0x6422 = _0x6405[3];
	if (_0x41CF != "none")
	{
		confirmDialogue("images/" + _0x643F + ".png", "Add a <img src=\'images/" + _0x41CF + ".png\' class=\'img-30\' /> to your trowel?<br /><br /><i style=\'color:grey\'>Upgrading your trowel will increase your chance of finding seeds by 5%.", "Socket", "Close", "SOCKET=trowel")
	}
}

function openChiselDialogue()
{
	var _0x6479 = getChiselTypeData();
	var _0x643F = _0x6479[0];
	var _0x645C = _0x6479[1];
	var _0x41CF = _0x6479[2];
	var _0x6496 = _0x6479[3];
	if (_0x41CF != "none")
	{
		confirmDialogue("images/" + _0x643F + ".png", "Add a <img src=\'images/" + _0x41CF + ".png\' class=\'img-30\' /> to your chisel?<br /><br /><i style=\'color:grey\'>Upgrading your chisel will reduce your failure rate when opening geodes.", "Socket", "Close", "SOCKET=chisel")
	}
}

function getHeat(_0x535E)
{
	var _0x4FF8 = 0;
	switch (_0x535E)
	{
	case "logs":
		_0x4FF8 = 1;
		break;
	case "oakLogs":
		_0x4FF8 = 2;
		break;
	case "willowLogs":
		_0x4FF8 = 3;
		break;
	case "bambooLogs":
		_0x4FF8 = 4;
		break;
	case "mapleLogs":
		_0x4FF8 = 5;
		break;
	case "lavaLogs":
		_0x4FF8 = 6;
		break;
	case "pineLogs":
		_0x4FF8 = 7;
		break;
	case "stardustLogs":
		_0x4FF8 = 8;
		break
	};
	return _0x4FF8
}

function addLogsOven(_0x3D64)
{
	openInputDialogue("Add Logs", "images/" + _0x3D64 + ".png", _0x3D64, 1, ["heat"], [getHeat(_0x3D64)], [_0x3D64], [1], "Add Heat", "ADD_HEAT", "Adding logs to your oven will increase its heat.  Heat is used to cook food.")
}

function addLogsCharcoalFoundry(_0x3D64)
{
	openInputDialogue("Add Logs", "images/" + _0x3D64 + ".png", _0x3D64, 1, ["charcoal"], [0], [_0x3D64, "oil"], [1, 1000], "Add To Foundry", "ADD_CHARCOAL_FOUNDRY", "Burning logs in foundry will produce charcoal.", 100)
}

function clicksOven()
{
	var _0x3AAC = "";
	var _0x473F = "";
	_0x473F = "logs";
	_0x473F = "logs";
	_0x3AAC += "<div oncontextmenu=\'sendBytes(\"ADD_ALL_HEAT=" + _0x473F + "\");document.getElementById(\"dialogue-oven-log-" + _0x473F + "\").innerHTML = 0;return false;\' onclick=\'addLogsOven(\"" + _0x473F + "\");closeDialogue(\"dialogue-confirm\")\' class=\'oven-log-button\'>";
	_0x3AAC += "<table width=\'100%\'>";
	_0x3AAC += "<tr>";
	_0x3AAC += "<td>";
	_0x3AAC += "<img src=\'images/" + _0x473F + ".png\' class=\'img-70\' />";
	_0x3AAC += "</td>";
	_0x3AAC += "<td style=\'text-align:right;\'>";
	_0x3AAC += "<span id=\'dialogue-oven-log-" + _0x473F + "\' style=\'color:orange\'>" + formatNumber(getItem(_0x473F)) + "</span><br /> " + _0x473F.toUpperCase();
	_0x3AAC += "<br /><br />";
	_0x3AAC += "<img src=\'images/heat.png\' class=\'img-20\' /> " + getHeat(_0x473F);
	_0x3AAC += "</td>";
	_0x3AAC += "</table>";
	_0x3AAC += "</div>";
	_0x473F = "oakLogs";
	if (getItem(_0x473F) > 0)
	{
		_0x3AAC += "<div oncontextmenu=\'sendBytes(\"ADD_ALL_HEAT=" + _0x473F + "\");document.getElementById(\"dialogue-oven-log-" + _0x473F + "\").innerHTML = 0;return false;\' onclick=\'addLogsOven(\"" + _0x473F + "\");closeDialogue(\"dialogue-confirm\")\' class=\'oven-log-button\'>";
		_0x3AAC += "<table width=\'100%\'>";
		_0x3AAC += "<tr>";
		_0x3AAC += "<td>";
		_0x3AAC += "<img src=\'images/" + _0x473F + ".png\' class=\'img-70\' />";
		_0x3AAC += "</td>";
		_0x3AAC += "<td style=\'text-align:right;\'>";
		_0x3AAC += "<span id=\'dialogue-oven-log-" + _0x473F + "\' style=\'color:orange\'>" + formatNumber(getItem(_0x473F)) + "</span><br /> " + "OAK";
		_0x3AAC += "<br /><br />";
		_0x3AAC += "<img src=\'images/heat.png\' class=\'img-20\' /> " + getHeat(_0x473F);
		_0x3AAC += "</td>";
		_0x3AAC += "</table>";
		_0x3AAC += "</div>"
	};
	_0x473F = "willowLogs";
	if (getItem(_0x473F) > 0)
	{
		_0x3AAC += "<div oncontextmenu=\'sendBytes(\"ADD_ALL_HEAT=" + _0x473F + "\");document.getElementById(\"dialogue-oven-log-" + _0x473F + "\").innerHTML = 0;return false;\' onclick=\'addLogsOven(\"" + _0x473F + "\");closeDialogue(\"dialogue-confirm\")\'  class=\'oven-log-button\'>";
		_0x3AAC += "<table width=\'100%\'>";
		_0x3AAC += "<tr>";
		_0x3AAC += "<td>";
		_0x3AAC += "<img src=\'images/" + _0x473F + ".png\' class=\'img-70\' />";
		_0x3AAC += "</td>";
		_0x3AAC += "<td style=\'text-align:right;\'>";
		_0x3AAC += "<span id=\'dialogue-oven-log-" + _0x473F + "\' style=\'color:orange\'>" + formatNumber(getItem(_0x473F)) + "</span><br /> " + "WILLOW";
		_0x3AAC += "<br /><br />";
		_0x3AAC += "<img src=\'images/heat.png\' class=\'img-20\' /> " + getHeat(_0x473F);
		_0x3AAC += "</td>";
		_0x3AAC += "</table>";
		_0x3AAC += "</div>"
	};
	_0x473F = "bambooLogs";
	if (getItem(_0x473F) > 0)
	{
		_0x3AAC += "<div oncontextmenu=\'sendBytes(\"ADD_ALL_HEAT=" + _0x473F + "\");document.getElementById(\"dialogue-oven-log-" + _0x473F + "\").innerHTML = 0;return false;\' onclick=\'addLogsOven(\"" + _0x473F + "\");closeDialogue(\"dialogue-confirm\")\'  class=\'oven-log-button\'>";
		_0x3AAC += "<table width=\'100%\'>";
		_0x3AAC += "<tr>";
		_0x3AAC += "<td>";
		_0x3AAC += "<img src=\'images/" + _0x473F + ".png\' class=\'img-70\' />";
		_0x3AAC += "</td>";
		_0x3AAC += "<td style=\'text-align:right;\'>";
		_0x3AAC += "<span id=\'dialogue-oven-log-" + _0x473F + "\' style=\'color:orange\'>" + formatNumber(getItem(_0x473F)) + "</span><br /> " + "BAMBOO";
		_0x3AAC += "<br /><br />";
		_0x3AAC += "<img src=\'images/heat.png\' class=\'img-20\' /> " + getHeat(_0x473F);
		_0x3AAC += "</td>";
		_0x3AAC += "</table>";
		_0x3AAC += "</div>"
	};
	_0x473F = "mapleLogs";
	if (getItem(_0x473F) > 0)
	{
		_0x3AAC += "<div oncontextmenu=\'sendBytes(\"ADD_ALL_HEAT=" + _0x473F + "\");document.getElementById(\"dialogue-oven-log-" + _0x473F + "\").innerHTML = 0;return false;\' onclick=\'addLogsOven(\"" + _0x473F + "\");closeDialogue(\"dialogue-confirm\")\'  class=\'oven-log-button\'>";
		_0x3AAC += "<table width=\'100%\'>";
		_0x3AAC += "<tr>";
		_0x3AAC += "<td>";
		_0x3AAC += "<img src=\'images/" + _0x473F + ".png\' class=\'img-70\' />";
		_0x3AAC += "</td>";
		_0x3AAC += "<td style=\'text-align:right;\'>";
		_0x3AAC += "<span id=\'dialogue-oven-log-" + _0x473F + "\' style=\'color:orange\'>" + formatNumber(getItem(_0x473F)) + "</span><br /> " + "MAPLE";
		_0x3AAC += "<br /><br />";
		_0x3AAC += "<img src=\'images/heat.png\' class=\'img-20\' /> " + getHeat(_0x473F);
		_0x3AAC += "</td>";
		_0x3AAC += "</table>";
		_0x3AAC += "</div>"
	};
	_0x473F = "lavaLogs";
	if (getItem(_0x473F) > 0)
	{
		_0x3AAC += "<div oncontextmenu=\'sendBytes(\"ADD_ALL_HEAT=" + _0x473F + "\");document.getElementById(\"dialogue-oven-log-" + _0x473F + "\").innerHTML = 0;return false;\' onclick=\'addLogsOven(\"" + _0x473F + "\");closeDialogue(\"dialogue-confirm\")\'  class=\'oven-log-button\'>";
		_0x3AAC += "<table width=\'100%\'>";
		_0x3AAC += "<tr>";
		_0x3AAC += "<td>";
		_0x3AAC += "<img src=\'images/" + _0x473F + ".png\' class=\'img-70\' />";
		_0x3AAC += "</td>";
		_0x3AAC += "<td style=\'text-align:right;\'>";
		_0x3AAC += "<span id=\'dialogue-oven-log-" + _0x473F + "\' style=\'color:orange\'>" + formatNumber(getItem(_0x473F)) + "</span><br /> " + "LAVA";
		_0x3AAC += "<br /><br />";
		_0x3AAC += "<img src=\'images/heat.png\' class=\'img-20\' /> " + getHeat(_0x473F);
		_0x3AAC += "</td>";
		_0x3AAC += "</table>";
		_0x3AAC += "</div>"
	};
	_0x473F = "pineLogs";
	if (getItem(_0x473F) > 0)
	{
		_0x3AAC += "<div oncontextmenu=\'sendBytes(\"ADD_ALL_HEAT=" + _0x473F + "\");document.getElementById(\"dialogue-oven-log-" + _0x473F + "\").innerHTML = 0;return false;\' onclick=\'addLogsOven(\"" + _0x473F + "\");closeDialogue(\"dialogue-confirm\")\'  class=\'oven-log-button\'>";
		_0x3AAC += "<table width=\'100%\'>";
		_0x3AAC += "<tr>";
		_0x3AAC += "<td>";
		_0x3AAC += "<img src=\'images/" + _0x473F + ".png\' class=\'img-70\' />";
		_0x3AAC += "</td>";
		_0x3AAC += "<td style=\'text-align:right;\'>";
		_0x3AAC += "<span id=\'dialogue-oven-log-" + _0x473F + "\' style=\'color:orange\'>" + formatNumber(getItem(_0x473F)) + "</span><br /> " + "PINE";
		_0x3AAC += "<br /><br />";
		_0x3AAC += "<img src=\'images/heat.png\' class=\'img-20\' /> " + getHeat(_0x473F);
		_0x3AAC += "</td>";
		_0x3AAC += "</table>";
		_0x3AAC += "</div>"
	};
	_0x473F = "stardustLogs";
	if (getItem(_0x473F) > 0)
	{
		_0x3AAC += "<div oncontextmenu=\'sendBytes(\"ADD_ALL_HEAT=" + _0x473F + "\");document.getElementById(\"dialogue-oven-log-" + _0x473F + "\").innerHTML = 0;return false;\' onclick=\'addLogsOven(\"" + _0x473F + "\");closeDialogue(\"dialogue-confirm\")\'  class=\'oven-log-button\'>";
		_0x3AAC += "<table width=\'100%\'>";
		_0x3AAC += "<tr>";
		_0x3AAC += "<td>";
		_0x3AAC += "<img src=\'images/" + _0x473F + ".png\' class=\'img-70\' />";
		_0x3AAC += "</td>";
		_0x3AAC += "<td style=\'text-align:right;\'>";
		_0x3AAC += "<span id=\'dialogue-oven-log-" + _0x473F + "\' style=\'color:orange\'>" + formatNumber(getItem(_0x473F)) + "</span><br /> " + "STARDUST";
		_0x3AAC += "<br /><br />";
		_0x3AAC += "<img src=\'images/heat.png\' class=\'img-20\' /> " + getHeat(_0x473F);
		_0x3AAC += "</td>";
		_0x3AAC += "</table>";
		_0x3AAC += "</div>"
	};
	if (getItem("heatTotal") > 100)
	{
		_0x3AAC += "<br /><br /><span style=\'color:grey;font-size:10pt\'>Tip: Right click a log in this menu to automatically use them all.</span>"
	};
	confirmDialogue("none", _0x3AAC, "Close", "", "")
}

function getCharcoalSuccessRate(_0x52CD)
{
	switch (_0x52CD)
	{
	case "logs":
		return 0.01;
	case "oakLogs":
		return 0.02;
	case "willowLogs":
		return 0.03;
	case "bambooLogs":
		return 0.05;
	case "mapleLogs":
		return 0.07;
	case "lavaLogs":
		return 0.10;
	case "pineLogs":
		return 0.14;
	case "stardustLogs":
		return 0.20
	}
}

function charcoalFoundryMoreInfo()
{
	closeDialogue("dialogue-confirm");
	confirmDialogue("images/charcoalFoundry.png", "Add logs to the charcoal foundry at the expense of oil.  Each type of log requires the same amount of oil, however the chance of getting a charcoal per log changes.<br /><br />For example, a willow log has a 15% chance to yeild charocoal.  So on average, you will gain 15 charcoal for 100 willow logs burned in the foundry.", "Close", "", "")
}

function clicksCharcoalFoundry()
{
	var _0x3AAC = "<center><span style=\'font-size:16pt;font-weight:bold;\'>Charcoal Foundry</span><br /><br /><span style=\'color:grey;font-size:10pt;\'>Converts log into charcoal.  Each log has a different success rate. <u style=\'cursor:pointer\' onclick=\'charcoalFoundryMoreInfo();\'>(more info)</u></span></center><br />";
	var _0x473F = "";
	_0x473F = "logs";
	_0x3AAC += "<div onclick=\'addLogsCharcoalFoundry(\"" + _0x473F + "\");closeDialogue(\"dialogue-confirm\")\' style=\'width:70%;\' class=\'oven-log-button\'>";
	_0x3AAC += "<table width=\'100%\'>";
	_0x3AAC += "<tr>";
	_0x3AAC += "<td>";
	_0x3AAC += "<img src=\'images/" + _0x473F + ".png\' class=\'img-70\' />";
	_0x3AAC += "</td>";
	_0x3AAC += "<td style=\'text-align:right;\'>";
	_0x3AAC += "<span id=\'dialogue-oven-log-" + _0x473F + "\' style=\'color:orange\'>" + formatNumber(getItem(_0x473F)) + "</span><br /> " + _0x473F.toUpperCase();
	_0x3AAC += "<br /><br />";
	_0x3AAC += "<img src=\'images/charcoal_light.png\' class=\'img-30\' /> <b style=\'font-size:14pt;color:grey\'>" + parseInt(getCharcoalSuccessRate(_0x473F) * 100) + "%</b>";
	_0x3AAC += "</td>";
	_0x3AAC += "</table>";
	_0x3AAC += "</div>";
	_0x473F = "oakLogs";
	if (getItem(_0x473F) > 0)
	{
		_0x3AAC += "<div onclick=\'addLogsCharcoalFoundry(\"" + _0x473F + "\");closeDialogue(\"dialogue-confirm\")\' style=\'width:70%;\'  class=\'oven-log-button\'>";
		_0x3AAC += "<table width=\'100%\'>";
		_0x3AAC += "<tr>";
		_0x3AAC += "<td>";
		_0x3AAC += "<img src=\'images/" + _0x473F + ".png\' class=\'img-70\' />";
		_0x3AAC += "</td>";
		_0x3AAC += "<td style=\'text-align:right;\'>";
		_0x3AAC += "<span id=\'dialogue-oven-log-" + _0x473F + "\' style=\'color:orange\'>" + formatNumber(getItem(_0x473F)) + "</span><br /> " + _0x473F.toUpperCase();
		_0x3AAC += "<br /><br />";
		_0x3AAC += "<img src=\'images/charcoal_light.png\' class=\'img-30\' /> <b style=\'font-size:14pt;color:grey\'>" + parseInt(getCharcoalSuccessRate(_0x473F) * 100) + "%</b>";
		_0x3AAC += "</td>";
		_0x3AAC += "</table>";
		_0x3AAC += "</div>"
	};
	_0x473F = "willowLogs";
	if (getItem(_0x473F) > 0)
	{
		_0x3AAC += "<div onclick=\'addLogsCharcoalFoundry(\"" + _0x473F + "\");closeDialogue(\"dialogue-confirm\")\' style=\'width:70%;\'  class=\'oven-log-button\'>";
		_0x3AAC += "<table width=\'100%\'>";
		_0x3AAC += "<tr>";
		_0x3AAC += "<td>";
		_0x3AAC += "<img src=\'images/" + _0x473F + ".png\' class=\'img-70\' />";
		_0x3AAC += "</td>";
		_0x3AAC += "<td style=\'text-align:right;\'>";
		_0x3AAC += "<span id=\'dialogue-oven-log-" + _0x473F + "\' style=\'color:orange\'>" + formatNumber(getItem(_0x473F)) + "</span><br /> " + _0x473F.toUpperCase();
		_0x3AAC += "<br /><br />";
		_0x3AAC += "<img src=\'images/charcoal_light.png\' class=\'img-30\' /> <b style=\'font-size:14pt;color:grey\'>" + parseInt(getCharcoalSuccessRate(_0x473F) * 100) + "%</b>";
		_0x3AAC += "</td>";
		_0x3AAC += "</table>";
		_0x3AAC += "</div>"
	};
	_0x473F = "bambooLogs";
	if (getItem(_0x473F) > 0)
	{
		_0x3AAC += "<div onclick=\'addLogsCharcoalFoundry(\"" + _0x473F + "\");closeDialogue(\"dialogue-confirm\")\' style=\'width:70%;\'  class=\'oven-log-button\'>";
		_0x3AAC += "<table width=\'100%\'>";
		_0x3AAC += "<tr>";
		_0x3AAC += "<td>";
		_0x3AAC += "<img src=\'images/" + _0x473F + ".png\' class=\'img-70\' />";
		_0x3AAC += "</td>";
		_0x3AAC += "<td style=\'text-align:right;\'>";
		_0x3AAC += "<span id=\'dialogue-oven-log-" + _0x473F + "\' style=\'color:orange\'>" + formatNumber(getItem(_0x473F)) + "</span><br /> " + _0x473F.toUpperCase();
		_0x3AAC += "<br /><br />";
		_0x3AAC += "<img src=\'images/charcoal_light.png\' class=\'img-30\' /> <b style=\'font-size:14pt;color:grey\'>" + parseInt(getCharcoalSuccessRate(_0x473F) * 100) + "%</b>";
		_0x3AAC += "</td>";
		_0x3AAC += "</table>";
		_0x3AAC += "</div>"
	};
	_0x473F = "mapleLogs";
	if (getItem(_0x473F) > 0)
	{
		_0x3AAC += "<div onclick=\'addLogsCharcoalFoundry(\"" + _0x473F + "\");closeDialogue(\"dialogue-confirm\")\' style=\'width:70%;\'  class=\'oven-log-button\'>";
		_0x3AAC += "<table width=\'100%\'>";
		_0x3AAC += "<tr>";
		_0x3AAC += "<td>";
		_0x3AAC += "<img src=\'images/" + _0x473F + ".png\' class=\'img-70\' />";
		_0x3AAC += "</td>";
		_0x3AAC += "<td style=\'text-align:right;\'>";
		_0x3AAC += "<span id=\'dialogue-oven-log-" + _0x473F + "\' style=\'color:orange\'>" + formatNumber(getItem(_0x473F)) + "</span><br /> " + _0x473F.toUpperCase();
		_0x3AAC += "<br /><br />";
		_0x3AAC += "<img src=\'images/charcoal_light.png\' class=\'img-30\' /> <b style=\'font-size:14pt;color:grey\'>" + parseInt(getCharcoalSuccessRate(_0x473F) * 100) + "%</b>";
		_0x3AAC += "</td>";
		_0x3AAC += "</table>";
		_0x3AAC += "</div>"
	};
	_0x473F = "lavaLogs";
	if (getItem(_0x473F) > 0)
	{
		_0x3AAC += "<div onclick=\'addLogsCharcoalFoundry(\"" + _0x473F + "\");closeDialogue(\"dialogue-confirm\")\' style=\'width:70%;\'  class=\'oven-log-button\'>";
		_0x3AAC += "<table width=\'100%\'>";
		_0x3AAC += "<tr>";
		_0x3AAC += "<td>";
		_0x3AAC += "<img src=\'images/" + _0x473F + ".png\' class=\'img-70\' />";
		_0x3AAC += "</td>";
		_0x3AAC += "<td style=\'text-align:right;\'>";
		_0x3AAC += "<span id=\'dialogue-oven-log-" + _0x473F + "\' style=\'color:orange\'>" + formatNumber(getItem(_0x473F)) + "</span><br /> " + _0x473F.toUpperCase();
		_0x3AAC += "<br /><br />";
		_0x3AAC += "<img src=\'images/charcoal_light.png\' class=\'img-30\' /> <b style=\'font-size:14pt;color:grey\'>" + parseInt(getCharcoalSuccessRate(_0x473F) * 100) + "%</b>";
		_0x3AAC += "</td>";
		_0x3AAC += "</table>";
		_0x3AAC += "</div>"
	};
	_0x473F = "pineLogs";
	if (getItem(_0x473F) > 0)
	{
		_0x3AAC += "<div onclick=\'addLogsCharcoalFoundry(\"" + _0x473F + "\");closeDialogue(\"dialogue-confirm\")\' style=\'width:70%;\'  class=\'oven-log-button\'>";
		_0x3AAC += "<table width=\'100%\'>";
		_0x3AAC += "<tr>";
		_0x3AAC += "<td>";
		_0x3AAC += "<img src=\'images/" + _0x473F + ".png\' class=\'img-70\' />";
		_0x3AAC += "</td>";
		_0x3AAC += "<td style=\'text-align:right;\'>";
		_0x3AAC += "<span id=\'dialogue-oven-log-" + _0x473F + "\' style=\'color:orange\'>" + formatNumber(getItem(_0x473F)) + "</span><br /> " + _0x473F.toUpperCase();
		_0x3AAC += "<br /><br />";
		_0x3AAC += "<img src=\'images/charcoal_light.png\' class=\'img-30\' /> <b style=\'font-size:14pt;color:grey\'>" + parseInt(getCharcoalSuccessRate(_0x473F) * 100) + "%</b>";
		_0x3AAC += "</td>";
		_0x3AAC += "</table>";
		_0x3AAC += "</div>"
	};
	_0x473F = "stardustLogs";
	if (getItem(_0x473F) > 0)
	{
		_0x3AAC += "<div onclick=\'addLogsCharcoalFoundry(\"" + _0x473F + "\");closeDialogue(\"dialogue-confirm\")\' style=\'width:70%;\'  class=\'oven-log-button\'>";
		_0x3AAC += "<table width=\'100%\'>";
		_0x3AAC += "<tr>";
		_0x3AAC += "<td>";
		_0x3AAC += "<img src=\'images/" + _0x473F + ".png\' class=\'img-70\' />";
		_0x3AAC += "</td>";
		_0x3AAC += "<td style=\'text-align:right;\'>";
		_0x3AAC += "<span id=\'dialogue-oven-log-" + _0x473F + "\' style=\'color:orange\'>" + formatNumber(getItem(_0x473F)) + "</span><br /> " + _0x473F.toUpperCase();
		_0x3AAC += "<br /><br />";
		_0x3AAC += "<img src=\'images/charcoal_light.png\' class=\'img-30\' /> <b style=\'font-size:14pt;color:grey\'>" + parseInt(getCharcoalSuccessRate(_0x473F) * 100) + "%</b>";
		_0x3AAC += "</td>";
		_0x3AAC += "</table>";
		_0x3AAC += "</div>"
	};
	confirmDialogue("none", _0x3AAC, "Close", "", "")
}
global_MarketData = [];

function MarketData(_0x5FD4, _0x5FF1, _0x3933, _0x5F60, _0x44DE, _0x5FB7, _0x5F9A, _0x5F7D, _0x600E)
{
	this.keyFound = _0x5FD4;
	this.playerId = _0x5FF1;
	this.itemName = _0x3933;
	this.itemAmount = _0x5F60;
	this.price = _0x44DE;
	this.itemSlot = _0x5FB7;
	this.itemCollect = _0x5F9A;
	this.itemCategory = _0x5F7D;
	this.postDate = _0x600E
}
global_TradablesData = [];

function Tradables(_0x3933, _0x3D0D, _0x3D47, _0x3C5F)
{
	this.itemName = _0x3933;
	this.lowerLimit = _0x3D0D;
	this.upperLimit = _0x3D47;
	this.category = _0x3C5F
}

function getPlayerSlotData(_0x3C42)
{
	for (i = 0; i < global_MarketData.length; i++)
	{
		if (global_MarketData[i].itemSlot == _0x3C42 && global_MarketData[i].playerId == getItem("playerId"))
		{
			return global_MarketData[i]
		}
	};
	return false
}

function refreshMarketGUI()
{
	for (var _0x3607 = 1; _0x3607 <= 3; _0x3607++)
	{
		var _0x6BF3 = getPlayerSlotData(_0x3607);
		if (!_0x6BF3)
		{
			document.getElementById("market-slot-empty-" + _0x3607).style.display = "";
			document.getElementById("market-slot-" + _0x3607).style.display = "none"
		}
		else
		{
			document.getElementById("market-slot-empty-" + _0x3607).style.display = "none";
			document.getElementById("market-slot-" + _0x3607).style.display = "";
			document.getElementById("market-slot-name-" + _0x3607).innerHTML = getItemName(_0x6BF3.itemName).toUpperCase();
			document.getElementById("market-slot-img-" + _0x3607).src = "images/" + _0x6BF3.itemName + ".png";
			document.getElementById("market-slot-amount-" + _0x3607).innerHTML = formatNumber(_0x6BF3.itemAmount);
			document.getElementById("market-slot-price-" + _0x3607).innerHTML = formatNumber(_0x6BF3.price);
			document.getElementById("market-slot-collect-" + _0x3607).innerHTML = formatNumber(_0x6BF3.itemCollect);
			postDate = formatTime((_0x6BF3.postDate - getCurrentMillis()) / 1000);
			if (postDate == 0)
			{
				document.getElementById("market-slot-timeleft-" + _0x3607).innerHTML = "<b style=\'color:#ff8566\'>EXPIRED!</b>"
			}
			else
			{
				document.getElementById("market-slot-timeleft-" + _0x3607).innerHTML = "<b style=\'color:orange\'>Expires in</b> " + postDate
			}
		}
	}
}

function displayMarket(_0x44A4)
{
	if (_0x44A4)
	{
		document.getElementById("market-loading-section").style.display = "none";
		document.getElementById("market-slots-section").style.display = "";
		document.getElementById("market-buttons-section").style.display = "";
		document.getElementById("market-display-section").style.display = ""
	}
	else
	{
		if (_0x44A4)
		{
			document.getElementById("market-loading-section").style.display = "";
			document.getElementById("market-slots-section").style.display = "none";
			document.getElementById("market-buttons-section").style.display = "none";
			document.getElementById("market-display-section").style.display = "none"
		}
	}
}
var openTradablesDialogue_slot = 0;

function addItemSlotButton(_0x3C42)
{
	openTradablesDialogue_slot = _0x3C42;
	openTradablesDialogue(true)
}

function browseMarketDialogue()
{
	openTradablesDialogue(false)
}

function openTradablesDialogue(_0x6975)
{
	var _0x396D = document.getElementById("dialogue-tradables-section");
	var _0x3AAC = "";
	var _0x6992 = "";
	for (var _0x3607 = 0; _0x3607 < global_TradablesData.length; _0x3607++)
	{
		var _0x3D2A = global_TradablesData[_0x3607];
		var _0x3933 = _0x3D2A.itemName;
		var _0x3D0D = _0x3D2A.lowerLimit;
		var _0x3D47 = _0x3D2A.upperLimit;
		var _0x3C5F = _0x3D2A.category;
		if (_0x6992 != _0x3C5F)
		{
			if (_0x6992 != "")
			{
				_0x3AAC += "</div>"
			};
			_0x3AAC += "<div class=\'market-tradables-dialogue-section\'>";
			_0x6992 = _0x3C5F
		};
		var _0x69AF = "browseMarketItem(\"" + _0x3933 + "\");closeDialogue(\"dialogue-tradables\")";
		if (_0x6975)
		{
			_0x69AF = "addItemSlotButtonSelectItem(\"" + _0x3607 + "\");closeDialogue(\"dialogue-tradables\")"
		};
		_0x3AAC += "<div class=\'dialogue-tradables-item\'><img oncontextmenu=\'addItemSlotButtonSelectItemChangeLimits(\"" + _0x3607 + "\");closeDialogue(\"dialogue-tradables\"); return false;\' onclick=\'" + _0x69AF + "\' src=\'images/" + _0x3933 + ".png\' class=\'img-50\' /></div>"
	};
	_0x396D.innerHTML = _0x3AAC;
	openDialogueOverride("dialogue-tradables", "large")
}

function browseMarketItem(_0x3933)
{
	var _0x4209 = getItemName(_0x3933);
	document.getElementById("market-filter").value = _0x4209;
	marketFilter(_0x4209, true)
}

function addItemSlotButtonSelectItem(_0x3CF0)
{
	var _0x3C99 = _0x3933;
	var _0x3C7C = 0;
	var _0x3CB6 = 0;
	var _0x3D2A = global_TradablesData[_0x3CF0];
	var _0x3933 = _0x3D2A.itemName;
	var _0x3D0D = _0x3D2A.lowerLimit;
	var _0x3D47 = _0x3D2A.upperLimit;
	var _0x3C5F = _0x3D2A.category;
	var _0x3CD3 = "";
	_0x3CD3 += "<center>" + getItemName(_0x3933).toUpperCase() + "<br /><img src=\'images/" + _0x3933 + ".png\' class=\'img-100\' /></center>";
	_0x3CD3 += "<hr class=\'hr-thin\' />";
	_0x3CD3 += "<div style=\'text-align:left;margin:0 auto;width: 90%;border:1px solid black;color:white;padding:20px;background-color:#476b6b;border-radius:3pt;\'>";
	_0x3CD3 += "<input id=\'post-item-market-itemName\' value=\'" + _0x3933 + "\' type=\'hidden\'>";
	_0x3CD3 += "Amount to Sell<br />";
	_0x3CD3 += "<input id=\'post-item-market-amount\' placeholder=\'You own: " + getItem(_0x3933) + "\' class=\'input-larger\'>";
	_0x3CD3 += "<br /><br />";
	_0x3CD3 += "<img src=\'images/coins.png\' class=\'img-30\' /> Price each<br />";
	_0x3CD3 += "<input id=\'post-item-market-price\' class=\'input-larger\'>";
	_0x3CD3 += "</div>";
	_0x3CD3 += "<br />";
	_0x3CD3 += "<div class=\'blue-dark-box\'>";
	_0x3CD3 += "<b>Price limits: " + "</b>" + "<img src=\'images/coins.png\' class=\'img-30\' /> " + formatNumber(_0x3D0D) + " - " + "<img src=\'images/coins.png\' class=\'img-30\' /> " + formatNumber(_0x3D47);
	_0x3CD3 += "</div>";
	document.getElementById("dialogue-tradablesPostItem-section").innerHTML = _0x3CD3;
	openDialogue("dialogue-tradables-post-item")
}

function addItemSlotButtonSelectItemChangeLimits(_0x3CF0)
{
	var _0x3C99 = _0x3933;
	var _0x3C7C = 0;
	var _0x3CB6 = 0;
	var _0x3D2A = global_TradablesData[_0x3CF0];
	var _0x3933 = _0x3D2A.itemName;
	var _0x3D0D = _0x3D2A.lowerLimit;
	var _0x3D47 = _0x3D2A.upperLimit;
	var _0x3C5F = _0x3D2A.category;
	var _0x3CD3 = "";
	_0x3CD3 += "<center>" + getItemName(_0x3933).toUpperCase() + "<br /><img src=\'images/" + _0x3933 + ".png\' class=\'img-100\' /></center>";
	_0x3CD3 += "<hr class=\'hr-thin\' />";
	_0x3CD3 += "<div style=\'text-align:left;margin:0 auto;width: 90%;border:1px solid black;color:white;padding:20px;background-color:#476b6b;border-radius:3pt;\'>";
	_0x3CD3 += "<input id=\'post-item-market-itemName-changePrice\' value=\'" + _0x3933 + "\' type=\'hidden\'>";
	_0x3CD3 += "New Lower Limit<br />";
	_0x3CD3 += "<input id=\'post-item-market-price-lowerLimit\' value=\'" + _0x3D0D + "\' placeholder=\'Currently: " + formatNumber(_0x3D0D) + "\' class=\'input-larger\'>";
	_0x3CD3 += "<br /><br />";
	_0x3CD3 += "New Upper Limit<br />";
	_0x3CD3 += "<input id=\'post-item-market-price-upperLimit\' value=\'" + _0x3D47 + "\'  placeholder=\'Currently: " + formatNumber(_0x3D47) + "\' class=\'input-larger\'>";
	_0x3CD3 += "</div>";
	_0x3CD3 += "<br />";
	_0x3CD3 += "<div class=\'blue-dark-box\'>";
	_0x3CD3 += "<b>CURRENT LIMITS: " + "</b>" + "<img src=\'images/coins.png\' class=\'img-30\' /> " + formatNumber(_0x3D0D) + " - " + "<img src=\'images/coins.png\' class=\'img-30\' /> " + formatNumber(_0x3D47);
	_0x3CD3 += "</div>";
	document.getElementById("dialogue-tradablesPostItem-section-limits").innerHTML = _0x3CD3;
	openDialogue("dialogue-tradables-change-item-limits")
}

function doPostMarket(_0x3933, _0x44C1, _0x44DE)
{
	_0x44C1 = convertNumberWithLetrtsKMBToNumber(_0x44C1);
	_0x44DE = convertNumberWithLetrtsKMBToNumber(_0x44DE);
	confirmDialogue("images/shop_black.png", "Are you sure you want to post this on the market?<span style=\'color:grey\'><br /><br /><img src=\'images/" + _0x3933 + ".png\' class=\'img-30\' /> <b>Selling: </b>" + formatNumber(_0x44C1) + "<br /><br /><img src=\'images/coins.png\' class=\'img-30\'> <b>Price each: </b>" + formatNumber(_0x44DE) + "<br /><br /><img src=\'images/coinPile.png\' class=\'img-30\'> <b>Total: </b>" + formatNumber(_0x44C1 * _0x44DE) + "</span>", "Confirm Post", "Cancel", "POST_MARKET=" + _0x3933 + "~" + _0x44C1 + "~" + _0x44DE + "~" + openTradablesDialogue_slot)
}

function changeMarketLimits(_0x3933, _0x44C1, _0x44DE)
{
	_0x44C1 = convertNumberWithLetrtsKMBToNumber(_0x44C1);
	_0x44DE = convertNumberWithLetrtsKMBToNumber(_0x44DE);
	confirmDialogue("images/" + _0x3933 + ".png", "Are you sure you want to modifiy the price limits?<span style=\'color:grey\'><br /><br /><img src=\'images/coins.png\' class=\'img-30\'> <b>Lower: </b>" + formatNumber(_0x44C1) + "<br /><br /><img src=\'images/coins.png\' class=\'img-30\'> <b>Upper: </b>" + formatNumber(_0x44DE), "Confirm Price Margins", "Cancel", "CHANGE_MARGIN_MARKET=" + _0x3933 + "~" + _0x44C1 + "~" + _0x44DE)
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
	var _0x3AAC = "<center>";
	_0x3AAC += "<table id=\'market-table\' class=\'sortable basic-table\' width=\'90%\'>";
	_0x3AAC += "<thead>";
	_0x3AAC += "<tr><th width=\'15%\' colspan=\'2\'>Name</th><th width=\'15%\'>Amount</th><th width=\'15%\'>Price each</th><th width=\'15%\'>Category</th><th width=\'5%\'>Expires In</th></tr>";
	_0x3AAC += "</thead>";
	_0x3AAC += "<tbody>";
	for (var _0x3607 = 0; _0x3607 < global_MarketData.length; _0x3607++)
	{
		var _0x6A06 = global_MarketData[_0x3607];
		var _0x5FD4 = _0x6A06.keyFound;
		var _0x3933 = _0x6A06.itemName;
		var _0x5F60 = _0x6A06.itemAmount;
		var _0x69E9 = _0x6A06.price;
		var _0x5F7D = _0x6A06.itemCategory;
		var _0x600E = _0x6A06.postDate;
		_0x600E = formatTime((_0x600E - getCurrentMillis()) / 1000);
		if (_0x5F60 == 0 || _0x600E == 0)
		{
			continue
		};
		customAttribute = "onclick=\'purchaseFromMarket(\"" + _0x5FD4 + "\",\"" + _0x3933 + "\",\"" + _0x5F60 + "\",\"" + _0x69E9 + "\")\'";
		if (_0x5FD4.split("_")[0] == getItem("playerId"))
		{
			customAttribute = "style=\'background-color:silver;\'"
		};
		_0x3AAC += "<tr class=\'tr-hover\' id=\'marekt-row-" + _0x3933 + "\' " + customAttribute + " style=\'border:1px solid grey\'>";
		_0x3AAC += "<td style=\'border:none\'>" + getItemName(_0x3933).toUpperCase() + "</td>";
		_0x3AAC += "<td style=\'border:none\'>" + "<img class=\'img-50\' src=\'images/" + _0x3933 + ".png\'" + "</td>";
		_0x3AAC += "<td style=\'border:none\'>" + formatNumber(_0x5F60) + "</td>";
		_0x3AAC += "<td style=\'border:none\'>" + formatNumber(_0x69E9) + "</td>";
		_0x3AAC += "<td style=\'color:grey\'style=\'border:none\'>" + _0x5F7D + "</td>";
		_0x3AAC += "<td style=\'border:none\'>" + _0x600E + "</td>";
		_0x3AAC += "</tr>"
	};
	_0x3AAC += "</tbody>";
	_0x3AAC += "</table>";
	_0x3AAC += "</center>";
	document.getElementById("market-display-section").innerHTML = _0x3AAC;
	sorttable.makeSortable(document.getElementById("market-table"));
	if (document.getElementById("market-filter").value.length > 0)
	{
		marketFilter(document.getElementById("market-filter").value, false)
	}
}

function purchaseFromMarket(_0x5FD4, _0x3933, _0x5F60, _0x44DE)
{
	document.getElementById("dialogue-market-buy-input").value = "";
	document.getElementById("dialogue-market-buy-hidden-itemName").value = _0x5FD4;
	document.getElementById("dialogue-market-buy-hidden-keyFound").value = _0x3933;
	document.getElementById("dialogue-market-buy-hidden-price").value = _0x44DE;
	document.getElementById("dialogue-market-buy-hidden-amount").value = _0x5F60;
	openDialogue("dialogue-market-buy")
}

function purchaseFromMarketConfirm()
{
	var _0x5FD4 = document.getElementById("dialogue-market-buy-hidden-itemName").value;
	var _0x3933 = document.getElementById("dialogue-market-buy-hidden-keyFound").value;
	var _0x44DE = document.getElementById("dialogue-market-buy-hidden-price").value;
	var _0x5F60 = document.getElementById("dialogue-market-buy-hidden-amount").value;
	var _0x6252 = document.getElementById("dialogue-market-buy-input").value;
	if (_0x3933 == "donorCoins")
	{
		confirmDialogue("images/shop_black.png", "You are about to purchase:<br /><br /><img src=\'images/" + _0x3933 + ".png\' class=\'img-30\' /> " + formatNumber(_0x6252) + " for <img src=\'images/coins.png\' class=\'img-30\' />" + formatNumber(_0x6252 * _0x44DE) + " coins.<br /><br /><b style=\'color:red\'>Warning:</b> Coins will automatically bind to your account.", "Confirm", "Cancel", "MARKET_BUY=" + _0x5FD4 + "~" + _0x6252 + "~" + _0x3933 + "~" + _0x44DE)
	}
	else
	{
		confirmDialogue("images/shop_black.png", "You are about to purchase:<br /><br /><img src=\'images/" + _0x3933 + ".png\' class=\'img-30\' /> " + formatNumber(_0x6252) + " for <img src=\'images/coins.png\' class=\'img-30\' /> " + formatNumber(_0x6252 * _0x44DE) + " coins.", "Confirm", "Cancel", "MARKET_BUY=" + _0x5FD4 + "~" + _0x6252 + "~" + _0x3933 + "~" + _0x44DE)
	}
}

function marketFilter(_0x3811, _0x602B)
{
	_0x3811 = _0x3811.toLowerCase();
	var _0x6065 = document.getElementById("market-table");
	var _0x6048 = _0x6065.getElementsByTagName("tr");
	for (var _0x3607 = 0; _0x3607 < _0x6048.length; _0x3607++)
	{
		_0x6048[_0x3607].style.display = "";
		var _0x4ED6 = _0x6048[_0x3607].id.split("-")[2];
		if (_0x4ED6 != null)
		{
			_0x4ED6 = getItemName(_0x4ED6).toLowerCase();
			if (_0x602B)
			{
				if (_0x4ED6 != _0x3811)
				{
					_0x6048[_0x3607].style.display = "none"
				}
			}
			else
			{
				if (!_0x4ED6.includes(_0x3811.trim()))
				{
					_0x6048[_0x3607].style.display = "none"
				}
			}
		}
	};
	if (_0x3811.length > 0)
	{
		document.getElementById("market-filter-x").style.display = ""
	}
	else
	{
		document.getElementById("market-filter-x").style.display = "none"
	}
}

function refreshTradables(_0x3746)
{
	global_TradablesData = [];
	var _0x3763 = _0x3746.split("~");
	for (var _0x3607 = 0; _0x3607 < _0x3763.length; _0x3607++)
	{
		var _0x3933 = _0x3763[_0x3607];
		_0x3607++;
		var _0x3D0D = _0x3763[_0x3607];
		_0x3607++;
		var _0x3D47 = _0x3763[_0x3607];
		_0x3607++;
		var _0x3C5F = _0x3763[_0x3607];
		global_TradablesData.push(new Tradables(_0x3933, _0x3D0D, _0x3D47, _0x3C5F))
	}
}

function refreshMarket(_0x3746)
{
	if (_0x3746 == "")
	{
		return
	};
	global_MarketData = [];
	var _0x3763 = _0x3746.split("~");
	for (var _0x3607 = 0; _0x3607 < _0x3763.length; _0x3607++)
	{
		var _0x5FD4 = _0x3763[_0x3607];
		_0x3607++;
		var _0x5FF1 = _0x3763[_0x3607];
		_0x3607++;
		var _0x3933 = _0x3763[_0x3607];
		_0x3607++;
		var _0x5F60 = _0x3763[_0x3607];
		_0x3607++;
		var _0x69E9 = _0x3763[_0x3607];
		_0x3607++;
		var _0x5FB7 = _0x3763[_0x3607];
		_0x3607++;
		var _0x5F9A = _0x3763[_0x3607];
		_0x3607++;
		var _0x5F7D = _0x3763[_0x3607];
		_0x3607++;
		var _0x600E = _0x3763[_0x3607];
		global_MarketData.push(new MarketData(_0x5FD4, _0x5FF1, _0x3933, _0x5F60, _0x69E9, _0x5FB7, _0x5F9A, _0x5F7D, _0x600E))
	}
}

function refreshDonorTable()
{
	var _0x6B45 = getCurrentMillis();
	var _0x473F = "";
	_0x473F = "woodcuttingPatch5";
	if (getItem(_0x473F) == 0)
	{
		document.getElementById("donorTable-" + _0x473F).innerHTML = "Locked"
	}
	else
	{
		if (_0x6B45 > getItem(_0x473F))
		{
			document.getElementById("donorTable-" + _0x473F).innerHTML = "Locked"
		}
		else
		{
			var _0x6B62 = getItem(_0x473F) - _0x6B45;
			document.getElementById("donorTable-" + _0x473F).innerHTML = "<span style=\'color:green\'>" + parseInt(1 + (_0x6B62 / 1000 / 60 / 60 / 24)) + " days</span>"
		}
	};
	_0x473F = "woodcuttingPatch6";
	if (getItem(_0x473F) == 0)
	{
		document.getElementById("donorTable-" + _0x473F).innerHTML = "Locked"
	}
	else
	{
		if (_0x6B45 > getItem(_0x473F))
		{
			document.getElementById("donorTable-" + _0x473F).innerHTML = "Locked"
		}
		else
		{
			var _0x6B62 = getItem(_0x473F) - _0x6B45;
			document.getElementById("donorTable-" + _0x473F).innerHTML = "<span style=\'color:green\'>" + parseInt(1 + (_0x6B62 / 1000 / 60 / 60 / 24)) + " days</span>"
		}
	};
	_0x473F = "farmingPlot5";
	if (getItem(_0x473F) == 0)
	{
		document.getElementById("donorTable-" + _0x473F).innerHTML = "Locked"
	}
	else
	{
		if (_0x6B45 > getItem(_0x473F))
		{
			document.getElementById("donorTable-" + _0x473F).innerHTML = "Locked"
		}
		else
		{
			var _0x6B62 = getItem(_0x473F) - _0x6B45;
			document.getElementById("donorTable-" + _0x473F).innerHTML = "<span style=\'color:green\'>" + parseInt(1 + (_0x6B62 / 1000 / 60 / 60 / 24)) + " days</span>"
		}
	};
	_0x473F = "farmingPlot6";
	if (getItem(_0x473F) == 0)
	{
		document.getElementById("donorTable-" + _0x473F).innerHTML = "Locked"
	}
	else
	{
		if (_0x6B45 > getItem(_0x473F))
		{
			document.getElementById("donorTable-" + _0x473F).innerHTML = "Locked"
		}
		else
		{
			var _0x6B62 = getItem(_0x473F) - _0x6B45;
			document.getElementById("donorTable-" + _0x473F).innerHTML = "<span style=\'color:green\'>" + parseInt(1 + (_0x6B62 / 1000 / 60 / 60 / 24)) + " days</span>"
		}
	};
	_0x473F = "moreOfflineTime";
	if (getItem(_0x473F) == 0)
	{
		document.getElementById("donorTable-" + _0x473F).innerHTML = "Locked"
	}
	else
	{
		if (_0x6B45 > getItem(_0x473F))
		{
			document.getElementById("donorTable-" + _0x473F).innerHTML = "Locked"
		}
		else
		{
			var _0x6B62 = getItem(_0x473F) - _0x6B45;
			document.getElementById("donorTable-" + _0x473F).innerHTML = "<span style=\'color:green\'>" + parseInt(1 + (_0x6B62 / 1000 / 60 / 60 / 24)) + " days</span>"
		}
	};
	_0x473F = "bonusXp";
	if (getItem(_0x473F) == 0)
	{
		document.getElementById("donorTable-" + _0x473F).innerHTML = "Locked"
	}
	else
	{
		if (_0x6B45 > getItem(_0x473F))
		{
			document.getElementById("donorTable-" + _0x473F).innerHTML = "Locked"
		}
		else
		{
			var _0x6B62 = getItem(_0x473F) - _0x6B45;
			document.getElementById("donorTable-" + _0x473F).innerHTML = "<span style=\'color:green\'>" + parseInt(1 + (_0x6B62 / 1000 / 60 / 60 / 24)) + " days</span>"
		}
	}
}

function getOrbDescription(_0x4722)
{
	var _0x384B = "";
	switch (_0x4722)
	{
	case "blueOilWellOrb":
		_0x384B = "Oil wells produce twice the amount of oil.";
		break;
	case "blueOreOrb":
		_0x384B = "When mining an ore, there is a 10% chance of obtaining two instead of one.";
		break;
	case "blueWoodcuttingOrb":
		_0x384B = "A tree that instantly grows will grant more logs.";
		break;
	case "blueFurnaceOrb":
		_0x384B = "Furnace capacity increased by 50%.";
		break;
	case "blueManaOrb":
		_0x384B = "Mana regenerates very fast out of combat.";
		break
	};
	return _0x384B
}

function clicksBlueOrb(_0x4722)
{
	var _0x41B2 = getOrbDescription(_0x4722);
	confirmDialogue("images/" + _0x4722 + ".png", "Would you like to bind this to your account?  The orb will become untradable if so.<br /><br /><span style=\'color:grey\'>" + _0x41B2 + "</span>", "Bind Orb", "Cancel", "BIND_ORB=" + _0x4722)
}

function getBrewingKitDataTypes()
{
	var _0x5276 = ["none", "none", "none", 0];
	var _0x473F = "";
	_0x473F = "brewingKit";
	if (getItem(_0x473F) == 1)
	{
		_0x5276 = ["brewingKit", "none", "sapphire", "0%"];
		return _0x5276
	};
	_0x473F = "sapphireBrewingKit";
	if (getItem(_0x473F) == 1)
	{
		_0x5276 = ["sapphireBrewingKit", "sapphire", "emerald", "15%"];
		return _0x5276
	};
	_0x473F = "emeraldBrewingKit";
	if (getItem(_0x473F) == 1)
	{
		_0x5276 = ["emeraldBrewingKit", "emerald", "ruby", "30%"];
		return _0x5276
	};
	_0x473F = "rubyBrewingKit";
	if (getItem(_0x473F) == 1)
	{
		_0x5276 = ["rubyBrewingKit", "ruby", "diamond", "60%"];
		return _0x5276
	};
	_0x473F = "diamondBrewingKit";
	if (getItem(_0x473F) == 1)
	{
		_0x5276 = ["diamondBrewingKit", "diamond", "none", "100%"];
		return _0x5276
	};
	return _0x5276
}

function getBrewingTimeAdjusted(_0x50C3)
{
	var _0x5293 = getBrewingKitDataTypes()[3];
	if (_0x5293 == "0%")
	{
		return formatTime(_0x50C3)
	};
	_0x5293 = parseFloat(_0x5293.substr(0, _0x5293.length - 1));
	_0x5293 /= 100;
	_0x50C3 *= (parseFloat(1) + parseFloat(_0x5293));
	return formatTime(_0x50C3)
}

function openBrewingKitDialogue()
{
	var _0x3763 = getBrewingKitDataTypes();
	if (_0x3763[0] != "none")
	{
		if (_0x3763[0] == "diamondBrewingKit")
		{
			confirmDialogue("images/" + _0x3763[0] + ".png", "<b>Bonus Potion Time: </b>" + _0x3763[3], "Close", "", "")
		}
		else
		{
			confirmDialogue("images/" + _0x3763[0] + ".png", "<b>Bonus Potion Time: </b>" + _0x3763[3] + "<br /><br /><span style=\'color:grey\'>Socket a <img src=\'images/" + _0x3763[2] + ".png\' class=\'img-30\' /> <b>" + _0x3763[2] + "</b> to increase the timer for all potions.</span>", "Socket a " + _0x3763[2], "Close", "SOCKET=brewingKit")
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
	var _0x47D0 = "oyster";
	openInputDialogue("Sell", "images/" + _0x47D0 + ".png", _0x47D0, 1, ["coins"], [getItemPrice(_0x47D0)], [_0x47D0], [1], "Sell", "SELL", "Sell this to the shop for some coins.")
}

function openSpecialOystersSellDialogues()
{
	var _0x47D0 = "specialOyster";
	openInputDialogue("Sell", "images/" + _0x47D0 + ".png", _0x47D0, 1, ["coins"], [getItemPrice(_0x47D0)], [_0x47D0], [1], "Sell", "SELL", "Sell this to the shop for some coins.")
}

function getMuseumItemsCount()
{
	var _0x473F = "";
	var _0x55BF = 0;
	var _0x55A2 = 0;
	_0x473F = "sapphireGlassHand";
	_0x55BF++;
	if (getItem(_0x473F + "Museum") == 1)
	{
		_0x55A2++
	};
	_0x473F = "emeraldGlassHand";
	_0x55BF++;
	if (getItem(_0x473F + "Museum") == 1)
	{
		_0x55A2++
	};
	_0x473F = "rubyGlassHand";
	_0x55BF++;
	if (getItem(_0x473F + "Museum") == 1)
	{
		_0x55A2++
	};
	_0x473F = "snowmanCrafted";
	_0x55BF++;
	if (getItem(_0x473F + "Museum") == 1)
	{
		_0x55A2++
	};
	_0x473F = "brokenStinger";
	_0x55BF++;
	if (getItem(_0x473F + "Museum") == 1)
	{
		_0x55A2++
	};
	_0x473F = "snakeBones";
	_0x55BF++;
	if (getItem(_0x473F + "Museum") == 1)
	{
		_0x55A2++
	};
	_0x473F = "giantPearl";
	_0x55BF++;
	if (getItem(_0x473F + "Museum") == 1)
	{
		_0x55A2++
	};
	_0x473F = "rareGiantPearl";
	_0x55BF++;
	if (getItem(_0x473F + "Museum") == 1)
	{
		_0x55A2++
	};
	_0x473F = "sharkTooth";
	_0x55BF++;
	if (getItem(_0x473F + "Museum") == 1)
	{
		_0x55A2++
	};
	_0x473F = "skeletonSkull";
	_0x55BF++;
	if (getItem(_0x473F + "Museum") == 1)
	{
		_0x55A2++
	};
	_0x473F = "ghostClothes";
	_0x55BF++;
	if (getItem(_0x473F + "Museum") == 1)
	{
		_0x55A2++
	};
	_0x473F = "cockroach";
	_0x55BF++;
	if (getItem(_0x473F + "Museum") == 1)
	{
		_0x55A2++
	};
	_0x473F = "goldenCockroach";
	_0x55BF++;
	if (getItem(_0x473F + "Museum") == 1)
	{
		_0x55A2++
	};
	_0x473F = "smallSeaShell";
	_0x55BF++;
	if (getItem(_0x473F + "Museum") == 1)
	{
		_0x55A2++
	};
	_0x473F = "mediumSeaShell";
	_0x55BF++;
	if (getItem(_0x473F + "Museum") == 1)
	{
		_0x55A2++
	};
	_0x473F = "largeSeaShell";
	_0x55BF++;
	if (getItem(_0x473F + "Museum") == 1)
	{
		_0x55A2++
	};
	_0x473F = "yetiLeftFoot";
	_0x55BF++;
	if (getItem(_0x473F + "Museum") == 1)
	{
		_0x55A2++
	};
	_0x473F = "yetiRightFoot";
	_0x55BF++;
	if (getItem(_0x473F + "Museum") == 1)
	{
		_0x55A2++
	};
	return [_0x55A2, _0x55BF]
}

function transformItem(_0x6C67, _0x62A9, _0x40AD)
{
	openInputDialogue("TRANSFORM", "images/" + _0x6C67 + ".png", _0x6C67, 1, ["magicXp"], [_0x40AD], [_0x6C67], [1], "Transform", "TRANSFORM", "Transforming item using magic converts an equipment to a variety of items.")
}

function hardcoreInfo()
{
	confirmDialogue("images/hardcoreIcon.png", "Hardcore accounts disables the player market. You won\'t be able to sell or buy from other players.<br /><br /><span style=\'color:red\'>Not recommended for new players!</span>", "Close", "", "")
}

function ghostScanRequired()
{
	return getItemString("monsterName") == "ghost" || getItemString("monsterName") == "skeletonGhost" || getItemString("monsterName") == "reaper"
}
