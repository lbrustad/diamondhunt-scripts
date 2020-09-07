/**
 * allocateMinerOrMachinery extracted from ../../deobfuscated/bundle.js at line 1113-1145
 *
 * If this file doesn't contain a function, there is an error in ../raw/allocateMinerOrMachinery.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function allocateMinerOrMachinery(_0x4121, _0x40E7)
{
	var _0x4104 = 1;
	if (!_0x40E7)
	{
		_0x4104 = -1
	};
	var _0x40CA = parseInt(document.getElementById("dialogue-mining-ore-" + _0x4121 + "-allocated").innerHTML);
	if (_0x40CA + _0x4104 < 0 && !_0x40E7)
	{
		return
	}
	else
	{
		if (_0x40E7 && global_lastMiningResourceClickedAvailable[_0x4121] == 0)
		{
			return
		}
		else
		{
			global_lastMiningResourceClickedAvailable[_0x4121] += (_0x4104 * -1);
			if (_0x4104 > 0)
			{
				sendBytes("MINING_ALLOCATE=" + _0x4121 + "~" + global_lastMiningOreClicked)
			}
			else
			{
				sendBytes("MINING_DEALLOCATE=" + _0x4121 + "~" + global_lastMiningOreClicked)
			};
			document.getElementById("dialogue-mining-ore-" + _0x4121 + "-allocated").innerHTML = _0x40CA + _0x4104
		}
	}
}