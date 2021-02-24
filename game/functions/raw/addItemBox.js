/**
 * addItemBox extracted from ../../deobfuscated/bundle.js at line 5429-5696
 *
 * If this file doesn't contain a function, there is an error in ../raw/addItemBox.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

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