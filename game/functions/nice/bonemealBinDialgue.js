'use strict';

function bonemealBinDialgue()
{
	var arr = getBonemealTypeData();
	var most_recent_tweet = arr[2];
	var value = arr[3];
	if (value == "INF")
	{
		value = "&#8734;";
	}
	var resizewidth = "<br /><br /><span style='color:grey;font-size:12pt;'> <img src='images/" + most_recent_tweet + ".png' class='img-20' /> Upgrade your bonemeal bin to increase its capacity.</span>";
	if (most_recent_tweet == "none")
	{
		resizewidth = "";
	}
	var artistTrack = "<b style='font-size:16pt;'><img src='images/bonemeal_dark.png' class='img-60' /> Current Bonemeal: " + getItem("bonemeal") + "/" + value + " <img src='images/bonemeal_dark.png' class='img-60' /></b>" + resizewidth;
	if (most_recent_tweet == "none")
	{
		confirmDialogue("images/" + arr[0] + ".png", artistTrack, "Close", "", "");
	}
	else
	{
		confirmDialogue("images/" + arr[0] + ".png", artistTrack, "Socket Gem", "Close", "SOCKET=bonemealBin");
	}
};
