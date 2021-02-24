/**
 * clicksOreToMine extracted from ../../deobfuscated/bundle.js at line 1298-1359
 *
 * If this file doesn't contain a function, there is an error in ../raw/clicksOreToMine.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

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