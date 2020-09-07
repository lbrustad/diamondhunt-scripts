const del = require('del');
const es6Template = require('es6-template-strings');
const fs = require('fs');
const gulp = require('gulp');
const gChange = require('gulp-change');
const gJsbeautifier = require('gulp-jsbeautifier');
const gRename = require('gulp-rename');
const gReplace = require('gulp-replace');
// const gSourcemaps = require('gulp-sourcemaps');
const gTypeScript = require('gulp-typescript');
// const gUtil = require('gulp-util');
const gWrapper = require('gulp-wrapper');
const request = require('request');
const runSequence = require('run-sequence');
const through2 = require('through2');

const tsConfig = require('./tsconfig.json');
const entryPoint = tsConfig.files[0];
const packageJson = './package.json';
const licenseFile = './LICENSE';
const userscriptTemplateFile = './dh3UltraChat-template.user.js';
const srcDir = 'src';
const tmpSrcDir = 'src-tmp';

const scriptLinkTemplate = 'https://dh3.diamondhunt.co/js/%name%';
const notObfuscatedPrefix = '// this code was not obfuscated!\r\n';

function bufferWrapper(fn)
{
	return through2.obj((file, encoding, callback) =>
	{
		if (!file)
		{
			throw new Error('Missing file or files.');
		}

		if (file.isBuffer())
		{
			fn(file, encoding, callback);
		}
		else
		{
			callback(null, file);
		}
	});
}



/**
 * clean tmp dir
 */

gulp.task('clean', function (callback)
{
	del(['./' + tmpSrcDir]).then(() => callback(), (error) => callback(error));
});

gulp.task('clean-ref', function ()
{
	return gulp.src('./' + tsConfig.compilerOptions.outFile)
		.pipe(gReplace(/\/\/\/ .+/g, ''))
		.pipe(gulp.dest('.'))
	;
});
gulp.task('clean-backup', function (callback)
{
	del(['./' + tsConfig.compilerOptions.outFile + '.backup']).then(() => callback(), (error) => callback(error));
});



/**
 * task for preparing for release/dev
 */

const getDevOnlyRegex = () => /\s*\/\/ <dev-only>[\s\S]+?\/\/ <\/dev-only>/g;
const getReleaseOnlyRegex = () => /\s*\/\/ <release-only>[\s\S]+?\/\/ <\/release-only>/g;
function prepare(isRelease)
{
	return gulp.src('./' + srcDir + '/**/*.ts')
		.pipe(gReplace(isRelease ? getDevOnlyRegex() : getReleaseOnlyRegex(), ''))
		.pipe(gulp.dest('./' + tmpSrcDir))
	;
}
gulp.task('prepare-release', function ()
{
	return prepare(true);
});
gulp.task('backup-userscript', function ()
{
	return gulp.src('./' + tsConfig.compilerOptions.outFile)
		.pipe(gRename('./' + tsConfig.compilerOptions.outFile + '.backup'))
		.pipe(gulp.dest('.'))
	;
});
gulp.task('rename-userscript', function()
{
	return gulp.src('./' + tsConfig.compilerOptions.outFile)
		.pipe(gRename('./' + tsConfig.compilerOptions.outFile.replace('.user', '-release.user')))
		.pipe(gulp.dest('.'))
	;
});
gulp.task('restore-userscript', function()
{
	return gulp.src('./' + tsConfig.compilerOptions.outFile + '.backup')
		.pipe(gRename('./' + tsConfig.compilerOptions.outFile.replace(/\.backup$/, '')))
		.pipe(gulp.dest('.'))
	;
});
gulp.task('prepare-dev', function ()
{
	return prepare(false);
});



/**
 * compile task
 */

