/**
 * addItemBox extracted from ../../deobfuscated/bundle.js at line 4722-4960
 *
 * If this file doesn't contain a function, there is an error in ../raw/addItemBox.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

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