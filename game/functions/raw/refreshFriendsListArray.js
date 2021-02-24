/**
 * refreshFriendsListArray extracted from ../../deobfuscated/bundle.js at line 745-753
 *
 * If this file doesn't contain a function, there is an error in ../raw/refreshFriendsListArray.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function refreshFriendsListArray(_0x14DB0)
{
	var _0x14DD3 = _0x14DB0.split("~");
	for (var _0x14C0C = 0; _0x14C0C < _0x14DD3.length; _0x14C0C++)
	{
		global_friendsAndIgnoreList[_0x14DD3[_0x14C0C]] = _0x14DD3[(_0x14C0C + 1)];
		_0x14C0C++
	}
}