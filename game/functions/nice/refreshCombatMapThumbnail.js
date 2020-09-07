'use strict';

function refreshCombatMapThumbnail(prop)
{
	var id = 1;
	for (; id <= 100; id++)
	{
		if (id == 5)
		{
			continue;
		}
		var addDoc = document.getElementById("div-map-" + id + "-thumbnail");
		if (addDoc == null)
		{
			break;
		}
		if (getItem("lastCombatMapHistory" + id) == 0 && id > 1)
		{
			addDoc.style.display = "none";
		}
		else
		{
			addDoc.style.display = "";
		}
		addDoc.style.border = "none";
		if (prop == id)
		{
			addDoc.style.border = "3px solid green";
		}
	}
};
