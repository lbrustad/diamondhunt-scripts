/// <reference path="features/chat.ts" />

declare var buildTime: Date;
declare var version: string;
declare var win: Window;
export interface InitializableModule
{
	init: () => void;
	NAME: string;
}

function init() {
	const features: InitializableModule[] = [
		chat
	];

	for (const module of features) {
		try {
			module.init();
			console.log(`Initialized module: ${module.NAME}`);
		} catch (err) {
			console.log(`Failed initializing module: ${module.NAME}`);
		}
	}
}

init();