/**
 * refreshDonorTable extracted from ../../deobfuscated/bundle.js at line 12928-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshDonorTable.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

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