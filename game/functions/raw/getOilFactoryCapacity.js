/**
 * getOilFactoryCapacity extracted from ../../deobfuscated/bundle.js at line 21641-21667
 *
 * If this file doesn't contain a function, there is an error in ../raw/getOilFactoryCapacity.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getOilFactoryCapacity()
{
	var _0x15DF5 = 0;
	if (getItem("oilFactory") == 1)
	{
		_0x15DF5 = 10
	}
	else
	{
		if (getItem("promethiumOilFactory") == 1)
		{
			_0x15DF5 = 20
		}
		else
		{
			if (getItem("titaniumOilFactory") == 1)
			{
				_0x15DF5 = 30
			}
		}
	};
	if (getItem("greenOilFactoryOrbBound") > 0)
	{
		_0x15DF5 += 50
	};
	return _0x15DF5
}