const compileOptions = {
	beautify: true
	, sourcemaps: false
	, userscript: true
};
const tsProjects = gTypeScript.createProject('tsconfig.json', { typescript: require('typescript') });
gulp.task('compile', function ()
{
	const tmpEntryPoint = entryPoint.replace(srcDir + '/', tmpSrcDir + '/');
	let stream = gulp
		.src(tmpEntryPoint)
		.pipe(tsProjects())
	;
	if (compileOptions.sourcemaps)
	{
		stream = stream.pipe(gSourcemaps.write('.'));
	}
	if (compileOptions.beautify)
	{
		stream = stream.pipe(gJsbeautifier({ config: './jsbeautify.json' }))
	}
	if (compileOptions.userscript)
	{
		const pckCfg = JSON.parse(fs.readFileSync(packageJson, 'utf8'));
		const license = fs.readFileSync(licenseFile, 'utf8');
		const licenseComment = license.trim().replace(/(^|\r?\n)/g, '$1 * ');

		const template = fs.readFileSync(userscriptTemplateFile, 'utf8');
		const templateParts = es6Template(template, {
			buildTime: (new Date()).toISOString()
			, licenseComment: licenseComment
			, pckCfg: pckCfg
		}).split('// CONTENT PLACEHOLDER');

		stream = stream.pipe(gWrapper({
			header: templateParts[0]
			, footer: templateParts[1]
		}));
	}
	return stream.pipe(gulp.dest('.'));
});



/**
 * deobfuscating
 */

function preDeobfuscator(text)
{
	function reinsertStrings(text, arrName, arr)
	{
		return text.replace(new RegExp('([^a-zA-Z0-9_\\$]+)(' + arrName.replace(/\$/g, '\\$') + ')\\[(\\d+)\\]', 'g'), (wholeMatch, before, arrName, index) =>
			{
				return before + '"' + arr[index] + '"';
			})
		;
	}
	function betterObjectUsing(text)
	{
		return text.replace(/([^\s,])\["([^"]+)"\]/g, '$1.$2');
	}

	const match = text.match(/var ([^=]+)=\["(.+)"\];/);
	if (!match)
	{
		return notObfuscatedPrefix + text;
	}

	const arrName = match[1];
	const arr = match[2].split('","');
	text = text.replace(match[0], '');
	text = reinsertStrings(text, arrName, arr);
	return betterObjectUsing(betterObjectUsing(text));
}
function SequentialConnection(fn)
{
	this._queue = [];
	this._inuse = false;
	this._fn = fn;
}
SequentialConnection.prototype.start = function (file, encoding, callback)
{
	if (!this._inuse)
	{
		this._inuse = true;
		return true;
	}
	this._queue.push([file, encoding, callback]);
	return false;
};
SequentialConnection.prototype.next = function ()
{
	this._inuse = false;
	if (this._queue.length == 0)
	{
		return;
	}
	const a = this._queue.unshift();
	this._fn(a[0], a[1], a[2]);
};
const jsNiceServerConn = new SequentialConnection(post2JsNice);
function post2JsNice(file, encoding, callback)
{
	// skip not obfuscated code
	if (file.contents.toString().indexOf(notObfuscatedPrefix) !== -1)
	{
		return callback(null, file);
	}
	if (!jsNiceServerConn.start(file, encoding, callback))
	{
		return;
	}

	request.post({
		url: 'http://jsnice.org/beautify?pretty=1&rename=1&types=0&packers=1&transpile=1&suggest=0'
		, headers: {
			'X-Requested-With': 'XMLHttpRequest'
			// , 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
		}
		, body: file.contents.toString()
	}, (err, response, body) =>
	{
		jsNiceServerConn.next();
		if (err)
		{
			return callback(err);
		}

		try
		{
			const res = JSON.parse(body);
			let code = res.js;
			let i = 0;
			let match;
			while ((match = code.match(/_0x[0-9A-F]+/)) != null)
			{
				let varName;
				do
				{
					varName = '_' + (i + 10).toString(36) + '_';
					i++;
				}
				while (new RegExp('\\b' + varName + '\\b').test(code));
				code = code.split(match[0]).join(varName);
			}
			file.contents = new Buffer.from(code);
			callback(null, file);
		}
		catch (err)
		{
			callback(err);
		}
	});
}
gulp.task('deobfuscate', function ()
{
	return gulp.src('./game/obfuscated/*.js')
		.pipe(gChange(preDeobfuscator))
		// send to jsnice
		// .pipe(bufferWrapper(post2JsNice))
		.pipe(gJsbeautifier({ config: './jsbeautify.json' }))
		.pipe(gulp.dest('./game/deobfuscated'))
	;
});

