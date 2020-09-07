/**
 * refreshDarkCrystalUsedLabel extracted from ../../deobfuscated/bundle.js at line 4698-4720
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshDarkCrystalUsedLabel.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshDarkCrystalUsedLabel()
{
	if (document.getElementById("darkCrystalUsed-label") != null)
	{
		document.getElementById("darkCrystalUsed-label").innerHTML = "";
		if (getItem("cyanCrystalUsed") == 1)
		{
			document.getElementById("darkCrystalUsed-label").innerHTML = "<img src=\'images/cyanCrystal.png\' class=\'img-30\' />"
		};
		if (getItem("greenCrystalUsed") == 1)
		{
			document.getElementById("darkCrystalUsed-label").innerHTML += "<img src=\'images/greenCrystal.png\' class=\'img-30\' />"
		};
		if (getItem("redCrystalUsed") == 1)
		{
			document.getElementById("darkCrystalUsed-label").innerHTML += "<img src=\'images/redCrystal.png\' class=\'img-30\' />"
		};
		if (getItem("blueCrystalUsed") == 1)
		{
			document.getElementById("darkCrystalUsed-label").innerHTML += "<img src=\'images/blueCrystal.png\' class=\'img-30\' />"
		}
	}
}