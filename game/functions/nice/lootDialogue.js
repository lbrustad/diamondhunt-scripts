'use strict';

function lootDialogue(clusterShardData)
{
	var nextIdLookup = clusterShardData.split("~");
	var currentIndex = nextIdLookup[0];
	var _a_ = nextIdLookup[1];
	var artistTrack = "<h1 style='text-align:center;'>" + currentIndex + "</h1>";
	var indexLookupKey = 1;
	for (; indexLookupKey < nextIdLookup.length - 1; indexLookupKey++)
	{
		var currentIndex = nextIdLookup[indexLookupKey];
		indexLookupKey++;
		var _b_ = nextIdLookup[indexLookupKey];
		indexLookupKey++;
		var _c_ = nextIdLookup[indexLookupKey];
		indexLookupKey++;
		var _d_ = nextIdLookup[indexLookupKey];
		artistTrack = artistTrack + ("<span class='loot-span' style='background-color:" + _c_ + ";border:1px solid " + _d_ + "'><img src='" + currentIndex + "' class='img-50' /> " + _b_ + "</span>");
	}
	var transition = nextIdLookup[nextIdLookup.length - 1];
	if (transition == "none")
	{
		transition = "";
	}
	confirmDialogue("none", artistTrack, "Collect", "", transition);
};
