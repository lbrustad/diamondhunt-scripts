'use strict';

function setCSSFromServer(stage_elem, p, set, theRemoved)
{
	switch (p)
	{
	case "border":
		document.getElementById(stage_elem).style.border = set;
	case "color":
		document.getElementById(stage_elem).style.color = set;
	case "display":
		document.getElementById(stage_elem).style.display = set;
	}
};
