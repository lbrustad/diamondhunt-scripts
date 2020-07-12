/**
 * displayMarket extracted from ../../deobfuscated/bundle.js at line 12621-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/displayMarket.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function displayMarket(_0x1CDB6)
{
	if (_0x1CDB6)
	{
		document.getElementById("market-loading-section").style.display = "none";
		document.getElementById("market-slots-section").style.display = "";
		document.getElementById("market-buttons-section").style.display = "";
		document.getElementById("market-display-section").style.display = ""
	}
	else
	{
		if (_0x1CDB6)
		{
			document.getElementById("market-loading-section").style.display = "";
			document.getElementById("market-slots-section").style.display = "none";
			document.getElementById("market-buttons-section").style.display = "none";
			document.getElementById("market-display-section").style.display = "none"
		}
	}
}