/**
 * Split functions out of bundle.js
 */

async function mkDirs() {
	if (!(await fs.existsSync('./game/functions'))) {
		await fs.mkdirSync('./game/functions/raw', {recursive: true});
		await fs.mkdirSync('./game/functions/nice');
		return;
	}
	if (!(await fs.existsSync('./game/functions/raw'))) {
		await fs.mkdirSync('./game/functions/raw');
	}
	if (!(await fs.existsSync('./game/functions/nice'))) {
		await fs.mkdirSync('./game/functions/nice');
	}
}
/** @param {string[]} lines
 * @param {number} start
 * @param {number} end
 */
async function separateFns(lines, start, end) {
	let name = lines[0];
	name = name.replace(/function\s*([^\(]+).*/, '$1');
	const prefix = `/**
 * ${name} extracted from ../../deobfuscated/bundle.js at line ${start}-${end}
 *
 * If this file doesn't contain a function, there is an error in ../raw/${name}.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/\n\n`;
	await fs.writeFileSync(`./game/functions/raw/${name}.js`, prefix + lines.join('\n'));
}
gulp.task('separate-functions', async function ()
{
	await mkDirs();
	await fs.readFile('./game/deobfuscated/bundle.js', {encoding: 'utf8'}, async (err, data) => {
		if (err) throw err;

		const lines = data.split('\n');
		let tmp = [], currentLine = 0, startLine = 0;
		for (const line of lines) {
			currentLine++;
			if (line.startsWith('function') || tmp.length !== 0) {
				tmp.push(line);
				if (tmp.length === 1) startLine = currentLine;
			}
			if (tmp[tmp.length - 1] === '}') {
				await separateFns(tmp, startLine, currentLine);
				tmp = [];
			}
		}
	});

	return gulp.src('./game/functions/raw/*.js')
		// send to jsnice
		.pipe(bufferWrapper(post2JsNice))
		.pipe(gJsbeautifier({ config: './jsbeautify.json' }))
		.pipe(gulp.dest('./game/functions/nice'));
});


gulp.task('evaluate', function ()
{
	// const serverConn = new SequentialConnection(post2Obfuscater);
	// function post2Obfuscater(file, encoding, callback)
	// {
	// 	if (!serverConn.start(file, encoding, callback))
	// 	{
	// 		return;
	// 	}

	// 	const encoded = encodeURIComponent(file.contents.toString().replace(/\n/g, '\r\n').replace(/\r\r/g, '\r'))
	// 		.replace(/%20/g, '+')
	// 		.replace(/%2A/g, '*')
	// 	;
	// 	request.post({
	// 		url: 'http://javascriptobfuscator.com/Javascript-Obfuscator.aspx'
	// 		// , form: 'UploadLib_Uploader_js=1&__EVENTTARGET=ctl00%24breadcrumbs%24Button1&__EVENTARGUMENT=&__VIEWSTATE=%2FwEPDwULLTEyMjkzMDg0NzQPZBYCZg9kFgICAw9kFgICAQ8WAh4EVGV4dAVfPGxpPjxhIGhyZWY9Jy9zaWduaW4uYXNweCc%2BQWNjb3VudCBMb2dpbjwvYT48L2xpPjxsaT48YSBocmVmPScvcmVnaXN0ZXIuYXNweCc%2BU2lnbiBVcDwvYT48L2xpPiBkGAEFHl9fQ29udHJvbHNSZXF1aXJlUG9zdEJhY2tLZXlfXxYFBRpjdGwwMCRNYWluQ29udGVudCRjYkxpbmVCUgUaY3RsMDAkTWFpbkNvbnRlbnQkY2JJbmRlbnQFHWN0bDAwJE1haW5Db250ZW50JGNiRW5jb2RlU3RyBRtjdGwwMCRNYWluQ29udGVudCRjYk1vdmVTdHIFIGN0bDAwJE1haW5Db250ZW50JGNiUmVwbGFjZU5hbWVzrYDlY21jDy8odEdkC%2FGTJ6LUWqVuv2snHBPEEVjVUE8%3D&__VIEWSTATEGENERATOR=6D198BE1&__EVENTVALIDATION=%2FwEdAAz6eQfy9jnL2vR18mF8mAv7z98O1wgUYy24buon6ZrvqqqZtAOnizNI3Le2cMvhN%2FPlX8ELgqdTSPScxjUoMznXBoDho%2FylNSKmpIoWDnSAdmawNXRoDE8dK6VLlCwtetZ8f2dPhQQre4aI0Iea4dKYmjI5SSrP8%2Fdi9FPKAsCRiSDSoNvpe2qp90wnP2HAWzNs9mdJae9TApAJFRRb54f73WbA4XcESfoeI8EInEzA%2BdxRJK%2FkVxlULg0AsW337%2FIkhugWMbjFggmI4loYjEfu0V9t0MospyCogJpDgk5yQQ%3D%3D&ctl00%24breadcrumbs%24uploader1=&ctl00%24breadcrumbs%24TextBox1=var+dd+%3D+false%3B&ctl00%24breadcrumbs%24TextBox2=&ctl00%24MainContent%24cbMoveStr=on&ctl00%24MainContent%24cbReplaceNames=on&ctl00%24MainContent%24TextBox3=%5E_get_%0D%0A%5E_set_%0D%0A%5E_mtd_'
	// 		, form: 'UploadLib_Uploader_js=1&__EVENTTARGET=ctl00%24breadcrumbs%24Button1&__EVENTARGUMENT=&__VIEWSTATE=%2FwEPDwULLTEyMjkzMDg0NzQPZBYCZg9kFgICAw9kFgICAQ8WAh4EVGV4dAVfPGxpPjxhIGhyZWY9Jy9zaWduaW4uYXNweCc%2BQWNjb3VudCBMb2dpbjwvYT48L2xpPjxsaT48YSBocmVmPScvcmVnaXN0ZXIuYXNweCc%2BU2lnbiBVcDwvYT48L2xpPiBkGAEFHl9fQ29udHJvbHNSZXF1aXJlUG9zdEJhY2tLZXlfXxYFBRpjdGwwMCRNYWluQ29udGVudCRjYkxpbmVCUgUaY3RsMDAkTWFpbkNvbnRlbnQkY2JJbmRlbnQFHWN0bDAwJE1haW5Db250ZW50JGNiRW5jb2RlU3RyBRtjdGwwMCRNYWluQ29udGVudCRjYk1vdmVTdHIFIGN0bDAwJE1haW5Db250ZW50JGNiUmVwbGFjZU5hbWVzrYDlY21jDy8odEdkC%2FGTJ6LUWqVuv2snHBPEEVjVUE8%3D&__VIEWSTATEGENERATOR=6D198BE1&__EVENTVALIDATION=%2FwEdAAz6eQfy9jnL2vR18mF8mAv7z98O1wgUYy24buon6ZrvqqqZtAOnizNI3Le2cMvhN%2FPlX8ELgqdTSPScxjUoMznXBoDho%2FylNSKmpIoWDnSAdmawNXRoDE8dK6VLlCwtetZ8f2dPhQQre4aI0Iea4dKYmjI5SSrP8%2Fdi9FPKAsCRiSDSoNvpe2qp90wnP2HAWzNs9mdJae9TApAJFRRb54f73WbA4XcESfoeI8EInEzA%2BdxRJK%2FkVxlULg0AsW337%2FIkhugWMbjFggmI4loYjEfu0V9t0MospyCogJpDgk5yQQ%3D%3D&ctl00%24breadcrumbs%24uploader1=&ctl00%24breadcrumbs%24TextBox1=' + encoded + '&ctl00%24breadcrumbs%24TextBox2=&ctl00%24MainContent%24cbMoveStr=on&ctl00%24MainContent%24cbReplaceNames=on&ctl00%24MainContent%24TextBox3=%5E_get_%0D%0A%5E_set_%0D%0A%5E_mtd_'
	// 		// , form: {
	// 		// 	'UploadLib_Uploader_js': '1'
	// 		// 	, '__EVENTTARGET': 'ctl00$breadcrumbs$Button1'
	// 		// 	, '__EVENTARGUMENT': ''
	// 		// 	, '__VIEWSTATE': '/wEPDwULLTEyMjkzMDg0NzQPZBYCZg9kFgICAw9kFgICAQ8WAh4EVGV4dAVfPGxpPjxhIGhyZWY9Jy9zaWduaW4uYXNweCc+QWNjb3VudCBMb2dpbjwvYT48L2xpPjxsaT48YSBocmVmPScvcmVnaXN0ZXIuYXNweCc+U2lnbiBVcDwvYT48L2xpPiBkGAEFHl9fQ29udHJvbHNSZXF1aXJlUG9zdEJhY2tLZXlfXxYFBRpjdGwwMCRNYWluQ29udGVudCRjYkxpbmVCUgUaY3RsMDAkTWFpbkNvbnRlbnQkY2JJbmRlbnQFHWN0bDAwJE1haW5Db250ZW50JGNiRW5jb2RlU3RyBRtjdGwwMCRNYWluQ29udGVudCRjYk1vdmVTdHIFIGN0bDAwJE1haW5Db250ZW50JGNiUmVwbGFjZU5hbWVzrYDlY21jDy8odEdkC/GTJ6LUWqVuv2snHBPEEVjVUE8='
	// 		// 	, '__VIEWSTATEGENERATOR': '6D198BE1'
	// 		// 	, '__EVENTVALIDATION': '/wEdAAz6eQfy9jnL2vR18mF8mAv7z98O1wgUYy24buon6ZrvqqqZtAOnizNI3Le2cMvhN/PlX8ELgqdTSPScxjUoMznXBoDho/ylNSKmpIoWDnSAdmawNXRoDE8dK6VLlCwtetZ8f2dPhQQre4aI0Iea4dKYmjI5SSrP8/di9FPKAsCRiSDSoNvpe2qp90wnP2HAWzNs9mdJae9TApAJFRRb54f73WbA4XcESfoeI8EInEzA+dxRJK/kVxlULg0AsW337/IkhugWMbjFggmI4loYjEfu0V9t0MospyCogJpDgk5yQQ=='
	// 		// 	, 'ctl00$breadcrumbs$uploader1': ''
	// 		// 	, 'ctl00$breadcrumbs$TextBox1': 'var dd = false;'/*encodeURI(file.contents.toString().replace(/ /g, '+'))*/
	// 		// 	, 'ctl00$breadcrumbs$TextBox2': ''
	// 		// 	, 'ctl00$MainContent$cbMoveStr': 'on'
	// 		// 	, 'ctl00$MainContent$cbReplaceNames': 'on'
	// 		// 	, 'ctl00$MainContent$TextBox3': '^_get_\r\n^_set_\r\n^_mtd_'
	// 		// }
	// 		, headers: {
	// 			'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8'
	// 			// , 'Accept-Encoding': 'gzip, deflate'
	// 			, 'Accept-Language': 'en-US,en;q=0.8'
	// 			, 'Cache-Control': 'max-age=0'
	// 			, 'Connection': 'keep-alive'
	// 			, 'Content-Length': '1221'
	// 			, 'Content-Type': 'application/x-www-form-urlencoded'
	// 			, 'Cookie': '__cfduid=da812d7f41b2e16e4f7bf7f4418dce4371498649059'
	// 			, 'Host': 'javascriptobfuscator.com'
	// 			, 'Origin': 'http://javascriptobfuscator.com'
	// 			, 'Referer': 'http://javascriptobfuscator.com/Javascript-Obfuscator.aspx'
	// 			, 'Upgrade-Insecure-Requests': '1'
	// 			, 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36'
	// 		}
	// 		// UploadLib_Uploader_js=1&__EVENTTARGET=ctl00%24breadcrumbs%24Button1&__EVENTARGUMENT=&__VIEWSTATE=%2FwEPDwULLTEyMjkzMDg0NzQPZBYCZg9kFgICAw9kFgICAQ8WAh4EVGV4dAVfPGxpPjxhIGhyZWY9Jy9zaWduaW4uYXNweCc%2BQWNjb3VudCBMb2dpbjwvYT48L2xpPjxsaT48YSBocmVmPScvcmVnaXN0ZXIuYXNweCc%2BU2lnbiBVcDwvYT48L2xpPiBkGAEFHl9fQ29udHJvbHNSZXF1aXJlUG9zdEJhY2tLZXlfXxYFBRpjdGwwMCRNYWluQ29udGVudCRjYkxpbmVCUgUaY3RsMDAkTWFpbkNvbnRlbnQkY2JJbmRlbnQFHWN0bDAwJE1haW5Db250ZW50JGNiRW5jb2RlU3RyBRtjdGwwMCRNYWluQ29udGVudCRjYk1vdmVTdHIFIGN0bDAwJE1haW5Db250ZW50JGNiUmVwbGFjZU5hbWVzrYDlY21jDy8odEdkC%2FGTJ6LUWqVuv2snHBPEEVjVUE8%3D&__VIEWSTATEGENERATOR=6D198BE1&__EVENTVALIDATION=%2FwEdAAz6eQfy9jnL2vR18mF8mAv7z98O1wgUYy24buon6ZrvqqqZtAOnizNI3Le2cMvhN%2FPlX8ELgqdTSPScxjUoMznXBoDho%2FylNSKmpIoWDnSAdmawNXRoDE8dK6VLlCwtetZ8f2dPhQQre4aI0Iea4dKYmjI5SSrP8%2Fdi9FPKAsCRiSDSoNvpe2qp90wnP2HAWzNs9mdJae9TApAJFRRb54f73WbA4XcESfoeI8EInEzA%2BdxRJK%2FkVxlULg0AsW337%2FIkhugWMbjFggmI4loYjEfu0V9t0MospyCogJpDgk5yQQ%3D%3D&ctl00%24breadcrumbs%24uploader1=&ctl00%24breadcrumbs%24TextBox1=var+dd+%3D+false%3B&ctl00%24breadcrumbs%24TextBox2=&ctl00%24MainContent%24cbMoveStr=on&ctl00%24MainContent%24cbReplaceNames=on&ctl00%24MainContent%24TextBox3=%5E_get_%0D%0A%5E_set_%0D%0A%5E_mtd_
	// 		// UploadLib_Uploader_js=1&__EVENTTARGET=ctl00%24breadcrumbs%24Button1&__EVENTARGUMENT=&__VIEWSTATE=%2FwEPDwULLTEyMjkzMDg0NzQPZBYCZg9kFgICAw9kFgICAQ8WAh4EVGV4dAVfPGxpPjxhIGhyZWY9Jy9zaWduaW4uYXNweCc%2BQWNjb3VudCBMb2dpbjwvYT48L2xpPjxsaT48YSBocmVmPScvcmVnaXN0ZXIuYXNweCc%2BU2lnbiBVcDwvYT48L2xpPiBkGAEFHl9fQ29udHJvbHNSZXF1aXJlUG9zdEJhY2tLZXlfXxYFBRpjdGwwMCRNYWluQ29udGVudCRjYkxpbmVCUgUaY3RsMDAkTWFpbkNvbnRlbnQkY2JJbmRlbnQFHWN0bDAwJE1haW5Db250ZW50JGNiRW5jb2RlU3RyBRtjdGwwMCRNYWluQ29udGVudCRjYk1vdmVTdHIFIGN0bDAwJE1haW5Db250ZW50JGNiUmVwbGFjZU5hbWVzrYDlY21jDy8odEdkC%2FGTJ6LUWqVuv2snHBPEEVjVUE8%3D&__VIEWSTATEGENERATOR=6D198BE1&__EVENTVALIDATION=%2FwEdAAz6eQfy9jnL2vR18mF8mAv7z98O1wgUYy24buon6ZrvqqqZtAOnizNI3Le2cMvhN%2FPlX8ELgqdTSPScxjUoMznXBoDho%2FylNSKmpIoWDnSAdmawNXRoDE8dK6VLlCwtetZ8f2dPhQQre4aI0Iea4dKYmjI5SSrP8%2Fdi9FPKAsCRiSDSoNvpe2qp90wnP2HAWzNs9mdJae9TApAJFRRb54f73WbA4XcESfoeI8EInEzA%2BdxRJK%2FkVxlULg0AsW337%2FIkhugWMbjFggmI4loYjEfu0V9t0MospyCogJpDgk5yQQ%3D%3D&ctl00%24breadcrumbs%24uploader1=&ctl00%24breadcrumbs%24TextBox1=var%2Bdd%2B%3D%2Bfalse%3B&ctl00%24breadcrumbs%24TextBox2=&ctl00%24MainContent%24cbMoveStr=on&ctl00%24MainContent%24cbReplaceNames=on&ctl00%24MainContent%24TextBox3=%5E_get_%0D%0A%5E_set_%0D%0A%5E_mtd_
	// 	}, (err, response, body) =>
	// 	{
	// 		// serverConn.next();
	// 		if (err)
	// 		{
	// 			return callback(err);
	// 		}

	// 		console.log('response:', stringifyCyclicJSON(response, 10));
	// 		// const res = body
	// 		// 	.replace(
	// 		// 		/^[\s\S]*<textarea name="ctl00\$breadcrumbs\$TextBox1"/
	// 		// 		, '<textarea name="ctl00$breadcrumbs$TextBox1"'
	// 		// 	)
	// 		// 	.replace(
	// 		// 		/<\/textarea>\s+<\/div>\s+<\/div>\s+<\/div>\s+<\/div>\s+<div class="container content">[\s\S]+$/
	// 		// 		, '</textarea>'
	// 		// 	)
	// 		// ;
	// 		// console.log('res:', res);
	// 		throw new Error('END HERE');
	// 		// try
	// 		// {
	// 		// 	const res = JSON.parse(body);
	// 		// 	file.contents = new Buffer.from(res.js);
	// 		// 	callback(null, file);
	// 		// }
	// 		// catch (err)
	// 		// {
	// 		// 	callback(err);
	// 		// }
	// 	});
	// }

	return gulp.src('./game/obfuscated-manually/*.js')
		.pipe(gChange(preDeobfuscator))
		// send to jsnice
		.pipe(bufferWrapper(post2JsNice))
		.pipe(gJsbeautifier({ config: './jsbeautify.json' }))
		.pipe(gulp.dest('./game/deobfuscated'))
	;
});



/**
 * downloading game code (obfuscated)
 */

gulp.task('download', function ()
{
	function download(file, encoding, callback)
	{
		const url = scriptLinkTemplate.replace('%name%', file.relative);
		request.get(url, (err, response, body) =>
		{
			if (err)
			{
				return callback(err);
			}

			try
			{
				file.contents = new Buffer.from(body);
				callback(null, file);
			}
			catch (err)
			{
				callback(err);
			}
		});
	};

	return gulp.src('./game/obfuscated/*.js')
		.pipe(bufferWrapper(download))
		.pipe(gulp.dest('./game/obfuscated'))
	;
});



/**
 * watch task
 */
function watch ()
{
	// remove a leading "./" which makes the path absolute and prevents gulp.watch from triggering file events (like add or unlink) correctly
	gulp.watch('src/**/*.ts', ['build']);
	// watch package.json for version number
	gulp.watch(packageJson, ['build']);
	gulp.watch(licenseFile, ['build']);
	gulp.watch(userscriptTemplateFile, ['build']);
}

gulp.task('watch', watch);



/**
 * task bundles
 */
gulp.task('build', function (callback)
{
	runSequence(
		'prepare-dev'
		, 'compile'
		, callback
	);
});
gulp.task('release', function (callback)
{
	runSequence(
		'prepare-release'
		, 'backup-userscript'
		, 'compile'
		, ['clean', 'clean-ref']
		, 'rename-userscript'
		, 'restore-userscript'
		, 'clean-backup'
		, callback
	);
});

gulp.task('default', watch);

gulp.task('update', function (callback)
{
	runSequence(
		'download'
		, 'deobfuscate'
		, callback
	);
});
