/**
 * allocateMinerOrMachinery extracted from ../../deobfuscated/bundle.js at line 1361-1393
 *
 * If this file doesn't contain a function, there is an error in ../raw/allocateMinerOrMachinery.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function allocateMinerOrMachinery(_0x15995, _0x1594F)
{
	var _0x15972 = 1;
	if (!_0x1594F)
	{
		_0x15972 = -1
	};
	var _0x1592C = parseInt(document.getElementById("dialogue-mining-ore-" + _0x15995 + "-allocated").innerHTML);
	if (_0x1592C + _0x15972 < 0 && !_0x1594F)
	{
		return
	}
	else
	{
		if (_0x1594F && global_lastMiningResourceClickedAvailable[_0x15995] == 0)
		{
			return
		}
		else
		{
			global_lastMiningResourceClickedAvailable[_0x15995] += (_0x15972 * -1);
			if (_0x15972 > 0)
			{
				sendBytes("MINING_ALLOCATE=" + _0x15995 + "~" + global_lastMiningOreClicked)
			}
			else
			{
				sendBytes("MINING_DEALLOCATE=" + _0x15995 + "~" + global_lastMiningOreClicked)
			};
			document.getElementById("dialogue-mining-ore-" + _0x15995 + "-allocated").innerHTML = _0x1592C + _0x15972
		}
	}
}