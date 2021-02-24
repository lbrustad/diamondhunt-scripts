/**
 * getMonsterHint extracted from ../../deobfuscated/bundle.js at line 13930-13969
 *
 * If this file doesn't contain a function, there is an error in ../raw/getMonsterHint.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getMonsterHint(_0x166D8)
{
	switch (_0x166D8)
	{
	case "tridentSoldier":
		return "<img src=\'images/info_grey.png\' class=\'img-20\' />  After every 8 normal attacks, his weapon will charge.  If the trident soldier is over 30 HP, his charge will deal damage.  If not, it will heal him.";
	case "pufferFish":
		return "<img src=\'images/info_grey.png\' class=\'img-20\' />  Full of air, just a like a balloon.";
	case "shark":
		return "<img src=\'images/info_grey.png\' class=\'img-20\' />  Bites at a fixed interval, instantly killing you.";
	case "reaper":
		return "<img src=\'images/info_grey.png\' class=\'img-20\' />  His eyes begin to glow when he charges a strong attack.";
	case "ghost":
		return "<img src=\'images/info_grey.png\' class=\'img-20\' />  Can avoid attacks by going invisibile.";
	case "yeti":
		return "<img src=\'images/info_grey.png\' class=\'img-20\' />  Yeti\'s spend most of their time sleeping.";
	case "fireMage":
		return "<img src=\'images/info_grey.png\' class=\'img-20\' />  Randomly heals.";
	case "lavaAlien":
		return "<img src=\'images/info_grey.png\' class=\'img-20\' />  Charges for a strong attack at 30 HP.";
	case "spider":
		return "<img src=\'images/info_grey.png\' class=\'img-20\' />  Spits out poison at 6 HP.";
	case "thief":
		return "<img src=\'images/info_grey.png\' class=\'img-20\' />  Watch out!  He\'s after your money!";
	case "snake":
		return "<img src=\'images/info_grey.png\' class=\'img-20\' />  Having full snakeskin armour will negate all damages from snakes.";
	case "chicken":
		return "<img src=\'images/info_grey.png\' class=\'img-20\' />  A great source of feathers.";
	case "bee":
		return "<img src=\'images/info_grey.png\' class=\'img-20\' /> Attacks slighty faster than a rat or chicken.";
	case "skeletonMonks":
		return "<img src=\'images/info_grey.png\' class=\'img-20\' /> Attacking a charged skeleton monk will heal them for the damage dealt.<br />Also constantly heals when reaching low hp.";
	case "dungeonSpider":
		return "<img src=\'images/info_grey.png\' class=\'img-20\' /> Spits out poison at 30 HP.";
	case "stoneWomen":
		return "<img src=\'images/info_grey.png\' class=\'img-20\' /> Has 6 different forms and changes between them regularly.<br />Each form has a major weakness which is hinted in the sprite.<br />The form it begins with has no weaknesses.";
	default:
		return "<span style=\'color:grey\'>(No hints available for this NPC)</span>"
	}
}