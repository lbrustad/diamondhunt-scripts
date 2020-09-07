/**
 * sanitize extracted from ../../deobfuscated/bundle.js at line 1287-1299
 *
 * If this file doesn't contain a function, there is an error in ../raw/sanitize.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function sanitize(_0x74AC)
{
	const _0x7472 = {
		'&': "&amp;"
		, '<': "&lt;"
		, '>': "&gt;"
		, '\"': "&quot;"
		, "\'": "&#x27;"
		, "/": "&#47;"
	};
	const _0x748F = /[&<>"'/]/ig;
	return _0x74AC.replace(_0x748F, (_0x74C9) => (_0x7472[_0x74C9]))
}