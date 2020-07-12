'use strict';

function clicksOreToMine(mobKind)
{
	global_lastMiningOreClicked = mobKind;
	if (global_lastMiningResourceClicked == "none")
	{
		if (global_oreLevels[mobKind].level > getLevel(getItem("miningXp")))
		{
			confirmDialogue("images/x.png", "You need a mining level of " + global_oreLevels[mobKind].level + " to mine " + mobKind + "<br /><br /><i style='color:grey;font-size:14pt'><b>Mining Xp</b> can be gained by using a stardust pickaxe.</i>", "Close", "", "");
		}
		else
		{
			var _a_ = document.getElementById("dialogue-mining-ore-section");
			var key = "";
			var th_field = "";
			key = "miner";
			if (getItem(key) > 0)
			{
				global_lastMiningResourceClickedAvailable[key] = getMinersOrMachineryAvailable(key);
				document.getElementById("dialogue-mining-ore-" + key).style.display = "";
				var compareKey = getAllocationAmount(key, mobKind);
				document.getElementById("dialogue-mining-ore-" + key + "-allocated").innerHTML = compareKey;
			}
			key = "drills";
			if (getItem(key) > 0)
			{
				global_lastMiningResourceClickedAvailable[key] = getMinersOrMachineryAvailable(key);
				document.getElementById("dialogue-mining-ore-" + key).style.display = "";
				compareKey = getAllocationAmount(key, mobKind);
				document.getElementById("dialogue-mining-ore-" + key + "-allocated").innerHTML = compareKey;
			}
			key = "crushers";
			if (getItem(key) > 0)
			{
				global_lastMiningResourceClickedAvailable[key] = getMinersOrMachineryAvailable(key);
				document.getElementById("dialogue-mining-ore-" + key).style.display = "";
				compareKey = getAllocationAmount(key, mobKind);
				document.getElementById("dialogue-mining-ore-" + key + "-allocated").innerHTML = compareKey;
			}
			openDialogue("dialogue-mining-ore");
		}
	}
	else
	{
		sendBytes("MINING_ALLOCATE=" + global_lastMiningResourceClicked + "~" + mobKind);
	}
};
