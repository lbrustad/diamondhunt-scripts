'use strict';

function viewCastleKnightWeaknesses()
{
	var artistTrack = "<center><table class='basic-table' width='100%'>";
	artistTrack = artistTrack + "<tr style='background-color:#4d4d4d'><th>Enemy</th><th>Info and Tips</th></tr>";
	artistTrack = artistTrack + ("<tr><td width='25%'><img src='images/knight1Monster_black.png' class='img-50' />" + "WAVE 1" + "<br /></span></td><td style='font-size:10pt;'>Weak to slash attacks.</td></tr>");
	artistTrack = artistTrack + ("<tr><td width='25%'><img src='images/knight2Monster_black.png' class='img-50' />" + "WAVE 2" + "<br /></span></td><td style='font-size:10pt;'>No weaknesses.<br />Charges during the fight.</td></tr>");
	artistTrack = artistTrack + ("<tr><td width='25%'><img src='images/knight3Monster_black.png' class='img-50' />" + "WAVE 3" + "<br /></span></td><td style='font-size:10pt;'>No weaknesses.<br />Charges multiple times during the fight.<br />A black charge is an attack.<br />A <span style='color:green'>green</span> charge is a heal.</td></tr>");
	artistTrack = artistTrack + ("<tr><td width='25%'><img src='images/knight4Monster_black.png' class='img-50' />" + "WAVE 4" + "<br /></span></td><td style='font-size:10pt;'>Weak to stab attacks.<br />Poisons.</td></tr>");
	artistTrack = artistTrack + ("<tr><td width='25%'><img src='images/knight5Monster_black.png' class='img-50' />" + "WAVE 5" + "<br /></span></td><td style='font-size:10pt;'>Weak to scythe and ice arrows.<br />Considered a ghost.<br />Alternates between shields to block attack types: <span style='color:red'>Melee</span>, <span style='color:blue'>magic</span> or <span style='color:green'>range</span>.</td></tr>");
	artistTrack = artistTrack + "</table></center><br />";
	confirmDialogue("images/kingIcon.png", artistTrack, "Back", "", "FIGHT_SOLDIERS");
};
