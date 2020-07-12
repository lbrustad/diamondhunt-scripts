var global_setItemsTickCount = 0;

function getServerWithLeastPeople()
{
	var _0x1D518 = 0;
	var _0x1D526 = 10000000;
	for (var _0x1C6B6 = 0; _0x1C6B6 <= 100; _0x1C6B6++)
	{
		if (servers_information[_0x1C6B6] == null)
		{
			break
		};
		var _0x1D534 = servers_information[_0x1C6B6][0];
		var _0x1D550 = servers_information[_0x1C6B6][1];
		var _0x1D542 = servers_information[_0x1C6B6][2];
		var _0x1D50A = servers_information[_0x1C6B6][3];
		if (_0x1D542 == 1 || _0x1D550 == 0)
		{
			continue
		};
		if (_0x1D526 > _0x1D50A)
		{
			_0x1D518 = _0x1D534;
			_0x1D526 = _0x1D50A
		}
	};
	return _0x1D518
}

function getCurrentServerForDisplayInGame()
{
	if (wss_host == "ws://127.0.0.1")
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
	var _0x1CC4A = "";
	_0x1CC4A += "<br />";
	for (var _0x1C6B6 = 0; _0x1C6B6 <= 100; _0x1C6B6++)
	{
		if (servers_information[_0x1C6B6] == null)
		{
			break
		};
		var _0x1D534 = servers_information[_0x1C6B6][0];
		var _0x1D550 = servers_information[_0x1C6B6][1];
		var _0x1D542 = servers_information[_0x1C6B6][2];
		var _0x1D50A = servers_information[_0x1C6B6][3];
		var _0x1D836 = servers_information[_0x1C6B6][4];
		if (_0x1D550 == 1)
		{
			_0x1CC4A += "<span onclick=\'localStorage.setItem(\"last_server\", " + _0x1D534 + ");window.location.reload()\' class=\'login-menu-server\' id=\'login-menu-server-button\'>Server " + _0x1D534 + "<br /><br /><span style=\'color:yellow;font-size:12pt;\'>" + _0x1D50A + "/" + _0x1D836 + " online.</span>"
		}
		else
		{
			_0x1CC4A += "<span onclick=\'localStorage.setItem(\"last_server\", " + _0x1D534 + ");window.location.reload()\' class=\'login-menu-server\' id=\'login-menu-server-button\'>Server " + _0x1D534 + "<br /><br /><span style=\'color:yellow;font-size:12pt;\'><span style=\'color:pink\'>OFFLINE</span></span>"
		};
		if (_0x1D542 == 1)
		{
			_0x1CC4A += "<br /><br /><span style=\'color:green;font-size:8pt;\'><img src=\'images/donorCoins.png\' class=\'img-15\' /> Donor Server</span>"
		}
		else
		{
			_0x1CC4A += "<br />"
		};
		_0x1CC4A += "</span>";
		_0x1CC4A += "<br />"
	};
	document.getElementById("server-list-section").innerHTML = _0x1CC4A
}

function isServerOnline(_0x1D534)
{
	for (var _0x1C6B6 = 0; _0x1C6B6 <= 100; _0x1C6B6++)
	{
		if (servers_information[_0x1C6B6] == null)
		{
			break
		};
		if (servers_information[_0x1C6B6][0] == _0x1D534 && servers_information[_0x1C6B6][1] == 1)
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
	document.addEventListener("keyup", (e) =>
	{
		switch (e.keyCode)
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
			var _0x1C69A = document.getElementsByClassName("dialogue");
			for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1C69A.length; _0x1C6B6++)
			{
				_0x1C69A[_0x1C6B6].style.display = "none"
			};
			break;
		// could be
		case 49:
		case 50:
		case 51:
		case 52:
		case 53:
			const x = e.keyCode - 48;
			if (getItem("researcherCombat") >= 3 && global_lastTabId == "right-combat-fighting" && x >= 1 && x <= 5)
			{
				sendBytes("USE_PRESET=" + x)
			};
			break;
		// but is like shit
		case 49:
			if (getItem("researcherCombat") >= 3 && global_lastTabId == "right-combat-fighting")
			{
				sendBytes("USE_PRESET=1")
			};
			break;
		case 50:
			if (getItem("researcherCombat") >= 3 && global_lastTabId == "right-combat-fighting")
			{
				sendBytes("USE_PRESET=2")
			};
			break;
		case 51:
			if (getItem("researcherCombat") >= 3 && global_lastTabId == "right-combat-fighting")
			{
				sendBytes("USE_PRESET=3")
			};
			break;
		case 52:
			if (getItem("researcherCombat") >= 3 && global_lastTabId == "right-combat-fighting")
			{
				sendBytes("USE_PRESET=4")
			};
			break;
		case 53:
			if (getItem("researcherCombat") >= 3 && global_lastTabId == "right-combat-fighting")
			{
				sendBytes("USE_PRESET=5")
			};
			break
		}
	})
});
$(document).mousemove(function (e)
{
	window.mouseX = e.pageX;
	window.mouseY = e.pageY
});

function initWebSocketFunctions()
{
	try
	{
		global_webSocket.onerror = function (_0x1C6E0)
		{
			_0x1D710(_0x1C6E0)
		};
		global_webSocket.onopen = function (_0x1C6E0)
		{
			_0x1D72C(_0x1C6E0)
		};
		global_webSocket.onclose = function (_0x1C6E0)
		{
			_0x1D702(_0x1C6E0)
		};
		global_webSocket.onmessage = function (_0x1C6E0)
		{
			_0x1D71E(_0x1C6E0)
		};

		function _0x1D71E(_0x1C6E0)
		{
			serverCommand(_0x1C6E0.data)
		}

		function _0x1D72C(_0x1C6E0)
		{}

		function _0x1D702(_0x1C6E0)
		{}

		function _0x1D710(_0x1C6E0)
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
String.prototype.includes = function (_0x1C6D2)
{
	var _0x1C6C4 = false;
	if (this.indexOf(_0x1C6D2) !== -1)
	{
		_0x1C6C4 = true
	};
	return _0x1C6C4
};
global_loadedFirstItemsFlag = false;

function serverCommand(data)
{
	var commandAction = data;
	if (commandAction.includes("="))
	{
		var tmp = data.split("=");
		var cmdData = data.split("=").slice(1).join("=").split("~");
		commandAction = tmp[0]
	};
	switch (commandAction)
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
			setItems(data.substr(commandAction.length + 1));
			global_setItemsTickCount++;
			if (!global_loadedFirstItemsFlag)
			{
				global_loadedFirstItemsFlag = true;
				setTimeout(loadItemBoxes(), 100);
				sendBytes("LOAD_OBJECTS")
			};
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
				location.reload()
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
				navigate("right-home")
			};
			break;
		case "SET_LOCAL_STORAGE":
			localStorage.setItem(cmdData[0], cmdData[1]);
			break;
		case "SET_INNER_HTML":
			setInnerHTML(cmdData[0], cmdData[1]);
			break;
		case "CONFIRM_DIALOGUE":
			returnCommand = cmdData[4];
			if (cmdData.length > 5)
			{
				returnCommand = "";
				for (var _0x1C6B6 = 4; _0x1C6B6 < cmdData.length; _0x1C6B6++)
				{
					returnCommand += "~" + cmdData[_0x1C6B6]
				};
				returnCommand = returnCommand.substr(1)
			};
			confirmDialogue(cmdData[0], cmdData[1], cmdData[2], cmdData[3], returnCommand);
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
				scrollText(cmdData[0], cmdData[1], cmdData[2])
			}, parseInt(cmdData[3]));
			break;
		case "QUEST_OPTIONS":
			openQuestDialogue(cmdData[0], cmdData[1], cmdData[2], cmdData[3], cmdData[4], cmdData[5], cmdData[6], cmdData[7], cmdData[8], cmdData[9], cmdData[10], cmdData[11]);
			break;
		case "LEVEL_UP":
			levelUp(cmdData[0], cmdData[1]);
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
			setCSSFromServer(cmdData[0], cmdData[1], cmdData[2], cmdData[3]);
			break;
		case "SET_GLOBAL_VAR":
			window[cmdData[0]] = cmdData[1];
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
			chat(data.substr(5));
			break;
		case "REFRESH_MUTE_LIST":
			loadMuteList(data.substr(18));
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

function refreshCombatLogger(data)
{
	document.getElementById("combat-combatLog-section").innerHTML = data
}

function refreshTransferLogger(data)
{
	document.getElementById("transformLog-section").innerHTML = data
}

function getSkillLevel(_0x1D55E)
{
	return getLevel(getItem(_0x1D55E + "Xp"))
}
global_oreLevels = [];

function Ore(_0x1D1EC, _0x1CB40)
{
	this.name = _0x1D1EC;
	this.level = _0x1CB40
}

function addItemBoxOreToMine(_0x1C91E, _0x1C92C, _0x1C910)
{
	var _0x1C8F4 = "";
	var _0x1C902 = getImage("images/" + _0x1C91E + ".png", "addItemBoxOreToMine_" + _0x1C91E);
	_0x1C8F4 += "<div onclick=\'clicksOreToMine(\"" + _0x1C91E + "\")\' class=\'div-add-ore-to-mine\' class=\'mining-ore-to-mine-box\'>";
	_0x1C8F4 += "<table class=\'table-add-ore-to-mine\' width=\'100%\'>";
	_0x1C8F4 += "<tr>";
	_0x1C8F4 += "<td style=\'font-size:22pt\'>" + _0x1C92C + "</td>";
	_0x1C8F4 += "</tr>";
	_0x1C8F4 += "<tr>";
	_0x1C8F4 += "<td>";
	if (getSkillLevel("mining") < _0x1C910)
	{
		_0x1C8F4 += "<img src=\'images/x.png\' class=\'img-150\' style=\'z-index:1;position:absolute;\' />"
	};
	_0x1C8F4 += "<img src=\'" + _0x1C902.src + "\' class=\'img-150\' />";
	_0x1C8F4 += "</td>";
	_0x1C8F4 += "</tr>";
	_0x1C8F4 += "<tr>";
	if (getSkillLevel("mining") < _0x1C910)
	{
		_0x1C8F4 += "<td style=\'color:red\'>Level " + _0x1C910 + " Mining</td>"
	};
	_0x1C8F4 += "<td style=\"height:50px;\" id=\"" + _0x1C91E + "-mining-assigned-td\"></td>";
	_0x1C8F4 += "</tr>";
	_0x1C8F4 += "</table>";
	_0x1C8F4 += "</div>";
	$("#item-section-ore-to-mine-1").append(_0x1C8F4);
	global_oreLevels[_0x1C91E] = new Ore(_0x1C91E, _0x1C910)
}

function getImageExtention(_0x1C83E)
{
	switch (_0x1C83E)
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
		var _0x1DDF4 = "";
		var _0x1DE02 = "";
		_0x1DDF4 = "stone";
		document.getElementById(_0x1DDF4 + "-mining-assigned-td").innerHTML = "";
		for (var _0x1C6B6 = 0; _0x1C6B6 < 5; _0x1C6B6++)
		{
			_0x1DE02 = "miner";
			if (getItem(_0x1DE02 + "Allocation" + _0x1C6B6) == _0x1DDF4)
			{
				var _0x1C902 = getImage("images/" + _0x1DE02 + ".gif", "refreshMiningAllocationIcons_" + _0x1DDF4 + "_" + _0x1DE02 + "_" + _0x1C6B6);
				_0x1C902.setAttribute("class", "img-50");
				document.getElementById(_0x1DDF4 + "-mining-assigned-td").append(_0x1C902)
			};
			_0x1DE02 = "drills";
			if (getItem(_0x1DE02 + "Allocation" + _0x1C6B6) == _0x1DDF4)
			{
				var _0x1C902 = getImage("images/" + _0x1DE02 + ".gif", "refreshMiningAllocationIcons_" + _0x1DDF4 + "_" + _0x1DE02 + "_" + _0x1C6B6);
				_0x1C902.setAttribute("class", "img-50");
				document.getElementById(_0x1DDF4 + "-mining-assigned-td").append(_0x1C902)
			};
			_0x1DE02 = "crushers";
			if (getItem(_0x1DE02 + "Allocation" + _0x1C6B6) == _0x1DDF4)
			{
				var _0x1C902 = getImage("images/" + _0x1DE02 + ".gif", "refreshMiningAllocationIcons_" + _0x1DDF4 + "_" + _0x1DE02 + "_" + _0x1C6B6);
				_0x1C902.setAttribute("class", "img-50");
				document.getElementById(_0x1DDF4 + "-mining-assigned-td").append(_0x1C902)
			}
		};
		_0x1DDF4 = "copper";
		document.getElementById(_0x1DDF4 + "-mining-assigned-td").innerHTML = "";
		for (var _0x1C6B6 = 0; _0x1C6B6 < 5; _0x1C6B6++)
		{
			_0x1DE02 = "miner";
			if (getItem(_0x1DE02 + "Allocation" + _0x1C6B6) == _0x1DDF4)
			{
				var _0x1C902 = getImage("images/" + _0x1DE02 + ".gif", "refreshMiningAllocationIcons_" + _0x1DDF4 + "_" + _0x1DE02 + "_" + _0x1C6B6);
				_0x1C902.setAttribute("class", "img-50");
				document.getElementById(_0x1DDF4 + "-mining-assigned-td").append(_0x1C902)
			};
			_0x1DE02 = "drills";
			if (getItem(_0x1DE02 + "Allocation" + _0x1C6B6) == _0x1DDF4)
			{
				var _0x1C902 = getImage("images/" + _0x1DE02 + ".gif", "refreshMiningAllocationIcons_" + _0x1DDF4 + "_" + _0x1DE02 + "_" + _0x1C6B6);
				_0x1C902.setAttribute("class", "img-50");
				document.getElementById(_0x1DDF4 + "-mining-assigned-td").append(_0x1C902)
			};
			_0x1DE02 = "crushers";
			if (getItem(_0x1DE02 + "Allocation" + _0x1C6B6) == _0x1DDF4)
			{
				var _0x1C902 = getImage("images/" + _0x1DE02 + ".gif", "refreshMiningAllocationIcons_" + _0x1DDF4 + "_" + _0x1DE02 + "_" + _0x1C6B6);
				_0x1C902.setAttribute("class", "img-50");
				document.getElementById(_0x1DDF4 + "-mining-assigned-td").append(_0x1C902)
			}
		};
		_0x1DDF4 = "iron";
		document.getElementById(_0x1DDF4 + "-mining-assigned-td").innerHTML = "";
		for (var _0x1C6B6 = 0; _0x1C6B6 < 5; _0x1C6B6++)
		{
			_0x1DE02 = "miner";
			if (getItem(_0x1DE02 + "Allocation" + _0x1C6B6) == _0x1DDF4)
			{
				var _0x1C902 = getImage("images/" + _0x1DE02 + ".gif", "refreshMiningAllocationIcons_" + _0x1DDF4 + "_" + _0x1DE02 + "_" + _0x1C6B6);
				_0x1C902.setAttribute("class", "img-50");
				document.getElementById(_0x1DDF4 + "-mining-assigned-td").append(_0x1C902)
			};
			_0x1DE02 = "drills";
			if (getItem(_0x1DE02 + "Allocation" + _0x1C6B6) == _0x1DDF4)
			{
				var _0x1C902 = getImage("images/" + _0x1DE02 + ".gif", "refreshMiningAllocationIcons_" + _0x1DDF4 + "_" + _0x1DE02 + "_" + _0x1C6B6);
				_0x1C902.setAttribute("class", "img-50");
				document.getElementById(_0x1DDF4 + "-mining-assigned-td").append(_0x1C902)
			};
			_0x1DE02 = "crushers";
			if (getItem(_0x1DE02 + "Allocation" + _0x1C6B6) == _0x1DDF4)
			{
				var _0x1C902 = getImage("images/" + _0x1DE02 + ".gif", "refreshMiningAllocationIcons_" + _0x1DDF4 + "_" + _0x1DE02 + "_" + _0x1C6B6);
				_0x1C902.setAttribute("class", "img-50");
				document.getElementById(_0x1DDF4 + "-mining-assigned-td").append(_0x1C902)
			}
		};
		_0x1DDF4 = "silver";
		document.getElementById(_0x1DDF4 + "-mining-assigned-td").innerHTML = "";
		for (var _0x1C6B6 = 0; _0x1C6B6 < 5; _0x1C6B6++)
		{
			_0x1DE02 = "miner";
			if (getItem(_0x1DE02 + "Allocation" + _0x1C6B6) == _0x1DDF4)
			{
				var _0x1C902 = getImage("images/" + _0x1DE02 + ".gif", "refreshMiningAllocationIcons_" + _0x1DDF4 + "_" + _0x1DE02 + "_" + _0x1C6B6);
				_0x1C902.setAttribute("class", "img-50");
				document.getElementById(_0x1DDF4 + "-mining-assigned-td").append(_0x1C902)
			};
			_0x1DE02 = "drills";
			if (getItem(_0x1DE02 + "Allocation" + _0x1C6B6) == _0x1DDF4)
			{
				var _0x1C902 = getImage("images/" + _0x1DE02 + ".gif", "refreshMiningAllocationIcons_" + _0x1DDF4 + "_" + _0x1DE02 + "_" + _0x1C6B6);
				_0x1C902.setAttribute("class", "img-50");
				document.getElementById(_0x1DDF4 + "-mining-assigned-td").append(_0x1C902)
			};
			_0x1DE02 = "crushers";
			if (getItem(_0x1DE02 + "Allocation" + _0x1C6B6) == _0x1DDF4)
			{
				var _0x1C902 = getImage("images/" + _0x1DE02 + ".gif", "refreshMiningAllocationIcons_" + _0x1DDF4 + "_" + _0x1DE02 + "_" + _0x1C6B6);
				_0x1C902.setAttribute("class", "img-50");
				document.getElementById(_0x1DDF4 + "-mining-assigned-td").append(_0x1C902)
			}
		};
		_0x1DDF4 = "gold";
		document.getElementById(_0x1DDF4 + "-mining-assigned-td").innerHTML = "";
		for (var _0x1C6B6 = 0; _0x1C6B6 < 5; _0x1C6B6++)
		{
			_0x1DE02 = "miner";
			if (getItem(_0x1DE02 + "Allocation" + _0x1C6B6) == _0x1DDF4)
			{
				var _0x1C902 = getImage("images/" + _0x1DE02 + ".gif", "refreshMiningAllocationIcons_" + _0x1DDF4 + "_" + _0x1DE02 + "_" + _0x1C6B6);
				_0x1C902.setAttribute("class", "img-50");
				document.getElementById(_0x1DDF4 + "-mining-assigned-td").append(_0x1C902)
			};
			_0x1DE02 = "drills";
			if (getItem(_0x1DE02 + "Allocation" + _0x1C6B6) == _0x1DDF4)
			{
				var _0x1C902 = getImage("images/" + _0x1DE02 + ".gif", "refreshMiningAllocationIcons_" + _0x1DDF4 + "_" + _0x1DE02 + "_" + _0x1C6B6);
				_0x1C902.setAttribute("class", "img-50");
				document.getElementById(_0x1DDF4 + "-mining-assigned-td").append(_0x1C902)
			};
			_0x1DE02 = "crushers";
			if (getItem(_0x1DE02 + "Allocation" + _0x1C6B6) == _0x1DDF4)
			{
				var _0x1C902 = getImage("images/" + _0x1DE02 + ".gif", "refreshMiningAllocationIcons_" + _0x1DDF4 + "_" + _0x1DE02 + "_" + _0x1C6B6);
				_0x1C902.setAttribute("class", "img-50");
				document.getElementById(_0x1DDF4 + "-mining-assigned-td").append(_0x1C902)
			}
		};
		_0x1DDF4 = "promethium";
		document.getElementById(_0x1DDF4 + "-mining-assigned-td").innerHTML = "";
		for (var _0x1C6B6 = 0; _0x1C6B6 < 5; _0x1C6B6++)
		{
			_0x1DE02 = "miner";
			if (getItem(_0x1DE02 + "Allocation" + _0x1C6B6) == _0x1DDF4)
			{
				var _0x1C902 = getImage("images/" + _0x1DE02 + ".gif", "refreshMiningAllocationIcons_" + _0x1DDF4 + "_" + _0x1DE02 + "_" + _0x1C6B6);
				_0x1C902.setAttribute("class", "img-50");
				document.getElementById(_0x1DDF4 + "-mining-assigned-td").append(_0x1C902)
			};
			_0x1DE02 = "drills";
			if (getItem(_0x1DE02 + "Allocation" + _0x1C6B6) == _0x1DDF4)
			{
				var _0x1C902 = getImage("images/" + _0x1DE02 + ".gif", "refreshMiningAllocationIcons_" + _0x1DDF4 + "_" + _0x1DE02 + "_" + _0x1C6B6);
				_0x1C902.setAttribute("class", "img-50");
				document.getElementById(_0x1DDF4 + "-mining-assigned-td").append(_0x1C902)
			};
			_0x1DE02 = "crushers";
			if (getItem(_0x1DE02 + "Allocation" + _0x1C6B6) == _0x1DDF4)
			{
				var _0x1C902 = getImage("images/" + _0x1DE02 + ".gif", "refreshMiningAllocationIcons_" + _0x1DDF4 + "_" + _0x1DE02 + "_" + _0x1C6B6);
				_0x1C902.setAttribute("class", "img-50");
				document.getElementById(_0x1DDF4 + "-mining-assigned-td").append(_0x1C902)
			}
		}
	}
}

function getMiningResourceOperatingNumber(_0x1D49A)
{
	var _0x1D48C = 0;
	for (var _0x1C6B6 = 0; _0x1C6B6 < 5; _0x1C6B6++)
	{
		if (getItemString(_0x1D49A + "Allocation" + _0x1C6B6) != "none")
		{
			_0x1D48C++
		}
	};
	return _0x1D48C
}
global_lastMiningResourceClicked = "none";

function clicksMiningResource(_0x1CFAE)
{
	var _0x1CFA0 = ["stone", "copper", "iron", "silver", "gold", "promethium", "titanium", "ancient"];
	var _0x1CC4A = "";
	_0x1CC4A += "<div onclick=\"sendBytes(\'MINING_ALLOCATE_RESET=" + _0x1CFAE + "\');closeDialogue(\'dialogue-confirm\')\" class=\"dialogue-fancy-button-div\">";
	_0x1CC4A += "<table width=\"100%\">";
	_0x1CC4A += "<tr>";
	_0x1CC4A += "<td width=\"120px\"><img src=\"images/" + _0x1CFAE + "ResetMining.png\" class=\"img-100\" /></td>";
	_0x1CC4A += "<td style=\"text-align:right;\"><span style=\"font-size:20pt\">RESET</span><hr class=\"hr-thin\" /><i style=\"color:grey\">Pull back all " + _0x1CFAE + " from mining</i></td>";
	_0x1CC4A += "</tr>";
	_0x1CC4A += "</table>";
	_0x1CC4A += "</div>";
	_0x1CC4A += "<h4 style=\'text-align:center\'>Total Resources Collected</h4>";
	var _0x1CF92 = false;
	for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1CFA0.length; _0x1C6B6++)
	{
		if (getItem(_0x1CFA0[_0x1C6B6] + capitalizeFirstLetter(_0x1CFAE)))
		{
			_0x1CC4A += "<div style=\'border:1px solid black; background-color:grey;padding:5px 10px;color:white; display:inline-block;margin:10px;\'>" + "<img src=\'images/" + _0x1CFA0[_0x1C6B6] + ".png\' class=\'img-40\' /> " + formatNumber(getItem(_0x1CFA0[_0x1C6B6] + capitalizeFirstLetter(_0x1CFAE))) + "</div>";
			_0x1CF92 = true
		}
	};
	if (!_0x1CF92)
	{
		_0x1CC4A += "<i style=\'color:grey;font-size:10pt\'>(none)<br /><br /><b>Close this dialogue and select an ore below to mine.</b></i>"
	};
	confirmDialogue("none", _0x1CC4A, "Close", "", "")
}

function capitalizeFirstLetter(_0x1C6D2)
{
	return _0x1C6D2.substr(0, 1).toUpperCase() + _0x1C6D2.substr(1)
}

function setCSSFromServer(_0x1D232, _0x1E238, _0x1E22A, _0x1E21C)
{
	switch (_0x1E238)
	{
	case "border":
		document.getElementById(_0x1D232).style.border = _0x1E22A;
	case "color":
		document.getElementById(_0x1D232).style.color = _0x1E22A;
	case "display":
		document.getElementById(_0x1D232).style.display = _0x1E22A
	}
}

function getMiningResourcesOn(_0x1CF30)
{
	var _0x1D4A8 = 0;
	for (var _0x1C6B6 = 1; _0x1C6B6 <= 5; _0x1C6B6++)
	{
		if (getItemString(_0x1CF30 + "Allocation" + 1) != "none")
		{
			_0x1D4A8++
		}
	};
	return _0x1D4A8
}
global_lastMiningOreClicked = "none";
global_lastMiningResourceClickedAvailable = [];

function clicksOreToMine(_0x1C91E)
{
	global_lastMiningOreClicked = _0x1C91E;
	if (global_lastMiningResourceClicked == "none")
	{
		if (global_oreLevels[_0x1C91E].level > getLevel(getItem("miningXp")))
		{
			confirmDialogue("images/x.png", "You need a mining level of " + global_oreLevels[_0x1C91E].level + " to mine " + _0x1C91E + "<br /><br /><i style=\'color:grey;font-size:14pt\'><b>Mining Xp</b> can be gained by using a stardust pickaxe.</i>", "Close", "", "")
		}
		else
		{
			var _0x1C85A = document.getElementById("dialogue-mining-ore-section");
			var _0x1CEEA = "";
			var _0x1CC4A = "";
			_0x1CEEA = "miner";
			if (getItem(_0x1CEEA) > 0)
			{
				global_lastMiningResourceClickedAvailable[_0x1CEEA] = getMinersOrMachineryAvailable(_0x1CEEA);
				document.getElementById("dialogue-mining-ore-" + _0x1CEEA).style.display = "";
				var _0x1CFBC = getAllocationAmount(_0x1CEEA, _0x1C91E);
				document.getElementById("dialogue-mining-ore-" + _0x1CEEA + "-allocated").innerHTML = _0x1CFBC
			};
			_0x1CEEA = "drills";
			if (getItem(_0x1CEEA) > 0)
			{
				global_lastMiningResourceClickedAvailable[_0x1CEEA] = getMinersOrMachineryAvailable(_0x1CEEA);
				document.getElementById("dialogue-mining-ore-" + _0x1CEEA).style.display = "";
				var _0x1CFBC = getAllocationAmount(_0x1CEEA, _0x1C91E);
				document.getElementById("dialogue-mining-ore-" + _0x1CEEA + "-allocated").innerHTML = _0x1CFBC
			};
			_0x1CEEA = "crushers";
			if (getItem(_0x1CEEA) > 0)
			{
				global_lastMiningResourceClickedAvailable[_0x1CEEA] = getMinersOrMachineryAvailable(_0x1CEEA);
				document.getElementById("dialogue-mining-ore-" + _0x1CEEA).style.display = "";
				var _0x1CFBC = getAllocationAmount(_0x1CEEA, _0x1C91E);
				document.getElementById("dialogue-mining-ore-" + _0x1CEEA + "-allocated").innerHTML = _0x1CFBC
			};
			openDialogue("dialogue-mining-ore")
		}
	}
	else
	{
		sendBytes("MINING_ALLOCATE=" + global_lastMiningResourceClicked + "~" + _0x1C91E)
	}
}

function allocateMinerOrMachinery(_0x1CC04, _0x1CBE8)
{
	var _0x1CBF6 = 1;
	if (!_0x1CBE8)
	{
		_0x1CBF6 = -1
	};
	var _0x1CBDA = parseInt(document.getElementById("dialogue-mining-ore-" + _0x1CC04 + "-allocated").innerHTML);
	if (_0x1CBDA + _0x1CBF6 < 0 && !_0x1CBE8)
	{
		return
	}
	else
	{
		if (_0x1CBE8 && global_lastMiningResourceClickedAvailable[_0x1CC04] == 0)
		{
			return
		}
		else
		{
			global_lastMiningResourceClickedAvailable[_0x1CC04] += (_0x1CBF6 * -1);
			if (_0x1CBF6 > 0)
			{
				sendBytes("MINING_ALLOCATE=" + _0x1CC04 + "~" + global_lastMiningOreClicked)
			}
			else
			{
				sendBytes("MINING_DEALLOCATE=" + _0x1CC04 + "~" + global_lastMiningOreClicked)
			};
			document.getElementById("dialogue-mining-ore-" + _0x1CC04 + "-allocated").innerHTML = _0x1CBDA + _0x1CBF6
		}
	}
}

function getMinersOrMachineryAvailable(_0x1CC04)
{
	var _0x1CDC4 = 0;
	for (var _0x1C6B6 = 0; _0x1C6B6 < getItem(_0x1CC04); _0x1C6B6++)
	{
		if (getItemString(_0x1CC04 + "Allocation" + _0x1C6B6) == "none")
		{
			_0x1CDC4++
		}
	};
	return _0x1CDC4
}

function getAllocationAmount(_0x1CC04, _0x1C91E)
{
	var _0x1CDC4 = 0;
	for (var _0x1C6B6 = 0; _0x1C6B6 < 5; _0x1C6B6++)
	{
		if (getItem(_0x1CC04 + "Allocation" + _0x1C6B6) == _0x1C91E)
		{
			_0x1CDC4++
		}
	};
	return _0x1CDC4
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
	}
}

function sanitize(_0x1E1C8)
{
	const _0x1E1AC = {
		'&': "&amp;"
		, '<': "&lt;"
		, '>': "&gt;"
		, '\"': "&quot;"
		, "\'": "&#x27;"
		, "/": "&#47;"
	};
	const _0x1E1BA = /[&<>"'/]/ig;
	return _0x1E1C8.replace(_0x1E1BA, (_0x1E1D6) => (_0x1E1AC[_0x1E1D6]))
}

function removeChars(_0x1E166)
{
	return _0x1E166.replace(/[^\x00-\x7F]/g, "")
}
global_autoscrollChat = true;

function setAutoScroll(_0x1CDB6)
{
	global_autoscrollChat = _0x1CDB6;
	if (global_autoscrollChat)
	{
		document.getElementById("chat-autoscroll-button-check").src = "images/check.png";
		var _0x1CE5E = document.getElementById("chat-area-view");
		$(_0x1CE5E).scrollTop($(_0x1CE5E)[0].scrollHeight)
	}
	else
	{
		document.getElementById("chat-autoscroll-button-check").src = "images/x.png"
	}
}

function chat(data)
{
	var _0x1C75E = data.split("~");
	var _0x1CEDC = _0x1C75E[0];
	var _0x1CEB2 = _0x1C75E[1];
	var _0x1CE88 = _0x1C75E[2];
	var _0x1CE6C = _0x1C75E[3];
	var _0x1CEA4 = _0x1C75E[4];
	var _0x1C788 = _0x1C75E[5];
	var _0x1CE7A = "";
	if (_0x1CE6C != "none")
	{
		_0x1CE7A = " <img src=\'images/" + _0x1CE6C + ".png\' style=\'vertical-align:middle\' width=\'30px\' height=\'30px\' /> "
	};
	var _0x1CE96 = "";
	var _0x1CECE = "";
	if (_0x1CE88 != "none")
	{
		tagTitle = _0x1CE88;
		switch (_0x1CE88)
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
		_0x1CE96 = " <span class=\'chat-tag-" + _0x1CE88 + "\'>" + tagTitle + "</span> ";
		switch (_0x1CE88)
		{
		case "Dev":
			_0x1CECE = "style=\'color:#808000\'";
			break;
		case "Financier":
			_0x1CECE = "style=\'color:#007a99\'";
			break;
		case "Investor":
			_0x1CECE = "style=\'color:#cc66ff\'";
			break;
		case "Moderator":
			_0x1CECE = "style=\'color:grey;\'";
			break;
		case "yell":
			_0x1CECE = "style=\'color:blue;\'";
			break
		}
	};
	var _0x1CEC0 = _0x1CEA4.split(" ");
	msg = "";
	for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1CEC0.length; _0x1C6B6++)
	{
		if (isValidURL(_0x1CEC0[_0x1C6B6]))
		{
			msg += convertStringToURL(_0x1CEC0[_0x1C6B6]) + " "
		}
		else
		{
			msg += sanitize(_0x1CEC0[_0x1C6B6]) + " "
		}
	};
	_0x1CEA4 = removeChars(msg);
	if (_0x1C788 == "error")
	{
		htmlOutput = "<span style=\'color:grey\'>" + _0x1CEA4 + "</span>"
	}
	else
	{
		if (_0x1C788 == "pm_from")
		{
			_0x1CECE = "style=\'color:purple\'";
			htmlOutput = "<span style=\'color:grey\'>" + getTimeFetch() + "</span>" + _0x1CE7A + _0x1CE96 + "<span " + _0x1CECE + "> [PM from " + _0x1CEDC + "] " + _0x1CEA4 + "</span>"
		}
		else
		{
			if (_0x1C788 == "pm_to")
			{
				_0x1CECE = "style=\'color:purple\'";
				htmlOutput = "<span style=\'color:grey\'>" + getTimeFetch() + "</span>" + _0x1CE7A + _0x1CE96 + "<span " + _0x1CECE + "> [Sent to " + _0x1CEDC + "] " + _0x1CEA4 + "</span>"
			}
			else
			{
				if (_0x1CE88 == "yell")
				{
					htmlOutput = "<span style=\'color:grey\'>" + getTimeFetch() + "</span>" + _0x1CE7A + _0x1CE96 + "<span " + _0x1CECE + "><b>" + _0x1CEA4 + "</b></span>"
				}
				else
				{
					if (_0x1CE88 == "Investor")
					{
						htmlOutput = "<span style=\'color:grey\'>" + getTimeFetch() + "</span>" + _0x1CE7A + "<img src=\'images/investor.gif\' style=\'vertical-align:middle;\'  /> " + "<span " + _0x1CECE + "><b>" + _0x1CEDC + " (" + _0x1CEB2 + "): </b>" + _0x1CEA4 + "</span>"
					}
					else
					{
						htmlOutput = "<span style=\'color:grey\'>" + getTimeFetch() + "</span>" + _0x1CE7A + _0x1CE96 + "<span " + _0x1CECE + "><b>" + _0x1CEDC + " (" + _0x1CEB2 + "): </b>" + _0x1CEA4 + "</span>"
					}
				}
			}
		}
	};
	var _0x1CE5E = document.getElementById("chat-area-view");
	if (_0x1CE5E.innerHTML.length >= 60000)
	{
		_0x1CE5E.innerHTML = _0x1CE5E.innerHTML.substr(30000, _0x1CE5E.innerHTML.length)
	};
	$(_0x1CE5E).append("<div>" + htmlOutput + "</div>");
	if (global_autoscrollChat)
	{
		$(_0x1CE5E).scrollTop($(_0x1CE5E)[0].scrollHeight)
	}
}

function isValidURL(_0x1D73A)
{
	if (_0x1D73A.indexOf("http") >= 0 || _0x1D73A.indexOf("www.") >= 0 || _0x1D73A.indexOf(".com") >= 0 || _0x1D73A.indexOf(".ca") >= 0 || _0x1D73A.indexOf(".co") >= 0 || _0x1D73A.indexOf(".net") >= 0 || _0x1D73A.indexOf(".us") >= 0)
	{
		if (_0x1D73A.indexOf("%22") >= 0 || _0x1D73A.indexOf("%27") >= 0 || _0x1D73A.indexOf("%3E") >= 0 || _0x1D73A.indexOf("%3C") >= 0 || _0x1D73A.indexOf("&#62;") >= 0 || _0x1D73A.indexOf("&#60;") >= 0 || _0x1D73A.indexOf(";") >= 0 || _0x1D73A.indexOf("~") >= 0 || _0x1D73A.indexOf("\"") >= 0 || _0x1D73A.indexOf("<") >= 0 || _0x1D73A.indexOf(">") >= 0 || _0x1D73A.indexOf("javascript:") >= 0 || _0x1D73A.indexOf("window") >= 0 || _0x1D73A.indexOf("document") >= 0 || _0x1D73A.indexOf("cookie") >= 0)
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

function convertStringToURL(_0x1C6D2)
{
	if (!_0x1C6D2.startsWith("http"))
	{
		_0x1C6D2 = "http://" + _0x1C6D2
	};
	var _0x1D0E2 = "<a onclick=\'return clicksLink();\' href=\'" + _0x1C6D2 + "\' target=\'_blank\'>" + _0x1C6D2 + "</a>";
	return _0x1D0E2
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
	var _0x1D304 = new Date();
	if (_0x1D304.getHours() < 10)
	{
		var _0x1D57A = "0" + _0x1D304.getHours()
	}
	else
	{
		var _0x1D57A = _0x1D304.getHours()
	};
	if (_0x1D304.getMinutes() < 10)
	{
		var _0x1D588 = "0" + _0x1D304.getMinutes()
	}
	else
	{
		var _0x1D588 = _0x1D304.getMinutes()
	};
	var _0x1D56C = "[" + _0x1D57A + ":" + _0x1D588 + "] ";
	return _0x1D56C
}

function chatInput(_0x1C6E0)
{
	if (_0x1C6E0.keyCode == 13)
	{
		chatSend()
	};
	if (_0x1C6E0.keyCode == 9)
	{
		if (getItemString("lastPM") != "none" && document.getElementById("chat-area-input").value.length == 0)
		{
			document.getElementById("chat-area-input").value = "/pm " + getItemString("lastPM") + " "
		};
		_0x1C6E0.preventDefault()
	}
}

function chatSend()
{
	sendBytes("CHAT=" + document.getElementById("chat-area-input").value.replace(/~/g, " "));
	document.getElementById("chat-area-input").value = ""
}

function changeChatHeight(_0x1CD9A)
{
	var _0x1CDA8 = parseInt(document.getElementById("chat-area-view").style.height);
	_0x1CDA8 += _0x1CD9A;
	document.getElementById("chat-area-view").style.height = _0x1CDA8 + "px"
}

function refreshHomeTab()
{
	if (getItem("homeHint") == 0)
	{
		sendBytes("HOME_HINT_OFF")
	}
}
var clientSetItesmTick = 0;

function setItems(data)
{
	clientSetItesmTick++;
	var _0x1C75E = data.split("~");
	var _0x1E2A8 = [];
	for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1C75E.length; _0x1C6B6++)
	{
		var _0x1C83E = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1E2B6 = _0x1C75E[_0x1C6B6];
		var _0x1E2D2 = getItem(_0x1C83E);
		setItem(_0x1C83E, _0x1E2B6);
		if (_0x1E2D2 != _0x1E2B6 || clientSetItesmTick <= 3)
		{
			_0x1E2A8.push(_0x1C83E)
		};
		if (document.getElementById("item-box-" + _0x1C83E) !== null)
		{
			if (getItem(_0x1C83E, false) > 0)
			{
				if (document.getElementById("item-box-" + _0x1C83E).style.display == "none")
				{
					document.getElementById("item-box-" + _0x1C83E).style.display = ""
				}
			}
			else
			{
				if (document.getElementById("item-box-" + _0x1C83E).style.display != "none")
				{
					document.getElementById("item-box-" + _0x1C83E).style.display = "none"
				}
			}
		};
		var _0x1E29A = document.getElementsByTagName("item-" + _0x1C83E);
		for (var _0x1E2C4 = 0; _0x1E2C4 < _0x1E29A.length; _0x1E2C4++)
		{
			if (_0x1E29A[_0x1E2C4].hasAttribute("type"))
			{
				if (_0x1E29A[_0x1E2C4].getAttribute("type") == "timer")
				{
					_0x1E29A[_0x1E2C4].innerHTML = formatTime(_0x1E2B6)
				};
				if (_0x1E29A[_0x1E2C4].getAttribute("type") == "number")
				{
					_0x1E29A[_0x1E2C4].innerHTML = formatNumber(_0x1E2B6)
				}
			}
			else
			{
				_0x1E29A[_0x1E2C4].innerHTML = _0x1E2B6
			}
		}
	};
	for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1E2A8.length; _0x1C6B6++)
	{
		manageChangedItem(_0x1E2A8[_0x1C6B6])
	}
}

function formatNumber(_0x1D2A2)
{
	if (_0x1D2A2 == "INF")
	{
		return "<span style=\'font-size:20pt;vertical-align: middle;\'>&#8734;</span>"
	};
	if (isNaN(_0x1D2A2))
	{
		return _0x1D2A2
	};
	var _0x1D294 = "";
	if (_0x1D2A2 >= 1000000000 && _0x1D2A2 < 10000000000)
	{
		_0x1D2A2 /= 1000000;
		_0x1D294 = "M"
	}
	else
	{
		if (_0x1D2A2 >= 10000000000)
		{
			_0x1D2A2 /= 1000000000;
			_0x1D294 = "B"
		}
	};
	return Math.floor(_0x1D2A2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "" + _0x1D294
}

function manageChangedItem(_0x1C83E)
{
	var _0x1C7B2 = getItem(_0x1C83E, false);
	if (_0x1C83E.endsWith("Allocation0") || _0x1C83E.endsWith("Allocation1") || _0x1C83E.endsWith("Allocation2") || _0x1C83E.endsWith("Allocation3") || _0x1C83E.endsWith("Allocation4"))
	{
		refreshMiningAllocationIcons()
	};
	if (_0x1C7B2 == -1)
	{
		if (_0x1C83E.endsWith("Quest"))
		{
			loadQuestAndAchievementsTab()
		}
	};
	if (_0x1C83E.endsWith("Quest"))
	{
		var _0x1D908 = getQuestsInProgress();
		if (_0x1D908 > 0)
		{
			document.getElementById("notification-questsStarted-label").innerHTML = "In Progress: " + _0x1D908;
			document.getElementById("notification-questsStarted").style.display = ""
		}
		else
		{
			document.getElementById("notification-questsStarted").style.display = "none"
		}
	};
	if (_0x1C83E.startsWith("heroDebuff"))
	{
		resetHeroNerfs()
	};
	if (_0x1C83E.endsWith("Museum"))
	{
		refreshMuseum();
		if (document.getElementById("museum-info-itembox") != null)
		{
			document.getElementById("museum-info-itembox").innerHTML = getMuseumItemsCount()[0] + "/" + getMuseumItemsCount()[1]
		}
	};
	initializeTooltips;
	if (_0x1C83E.endsWith("Oven") || _0x1C83E == "researcherCooking")
	{
		initializeTooltips()
	};
	if (_0x1C83E.endsWith("Seeds"))
	{
		if (_0x1C7B2 == 0)
		{
			selectedSeed = "none"
		}
	};
	if (_0x1C83E.endsWith("PotionTimer"))
	{
		if (_0x1C7B2 > 0)
		{
			showElement("notification-" + _0x1C83E)
		}
		else
		{
			hideElement("notification-" + _0x1C83E)
		}
	};
	if (_0x1C83E.endsWith("Bought"))
	{
		loadShopTab()
	};
	if (_0x1C83E.endsWith("Xp"))
	{
		refreshTopSkillBar()
	};
	if (_0x1C83E.startsWith("researcher"))
	{
		if (document.getElementById("research-completed-label") != null)
		{
			document.getElementById("research-completed-label").innerHTML = getTotalResearches()
		};
		refreshResearching()
	};
	if (_0x1C83E.endsWith("Kills"))
	{
		initializeTooltips()
	};
	if (_0x1C83E.toLowerCase().endsWith("fishingnet") || _0x1C83E.toLowerCase().endsWith("harpoon") || _0x1C83E.toLowerCase().endsWith("fishingrod"))
	{
		initializeTooltips()
	};
	switch (_0x1C83E)
	{
	case "oxygenTankTimer":
		var _0x1D916 = _0x1C83E.substring(0, _0x1C83E.length - 5);
		if (_0x1C7B2 > 1)
		{
			showElement("notification-" + _0x1C83E);
			if (document.getElementById(_0x1D916 + "-itemBox-value") != null)
			{
				document.getElementById(_0x1D916 + "-itemBox-value").innerHTML = formatTime(_0x1C7B2)
			};
			hideElement("notification-" + _0x1C83E + "-Ready")
		}
		else
		{
			hideElement("notification-" + _0x1C83E);
			if (_0x1C7B2 == 1)
			{
				if (document.getElementById(_0x1D916 + "-itemBox-value") != null)
				{
					document.getElementById(_0x1D916 + "-itemBox-value").innerHTML = "Ready"
				};
				showElement("notification-" + _0x1C83E + "-Ready")
			}
			else
			{
				if (document.getElementById(_0x1D916 + "-itemBox-value") != null)
				{
					document.getElementById(_0x1D916 + "-itemBox-value").innerHTML = ""
				};
				hideElement("notification-" + _0x1C83E + "-Ready")
			}
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
	case "healCooldown":
		;
	case "poisonCooldown":
		;
	case "reflectCooldown":
		if (global_lastTabId == "right-combat-fighting")
		{
			refeshMagicInCombat()
		};
		break;
	case "questPoints":
		loadQuestAndAchievementsTab();
		break;
	case "researcherMagic":
		if (_0x1C7B2 >= 3)
		{
			showElement("item-box-convertMagic")
		};
		break;
	case "hardcoreId":
		if (_0x1C7B2 > 0)
		{
			document.getElementById("hardcore-icon-top-left").style.display = ""
		}
		else
		{
			document.getElementById("hardcore-icon-top-left").style.display = "none"
		};
		break;
	case "largeManaPotionUsed":
		refreshPotionsCombat();
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
				var _0x1C902 = getImage("images/hourglass.png", "cd_hourglass_hero");
				_0x1C902.setAttribute("class", "img-30");
				document.getElementById("td-hero-cooldown").append(_0x1C902);
				var _0x1D8FA = document.createElement("item-heroCooldown");
				_0x1D8FA.setAttribute("type", "timer");
				document.getElementById("td-hero-cooldown").append(_0x1D8FA)
			}
		}
		else
		{
			if (document.getElementById("td-hero-cooldown").innerHTML != "")
			{
				document.getElementById("td-hero-cooldown").innerHTML = ""
			}
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
	case "fireFeatherSpawn":
		if (_0x1C7B2 > 0)
		{
			showElement("fireFeatherSpawn-" + _0x1C7B2);
			showElement("notification-fireFeatherSpawnReady")
		}
		else
		{
			hideElement("fireFeatherSpawn-1");
			hideElement("notification-fireFeatherSpawnReady")
		};
		break;
	case "chatIcon":
		refreshSigilsDialoguesIcons();
		break;
	case "updateLogNotification":
		if (_0x1C7B2 > 0)
		{
			document.getElementById("new-updates-gif").style.display = ""
		}
		else
		{
			document.getElementById("new-updates-gif").style.display = "none"
		};
		break;
	case "giantSnakeTimer":
		if (_0x1C7B2 > 0)
		{
			showElement("notification-" + _0x1C83E)
		}
		else
		{
			hideElement("notification-" + _0x1C83E)
		};
		break;
	case "heroReadyNotification":
		;
	case "woodcuttingReadyNotification":
		;
	case "farmingReadyNotification":
		;
	case "updateTimer":
		if (_0x1C7B2 > 0)
		{
			showElement("notification-" + _0x1C83E)
		}
		else
		{
			hideElement("notification-" + _0x1C83E)
		};
		break;
	case "currentFighingArea":
		if (global_lastTabId == "right-combat-fighting")
		{
			changeBodyBackground("images/" + getItemString("currentFighingArea") + "_background.png")
		};
		break;
	case "cooksBookTimer":
		if (getItem(_0x1C83E) > 1)
		{
			showElement("notification-cooksBookTimer")
		}
		else
		{
			if (getItem(_0x1C83E) == 1)
			{
				hideElement("notification-cooksBookTimer");
				showElement("notification-cooksBookReady")
			}
			else
			{
				if (getItem(_0x1C83E) == 0)
				{
					hideElement("notification-cooksBookReady");
					hideElement("notification-cooksBookTimer")
				}
			}
		};
		break;
	case "cyanCrystalUsed":
		;
	case "greenCrystalUsed":
		;
	case "redCrystalUsed":
		refreshDarkCrystalUsedLabel();
		break;
	case "researcherTimer":
		if (_0x1C7B2 == 1)
		{
			document.getElementById("researcher-status-label").innerHTML = "<img src=\'images/" + getItemString("researcherSkill") + "Skill.png\' class=\'img-50\' /> <span onclick=\'sendBytes(\"CLAIM_RESEARCHER\")\' style=\'display:inline-block;border:1px solid green;background-color:black;padding:15px;cursor:pointer;\'>CLAIM <img src=\'images/atom.png\' class=\'img-30\' /></span></i>";
			showElement("notification-researcherReady")
		}
		else
		{
			if (_0x1C7B2 > 1)
			{
				document.getElementById("researcher-status-label").innerHTML = "<img src=\'images/" + getItemString("researcherSkill") + "Skill.png\' class=\'img-50\' /> " + formatTime(_0x1C7B2);
				showElement("notification-researcher");
				hideElement("notification-researcherReady")
			}
			else
			{
				document.getElementById("researcher-status-label").innerHTML = "IDLE";
				hideElement("notification-researcherReady")
			}
		};
		break;
	case "researcherSkill":
		refreshResearching();
		break;
	case "researcherMining":
		if (_0x1C7B2 == 1)
		{
			showElement("item-box-diamond_verydark")
		}
		else
		{
			if (_0x1C7B2 >= 2)
			{
				hideElement("item-box-diamond_verydark");
				showElement("item-box-gemList2")
			}
		};
		break;
	case "home":
		document.getElementById("navigation-right-home-button").style.display = "";
		document.getElementById("navigation-right-home-image").src = "images/" + getItemString("home") + ".png";
		break;
	case "homeHint":
		if (_0x1C7B2 == 1)
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
		if (_0x1C7B2 > 0)
		{
			unlockTreePatch(_0x1C83E.substr(12))
		}
		else
		{
			if (_0x1C83E == "treeUnlocked5")
			{
				document.getElementById("tree-section-img-5").src = "images/tree_locked_donor.png"
			};
			if (_0x1C83E == "treeUnlocked6")
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
		if (_0x1C7B2 > 0)
		{
			unlockPlotPatch(_0x1C83E.substr(12))
		}
		else
		{
			if (_0x1C83E == "plotUnlocked5")
			{
				document.getElementById("plot-section-img-5").src = "images/tree_locked_donor.png"
			};
			if (_0x1C83E == "plotUnlocked6")
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
		if (_0x1C7B2 > 0)
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
	case "smeltingCurrentAmount":
		var _0x1D924 = parseInt(getItem("smeltingCurrentAmount") / getItem("smeltingRequestedAmount") * 100);
		if (isNaN(_0x1D924))
		{
			_0x1D924 = 0
		};
		document.getElementById("notification-furnace-value").innerHTML = _0x1D924 + "%";
		break;
	case "monsterHp":
		;
	case "monsterMaxHp":
		refreshMonsterHpBar();
		break;
	case "miningUnlocked":
		if (_0x1C7B2 > 0)
		{
			document.getElementById("span-topBar-miningXPAreaLocked").style.display = "none";
			document.getElementById("span-topBar-miningXPArea").style.display = ""
		};
		break;
	case "craftingUnlocked":
		if (_0x1C7B2 > 0)
		{
			document.getElementById("span-topBar-craftingXPAreaLocked").style.display = "none";
			document.getElementById("span-topBar-craftingXPArea").style.display = ""
		};
		break;
	case "bobsPanicQuest":
		if (_0x1C7B2 == -1)
		{
			document.getElementById("img-hint-arrow-farming-button").style.display = "none";
			document.getElementById("img-hint-arrow-woodcutting-button").style.display = "none"
		};
		break;
	case "woodcuttingUnlocked":
		if (_0x1C7B2 > 0)
		{
			document.getElementById("span-topBar-woodcuttingXPAreaLocked").style.display = "none";
			document.getElementById("span-topBar-woodcuttingXPArea").style.display = "";
			document.getElementById("navigation-right-woodcutting-button").style.display = ""
		};
		break;
	case "fishingUnlocked":
		if (_0x1C7B2 > 0)
		{
			document.getElementById("span-topBar-fishingXPAreaLocked").style.display = "none";
			document.getElementById("span-topBar-fishingXPArea").style.display = "";
			document.getElementById("navigation-right-fishing-button").style.display = ""
		};
		break;
	case "cookingUnlocked":
		if (_0x1C7B2 > 0)
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
		if (_0x1C7B2 > 0)
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
	case "farmingUnlocked":
		if (_0x1C7B2 > 0)
		{
			document.getElementById("span-topBar-farmingXPAreaLocked").style.display = "none";
			document.getElementById("span-topBar-farmingXPArea").style.display = "";
			document.getElementById("navigation-right-farming-button").style.display = ""
		};
		break;
	case "magicTabNotification":
		if (_0x1C7B2 > 0)
		{
			document.getElementById("img-hint-arrow-magic-button").style.display = "none"
		};
		break;
	case "brewingUnlocked":
		if (_0x1C7B2 > 0)
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
		if (_0x1C7B2 == 2)
		{
			document.getElementById("navigation-right-mining-button").style.display = ""
		}
		else
		{
			if (_0x1C7B2 > 2 || _0x1C7B2 == -1)
			{
				document.getElementById("navigation-right-mining-button").style.display = "";
				document.getElementById("img-hint-arrow-mining-button").style.display = "none"
			}
		};
		if (_0x1C7B2 == 3)
		{
			document.getElementById("navigation-right-crafting-button").style.display = ""
		}
		else
		{
			if (_0x1C7B2 > 3 || _0x1C7B2 == -1)
			{
				document.getElementById("navigation-right-crafting-button").style.display = "";
				document.getElementById("img-hint-arrow-crafting-button").style.display = "none"
			}
		};
		break;
	case "monsterName":
		if (_0x1C7B2 == "none" && global_lastTabId == "right-combat-fighting")
		{
			navigate("right-combat")
		};
		resetAnimationOfCurrentFightToIdle();
		if (_0x1C7B2 == "none")
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

function setItem(_0x1E28C, _0x1C7B2)
{
	window["var_" + _0x1E28C] = _0x1C7B2
}

function changeCombatMap(_0x1CC2E)
{
	if (_0x1CC2E == 4 && getItem("lavaAlienKills") == 0)
	{
		confirmDialogue("images/forestAlien.png", "Sorry, I only bring adventurers to the northern fields if they have killed my dumb brother in the lava dungeon below.<br /><br />Besides, it\'s cold up in the north.", "Close", "", "");
		return
	};
	if (_0x1CC2E == 5 && getItem("weapon") != "torch")
	{
		confirmDialogue("images/torch.png", "You need a light source to go in here.", "Close", "", "");
		return
	};
	document.getElementById("div-map-1").style.display = "none";
	document.getElementById("div-map-2").style.display = "none";
	document.getElementById("div-map-3").style.display = "none";
	document.getElementById("div-map-4").style.display = "none";
	document.getElementById("div-map-5").style.display = "none";
	document.getElementById("div-map-6").style.display = "none";
	document.getElementById("div-map-" + _0x1CC2E).style.display = "inline-block"
}

function flashElement(_0x1D232, _0x1D240, _0x1C742)
{
	$(_0x1D232)
}

function getItemString(_0x1D400)
{
	return "" + getItem(_0x1D400, true)
}

function getItem(_0x1D400, _0x1D3F2)
{
	if (window["var_" + _0x1D400] == null)
	{
		if (_0x1D3F2)
		{
			return "none"
		}
		else
		{
			return 0
		}
	};
	var _0x1C7B2 = window["var_" + _0x1D400];
	if (isNaN(_0x1C7B2))
	{
		return _0x1C7B2
	}
	else
	{
		return parseInt(_0x1C7B2)
	}
}

function variableExists(_0x1D1EC)
{
	return window[_0x1D1EC] != null
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

function hideElement(_0x1D232)
{
	if (document.getElementById(_0x1D232) != null)
	{
		if (document.getElementById(_0x1D232).style.display != "none")
		{
			document.getElementById(_0x1D232).style.display = "none"
		}
	}
}

function showElement(_0x1D232)
{
	if (document.getElementById(_0x1D232) != null)
	{
		if (document.getElementById(_0x1D232).style.display == "none")
		{
			document.getElementById(_0x1D232).style.display = ""
		}
	}
}

function clicksLoginBackButton()
{
	document.getElementById("login-box-connected-guest").style.display = "";
	document.getElementById("login-box-new-account-form").style.display = "none";
	document.getElementById("login-box-login-form").style.display = "none"
}

function setInnerHTML(_0x1D232, _0x1E246)
{
	document.getElementById(_0x1D232).style.display = "";
	document.getElementById(_0x1D232).innerHTML = _0x1E246
}

function clicksCreateNewAccount()
{
	var _0x1CF22 = document.getElementById("login-box-new-account-username").value;
	var _0x1CF14 = document.getElementById("login-box-new-account-password").value;
	var _0x1CF06 = document.getElementById("login-box-new-account-password2").value;
	var _0x1CEF8 = 0;
	if (document.getElementById("login-box-new-account-hardcore").checked)
	{
		_0x1CEF8 = 1
	};
	sendBytes("NEW_ACCOUNT=" + _0x1CF22 + "~" + _0x1CF14 + "~" + _0x1CF06 + "~" + _0x1CEF8);
	setInnerHTML("login-box-new-account-errors", "Loading...")
}

function clicksLoginAccount()
{
	var _0x1CF84 = document.getElementById("login-box-login-username").value;
	var _0x1CF76 = document.getElementById("login-box-login-password").value;
	sendBytes("LOGIN=" + _0x1CF84 + "~" + _0x1CF76);
	setInnerHTML("login-box-new-account-errors", "Loading...")
}

function sendBytes(data)
{
	if (data.length <= 255)
	{
		global_webSocket.send(data)
	}
}
global_ImageCache = [];

function getImage(_0x1D0E2, _0x1D3E4)
{
	if (global_ImageCache[_0x1D3E4] != null)
	{
		if (global_ImageCache[_0x1D3E4].url == _0x1D0E2)
		{
			return global_ImageCache[_0x1D3E4].obj
		}
	};
	var _0x1D3D6 = new ImageObject(_0x1D0E2);
	global_ImageCache[_0x1D3E4] = _0x1D3D6;
	return _0x1D3D6.obj
}

function ImageObject(_0x1D0E2)
{
	this.url = _0x1D0E2;
	this.obj = new Image();
	this.obj.src = _0x1D0E2
}
global_SoundCache = [];

function playSound(_0x1D0E2)
{
	if (global_SoundCache[_0x1D0E2] != null)
	{
		return global_SoundCache[_0x1D0E2].obj.play()
	};
	var _0x1DD14 = new SoundObject(_0x1D0E2);
	global_SoundCache[_0x1D0E2] = _0x1DD14;
	return _0x1DD14.obj.play()
}

function SoundObject(_0x1D0E2)
{
	this.url = _0x1D0E2;
	this.obj = new Audio(_0x1D0E2);
	this.obj.volume = 0.2
}

function formatTime(_0x1D2DA)
{
	if (_0x1D2DA <= 0)
	{
		return "0"
	};
	var _0x1C7A4 = _0x1D2DA;
	var _0x1D2B0 = ~~(_0x1C7A4 / 3600);
	var _0x1D2BE = ~~((_0x1C7A4 % 3600) / 60);
	var _0x1D2E8 = (_0x1C7A4 % 60).toFixed(0);
	var _0x1D2CC = "";
	days = 0;
	while (_0x1D2B0 >= 24)
	{
		_0x1D2B0 -= 24;
		days++
	};
	if (_0x1D2B0 > 0)
	{
		_0x1D2CC += "" + _0x1D2B0 + ":" + (_0x1D2BE < 10 ? "0" : "")
	};
	_0x1D2CC += "" + _0x1D2BE + ":" + (_0x1D2E8 < 10 ? "0" : "");
	_0x1D2CC += "" + _0x1D2E8;
	if (days > 1)
	{
		return days + " days, " + _0x1D2CC
	}
	else
	{
		if (days == 1)
		{
			return days + " day, " + _0x1D2CC
		}
		else
		{
			return _0x1D2CC
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
	global_canvasIdleHero2D.drawImage(getImage("images/" + getItem("head", true) + "Equip.png", "hero_idle_head"), 0, global_idleHeroCanvasTickFrame.getYValue());
	global_canvasIdleHero2D.drawImage(getImage("images/" + getItem("body", true) + "Equip.png", "hero_idle_body"), 0, global_idleHeroCanvasTickFrame.getYValue());
	global_canvasIdleHero2D.drawImage(getImage("images/" + getItem("amulet", true) + "Equip.png", "hero_idle_amulet"), 0, global_idleHeroCanvasTickFrame.getYValue());
	global_canvasIdleHero2D.drawImage(getImage("images/" + getItem("legs", true) + "Equip.png", "hero_idle_legs"), 0, global_idleHeroCanvasTickFrame.getYValue() / 4);
	global_canvasIdleHero2D.drawImage(getImage("images/" + getItem("gloves", true) + "Equip.png", "hero_idle_gloves"), 0, global_idleHeroCanvasTickFrame.getYValue());
	global_canvasIdleHero2D.drawImage(getImage("images/" + getItem("shield", true) + "Equip.png", "hero_idle_shield"), 0, global_idleHeroCanvasTickFrame.getYValue());
	global_canvasIdleHero2D.drawImage(getImage("images/" + getItem("weapon", true) + "Equip.png", "hero_idle_weapon"), 0, global_idleHeroCanvasTickFrame.getYValue());
	global_canvasIdleHero2D.drawImage(getImage("images/" + getItem("boots", true) + "Equip.png", "hero_idle_boots"), 0, 0);
	global_canvasIdleHero2D.drawImage(getImage("images/" + getItem("arrows", true) + "Equip.png", "hero_idle_arrows"), 0, 0)
}
global_lastTabId = "right-combat";

function navigate(_0x1D9CC)
{
	sendBytes("LAST_TAB=" + _0x1D9CC);
	hideAllRightTabs();
	document.getElementById("navigation-" + _0x1D9CC).style.display = "";
	global_lastTabId = _0x1D9CC;
	changeBackgroundRightSection("default");
	switch (_0x1D9CC)
	{
	case "right-home":
		refreshHomeTab();
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
	if (_0x1D9CC != "right-combat-fighting" && getRandomInt(10000) == 0 && getItem("darkCrystalUsed") > 0)
	{
		faradoxRandomShow()
	}
}

function getTotalKills()
{
	var _0x1D596 = 0;
	_0x1D596 += getItem("chickenKills");
	_0x1D596 += getItem("ratKills");
	_0x1D596 += getItem("beeKills");
	return _0x1D596
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

function getOilCost(_0x1CF30)
{
	switch (_0x1CF30)
	{
	case "drills":
		;
	case "copper":
		;
	case "sand":
		return 1;
	case "iron":
		;
	case "crushers":
		return 5;
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

function refreshSigilsDialoguesIcons(_0x1E078)
{
	var _0x1CC4A = "";
	var _0x1E06A = false;
	var _0x1E086 = ["candyCaneSigil", "spiderSigil", "carrotSigil", "snowmanSigil", "catSigil", "bunnySigil", "bluePartyHatSigil", "whitePartyHatSigil", "yellowPartyHatSigil", "greenPartyHatSigil", "redPartyHatSigil", "pinkPartyHatSigil", "treeSigil", "ghostSigil", "easterEggSigil", "santaHatSigil", "pumpkinSigil"];
	for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1E086.length; _0x1C6B6++)
	{
		if (getItem(_0x1E086[_0x1C6B6]) > 0 || _0x1E078)
		{
			_0x1E06A = true;
			_0x1CC4A += "<div onclick=\'sendBytes(\"CHAT_ICON=" + _0x1E086[_0x1C6B6] + "\")\' class=\'dialogue-sigils-itemBox\'>";
			_0x1CC4A += "<img src=\'images/" + _0x1E086[_0x1C6B6] + ".png\' class=\'img-30\' />";
			if (getItemString("chatIcon") == _0x1E086[_0x1C6B6])
			{
				_0x1CC4A += "<br /><center><span>" + getItem(_0x1E086[_0x1C6B6]) + "</span> <img src=\'images/check.png\' class=\'img-20\' /></center>"
			}
			else
			{
				_0x1CC4A += "<br /><center><span>" + getItem(_0x1E086[_0x1C6B6]) + "</span> </center>"
			};
			_0x1CC4A += "</div>"
		}
	};
	_0x1E086 = ["hardcoreSigil"];
	for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1E086.length; _0x1C6B6++)
	{
		if (getItem(_0x1E086[_0x1C6B6]) > 0 || _0x1E078)
		{
			_0x1E06A = true;
			_0x1CC4A += "<div onclick=\'sendBytes(\"CHAT_ICON=" + _0x1E086[_0x1C6B6] + "\")\' style=\'background-color:#b3ffd9;\' class=\'dialogue-sigils-itemBox\'>";
			_0x1CC4A += "<img src=\'images/" + _0x1E086[_0x1C6B6] + ".png\' class=\'img-30\' />";
			if (getItemString("chatIcon") == _0x1E086[_0x1C6B6])
			{
				_0x1CC4A += "<br /><center><span>" + getItem(_0x1E086[_0x1C6B6]) + "</span> <img src=\'images/check.png\' class=\'img-20\' /></center>"
			}
			else
			{
				_0x1CC4A += "<br /><center><span>" + getItem(_0x1E086[_0x1C6B6]) + "</span> </center>"
			};
			_0x1CC4A += "</div>"
		}
	};
	_0x1E086 = ["chickenMonsterSigil", "ratMonsterSigil", "beeMonsterSigil", "snakeMonsterSigil", "entMonsterSigil", "thiefMonsterSigil", "bearMonsterSigil", "spiderMonsterSigil", "skeletonMonsterSigil"];
	for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1E086.length; _0x1C6B6++)
	{
		if (getItem(_0x1E086[_0x1C6B6]) > 0 || _0x1E078)
		{
			_0x1E06A = true;
			_0x1CC4A += "<div onclick=\'sendBytes(\"CHAT_ICON=" + _0x1E086[_0x1C6B6] + "\")\' style=\'background-color:#e6e6e6;\' class=\'dialogue-sigils-itemBox\'>";
			_0x1CC4A += "<img src=\'images/" + _0x1E086[_0x1C6B6] + ".png\' class=\'img-30\' />";
			if (getItemString("chatIcon") == _0x1E086[_0x1C6B6])
			{
				_0x1CC4A += "<br /><center><span>" + getItem(_0x1E086[_0x1C6B6]) + "</span> <img src=\'images/check.png\' class=\'img-20\' /></center>"
			}
			else
			{
				_0x1CC4A += "<br /><center><span>" + getItem(_0x1E086[_0x1C6B6]) + "</span> </center>"
			};
			_0x1CC4A += "</div>"
		}
	};
	_0x1E086 = ["goldEventSigil2", "silverEventSigil2", "bronzeEventSigil2", "eventSigil2", "goldEventSigil", "silverEventSigil", "bronzeEventSigil", "eventSigil"];
	for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1E086.length; _0x1C6B6++)
	{
		if (getItem(_0x1E086[_0x1C6B6]) > 0 || _0x1E078)
		{
			_0x1E06A = true;
			_0x1CC4A += "<div onclick=\'sendBytes(\"CHAT_ICON=" + _0x1E086[_0x1C6B6] + "\")\' style=\'background-color:pink;\' class=\'dialogue-sigils-itemBox\'>";
			_0x1CC4A += "<img src=\'images/" + _0x1E086[_0x1C6B6] + ".png\' class=\'img-30\' />";
			if (getItemString("chatIcon") == _0x1E086[_0x1C6B6])
			{
				_0x1CC4A += "<br /><center><span>" + getItem(_0x1E086[_0x1C6B6]) + "</span> <img src=\'images/check.png\' class=\'img-20\' /></center>"
			}
			else
			{
				_0x1CC4A += "<br /><center><span>" + getItem(_0x1E086[_0x1C6B6]) + "</span> </center>"
			};
			_0x1CC4A += "</div>"
		}
	};
	_0x1CC4A += "<div style=\'border:1px solid grey;padding:10px;background-color:#EFEFEF;font-size:10pt;\'>Sigils are chat icons that are purely cosmetic.  They can be obtained through holiday events, monster drops (1/10,000) or special events.<br /><br />All sigils are untradable except for holiday sigils during their respective time of year.<br /><br /><span style=\'cursor:pointer;color:blue\' onclick=\'refreshSigilsDialoguesIcons(true)\'>(show all)</span></div>";
	document.getElementById("dialogue-sigils-section").innerHTML = _0x1CC4A
}

function openChatSigilsDialogues()
{
	refreshSigilsDialoguesIcons();
	openDialogue("dialogue-sigils")
}

function setOrBuyChatTag(_0x1E30A, _0x1E2FC)
{
	if (_0x1E2FC == "SET")
	{
		sendBytes("SET_PRICE_TAG=" + _0x1E30A)
	}
	else
	{
		confirmDialogue("images/chatIcon.png", "Are you sure you wanna purchase this with tradable donor coins?", "Purchase", "Cancel", "BUY_PRICE_TAG=" + _0x1E30A)
	}
}

function refreshTagsDialoguesIcons()
{
	var _0x1CC4A = "";
	var _0x1CEEA = "";
	var _0x1E0CC = "";
	var _0x1E0BE = getItem("spentDonorCoinsOnTags");
	var _0x1E0A2 = false;
	var _0x1E0B0 = "";
	var _0x1E094 = "";
	_0x1CC4A += "<div style=\'border:1px solid grey;padding:10px;background-color:#EFEFEF;font-size:10pt;\'>Chat tags, which may be combined with sigils, allow you to show your support towards the game.  They are purchased with <b>tradable</b> donor coins.<br /><br />They are optional and only used for cosmetic purposes.<br /><br /><i style=\'color:grey\'>You also can buy them overtime, meaning spending 20$ on chat tags will knock off 20$ for all other tags.  Also, buying a higher tier tag will unlock all the previous ones for free.</i></div>";
	_0x1CC4A += "<br /><br />";
	_0x1CC4A += "<table width=\'100%\' style=\'margin:auto;background-color:#f2f2f2;color:black;text-align:center;border-collapse: collapse;border:1px solid black;\'>";
	_0x1CC4A += "<tr>";
	_0x1CC4A += "<th style=\'width:50%\'>Example</th><th><b style=\'color:green\'>Tradable</b> Donor Coins</th><th>Action</th>";
	_0x1CC4A += "</tr>";
	_0x1CEEA = "Donor";
	_0x1E0CC = 20;
	testingForPriceAdjusted = _0x1E0CC - _0x1E0BE;
	_0x1E0B0 = testingForPriceAdjusted;
	if (testingForPriceAdjusted <= 0)
	{
		_0x1E0B0 = "<img src=\'images/check.png\' class=\'img-20\' />";
		_0x1E094 = "SET"
	}
	else
	{
		_0x1E0B0 = "<img src=\'images/donorCoins.png\' class=\'img-20\' /> " + testingForPriceAdjusted;
		_0x1E094 = "BUY"
	};
	_0x1CC4A += "<tr>";
	_0x1CC4A += "<td style=\'padding:20px;\'><img style=\'border:1px solid grey;padding:3px;\'src=\'images/tagExample_" + _0x1CEEA + ".png\' /></td><td>" + _0x1E0B0 + "</td><td><input type=\'button\' value=\'" + _0x1E094 + "\' onclick=\'setOrBuyChatTag(\"" + _0x1CEEA + "\",this.value);closeDialogue(\"dialogue-tags\")\' style=\'color:#006666;border:1px solid #006666\' class=\'chat-area-send-button\' /></td>";
	_0x1CC4A += "</tr>";
	_0x1CEEA = "Superdonor";
	_0x1E0CC = 40;
	testingForPriceAdjusted = _0x1E0CC - _0x1E0BE;
	_0x1E0B0 = testingForPriceAdjusted;
	if (testingForPriceAdjusted <= 0)
	{
		_0x1E0B0 = "<img src=\'images/check.png\' class=\'img-20\' />";
		_0x1E094 = "SET"
	}
	else
	{
		_0x1E0B0 = "<img src=\'images/donorCoins.png\' class=\'img-20\' /> " + testingForPriceAdjusted;
		_0x1E094 = "BUY"
	};
	_0x1CC4A += "<tr>";
	_0x1CC4A += "<td style=\'padding:20px;\'><img style=\'border:1px solid grey;padding:3px;\'src=\'images/tagExample_" + _0x1CEEA + ".png\' /></td><td>" + _0x1E0B0 + "</td><td><input type=\'button\' value=\'" + _0x1E094 + "\' onclick=\'setOrBuyChatTag(\"" + _0x1CEEA + "\",this.value);closeDialogue(\"dialogue-tags\")\' style=\'color:#006666;border:1px solid #006666\' class=\'chat-area-send-button\' /></td>";
	_0x1CC4A += "</tr>";
	_0x1CEEA = "Ultradonor";
	_0x1E0CC = 60;
	testingForPriceAdjusted = _0x1E0CC - _0x1E0BE;
	_0x1E0B0 = testingForPriceAdjusted;
	if (testingForPriceAdjusted <= 0)
	{
		_0x1E0B0 = "<img src=\'images/check.png\' class=\'img-20\' />";
		_0x1E094 = "SET"
	}
	else
	{
		_0x1E0B0 = "<img src=\'images/donorCoins.png\' class=\'img-20\' /> " + testingForPriceAdjusted;
		_0x1E094 = "BUY"
	};
	_0x1CC4A += "<tr>";
	_0x1CC4A += "<td style=\'padding:20px;\'><img style=\'border:1px solid grey;padding:3px;\'src=\'images/tagExample_" + _0x1CEEA + ".png\' /></td><td>" + _0x1E0B0 + "</td><td><input type=\'button\' value=\'" + _0x1E094 + "\' onclick=\'setOrBuyChatTag(\"" + _0x1CEEA + "\",this.value);closeDialogue(\"dialogue-tags\")\' style=\'color:#006666;border:1px solid #006666\' class=\'chat-area-send-button\' /></td>";
	_0x1CC4A += "</tr>";
	_0x1CEEA = "Contributor";
	_0x1E0CC = 100;
	testingForPriceAdjusted = _0x1E0CC - _0x1E0BE;
	_0x1E0B0 = testingForPriceAdjusted;
	if (testingForPriceAdjusted <= 0)
	{
		_0x1E0B0 = "<img src=\'images/check.png\' class=\'img-20\' />";
		_0x1E094 = "SET"
	}
	else
	{
		_0x1E0B0 = "<img src=\'images/donorCoins.png\' class=\'img-20\' /> " + testingForPriceAdjusted;
		_0x1E094 = "BUY"
	};
	_0x1CC4A += "<tr>";
	_0x1CC4A += "<td style=\'padding:20px;\'><img style=\'border:1px solid grey;padding:3px;\'src=\'images/tagExample_" + _0x1CEEA + ".png\' /></td><td>" + _0x1E0B0 + "</td><td><input type=\'button\' value=\'" + _0x1E094 + "\' onclick=\'setOrBuyChatTag(\"" + _0x1CEEA + "\",this.value);closeDialogue(\"dialogue-tags\")\' style=\'color:#006666;border:1px solid #006666\' class=\'chat-area-send-button\' /></td>";
	_0x1CC4A += "</tr>";
	_0x1CEEA = "Financier";
	_0x1E0CC = 250;
	testingForPriceAdjusted = _0x1E0CC - _0x1E0BE;
	_0x1E0B0 = testingForPriceAdjusted;
	if (testingForPriceAdjusted <= 0)
	{
		_0x1E0B0 = "<img src=\'images/check.png\' class=\'img-20\' />";
		_0x1E094 = "SET"
	}
	else
	{
		_0x1E0B0 = "<img src=\'images/donorCoins.png\' class=\'img-20\' /> " + testingForPriceAdjusted;
		_0x1E094 = "BUY"
	};
	_0x1CC4A += "<tr>";
	_0x1CC4A += "<td style=\'padding:20px;\'><img style=\'border:1px solid grey;padding:3px;\'src=\'images/tagExample_" + _0x1CEEA + ".png\' /></td><td>" + _0x1E0B0 + "</td><td><input type=\'button\' value=\'" + _0x1E094 + "\' onclick=\'setOrBuyChatTag(\"" + _0x1CEEA + "\",this.value);closeDialogue(\"dialogue-tags\")\' style=\'color:#006666;border:1px solid #006666\' class=\'chat-area-send-button\' /></td>";
	_0x1CC4A += "</tr>";
	_0x1CEEA = "Investor";
	_0x1E0CC = 500;
	testingForPriceAdjusted = _0x1E0CC - _0x1E0BE;
	_0x1E0B0 = testingForPriceAdjusted;
	if (testingForPriceAdjusted <= 0)
	{
		_0x1E0B0 = "<img src=\'images/check.png\' class=\'img-20\' />";
		_0x1E094 = "SET"
	}
	else
	{
		_0x1E0B0 = "<img src=\'images/donorCoins.png\' class=\'img-20\' /> " + testingForPriceAdjusted;
		_0x1E094 = "BUY"
	};
	_0x1CC4A += "<tr>";
	_0x1CC4A += "<td style=\'padding:20px;\'><span border:1px solid grey;padding:3px;><img style=\'vertical-align:text-top;\' src=\'images/investor.gif\' /> <span style=\'color:#cc66ff;dispaly:inline-block;vertical-align:text-top;font-size:16pt;\'> A chat tag!</span></span></td><td>" + _0x1E0B0 + "</td><td><input type=\'button\' value=\'" + _0x1E094 + "\' onclick=\'setOrBuyChatTag(\"" + _0x1CEEA + "\",this.value);closeDialogue(\"dialogue-tags\")\' style=\'color:#006666;border:1px solid #006666\' class=\'chat-area-send-button\' /></td>";
	_0x1CC4A += "</tr>";
	_0x1CC4A += "</table>";
	_0x1CC4A += "<br /><br />";
	_0x1CC4A += "<table width=\'100%\' style=\'margin:auto;background-color:#f2f2f2;color:black;text-align:center;border-collapse: collapse;border:1px solid black;\'>";
	_0x1CC4A += "<tr>";
	_0x1CC4A += "<th style=\'width:50%\'>Example</th><th>Description</th>";
	_0x1CC4A += "</tr>";
	_0x1CC4A += "<tr>";
	_0x1CC4A += "<td style=\'padding:20px;\'><img  style=\'border:1px solid grey;padding:3px;\' src=\'images/devTagExample.png\' /></td><td>Owner & Developper of the Diamond Hunt Games</td>";
	_0x1CC4A += "</tr>";
	_0x1CC4A += "<tr>";
	_0x1CC4A += "<td style=\'padding:20px;\'><img  style=\'border:1px solid grey;padding:3px;\' src=\'images/tagExample_Moderator.png\' /></td><td>Moderates chat and market.</td>";
	_0x1CC4A += "</tr>";
	_0x1CC4A += "</table>";
	document.getElementById("dialogue-tags-section").innerHTML = _0x1CC4A
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

function hideAllRightTabs()
{
	document.getElementById("navigation-right-combat-select").style.display = "none";
	document.getElementById("navigation-right-combat-fighting").style.display = "none";
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

function getResearchPrice(_0x1CB40)
{
	switch (_0x1CB40)
	{
	case 0:
		return 100;
	case 1:
		return 1000;
	case 2:
		return 25000;
	case 3:
		return 200000;
	default:
		return -1
	}
}

function getResearchPerkDescription(_0x1D4EE, _0x1CAFA)
{
	switch (_0x1D4EE)
	{
	case 0:
		if (_0x1CAFA == "crafting")
		{
			return "Ability to smelt sand into glass."
		};
		if (_0x1CAFA == "mining")
		{
			return "Ability to find gems.<br /><span onclick=\'infoGemsDialogue()\' class=\'researcher-more-info-button\'>more info</span>"
		};
		if (_0x1CAFA == "combat")
		{
			return "Combat levels now increase maximum hp."
		};
		if (_0x1CAFA == "cooking")
		{
			return "Ability to make recipes in the cooking section."
		};
		if (_0x1CAFA == "fishing")
		{
			return "Chance of finding oyster pearls."
		};
		if (_0x1CAFA == "farming")
		{
			return "You may now eat mushrooms for extra energy."
		};
		if (_0x1CAFA == "woodcutting")
		{
			return "10% chance of obtaining a tree seed when chopping trees."
		};
		if (_0x1CAFA == "brewing")
		{
			return "Double stardust from small stardust potions."
		};
		if (_0x1CAFA == "magic")
		{
			return "Mana regenerate during combat every 10 seconds."
		};
		break;
	case 1:
		if (_0x1CAFA == "crafting")
		{
			return "Access to the museum."
		};
		if (_0x1CAFA == "mining")
		{
			return "Ability to find stardust prisms.<br /><span onclick=\'infoStardustPrismsDialogue()\' class=\'researcher-more-info-button\'>more info</span>"
		};
		if (_0x1CAFA == "farming")
		{
			return "Bob will now start looking for stardust seeds."
		};
		if (_0x1CAFA == "combat")
		{
			return "Allow you to reset your combat cooldown, once a day. <span id=\'reset-combat-icon-timer\'></span>"
		};
		if (_0x1CAFA == "brewing")
		{
			return "Ability to drink two potions at once, stacking the timer."
		};
		if (_0x1CAFA == "magic")
		{
			return "Mana regenerates 25% faster out of combat."
		};
		if (_0x1CAFA == "cooking")
		{
			return "Burning food will grant 25% of its cook XP."
		};
		if (_0x1CAFA == "fishing")
		{
			return "Ability to use an oxygen tank to explore ocean floors for treasure."
		};
		if (_0x1CAFA == "woodcutting")
		{
			return "1% chance of obtaining a strange leaf when chopping trees."
		};
		break;
	case 2:
		if (_0x1CAFA == "mining")
		{
			return "Ability to own 3 drills and 3 crushers."
		};
		if (_0x1CAFA == "crafting")
		{
			return "Ability to craft silver buckets."
		};
		if (_0x1CAFA == "woodcutting")
		{
			return "5% chance that chopping a tree will cause it to instantly regrow."
		};
		if (_0x1CAFA == "magic")
		{
			return "Ability to transform weapons into other items."
		};
		if (_0x1CAFA == "combat")
		{
			return "Ability to set presets, allowing you to switch gears in one click mid fight."
		};
		if (_0x1CAFA == "farming")
		{
			return "5% chance that harvesting a crop will cause it to instantly regrow."
		};
		if (_0x1CAFA == "brewing")
		{
			return "5% chance that drinking a potion will not get used."
		};
		if (_0x1CAFA == "cooking")
		{
			return "5% burn reduction on all ovens."
		};
		break;
	case 3:
		if (_0x1CAFA == "woodcutting")
		{
			return "Maple trees now yield maple syrup."
		};
		if (_0x1CAFA == "combat")
		{
			return "5% chance that energy is refunded when fighting."
		};
		if (_0x1CAFA == "crafting")
		{
			return "Ability to craft large vials."
		};
		if (_0x1CAFA == "brewing")
		{
			return "Ability to brew mana potions."
		};
		break
	};
	return "-1"
}

function refreshResearching()
{
	var _0x1C85A = document.getElementById("researcher-section");
	var _0x1E016 = "style=\'padding:10px;border:1px solid grey;background-image:url(images/background.jpg)\'";
	var _0x1E024 = "style=\'padding:10px;border:1px solid grey;background-image:url(images/background.jpg);color:orange;\'";
	var _0x1E032 = "style=\'padding:10px;border:1px solid grey;background-image:url(images/background.jpg);color:green;\'";
	var _0x1E040 = "style=\'padding:10px;border:1px solid grey;background-image:url(images/background.jpg);color:yellow;cursor:pointer;\'";
	var _0x1DF36 = "onmouseover=\'this.style.color = \"red\"\' onmouseout=\'this.style.color = \"yellow\"\'";
	var _0x1DEF0 = "<center><table width=\'95%\' style=\'text-align:center;\'>";
	_0x1DEF0 += "<tr>";
	_0x1DEF0 += "<td " + _0x1E016 + " width=\'11%\'>" + "<img src=\'images/combatSkill_researcher.png\' class=\'img-50\' /> COMBAT" + "</td>";
	_0x1DEF0 += "<td " + _0x1E016 + " width=\'11%\'>" + "<img src=\'images/magicSkill_researcher.png\' class=\'img-50\' /> MAGIC" + "</td>";
	_0x1DEF0 += "<td " + _0x1E016 + " width=\'11%\'>" + "<img src=\'images/miningSkill_researcher.png\' class=\'img-50\' /> MINING" + "</td>";
	_0x1DEF0 += "<td " + _0x1E016 + " width=\'11%\'>" + "<img src=\'images/craftingSkill_researcher.png\' class=\'img-50\' /> CRAFTING" + "</td>";
	_0x1DEF0 += "<td " + _0x1E016 + " width=\'11%\'>" + "<img src=\'images/woodcuttingSkill_researcher.png\' class=\'img-50\' /> WOODCUTTING" + "</td>";
	_0x1DEF0 += "<td " + _0x1E016 + " width=\'11%\'>" + "<img src=\'images/farmingSkill_researcher.png\' class=\'img-50\' /> FARMING" + "</td>";
	_0x1DEF0 += "<td " + _0x1E016 + " width=\'11%\'>" + "<img src=\'images/brewingSkill_researcher.png\' class=\'img-50\' /> BREWING" + "</td>";
	_0x1DEF0 += "<td " + _0x1E016 + " width=\'11%\'>" + "<img src=\'images/fishingSkill_researcher.png\' class=\'img-50\' /> FISHING" + "</td>";
	_0x1DEF0 += "<td " + _0x1E016 + " width=\'11%\'>" + "<img src=\'images/cookingSkill_researcher.png\' class=\'img-50\' /> COOKING" + "</td>";
	_0x1DEF0 += "</tr>";
	var _0x1DFFA = ["combat", "magic", "mining", "crafting", "woodcutting", "farming", "brewing", "fishing", "cooking"];
	var _0x1DF52 = getItem("researcherCombat");
	var _0x1DF98 = getItem("researcherMagic");
	var _0x1DFA6 = getItem("researcherMining");
	var _0x1DF6E = getItem("researcherCrafting");
	var _0x1DFB4 = getItem("researcherWoodcutting");
	var _0x1DF7C = getItem("researcherFarming");
	var _0x1DF44 = getItem("researcherBrewing");
	var _0x1DF8A = getItem("researcherFishing");
	var _0x1DF60 = getItem("researcherCooking");
	var _0x1DFDE = [_0x1DF52, _0x1DF98, _0x1DFA6, _0x1DF6E, _0x1DFB4, _0x1DF7C, _0x1DF44, _0x1DF8A, _0x1DF60];
	var _0x1DE72 = 4;
	var _0x1DF0C = 3;
	var _0x1DF28 = 3;
	var _0x1DEAA = 4;
	var _0x1E05C = 4;
	var _0x1DEC6 = 3;
	var _0x1DE56 = 4;
	var _0x1DEE2 = 2;
	var _0x1DE8E = 3;
	var _0x1DFC2 = [_0x1DE72, _0x1DF0C, _0x1DF28, _0x1DEAA, _0x1E05C, _0x1DEC6, _0x1DE56, _0x1DEE2, _0x1DE8E];
	var _0x1DE64 = false;
	var _0x1DEFE = false;
	var _0x1DF1A = false;
	var _0x1DE9C = false;
	var _0x1E04E = false;
	var _0x1DEB8 = false;
	var _0x1DE48 = false;
	var _0x1DED4 = false;
	var _0x1DE80 = false;
	var _0x1DFD0 = [_0x1DE64, _0x1DEFE, _0x1DF1A, _0x1DE9C, _0x1E04E, _0x1DEB8, _0x1DE48, _0x1DED4, _0x1DE80];
	_0x1DEF0 += "<tr>";
	var _0x1DFEC = 0;
	for (var _0x1C6B6 = 0; _0x1C6B6 <= 8; _0x1C6B6++)
	{
		if (_0x1DFEC == _0x1DFC2[_0x1C6B6])
		{
			_0x1DEF0 += "<td " + _0x1E032 + " width=\'11%\'>" + "You have already unlocked every perk for this skill." + "</td>";
			_0x1DFD0[_0x1C6B6] = true
		}
		else
		{
			if (_0x1DFD0[_0x1C6B6] || _0x1DFDE[_0x1C6B6] < _0x1DFEC)
			{
				_0x1DEF0 += "<td " + _0x1E032 + " width=\'11%\'>" + "" + "</td>"
			}
			else
			{
				if (_0x1DFDE[_0x1C6B6] > _0x1DFEC)
				{
					_0x1DEF0 += "<td " + _0x1E024 + " width=\'11%\'>" + getResearchPerkDescription(_0x1DFEC, _0x1DFFA[_0x1C6B6]) + "</td>"
				}
				else
				{
					_0x1DFD0[_0x1C6B6] = true;
					var _0x1E008 = "";
					if (getItem("researcherTimer") > 0)
					{
						_0x1E008 = "style=\'text-decoration:line-through\'"
					};
					_0x1DEF0 += "<td onclick=\'researchConfirm(\"" + _0x1DFFA[_0x1C6B6] + "\")\' " + _0x1DF36 + " " + _0x1E040 + " width=\'11%\'>" + "<span " + _0x1E008 + ">Research for <img src=\'images/coins.png\' class=\'img-20\' /> " + formatNumber(getResearchPrice(_0x1DFDE[_0x1C6B6])) + "</span><br /><br /><b style=\'color:grey\'>Unlocks: </b><i style=\'color:grey\'>" + getResearchPerkDescription(_0x1DFEC, _0x1DFFA[_0x1C6B6]) + "</i></span></td>"
				}
			}
		}
	};
	_0x1DEF0 += "</tr>";
	_0x1DEF0 += "<tr>";
	var _0x1DFEC = 1;
	for (var _0x1C6B6 = 0; _0x1C6B6 <= 8; _0x1C6B6++)
	{
		if (_0x1DFEC == _0x1DFC2[_0x1C6B6] && !_0x1DFD0[_0x1C6B6])
		{
			_0x1DEF0 += "<td " + _0x1E032 + " width=\'11%\'>" + "You have already unlocked every perk for this skill." + "</td>";
			_0x1DFD0[_0x1C6B6] = true
		}
		else
		{
			if (_0x1DFD0[_0x1C6B6] || _0x1DFDE[_0x1C6B6] < _0x1DFEC)
			{
				_0x1DEF0 += "<td " + _0x1E032 + " width=\'11%\'>" + "" + "</td>"
			}
			else
			{
				if (_0x1DFDE[_0x1C6B6] > _0x1DFEC)
				{
					_0x1DEF0 += "<td " + _0x1E024 + " width=\'11%\'>" + getResearchPerkDescription(_0x1DFEC, _0x1DFFA[_0x1C6B6]) + "</td>"
				}
				else
				{
					_0x1DFD0[_0x1C6B6] = true;
					var _0x1E008 = "";
					if (getItem("researcherTimer") > 0)
					{
						_0x1E008 = "style=\'text-decoration:line-through\'"
					};
					_0x1DEF0 += "<td onclick=\'researchConfirm(\"" + _0x1DFFA[_0x1C6B6] + "\")\' " + _0x1DF36 + " " + _0x1E040 + " width=\'11%\'>" + "<span " + _0x1E008 + ">Research for <img src=\'images/coins.png\' class=\'img-20\' /> " + formatNumber(getResearchPrice(_0x1DFDE[_0x1C6B6])) + "</span><br /><br /><b style=\'color:grey\'>Unlocks: </b><i style=\'color:grey\'>" + getResearchPerkDescription(_0x1DFEC, _0x1DFFA[_0x1C6B6]) + "</i></span></td>"
				}
			}
		}
	};
	_0x1DEF0 += "</tr>";
	_0x1DEF0 += "<tr>";
	var _0x1DFEC = 2;
	for (var _0x1C6B6 = 0; _0x1C6B6 <= 8; _0x1C6B6++)
	{
		if (_0x1DFEC == _0x1DFC2[_0x1C6B6] && !_0x1DFD0[_0x1C6B6])
		{
			_0x1DEF0 += "<td " + _0x1E032 + " width=\'11%\'>" + "You have already unlocked every perk for this skill." + "</td>";
			_0x1DFD0[_0x1C6B6] = true
		}
		else
		{
			if (_0x1DFD0[_0x1C6B6] || _0x1DFDE[_0x1C6B6] < _0x1DFEC)
			{
				_0x1DEF0 += "<td " + _0x1E032 + " width=\'11%\'>" + "" + "</td>"
			}
			else
			{
				if (_0x1DFDE[_0x1C6B6] > _0x1DFEC)
				{
					_0x1DEF0 += "<td " + _0x1E024 + " width=\'11%\'>" + getResearchPerkDescription(_0x1DFEC, _0x1DFFA[_0x1C6B6]) + "</td>"
				}
				else
				{
					_0x1DFD0[_0x1C6B6] = true;
					var _0x1E008 = "";
					if (getItem("researcherTimer") > 0)
					{
						_0x1E008 = "style=\'text-decoration:line-through\'"
					};
					_0x1DEF0 += "<td onclick=\'researchConfirm(\"" + _0x1DFFA[_0x1C6B6] + "\")\' " + _0x1DF36 + " " + _0x1E040 + " width=\'11%\'>" + "<span " + _0x1E008 + ">Research for <img src=\'images/coins.png\' class=\'img-20\' /> " + formatNumber(getResearchPrice(_0x1DFDE[_0x1C6B6])) + "</span><br /><br /><b style=\'color:grey\'>Unlocks: </b><i style=\'color:grey\'>" + getResearchPerkDescription(_0x1DFEC, _0x1DFFA[_0x1C6B6]) + "</i></span></td>"
				}
			}
		}
	};
	_0x1DEF0 += "</tr>";
	_0x1DEF0 += "<tr>";
	var _0x1DFEC = 3;
	for (var _0x1C6B6 = 0; _0x1C6B6 <= 8; _0x1C6B6++)
	{
		if (_0x1DFEC == _0x1DFC2[_0x1C6B6] && !_0x1DFD0[_0x1C6B6])
		{
			_0x1DEF0 += "<td " + _0x1E032 + " width=\'11%\'>" + "You have already unlocked every perk for this skill." + "</td>";
			_0x1DFD0[_0x1C6B6] = true
		}
		else
		{
			if (_0x1DFD0[_0x1C6B6] || _0x1DFDE[_0x1C6B6] < _0x1DFEC)
			{
				_0x1DEF0 += "<td " + _0x1E032 + " width=\'11%\'>" + "" + "</td>"
			}
			else
			{
				if (_0x1DFDE[_0x1C6B6] > _0x1DFEC)
				{
					_0x1DEF0 += "<td " + _0x1E024 + " width=\'11%\'>" + getResearchPerkDescription(_0x1DFEC, _0x1DFFA[_0x1C6B6]) + "</td>"
				}
				else
				{
					_0x1DFD0[_0x1C6B6] = true;
					var _0x1E008 = "";
					if (getItem("researcherTimer") > 0)
					{
						_0x1E008 = "style=\'text-decoration:line-through\'"
					};
					_0x1DEF0 += "<td onclick=\'researchConfirm(\"" + _0x1DFFA[_0x1C6B6] + "\")\' " + _0x1DF36 + " " + _0x1E040 + " width=\'11%\'>" + "<span " + _0x1E008 + ">Research for <img src=\'images/coins.png\' class=\'img-20\' /> " + formatNumber(getResearchPrice(_0x1DFDE[_0x1C6B6])) + "</span><br /><br /><b style=\'color:grey\'>Unlocks: </b><i style=\'color:grey\'>" + getResearchPerkDescription(_0x1DFEC, _0x1DFFA[_0x1C6B6]) + "</i></span></td>"
				}
			}
		}
	};
	_0x1DEF0 += "</tr>";
	_0x1DEF0 += "</table>";
	_0x1C85A.innerHTML = _0x1DEF0
}

function infoGemsDialogue()
{
	confirmDialogue("images/researcher.png", "You now have a rare chance of finding four types of gems.<br /><br /><b>They are 100% luck and drop rates cannot be changed.</b><br /><br />Visit your mining tab so see a list of obtainable gems and the drop rates.", "Close", "", "")
}

function infoStardustPrismsDialogue()
{
	confirmDialogue("images/stardustPrisms.png", "You now have a rare chance of finding stardust prisms.<br /><br /><br /><br />Visit your mining tab so see a list of obtainable stardust prisms and the drop rates.", "Close", "", "")
}

function researchConfirm(_0x1CAFA)
{
	if (getItem(_0x1CAFA.toLowerCase() + "Unlocked") == 0)
	{
		confirmDialogue("images/x.png", "You cannot research a skill that is locked.", "Close", "", "")
	}
	else
	{
		var _0x1CDD2 = getResearchPrice(getItem("researcher" + _0x1CAFA));
		confirmDialogue("images/" + _0x1CAFA.toLowerCase() + "Skill_researcher.png", "Start researching this skill?", "Research", "Cancel", "RESEARCH=" + _0x1CAFA.toLowerCase())
	}
}

function getItemName(_0x1C83E)
{
	var _0x1D40E = _0x1C83E.charAt(0).toUpperCase();
	for (var _0x1C6B6 = 1; _0x1C6B6 < _0x1C83E.length; _0x1C6B6++)
	{
		if (_0x1C83E.charAt(_0x1C6B6) == _0x1C83E.charAt(_0x1C6B6).toUpperCase() && _0x1C83E.charAt(_0x1C6B6) != "\'")
		{
			_0x1D40E += " "
		};
		_0x1D40E += _0x1C83E.charAt(_0x1C6B6)
	};
	return _0x1D40E
}

function addItemBoxQuests(_0x1C972, _0x1C948, _0x1C7CE, _0x1C98E, _0x1C99C, _0x1C93A, _0x1C85A, _0x1C980)
{
	var _0x1C868 = document.getElementById(_0x1C85A);
	var _0x1C7EA = document.createElement("div");
	if (getItem(_0x1C972 + "Quest") == -1)
	{
		_0x1C7EA.setAttribute("class", "quest-button-completed")
	}
	else
	{
		_0x1C7EA.setAttribute("class", "quest-button")
	};
	_0x1C7EA.setAttribute("id", "quest-box-" + _0x1C972);
	_0x1C7EA.setAttribute("onclick", "sendBytes(\'QUEST=" + _0x1C972 + "~0\')");
	var _0x1C806 = document.createElement("div");
	if (getItem("questPoints") < _0x1C980)
	{
		var _0x1C814 = getImage("images/questPoints.png", "quest-x-" + _0x1C6B6);
		_0x1C814.setAttribute("class", "img-30");
		_0x1C7EA.setAttribute("class", "quest-button-locked");
		_0x1C806.appendChild(_0x1C814);
		_0x1C806.innerHTML += " REQUIRED QUEST POINTS: " + _0x1C980;
		_0x1C7EA.setAttribute("onclick", "confirmDialogue(\'images/questPoints.png\', \'You need to complete other quests to earn quest points before starting this one.\', \'Exit\', \'\', \'\')")
	}
	else
	{
		var _0x1C806 = document.createElement("div");
		_0x1C806.innerHTML = _0x1C948 + "<br /><span style=\'font-size:10pt;color:black;\'>" + _0x1C7CE + "<br /><br />" + _0x1C93A + "</span>";
		_0x1C806.setAttribute("style", "font-size:16pt;");
		var _0x1C964 = document.createElement("div");
		_0x1C964.setAttribute("style", "float:right;font-size:10pt;color:purple;text-align:right;");
		for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1C98E.length; _0x1C6B6++)
		{
			var _0x1C814 = getImage("images/x.png", _0x1C972 + "_quest-x-" + _0x1C6B6);
			_0x1C814.setAttribute("class", "img-15");
			if (_0x1C99C[_0x1C6B6])
			{
				_0x1C814 = getImage("images/check_dark.png", _0x1C972 + "_quest-check-" + _0x1C6B6);
				_0x1C814.setAttribute("class", "img-15")
			};
			var _0x1C956 = document.createElement("span");
			_0x1C956.innerHTML = _0x1C98E[_0x1C6B6] + " ";
			if (_0x1C99C[_0x1C6B6] != null && getItem(_0x1C972 + "Quest") != -1)
			{
				_0x1C956.appendChild(_0x1C814)
			};
			_0x1C956.appendChild(document.createElement("br"));
			_0x1C964.appendChild(_0x1C956)
		};
		_0x1C7EA.appendChild(_0x1C964)
	};
	_0x1C7EA.appendChild(_0x1C806);
	_0x1C868.appendChild(_0x1C7EA)
}

function changeBackgroundRightSection(_0x1CD8C)
{
	switch (_0x1CD8C)
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

function addItemBoxDonorShop(_0x1C884, _0x1C8AE, _0x1C8E6, _0x1C892, _0x1C876, _0x1C85A)
{
	var _0x1C742 = "#262626";
	var _0x1C734 = "#ffcc99";
	var _0x1C868 = document.getElementById(_0x1C85A);
	var _0x1C7EA = document.createElement("div");
	_0x1C7EA.setAttribute("class", "item-box");
	if (_0x1C876 != "")
	{
		_0x1C7EA.setAttribute("data-tooltip-id", _0x1C876)
	};
	_0x1C7EA.setAttribute("onclick", "clicksDonorShopItem(\'" + _0x1C884 + "\')");
	_0x1C7EA.setAttribute("id", "item-box-donor-shop-" + _0x1C884);
	_0x1C7EA.style.backgroundColor = _0x1C742;
	_0x1C7EA.style.border = "1px solid " + _0x1C734;
	_0x1C7EA.style.height = "220px";
	var _0x1C806 = document.createElement("div");
	_0x1C806.setAttribute("style", "text-align:center; font-weight: bold;font-size:14pt;");
	_0x1C806.innerHTML = _0x1C8E6;
	var _0x1C7F8 = document.createElement("div");
	_0x1C7F8.setAttribute("style", "text-align:center");
	var _0x1C814 = document.createElement("img");
	var _0x1C814 = getImage(_0x1C8AE, "shop-" + _0x1C884);
	_0x1C814.setAttribute("class", "img-100");
	var _0x1C7DC = document.createElement("div");
	_0x1C7DC.setAttribute("style", "text-align:center");
	var _0x1C8CA = getImage("images/donorCoins.png", "shop-" + _0x1C884 + "-coins");
	_0x1C8CA.setAttribute("class", "img-20");
	var _0x1C8BC = getImage("images/check.png", "shop-" + _0x1C884 + "-check");
	_0x1C8BC.setAttribute("class", "img-10");
	var _0x1C8D8 = getImage("images/x.png", "shop-" + _0x1C884 + "-x");
	_0x1C8D8.setAttribute("class", "img-10");
	if (_0x1C892 > 0)
	{
		_0x1C7DC.appendChild(_0x1C8CA);
		_0x1C7DC.innerHTML = _0x1C7DC.innerHTML + " " + formatNumber(_0x1C892) + " ";
		if (getItem("boundDonorCoins", false) >= _0x1C892)
		{
			_0x1C7DC.appendChild(_0x1C8BC)
		}
		else
		{
			_0x1C7DC.appendChild(_0x1C8D8)
		};
		var _0x1C8A0 = document.createElement("div");
		_0x1C8A0.innerHTML = "<i style=\'font-size:12pt;color:grey;\'>(Lasts 30 days)</i>";
		_0x1C7DC.appendChild(_0x1C8A0)
	}
	else
	{
		var _0x1C8A0 = document.createElement("div");
		_0x1C8A0.innerHTML = "<i style=\'font-size:12pt;color:yellow;\'>1.00$ EACH</i>";
		_0x1C7DC.appendChild(_0x1C8A0)
	};
	_0x1C7EA.appendChild(_0x1C806);
	_0x1C7EA.appendChild(document.createElement("br"));
	_0x1C7F8.appendChild(_0x1C814);
	_0x1C7EA.appendChild(_0x1C7F8);
	if (_0x1C884.length < 12)
	{
		_0x1C7EA.appendChild(document.createElement("br"))
	};
	_0x1C7EA.appendChild(document.createElement("br"));
	_0x1C7EA.appendChild(_0x1C7DC);
	_0x1C868.appendChild(_0x1C7EA)
}

function addItemBoxShop(_0x1C830, _0x1C8AE, _0x1C83E, _0x1C892, _0x1C876, _0x1C85A)
{
	var _0x1C742 = "#262626";
	var _0x1C734 = "#ffcc99";
	var _0x1C868 = document.getElementById(_0x1C85A);
	var _0x1C7EA = document.createElement("div");
	_0x1C7EA.setAttribute("class", "item-box");
	if (_0x1C876 != "")
	{
		_0x1C7EA.setAttribute("data-tooltip-id", _0x1C876)
	};
	_0x1C7EA.setAttribute("onclick", "clicksShopItem(\'" + _0x1C830 + "\')");
	_0x1C7EA.setAttribute("id", "item-box-shop-" + _0x1C830);
	_0x1C7EA.style.backgroundColor = _0x1C742;
	_0x1C7EA.style.border = "1px solid " + _0x1C734;
	_0x1C7EA.style.height = "220px";
	var _0x1C806 = document.createElement("div");
	_0x1C806.setAttribute("style", "text-align:center; font-weight: bold;font-size:16pt;");
	_0x1C806.innerHTML = _0x1C83E;
	var _0x1C7F8 = document.createElement("div");
	_0x1C7F8.setAttribute("style", "text-align:center");
	var _0x1C814 = document.createElement("img");
	if (_0x1C8AE == "")
	{
		_0x1C8AE = "images/" + _0x1C830 + ".png"
	};
	var _0x1C814 = getImage(_0x1C8AE, "shop-" + _0x1C830);
	_0x1C814.setAttribute("class", "img-100");
	var _0x1C7DC = document.createElement("div");
	_0x1C7DC.setAttribute("style", "text-align:center");
	var _0x1C8CA = getImage("images/coins.png", "shop-" + _0x1C830 + "-coins");
	_0x1C8CA.setAttribute("class", "img-20");
	var _0x1C8BC = getImage("images/check.png", "shop-" + _0x1C830 + "-check");
	_0x1C8BC.setAttribute("class", "img-10");
	var _0x1C8D8 = getImage("images/x.png", "shop-" + _0x1C830 + "-x");
	_0x1C8D8.setAttribute("class", "img-10");
	_0x1C7DC.appendChild(_0x1C8CA);
	_0x1C7DC.innerHTML = _0x1C7DC.innerHTML + " " + formatNumber(_0x1C892) + " ";
	if (getItem("coins", false) >= _0x1C892)
	{
		_0x1C7DC.appendChild(_0x1C8BC)
	}
	else
	{
		_0x1C7DC.appendChild(_0x1C8D8)
	};
	_0x1C7EA.appendChild(_0x1C806);
	_0x1C7EA.appendChild(document.createElement("br"));
	_0x1C7F8.appendChild(_0x1C814);
	_0x1C7EA.appendChild(_0x1C7F8);
	if (getItem("bought_" + _0x1C830, false) > 0)
	{
		_0x1C7EA.style.display = "none"
	};
	if (_0x1C83E.length < 12)
	{
		_0x1C7EA.appendChild(document.createElement("br"))
	};
	_0x1C7EA.appendChild(document.createElement("br"));
	_0x1C7EA.appendChild(_0x1C7DC);
	_0x1C868.appendChild(_0x1C7EA)
}

function loadQuestAndAchievementsTab()
{
	var _0x1C85A = "item-section-quests-1";
	document.getElementById(_0x1C85A).innerHTML = "";
	addItemBoxQuests("theMissingFeathers", "THE MISSING FEATHERS", "An archer is in need of feathers to finish crafting his arrows!", ["Have any sword equipped."], [getItem("weapon") == "rustySword"], "EASY", _0x1C85A, 0);
	addItemBoxQuests("letTheMiningBegin", "LET THE MINING BEGIN", "A miner would like to show you how to mine.", ["No Requirements"], [null], "EASY", _0x1C85A, 1);
	addItemBoxQuests("bobsPanic", "BOB\'S PANIC", "With the world becoming evil, Bob needs your help.", ["Taint the World"], [getItem("darkCrystalUsed") == 1], "EASY", _0x1C85A, 2);
	addItemBoxQuests("theResearcher", "THE RESEARCHER", "A scientist would like to keep working and needs your help.", ["Unlock 6 different skills"], [getItem("miningUnlocked") == 1 && getItem("craftingUnlocked") == 1 && getItem("woodcuttingUnlocked") == 1 && getItem("farmingUnlocked") == 1 && getItem("brewingUnlocked") == 1], "EASY", _0x1C85A, 2);
	addItemBoxQuests("theFisherman", "THE FISHERMAN", "A fisherman is in need for glass to finish his fishing rod.", ["Have glass on you"], [getItem("glass") > 0], "EASY", _0x1C85A, 4);
	addItemBoxQuests("theTelescope", "THE TELESCOPE", "Help fix the astronomer\'s telescope.", ["Must own a house."], [getItemString("home") != "none"], "EASY", _0x1C85A, 5);
	addItemBoxQuests("theGiantSnake", "THE GIANT SNAKE", "A giant snake is roaming the forest", ["Have crafted snakeskin armour"], [getItem("craftedSnakeskinArmour") > 0], "EASY", _0x1C85A, 5);
	addItemBoxQuests("theWizard", "THE WIZARD", "You\'re a wizard, " + capitalizeFirstLetter(getItemString("username")), ["Defeated the boss after the forest."], [getItem("bushyKills") > 0], "MEDIUM", _0x1C85A, 5);
	addItemBoxQuests("theFisherman2", "THE FISHERMAN PART 2", "A fisherman needs help to find a special catch.", ["Have a ruby or diamond in your fishing tool."], [getItem("rubyFishingRod") == 1 || getItem("diamondFishingRod") == 1 || getItem("rubySmallFishingNet") == 1 || getItem("diamondSmallFishingNet") == 1 || getItem("rubyHarpoon") == 1 || getItem("diamondHarpoon") == 1], "MEDIUM", _0x1C85A, 9);
	addItemBoxQuests("mommyTheSpider", "MOMMY THE SPIDER", "Mommy is embarrassed that her babies spit out poison on every occasion.", ["Killed 3 spiders in caves."], [getItem("spiderKills") >= 3], "EASY", _0x1C85A, 10)
}

function getQuestsInProgress()
{
	var _0x1D48C = 0;
	var _0x1D4D2 = document.getElementById("item-section-quests-1").getElementsByTagName("div");
	for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1D4D2.length; _0x1C6B6++)
	{
		if (getItem(_0x1D4D2[_0x1C6B6].id.split("-")[2] + "Quest") > 0)
		{
			_0x1D48C++
		}
	};
	return _0x1D48C
}

function loadShopTab()
{
	var _0x1C83E = "";
	var _0x1C85A = "item-section-shop-1";
	document.getElementById(_0x1C85A).innerHTML = "";
	_0x1C83E = "apple";
	if (getItem(_0x1C83E + "Bought", false) != 1)
	{
		addItemBoxShop(_0x1C83E, "images/apples.png", "25 APPLES", 5, "tooltip-apple", _0x1C85A)
	};
	_0x1C83E = "rustySword";
	if (getItem(_0x1C83E + "Bought", false) != 1)
	{
		addItemBoxShop(_0x1C83E, "", "RUSTY SWORD", 15, "tooltip-rustySword", _0x1C85A)
	};
	_0x1C83E = "stardustPickaxe";
	if (getItem(_0x1C83E + "Bought", false) != 1)
	{
		addItemBoxShop(_0x1C83E, "", "STARDUST PICKAXE", 100, "tooltip-stardustPickaxe", _0x1C85A)
	};
	_0x1C83E = "woodenShield";
	if (getItem(_0x1C83E + "Bought", false) != 1)
	{
		addItemBoxShop(_0x1C83E, "", "WOODEN SHIELD", 1500, "tooltip-woodenShield", _0x1C85A)
	};
	if (getItem("communityCenter") == 1)
	{
		_0x1C83E = "carePackage1";
		if (getItem(_0x1C83E + "Bought", false) != 1)
		{
			addItemBoxShop(_0x1C83E, "images/carePackage1.png", "PACKAGE<br /><br />", 150, "tooltip-carePackage", _0x1C85A)
		};
		_0x1C83E = "brewingKitMould";
		if (getItem(_0x1C83E + "Bought", false) != 1)
		{
			addItemBoxShop(_0x1C83E, "", "CRAFTING MOULD", 500, "tooltip-mould", _0x1C85A)
		};
		_0x1C83E = "vial";
		if (getItem(_0x1C83E + "Bought", false) != 1)
		{
			addItemBoxShop(_0x1C83E, "", "5 VIALS", 100, "tooltip-vial", _0x1C85A)
		};
		_0x1C83E = "storeBananas";
		if (getItem(_0x1C83E + "Bought", false) != 1)
		{
			addItemBoxShop(_0x1C83E, "", "10 BANANAS", 50, "tooltip-storeBananas", _0x1C85A)
		};
		_0x1C83E = "logs";
		if (getItem(_0x1C83E + "Bought", false) != 1)
		{
			addItemBoxShop(_0x1C83E, "", "20 LOGS", 100, "tooltip-logs", _0x1C85A)
		};
		_0x1C83E = "oakLogs";
		if (getItem(_0x1C83E + "Bought", false) != 1)
		{
			addItemBoxShop(_0x1C83E, "", "5 OAK LOGS", 250, "tooltip-oakLogs", _0x1C85A)
		}
	};
	if (getItem("communityCenter2") == 1)
	{
		_0x1C83E = "combatLog";
		if (getItem(_0x1C83E + "Bought", false) != 1)
		{
			addItemBoxShop(_0x1C83E, "", "COMBAT TRACKER", 100, "tooltip-combatLog", _0x1C85A)
		};
		_0x1C83E = "tree";
		if (getItem(_0x1C83E + "Bought", false) != 1)
		{
			addItemBoxShop(_0x1C83E, "", "TREE", 150, "", _0x1C85A)
		};
		_0x1C83E = "stardustHammer";
		if (getItem(_0x1C83E + "Bought", false) != 1)
		{
			addItemBoxShop(_0x1C83E, "", "STARDUST HAMMER", 400, "tooltip-stardustHammer", _0x1C85A)
		};
		_0x1C83E = "stardustBox1";
		addItemBoxShop(_0x1C83E, "", "STARDUST BOX I", 10000, "tooltip-stardustBox1", _0x1C85A);
		_0x1C83E = "stardustBox2";
		addItemBoxShop(_0x1C83E, "", "STARDUST BOX II", 50000, "tooltip-stardustBox2", _0x1C85A)
	};
	if (getItem("communityCenter3") == 1)
	{
		_0x1C83E = "carePackage2";
		if (getItem(_0x1C83E + "Bought", false) != 1)
		{
			addItemBoxShop(_0x1C83E, "images/carePackage2.png", "PACKAGE<br /><br />", 1000, "tooltip-carePackage", _0x1C85A)
		};
		_0x1C83E = "bronzeOven";
		if (getItem(_0x1C83E + "Bought", false) != 1)
		{
			addItemBoxShop(_0x1C83E, "images/bronzeOven.png", "BRONZE OVEN<br /><br />", 10000, "tooltip-bronzeOven", _0x1C85A)
		}
	};
	refreshTooltips()
}

function loadDonorShopTab()
{
	var _0x1C83E = "";
	var _0x1C85A = "item-section-donorshop-1";
	document.getElementById(_0x1C85A).innerHTML = "";
	addItemBoxDonorShop("buyDonorCoins", "images/donorCoins.png", "BUY", 0, "tooltip-buyDonorCoins", _0x1C85A);
	addItemBoxDonorShop("donorPackage", "images/donorPackage.png", "ALL DONOR BUFFS", 15, "tooltip-donorPackage", _0x1C85A);
	addItemBoxDonorShop("woodcuttingPatch5", "images/woodcuttingSkill.png", "PATCH #5", 2, "tooltip-donorWoodcuttingPatch", _0x1C85A);
	addItemBoxDonorShop("woodcuttingPatch6", "images/woodcuttingSkill.png", "PATCH #6", 2, "tooltip-donorWoodcuttingPatch", _0x1C85A);
	addItemBoxDonorShop("farmingPlot5", "images/farmingSkill.png", "PATCH #5", 2, "tooltip-donorFarmingPlot", _0x1C85A);
	addItemBoxDonorShop("farmingPlot6", "images/farmingSkill.png", "PATCH #6", 2, "tooltip-donorFarmingPlot", _0x1C85A);
	addItemBoxDonorShop("moreOfflineTime", "images/hourglass.png", "12H OFFLINE TIME", 4, "tooltip-donorMoreOfflineTime", _0x1C85A);
	addItemBoxDonorShop("bonusXp", "images/globalSkill.png", "+10% XP", 5, "tooltip-donorBonusXp", _0x1C85A);
	refreshTooltips()
}
var global_foodMap = [];

function Food(_0x1D286, _0x1D24E, _0x1D278, _0x1D26A, _0x1CBCC, _0x1D25C, _0x1C7CE)
{
	this.rawFoodName = _0x1D286;
	this.cookedFoodName = _0x1D24E;
	this.heat = _0x1D278;
	this.energy = _0x1D26A;
	this.xp = _0x1CBCC;
	this.cookLevel = _0x1D25C;
	this.desc = _0x1C7CE
}

function objects_loadFood(data)
{
	var _0x1D1A6 = null;
	var _0x1C75E = data.split("~");
	var _0x1D48C = 0;
	for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1C75E.length; _0x1C6B6 += 0)
	{
		var _0x1D286 = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1D24E = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1D278 = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1D26A = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1CBCC = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1D25C = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1C7CE = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		_0x1D1A6 = new Food(_0x1D286, _0x1D24E, _0x1D278, _0x1D26A, _0x1CBCC, _0x1D25C, _0x1C7CE);
		global_foodMap[_0x1D286] = _0x1D1A6;
		global_foodMap[_0x1D24E] = _0x1D1A6;
		global_foodMap[_0x1D48C] = _0x1D1A6;
		_0x1D48C++
	}
}
var global_machineryMap = [];

function Machinery(_0x1D8B4, _0x1D8C2, _0x1D8EC, _0x1D88A, _0x1D8A6, _0x1D8DE, _0x1D898, _0x1D8D0)
{
	this.machineryName = _0x1D8B4;
	this.oil = _0x1D8C2;
	this.stoneChance = _0x1D8EC;
	this.copperChance = _0x1D88A;
	this.ironChance = _0x1D8A6;
	this.silverChance = _0x1D8DE;
	this.goldChance = _0x1D898;
	this.promethiumChance = _0x1D8D0
}

function objects_loadMachinery(data)
{
	var _0x1D6AE = null;
	var _0x1C75E = data.split("~");
	var _0x1D48C = 0;
	for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1C75E.length; _0x1C6B6 += 0)
	{
		var _0x1D8B4 = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1D8C2 = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1D8EC = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1D88A = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1D8A6 = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1D8DE = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1D898 = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1D8D0 = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		_0x1D6AE = new Machinery(_0x1D8B4, _0x1D8C2, _0x1D8EC, _0x1D88A, _0x1D8A6, _0x1D8DE, _0x1D898, _0x1D8D0);
		global_machineryMap[_0x1D48C] = _0x1D6AE;
		_0x1D48C++
	}
}
var global_itemPriceMap = [];

function ItemPrice(_0x1D1EC, _0x1CDD2)
{
	this.name = _0x1D1EC;
	this.price = _0x1CDD2
}

function objects_loadShopPrices(data)
{
	var _0x1DA20 = null;
	var _0x1C75E = data.split("~");
	var _0x1D48C = 0;
	for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1C75E.length; _0x1C6B6 += 0)
	{
		var _0x1D1EC = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1CDD2 = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		_0x1DA20 = new ItemPrice(_0x1D1EC, _0x1CDD2);
		global_itemPriceMap[_0x1D1EC] = _0x1DA20;
		global_itemPriceMap[_0x1D48C] = _0x1DA20;
		_0x1D48C++
	}
}

function StardustTool(_0x1D0D4, _0x1DA3C, _0x1DA2E)
{
	this.tool = _0x1D0D4;
	this.arrayItemsToConvertArray = _0x1DA3C;
	this.arrayItemsConvetXpArray = _0x1DA2E
}
var global_stardustToolsMap = [];

function objects_loadStardustTools(data)
{
	var _0x1DA4A = null;
	var _0x1C75E = data.split("~");
	var _0x1D48C = 0;
	var _0x1DA58 = _0x1C75E[0];
	var _0x1DA3C = [];
	var _0x1DA2E = [];
	for (var _0x1C6B6 = 1; _0x1C6B6 < _0x1C75E.length; _0x1C6B6 += 0)
	{
		_0x1DA3C.push(_0x1C75E[_0x1C6B6]);
		_0x1C6B6++;
		_0x1DA2E.push(_0x1C75E[_0x1C6B6]);
		_0x1C6B6++
	};
	global_stardustToolsMap[_0x1DA58] = (new StardustTool(_0x1DA58, _0x1DA3C, _0x1DA2E))
}
var global_seedMap = [];

function Seed(_0x1D1EC, _0x1CB40, _0x1DA04, _0x1D9DA, _0x1CBCC, _0x1DA12, _0x1D9E8, _0x1D9F6, _0x1C7CE)
{
	this.name = _0x1D1EC;
	this.level = _0x1CB40;
	this.stopsDieingAtLevel = _0x1DA04;
	this.bonemeal = _0x1D9DA;
	this.xp = _0x1CBCC;
	this.timer = _0x1DA12;
	this.droprate = _0x1D9E8;
	this.isTreeSeed = _0x1D9F6;
	this.desc = _0x1C7CE
}

function objects_loadSeeds(data)
{
	var _0x1D6E6 = null;
	var _0x1C75E = data.split("~");
	var _0x1D48C = 0;
	for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1C75E.length; _0x1C6B6 += 0)
	{
		var _0x1D1EC = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1CB40 = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1DA04 = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1D9DA = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1CBCC = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1DA12 = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1D9E8 = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1D9F6 = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1C7CE = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		_0x1D6E6 = new Seed(_0x1D1EC, _0x1CB40, _0x1DA04, _0x1D9DA, _0x1CBCC, _0x1DA12, _0x1D9E8, _0x1D9F6, _0x1C7CE);
		global_seedMap[_0x1D1EC] = _0x1D6E6;
		global_seedMap[_0x1D48C] = _0x1D6E6;
		_0x1D48C++
	}
}

function objects_loadEquipment(data)
{
	var _0x1D676 = null;
	var _0x1C75E = data.split("~");
	var _0x1D48C = 0;
	for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1C75E.length; _0x1C6B6 += 0)
	{
		var _0x1D1EC = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1D1B4 = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1D1C2 = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1D1FA = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1D1D0 = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1D1DE = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1C9AA = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1D208 = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1C7CE = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		_0x1D676 = new Equipment(_0x1D1EC, _0x1D1B4, _0x1D1C2, _0x1D1FA, _0x1D1D0, _0x1D1DE, _0x1C9AA, _0x1D208, _0x1C7CE);
		global_equipmentMap[_0x1D1EC] = _0x1D676;
		global_equipmentMap[_0x1D48C] = _0x1D676;
		_0x1D48C++
	}
}
var global_equipmentMap = [];

function Equipment(_0x1D1EC, _0x1D1B4, _0x1D1C2, _0x1D1FA, _0x1D1D0, _0x1D1DE, _0x1C9AA, _0x1D208, _0x1C7CE)
{
	this.name = _0x1D1EC;
	this.accuracy = _0x1D1B4;
	this.attack = _0x1D1C2;
	this.speed = _0x1D1FA;
	this.defence = _0x1D1D0;
	this.magic = _0x1D1DE;
	this.slot = _0x1C9AA;
	this.type = _0x1D208;
	this.desc = _0x1C7CE
}

function objects_loadEquipment(data)
{
	var _0x1D676 = null;
	var _0x1C75E = data.split("~");
	var _0x1D48C = 0;
	for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1C75E.length; _0x1C6B6 += 0)
	{
		var _0x1D1EC = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1D1B4 = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1D1C2 = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1D1FA = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1D1D0 = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1D1DE = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1C9AA = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1D208 = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1C7CE = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		_0x1D676 = new Equipment(_0x1D1EC, _0x1D1B4, _0x1D1C2, _0x1D1FA, _0x1D1D0, _0x1D1DE, _0x1C9AA, _0x1D208, _0x1C7CE);
		global_equipmentMap[_0x1D1EC] = _0x1D676;
		global_equipmentMap[_0x1D48C] = _0x1D676;
		_0x1D48C++
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
		}
	}
}

function addItemBox(_0x1C830, _0x1C84C, _0x1C7CE, _0x1C85A, _0x1C742, _0x1C734, _0x1C83E, _0x1C876, _0x1C7C0)
{
	var _0x1C868 = document.getElementById(_0x1C85A);
	var _0x1C7EA = document.createElement("div");
	_0x1C7EA.setAttribute("class", "item-box");
	_0x1C7EA.setAttribute("onclick", "clicksItem(\'" + _0x1C830 + "\')");
	_0x1C7EA.setAttribute("oncontextmenu", "rightClicksItem(\'" + _0x1C830 + "\'); return false;");
	_0x1C7EA.setAttribute("id", "item-box-" + _0x1C830);
	if (_0x1C876 != "")
	{
		_0x1C7EA.setAttribute("data-tooltip-id", _0x1C876)
	};
	_0x1C7EA.style.backgroundColor = _0x1C742;
	_0x1C7EA.style.border = "1px solid " + _0x1C734;
	var _0x1C806 = document.createElement("div");
	_0x1C806.setAttribute("style", "text-align:center; font-weight: bold;font-size:12pt;color:silver;");
	if (_0x1C830.startsWith("stardust") && !_0x1C830.endsWith("Potion") && !_0x1C830.endsWith("Seeds"))
	{
		var _0x1C822 = getImage("images/stardustIcon.png", "item-" + _0x1C830 + "-box-image-title-icon");
		_0x1C822.setAttribute("class", "img-20");
		_0x1C806.appendChild(_0x1C822)
	};
	if (_0x1C830 == "sapphire" || _0x1C830 == "ruby" || _0x1C830 == "emerald" || _0x1C830 == "diamond" || _0x1C830 == "bloodDiamond")
	{
		_0x1C806.setAttribute("style", "text-align:center; font-weight: bold;color:cyan;")
	};
	_0x1C806.innerHTML += _0x1C83E;
	if (_0x1C7C0)
	{
		_0x1C806.setAttribute("style", "text-align:center; font-weight: bold;font-size:16pt;color:orange;")
	};
	var _0x1C7F8 = document.createElement("div");
	_0x1C7F8.setAttribute("style", "text-align:center");
	var _0x1C814 = getImage("images/" + _0x1C830 + getImageExtention(_0x1C830), "item-" + _0x1C830 + "-box-image");
	_0x1C814.setAttribute("class", "img-100");
	var _0x1C7DC = document.createElement("item-" + _0x1C830);
	_0x1C7DC.setAttribute("type", "number");
	_0x1C7DC.setAttribute("style", "text-align:center;display:block;");
	_0x1C7DC.innerHTML = formatNumber(getItem(_0x1C830), false);
	if (_0x1C84C == 1)
	{
		_0x1C7DC = document.createElement("span");
		_0x1C7DC.innerHTML = ""
	};
	if (_0x1C830 == "researcher")
	{
		_0x1C7DC = document.createElement("span");
		_0x1C7DC.setAttribute("style", "text-align:center;display:block;");
		_0x1C7DC.innerHTML = "<b style=\'color:orange;\'>Completed: </b>" + "<span id=\'research-completed-label\'>" + getTotalResearches() + "</span>"
	};
	if (getOilPerSecondForAItem(_0x1C830) > 0)
	{
		_0x1C7DC = document.createElement("span");
		_0x1C7DC.setAttribute("type", "number");
		_0x1C7DC.setAttribute("style", "text-align:center;display:block;");
		_0x1C7DC.innerHTML = "<div style=\'margin-top:7px;\'><img src=\'images/oil.png\' class=\'img-20\' /> " + formatNumber(getOilPerSecondForAItem(_0x1C830)) + "</div>"
	};
	if (_0x1C830.toLowerCase().endsWith("oxygentank"))
	{
		_0x1C7DC = document.createElement("span");
		_0x1C7DC.setAttribute("type", "number");
		_0x1C7DC.setAttribute("style", "text-align:center;display:block;");
		_0x1C7DC.innerHTML = "<span id=\'oxygenTank-itemBox-value\'></span>"
	};
	if (_0x1C830.toLowerCase().endsWith("bonemealbin"))
	{
		_0x1C7DC = document.createElement("span");
		_0x1C7DC.setAttribute("type", "number");
		_0x1C7DC.setAttribute("style", "text-align:center;display:block;");
		_0x1C7DC.innerHTML = "<img src=\'images/bonemeal.png\' class=\'img-20\' /> " + "<item-bonemeal>0</item-bonemeal>"
	};
	if (_0x1C830 == "museum")
	{
		_0x1C7DC = document.createElement("span");
		_0x1C7DC.setAttribute("type", "number");
		_0x1C7DC.setAttribute("style", "text-align:center;display:block;");
		_0x1C7DC.innerHTML = "<span id=\'museum-info-itembox\'>" + getMuseumItemsCount()[0] + "/" + getMuseumItemsCount()[1] + "</span>"
	};
	if (_0x1C830 == "puzzleChest1")
	{
		_0x1C7DC = document.createElement("span");
		_0x1C7DC.setAttribute("type", "number");
		_0x1C7DC.setAttribute("style", "text-align:center;display:block;");
		_0x1C7DC.innerHTML = "<b>Difficulty:</b> <img src=\'images/easyIcon.png\' class=\'img-20\' /> " + "Easy"
	};
	if (_0x1C830 == "manaStars")
	{
		_0x1C7DC = document.createElement("span");
		_0x1C7DC.setAttribute("type", "number");
		_0x1C7DC.setAttribute("style", "text-align:center;display:block;");
		_0x1C7DC.innerHTML = "<span id=\'span-manaStarsLabel\'></span>"
	};
	if (_0x1C830.endsWith("Oven"))
	{
		_0x1C7DC = document.createElement("span");
		_0x1C7DC.setAttribute("type", "number");
		_0x1C7DC.setAttribute("style", "text-align:center;display:block;");
		_0x1C7DC.innerHTML = "<img src=\'images/heat.png\' class=\'img-20\' /> " + "<item-heat>0</item-heat>"
	};
	if (_0x1C830 == "darkCrystalUsed")
	{
		_0x1C7DC = document.createElement("span");
		_0x1C7DC.setAttribute("style", "text-align:center;display:block;");
		_0x1C7DC.innerHTML = "<span id=\'darkCrystalUsed-label\'></span>"
	};
	_0x1C7EA.appendChild(_0x1C806);
	_0x1C7F8.appendChild(_0x1C814);
	_0x1C7EA.appendChild(_0x1C7F8);
	if (!_0x1C7C0)
	{
		if (getItem(_0x1C830, false) == 0)
		{
			_0x1C7EA.style.display = "none"
		};
		_0x1C7EA.appendChild(_0x1C7DC)
	};
	_0x1C868.appendChild(_0x1C7EA)
}

function addMuseumItemBox(_0x1C830, _0x1CA44, _0x1C84C, _0x1C7CE, _0x1C85A, _0x1C742, _0x1C734, _0x1C83E, _0x1C876, _0x1C7C0)
{
	var _0x1C868 = document.getElementById(_0x1C85A);
	var _0x1C7EA = document.createElement("div");
	_0x1C7EA.setAttribute("class", "item-box");
	_0x1C7EA.setAttribute("onclick", "clicksItem(\'" + _0x1CA44 + "\')");
	_0x1C7EA.setAttribute("id", "item-box-" + _0x1C830);
	if (_0x1C876 != "")
	{
		_0x1C7EA.setAttribute("data-tooltip-id", _0x1C876)
	};
	_0x1C7EA.style.backgroundColor = _0x1C742;
	_0x1C7EA.style.border = "1px solid " + _0x1C734;
	var _0x1C806 = document.createElement("div");
	_0x1C806.setAttribute("style", "text-align:center; font-weight: bold;font-size:12pt;color:silver;");
	_0x1C806.innerHTML += _0x1C83E;
	if (_0x1C7C0)
	{
		_0x1C806.setAttribute("style", "text-align:center; font-weight: bold;font-size:16pt;color:orange;")
	};
	var _0x1C7F8 = document.createElement("div");
	_0x1C7F8.setAttribute("style", "text-align:center");
	var _0x1C814 = getImage("images/" + _0x1C830 + getImageExtention(_0x1C830), "item-" + _0x1C830 + "-box-image-" + getRandomInt(100000));
	_0x1C814.setAttribute("class", "img-100");
	var _0x1C7DC = document.createElement("item-" + _0x1C830);
	_0x1C7DC.setAttribute("type", "number");
	_0x1C7DC.setAttribute("style", "text-align:center;display:block;");
	_0x1C7DC.innerHTML = formatNumber(getItem(_0x1C830), false);
	_0x1C7EA.appendChild(_0x1C806);
	_0x1C7F8.appendChild(_0x1C814);
	_0x1C7EA.appendChild(_0x1C7F8);
	if (!_0x1C7C0)
	{
		if (getItem(_0x1C830, false) == 0)
		{
			_0x1C7EA.style.display = "none"
		};
		_0x1C7EA.appendChild(_0x1C7DC)
	};
	_0x1C868.appendChild(_0x1C7EA)
}

function addItemBoxMining(_0x1C830, _0x1C7CE, _0x1C85A, _0x1C742, _0x1C734, _0x1C83E, _0x1C876, _0x1C7C0)
{
	var _0x1C868 = document.getElementById(_0x1C85A);
	var _0x1C7EA = document.createElement("div");
	_0x1C7EA.setAttribute("class", "item-box");
	_0x1C7EA.setAttribute("onclick", "clicksItem(\'" + _0x1C830 + "\')");
	_0x1C7EA.setAttribute("id", "item-box-" + _0x1C830);
	if (_0x1C876 != "")
	{
		_0x1C7EA.setAttribute("data-tooltip-id", _0x1C876)
	};
	_0x1C7EA.style.backgroundColor = _0x1C742;
	_0x1C7EA.style.border = "1px solid " + _0x1C734;
	var _0x1C806 = document.createElement("div");
	_0x1C806.setAttribute("style", "text-align:center; font-weight: bold;font-size:16pt;");
	_0x1C806.innerHTML = _0x1C83E;
	if (_0x1C7C0)
	{
		_0x1C806.setAttribute("style", "text-align:center; font-weight: bold;font-size:16pt;color:orange;")
	};
	var _0x1C7F8 = document.createElement("div");
	_0x1C7F8.setAttribute("style", "text-align:center");
	var _0x1C814 = getImage("images/" + _0x1C830 + ".png", "item-" + _0x1C830 + "-box-image");
	_0x1C814.setAttribute("class", "img-100");
	var _0x1C7DC = document.createElement("item-" + _0x1C830);
	_0x1C7DC.setAttribute("type", "number");
	_0x1C7DC.setAttribute("style", "text-align:center;display:block;");
	_0x1C7DC.innerHTML = formatNumber(getItem(_0x1C830), false);
	_0x1C7EA.appendChild(_0x1C806);
	_0x1C7F8.appendChild(_0x1C814);
	_0x1C7EA.appendChild(_0x1C7F8);
	if (!_0x1C7C0)
	{
		if (getItem(_0x1C830, false) == 0)
		{
			_0x1C7EA.style.display = "none"
		};
		_0x1C7EA.appendChild(_0x1C7DC)
	};
	_0x1C868.appendChild(_0x1C7EA)
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
	var _0x1DD5A = ["heal", "poison", "reflect", "fire", "teleport"];
	var _0x1DD3E = [3, 5, 3, 2, 0];
	for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1DD5A.length; _0x1C6B6++)
	{
		var _0x1DD4C = _0x1DD5A[_0x1C6B6];
		if (getItem(_0x1DD4C) > 0)
		{
			showElement("combat-spell-" + _0x1DD4C);
			if (getItem(_0x1DD4C + "Cooldown") > 0)
			{
				document.getElementById("combat-spell-" + _0x1DD4C + "-icon").style.filter = "brightness(10%)";
				showElement("combat-spell-" + _0x1DD4C + "-cooldown")
			}
			else
			{
				if (_0x1DD3E[_0x1C6B6] > getItem("heroMana"))
				{
					document.getElementById("combat-spell-" + _0x1DD4C + "-icon").style.filter = "brightness(20%) sepia(100%) hue-rotate(190deg) saturate(500%)";
					hideElement("combat-spell-" + _0x1DD4C + "-cooldown")
				}
				else
				{
					document.getElementById("combat-spell-" + _0x1DD4C + "-icon").style.filter = "brightness(100%)";
					hideElement("combat-spell-" + _0x1DD4C + "-cooldown")
				}
			}
		}
	}
}

function convertNumberWithLetrtsKMBToNumber(_0x1C7B2)
{
	if ((_0x1C7B2 + "").indexOf("k") != -1 || (_0x1C7B2 + "").indexOf("K") != -1)
	{
		_0x1C7B2 = _0x1C7B2.toUpperCase();
		_0x1C7B2 = _0x1C7B2.replace("K", "");
		_0x1C7B2 = _0x1C7B2 * 1000
	};
	if ((_0x1C7B2 + "").indexOf("m") != -1 || (_0x1C7B2 + "").indexOf("M") != -1)
	{
		_0x1C7B2 = _0x1C7B2.toUpperCase();
		_0x1C7B2 = _0x1C7B2.replace("M", "");
		_0x1C7B2 = _0x1C7B2 * 1000000
	};
	if ((_0x1C7B2 + "").indexOf("b") != -1 || (_0x1C7B2 + "").indexOf("B") != -1)
	{
		_0x1C7B2 = _0x1C7B2.toUpperCase();
		_0x1C7B2 = _0x1C7B2.replace("B", "");
		_0x1C7B2 = _0x1C7B2 * 1000000000
	};
	return _0x1C7B2
}

function loadItemBoxes()
{
	var _0x1D756 = "#262626";
	var _0x1D7AA = "#665200";
	var _0x1D79C = "grey";
	var _0x1D7B8 = "#995c00";
	var _0x1D7C6 = "#331a00";
	var _0x1D78E = "#003366";
	var _0x1D780 = "#000d1a";
	var _0x1D764 = "#008000";
	var _0x1D772 = "#006600";
	if (getItemString("home") == "none")
	{
		addItemBox("donorCoins", 0, "", "item-section-combat-1", "green", "lime", "DONOR COINS", "tooltip-donorCoins", false)
	};
	addItemBox("readMe", 0, "", "item-section-combat-1", _0x1D756, "grey", "READ ME", "", false);
	addItemBox("fightMonsterButton", 0, "", "item-section-combat-1", _0x1D756, "grey", "FIGHT NPC", "", true);
	addItemBox("fightPvpButton", 0, "", "item-section-combat-1", _0x1D756, "grey", "PVP", "", true);
	addItemBox("combatLog", 0, "", "item-section-combat-1", _0x1D756, "grey", "MONSTER LOG", "tooltip-combatLog", false);
	addItemBox("combatPresetsIcon", 0, "", "item-section-combat-1", _0x1D756, "grey", "PRESETS", "tooltip-combatPresetsIcon", false);
	addItemBox("heartCrystal1", 0, "", "item-section-combat-1", _0x1D7AA, _0x1D79C, "HEART CRYSTAL", "tooltip-heartCrystal", false);
	addItemBox("bones", 0, "", "item-section-combat-1", _0x1D7AA, _0x1D79C, "BONES", "tooltip-bones", false);
	addItemBox("ashes", 0, "", "item-section-combat-1", _0x1D7AA, _0x1D79C, "ASHES", "tooltip-ashes", false);
	addItemBox("iceBones", 0, "", "item-section-combat-1", _0x1D7AA, _0x1D79C, "ICE BONES", "tooltip-iceBones", false);
	addItemBox("snakeBones", 0, "", "item-section-combat-1", _0x1D7AA, _0x1D79C, "SNAKE BONES", "tooltip-snakeBones", false);
	addItemBox("skeletonSkull", 0, "", "item-section-combat-1", _0x1D7AA, _0x1D79C, "SKULL", "tooltip-skeletonSkull", false);
	addItemBox("ghostClothes", 0, "", "item-section-combat-1", _0x1D7AA, _0x1D79C, "GHOST CLOTHES", "tooltip-ghostClothes", false);
	addItemBox("snakeskin", 0, "", "item-section-combat-1", _0x1D7AA, _0x1D79C, "SNAKESKIN", "tooltip-snakeskin", false);
	addItemBox("batSkin", 0, "", "item-section-combat-1", _0x1D7AA, _0x1D79C, "BATSKIN", "tooltip-batSkin", false);
	addItemBox("bearFur", 0, "", "item-section-combat-1", _0x1D7AA, _0x1D79C, "BEAR FUR", "tooltip-bearFur", false);
	addItemBox("polarBearFur", 0, "", "item-section-combat-1", _0x1D7AA, _0x1D79C, "POLAR BEAR FUR", "tooltip-polarBearFur", false);
	addItemBox("feather", 0, "", "item-section-combat-1", _0x1D7AA, _0x1D79C, "FEATHERS", "tooltip-feather", false);
	addItemBox("fireFeather", 0, "", "item-section-combat-1", _0x1D7AA, _0x1D79C, "FIRE FEATHERS", "tooltip-feather", false);
	addItemBox("string", 0, "", "item-section-combat-1", _0x1D7AA, _0x1D79C, "STRING", "tooltip-string", false);
	addItemBox("bowBase", 0, "", "item-section-combat-1", _0x1D7AA, _0x1D79C, "BOW BASE", "tooltip-bowBase", false);
	if (getItem("cookingUnlocked") == 0)
	{
		addItemBox("apple", 0, "", "item-section-combat-1", _0x1D7B8, _0x1D79C, "APPLE", "tooltip-apple", false);
		addItemBox("storeBananas", 0, "", "item-section-combat-1", _0x1D7B8, _0x1D79C, "BANANAS", "tooltip-storeBananas", false);
		addItemBox("rawChicken", 0, "", "item-section-combat-1", _0x1D7B8, _0x1D79C, "RAW CHICKEN", "tooltip-rawChicken", false);
		addItemBox("cheese", 0, "", "item-section-combat-1", _0x1D7B8, _0x1D79C, "CHEESE", "tooltip-cheese", false);
		addItemBox("honey", 0, "", "item-section-combat-1", _0x1D7B8, _0x1D79C, "HONEY", "tooltip-honey", false)
	};
	addItemBox("combatVial", 0, "", "item-section-combat-1", _0x1D7C6, _0x1D79C, "EMPTY VIAL", "tooltip-combatVial", false);
	addItemBox("poisonCombatVial", 0, "", "item-section-combat-1", _0x1D7C6, _0x1D79C, "POISON VIAL", "tooltip-poisonCombatVial", false);
	addItemBox("arrow", 0, "", "item-section-combat-1", _0x1D7C6, _0x1D79C, "ARROWS", "tooltip-arrow", false);
	addItemBox("fireArrow", 0, "", "item-section-combat-1", _0x1D7C6, _0x1D79C, "FIRE ARROWS", "tooltip-fireArrow", false);
	addItemBox("rustySword", 0, "", "item-section-combat-1", _0x1D7C6, _0x1D79C, "RUSTY SWORD", "tooltip-rustySword", false);
	addItemBox("unlitTorch", 0, "", "item-section-combat-1", _0x1D7C6, _0x1D79C, "UNLIT TORCH", "tooltip-unlitTorch", false);
	addItemBox("torch", 0, "", "item-section-combat-1", _0x1D7C6, _0x1D79C, "TORCH", "tooltip-torch", false);
	addItemBox("stinger", 0, "", "item-section-combat-1", _0x1D7C6, _0x1D79C, "STINGER", "tooltip-stinger", false);
	addItemBox("brokenStinger", 0, "", "item-section-combat-1", _0x1D7C6, _0x1D79C, "STINGER", "tooltip-brokenStinger", false);
	addItemBox("ironDagger", 0, "", "item-section-combat-1", _0x1D7C6, _0x1D79C, "IRON DAGGER", "tooltip-ironDagger", false);
	addItemBox("offhandIronDagger", 0, "", "item-section-combat-1", _0x1D7C6, _0x1D79C, "OFFHAND DAGGER", "tooltip-offhandIronDagger", false);
	addItemBox("skeletonSword", 0, "", "item-section-combat-1", _0x1D7C6, _0x1D79C, "SKELETON SWORD", "tooltip-skeletonSword", false);
	addItemBox("bow", 0, "", "item-section-combat-1", _0x1D7C6, _0x1D79C, "BOW", "tooltip-bow", false);
	addItemBox("yetiLeftFoot", 0, "", "item-section-combat-1", _0x1D7C6, _0x1D79C, "YETI\'S FOOT (L)", "tooltip-yetiLeftFoot", false);
	addItemBox("yetiRightFoot", 0, "", "item-section-combat-1", _0x1D7C6, _0x1D79C, "YETI\'S FOOT (R)", "tooltip-yetiRightFoot", false);
	addItemBox("snakeskinMask", 0, "", "item-section-combat-1", _0x1D7C6, _0x1D79C, "SNAKESKIN MASK", "tooltip-snakeskinMask", false);
	addItemBox("snakeskinBody", 0, "", "item-section-combat-1", _0x1D7C6, _0x1D79C, "SNAKESKIN BODY", "tooltip-snakeskinBody", false);
	addItemBox("snakeskinLegs", 0, "", "item-section-combat-1", _0x1D7C6, _0x1D79C, "SNAKESKIN LEGS", "tooltip-snakeskinLegs", false);
	addItemBox("snakeskinBoots", 0, "", "item-section-combat-1", _0x1D7C6, _0x1D79C, "SNAKESKIN BOOTS", "tooltip-snakeskinBoots", false);
	addItemBox("snakeskinGloves", 0, "", "item-section-combat-1", _0x1D7C6, _0x1D79C, "SNAKESKIN GLOVES", "tooltip-snakeskinGloves", false);
	addItemBox("batSkinMask", 0, "", "item-section-combat-1", _0x1D7C6, _0x1D79C, "BATSKIN MASK", "tooltip-batSkinMask", false);
	addItemBox("batSkinBody", 0, "", "item-section-combat-1", _0x1D7C6, _0x1D79C, "BATSKIN BODY", "tooltip-batSkinBody", false);
	addItemBox("batSkinLegs", 0, "", "item-section-combat-1", _0x1D7C6, _0x1D79C, "BATSKIN LEGS", "tooltip-batSkinLegs", false);
	addItemBox("batSkinBoots", 0, "", "item-section-combat-1", _0x1D7C6, _0x1D79C, "BATSKIN BOOTS", "tooltip-batSkinBoots", false);
	addItemBox("batSkinGloves", 0, "", "item-section-combat-1", _0x1D7C6, _0x1D79C, "BATSKIN GLOVES", "tooltip-batSkinGloves", false);
	addItemBox("bearFurMask", 0, "", "item-section-combat-1", _0x1D7C6, _0x1D79C, "BEAR MASK", "tooltip-bearFurMask", false);
	addItemBox("bearFurBody", 0, "", "item-section-combat-1", _0x1D7C6, _0x1D79C, "BEAR BODY", "tooltip-bearFurBody", false);
	addItemBox("bearFurLegs", 0, "", "item-section-combat-1", _0x1D7C6, _0x1D79C, "BEAR LEGS", "tooltip-bearFurLegs", false);
	addItemBox("bearFurBoots", 0, "", "item-section-combat-1", _0x1D7C6, _0x1D79C, "BEAR BOOTS", "tooltip-bearFurBoots", false);
	addItemBox("bearFurGloves", 0, "", "item-section-combat-1", _0x1D7C6, _0x1D79C, "BEAR GLOVES", "tooltip-bearFurGloves", false);
	addItemBox("polarBearFurMask", 0, "", "item-section-combat-1", _0x1D7C6, _0x1D79C, "POLAR MASK", "tooltip-polarBearFurMask", false);
	addItemBox("polarBearFurBody", 0, "", "item-section-combat-1", _0x1D7C6, _0x1D79C, "POLAR BODY", "tooltip-polarBearFurBody", false);
	addItemBox("polarBearFurLegs", 0, "", "item-section-combat-1", _0x1D7C6, _0x1D79C, "POLAR LEGS", "tooltip-polarBearFurLegs", false);
	addItemBox("polarBearFurBoots", 0, "", "item-section-combat-1", _0x1D7C6, _0x1D79C, "POLAR BOOTS", "tooltip-polarBearFurBoots", false);
	addItemBox("polarBearFurGloves", 0, "", "item-section-combat-1", _0x1D7C6, _0x1D79C, "POLAR GLOVES", "tooltip-polarBearFurGloves", false);
	addItemBox("woodenShield", 0, "", "item-section-combat-1", _0x1D7C6, _0x1D79C, "WOOD SHIELD", "tooltip-woodenShield", false);
	addItemBox("skeletonShield", 0, "", "item-section-combat-1", _0x1D7C6, _0x1D79C, "SKELETON SHIELD", "tooltip-skeletonShield", false);
	addItemBox("boneAmulet", 0, "", "item-section-combat-1", _0x1D7C6, _0x1D79C, "BONE AMULET", "tooltip-boneAmulet", false);
	addItemBox("boneAmuletPlus", 0, "", "item-section-combat-1", _0x1D7C6, _0x1D79C, "BONE AMULET+", "tooltip-boneAmuletPlus", false);
	addItemBox("wand", 0, "", "item-section-combat-1", _0x1D78E, _0x1D780, "WAND", "tooltip-wand", false);
	addItemBox("staff", 0, "", "item-section-combat-1", _0x1D78E, _0x1D780, "MAGIC STAFF", "tooltip-staff", false);
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
	addItemBox("heal", "heal", "", "item-section-magic-1", "#002233", "#80d4ff", "HEAL", "tooltip-heal", false);
	addItemBox("poison", "poison", "", "item-section-magic-1", "#002233", "#80d4ff", "POISON", "tooltip-poison", false);
	addItemBox("reflect", "reflect", "", "item-section-magic-1", "#002233", "#80d4ff", "REFLECT", "tooltip-reflect", false);
	addItemBox("fire", "fire", "", "item-section-magic-1", "#002233", "#80d4ff", "FIRE", "tooltip-fire", false);
	addItemBox("teleport", "teleport", "", "item-section-magic-1", "#002233", "#80d4ff", "TELEPORT", "tooltip-teleport", false);
	addItemBox("transformLog", "transformLog", "", "convertMagic-section", "#002233", "#80d4ff", "TRANSFORM LOG", "tooltip-transformLog", true);
	addItemBox("needle", 0, "", "convertMagic-section", "#002233", "#80d4ff", "NEEDLE", "tooltip-needle", false);
	addItemBox("daggerBlade", 0, "", "convertMagic-section", "#002233", "#80d4ff", "DAGGER BLADE", "tooltip-daggerBlade", false);
	addItemBox("daggerHandle", 0, "", "convertMagic-section", "#002233", "#80d4ff", "DAGGER HANDLE", "tooltip-daggerHandle", false);
	addItemBox("skeletonSwordMetal", 0, "", "convertMagic-section", "#002233", "#80d4ff", "SWORD METAL", "tooltip-skeletonSwordMetal", false);
	addItemBoxMining("miner", "", "item-section-mining-1", _0x1D756, "grey", "MINER", "tooltip-miner", false);
	addItemBoxMining("drills", "", "item-section-mining-1", _0x1D756, "grey", "DRILLS", "tooltip-drills", false);
	addItemBoxMining("crushers", "", "item-section-mining-1", _0x1D756, "grey", "CRUSHERS", "tooltip-crushers", false);
	addItemBox("diamond_verydark", 1, "", "item-section-mining-1", "#333333", "grey", "GEM LIST", "tooltip-none", false);
	addItemBox("gemList2", 1, "", "item-section-mining-1", "#333333", "grey", "GEM/PRISM LIST", "tooltip-none", false);
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
	addItemBox("bronzeOilWell", 1, "", "item-section-mining-1", "#333333", "grey", "OIL WELL", "", false);
	addItemBox("ironOilWell", 1, "", "item-section-mining-1", "#333333", "grey", "OIL WELL", "", false);
	addItemBox("silverOilWell", 1, "", "item-section-mining-1", "#333333", "grey", "OIL WELL", "", false);
	addItemBox("darkCrystal", 0, "", "item-section-mining-1", "#333333", "grey", "DARK CRYSTAL", "tooltip-darkCrystal", false);
	addItemBox("darkCrystalUsed", 0, "", "item-section-mining-1", "#333333", "grey", "DARK CRYSTAL", "tooltip-darkCrystalUsed", false);
	addItemBox("cyanCrystal", 0, "", "item-section-mining-1", "#333333", "grey", "SKY CRYSTAL", "tooltip-colorCrystal", false);
	addItemBox("redCrystal", 0, "", "item-section-mining-1", "#333333", "grey", "LAVA CRYSTAL", "tooltip-colorCrystal", false);
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
	addItemBox("lava", 0, "", "item-section-crafting-1", "#595959", "grey", "LAVA", "tooltip-lava", false);
	addItemBox("brewingKitMould", 0, "", "item-section-crafting-1", "#595959", "grey", "MOULD", "tooltip-mould", false);
	addItemBox("houseBlueprint", 0, "", "item-section-crafting-1", "#595959", "grey", "BLUEPRINTS", "tooltip-bluePrints", false);
	addItemBox("museumBlueprint", 0, "", "item-section-crafting-1", "#595959", "grey", "BLUEPRINTS", "tooltip-bluePrints", false);
	addItemBox("sapphireGlassHand", 0, "", "item-section-crafting-1", "#595959", "grey", "GLASS HAND", "tooltip-sapphireGlassHand", false);
	addItemBox("emeraldGlassHand", 0, "", "item-section-crafting-1", "#595959", "grey", "GLASS HAND", "tooltip-emeraldGlassHand", false);
	addItemBox("ironBucket", 0, "", "item-section-crafting-1", "#333333", "grey", "SILVER BUCKET", "tooltip-ironBucket", false);
	addItemBox("glass", 0, "", "item-section-crafting-1", "#333333", "grey", "GLASS", "tooltip-glass", false);
	addItemBox("bronzeBars", 0, "", "item-section-crafting-1", "#333333", "grey", "BRONZE BAR", "tooltip-bronzeBars", false);
	addItemBox("ironBars", 0, "", "item-section-crafting-1", "#333333", "grey", "IRON BAR", "tooltip-ironBars", false);
	addItemBox("silverBars", 0, "", "item-section-crafting-1", "#333333", "grey", "SILVER BAR", "tooltip-silverBars", false);
	addItemBox("goldBars", 0, "", "item-section-crafting-1", "#333333", "grey", "GOLD BAR", "tooltip-goldBars", false);
	addItemBox("promethiumBars", 0, "", "item-section-crafting-1", "#333333", "grey", "PROMETHIUM BAR", "tooltip-promethiumBars", false);
	addItemBox("treeList", 1, "", "item-section-woodcutting-1", "#003300", "green", "TREE LIST", "tooltip-treeList", true);
	addItemBox("axe", 1, "", "item-section-woodcutting-1", "#003300", "green", "AXE", "tooltip-axe", false);
	addItemBox("sapphireAxe", 1, "", "item-section-woodcutting-1", "#003300", "green", "AXE", "tooltip-axe", false);
	addItemBox("emeraldAxe", 1, "", "item-section-woodcutting-1", "#003300", "green", "AXE", "tooltip-axe", false);
	addItemBox("rubyAxe", 1, "", "item-section-woodcutting-1", "#003300", "green", "AXE", "tooltip-axe", false);
	addItemBox("diamondAxe", 1, "", "item-section-woodcutting-1", "#003300", "green", "AXE", "tooltip-axe", false);
	addItemBox("cockroach", 0, "", "item-section-woodcutting-1", "#004d00", "green", "GIANT COCKROACH", "tooltip-cockroach", false);
	addItemBox("goldenCockroach", 0, "", "item-section-woodcutting-1", "#004d00", "green", "GIANT COCKROACH", "tooltip-goldenCockroach", false);
	addItemBox("logs", 0, "", "item-section-woodcutting-1", "#004d00", "green", "LOGS", "tooltip-logs", false);
	addItemBox("oakLogs", 0, "", "item-section-woodcutting-1", "#004d00", "green", "OAK LOGS", "tooltip-oakLogs", false);
	addItemBox("willowLogs", 0, "", "item-section-woodcutting-1", "#004d00", "green", "WILLOW LOGS", "tooltip-willowLogs", false);
	addItemBox("bambooLogs", 0, "", "item-section-woodcutting-1", "#004d00", "green", "BAMBOO", "tooltip-bambooLogs", false);
	addItemBox("mapleLogs", 0, "", "item-section-woodcutting-1", "#004d00", "green", "MAPLE", "tooltip-mapleLogs", false);
	addItemBox("lavaLogs", 0, "", "item-section-woodcutting-1", "#004d00", "green", "LAVA LOGS", "tooltip-lavaLogs", false);
	addItemBox("stardustLogs", 0, "", "item-section-woodcutting-1", "#004d00", "green", "STARDUST", "tooltip-stardustLogs", false);
	addItemBox("bob", 0, "", "item-section-farming-1", "#003300", "green", "BOB", "tooltip-bob", true);
	addItemBox("rakeHead", 0, "", "item-section-farming-1", "#003300", "green", "RAKE HEAD", "tooltip-rakeHead", false);
	addItemBox("rake", 0, "", "item-section-farming-1", "#003300", "green", "RAKE", "tooltip-rake", false);
	addItemBox("sapphireRake", 0, "", "item-section-farming-1", "#003300", "green", "RAKE", "tooltip-rake", false);
	addItemBox("emeraldRake", 0, "", "item-section-farming-1", "#003300", "green", "RAKE", "tooltip-rake", false);
	addItemBox("rubyRake", 0, "", "item-section-farming-1", "#003300", "green", "RAKE", "tooltip-rake", false);
	addItemBox("diamondRake", 0, "", "item-section-farming-1", "#003300", "green", "RAKE", "tooltip-rake", false);
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
	addItemBox("mapleTreeSeeds", 0, "", "item-section-farming-1", "#004d00", "green", "MAPLE SEED", "tooltip-mapleTreeSeeds", false);
	addItemBox("lavaTreeSeeds", 0, "", "item-section-farming-1", "#004d00", "green", "LAVA TREE SEED", "tooltip-lavaTreeSeeds", false);
	addItemBox("stardustTreeSeeds", 0, "", "item-section-farming-1", "#004d00", "green", "STARDUST SEED", "tooltip-stardustTreeSeeds", false);
	addItemBox("dottedGreenLeafSeeds", 0, "", "item-section-farming-1", "#004d00", "green", "DOTTED LEAF", "tooltip-dottedGreenLeafSeeds", false);
	addItemBox("greenLeafSeeds", 0, "", "item-section-farming-1", "#004d00", "green", "GREEN LEAF", "tooltip-greenLeafSeeds", false);
	addItemBox("limeLeafSeeds", 0, "", "item-section-farming-1", "#004d00", "green", "LIME LEAF", "tooltip-limeLeafSeeds", false);
	addItemBox("goldLeafSeeds", 0, "", "item-section-farming-1", "#004d00", "green", "GOLD LEAF", "tooltip-goldLeafSeeds", false);
	addItemBox("crystalLeafSeeds", 0, "", "item-section-farming-1", "#004d00", "green", "CRYSTAL LEAF", "tooltip-crystalLeafSeeds", false);
	addItemBox("stripedGoldLeafSeeds", 0, "", "item-section-farming-1", "#004d00", "green", "GOLD STRIPED", "tooltip-stripedGoldLeafSeeds", false);
	addItemBox("stripedCrystalLeafSeeds", 0, "", "item-section-farming-1", "#004d00", "green", "CRYSTAL SRIPED", "tooltip-stripedCrystalLeafSeeds", false);
	addItemBox("redMushroomSeeds", 0, "", "item-section-farming-1", "#004d00", "green", "MUSHROOMS", "tooltip-redMushroomSeeds", false);
	addItemBox("stardustSeeds", 0, "", "item-section-farming-1", "#004d00", "green", "STARDUST SEEDS", "tooltip-stardustSeeds", false);
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
	addItemBox("strangeLeafFix", 0, "", "item-section-brewing-1", "#004d00", "green", "STRANGE LEAF", "tooltip-strangeLeaf", false);
	addItemBox("stardustPotion", 0, "", "item-section-brewing-1", "#4d004d", "purple", "STARDUST POTION", "", false);
	addItemBox("sandPotion", 0, "", "item-section-brewing-1", "#4d004d", "purple", "SAND POTION", "", false);
	addItemBox("cookingBoostPotion", 0, "", "item-section-brewing-1", "#4d004d", "purple", "COOKING BOOST", "", false);
	addItemBox("combatCooldownPotion", 0, "", "item-section-brewing-1", "#4d004d", "purple", "COMB. COOLDOWN", "", false);
	addItemBox("compostPotion", 0, "", "item-section-brewing-1", "#4d004d", "purple", "COMPOST POTION", "", false);
	addItemBox("oilPotion", 0, "", "item-section-brewing-1", "#4d004d", "purple", "OIL POTION", "", false);
	addItemBox("bonePotion", 0, "", "item-section-brewing-1", "#4d004d", "purple", "BONE POTION", "", false);
	addItemBox("treeStarterPotion", 0, "", "item-section-brewing-1", "#4d004d", "purple", "TREE STARTER", "", false);
	addItemBox("barPotion", 0, "", "item-section-brewing-1", "#4d004d", "purple", "BAR POTION", "", false);
	addItemBox("sapphireStardustPotion", 0, "", "item-section-brewing-1", "#4d004d", "purple", "SAPPHIRE STAR.", "", false);
	addItemBox("largeManaPotion", 0, "", "item-section-brewing-1", "#4d004d", "purple", "MANA POTION", "", false);
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
	addItemBox("specialBait", 0, "", "item-section-fishing-1", "#006666", "#004d4d", "SPECIAL BAIT", "tooltip-specialBait", false);
	addItemBox("specialFish", 0, "", "item-section-fishing-1", "#006666", "#004d4d", "SPECIAL FISH", "tooltip-specialFish", false);
	addItemBox("oyster", 0, "", "item-section-fishing-1", "#006666", "#004d4d", "OYSTER", "tooltip-oyster", false);
	addItemBox("pearl", 0, "", "item-section-fishing-1", "#006666", "#004d4d", "PEARL", "tooltip-pearl", false);
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
	addItemBox("researcher", 1, "", "item-section-home-1", "#1a344c", "#0d1a26", "RESEARCHER", "tooltip-researcher", false);
	addItemBox("museum", 1, "", "item-section-home-1", "#1a344c", "#0d1a26", "MUSEUM", "tooltip-museum", false);
	addItemBox("telescopeLens", 1, "", "item-section-home-1", "#1a344c", "#0d1a26", "TELESCOPE LENS", "tooltip-telescopeLens", false);
	addItemBox("telescopePart", 1, "", "item-section-home-1", "#1a344c", "#0d1a26", "TELESCOPE", "tooltip-telescopeLens", false);
	addItemBox("telescope", 1, "", "item-section-home-1", "#1a344c", "#0d1a26", "TELESCOPE", "tooltip-telescopeLens", false);
	addItemBox("carePackage2", 0, "", "item-section-home-1", "#1a344c", "0d1a26", "CARE PACKAGE", "tooltip-carePackage", false);
	addItemBox("stardustBox1", 0, "", "item-section-home-1", "#1a344c", "#0d1a26", "STARDUST BOX I", "tooltip-stardustBox", false);
	addItemBox("stardustBox2", 0, "", "item-section-home-1", "#1a344c", "#0d1a26", "STARDUST BOX I", "tooltip-stardustBox", false);
	addItemBox("puzzleChest1", 0, "", "item-section-home-1", "#1a344c", "#0d1a26", "PUZZLE CHEST", "tooltip-puzzleChest1", false);
	addItemBox("bronzeOven", 0, "", "item-section-cooking-1", "#666600", "#333300", "BRONZE OVEN", "tooltip-oven", false);
	addItemBox("ironOven", 0, "", "item-section-cooking-1", "#666600", "#333300", "IRON OVEN", "tooltip-oven", false);
	addItemBox("silverOven", 0, "", "item-section-cooking-1", "#666600", "#333300", "SILVER OVEN", "tooltip-oven", false);
	addItemBox("cooksBook1", 1, "", "item-section-cooking-1", "#666600", "#333300", "COOKS BOOK", "tooltip-cooksBook", false);
	if (getItem("cookingUnlocked") == 1)
	{
		addItemBox("apple", 0, "", "item-section-cooking-1", _0x1D7B8, _0x1D79C, "APPLE", "tooltip-apple", false);
		addItemBox("storeBananas", 0, "", "item-section-cooking-1", _0x1D7B8, _0x1D79C, "BANANAS", "tooltip-storeBananas", false);
		addItemBox("salad", 0, "", "item-section-cooking-1", _0x1D7B8, _0x1D79C, "MUSHROOM SALAD", "tooltip-salad", false);
		addItemBox("rawChicken", 0, "", "item-section-cooking-1", _0x1D7B8, _0x1D79C, "RAW CHICKEN", "tooltip-rawChicken", false);
		addItemBox("oysterMornay", 0, "", "item-section-cooking-1", _0x1D7B8, _0x1D79C, "OYSTER MORNAY", "tooltip-oysterMornay", false);
		addItemBox("rawGiantSnakeTail", 0, "", "item-section-cooking-1", _0x1D7B8, _0x1D79C, "SNAKE TAIL", "tooltip-giantSnakeTail", false);
		addItemBox("giantSnakeTail", 0, "", "item-section-cooking-1", _0x1D7B8, _0x1D79C, "SNAKE TAIL", "tooltip-giantSnakeTail", false);
		addItemBox("cheese", 0, "", "item-section-cooking-1", _0x1D7B8, _0x1D79C, "CHEESE", "tooltip-cheese", false);
		addItemBox("honey", 0, "", "item-section-cooking-1", _0x1D7B8, _0x1D79C, "HONEY", "tooltip-honey", false);
		addItemBox("snakeSushiShrimp", 0, "", "item-section-cooking-1", _0x1D7B8, _0x1D79C, "SNAKESKIN SUSHI", "tooltip-snakeSushiShrimp", false);
		addItemBox("snakeSushiTrout", 0, "", "item-section-cooking-1", _0x1D7B8, _0x1D79C, "SNAKESKIN SUSHI", "tooltip-snakeSushiShrimpTrout", false);
		addItemBox("snakeSushiTuna", 0, "", "item-section-cooking-1", _0x1D7B8, _0x1D79C, "SNAKESKIN SUSHI", "tooltip-snakeSushiShrimpTuna", false);
		addItemBox("seaweedChicken", 0, "", "item-section-cooking-1", _0x1D7B8, _0x1D79C, "SEAWEED CHICKEN", "tooltip-seaweedChicken", false);
		addItemBox("mapleSyrup", 0, "", "item-section-cooking-1", _0x1D7B8, _0x1D79C, "MAPLE SYRUP", "tooltip-mapleSyrup", false)
	};
	addItemBox("chicken", 0, "", "item-section-cooking-1", _0x1D7B8, _0x1D79C, "CHICKEN", "tooltip-chicken", false);
	refreshTooltips()
}

function getOilPerSecondForAItem(_0x1CF30)
{
	switch (_0x1CF30)
	{
	case "bronzeOilWell":
		return 1;
	case "ironOilWell":
		return 5;
	case "silverOilWell":
		return 10;
	default:
		return 0
	}
}
var puzzleChest1_lastSelected = [-1, -1];

function clicksPuzzleChestOne(_0x1CC2E)
{
	var _0x1CFD8 = _0x1CC2E.split("-");
	if (puzzleChest1_lastSelected[0] != -1 || puzzleChest1_lastSelected[1] != -1)
	{
		var _0x1D02C = document.getElementById("td-puzzleChest1_" + puzzleChest1_lastSelected[0] + "-" + puzzleChest1_lastSelected[1]);
		var _0x1D002 = document.getElementById("td-puzzleChest1_" + _0x1CFD8[0] + "-" + _0x1CFD8[1]);
		var _0x1D01E = _0x1D02C.getElementsByTagName("img")[0];
		var _0x1CFF4 = _0x1D002.getElementsByTagName("img")[0];
		var _0x1D010 = _0x1D01E.src;
		var _0x1CFE6 = _0x1CFF4.src;
		_0x1D01E.src = _0x1CFE6;
		_0x1CFF4.src = _0x1D010;
		puzzleChest1_lastSelected = [-1, -1];
		_0x1D02C.style.border = "1px solid grey";
		_0x1D002.style.border = "1px solid grey"
	}
	else
	{
		puzzleChest1_lastSelected = _0x1CFD8;
		document.getElementById("td-puzzleChest1_" + puzzleChest1_lastSelected[0] + "-" + puzzleChest1_lastSelected[1]).style.border = "1px solid green"
	}
}

function clicksPuzzleChestOneSolveButton()
{
	var _0x1CEEA = "";
	_0x1CEEA = "0-0";
	if (!document.getElementById("td-puzzleChest1_" + _0x1CEEA).getElementsByTagName("img")[0].src.endsWith(_0x1CEEA + ".png"))
	{
		confirmDialogue("images/x.png", "The puzzle has not been solve correctly.", "Close", "", "");
		return
	};
	_0x1CEEA = "1-0";
	if (!document.getElementById("td-puzzleChest1_" + _0x1CEEA).getElementsByTagName("img")[0].src.endsWith(_0x1CEEA + ".png"))
	{
		confirmDialogue("images/x.png", "The puzzle has not been solve correctly.", "Close", "", "");
		return
	};
	_0x1CEEA = "2-0";
	if (!document.getElementById("td-puzzleChest1_" + _0x1CEEA).getElementsByTagName("img")[0].src.endsWith(_0x1CEEA + ".png"))
	{
		confirmDialogue("images/x.png", "The puzzle has not been solve correctly.", "Close", "", "");
		return
	};
	_0x1CEEA = "0-1";
	if (!document.getElementById("td-puzzleChest1_" + _0x1CEEA).getElementsByTagName("img")[0].src.endsWith(_0x1CEEA + ".png"))
	{
		confirmDialogue("images/x.png", "The puzzle has not been solve correctly.", "Close", "", "");
		return
	};
	_0x1CEEA = "1-1";
	if (!document.getElementById("td-puzzleChest1_" + _0x1CEEA).getElementsByTagName("img")[0].src.endsWith(_0x1CEEA + ".png"))
	{
		confirmDialogue("images/x.png", "The puzzle has not been solve correctly.", "Close", "", "");
		return
	};
	_0x1CEEA = "2-1";
	if (!document.getElementById("td-puzzleChest1_" + _0x1CEEA).getElementsByTagName("img")[0].src.endsWith(_0x1CEEA + ".png"))
	{
		confirmDialogue("images/x.png", "The puzzle has not been solve correctly.", "Close", "", "");
		return
	};
	_0x1CEEA = "0-2";
	if (!document.getElementById("td-puzzleChest1_" + _0x1CEEA).getElementsByTagName("img")[0].src.endsWith(_0x1CEEA + ".png"))
	{
		confirmDialogue("images/x.png", "The puzzle has not been solve correctly.", "Close", "", "");
		return
	};
	_0x1CEEA = "1-2";
	if (!document.getElementById("td-puzzleChest1_" + _0x1CEEA).getElementsByTagName("img")[0].src.endsWith(_0x1CEEA + ".png"))
	{
		confirmDialogue("images/x.png", "The puzzle has not been solve correctly.", "Close", "", "");
		return
	};
	_0x1CEEA = "2-2";
	if (!document.getElementById("td-puzzleChest1_" + _0x1CEEA).getElementsByTagName("img")[0].src.endsWith(_0x1CEEA + ".png"))
	{
		confirmDialogue("images/x.png", "The puzzle has not been solve correctly.", "Close", "", "");
		return
	};
	sendBytes("CHEST_PUZZLE_1_SOLVED")
}

function openDialogue(_0x1D048)
{
	openDialogueOverride(_0x1D048, "medium")
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
	openDialogueOverride("dialogue-profile", "large")
}

function changedAutoLogin(_0x1CDB6)
{
	if (_0x1CDB6)
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

function displayConvertGuestError(_0x1D198)
{
	document.getElementById("dialogue-profile-guest-to-user-password-errors").innerHTML = "<ul>" + _0x1D198 + "</ul>";
	document.getElementById("dialogue-profile-guest-to-user-password-errors").style.display = ""
}

function getBestFurnace()
{
	var _0x1CEEA = "";
	_0x1CEEA = "stoneFurnace";
	if (getItem(_0x1CEEA) == 1)
	{
		return _0x1CEEA
	};
	_0x1CEEA = "bronzeFurnace";
	if (getItem(_0x1CEEA) == 1)
	{
		return _0x1CEEA
	};
	_0x1CEEA = "ironFurnace";
	if (getItem(_0x1CEEA) == 1)
	{
		return _0x1CEEA
	};
	_0x1CEEA = "silverFurnace";
	if (getItem(_0x1CEEA) == 1)
	{
		return _0x1CEEA
	};
	_0x1CEEA = "goldFurnace";
	if (getItem(_0x1CEEA) == 1)
	{
		return _0x1CEEA
	};
	return "none"
}

function openDialogueOverride(_0x1D048, _0x1DB70)
{
	if (_0x1DB70 == "medium")
	{
		document.getElementById(_0x1D048).style.minWidth = "400px";
		document.getElementById(_0x1D048).style.left = "38%"
	};
	if (_0x1DB70 == "large")
	{
		document.getElementById(_0x1D048).style.minWidth = "700px";
		document.getElementById(_0x1D048).style.left = "30%"
	};
	document.getElementById(_0x1D048).style.top = (scrollY + 20) + "px";
	document.getElementById(_0x1D048).style.display = ""
}

function confirmDialogue(_0x1C902, _0x1D072, _0x1D056, _0x1D064, _0x1D080)
{
	if (_0x1C902 == "" || _0x1C902 == "none")
	{
		document.getElementById("dialogue-confirm-img").style.display = "none"
	}
	else
	{
		document.getElementById("dialogue-confirm-img").src = _0x1C902;
		document.getElementById("dialogue-confirm-img").style.display = ""
	};
	document.getElementById("dialogue-confirm-text").innerHTML = _0x1D072;
	document.getElementById("dialogue-confirm").style.display = "";
	document.getElementById("dialogue-confirm").style.top = (scrollY + 20) + "px";
	document.getElementById("dialogue-confirm-yes").innerHTML = _0x1D056;
	document.getElementById("dialogue-confirm-no").innerHTML = _0x1D064;
	if (_0x1D064 == "")
	{
		document.getElementById("dialogue-confirm-no").style.display = "none"
	}
	else
	{
		document.getElementById("dialogue-confirm-no").style.display = ""
	};
	if (_0x1D080 == "")
	{
		document.getElementById("dialogue-confirm-yes").setAttribute("onclick", "closeDialogue(\'dialogue-confirm\')")
	}
	else
	{
		if (_0x1D080.startsWith("JS"))
		{
			switch (_0x1D080)
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
			document.getElementById("dialogue-confirm-yes").setAttribute("onclick", "sendBytes(\'" + _0x1D080 + "\');closeDialogue(\'dialogue-confirm\');")
		}
	}
}

function confirmDialogue2(_0x1C902, _0x1D072, _0x1D056, _0x1D064, _0x1D08E, _0x1D080, _0x1D09C)
{
	if (_0x1C902 == "" || _0x1C902 == "none")
	{
		document.getElementById("dialogue-confirm2-img").style.display = "none"
	}
	else
	{
		document.getElementById("dialogue-confirm2-img").src = _0x1C902;
		document.getElementById("dialogue-confirm2-img").style.display = ""
	};
	document.getElementById("dialogue-confirm2-text").innerHTML = _0x1D072;
	document.getElementById("dialogue-confirm2").style.display = "";
	document.getElementById("dialogue-confirm2").style.top = (scrollY + 20) + "px";
	document.getElementById("dialogue-confirm2-yes").innerHTML = _0x1D056;
	document.getElementById("dialogue-confirm2-yes2").innerHTML = _0x1D064;
	document.getElementById("dialogue-confirm2-no").innerHTML = _0x1D08E;
	document.getElementById("dialogue-confirm2-yes").setAttribute("onclick", "sendBytes(\'" + _0x1D080 + "\');closeDialogue(\'dialogue-confirm2\');");
	document.getElementById("dialogue-confirm2-yes2").setAttribute("onclick", "sendBytes(\'" + _0x1D09C + "\');closeDialogue(\'dialogue-confirm2\');")
}

function confirmDialogue3(_0x1C902, _0x1D072, _0x1D056, _0x1D064, _0x1D08E, _0x1D0AA, _0x1D080, _0x1D09C, _0x1D0B8)
{
	if (_0x1C902 == "" || _0x1C902 == "none")
	{
		document.getElementById("dialogue-confirm3-img").style.display = "none"
	}
	else
	{
		document.getElementById("dialogue-confirm3-img").src = _0x1C902;
		document.getElementById("dialogue-confirm3-img").style.display = ""
	};
	document.getElementById("dialogue-confirm3-text").innerHTML = _0x1D072;
	document.getElementById("dialogue-confirm3").style.display = "";
	document.getElementById("dialogue-confirm3").style.top = (scrollY + 20) + "px";
	document.getElementById("dialogue-confirm3-yes").innerHTML = _0x1D056;
	document.getElementById("dialogue-confirm3-yes2").innerHTML = _0x1D064;
	document.getElementById("dialogue-confirm3-yes3").innerHTML = _0x1D08E;
	document.getElementById("dialogue-confirm3-no").innerHTML = _0x1D0AA;
	document.getElementById("dialogue-confirm3-yes").setAttribute("onclick", "sendBytes(\'" + _0x1D080 + "\');closeDialogue(\'dialogue-confirm3\');");
	document.getElementById("dialogue-confirm3-yes2").setAttribute("onclick", "sendBytes(\'" + _0x1D09C + "\');closeDialogue(\'dialogue-confirm3\');");
	document.getElementById("dialogue-confirm3-yes3").setAttribute("onclick", "sendBytes(\'" + _0x1D0B8 + "\');closeDialogue(\'dialogue-confirm3\');")
}

function closeDialogue(_0x1D048)
{
	document.getElementById(_0x1D048).style.display = "none"
}

function openQuestDialogue(_0x1DC7A, _0x1C972, _0x1DC88, _0x1D072, _0x1DBFC, _0x1DC0A, _0x1DC18, _0x1DC26, _0x1DC42, _0x1DC50, _0x1DC5E, _0x1DC6C)
{
	document.getElementById("dialogue-quest-title").innerHTML = _0x1DC88;
	document.getElementById("dialogue-quest-text").innerHTML = "<table><tr><td class=\'dialogue-quest-text-td\'>" + _0x1D072 + "</td><td><img src=\'" + _0x1DC7A + "\' class=\'img-150\' /> </td></table>";
	document.getElementById("dialogue-quest-btn1").style.display = "none";
	document.getElementById("dialogue-quest-btn2").style.display = "none";
	document.getElementById("dialogue-quest-btn3").style.display = "none";
	document.getElementById("dialogue-quest-btn4").style.display = "none";
	if (_0x1DBFC != "")
	{
		document.getElementById("dialogue-quest-btn1").style.display = "";
		if (_0x1DC42 == "")
		{
			document.getElementById("dialogue-quest-btn1").setAttribute("onclick", "closeDialogue(\'dialogue-quest\');")
		}
		else
		{
			document.getElementById("dialogue-quest-btn1").setAttribute("onclick", "closeDialogue(\'dialogue-quest\');sendBytes(\'QUEST=" + _0x1C972 + "~" + _0x1DC42 + "\')")
		}
	}
	else
	{
		document.getElementById("dialogue-quest-btn1").style.display = "none"
	};
	if (_0x1DC0A != "")
	{
		document.getElementById("dialogue-quest-btn2").style.display = "";
		if (_0x1DC50 == "")
		{
			document.getElementById("dialogue-quest-btn2").setAttribute("onclick", "closeDialogue(\'dialogue-quest\');")
		}
		else
		{
			document.getElementById("dialogue-quest-btn2").setAttribute("onclick", "closeDialogue(\'dialogue-quest\');sendBytes(\'QUEST=" + _0x1C972 + "~" + _0x1DC50 + "\')")
		}
	}
	else
	{
		document.getElementById("dialogue-quest-btn2").style.display = "none"
	};
	if (_0x1DC18 != "")
	{
		document.getElementById("dialogue-quest-btn3").style.display = "";
		if (_0x1DC5E == "")
		{
			document.getElementById("dialogue-quest-btn3").setAttribute("onclick", "closeDialogue(\'dialogue-quest\');")
		}
		else
		{
			document.getElementById("dialogue-quest-btn3").setAttribute("onclick", "closeDialogue(\'dialogue-quest\');sendBytes(\'QUEST=" + _0x1C972 + "~" + _0x1DC5E + "\')")
		}
	}
	else
	{
		document.getElementById("dialogue-quest-btn3").style.display = "none"
	};
	if (_0x1DC26 != "")
	{
		document.getElementById("dialogue-quest-btn4").style.display = "";
		if (_0x1DC6C == "")
		{
			document.getElementById("dialogue-quest-btn4").setAttribute("onclick", "closeDialogue(\'dialogue-quest\');")
		}
		else
		{
			document.getElementById("dialogue-quest-btn4").setAttribute("onclick", "closeDialogue(\'dialogue-quest\');sendBytes(\'QUEST=" + _0x1C972 + "~" + _0x1DC6C + "\')")
		}
	}
	else
	{
		document.getElementById("dialogue-quest-btn4").style.display = "none"
	};
	var _0x1DC34 = "<img src=\'images/bubbleChat.png\' class=\'img-30\' /> ";
	document.getElementById("dialogue-quest-btn1").innerHTML = _0x1DC34 + _0x1DBFC;
	document.getElementById("dialogue-quest-btn2").innerHTML = _0x1DC34 + _0x1DC0A;
	document.getElementById("dialogue-quest-btn3").innerHTML = _0x1DC34 + _0x1DC18;
	document.getElementById("dialogue-quest-btn4").innerHTML = _0x1DC34 + _0x1DC26;
	openDialogueOverride("dialogue-quest", "large")
}

function clicksPotion(_0x1CFCA)
{
	if (getItem(_0x1CFCA + "Timer") && getItem("warningPotionDrinking") == 0)
	{
		confirmDialogue("images/" + "warning" + ".png", "This potion is already active.  Drinking another one will simply reset the timer.<br /><br /><i style=\'color:grey\'>You won\'t see this warning again.</i>", "Close", "", "");
		sendBytes("DRINKING_POTION_WARNING")
	}
	else
	{
		if (_0x1CFCA == "sapphireStardustPotion")
		{
			confirmDialogue("images/" + _0x1CFCA + ".png", "Pour over a sapphire?<br /><br /><span style=\'color:grey\'>You will lose your sapphire.</span>", "Pour on Sapphire", "Cancel", "DRINK=" + _0x1CFCA)
		}
		else
		{
			confirmDialogue("images/" + _0x1CFCA + ".png", "Drink this potion?", "Drink", "Cancel", "DRINK=" + _0x1CFCA)
		}
	}
}

function getItemPrice(_0x1D1EC)
{
	if (global_itemPriceMap[_0x1D1EC] != null)
	{
		return global_itemPriceMap[_0x1D1EC].price
	};
	return 0
}

function rightClicksItem(_0x1CF30)
{
	if (global_equipmentMap[_0x1CF30] != null)
	{
		if (getItem("needle") > 0)
		{
			if (_0x1CF30.startsWith("snakeskin"))
			{
				confirmDialogue("images/needle.png", "<img src=\'images/" + _0x1CF30 + ".png\' class=\'img-50\' /> Use needle on this? <img src=\'images/" + _0x1CF30 + ".png\' class=\'img-30\' />", "Use Needle", "Cancel", "NEEDLE=" + _0x1CF30);
				return
			}
			else
			{
				if (_0x1CF30.startsWith("bearFur"))
				{
					confirmDialogue("images/needle.png", "<img src=\'images/" + _0x1CF30 + ".png\' class=\'img-50\' /> Use needle on this? <img src=\'images/" + _0x1CF30 + ".png\' class=\'img-30\' />", "Use Needle", "Cancel", "NEEDLE=" + _0x1CF30);
					return
				}
				else
				{
					if (_0x1CF30.startsWith("polarBearFur"))
					{
						confirmDialogue("images/needle.png", "<img src=\'images/" + _0x1CF30 + ".png\' class=\'img-50\' /> Use needle on this? <img src=\'images/" + _0x1CF30 + ".png\' class=\'img-30\' />", "Use Needle", "Cancel", "NEEDLE=" + _0x1CF30);
						return
					}
					else
					{
						if (_0x1CF30.startsWith("batSkin"))
						{
							confirmDialogue("images/needle.png", "<img src=\'images/" + _0x1CF30 + ".png\' class=\'img-50\' /> Use needle on this? <img src=\'images/" + _0x1CF30 + ".png\' class=\'img-30\' />", "Use Needle", "Cancel", "NEEDLE=" + _0x1CF30);
							return
						}
					}
				}
			}
		}
	}
}

function clicksItem(_0x1CF30)
{
	if (_0x1CF30.endsWith("Seeds"))
	{
		clicksSeed(_0x1CF30);
		return
	};
	if (_0x1CF30.endsWith("Museum"))
	{
		if (getItem(_0x1CF30) == 0)
		{
			sendBytes("MUSEUM_OFFER=" + _0x1CF30.substr(0, _0x1CF30.length - 6));
			return
		}
	};
	if (_0x1CF30.startsWith("stardustBox"))
	{
		openInputDialogue("Open", "images/" + _0x1CF30 + ".png", _0x1CF30, 1, ["stardust"], [0], [_0x1CF30], [1], "Open", "OPEN_STARDUST_BOX", "Contains a random amount of stardust.");
		return
	};
	if (_0x1CF30.endsWith("StardustPrism"))
	{
		openInputDialogue("Open", "images/" + _0x1CF30 + ".png", _0x1CF30, 1, ["stardust"], [0], [_0x1CF30], [1], "Break", "OPEN_STARDUST_PRISM", "Contains a random amount of stardust.");
		return
	};
	if (_0x1CF30.endsWith("ManaStar"))
	{
		confirmDialogue("images/" + _0x1CF30 + ".png", "Absorb the star to increase maximum mana permanently?", "Absorb Mana Star", "Cancel", "MANA_STAR=" + _0x1CF30);
		return
	};
	if (getItemPrice(_0x1CF30) > 0 && _0x1CF30 != "oyster")
	{
		openInputDialogue("Sell", "images/" + _0x1CF30 + ".png", _0x1CF30, 1, ["coins"], [getItemPrice(_0x1CF30)], [_0x1CF30], [1], "Sell", "SELL", "Sell this to the shop for some coins.")
	};
	if (_0x1CF30.toLowerCase().endsWith("rake"))
	{
		openRakeDialogue()
	};
	if (_0x1CF30.startsWith("heartCrystal"))
	{
		confirmDialogue("images/" + _0x1CF30 + ".png", "Break crystal and gain a permanent <img src=\'images/heartIcon.png\' class=\'img-20\' /> +5 health?", "Break Crystal", "Cancel", "HEART_CRYSTAL=" + _0x1CF30);
		return
	};
	if (global_foodMap[_0x1CF30] != null)
	{
		if (_0x1CF30.startsWith("raw"))
		{
			if (getItem("cookingUnlocked") == 0)
			{
				confirmDialogue("images/cookingSkill.png", "You need to unlock the cooking skill for this action.<br /><br /><span style=\'color:grey\'><b>Hint: </b> Cooking is unlocked after purchasing a bronze oven after upgrading the shop through crafting.", "Close", "", "")
			}
			else
			{
				if (getItem("cookingBoostPotionOn") == 1)
				{
					confirmDialogue("images/cookingBoostPotion.png", "You are about to use your cooking boost to cook one of this type of food.", "Cook", "Cancel", "COOK=" + _0x1CF30 + "~1")
				}
				else
				{
					if (global_foodMap[_0x1CF30].cookLevel > getLevel(getItem("cookingXp")))
					{
						confirmDialogue("images/cookingSkill.png", "You need a level of " + global_foodMap[_0x1CF30].cookLevel + " to cook this.", "Close", "", "")
					}
					else
					{
						openInputDialogue("Cook", "images/" + _0x1CF30 + ".png", _0x1CF30, 1, ["cookingSkill_xp"], [global_foodMap[_0x1CF30].xp], [_0x1CF30, "heat"], [1, global_foodMap[_0x1CF30].heat], "Cook", "COOK", "Cooking food allows it to be consumed afterwards for energy.  Remember to check your burn rate on your oven.")
					}
				}
			}
		}
		else
		{
			if (_0x1CF30 == "redMushroom" && getItem("researcherFarming") == 0)
			{
				return
			};
			openInputDialogue(getItemName(_0x1CF30.charAt(0).toUpperCase() + _0x1CF30.slice(1)) + "s", "images/" + _0x1CF30 + ".png", _0x1CF30, 1, ["energy"], [global_foodMap[_0x1CF30].energy], [_0x1CF30], [1], "Consume", "CONSUME", "Food gives you energy for your hero.  Energy is required to begin a fight with a monster.")
		}
	};
	if (global_equipmentMap[_0x1CF30] != null)
	{
		if (document.getElementById("item-box-needle").style.border == "3px solid orange")
		{
			if (_0x1CF30.startsWith("snakeskin"))
			{
				confirmDialogue("images/needle.png", "<img src=\'images/" + _0x1CF30 + ".png\' class=\'img-50\' /> Use needle on this? <img src=\'images/" + _0x1CF30 + ".png\' class=\'img-30\' />", "Use Needle", "Cancel", "NEEDLE=" + _0x1CF30);
				return
			}
			else
			{
				if (_0x1CF30.startsWith("bearFur"))
				{
					confirmDialogue("images/needle.png", "<img src=\'images/" + _0x1CF30 + ".png\' class=\'img-50\' /> Use needle on this? <img src=\'images/" + _0x1CF30 + ".png\' class=\'img-30\' />", "Use Needle", "Cancel", "NEEDLE=" + _0x1CF30);
					return
				}
				else
				{
					if (_0x1CF30.startsWith("polarBearFur"))
					{
						confirmDialogue("images/needle.png", "<img src=\'images/" + _0x1CF30 + ".png\' class=\'img-50\' /> Use needle on this? <img src=\'images/" + _0x1CF30 + ".png\' class=\'img-30\' />", "Use Needle", "Cancel", "NEEDLE=" + _0x1CF30);
						return
					}
					else
					{
						if (_0x1CF30.startsWith("batSkin"))
						{
							confirmDialogue("images/needle.png", "<img src=\'images/" + _0x1CF30 + ".png\' class=\'img-50\' /> Use needle on this? <img src=\'images/" + _0x1CF30 + ".png\' class=\'img-30\' />", "Use Needle", "Cancel", "NEEDLE=" + _0x1CF30);
							return
						}
					}
				}
			}
		};
		sendBytes("EQUIP=" + _0x1CF30)
	};
	if (_0x1CF30.toLowerCase().endsWith("arrow"))
	{
		sendBytes("EQUIP=" + _0x1CF30);
		return
	};
	if (_0x1CF30.endsWith("Potion"))
	{
		clicksPotion(_0x1CF30);
		return
	};
	if (_0x1CF30.endsWith("Mould"))
	{
		switchCraftingType(_0x1CF30);
		refreshCraftables();
		return
	};
	if (_0x1CF30.endsWith("Furnace"))
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
				openFurnaceDialogue(_0x1CF30)
			}
		}
	};
	if (global_museumItemsArray[_0x1CF30] != null)
	{
		sendBytes("CLICKS_MUSEUM_ITEM=" + _0x1CF30)
	};
	if (_0x1CF30.toLowerCase().endsWith("fishingnet"))
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
	if (_0x1CF30.toLowerCase().endsWith("fishingrod"))
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
	if (_0x1CF30.toLowerCase().endsWith("harpoon"))
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
	if (_0x1CF30.toLowerCase().endsWith("shovel"))
	{
		openShovelDialogue()
	};
	if (_0x1CF30.toLowerCase().endsWith("axe") && !_0x1CF30.toLowerCase().endsWith("pickaxe"))
	{
		openAxeDialogue()
	};
	if (_0x1CF30.toLowerCase().endsWith("bonemealbin"))
	{
		bonemealBinDialgue()
	};
	if (_0x1CF30.toLowerCase().endsWith("brewingkit"))
	{
		openBrewingKitDialogue()
	};
	if (_0x1CF30.toLowerCase().endsWith("stardustpickaxe"))
	{
		openStardustToolDialogue("stardustPickaxe")
	};
	if (_0x1CF30.toLowerCase().endsWith("stardusthammer"))
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
	if (_0x1CF30.endsWith("Oven"))
	{
		clicksOven()
	};
	if (_0x1CF30.startsWith("spellScroll"))
	{
		confirmDialogue("images/" + _0x1CF30 + ".png", "Study the spell scroll?", "Learn", "Cancel", "LEARN_SPELL=" + _0x1CF30)
	};
	if (_0x1CF30 == "houseBlueprint")
	{
		confirmDialogue("images/researcher.png", "You may only craft one of three houses.<br /><br />The house you craft will define your character.", "Close", "", "");
		switchCraftingType(_0x1CF30);
		refreshCraftables();
		return
	};
	if (_0x1CF30 == "museumBlueprint")
	{
		switchCraftingType(_0x1CF30);
		refreshCraftables();
		return
	};
	switch (_0x1CF30)
	{
	case "feather":
		navigate("right-crafting");
		switchCraftingType(_0x1CF30);
		refreshCraftables();
		break;
	case "fireFeather":
		navigate("right-crafting");
		switchCraftingType(_0x1CF30);
		refreshCraftables();
		break;
	case "oyster":
		openDialogue("dialogue-oysterOptions");
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
	case "bones":
		if (getBonemealTypeData() == "none")
		{
			confirmDialogue("images/bones.png", "Hmm, wonder what I can do with these.", "Close", "", "")
		}
		else
		{
			var _0x1CC3C = getBonemealTypeData()[3];
			if (_0x1CC3C == "INF")
			{
				_0x1CC3C = "&#8734;"
			};
			openInputDialogue("Bonemeal<br /><span style=\'color:grey;font-size:10pt;\'>Currently stored: " + getItem("bonemeal") + "/" + _0x1CC3C + "</span>", "images/bonemeal.png", "bones", 1, ["bonemeal"], [1], ["bones"], [1], "Add", "ADD_BONEMEAL", "Bones can be stored in the bonemeal bin.  Bonemeal is required to plant high level seeds.")
		};
		break;
	case "ashes":
		if (getBonemealTypeData() == "none")
		{
			confirmDialogue("images/ashes.png", "Hmm, wonder what I can do with these.", "Close", "", "")
		}
		else
		{
			var _0x1CC3C = getBonemealTypeData()[3];
			if (_0x1CC3C == "INF")
			{
				_0x1CC3C = "&#8734;"
			};
			openInputDialogue("Bonemeal<br /><span style=\'color:grey;font-size:10pt;\'>Currently stored: " + getItem("bonemeal") + "/" + _0x1CC3C + "</span>", "images/bonemeal.png", "ashes", 1, ["bonemeal"], [2], ["ashes"], [1], "Add", "ADD_BONEMEAL", "Ashes can be stored in the bonemeal bin.  Bonemeal is required to plant high level seeds.")
		};
		break;
	case "iceBones":
		if (getBonemealTypeData() == "none")
		{
			confirmDialogue("images/iceBones.png", "Hmm, wonder what I can do with these.", "Close", "", "")
		}
		else
		{
			var _0x1CC3C = getBonemealTypeData()[3];
			if (_0x1CC3C == "INF")
			{
				_0x1CC3C = "&#8734;"
			};
			openInputDialogue("Bonemeal<br /><span style=\'color:grey;font-size:10pt;\'>Currently stored: " + getItem("bonemeal") + "/" + _0x1CC3C + "</span>", "images/bonemeal.png", "iceBones", 1, ["bonemeal"], [3], ["iceBones"], [1], "Add", "ADD_BONEMEAL", "Ice bones can be stored in the bonemeal bin.  Bonemeal is required to plant high level seeds. The cold has preserved its calcium content.")
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
			var _0x1CC3C = getBonemealTypeData()[3];
			if (_0x1CC3C == "INF")
			{
				_0x1CC3C = "&#8734;"
			};
			openInputDialogue("Bonemeal<br /><span style=\'color:grey;font-size:10pt;\'>Currently stored: " + getItem("bonemeal") + "/" + _0x1CC3C + "</span>", "images/bonemeal.png", "fishBones", 1, ["bonemeal"], [0.1], ["fishBones"], [1], "Add", "ADD_BONEMEAL", "Fishbones can be stored in the bonemeal bin.  Bonemeal is required to plant high level seeds.")
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
					confirmDialogue("images/oxygenTank.png", "Your already exploring the deep ocean floors!", "Close", "", "SEND_BOAT=oxygenTank");
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
		confirmDialogue("images/telescope.png", "There is too much light pollution.", "Close", "", "");
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
		if (_0x1CF30 == "miner" && getItem("letTheMiningBeginQuest") == 2 && getAllocationAmount(_0x1CF30) == 0)
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
			clicksMiningResource(_0x1CF30)
		};
		break;
	case "carePackage1":
		confirmDialogue("images/carePackage1.png", "Open package?", "Open", "Wait", "OPEN_CARE_PACKAGE_1");
		break;
	case "carePackage2":
		confirmDialogue("images/carePackage2.png", "Open package?", "Open", "Wait", "OPEN_CARE_PACKAGE_2");
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
	case "combatLog":
		navigate("right-combatLog");
		sendBytes("REFRESH_COMBAT_LOG");
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
		switchCraftingType(_0x1CF30);
		refreshCraftables();
		break;
	case "bearFur":
		navigate("right-crafting");
		switchCraftingType(_0x1CF30);
		refreshCraftables();
		break;
	case "polarBearFur":
		navigate("right-crafting");
		switchCraftingType(_0x1CF30);
		refreshCraftables();
		break;
	case "batSkin":
		navigate("right-crafting");
		switchCraftingType(_0x1CF30);
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
		navigate("right-crafting");
		switchCraftingType(_0x1CF30);
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
	var _0x1CEEA;
	var _0x1CC4A = "";
	for (var _0x1C6B6 = 1; _0x1C6B6 <= 5; _0x1C6B6++)
	{
		_0x1CEEA = _0x1C6B6;
		_0x1CC4A = "";
		if (getItemString("presetWeapon" + _0x1CEEA) != "weapon")
		{
			_0x1CC4A += "<img src=\'images/" + getItemString("presetWeapon" + _0x1CEEA) + ".png\' class=\'img-30\' /> "
		};
		if (getItemString("presetShield" + _0x1CEEA) != "shield")
		{
			_0x1CC4A += "<img src=\'images/" + getItemString("presetShield" + _0x1CEEA) + ".png\' class=\'img-30\' /> "
		};
		if (getItemString("presetHead" + _0x1CEEA) != "head")
		{
			_0x1CC4A += "<img src=\'images/" + getItemString("presetHead" + _0x1CEEA) + ".png\' class=\'img-30\' /> "
		};
		if (getItemString("presetBody" + _0x1CEEA) != "body")
		{
			_0x1CC4A += "<img src=\'images/" + getItemString("presetBody" + _0x1CEEA) + ".png\' class=\'img-30\' /> "
		};
		if (getItemString("presetLegs" + _0x1CEEA) != "legs")
		{
			_0x1CC4A += "<img src=\'images/" + getItemString("presetLegs" + _0x1CEEA) + ".png\' class=\'img-30\' /> "
		};
		if (getItemString("presetBoots" + _0x1CEEA) != "boots")
		{
			_0x1CC4A += "<img src=\'images/" + getItemString("presetBoots" + _0x1CEEA) + ".png\' class=\'img-30\' /> "
		};
		if (getItemString("presetGloves" + _0x1CEEA) != "gloves")
		{
			_0x1CC4A += "<img src=\'images/" + getItemString("presetGloves" + _0x1CEEA) + ".png\' class=\'img-30\' /> "
		};
		if (getItemString("presetAmulet" + _0x1CEEA) != "amulet")
		{
			_0x1CC4A += "<img src=\'images/" + getItemString("presetAmulet" + _0x1CEEA) + ".png\' class=\'img-30\' /> "
		};
		if (getItemString("presetArrows" + _0x1CEEA) != "arrows")
		{
			_0x1CC4A += "<img src=\'images/" + getItemString("presetArrows" + _0x1CEEA) + ".png\' class=\'img-30\' /> "
		};
		if (_0x1CC4A.length > 0)
		{
			document.getElementById("preset" + _0x1CEEA + "-set").innerHTML = _0x1CC4A
		}
		else
		{
			document.getElementById("preset" + _0x1CEEA + "-set").innerHTML = "(Not Set)"
		}
	};
	openDialogueOverride("dialogue-combatPresets", "large")
}

function setPreset(_0x1CC2E)
{
	closeDialogue("dialogue-combatPresets");
	confirmDialogue("images/combatPresetsIcon.png", "Set this preset to what you\'re currently wearing?", "Set Preset", "Cancel", "SET_PRESET=" + _0x1CC2E)
}

function usePreset(_0x1CC2E)
{
	closeDialogue("dialogue-combatPresets");
	sendBytes("USE_PRESET=" + _0x1CC2E)
}

function openInputTextDialogue(_0x1DB0E, _0x1C7CE, _0x1DB1C, _0x1DAF2, _0x1DB00, _0x1D080)
{
	if (_0x1DB0E == "none")
	{
		document.getElementById("dialogue-text-input-img").style.display = "none"
	}
	else
	{
		document.getElementById("dialogue-text-input-img").style.display = "";
		document.getElementById("dialogue-text-input-img").src = _0x1DB0E
	};
	document.getElementById("dialogue-text-input-description").innerHTML = _0x1C7CE;
	document.getElementById("dialogue-text-input-title").innerHTML = _0x1DB1C;
	document.getElementById("dialogue-text-input-confirm").innerHTML = _0x1DAF2;
	document.getElementById("dialogue-text-input-cancel").innerHTML = _0x1DB00;
	document.getElementById("dialogue-text-input-confirm").onclick = function ()
	{
		sendBytes(_0x1D080 + "=" + document.getElementById("dialogue-text-input-box").value);
		closeDialogue("dialogue-text-input")
	};
	openDialogue("dialogue-text-input")
}

function open2InputTextDialogue(_0x1DB0E, _0x1C7CE, _0x1DB1C, _0x1DB2A, _0x1DAF2, _0x1DB00, _0x1D080)
{
	if (_0x1DB0E == "none")
	{
		document.getElementById("dialogue-text-input2-img").style.display = "none"
	}
	else
	{
		document.getElementById("dialogue-text-input2-img").style.display = "";
		document.getElementById("dialogue-text-input2-img").src = _0x1DB0E
	};
	document.getElementById("dialogue-text-input2-description").innerHTML = _0x1C7CE;
	document.getElementById("dialogue-text-input2-title1").innerHTML = _0x1DB1C;
	document.getElementById("dialogue-text-input2-title2").innerHTML = _0x1DB2A;
	document.getElementById("dialogue-text-input2-confirm").innerHTML = _0x1DAF2;
	document.getElementById("dialogue-text-input2-cancel").innerHTML = _0x1DB00;
	document.getElementById("dialogue-text-input2-confirm").onclick = function ()
	{
		sendBytes(_0x1D080 + "=" + document.getElementById("dialogue-text-input2-box1").value + "~" + document.getElementById("dialogue-text-input2-box2").value);
		closeDialogue("dialogue-text-input2")
	};
	openDialogue("dialogue-text-input2")
}

function clicksDonorShopItem(_0x1CF30)
{
	switch (_0x1CF30)
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
		confirmDialogue("images/donorCoins.png", "Are you sure you want to purchase this?", "Purchase", "Cancel", "PURCHASE_DONOR=" + _0x1CF30);
		break
	}
}

function resetAnimationOfCurrentFightToIdle()
{
	var _0x1D216 = getMonsterObject(getItemString("monsterName"));
	if (_0x1D216 != "none")
	{
		_0x1D216.frameAt = 0;
		_0x1D216.speedAt = 0;
		_0x1D216.currentAnimation = _0x1D216.idleAnimationObject
	}
}
var global_museumItemsArray = new Array();

function refreshMuseum()
{
	document.getElementById("museum-section").innerHTML = "";
	var _0x1CEEA = "";
	_0x1CEEA = "sapphireGlassHand";
	global_museumItemsArray[_0x1CEEA] = true;
	if (getItem(_0x1CEEA + "Museum") == 1)
	{
		addItemBox(_0x1CEEA, 0, "", "museum-section", "#1a344c", "#0d1a26", "SAPPHIRE GLASS HAND", "", true)
	}
	else
	{
		addMuseumItemBox("x_grey", _0x1CEEA + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "SAPPHIRE GLASS HAND", "", true)
	};
	_0x1CEEA = "emeraldGlassHand";
	global_museumItemsArray[_0x1CEEA] = true;
	if (getItem(_0x1CEEA + "Museum") == 1)
	{
		addItemBox(_0x1CEEA, 0, "", "museum-section", "#1a344c", "#0d1a26", "EMERALD GLASS HAND", "", true)
	}
	else
	{
		addMuseumItemBox("x_grey", _0x1CEEA + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "EMERALD GLASS HAND", "", true)
	};
	_0x1CEEA = "brokenStinger";
	global_museumItemsArray[_0x1CEEA] = true;
	if (getItem(_0x1CEEA + "Museum") == 1)
	{
		addItemBox(_0x1CEEA, 0, "", "museum-section", "#1a344c", "#0d1a26", "BROKEN STINGER", "", true)
	}
	else
	{
		addMuseumItemBox("x_grey", _0x1CEEA + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "BROKEN STINGER", "", true)
	};
	_0x1CEEA = "snakeBones";
	global_museumItemsArray[_0x1CEEA] = true;
	if (getItem(_0x1CEEA + "Museum") == 1)
	{
		addItemBox(_0x1CEEA, 0, "", "museum-section", "#1a344c", "#0d1a26", "SNAKE BONES", "", true)
	}
	else
	{
		addMuseumItemBox("x_grey", _0x1CEEA + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "SNAKE BONES", "", true)
	};
	_0x1CEEA = "skeletonSkull";
	global_museumItemsArray[_0x1CEEA] = true;
	if (getItem(_0x1CEEA + "Museum") == 1)
	{
		addItemBox(_0x1CEEA, 0, "", "museum-section", "#1a344c", "#0d1a26", "SKULL", "", true)
	}
	else
	{
		addMuseumItemBox("x_grey", _0x1CEEA + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "SKULL", "", true)
	};
	_0x1CEEA = "ghostClothes";
	global_museumItemsArray[_0x1CEEA] = true;
	if (getItem(_0x1CEEA + "Museum") == 1)
	{
		addItemBox(_0x1CEEA, 0, "", "museum-section", "#1a344c", "#0d1a26", "GHOST CLOTHES", "", true)
	}
	else
	{
		addMuseumItemBox("x_grey", _0x1CEEA + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "GHOST CLOTHES", "", true)
	};
	_0x1CEEA = "cockroach";
	global_museumItemsArray[_0x1CEEA] = true;
	if (getItem(_0x1CEEA + "Museum") == 1)
	{
		addItemBox(_0x1CEEA, 0, "", "museum-section", "#1a344c", "#0d1a26", "GIANT COCKROACH", "", true)
	}
	else
	{
		addMuseumItemBox("x_grey", _0x1CEEA + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "GIANT COCKROACH", "", true)
	};
	_0x1CEEA = "goldenCockroach";
	global_museumItemsArray[_0x1CEEA] = true;
	if (getItem(_0x1CEEA + "Museum") == 1)
	{
		addItemBox(_0x1CEEA, 0, "", "museum-section", "#1a344c", "#0d1a26", "GOLDEN COCKROACH", "", true)
	}
	else
	{
		addMuseumItemBox("x_grey", _0x1CEEA + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "GOLDEN COCKROACH", "", true)
	};
	_0x1CEEA = "smallSeaShell";
	global_museumItemsArray[_0x1CEEA] = true;
	if (getItem(_0x1CEEA + "Museum") == 1)
	{
		addItemBox(_0x1CEEA, 0, "", "museum-section", "#1a344c", "#0d1a26", "SMALL SHELL", "", true)
	}
	else
	{
		addMuseumItemBox("x_grey", _0x1CEEA + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "SMALL SHELL", "", true)
	};
	_0x1CEEA = "mediumSeaShell";
	global_museumItemsArray[_0x1CEEA] = true;
	if (getItem(_0x1CEEA + "Museum") == 1)
	{
		addItemBox(_0x1CEEA, 0, "", "museum-section", "#1a344c", "#0d1a26", "MEDIUM SHELL", "", true)
	}
	else
	{
		addMuseumItemBox("x_grey", _0x1CEEA + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "MEDIUM SHELL", "", true)
	};
	_0x1CEEA = "largeSeaShell";
	global_museumItemsArray[_0x1CEEA] = true;
	if (getItem(_0x1CEEA + "Museum") == 1)
	{
		addItemBox(_0x1CEEA, 0, "", "museum-section", "#1a344c", "#0d1a26", "LARGE SHELL", "", true)
	}
	else
	{
		addMuseumItemBox("x_grey", _0x1CEEA + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "LARGE SHELL", "", true)
	};
	_0x1CEEA = "yetiLeftFoot";
	global_museumItemsArray[_0x1CEEA] = true;
	if (getItem(_0x1CEEA + "Museum") == 1)
	{
		addItemBox(_0x1CEEA, 0, "", "museum-section", "#1a344c", "#0d1a26", "YETI\'S FOOT (L)", "", true)
	}
	else
	{
		addMuseumItemBox("x_grey", _0x1CEEA + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "YETI\'S FOOT (L)", "", true)
	};
	_0x1CEEA = "yetiRightFoot";
	global_museumItemsArray[_0x1CEEA] = true;
	if (getItem(_0x1CEEA + "Museum") == 1)
	{
		addItemBox(_0x1CEEA, 0, "", "museum-section", "#1a344c", "#0d1a26", "YETI\'S FOOT (R)", "", true)
	}
	else
	{
		addMuseumItemBox("x_grey", _0x1CEEA + "Museum", 1, "", "museum-section", "#1a344c", "#0d1a26", "YETI\'S FOOT (R)", "", true)
	}
}

function refreshHeroHpBar()
{
	var _0x1DDBC = parseInt(getItem("heroHp") / getItem("heroMaxHp") * 100);
	if (_0x1DDBC > 100)
	{
		_0x1DDBC = 100
	};
	document.getElementById("hero-inner-hp-bar").style.minWidth = _0x1DDBC + "%"
}

function refreshHeroManaBar()
{
	var _0x1DDBC = parseInt(getItem("heroMana") / getItem("heroMaxMana") * 100);
	if (_0x1DDBC > 100)
	{
		_0x1DDBC = 100
	};
	document.getElementById("hero-inner-mana-bar").style.minWidth = _0x1DDBC + "%"
}

function getSeedDropRate(_0x1D4FC)
{
	switch (_0x1D4FC)
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
	case "stardustSeeds":
		return 28800;
	default:
		return 0
	}
}

function getBurnRate()
{
	var _0x1D382 = 1;
	switch (getOvenType())
	{
	case "bronzeOven":
		_0x1D382 = 0.5;
		break;
	case "ironOven":
		_0x1D382 = 0.4;
		break;
	case "silverOven":
		_0x1D382 = 0.3;
		break;
	case "goldOven":
		_0x1D382 = 0.2;
		break
	};
	if (getItem("researcherCooking") >= 3)
	{
		_0x1D382 -= 0.05
	};
	return _0x1D382
}

function getOvenType()
{
	var _0x1CEEA = "goldOven";
	if (getItem(_0x1CEEA) == 1)
	{
		return _0x1CEEA
	};
	var _0x1CEEA = "silverOven";
	if (getItem(_0x1CEEA) == 1)
	{
		return _0x1CEEA
	};
	var _0x1CEEA = "ironOven";
	if (getItem(_0x1CEEA) == 1)
	{
		return _0x1CEEA
	};
	var _0x1CEEA = "bronzeOven";
	if (getItem(_0x1CEEA) == 1)
	{
		return _0x1CEEA
	}
}

function refreshSeedListTab()
{
	var _0x1C85A = document.getElementById("farming-seedList-section");
	var _0x1CC4A = "<center>";
	var _0x1CEEA = "";
	_0x1CEEA = "dottedGreenLeafSeeds";
	rarity = getSeedDropRate(_0x1CEEA);
	if (getItem(_0x1CEEA + "BobTotal") > 0)
	{
		_0x1CC4A += "<div class=\'mobile-style\' style=\'background-image:url(images/background16.jpg)\'>";
		_0x1CC4A += "<img src=\'images/" + _0x1CEEA + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x1CC4A += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "DOTTED GREEN";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'color:white;font-size:12pt;\'>1/" + formatNumber(rarity) + "</span>";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1CEEA + "BobTotal") + "</span>";
		_0x1CC4A += "</span>";
		_0x1CC4A += "</div>"
	};
	_0x1CEEA = "greenLeafSeeds";
	rarity = getSeedDropRate(_0x1CEEA);
	if (getItem(_0x1CEEA + "BobTotal") > 0)
	{
		_0x1CC4A += "<div class=\'mobile-style\' style=\'background-image:url(images/background16.jpg)\'>";
		_0x1CC4A += "<img src=\'images/" + _0x1CEEA + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x1CC4A += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "GREEN LEAF";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'color:white;font-size:12pt;\'>1/" + formatNumber(rarity) + "</span>";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1CEEA + "BobTotal") + "</span>";
		_0x1CC4A += "</span>";
		_0x1CC4A += "</div>"
	};
	_0x1CEEA = "limeLeafSeeds";
	rarity = getSeedDropRate(_0x1CEEA);
	if (getItem(_0x1CEEA + "BobTotal") > 0)
	{
		_0x1CC4A += "<div class=\'mobile-style\' style=\'background-image:url(images/background16.jpg)\'>";
		_0x1CC4A += "<img src=\'images/" + _0x1CEEA + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x1CC4A += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "LIME LEAF";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'color:white;font-size:12pt;\'>1/" + formatNumber(rarity) + "</span>";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1CEEA + "BobTotal") + "</span>";
		_0x1CC4A += "</span>";
		_0x1CC4A += "</div>"
	};
	_0x1CEEA = "goldLeafSeeds";
	rarity = getSeedDropRate(_0x1CEEA);
	if (getItem(_0x1CEEA + "BobTotal") > 0)
	{
		_0x1CC4A += "<div class=\'mobile-style\' style=\'background-image:url(images/background16.jpg)\'>";
		_0x1CC4A += "<img src=\'images/" + _0x1CEEA + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x1CC4A += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "GOLD LEAF";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'color:white;font-size:12pt;\'>1/" + formatNumber(rarity) + "</span>";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1CEEA + "BobTotal") + "</span>";
		_0x1CC4A += "</span>";
		_0x1CC4A += "</div>"
	};
	_0x1CEEA = "crystalLeafSeeds";
	rarity = getSeedDropRate(_0x1CEEA);
	if (getItem(_0x1CEEA + "BobTotal") > 0)
	{
		_0x1CC4A += "<div class=\'mobile-style\' style=\'background-image:url(images/background16.jpg)\'>";
		_0x1CC4A += "<img src=\'images/" + _0x1CEEA + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x1CC4A += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "CRYSTAL LEAF";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'color:white;font-size:12pt;\'>1/" + formatNumber(rarity) + "</span>";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1CEEA + "BobTotal") + "</span>";
		_0x1CC4A += "</span>";
		_0x1CC4A += "</div>"
	};
	_0x1CEEA = "stripedGoldLeafSeeds";
	rarity = getSeedDropRate(_0x1CEEA);
	if (getItem(_0x1CEEA + "BobTotal") > 0)
	{
		_0x1CC4A += "<div class=\'mobile-style\' style=\'background-image:url(images/background16.jpg)\'>";
		_0x1CC4A += "<img src=\'images/" + _0x1CEEA + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x1CC4A += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "STRIPED GOLD";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'color:white;font-size:12pt;\'>1/" + formatNumber(rarity) + "</span>";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1CEEA + "BobTotal") + "</span>";
		_0x1CC4A += "</span>";
		_0x1CC4A += "</div>"
	};
	_0x1CEEA = "stripedCrystalLeafSeeds";
	rarity = getSeedDropRate(_0x1CEEA);
	if (getItem(_0x1CEEA + "BobTotal") > 0)
	{
		_0x1CC4A += "<div class=\'mobile-style\' style=\'background-image:url(images/background16.jpg)\'>";
		_0x1CC4A += "<img src=\'images/" + _0x1CEEA + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x1CC4A += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "STRIPED CRYSTAL";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'color:white;font-size:12pt;\'>1/" + formatNumber(rarity) + "</span>";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1CEEA + "BobTotal") + "</span>";
		_0x1CC4A += "</span>";
		_0x1CC4A += "</div>"
	};
	_0x1CEEA = "redMushroomSeeds";
	rarity = getSeedDropRate(_0x1CEEA);
	if (getItem(_0x1CEEA + "BobTotal") > 0)
	{
		_0x1CC4A += "<div class=\'mobile-style\' style=\'background-image:url(images/background7.jpg)\'>";
		_0x1CC4A += "<img src=\'images/" + _0x1CEEA + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x1CC4A += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "RED MUSHROOM";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'color:white;font-size:12pt;\'>1/" + formatNumber(rarity) + "</span>";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1CEEA + "BobTotal") + "</span>";
		_0x1CC4A += "</span>";
		_0x1CC4A += "</div>"
	};
	_0x1CEEA = "blewitMushroomSeeds";
	rarity = getSeedDropRate(_0x1CEEA);
	if (getItem(_0x1CEEA + "BobTotal") > 0)
	{
		_0x1CC4A += "<div class=\'mobile-style\' style=\'background-image:url(images/background7.jpg)\'>";
		_0x1CC4A += "<img src=\'images/" + _0x1CEEA + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x1CC4A += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "BLEWIT MUSH";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'color:white;font-size:12pt;\'>1/" + formatNumber(rarity) + "</span>";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1CEEA + "BobTotal") + "</span>";
		_0x1CC4A += "</span>";
		_0x1CC4A += "</div>"
	};
	_0x1CEEA = "snapegrassSeeds";
	rarity = getSeedDropRate(_0x1CEEA);
	if (getItem(_0x1CEEA + "BobTotal") > 0)
	{
		_0x1CC4A += "<div class=\'mobile-style\' style=\'background-image:url(images/background7.jpg)\'>";
		_0x1CC4A += "<img src=\'images/" + _0x1CEEA + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x1CC4A += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "SNAPEGRASS";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'color:white;font-size:12pt;\'>1/" + formatNumber(rarity) + "</span>";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1CEEA + "BobTotal") + "</span>";
		_0x1CC4A += "</span>";
		_0x1CC4A += "</div>"
	};
	_0x1CEEA = "stardustSeeds";
	rarity = getSeedDropRate(_0x1CEEA);
	if (getItem(_0x1CEEA + "BobTotal") > 0)
	{
		_0x1CC4A += "<div class=\'mobile-style\' style=\'background-image:url(images/background_light.png)\'>";
		_0x1CC4A += "<img src=\'images/" + _0x1CEEA + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x1CC4A += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "STARDUST SEEDS";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'color:white;font-size:12pt;\'>1/" + formatNumber(rarity) + "</span>";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1CEEA + "BobTotal") + "</span>";
		_0x1CC4A += "</span>";
		_0x1CC4A += "</div>"
	};
	_0x1CEEA = "treeSeeds";
	rarity = getSeedDropRate(_0x1CEEA);
	if (getItem(_0x1CEEA + "Chopped") > 0)
	{
		_0x1CC4A += "<div class=\'mobile-style\' style=\'background-image:url(images/background18.jpg)\'>";
		_0x1CC4A += "<img src=\'images/" + _0x1CEEA + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x1CC4A += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "TREE";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'color:white;font-size:12pt;color:grey\'>N/A</span>";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1CEEA + "Chopped") + "</span>";
		_0x1CC4A += "</span>";
		_0x1CC4A += "</div>"
	};
	_0x1CEEA = "oakTreeSeeds";
	rarity = getSeedDropRate(_0x1CEEA);
	if (getItem(_0x1CEEA + "Chopped") > 0)
	{
		_0x1CC4A += "<div class=\'mobile-style\' style=\'background-image:url(images/background18.jpg)\'>";
		_0x1CC4A += "<img src=\'images/" + _0x1CEEA + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x1CC4A += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "OAK TREE";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'color:white;font-size:12pt;color:grey\'>N/A</span>";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1CEEA + "Chopped") + "</span>";
		_0x1CC4A += "</span>";
		_0x1CC4A += "</div>"
	};
	_0x1CEEA = "willowTreeSeeds";
	rarity = getSeedDropRate(_0x1CEEA);
	if (getItem(_0x1CEEA + "Chopped") > 0)
	{
		_0x1CC4A += "<div class=\'mobile-style\' style=\'background-image:url(images/background18.jpg)\'>";
		_0x1CC4A += "<img src=\'images/" + _0x1CEEA + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x1CC4A += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "WILLOW TREE";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'color:white;font-size:12pt;color:grey\'>N/A</span>";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1CEEA + "Chopped") + "</span>";
		_0x1CC4A += "</span>";
		_0x1CC4A += "</div>"
	};
	_0x1CEEA = "bambooTreeSeeds";
	rarity = getSeedDropRate(_0x1CEEA);
	if (getItem(_0x1CEEA + "Chopped") > 0)
	{
		_0x1CC4A += "<div class=\'mobile-style\' style=\'background-image:url(images/background18.jpg)\'>";
		_0x1CC4A += "<img src=\'images/" + _0x1CEEA + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x1CC4A += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "BAMBOO TREE";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'color:white;font-size:12pt;color:grey\'>N/A</span>";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1CEEA + "Chopped") + "</span>";
		_0x1CC4A += "</span>";
		_0x1CC4A += "</div>"
	};
	_0x1CEEA = "mapleTreeSeeds";
	rarity = getSeedDropRate(_0x1CEEA);
	if (getItem(_0x1CEEA + "Chopped") > 0)
	{
		_0x1CC4A += "<div class=\'mobile-style\' style=\'background-image:url(images/background18.jpg)\'>";
		_0x1CC4A += "<img src=\'images/" + _0x1CEEA + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x1CC4A += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "MAPLE TREE";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'color:white;font-size:12pt;color:grey\'>N/A</span>";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1CEEA + "Chopped") + "</span>";
		_0x1CC4A += "</span>";
		_0x1CC4A += "</div>"
	};
	_0x1CEEA = "lavaTreeSeeds";
	rarity = getSeedDropRate(_0x1CEEA);
	if (getItem(_0x1CEEA + "Chopped") > 0)
	{
		_0x1CC4A += "<div class=\'mobile-style\' style=\'background-image:url(images/background18.jpg)\'>";
		_0x1CC4A += "<img src=\'images/" + _0x1CEEA + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x1CC4A += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "LAVA TREE";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'color:white;font-size:12pt;color:grey\'>N/A</span>";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1CEEA + "Chopped") + "</span>";
		_0x1CC4A += "</span>";
		_0x1CC4A += "</div>"
	};
	_0x1CEEA = "stardustTreeSeeds";
	rarity = getSeedDropRate(_0x1CEEA);
	if (getItem(_0x1CEEA + "Chopped") > 0)
	{
		_0x1CC4A += "<div class=\'mobile-style\' style=\'background-image:url(images/background18.jpg)\'>";
		_0x1CC4A += "<img src=\'images/" + _0x1CEEA + ".png\' class=\'img-100\' style=\'float:left;\' />";
		_0x1CC4A += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "STARDUST TREE";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'color:white;font-size:12pt;color:grey\'>N/A</span>";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1CEEA + "Chopped") + "</span>";
		_0x1CC4A += "</span>";
		_0x1CC4A += "</div>"
	};
	_0x1CC4A += "</center>";
	_0x1C85A.innerHTML = _0x1CC4A
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

function refreshTreeListTab()
{
	var _0x1C85A = document.getElementById("woodcutting-treeList-section");
	var _0x1CC4A = "<center>";
	var _0x1CEEA = "";
	var _0x1C814 = "";
	var _0x1D1EC = "";
	var _0x1E120 = "background-image:url(images/background16.jpg)";
	var _0x1E12E = "<img src=\'images/treeListLocked.png\' style=\'float:left;)\' class=\'img-100\' />";
	var _0x1CB40 = "";
	_0x1CEEA = "tree";
	rarity = "";
	if (getItem(_0x1CEEA + "ChoppedTotal") > 0)
	{
		_0x1D1EC = _0x1CEEA;
		rarity = "Common";
		_0x1CB40 = "1";
		backgroundImageStyle = _0x1E120;
		_0x1C814 = "<img src=\'images/" + _0x1CEEA + ".png\' style=\'float:left;\' class=\'img-100\' />"
	}
	else
	{
		_0x1D1EC = "???";
		backgroundImageStyle = "";
		rarity = "";
		_0x1CB40 = "1";
		_0x1C814 = _0x1E12E;
		backgroundImageStyle = ""
	};
	_0x1CC4A += "<div class=\'mobile-style\' style=\'" + backgroundImageStyle + "\'>";
	_0x1CC4A += _0x1C814;
	_0x1CC4A += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x1D1EC.toUpperCase();
	_0x1CC4A += "<br />";
	_0x1CC4A += "<span style=\'color:white;font-size:12pt;\'>" + rarity + "</span>";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<span style=\'color:grey;font-size:12pt;\'>Level " + _0x1CB40 + "</span>";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<span style=\'font-size:12pt;color:yellow\'>Chopped " + getItem(_0x1CEEA + "ChoppedTotal") + "</span>";
	_0x1CC4A += "</span>";
	_0x1CC4A += "</div>";
	_0x1CEEA = "oakTree";
	rarity = "";
	if (getItem(_0x1CEEA + "ChoppedTotal") > 0)
	{
		_0x1D1EC = getItemName(_0x1CEEA).toUpperCase();
		rarity = "Common";
		_0x1CB40 = "15";
		backgroundImageStyle = _0x1E120;
		_0x1C814 = "<img src=\'images/" + _0x1CEEA + ".png\' style=\'float:left;\' class=\'img-100\' />"
	}
	else
	{
		_0x1D1EC = "???";
		rarity = "";
		_0x1CB40 = "15";
		_0x1C814 = _0x1E12E;
		backgroundImageStyle = ""
	};
	_0x1CC4A += "<div class=\'mobile-style\' style=\'" + backgroundImageStyle + "\'>";
	_0x1CC4A += _0x1C814;
	_0x1CC4A += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x1D1EC;
	_0x1CC4A += "<br />";
	_0x1CC4A += "<span style=\'color:white;font-size:12pt;\'>" + rarity + "</span>";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<span style=\'color:grey;font-size:12pt;\'>Level " + _0x1CB40 + "</span>";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<span style=\'font-size:12pt;color:yellow\'>Chopped " + getItem(_0x1CEEA + "ChoppedTotal") + "</span>";
	_0x1CC4A += "</span>";
	_0x1CC4A += "</div>";
	_0x1CEEA = "willowTree";
	rarity = "";
	if (getItem(_0x1CEEA + "ChoppedTotal") > 0)
	{
		_0x1D1EC = getItemName(_0x1CEEA).toUpperCase();
		rarity = "Common";
		_0x1CB40 = "30";
		backgroundImageStyle = _0x1E120;
		_0x1C814 = "<img src=\'images/" + _0x1CEEA + ".png\' style=\'float:left;\' class=\'img-100\' />"
	}
	else
	{
		backgroundImageStyle = "";
		_0x1D1EC = "???";
		_0x1CB40 = "30";
		rarity = "";
		_0x1C814 = _0x1E12E
	};
	_0x1CC4A += "<div class=\'mobile-style\' style=\'" + backgroundImageStyle + "\'>";
	_0x1CC4A += _0x1C814;
	_0x1CC4A += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x1D1EC;
	_0x1CC4A += "<br />";
	_0x1CC4A += "<span style=\'color:white;font-size:12pt;\'>" + rarity + "</span>";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<span style=\'color:grey;font-size:12pt;\'>Level " + _0x1CB40 + "</span>";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<span style=\'font-size:12pt;color:yellow\'>Chopped " + getItem(_0x1CEEA + "ChoppedTotal") + "</span>";
	_0x1CC4A += "</span>";
	_0x1CC4A += "</div>";
	_0x1CEEA = "bambooTree";
	rarity = "Uncommon";
	_0x1CB40 = "40";
	if (getItem(_0x1CEEA + "ChoppedTotal") > 0)
	{
		_0x1D1EC = getItemName(_0x1CEEA).toUpperCase();
		backgroundImageStyle = _0x1E120;
		_0x1C814 = "<img src=\'images/" + _0x1CEEA + ".png\' style=\'float:left;\' class=\'img-100\' />"
	}
	else
	{
		backgroundImageStyle = "";
		_0x1D1EC = "???";
		_0x1C814 = _0x1E12E
	};
	_0x1CC4A += "<div class=\'mobile-style\' style=\'" + backgroundImageStyle + "\'>";
	_0x1CC4A += _0x1C814;
	_0x1CC4A += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x1D1EC;
	_0x1CC4A += "<br />";
	_0x1CC4A += "<span style=\'color:white;font-size:12pt;\'>" + rarity + "</span>";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<span style=\'color:grey;font-size:12pt;\'>Level " + _0x1CB40 + "</span>";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<span style=\'font-size:12pt;color:yellow\'>Chopped " + getItem(_0x1CEEA + "ChoppedTotal") + "</span>";
	_0x1CC4A += "</span>";
	_0x1CC4A += "</div>";
	_0x1CEEA = "mapleTree";
	rarity = "Uncommon";
	_0x1CB40 = "50";
	if (getItem(_0x1CEEA + "ChoppedTotal") > 0)
	{
		_0x1D1EC = getItemName(_0x1CEEA).toUpperCase();
		backgroundImageStyle = _0x1E120;
		_0x1C814 = "<img src=\'images/" + _0x1CEEA + ".png\' style=\'float:left;\' class=\'img-100\' />"
	}
	else
	{
		backgroundImageStyle = "";
		_0x1D1EC = "???";
		_0x1C814 = _0x1E12E
	};
	_0x1CC4A += "<div class=\'mobile-style\' style=\'" + backgroundImageStyle + "\'>";
	_0x1CC4A += _0x1C814;
	_0x1CC4A += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x1D1EC;
	_0x1CC4A += "<br />";
	_0x1CC4A += "<span style=\'color:white;font-size:12pt;\'>" + rarity + "</span>";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<span style=\'color:grey;font-size:12pt;\'>Level " + _0x1CB40 + "</span>";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<span style=\'font-size:12pt;color:yellow\'>Chopped " + getItem(_0x1CEEA + "ChoppedTotal") + "</span>";
	_0x1CC4A += "</span>";
	_0x1CC4A += "</div>";
	_0x1CEEA = "lavaTree";
	rarity = "Rare";
	_0x1CB40 = "60";
	if (getItem(_0x1CEEA + "ChoppedTotal") > 0)
	{
		_0x1D1EC = getItemName(_0x1CEEA).toUpperCase();
		backgroundImageStyle = _0x1E120;
		_0x1C814 = "<img src=\'images/" + _0x1CEEA + ".png\' style=\'float:left;\' class=\'img-100\' />"
	}
	else
	{
		backgroundImageStyle = "";
		_0x1D1EC = "???";
		_0x1C814 = _0x1E12E
	};
	_0x1CC4A += "<div class=\'mobile-style\' style=\'" + backgroundImageStyle + "\'>";
	_0x1CC4A += _0x1C814;
	_0x1CC4A += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x1D1EC;
	_0x1CC4A += "<br />";
	_0x1CC4A += "<span style=\'color:white;font-size:12pt;\'>" + rarity + "</span>";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<span style=\'color:grey;font-size:12pt;\'>Level " + _0x1CB40 + "</span>";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<span style=\'font-size:12pt;color:yellow\'>Chopped " + getItem(_0x1CEEA + "ChoppedTotal") + "</span>";
	_0x1CC4A += "</span>";
	_0x1CC4A += "</div>";
	_0x1CEEA = "stardustTree";
	rarity = "Rare";
	_0x1CB40 = "70";
	if (getItem(_0x1CEEA + "ChoppedTotal") > 0)
	{
		_0x1D1EC = getItemName(_0x1CEEA).toUpperCase();
		backgroundImageStyle = _0x1E120;
		_0x1C814 = "<img src=\'images/" + _0x1CEEA + ".png\' style=\'float:left;\' class=\'img-100\' />"
	}
	else
	{
		backgroundImageStyle = "";
		_0x1D1EC = "???";
		_0x1C814 = _0x1E12E
	};
	_0x1CC4A += "<div class=\'mobile-style\' style=\'" + backgroundImageStyle + "\'>";
	_0x1CC4A += _0x1C814;
	_0x1CC4A += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x1D1EC;
	_0x1CC4A += "<br />";
	_0x1CC4A += "<span style=\'color:white;font-size:12pt;\'>" + rarity + "</span>";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<span style=\'color:grey;font-size:12pt;\'>Level " + _0x1CB40 + "</span>";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<span style=\'font-size:12pt;color:yellow\'>Chopped " + getItem(_0x1CEEA + "ChoppedTotal") + "</span>";
	_0x1CC4A += "</span>";
	_0x1CC4A += "</div>";
	_0x1CC4A += "</center>";
	_0x1C85A.innerHTML = _0x1CC4A
}

function refreshGemListTab()
{
	var _0x1C85A = document.getElementById("mining-gemList-section");
	var _0x1CC4A = "<center>";
	var _0x1CEEA = "";
	_0x1CEEA = "sapphire";
	_0x1CC4A += "<div class=\'mobile-style\'>";
	_0x1CC4A += "<img src=\'images/" + _0x1CEEA + ".png\' style=\'float:left;\' class=\'img-100\' />";
	_0x1CC4A += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x1CEEA.toUpperCase();
	_0x1CC4A += "<br />";
	_0x1CC4A += "<span style=\'color:white;font-size:12pt;\'>1/100,000</span>";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem("sapphireMined") + "</span>";
	_0x1CC4A += "</span>";
	_0x1CC4A += "</div>";
	_0x1CEEA = "emerald";
	_0x1CC4A += "<div class=\'mobile-style\'>";
	_0x1CC4A += "<img src=\'images/" + _0x1CEEA + ".png\' style=\'float:left;\' class=\'img-100\' />";
	_0x1CC4A += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x1CEEA.toUpperCase();
	_0x1CC4A += "<br />";
	_0x1CC4A += "<span style=\'color:white;font-size:12pt;\'>1/250,000</span>";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1CEEA + "Mined") + "</span>";
	_0x1CC4A += "</span>";
	_0x1CC4A += "</div>";
	_0x1CEEA = "ruby";
	_0x1CC4A += "<div class=\'mobile-style\'>";
	_0x1CC4A += "<img src=\'images/" + _0x1CEEA + ".png\' style=\'float:left;\' class=\'img-100\' />";
	_0x1CC4A += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x1CEEA.toUpperCase();
	_0x1CC4A += "<br />";
	_0x1CC4A += "<span style=\'color:white;font-size:12pt;\'>1/500,000</span>";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1CEEA + "Mined") + "</span>";
	_0x1CC4A += "</span>";
	_0x1CC4A += "</div>";
	_0x1CEEA = "diamond";
	_0x1CC4A += "<div class=\'mobile-style\'>";
	_0x1CC4A += "<img src=\'images/" + _0x1CEEA + ".png\' style=\'float:left;\' class=\'img-100\' />";
	_0x1CC4A += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + _0x1CEEA.toUpperCase();
	_0x1CC4A += "<br />";
	_0x1CC4A += "<span style=\'color:white;font-size:12pt;\'>1/1,000,000</span>";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1CEEA + "Mined") + "</span>";
	_0x1CC4A += "</span>";
	_0x1CC4A += "</div>";
	_0x1C85A.innerHTML = _0x1CC4A;
	_0x1CEEA = "bloodDiamond";
	_0x1CC4A += "<div class=\'mobile-style\'>";
	_0x1CC4A += "<img src=\'images/" + _0x1CEEA + ".gif\' style=\'float:left;\' class=\'img-100\' />";
	_0x1CC4A += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "BLOOD DIAMOND";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<span style=\'color:white;font-size:12pt;\'>1/???</span>";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1CEEA + "Mined") + "</span>";
	_0x1CC4A += "</span>";
	_0x1CC4A += "</div>";
	var _0x1C910 = 0;
	var _0x1CECE = "style=\'color:red\'";
	if (getItem("researcherMining") >= 2)
	{
		_0x1C910 = 5;
		if (getLevel(getItem("miningXp")) >= _0x1C910)
		{
			_0x1CECE = "style=\'color:lime\'"
		};
		_0x1CEEA = "smallStardustPrism";
		_0x1CC4A += "<div class=\'mobile-style\'>";
		_0x1CC4A += "<img src=\'images/" + _0x1CEEA + ".png\' style=\'float:left;\' class=\'img-100\' />";
		_0x1CC4A += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "SMALL";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'color:white;font-size:12pt;\'>1/4320  <br /><span style=\'color:grey\'><img src=\'images/miningSkill.png\' class=\'img-20\' /> <span " + _0x1CECE + ">" + _0x1C910 + "</span></span>";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1CEEA + "Mined") + "</span>";
		_0x1CC4A += "</span>";
		_0x1CC4A += "</div>";
		_0x1C910 = 20;
		_0x1CECE = "style=\'color:red\'";
		if (getLevel(getItem("miningXp")) >= _0x1C910)
		{
			_0x1CECE = "style=\'color:lime\'"
		};
		_0x1CEEA = "mediumStardustPrism";
		_0x1CC4A += "<div class=\'mobile-style\'>";
		_0x1CC4A += "<img src=\'images/" + _0x1CEEA + ".png\' style=\'float:left;\' class=\'img-100\' />";
		_0x1CC4A += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "MEDIUM";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'color:white;font-size:12pt;\'>1/66,000  <br /><span style=\'color:grey\'><img src=\'images/miningSkill.png\' class=\'img-20\' /> <span " + _0x1CECE + ">" + _0x1C910 + "</span></span>";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1CEEA + "Mined") + "</span>";
		_0x1CC4A += "</span>";
		_0x1CC4A += "</div>";
		_0x1C910 = 50;
		_0x1CECE = "style=\'color:red\'";
		if (getLevel(getItem("miningXp")) >= _0x1C910)
		{
			_0x1CECE = "style=\'color:lime\'"
		};
		_0x1CEEA = "largeStardustPrism";
		_0x1CC4A += "<div class=\'mobile-style\'>";
		_0x1CC4A += "<img src=\'images/" + _0x1CEEA + ".png\' style=\'float:left;\' class=\'img-100\' />";
		_0x1CC4A += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "LARGE";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'color:white;font-size:12pt;\'>1/TBA  <br /><span style=\'color:grey\'><img src=\'images/miningSkill.png\' class=\'img-20\' /> <span " + _0x1CECE + ">" + _0x1C910 + "</span></span>";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1CEEA + "Mined") + "</span>";
		_0x1CC4A += "</span>";
		_0x1CC4A += "</div>";
		_0x1C910 = 80;
		_0x1CECE = "style=\'color:red\'";
		if (getLevel(getItem("miningXp")) >= _0x1C910)
		{
			_0x1CECE = "style=\'color:lime\'"
		};
		_0x1CEEA = "hugeStardustPrism";
		_0x1CC4A += "<div class=\'mobile-style\'>";
		_0x1CC4A += "<img src=\'images/" + _0x1CEEA + ".png\' style=\'float:left;\' class=\'img-100\' />";
		_0x1CC4A += "<span style=\'float:right;color:orange;font-size:18pt;font-weight:bold;text-align:right;\'>" + "HUGE";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'color:white;font-size:12pt;\'>1/TBA  <br /><span style=\'color:grey\'><img src=\'images/miningSkill.png\' class=\'img-20\' /> <span " + _0x1CECE + ">" + _0x1C910 + "</span></span>";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<br />";
		_0x1CC4A += "<span style=\'font-size:12pt;color:yellow\'>Found " + getItem(_0x1CEEA + "Mined") + "</span>";
		_0x1CC4A += "</span>";
		_0x1CC4A += "</div>"
	};
	_0x1CC4A += "</center>";
	_0x1C85A.innerHTML = _0x1CC4A
}

function refreshMonsterHpBar()
{
	var _0x1DDBC = parseInt(getItem("monsterHp") / getItem("monsterMaxHp") * 100);
	if (_0x1DDBC > 100)
	{
		_0x1DDBC = 100
	};
	document.getElementById("monster-inner-hp-bar").style.minWidth = _0x1DDBC + "%"
}
var selectedSeed = "none";

function clicksSeed(_0x1D03A)
{
	if (getItem("farmingXp") == 0)
	{
		confirmDialogue("images/" + _0x1D03A + ".png", "Select a farming patch to plant your seed.", "Close", "", "")
	};
	if (selectedSeed == "none")
	{
		selectedSeed = _0x1D03A;
		document.getElementById("item-box-" + _0x1D03A).style.border = "5px solid orange"
	}
	else
	{
		if (selectedSeed == _0x1D03A)
		{
			selectedSeed = "none";
			resetSeedItemBoxBorders()
		}
		else
		{
			resetSeedItemBoxBorders();
			selectedSeed = _0x1D03A;
			document.getElementById("item-box-" + _0x1D03A).style.border = "5px solid orange"
		}
	}
}

function clicksFarmingPlot(_0x1CF3E)
{
	if (selectedSeed == "none")
	{
		sendBytes("HARVEST=" + _0x1CF3E)
	}
	else
	{
		sendBytes("PLANT=" + selectedSeed + "~" + _0x1CF3E);
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

function freePlotsAmount()
{
	var _0x1D32E = 0;
	for (var _0x1C6B6 = 1; _0x1C6B6 <= 6; _0x1C6B6++)
	{
		if (getItem("plotUnlocked" + _0x1C6B6) == 1 && getItemString("plot" + _0x1C6B6) == "none")
		{
			_0x1D32E++
		}
	};
	return _0x1D32E
}

function resetSeedItemBoxBorders()
{
	for (var _0x1C6B6 = 0; _0x1C6B6 < global_seedMap.length; _0x1C6B6++)
	{
		var _0x1D6E6 = global_seedMap[_0x1C6B6];
		if (document.getElementById("item-box-" + _0x1D6E6.name) != null)
		{
			document.getElementById("item-box-" + _0x1D6E6.name).style.border = "1px solid grey"
		}
	}
}

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

function openSwapFishingToolsDialogue()
{
	openDialogue("dialogue-swap-fishingTool-do")
}

function eatFoodDialogue(_0x1D1A6)
{
	document.getElementById("dialogue-consumeFood-title").innerHTML = getItemName(_0x1D1A6.cookedFoodName).toUpperCase() + "<br /><span style=\'font-size:12pt;color:grey\'><img src=\'images/energy.png\' class=\'img-30\' /> " + formatNumber(_0x1D1A6.energy) + " energy each.</span>";
	document.getElementById("dialogue-consumeFood-hidden").value = _0x1D1A6.cookedFoodName;
	openDialogue("dialogue-consumeFood");
	document.getElementById("dialogue-consumeFood-input").focus();
	document.getElementById("dialogue-consumeFood-input").value = 1
}

function openInputDialogue(_0x1C8E6, _0x1DBEE, _0x1DBE0, _0x1DBB6, _0x1DA9E, _0x1DAAC, _0x1CE0A, _0x1CE18, _0x1DBD2, _0x1DBA8, _0x1C7CE)
{
	var _0x1DBC4 = "";
	if (_0x1C7CE != "")
	{
		_0x1DBC4 = "<span style=\'color:grey;cursor:pointer;\' onclick=\'this.innerHTML = \"<br /><br />" + _0x1C7CE + "<br /><br />\"\'>(more info)</span>"
	};
	var _0x1CC4A = "";
	_0x1CC4A += "<div class=\'dialogue\' id=\'wild-dialogue\' style=\'display:none;\'>";
	_0x1CC4A += "<center>";
	_0x1CC4A += "<h1>" + _0x1C8E6 + "</h1>";
	_0x1CC4A += "<div>" + "<img src=\'" + _0x1DBEE + "\' class=\'img-150\' />" + "</div>";
	_0x1CC4A += "<br /><br />";
	_0x1CC4A += "<div style=\'display:block\' class=\'input-multi-values-div\'>";
	_0x1CC4A += "<table width=\'100%\'>";
	_0x1CC4A += "<tr>";
	if (_0x1DBE0 == "ironBucket")
	{
		_0x1CC4A += "<td colspan=\'4\'>How many " + getItemName("silverBuckets").toLowerCase() + "? " + _0x1DBC4 + "<input type=\'text\' value=\'" + _0x1DBB6 + "\' id=\'dialogue-wild-input\' /></td>"
	}
	else
	{
		_0x1CC4A += "<td colspan=\'4\'>How many " + getItemName(_0x1DBE0).toLowerCase() + "? " + _0x1DBC4 + "<input type=\'text\' value=\'" + _0x1DBB6 + "\' id=\'dialogue-wild-input\' /></td>"
	};
	_0x1CC4A += "</tr>";
	_0x1CC4A += "<tr>";
	_0x1CC4A += "<td width=\'25%\'><div id=\'dialogue-wild-input-button-1\' class=\'input-button-values\'>ONE</div></td><td width=\'25%\'><div id=\'dialogue-wild-input-button-2\' class=\'input-button-values\'>25%</div></td><td width=\'25%\'><div id=\'dialogue-wild-input-button-3\' class=\'input-button-values\'>50%</div></td><td width=\'25%\'><div id=\'dialogue-wild-input-button-4\' class=\'input-button-values\'>ALL</div></td>";
	_0x1CC4A += "</tr>";
	_0x1CC4A += "</table>";
	_0x1CC4A += "</div>";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<div id=\'dialogue-wild-htmlboxes-area\'></div>";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<div style=\'background-color:#b3ffff\' id=\'dialogue-wild-input-confirm\' class=\'dialogue-button\'>" + _0x1DBD2 + "</div><br />";
	_0x1CC4A += "<div onclick=\'closeDialogue(\"wild-dialogue\")\' class=\'dialogue-button\'>Close</div><br />";
	_0x1CC4A += "</center>";
	_0x1CC4A += "</div>";
	document.getElementById("dynamic-dialogue-area").innerHTML = _0x1CC4A;
	if (_0x1DA9E.length > 0)
	{
		var _0x1DAE4 = (_0x1DA9E[0] == "xp_icon")
	};
	document.getElementById("dialogue-wild-input-confirm").onclick = function ()
	{
		sendBytes(_0x1DBA8 + "=" + _0x1DBE0 + "~" + convertNumberWithLetrtsKMBToNumber(document.getElementById("dialogue-wild-input").value));
		closeDialogue("wild-dialogue")
	};
	document.getElementById("dialogue-wild-input-button-1").onclick = function ()
	{
		changeValueOfInput(_0x1CE0A, _0x1CE18, "dialogue-wild-input", "ONE");
		onKeyUpWildInputDialogue(_0x1DA9E, _0x1DAAC, _0x1CE0A, _0x1CE18, convertNumberWithLetrtsKMBToNumber(document.getElementById("dialogue-wild-input").value))
	};
	document.getElementById("dialogue-wild-input-button-2").onclick = function ()
	{
		changeValueOfInput(_0x1CE0A, _0x1CE18, "dialogue-wild-input", "25%");
		onKeyUpWildInputDialogue(_0x1DA9E, _0x1DAAC, _0x1CE0A, _0x1CE18, convertNumberWithLetrtsKMBToNumber(document.getElementById("dialogue-wild-input").value))
	};
	document.getElementById("dialogue-wild-input-button-3").onclick = function ()
	{
		changeValueOfInput(_0x1CE0A, _0x1CE18, "dialogue-wild-input", "50%");
		onKeyUpWildInputDialogue(_0x1DA9E, _0x1DAAC, _0x1CE0A, _0x1CE18, convertNumberWithLetrtsKMBToNumber(document.getElementById("dialogue-wild-input").value))
	};
	document.getElementById("dialogue-wild-input-button-4").onclick = function ()
	{
		changeValueOfInput(_0x1CE0A, _0x1CE18, "dialogue-wild-input", "ALL");
		onKeyUpWildInputDialogue(_0x1DA9E, _0x1DAAC, _0x1CE0A, _0x1CE18, convertNumberWithLetrtsKMBToNumber(document.getElementById("dialogue-wild-input").value))
	};
	document.getElementById("dialogue-wild-input").onkeyup = function ()
	{
		onKeyUpWildInputDialogue(_0x1DA9E, _0x1DAAC, _0x1CE0A, _0x1CE18, convertNumberWithLetrtsKMBToNumber(document.getElementById("dialogue-wild-input").value))
	};
	openDialogue("wild-dialogue");
	onKeyUpWildInputDialogue(_0x1DA9E, _0x1DAAC, _0x1CE0A, _0x1CE18, 1)
}

function onKeyUpWildInputDialogue(_0x1DA9E, _0x1DAAC, _0x1CE0A, _0x1CE18, _0x1DABA)
{
	var _0x1DAE4 = (_0x1DA9E[0] == "xp_icon");
	document.getElementById("dialogue-wild-htmlboxes-area");
	var _0x1CC4A = "";
	for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1DAAC.length; _0x1C6B6++)
	{
		var _0x1D128 = "html-box-check-or-check";
		var _0x1DAC8 = _0x1DAAC[_0x1C6B6] * _0x1DABA;
		var _0x1DAD6 = formatNumber(_0x1DAC8);
		if (_0x1DAC8 == 0)
		{
			_0x1DAD6 = "???"
		};
		if (_0x1DA9E[_0x1C6B6] == "magicXp")
		{
			_0x1CC4A += "<div style=\'border:1px solid purple;display:inline-block;background-color:#ff99cc;font-size:16pt\' class=" + _0x1D128 + ">";
			_0x1CC4A += "<img src=\'images/" + "magicSkill" + ".png\' class=\'img-50\' /> +" + formatNumber(_0x1DAD6) + " XP";
			_0x1CC4A += "</div>"
		}
		else
		{
			_0x1CC4A += "<div class=" + _0x1D128 + ">";
			_0x1CC4A += "<img src=\'images/" + _0x1DA9E[_0x1C6B6] + ".png\' class=\'img-50\' /> +" + formatNumber(_0x1DAD6);
			_0x1CC4A += "</div>"
		}
	};
	for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1CE0A.length; _0x1C6B6++)
	{
		var _0x1D128 = "html-box-check-or-x";
		var _0x1D144 = "<img src=\'images/x.png\' class=\'img-20\' />";
		var _0x1D152 = _0x1CE18[_0x1C6B6] * _0x1DABA;
		if (_0x1DAE4 && _0x1CE0A[_0x1C6B6] == "stardust")
		{
			_0x1D152 = _0x1CE18[_0x1C6B6] * _0x1DAAC[0] * _0x1DABA
		};
		if (getItem(_0x1CE0A[_0x1C6B6]) >= _0x1D152)
		{
			_0x1D144 = "<img src=\'images/check.png\' class=\'img-20\' />";
			_0x1D128 = "html-box-check-or-check"
		};
		_0x1CC4A += "<div class=" + _0x1D128 + ">";
		_0x1CC4A += "<img src=\'images/" + _0x1CE0A[_0x1C6B6] + ".png\' class=\'img-50\' /> " + formatNumber(_0x1D152) + " " + _0x1D144;
		_0x1CC4A += "</div>"
	};
	document.getElementById("dialogue-wild-htmlboxes-area").innerHTML = _0x1CC4A
}

function bonemealBinDialgue()
{
	var data = getBonemealTypeData();
	var _0x1CC58 = data[2];
	var _0x1CC3C = data[3];
	if (_0x1CC3C == "INF")
	{
		_0x1CC3C = "&#8734;"
	};
	var _0x1CC66 = "<br /><br /><span style=\'color:grey;font-size:12pt;\'> <img src=\'images/" + _0x1CC58 + ".png\' class=\'img-20\' /> Upgrade your bonemeal bin to increase its capacity.</span>";
	if (_0x1CC58 == "none")
	{
		_0x1CC66 = ""
	};
	var _0x1CC4A = "<b style=\'font-size:16pt;\'><img src=\'images/bonemeal_dark.png\' class=\'img-60\' /> Current Bonemeal: " + getItem("bonemeal") + "/" + _0x1CC3C + " <img src=\'images/bonemeal_dark.png\' class=\'img-60\' /></b>" + _0x1CC66;
	if (_0x1CC58 == "none")
	{
		confirmDialogue("images/" + data[0] + ".png", _0x1CC4A, "Close", "", "")
	}
	else
	{
		confirmDialogue("images/" + data[0] + ".png", _0x1CC4A, "Socket Gem", "Close", "SOCKET=bonemealBin")
	}
}

function changeValueOfInput(_0x1CE0A, _0x1CE18, _0x1CDEE, _0x1CDE0)
{
	var _0x1CDC4 = 0;
	var _0x1CDFC = [];
	for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1CE0A.length; _0x1C6B6++)
	{
		_0x1CDFC[_0x1C6B6] = parseInt(getItem(_0x1CE0A[_0x1C6B6]) / _0x1CE18[_0x1C6B6])
	};
	_0x1CDC4 = Math.min.apply(Math, _0x1CDFC);
	switch (_0x1CDE0)
	{
	case "ONE":
		document.getElementById(_0x1CDEE).value = 1;
		break;
	case "25%":
		document.getElementById(_0x1CDEE).value = parseInt(_0x1CDC4 * 0.25);
		break;
	case "50%":
		document.getElementById(_0x1CDEE).value = parseInt(_0x1CDC4 * 0.50);
		break;
	case "ALL":
		document.getElementById(_0x1CDEE).value = _0x1CDC4;
		break
	}
}

function scrollText(_0x1C77A, _0x1E1E4, _0x1E200)
{
	var _0x1C814 = "";
	if (_0x1C77A != "none")
	{
		_0x1C814 = "<img src=\'" + _0x1C77A + "\' class=\'img-70\' /> "
	};
	var _0x1E1F2 = $("<div class=\"scroller\" style=\"color:" + _0x1E1E4 + "\">" + _0x1C814 + _0x1E200 + "</div>").appendTo("body");
	$(_0x1E1F2).css(
	{
		position: "absolute"
		, left: mouseX - 50
		, top: mouseY - 50
	});
	$(_0x1E1F2).animate(
	{
		top: "-=50px"
	}, function ()
	{
		$(_0x1E1F2).fadeOut(1000, function ()
		{
			$(this).remove()
		})
	})
}
var changeTooltipPosition = function (_0x1C6E0)
{
	var _0x1C6EE = _0x1C6E0.pageX - 8;
	var _0x1C6FC = _0x1C6E0.pageY + 8;
	$("div.tooltip").css(
	{
		top: _0x1C6FC
		, left: _0x1C6EE
	})
};
var showTooltip = function (_0x1C6E0)
{
	if (document.getElementById(this.getAttribute("data-tooltip-id")) == null)
	{
		return
	};
	$("div.tooltip").remove();
	$("<div class=\"tooltip\">" + document.getElementById(this.getAttribute("data-tooltip-id")).innerHTML + "</div>").appendTo("body");
	changeTooltipPosition(_0x1C6E0)
};
var hideTooltip = function ()
{
	$("div.tooltip").remove()
};

function refreshTooltips()
{
	var _0x1E0E8 = "[data-tooltip-id]";
	var _0x1E0DA = $(_0x1E0E8);
	for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1E0DA.length; _0x1C6B6++)
	{
		$(_0x1E0DA[_0x1C6B6]).bind(
		{
			mousemove: changeTooltipPosition
			, mouseenter: showTooltip
			, mouseleave: hideTooltip
		})
	}
}

function initializeTooltips()
{
	var _0x1C8F4 = "";
	document.getElementById("dynamic-tooltips-area").innerHTML = "";
	for (var _0x1C6B6 = 0; _0x1C6B6 < global_foodMap.length; _0x1C6B6++)
	{
		var _0x1D1A6 = global_foodMap[_0x1C6B6];
		if (_0x1D1A6.rawFoodName != "none")
		{
			_0x1C8F4 += "<div id=\'tooltip-" + _0x1D1A6.rawFoodName + "\' style=\'display:none;\'>";
			_0x1C8F4 += "<h2>" + getItemName(_0x1D1A6.rawFoodName) + "</h2>";
			_0x1C8F4 += "<img src=\'images/heat.png\' class=\'img-30\' /> " + formatNumber(_0x1D1A6.heat) + " heat";
			_0x1C8F4 += "<br />";
			_0x1C8F4 += "<img src=\'images/energy.png\' class=\'img-30\' /> " + formatNumber(_0x1D1A6.energy) + " energy";
			_0x1C8F4 += "<br />";
			_0x1C8F4 += "<img src=\'images/cookingSkill.png\' class=\'img-30\' /> Level " + _0x1D1A6.cookLevel + " <span style=\'color:grey\'>(" + formatNumber(_0x1D1A6.xp) + " XP)</span>";
			_0x1C8F4 += "<br />";
			_0x1C8F4 += "<hr class=\'hr-thin\' />";
			_0x1C8F4 += _0x1D1A6.desc;
			_0x1C8F4 += "</div>"
		};
		_0x1C8F4 += "<div id=\'tooltip-" + _0x1D1A6.cookedFoodName + "\' style=\'display:none;\'>";
		_0x1C8F4 += "<h2>" + getItemName(_0x1D1A6.cookedFoodName) + "</h2>";
		_0x1C8F4 += "<img src=\'images/energy.png\' class=\'img-30\' /> " + formatNumber(_0x1D1A6.energy) + " energy";
		_0x1C8F4 += "<br />";
		_0x1C8F4 += "<hr class=\'hr-thin\' />";
		_0x1C8F4 += _0x1D1A6.desc;
		_0x1C8F4 += "</div>"
	};
	for (var _0x1C6B6 = 0; _0x1C6B6 < global_seedMap.length; _0x1C6B6++)
	{
		var _0x1D6E6 = global_seedMap[_0x1C6B6];
		_0x1C8F4 += "<div id=\'tooltip-" + _0x1D6E6.name + "\' style=\'display:none;\'>";
		_0x1C8F4 += "<h2>" + getItemName(_0x1D6E6.name) + "</h2>";
		_0x1C8F4 += "<img style=\'margin:3px;\' src=\'images/farmingSkill.png\' class=\'img-30\' /> Level " + formatNumber(_0x1D6E6.level) + " <span style=\'color:grey\'>(" + formatNumber(_0x1D6E6.xp) + " xp)</span>";
		_0x1C8F4 += "<br />";
		var _0x1D622 = "";
		if (_0x1D6E6.stopsDieingAtLevel == 0)
		{
			_0x1C8F4 += "<img style=\'margin:3px;\' src=\'images/" + _0x1D6E6.name.substr(0, _0x1D6E6.name.length - 5) + ".png\' class=\'img-30\' /> Cannot die <img src=\'images/check.png\' class=\'img-15\' />"
		}
		else
		{
			if (getLevel(getItem("farmingXp")) >= _0x1D6E6.stopsDieingAtLevel)
			{
				_0x1C8F4 += "<img style=\'margin:3px;\' src=\'images/" + _0x1D6E6.name.substr(0, _0x1D6E6.name.length - 5) + ".png\' class=\'img-30\' /> Stops dying level: " + formatNumber(_0x1D6E6.stopsDieingAtLevel) + " <img src=\'images/check.png\' class=\'img-15\' />"
			}
			else
			{
				_0x1C8F4 += "<img style=\'margin:3px;\' src=\'images/deadLeaf.png\' class=\'img-30\' /> Stops dying level: " + formatNumber(_0x1D6E6.stopsDieingAtLevel) + " <img src=\'images/x.png\' class=\'img-15\' />"
			}
		};
		if (parseInt(_0x1D6E6.bonemeal) > 0)
		{
			if (getItem("bonemeal") >= parseInt(_0x1D6E6.bonemeal))
			{
				_0x1C8F4 += "<br />";
				_0x1C8F4 += "<img style=\'margin:3px;\' src=\'images/bonemeal.png\' class=\'img-30\' /> Bonemeal: " + formatNumber(parseInt(_0x1D6E6.bonemeal)) + " <img src=\'images/check.png\' class=\'img-15\' />"
			}
			else
			{
				_0x1C8F4 += "<br />";
				_0x1C8F4 += "<img style=\'margin:3px;\' src=\'images/bonemeal.png\' class=\'img-30\' /> Bonemeal: " + formatNumber(parseInt(_0x1D6E6.bonemeal)) + " <img src=\'images/x.png\' class=\'img-15\' />"
			}
		};
		_0x1C8F4 += "<br />";
		_0x1C8F4 += "<img style=\'margin:3px;\' src=\'images/hourglass_grey.png\' class=\'img-30\' />" + formatTime(_0x1D6E6.timer);
		_0x1C8F4 += "<br />";
		_0x1C8F4 += "<hr class=\'hr-thin\' />";
		_0x1C8F4 += _0x1D6E6.desc;
		_0x1C8F4 += "</div>"
	};
	for (var _0x1C6B6 = 0; _0x1C6B6 < global_machineryMap.length; _0x1C6B6++)
	{
		var _0x1D6AE = global_machineryMap[_0x1C6B6];
		_0x1C8F4 += "<div id=\'tooltip-" + _0x1D6AE.machineryName + "\' style=\'display:none;\'>";
		_0x1C8F4 += "<div style=\'font-size:16pt;font-weight:bold;margin-top:10px;\'>" + getItemName(_0x1D6AE.machineryName) + "</div>";
		if (_0x1D6AE.oil > 0)
		{
			_0x1C8F4 += "<br /><img src=\'images/oil.png\' class=\'img-20\' /> " + _0x1D6AE.oil
		};
		_0x1C8F4 += "<br />";
		_0x1C8F4 += "<hr class=\'hr-thin\' />";
		var _0x1CEEA = "";
		var _0x1D630 = "";
		var _0x1D63E = "";
		_0x1CEEA = "stone";
		_0x1D630 = _0x1D6AE.stoneChance;
		_0x1D63E = 86400 / _0x1D630;
		if (_0x1D63E % 1 != 0)
		{
			_0x1D63E = _0x1D63E.toFixed(2)
		};
		if (_0x1D63E >= 10)
		{
			_0x1D63E = formatNumber(parseInt(_0x1D63E))
		};
		if (getItem(_0x1CEEA + "Total") > 0)
		{
			_0x1C8F4 += "<img src=\'images/" + _0x1CEEA + ".png\' class=\'img-20\' /> <b>" + capitalizeFirstLetter(_0x1CEEA) + ": </b> " + (1 + "/" + formatNumber(_0x1D630) + "<span style=\'color:grey\'> (~" + _0x1D63E + " per day)</span>")
		}
		else
		{
			_0x1C8F4 += "<img src=\'images/ore_black.png\' class=\'img-20\' /> <b>???</b><br />"
		};
		_0x1C8F4 += "<br />";
		_0x1CEEA = "copper";
		_0x1D630 = _0x1D6AE.copperChance;
		_0x1D63E = 86400 / _0x1D630;
		if (_0x1D63E % 1 != 0)
		{
			_0x1D63E = _0x1D63E.toFixed(2)
		};
		if (_0x1D63E >= 10)
		{
			_0x1D63E = formatNumber(parseInt(_0x1D63E))
		};
		if (getItem(_0x1CEEA + "Total") > 0)
		{
			_0x1C8F4 += "<img src=\'images/" + _0x1CEEA + ".png\' class=\'img-20\' /> <b>" + capitalizeFirstLetter(_0x1CEEA) + ": </b> " + (1 + "/" + formatNumber(_0x1D630) + "<span style=\'color:grey\'> (~" + _0x1D63E + " per day)</span>")
		}
		else
		{
			_0x1C8F4 += "<img src=\'images/ore_black.png\' class=\'img-20\' /> <b>???</b>"
		};
		_0x1C8F4 += "<br />";
		_0x1CEEA = "iron";
		_0x1D630 = _0x1D6AE.ironChance;
		_0x1D63E = 86400 / _0x1D630;
		if (_0x1D63E % 1 != 0)
		{
			_0x1D63E = _0x1D63E.toFixed(2)
		};
		if (_0x1D63E >= 10)
		{
			_0x1D63E = formatNumber(parseInt(_0x1D63E))
		};
		if (getItem(_0x1CEEA + "Total") > 0)
		{
			_0x1C8F4 += "<img src=\'images/" + _0x1CEEA + ".png\' class=\'img-20\' /> <b>" + capitalizeFirstLetter(_0x1CEEA) + ": </b> " + (1 + "/" + formatNumber(_0x1D630) + "<span style=\'color:grey\'> (~" + _0x1D63E + " per day)</span>")
		}
		else
		{
			_0x1C8F4 += "<img src=\'images/ore_black.png\' class=\'img-20\' /> <b>???</b>"
		};
		_0x1C8F4 += "<br />";
		_0x1CEEA = "silver";
		_0x1D630 = _0x1D6AE.silverChance;
		_0x1D63E = 86400 / _0x1D630;
		if (_0x1D63E % 1 != 0)
		{
			_0x1D63E = _0x1D63E.toFixed(2)
		};
		if (_0x1D63E >= 10)
		{
			_0x1D63E = formatNumber(parseInt(_0x1D63E))
		};
		if (getItem(_0x1CEEA + "Total") > 0)
		{
			_0x1C8F4 += "<img src=\'images/" + _0x1CEEA + ".png\' class=\'img-20\' /> <b>" + capitalizeFirstLetter(_0x1CEEA) + ": </b> " + (1 + "/" + formatNumber(_0x1D630) + "<span style=\'color:grey\'> (~" + _0x1D63E + " per day)</span>")
		}
		else
		{
			_0x1C8F4 += "<img src=\'images/ore_black.png\' class=\'img-20\' /> <b>???</b>"
		};
		_0x1C8F4 += "<br />";
		_0x1CEEA = "gold";
		_0x1D630 = _0x1D6AE.goldChance;
		_0x1D63E = 86400 / _0x1D630;
		if (_0x1D63E % 1 != 0)
		{
			_0x1D63E = _0x1D63E.toFixed(2)
		};
		if (_0x1D63E >= 10)
		{
			_0x1D63E = formatNumber(parseInt(_0x1D63E))
		};
		if (getItem(_0x1CEEA + "Total") > 0)
		{
			_0x1C8F4 += "<img src=\'images/" + _0x1CEEA + ".png\' class=\'img-20\' /> <b>" + capitalizeFirstLetter(_0x1CEEA) + ": </b> " + (1 + "/" + formatNumber(_0x1D630) + "<span style=\'color:grey\'> (~" + _0x1D63E + " per day)</span>")
		}
		else
		{
			_0x1C8F4 += "<img src=\'images/ore_black.png\' class=\'img-20\' /> <b>???</b>"
		};
		_0x1C8F4 += "<br />";
		_0x1CEEA = "promethium";
		_0x1D630 = _0x1D6AE.promethiumChance;
		_0x1D63E = 86400 / _0x1D630;
		if (_0x1D63E % 1 != 0)
		{
			_0x1D63E = _0x1D63E.toFixed(2)
		};
		if (_0x1D63E >= 10)
		{
			_0x1D63E = formatNumber(parseInt(_0x1D63E))
		};
		if (getItem(_0x1CEEA + "Total") > 0)
		{
			_0x1C8F4 += "<img src=\'images/" + _0x1CEEA + ".png\' class=\'img-20\' /> <b>" + capitalizeFirstLetter(_0x1CEEA) + ": </b> " + (1 + "/" + formatNumber(_0x1D630) + "<span style=\'color:grey\'> (~" + _0x1D63E + " per day)</span>")
		}
		else
		{
			_0x1C8F4 += "<img src=\'images/ore_black.png\' class=\'img-20\' /> <b>???</b>"
		};
		_0x1C8F4 += "<br />";
		_0x1C8F4 += "</div>"
	};
	for (var _0x1C6B6 = 0; _0x1C6B6 < global_equipmentMap.length; _0x1C6B6++)
	{
		var _0x1D676 = global_equipmentMap[_0x1C6B6];
		_0x1C8F4 += "<div id=\'tooltip-" + _0x1D676.name + "\' style=\'display:none;\'>";
		_0x1C8F4 += "<h2>" + getItemName(_0x1D676.name) + "</h2>";
		_0x1C8F4 += "<span style=\'font-size:14pt\'>";
		if (_0x1D676.type != "none")
		{
			_0x1C8F4 += "<img src=\'images/" + _0x1D676.type + ".png\' class=\'img-20\' /> " + getItemName(_0x1D676.type) + " Attack";
			_0x1C8F4 += "<br />";
			_0x1C8F4 += "<br />"
		};
		if (_0x1D676.attack != "0")
		{
			_0x1C8F4 += "<img src=\'images/attack_black.png\' class=\'img-30\' /> " + (_0x1D676.attack);
			_0x1C8F4 += "&nbsp;";
			_0x1C8F4 += "&nbsp;";
			_0x1C8F4 += "&nbsp;";
			_0x1C8F4 += "&nbsp;"
		};
		if (_0x1D676.accuracy != "0")
		{
			_0x1C8F4 += "<img src=\'images/accuracy_black.png\' class=\'img-30\' /> " + (_0x1D676.accuracy);
			_0x1C8F4 += "&nbsp;";
			_0x1C8F4 += "&nbsp;";
			_0x1C8F4 += "&nbsp;";
			_0x1C8F4 += "&nbsp;"
		};
		if (_0x1D676.speed != "0")
		{
			_0x1C8F4 += "<img src=\'images/speed_black.png\' class=\'img-30\' /> " + (_0x1D676.speed);
			_0x1C8F4 += "&nbsp;";
			_0x1C8F4 += "&nbsp;";
			_0x1C8F4 += "&nbsp;";
			_0x1C8F4 += "&nbsp;"
		};
		if (_0x1D676.defence != "0")
		{
			_0x1C8F4 += "<img src=\'images/defence_black.png\' class=\'img-30\' /> " + (_0x1D676.defence);
			_0x1C8F4 += "&nbsp;";
			_0x1C8F4 += "&nbsp;";
			_0x1C8F4 += "&nbsp;";
			_0x1C8F4 += "&nbsp;"
		};
		if (_0x1D676.magic != "0")
		{
			_0x1C8F4 += "<img src=\'images/magic_black.png\' class=\'img-30\' /> " + (_0x1D676.magic);
			_0x1C8F4 += "&nbsp;";
			_0x1C8F4 += "&nbsp;";
			_0x1C8F4 += "&nbsp;";
			_0x1C8F4 += "&nbsp;"
		};
		_0x1C8F4 += "</span>";
		_0x1C8F4 += "<br />";
		_0x1C8F4 += "<hr class=\'hr-thin\' />";
		_0x1C8F4 += _0x1D676.desc;
		_0x1C8F4 += "</div>"
	};
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-feather", "feather", "Feathers", "Can be used to make arrows with the crafting skill.<br /><br /><img src=\'images/craftingSkill.png\' class=\'img-30\' /> <b>Click to craft arrows.</b>");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-stardustPickaxe", "stardustPickaxe", "Stardust Pickaxe", "Can be used to convert ores into <img src=\'images/miningSkill.png\' class=\'img-20\' /> <span style=\'color:#804000\'>mining</span> XP at the cost of <img src=\'images/stardustIcon.png\' class=\'img-20\' /> <span style=\'color:#804000\'>stardust</span>.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-stardustHammer", "stardustHammer", "Stardust Hammer", "Can be used to convert bars into <img src=\'images/craftingSkill.png\' class=\'img-20\' /> <span style=\'color:#804000\'>crafting</span> XP at the cost of <img src=\'images/stardustIcon.png\' class=\'img-20\' /> <span style=\'color:#804000\'>stardust</span>.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-furnace", "stoneFurnace", "Furnace", "<b>Capacity:</b> " + "<item-furnaceCapacity>0</item-furnaceCapacity>" + "<br /><br /><img src=\'images/bronzeBars.png\' class=\'img-20\' /> <item-copperSmeltedTotal type=\'number\'>0</item-copperSmeltedTotal><br /><img src=\'images/ironBars.png\' class=\'img-20\' /> <item-ironSmeltedTotal type=\'number\'>0</item-ironSmeltedTotal><br /><img src=\'images/silverBars.png\' class=\'img-20\' /> <item-silverSmeltedTotal type=\'number\'>0</item-silverSmeltedTotal><br /><img src=\'images/goldBars.png\' class=\'img-20\' /> <item-goldSmeltedTotal type=\'number\'>0</item-goldSmeltedTotal><br /><img src=\'images/promethiumBars.png\' class=\'img-20\' /> <item-promethiumSmeltedTotal type=\'number\'>0</item-promethiumSmeltedTotal>");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-stone", "stone", "Stone", "A common ore.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-copper", "copper", "Copper", "Can be smelted into <img src=\'images/bronzeBars.png\' class=\'img-20\' /> bronze bars.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-iron", "iron", "Iron", "Can be smelted into <img src=\'images/ironBars.png\' class=\'img-20\' />  iron bars.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-silver", "silver", "Silver", "Can be smelted into <img src=\'images/silverBars.png\' class=\'img-20\' />  silver bars.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-gold", "gold", "Gold", "Can be smelted into <img src=\'images/goldBars.png\' class=\'img-20\' />  gold bars.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-promethium", "promethium", "Promethium", "Can be smelted into <img src=\'images/promethiumBars.png\' class=\'img-20\' />  promethium bars.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-pearl", "pearl", "Pearl", "Found inside of an oyster.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-oyster", "oyster", "Oyster", "Maybe it has a pearl inside.  I can always sell the oyster as a whole if I don\'t want to gamble.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-bronzeBars", "bronzeBars", "Bronze Bar", "A bar made of copper.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-ironBars", "ironBars", "Iron Bar", "A bar made of iron.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-silverBars", "silverBars", "Silver Bar", "A bar made of silver.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-goldBars", "goldBars", "Gold Bar", "A bar made of gold.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-promethiumBars", "promethiumBars", "Promethium Bar", "A bar made of promethium.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-snakeskin", "snakeskin", "Snakeskin", "<img src=\'images/craftingSkill.png\' class=\'img-20\' /> Click to craft.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-bearFur", "bearFur", "Bear Fur", "<img src=\'images/craftingSkill.png\' class=\'img-20\' /> Click to craft.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-polarBearFur", "polarBearFur", "Polar Bear Fur", "<img src=\'images/craftingSkill.png\' class=\'img-20\' /> Click to craft.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-bluePrints", "bluePrints", "Blueprints", "Click to follow and craft.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-strangeLeaf", "strangeLeaf", "Strange Leaf", "A rare secondary brewing ingredient.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-ironBucket", "ironBucket", "Silver Bucket", "Killing a lava type monster will let you collect a bucket of lava.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-donorWoodcuttingPatch", "", "Donor Perk", "Unlocks an extra woodcutting patch.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-donorFarmingPlot", "", "Donor Perk", "Unlocks an extra farming patch.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-donorMoreOfflineTime", "", "Donor Perk", "Grants you 12h of offline time instead of 8h.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-donorBonusXp", "", "Donor Perk", "Every source of XP is increased by 10%.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-stardustBox1", "", "Stardust Box", "<img src=\'images/stardustIcon.png\' class=\'img-20\' /> 0 - 2000 Stardust.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-stardustBox2", "", "Stardust Box", "<img src=\'images/stardustIcon.png\' class=\'img-20\' /> 0 - 15000 Stardust.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-sapphireGlassHand", "", "Glass Hand", "<img src=\'images/museum.png\' class=\'img-20\' /> Shiny from every angle!");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-emeraldGlassHand", "", "Glass Hand", "<img src=\'images/museum.png\' class=\'img-20\' /> Very shiny from every angle!");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-brokenStinger", "", "Broken Stinger", "<img src=\'images/museum.png\' class=\'img-20\' /> Normally, I would be able to use this as a weapon.  Too bad it\'s broken.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-snakeBones", "", "Snake Bones", "<img src=\'images/museum.png\' class=\'img-20\' /> The remains of a giant snake who roamed the forest.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-skeletonSkull", "", "Skull", "<img src=\'images/museum.png\' class=\'img-20\' /> Obtained from a skeleton in the caves.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-ghostClothes", "", "Ghost Clothes", "<img src=\'images/museum.png\' class=\'img-20\' /> This belonged to the roaming ghost around the farm lands.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-cockroach", "", "Giant Cockroach", "<img src=\'images/museum.png\' class=\'img-20\' /> Crunch.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-goldenCockroach", "", "Golden Cockroach", "<img src=\'images/museum.png\' class=\'img-20\' /> Perhaps this can be smelted into a gold bar.  Wait no, that\'s cruel.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-yetiLeftFoot", "", "Yeti\'s Left Foot", "<img src=\'images/museum.png\' class=\'img-20\' /> It\'s still cold.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-yetiRightFoot", "", "Yeti\'s Right Foot", "<img src=\'images/museum.png\' class=\'img-20\' /> Yep, still cold.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-smallSeaShell", "", "Small Shell", "<img src=\'images/museum.png\' class=\'img-20\' /> Found on the ocean floors.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-mediumSeaShell", "", "Medium Shell", "<img src=\'images/museum.png\' class=\'img-20\' /> Found on the ocean floors.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-largeSeaShell", "", "Large Shell", "<img src=\'images/museum.png\' class=\'img-20\' /> Found on the ocean floors.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-mould", "craftingMould", "Crafting Mould", "Can be used to craft a specific item.<br /><br /><i>Click to operate</i>");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-carePackage", "carePackage", "Care Package", "I can buy one of these everytime I upgrade the shop!");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-gem", "gem", "Gem", "I can use these to socket tools granting them more power.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-smallManaStar", "", "Mana Star <span style=\'color:grey\'>(Small)</span>", "<img src=\'images/largeManaStar.png\' class=\'img-30\' /> Permanently increases mana by 1.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-mediumManaStar", "", "Mana Star <span style=\'color:grey\'>(Medium)</span>", "<img src=\'images/largeManaStar.png\' class=\'img-30\' /> Permanently increases mana by 2.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-largeManaStar", "", "Mana Star <span style=\'color:grey\'>(Large)</span>", "<img src=\'images/largeManaStar.png\' class=\'img-30\' /> Permanently increases mana by 3.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-hugeManaStar", "", "Mana Star <span style=\'color:grey\'>(Huge)</span>", "<img src=\'images/largeManaStar.png\' class=\'img-30\' />  Permanently increases mana by 5.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-donorCoins", "", "Tradable Donor Coins", "Donor coins may be used to buy temporary buffs that last for 30 days.<br /><br />These are currently tradable on the market, to use them in the donor shop; you must first bind them to your account.<br /><br /><span style=\'color:green\'>Click to bind coins to your account</span>");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-colorCrystal", "useless", "Sky Crystal", "It seems to be attracted to the dark crystal.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-shovel", "useless", "Shovel", "Slowly collects sand over time.<br /><br /><b>Found: </b><img src=\'images/sand.png\' class=\'img-20\' /> " + getItem("sandShovelTotal") + "<hr class=\'hr-thin\' />" + (1 + "/" + formatNumber(4000) + "<span style=\'color:grey\'> (~" + 21 + " per day)</span>"));
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-sapphireShovel", "useless", "Shovel", "Slowly collects sand over time.<br /><br /><b>Found: </b><img src=\'images/sand.png\' class=\'img-20\' /> " + getItem("sandShovelTotal") + "<hr class=\'hr-thin\' />" + (1 + "/" + formatNumber(3500) + "<span style=\'color:grey\'> (~" + 24 + " per day)</span>"));
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-emeraldShovel", "useless", "Shovel", "Slowly collects sand over time.<br /><br /><b>Found: </b><img src=\'images/sand.png\' class=\'img-20\' /> " + getItem("sandShovelTotal") + "<hr class=\'hr-thin\' />" + (1 + "/" + formatNumber(3000) + "<span style=\'color:grey\'> (~" + 28 + " per day)</span>"));
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-rubyShovel", "useless", "Shovel", "Slowly collects sand over time.<br /><br /><b>Found: </b><img src=\'images/sand.png\' class=\'img-20\' /> " + getItem("sandShovelTotal") + "<hr class=\'hr-thin\' />" + (1 + "/" + formatNumber(2500) + "<span style=\'color:grey\'> (~" + 34 + " per day)</span>"));
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-diamondShovel", "useless", "Shovel", "Slowly collects sand over time.<br /><br /><b>Found: </b><img src=\'images/sand.png\' class=\'img-20\' /> " + getItem("sandShovelTotal") + "<hr class=\'hr-thin\' />" + (1 + "/" + formatNumber(2000) + "<span style=\'color:grey\'> (~" + 43 + " per day)</span>"));
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-logs", "logs", "Logs", "Obtained from cutting a tree.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-oakLogs", "oakLogs", "Oak Logs", "Obtained from cutting a specific tree.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-willowLogs", "willowLogs", "Willow Logs", "Obtained from cutting a specific tree.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-mapleLogs", "mapleLogs", "Maple Logs", "Obtained from cutting a specific tree.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-bambooLogs", "bambooLogs", "Bamboo Logs", "Obtained from cutting a specific tree.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-lavaLogs", "lavaLogs", "Lava Logs", "Obtained from cutting a specific tree.<br /><br /><img src=\'images/ironBucket.png\' class=\'img-30\' /> 2% chance of getting lava when used with oven, assuming you have empty buckets.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-stardustLogs", "stardustLogs", "Stardust Logs", "Obtained from cutting a specific tree.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-oven", "oven", "COOKING OVEN", "<b>Burn rate: " + parseInt(getBurnRate() * 100) + "%</b>");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-dottedGreenLeaf", "dottedGreenLeaf", "DOTTED GREEN LEAF", "A primary brewing ingredient.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-greenLeaf", "greenLeaf", "GREEN LEAF", "A primary brewing ingredient.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-limeLeaf", "limeLeaf", "LIME LEAF", "A primary brewing ingredient.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-goldLeaf", "goldLeaf", "GOLD LEAF", "A primary brewing ingredient.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-crystalLeaf", "crystalLeaf", "CRYSTAL LEAF", "A primary brewing ingredient.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-stripedGoldLeaf", "stripedGoldLeaf", "STRIPED GOLD LEAF", "A primary brewing ingredient.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-stripedCrystalLeaf", "stripedCrystalLeaf", "STRIPED CRYSTAL LEAF", "A primary brewing ingredient.");
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-redMushroom", "redMushroom", "RED MUSHROOM", "A secondary brewing ingredient.");
	var _0x1D6F4 = "";
	_0x1D6F4 += "<br /><img src=\'images/rawShrimp.png\' class=\'img-30\' /> Shrimp";
	if (getItem("sapphireSmallFishingNetTotal") > 0 || getItem("sapphireSmallFishingNet") > 0)
	{
		_0x1D6F4 += "<br /><img src=\'images/rawAnchovy.png\' class=\'img-30\' /> Anchovy"
	};
	if (getItem("emeraldSmallFishingNetTotal") > 0 || getItem("emeraldSmallFishingNet") > 0)
	{
		_0x1D6F4 += "<br /><img src=\'images/rawSardine.png\' class=\'img-30\' /> Sardine"
	};
	if (getItem("rubySmallFishingNetTotal") > 0 || getItem("rubySmallFishingNet") > 0)
	{
		_0x1D6F4 += "<br /><img src=\'images/rawCrab.png\' class=\'img-30\' /> Crab"
	};
	if (getItem("diamondSmallFishingNetTotal") > 0 || getItem("diamondSmallFishingNet") > 0)
	{
		_0x1D6F4 += "<br /><img src=\'images/rawPiranha.png\' class=\'img-30\' /> Piranhas"
	};
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-smallFishingNet", "varNameIfSellable", "Small Fishing Net", "<b>Catch size: </b> Small<br />" + _0x1D6F4);
	var _0x1D684 = "";
	_0x1D684 += "<br /><img src=\'images/rawTrout.png\' class=\'img-30\' /> Trout";
	if (getItem("sapphireFishingRodTotal") > 0 || getItem("sapphireFishingRod") > 0)
	{
		_0x1D684 += "<br /><img src=\'images/rawSalmon.png\' class=\'img-30\' /> Salmon"
	};
	if (getItem("emeraldFishingRodTotal") > 0 || getItem("emeraldFishingRod") > 0)
	{
		_0x1D684 += "<br /><img src=\'images/rawEel.png\' class=\'img-30\' /> Eel"
	};
	if (getItem("rubyFishingRodTotal") > 0 || getItem("rubyFishingRod") > 0)
	{
		_0x1D684 += "<br /><img src=\'images/rawSeaTurtle.png\' class=\'img-30\' /> Sea Turtle"
	};
	if (getItem("diamondFishingRodTotal") > 0 || getItem("diamondFishingRod") > 0)
	{
		_0x1D684 += "<br /><img src=\'images/rawRainbowFish.png\' class=\'img-30\' /> Rainbow Fish"
	};
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-fishingRod", "varNameIfSellable", "Fishing Rod", "<b>Catch size: </b> Medium<br />" + _0x1D684);
	var _0x1D692 = "";
	_0x1D692 += "<br /><img src=\'images/rawTuna.png\' class=\'img-30\' /> Tuna";
	if (getItem("sapphireHarpoonTotal") > 0 || getItem("sapphireHarpoon") > 0)
	{
		_0x1D692 += "<br /><img src=\'images/rawSwordfish.png\' class=\'img-30\' /> Swordfish"
	};
	if (getItem("emeraldHarpoonTotal") > 0 || getItem("emeraldHarpoon") > 0)
	{
		_0x1D692 += "<br /><img src=\'images/rawMantaRay.png\' class=\'img-30\' /> Manta Ray"
	};
	if (getItem("rubyHarpoonTotal") > 0 || getItem("rubyHarpoon") > 0)
	{
		_0x1D692 += "<br /><img src=\'images/rawShark.png\' class=\'img-30\' /> Shark"
	};
	if (getItem("diamondHarpoonTotal") > 0 || getItem("diamondHarpoon") > 0)
	{
		_0x1D692 += "<br /><img src=\'images/rawWhale.png\' class=\'img-30\' /> Whale"
	};
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-harpoon", "varNameIfSellable", "Harpoon", "<b>Catch size: </b> Large<br />" + _0x1D692);
	var _0x1D6A0 = 0;
	var _0x1D64C = "<img src=\'images/check.png\' class=\'img-20\'  />";
	_0x1D6A0 = 1;
	_0x1D64C = "<img src=\'images/x.png\' class=\'img-20\' />";
	if (getLevel(getItem("magicXp")) >= _0x1D6A0)
	{
		_0x1D64C = "<img src=\'images/check.png\' class=\'img-20\' />"
	};
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-spellScrollHeal", "spellScrollHeal", "HEAL", "<img src=\'images/magicSkill.png\' class=\'img-20\' /> " + 1 + " magic required. " + _0x1D64C);
	_0x1D6A0 = 10;
	_0x1D64C = "<img src=\'images/x.png\' class=\'img-20\' />";
	if (getLevel(getItem("magicXp")) >= _0x1D6A0)
	{
		_0x1D64C = "<img src=\'images/check.png\' class=\'img-20\' />"
	};
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-spellScrollPoison", "", "POISON", "<img src=\'images/magicSkill.png\' class=\'img-20\' /> " + _0x1D6A0 + " magic required. " + _0x1D64C);
	_0x1D6A0 = 15;
	_0x1D64C = "<img src=\'images/x.png\' class=\'img-20\' />";
	if (getLevel(getItem("magicXp")) >= _0x1D6A0)
	{
		_0x1D64C = "<img src=\'images/check.png\' class=\'img-20\' />"
	};
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-spellScrollReflect", "", "REFLECT", "<img src=\'images/magicSkill.png\' class=\'img-20\' /> " + _0x1D6A0 + " magic required. " + _0x1D64C);
	_0x1D6A0 = 20;
	_0x1D64C = "<img src=\'images/x.png\' class=\'img-20\' />";
	if (getLevel(getItem("magicXp")) >= _0x1D6A0)
	{
		_0x1D64C = "<img src=\'images/check.png\' class=\'img-20\' />"
	};
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-spellScrollFire", "", "FIRE", "<img src=\'images/magicSkill.png\' class=\'img-20\' /> " + _0x1D6A0 + " magic required. " + _0x1D64C);
	_0x1D6A0 = 25;
	_0x1D64C = "<img src=\'images/x.png\' class=\'img-20\' />";
	if (getLevel(getItem("magicXp")) >= _0x1D6A0)
	{
		_0x1D64C = "<img src=\'images/check.png\' class=\'img-20\' />"
	};
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-spellScrollTeleport", "", "TELEPORT", "<img src=\'images/magicSkill.png\' class=\'img-20\' /> " + _0x1D6A0 + " magic required. " + _0x1D64C);
	var _0x1D1EC;
	var _0x1D6BC;
	var _0x1C7CE;
	var _0x1D668;
	var _0x1D614;
	var _0x1D6D8;
	var _0x1CC4A;
	_0x1CC4A = "";
	_0x1D1EC = "HEAL";
	_0x1D6BC = 3;
	_0x1C7CE = "Heal instantly during combat.";
	_0x1D668 = 10;
	_0x1D614 = "<b>Base heal:</b> 2 health.";
	_0x1D6D8 = "<b>Multiplier:</b> Heal an additional 1 health per 5 magic bonus.";
	_0x1CC4A += "<div style=\'font-size:16pt;font-weight:bold;\'>" + _0x1D1EC + "</div>";
	_0x1CC4A += "<div>" + _0x1C7CE + "</div>";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<b>Total Casts: </b> <item-healCasted>0</item-healCasted>";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x1CC4A += "<img src=\'images/hugeManaStar.png\' class=\'img-20\' /> <b>Mana cost:</b> " + _0x1D6BC;
	_0x1CC4A += "<br />";
	_0x1CC4A += "<img src=\'images/hourglass_grey.png\' class=\'img-20\' /> <b>Cooldown:</b> " + _0x1D668 + " seconds";
	_0x1CC4A += "</div>";
	_0x1CC4A += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x1CC4A += "<img src=\'images/magic_black.png\' class=\'img-20\' /> " + _0x1D614;
	_0x1CC4A += "<br />";
	_0x1CC4A += "<img src=\'images/magic_grey.png\' class=\'img-20\' /> " + _0x1D6D8;
	_0x1CC4A += "</div>";
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-" + _0x1D1EC.toLowerCase(), _0x1D1EC.toLowerCase(), "", _0x1CC4A);
	_0x1CC4A = "";
	_0x1D1EC = "POISON";
	_0x1D6BC = 5;
	_0x1C7CE = "Poisons your enemy, dealing 1 damage every 7 seconds.";
	_0x1D668 = 10;
	_0x1D614 = "<b>Base poison:</b> 1 damage.";
	_0x1D6D8 = "<b>Multiplier:</b> Poison damaged increased by 1 per 10 magic bonus.";
	_0x1CC4A += "<div style=\'font-size:16pt;font-weight:bold;\'>" + _0x1D1EC + "</div>";
	_0x1CC4A += "<div>" + _0x1C7CE + "</div>";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<b>Total Casts: </b> <item-poisonCasted>0</item-poisonCasted>";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x1CC4A += "<img src=\'images/hugeManaStar.png\' class=\'img-20\' /> <b>Mana cost:</b> " + _0x1D6BC;
	_0x1CC4A += "<br />";
	_0x1CC4A += "<img src=\'images/hourglass_grey.png\' class=\'img-20\' /> <b>Cooldown:</b> " + _0x1D668 + " seconds";
	_0x1CC4A += "</div>";
	_0x1CC4A += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x1CC4A += "<img src=\'images/magic_black.png\' class=\'img-20\' /> " + _0x1D614;
	_0x1CC4A += "<br />";
	_0x1CC4A += "<img src=\'images/magic_grey.png\' class=\'img-20\' /> " + _0x1D6D8;
	_0x1CC4A += "</div>";
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-" + _0x1D1EC.toLowerCase(), _0x1D1EC.toLowerCase(), "", _0x1CC4A);
	_0x1CC4A = "";
	_0x1D1EC = "REFLECT";
	_0x1D6BC = 3;
	_0x1C7CE = "Reflects the next attack from the enemy back to them.";
	_0x1D668 = 30;
	_0x1D614 = "<b>Base damage:</b> N/A";
	_0x1D6D8 = "<b>Buff:</b> Having a magic bonus greater than 20 will not trigger reflect if the enemy hits a 0.";
	_0x1CC4A += "<div style=\'font-size:16pt;font-weight:bold;\'>" + _0x1D1EC + "</div>";
	_0x1CC4A += "<div>" + _0x1C7CE + "</div>";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<b>Total Casts: </b> <item-reflectCasted>0</item-reflectCasted>";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x1CC4A += "<img src=\'images/hugeManaStar.png\' class=\'img-20\' /> <b>Mana cost:</b> " + _0x1D6BC;
	_0x1CC4A += "<br />";
	_0x1CC4A += "<img src=\'images/hourglass_grey.png\' class=\'img-20\' /> <b>Cooldown:</b> " + _0x1D668 + " seconds";
	_0x1CC4A += "</div>";
	_0x1CC4A += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x1CC4A += "<img src=\'images/magic_black.png\' class=\'img-20\' /> " + _0x1D614;
	_0x1CC4A += "<br />";
	_0x1CC4A += "<img src=\'images/magic_grey.png\' class=\'img-20\' /> " + _0x1D6D8;
	_0x1CC4A += "</div>";
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-" + _0x1D1EC.toLowerCase(), _0x1D1EC.toLowerCase(), "", _0x1CC4A);
	_0x1CC4A = "";
	_0x1D1EC = "FIRE";
	_0x1D6BC = 2;
	_0x1C7CE = "Instantly deals fire damage to your enemy.";
	_0x1D668 = 10;
	_0x1D614 = "<b>Base damage:</b> 0 - 2";
	_0x1D6D8 = "<b>Buff:</b> +1 damage per 3 magic bonus.";
	_0x1CC4A += "<div style=\'font-size:16pt;font-weight:bold;\'>" + _0x1D1EC + "</div>";
	_0x1CC4A += "<div>" + _0x1C7CE + "</div>";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<b>Total Casts: </b> <item-fireCasted>0</item-fireCasted>";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x1CC4A += "<img src=\'images/hugeManaStar.png\' class=\'img-20\' /> <b>Mana cost:</b> " + _0x1D6BC;
	_0x1CC4A += "<br />";
	_0x1CC4A += "<img src=\'images/hourglass_grey.png\' class=\'img-20\' /> <b>Cooldown:</b> " + _0x1D668 + " seconds";
	_0x1CC4A += "</div>";
	_0x1CC4A += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x1CC4A += "<img src=\'images/magic_black.png\' class=\'img-20\' /> " + _0x1D614;
	_0x1CC4A += "<br />";
	_0x1CC4A += "<img src=\'images/magic_grey.png\' class=\'img-20\' /> " + _0x1D6D8;
	_0x1CC4A += "</div>";
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-" + _0x1D1EC.toLowerCase(), _0x1D1EC.toLowerCase(), "", _0x1CC4A);
	_0x1CC4A = "";
	_0x1D1EC = "TELEPORT";
	_0x1D6BC = 0;
	_0x1C7CE = "Teleports you out of combat, fully recovering HP and mana allowing you to fight again.";
	_0x1D668 = 900;
	_0x1D614 = "<b>Base damage:</b> n/a";
	_0x1CC4A += "<div style=\'font-size:16pt;font-weight:bold;\'>" + _0x1D1EC + "</div>";
	_0x1CC4A += "<div>" + _0x1C7CE + "</div>";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<b>Total Casts: </b> <item-teleportCasted>0</item-teleportCasted>";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<div style=\'border:1px solid black;background-color:#EFEFEF;padding:5px;margin-top:5px;\'>";
	_0x1CC4A += "<img src=\'images/hugeManaStar.png\' class=\'img-20\' /> <b>Mana cost:</b> " + "(none)";
	_0x1CC4A += "<br />";
	_0x1CC4A += "<img src=\'images/hourglass_grey.png\' class=\'img-20\' /> <b>Cooldown:</b> " + 15 + " minutes.";
	_0x1CC4A += "</div>";
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-" + _0x1D1EC.toLowerCase(), _0x1D1EC.toLowerCase(), "", _0x1CC4A);
	if (getItem("treeUnlocked2") == 0)
	{
		_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-treeSection2", "treeSection2", "Tree Patch", "<img src=\'images/unlocked.png\' class=\'img-30\' /> Unlock for <img src=\'images/coins.png\' class=\'img-30\' /> 100 coins.")
	};
	if (getItem("treeUnlocked3") == 0)
	{
		_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-treeSection3", "treeSection3", "Tree Patch", "<img src=\'images/unlocked.png\' class=\'img-30\' /> Unlock for <img src=\'images/coins.png\' class=\'img-30\' /> 10,000 coins.")
	};
	if (getItem("treeUnlocked4") == 0)
	{
		_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-treeSection4", "treeSection4", "Tree Patch", "<img src=\'images/unlocked.png\' class=\'img-30\' /> Unlock for <img src=\'images/coins.png\' class=\'img-30\' /> 100,000 coins and <img src=\'images/woodcuttingSkill.png\' class=\'img-30\' /> 50 woodcutting.")
	};
	if (getItem("treeUnlocked6") == 0)
	{
		_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-treeSection5and6", "treeSection5and6", "Tree Patch", "<img src=\'images/unlocked.png\' class=\'img-30\' /> Unlock for <img src=\'images/donorCoins.png\' class=\'img-30\' /> 2 donor coins.")
	};
	if (getItem("plotUnlocked2") == 0)
	{
		_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-plotSection2", "plotSection2", "Farming Patch", "<img src=\'images/unlocked.png\' class=\'img-30\' /> Unlock for <img src=\'images/coins.png\' class=\'img-30\' /> 100 coins.")
	};
	if (getItem("plotUnlocked3") == 0)
	{
		_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-plotSection3", "plotSection3", "Farming Patch", "<img src=\'images/unlocked.png\' class=\'img-30\' /> Unlock for <img src=\'images/coins.png\' class=\'img-30\' /> 10,000 coins.")
	};
	if (getItem("plotUnlocked4") == 0)
	{
		_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-plotSection4", "plotSection4", "Farming Patch", "<img src=\'images/unlocked.png\' class=\'img-30\' /> Unlock for <img src=\'images/coins.png\' class=\'img-30\' /> 100,000 coins and <img src=\'images/farmingSkill.png\' class=\'img-30\' /> 50 farming.")
	};
	if (getItem("plotUnlocked6") == 0)
	{
		_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-plotSection5and6", "plotSection5and6", "Farming Patch", "<img src=\'images/unlocked.png\' class=\'img-30\' /> Unlock for <img src=\'images/donorCoins.png\' class=\'img-30\' /> 2 donor coins.")
	};
	var _0x1D65A = "";
	var _0x1D606 = "Fields";
	var _0x1D6CA = [];
	_0x1D65A = "";
	_0x1D606 = "Fields";
	_0x1D6CA = [];
	_0x1D6CA = getEncountersImgArrayForAreaareaChosen(_0x1D606);
	_0x1D65A += "<img src=\'images/energy.png\' class=\'img-30\' /> 50 &nbsp;&nbsp;&nbsp;&nbsp; <img src=\'images/hourglass_grey.png\' class=\'img-30\' /> 15:00";
	_0x1D65A += "<br /><br />";
	_0x1D65A += "<img src=\'" + _0x1D6CA[0] + "\' class=\'img-30\' /> Chickens &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x1D65A += "<img src=\'" + _0x1D6CA[1] + "\' class=\'img-30\' /> Rats &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x1D65A += "<img src=\'" + _0x1D6CA[2] + "\' class=\'img-30\' /> Bees";
	document.getElementById(_0x1D606.toLowerCase() + "-fightMarker-gif").src = _0x1D6CA[3];
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-" + _0x1D606.toLowerCase(), "", _0x1D606, _0x1D65A);
	_0x1D65A = "";
	_0x1D606 = "Forest";
	_0x1D6CA = [];
	_0x1D6CA = getEncountersImgArrayForAreaareaChosen(_0x1D606);
	_0x1D65A += "<img src=\'images/energy.png\' class=\'img-30\' /> 200 &nbsp;&nbsp;&nbsp;&nbsp; <img src=\'images/hourglass_grey.png\' class=\'img-30\' /> 30:00";
	_0x1D65A += "<br /><br />";
	_0x1D65A += "<img src=\'" + _0x1D6CA[0] + "\' class=\'img-30\' /> Snake &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x1D65A += "<img src=\'" + _0x1D6CA[1] + "\' class=\'img-30\' /> Ent &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x1D65A += "<img src=\'" + _0x1D6CA[2] + "\' class=\'img-30\' /> Thief";
	document.getElementById(_0x1D606.toLowerCase() + "-fightMarker-gif").src = _0x1D6CA[3];
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-" + _0x1D606.toLowerCase(), "", _0x1D606, _0x1D65A);
	_0x1D65A = "";
	_0x1D606 = "Caves";
	_0x1D6CA = [];
	_0x1D6CA = getEncountersImgArrayForAreaareaChosen(_0x1D606);
	_0x1D65A += "<img src=\'images/energy.png\' class=\'img-30\' /> 500 &nbsp;&nbsp;&nbsp;&nbsp; <img src=\'images/hourglass_grey.png\' class=\'img-30\' /> 1:00:00";
	_0x1D65A += "<br /><br />";
	_0x1D65A += "<img src=\'" + _0x1D6CA[0] + "\' class=\'img-30\' /> Bear &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x1D65A += "<img src=\'" + _0x1D6CA[1] + "\' class=\'img-30\' /> Spider &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x1D65A += "<img src=\'" + _0x1D6CA[2] + "\' class=\'img-30\' /> Skeleton";
	document.getElementById(_0x1D606.toLowerCase() + "-fightMarker-gif").src = _0x1D6CA[3];
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-" + _0x1D606.toLowerCase(), "", _0x1D606, _0x1D65A);
	_0x1D65A = "";
	_0x1D606 = "lavaDungeon";
	_0x1D6CA = [];
	_0x1D6CA = getEncountersImgArrayForAreaareaChosen(_0x1D606);
	_0x1D65A += "<img src=\'images/energy.png\' class=\'img-30\' /> 2000 &nbsp;&nbsp;&nbsp;&nbsp; <img src=\'images/hourglass_grey.png\' class=\'img-30\' /> 1:30:00";
	_0x1D65A += "<br /><br />";
	_0x1D65A += "<img src=\'" + _0x1D6CA[0] + "\' class=\'img-30\' /> Lava Alien &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x1D65A += "<img src=\'" + _0x1D6CA[1] + "\' class=\'img-30\' /> Bat &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x1D65A += "<img src=\'" + _0x1D6CA[2] + "\' class=\'img-30\' /> Fire Mage";
	document.getElementById(_0x1D606 + "-fightMarker-gif").src = _0x1D6CA[3];
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-" + _0x1D606, "", _0x1D606, _0x1D65A);
	_0x1D65A = "";
	_0x1D606 = "northernFields";
	_0x1D6CA = [];
	_0x1D6CA = getEncountersImgArrayForAreaareaChosen(_0x1D606);
	_0x1D65A += "<img src=\'images/energy.png\' class=\'img-30\' /> 5000 &nbsp;&nbsp;&nbsp;&nbsp; <img src=\'images/hourglass_grey.png\' class=\'img-30\' /> 2:00:00";
	_0x1D65A += "<br /><br />";
	_0x1D65A += "<img src=\'" + _0x1D6CA[0] + "\' class=\'img-30\' /> Bonehead &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x1D65A += "<img src=\'" + _0x1D6CA[1] + "\' class=\'img-30\' /> Mamma Polar Bear &nbsp;&nbsp;&nbsp;&nbsp;";
	_0x1D65A += "<img src=\'" + _0x1D6CA[2] + "\' class=\'img-30\' /> Yeti";
	document.getElementById(_0x1D606 + "-fightMarker-gif").src = _0x1D6CA[3];
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-" + _0x1D606, "", _0x1D606, _0x1D65A);
	var _0x1CF4C = "";
	_0x1D65A = "";
	_0x1CF4C = "bushy";
	if (getItem(_0x1CF4C + "Kills") == 0)
	{
		_0x1D65A = "<center><img src=\'images/energy.png\' class=\'img-30\' /> 1000</center><br /><img src=\'images/" + _0x1CF4C + "Monster_black.png\' class=\'img-50\' /> Defeated " + "<img src=\'images/x.png\' class=\'img-20\' />"
	}
	else
	{
		if (getItem(_0x1CF4C + "Kills") > 0)
		{
			document.getElementById("combat-map-fight-marker-boss-bushy").src = "images/bossMarkerCompleted.gif";
			_0x1D65A = "<img src=\'images/" + _0x1CF4C + "_monster_idle_0.png\' class=\'img-50\' /> Defeated " + "<img src=\'images/check.png\' class=\'img-20\' />"
		}
	};
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-boss-bushy", "", "BUSHY <span style=\'color:grey\'>(BOSS)</span>", _0x1D65A);
	_0x1CF4C = "fireHawk";
	if (getItem(_0x1CF4C + "Kills") == 0)
	{
		_0x1D65A = "<center><img src=\'images/energy.png\' class=\'img-30\' /> 6000</center><br /><img src=\'images/" + _0x1CF4C + "Monster_black.png\' class=\'img-50\' /> Defeated " + "<img src=\'images/x.png\' class=\'img-20\' />"
	}
	else
	{
		if (getItem(_0x1CF4C + "Kills") > 0)
		{
			document.getElementById("combat-map-fight-marker-boss-" + _0x1CF4C).src = "images/bossMarkerCompleted.gif";
			_0x1D65A = "<img src=\'images/" + _0x1CF4C + "_monster_idle_0.png\' class=\'img-50\' /> Defeated " + "<img src=\'images/check.png\' class=\'img-20\' />"
		}
	};
	_0x1C8F4 += generateHTMLGeneralTooltip("tooltip-combat-map-fight-button-boss-" + _0x1CF4C, "", getItemName(_0x1CF4C).toUpperCase() + " <span style=\'color:grey\'>(BOSS)</span>", _0x1D65A);
	document.getElementById("dynamic-tooltips-area").innerHTML = _0x1C8F4
}

function getTooltipSellsForLabel(_0x1CF30)
{
	if (global_itemPriceMap[_0x1CF30] != null)
	{
		return "<br /><br /><div class=\'sell-tooltip-container\'><img src=\'images/shop_black.png\' class=\'img-20\' /> <b>Sells for:</b> <img src=\'images/coins.png\' class=\'img-20\' /> " + formatNumber(global_itemPriceMap[_0x1CF30].price) + "</div>"
	};
	return ""
}

function generateHTMLGeneralTooltip(_0x1CC2E, _0x1D33C, _0x1C8E6, _0x1C7CE)
{
	var _0x1C8F4 = "";
	_0x1C8F4 += "<div id=\'" + _0x1CC2E + "\' style=\'display:none;\'>";
	_0x1C8F4 += "<h2>" + _0x1C8E6 + "</h2>";
	_0x1C8F4 += "<hr class=\'hr-thin\' />";
	_0x1C8F4 += _0x1C7CE;
	_0x1C8F4 += getTooltipSellsForLabel(_0x1D33C);
	_0x1C8F4 += "</div>";
	return _0x1C8F4
}

function openFurnaceDialogue(_0x1D34A)
{
	document.getElementById("dialogue-furnace-selectOre").innerHTML = "";
	var _0x1CC4A = "";
	if (getItem("researcherCrafting") >= 1)
	{
		_0x1CC4A += generateHTMLToSelectOreFurnace(_0x1D34A, "sand")
	};
	_0x1CC4A += generateHTMLToSelectOreFurnace(_0x1D34A, "copper");
	_0x1CC4A += generateHTMLToSelectOreFurnace(_0x1D34A, "iron");
	_0x1CC4A += generateHTMLToSelectOreFurnace(_0x1D34A, "silver");
	_0x1CC4A += generateHTMLToSelectOreFurnace(_0x1D34A, "gold");
	_0x1CC4A += generateHTMLToSelectOreFurnace(_0x1D34A, "promethium");
	document.getElementById("dialogue-furnace-selectOre").innerHTML = _0x1CC4A;
	document.getElementById("dialogue-furnace-buttons-area").innerHTML = "<br /><div onclick=\'closeDialogue(\"dialogue-furnace\")\' class=\'dialogue-button\'>Close</div>";
	openDialogueOverride("dialogue-furnace", "large")
}

function isNull(_0x1CD8C)
{
	if (_0x1CD8C === undefined || variable === null)
	{
		return true
	};
	return false
}

function isInt(_0x1C7B2)
{
	return !isNaN(_0x1C7B2) && parseInt(Number(_0x1C7B2)) == _0x1C7B2 && !isNaN(parseInt(_0x1C7B2, 10))
}
var global_tracker_furnaceDialgoue_furnace = "";
var global_tracker_furnaceDialgoue_ore = "";

function openFurnaceDialogue2(_0x1D34A, _0x1C91E)
{
	global_tracker_furnaceDialgoue_furnace = _0x1D34A;
	global_tracker_furnaceDialgoue_ore = _0x1C91E;
	document.getElementById("dialogue-furnace-enterOre").innerHTML = "";
	var _0x1CC4A = "";
	_0x1CC4A += "<div class=\'dialogue-furnace-enterOre\'>";
	_0x1CC4A += "<table width=\'90%\'>";
	_0x1CC4A += "<tr>";
	_0x1CC4A += "<td>";
	_0x1CC4A += "<img src=\'images/" + _0x1D34A + ".png\' class=\'img-100\' /> ";
	_0x1CC4A += "<img src=\'images/" + _0x1C91E + ".png\' class=\'img-100\' /> ";
	_0x1CC4A += "</td>";
	_0x1CC4A += "<td>";
	_0x1CC4A += "<input type=\'text\' id=\'dialogue-furnace-smelt-amount\' class=\'enter-amount-text\' onkeyup=\'furnaceDialogueValueOnKeyUp(this.value)\' placeholder=\'amount\' />";
	_0x1CC4A += "</td>";
	_0x1CC4A += "</tr>";
	_0x1CC4A += "</table>";
	_0x1CC4A += "</div>";
	document.getElementById("dialogue-furnace-enterOre").innerHTML = _0x1CC4A;
	document.getElementById("dialogue-furnace-selectOre").innerHTML = "";
	document.getElementById("dialogue-furnace-buttons-area").innerHTML = "<br /><table width=\'80%\'><tr><td><div onclick=\'closeDialogue(\"dialogue-furnace\")\' class=\'dialogue-button\'>Close</div></td><td><div onclick=\'closeDialogue(\"dialogue-furnace\");smelt(\"" + _0x1C91E + "\", document.getElementById(\"dialogue-furnace-smelt-amount\").value)\' style=\'background-color:#b3ffff\' class=\'dialogue-button\'>Smelt</div></td></tr></table>";
	setMaxOreThatCanSmelt(_0x1C91E, _0x1D34A);
	furnaceDialogueValueOnKeyUp(document.getElementById("dialogue-furnace-smelt-amount").value)
}

function smelt(_0x1C91E, _0x1CD9A)
{
	sendBytes("SMELT=" + _0x1C91E + "~" + _0x1CD9A)
}

function setMaxOreThatCanSmelt(_0x1C91E, _0x1D34A)
{
	var _0x1E2E0 = getItem(_0x1C91E);
	if (getItem(_0x1C91E) >= getItem("furnaceCapacity"))
	{
		_0x1E2E0 = getItem("furnaceCapacity")
	};
	var _0x1E2EE = _0x1E2E0 * getOilCost(_0x1C91E);
	if (getItem("oil") < _0x1E2EE)
	{
		_0x1E2E0 = getItem("oil") / getOilCost(_0x1C91E)
	};
	document.getElementById("dialogue-furnace-smelt-amount").value = parseInt(_0x1E2E0)
}

function furnaceDialogueValueOnKeyUp(_0x1CD8C)
{
	document.getElementById("dialogue-furnace-htmlBoxes").innerHTML = "";
	if (isInt(_0x1CD8C))
	{
		if (_0x1CD8C > 0)
		{
			itemNameArray = [];
			itemAmountRequiredArray = [];
			displayNameArray = [];
			itemNameArray[0] = global_tracker_furnaceDialgoue_ore;
			itemAmountRequiredArray[0] = _0x1CD8C;
			displayNameArray[0] = "";
			itemNameArray[1] = "oil";
			itemAmountRequiredArray[1] = getOilCost(global_tracker_furnaceDialgoue_ore) * _0x1CD8C;
			displayNameArray[1] = "";
			document.getElementById("dialogue-furnace-htmlBoxes").innerHTML = createHTMLBoxCheckOrXCollection(itemNameArray, itemAmountRequiredArray, displayNameArray)
		}
	}
}

function createHTMLBoxCheckOrXCollection(_0x1D17C, _0x1D16E, _0x1D160)
{
	var _0x1CC4A = "";
	_0x1CC4A += "<div>";
	for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1D17C.length; _0x1C6B6++)
	{
		_0x1CC4A += createHTMLBoxCheckOrX(_0x1D17C[_0x1C6B6], _0x1D16E[_0x1C6B6], _0x1D160[_0x1C6B6])
	};
	_0x1CC4A += "</div>";
	return _0x1CC4A
}

function createHTMLBoxCheckOrX(_0x1C83E, _0x1D152, _0x1D136)
{
	var _0x1D128 = "html-box-check-or-x";
	var _0x1D144 = "<img src=\'images/x.png\' class=\'img-30\' />";
	if (getItem(_0x1C83E) >= _0x1D152)
	{
		_0x1D144 = "<img src=\'images/check.png\' class=\'img-30\' />";
		_0x1D128 = "html-box-check-or-check"
	};
	var _0x1CC4A = "";
	_0x1CC4A += "<div class=" + _0x1D128 + ">";
	_0x1CC4A += "<img src=\'images/" + _0x1C83E + ".png\' class=\'img-50\' /> " + formatNumber(_0x1D152) + " " + _0x1D136 + _0x1D144;
	_0x1CC4A += "</div>";
	return _0x1CC4A
}

function generateHTMLToSelectOreFurnace(_0x1D34A, _0x1C91E)
{
	document.getElementById("dialogue-furnace-enterOre").innerHTML = "";
	document.getElementById("dialogue-furnace-htmlBoxes").innerHTML = "";
	var _0x1CC4A = "";
	_0x1CC4A += "<div onclick=\'openFurnaceDialogue2(\"" + _0x1D34A + "\",\"" + _0x1C91E + "\")\' class=\'select-ore-furnace\'>" + getItemName(_0x1C91E).toUpperCase() + "<br />";
	_0x1CC4A += "<img src=\'images/" + _0x1C91E + ".png\' class=\'img-100\' />";
	_0x1CC4A += "<hr class=\'hr-thin\' />";
	_0x1CC4A += "<img src=\'images/oil_lighter.png\' class=\'img-30\' /> " + getOilCost(_0x1C91E);
	_0x1CC4A += "</div>";
	return _0x1CC4A
}

function lootDialogue(data)
{
	var _0x1C75E = data.split("~");
	var _0x1C8E6 = _0x1C75E[0];
	var _0x1D860 = _0x1C75E[1];
	var _0x1C8F4 = "<h1 style=\'text-align:center;\'>" + _0x1C8E6 + "</h1>";
	for (var _0x1C6B6 = 1; _0x1C6B6 < _0x1C75E.length - 1; _0x1C6B6++)
	{
		var _0x1D86E = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1D87C = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1D844 = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1C734 = _0x1C75E[_0x1C6B6];
		_0x1C8F4 += "<span class=\'loot-span\' style=\'background-color:" + _0x1D844 + ";border:1px solid " + _0x1C734 + "\'><img src=\'" + _0x1D86E + "\' class=\'img-50\' /> " + _0x1D87C + "</span>"
	};
	var _0x1D852 = _0x1C75E[_0x1C75E.length - 1];
	if (_0x1D852 == "none")
	{
		_0x1D852 = ""
	};
	confirmDialogue("none", _0x1C8F4, "Collect", "", _0x1D852)
}

function getLevel(_0x1D41C)
{
	if (_0x1D41C == 0)
	{
		return 1
	};
	for (var _0x1C6B6 = 1; _0x1C6B6 <= 100; _0x1C6B6++)
	{
		var _0x1D42A = 3 + (_0x1C6B6 / 200);
		var _0x1CBCC = Math.pow(_0x1C6B6, _0x1D42A);
		if (_0x1D41C < _0x1CBCC)
		{
			return _0x1C6B6 - 1
		}
	};
	return 100
}

function getXpNeeded(_0x1CB40)
{
	return parseInt(Math.pow(_0x1CB40, 3 + (_0x1CB40 / 200)))
}

function getGlobalLevel()
{
	var _0x1CEB2 = 0;
	var _0x1CEEA = "";
	_0x1CEEA = "combat";
	if (getItem(_0x1CEEA + "Unlocked") == 1)
	{
		_0x1CEB2 += getLevel(getItem(_0x1CEEA + "Xp"))
	};
	_0x1CEEA = "magic";
	if (getItem(_0x1CEEA + "Unlocked") == 1)
	{
		_0x1CEB2 += getLevel(getItem(_0x1CEEA + "Xp"))
	};
	_0x1CEEA = "crafting";
	if (getItem(_0x1CEEA + "Unlocked") == 1)
	{
		_0x1CEB2 += getLevel(getItem(_0x1CEEA + "Xp"))
	};
	_0x1CEEA = "brewing";
	if (getItem(_0x1CEEA + "Unlocked") == 1)
	{
		_0x1CEB2 += getLevel(getItem(_0x1CEEA + "Xp"))
	};
	_0x1CEEA = "woodcutting";
	if (getItem(_0x1CEEA + "Unlocked") == 1)
	{
		_0x1CEB2 += getLevel(getItem(_0x1CEEA + "Xp"))
	};
	_0x1CEEA = "cooking";
	if (getItem(_0x1CEEA + "Unlocked") == 1)
	{
		_0x1CEB2 += getLevel(getItem(_0x1CEEA + "Xp"))
	};
	_0x1CEEA = "farming";
	if (getItem(_0x1CEEA + "Unlocked") == 1)
	{
		_0x1CEB2 += getLevel(getItem(_0x1CEEA + "Xp"))
	};
	_0x1CEEA = "fishing";
	if (getItem(_0x1CEEA + "Unlocked") == 1)
	{
		_0x1CEB2 += getLevel(getItem(_0x1CEEA + "Xp"))
	};
	_0x1CEEA = "mining";
	if (getItem(_0x1CEEA + "Unlocked") == 1)
	{
		_0x1CEB2 += getLevel(getItem(_0x1CEEA + "Xp"))
	};
	return _0x1CEB2
}

function refreshTopSkillBar(_0x1E104)
{
	var _0x1CEEA = "";
	var _0x1E0F6 = 0.0;
	var _0x1D748 = "";
	document.getElementById("span-topBar-globalLevel").innerHTML = "Level " + getGlobalLevel();
	_0x1CEEA = "combat";
	_0x1D748 = getLevel(getItem(_0x1CEEA + "Xp"));
	document.getElementById("span-topBar-" + _0x1CEEA + "Level").innerHTML = _0x1D748;
	_0x1E0F6 = (getItem(_0x1CEEA + "Xp") - getXpNeeded(getLevel(getItem(_0x1CEEA + "Xp")))) / (getXpNeeded(1 + getLevel(getItem(_0x1CEEA + "Xp"))) - getXpNeeded(getLevel(getItem(_0x1CEEA + "Xp"))));
	if (_0x1E0F6 > 1)
	{
		_0x1E0F6 = 1
	};
	document.getElementById("xp-bar-" + _0x1CEEA + "-inner").style.width = parseInt(_0x1E0F6 * 100) + "%";
	if (_0x1D748 >= 100)
	{
		document.getElementById("xp-bar-" + _0x1CEEA + "-inner").style.backgroundColor = "#00ace6"
	};
	_0x1CEEA = "magic";
	_0x1D748 = getLevel(getItem(_0x1CEEA + "Xp"));
	document.getElementById("span-topBar-" + _0x1CEEA + "Level").innerHTML = _0x1D748;
	_0x1E0F6 = (getItem(_0x1CEEA + "Xp") - getXpNeeded(getLevel(getItem(_0x1CEEA + "Xp")))) / (getXpNeeded(1 + getLevel(getItem(_0x1CEEA + "Xp"))) - getXpNeeded(getLevel(getItem(_0x1CEEA + "Xp"))));
	if (_0x1E0F6 > 1)
	{
		_0x1E0F6 = 1
	};
	document.getElementById("xp-bar-" + _0x1CEEA + "-inner").style.width = parseInt(_0x1E0F6 * 100) + "%";
	if (_0x1D748 >= 100)
	{
		document.getElementById("xp-bar-" + _0x1CEEA + "-inner").style.backgroundColor = "#00ace6"
	};
	_0x1CEEA = "mining";
	_0x1D748 = getLevel(getItem(_0x1CEEA + "Xp"));
	document.getElementById("span-topBar-" + _0x1CEEA + "Level").innerHTML = _0x1D748;
	_0x1E0F6 = (getItem(_0x1CEEA + "Xp") - getXpNeeded(getLevel(getItem(_0x1CEEA + "Xp")))) / (getXpNeeded(1 + getLevel(getItem(_0x1CEEA + "Xp"))) - getXpNeeded(getLevel(getItem(_0x1CEEA + "Xp"))));
	if (_0x1E0F6 > 1)
	{
		_0x1E0F6 = 1
	};
	document.getElementById("xp-bar-" + _0x1CEEA + "-inner").style.width = parseInt(_0x1E0F6 * 100) + "%";
	if (_0x1D748 >= 100)
	{
		document.getElementById("xp-bar-" + _0x1CEEA + "-inner").style.backgroundColor = "#00ace6"
	};
	_0x1CEEA = "crafting";
	_0x1D748 = getLevel(getItem(_0x1CEEA + "Xp"));
	document.getElementById("span-topBar-" + _0x1CEEA + "Level").innerHTML = _0x1D748;
	_0x1E0F6 = (getItem(_0x1CEEA + "Xp") - getXpNeeded(getLevel(getItem(_0x1CEEA + "Xp")))) / (getXpNeeded(1 + getLevel(getItem(_0x1CEEA + "Xp"))) - getXpNeeded(getLevel(getItem(_0x1CEEA + "Xp"))));
	if (_0x1E0F6 > 1)
	{
		_0x1E0F6 = 1
	};
	document.getElementById("xp-bar-" + _0x1CEEA + "-inner").style.width = parseInt(_0x1E0F6 * 100) + "%";
	if (_0x1D748 >= 100)
	{
		document.getElementById("xp-bar-" + _0x1CEEA + "-inner").style.backgroundColor = "#00ace6"
	};
	_0x1CEEA = "woodcutting";
	_0x1D748 = getLevel(getItem(_0x1CEEA + "Xp"));
	document.getElementById("span-topBar-" + _0x1CEEA + "Level").innerHTML = _0x1D748;
	_0x1E0F6 = (getItem(_0x1CEEA + "Xp") - getXpNeeded(getLevel(getItem(_0x1CEEA + "Xp")))) / (getXpNeeded(1 + getLevel(getItem(_0x1CEEA + "Xp"))) - getXpNeeded(getLevel(getItem(_0x1CEEA + "Xp"))));
	if (_0x1E0F6 > 1)
	{
		_0x1E0F6 = 1
	};
	document.getElementById("xp-bar-" + _0x1CEEA + "-inner").style.width = parseInt(_0x1E0F6 * 100) + "%";
	if (_0x1D748 >= 100)
	{
		document.getElementById("xp-bar-" + _0x1CEEA + "-inner").style.backgroundColor = "#00ace6"
	};
	_0x1CEEA = "farming";
	_0x1D748 = getLevel(getItem(_0x1CEEA + "Xp"));
	document.getElementById("span-topBar-" + _0x1CEEA + "Level").innerHTML = _0x1D748;
	_0x1E0F6 = (getItem(_0x1CEEA + "Xp") - getXpNeeded(getLevel(getItem(_0x1CEEA + "Xp")))) / (getXpNeeded(1 + getLevel(getItem(_0x1CEEA + "Xp"))) - getXpNeeded(getLevel(getItem(_0x1CEEA + "Xp"))));
	if (_0x1E0F6 > 1)
	{
		_0x1E0F6 = 1
	};
	document.getElementById("xp-bar-" + _0x1CEEA + "-inner").style.width = parseInt(_0x1E0F6 * 100) + "%";
	if (_0x1D748 >= 100)
	{
		document.getElementById("xp-bar-" + _0x1CEEA + "-inner").style.backgroundColor = "#00ace6"
	};
	_0x1CEEA = "brewing";
	_0x1D748 = getLevel(getItem(_0x1CEEA + "Xp"));
	document.getElementById("span-topBar-" + _0x1CEEA + "Level").innerHTML = _0x1D748;
	_0x1E0F6 = (getItem(_0x1CEEA + "Xp") - getXpNeeded(getLevel(getItem(_0x1CEEA + "Xp")))) / (getXpNeeded(1 + getLevel(getItem(_0x1CEEA + "Xp"))) - getXpNeeded(getLevel(getItem(_0x1CEEA + "Xp"))));
	if (_0x1E0F6 > 1)
	{
		_0x1E0F6 = 1
	};
	document.getElementById("xp-bar-" + _0x1CEEA + "-inner").style.width = parseInt(_0x1E0F6 * 100) + "%";
	if (_0x1D748 >= 100)
	{
		document.getElementById("xp-bar-" + _0x1CEEA + "-inner").style.backgroundColor = "#00ace6"
	};
	_0x1CEEA = "fishing";
	_0x1D748 = getLevel(getItem(_0x1CEEA + "Xp"));
	document.getElementById("span-topBar-" + _0x1CEEA + "Level").innerHTML = _0x1D748;
	_0x1E0F6 = (getItem(_0x1CEEA + "Xp") - getXpNeeded(getLevel(getItem(_0x1CEEA + "Xp")))) / (getXpNeeded(1 + getLevel(getItem(_0x1CEEA + "Xp"))) - getXpNeeded(getLevel(getItem(_0x1CEEA + "Xp"))));
	if (_0x1E0F6 > 1)
	{
		_0x1E0F6 = 1
	};
	document.getElementById("xp-bar-" + _0x1CEEA + "-inner").style.minWidth = parseInt(_0x1E0F6 * 100) + "%";
	if (_0x1D748 >= 100)
	{
		document.getElementById("xp-bar-" + _0x1CEEA + "-inner").style.backgroundColor = "#00ace6"
	};
	_0x1CEEA = "cooking";
	_0x1D748 = getLevel(getItem(_0x1CEEA + "Xp"));
	document.getElementById("span-topBar-" + _0x1CEEA + "Level").innerHTML = _0x1D748;
	_0x1E0F6 = (getItem(_0x1CEEA + "Xp") - getXpNeeded(getLevel(getItem(_0x1CEEA + "Xp")))) / (getXpNeeded(1 + getLevel(getItem(_0x1CEEA + "Xp"))) - getXpNeeded(getLevel(getItem(_0x1CEEA + "Xp"))));
	if (_0x1E0F6 > 1)
	{
		_0x1E0F6 = 1
	};
	document.getElementById("xp-bar-" + _0x1CEEA + "-inner").style.minWidth = parseInt(_0x1E0F6 * 100) + "%";
	if (_0x1D748 >= 100)
	{
		document.getElementById("xp-bar-" + _0x1CEEA + "-inner").style.backgroundColor = "#00ace6"
	}
}

function getSkillBackgroundColor(_0x1CAFA)
{
	switch (_0x1CAFA)
	{
	case "combat":
		return "#e6ac00";
		break
	}
}
var global_inLevelUpAnimationFlag = false;

function levelUp(_0x1CAFA, _0x1D748)
{
	document.getElementById("top-bar-skills").style.display = "none";
	document.getElementById("top-bar-level-up").style.display = "";
	document.getElementById("top-bar-level-up").style.backgroundColor = getSkillBackgroundColor(_0x1CAFA);
	document.getElementById("level-up-msg-area-td").innerHTML = "<img src=\'images/" + _0x1CAFA + "Skill.png\' class=\'img-50\' /> " + "<b>LEVEL UP: </b>" + _0x1D748 + " <img src=\'images/" + _0x1CAFA + "Skill.png\' class=\'img-50\' />";
	if (!global_inLevelUpAnimationFlag)
	{
		global_inLevelUpAnimationFlag = true;
		for (var _0x1C6B6 = 0; _0x1C6B6 < 10; _0x1C6B6++)
		{
			if (_0x1C6B6 % 2 == 0)
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

function getEnergyRequired(_0x1CF5A)
{
	var _0x1D26A = 0;
	switch (_0x1CF5A)
	{
	case "fields":
		_0x1D26A = 50;
		break;
	case "forest":
		_0x1D26A = 200;
		break
	};
	return _0x1D26A
}

function getAreaCooldown(_0x1CF5A)
{
	var _0x1D358 = 0;
	switch (_0x1CF5A)
	{
	case "fields":
		_0x1D358 = 3600 / 4;
		break;
	case "forest":
		_0x1D358 = 3600 / 2;
		break
	};
	return _0x1D358
}

function getEncountersImgArrayForAreaareaChosen(_0x1CF5A)
{
	_0x1CF5A = _0x1CF5A.toLowerCase();
	var _0x1D390 = [];
	var _0x1CEEA = "";
	switch (_0x1CF5A)
	{
	case "fields":
		var _0x1D3BA = false;
		var _0x1D39E = [];
		_0x1CEEA = "chicken";
		if (getItem(_0x1CEEA + "Kills") >= 100)
		{
			_0x1D390.push("images/" + _0x1CEEA + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1CEEA + "Kills") >= 30)
			{
				_0x1D390.push("images/" + _0x1CEEA + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1CEEA + "Kills") >= 1)
				{
					_0x1D390.push("images/" + _0x1CEEA + "Monster_green.png")
				}
				else
				{
					_0x1D390.push("images/" + _0x1CEEA + "Monster_black.png")
				}
			}
		};
		_0x1D39E[0] = getItem(_0x1CEEA + "Kills");
		_0x1CEEA = "rat";
		if (getItem(_0x1CEEA + "Kills") >= 100)
		{
			_0x1D390.push("images/" + _0x1CEEA + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1CEEA + "Kills") >= 30)
			{
				_0x1D390.push("images/" + _0x1CEEA + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1CEEA + "Kills") >= 1)
				{
					_0x1D390.push("images/" + _0x1CEEA + "Monster_green.png")
				}
				else
				{
					_0x1D390.push("images/" + _0x1CEEA + "Monster_black.png")
				}
			}
		};
		_0x1D39E[1] = getItem(_0x1CEEA + "Kills");
		_0x1CEEA = "bee";
		if (getItem(_0x1CEEA + "Kills") >= 100)
		{
			_0x1D390.push("images/" + _0x1CEEA + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1CEEA + "Kills") >= 30)
			{
				_0x1D390.push("images/" + _0x1CEEA + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1CEEA + "Kills") >= 1)
				{
					_0x1D390.push("images/" + _0x1CEEA + "Monster_green.png")
				}
				else
				{
					_0x1D390.push("images/" + _0x1CEEA + "Monster_black.png")
				}
			}
		};
		_0x1D39E[2] = getItem(_0x1CEEA + "Kills");
		var _0x1D3AC = "images/redFightMarker.gif";
		if (Math.min.apply(null, _0x1D39E) >= 100)
		{
			_0x1D3AC = "images/blueFightMarker.gif"
		}
		else
		{
			if (Math.min.apply(null, _0x1D39E) >= 1)
			{
				_0x1D3AC = "images/greenFightMarker.gif"
			}
			else
			{
				for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1D39E.length; _0x1C6B6++)
				{
					if (_0x1D39E[0] > 0)
					{
						_0x1D3AC = "images/yellowFightMarker.gif";
						break
					}
				}
			}
		};
		_0x1D390.push(_0x1D3AC);
		break;
	case "forest":
		var _0x1D3BA = false;
		var _0x1D39E = [];
		_0x1CEEA = "snake";
		if (getItem(_0x1CEEA + "Kills") >= 100)
		{
			_0x1D390.push("images/" + _0x1CEEA + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1CEEA + "Kills") >= 30)
			{
				_0x1D390.push("images/" + _0x1CEEA + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1CEEA + "Kills") >= 1)
				{
					_0x1D390.push("images/" + _0x1CEEA + "Monster_green.png")
				}
				else
				{
					_0x1D390.push("images/" + _0x1CEEA + "Monster_black.png")
				}
			}
		};
		_0x1D39E[0] = getItem(_0x1CEEA + "Kills");
		_0x1CEEA = "ent";
		if (getItem(_0x1CEEA + "Kills") >= 100)
		{
			_0x1D390.push("images/" + _0x1CEEA + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1CEEA + "Kills") >= 30)
			{
				_0x1D390.push("images/" + _0x1CEEA + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1CEEA + "Kills") >= 1)
				{
					_0x1D390.push("images/" + _0x1CEEA + "Monster_green.png")
				}
				else
				{
					_0x1D390.push("images/" + _0x1CEEA + "Monster_black.png")
				}
			}
		};
		_0x1D39E[1] = getItem(_0x1CEEA + "Kills");
		_0x1CEEA = "thief";
		if (getItem(_0x1CEEA + "Kills") >= 100)
		{
			_0x1D390.push("images/" + _0x1CEEA + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1CEEA + "Kills") >= 30)
			{
				_0x1D390.push("images/" + _0x1CEEA + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1CEEA + "Kills") >= 1)
				{
					_0x1D390.push("images/" + _0x1CEEA + "Monster_green.png")
				}
				else
				{
					_0x1D390.push("images/" + _0x1CEEA + "Monster_black.png")
				}
			}
		};
		_0x1D39E[2] = getItem(_0x1CEEA + "Kills");
		var _0x1D3AC = "images/redFightMarker.gif";
		if (Math.min.apply(null, _0x1D39E) >= 100)
		{
			_0x1D3AC = "images/blueFightMarker.gif"
		}
		else
		{
			if (Math.min.apply(null, _0x1D39E) >= 1)
			{
				_0x1D3AC = "images/greenFightMarker.gif"
			}
			else
			{
				for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1D39E.length; _0x1C6B6++)
				{
					if (_0x1D39E[0] > 0)
					{
						_0x1D3AC = "images/yellowFightMarker.gif";
						break
					}
				}
			}
		};
		_0x1D390.push(_0x1D3AC);
		break;
	case "caves":
		var _0x1D3BA = false;
		var _0x1D39E = [];
		_0x1CEEA = "bear";
		if (getItem(_0x1CEEA + "Kills") >= 100)
		{
			_0x1D390.push("images/" + _0x1CEEA + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1CEEA + "Kills") >= 30)
			{
				_0x1D390.push("images/" + _0x1CEEA + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1CEEA + "Kills") >= 1)
				{
					_0x1D390.push("images/" + _0x1CEEA + "Monster_green.png")
				}
				else
				{
					_0x1D390.push("images/" + _0x1CEEA + "Monster_black.png")
				}
			}
		};
		_0x1D39E[0] = getItem(_0x1CEEA + "Kills");
		_0x1CEEA = "spider";
		if (getItem(_0x1CEEA + "Kills") >= 100)
		{
			_0x1D390.push("images/" + _0x1CEEA + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1CEEA + "Kills") >= 30)
			{
				_0x1D390.push("images/" + _0x1CEEA + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1CEEA + "Kills") >= 1)
				{
					_0x1D390.push("images/" + _0x1CEEA + "Monster_green.png")
				}
				else
				{
					_0x1D390.push("images/" + _0x1CEEA + "Monster_black.png")
				}
			}
		};
		_0x1D39E[1] = getItem(_0x1CEEA + "Kills");
		_0x1CEEA = "skeleton";
		if (getItem(_0x1CEEA + "Kills") >= 100)
		{
			_0x1D390.push("images/" + _0x1CEEA + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1CEEA + "Kills") >= 30)
			{
				_0x1D390.push("images/" + _0x1CEEA + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1CEEA + "Kills") >= 1)
				{
					_0x1D390.push("images/" + _0x1CEEA + "Monster_green.png")
				}
				else
				{
					_0x1D390.push("images/" + _0x1CEEA + "Monster_black.png")
				}
			}
		};
		_0x1D39E[2] = getItem(_0x1CEEA + "Kills");
		var _0x1D3AC = "images/redFightMarker.gif";
		if (Math.min.apply(null, _0x1D39E) >= 100)
		{
			_0x1D3AC = "images/blueFightMarker.gif"
		}
		else
		{
			if (Math.min.apply(null, _0x1D39E) >= 1)
			{
				_0x1D3AC = "images/greenFightMarker.gif"
			}
			else
			{
				for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1D39E.length; _0x1C6B6++)
				{
					if (_0x1D39E[0] > 0)
					{
						_0x1D3AC = "images/yellowFightMarker.gif";
						break
					}
				}
			}
		};
		_0x1D390.push(_0x1D3AC);
		break;
	case "lavadungeon":
		var _0x1D3BA = false;
		var _0x1D39E = [];
		_0x1CEEA = "lavaAlien";
		if (getItem(_0x1CEEA + "Kills") >= 100)
		{
			_0x1D390.push("images/" + _0x1CEEA + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1CEEA + "Kills") >= 30)
			{
				_0x1D390.push("images/" + _0x1CEEA + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1CEEA + "Kills") >= 1)
				{
					_0x1D390.push("images/" + _0x1CEEA + "Monster_green.png")
				}
				else
				{
					_0x1D390.push("images/" + _0x1CEEA + "Monster_black.png")
				}
			}
		};
		_0x1D39E[0] = getItem(_0x1CEEA + "Kills");
		_0x1CEEA = "bat";
		if (getItem(_0x1CEEA + "Kills") >= 100)
		{
			_0x1D390.push("images/" + _0x1CEEA + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1CEEA + "Kills") >= 30)
			{
				_0x1D390.push("images/" + _0x1CEEA + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1CEEA + "Kills") >= 1)
				{
					_0x1D390.push("images/" + _0x1CEEA + "Monster_green.png")
				}
				else
				{
					_0x1D390.push("images/" + _0x1CEEA + "Monster_black.png")
				}
			}
		};
		_0x1D39E[1] = getItem(_0x1CEEA + "Kills");
		_0x1CEEA = "fireMage";
		if (getItem(_0x1CEEA + "Kills") >= 100)
		{
			_0x1D390.push("images/" + _0x1CEEA + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1CEEA + "Kills") >= 30)
			{
				_0x1D390.push("images/" + _0x1CEEA + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1CEEA + "Kills") >= 1)
				{
					_0x1D390.push("images/" + _0x1CEEA + "Monster_green.png")
				}
				else
				{
					_0x1D390.push("images/" + _0x1CEEA + "Monster_black.png")
				}
			}
		};
		_0x1D39E[2] = getItem(_0x1CEEA + "Kills");
		var _0x1D3AC = "images/redFightMarker.gif";
		if (Math.min.apply(null, _0x1D39E) >= 100)
		{
			_0x1D3AC = "images/blueFightMarker.gif"
		}
		else
		{
			if (Math.min.apply(null, _0x1D39E) >= 1)
			{
				_0x1D3AC = "images/greenFightMarker.gif"
			}
			else
			{
				for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1D39E.length; _0x1C6B6++)
				{
					if (_0x1D39E[0] > 0)
					{
						_0x1D3AC = "images/yellowFightMarker.gif";
						break
					}
				}
			}
		};
		_0x1D390.push(_0x1D3AC);
		break;
	case "northernfields":
		var _0x1D3BA = false;
		var _0x1D39E = [];
		_0x1CEEA = "boneHead";
		if (getItem(_0x1CEEA + "Kills") >= 100)
		{
			_0x1D390.push("images/" + _0x1CEEA + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1CEEA + "Kills") >= 30)
			{
				_0x1D390.push("images/" + _0x1CEEA + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1CEEA + "Kills") >= 1)
				{
					_0x1D390.push("images/" + _0x1CEEA + "Monster_green.png")
				}
				else
				{
					_0x1D390.push("images/" + _0x1CEEA + "Monster_black.png")
				}
			}
		};
		_0x1D39E[0] = getItem(_0x1CEEA + "Kills");
		_0x1CEEA = "mammaPolarBear";
		if (getItem(_0x1CEEA + "Kills") >= 100)
		{
			_0x1D390.push("images/" + _0x1CEEA + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1CEEA + "Kills") >= 30)
			{
				_0x1D390.push("images/" + _0x1CEEA + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1CEEA + "Kills") >= 1)
				{
					_0x1D390.push("images/" + _0x1CEEA + "Monster_green.png")
				}
				else
				{
					_0x1D390.push("images/" + _0x1CEEA + "Monster_black.png")
				}
			}
		};
		_0x1D39E[1] = getItem(_0x1CEEA + "Kills");
		_0x1CEEA = "yeti";
		if (getItem(_0x1CEEA + "Kills") >= 100)
		{
			_0x1D390.push("images/" + _0x1CEEA + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1CEEA + "Kills") >= 30)
			{
				_0x1D390.push("images/" + _0x1CEEA + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1CEEA + "Kills") >= 1)
				{
					_0x1D390.push("images/" + _0x1CEEA + "Monster_green.png")
				}
				else
				{
					_0x1D390.push("images/" + _0x1CEEA + "Monster_black.png")
				}
			}
		};
		_0x1D39E[2] = getItem(_0x1CEEA + "Kills");
		var _0x1D3AC = "images/redFightMarker.gif";
		if (Math.min.apply(null, _0x1D39E) >= 100)
		{
			_0x1D3AC = "images/blueFightMarker.gif"
		}
		else
		{
			if (Math.min.apply(null, _0x1D39E) >= 1)
			{
				_0x1D3AC = "images/greenFightMarker.gif"
			}
			else
			{
				for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1D39E.length; _0x1C6B6++)
				{
					if (_0x1D39E[0] > 0)
					{
						_0x1D3AC = "images/yellowFightMarker.gif";
						break
					}
				}
			}
		};
		_0x1D390.push(_0x1D3AC);
		break
	};
	return _0x1D390
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
	document.getElementById("top-bar-skills").style.display = "";
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
	document.getElementById("right-panel").style.display = "none";
	document.getElementById("notification-area").style.display = "none";
	document.getElementById("top-bar-skills").style.display = "none";
	document.getElementById("table-top-main-items").style.display = "none";
	document.getElementById("navigation-area-buttons").style.display = "none"
}

function exitCombatMap()
{
	document.getElementById("combat-map-div").style.display = "none";
	document.getElementById("top-bar-skills").style.display = "";
	document.getElementById("table-top-main-items").style.display = "";
	document.getElementById("notification-area").style.display = "";
	document.getElementById("right-panel").style.display = "";
	document.getElementById("navigation-area-buttons").style.display = "";
	navigate("right-combat")
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
	global_canvasFightingHero2D.drawImage(getImage("images/" + getItem("head", true) + "Equip.png", "hero_idle_head"), 0, global_idleFightingHeroCanvasTickFrame.getYValue());
	global_canvasFightingHero2D.drawImage(getImage("images/" + getItem("body", true) + "Equip.png", "hero_idle_body"), 0, global_idleFightingHeroCanvasTickFrame.getYValue());
	global_canvasFightingHero2D.drawImage(getImage("images/" + getItem("amulet", true) + "Equip.png", "hero_idle_amulet"), 0, global_idleFightingHeroCanvasTickFrame.getYValue());
	global_canvasFightingHero2D.drawImage(getImage("images/" + getItem("legs", true) + "Equip.png", "hero_idle_legs"), 0, global_idleFightingHeroCanvasTickFrame.getYValue() / 4);
	global_canvasFightingHero2D.drawImage(getImage("images/" + getItem("gloves", true) + "Equip.png", "hero_idle_gloves"), 0, global_idleFightingHeroCanvasTickFrame.getYValue());
	global_canvasFightingHero2D.drawImage(getImage("images/" + getItem("shield", true) + "Equip.png", "hero_fighting_shield"), 0, global_idleFightingHeroCanvasTickFrame.getYValue());
	global_canvasFightingHero2D.drawImage(getImage("images/" + getItem("weapon", true) + "Equip.png", "hero_fighting_weapon"), 0, global_idleFightingHeroCanvasTickFrame.getYValue());
	global_canvasFightingHero2D.drawImage(getImage("images/" + getItem("boots", true) + "Equip.png", "hero_idle_boots"), 0, 0);
	global_canvasFightingHero2D.drawImage(getImage("images/" + getItem("arrows", true) + "Equip.png", "hero_fighting_arrows"), 0, 0);
	global_heroHitAnimationHashSet.forEach((_0x1D224) => _0x1D224.draw(100, 350))
}

function clicksFightingButton(_0x1CF5A)
{
	var _0x1CF68 = "";
	if (getItem("heroHp") < getItem("heroMaxHp"))
	{
		_0x1CF68 = "<br /><br /><img src=\'images/heart.png\' class=\'img-30\' /> <i style=\'color:red\'>Warning, you do not have full heatlh.</i>"
	};
	if (getItemString("arrows") == "arrows" && getItemString("weapon") == "bow")
	{
		_0x1CF68 = "<br /><br /><img src=\'images/bow.png\' class=\'img-30\' /> <i style=\'color:red\'>Warning, no arrows equipped.</i>"
	};
	if (getItem("giantSnakeTimer") > 0 && _0x1CF5A == "forest")
	{
		confirmDialogue2("images/warning.png", "There is currently a giant snake roaming the forest.  If you manage to find it, would you like to fight it?<br /><br /><span style=\'color:grey\'>The giant snake is not 100% guaranteed.</span>", "Yes, I\'m not scared!", "No, fight normal forest monsters", "Cancel", "FIGHT_WITH_GIANT_SNAKE=" + _0x1CF5A, "FIGHT=" + _0x1CF5A)
	}
	else
	{
		if (getItem("honey") > 0 && _0x1CF5A == "caves")
		{
			confirmDialogue2("images/honey.png", "Would you like to bring honey with you?<br /><br /><span style=\'color:grey\'>You will lose the honey when combat begins.</span>", "Bring 1 honey", "No, just find a fight", "Cancel", "FIGHT_WITH_ONE_HONEY=" + _0x1CF5A, "FIGHT=" + _0x1CF5A)
		}
		else
		{
			confirmDialogue("none", "<center><img src=\'images/" + _0x1CF5A + ".png\' /><br /><br />Look for a fight in the <b>" + getItemName(_0x1CF5A) + "</b>?" + _0x1CF68 + "</center>", "Fight", "Run", "FIGHT=" + _0x1CF5A)
		}
	};
	exitCombatMap()
}

function clicksFightingBossButton(_0x1CF4C)
{
	if (_0x1CF4C == "fireHawk")
	{
		confirmDialogue("none", "<center><img src=\'images/bossMarker.gif\' /><br /><br />Fight this boss?<br /><br /><span style=\'color:red\'>It is extremely hot in here.</span></center>", "Fight", "Run", "FIGHT_BOSS=" + _0x1CF4C)
	}
	else
	{
		confirmDialogue("none", "<center><img src=\'images/bossMarker.gif\' /><br /><br />Fight this boss?</center>", "Fight", "Run", "FIGHT_BOSS=" + _0x1CF4C)
	};
	exitCombatMap()
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
		var _0x1CC12 = this.idleAnimationObject;
		for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1CC12.getNumberOfFrames(); _0x1C6B6++)
		{
			var _0x1CC20 = getImage("images/" + this.name + "_" + "monster" + "_" + _0x1CC12.name + "_" + _0x1CC12.framesArray[_0x1C6B6] + ".png", this.name + "_" + _0x1C6B6 + "_" + _0x1CC12);
			$("#section-combat-loader").append(_0x1CC20)
		}
	};
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			this.frameAt++;
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
		var _0x1CC12 = this.idleAnimationObject;
		for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1CC12.getNumberOfFrames(); _0x1C6B6++)
		{
			var _0x1CC20 = getImage("images/" + this.name + "_" + "monster" + "_" + _0x1CC12.name + "_" + _0x1CC12.framesArray[_0x1C6B6] + ".png", this.name + "_" + _0x1C6B6 + "_" + _0x1CC12);
			$("#section-combat-loader").append(_0x1CC20)
		}
	};
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			this.frameAt++;
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
		var _0x1CC12 = this.idleAnimationObject;
		for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1CC12.getNumberOfFrames(); _0x1C6B6++)
		{
			var _0x1CC20 = getImage("images/" + this.name + "_" + "monster" + "_" + _0x1CC12.name + "_" + _0x1CC12.framesArray[_0x1C6B6] + ".png", this.name + "_" + _0x1C6B6 + "_" + _0x1CC12);
			$("#section-combat-loader").append(_0x1CC20)
		}
	};
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			this.frameAt++;
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
		var _0x1CC12 = this.idleAnimationObject;
		for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1CC12.getNumberOfFrames(); _0x1C6B6++)
		{
			var _0x1CC20 = getImage("images/" + this.name + "_" + "monster" + "_" + _0x1CC12.name + "_" + _0x1CC12.framesArray[_0x1C6B6] + ".png", this.name + "_" + _0x1C6B6 + "_" + _0x1CC12);
			$("#section-combat-loader").append(_0x1CC20)
		}
	};
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			this.frameAt++;
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
			this.frameAt++;
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
		var _0x1CC12 = this.idleAnimationObject;
		for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1CC12.getNumberOfFrames(); _0x1C6B6++)
		{
			var _0x1CC20 = getImage("images/" + this.name + "_" + "monster" + "_" + _0x1CC12.name + "_" + _0x1CC12.framesArray[_0x1C6B6] + ".png", this.name + "_" + [_0x1C6B6] + "_" + _0x1CC12);
			$("#section-combat-loader").append(_0x1CC20)
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
			this.frameAt++;
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
		var _0x1CC12 = this.idleAnimationObject;
		for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1CC12.getNumberOfFrames(); _0x1C6B6++)
		{
			var _0x1CC20 = getImage("images/" + this.name + "_" + "monster" + "_" + _0x1CC12.name + "_" + _0x1CC12.framesArray[_0x1C6B6] + ".png", this.name + "_" + [_0x1C6B6] + "_" + _0x1CC12);
			$("#section-combat-loader").append(_0x1CC20)
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
			this.frameAt++;
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
		var _0x1CC12 = this.idleAnimationObject;
		for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1CC12.getNumberOfFrames(); _0x1C6B6++)
		{
			var _0x1CC20 = getImage("images/" + this.name + "_" + "monster" + "_" + _0x1CC12.name + "_" + _0x1CC12.framesArray[_0x1C6B6] + ".png", this.name + "_" + [_0x1C6B6] + "_" + _0x1CC12);
			$("#section-combat-loader").append(_0x1CC20)
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
		var _0x1CC12 = this.idleAnimationObject;
		for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1CC12.getNumberOfFrames(); _0x1C6B6++)
		{
			var _0x1CC20 = getImage("images/" + this.name + "_" + "monster" + "_" + _0x1CC12.name + "_" + _0x1CC12.framesArray[_0x1C6B6] + ".png", this.name + "_" + _0x1C6B6 + "_" + _0x1CC12);
			$("#section-combat-loader").append(_0x1CC20)
		}
	};
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			this.frameAt++;
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
		var _0x1CC12 = this.idleAnimationObject;
		for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1CC12.getNumberOfFrames(); _0x1C6B6++)
		{
			var _0x1CC20 = getImage("images/" + this.name + "_" + "monster" + "_" + _0x1CC12.name + "_" + _0x1CC12.framesArray[_0x1C6B6] + ".png", this.name + "_" + _0x1C6B6 + "_" + _0x1CC12);
			$("#section-combat-loader").append(_0x1CC20)
		}
	};
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			this.frameAt++;
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
		var _0x1CC12 = this.idleAnimationObject;
		for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1CC12.getNumberOfFrames(); _0x1C6B6++)
		{
			var _0x1CC20 = getImage("images/" + this.name + "_" + "monster" + "_" + _0x1CC12.name + "_" + _0x1CC12.framesArray[_0x1C6B6] + ".png", this.name + "_" + _0x1C6B6 + "_" + _0x1CC12);
			$("#section-combat-loader").append(_0x1CC20)
		}
	};
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			this.frameAt++;
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
		var _0x1CC12 = this.idleAnimationObject;
		for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1CC12.getNumberOfFrames(); _0x1C6B6++)
		{
			var _0x1CC20 = getImage("images/" + this.name + "_" + "monster" + "_" + _0x1CC12.name + "_" + _0x1CC12.framesArray[_0x1C6B6] + ".png", this.name + "_" + _0x1C6B6 + "_" + _0x1CC12);
			$("#section-combat-loader").append(_0x1CC20)
		}
	};
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			this.frameAt++;
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
	this.callAnimation = function (_0x1CC2E)
	{
		switch (_0x1CC2E)
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
		var _0x1CC12 = this.idleAnimationObject;
		for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1CC12.getNumberOfFrames(); _0x1C6B6++)
		{
			var _0x1CC20 = getImage("images/" + this.name + "_" + "monster" + "_" + _0x1CC12.name + "_" + _0x1CC12.framesArray[_0x1C6B6] + ".png", this.name + "_" + _0x1C6B6 + "_" + _0x1CC12);
			$("#section-combat-loader").append(_0x1CC20)
		}
	};
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			this.frameAt++;
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
		var _0x1CC12 = this.idleAnimationObject;
		for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1CC12.getNumberOfFrames(); _0x1C6B6++)
		{
			var _0x1CC20 = getImage("images/" + this.name + "_" + "monster" + "_" + _0x1CC12.name + "_" + _0x1CC12.framesArray[_0x1C6B6] + ".png", this.name + "_" + _0x1C6B6 + "_" + _0x1CC12);
			$("#section-combat-loader").append(_0x1CC20)
		}
	};
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			this.frameAt++;
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
		var _0x1CC12 = this.idleAnimationObject;
		for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1CC12.getNumberOfFrames(); _0x1C6B6++)
		{
			var _0x1CC20 = getImage("images/" + this.name + "_" + "monster" + "_" + _0x1CC12.name + "_" + _0x1CC12.framesArray[_0x1C6B6] + ".png", this.name + "_" + _0x1C6B6 + "_" + _0x1CC12);
			$("#section-combat-loader").append(_0x1CC20)
		}
	};
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			this.frameAt++;
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
		var _0x1CC12 = this.idleAnimationObject;
		for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1CC12.getNumberOfFrames(); _0x1C6B6++)
		{
			var _0x1CC20 = getImage("images/" + this.name + "_" + "monster" + "_" + _0x1CC12.name + "_" + _0x1CC12.framesArray[_0x1C6B6] + ".png", this.name + "_" + _0x1C6B6 + "_" + _0x1CC12);
			$("#section-combat-loader").append(_0x1CC20)
		}
	};
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			this.frameAt++;
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
		var _0x1CC12 = this.idleAnimationObject;
		for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1CC12.getNumberOfFrames(); _0x1C6B6++)
		{
			var _0x1CC20 = getImage("images/" + this.name + "_" + "monster" + "_" + _0x1CC12.name + "_" + _0x1CC12.framesArray[_0x1C6B6] + ".png", this.name + "_" + _0x1C6B6 + "_" + _0x1CC12);
			$("#section-combat-loader").append(_0x1CC20)
		}
	};
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			this.frameAt++;
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

function MonsterAnimation(_0x1D1EC, _0x1D9BE, _0x1D1FA)
{
	this.name = _0x1D1EC;
	this.framesArray = _0x1D9BE;
	this.speed = _0x1D1FA;
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
		var _0x1CC12 = this.idleAnimationObject;
		for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1CC12.getNumberOfFrames(); _0x1C6B6++)
		{
			var _0x1CC20 = getImage("images/" + this.name + "_" + "monster" + "_" + _0x1CC12.name + "_" + _0x1CC12.framesArray[_0x1C6B6] + ".png", this.name + "_" + _0x1C6B6 + "_" + _0x1CC12);
			$("#section-combat-loader").append(_0x1CC20)
		}
	};
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			this.frameAt++;
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
		var _0x1CC12 = this.idleAnimationObject;
		for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1CC12.getNumberOfFrames(); _0x1C6B6++)
		{
			var _0x1CC20 = getImage("images/" + this.name + "_" + "monster" + "_" + _0x1CC12.name + "_" + _0x1CC12.framesArray[_0x1C6B6] + ".png", this.name + "_" + _0x1CC12.framesArray[_0x1C6B6] + "_" + _0x1CC12);
			$("#section-combat-loader").append(_0x1CC20)
		};
		var _0x1CC12 = this.hideAnimationObject;
		for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1CC12.getNumberOfFrames(); _0x1C6B6++)
		{
			var _0x1CC20 = getImage("images/" + this.name + "_" + "monster" + "_" + _0x1CC12.name + "_" + _0x1CC12.framesArray[_0x1C6B6] + ".png", this.name + "_" + _0x1CC12.framesArray[_0x1C6B6] + "_" + _0x1CC12);
			$("#section-combat-loader").append(_0x1CC20)
		}
	};
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			this.frameAt++;
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
	this.callAnimation = function (_0x1CC2E)
	{
		switch (_0x1CC2E)
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
		var _0x1CC12 = this.idleAnimationObject;
		for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1CC12.getNumberOfFrames(); _0x1C6B6++)
		{
			var _0x1CC20 = getImage("images/" + this.name + "_" + "monster" + "_" + _0x1CC12.name + "_" + _0x1CC12.framesArray[_0x1C6B6] + ".png", this.name + "_" + _0x1CC12.framesArray[_0x1C6B6] + "_" + _0x1CC12);
			$("#section-combat-loader").append(_0x1CC20)
		};
		var _0x1CC12 = this.hideAnimationObject;
		for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1CC12.getNumberOfFrames(); _0x1C6B6++)
		{
			var _0x1CC20 = getImage("images/" + this.name + "_" + "monster" + "_" + _0x1CC12.name + "_" + _0x1CC12.framesArray[_0x1C6B6] + ".png", this.name + "_" + _0x1CC12.framesArray[_0x1C6B6] + "_" + _0x1CC12);
			$("#section-combat-loader").append(_0x1CC20)
		}
	};
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			this.frameAt++;
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
	this.callAnimation = function (_0x1CC2E)
	{
		switch (_0x1CC2E)
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
		var _0x1CC12 = this.idleAnimationObject;
		for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1CC12.getNumberOfFrames(); _0x1C6B6++)
		{
			var _0x1CC20 = getImage("images/" + this.name + "_" + "monster" + "_" + _0x1CC12.name + "_" + _0x1CC12.framesArray[_0x1C6B6] + ".png", this.name + "_" + _0x1CC12.framesArray[_0x1C6B6] + "_" + _0x1CC12);
			$("#section-combat-loader").append(_0x1CC20)
		};
		var _0x1CC12 = this.hideAnimationObject;
		for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1CC12.getNumberOfFrames(); _0x1C6B6++)
		{
			var _0x1CC20 = getImage("images/" + this.name + "_" + "monster" + "_" + _0x1CC12.name + "_" + _0x1CC12.framesArray[_0x1C6B6] + ".png", this.name + "_" + _0x1CC12.framesArray[_0x1C6B6] + "_" + _0x1CC12);
			$("#section-combat-loader").append(_0x1CC20)
		}
	};
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			this.frameAt++;
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
	this.callAnimation = function (_0x1CC2E)
	{
		switch (_0x1CC2E)
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
		var _0x1CC12 = this.idleAnimationObject;
		for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1CC12.getNumberOfFrames(); _0x1C6B6++)
		{
			var _0x1CC20 = getImage("images/" + this.name + "_" + "monster" + "_" + _0x1CC12.name + "_" + _0x1CC12.framesArray[_0x1C6B6] + ".png", this.name + "_" + _0x1CC12.framesArray[_0x1C6B6] + "_" + _0x1CC12);
			$("#section-combat-loader").append(_0x1CC20)
		};
		var _0x1CC12 = this.hideAnimationObject;
		for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1CC12.getNumberOfFrames(); _0x1C6B6++)
		{
			var _0x1CC20 = getImage("images/" + this.name + "_" + "monster" + "_" + _0x1CC12.name + "_" + _0x1CC12.framesArray[_0x1C6B6] + ".png", this.name + "_" + _0x1CC12.framesArray[_0x1C6B6] + "_" + _0x1CC12);
			$("#section-combat-loader").append(_0x1CC20)
		}
	};
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			this.frameAt++;
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
	this.callAnimation = function (_0x1CC2E)
	{
		switch (_0x1CC2E)
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
		var _0x1CC12 = this.idleAnimationObject;
		for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1CC12.getNumberOfFrames(); _0x1C6B6++)
		{
			var _0x1CC20 = getImage("images/" + this.name + "_" + "monster" + "_" + _0x1CC12.name + "_" + _0x1CC12.framesArray[_0x1C6B6] + ".png", this.name + "_" + _0x1CC12.framesArray[_0x1C6B6] + "_" + _0x1CC12);
			$("#section-combat-loader").append(_0x1CC20)
		};
		var _0x1CC12 = this.hideAnimationObject;
		for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1CC12.getNumberOfFrames(); _0x1C6B6++)
		{
			var _0x1CC20 = getImage("images/" + this.name + "_" + "monster" + "_" + _0x1CC12.name + "_" + _0x1CC12.framesArray[_0x1C6B6] + ".png", this.name + "_" + _0x1CC12.framesArray[_0x1C6B6] + "_" + _0x1CC12);
			$("#section-combat-loader").append(_0x1CC20)
		}
	};
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			this.frameAt++;
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
	this.callAnimation = function (_0x1CC2E)
	{
		switch (_0x1CC2E)
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
		var _0x1CC12 = this.idleAnimationObject;
		for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1CC12.getNumberOfFrames(); _0x1C6B6++)
		{
			var _0x1CC20 = getImage("images/" + this.name + "_" + "monster" + "_" + _0x1CC12.name + "_" + _0x1CC12.framesArray[_0x1C6B6] + ".png", this.name + "_" + _0x1CC12.framesArray[_0x1C6B6] + "_" + _0x1CC12);
			$("#section-combat-loader").append(_0x1CC20)
		};
		var _0x1CC12 = this.chargeAnimationObject;
		for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1CC12.getNumberOfFrames(); _0x1C6B6++)
		{
			var _0x1CC20 = getImage("images/" + this.name + "_" + "monster" + "_" + _0x1CC12.name + "_" + _0x1CC12.framesArray[_0x1C6B6] + ".png", this.name + "_" + _0x1CC12.framesArray[_0x1C6B6] + "_" + _0x1CC12);
			$("#section-combat-loader").append(_0x1CC20)
		}
	};
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			this.frameAt++;
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
	this.callAnimation = function (_0x1CC2E)
	{
		switch (_0x1CC2E)
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
		var _0x1CC12 = this.idleAnimationObject;
		for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1CC12.getNumberOfFrames(); _0x1C6B6++)
		{
			var _0x1CC20 = getImage("images/" + this.name + "_" + "monster" + "_" + _0x1CC12.name + "_" + _0x1CC12.framesArray[_0x1C6B6] + ".png", this.name + "_" + _0x1CC12.framesArray[_0x1C6B6] + "_" + _0x1CC12);
			$("#section-combat-loader").append(_0x1CC20)
		};
		var _0x1CC12 = this.chargeAnimationObject;
		for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1CC12.getNumberOfFrames(); _0x1C6B6++)
		{
			var _0x1CC20 = getImage("images/" + this.name + "_" + "monster" + "_" + _0x1CC12.name + "_" + _0x1CC12.framesArray[_0x1C6B6] + ".png", this.name + "_" + _0x1CC12.framesArray[_0x1C6B6] + "_" + _0x1CC12);
			$("#section-combat-loader").append(_0x1CC20)
		}
	};
	this.tick = function ()
	{
		animationObj = this.currentAnimation;
		if (this.speedAt == animationObj.speed)
		{
			this.frameAt++;
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
	this.callAnimation = function (_0x1CC2E)
	{
		switch (_0x1CC2E)
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

function startMonsterAnimation(_0x1CC2E)
{
	if (_0x1CC2E.startsWith("shake"))
	{
		var _0x1E318 = _0x1CC2E.split("~")[1];
		global_monsterShake = true;
		setTimeout(function ()
		{
			global_monsterShake = false
		}, parseInt(_0x1E318 * 1000))
	}
	else
	{
		if (_0x1CC2E == 0)
		{
			resetAnimationOfCurrentFightToIdle()
		}
		else
		{
			getMonsterObject(getItem("monsterName")).callAnimation(parseInt(_0x1CC2E))
		}
	}
}
global_heroFlicker = false;

function startHeroAnimation(_0x1CC2E)
{
	if (_0x1CC2E.startsWith("flicker"))
	{
		global_heroFlicker = true;
		setTimeout(function ()
		{
			global_heroFlicker = false
		}, 3000)
	}
}

function getMonsterObject(_0x1D1EC)
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
	if (window.lavaAlienMonsterObj == null)
	{
		lavaAlienMonsterObj = new LavaAlienMonster();
		lavaAlienMonsterObj.preloadImages()
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
	if (_0x1D1EC == "bee" && window.beeMonsterObj == null)
	{
		beeMonsterObj = new BeeMonster();
		beeMonsterObj.preloadImages()
	};
	if (_0x1D1EC == "bat" && window.batMonsterObj == null)
	{
		batMonsterObj = new BatMonster();
		batMonsterObj.preloadImages()
	};
	if (_0x1D1EC == "fireMage" && window.fireMageMonsterObj == null)
	{
		fireMageMonsterObj = new FireMageMonster();
		fireMageMonsterObj.preloadImages()
	};
	if (_0x1D1EC == "boneHead" && window.boneHeadMonsterObj == null)
	{
		boneHeadMonsterObj = new BoneHeadMonster();
		boneHeadMonsterObj.preloadImages()
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
	switch (_0x1D1EC)
	{
	case "chicken":
		return chickenMonsterObj;
	case "bushy":
		return bushyMonsterObj;
	case "fireHawk":
		return fireHawkMonsterObj;
	case "lavaAlien":
		return lavaAlienMonsterObj;
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
	case "faradoxMinion":
		return faradoxMinionObj;
	case "faradoxMinion2":
		return faradoxMinion2Obj;
	case "skyChicken":
		return skyChickenMonsterObj;
	case "yeti":
		return yetiMonsterObj;
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
		return boneHeadMonsterObj
	};
	return "none"
}
var global_monsterHitAnimationHashSet = new Set();
var global_heroHitAnimationHashSet = new Set();

function addHitSplit(data)
{
	if (global_lastTabId == "right-combat-fighting")
	{
		var _0x1C75E = data.split("~");
		var _0x1C796 = _0x1C75E[0];
		var _0x1C7B2 = _0x1C75E[1];
		var _0x1C77A = _0x1C75E[2];
		var _0x1C742 = _0x1C75E[3];
		var _0x1C734 = _0x1C75E[4];
		var _0x1C788 = _0x1C75E[5];
		var _0x1C7A4 = getCurrentMillis();
		var _0x1C76C = new HitAnimation(_0x1C796, _0x1C7B2, _0x1C77A, _0x1C742, _0x1C734, _0x1C788, _0x1C7A4);
		if (_0x1C796 == "hero")
		{
			global_heroHitAnimationHashSet.add(_0x1C76C)
		}
		else
		{
			global_monsterHitAnimationHashSet.add(_0x1C76C)
		}
	}
}

function HitAnimation(_0x1C796, _0x1C7B2, _0x1C77A, _0x1C742, _0x1C734, _0x1C788, _0x1C7A4)
{
	this.target = _0x1C796;
	this.number = _0x1C7B2;
	this.icon = _0x1C77A;
	this.color = _0x1C742;
	this.borderColor = _0x1C734;
	this.otherInfo = _0x1C788;
	this.time = _0x1C7A4;
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
	this.draw = function (_0x1D5EA, _0x1D5F8)
	{
		var _0x1D5CE = global_canvasFightingMonster2D;
		if (this.target == "hero")
		{
			_0x1D5CE = global_canvasFightingHero2D
		};
		var _0x1D5B2 = 80;
		var _0x1D5C0 = 130;
		var _0x1D5DC = 60;
		if (this.number.length > 1)
		{
			_0x1D5C0 = 160
		};
		if (this.icon == "images/coins.png")
		{
			_0x1D5C0 = 800;
			_0x1D5EA = 0
		};
		_0x1D5CE.fillStyle = _0x1C742;
		_0x1D5CE.globalAlpha = 0.5;
		_0x1D5CE.fillRect(_0x1D5EA, _0x1D5F8 - this.getOffset(), _0x1D5C0, _0x1D5B2);
		_0x1D5CE.globalAlpha = 1.0;
		_0x1D5CE.fillStyle = this.borderColor;
		_0x1D5CE.strokeRect(_0x1D5EA, _0x1D5F8 - this.getOffset(), _0x1D5C0, _0x1D5B2);
		_0x1D5CE.drawImage(getImage(this.icon, this.target + "_hitsplat"), _0x1D5EA, _0x1D5F8 - this.getOffset(), _0x1D5B2, _0x1D5B2);
		_0x1D5CE.font = "60px Arial";
		_0x1D5CE.fillStyle = "black";
		_0x1D5CE.fillText(this.number, _0x1D5EA + 130 - 45, _0x1D5F8 - this.getOffset() + 60);
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

function fightingMonsterCanvasTick()
{
	if (global_lastTabId != "right-combat-fighting")
	{
		return
	};
	var _0x1D216 = getMonsterObject(getItem("monsterName"));
	if (_0x1D216 == "none")
	{
		return
	};
	global_canvasFightingMonster2D.clearRect(0, 0, global_canvasFightingMonster.width, global_canvasFightingMonster.height);
	if (getItem("monsterHp") == 0)
	{
		global_canvasFightingMonster2D.globalAlpha = 0.5;
		global_canvasFightingMonster2D.drawImage(_0x1D216.getDeathImage(), 50, global_canvasFightingMonster.height - _0x1D216.getHeight() - 50)
	}
	else
	{
		global_canvasFightingMonster2D.globalAlpha = 1.0;
		x = 50;
		y = global_canvasFightingMonster.height - _0x1D216.getHeight() - 50;
		if (global_monsterShake)
		{
			x += getRandomInt(10);
			y += getRandomInt(10)
		};
		global_canvasFightingMonster2D.shadowBlur = 15;
		global_canvasFightingMonster2D.shadowColor = "black";
		global_canvasFightingMonster2D.drawImage(_0x1D216.getImage(), x, y);
		if (getItem("combatCountDown") > 0)
		{
			global_canvasFightingMonster2D.font = "30px Arial";
			global_canvasFightingMonster2D.fillStyle = "yellow";
			global_canvasFightingMonster2D.fillText("Fighting in: " + getItem("combatCountDown"), 0, 200)
		}
	};
	_0x1D216.tick();
	global_monsterHitAnimationHashSet.forEach((_0x1D224) => _0x1D224.draw(50 + _0x1D216.getWidth() / 2.5, global_canvasFightingMonster.height - _0x1D216.getHeight() / 1.5))
}

function resetHeroNerfs()
{
	// var _0x1E19E = .heroDebuffPosion;
	// var _0x1C8AE = .images / poison.png;
	// var _0x1E174 = .Poisoned;
	// var _0x1E190 = [false];
	// var _0x1C85A = document.getElementById("combat-fight-hero-nerfs");
	// var _0x1CC4A = "";
	// for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1E19E.length; _0x1C6B6++)
	// {
	// 	var _0x1D1EC = _0x1E19E[_0x1C6B6];
	// 	var _0x1E182 = _0x1E190[_0x1C6B6];
	// 	var _0x1C7CE = _0x1E174[_0x1C6B6];
	// 	if (getItem(_0x1E19E[_0x1C6B6]) > 0)
	// 	{
	// 		_0x1CC4A += "<div style=\'float:right;border:1px solid grey;background-color:#222211;padding:5px; margin:5px;\'>";
	// 		_0x1CC4A += "<img src=\'" + _0x1C8AE + "\' class=\'img-40\' / > " + _0x1E174;
	// 		if (_0x1E190[_0x1C6B6])
	// 		{
	// 			_0x1CC4A += " <span style=\'color:grey\'>" + getItem(_0x1E19E[_0x1C6B6] + "Timer") + "</span>"
	// 		};
	// 		_0x1CC4A += "</div> "
	// 	}
	// };
	// _0x1C85A.innerHTML = _0x1CC4A
}

function hideOtherInterfacesForCombat(_0x1D5A4)
{
	if (_0x1D5A4)
	{
		document.getElementById("table-top-main-items").style.display = "none";
		document.getElementById("top-bar-skills").style.display = "none";
		document.getElementById("main-panel").style.display = "none";
		document.getElementById("navigation-area-buttons").style.display = "none";
		document.getElementById("chat-area").style.display = "none";
		document.getElementById("notification-area").style.display = "none";
		if (getItemString("currentFighingArea") != "none")
		{
			changeBodyBackground("images/" + getItemString("currentFighingArea") + "_background.png")
		}
	}
	else
	{
		document.getElementById("table-top-main-items").style.display = "";
		document.getElementById("top-bar-skills").style.display = "";
		document.getElementById("main-panel").style.display = "";
		document.getElementById("navigation-area-buttons").style.display = "";
		document.getElementById("notification-area").style.display = "";
		document.getElementById("chat-area").style.display = "";
		resetBodyBackground()
	}
}

function buttonsDialogue(_0x1CCC8, _0x1CCD6, _0x1CCE4, _0x1CCF2, _0x1CD00, _0x1CD0E, _0x1CD1C, _0x1CD2A, _0x1CC90, _0x1CC9E, _0x1CCAC, _0x1CCBA, _0x1CD46, _0x1CD54, _0x1CD62, _0x1CD70, _0x1CD7E, _0x1CC82)
{
	if (_0x1CCC8 == "none")
	{
		document.getElementById("dialogue-fancy-button-div-1").style.display = "none"
	}
	else
	{
		document.getElementById("dialogue-fancy-button-div-1").style.display = ""
	};
	if (_0x1CCD6 == "none")
	{
		document.getElementById("dialogue-fancy-button-div-2").style.display = "none"
	}
	else
	{
		document.getElementById("dialogue-fancy-button-div-2").style.display = ""
	};
	if (_0x1CCE4 == "none")
	{
		document.getElementById("dialogue-fancy-button-div-3").style.display = "none"
	}
	else
	{
		document.getElementById("dialogue-fancy-button-div-3").style.display = ""
	};
	if (_0x1CCF2 == "none")
	{
		document.getElementById("dialogue-fancy-button-div-4").style.display = "none"
	}
	else
	{
		document.getElementById("dialogue-fancy-button-div-4").style.display = ""
	};
	for (var _0x1C6B6 = 1; _0x1C6B6 <= 4; _0x1C6B6++)
	{
		var _0x1C8AE = window["btnImage" + _0x1C6B6];
		var _0x1C8E6 = window["btnTitle" + _0x1C6B6];
		var _0x1C7CE = window["btnDesc" + _0x1C6B6];
		var _0x1CD38 = window["cmd" + _0x1C6B6];
		if (_0x1C6B6 == 1)
		{
			var _0x1C8AE = _0x1CCC8;
			var _0x1C8E6 = _0x1CD00;
			var _0x1C7CE = _0x1CC90;
			var _0x1CD38 = _0x1CD46
		}
		else
		{
			if (_0x1C6B6 == 2)
			{
				var _0x1C8AE = _0x1CCD6;
				var _0x1C8E6 = _0x1CD0E;
				var _0x1C7CE = _0x1CC9E;
				var _0x1CD38 = _0x1CD54
			}
			else
			{
				if (_0x1C6B6 == 3)
				{
					var _0x1C8AE = _0x1CCE4;
					var _0x1C8E6 = _0x1CD1C;
					var _0x1C7CE = _0x1CCAC;
					var _0x1CD38 = _0x1CD62
				}
				else
				{
					if (_0x1C6B6 == 4)
					{
						var _0x1C8AE = _0x1CCF2;
						var _0x1C8E6 = _0x1CD2A;
						var _0x1C7CE = _0x1CCBA;
						var _0x1CD38 = _0x1CD70
					}
				}
			}
		};
		if (_0x1C8AE != "none")
		{
			document.getElementById("dialogue-fancy-button-div-" + _0x1C6B6).style.display = "";
			document.getElementById("dialogue-fancy-button-img-" + _0x1C6B6).src = _0x1C8AE;
			document.getElementById("dialogue-fancy-button-title-" + _0x1C6B6).innerHTML = _0x1C8E6;
			document.getElementById("dialogue-fancy-button-desc-" + _0x1C6B6).innerHTML = _0x1C7CE;
			document.getElementById("dialogue-fancy-button-div-" + _0x1C6B6).setAttribute("onclick", "sendBytes(\'" + _0x1CD38 + "\');closeDialogue(\'dialogue-fancy-buttons\')")
		}
	};
	document.getElementById("dialogue-fancy-buttons-top-div").innerHTML = _0x1CD7E;
	document.getElementById("dialogue-fancy-buttons-bottom-div").innerHTML = _0x1CC82;
	openDialogue("dialogue-fancy-buttons")
}

function changeBodyBackground(_0x1C8AE)
{
	if (_0x1C8AE == "none")
	{
		resetBodyBackground()
	}
	else
	{
		document.getElementById("body").style.backgroundImage = "url(\'" + _0x1C8AE + "\')"
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
	var _0x1DE3A = false;
	if (getItem("largeManaPotion") > 0)
	{
		document.getElementById("fighting-screen-potions-area-largeManaPotion").style.display = "";
		document.getElementById("fighting-screen-potions-area-largeManaPotion").style.filter = "brightness(100%)";
		_0x1DE3A = true
	};
	if (getItem("largeManaPotionUsed") == 1)
	{
		document.getElementById("fighting-screen-potions-area-largeManaPotion").style.display = "";
		document.getElementById("fighting-screen-potions-area-largeManaPotion").style.filter = "brightness(10%)"
	};
	if (_0x1DE3A)
	{
		document.getElementById("fighting-screen-potions-area").style.display = ""
	}
	else
	{
		document.getElementById("fighting-screen-potions-area").style.display = "none"
	}
}

function getRandomInt(_0x1D4E0)
{
	_0x1D4E0++;
	return Math.floor(Math.random() * Math.floor(_0x1D4E0))
}
var craftListGlobal = "none";

function CraftingRecipe(_0x1C83E, _0x1CAFA, _0x1CB08, _0x1CAC2, _0x1CAD0, _0x1CA6E, _0x1D0F0, _0x1CA8A)
{
	this.itemName = _0x1C83E;
	this.skill = _0x1CAFA;
	this.skillLevel = _0x1CB08;
	this.recipe = _0x1CAC2;
	this.recipeCost = _0x1CAD0;
	this.description = _0x1CA6E;
	this.isMultiCraft = _0x1D0F0;
	this.itemNameDisplay = _0x1CA8A
}
var magicTransformListGlobal = [];

function MagicTransformRecipe(_0x1C83E, _0x1CB40, _0x1CBCC, _0x1CBA2, _0x1CB5C, _0x1CB6A, _0x1CB78, _0x1CB86, _0x1CB4E)
{
	this.itemName = _0x1C83E;
	this.level = _0x1CB40;
	this.stardust = _0x1CBA2;
	this.output1 = _0x1CB5C;
	this.output2 = _0x1CB78;
	this.output1Amount = _0x1CB6A;
	this.output2Amount = _0x1CB86;
	this.obtainedItemVar = _0x1CB4E;
	this.xp = _0x1CBCC
}

function CooksBookRecipe(_0x1C83E, _0x1CAFA, _0x1CB08, _0x1CAC2, _0x1CAD0, _0x1CA6E, _0x1D0F0, _0x1CA8A, _0x1D0FE)
{
	this.itemName = _0x1C83E;
	this.skill = _0x1CAFA;
	this.skillLevel = _0x1CB08;
	this.recipe = _0x1CAC2;
	this.recipeCost = _0x1CAD0;
	this.description = _0x1CA6E;
	this.isMultiCraft = _0x1D0F0;
	this.itemNameDisplay = _0x1CA8A;
	this.timeToPrep = _0x1D0FE
}

function refreshMagicTransformList()
{
	var _0x1C85A = "convertMagic-section-2";
	var _0x1DDCA = [];
	document.getElementById(_0x1C85A).innerHTML = "";
	var _0x1DDD8 = "";
	var _0x1C8F4 = "";
	_0x1DDD8 = "stinger";
	_0x1DDCA[_0x1DDD8] = (new MagicTransformRecipe(_0x1DDD8, 5, 50, 5000, ["ironBars", "honey"], ["5 - 10", "1 - 2"], ["needle"], ["1"], "bee_" + _0x1DDD8));
	_0x1C8F4 += addTransformRecipeToTable(_0x1DDCA[_0x1DDD8], _0x1C85A);
	_0x1DDD8 = "ironDagger";
	_0x1DDCA[_0x1DDD8] = (new MagicTransformRecipe(_0x1DDD8, 15, 200, 10000, ["ironBars", "coins"], ["20 - 50", "1000 - 2000"], ["daggerBlade", "daggerHandle"], ["1", "1"], "thief_" + _0x1DDD8));
	_0x1C8F4 += addTransformRecipeToTable(_0x1DDCA[_0x1DDD8], _0x1C85A);
	_0x1DDD8 = "skeletonSword";
	_0x1DDCA[_0x1DDD8] = (new MagicTransformRecipe(_0x1DDD8, 30, 200, 50000, ["bones", "boneAmulet"], ["10 - 20", "1"], ["skeletonSwordMetal"], ["1"], "skeleton_" + _0x1DDD8));
	_0x1C8F4 += addTransformRecipeToTable(_0x1DDCA[_0x1DDD8], _0x1C85A);
	_0x1C8F4 = "<tr><th>Weapon</th><th></th><th><img src=\'images/magicSkill.png\' class=\'img-30\' /> Magic Level</th><th>Transforms</th><th>Special Transforms</th><th><img src=\'images/stardustIcon.png\' class=\'img-30\' /> Stardust Cost</th><th>XP</th><th>Casts</th></tr>" + _0x1C8F4;
	document.getElementById(_0x1C85A).innerHTML += "<table class=\'table-craftables\' width=\'90%\'>" + _0x1C8F4 + "</table><br />"
}

function switchCraftingType(_0x1D208)
{
	if (global_craftingType == _0x1D208)
	{
		global_craftingType = "default"
	}
	else
	{
		global_craftingType = _0x1D208
	}
}
global_craftingType = "default";

function refreshCraftables()
{
	var _0x1C85A = "item-section-crafting-2";
	var _0x1DD92 = [];
	var _0x1DD84 = "";
	document.getElementById(_0x1C85A).innerHTML = "";
	var _0x1C8F4 = "";
	if (global_craftingType == "houseBlueprint")
	{
		_0x1DD84 = "home1";
		if (getItem(_0x1DD84) == 0)
		{
			_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [1], ["stone", "logs", "houseBlueprint"], [20, 5, 1], "A new home to live in.<br /><br /><i style=\'font-size:12pt\'>You live a simple life and value friends and family.  You tend to help others before yourself.  You are also too nice and sometimes get taken advantage of.</i>", false, "Cottage"));
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		};
		_0x1DD84 = "home2";
		if (getItem(_0x1DD84) == 0)
		{
			_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [1], ["stone", "logs", "houseBlueprint"], [100, 5, 1], "A new home to live in.<br /><br /><i style=\'font-size:12pt\'>You honor leadership and loyalty.  Treason is a crime and is severely punished and you are not afraid to kill for the better of your people.</i>", false, "Castle"));
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		};
		_0x1DD84 = "home3";
		if (getItem(_0x1DD84) == 0)
		{
			_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [1], ["ironBars", "logs", "coins", "houseBlueprint"], [10, 10, 1000, 1], "A new home to live in.<br /><br /><i style=\'font-size:12pt\'>You enjoy business and long hours.  You spend most of your time out of the house making sales.</i>", false, "Mansion"));
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		}
	};
	if (global_craftingType == "museumBlueprint")
	{
		_0x1DD84 = "museum";
		if (getItem(_0x1DD84) == 0)
		{
			_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [10], ["stone", "museumBlueprint"], [100, 1], "A museum to start trade in rare items for coins.", false, "Museum"));
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		}
	};
	if (global_craftingType == "brewingKitMould")
	{
		_0x1DD84 = "brewingKit";
		if (getItem(_0x1DD84) == 0)
		{
			_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [4], ["stone", "ironBars", "brewingKitMould"], [10, 5, 1], "Unlocks the brewing skill.", false, "Brewing kit"));
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		}
	};
	if (global_craftingType == "offhandIronDagger")
	{
		_0x1DD84 = "offhandIronDagger";
		{
			_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [35], ["daggerHandle", "daggerBlade"], [1, 1], "An offhand iron dagger.", false, "Offhand Dagger"));
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		}
	};
	if (global_craftingType == "boneAmuletPlus")
	{
		_0x1DD84 = "boneAmuletPlus";
		{
			_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [50], ["boneAmulet", "skeletonSwordMetal"], [1, 5], "An upgraded bone amulet.", false, "Bone Amulet+"));
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		}
	};
	if (global_craftingType == "bowBase")
	{
		_0x1DD84 = "bow";
		{
			_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [40], ["bowBase", "string"], [1, 50], "A bow used for combat.  Requires arrows.", false, "Bow"));
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		}
	};
	if (global_craftingType == "needle")
	{
		_0x1DD84 = "snakeskin";
		_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [10], ["snakeskinMask"], [1], "Undo snakeskin armour.", false, "Snakeskin"));
		_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A);
		_0x1DD84 = "snakeskin";
		_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [10], ["snakeskinBody"], [1], "Undo snakeskin armour.", false, "Snakeskin"));
		_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A);
		_0x1DD84 = "snakeskin";
		_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [10], ["snakeskinLegs"], [1], "Undo snakeskin armour.", false, "Snakeskin"));
		_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A);
		_0x1DD84 = "snakeskin";
		_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [10], ["snakeskinBoots"], [1], "Undo snakeskin armour.", false, "Snakeskin"));
		_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A);
		_0x1DD84 = "snakeskin";
		_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [10], ["snakeskinGloves"], [1], "Undo snakeskin armour.", false, "Snakeskin"));
		_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
	};
	if (global_craftingType == "feather")
	{
		_0x1DD84 = "arrow";
		_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [10], ["feather", "logs", "bones"], [1, 1, 1], "Used to with a bow.", true, "Arrow"));
		_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
	};
	if (global_craftingType == "fireFeather")
	{
		_0x1DD84 = "fireArrow";
		_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [40], ["fireFeather", "lavaLogs", "bones"], [1, 1, 1], "Used to with a bow.", true, "Fire Arrow"));
		_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
	};
	if (global_craftingType == "snakeskin")
	{
		_0x1DD84 = "snakeskinMask";
		_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [10], ["snakeskin"], [3], "A piece of equipment.", false, "Snakeskin Mask"));
		_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A);
		_0x1DD84 = "snakeskinBody";
		_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [10], ["snakeskin"], [10], "A piece of equipment.", false, "Snakeskin Body"));
		_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A);
		_0x1DD84 = "snakeskinLegs";
		_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [10], ["snakeskin"], [6], "A piece of equipment.", false, "Snakeskin Legs"));
		_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A);
		_0x1DD84 = "snakeskinBoots";
		_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [10], ["snakeskin"], [3], "A piece of equipment.", false, "Snakeskin Boots"));
		_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A);
		_0x1DD84 = "snakeskinGloves";
		_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [10], ["snakeskin"], [3], "A piece of equipment.", false, "Snakeskin Gloves"));
		_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
	};
	if (global_craftingType == "bearFur")
	{
		_0x1DD84 = "bearFurMask";
		_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [20], ["bearFur"], [3], "A piece of equipment.", false, "Bear Mask"));
		_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A);
		_0x1DD84 = "bearFurBody";
		_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [20], ["bearFur"], [10], "A piece of equipment.", false, "Bear Body"));
		_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A);
		_0x1DD84 = "bearFurLegs";
		_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [20], ["bearFur"], [6], "A piece of equipment.", false, "Bear Legs"));
		_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A);
		_0x1DD84 = "bearFurBoots";
		_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [20], ["bearFur"], [3], "A piece of equipment.", false, "Bear Boots"));
		_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A);
		_0x1DD84 = "bearFurGloves";
		_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [20], ["bearFur"], [3], "A piece of equipment.", false, "Bear Gloves"));
		_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
	};
	if (global_craftingType == "polarBearFur")
	{
		_0x1DD84 = "polarBearFurMask";
		_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [35], ["polarBearFur"], [3], "A piece of equipment.", false, "Bear Mask"));
		_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A);
		_0x1DD84 = "polarBearFurBody";
		_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [35], ["polarBearFur"], [10], "A piece of equipment.", false, "Bear Body"));
		_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A);
		_0x1DD84 = "polarBearFurLegs";
		_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [35], ["polarBearFur"], [6], "A piece of equipment.", false, "Bear Legs"));
		_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A);
		_0x1DD84 = "polarBearFurBoots";
		_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [35], ["polarBearFur"], [3], "A piece of equipment.", false, "Bear Boots"));
		_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A);
		_0x1DD84 = "polarBearFurGloves";
		_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [35], ["polarBearFur"], [3], "A piece of equipment.", false, "Bear Gloves"));
		_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
	};
	if (global_craftingType == "batSkin")
	{
		_0x1DD84 = "batSkinMask";
		_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [30], ["batSkin"], [3], "A piece of equipment.", false, "Batskin Mask"));
		_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A);
		_0x1DD84 = "batSkinBody";
		_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [30], ["batSkin"], [10], "A piece of equipment.", false, "Batskin Body"));
		_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A);
		_0x1DD84 = "batSkinLegs";
		_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [30], ["batSkin"], [6], "A piece of equipment.", false, "Batskin Legs"));
		_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A);
		_0x1DD84 = "batSkinBoots";
		_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [30], ["batSkin"], [3], "A piece of equipment.", false, "Batskin Boots"));
		_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A);
		_0x1DD84 = "batSkinGloves";
		_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [30], ["batSkin"], [3], "A piece of equipment.", false, "Batskin Gloves"));
		_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
	};
	if (global_craftingType == "default")
	{
		_0x1DD84 = "stoneFurnace";
		if (getItem(_0x1DD84) == 0 && getItem("furnaceCapacity") == 0)
		{
			_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [1], ["stone"], [5], "Smelt ores into metal bars.", false, "Stone Furnace"));
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		};
		_0x1DD84 = "bronzeOilWell";
		if (getItem(_0x1DD84) == 0 && getItem("ironOilWell") == 0 && getItem("silverOilWell") == 0)
		{
			_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [1], ["bronzeBars"], [5], "Gain 1 oil per second.", false, "Bronze Oil Well"));
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		};
		_0x1DD84 = "axe";
		if (getItem(_0x1DD84) == 0 && getItem("bobsPanicQuest") == 3)
		{
			_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [2], ["bronzeBars", "stone"], [2, 20], "Unlocks the woodcutting skill.", false, "Axe"));
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		};
		_0x1DD84 = "communityCenter";
		if (getItem(_0x1DD84) == 0)
		{
			_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [4], ["logs"], [5], "Upgrades the shop to carry more items.", false, "Community Center"));
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		};
		_0x1DD84 = "vial";
		if (true)
		{
			_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [5], ["glass"], [1], "Vials for making potions.", true, "Vial"));
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		};
		_0x1DD84 = "communityCenter2";
		if (getItem(_0x1DD84) == 0)
		{
			_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [5], ["oakLogs"], [5], "Upgrades the shop to carry more items.", false, "Community Center 2"));
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		};
		_0x1DD84 = "shovel";
		if (getItem(_0x1DD84) == 0 && getItem("sapphireShovel") == 0 && getItem("emeraldShovel") == 0 && getItem("rubyShovel") == 0 && getItem("diamondShovel") == 0)
		{
			_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [7], ["ironBars", "logs"], [5, 10], "Collects sand over time.", false, "Shovel"));
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		};
		_0x1DD84 = "drills";
		if (getItem(_0x1DD84) == 0 || (getItem("researcherMining") >= 3 && getItem(_0x1DD84) < 3))
		{
			_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [10], ["bronzeBars"], [20], "Drill a desired ore at the cost of oil.", false, "Drills"));
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		};
		_0x1DD84 = "bronzeFurnace";
		if (getItem(_0x1DD84) == 0 && getItem("furnaceCapacity") == 10)
		{
			_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [12], ["stone", "bronzeBars", "stoneFurnace"], [200, 100, 1], "Increases your furnace capacity.", false, "Bronze Furnace"));
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		};
		_0x1DD84 = "sapphireGlassHand";
		if (getItem(_0x1DD84) == 0 && getItem(_0x1DD84 + "Museum") == 0)
		{
			if (getItem("museum") == 1)
			{
				_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [12], ["glass", "sapphire"], [20, 1], "A magnificent piece of art, it must be worth a lot of money.<br /><span style=\'color:green\'><img src=\'images/atom.png\' class=\'img-20\' /> Requires a Museum</span>", false, "Sapphire Glass Hand"))
			}
			else
			{
				_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [12], ["glass", "sapphire"], [20, 1], "A magnificent piece of art, it must be worth a lot of money.<br /><span style=\'color:red\'><img src=\'images/atom.png\' class=\'img-20\' /> Requires a Museum</span>", false, "Sapphire Glass Hand"))
			};
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		};
		_0x1DD84 = "communityCenter3";
		if (getItem(_0x1DD84) == 0)
		{
			_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [14], ["willowLogs"], [10], "Upgrades the shop to carry more items.", false, "Community Center 3"));
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		};
		_0x1DD84 = "bonemealBin";
		if (getItem(_0x1DD84) == 0 && getItem("sapphireBonemealBin") == 0 && getItem("emeraldBonemealBin") == 0 && getItem("rubyBonemealBin") == 0 && getItem("diamondBonemealBin") == 0)
		{
			_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [15], ["logs"], [50], "Ability to convert bones to bonemeal.", false, "Bonemeal Bin"));
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		};
		_0x1DD84 = "rake";
		if (getItem(_0x1DD84) == 0 && getItem("sapphireRake") == 0 && getItem("emeraldRake") == 0 && getItem("rubyRake") == 0 && getItem("diamondRake") == 0)
		{
			_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [17], ["silverBars", "logs", "rakeHead"], [3, 30, 1], "A tool used by bob to find higher tier seeds.", false, "Rake"));
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		};
		_0x1DD84 = "ironFurnace";
		if (getItem(_0x1DD84) == 0 && getItem("furnaceCapacity") <= 30)
		{
			_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [18], ["stone", "ironBars", "bronzeFurnace"], [500, 100, 1], "Increases your furnace capacity.", false, "Iron Furnace"));
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		};
		_0x1DD84 = "oxygenTank";
		if (getItem(_0x1DD84) == 0)
		{
			_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [19], ["ironBars"], [50, 1], "Allows you to explore the ocean floors.<br /><span style=\'color:grey;font-size:12pt;\'><img src=\'images/atom.png\' class=\'img-20\' /> Research may be needed to use this item.</span>", false, "Oxygen Tank"));
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		};
		_0x1DD84 = "crushers";
		if (getItem(_0x1DD84) == 0 || (getItem("researcherMining") >= 3 && getItem(_0x1DD84) < 3))
		{
			_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [20], ["goldBars"], [5], "Mine a desired ore at the cost of oil.", false, "Crushers"));
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		};
		_0x1DD84 = "oilStorage1";
		if (getItem(_0x1DD84) == 0 && getItem("oilStorage2") == 0 && getItem("oilStorage3") == 0)
		{
			_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [22], ["stone"], [1000], "Increases oil capacity to 5000", false, "Oil Storage I"));
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		};
		_0x1DD84 = "ironOilWell";
		if (getItem(_0x1DD84) == 0 && getItem("silverOilWell") == 0)
		{
			_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [23], ["ironBars", "bronzeOilWell"], [25, 1], "Gain 5 oil per second.", false, "Iron Oil Well"));
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		};
		_0x1DD84 = "ironOven";
		if (getItem(_0x1DD84) == 0 && getItem("silverOven") == 0)
		{
			_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [25], ["ironBars", "bronzeOven"], [100, 1], "Reduces the oven\'s burn rate.", false, "Iron Oven"));
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		};
		_0x1DD84 = "silverFurnace";
		if (getItem(_0x1DD84) == 0 && getItem("furnaceCapacity") <= 75)
		{
			_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [28], ["silverBars", "stone", "ironFurnace"], [250, 5000, 1], "Increases your furnace capacity.", false, "Silver Furnace"));
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		};
		_0x1DD84 = "silverOilWell";
		if (getItem(_0x1DD84) == 0)
		{
			_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [30], ["silverBars", "ironOilWell"], [200, 1], "Gain 10 oil per second.", false, "Silver Oil Well"));
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		};
		_0x1DD84 = "largeVial";
		if (getItem("researcherCrafting") >= 4)
		{
			_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [32], ["glass"], [20], "Large vials for making medium level potions.", true, "Large Vial"));
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		};
		_0x1DD84 = "oilStorage2";
		if (getItem(_0x1DD84) == 0 && getItem("oilStorage3") == 0)
		{
			_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [33], ["stone", "oilStorage1"], [20000, 1], "Increases oil capacity to 20,000", false, "Oil Storage II"));
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		};
		_0x1DD84 = "silverOven";
		if (getItem(_0x1DD84) == 0)
		{
			_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [35], ["silverBars", "ironOven"], [300, 1], "Reduces the oven\'s burn rate.", false, "Silver Oven"));
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		};
		_0x1DD84 = "unlitTorch";
		if (getItem(_0x1DD84) == 0 && getItem("torch") == 0 && getItemString("weapon") != "torch" && getItemString("weapon") != "unlitTorch")
		{
			_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [37], ["goldBars", "bambooLogs"], [3, 50], "An unlit torch.", false, "Unlit Torch"));
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		};
		_0x1DD84 = "emeraldGlassHand";
		if (getItem(_0x1DD84) == 0 && getItem(_0x1DD84 + "Museum") == 0)
		{
			if (getItem("museum") == 1)
			{
				_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [39], ["glass", "emerald"], [20, 1], "A magnificent piece of art, it must be worth a lot of money.<br /><span style=\'color:green\'><img src=\'images/atom.png\' class=\'img-20\' /> Requires a Museum</span>", false, "Emerald Glass Hand"))
			}
			else
			{
				_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [39], ["glass", "emerald"], [20, 1], "A magnificent piece of art, it must be worth a lot of money.<br /><span style=\'color:red\'><img src=\'images/atom.png\' class=\'img-20\' /> Requires a Museum</span>", false, "Emerald Glass Hand"))
			};
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		};
		_0x1DD84 = "ironBucket";
		if (getItem("researcherCrafting") >= 3)
		{
			_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [40], ["silverBars"], [50], "Collect a bucket of lava after killing a lava monster.", true, "Silver Bucket"));
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		};
		_0x1DD84 = "goldFurnace";
		if (getItem(_0x1DD84) == 0 && getItem("furnaceCapacity") <= 150)
		{
			_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [42], ["goldBars", "stone", "silverFurnace"], [300, 20000, 1], "Increases your furnace capacity.", false, "Gold Furnace"));
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		};
		_0x1DD84 = "oilStorage3";
		if (getItem(_0x1DD84) == 0)
		{
			_0x1DD92[_0x1DD84] = (new CraftingRecipe(_0x1DD84, ["crafting"], [45], ["stone", "oilStorage2"], [50000, 1], "Increases oil capacity to 100,000", false, "Oil Storage III"));
			_0x1C8F4 += addRecipeToTable(_0x1DD92[_0x1DD84], _0x1C85A)
		}
	};
	document.getElementById(_0x1C85A).innerHTML += "<table class=\'table-craftables\' width=\'90%\'><tr><th>Name</th><th>Item</th><th>Level</th><th>Materials</th><th width=\'50%\x09\'>Description</th></tr>" + _0x1C8F4 + "</table><br />"
}

function refreshCooksBook()
{
	var _0x1C85A = "item-section-cooksBook-1";
	cookingRecipes = [];
	var _0x1DD76 = "";
	document.getElementById(_0x1C85A).innerHTML = "";
	var _0x1C8F4 = "";
	_0x1DD76 = "salad";
	cookingRecipes[_0x1DD76] = (new CooksBookRecipe(_0x1DD76, ["cooking"], [1], ["dottedGreenLeaf", "redMushroom"], [5, 10], "A salad made from farmed ingredients.", true, "Mushroom Salad", 600));
	_0x1C8F4 += addRecipeToTable(cookingRecipes[_0x1DD76], _0x1C85A);
	_0x1DD76 = "oysterMornay";
	cookingRecipes[_0x1DD76] = (new CooksBookRecipe(_0x1DD76, ["cooking"], [5], ["oyster", "cheese"], [1, 1], "Boiled oyster with melted cheese.", true, "Oyster Mornay", 900));
	_0x1C8F4 += addRecipeToTable(cookingRecipes[_0x1DD76], _0x1C85A);
	if (getSmallFishingNetTypeData()[0] != "none")
	{
		_0x1DD76 = "snakeSushiShrimp";
		cookingRecipes[_0x1DD76] = (new CooksBookRecipe(_0x1DD76, ["cooking"], [10], ["snakeskin", "rawShrimp"], [2, 10], "A sushi made with snakeskin instead of traditional seaweed.", true, "Snakeskin Sushi", 1800));
		_0x1C8F4 += addRecipeToTable(cookingRecipes[_0x1DD76], _0x1C85A)
	};
	if (getFishingRodTypeData()[0] != "none")
	{
		_0x1DD76 = "snakeSushiTrout";
		cookingRecipes[_0x1DD76] = (new CooksBookRecipe(_0x1DD76, ["cooking"], [10], ["snakeskin", "rawTrout"], [2, 5], "A sushi made with snakeskin instead of traditional seaweed.", true, "Snakeskin Sushi", 1800));
		_0x1C8F4 += addRecipeToTable(cookingRecipes[_0x1DD76], _0x1C85A)
	};
	if (getHarpoonTypeData()[0] != "none")
	{
		_0x1DD76 = "snakeSushiTuna";
		cookingRecipes[_0x1DD76] = (new CooksBookRecipe(_0x1DD76, ["cooking"], [10], ["snakeskin", "rawTuna"], [2, 1], "A sushi made with snakeskin instead of traditional seaweed.", true, "Snakeskin Sushi", 1800));
		_0x1C8F4 += addRecipeToTable(cookingRecipes[_0x1DD76], _0x1C85A)
	};
	_0x1DD76 = "seaweedChicken";
	cookingRecipes[_0x1DD76] = (new CooksBookRecipe(_0x1DD76, ["cooking"], [20], ["seaweed", "chicken"], [10, 1], "A chicken with mixed with seaweed.", true, "Seaweed Chicken", 2700));
	_0x1C8F4 += addRecipeToTable(cookingRecipes[_0x1DD76], _0x1C85A);
	document.getElementById(_0x1C85A).innerHTML += "<table class=\'table-craftables\' width=\'90%\'><tr><th>Name</th><th>Item</th><th>Level</th><th>Ingredients</th><th width=\'50%\'>Description</th><th>Prep Time</th></tr>" + _0x1C8F4 + "</table>"
}

function refreshXpBarAnimation(data)
{
	var _0x1C75E = data.split("~");
	var _0x1CEEA = _0x1C75E[0];
	var _0x1E158 = _0x1C75E[1];
	var _0x1E14A = _0x1C75E[2];
	percentageDecimalXpBarWidth = (getItem(_0x1CEEA + "Xp") - getXpNeeded(getLevel(getItem(_0x1CEEA + "Xp")))) / (getXpNeeded(1 + parseInt(getLevel(getItem(_0x1CEEA + "Xp")))) - getXpNeeded(getLevel(getItem(_0x1CEEA + "Xp"))))
}

function setInnerHTMLCache(_0x1E254, _0x1E270)
{
	var _0x1E27E = (_0x1E270.replace(/\s|'|"|&quot;|\//gi, ""));
	var _0x1E262 = (_0x1E254.innerHTML.replace(/\s|'|"|&quot;|\//gi, ""));
	if (_0x1E27E != _0x1E262)
	{
		_0x1E254.innerHTML = _0x1E270
	}
}

function refreshBrewing()
{
	var _0x1C85A = "item-section-brewing-2";
	brewingRecipes = [];
	var _0x1DD68 = "";
	var _0x1C8F4 = "";
	potionItemName = "stardustPotion";
	potionDisplayName = "Stardust Potion";
	potionItemNameDescription = "Gain some stardust over time.<br /><span style=\'color:grey;font-size:12pt;\'>(Lasts for " + getBrewingTimeAdjusted(300) + ")</span>";
	if (getItem(potionItemName + "Drank") == 0)
	{
		potionItemNameDescription = "???"
	};
	brewingRecipes[potionItemName] = (new CraftingRecipe(potionItemName, ["brewing"], [1], ["dottedGreenLeaf", "redMushroom", "vial"], [1, 15, 1], potionItemNameDescription, true, potionDisplayName));
	_0x1C8F4 += addRecipeToTable(brewingRecipes[potionItemName], _0x1C85A);
	potionItemName = "sandPotion";
	potionDisplayName = "Sand Potion";
	potionItemNameDescription = "Increases the chance of finding sand with a shovel.<br /><span style=\'color:grey;font-size:12pt;\'>(Lasts for " + getBrewingTimeAdjusted(3600) + ")</span>";
	if (getItem(potionItemName + "Drank") == 0)
	{
		potionItemNameDescription = "???"
	};
	brewingRecipes[potionItemName] = (new CraftingRecipe(potionItemName, ["brewing"], [3], ["dottedGreenLeaf", "redMushroom", "vial"], [2, 20, 1], potionItemNameDescription, true, potionDisplayName));
	_0x1C8F4 += addRecipeToTable(brewingRecipes[potionItemName], _0x1C85A);
	potionItemName = "cookingBoostPotion";
	potionDisplayName = "Cooking Boost Potion";
	potionItemNameDescription = "Temporary increases your cooking level by 10 for the next food that you cook.<br /><span style=\'color:grey;font-size:12pt;\'>(Cooldown 20:00)</span>";
	if (getItem(potionItemName + "Drank") == 0)
	{
		potionItemNameDescription = "???"
	};
	brewingRecipes[potionItemName] = (new CraftingRecipe(potionItemName, ["brewing"], [5], ["greenLeaf", "redMushroom", "vial"], [1, 10, 1], potionItemNameDescription, true, potionDisplayName));
	_0x1C8F4 += addRecipeToTable(brewingRecipes[potionItemName], _0x1C85A);
	potionItemName = "combatCooldownPotion";
	potionDisplayName = "Combat Cooldown";
	potionItemNameDescription = "Your hero\'s cooldown will decrease twice as fast.<br /><span style=\'color:grey;font-size:12pt;\'>(Lasts for " + getBrewingTimeAdjusted(10 * 60) + ")</span>";
	if (getItem(potionItemName + "Drank") == 0)
	{
		potionItemNameDescription = "???"
	};
	brewingRecipes[potionItemName] = (new CraftingRecipe(potionItemName, ["brewing"], [8], ["dottedGreenLeaf", "greenLeaf", "bones", "vial"], [3, 3, 5, 1], potionItemNameDescription, true, potionDisplayName));
	_0x1C8F4 += addRecipeToTable(brewingRecipes[potionItemName], _0x1C85A);
	potionItemName = "compostPotion";
	potionDisplayName = "Compost Potion";
	potionItemNameDescription = "Crops grow twice as fast.<br /><span style=\'color:grey;font-size:12pt;\'>(Lasts for " + getBrewingTimeAdjusted(1800) + ")</span>";
	if (getItem(potionItemName + "Drank") == 0)
	{
		potionItemNameDescription = "???"
	};
	brewingRecipes[potionItemName] = (new CraftingRecipe(potionItemName, ["brewing"], [10], ["greenLeaf", "redMushroom", "vial"], [2, 20, 1], potionItemNameDescription, true, potionDisplayName));
	_0x1C8F4 += addRecipeToTable(brewingRecipes[potionItemName], _0x1C85A);
	potionItemName = "oilPotion";
	potionDisplayName = "Oil Potion";
	potionItemNameDescription = "Increases oil income by 10.<br /><span style=\'color:grey;font-size:12pt;\'>(Lasts for " + getBrewingTimeAdjusted(1800) + ")</span>";
	if (getItem(potionItemName + "Drank") == 0)
	{
		potionItemNameDescription = "???"
	};
	brewingRecipes[potionItemName] = (new CraftingRecipe(potionItemName, ["brewing"], [13], ["dottedGreenLeaf", "oil", "vial"], [4, 1, 1], potionItemNameDescription, true, potionDisplayName));
	_0x1C8F4 += addRecipeToTable(brewingRecipes[potionItemName], _0x1C85A);
	potionItemName = "bonePotion";
	potionDisplayName = "Bone Potion";
	potionItemNameDescription = "Passively collects bones over time.<br /><span style=\'color:grey;font-size:12pt;\'>(Lasts for " + getBrewingTimeAdjusted(7200) + ")</span>";
	if (getItem(potionItemName + "Drank") == 0)
	{
		potionItemNameDescription = "???"
	};
	brewingRecipes[potionItemName] = (new CraftingRecipe(potionItemName, ["brewing"], [15], ["dottedGreenLeaf", "bones", "vial"], [5, 20, 1], potionItemNameDescription, true, potionDisplayName));
	_0x1C8F4 += addRecipeToTable(brewingRecipes[potionItemName], _0x1C85A);
	potionItemName = "treeStarterPotion";
	potionDisplayName = "Tree Starter Potion";
	potionItemNameDescription = "Doubles your chances for a tree to start growing.<br /><span style=\'color:grey;font-size:12pt;\'>(Lasts for " + getBrewingTimeAdjusted(600) + ")</span>";
	if (getItem(potionItemName + "Drank") == 0)
	{
		potionItemNameDescription = "???"
	};
	brewingRecipes[potionItemName] = (new CraftingRecipe(potionItemName, ["brewing"], [18], ["dottedGreenLeaf", "redMushroom", "logs", "vial"], [3, 50, 1, 1], potionItemNameDescription, true, potionDisplayName));
	_0x1C8F4 += addRecipeToTable(brewingRecipes[potionItemName], _0x1C85A);
	potionItemName = "barPotion";
	potionDisplayName = "Bar Potion";
	potionItemNameDescription = "20% chance that two bars are smelted instead of one, without using an extra ore.<br /><i style=\'font-size:12pt;\'>Works on: Bronze, iron, silver, gold</i><br /><span style=\'color:grey;font-size:12pt;\'>(Lasts for " + getBrewingTimeAdjusted(600) + ")</span>";
	if (getItem(potionItemName + "Drank") == 0)
	{
		potionItemNameDescription = "???"
	};
	brewingRecipes[potionItemName] = (new CraftingRecipe(potionItemName, ["brewing"], [22], ["greenLeaf", "limeLeaf", "bronzeBars", "ironBars", "silverBars", "goldBars", "vial"], [2, 2, 1, 1, 1, 1, 1], potionItemNameDescription, true, potionDisplayName));
	_0x1C8F4 += addRecipeToTable(brewingRecipes[potionItemName], _0x1C85A);
	potionItemName = "sapphireStardustPotion";
	potionDisplayName = "Sapphire Stardust Potion";
	potionItemNameDescription = "Can be poured on a sapphire, converting it into stardust.";
	if (getItem(potionItemName + "Drank") == 0)
	{
		potionItemNameDescription = "???"
	};
	brewingRecipes[potionItemName] = (new CraftingRecipe(potionItemName, ["brewing"], [25], ["limeLeaf", "redMushroom", "vial"], [1, 100, 1], potionItemNameDescription, true, potionDisplayName));
	_0x1C8F4 += addRecipeToTable(brewingRecipes[potionItemName], _0x1C85A);
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
		_0x1C8F4 += addRecipeToTable(brewingRecipes[potionItemName], _0x1C85A)
	};
	document.getElementById(_0x1C85A).innerHTML = "<table class=\'table-craftables\' width=\'90%\'><tbody><tr><th>Name</th><th>Item</th><th>Level</th><th>Materials</th><th>Description</th></tr>" + _0x1C8F4 + "</tbody></table><br /><br />"
}

function faradoxRandomShow()
{
	$("#faradox-random-show").fadeIn(3000, function ()
	{
		$("#faradox-random-show").fadeOut(1000)
	})
}

function addTransformRecipeToTable(_0x1CBB0, _0x1C85A)
{
	var _0x1CBBE = _0x1CBB0.itemName;
	var _0x1CBA2 = _0x1CBB0.stardust;
	var _0x1CB40 = _0x1CBB0.level;
	var _0x1CB5C = _0x1CBB0.output1;
	var _0x1CB78 = _0x1CBB0.output2;
	var _0x1CB6A = _0x1CBB0.output1Amount;
	var _0x1CB86 = _0x1CBB0.output2Amount;
	var _0x1CBA2 = _0x1CBB0.stardust;
	var _0x1CB4E = _0x1CBB0.obtainedItemVar;
	var _0x1CBCC = _0x1CBB0.xp;
	if (getItem(_0x1CB4E) == 0)
	{
		return "<tr onclick=\'confirmDialogue(\"images/convertMagic.png\",\"You need to have obtained this item yourself before you are able to transform it.\",\"Close\",\"\",\"\")\'><td colspan=\'8\' style=\'font-size:70pt;color:white;background-color:#1f2e2e\'>???</td></tr>"
	};
	var _0x1CB32 = true;
	var _0x1CAB4 = "<td>" + getItemName(_0x1CBBE) + "</td>";
	_0x1CAB4 += "<td>" + "<img src=\'images/" + _0x1CBBE + ".png\' class=\'img-100\' /> " + "</td>";
	if (getLevel(getItem("magicXp")) >= _0x1CB40)
	{
		_0x1CAB4 += "<td style=\'color:green\'>" + _0x1CB40 + "</td>"
	}
	else
	{
		_0x1CAB4 += "<td style=\'color:red\'>" + _0x1CB40 + "</td>";
		_0x1CB32 = false
	};
	if (getItem(_0x1CBBE) == 0)
	{
		_0x1CB32 = false
	};
	_0x1CAB4 += "<td>";
	for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1CB5C.length; _0x1C6B6++)
	{
		var _0x1CAEC = _0x1CB5C[_0x1C6B6];
		_0x1CAB4 += "<span title=\'" + getItemName(_0x1CAEC) + "\'>" + "<img src=\'images/" + _0x1CAEC + ".png\' class=\'img-50\' /> " + _0x1CB6A[_0x1C6B6] + "</span>";
		_0x1CAB4 += "<br />"
	};
	_0x1CAB4 += "</td>";
	_0x1CAB4 += "<td>";
	for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1CB78.length; _0x1C6B6++)
	{
		var _0x1CAEC = _0x1CB78[_0x1C6B6];
		_0x1CAB4 += "<span title=\'" + getItemName(_0x1CAEC) + "\'>" + "<img src=\'images/" + _0x1CAEC + ".png\' class=\'img-50\' />  " + _0x1CB86[_0x1C6B6] + "</span>";
		_0x1CAB4 += "<br />"
	};
	_0x1CAB4 += "</td>";
	var _0x1CB94 = "style=\'color:green\'";
	if (_0x1CBA2 > getItem("stardust"))
	{
		_0x1CB32 = false;
		_0x1CB94 = "style=\'color:red\'"
	};
	_0x1CAB4 += "<td>";
	_0x1CAB4 += "<img src=\'images/stardustIcon.png\' class=\'img-30\' /> " + "<span " + _0x1CB94 + ">" + formatNumber(_0x1CBA2) + "</span>";
	_0x1CAB4 += "</td>";
	var _0x1CB24 = "style=\'background-color:#b3ffb3;\'";
	if (!_0x1CB32)
	{
		_0x1CB24 = "style=\'background-color:#ffc2b3;\'"
	};
	_0x1CAB4 += "<td>";
	_0x1CAB4 += formatNumber(_0x1CBCC) + " XP";
	_0x1CAB4 += "</td>";
	_0x1CAB4 += "<td>";
	_0x1CAB4 += formatNumber(getItem(_0x1CBBE + "Transformed"));
	_0x1CAB4 += "</td>";
	var _0x1CAA6 = "onclick=\'transformItem(\"" + _0x1CBBE + "\",\"" + _0x1CBA2 + "\", \"" + _0x1CBCC + "\")\'";
	return "<tr " + _0x1CAA6 + " " + _0x1CB24 + ">" + _0x1CAB4 + "</tr>"
}

function addRecipeToTable(_0x1CA60, _0x1C85A)
{
	var _0x1C83E = _0x1CA60.itemName;
	var _0x1CAFA = _0x1CA60.skill;
	var _0x1CB08 = _0x1CA60.skillLevel;
	var _0x1CAC2 = _0x1CA60.recipe;
	var _0x1CAD0 = _0x1CA60.recipeCost;
	var _0x1CA98 = _0x1CA60.isMultiCraft;
	var _0x1CA8A = _0x1CA60.itemNameDisplay;
	var _0x1CA6E = _0x1CA60.description;
	var _0x1CA52 = true;
	var _0x1CAB4 = "<td>" + _0x1CA8A + "</td>";
	_0x1CAB4 += "<td>" + "<img src=\'images/" + _0x1C83E + ".png\' class=\'img-100\' /> " + "</td>";
	if (getLevel(getItem(_0x1CA60.skill[0] + "Xp")) >= _0x1CB08)
	{
		_0x1CAB4 += "<td style=\'color:green\'>" + _0x1CB08 + "</td>"
	}
	else
	{
		_0x1CAB4 += "<td style=\'color:red\'>" + _0x1CB08 + "</td>";
		_0x1CA52 = false
	};
	_0x1CAB4 += "<td>";
	for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1CAC2.length; _0x1C6B6++)
	{
		var _0x1CAEC = _0x1CAC2[_0x1C6B6];
		var _0x1CADE = _0x1CAD0[_0x1C6B6];
		var _0x1CA7C = getItem(_0x1CAEC) >= _0x1CADE;
		var _0x1CB16 = "style=\'color:green\'";
		if (!_0x1CA7C)
		{
			_0x1CA52 = false;
			_0x1CB16 = "style=\'color:red\'"
		};
		if (_0x1CAEC != "vial" && _0x1CAEC != "largeVial")
		{
			_0x1CAB4 += "<span title=\'" + getItemName(_0x1CAEC) + "\' " + _0x1CB16 + ">" + "<img src=\'images/" + _0x1CAEC + ".png\' class=\'img-50\' /> " + formatNumber(_0x1CADE) + " </span>";
			_0x1CAB4 += "<br />"
		}
	};
	_0x1CAB4 += "</td>";
	_0x1CAB4 += "<td>" + _0x1CA6E + "</td>";
	if (_0x1CAFA[0] == "cooking")
	{
		_0x1CAB4 += "<td>" + formatTime(_0x1CA60.timeToPrep) + "</td>"
	};
	var _0x1CB24 = "style=\'background-color:#b3ffb3;\'";
	if (!_0x1CA52)
	{
		_0x1CB24 = "style=\'background-color:#ffc2b3;\'"
	};
	var _0x1CAA6 = "onclick=\'craftItem(\"" + _0x1C83E + "\", " + _0x1CA98 + ",\"" + _0x1CA8A + "\",\"" + _0x1CAC2 + "\"" + _0x1CAD0 + ", \")\'";
	return "<tr " + _0x1CAA6 + " " + _0x1CB24 + ">" + _0x1CAB4 + "</tr>"
}

function craftItem(_0x1C83E, _0x1D11A, _0x1D10C)
{
	if (!_0x1D11A)
	{
		confirmDialogue("images/" + _0x1C83E + ".png", _0x1D10C.toUpperCase(), "Craft", "Cancel", "CRAFT=" + _0x1C83E + "~" + 1)
	}
	else
	{
		if (_0x1C83E == "vial")
		{
			openInputDialogue("Crafting Vials", "images/vial.png", "vial", 1, ["vial"], [1], ["glass"], [1], "Craft", "MULTI_CRAFT", "These vials are used to mix potions with.")
		}
		else
		{
			if (_0x1C83E == "largeVial")
			{
				openInputDialogue("Crafting Vials", "images/largeVial.png", "largeVial", 1, ["largeVial"], [1], ["glass"], [20], "Craft", "MULTI_CRAFT", "These vials are used to mix potions with.")
			}
			else
			{
				if (_0x1C83E == "ironBucket")
				{
					openInputDialogue("Crafting Buckets", "images/ironBucket.png", "ironBucket", 1, ["ironBucket"], [1], ["silverBars"], [50], "Craft", "MULTI_CRAFT", "Bring back an extra bucket of lava after killing a lava type monster.")
				}
				else
				{
					if (_0x1C83E == "arrow")
					{
						openInputDialogue("Crafting Arrows", "images/arrow.png", "arrow", 1, ["arrow"], [1], ["feather", "logs", "bones"], [1, 1, 1], "Craft", "MULTI_CRAFT", "Used with a bow to fire arrows at your enemy.")
					}
					else
					{
						if (_0x1C83E == "fireArrow")
						{
							openInputDialogue("Crafting Arrows", "images/fireArrow.png", "fireArrow", 1, ["fireArrow"], [1], ["fireFeather", "lavaLogs", "bones"], [1, 1, 1], "Craft", "MULTI_CRAFT", "Used with a bow to shoot fire arrows at your enemy.")
						}
						else
						{
							if (_0x1C83E.endsWith("Potion"))
							{
								openInputDialogue("Mix Potion", "images/" + _0x1C83E + ".png", _0x1C83E, 1, [_0x1C83E], [1], brewingRecipes[_0x1C83E].recipe, brewingRecipes[_0x1C83E].recipeCost, "Mix", "BREW", "Potions generally give you a temporary buff when drank.")
							}
							else
							{
								if (_0x1C83E == "salad" || _0x1C83E.startsWith("snakeSushi") || _0x1C83E.startsWith("oysterMornay") || _0x1C83E.startsWith("seaweedChicken"))
								{
									openInputDialogue("Prepare Food", "images/" + _0x1C83E + ".png", _0x1C83E, 1, [_0x1C83E], [1], cookingRecipes[_0x1C83E].recipe, cookingRecipes[_0x1C83E].recipeCost, "Prepare", "PREPARE_FOOD", "Additional energy source at the cost of preperation time.")
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
var addTextByDelay = function (_0x1C726, _0x1C718, _0x1C70A)
{
	if (!_0x1C718)
	{
		_0x1C718 = $("body")
	};
	if (!_0x1C70A)
	{
		_0x1C70A = 300
	};
	if (_0x1C726.length > 0)
	{
		_0x1C718.append(_0x1C726[0]);
		setTimeout(function ()
		{
			addTextByDelay(_0x1C726.slice(1), _0x1C718, _0x1C70A)
		}, _0x1C70A)
	}
};

function dimScreen(_0x1C884, _0x1D18A)
{
	if (_0x1D18A)
	{
		var _0x1CC4A = "";
		if (_0x1C884 == "bushy_dead")
		{
			_0x1CC4A += "<center>";
			_0x1CC4A += "<br /><br />";
			_0x1CC4A += "<br /><br />";
			_0x1CC4A += "<img id=\'dim-screen-img-2\' src=\'images/greenCrystalAbsorbed.png\' />";
			_0x1CC4A += "<br /><br />";
			_0x1CC4A += "<div style=\'color:grey\' id=\'dim-screen-area1\'></div>";
			_0x1CC4A += "<br /><br />";
			_0x1CC4A += "<div style=\'color:red\' id=\'dim-screen-area2\'></div>";
			_0x1CC4A += "</center>";
			$("#dim-screen").fadeIn(5000);
			$("#game").fadeOut(5000, function ()
			{
				document.getElementById("dim-screen").innerHTML = _0x1CC4A;
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
		if (_0x1C884 == "mana")
		{
			_0x1CC4A += "<center>";
			_0x1CC4A += "<br /><br />";
			_0x1CC4A += "<img id=\'dim-screen-img-1\' src=\'images/animation_mana1.png\' />";
			_0x1CC4A += "<br /><br />";
			_0x1CC4A += "<img id=\'dim-screen-img-2\' src=\'images/default_hero.png\' />";
			_0x1CC4A += "<br /><br />";
			_0x1CC4A += "</center>";
			$("#dim-screen").fadeIn(5000);
			$("#game").fadeOut(5000, function ()
			{
				document.getElementById("dim-screen").innerHTML = _0x1CC4A;
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
		if (_0x1C884 == "release_faradox")
		{
			_0x1CC4A += "<center>";
			_0x1CC4A += "<br /><br />";
			_0x1CC4A += "<br /><br />";
			_0x1CC4A += "<img id=\'dim-screen-img-1\' src=\'images/faradox.png\' />";
			_0x1CC4A += "<br /><br />";
			_0x1CC4A += "<div style=\'color:grey\' id=\'dim-screen-area1\'></div>";
			_0x1CC4A += "<br /><br />";
			_0x1CC4A += "<div style=\'color:red\' id=\'dim-screen-area2\'></div>";
			_0x1CC4A += "</center>";
			$("#dim-screen").fadeIn(5000);
			$("#game").fadeOut(5000, function ()
			{
				document.getElementById("dim-screen").innerHTML = _0x1CC4A;
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
		if (_0x1C884 == "release_faradox_2")
		{
			_0x1CC4A += "<center>";
			_0x1CC4A += "<br /><br />";
			_0x1CC4A += "<br /><br />";
			_0x1CC4A += "<img id=\'dim-screen-img-1\' src=\'images/faradox.png\' />";
			_0x1CC4A += "<br /><br />";
			_0x1CC4A += "<div style=\'color:grey\' id=\'dim-screen-area1\'></div>";
			_0x1CC4A += "<br /><br />";
			_0x1CC4A += "<div style=\'color:red\' id=\'dim-screen-area2\'></div>";
			_0x1CC4A += "</center>";
			$("#dim-screen").fadeIn(5000);
			$("#game").fadeOut(5000, function ()
			{
				document.getElementById("dim-screen").innerHTML = _0x1CC4A;
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
		var _0x1CC4A = "";
		if (_0x1C884 == "dead_hero")
		{
			_0x1CC4A += "<center>";
			_0x1CC4A += "<br /><br />";
			_0x1CC4A += "<br /><br />";
			_0x1CC4A += "<img id=\'dim-screen-img-1\' src=\'images/deadHero.png\' />";
			_0x1CC4A += "<br /><br />";
			_0x1CC4A += "<div style=\'color:grey\' id=\'dim-screen-area1\'></div>";
			_0x1CC4A += "</center>";
			$("#dim-screen").fadeIn(1000);
			$("#game").fadeOut(1000, function ()
			{
				document.getElementById("dim-screen").innerHTML = _0x1CC4A;
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

function unlockTreePatch(_0x1CF3E)
{
	if (document.getElementById("tree-section-img-" + _0x1CF3E).src == "images/tree_locked.png")
	{
		document.getElementById("tree-section-img-" + _0x1CF3E).src = "images/tree_none.png"
	};
	document.getElementById("tree-section-" + _0x1CF3E).classList.remove("tree-section-locked");
	refreshTreeImage(_0x1CF3E)
}

function unlockPlotPatch(_0x1E334)
{
	if (document.getElementById("plot-section-img-" + _0x1E334).src == "images/tree_locked.png")
	{
		document.getElementById("plot-section-img-" + _0x1E334).src = "images/tree_none.png"
	};
	document.getElementById("plot-section-" + _0x1E334).classList.remove("plot-section-locked");
	refreshPlotImage(_0x1E334)
}

function refreshTreeImage(_0x1CF3E)
{
	var _0x1E112 = getItemString("tree" + _0x1CF3E);
	if (getItem("treeUnlocked" + _0x1CF3E) == 1)
	{
		if (_0x1E112 == "none")
		{
			document.getElementById("tree-section-img-" + _0x1CF3E).src = "images/tree_none.png"
		}
		else
		{
			document.getElementById("tree-section-img-" + _0x1CF3E).src = "images/" + _0x1E112 + getItem("treeStage" + _0x1CF3E) + ".png"
		}
	}
}

function refreshPlotImage(_0x1CF3E)
{
	var _0x1DE10 = getItemString("plot" + _0x1CF3E);
	if (getItem("plotUnlocked" + _0x1CF3E) == 1)
	{
		document.getElementById("plot-section-" + _0x1CF3E).classList.remove("tree-section-locked");
		if (_0x1DE10 == "none")
		{
			document.getElementById("plot-section-img-" + _0x1CF3E).src = "images/farm_none.png"
		}
		else
		{
			document.getElementById("plot-section-img-" + _0x1CF3E).src = "images/" + _0x1DE10 + getItem("plotStage" + _0x1CF3E) + ".png"
		}
	}
}

function refreshTreeTimer(_0x1CF3E)
{
	if (getItemString("treeUnlocked" + _0x1CF3E) == 1)
	{
		var _0x1E13C = getItem("treeTimer" + _0x1CF3E);
		var _0x1DE1E = document.getElementById("tree-secton-timer-" + _0x1CF3E);
		switch (_0x1E13C)
		{
		case 1:
			_0x1DE1E.innerHTML = "READY";
			break;
		case 0:
			_0x1DE1E.innerHTML = "";
			break;
		default:
			_0x1DE1E.innerHTML = formatTime(_0x1E13C);
			break
		}
	}
}

function refreshPlotTimer(_0x1CF3E)
{
	if (getItemString("plotUnlocked" + _0x1CF3E) == 1)
	{
		var _0x1DE2C = getItem("plotTimer" + _0x1CF3E);
		var _0x1DE1E = document.getElementById("plot-secton-timer-" + _0x1CF3E);
		switch (_0x1DE2C)
		{
		case 1:
			_0x1DE1E.innerHTML = "READY";
			break;
		case 0:
			_0x1DE1E.innerHTML = "";
			break;
		default:
			_0x1DE1E.innerHTML = formatTime(_0x1DE2C);
			break
		}
	}
}

function generateHTMLToSelectToolConversionItem(_0x1D0D4, _0x1CF30, _0x1CBCC)
{
	var _0x1CC4A = "";
	if (getItem(_0x1CF30) > 0)
	{
		_0x1CC4A += "<div onclick=\'openStardustToolDialogue2(\"" + _0x1D0D4 + "\",\"" + _0x1CF30 + "\",\"" + _0x1CBCC + "\");closeDialogue(\"dialogue-stardust-tools\")\' class=\'select-ore-furnace\'>" + getItemName(_0x1CF30).toUpperCase() + "<br />";
		_0x1CC4A += "<img src=\'images/" + _0x1CF30 + ".png\' class=\'img-100\' />";
		_0x1CC4A += "<hr class=\'hr-thin\' />";
		_0x1CC4A += "<img src=\'images/miningSkill_white.png\' class=\'img-30\' /> <span style=\'color:orange\'>XP per item:</span> " + parseFloat(_0x1CBCC);
		_0x1CC4A += "</div>"
	};
	return _0x1CC4A
}

function getBonemealTypeData()
{
	var _0x1CEEA = "";
	_0x1CEEA = "bonemealBin";
	if (getItem(_0x1CEEA) == 1)
	{
		return [_0x1CEEA, "none", "sapphire", "5"]
	};
	_0x1CEEA = "sapphireBonemealBin";
	if (getItem(_0x1CEEA) == 1)
	{
		return [_0x1CEEA, "sapphire", "emerald", "20"]
	};
	_0x1CEEA = "emeraldBonemealBin";
	if (getItem(_0x1CEEA) == 1)
	{
		return [_0x1CEEA, "emerald", "ruby", "50"]
	};
	_0x1CEEA = "rubyBonemealBin";
	if (getItem(_0x1CEEA) == 1)
	{
		return [_0x1CEEA, "ruby", "diamond", "100"]
	};
	_0x1CEEA = "diamondBonemealBin";
	if (getItem(_0x1CEEA) == 1)
	{
		return [_0x1CEEA, "diamond", "none", "INF"]
	};
	return "none"
}

function getPickaxeTypeData()
{
	var _0x1CEEA = "";
	_0x1CEEA = "stardustPickaxe";
	if (getItem(_0x1CEEA) == 1)
	{
		return [_0x1CEEA, "none", "sapphire", "17"]
	};
	_0x1CEEA = "sapphireStardustPickaxe";
	if (getItem(_0x1CEEA) == 1)
	{
		return [_0x1CEEA, "sapphire", "emerald", "16"]
	};
	_0x1CEEA = "emeraldStardustPickaxe";
	if (getItem(_0x1CEEA) == 1)
	{
		return [_0x1CEEA, "emerald", "ruby", "15"]
	};
	_0x1CEEA = "rubyStardustPickaxe";
	if (getItem(_0x1CEEA) == 1)
	{
		return [_0x1CEEA, "ruby", "diamond", "14"]
	};
	_0x1CEEA = "diamondStardustPickaxe";
	if (getItem(_0x1CEEA) == 1)
	{
		return [_0x1CEEA, "diamond", "none", "12"]
	}
}

function getShovelTypeData()
{
	var _0x1CEEA = "";
	_0x1CEEA = "shovel";
	if (getItem(_0x1CEEA) == 1)
	{
		return [_0x1CEEA, "none", "sapphire", "4000"]
	};
	_0x1CEEA = "sapphireShovel";
	if (getItem(_0x1CEEA) == 1)
	{
		return [_0x1CEEA, "sapphire", "emerald", "3500"]
	};
	_0x1CEEA = "emeraldShovel";
	if (getItem(_0x1CEEA) == 1)
	{
		return [_0x1CEEA, "emerald", "ruby", "3000"]
	};
	_0x1CEEA = "rubyShovel";
	if (getItem(_0x1CEEA) == 1)
	{
		return [_0x1CEEA, "ruby", "diamond", "2500"]
	};
	_0x1CEEA = "diamondShovel";
	if (getItem(_0x1CEEA) == 1)
	{
		return [_0x1CEEA, "diamond", "none", "2000"]
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
	var _0x1CEEA = "";
	_0x1CEEA = "axe";
	if (getItem(_0x1CEEA) == 1)
	{
		return [_0x1CEEA, "none", "sapphire", "0"]
	};
	_0x1CEEA = "sapphireAxe";
	if (getItem(_0x1CEEA) == 1)
	{
		return [_0x1CEEA, "sapphire", "emerald", "5"]
	};
	_0x1CEEA = "emeraldAxe";
	if (getItem(_0x1CEEA) == 1)
	{
		return [_0x1CEEA, "emerald", "ruby", "10"]
	};
	_0x1CEEA = "rubyAxe";
	if (getItem(_0x1CEEA) == 1)
	{
		return [_0x1CEEA, "ruby", "diamond", "15"]
	};
	_0x1CEEA = "diamondAxe";
	if (getItem(_0x1CEEA) == 1)
	{
		return [_0x1CEEA, "diamond", "none", "20"]
	}
}

function getHammerTypeData()
{
	var _0x1CEEA = "";
	_0x1CEEA = "stardustHammer";
	if (getItem(_0x1CEEA) == 1)
	{
		return [_0x1CEEA, "none", "sapphire", "17"]
	};
	_0x1CEEA = "sapphireStardustHammer";
	if (getItem(_0x1CEEA) == 1)
	{
		return [_0x1CEEA, "sapphire", "emerald", "16"]
	};
	_0x1CEEA = "emeraldStardustHammer";
	if (getItem(_0x1CEEA) == 1)
	{
		return [_0x1CEEA, "emerald", "ruby", "15"]
	};
	_0x1CEEA = "rubyStardustHammer";
	if (getItem(_0x1CEEA) == 1)
	{
		return [_0x1CEEA, "ruby", "diamond", "14"]
	};
	_0x1CEEA = "diamondStardustHammer";
	if (getItem(_0x1CEEA) == 1)
	{
		return [_0x1CEEA, "diamond", "none", "12"]
	}
}

function confirmSocketDialogue(_0x1D0D4, _0x1D0C6, _0x1CC58)
{
	confirmDialogue(_0x1D0C6, "Add a <img src=\'images/" + _0x1CC58 + ".png\' class=\'img-30\' /> to your tool?<br /><br /><i style=\'color:grey\'>Upgrading the tool will reduce its stardust cost per xp.</i>", "Confirm Socket", "Cancel", "SOCKET=" + _0x1D0D4)
}

function openStardustToolDialogue(_0x1D0D4)
{
	var _0x1DCA4 = document.getElementById("dialogue-stardust-tools-socket-button");
	var _0x1C902 = document.getElementById("dialogue-stardust-tools-socket-image");
	var _0x1D87C = document.getElementById("dialogue-stardust-tools-socket-gem-label");
	var _0x1DCC0;
	if (_0x1D0D4 == "stardustPickaxe")
	{
		var _0x1DCC0 = getPickaxeTypeData();
		var _0x1CC58 = _0x1DCC0[2]
	};
	if (_0x1D0D4 == "stardustHammer")
	{
		var _0x1DCC0 = getHammerTypeData();
		var _0x1CC58 = _0x1DCC0[2]
	};
	if (_0x1CC58 == "none")
	{
		_0x1DCA4.style.display = "none"
	}
	else
	{
		_0x1C902.src = "images/" + _0x1CC58 + ".png";
		_0x1DCA4.style.display = "";
		_0x1DCA4.setAttribute("onclick", "confirmSocketDialogue(\'" + _0x1D0D4 + "\',\'images/" + _0x1DCC0[0] + ".png\',\'" + _0x1CC58 + "\');closeDialogue(\'dialogue-stardust-tools\')");
		_0x1D87C.innerHTML = _0x1CC58
	};
	var _0x1DCB2 = global_stardustToolsMap[_0x1D0D4];
	var _0x1DA3C = _0x1DCB2.arrayItemsToConvertArray;
	var _0x1DA2E = _0x1DCB2.arrayItemsConvetXpArray;
	document.getElementById("dialogue-stardust-tools-selectItem").innerHTML = "";
	var _0x1C8F4 = "";
	for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1DA3C.length; _0x1C6B6++)
	{
		_0x1C8F4 += generateHTMLToSelectToolConversionItem(_0x1D0D4, _0x1DA3C[_0x1C6B6], _0x1DA2E[_0x1C6B6])
	};
	document.getElementById("dialogue-stardust-tools-selectItem").innerHTML = _0x1C8F4;
	openDialogueOverride("dialogue-stardust-tools", "large")
}

function openStardustToolDialogue2(_0x1D0D4, _0x1CF30, _0x1D47E)
{
	var _0x1DCDC;
	var _0x1DCCE;
	var _0x1DB62;
	if (_0x1D0D4 == "stardustPickaxe")
	{
		_0x1DCDC = parseInt(getPickaxeTypeData()[3]);
		_0x1DCCE = getPickaxeTypeData()[0];
		_0x1DB62 = getPickaxeTypeData()[1];
		document.getElementById("dialogue-stardustTool2-skillChosen-hidden").value = "mining"
	}
	else
	{
		if (_0x1D0D4 == "stardustHammer")
		{
			_0x1DCDC = parseInt(getHammerTypeData()[3]);
			_0x1DCCE = getHammerTypeData()[0];
			_0x1DB62 = getHammerTypeData()[1];
			document.getElementById("dialogue-stardustTool2-skillChosen-hidden").value = "crafting"
		}
	};
	if (_0x1DCDC > getItem("stardust"))
	{
		confirmDialogue("images/stardust.gif", "<span style=\'color:red\'>You do not have enough stardust.</span><br /><br /><span style=\'color:grey\'>Your current stardust required per XP is: " + _0x1DCDC, "Close", "", "");
		return
	};
	document.getElementById("dialogue-stardustTool2-item-img").src = "images/" + _0x1CF30 + ".png";
	document.getElementById("dialogue-stardustTool2-sdperxp-hidden").value = _0x1DCDC;
	document.getElementById("dialogue-stardustTool2-tool-hidden").value = _0x1D0D4;
	document.getElementById("dialogue-stardustTool2-item-hidden").value = _0x1CF30;
	document.getElementById("stardustTool2-info").innerHTML = "<b>Socket: </b>" + "<span style=\'color:grey\'>" + _0x1DB62 + " <img src=\'images/" + _0x1DB62 + ".png\' class=\'img-30\' /> " + "</span>" + "<br />" + "<b>Stardust Cost: </b>" + "<span style=\'color:grey\'>" + _0x1DCDC + " <img src=\'images/stardustIcon.png\' class=\'img-20\' /> per XP";
	document.getElementById("dialogue-stardustTool2-input").value = 1;
	document.getElementById("dialogue-stardustTool2-submit-btn").onclick = function ()
	{
		sendBytes("USE_STARDUST_TOOL_" + _0x1D0D4.toUpperCase() + "=" + _0x1CF30 + "~" + document.getElementById("dialogue-stardustTool2-input").value);
		closeDialogue("dialogue-stardustTool2")
	};
	onKeyUpStardustXonvertXp();
	openDialogue("dialogue-stardustTool2")
}

function playerMarketBuyClicksAll()
{
	var _0x1C83E = document.getElementById("dialogue-market-buy-hidden-itemName").value;
	var _0x1CDD2 = document.getElementById("dialogue-market-buy-hidden-price").value;
	var _0x1C84C = document.getElementById("dialogue-market-buy-hidden-amount").value;
	var _0x1DA66 = document.getElementById("dialogue-market-buy-input").value;
	var _0x1DA74 = _0x1CDD2 * _0x1DA66;
	var _0x1C9F0 = createHTMLBoxCheckOrXCollection("coins", [_0x1DA74], ["", ""]);
	document.getElementById("dialogue-market-buy-area").innerHTML = _0x1C9F0
}

function onKeyUpBuyPlayerMarket()
{
	var _0x1C83E = document.getElementById("dialogue-market-buy-hidden-itemName").value;
	var _0x1CDD2 = document.getElementById("dialogue-market-buy-hidden-price").value;
	var _0x1C84C = document.getElementById("dialogue-market-buy-hidden-amount").value;
	var _0x1DA66 = document.getElementById("dialogue-market-buy-input").value;
	var _0x1DA74 = _0x1CDD2 * _0x1DA66;
	var _0x1C9F0 = createHTMLBoxCheckOrXCollection("coins", [_0x1DA74], ["", ""]);
	document.getElementById("dialogue-market-buy-area").innerHTML = _0x1C9F0
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
	openDialogue("dialogue-rake")
}

function changeValueOfInputStardustTool(_0x1CE34, _0x1CE42, _0x1CE26)
{
	var _0x1CE50 = getMaxForStardustTool();
	switch (_0x1CE26)
	{
	case "ONE":
		_0x1CE50 = 1;
		break;
	case "25%":
		_0x1CE50 *= 0.25;
		break;
	case "50%":
		_0x1CE50 *= 0.5;
		break
	};
	document.getElementById("dialogue-stardustTool2-input").value = parseInt(_0x1CE50);
	onKeyUpStardustXonvertXp()
}

function getMaxForStardustTool()
{
	var _0x1C830 = document.getElementById("dialogue-stardustTool2-item-hidden").value;
	var _0x1D0D4 = document.getElementById("dialogue-stardustTool2-tool-hidden").value;
	var _0x1D470 = parseInt(document.getElementById("dialogue-stardustTool2-sdperxp-hidden").value);
	var _0x1D47E = 0;
	var _0x1D438 = global_stardustToolsMap[_0x1D0D4].arrayItemsToConvertArray;
	var _0x1D446 = global_stardustToolsMap[_0x1D0D4].arrayItemsConvetXpArray;
	for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1D438.length; _0x1C6B6++)
	{
		if (_0x1D438[_0x1C6B6] == _0x1C830)
		{
			_0x1D47E = _0x1D446[_0x1C6B6];
			break
		}
	};
	var _0x1D454 = getItem(_0x1C830);
	var _0x1D462 = _0x1D47E * _0x1D454 * _0x1D470;
	if (getItem("stardust") >= _0x1D462)
	{
		return _0x1D454
	}
	else
	{
		return parseInt(getItem("stardust") / (_0x1D47E * _0x1D470))
	}
}

function onKeyUpStardustXonvertXp()
{
	var _0x1C830 = document.getElementById("dialogue-stardustTool2-item-hidden").value;
	var _0x1CDC4 = parseInt(document.getElementById("dialogue-stardustTool2-input").value);
	var _0x1D0D4 = document.getElementById("dialogue-stardustTool2-tool-hidden").value;
	var _0x1D470 = parseInt(document.getElementById("dialogue-stardustTool2-sdperxp-hidden").value);
	var _0x1DA82 = document.getElementById("dialogue-stardustTool2-skillChosen-hidden").value;
	if (isNaN(_0x1CDC4))
	{
		document.getElementById("dialogue-stardustTool2-section-area").innerHTML = "";
		return
	};
	var _0x1D47E = 0;
	var _0x1D438 = global_stardustToolsMap[_0x1D0D4].arrayItemsToConvertArray;
	var _0x1D446 = global_stardustToolsMap[_0x1D0D4].arrayItemsConvetXpArray;
	for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1D438.length; _0x1C6B6++)
	{
		if (_0x1D438[_0x1C6B6] == _0x1C830)
		{
			_0x1D47E = _0x1D446[_0x1C6B6];
			break
		}
	};
	var _0x1C9F0 = "";
	var _0x1DA90 = _0x1D470 * _0x1CDC4 * _0x1D47E;
	var _0x1CBCC = _0x1CDC4 * _0x1D47E;
	_0x1C9F0 = createHTMLBoxCheckOrXCollection([_0x1C830, "stardust"], [_0x1CDC4, _0x1DA90], ["", ""]);
	document.getElementById("dialogue-stardustTool2-section-area").innerHTML = "<span class=\'html-box-check-or-check\' style=\'border:1px solid purple;display:inline-block;background-color:#ff99cc;font-size:16pt\'><img src=\'images/" + _0x1DA82 + "Skill.png\' class=\'img-50\' /> +" + formatNumber(_0x1D47E * _0x1CDC4) + " XP</span>" + _0x1C9F0
}

function loadMuteList(data)
{
	var _0x1C75E = data.split("~");
	var _0x1C8F4 = "<center>";
	_0x1C8F4 += "<table id=\'muteList-table\' class=\'sortable basic-table\' width=\'90%\'>";
	_0x1C8F4 += "<thead>";
	_0x1C8F4 += "<tr><th>Username</th><th>Muted By</th><th>Date Muted</th><th>Date Unmuted</th><th width=\'50%\'>Reason</th><th>IP Muted</th><th>Is Currenty Muted</th></tr>";
	_0x1C8F4 += "</thead>";
	_0x1C8F4 += "<tbody>";
	for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1C75E.length; _0x1C6B6++)
	{
		var _0x1D828 = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1D7FE = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1D7F0 = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1D81A = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1D80C = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1D7E2 = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1D7D4 = _0x1C75E[_0x1C6B6];
		_0x1C8F4 += "<tr>";
		_0x1C8F4 += "<td>" + _0x1D828 + "</td>";
		_0x1C8F4 += "<td>" + _0x1D7FE + "</td>";
		_0x1C8F4 += "<td>" + formatUnixToDate(_0x1D7F0) + "</td>";
		if (_0x1D81A - _0x1D7F0 >= 54000000000)
		{
			_0x1C8F4 += "<td>" + "Forever" + "</td>"
		}
		else
		{
			_0x1C8F4 += "<td>" + formatUnixToDate(_0x1D81A) + "</td>"
		};
		_0x1C8F4 += "<td>" + _0x1D80C + "</td>";
		_0x1C8F4 += "<td>" + _0x1D7E2 + "</td>";
		_0x1C8F4 += "<td>" + _0x1D7D4 + "</td>";
		_0x1C8F4 += "</tr>"
	};
	_0x1C8F4 += "</tbody>";
	_0x1C8F4 += "</table>";
	_0x1C8F4 += "</center>";
	document.getElementById("section-muteList").innerHTML = _0x1C8F4;
	sorttable.makeSortable(document.getElementById("muteList-table"))
}

function formatUnixToDate(_0x1D2F6)
{
	var _0x1D312 = _0x1D2F6;
	var _0x1D304 = new Date(parseInt(_0x1D312));
	var _0x1D320 = _0x1D304.toString("MM/dd/yy HH:mm:ss");
	return _0x1D320
}

function openShovelDialogue()
{
	var _0x1DC96 = getShovelTypeData();
	var _0x1DB7E = _0x1DC96[0];
	var _0x1DB62 = _0x1DC96[1];
	var _0x1CC58 = _0x1DC96[2];
	var _0x1D630 = _0x1DC96[3];
	if (_0x1CC58 != "none")
	{
		confirmDialogue("images/" + _0x1DB7E + ".png", "Add a <img src=\'images/" + _0x1CC58 + ".png\' class=\'img-30\' /> to your shovel?<br /><br /><i style=\'color:grey\'>Upgrading your shovel will increase your chance of finding sand.</i>", "Socket", "Close", "SOCKET=shovel")
	}
}

function openSmallFishingNetDialogue()
{
	var _0x1DB8C = getSmallFishingNetTypeData();
	var _0x1DB7E = _0x1DB8C[0];
	var _0x1DB62 = _0x1DB8C[1];
	var _0x1CC58 = _0x1DB8C[2];
	var _0x1DB9A = _0x1DB8C[3];
	if (_0x1CC58 != "none")
	{
		confirmDialogue("images/" + _0x1DB7E + ".png", "Add a <img src=\'images/" + _0x1CC58 + ".png\' class=\'img-30\' /> to your fishing tool?<br /><br /><i style=\'color:grey\'>Upgrading will allow you to catch:<br /><br /><img src=\'images/" + _0x1DB9A + ".png\' class=\'img-50\' /> <span style=\'color:brown\'>" + getItemName(_0x1DB9A) + "</span>", "Socket", "Close", "SOCKET=smallFishingNet")
	}
}

function openFishingRodDialogue()
{
	var _0x1DB8C = getFishingRodTypeData();
	var _0x1DB7E = _0x1DB8C[0];
	var _0x1DB62 = _0x1DB8C[1];
	var _0x1CC58 = _0x1DB8C[2];
	var _0x1DB9A = _0x1DB8C[3];
	if (_0x1CC58 != "none")
	{
		confirmDialogue("images/" + _0x1DB7E + ".png", "Add a <img src=\'images/" + _0x1CC58 + ".png\' class=\'img-30\' /> to your fishing tool?<br /><br /><i style=\'color:grey\'>Upgrading will allow you to catch:<br /><br /><img src=\'images/" + _0x1DB9A + ".png\' class=\'img-50\' /> <span style=\'color:brown\'>" + getItemName(_0x1DB9A) + "</span>", "Socket", "Close", "SOCKET=fishingRod")
	}
}

function openHarpoonDialogue()
{
	var _0x1DB8C = getHarpoonTypeData();
	var _0x1DB7E = _0x1DB8C[0];
	var _0x1DB62 = _0x1DB8C[1];
	var _0x1CC58 = _0x1DB8C[2];
	var _0x1DB9A = _0x1DB8C[3];
	if (_0x1CC58 != "none")
	{
		confirmDialogue("images/" + _0x1DB7E + ".png", "Add a <img src=\'images/" + _0x1CC58 + ".png\' class=\'img-30\' /> to your fishing tool?<br /><br /><i style=\'color:grey\'>Upgrading will allow you to catch:<br /><br /><img src=\'images/" + _0x1DB9A + ".png\' class=\'img-50\' /> <span style=\'color:brown\'>" + getItemName(_0x1DB9A) + "</span>", "Socket", "Close", "SOCKET=harpoon")
	}
}

function openAxeDialogue()
{
	var _0x1DB38 = getAxeTypeData();
	var _0x1DB54 = _0x1DB38[0];
	var _0x1DB62 = _0x1DB38[1];
	var _0x1CC58 = _0x1DB38[2];
	var _0x1DB46 = _0x1DB38[3];
	if (_0x1CC58 != "none")
	{
		confirmDialogue("images/" + _0x1DB54 + ".png", "Add a <img src=\'images/" + _0x1CC58 + ".png\' class=\'img-30\' /> to your axe?<br /><br /><i style=\'color:grey\'>Upgrading your axe will give you more logs when chopping trees.", "Socket", "Close", "SOCKET=axe")
	}
}

function getHeat(_0x1D3C8)
{
	var _0x1D278 = 0;
	switch (_0x1D3C8)
	{
	case "logs":
		_0x1D278 = 1;
		break;
	case "oakLogs":
		_0x1D278 = 2;
		break;
	case "willowLogs":
		_0x1D278 = 3;
		break;
	case "bambooLogs":
		_0x1D278 = 4;
		break;
	case "mapleLogs":
		_0x1D278 = 5;
		break;
	case "lavaLogs":
		_0x1D278 = 6;
		break;
	case "stardustLogs":
		_0x1D278 = 7;
		break
	};
	return _0x1D278
}

function addLogsOven(_0x1CA36)
{
	openInputDialogue("Add Logs", "images/" + _0x1CA36 + ".png", _0x1CA36, 1, ["heat"], [getHeat(_0x1CA36)], [_0x1CA36], [1], "Add Heat", "ADD_HEAT", "Adding logs to your oven will increase its heat.  Heat is used to cook food.")
}

function clicksOven()
{
	var _0x1C8F4 = "";
	var _0x1CEEA = "";
	_0x1CEEA = "logs";
	_0x1CEEA = "logs";
	_0x1C8F4 += "<div onclick=\'addLogsOven(\"" + _0x1CEEA + "\");closeDialogue(\"dialogue-confirm\")\' class=\'oven-log-button\'>";
	_0x1C8F4 += "<table width=\'100%\'>";
	_0x1C8F4 += "<tr>";
	_0x1C8F4 += "<td>";
	_0x1C8F4 += "<img src=\'images/" + _0x1CEEA + ".png\' class=\'img-70\' />";
	_0x1C8F4 += "</td>";
	_0x1C8F4 += "<td style=\'text-align:right;\'>";
	_0x1C8F4 += "<span style=\'color:orange\'>" + formatNumber(getItem(_0x1CEEA)) + "</span><br /> " + _0x1CEEA.toUpperCase();
	_0x1C8F4 += "<br /><br />";
	_0x1C8F4 += "<img src=\'images/heat.png\' class=\'img-20\' /> " + getHeat(_0x1CEEA);
	_0x1C8F4 += "</td>";
	_0x1C8F4 += "</table>";
	_0x1C8F4 += "</div>";
	_0x1CEEA = "oakLogs";
	_0x1C8F4 += "<div onclick=\'addLogsOven(\"" + _0x1CEEA + "\");closeDialogue(\"dialogue-confirm\")\' class=\'oven-log-button\'>";
	_0x1C8F4 += "<table width=\'100%\'>";
	_0x1C8F4 += "<tr>";
	_0x1C8F4 += "<td>";
	_0x1C8F4 += "<img src=\'images/" + _0x1CEEA + ".png\' class=\'img-70\' />";
	_0x1C8F4 += "</td>";
	_0x1C8F4 += "<td style=\'text-align:right;\'>";
	_0x1C8F4 += "<span style=\'color:orange\'>" + formatNumber(getItem(_0x1CEEA)) + "</span><br /> " + "OAK";
	_0x1C8F4 += "<br /><br />";
	_0x1C8F4 += "<img src=\'images/heat.png\' class=\'img-20\' /> " + getHeat(_0x1CEEA);
	_0x1C8F4 += "</td>";
	_0x1C8F4 += "</table>";
	_0x1C8F4 += "</div>";
	_0x1CEEA = "willowLogs";
	_0x1C8F4 += "<div onclick=\'addLogsOven(\"" + _0x1CEEA + "\");closeDialogue(\"dialogue-confirm\")\'  class=\'oven-log-button\'>";
	_0x1C8F4 += "<table width=\'100%\'>";
	_0x1C8F4 += "<tr>";
	_0x1C8F4 += "<td>";
	_0x1C8F4 += "<img src=\'images/" + _0x1CEEA + ".png\' class=\'img-70\' />";
	_0x1C8F4 += "</td>";
	_0x1C8F4 += "<td style=\'text-align:right;\'>";
	_0x1C8F4 += "<span style=\'color:orange\'>" + formatNumber(getItem(_0x1CEEA)) + "</span><br /> " + "WILLOW";
	_0x1C8F4 += "<br /><br />";
	_0x1C8F4 += "<img src=\'images/heat.png\' class=\'img-20\' /> " + getHeat(_0x1CEEA);
	_0x1C8F4 += "</td>";
	_0x1C8F4 += "</table>";
	_0x1C8F4 += "</div>";
	_0x1CEEA = "bambooLogs";
	_0x1C8F4 += "<div onclick=\'addLogsOven(\"" + _0x1CEEA + "\");closeDialogue(\"dialogue-confirm\")\'  class=\'oven-log-button\'>";
	_0x1C8F4 += "<table width=\'100%\'>";
	_0x1C8F4 += "<tr>";
	_0x1C8F4 += "<td>";
	_0x1C8F4 += "<img src=\'images/" + _0x1CEEA + ".png\' class=\'img-70\' />";
	_0x1C8F4 += "</td>";
	_0x1C8F4 += "<td style=\'text-align:right;\'>";
	_0x1C8F4 += "<span style=\'color:orange\'>" + formatNumber(getItem(_0x1CEEA)) + "</span><br /> " + "BAMBOO";
	_0x1C8F4 += "<br /><br />";
	_0x1C8F4 += "<img src=\'images/heat.png\' class=\'img-20\' /> " + getHeat(_0x1CEEA);
	_0x1C8F4 += "</td>";
	_0x1C8F4 += "</table>";
	_0x1C8F4 += "</div>";
	_0x1CEEA = "mapleLogs";
	_0x1C8F4 += "<div onclick=\'addLogsOven(\"" + _0x1CEEA + "\");closeDialogue(\"dialogue-confirm\")\'  class=\'oven-log-button\'>";
	_0x1C8F4 += "<table width=\'100%\'>";
	_0x1C8F4 += "<tr>";
	_0x1C8F4 += "<td>";
	_0x1C8F4 += "<img src=\'images/" + _0x1CEEA + ".png\' class=\'img-70\' />";
	_0x1C8F4 += "</td>";
	_0x1C8F4 += "<td style=\'text-align:right;\'>";
	_0x1C8F4 += "<span style=\'color:orange\'>" + formatNumber(getItem(_0x1CEEA)) + "</span><br /> " + "MAPLE";
	_0x1C8F4 += "<br /><br />";
	_0x1C8F4 += "<img src=\'images/heat.png\' class=\'img-20\' /> " + getHeat(_0x1CEEA);
	_0x1C8F4 += "</td>";
	_0x1C8F4 += "</table>";
	_0x1C8F4 += "</div>";
	_0x1CEEA = "lavaLogs";
	_0x1C8F4 += "<div onclick=\'addLogsOven(\"" + _0x1CEEA + "\");closeDialogue(\"dialogue-confirm\")\'  class=\'oven-log-button\'>";
	_0x1C8F4 += "<table width=\'100%\'>";
	_0x1C8F4 += "<tr>";
	_0x1C8F4 += "<td>";
	_0x1C8F4 += "<img src=\'images/" + _0x1CEEA + ".png\' class=\'img-70\' />";
	_0x1C8F4 += "</td>";
	_0x1C8F4 += "<td style=\'text-align:right;\'>";
	_0x1C8F4 += "<span style=\'color:orange\'>" + formatNumber(getItem(_0x1CEEA)) + "</span><br /> " + "LAVA";
	_0x1C8F4 += "<br /><br />";
	_0x1C8F4 += "<img src=\'images/heat.png\' class=\'img-20\' /> " + getHeat(_0x1CEEA);
	_0x1C8F4 += "</td>";
	_0x1C8F4 += "</table>";
	_0x1C8F4 += "</div>";
	_0x1CEEA = "stardustLogs";
	_0x1C8F4 += "<div onclick=\'addLogsOven(\"" + _0x1CEEA + "\");closeDialogue(\"dialogue-confirm\")\'  class=\'oven-log-button\'>";
	_0x1C8F4 += "<table width=\'100%\'>";
	_0x1C8F4 += "<tr>";
	_0x1C8F4 += "<td>";
	_0x1C8F4 += "<img src=\'images/" + _0x1CEEA + ".png\' class=\'img-70\' />";
	_0x1C8F4 += "</td>";
	_0x1C8F4 += "<td style=\'text-align:right;\'>";
	_0x1C8F4 += "<span style=\'color:orange\'>" + formatNumber(getItem(_0x1CEEA)) + "</span><br /> " + "STARDUST";
	_0x1C8F4 += "<br /><br />";
	_0x1C8F4 += "<img src=\'images/heat.png\' class=\'img-20\' /> " + getHeat(_0x1CEEA);
	_0x1C8F4 += "</td>";
	_0x1C8F4 += "</table>";
	_0x1C8F4 += "</div>";
	confirmDialogue("none", _0x1C8F4, "Close", "", "")
}
global_MarketData = [];

function MarketData(_0x1D96A, _0x1D978, _0x1C83E, _0x1D932, _0x1CDD2, _0x1D95C, _0x1D94E, _0x1D940, _0x1D986)
{
	this.keyFound = _0x1D96A;
	this.playerId = _0x1D978;
	this.itemName = _0x1C83E;
	this.itemAmount = _0x1D932;
	this.price = _0x1CDD2;
	this.itemSlot = _0x1D95C;
	this.itemCollect = _0x1D94E;
	this.itemCategory = _0x1D940;
	this.postDate = _0x1D986
}
global_TradablesData = [];

function Tradables(_0x1C83E, _0x1CA0C, _0x1CA28, _0x1C9B8)
{
	this.itemName = _0x1C83E;
	this.lowerLimit = _0x1CA0C;
	this.upperLimit = _0x1CA28;
	this.category = _0x1C9B8
}

function getPlayerSlotData(_0x1C9AA)
{
	for (i = 0; i < global_MarketData.length; i++)
	{
		if (global_MarketData[i].itemSlot == _0x1C9AA && global_MarketData[i].playerId == getItem("playerId"))
		{
			return global_MarketData[i]
		}
	};
	return false
}

function refreshMarketGUI()
{
	for (var _0x1C6B6 = 1; _0x1C6B6 <= 3; _0x1C6B6++)
	{
		var _0x1DDE6 = getPlayerSlotData(_0x1C6B6);
		if (!_0x1DDE6)
		{
			document.getElementById("market-slot-empty-" + _0x1C6B6).style.display = "";
			document.getElementById("market-slot-" + _0x1C6B6).style.display = "none"
		}
		else
		{
			document.getElementById("market-slot-empty-" + _0x1C6B6).style.display = "none";
			document.getElementById("market-slot-" + _0x1C6B6).style.display = "";
			document.getElementById("market-slot-name-" + _0x1C6B6).innerHTML = getItemName(_0x1DDE6.itemName).toUpperCase();
			document.getElementById("market-slot-img-" + _0x1C6B6).src = "images/" + _0x1DDE6.itemName + ".png";
			document.getElementById("market-slot-amount-" + _0x1C6B6).innerHTML = formatNumber(_0x1DDE6.itemAmount);
			document.getElementById("market-slot-price-" + _0x1C6B6).innerHTML = formatNumber(_0x1DDE6.price);
			document.getElementById("market-slot-collect-" + _0x1C6B6).innerHTML = formatNumber(_0x1DDE6.itemCollect);
			postDate = formatTime((_0x1DDE6.postDate - getCurrentMillis()) / 1000);
			if (postDate == 0)
			{
				document.getElementById("market-slot-timeleft-" + _0x1C6B6).innerHTML = "<b style=\'color:#ff8566\'>EXPIRED!</b>"
			}
			else
			{
				document.getElementById("market-slot-timeleft-" + _0x1C6B6).innerHTML = "<b style=\'color:orange\'>Expires in</b> " + postDate
			}
		}
	}
}

function displayMarket(_0x1CDB6)
{
	if (_0x1CDB6)
	{
		document.getElementById("market-loading-section").style.display = "none";
		document.getElementById("market-slots-section").style.display = "";
		document.getElementById("market-buttons-section").style.display = "";
		document.getElementById("market-display-section").style.display = ""
	}
	else
	{
		if (_0x1CDB6)
		{
			document.getElementById("market-loading-section").style.display = "";
			document.getElementById("market-slots-section").style.display = "none";
			document.getElementById("market-buttons-section").style.display = "none";
			document.getElementById("market-display-section").style.display = "none"
		}
	}
}
var openTradablesDialogue_slot = 0;

function addItemSlotButton(_0x1C9AA)
{
	openTradablesDialogue_slot = _0x1C9AA;
	openTradablesDialogue(true)
}

function browseMarketDialogue()
{
	openTradablesDialogue(false)
}

function openTradablesDialogue(_0x1DCEA)
{
	var _0x1C85A = document.getElementById("dialogue-tradables-section");
	var _0x1C8F4 = "";
	var _0x1DCF8 = "";
	for (var _0x1C6B6 = 0; _0x1C6B6 < global_TradablesData.length; _0x1C6B6++)
	{
		var _0x1CA1A = global_TradablesData[_0x1C6B6];
		var _0x1C83E = _0x1CA1A.itemName;
		var _0x1CA0C = _0x1CA1A.lowerLimit;
		var _0x1CA28 = _0x1CA1A.upperLimit;
		var _0x1C9B8 = _0x1CA1A.category;
		if (_0x1DCF8 != _0x1C9B8)
		{
			if (_0x1DCF8 != "")
			{
				_0x1C8F4 += "</div>"
			};
			_0x1C8F4 += "<div class=\'market-tradables-dialogue-section\'>";
			_0x1DCF8 = _0x1C9B8
		};
		var _0x1DD06 = "browseMarketItem(\"" + _0x1C83E + "\");closeDialogue(\"dialogue-tradables\")";
		if (_0x1DCEA)
		{
			_0x1DD06 = "addItemSlotButtonSelectItem(\"" + _0x1C6B6 + "\");closeDialogue(\"dialogue-tradables\")"
		};
		_0x1C8F4 += "<div class=\'dialogue-tradables-item\'><img oncontextmenu=\'addItemSlotButtonSelectItemChangeLimits(\"" + _0x1C6B6 + "\");closeDialogue(\"dialogue-tradables\"); return false;\' onclick=\'" + _0x1DD06 + "\' src=\'images/" + _0x1C83E + ".png\' class=\'img-50\' /></div>"
	};
	_0x1C85A.innerHTML = _0x1C8F4;
	openDialogueOverride("dialogue-tradables", "large")
}

function browseMarketItem(_0x1C83E)
{
	var _0x1CC74 = getItemName(_0x1C83E);
	document.getElementById("market-filter").value = _0x1CC74;
	marketFilter(_0x1CC74, true)
}

function addItemSlotButtonSelectItem(_0x1C9FE)
{
	var _0x1C9D4 = _0x1C83E;
	var _0x1C9C6 = 0;
	var _0x1C9E2 = 0;
	var _0x1CA1A = global_TradablesData[_0x1C9FE];
	var _0x1C83E = _0x1CA1A.itemName;
	var _0x1CA0C = _0x1CA1A.lowerLimit;
	var _0x1CA28 = _0x1CA1A.upperLimit;
	var _0x1C9B8 = _0x1CA1A.category;
	var _0x1C9F0 = "";
	_0x1C9F0 += "<center>" + getItemName(_0x1C83E).toUpperCase() + "<br /><img src=\'images/" + _0x1C83E + ".png\' class=\'img-100\' /></center>";
	_0x1C9F0 += "<hr class=\'hr-thin\' />";
	_0x1C9F0 += "<div style=\'text-align:left;margin:0 auto;width: 90%;border:1px solid black;color:white;padding:20px;background-color:#476b6b;border-radius:3pt;\'>";
	_0x1C9F0 += "<input id=\'post-item-market-itemName\' value=\'" + _0x1C83E + "\' type=\'hidden\'>";
	_0x1C9F0 += "Amount to Sell<br />";
	_0x1C9F0 += "<input id=\'post-item-market-amount\' placeholder=\'You own: " + getItem(_0x1C83E) + "\' class=\'input-larger\'>";
	_0x1C9F0 += "<br /><br />";
	_0x1C9F0 += "<img src=\'images/coins.png\' class=\'img-30\' /> Price each<br />";
	_0x1C9F0 += "<input id=\'post-item-market-price\' class=\'input-larger\'>";
	_0x1C9F0 += "</div>";
	_0x1C9F0 += "<br />";
	_0x1C9F0 += "<div class=\'blue-dark-box\'>";
	_0x1C9F0 += "<b>Price limits: " + "</b>" + "<img src=\'images/coins.png\' class=\'img-30\' /> " + formatNumber(_0x1CA0C) + " - " + "<img src=\'images/coins.png\' class=\'img-30\' /> " + formatNumber(_0x1CA28);
	_0x1C9F0 += "</div>";
	document.getElementById("dialogue-tradablesPostItem-section").innerHTML = _0x1C9F0;
	openDialogue("dialogue-tradables-post-item")
}

function addItemSlotButtonSelectItemChangeLimits(_0x1C9FE)
{
	var _0x1C9D4 = _0x1C83E;
	var _0x1C9C6 = 0;
	var _0x1C9E2 = 0;
	var _0x1CA1A = global_TradablesData[_0x1C9FE];
	var _0x1C83E = _0x1CA1A.itemName;
	var _0x1CA0C = _0x1CA1A.lowerLimit;
	var _0x1CA28 = _0x1CA1A.upperLimit;
	var _0x1C9B8 = _0x1CA1A.category;
	var _0x1C9F0 = "";
	_0x1C9F0 += "<center>" + getItemName(_0x1C83E).toUpperCase() + "<br /><img src=\'images/" + _0x1C83E + ".png\' class=\'img-100\' /></center>";
	_0x1C9F0 += "<hr class=\'hr-thin\' />";
	_0x1C9F0 += "<div style=\'text-align:left;margin:0 auto;width: 90%;border:1px solid black;color:white;padding:20px;background-color:#476b6b;border-radius:3pt;\'>";
	_0x1C9F0 += "<input id=\'post-item-market-itemName-changePrice\' value=\'" + _0x1C83E + "\' type=\'hidden\'>";
	_0x1C9F0 += "New Lower Limit<br />";
	_0x1C9F0 += "<input id=\'post-item-market-price-lowerLimit\' value=\'" + _0x1CA0C + "\' placeholder=\'Currently: " + formatNumber(_0x1CA0C) + "\' class=\'input-larger\'>";
	_0x1C9F0 += "<br /><br />";
	_0x1C9F0 += "New Upper Limit<br />";
	_0x1C9F0 += "<input id=\'post-item-market-price-upperLimit\' value=\'" + _0x1CA28 + "\'  placeholder=\'Currently: " + formatNumber(_0x1CA28) + "\' class=\'input-larger\'>";
	_0x1C9F0 += "</div>";
	_0x1C9F0 += "<br />";
	_0x1C9F0 += "<div class=\'blue-dark-box\'>";
	_0x1C9F0 += "<b>CURRENT LIMITS: " + "</b>" + "<img src=\'images/coins.png\' class=\'img-30\' /> " + formatNumber(_0x1CA0C) + " - " + "<img src=\'images/coins.png\' class=\'img-30\' /> " + formatNumber(_0x1CA28);
	_0x1C9F0 += "</div>";
	document.getElementById("dialogue-tradablesPostItem-section-limits").innerHTML = _0x1C9F0;
	openDialogue("dialogue-tradables-change-item-limits")
}

function doPostMarket(_0x1C83E, _0x1CDC4, _0x1CDD2)
{
	_0x1CDC4 = convertNumberWithLetrtsKMBToNumber(_0x1CDC4);
	_0x1CDD2 = convertNumberWithLetrtsKMBToNumber(_0x1CDD2);
	confirmDialogue("images/shop_black.png", "Are you sure you want to post this on the market?<span style=\'color:grey\'><br /><br /><img src=\'images/" + _0x1C83E + ".png\' class=\'img-30\' /> <b>Selling: </b>" + formatNumber(_0x1CDC4) + "<br /><br /><img src=\'images/coins.png\' class=\'img-30\'> <b>Price each: </b>" + formatNumber(_0x1CDD2) + "<br /><br /><img src=\'images/coinPile.png\' class=\'img-30\'> <b>Total: </b>" + formatNumber(_0x1CDC4 * _0x1CDD2) + "</span>", "Confirm Post", "Cancel", "POST_MARKET=" + _0x1C83E + "~" + _0x1CDC4 + "~" + _0x1CDD2 + "~" + openTradablesDialogue_slot)
}

function changeMarketLimits(_0x1C83E, _0x1CDC4, _0x1CDD2)
{
	_0x1CDC4 = convertNumberWithLetrtsKMBToNumber(_0x1CDC4);
	_0x1CDD2 = convertNumberWithLetrtsKMBToNumber(_0x1CDD2);
	confirmDialogue("images/" + _0x1C83E + ".png", "Are you sure you want to modifiy the price limits?<span style=\'color:grey\'><br /><br /><img src=\'images/coins.png\' class=\'img-30\'> <b>Lower: </b>" + formatNumber(_0x1CDC4) + "<br /><br /><img src=\'images/coins.png\' class=\'img-30\'> <b>Upper: </b>" + formatNumber(_0x1CDD2), "Confirm Price Margins", "Cancel", "CHANGE_MARGIN_MARKET=" + _0x1C83E + "~" + _0x1CDC4 + "~" + _0x1CDD2)
}

function getCurrentMillis()
{
	return new Date().getTime()
}

function populateMarketTable()
{
	if (document.getElementById("market-filter").value.length > 0)
	{
		return
	};
	if (global_MarketData.length == 0)
	{
		document.getElementById("market-display-section").innerHTML = "<h1 style=\'text-align:center\'>Market is currently empty.</h1>";
		return
	};
	var _0x1C8F4 = "<center>";
	_0x1C8F4 += "<table id=\'market-table\' class=\'sortable basic-table\' width=\'90%\'>";
	_0x1C8F4 += "<thead>";
	_0x1C8F4 += "<tr><th width=\'15%\' colspan=\'2\'>Name</th><th width=\'15%\'>Amount</th><th width=\'15%\'>Price each</th><th width=\'15%\'>Category</th><th width=\'5%\'>Expires In</th></tr>";
	_0x1C8F4 += "</thead>";
	_0x1C8F4 += "<tbody>";
	for (var _0x1C6B6 = 0; _0x1C6B6 < global_MarketData.length; _0x1C6B6++)
	{
		var _0x1DD30 = global_MarketData[_0x1C6B6];
		var _0x1D96A = _0x1DD30.keyFound;
		var _0x1C83E = _0x1DD30.itemName;
		var _0x1D932 = _0x1DD30.itemAmount;
		var _0x1DD22 = _0x1DD30.price;
		var _0x1D940 = _0x1DD30.itemCategory;
		var _0x1D986 = _0x1DD30.postDate;
		_0x1D986 = formatTime((_0x1D986 - getCurrentMillis()) / 1000);
		if (_0x1D932 == 0 || _0x1D986 == 0)
		{
			continue
		};
		customAttribute = "onclick=\'purchaseFromMarket(\"" + _0x1D96A + "\",\"" + _0x1C83E + "\",\"" + _0x1D932 + "\",\"" + _0x1DD22 + "\")\'";
		if (_0x1D96A.split("_")[0] == getItem("playerId"))
		{
			customAttribute = "style=\'background-color:silver;\'"
		};
		_0x1C8F4 += "<tr class=\'tr-hover\' id=\'marekt-row-" + _0x1C83E + "\' " + customAttribute + " style=\'border:1px solid grey\'>";
		_0x1C8F4 += "<td style=\'border:none\'>" + getItemName(_0x1C83E).toUpperCase() + "</td>";
		_0x1C8F4 += "<td style=\'border:none\'>" + "<img class=\'img-50\' src=\'images/" + _0x1C83E + ".png\'" + "</td>";
		_0x1C8F4 += "<td style=\'border:none\'>" + formatNumber(_0x1D932) + "</td>";
		_0x1C8F4 += "<td style=\'border:none\'>" + formatNumber(_0x1DD22) + "</td>";
		_0x1C8F4 += "<td style=\'color:grey\'style=\'border:none\'>" + _0x1D940 + "</td>";
		_0x1C8F4 += "<td style=\'border:none\'>" + _0x1D986 + "</td>";
		_0x1C8F4 += "</tr>"
	};
	_0x1C8F4 += "</tbody>";
	_0x1C8F4 += "</table>";
	_0x1C8F4 += "</center>";
	document.getElementById("market-display-section").innerHTML = _0x1C8F4;
	sorttable.makeSortable(document.getElementById("market-table"))
}

function purchaseFromMarket(_0x1D96A, _0x1C83E, _0x1D932, _0x1CDD2)
{
	document.getElementById("dialogue-market-buy-input").value = "";
	document.getElementById("dialogue-market-buy-hidden-itemName").value = _0x1D96A;
	document.getElementById("dialogue-market-buy-hidden-keyFound").value = _0x1C83E;
	document.getElementById("dialogue-market-buy-hidden-price").value = _0x1CDD2;
	document.getElementById("dialogue-market-buy-hidden-amount").value = _0x1D932;
	openDialogue("dialogue-market-buy")
}

function purchaseFromMarketConfirm()
{
	var _0x1D96A = document.getElementById("dialogue-market-buy-hidden-itemName").value;
	var _0x1C83E = document.getElementById("dialogue-market-buy-hidden-keyFound").value;
	var _0x1CDD2 = document.getElementById("dialogue-market-buy-hidden-price").value;
	var _0x1D932 = document.getElementById("dialogue-market-buy-hidden-amount").value;
	var _0x1DA66 = document.getElementById("dialogue-market-buy-input").value;
	confirmDialogue("images/shop_black.png", "You are about to purchase:<br /><br /><img src=\'images/" + _0x1C83E + ".png\' class=\'img-30\' /> " + formatNumber(_0x1DA66) + " for <img src=\'images/coins.png\' class=\'img-30\' /> " + formatNumber(_0x1DA66 * _0x1CDD2) + " coins.", "Confirm", "Cancel", "MARKET_BUY=" + _0x1D96A + "~" + _0x1DA66 + "~" + _0x1C83E + "~" + _0x1CDD2)
}

function marketFilter(_0x1C7B2, _0x1D994)
{
	_0x1C7B2 = _0x1C7B2.toLowerCase();
	var _0x1D9B0 = document.getElementById("market-table");
	var _0x1D9A2 = _0x1D9B0.getElementsByTagName("tr");
	for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1D9A2.length; _0x1C6B6++)
	{
		_0x1D9A2[_0x1C6B6].style.display = "";
		var _0x1D1EC = _0x1D9A2[_0x1C6B6].id.split("-")[2];
		if (_0x1D1EC != null)
		{
			_0x1D1EC = getItemName(_0x1D1EC).toLowerCase();
			if (_0x1D994)
			{
				if (_0x1D1EC != _0x1C7B2)
				{
					_0x1D9A2[_0x1C6B6].style.display = "none"
				}
			}
			else
			{
				if (!_0x1D1EC.includes(_0x1C7B2.trim()))
				{
					_0x1D9A2[_0x1C6B6].style.display = "none"
				}
			}
		}
	};
	if (_0x1C7B2.length > 0)
	{
		document.getElementById("market-filter-x").style.display = ""
	}
	else
	{
		document.getElementById("market-filter-x").style.display = "none"
	}
}

function refreshTradables(data)
{
	global_TradablesData = [];
	var _0x1C75E = data.split("~");
	for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1C75E.length; _0x1C6B6++)
	{
		var _0x1C83E = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1CA0C = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1CA28 = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1C9B8 = _0x1C75E[_0x1C6B6];
		global_TradablesData.push(new Tradables(_0x1C83E, _0x1CA0C, _0x1CA28, _0x1C9B8))
	}
}

function refreshMarket(data)
{
	if (data == "")
	{
		return
	};
	global_MarketData = [];
	var _0x1C75E = data.split("~");
	for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1C75E.length; _0x1C6B6++)
	{
		var _0x1D96A = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1D978 = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1C83E = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1D932 = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1DD22 = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1D95C = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1D94E = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1D940 = _0x1C75E[_0x1C6B6];
		_0x1C6B6++;
		var _0x1D986 = _0x1C75E[_0x1C6B6];
		global_MarketData.push(new MarketData(_0x1D96A, _0x1D978, _0x1C83E, _0x1D932, _0x1DD22, _0x1D95C, _0x1D94E, _0x1D940, _0x1D986))
	}
}

function refreshDonorTable()
{
	var _0x1DDA0 = getCurrentMillis();
	var _0x1CEEA = "";
	_0x1CEEA = "woodcuttingPatch5";
	if (getItem(_0x1CEEA) == 0)
	{
		document.getElementById("donorTable-" + _0x1CEEA).innerHTML = "Locked"
	}
	else
	{
		if (_0x1DDA0 > getItem(_0x1CEEA))
		{
			document.getElementById("donorTable-" + _0x1CEEA).innerHTML = "Locked"
		}
		else
		{
			var _0x1DDAE = getItem(_0x1CEEA) - _0x1DDA0;
			document.getElementById("donorTable-" + _0x1CEEA).innerHTML = "<span style=\'color:green\'>" + parseInt(1 + (_0x1DDAE / 1000 / 60 / 60 / 24)) + " days</span>"
		}
	};
	_0x1CEEA = "woodcuttingPatch6";
	if (getItem(_0x1CEEA) == 0)
	{
		document.getElementById("donorTable-" + _0x1CEEA).innerHTML = "Locked"
	}
	else
	{
		if (_0x1DDA0 > getItem(_0x1CEEA))
		{
			document.getElementById("donorTable-" + _0x1CEEA).innerHTML = "Locked"
		}
		else
		{
			var _0x1DDAE = getItem(_0x1CEEA) - _0x1DDA0;
			document.getElementById("donorTable-" + _0x1CEEA).innerHTML = "<span style=\'color:green\'>" + parseInt(1 + (_0x1DDAE / 1000 / 60 / 60 / 24)) + " days</span>"
		}
	};
	_0x1CEEA = "farmingPlot5";
	if (getItem(_0x1CEEA) == 0)
	{
		document.getElementById("donorTable-" + _0x1CEEA).innerHTML = "Locked"
	}
	else
	{
		if (_0x1DDA0 > getItem(_0x1CEEA))
		{
			document.getElementById("donorTable-" + _0x1CEEA).innerHTML = "Locked"
		}
		else
		{
			var _0x1DDAE = getItem(_0x1CEEA) - _0x1DDA0;
			document.getElementById("donorTable-" + _0x1CEEA).innerHTML = "<span style=\'color:green\'>" + parseInt(1 + (_0x1DDAE / 1000 / 60 / 60 / 24)) + " days</span>"
		}
	};
	_0x1CEEA = "farmingPlot6";
	if (getItem(_0x1CEEA) == 0)
	{
		document.getElementById("donorTable-" + _0x1CEEA).innerHTML = "Locked"
	}
	else
	{
		if (_0x1DDA0 > getItem(_0x1CEEA))
		{
			document.getElementById("donorTable-" + _0x1CEEA).innerHTML = "Locked"
		}
		else
		{
			var _0x1DDAE = getItem(_0x1CEEA) - _0x1DDA0;
			document.getElementById("donorTable-" + _0x1CEEA).innerHTML = "<span style=\'color:green\'>" + parseInt(1 + (_0x1DDAE / 1000 / 60 / 60 / 24)) + " days</span>"
		}
	};
	_0x1CEEA = "moreOfflineTime";
	if (getItem(_0x1CEEA) == 0)
	{
		document.getElementById("donorTable-" + _0x1CEEA).innerHTML = "Locked"
	}
	else
	{
		if (_0x1DDA0 > getItem(_0x1CEEA))
		{
			document.getElementById("donorTable-" + _0x1CEEA).innerHTML = "Locked"
		}
		else
		{
			var _0x1DDAE = getItem(_0x1CEEA) - _0x1DDA0;
			document.getElementById("donorTable-" + _0x1CEEA).innerHTML = "<span style=\'color:green\'>" + parseInt(1 + (_0x1DDAE / 1000 / 60 / 60 / 24)) + " days</span>"
		}
	};
	_0x1CEEA = "bonusXp";
	if (getItem(_0x1CEEA) == 0)
	{
		document.getElementById("donorTable-" + _0x1CEEA).innerHTML = "Locked"
	}
	else
	{
		if (_0x1DDA0 > getItem(_0x1CEEA))
		{
			document.getElementById("donorTable-" + _0x1CEEA).innerHTML = "Locked"
		}
		else
		{
			var _0x1DDAE = getItem(_0x1CEEA) - _0x1DDA0;
			document.getElementById("donorTable-" + _0x1CEEA).innerHTML = "<span style=\'color:green\'>" + parseInt(1 + (_0x1DDAE / 1000 / 60 / 60 / 24)) + " days</span>"
		}
	}
}

function getBrewingKitDataTypes()
{
	var _0x1D366 = ["none", "none", "none", 0];
	var _0x1CEEA = "";
	_0x1CEEA = "brewingKit";
	if (getItem(_0x1CEEA) == 1)
	{
		_0x1D366 = ["brewingKit", "none", "sapphire", "0%"];
		return _0x1D366
	};
	_0x1CEEA = "sapphireBrewingKit";
	if (getItem(_0x1CEEA) == 1)
	{
		_0x1D366 = ["sapphireBrewingKit", "sapphire", "emerald", "15%"];
		return _0x1D366
	};
	_0x1CEEA = "emeraldBrewingKit";
	if (getItem(_0x1CEEA) == 1)
	{
		_0x1D366 = ["emeraldBrewingKit", "emerald", "ruby", "30%"];
		return _0x1D366
	};
	_0x1CEEA = "rubyBrewingKit";
	if (getItem(_0x1CEEA) == 1)
	{
		_0x1D366 = ["rubyBrewingKit", "ruby", "diamond", "60%"];
		return _0x1D366
	};
	_0x1CEEA = "diamondBrewingKit";
	if (getItem(_0x1CEEA) == 1)
	{
		_0x1D366 = ["diamondBrewingKit", "diamond", "none", "100%"];
		return _0x1D366
	};
	return _0x1D366
}

function getBrewingTimeAdjusted(_0x1D2DA)
{
	var _0x1D374 = getBrewingKitDataTypes()[3];
	if (_0x1D374 == "0%")
	{
		return formatTime(_0x1D2DA)
	};
	_0x1D374 = parseFloat(_0x1D374.substr(0, _0x1D374.length - 1));
	_0x1D374 /= 100;
	_0x1D2DA *= (parseFloat(1) + parseFloat(_0x1D374));
	return formatTime(_0x1D2DA)
}

function openBrewingKitDialogue()
{
	var _0x1C75E = getBrewingKitDataTypes();
	if (_0x1C75E[0] != "none")
	{
		if (_0x1C75E[0] == "diamondBrewingKit")
		{
			confirmDialogue("images/" + _0x1C75E[0] + ".png", "<b>Bonus Potion Time: </b>" + _0x1C75E[3], "Close", "", "")
		}
		else
		{
			confirmDialogue("images/" + _0x1C75E[0] + ".png", "<b>Bonus Potion Time: </b>" + _0x1C75E[3] + "<br /><br /><span style=\'color:grey\'>Socket a <img src=\'images/" + _0x1C75E[2] + ".png\' class=\'img-30\' /> <b>" + _0x1C75E[2] + "</b> to increase the timer for all potions.</span>", "Socket a " + _0x1C75E[2], "Close", "SOCKET=brewingKit")
		}
	}
}

function openOystersDialogues()
{
	openInputDialogue("Oyster", "images/oyster.png", "oyster", 1, [], [], ["oyster"], [1], "Open", "OPEN_OYSTERS", "There is a small chance of finding a valuable pearl.  Most of the time, the oyster is empty.")
}

function openOystersSellDialogues()
{
	var _0x1CF30 = "oyster";
	openInputDialogue("Sell", "images/" + _0x1CF30 + ".png", _0x1CF30, 1, ["coins"], [getItemPrice(_0x1CF30)], [_0x1CF30], [1], "Sell", "SELL", "Sell this to the shop for some coins.")
}

function getMuseumItemsCount()
{
	var _0x1CEEA = "";
	var _0x1D4C4 = 0;
	var _0x1D4B6 = 0;
	_0x1CEEA = "sapphireGlassHand";
	_0x1D4C4++;
	if (getItem(_0x1CEEA + "Museum") == 1)
	{
		_0x1D4B6++
	};
	_0x1CEEA = "emeraldGlassHand";
	_0x1D4C4++;
	if (getItem(_0x1CEEA + "Museum") == 1)
	{
		_0x1D4B6++
	};
	_0x1CEEA = "brokenStinger";
	_0x1D4C4++;
	if (getItem(_0x1CEEA + "Museum") == 1)
	{
		_0x1D4B6++
	};
	_0x1CEEA = "snakeBones";
	_0x1D4C4++;
	if (getItem(_0x1CEEA + "Museum") == 1)
	{
		_0x1D4B6++
	};
	_0x1CEEA = "skeletonSkull";
	_0x1D4C4++;
	if (getItem(_0x1CEEA + "Museum") == 1)
	{
		_0x1D4B6++
	};
	_0x1CEEA = "ghostClothes";
	_0x1D4C4++;
	if (getItem(_0x1CEEA + "Museum") == 1)
	{
		_0x1D4B6++
	};
	_0x1CEEA = "cockroach";
	_0x1D4C4++;
	if (getItem(_0x1CEEA + "Museum") == 1)
	{
		_0x1D4B6++
	};
	_0x1CEEA = "goldenCockroach";
	_0x1D4C4++;
	if (getItem(_0x1CEEA + "Museum") == 1)
	{
		_0x1D4B6++
	};
	_0x1CEEA = "smallSeaShell";
	_0x1D4C4++;
	if (getItem(_0x1CEEA + "Museum") == 1)
	{
		_0x1D4B6++
	};
	_0x1CEEA = "mediumSeaShell";
	_0x1D4C4++;
	if (getItem(_0x1CEEA + "Museum") == 1)
	{
		_0x1D4B6++
	};
	_0x1CEEA = "largeSeaShell";
	_0x1D4C4++;
	if (getItem(_0x1CEEA + "Museum") == 1)
	{
		_0x1D4B6++
	};
	_0x1CEEA = "yetiLeftFoot";
	_0x1D4C4++;
	if (getItem(_0x1CEEA + "Museum") == 1)
	{
		_0x1D4B6++
	};
	_0x1CEEA = "yetiRightFoot";
	_0x1D4C4++;
	if (getItem(_0x1CEEA + "Museum") == 1)
	{
		_0x1D4B6++
	};
	return [_0x1D4B6, _0x1D4C4]
}

function transformItem(_0x1E326, _0x1DA90, _0x1CBCC)
{
	openInputDialogue("TRANSFORM", "images/" + _0x1E326 + ".png", _0x1E326, 1, ["magicXp"], [_0x1CBCC], [_0x1E326], [1], "Transform", "TRANSFORM", "Transforming item using magic converts an equipment to a variety of items.")
}

function hardcoreInfo()
{
	confirmDialogue("images/hardcoreIcon.png", "Hardcore accounts disables the player market. You won\'t be able to sell or buy from other players.<br /><br /><span style=\'color:red\'>Not recommended for new players!</span>", "Close", "", "")
}
