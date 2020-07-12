/**
 * allocateMinerOrMachinery extracted from ../../deobfuscated/bundle.js at line 857-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/allocateMinerOrMachinery.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function allocateMinerOrMachinery(_0x1CC04, _0x1CBE8)
{
	var _0x1CBF6 = 1;
	if (!_0x1CBE8)
	{
		_0x1CBF6 = -1
	};
	var _0x1CBDA = parseInt(document.getElementById("dialogue-mining-ore-" + _0x1CC04 + "-allocated").innerHTML);
	if (_0x1CBDA + _0x1CBF6 < 0 && !_0x1CBE8)
	{
		return
	}
	else
	{
		if (_0x1CBE8 && global_lastMiningResourceClickedAvailable[_0x1CC04] == 0)
		{
			return
		}
		else
		{
			global_lastMiningResourceClickedAvailable[_0x1CC04] += (_0x1CBF6 * -1);
			if (_0x1CBF6 > 0)
			{
				sendBytes("MINING_ALLOCATE=" + _0x1CC04 + "~" + global_lastMiningOreClicked)
			}
			else
			{
				sendBytes("MINING_DEALLOCATE=" + _0x1CC04 + "~" + global_lastMiningOreClicked)
			};
			document.getElementById("dialogue-mining-ore-" + _0x1CC04 + "-allocated").innerHTML = _0x1CBDA + _0x1CBF6
		}
	}
}