'use strict';

function confirmSocketDialogue($ionicHistory, mmCoreSplitViewBlock, $state)
{
	confirmDialogue(mmCoreSplitViewBlock, "Add a <img src='images/" + $state + ".png' class='img-30' /> to your tool?<br /><br /><i style='color:grey'>Upgrading the tool will reduce its stardust cost per xp.</i>", "Confirm Socket", "Cancel", "SOCKET=" + $ionicHistory);
};
