/**
 * Code from https://github.com/davidmerfield/randomColor
 */

interface RandomColorOptions
{
	alpha?: number;
	count?: number | null;
	format?: 'hex' | 'hslArray' | 'hsl' | 'hsla' | 'hsvArray' | 'object' | 'rgbArray' | 'rgb' | 'rgba';
	hue?: number | string;
	luminosity?: 'bright' | 'dark' | 'light' | 'random';
	seed?: number;
}
interface ColorEntry
{
	brightnessRange: number[];
	hueRange: number[];
	lowerBounds: (number[])[];
	saturationRange: number[];
}
type Color = number[] | string;

module colorGenerator
{
	// seed to get repeatable colors
	var seed: number | null = null;
	const COLOR_NOT_FOUND: ColorEntry = {
		hueRange: []
		, lowerBounds: []
		, saturationRange: []
		, brightnessRange: []
	};
	const COLOR_BOUNDS: Record<string, { hueRange: number[]; lowerBounds: (number[])[]; }> = {
		'monochrome': {
			hueRange: []
			, lowerBounds: [[0, 0], [100, 0]]
		}
		, 'red': {
			hueRange: [-26, 18]
			, lowerBounds: [[20, 100], [30, 92], [40, 89], [50, 85], [60, 78], [70, 70], [80, 60], [90, 55], [100, 50]]
		}
		, 'orange': {
			hueRange: [19, 46]
			, lowerBounds: [[20, 100], [30, 93], [40, 88], [50, 86], [60, 85], [70, 70], [100, 70]]
		}
		, 'yellow': {
			hueRange: [47, 62]
			, lowerBounds: [[25, 100], [40, 94], [50, 89], [60, 86], [70, 84], [80, 82], [90, 80], [100, 75]]
		}
		, 'green': {
			hueRange: [63, 178]
			, lowerBounds: [[30, 100], [40, 90], [50, 85], [60, 81], [70, 74], [80, 64], [90, 50], [100, 40]]
		}
		, 'blue': {
			hueRange: [179, 257]
			, lowerBounds: [[20, 100], [30, 86], [40, 80], [50, 74], [60, 60], [70, 52], [80, 44], [90, 39], [100, 35]]
		}
		, 'purple': {
			hueRange: [258, 282]
			, lowerBounds: [[20, 100], [30, 87], [40, 79], [50, 70], [60, 65], [70, 59], [80, 52], [90, 45], [100, 42]]
		}
		, 'pink': {
			hueRange: [283, 334]
			, lowerBounds: [[20, 100], [30, 90], [40, 86], [60, 84], [80, 80], [90, 75], [100, 73]]
		}
	};

	// shared color dictionary
	const colorDictionary: Record<string, ColorEntry> = {};
	function defineColor(name: string, hueRange: number[], lowerBounds: (number[])[])
	{
		const [sMin, bMax] = lowerBounds[0];
		const [sMax, bMin] = lowerBounds[lowerBounds.length - 1];
		colorDictionary[name] = {
			hueRange: hueRange,
			lowerBounds: lowerBounds,
			saturationRange: [sMin, sMax],
			brightnessRange: [bMin, bMax]
		};
	}
	function loadColorBounds()
	{
		for (let name in COLOR_BOUNDS)
		{
			defineColor(name, COLOR_BOUNDS[name].hueRange, COLOR_BOUNDS[name].lowerBounds);
		}
	}

	function randomWithin(min = 0, max = 0)
	{
		if (seed === null)
		{
			return Math.floor(min + Math.random()*(max + 1 - min));
		}
		else
		{
			// seeded random algorithm from http://indiegamr.com/generate-repeatable-random-numbers-in-js/
			seed = (seed * 9301 + 49297) % 233280;
			const rnd = seed / 233280.0;
			return Math.floor(min + rnd * (max - min));
		}
	}

	function getColorInfo(hue: number)
	{
		// maps red colors to make picking hue easier
		if (hue >= 334 && hue <= 360)
		{
			hue -= 360;
		}

		for (let colorName in colorDictionary)
		{
			const color = colorDictionary[colorName];
			if (color.hueRange.length > 0 &&
				hue >= color.hueRange[0] &&
				hue <= color.hueRange[1])
			{
				return colorDictionary[colorName];
			}
		}
		return COLOR_NOT_FOUND;
	}

	function getHueRange(colorInput?: string | number)
	{
		let number = typeof colorInput === 'undefined' ? Number.NaN : colorInput;
		if (typeof number === 'string')
		{
			number = parseInt(number, 10);
		}
		if (colorInput && isNaN(number) && colorDictionary.hasOwnProperty(colorInput))
		{
			const color = colorDictionary[colorInput];
			if (color.hueRange.length > 0)
			{
				return color.hueRange;
			}
		}
		else if (!isNaN(number) && number < 360 && number > 0)
		{
			return [number, number];
		}

		return [0, 360];
	}

