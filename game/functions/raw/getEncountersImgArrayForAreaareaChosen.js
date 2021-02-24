/**
 * getEncountersImgArrayForAreaareaChosen extracted from ../../deobfuscated/bundle.js at line 12665-13554
 *
 * If this file doesn't contain a function, there is an error in ../raw/getEncountersImgArrayForAreaareaChosen.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getEncountersImgArrayForAreaareaChosen(_0x1636D)
{
	_0x1636D = _0x1636D.toLowerCase();
	var _0x1706A = [];
	var _0x1613D = "";
	switch (_0x1636D)
	{
	case "fields":
		var _0x170D3 = false;
		var _0x1708D = [];
		_0x1613D = "chicken";
		_0x1706A.push(_0x1613D);
		if (getItem(_0x1613D + "Kills") >= 100)
		{
			_0x1706A.push("images/" + _0x1613D + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1613D + "Kills") >= 30)
			{
				_0x1706A.push("images/" + _0x1613D + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1613D + "Kills") >= 1)
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_green.png")
				}
				else
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_black.png")
				}
			}
		};
		_0x1708D[0] = getItem(_0x1613D + "Kills");
		_0x1613D = "rat";
		_0x1706A.push(_0x1613D);
		if (getItem(_0x1613D + "Kills") >= 100)
		{
			_0x1706A.push("images/" + _0x1613D + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1613D + "Kills") >= 30)
			{
				_0x1706A.push("images/" + _0x1613D + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1613D + "Kills") >= 1)
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_green.png")
				}
				else
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_black.png")
				}
			}
		};
		_0x1708D[1] = getItem(_0x1613D + "Kills");
		_0x1613D = "bee";
		_0x1706A.push(_0x1613D);
		if (getItem(_0x1613D + "Kills") >= 100)
		{
			_0x1706A.push("images/" + _0x1613D + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1613D + "Kills") >= 30)
			{
				_0x1706A.push("images/" + _0x1613D + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1613D + "Kills") >= 1)
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_green.png")
				}
				else
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_black.png")
				}
			}
		};
		_0x1708D[2] = getItem(_0x1613D + "Kills");
		var _0x170B0 = "images/redFightMarker.gif";
		if (Math.min.apply(null, _0x1708D) >= 100)
		{
			_0x170B0 = "images/blue2FightMarker.gif"
		}
		else
		{
			if (Math.min.apply(null, _0x1708D) >= 20)
			{
				_0x170B0 = "images/blueFightMarker.gif"
			}
			else
			{
				if (Math.min.apply(null, _0x1708D) >= 20)
				{
					_0x170B0 = "images/blueFightMarker.gif"
				}
				else
				{
					if (Math.min.apply(null, _0x1708D) >= 1)
					{
						_0x170B0 = "images/greenFightMarker.gif"
					}
					else
					{
						for (var _0x14C0C = 0; _0x14C0C < _0x1708D.length; _0x14C0C++)
						{
							if (_0x1708D[0] > 0)
							{
								_0x170B0 = "images/yellowFightMarker.gif";
								break
							}
						}
					}
				}
			}
		};
		_0x1706A.push(_0x170B0);
		break;
	case "forest":
		var _0x170D3 = false;
		var _0x1708D = [];
		_0x1613D = "snake";
		_0x1706A.push(_0x1613D);
		if (getItem(_0x1613D + "Kills") >= 100)
		{
			_0x1706A.push("images/" + _0x1613D + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1613D + "Kills") >= 30)
			{
				_0x1706A.push("images/" + _0x1613D + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1613D + "Kills") >= 1)
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_green.png")
				}
				else
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_black.png")
				}
			}
		};
		_0x1708D[0] = getItem(_0x1613D + "Kills");
		_0x1613D = "ent";
		_0x1706A.push(_0x1613D);
		if (getItem(_0x1613D + "Kills") >= 100)
		{
			_0x1706A.push("images/" + _0x1613D + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1613D + "Kills") >= 30)
			{
				_0x1706A.push("images/" + _0x1613D + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1613D + "Kills") >= 1)
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_green.png")
				}
				else
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_black.png")
				}
			}
		};
		_0x1708D[1] = getItem(_0x1613D + "Kills");
		_0x1613D = "thief";
		_0x1706A.push(_0x1613D);
		if (getItem(_0x1613D + "Kills") >= 100)
		{
			_0x1706A.push("images/" + _0x1613D + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1613D + "Kills") >= 30)
			{
				_0x1706A.push("images/" + _0x1613D + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1613D + "Kills") >= 1)
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_green.png")
				}
				else
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_black.png")
				}
			}
		};
		_0x1708D[2] = getItem(_0x1613D + "Kills");
		var _0x170B0 = "images/redFightMarker.gif";
		if (Math.min.apply(null, _0x1708D) >= 100)
		{
			_0x170B0 = "images/blue2FightMarker.gif"
		}
		else
		{
			if (Math.min.apply(null, _0x1708D) >= 20)
			{
				_0x170B0 = "images/blueFightMarker.gif"
			}
			else
			{
				if (Math.min.apply(null, _0x1708D) >= 1)
				{
					_0x170B0 = "images/greenFightMarker.gif"
				}
				else
				{
					for (var _0x14C0C = 0; _0x14C0C < _0x1708D.length; _0x14C0C++)
					{
						if (_0x1708D[0] > 0)
						{
							_0x170B0 = "images/yellowFightMarker.gif";
							break
						}
					}
				}
			}
		};
		_0x1706A.push(_0x170B0);
		break;
	case "caves":
		var _0x170D3 = false;
		var _0x1708D = [];
		_0x1613D = "bear";
		_0x1706A.push(_0x1613D);
		if (getItem(_0x1613D + "Kills") >= 100)
		{
			_0x1706A.push("images/" + _0x1613D + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1613D + "Kills") >= 30)
			{
				_0x1706A.push("images/" + _0x1613D + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1613D + "Kills") >= 1)
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_green.png")
				}
				else
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_black.png")
				}
			}
		};
		_0x1708D[0] = getItem(_0x1613D + "Kills");
		_0x1613D = "spider";
		_0x1706A.push(_0x1613D);
		if (getItem(_0x1613D + "Kills") >= 100)
		{
			_0x1706A.push("images/" + _0x1613D + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1613D + "Kills") >= 30)
			{
				_0x1706A.push("images/" + _0x1613D + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1613D + "Kills") >= 1)
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_green.png")
				}
				else
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_black.png")
				}
			}
		};
		_0x1708D[1] = getItem(_0x1613D + "Kills");
		_0x1613D = "skeleton";
		_0x1706A.push(_0x1613D);
		if (getItem(_0x1613D + "Kills") >= 100)
		{
			_0x1706A.push("images/" + _0x1613D + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1613D + "Kills") >= 30)
			{
				_0x1706A.push("images/" + _0x1613D + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1613D + "Kills") >= 1)
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_green.png")
				}
				else
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_black.png")
				}
			}
		};
		_0x1708D[2] = getItem(_0x1613D + "Kills");
		var _0x170B0 = "images/redFightMarker.gif";
		if (Math.min.apply(null, _0x1708D) >= 100)
		{
			_0x170B0 = "images/blue2FightMarker.gif"
		}
		else
		{
			if (Math.min.apply(null, _0x1708D) >= 20)
			{
				_0x170B0 = "images/blueFightMarker.gif"
			}
			else
			{
				if (Math.min.apply(null, _0x1708D) >= 1)
				{
					_0x170B0 = "images/greenFightMarker.gif"
				}
				else
				{
					for (var _0x14C0C = 0; _0x14C0C < _0x1708D.length; _0x14C0C++)
					{
						if (_0x1708D[0] > 0)
						{
							_0x170B0 = "images/yellowFightMarker.gif";
							break
						}
					}
				}
			}
		};
		_0x1706A.push(_0x170B0);
		break;
	case "lavadungeon":
		var _0x170D3 = false;
		var _0x1708D = [];
		_0x1613D = "lavaAlien";
		_0x1706A.push(_0x1613D);
		if (getItem(_0x1613D + "Kills") >= 100)
		{
			_0x1706A.push("images/" + _0x1613D + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1613D + "Kills") >= 30)
			{
				_0x1706A.push("images/" + _0x1613D + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1613D + "Kills") >= 1)
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_green.png")
				}
				else
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_black.png")
				}
			}
		};
		_0x1708D[0] = getItem(_0x1613D + "Kills");
		_0x1613D = "bat";
		_0x1706A.push(_0x1613D);
		if (getItem(_0x1613D + "Kills") >= 100)
		{
			_0x1706A.push("images/" + _0x1613D + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1613D + "Kills") >= 30)
			{
				_0x1706A.push("images/" + _0x1613D + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1613D + "Kills") >= 1)
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_green.png")
				}
				else
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_black.png")
				}
			}
		};
		_0x1708D[1] = getItem(_0x1613D + "Kills");
		_0x1613D = "fireMage";
		_0x1706A.push(_0x1613D);
		if (getItem(_0x1613D + "Kills") >= 100)
		{
			_0x1706A.push("images/" + _0x1613D + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1613D + "Kills") >= 30)
			{
				_0x1706A.push("images/" + _0x1613D + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1613D + "Kills") >= 1)
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_green.png")
				}
				else
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_black.png")
				}
			}
		};
		_0x1708D[2] = getItem(_0x1613D + "Kills");
		var _0x170B0 = "images/redFightMarker.gif";
		if (Math.min.apply(null, _0x1708D) >= 100)
		{
			_0x170B0 = "images/blueFightMarker.gif"
		}
		else
		{
			if (Math.min.apply(null, _0x1708D) >= 1)
			{
				_0x170B0 = "images/greenFightMarker.gif"
			}
			else
			{
				for (var _0x14C0C = 0; _0x14C0C < _0x1708D.length; _0x14C0C++)
				{
					if (_0x1708D[0] > 0)
					{
						_0x170B0 = "images/yellowFightMarker.gif";
						break
					}
				}
			}
		};
		_0x1706A.push(_0x170B0);
		break;
	case "northernfields":
		var _0x170D3 = false;
		var _0x1708D = [];
		_0x1613D = "boneHead";
		_0x1706A.push(_0x1613D);
		if (getItem(_0x1613D + "Kills") >= 100)
		{
			_0x1706A.push("images/" + _0x1613D + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1613D + "Kills") >= 30)
			{
				_0x1706A.push("images/" + _0x1613D + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1613D + "Kills") >= 1)
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_green.png")
				}
				else
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_black.png")
				}
			}
		};
		_0x1708D[0] = getItem(_0x1613D + "Kills");
		_0x1613D = "mammaPolarBear";
		_0x1706A.push(_0x1613D);
		if (getItem(_0x1613D + "Kills") >= 100)
		{
			_0x1706A.push("images/" + _0x1613D + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1613D + "Kills") >= 30)
			{
				_0x1706A.push("images/" + _0x1613D + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1613D + "Kills") >= 1)
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_green.png")
				}
				else
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_black.png")
				}
			}
		};
		_0x1708D[1] = getItem(_0x1613D + "Kills");
		_0x1613D = "yeti";
		_0x1706A.push(_0x1613D);
		if (getItem(_0x1613D + "Kills") >= 100)
		{
			_0x1706A.push("images/" + _0x1613D + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1613D + "Kills") >= 30)
			{
				_0x1706A.push("images/" + _0x1613D + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1613D + "Kills") >= 1)
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_green.png")
				}
				else
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_black.png")
				}
			}
		};
		_0x1708D[2] = getItem(_0x1613D + "Kills");
		var _0x170B0 = "images/redFightMarker.gif";
		if (Math.min.apply(null, _0x1708D) >= 100)
		{
			_0x170B0 = "images/blue2FightMarker.gif"
		}
		else
		{
			if (Math.min.apply(null, _0x1708D) >= 20)
			{
				_0x170B0 = "images/blueFightMarker.gif"
			}
			else
			{
				if (Math.min.apply(null, _0x1708D) >= 1)
				{
					_0x170B0 = "images/greenFightMarker.gif"
				}
				else
				{
					for (var _0x14C0C = 0; _0x14C0C < _0x1708D.length; _0x14C0C++)
					{
						if (_0x1708D[0] > 0)
						{
							_0x170B0 = "images/yellowFightMarker.gif";
							break
						}
					}
				}
			}
		};
		_0x1706A.push(_0x170B0);
		break;
	case "cemetery":
		var _0x170D3 = false;
		var _0x1708D = [];
		_0x1613D = "ghost";
		_0x1706A.push(_0x1613D);
		if (getItem(_0x1613D + "Kills") >= 100)
		{
			_0x1706A.push("images/" + _0x1613D + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1613D + "Kills") >= 30)
			{
				_0x1706A.push("images/" + _0x1613D + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1613D + "Kills") >= 1)
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_green.png")
				}
				else
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_black.png")
				}
			}
		};
		_0x1708D[0] = getItem(_0x1613D + "Kills");
		_0x1613D = "skeletonGhost";
		_0x1706A.push(_0x1613D);
		if (getItem(_0x1613D + "Kills") >= 100)
		{
			_0x1706A.push("images/" + _0x1613D + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1613D + "Kills") >= 30)
			{
				_0x1706A.push("images/" + _0x1613D + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1613D + "Kills") >= 1)
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_green.png")
				}
				else
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_black.png")
				}
			}
		};
		_0x1708D[1] = getItem(_0x1613D + "Kills");
		_0x1613D = "reaper";
		_0x1706A.push(_0x1613D);
		if (getItem(_0x1613D + "Kills") >= 100)
		{
			_0x1706A.push("images/" + _0x1613D + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1613D + "Kills") >= 30)
			{
				_0x1706A.push("images/" + _0x1613D + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1613D + "Kills") >= 1)
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_green.png")
				}
				else
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_black.png")
				}
			}
		};
		_0x1708D[2] = getItem(_0x1613D + "Kills");
		var _0x170B0 = "images/redFightMarker.gif";
		if (Math.min.apply(null, _0x1708D) >= 100)
		{
			_0x170B0 = "images/blue2FightMarker.gif"
		}
		else
		{
			if (Math.min.apply(null, _0x1708D) >= 20)
			{
				_0x170B0 = "images/blueFightMarker.gif"
			}
			else
			{
				if (Math.min.apply(null, _0x1708D) >= 1)
				{
					_0x170B0 = "images/greenFightMarker.gif"
				}
				else
				{
					for (var _0x14C0C = 0; _0x14C0C < _0x1708D.length; _0x14C0C++)
					{
						if (_0x1708D[0] > 0)
						{
							_0x170B0 = "images/yellowFightMarker.gif";
							break
						}
					}
				}
			}
		};
		_0x1706A.push(_0x170B0);
		break;
	case "ocean":
		var _0x170D3 = false;
		var _0x1708D = [];
		_0x1613D = "shark";
		_0x1706A.push(_0x1613D);
		if (getItem(_0x1613D + "Kills") >= 100)
		{
			_0x1706A.push("images/" + _0x1613D + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1613D + "Kills") >= 30)
			{
				_0x1706A.push("images/" + _0x1613D + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1613D + "Kills") >= 1)
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_green.png")
				}
				else
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_black.png")
				}
			}
		};
		_0x1708D[0] = getItem(_0x1613D + "Kills");
		_0x1613D = "pufferFish";
		_0x1706A.push(_0x1613D);
		if (getItem(_0x1613D + "Kills") >= 100)
		{
			_0x1706A.push("images/" + _0x1613D + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1613D + "Kills") >= 30)
			{
				_0x1706A.push("images/" + _0x1613D + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1613D + "Kills") >= 1)
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_green.png")
				}
				else
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_black.png")
				}
			}
		};
		_0x1708D[1] = getItem(_0x1613D + "Kills");
		_0x1613D = "tridentSoldier";
		_0x1706A.push(_0x1613D);
		if (getItem(_0x1613D + "Kills") >= 100)
		{
			_0x1706A.push("images/" + _0x1613D + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1613D + "Kills") >= 30)
			{
				_0x1706A.push("images/" + _0x1613D + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1613D + "Kills") >= 1)
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_green.png")
				}
				else
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_black.png")
				}
			}
		};
		_0x1708D[2] = getItem(_0x1613D + "Kills");
		var _0x170B0 = "images/redFightMarker.gif";
		if (Math.min.apply(null, _0x1708D) >= 100)
		{
			_0x170B0 = "images/blue2FightMarker.gif"
		}
		else
		{
			if (Math.min.apply(null, _0x1708D) >= 20)
			{
				_0x170B0 = "images/blueFightMarker.gif"
			}
			else
			{
				if (Math.min.apply(null, _0x1708D) >= 1)
				{
					_0x170B0 = "images/greenFightMarker.gif"
				}
				else
				{
					for (var _0x14C0C = 0; _0x14C0C < _0x1708D.length; _0x14C0C++)
					{
						if (_0x1708D[0] > 0)
						{
							_0x170B0 = "images/yellowFightMarker.gif";
							break
						}
					}
				}
			}
		};
		_0x1706A.push(_0x170B0);
		break;
	case "dungeon":
		var _0x170D3 = false;
		var _0x1708D = [];
		_0x1613D = "skeletonMonks";
		_0x1706A.push(_0x1613D);
		if (getItem(_0x1613D + "Kills") >= 100)
		{
			_0x1706A.push("images/" + _0x1613D + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1613D + "Kills") >= 30)
			{
				_0x1706A.push("images/" + _0x1613D + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1613D + "Kills") >= 1)
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_green.png")
				}
				else
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_black.png")
				}
			}
		};
		_0x1708D[0] = getItem(_0x1613D + "Kills");
		_0x1613D = "dungeonSpider";
		_0x1706A.push(_0x1613D);
		if (getItem(_0x1613D + "Kills") >= 100)
		{
			_0x1706A.push("images/" + _0x1613D + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1613D + "Kills") >= 30)
			{
				_0x1706A.push("images/" + _0x1613D + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1613D + "Kills") >= 1)
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_green.png")
				}
				else
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_black.png")
				}
			}
		};
		_0x1708D[1] = getItem(_0x1613D + "Kills");
		_0x1613D = "stoneWomen";
		_0x1706A.push(_0x1613D);
		if (getItem(_0x1613D + "Kills") >= 100)
		{
			_0x1706A.push("images/" + _0x1613D + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1613D + "Kills") >= 30)
			{
				_0x1706A.push("images/" + _0x1613D + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1613D + "Kills") >= 1)
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_green.png")
				}
				else
				{
					_0x1706A.push("images/" + _0x1613D + "Monster_black.png")
				}
			}
		};
		_0x1708D[2] = getItem(_0x1613D + "Kills");
		var _0x170B0 = "images/redFightMarker.gif";
		if (Math.min.apply(null, _0x1708D) >= 100)
		{
			_0x170B0 = "images/blue2FightMarker.gif"
		}
		else
		{
			if (Math.min.apply(null, _0x1708D) >= 20)
			{
				_0x170B0 = "images/blueFightMarker.gif"
			}
			else
			{
				if (Math.min.apply(null, _0x1708D) >= 1)
				{
					_0x170B0 = "images/greenFightMarker.gif"
				}
				else
				{
					for (var _0x14C0C = 0; _0x14C0C < _0x1708D.length; _0x14C0C++)
					{
						if (_0x1708D[0] > 0)
						{
							_0x170B0 = "images/yellowFightMarker.gif";
							break
						}
					}
				}
			}
		};
		_0x1706A.push(_0x170B0);
		break
	};
	return _0x1706A
}