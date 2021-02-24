/**
 * sanitize extracted from ../../deobfuscated/bundle.js at line 1539-1554
 *
 * If this file doesn't contain a function, there is an error in ../raw/sanitize.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function sanitize(_0x19C07)
{
	const _0x19BC1 = {
		'&': "&amp;"
		, '<': "&lt;"
		, '>': "&gt;"
		, '\"': "&quot;"
		, "\'": "&#x27;"
		, "/": "&#47;"
	};
	const _0x19BE4 = /[&<>"'/]/ig;
	return _0x19C07.replace(_0x19BE4, (_0x19C2A) =>
	{
		return (_0x19BC1[_0x19C2A])
	})
}