	function pickHue(options: RandomColorOptions)
	{
		const hueRange = getHueRange(options.hue);
		const hue = randomWithin(hueRange[0], hueRange[1]);
		// instead of storing red as two seperate ranges, we group them, using negative numbers
		if (hue < 0)
		{
			return 360 + hue;
		}
		return hue;
	}

	function getSaturationRange(hue: number)
	{
		return getColorInfo(hue).saturationRange;
	}

	function pickSaturation(hue: number, options: RandomColorOptions)
	{
		if (options.luminosity === 'random')
		{
			return randomWithin(0, 100);
		}
		if (options.hue === 'monochrome')
		{
			return 0;
		}

		let [sMin, sMax] = getSaturationRange(hue);
		switch (options.luminosity)
		{
		case 'bright':
			sMin = 55;
			break;
		case 'dark':
			sMin = sMax - 10;
			break;
		case 'light':
			sMax = 55;
			break;
		}
		return randomWithin(sMin, sMax);
	}

	function getMinimumBrightness(H: number, S: number)
	{
		const lowerBounds = getColorInfo(H).lowerBounds;

		for (var i = 0; i < lowerBounds.length - 1; i++)
		{
			const [s1, v1] = lowerBounds[i];
			const [s2, v2] = lowerBounds[i+1];

			if (S >= s1 && S <= s2)
			{
				const m = (v2 - v1)/(s2 - s1);
				const b = v1 - m*s1;
				return m*S + b;
			}
		}
		return 0;
	}

	function pickBrightness(H: number, S: number, options: RandomColorOptions)
	{
		let bMin = getMinimumBrightness(H, S);
		let bMax = 100;
		switch (options.luminosity)
		{
		case 'dark':
			bMax = bMin + 20;
			break;
		case 'light':
			bMin = (bMax + bMin)/2;
			break;
		case 'random':
			bMin = 0;
			bMax = 100;
			break;
		}
		return randomWithin(bMin, bMax);
	}

	export class HSVColor
	{
		public static fromHSVArray(hsv: number[])
		{
			return new HSVColor(hsv[0], hsv[1], hsv[2]);
		}

		constructor(public H: number, public S: number, public V: number)
		{
		}

		public toHex()
		{
			const rgb = this.toRGB();
			return '#' + this.componentToHex(rgb[0]) + this.componentToHex(rgb[1]) + this.componentToHex(rgb[2]);
		}

		public toHSL()
		{
			const h = this.H;
			const s = this.S / 100;
			const v = this.V / 100;
			const k = (2 - s) * v;
			return [
				h
				, Math.round(s * v / (k < 1 ? k : 2 - k) * 10e3) / 100
				, k / 2 * 100
			];
		}

		public toHSLString(alpha?: number)
		{
			const hsl = this.toHSL();
			if (alpha !== undefined)
			{
				return `hsla(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%, ${alpha})`;
			}
			else
			{
				return `hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)`;
			}
		}

		public toRGB()
		{
			// this doesn't work for the values of 0 and 360 here's the hacky fix
			let h = Math.min(Math.max(this.H, 1), 359);
			// Rebase the h,s,v values
			h = h / 360;
			const s = this.S / 100;
			const v = this.V / 100;

			const h_i = Math.floor(h * 6);
			const f = h * 6 - h_i;
			const p = v * (1 - s);
			const q = v * (1 - f * s);
			const t = v * (1 - (1 - f) * s);
			let r = 256;
			let g = 256;
			let b = 256;

			switch (h_i)
			{
			case 0: r = v; g = t; b = p;  break;
			case 1: r = q; g = v; b = p;  break;
			case 2: r = p; g = v; b = t;  break;
			case 3: r = p; g = q; b = v;  break;
			case 4: r = t; g = p; b = v;  break;
			case 5: r = v; g = p; b = q;  break;
			}

			return [Math.floor(r * 255), Math.floor(g * 255), Math.floor(b * 255)];
		}

		public toRGBString(alpha?: number)
		{
			const rgb = this.toRGB();
			if (alpha !== undefined)
			{
				return `rgba(${rgb.join(', ')}, ${alpha})`;
			}
			else
			{
				return `rgb(${rgb.join(', ')})`;
			}
		}

		private componentToHex(c: number)
		{
			const hex = c.toString(16);
			return hex.length == 1 ? '0' + hex : hex;
		}
	}

	function setFormat(hsv: number[], options: RandomColorOptions)
	{
		const color = HSVColor.fromHSVArray(hsv);
		switch (options.format)
		{
			case 'object':
				return color;
			case 'hsvArray':
				return hsv;
			case 'hslArray':
				return color.toHSL();
			case 'hsl':
				return color.toHSLString();
			case 'hsla':
				return color.toHSLString(options.alpha || Math.random());
			case 'rgbArray':
				return color.toRGB();
			case 'rgb':
				return color.toRGBString();
			case 'rgba':
				return color.toRGBString(options.alpha || Math.random());
			case 'hex':
			default:
				return color.toHex();
		}
	}

