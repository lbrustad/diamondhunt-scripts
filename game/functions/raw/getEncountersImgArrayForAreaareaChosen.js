/**
 * getEncountersImgArrayForAreaareaChosen extracted from ../../deobfuscated/bundle.js at line 10488-11218
 *
 * If this file doesn't contain a function, there is an error in ../raw/getEncountersImgArrayForAreaareaChosen.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getEncountersImgArrayForAreaareaChosen(_0x4827)
{
	_0x4827 = _0x4827.toLowerCase();
	var _0x52EA = [];
	var _0x473F = "";
	switch (_0x4827)
	{
	case "fields":
		var _0x5341 = false;
		var _0x5307 = [];
		_0x473F = "chicken";
		_0x52EA.push(_0x473F);
		if (getItem(_0x473F + "Kills") >= 100)
		{
			_0x52EA.push("images/" + _0x473F + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x473F + "Kills") >= 30)
			{
				_0x52EA.push("images/" + _0x473F + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x473F + "Kills") >= 1)
				{
					_0x52EA.push("images/" + _0x473F + "Monster_green.png")
				}
				else
				{
					_0x52EA.push("images/" + _0x473F + "Monster_black.png")
				}
			}
		};
		_0x5307[0] = getItem(_0x473F + "Kills");
		_0x473F = "rat";
		_0x52EA.push(_0x473F);
		if (getItem(_0x473F + "Kills") >= 100)
		{
			_0x52EA.push("images/" + _0x473F + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x473F + "Kills") >= 30)
			{
				_0x52EA.push("images/" + _0x473F + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x473F + "Kills") >= 1)
				{
					_0x52EA.push("images/" + _0x473F + "Monster_green.png")
				}
				else
				{
					_0x52EA.push("images/" + _0x473F + "Monster_black.png")
				}
			}
		};
		_0x5307[1] = getItem(_0x473F + "Kills");
		_0x473F = "bee";
		_0x52EA.push(_0x473F);
		if (getItem(_0x473F + "Kills") >= 100)
		{
			_0x52EA.push("images/" + _0x473F + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x473F + "Kills") >= 30)
			{
				_0x52EA.push("images/" + _0x473F + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x473F + "Kills") >= 1)
				{
					_0x52EA.push("images/" + _0x473F + "Monster_green.png")
				}
				else
				{
					_0x52EA.push("images/" + _0x473F + "Monster_black.png")
				}
			}
		};
		_0x5307[2] = getItem(_0x473F + "Kills");
		var _0x5324 = "images/redFightMarker.gif";
		if (Math.min.apply(null, _0x5307) >= 100)
		{
			_0x5324 = "images/blueFightMarker.gif"
		}
		else
		{
			if (Math.min.apply(null, _0x5307) >= 1)
			{
				_0x5324 = "images/greenFightMarker.gif"
			}
			else
			{
				for (var _0x3607 = 0; _0x3607 < _0x5307.length; _0x3607++)
				{
					if (_0x5307[0] > 0)
					{
						_0x5324 = "images/yellowFightMarker.gif";
						break
					}
				}
			}
		};
		_0x52EA.push(_0x5324);
		break;
	case "forest":
		var _0x5341 = false;
		var _0x5307 = [];
		_0x473F = "snake";
		_0x52EA.push(_0x473F);
		if (getItem(_0x473F + "Kills") >= 100)
		{
			_0x52EA.push("images/" + _0x473F + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x473F + "Kills") >= 30)
			{
				_0x52EA.push("images/" + _0x473F + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x473F + "Kills") >= 1)
				{
					_0x52EA.push("images/" + _0x473F + "Monster_green.png")
				}
				else
				{
					_0x52EA.push("images/" + _0x473F + "Monster_black.png")
				}
			}
		};
		_0x5307[0] = getItem(_0x473F + "Kills");
		_0x473F = "ent";
		_0x52EA.push(_0x473F);
		if (getItem(_0x473F + "Kills") >= 100)
		{
			_0x52EA.push("images/" + _0x473F + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x473F + "Kills") >= 30)
			{
				_0x52EA.push("images/" + _0x473F + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x473F + "Kills") >= 1)
				{
					_0x52EA.push("images/" + _0x473F + "Monster_green.png")
				}
				else
				{
					_0x52EA.push("images/" + _0x473F + "Monster_black.png")
				}
			}
		};
		_0x5307[1] = getItem(_0x473F + "Kills");
		_0x473F = "thief";
		_0x52EA.push(_0x473F);
		if (getItem(_0x473F + "Kills") >= 100)
		{
			_0x52EA.push("images/" + _0x473F + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x473F + "Kills") >= 30)
			{
				_0x52EA.push("images/" + _0x473F + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x473F + "Kills") >= 1)
				{
					_0x52EA.push("images/" + _0x473F + "Monster_green.png")
				}
				else
				{
					_0x52EA.push("images/" + _0x473F + "Monster_black.png")
				}
			}
		};
		_0x5307[2] = getItem(_0x473F + "Kills");
		var _0x5324 = "images/redFightMarker.gif";
		if (Math.min.apply(null, _0x5307) >= 100)
		{
			_0x5324 = "images/blueFightMarker.gif"
		}
		else
		{
			if (Math.min.apply(null, _0x5307) >= 1)
			{
				_0x5324 = "images/greenFightMarker.gif"
			}
			else
			{
				for (var _0x3607 = 0; _0x3607 < _0x5307.length; _0x3607++)
				{
					if (_0x5307[0] > 0)
					{
						_0x5324 = "images/yellowFightMarker.gif";
						break
					}
				}
			}
		};
		_0x52EA.push(_0x5324);
		break;
	case "caves":
		var _0x5341 = false;
		var _0x5307 = [];
		_0x473F = "bear";
		_0x52EA.push(_0x473F);
		if (getItem(_0x473F + "Kills") >= 100)
		{
			_0x52EA.push("images/" + _0x473F + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x473F + "Kills") >= 30)
			{
				_0x52EA.push("images/" + _0x473F + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x473F + "Kills") >= 1)
				{
					_0x52EA.push("images/" + _0x473F + "Monster_green.png")
				}
				else
				{
					_0x52EA.push("images/" + _0x473F + "Monster_black.png")
				}
			}
		};
		_0x5307[0] = getItem(_0x473F + "Kills");
		_0x473F = "spider";
		_0x52EA.push(_0x473F);
		if (getItem(_0x473F + "Kills") >= 100)
		{
			_0x52EA.push("images/" + _0x473F + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x473F + "Kills") >= 30)
			{
				_0x52EA.push("images/" + _0x473F + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x473F + "Kills") >= 1)
				{
					_0x52EA.push("images/" + _0x473F + "Monster_green.png")
				}
				else
				{
					_0x52EA.push("images/" + _0x473F + "Monster_black.png")
				}
			}
		};
		_0x5307[1] = getItem(_0x473F + "Kills");
		_0x473F = "skeleton";
		_0x52EA.push(_0x473F);
		if (getItem(_0x473F + "Kills") >= 100)
		{
			_0x52EA.push("images/" + _0x473F + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x473F + "Kills") >= 30)
			{
				_0x52EA.push("images/" + _0x473F + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x473F + "Kills") >= 1)
				{
					_0x52EA.push("images/" + _0x473F + "Monster_green.png")
				}
				else
				{
					_0x52EA.push("images/" + _0x473F + "Monster_black.png")
				}
			}
		};
		_0x5307[2] = getItem(_0x473F + "Kills");
		var _0x5324 = "images/redFightMarker.gif";
		if (Math.min.apply(null, _0x5307) >= 100)
		{
			_0x5324 = "images/blueFightMarker.gif"
		}
		else
		{
			if (Math.min.apply(null, _0x5307) >= 1)
			{
				_0x5324 = "images/greenFightMarker.gif"
			}
			else
			{
				for (var _0x3607 = 0; _0x3607 < _0x5307.length; _0x3607++)
				{
					if (_0x5307[0] > 0)
					{
						_0x5324 = "images/yellowFightMarker.gif";
						break
					}
				}
			}
		};
		_0x52EA.push(_0x5324);
		break;
	case "lavadungeon":
		var _0x5341 = false;
		var _0x5307 = [];
		_0x473F = "lavaAlien";
		_0x52EA.push(_0x473F);
		if (getItem(_0x473F + "Kills") >= 100)
		{
			_0x52EA.push("images/" + _0x473F + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x473F + "Kills") >= 30)
			{
				_0x52EA.push("images/" + _0x473F + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x473F + "Kills") >= 1)
				{
					_0x52EA.push("images/" + _0x473F + "Monster_green.png")
				}
				else
				{
					_0x52EA.push("images/" + _0x473F + "Monster_black.png")
				}
			}
		};
		_0x5307[0] = getItem(_0x473F + "Kills");
		_0x473F = "bat";
		_0x52EA.push(_0x473F);
		if (getItem(_0x473F + "Kills") >= 100)
		{
			_0x52EA.push("images/" + _0x473F + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x473F + "Kills") >= 30)
			{
				_0x52EA.push("images/" + _0x473F + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x473F + "Kills") >= 1)
				{
					_0x52EA.push("images/" + _0x473F + "Monster_green.png")
				}
				else
				{
					_0x52EA.push("images/" + _0x473F + "Monster_black.png")
				}
			}
		};
		_0x5307[1] = getItem(_0x473F + "Kills");
		_0x473F = "fireMage";
		_0x52EA.push(_0x473F);
		if (getItem(_0x473F + "Kills") >= 100)
		{
			_0x52EA.push("images/" + _0x473F + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x473F + "Kills") >= 30)
			{
				_0x52EA.push("images/" + _0x473F + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x473F + "Kills") >= 1)
				{
					_0x52EA.push("images/" + _0x473F + "Monster_green.png")
				}
				else
				{
					_0x52EA.push("images/" + _0x473F + "Monster_black.png")
				}
			}
		};
		_0x5307[2] = getItem(_0x473F + "Kills");
		var _0x5324 = "images/redFightMarker.gif";
		if (Math.min.apply(null, _0x5307) >= 100)
		{
			_0x5324 = "images/blueFightMarker.gif"
		}
		else
		{
			if (Math.min.apply(null, _0x5307) >= 1)
			{
				_0x5324 = "images/greenFightMarker.gif"
			}
			else
			{
				for (var _0x3607 = 0; _0x3607 < _0x5307.length; _0x3607++)
				{
					if (_0x5307[0] > 0)
					{
						_0x5324 = "images/yellowFightMarker.gif";
						break
					}
				}
			}
		};
		_0x52EA.push(_0x5324);
		break;
	case "northernfields":
		var _0x5341 = false;
		var _0x5307 = [];
		_0x473F = "boneHead";
		_0x52EA.push(_0x473F);
		if (getItem(_0x473F + "Kills") >= 100)
		{
			_0x52EA.push("images/" + _0x473F + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x473F + "Kills") >= 30)
			{
				_0x52EA.push("images/" + _0x473F + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x473F + "Kills") >= 1)
				{
					_0x52EA.push("images/" + _0x473F + "Monster_green.png")
				}
				else
				{
					_0x52EA.push("images/" + _0x473F + "Monster_black.png")
				}
			}
		};
		_0x5307[0] = getItem(_0x473F + "Kills");
		_0x473F = "mammaPolarBear";
		_0x52EA.push(_0x473F);
		if (getItem(_0x473F + "Kills") >= 100)
		{
			_0x52EA.push("images/" + _0x473F + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x473F + "Kills") >= 30)
			{
				_0x52EA.push("images/" + _0x473F + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x473F + "Kills") >= 1)
				{
					_0x52EA.push("images/" + _0x473F + "Monster_green.png")
				}
				else
				{
					_0x52EA.push("images/" + _0x473F + "Monster_black.png")
				}
			}
		};
		_0x5307[1] = getItem(_0x473F + "Kills");
		_0x473F = "yeti";
		_0x52EA.push(_0x473F);
		if (getItem(_0x473F + "Kills") >= 100)
		{
			_0x52EA.push("images/" + _0x473F + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x473F + "Kills") >= 30)
			{
				_0x52EA.push("images/" + _0x473F + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x473F + "Kills") >= 1)
				{
					_0x52EA.push("images/" + _0x473F + "Monster_green.png")
				}
				else
				{
					_0x52EA.push("images/" + _0x473F + "Monster_black.png")
				}
			}
		};
		_0x5307[2] = getItem(_0x473F + "Kills");
		var _0x5324 = "images/redFightMarker.gif";
		if (Math.min.apply(null, _0x5307) >= 100)
		{
			_0x5324 = "images/blueFightMarker.gif"
		}
		else
		{
			if (Math.min.apply(null, _0x5307) >= 1)
			{
				_0x5324 = "images/greenFightMarker.gif"
			}
			else
			{
				for (var _0x3607 = 0; _0x3607 < _0x5307.length; _0x3607++)
				{
					if (_0x5307[0] > 0)
					{
						_0x5324 = "images/yellowFightMarker.gif";
						break
					}
				}
			}
		};
		_0x52EA.push(_0x5324);
		break;
	case "cemetery":
		var _0x5341 = false;
		var _0x5307 = [];
		_0x473F = "ghost";
		_0x52EA.push(_0x473F);
		if (getItem(_0x473F + "Kills") >= 100)
		{
			_0x52EA.push("images/" + _0x473F + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x473F + "Kills") >= 30)
			{
				_0x52EA.push("images/" + _0x473F + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x473F + "Kills") >= 1)
				{
					_0x52EA.push("images/" + _0x473F + "Monster_green.png")
				}
				else
				{
					_0x52EA.push("images/" + _0x473F + "Monster_black.png")
				}
			}
		};
		_0x5307[0] = getItem(_0x473F + "Kills");
		_0x473F = "skeletonGhost";
		_0x52EA.push(_0x473F);
		if (getItem(_0x473F + "Kills") >= 100)
		{
			_0x52EA.push("images/" + _0x473F + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x473F + "Kills") >= 30)
			{
				_0x52EA.push("images/" + _0x473F + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x473F + "Kills") >= 1)
				{
					_0x52EA.push("images/" + _0x473F + "Monster_green.png")
				}
				else
				{
					_0x52EA.push("images/" + _0x473F + "Monster_black.png")
				}
			}
		};
		_0x5307[1] = getItem(_0x473F + "Kills");
		_0x473F = "reaper";
		_0x52EA.push(_0x473F);
		if (getItem(_0x473F + "Kills") >= 100)
		{
			_0x52EA.push("images/" + _0x473F + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x473F + "Kills") >= 30)
			{
				_0x52EA.push("images/" + _0x473F + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x473F + "Kills") >= 1)
				{
					_0x52EA.push("images/" + _0x473F + "Monster_green.png")
				}
				else
				{
					_0x52EA.push("images/" + _0x473F + "Monster_black.png")
				}
			}
		};
		_0x5307[2] = getItem(_0x473F + "Kills");
		var _0x5324 = "images/redFightMarker.gif";
		if (Math.min.apply(null, _0x5307) >= 100)
		{
			_0x5324 = "images/blueFightMarker.gif"
		}
		else
		{
			if (Math.min.apply(null, _0x5307) >= 1)
			{
				_0x5324 = "images/greenFightMarker.gif"
			}
			else
			{
				for (var _0x3607 = 0; _0x3607 < _0x5307.length; _0x3607++)
				{
					if (_0x5307[0] > 0)
					{
						_0x5324 = "images/yellowFightMarker.gif";
						break
					}
				}
			}
		};
		_0x52EA.push(_0x5324);
		break;
	case "ocean":
		var _0x5341 = false;
		var _0x5307 = [];
		_0x473F = "shark";
		_0x52EA.push(_0x473F);
		if (getItem(_0x473F + "Kills") >= 100)
		{
			_0x52EA.push("images/" + _0x473F + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x473F + "Kills") >= 30)
			{
				_0x52EA.push("images/" + _0x473F + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x473F + "Kills") >= 1)
				{
					_0x52EA.push("images/" + _0x473F + "Monster_green.png")
				}
				else
				{
					_0x52EA.push("images/" + _0x473F + "Monster_black.png")
				}
			}
		};
		_0x5307[0] = getItem(_0x473F + "Kills");
		_0x473F = "pufferFish";
		_0x52EA.push(_0x473F);
		if (getItem(_0x473F + "Kills") >= 100)
		{
			_0x52EA.push("images/" + _0x473F + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x473F + "Kills") >= 30)
			{
				_0x52EA.push("images/" + _0x473F + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x473F + "Kills") >= 1)
				{
					_0x52EA.push("images/" + _0x473F + "Monster_green.png")
				}
				else
				{
					_0x52EA.push("images/" + _0x473F + "Monster_black.png")
				}
			}
		};
		_0x5307[1] = getItem(_0x473F + "Kills");
		_0x473F = "tridentSoldier";
		_0x52EA.push(_0x473F);
		if (getItem(_0x473F + "Kills") >= 100)
		{
			_0x52EA.push("images/" + _0x473F + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x473F + "Kills") >= 30)
			{
				_0x52EA.push("images/" + _0x473F + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x473F + "Kills") >= 1)
				{
					_0x52EA.push("images/" + _0x473F + "Monster_green.png")
				}
				else
				{
					_0x52EA.push("images/" + _0x473F + "Monster_black.png")
				}
			}
		};
		_0x5307[2] = getItem(_0x473F + "Kills");
		var _0x5324 = "images/redFightMarker.gif";
		if (Math.min.apply(null, _0x5307) >= 100)
		{
			_0x5324 = "images/blueFightMarker.gif"
		}
		else
		{
			if (Math.min.apply(null, _0x5307) >= 1)
			{
				_0x5324 = "images/greenFightMarker.gif"
			}
			else
			{
				for (var _0x3607 = 0; _0x3607 < _0x5307.length; _0x3607++)
				{
					if (_0x5307[0] > 0)
					{
						_0x5324 = "images/yellowFightMarker.gif";
						break
					}
				}
			}
		};
		_0x52EA.push(_0x5324);
		break
	};
	return _0x52EA
}