/**
 * dimScreen extracted from ../../deobfuscated/bundle.js at line 11525-0
 *
 * If this file doesn't contain a function, there is an error in ../raw/dimScreen.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function dimScreen(_0x1C884, _0x1D18A)
{
	if (_0x1D18A)
	{
		var _0x1CC4A = "";
		if (_0x1C884 == "bushy_dead")
		{
			_0x1CC4A += "<center>";
			_0x1CC4A += "<br /><br />";
			_0x1CC4A += "<br /><br />";
			_0x1CC4A += "<img id=\'dim-screen-img-2\' src=\'images/greenCrystalAbsorbed.png\' />";
			_0x1CC4A += "<br /><br />";
			_0x1CC4A += "<div style=\'color:grey\' id=\'dim-screen-area1\'></div>";
			_0x1CC4A += "<br /><br />";
			_0x1CC4A += "<div style=\'color:red\' id=\'dim-screen-area2\'></div>";
			_0x1CC4A += "</center>";
			$("#dim-screen").fadeIn(5000);
			$("#game").fadeOut(5000, function ()
			{
				document.getElementById("dim-screen").innerHTML = _0x1CC4A;
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
		if (_0x1C884 == "mana")
		{
			_0x1CC4A += "<center>";
			_0x1CC4A += "<br /><br />";
			_0x1CC4A += "<img id=\'dim-screen-img-1\' src=\'images/animation_mana1.png\' />";
			_0x1CC4A += "<br /><br />";
			_0x1CC4A += "<img id=\'dim-screen-img-2\' src=\'images/default_hero.png\' />";
			_0x1CC4A += "<br /><br />";
			_0x1CC4A += "</center>";
			$("#dim-screen").fadeIn(5000);
			$("#game").fadeOut(5000, function ()
			{
				document.getElementById("dim-screen").innerHTML = _0x1CC4A;
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
		if (_0x1C884 == "release_faradox")
		{
			_0x1CC4A += "<center>";
			_0x1CC4A += "<br /><br />";
			_0x1CC4A += "<br /><br />";
			_0x1CC4A += "<img id=\'dim-screen-img-1\' src=\'images/faradox.png\' />";
			_0x1CC4A += "<br /><br />";
			_0x1CC4A += "<div style=\'color:grey\' id=\'dim-screen-area1\'></div>";
			_0x1CC4A += "<br /><br />";
			_0x1CC4A += "<div style=\'color:red\' id=\'dim-screen-area2\'></div>";
			_0x1CC4A += "</center>";
			$("#dim-screen").fadeIn(5000);
			$("#game").fadeOut(5000, function ()
			{
				document.getElementById("dim-screen").innerHTML = _0x1CC4A;
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
		if (_0x1C884 == "release_faradox_2")
		{
			_0x1CC4A += "<center>";
			_0x1CC4A += "<br /><br />";
			_0x1CC4A += "<br /><br />";
			_0x1CC4A += "<img id=\'dim-screen-img-1\' src=\'images/faradox.png\' />";
			_0x1CC4A += "<br /><br />";
			_0x1CC4A += "<div style=\'color:grey\' id=\'dim-screen-area1\'></div>";
			_0x1CC4A += "<br /><br />";
			_0x1CC4A += "<div style=\'color:red\' id=\'dim-screen-area2\'></div>";
			_0x1CC4A += "</center>";
			$("#dim-screen").fadeIn(5000);
			$("#game").fadeOut(5000, function ()
			{
				document.getElementById("dim-screen").innerHTML = _0x1CC4A;
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
		var _0x1CC4A = "";
		if (_0x1C884 == "dead_hero")
		{
			_0x1CC4A += "<center>";
			_0x1CC4A += "<br /><br />";
			_0x1CC4A += "<br /><br />";
			_0x1CC4A += "<img id=\'dim-screen-img-1\' src=\'images/deadHero.png\' />";
			_0x1CC4A += "<br /><br />";
			_0x1CC4A += "<div style=\'color:grey\' id=\'dim-screen-area1\'></div>";
			_0x1CC4A += "</center>";
			$("#dim-screen").fadeIn(1000);
			$("#game").fadeOut(1000, function ()
			{
				document.getElementById("dim-screen").innerHTML = _0x1CC4A;
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
		}
	}
	else
	{
		document.getElementById("game").style.display = "";
		document.getElementById("dim-screen").style.display = "none"
	}
}