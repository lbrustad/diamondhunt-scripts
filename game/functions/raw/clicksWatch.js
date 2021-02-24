/**
 * clicksWatch extracted from ../../deobfuscated/bundle.js at line 13893-13928
 *
 * If this file doesn't contain a function, there is an error in ../raw/clicksWatch.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function clicksWatch()
{
	if (selectedSeed == "none")
	{
		if (getItemString("watchSeed") != "none")
		{
			confirmDialogue("images/watch.png", "Stop using Watch?", "Stop Using Watch", "Close", "RESET_WATCH")
		}
		else
		{
			if (getWatchTypeData()[2] == "sapphire")
			{
				confirmDialogue("images/sapphire.png", "Add a sapphire to your watch?<br /><br /><span style=\'color:grey\'>Upgrading the watch allows bob to do more farming runs for you.", "Socket Watch", "Close", "SOCKET=watch")
			};
			if (getWatchTypeData()[2] == "emerald")
			{
				confirmDialogue("images/emerald.png", "Add a emerald to your watch?<br /><br /><span style=\'color:grey\'>Upgrading the watch allows bob to do more farming runs for you.", "Socket Watch", "Close", "SOCKET=watch")
			};
			if (getWatchTypeData()[2] == "ruby")
			{
				confirmDialogue("images/ruby.png", "Add a ruby to your watch?<br /><br /><span style=\'color:grey\'>Upgrading the watch allows bob to do more farming runs for you.", "Socket Watch", "Close", "SOCKET=watch")
			};
			if (getWatchTypeData()[2] == "diamond")
			{
				confirmDialogue("images/diamond.png", "Add a diamond to your watch?<br /><br /><span style=\'color:grey\'>Upgrading the watch allows bob to do more farming runs for you.", "Socket Watch", "Close", "SOCKET=watch")
			}
		}
	}
	else
	{
		var _0x16741 = selectedSeed;
		selectedSeed = "none";
		resetSeedItemBoxBorders();
		sendBytes("WATCH_USE=" + _0x16741)
	}
}