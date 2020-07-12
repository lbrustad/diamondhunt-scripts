/**
 * getMonsterObject extracted from ../../deobfuscated/bundle.js at line 10156-10329
 *
 * If this file doesn't contain a function, there is an error in ../raw/getMonsterObject.js
 * You can fix it manually and use http://jsnice.org/ to make it nice
 **/

function getMonsterObject(_0x1D1EC)
{
	if (window.chickenMonsterObj == null)
	{
		chickenMonsterObj = new ChickenMonster();
		chickenMonsterObj.preloadImages()
	};
	if (window.skyChickenMonsterObj == null)
	{
		skyChickenMonsterObj = new SkyChickenMonster();
		skyChickenMonsterObj.preloadImages()
	};
	if (window.bushyMonsterObj == null)
	{
		bushyMonsterObj = new BushyMonster();
		bushyMonsterObj.preloadImages()
	};
	if (window.fireHawkMonsterObj == null)
	{
		fireHawkMonsterObj = new FireHawkMonster();
		fireHawkMonsterObj.preloadImages()
	};
	if (window.lavaAlienMonsterObj == null)
	{
		lavaAlienMonsterObj = new LavaAlienMonster();
		lavaAlienMonsterObj.preloadImages()
	};
	if (window.babyPolarBearMonsterObj == null)
	{
		babyPolarBearMonsterObj = new BabyPolarBearMonster();
		babyPolarBearMonsterObj.preloadImages()
	};
	if (window.faradoxMinionObj == null)
	{
		faradoxMinionObj = new FaradoxMinionMonster();
		faradoxMinionObj.preloadImages()
	};
	if (window.faradoxMinion2Obj == null)
	{
		faradoxMinion2Obj = new FaradoxMinionMonster2();
		faradoxMinion2Obj.preloadImages()
	};
	if (window.skeletonTreeMonsterObj == null)
	{
		skeletonTreeMonsterObj = new SkeletonTreeMonster()
	};
	if (window.ratMonsterObj == null)
	{
		ratMonsterObj = new RatMonster();
		ratMonsterObj.preloadImages()
	};
	if (_0x1D1EC == "bee" && window.beeMonsterObj == null)
	{
		beeMonsterObj = new BeeMonster();
		beeMonsterObj.preloadImages()
	};
	if (_0x1D1EC == "bat" && window.batMonsterObj == null)
	{
		batMonsterObj = new BatMonster();
		batMonsterObj.preloadImages()
	};
	if (_0x1D1EC == "fireMage" && window.fireMageMonsterObj == null)
	{
		fireMageMonsterObj = new FireMageMonster();
		fireMageMonsterObj.preloadImages()
	};
	if (_0x1D1EC == "boneHead" && window.boneHeadMonsterObj == null)
	{
		boneHeadMonsterObj = new BoneHeadMonster();
		boneHeadMonsterObj.preloadImages()
	};
	if (window.snakeMonsterObj == null)
	{
		snakeMonsterObj = new SnakeMonster();
		snakeMonsterObj.preloadImages()
	};
	if (window.bearMonsterObj == null)
	{
		bearMonsterObj = new BearMonster();
		bearMonsterObj.preloadImages()
	};
	if (window.bearPackMonsterObj == null)
	{
		bearPackMonsterObj = new BearPackMonster();
		bearPackMonsterObj.preloadImages()
	};
	if (window.spiderMonsterObj == null)
	{
		spiderMonsterObj = new SpiderMonster();
		spiderMonsterObj.preloadImages()
	};
	if (window.skeletonMonsterObj == null)
	{
		skeletonMonsterObj = new SkeletonMonster();
		skeletonMonsterObj.preloadImages()
	};
	if (window.yetiMonsterObj == null)
	{
		yetiMonsterObj = new YetiMonster();
		yetiMonsterObj.preloadImages()
	};
	if (window.mammaPolarBearObj == null)
	{
		mammaPolarBearObj = new MammaPolarBearMonster();
		mammaPolarBearObj.preloadImages()
	};
	if (window.giantSnakeMonsterObj == null)
	{
		giantSnakeMonsterObj = new GiantSnakeMonster();
		giantSnakeMonsterObj.preloadImages()
	};
	if (window.entMonsterObj == null)
	{
		entMonsterObj = new EntMonster();
		entMonsterObj.preloadImages()
	};
	if (window.thiefMonsterObj == null)
	{
		thiefMonsterObj = new ThiefMonster();
		thiefMonsterObj.preloadImages()
	};
	switch (_0x1D1EC)
	{
	case "chicken":
		return chickenMonsterObj;
	case "bushy":
		return bushyMonsterObj;
	case "fireHawk":
		return fireHawkMonsterObj;
	case "lavaAlien":
		return lavaAlienMonsterObj;
	case "babyPolarBear":
		return babyPolarBearMonsterObj;
	case "skeletonTree":
		return skeletonTreeMonsterObj;
	case "rat":
		return ratMonsterObj;
	case "bee":
		return beeMonsterObj;
	case "bat":
		return batMonsterObj;
	case "snake":
		return snakeMonsterObj;
	case "mammaPolarBear":
		return mammaPolarBearObj;
	case "fireMage":
		return fireMageMonsterObj;
	case "ent":
		return entMonsterObj;
	case "thief":
		return thiefMonsterObj;
	case "faradoxMinion":
		return faradoxMinionObj;
	case "faradoxMinion2":
		return faradoxMinion2Obj;
	case "skyChicken":
		return skyChickenMonsterObj;
	case "yeti":
		return yetiMonsterObj;
	case "giantSnake":
		return giantSnakeMonsterObj;
	case "bear":
		return bearMonsterObj;
	case "bearPack":
		return bearPackMonsterObj;
	case "spider":
		return spiderMonsterObj;
	case "skeleton":
		return skeletonMonsterObj;
	case "boneHead":
		return boneHeadMonsterObj
	};
	return "none"
}