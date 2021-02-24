/**
 * refreshDonorTable extracted from ../../deobfuscated/bundle.js at line 21669-21775
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshDonorTable.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

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