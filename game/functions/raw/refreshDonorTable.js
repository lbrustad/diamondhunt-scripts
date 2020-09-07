/**
 * refreshDonorTable extracted from ../../deobfuscated/bundle.js at line 17866-17972
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshDonorTable.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

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