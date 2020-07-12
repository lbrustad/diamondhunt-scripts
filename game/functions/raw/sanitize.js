/**
 * sanitize extracted from ../../deobfuscated/bundle.js at line 969-981
 *
 * If this file doesn't contain a function, there is an error in ../raw/sanitize.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function sanitize(_0x1E1C8)
{
	const _0x1E1AC = {
		'&': "&amp;"
		, '<': "&lt;"
		, '>': "&gt;"
		, '\"': "&quot;"
		, "\'": "&#x27;"
		, "/": "&#47;"
	};
	const _0x1E1BA = /[&<>"'/]/ig;
	return _0x1E1C8.replace(_0x1E1BA, (_0x1E1D6) => (_0x1E1AC[_0x1E1D6]))
}