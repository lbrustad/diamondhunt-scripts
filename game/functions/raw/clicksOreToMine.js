/**
 * clicksOreToMine extracted from ../../deobfuscated/bundle.js at line 1050-1111
 *
 * If this file doesn't contain a function, there is an error in ../raw/clicksOreToMine.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

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