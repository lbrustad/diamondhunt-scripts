'use strict';

function getMuseumItemsCount()
{
	var th_field = "";
	var _a_ = 0;
	var _b_ = 0;
	th_field = "sapphireGlassHand";
	_a_++;
	if (getItem(th_field + "Museum") == 1)
	{
		_b_++;
	}
	th_field = "emeraldGlassHand";
	_a_++;
	if (getItem(th_field + "Museum") == 1)
	{
		_b_++;
	}
	th_field = "rubyGlassHand";
	_a_++;
	if (getItem(th_field + "Museum") == 1)
	{
		_b_++;
	}
	th_field = "snowmanCrafted";
	_a_++;
	if (getItem(th_field + "Museum") == 1)
	{
		_b_++;
	}
	th_field = "brokenStinger";
	_a_++;
	if (getItem(th_field + "Museum") == 1)
	{
		_b_++;
	}
	th_field = "snakeBones";
	_a_++;
	if (getItem(th_field + "Museum") == 1)
	{
		_b_++;
	}
	th_field = "giantPearl";
	_a_++;
	if (getItem(th_field + "Museum") == 1)
	{
		_b_++;
	}
	th_field = "rareGiantPearl";
	_a_++;
	if (getItem(th_field + "Museum") == 1)
	{
		_b_++;
	}
	th_field = "sharkTooth";
	_a_++;
	if (getItem(th_field + "Museum") == 1)
	{
		_b_++;
	}
	th_field = "skeletonSkull";
	_a_++;
	if (getItem(th_field + "Museum") == 1)
	{
		_b_++;
	}
	th_field = "ghostClothes";
	_a_++;
	if (getItem(th_field + "Museum") == 1)
	{
		_b_++;
	}
	th_field = "cockroach";
	_a_++;
	if (getItem(th_field + "Museum") == 1)
	{
		_b_++;
	}
	th_field = "goldenCockroach";
	_a_++;
	if (getItem(th_field + "Museum") == 1)
	{
		_b_++;
	}
	th_field = "smallSeaShell";
	_a_++;
	if (getItem(th_field + "Museum") == 1)
	{
		_b_++;
	}
	th_field = "mediumSeaShell";
	_a_++;
	if (getItem(th_field + "Museum") == 1)
	{
		_b_++;
	}
	th_field = "largeSeaShell";
	_a_++;
	if (getItem(th_field + "Museum") == 1)
	{
		_b_++;
	}
	th_field = "yetiLeftFoot";
	_a_++;
	if (getItem(th_field + "Museum") == 1)
	{
		_b_++;
	}
	th_field = "yetiRightFoot";
	_a_++;
	if (getItem(th_field + "Museum") == 1)
	{
		_b_++;
	}
	return [_b_, _a_];
};
