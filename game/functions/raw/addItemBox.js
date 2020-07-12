/**
 * addItemBox extracted from ../../deobfuscated/bundle.js at line 3782-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/addItemBox.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

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