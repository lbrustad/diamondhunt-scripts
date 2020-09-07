/**
 * dimScreen extracted from ../../deobfuscated/bundle.js at line 15999-16232
 *
 * If this file doesn't contain a function, there is an error in ../raw/dimScreen.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function dimScreen(_0x39C4, _0x4E0B)
{
	if (_0x4E0B)
	{
		var _0x41B2 = "";
		if (_0x39C4 == "bushy_dead")
		{
			_0x41B2 += "<center>";
			_0x41B2 += "<br /><br />";
			_0x41B2 += "<br /><br />";
			_0x41B2 += "<img id=\'dim-screen-img-2\' src=\'images/greenCrystalAbsorbed.png\' />";
			_0x41B2 += "<br /><br />";
			_0x41B2 += "<div style=\'color:grey\' id=\'dim-screen-area1\'></div>";
			_0x41B2 += "<br /><br />";
			_0x41B2 += "<div style=\'color:red\' id=\'dim-screen-area2\'></div>";
			_0x41B2 += "</center>";
			$("#dim-screen").fadeIn(5000);
			$("#game").fadeOut(5000, function ()
			{
				document.getElementById("dim-screen").innerHTML = _0x41B2;
				setTimeout(function ()
				{
					$("#dim-screen-img-2").effect("shake"
					, {
						direction: "left"
						, times: 40
						, distance: 3
					}, 10000);
					addTextByDelay("The crystal continues to regain its power.", $("#dim-screen-area1"), 50);
					setTimeout(function ()
					{
						addTextByDelay("Faradox is noticing.", $("#dim-screen-area2"), 50)
					}, 3000);
					setTimeout(function ()
					{
						$("#dim-screen-img-2").fadeOut(6000, function ()
						{
							dimScreen("none", false);
							confirmDialogue("images/darkCrystalUsed.png", "The dark crystal has regained 2/7 of power.", "Close", "", "")
						})
					}, 6000)
				}, 1000)
			});
			return
		};
		if (_0x39C4 == "mana")
		{
			_0x41B2 += "<center>";
			_0x41B2 += "<br /><br />";
			_0x41B2 += "<img id=\'dim-screen-img-1\' src=\'images/animation_mana1.png\' />";
			_0x41B2 += "<br /><br />";
			_0x41B2 += "<img id=\'dim-screen-img-2\' src=\'images/default_hero.png\' />";
			_0x41B2 += "<br /><br />";
			_0x41B2 += "</center>";
			$("#dim-screen").fadeIn(5000);
			$("#game").fadeOut(5000, function ()
			{
				document.getElementById("dim-screen").innerHTML = _0x41B2;
				setTimeout(function ()
				{
					setTimeout(function ()
					{
						$("#dim-screen-img-2").fadeOut(1000);
						$("#dim-screen-img-1").fadeOut(3000, function ()
						{
							document.getElementById("dim-screen-img-1").src = "images/animation_mana3.png";
							$("#dim-screen-img-1").fadeIn(6000, function ()
							{
								dimScreen("none", false);
								confirmDialogue("images/hugeManaStar.png", "You now have access to mana power!", "Close", "", "")
							})
						})
					}, 3000)
				}, 1000)
			});
			return
		};
		if (_0x39C4 == "combat_animation")
		{
			_0x41B2 += "<center>";
			_0x41B2 += "<br /><br />";
			_0x41B2 += "<img id=\'dim-screen-img-1\' src=\'images/reaper_grey.png\' />";
			_0x41B2 += "<br /><br />";
			_0x41B2 += "<span id=\'dim-screen-area1\'></span>";
			_0x41B2 += "<br /><br />";
			_0x41B2 += "<span id=\'dim-screen-area2\'></span>";
			_0x41B2 += "</center>";
			$("#dim-screen").fadeIn(10);
			$("#game").fadeOut(10, function ()
			{
				document.getElementById("dim-screen").innerHTML = _0x41B2;
				setTimeout(function ()
				{
					setTimeout(function ()
					{
						setTimeout(function ()
						{
							addTextByDelay("Don\'t get any closer!", $("#dim-screen-area1"), 50)
						}, 1000);
						setTimeout(function ()
						{
							document.getElementById("dim-screen-area2").innerHTML += "<br /><br /><span class=\'resumeFight\' onclick=\'sendBytes(\"TUT_RESUME_FIGHT\");dimScreen(\"none\", false);\'><img src=\'images/scythe.png\' class=\'img-30\' /> Fight Reaper</span>"
						}, 5000)
					}, 1000)
				}, 1000)
			});
			return
		};
		if (_0x39C4 == "release_faradox")
		{
			_0x41B2 += "<center>";
			_0x41B2 += "<br /><br />";
			_0x41B2 += "<br /><br />";
			_0x41B2 += "<img id=\'dim-screen-img-1\' src=\'images/faradox.png\' />";
			_0x41B2 += "<br /><br />";
			_0x41B2 += "<div style=\'color:grey\' id=\'dim-screen-area1\'></div>";
			_0x41B2 += "<br /><br />";
			_0x41B2 += "<div style=\'color:red\' id=\'dim-screen-area2\'></div>";
			_0x41B2 += "</center>";
			$("#dim-screen").fadeIn(5000);
			$("#game").fadeOut(5000, function ()
			{
				document.getElementById("dim-screen").innerHTML = _0x41B2;
				setTimeout(function ()
				{
					addTextByDelay("You have released me.", $("#dim-screen-area1"), 50);
					setTimeout(function ()
					{
						addTextByDelay("Let this world become tainted as I grow stronger.", $("#dim-screen-area2"), 50)
					}, 3000);
					setTimeout(function ()
					{
						$("#dim-screen-img-1").fadeOut(6000, function ()
						{
							dimScreen("none", false);
							confirmDialogue("images/darkCrystalUsed.png", "The dark crystal has no more energy.", "Close", "", "")
						})
					}, 6000)
				}, 1000)
			});
			return
		};
		if (_0x39C4 == "release_faradox_2")
		{
			_0x41B2 += "<center>";
			_0x41B2 += "<br /><br />";
			_0x41B2 += "<br /><br />";
			_0x41B2 += "<img id=\'dim-screen-img-1\' src=\'images/faradox.png\' />";
			_0x41B2 += "<br /><br />";
			_0x41B2 += "<div style=\'color:grey\' id=\'dim-screen-area1\'></div>";
			_0x41B2 += "<br /><br />";
			_0x41B2 += "<div style=\'color:red\' id=\'dim-screen-area2\'></div>";
			_0x41B2 += "</center>";
			$("#dim-screen").fadeIn(5000);
			$("#game").fadeOut(5000, function ()
			{
				document.getElementById("dim-screen").innerHTML = _0x41B2;
				setTimeout(function ()
				{
					addTextByDelay("I am watching every move you make.", $("#dim-screen-area1"), 50);
					setTimeout(function ()
					{
						addTextByDelay("You killed one of my minions, and you will pay.", $("#dim-screen-area2"), 50)
					}, 3000);
					setTimeout(function ()
					{
						$("#dim-screen-img-1").fadeOut(6000, function ()
						{
							dimScreen("none", false);
							confirmDialogue("images/bobHappy.png", "You did it!  You got rid of that ghost in our fields!  Thank you!", "Close", "", "")
						})
					}, 6000)
				}, 1000)
			});
			return
		};
		var _0x41B2 = "";
		if (_0x39C4 == "dead_hero")
		{
			_0x41B2 += "<center>";
			_0x41B2 += "<br /><br />";
			_0x41B2 += "<br /><br />";
			_0x41B2 += "<img id=\'dim-screen-img-1\' src=\'images/deadHero.png\' />";
			_0x41B2 += "<br /><br />";
			_0x41B2 += "<div style=\'color:grey\' id=\'dim-screen-area1\'></div>";
			_0x41B2 += "</center>";
			$("#dim-screen").fadeIn(1000);
			$("#game").fadeOut(1000, function ()
			{
				document.getElementById("dim-screen").innerHTML = _0x41B2;
				setTimeout(function ()
				{
					addTextByDelay("You have fainted.", $("#dim-screen-area1"), 50);
					setTimeout(function ()
					{
						dimScreen("none", false)
					}, 6000)
				}, 1000)
			});
			return
		};
		if (_0x39C4 == "dead_hero_special")
		{
			_0x41B2 += "<center>";
			_0x41B2 += "<br /><br />";
			_0x41B2 += "<br /><br />";
			_0x41B2 += "<img id=\'dim-screen-img-1\' src=\'images/deadHero.png\' />";
			_0x41B2 += "<br /><br />";
			_0x41B2 += "<div style=\'color:grey\' id=\'dim-screen-area1\'></div>";
			_0x41B2 += "</center>";
			$("#dim-screen").fadeIn(1000);
			$("#game").fadeOut(1000, function ()
			{
				document.getElementById("dim-screen").innerHTML = _0x41B2;
				setTimeout(function ()
				{
					addTextByDelay("You have fainted.", $("#dim-screen-area1"), 50);
					setTimeout(function ()
					{
						dimScreen("none", false);
						confirmDialogue("images/deathIcon.png", "The blow to your head has made you forget who you are, what spells you learned and the reaper has looted all your items except for a few <img src=\'images/coins.png\' class=\'img-30\' /> coins.", "Close", "", "COMBAT_TUTORIAL_6");
						document.getElementById("back-button-fighting").style.display = ""
					}, 6000)
				}, 1000)
			});
			return
		}
	}
	else
	{
		document.getElementById("game").style.display = "";
		document.getElementById("dim-screen").style.display = "none"
	}
}