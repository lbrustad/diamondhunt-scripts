/**
 * getEncountersImgArrayForAreaareaChosen extracted from ../../deobfuscated/bundle.js at line 8086-8595
 *
 * If this file doesn't contain a function, there is an error in ../raw/getEncountersImgArrayForAreaareaChosen.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getEncountersImgArrayForAreaareaChosen(_0x1CF5A)
{
	_0x1CF5A = _0x1CF5A.toLowerCase();
	var _0x1D390 = [];
	var _0x1CEEA = "";
	switch (_0x1CF5A)
	{
	case "fields":
		var _0x1D3BA = false;
		var _0x1D39E = [];
		_0x1CEEA = "chicken";
		if (getItem(_0x1CEEA + "Kills") >= 100)
		{
			_0x1D390.push("images/" + _0x1CEEA + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1CEEA + "Kills") >= 30)
			{
				_0x1D390.push("images/" + _0x1CEEA + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1CEEA + "Kills") >= 1)
				{
					_0x1D390.push("images/" + _0x1CEEA + "Monster_green.png")
				}
				else
				{
					_0x1D390.push("images/" + _0x1CEEA + "Monster_black.png")
				}
			}
		};
		_0x1D39E[0] = getItem(_0x1CEEA + "Kills");
		_0x1CEEA = "rat";
		if (getItem(_0x1CEEA + "Kills") >= 100)
		{
			_0x1D390.push("images/" + _0x1CEEA + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1CEEA + "Kills") >= 30)
			{
				_0x1D390.push("images/" + _0x1CEEA + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1CEEA + "Kills") >= 1)
				{
					_0x1D390.push("images/" + _0x1CEEA + "Monster_green.png")
				}
				else
				{
					_0x1D390.push("images/" + _0x1CEEA + "Monster_black.png")
				}
			}
		};
		_0x1D39E[1] = getItem(_0x1CEEA + "Kills");
		_0x1CEEA = "bee";
		if (getItem(_0x1CEEA + "Kills") >= 100)
		{
			_0x1D390.push("images/" + _0x1CEEA + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1CEEA + "Kills") >= 30)
			{
				_0x1D390.push("images/" + _0x1CEEA + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1CEEA + "Kills") >= 1)
				{
					_0x1D390.push("images/" + _0x1CEEA + "Monster_green.png")
				}
				else
				{
					_0x1D390.push("images/" + _0x1CEEA + "Monster_black.png")
				}
			}
		};
		_0x1D39E[2] = getItem(_0x1CEEA + "Kills");
		var _0x1D3AC = "images/redFightMarker.gif";
		if (Math.min.apply(null, _0x1D39E) >= 100)
		{
			_0x1D3AC = "images/blueFightMarker.gif"
		}
		else
		{
			if (Math.min.apply(null, _0x1D39E) >= 1)
			{
				_0x1D3AC = "images/greenFightMarker.gif"
			}
			else
			{
				for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1D39E.length; _0x1C6B6++)
				{
					if (_0x1D39E[0] > 0)
					{
						_0x1D3AC = "images/yellowFightMarker.gif";
						break
					}
				}
			}
		};
		_0x1D390.push(_0x1D3AC);
		break;
	case "forest":
		var _0x1D3BA = false;
		var _0x1D39E = [];
		_0x1CEEA = "snake";
		if (getItem(_0x1CEEA + "Kills") >= 100)
		{
			_0x1D390.push("images/" + _0x1CEEA + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1CEEA + "Kills") >= 30)
			{
				_0x1D390.push("images/" + _0x1CEEA + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1CEEA + "Kills") >= 1)
				{
					_0x1D390.push("images/" + _0x1CEEA + "Monster_green.png")
				}
				else
				{
					_0x1D390.push("images/" + _0x1CEEA + "Monster_black.png")
				}
			}
		};
		_0x1D39E[0] = getItem(_0x1CEEA + "Kills");
		_0x1CEEA = "ent";
		if (getItem(_0x1CEEA + "Kills") >= 100)
		{
			_0x1D390.push("images/" + _0x1CEEA + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1CEEA + "Kills") >= 30)
			{
				_0x1D390.push("images/" + _0x1CEEA + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1CEEA + "Kills") >= 1)
				{
					_0x1D390.push("images/" + _0x1CEEA + "Monster_green.png")
				}
				else
				{
					_0x1D390.push("images/" + _0x1CEEA + "Monster_black.png")
				}
			}
		};
		_0x1D39E[1] = getItem(_0x1CEEA + "Kills");
		_0x1CEEA = "thief";
		if (getItem(_0x1CEEA + "Kills") >= 100)
		{
			_0x1D390.push("images/" + _0x1CEEA + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1CEEA + "Kills") >= 30)
			{
				_0x1D390.push("images/" + _0x1CEEA + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1CEEA + "Kills") >= 1)
				{
					_0x1D390.push("images/" + _0x1CEEA + "Monster_green.png")
				}
				else
				{
					_0x1D390.push("images/" + _0x1CEEA + "Monster_black.png")
				}
			}
		};
		_0x1D39E[2] = getItem(_0x1CEEA + "Kills");
		var _0x1D3AC = "images/redFightMarker.gif";
		if (Math.min.apply(null, _0x1D39E) >= 100)
		{
			_0x1D3AC = "images/blueFightMarker.gif"
		}
		else
		{
			if (Math.min.apply(null, _0x1D39E) >= 1)
			{
				_0x1D3AC = "images/greenFightMarker.gif"
			}
			else
			{
				for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1D39E.length; _0x1C6B6++)
				{
					if (_0x1D39E[0] > 0)
					{
						_0x1D3AC = "images/yellowFightMarker.gif";
						break
					}
				}
			}
		};
		_0x1D390.push(_0x1D3AC);
		break;
	case "caves":
		var _0x1D3BA = false;
		var _0x1D39E = [];
		_0x1CEEA = "bear";
		if (getItem(_0x1CEEA + "Kills") >= 100)
		{
			_0x1D390.push("images/" + _0x1CEEA + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1CEEA + "Kills") >= 30)
			{
				_0x1D390.push("images/" + _0x1CEEA + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1CEEA + "Kills") >= 1)
				{
					_0x1D390.push("images/" + _0x1CEEA + "Monster_green.png")
				}
				else
				{
					_0x1D390.push("images/" + _0x1CEEA + "Monster_black.png")
				}
			}
		};
		_0x1D39E[0] = getItem(_0x1CEEA + "Kills");
		_0x1CEEA = "spider";
		if (getItem(_0x1CEEA + "Kills") >= 100)
		{
			_0x1D390.push("images/" + _0x1CEEA + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1CEEA + "Kills") >= 30)
			{
				_0x1D390.push("images/" + _0x1CEEA + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1CEEA + "Kills") >= 1)
				{
					_0x1D390.push("images/" + _0x1CEEA + "Monster_green.png")
				}
				else
				{
					_0x1D390.push("images/" + _0x1CEEA + "Monster_black.png")
				}
			}
		};
		_0x1D39E[1] = getItem(_0x1CEEA + "Kills");
		_0x1CEEA = "skeleton";
		if (getItem(_0x1CEEA + "Kills") >= 100)
		{
			_0x1D390.push("images/" + _0x1CEEA + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1CEEA + "Kills") >= 30)
			{
				_0x1D390.push("images/" + _0x1CEEA + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1CEEA + "Kills") >= 1)
				{
					_0x1D390.push("images/" + _0x1CEEA + "Monster_green.png")
				}
				else
				{
					_0x1D390.push("images/" + _0x1CEEA + "Monster_black.png")
				}
			}
		};
		_0x1D39E[2] = getItem(_0x1CEEA + "Kills");
		var _0x1D3AC = "images/redFightMarker.gif";
		if (Math.min.apply(null, _0x1D39E) >= 100)
		{
			_0x1D3AC = "images/blueFightMarker.gif"
		}
		else
		{
			if (Math.min.apply(null, _0x1D39E) >= 1)
			{
				_0x1D3AC = "images/greenFightMarker.gif"
			}
			else
			{
				for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1D39E.length; _0x1C6B6++)
				{
					if (_0x1D39E[0] > 0)
					{
						_0x1D3AC = "images/yellowFightMarker.gif";
						break
					}
				}
			}
		};
		_0x1D390.push(_0x1D3AC);
		break;
	case "lavadungeon":
		var _0x1D3BA = false;
		var _0x1D39E = [];
		_0x1CEEA = "lavaAlien";
		if (getItem(_0x1CEEA + "Kills") >= 100)
		{
			_0x1D390.push("images/" + _0x1CEEA + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1CEEA + "Kills") >= 30)
			{
				_0x1D390.push("images/" + _0x1CEEA + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1CEEA + "Kills") >= 1)
				{
					_0x1D390.push("images/" + _0x1CEEA + "Monster_green.png")
				}
				else
				{
					_0x1D390.push("images/" + _0x1CEEA + "Monster_black.png")
				}
			}
		};
		_0x1D39E[0] = getItem(_0x1CEEA + "Kills");
		_0x1CEEA = "bat";
		if (getItem(_0x1CEEA + "Kills") >= 100)
		{
			_0x1D390.push("images/" + _0x1CEEA + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1CEEA + "Kills") >= 30)
			{
				_0x1D390.push("images/" + _0x1CEEA + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1CEEA + "Kills") >= 1)
				{
					_0x1D390.push("images/" + _0x1CEEA + "Monster_green.png")
				}
				else
				{
					_0x1D390.push("images/" + _0x1CEEA + "Monster_black.png")
				}
			}
		};
		_0x1D39E[1] = getItem(_0x1CEEA + "Kills");
		_0x1CEEA = "fireMage";
		if (getItem(_0x1CEEA + "Kills") >= 100)
		{
			_0x1D390.push("images/" + _0x1CEEA + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1CEEA + "Kills") >= 30)
			{
				_0x1D390.push("images/" + _0x1CEEA + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1CEEA + "Kills") >= 1)
				{
					_0x1D390.push("images/" + _0x1CEEA + "Monster_green.png")
				}
				else
				{
					_0x1D390.push("images/" + _0x1CEEA + "Monster_black.png")
				}
			}
		};
		_0x1D39E[2] = getItem(_0x1CEEA + "Kills");
		var _0x1D3AC = "images/redFightMarker.gif";
		if (Math.min.apply(null, _0x1D39E) >= 100)
		{
			_0x1D3AC = "images/blueFightMarker.gif"
		}
		else
		{
			if (Math.min.apply(null, _0x1D39E) >= 1)
			{
				_0x1D3AC = "images/greenFightMarker.gif"
			}
			else
			{
				for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1D39E.length; _0x1C6B6++)
				{
					if (_0x1D39E[0] > 0)
					{
						_0x1D3AC = "images/yellowFightMarker.gif";
						break
					}
				}
			}
		};
		_0x1D390.push(_0x1D3AC);
		break;
	case "northernfields":
		var _0x1D3BA = false;
		var _0x1D39E = [];
		_0x1CEEA = "boneHead";
		if (getItem(_0x1CEEA + "Kills") >= 100)
		{
			_0x1D390.push("images/" + _0x1CEEA + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1CEEA + "Kills") >= 30)
			{
				_0x1D390.push("images/" + _0x1CEEA + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1CEEA + "Kills") >= 1)
				{
					_0x1D390.push("images/" + _0x1CEEA + "Monster_green.png")
				}
				else
				{
					_0x1D390.push("images/" + _0x1CEEA + "Monster_black.png")
				}
			}
		};
		_0x1D39E[0] = getItem(_0x1CEEA + "Kills");
		_0x1CEEA = "mammaPolarBear";
		if (getItem(_0x1CEEA + "Kills") >= 100)
		{
			_0x1D390.push("images/" + _0x1CEEA + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1CEEA + "Kills") >= 30)
			{
				_0x1D390.push("images/" + _0x1CEEA + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1CEEA + "Kills") >= 1)
				{
					_0x1D390.push("images/" + _0x1CEEA + "Monster_green.png")
				}
				else
				{
					_0x1D390.push("images/" + _0x1CEEA + "Monster_black.png")
				}
			}
		};
		_0x1D39E[1] = getItem(_0x1CEEA + "Kills");
		_0x1CEEA = "yeti";
		if (getItem(_0x1CEEA + "Kills") >= 100)
		{
			_0x1D390.push("images/" + _0x1CEEA + "Monster_blue.png")
		}
		else
		{
			if (getItem(_0x1CEEA + "Kills") >= 30)
			{
				_0x1D390.push("images/" + _0x1CEEA + "Monster_yellow.png")
			}
			else
			{
				if (getItem(_0x1CEEA + "Kills") >= 1)
				{
					_0x1D390.push("images/" + _0x1CEEA + "Monster_green.png")
				}
				else
				{
					_0x1D390.push("images/" + _0x1CEEA + "Monster_black.png")
				}
			}
		};
		_0x1D39E[2] = getItem(_0x1CEEA + "Kills");
		var _0x1D3AC = "images/redFightMarker.gif";
		if (Math.min.apply(null, _0x1D39E) >= 100)
		{
			_0x1D3AC = "images/blueFightMarker.gif"
		}
		else
		{
			if (Math.min.apply(null, _0x1D39E) >= 1)
			{
				_0x1D3AC = "images/greenFightMarker.gif"
			}
			else
			{
				for (var _0x1C6B6 = 0; _0x1C6B6 < _0x1D39E.length; _0x1C6B6++)
				{
					if (_0x1D39E[0] > 0)
					{
						_0x1D3AC = "images/yellowFightMarker.gif";
						break
					}
				}
			}
		};
		_0x1D390.push(_0x1D3AC);
		break
	};
	return _0x1D390
}