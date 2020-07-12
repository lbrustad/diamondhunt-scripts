'use strict';

function allocateMinerOrMachinery(url, whensCollection)
{
	var newHTML = 1;
	if (!whensCollection)
	{
		newHTML = -1;
	}
	var miles = parseInt(document.getElementById("dialogue-mining-ore-" + url + "-allocated").innerHTML);
	if (miles + newHTML < 0 && !whensCollection)
	{
		return;
	}
	else
	{
		if (whensCollection && global_lastMiningResourceClickedAvailable[url] == 0)
		{
			return;
		}
		else
		{
			global_lastMiningResourceClickedAvailable[url] += newHTML * -1;
			if (newHTML > 0)
			{
				sendBytes("MINING_ALLOCATE=" + url + "~" + global_lastMiningOreClicked);
			}
			else
			{
				sendBytes("MINING_DEALLOCATE=" + url + "~" + global_lastMiningOreClicked);
			}
			document.getElementById("dialogue-mining-ore-" + url + "-allocated").innerHTML = miles + newHTML;
		}
	}
};
