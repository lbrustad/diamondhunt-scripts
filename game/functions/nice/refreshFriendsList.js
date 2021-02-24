'use strict';

function refreshFriendsList(fillMethod)
{
	if (fillMethod == "none")
	{
		document.getElementById("dialogue-friends-list-section").innerHTML = "<span style='color:grey'>(No friends yet)</span>";
	}
	else
	{
		var pix_color = "";
		pix_color = pix_color + "<center><table style='border:1px solid black;border-radius:8pt;background-color:#e6ffe6;' width='80%'>";
		pix_color = pix_color + "<tr>";
		pix_color = pix_color + ("<th style='color:black;'>" + "Name" + "</th>");
		pix_color = pix_color + ("<th style='color:black;'>" + "Status" + "</th>");
		pix_color = pix_color + ("<th colspan='2' style='color:black;'>" + "Actions" + "</th>");
		pix_color = pix_color + "</tr>";
		var crossfilterable_layers = fillMethod.split("~");
		var layer_i = 0;
		for (; layer_i < crossfilterable_layers.length; layer_i++)
		{
			pix_color = pix_color + "<tr>";
			var _a_ = crossfilterable_layers[layer_i];
			layer_i++;
			var layer = crossfilterable_layers[layer_i];
			var _b_ = "<span title='This person must add you as a friend.' style='color:grey'>(Pending)</span>";
			if (layer == 1)
			{
				_b_ = "<span style='color:red'>Offline</span>";
			}
			else
			{
				if (layer == 2)
				{
					_b_ = "<span style='color:green'>Online</span>";
				}
			}
			pix_color = pix_color + ("<td class='center'  style='color:black;'>" + _a_ + "</td>");
			pix_color = pix_color + ("<td class='center' >" + _b_ + "</td>");
			pix_color = pix_color + ("<td class='center' >" + "<img onclick='sendBytes(\"REMOVE_FRIEND=" + _a_ + "\")' class='x-button img-20' src='images/x.png' />" + "</td>");
			pix_color = pix_color + ("<td class='center' >" + "<img onclick='clicksSpyFriend(\"" + _a_ + "\");closeDialogue(\"dialogue-friends-list\")' class='x-button img-20' src='images/eyeIcon.png' />" + "</td>");
			pix_color = pix_color + "</tr>";
		}
		pix_color = pix_color + "</table></center>";
		document.getElementById("dialogue-friends-list-section").innerHTML = pix_color;
	}
	openDialogue("dialogue-friends-list");
};
