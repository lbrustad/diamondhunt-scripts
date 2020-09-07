'use strict';

function dimScreen(name, buildingApp)
{
	if (buildingApp)
	{
		var keyToAdd = "";
		if (name == "bushy_dead")
		{
			keyToAdd = keyToAdd + "<center>";
			keyToAdd = keyToAdd + "<br /><br />";
			keyToAdd = keyToAdd + "<br /><br />";
			keyToAdd = keyToAdd + "<img id='dim-screen-img-2' src='images/greenCrystalAbsorbed.png' />";
			keyToAdd = keyToAdd + "<br /><br />";
			keyToAdd = keyToAdd + "<div style='color:grey' id='dim-screen-area1'></div>";
			keyToAdd = keyToAdd + "<br /><br />";
			keyToAdd = keyToAdd + "<div style='color:red' id='dim-screen-area2'></div>";
			keyToAdd = keyToAdd + "</center>";
			$("#dim-screen").fadeIn(5000);
			$("#game").fadeOut(5000, function ()
			{
				document.getElementById("dim-screen").innerHTML = keyToAdd;
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
						addTextByDelay("Faradox is noticing.", $("#dim-screen-area2"), 50);
					}, 3000);
					setTimeout(function ()
					{
						$("#dim-screen-img-2").fadeOut(6000, function ()
						{
							dimScreen("none", false);
							confirmDialogue("images/darkCrystalUsed.png", "The dark crystal has regained 2/7 of power.", "Close", "", "");
						});
					}, 6000);
				}, 1000);
			});
			return;
		}
		if (name == "mana")
		{
			keyToAdd = keyToAdd + "<center>";
			keyToAdd = keyToAdd + "<br /><br />";
			keyToAdd = keyToAdd + "<img id='dim-screen-img-1' src='images/animation_mana1.png' />";
			keyToAdd = keyToAdd + "<br /><br />";
			keyToAdd = keyToAdd + "<img id='dim-screen-img-2' src='images/default_hero.png' />";
			keyToAdd = keyToAdd + "<br /><br />";
			keyToAdd = keyToAdd + "</center>";
			$("#dim-screen").fadeIn(5000);
			$("#game").fadeOut(5000, function ()
			{
				document.getElementById("dim-screen").innerHTML = keyToAdd;
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
								confirmDialogue("images/hugeManaStar.png", "You now have access to mana power!", "Close", "", "");
							});
						});
					}, 3000);
				}, 1000);
			});
			return;
		}
		if (name == "combat_animation")
		{
			keyToAdd = keyToAdd + "<center>";
			keyToAdd = keyToAdd + "<br /><br />";
			keyToAdd = keyToAdd + "<img id='dim-screen-img-1' src='images/reaper_grey.png' />";
			keyToAdd = keyToAdd + "<br /><br />";
			keyToAdd = keyToAdd + "<span id='dim-screen-area1'></span>";
			keyToAdd = keyToAdd + "<br /><br />";
			keyToAdd = keyToAdd + "<span id='dim-screen-area2'></span>";
			keyToAdd = keyToAdd + "</center>";
			$("#dim-screen").fadeIn(10);
			$("#game").fadeOut(10, function ()
			{
				document.getElementById("dim-screen").innerHTML = keyToAdd;
				setTimeout(function ()
				{
					setTimeout(function ()
					{
						setTimeout(function ()
						{
							addTextByDelay("Don't get any closer!", $("#dim-screen-area1"), 50);
						}, 1000);
						setTimeout(function ()
						{
							document.getElementById("dim-screen-area2").innerHTML += "<br /><br /><span class='resumeFight' onclick='sendBytes(\"TUT_RESUME_FIGHT\");dimScreen(\"none\", false);'><img src='images/scythe.png' class='img-30' /> Fight Reaper</span>";
						}, 5000);
					}, 1000);
				}, 1000);
			});
			return;
		}
		if (name == "release_faradox")
		{
			keyToAdd = keyToAdd + "<center>";
			keyToAdd = keyToAdd + "<br /><br />";
			keyToAdd = keyToAdd + "<br /><br />";
			keyToAdd = keyToAdd + "<img id='dim-screen-img-1' src='images/faradox.png' />";
			keyToAdd = keyToAdd + "<br /><br />";
			keyToAdd = keyToAdd + "<div style='color:grey' id='dim-screen-area1'></div>";
			keyToAdd = keyToAdd + "<br /><br />";
			keyToAdd = keyToAdd + "<div style='color:red' id='dim-screen-area2'></div>";
			keyToAdd = keyToAdd + "</center>";
			$("#dim-screen").fadeIn(5000);
			$("#game").fadeOut(5000, function ()
			{
				document.getElementById("dim-screen").innerHTML = keyToAdd;
				setTimeout(function ()
				{
					addTextByDelay("You have released me.", $("#dim-screen-area1"), 50);
					setTimeout(function ()
					{
						addTextByDelay("Let this world become tainted as I grow stronger.", $("#dim-screen-area2"), 50);
					}, 3000);
					setTimeout(function ()
					{
						$("#dim-screen-img-1").fadeOut(6000, function ()
						{
							dimScreen("none", false);
							confirmDialogue("images/darkCrystalUsed.png", "The dark crystal has no more energy.", "Close", "", "");
						});
					}, 6000);
				}, 1000);
			});
			return;
		}
		if (name == "release_faradox_2")
		{
			keyToAdd = keyToAdd + "<center>";
			keyToAdd = keyToAdd + "<br /><br />";
			keyToAdd = keyToAdd + "<br /><br />";
			keyToAdd = keyToAdd + "<img id='dim-screen-img-1' src='images/faradox.png' />";
			keyToAdd = keyToAdd + "<br /><br />";
			keyToAdd = keyToAdd + "<div style='color:grey' id='dim-screen-area1'></div>";
			keyToAdd = keyToAdd + "<br /><br />";
			keyToAdd = keyToAdd + "<div style='color:red' id='dim-screen-area2'></div>";
			keyToAdd = keyToAdd + "</center>";
			$("#dim-screen").fadeIn(5000);
			$("#game").fadeOut(5000, function ()
			{
				document.getElementById("dim-screen").innerHTML = keyToAdd;
				setTimeout(function ()
				{
					addTextByDelay("I am watching every move you make.", $("#dim-screen-area1"), 50);
					setTimeout(function ()
					{
						addTextByDelay("You killed one of my minions, and you will pay.", $("#dim-screen-area2"), 50);
					}, 3000);
					setTimeout(function ()
					{
						$("#dim-screen-img-1").fadeOut(6000, function ()
						{
							dimScreen("none", false);
							confirmDialogue("images/bobHappy.png", "You did it!  You got rid of that ghost in our fields!  Thank you!", "Close", "", "");
						});
					}, 6000);
				}, 1000);
			});
			return;
		}
		keyToAdd = "";
		if (name == "dead_hero")
		{
			keyToAdd = keyToAdd + "<center>";
			keyToAdd = keyToAdd + "<br /><br />";
			keyToAdd = keyToAdd + "<br /><br />";
			keyToAdd = keyToAdd + "<img id='dim-screen-img-1' src='images/deadHero.png' />";
			keyToAdd = keyToAdd + "<br /><br />";
			keyToAdd = keyToAdd + "<div style='color:grey' id='dim-screen-area1'></div>";
			keyToAdd = keyToAdd + "</center>";
			$("#dim-screen").fadeIn(1000);
			$("#game").fadeOut(1000, function ()
			{
				document.getElementById("dim-screen").innerHTML = keyToAdd;
				setTimeout(function ()
				{
					addTextByDelay("You have fainted.", $("#dim-screen-area1"), 50);
					setTimeout(function ()
					{
						dimScreen("none", false);
					}, 6000);
				}, 1000);
			});
			return;
		}
		if (name == "dead_hero_special")
		{
			keyToAdd = keyToAdd + "<center>";
			keyToAdd = keyToAdd + "<br /><br />";
			keyToAdd = keyToAdd + "<br /><br />";
			keyToAdd = keyToAdd + "<img id='dim-screen-img-1' src='images/deadHero.png' />";
			keyToAdd = keyToAdd + "<br /><br />";
			keyToAdd = keyToAdd + "<div style='color:grey' id='dim-screen-area1'></div>";
			keyToAdd = keyToAdd + "</center>";
			$("#dim-screen").fadeIn(1000);
			$("#game").fadeOut(1000, function ()
			{
				document.getElementById("dim-screen").innerHTML = keyToAdd;
				setTimeout(function ()
				{
					addTextByDelay("You have fainted.", $("#dim-screen-area1"), 50);
					setTimeout(function ()
					{
						dimScreen("none", false);
						confirmDialogue("images/deathIcon.png", "The blow to your head has made you forget who you are, what spells you learned and the reaper has looted all your items except for a few <img src='images/coins.png' class='img-30' /> coins.", "Close", "", "COMBAT_TUTORIAL_6");
						document.getElementById("back-button-fighting").style.display = "";
					}, 6000);
				}, 1000);
			});
			return;
		}
	}
	else
	{
		document.getElementById("game").style.display = "";
		document.getElementById("dim-screen").style.display = "none";
	}
};