	function generateColor(options: RandomColorOptions)
	{
		// pick a hue (H)
		const H = pickHue(options);
		// use H to determine saturation (S)
		const S = pickSaturation(H, options);
		// use S and H to determine brightness (B)
		const B = pickBrightness(H, S, options);
		// return the HSB color in the desired format
		return setFormat([H, S, B], options);
	}

	export function getRandom(options?: RandomColorOptions)
	{
		options = options || {};
		seed = options.seed == null ? null : options.seed;

		// check if we need to generate multiple colors
		if (options.count !== null && options.count !== undefined)
		{
			const colors = [];
			while (options.count > colors.length)
			{
				// Since we're generating multiple colors, the seed has to be incrememented.
				// Otherwise we'd just generate the same color each time...
				if (seed !== null)
				{
					seed += 1;
				}
				colors.push(generateColor(options));
			}
			return colors;
		}

		return generateColor(options);
	}

	export class ColorInterval
	{
		private left: ColorInterval | null = null;
		private right: ColorInterval | null = null;
		private value: number | null = null;
		constructor(private start: number, private end: number)
		{
		}
		public getNextValue(): number
		{
			if (this.value == null)
			{
				this.value = (this.start + this.end) / 2;
				return this.value;
			}
			if (this.left == null)
			{
				this.left = new ColorInterval(this.start, this.value);
				return this.left.getNextValue();
			}
			if (this.right == null)
			{
				this.right = new ColorInterval(this.value, this.end);
				return this.right.getNextValue();
			}
			if (this.left.getHeight() <= this.right.getHeight())
			{
				return this.left.getNextValue();
			}
			else
			{
				return this.right.getNextValue();
			}
		}
		public getHeight(): number
		{
			return 1
				+ (this.left == null ? 0 : this.left.getHeight())
				+ (this.right == null ? 0 : this.right.getHeight())
			;
		}
	}
	let defaultRootInterval = new ColorInterval(0, 360);
	export function getEquallyDistributed(rootInterval = defaultRootInterval)
	{
		return 'hsl(' + rootInterval.getNextValue() + ', 100%, 80%)';
	}

	class Color
	{
		private static hexRegex = /^#(?:[0-9a-f]{3}){1,2}$/i;
		private static rgbRegex = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i;

		public static fromHex(hex: string)
		{
			return new Color(
				parseInt(hex.substr(1, 2), 16)
				, parseInt(hex.substr(3, 2), 16)
				, parseInt(hex.substr(5, 2), 16)
			);
		}

		public static fromRgb(rgb: string)
		{
			const match = rgb.match(this.rgbRegex) as RegExpMatchArray;
			return new Color(
				parseInt(match[1], 10)
				, parseInt(match[2], 10)
				, parseInt(match[3], 10)
			);
		}

		public static fromString(str: string)
		{
			if (this.hexRegex.test(str))
			{
				return this.fromHex(str);
			}
			else if (this.rgbRegex.test(str))
			{
				return this.fromRgb(str);
			}
			else
			{
				throw new Error('Unexpected color format: ' + str);
			}
		}

		constructor(public r: number, public g: number, public b: number)
		{
		}

		public toString(hex = true)
		{
			return '#' + this.toHex(this.r) + this.toHex(this.g) + this.toHex(this.b);
		}

		private toHex(x: number)
		{
			const xStr = x.toString(16);
			return (xStr.length == 1 ? '0' : '') + xStr;
		}
	}
	function ratioColor(color1: Color, color2: Color, ratio: number)
	{
		const color = new Color(
			Math.ceil(color1.r * (1-ratio) + color2.r * ratio)
			, Math.ceil(color1.g * (1-ratio) + color2.g * ratio)
			, Math.ceil(color1.b * (1-ratio) + color2.b * ratio)
		);
		return color.toString();
	}
	export function getColorTransition(value: number, colorStrings: Record<string, string>)
	{
		let smallerValue = -1;
		let biggerValue = Number.MAX_SAFE_INTEGER;
		const colors: Record<string, Color> = {};
		for (let v in colorStrings)
		{
			const vNum = Number(v);
			if (vNum === value)
			{
				return colorStrings[v];
			}
			else if (vNum < value)
			{
				smallerValue = Math.max(smallerValue, vNum);
			}
			else
			{
				biggerValue = Math.min(biggerValue, vNum);
			}
			colors[v] = Color.fromString(colorStrings[v]);
		}
		if (smallerValue === -1)
		{
			return colorStrings[biggerValue];
		}
		if (biggerValue === Number.MAX_SAFE_INTEGER)
		{
			return colorStrings[smallerValue];
		}
		const ratio = (value - smallerValue) / (biggerValue - smallerValue);
		return ratioColor(colors[smallerValue], colors[biggerValue], ratio);
	}

	// populate the color dictionary
	loadColorBounds();
}
