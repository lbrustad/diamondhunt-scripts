'use strict';

function clicksPuzzleChestOneSolveButton()
{
	var n = "";
	n = "0-0";
	if (!document.getElementById("td-puzzleChest1_" + n).getElementsByTagName("img")[0].src.endsWith(n + ".png"))
	{
		confirmDialogue("images/x.png", "The puzzle has not been solve correctly.", "Close", "", "");
		return;
	}
	n = "1-0";
	if (!document.getElementById("td-puzzleChest1_" + n).getElementsByTagName("img")[0].src.endsWith(n + ".png"))
	{
		confirmDialogue("images/x.png", "The puzzle has not been solve correctly.", "Close", "", "");
		return;
	}
	n = "2-0";
	if (!document.getElementById("td-puzzleChest1_" + n).getElementsByTagName("img")[0].src.endsWith(n + ".png"))
	{
		confirmDialogue("images/x.png", "The puzzle has not been solve correctly.", "Close", "", "");
		return;
	}
	n = "0-1";
	if (!document.getElementById("td-puzzleChest1_" + n).getElementsByTagName("img")[0].src.endsWith(n + ".png"))
	{
		confirmDialogue("images/x.png", "The puzzle has not been solve correctly.", "Close", "", "");
		return;
	}
	n = "1-1";
	if (!document.getElementById("td-puzzleChest1_" + n).getElementsByTagName("img")[0].src.endsWith(n + ".png"))
	{
		confirmDialogue("images/x.png", "The puzzle has not been solve correctly.", "Close", "", "");
		return;
	}
	n = "2-1";
	if (!document.getElementById("td-puzzleChest1_" + n).getElementsByTagName("img")[0].src.endsWith(n + ".png"))
	{
		confirmDialogue("images/x.png", "The puzzle has not been solve correctly.", "Close", "", "");
		return;
	}
	n = "0-2";
	if (!document.getElementById("td-puzzleChest1_" + n).getElementsByTagName("img")[0].src.endsWith(n + ".png"))
	{
		confirmDialogue("images/x.png", "The puzzle has not been solve correctly.", "Close", "", "");
		return;
	}
	n = "1-2";
	if (!document.getElementById("td-puzzleChest1_" + n).getElementsByTagName("img")[0].src.endsWith(n + ".png"))
	{
		confirmDialogue("images/x.png", "The puzzle has not been solve correctly.", "Close", "", "");
		return;
	}
	n = "2-2";
	if (!document.getElementById("td-puzzleChest1_" + n).getElementsByTagName("img")[0].src.endsWith(n + ".png"))
	{
		confirmDialogue("images/x.png", "The puzzle has not been solve correctly.", "Close", "", "");
		return;
	}
	sendBytes("CHEST_PUZZLE_1_SOLVED");
};
