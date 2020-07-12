/**
 * clicksOreToMine extracted from ../../deobfuscated/bundle.js at line 810-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/clicksOreToMine.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

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