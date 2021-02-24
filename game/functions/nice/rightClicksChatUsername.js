'use strict';

function rightClicksChatUsername(inProps, inPropName)
{
	var oPrntWin = window.open("https://dh3.diamondhunt.co/hiscores/search.php?username=" + inPropName, "_blank");
	oPrntWin.focus();
	return false;
};
